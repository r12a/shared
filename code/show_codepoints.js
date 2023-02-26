// functions to display a panel listing codepoints in a string
// used in script pages, pickers, and ...

// ALSO NEEDED: 
// shared/code/scriptGroups.js
// shared/code/all-names.js

if (typeof trace === 'undefined') trace = false  // don't use this: here for backwards compat
if (typeof traceSet === 'undefined') traceSet = new Set([])


function initialiseShowNames (base, target) {
    if (trace) console.log('initialiseShowNames(', base, target,')  Add onclick function to all .ex elements to display in panel')
    // add function to all images with class ex
    // function will display character by character names for example in the panel
    // there is an augmented version of this function in functions.js (to deal with listitems)
    // base (string), path for link to character detail
    // local: examples e
    // calls shownames_setImgOnclick shownames_setOnclick

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') { base = '' }
	if(typeof target === 'undefined') { target = '' } 
	
	var examples = document.querySelectorAll('.ex')
	for (var e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() === 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}
	}




function shownames_setImgOnclick ( node, base, target ) {
    if (traceSet.has('shownames_setImgOnclick')) console.log('shownames_setImgOnclick(', node, base, target,')')
    // called from initialiseShowNames
    
    var alt=''
    var charInfo=''
    var ipa=''
    
    alt = node.alt
    if (alt == '') return
    //console.log('>>> ALT', alt)
    //console.log('>>> charINFO', charInfo)
    if (charInfo && charInfo[2]) node.dataset.ipa = charInfo[2]
    
	node.onclick = function(){ showNameDetails(node.alt, getLanguage(node), base, target, document.getElementById('panel'), "", getTransliteration(node), node.dataset.ipa ) }
	}



function shownames_setOnclick ( node, base, target ) {
    if (traceSet.has('shownames_setOnclick')) console.log('shownames_setOnclick(', node.textContent, base, target,')')
    // called from initialiseShowNames (both here and in functions.js)
    // local list
    if (node.onclick) return
    
    // check whether this is a list
    var list = ''
    if (node.classList.contains('list')) list = 'y'
    
	node.onclick = function(){ showNameDetails(node.textContent, getLanguage(node), base, target, document.getElementById('panel'), list, getTransliteration(node)) }
	}




function getLanguage(node) {
	// given a node, returns lang value of node or nearest parent
    // called by onclick created by shownames_setOnclick
	if(node.lang) return node.lang
	else if(node.parentNode) return getLanguage(node.parentNode)
	else return ''
	}

function getTransliteration (node) {
	// given a node, returns any span.trans
    // called by onclick created by shownames_setOnclick
	if (node.parentNode.classList.contains('charExample')) {
		translit = node.parentNode.querySelector('.trans')
		if(translit !== null) return translit.textContent
		else return ''
		}
	else return ''
	}








function transliteratePanel (str, lang) {
// transliterate the rb tags in the panel

if (traceSet.has('transliteratePanel')) console.log('transliteratePanel(',str,lang,') AutoTranslitArray',lang, autoTranslitArray[lang])

// exit if this isn't a full orthography page
if (typeof autoTranslitArray === 'undefined') return

var strArray = [...str]
str = ''

var exclusions = new Set(['(',')','[',']','.',' '])

// fudge because in notes autoTranslitArray has a language level which is not present in pickers
if (autoTranslitArray[lang]) {
    for (i=0;i<strArray.length;i++) {
        if (autoTranslitArray[lang][strArray[i]]) str += autoTranslitArray[lang][strArray[i]]
        else if (strArray[i] === ' ') str += ''
        else str += '–'
        }
    }
else {
    for (i=0;i<strArray.length;i++) {
        if (autoTranslitArray[strArray[i]]) str += autoTranslitArray[strArray[i]]
        else str += ''
        }
    }

return str.trim()
}









function showNameDetailsX (chars, clang, base, target, panel, list, translit, ipa) {
    if (traceSet.has('showNameDetails')) console.log('showNameDetails (',chars, clang, base, target, panel, list, translit, ipa,')\n\tGet the list of characters for an example and display their names')
    // called by onclick created by shownames_setOnclick & shownames_setImgOnclick & listAll
    // chars (string), alt text of example
    // clang (string), lang attribute value of example img
    // base (string), path for link to character detail
    // target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
    // list (string), if not null, indicates that spaces and nbsp should be ignored
    // local out charArray chardiv charimg thename thelink hex dec blockname blockfile c
    // global charData pickerDir
    // calls getScriptGroup

    // to show per-grapheme ipa the ipa transcriptions should have § as grapheme separator (and syllables should be separated by '.'). Unpronounced segments are represented by – (en hyphen).  Monosyllabic words don't need any extra stuff.
    // កន្ត្រៃ|scissors|kɑː§n.§t§raj§–

    // locals
    var dir, characterList, graphemes, ptr, transcriptions, gloss, charArray
	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

	// check whether the calling page has set a base and target window: if not base, point to UniView
	if(typeof base === 'undefined' || base === '') { base = '../../uniview/index.html?char=' }
	if(typeof target === 'undefined') { target = 'c' }
	if(typeof list === 'undefined') { list = null }
	if(typeof translit === 'undefined') { translit = '' }
	  
	// clear and show the panel
	panel.innerHTML = ''
	panel.style.display = 'block'
    dir = ''
    if (typeof window.direction === 'string') dir = window.direction
    else if (typeof template !== 'undefined' && typeof template.direction === 'string') dir = template.direction
    
    
	var out = '<div id="ruby">'
	
    // get any IPA data provided - should be pre-separated for graphemes by §
    if (typeof ipa === 'string' && ipa !== '') ipa = ipa.split('§')
    else ipa = false
    
    
	// add the example to the panel as a title
    characterList = [...chars]
    graphemes = []
    ptr = -1
    for (var c=0;c<characterList.length;c++) {
        if (window.marks && window.marks.has(characterList[c]) && c !== 0) graphemes[ptr] += characterList[c]
        else {
            ptr++
            graphemes[ptr] = characterList[c]
            }
        }

    transcriptions = []
    for (var t=0;t<graphemes.length;t++) {
        transcriptions[t] = transliteratePanel(graphemes[t], clang)
        }
    
    if (traceSet.has('showNameDetails')) {
        console.log('graphemes: ',graphemes)
        console.log('transcriptions: ',transcriptions)
        console.log('ipa: ',ipa)
        }


    // draw the glosses
    if (location.toString().includes('picker')) var iconURL = '../../scripts/common29/icons/copytiny.svg'
    else iconURL = '../common29/icons/copytiny.svg'
    gloss = '<div class="multilineGlossedText">'
    for (t=-1;t<graphemes.length;t++) {
        if (t===-1) {
            gloss += `<div class="stack"><span class="rt translitGloss" lang="und-fonipa" title="Transliteration of the text."><img src="${ iconURL }" class="copyIcon" onclick="copyPanelText('.translitGloss')" title="Copy the transliteration." alt="Copy transliteration"></span><span class="rb"><img src="${ iconURL }" onclick="copyPanelText('.rb')" title="Copy the text." alt="Copy text"></span>`
            if (ipa !== false) {
                if (ipa[t+1]) gloss += `<span class="rt IPAGloss" lang="und-fonipa" title="IPA transcription of the text."><img src="${ iconURL }" onclick="copyPanelText('.IPAGloss')" title="Copy the IPA transcription." alt="Copy IPA"></span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        else {
            gloss += ` <div class="stack"><span class="rt translitGloss" lang="und-fonipa">${ transcriptions[t] }</span><span class="rb">${ graphemes[t] }</span>`
            if (ipa !== false) {
                if (ipa[t]) gloss += `<span class="rt IPAGloss" lang="und-fonipa">${ ipa[t] }</span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        }
    gloss += '</div>'

	//out += `<div dir="${ dir }" class="ex" lang="${ clang }" id="title">${ gloss }</div>`
    // removing the alternating direction so that IPA reads better
	//out += `<div dir="${ window.blockDirection }" class="ex" lang="${ clang }" id="title">${ gloss }</div>`
	out += `<div dir="ltr" class="glossContainer" lang="${ clang }" id="title">${ gloss }</div>`
    
        
    
    // add instructions line
	out += '<p id="advice" style="line-height:1;">Glosse lines are transliteration/text/IPA.<br>Click on character names below for detailed information.</p>'
	
	// create a list of characters
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    charArray = [...chars]
    
    if (traceSet.has('showNameDetails')) console.log('charArray: ',charArray)

    out += '<div id="listOfCharacters">'
	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
 
        //if (traceSet.has('showNameDetails')) console.log('charData: ',charData)
        //if (traceSet.has('showNameDetails')) console.log('charArray[c]: ',charArray[c])

		if (charData[charArray[c]]) {
            blockname = getScriptGroup(dec, false)
            blockfile = getScriptGroup(dec, true)
            //console.log(dec,blockfile)
            isInBlock = spreadsheetRows[charArray[c]]?spreadsheetRows[charArray[c]][cols['block']]:''
            
			out += '<div class="panelCharacter">'
			//if (blockfile) {
			if (isInBlock) {
				//out += `<a target="${ target }" href="`
				out += `<span style="display:inline-block; font-size:1.5rem; min-width: 2rem;">${ charArray[c] }</span>`
				out += `<a target="c" href="`
				//if (base === '../../uniview/index.html?char=') out += base+hex
				//else out += '../../scripts/'+blockfile+'/block.html#char'+hex
				out += '../../scripts/'+blockfile+'/block.html#char'+hex
				out += '">'
				//out += '<img src="'+'../../c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex + ' '+charData[charArray[c]]
				out += '</a>\n'
				}
			else {
				out += '<img src="'+'../../c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex+' '+charData[charArray[c]]+'\n'
				}
			}
		else {
			//out += `<a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/Basic_Latin/005F.png" alt="U+${ hex }"> U+${ hex } No data for this character</a>`
			out += `<div class="panelCharacter"><a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/${ getScriptGroup(dec, false) }/${ hex }.png" alt="${ charArray[c] }"> U+${ hex } No data for this character</a></div>`
			}
		out += '</div>'
		}
	out += '</div>'
	
    
	// write out the bottom line
	out += '<p style="text-align:left; margin-block-start: 1em;" id="panelSharingLine">'
    out += '<button onclick="document.getElementById(\'panelShare\').style.display=\'block\'">Export</button> \u00A0 '
    out += '<button onclick="copyPanelList()">Copy list</button> \u00A0 '
	
	// add a trigger to produce a list with phonetics
    out += '<textarea id="panelCopyField" style="height:1px;width:1px;margin-inline-start:1em;"></textarea>'
	//out += ' <span onclick="alert(getPhonemeList());" style="pointer:cursor;">P</span>'
	
	// add a close button
	out += '<p style="text-align:right"><img src="../../shared/images/close.png" style="cursor:pointer;" id="character_panel_close_button" alt="Close"'
	out += ' onclick="document.getElementById(\'panel\').style.display = \'none\'"'
	out += '></p>'



    out += '<div id="panelShare" style="display:none;">'
    
	// add a link to analysestring
	out += `<div><a href="../../app-analysestring/index.html?chars=${ chars }" target="_blank" onclick="document.getElementById('panelShare').style.display='none'">Details</a></div>`

	// add a link to uniview
	out += `<div><a target="_blank" href="../../uniview/index.html?charlist=${ chars }" onclick="document.getElementById('panelShare').style.display='none'">UniView</a></div>`
	
	// add a link to the grapheme segmenter app
	out += `<div><a target="_blank" href="../apps/graphemes/index.html?gc=${ chars }" onclick="document.getElementById('panelShare').style.display='none'" title="Send the string to the grapheme segmenter app.">Graphemes</a></div>`
	
	// add a link to the character app named in window.pickerDir
    if (window.pickerDir) {
	   out += `<div><a target="_blank" href="../../pickers/${ window.pickerDir }/index.html?text=${ chars }" onclick="document.getElementById('panelShare').style.display='none'">Character App</a></div>`
       }

    // add a link to the _vocab page
    if (typeof window.languageName === 'undefined') var fragid = ''
    else fragid = '#'+window.languageName

    // figure out where to find the url for the _vocab page
    if (typeof template !== 'undefined' && typeof template.vocablocation === 'string') var url = `../../scripts/{$ template.vocablocation }.html`
    else url = `${ window.langTag }_vocab`
    
    if (typeof window.removeVowels === 'function') chars = removeVowels(chars)
    
    //out += `<a target="wiktionary" href="https://en.wiktionary.org/wiki/${ chars }${ fragid }">Wiktionary</a>`
    out += `<a target="termbase" href="${ url }.html?q=${ chars }">Term base</a>`
	
    out += '<p style="text-align:right"><img src="../common28/icons/close.png" style="cursor:pointer;" id="character_panelshare_close_button" alt="Close"'
	out += ` onclick="document.getElementById('panelShare').style.display='none'"`
	out += '></p>'
    out += '</div>'

	panel.innerHTML = out
	}










function showNameDetails (chars, clang, base, target, panel, list, translit, ipa) {
    if (traceSet.has('showNameDetails')) console.log('showNameDetails (',chars, clang, base, target, panel, list, translit, ipa,')\n\tGet the list of characters for an example and display their names')
    // called by onclick created by shownames_setOnclick & shownames_setImgOnclick & listAll
    // chars (string), alt text of example
    // clang (string), lang attribute value of example img
    // base (string), path for link to character detail
    // target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
    // list (string), if not null, indicates that spaces and nbsp should be ignored
    // local out charArray chardiv charimg thename thelink hex dec blockname blockfile c
    // global charData pickerDir
    // calls getScriptGroup

    // to show per-grapheme ipa the ipa transcriptions should have § as grapheme separator (and syllables should be separated by '.'). Unpronounced segments are represented by – (en hyphen).  Monosyllabic words don't need any extra stuff.
    // កន្ត្រៃ|scissors|kɑː§n.§t§raj§–

    // locals
    var dir, characterList, graphemes, ptr, transcriptions, gloss, charArray
	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

	// check whether the calling page has set a base and target window: if not base, point to UniView
	if(typeof base === 'undefined' || base === '') { base = '../../uniview/index.html?char=' }
	if(typeof target === 'undefined') { target = 'c' }
	if(typeof list === 'undefined') { list = null }
	if(typeof translit === 'undefined') { translit = '' }
	  
	// clear and show the panel
	panel.innerHTML = ''
	panel.style.display = 'block'
    dir = ''
    if (typeof window.direction === 'string') dir = window.direction
    else if (typeof template !== 'undefined' && typeof template.direction === 'string') dir = template.direction
    
    
	var out = '<div id="ruby">'
	
    // get any IPA data provided - should be pre-separated for graphemes by §
    if (typeof ipa === 'string' && ipa !== '') ipa = ipa.split('§')
    else ipa = false
    
    
	// add the example to the panel as a title
    characterList = [...chars]
    graphemes = []
    ptr = -1
    for (var c=0;c<characterList.length;c++) {
        if (window.marks && window.marks.has(characterList[c]) && c !== 0) graphemes[ptr] += characterList[c]
        else {
            ptr++
            graphemes[ptr] = characterList[c]
            }
        }

    transcriptions = []
    for (var t=0;t<graphemes.length;t++) {
        transcriptions[t] = transliteratePanel(graphemes[t], clang)
        }
    
    if (traceSet.has('showNameDetails')) {
        console.log('graphemes: ',graphemes)
        console.log('transcriptions: ',transcriptions)
        console.log('ipa: ',ipa)
        }


    // draw the glosses
    if (location.toString().includes('picker')) var iconURL = '../../scripts/common29/icons/copytiny.svg'
    else iconURL = '../common29/icons/copytiny.svg'
    gloss = '<div class="multilineGlossedText">'
    for (t=-1;t<graphemes.length;t++) {
        if (t===-1) {
            gloss += `<div class="stack"><span class="rt translitGloss" lang="und-fonipa" title="Transliteration of the text."><img src="${ iconURL }" class="copyIcon" onclick="copyPanelText('.translitGloss')" title="Copy the transliteration." alt="Copy transliteration"></span><span class="rb"><img src="${ iconURL }" onclick="copyPanelText('.rb')" title="Copy the text." alt="Copy text"></span>`
            if (ipa !== false) {
                if (ipa[t+1]) gloss += `<span class="rt IPAGloss" lang="und-fonipa" title="IPA transcription of the text."><img src="${ iconURL }" onclick="copyPanelText('.IPAGloss')" title="Copy the IPA transcription." alt="Copy IPA"></span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        else {
            gloss += ` <div class="stack"><span class="rt translitGloss" lang="und-fonipa">${ transcriptions[t] }</span><span class="rb">${ graphemes[t] }</span>`
            if (ipa !== false) {
                if (ipa[t]) gloss += `<span class="rt IPAGloss" lang="und-fonipa">${ ipa[t] }</span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        }
    gloss += '</div>'

	//out += `<div dir="${ dir }" class="ex" lang="${ clang }" id="title">${ gloss }</div>`
    // removing the alternating direction so that IPA reads better
	//out += `<div dir="${ window.blockDirection }" class="ex" lang="${ clang }" id="title">${ gloss }</div>`
	out += `<div dir="ltr" class="glossContainer" lang="${ clang }" id="title">${ gloss }</div>`
    
        
    
    // add instructions line
	out += '<p id="advice" style="line-height:1;">Glossed lines are transliteration/text/IPA.<br>Click on character names below for detailed information.</p>'
	
	// create a list of characters
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    charArray = [...chars]
    
    if (traceSet.has('showNameDetails')) console.log('charArray: ',charArray)

    out += '<div id="listOfCharacters">'
	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
 
        //if (traceSet.has('showNameDetails')) console.log('charData: ',charData)
        //if (traceSet.has('showNameDetails')) console.log('charArray[c]: ',charArray[c])

		if (charData[charArray[c]]) {
            blockname = getScriptGroup(dec, false)
            blockfile = getScriptGroup(dec, true)
            //console.log(dec,blockfile)
            isInBlock = spreadsheetRows[charArray[c]]?spreadsheetRows[charArray[c]][cols['block']]:''
            
			out += '<div class="panelCharacter">'
			//if (blockfile) {
			if (isInBlock) {
				//out += `<a target="${ target }" href="`
                // undoing this change which put characters in the list because imgs are needed in order to make the list to copy to clipboard
                // out += `<span style="display:inline-block; font-size:1.5rem; min-width: 2rem;">${ charArray[c] }</span>`
                out += `<img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }">`
				out += `<a target="c" href="`
				//if (base === '../../uniview/index.html?char=') out += base+hex
				//else out += '../../scripts/'+blockfile+'/block.html#char'+hex
				out += '../../scripts/'+blockfile+'/block.html#char'+hex
				out += '">'
				//out += '<img src="'+'../../c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex + ' '+charData[charArray[c]]
				out += '</a>\n'
				}
			else {
				out += '<img src="'+'../../c/'+blockname+"/large/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex+' '+charData[charArray[c]]+'\n'
				}
			}
		else {
			//out += `<a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/Basic_Latin/005F.png" alt="U+${ hex }"> U+${ hex } No data for this character</a>`
			out += `<div class="panelCharacter"><a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }"> U+${ hex } No data for this character</a></div>`
			}
		out += '</div>'
		}
	out += '</div>'
	
    
	// write out the bottom line
	out += '<p style="text-align:left; margin-block-start: 1em; line-height:2rem;" id="panelSharingLine">'
    //out += '<button onclick="document.getElementById(\'panelShare\').style.display=\'block\'">Export</button> \u00A0 '
    out += '<button onclick="copyPanelList()">Copy list</button> \u00A0 '
	
    out += `<button onclick="openExportWindow('../../app-analysestring/index.html?chars=${ chars }')">Details</button> \u00A0 `
	
    out += `<button onclick="openExportWindow('../../uniview/index.html?charlist=${ chars }')">UniView</button> \u00A0 `
	
    out += `<button onclick="openExportWindow('../../scripts/apps/graphemes/index.html?gc=${ chars }')">Graphemes</button> \u00A0 `
	
    if (window.pickerDir) {
        out += `<button onclick="openExportWindow('../../pickers/${ window.pickerDir }/index.html?text=${ chars }')">Character App</button> \u00A0 `
	   }

    // add a link to the _vocab page
    if (typeof window.languageName === 'undefined') var fragid = ''
    else fragid = '#'+window.languageName

    // figure out where to find the url for the _vocab page
    var url
    if (typeof template !== 'undefined' && typeof template.vocablocation === 'string')  url = `../../scripts/${ template.vocablocation }.html`
    
    else url = `${ window.langTag }_vocab`
    
    if (typeof window.removeVowels === 'function') chars = removeVowels(chars)

    out += `<button onclick="openExportWindow('${ url }?q=${ chars }')">Terms</button> \u00A0 `
	


    /* THE FOLLOWING CODE USED TO OPEN A SMALL LIST WINDOW TO SELECT EXPORT OPTIONS
        IT HAS NOW BEEN REPLACED BY BUTTONS, AND SHOULD EVENTUALLY BE REMOVED
	// add a trigger to produce a list with phonetics
    out += '<textarea id="panelCopyField" style="height:1px;width:1px;margin-inline-start:1em;"></textarea>'
	//out += ' <span onclick="alert(getPhonemeList());" style="pointer:cursor;">P</span>'
	
	// add a close button
	out += '<p style="text-align:right"><img src="../../shared/images/close.png" style="cursor:pointer;" id="character_panel_close_button" alt="Close"'
	out += ' onclick="document.getElementById(\'panel\').style.display = \'none\'"'
	out += '></p>'



    out += '<div id="panelShare" style="display:none;">'
    
	// add a link to analysestring
	out += `<div><a href="../../app-analysestring/index.html?chars=${ chars }" target="_blank" onclick="document.getElementById('panelShare').style.display='none'">Details</a></div>`

	// add a link to uniview
	out += `<div><a target="_blank" href="../../uniview/index.html?charlist=${ chars }" onclick="document.getElementById('panelShare').style.display='none'">UniView</a></div>`
	
	// add a link to the grapheme segmenter app
	out += `<div><a target="_blank" href="../apps/graphemes/index.html?gc=${ chars }" onclick="document.getElementById('panelShare').style.display='none'" title="Send the string to the grapheme segmenter app.">Graphemes</a></div>`
	
	// add a link to the character app named in window.pickerDir
    if (window.pickerDir) {
	   out += `<div><a target="_blank" href="../../pickers/${ window.pickerDir }/index.html?text=${ chars }" onclick="document.getElementById('panelShare').style.display='none'">Character App</a></div>`
       }

    // add a link to the _vocab page
    if (typeof window.languageName === 'undefined') var fragid = ''
    else fragid = '#'+window.languageName

    // figure out where to find the url for the _vocab page
    if (typeof template !== 'undefined' && typeof template.vocablocation === 'string') var url = `../../scripts/{$ template.vocablocation }.html`
    else url = `${ window.langTag }_vocab`
    
    if (typeof window.removeVowels === 'function') chars = removeVowels(chars)
    
    //out += `<a target="wiktionary" href="https://en.wiktionary.org/wiki/${ chars }${ fragid }">Wiktionary</a>`
    out += `<a target="termbase" href="${ url }.html?q=${ chars }">Term base</a>`
	
    out += '<p style="text-align:right"><img src="../common28/icons/close.png" style="cursor:pointer;" id="character_panelshare_close_button" alt="Close"'
	out += ` onclick="document.getElementById('panelShare').style.display='none'"`
	out += '></p>'
    END OF DECOMMISSIONED CODE */
	
	
	// add a close button
	out += '<p style="text-align:right"><img src="../../shared/images/close.png" style="cursor:pointer;" id="character_panel_close_button" alt="Close"'
	out += ' onclick="document.getElementById(\'panel\').style.display = \'none\'"'
	out += '></p>'
	panel.innerHTML = out
	}


function openExportWindow (url) {
	var shareWindow = window.open(url, 'analyse') 
	analyse.focus()
	}

function copyPanelListX () {
    var lines = document.getElementById('listOfCharacters').querySelectorAll('.panelCharacter')
    var imgs = document.getElementById('listOfCharacters').querySelectorAll('img')
    var out = ''
    for (var i=0;i<lines.length;i++) out += imgs[i].alt+' '+lines[i].textContent
	var node = document.getElementById('panelCopyField')
    node.value = out
	node.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	}


function copyPanelList () {
    var lines = document.getElementById('listOfCharacters').querySelectorAll('.panelCharacter')
    var imgs = document.getElementById('listOfCharacters').querySelectorAll('img')
    var out = ''
    for (var i=0;i<lines.length;i++) {
        console.log(imgs[i])
        out += imgs[i].alt+' '+lines[i].textContent
        }
    navigator.clipboard.writeText(out)
	}


function copyPanelTextX (type) {
    var text = document.getElementById('ruby').querySelectorAll(type)
    var out = ''
    for (var i=0;i<text.length;i++) out += text[i].textContent
    if (type === '.IPAGloss') out = out.replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
	var node = document.getElementById('panelCopyField')
    node.value = out
	node.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	}


function copyPanelText (type) {
    var text = document.getElementById('ruby').querySelectorAll(type)
    var out = ''
    for (var i=0;i<text.length;i++) out += text[i].textContent
    if (type === '.IPAGloss') out = out.replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
    navigator.clipboard.writeText(out)
	}




function getScriptGroup (charNum, blockfile) {
	// find the name of the script group for the character in charNum
	// codepoint: dec codepoint value
    // blockfile: boolean, determines whether to return the group name or block file name
	// returns: if blockfile not set, the Unicode block name, with spaces converted to _
    //          if blockfile set, the name of the block file under scripts
	//          or, if neither is found, ''
    // called by showNameDetails & toggleImages (block-functions.js)
    // local field i
    // global scriptGroups
	
	if(typeof blockfile === 'undefined') { blockfile = false }
    if (blockfile) var field = 3
    else field = 2
    
    // find the script group
	if (charNum < 128) return scriptGroups[1][field].replace(/ /g,'_')
	var i=1
	while ( i<scriptGroups.length && charNum > scriptGroups[i][1] ) { i++ }
    
    // figure out what to return
	if ( i == scriptGroups.length ) return ''
	else { 
        if (blockfile && scriptGroups[i][field]) return scriptGroups[i][field]
        else if (blockfile) return ''
		else return scriptGroups[i][field].replace(/ /g,'_')
		}
	}


function shownames_setClose ( node ) {
	node.onclick = function(){ document.getElementById('panel').style.display = 'none' }
	}


function listAll (node, lang) {
    var itemlist=node.parentNode.querySelectorAll('.listItem'); 
    var out = '';
    for (var i=0;i<itemlist.length;i++) { 
        out+=itemlist[i].textContent+' '; 
        } 
    out = out.replace(/-/g,'')
    out = out.replace(/•/g,'')
    showNameDetails(out, lang, window.blockDirectory, 'c', document.getElementById('panel'), 'list' )
    }


function getPhonemeList () {
    // add a button for a list of phonemes to the character codes panel
    // called by showNameDetails
    // local inp out notfound list char
    // global spreadsheetRows
	var inp = document.getElementById('title').textContent
	var out = ''
	var notfound = ''
	var list = inp.split(' ')
	for (var i=0;i<list.length; i++) {
		var char = list[i].replace(/-|–/g,'')
		if (spreadsheetRows[char] || char === 'x') out += spreadsheetRows[char][cols.ipaLoc] + '\t' + list[i] + '\n'
		else notfound += list[i] + '\n'
		}
	if (notfound !== '') out += '\n\nNot found:\n'+notfound
	return out
	}





function makeDetails (chars) {
    if (traceSet.has('makeDetails')) console.log('makeDetails(', 'chars:'+chars, ')\n\tAdd  details for character(s) below a chart.\n\tGLOBALS notesLangtag:'+window.notesLangtag, 'blockDirectoryName:'+window.blockDirectoryName)
    // IF MAKING CHANGES HERE, MAKE THEM ALSO IN makePanelDetail FUNCTION
    
    // global charDetails spreadsheetRows cols
    // local out charArray i lang dir

    if (typeof charDetails === 'undefined') return

    var out = ''
    var charArray = [... chars]
    var lang = window.notesLangtag
    var dir = window.blockDirectoryName

    for (var i=0;i<charArray.length;i++) {
        if (spreadsheetRows[charArray[i]]) {
            // make title to side
            out += `<tr><th class="cdChar" onclick="this.parentNode.parentNode.parentNode.style.display='none'"><span class="ex" lang="${ lang }">${ charArray[i] }</span><br><span class="cdCharClose">x</span></th>`
            
            // add the full details
            out += '<td class="cdData">'

            out += printDetails(charArray[i])
            out += '</td></tr>'
            }
        }
    out += '</table>'
    return out
    }








function printDetails (char) {
    if (traceSet.has('printDetails')) console.log('printDetails(', 'char:'+char, ')\n\tPrint the meat of a details panel.\n\tGLOBALS notesLangtag:'+window.notesLangtag, 'blockDirectoryName:'+window.blockDirectoryName)
    // this is call bymakeDetails and makePanelDetails
    // char, the character
    var lang = window.notesLangtag
    var dir = window.blockDirectoryName
    var out = ''
    
    
    // add out pointing links to right side
    var hex = spreadsheetRows[char][cols['ucsName']].split(':')
    hex = hex[0].replace(/U\+/,'')
    out += `<p class="notesLink"><a target="_blank" href="../../uniview/index.html?codepoints=${ hex }&char=${ hex }">UniView</a>`
    // add a link to the character notes file
    if (lang) {
        out += '<br><a target="_blank" href="../../scripts/'+dir+'/block.html#'+lang+hex+'">Notes page</a>'
        }
    // link to properties
    out += `<br><a target="_blank" href="https://util.unicode.org/UnicodeJsps/character.jsp?a=${ hex }">Properties</a>`

    // add a link to the terms list
    if (autoExpandExamples[window.langTag]) out += `<br><a target="_blank" href="${ window.langTag }_vocab.html?q=${ char }">Term list</a>`
    out += '</p>'

    // write the header info
    out += '<p class="cdHeader"><span class="uname cdTitle">'+spreadsheetRows[char][cols['ucsName']]+'</span> '

    if (spreadsheetRows[char][cols['nameLoc']] && spreadsheetRows[char][cols['nameLoc']] != '0') out += ' &nbsp; <span class="transliteratedname trans">'+spreadsheetRows[char][cols['nameLoc']]+'</span>'
    out += '<br>'

    // add the basic details
    out += '<span class="cdBasics">'
    if (spreadsheetRows[char][cols['typeLoc']]) out += '<span class="charType">'+spreadsheetRows[char][cols['typeLoc']]+'</span>'
    if (spreadsheetRows[char][cols['statusLoc']]) out += ' &nbsp; <span class="usageType">('+spreadsheetRows[char][cols['statusLoc']]+')</span>'
    if (spreadsheetRows[char][cols['ipaLoc']]) out += ' &nbsp; <span class="charIPA ipa">'+spreadsheetRows[char][cols['ipaLoc']]+'</span>'
    if (spreadsheetRows[char][cols['class']]) out += ' &nbsp; <span class="charGC">'+spreadsheetRows[char][cols['class']]+'</span>'
    out += '</span><br><br>'


    // add information about correspondences

   // check for decomposable characters
    if (char.normalize('NFD') != char) {
        out += '<span class="decomposition">'
        out += 'Decomposes to '+makeCharacterLink(char.normalize('NFD'), lang, dir)
        if (char.normalize('NFD') === char.normalize('NFC')) out += '<br><strong>The NFC normalised form of this character is the decomposed sequence!</strong>'
        out += '</span><br>'
        }           

    // vowel correspondences
    if (cols.ivowel>0 && spreadsheetRows[char][cols.ivowel]) {
        out += '<span class="vowelPairing">The corresponding independent vowel is '+makeCharacterLink(spreadsheetRows[char][cols.ivowel], lang, dir)+'</span><br>'
        }
    if (cols.dvowel>0 && spreadsheetRows[char][cols.dvowel]) {
        out += '<span class="vowelPairing">The corresponding dependent vowel is '+makeCharacterLink(spreadsheetRows[char][cols.dvowel], lang, dir)+'</span><br>'
        }

    // upper/lowercase
    if (cols.uc>0 && spreadsheetRows[char][cols.uc]) {
        out += '<span class="charUppercase">Uppercase is '+makeCharacterLink(spreadsheetRows[char][cols.uc], lang, dir)+'</span><br>'
        }
    if (cols.lc>0 && spreadsheetRows[char][cols.lc]) {
        out += '<span class="charLowercase">Lowercase is '+makeCharacterLink(spreadsheetRows[char][cols.lc], lang, dir)+'</span><br>'
        }

    // subjoined forms
    if (cols.subj>0 && spreadsheetRows[char][cols.subj]) {
        out += '<span class="subjPair">Subjoined form is '+makeCharacterLink(spreadsheetRows[char][cols.subj], lang, dir)+'</span><br>'
        }
    if (cols.fform>0 && spreadsheetRows[char][cols.fform]) {
        out += '<span class="subjPair">Non-subjoined form is '+makeCharacterLink(spreadsheetRows[char][cols.fform], lang, dir)+'</span><br>'
        }

    // tone correspondences
    if (cols.htone>0 && spreadsheetRows[char][cols.htone]) {
        out += '<span class="tonePairing">High class equivalent is  '+makeCharacterLink(spreadsheetRows[char][cols.htone], lang, dir)+'</span><br>'
        }
    if (cols.ltone>0 && spreadsheetRows[char][cols.ltone]) {
        out += '<span class="tonePairing">Low class equivalent is '+makeCharacterLink(spreadsheetRows[char][cols.ltone], lang, dir)+'</span><br>'
        }

      out += '</p>'

    // add the details from xx-details.js
    if (charDetails[char]) out += charDetails[char]

    return out
    }




function showCharDetailsInPanel (evt) {
	if (typeof charDetails === 'undefined') return

	// find the language & character(s)
	var lang
	if (evt.target.className == 'listItem') lang = evt.target.lang
	else if (evt.target.parentNode.parentNode.querySelector('bdi') !== null) lang = evt.target.parentNode.parentNode.querySelector('bdi').lang
	else if (evt.target.parentNode.parentNode.querySelector('span') !== null) lang = evt.target.parentNode.parentNode.querySelector('span').lang
	else console.log('No lang found in showCharDetailsInPanel')

    var chars
	if (evt.target.className == 'listItem') chars = evt.target.textContent
	else if (evt.target.parentNode.parentNode.querySelector('bdi') !== null) chars = evt.target.parentNode.parentNode.querySelector('bdi').textContent
	else if (evt.target.parentNode.parentNode.querySelector('span') !== null) chars = evt.target.parentNode.parentNode.querySelector('span').textContent
	else console.log('No characters found in showCharDetailsInPanel')


	var panel = document.getElementById('dialogBox')
        
	panel.innerHTML = makePanelDetails(chars,lang, dialog=true)
	//document.getElementById('panel').innerHTML = charDetails[char]
	panel.open = true
    //panel.showModal()
    
    var closeButton = document.createElement('button')
    closeButton.appendChild(document.createTextNode('Close'))
    closeButton.addEventListener('click', closeDialog)
    panel.appendChild(closeButton)
    
	
	addExamples(lang)
	autoTransliterate(evt.target.lang)
    var links = panel.querySelectorAll('.codepoint a, .codepoint span.uname')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
	setFootnoteRefs()

	return false
	}


function closeDialog () {
    document.getElementById('dialogBox').open = false
    }








function makePanelDetails (chars, lang, dialog) {
    if (traceSet.has('makePanelDetails')) console.log('makePanelDetails(',chars,lang,')   Adds  details for character(s) to the panel.')
    // IF MAKING CHANGES HERE, MAKE THEM ALSO IN makeDetail FUNCTION
    
    var out = ''
    var charArray = [... chars]
    var dir = 'ltr'

    for (let i=0;i<charArray.length;i++) {
        if (spreadsheetRows[charArray[i]]) {

            // add character
            out += '<p class="cdChar"><span class="ex" lang="'+lang+'">'+charArray[i]+'</span></p>'

            out += printDetails(charArray[i])
            }
        }
        
    // make the close icon
    if (dialog) out += `<p onclick="document.getElementById(\'dialogBox\').open = false"><img src="../common28/icons/close.png" alt="Close" style="cursor: pointer;" id="character_dialog_close_button"></p>`
    else out += '<p onclick="document.getElementById(\'panel\').style.display = \'none\'"><img src="../common28/icons/close.png" alt="Close" style="cursor: pointer;" id="character_panel_close_button"></p>'

    return out
    }






function convertTranscriptionData (node) {
	// other transcriptions
    // local insertTranscriptions it para i
    // global spreadsheetRows
	var insertTranscriptions = document.querySelectorAll('.insertTranscription')

	// do the inserted transcription locations
	if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
		for (var it=0;it<insertTranscriptions.length;it++) {
			var para = ''
			for (var i=0;i<cols.othertranscriptions.length;i++) {
				if (spreadsheetRows[insertTranscriptions[it].textContent] && spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]) {
					para += cols.othertranscriptions[i][1]+': <span class="trans">‹'+spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]+'›</span>'
					if (i<cols.othertranscriptions.length-1) para += ', &nbsp; '
					}
				}
			insertTranscriptions[it].innerHTML = para
			}
		}
	}








function makeCharacterLink (cp, lang, direction) {
	// returns markup with information about cp
	// cp: a unicode character, or sequence of unicode characters
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
    // LATEST VERSION collapses multiple chars at start
    if (traceSet.has('makeCharacterLink')) console.log('makeCharacterLink(',cp,lang,direction,')')
    var chars = [...cp]

	var out = '<span class="codepoint" translate="no">'
    out += `<span lang="${ lang }" onclick="makeFootnoteIndex('${ cp }')">${ cp }</span>`
    
    var hex = cp.codePointAt(0).toString(16).toUpperCase()
    while (hex.length < 4) hex = '0'+hex 

    if (spreadsheetRows[cp]) out += ` [<a href="block.html#char${ hex }" target="c"><span class="uname">${ spreadsheetRows[cp][cols['ucsName']] }</span></a>]`
	else out += ' [Character(s) not found in database.]'

    out += '</span> '
	
	return out.trim()
	}


