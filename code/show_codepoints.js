// functions to display a panel listing codepoints in a string
// used in script pages, pickers, and ...

// ALSO NEEDED: 
// shared/code/scriptGroups.js
// shared/code/all-names.js

trace = false


function initialiseShowNames (base, target) {
// add function to all images with class ex
// function will display character by character names for example in the panel
// base (string), path for link to character detail
// local: examples e
// calls shownames_setImgOnclick shownames_setOnclick

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') { base = ''; }
	if(typeof target === 'undefined') { target = ''; } 
	
	var examples = document.querySelectorAll('.ex')
	for (var e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() === 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}
	}


function shownames_setImgOnclick ( node, base, target ) {
    if (trace) console.log('shownames_setImgOnclick(', node.textContent, base, target,')')
    // called from initialiseShowNames
    
	//node.onclick = function(){ showNameDetails(node.alt, node.lang, base, target, document.getElementById('panel') ) }
	node.onclick = function(){ showNameDetails(node.alt, getLanguage(node), base, target, document.getElementById('panel') ) }
	}

function shownames_setOnclick ( node, base, target ) {
    if (trace) console.log('shownames_setOnclick(', node.textContent, base, target,')')
    // called from initialiseShowNames
    // local list
    
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








function showNameDetailsOLD (chars, clang, base, target, panel, list, translit) {
// get the list of characters for an example and display their names
// called by onclick created by shownames_setOnclick & shownames_setImgOnclick & listAll
// chars (string), alt text of example
// clang (string), lang attribute value of example img
// base (string), path for link to character detail
// target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
// list (string), if not null, indicates that spaces and nbsp should be ignored
// local out charArray chardiv charimg thename thelink hex dec blockname blockfile c
// global charData pickerDir
// calls getScriptGroup


	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined' || base === '') { base = '/uniview/?char=' }
	if(typeof target === 'undefined') { target = '' }
	if(typeof list === 'undefined') { list = null }
	if(typeof translit === 'undefined') { translit = '' }
	
	 chars = chars
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
	  
	// clear and show the panel
	panel.innerHTML = ''
	panel.style.display = 'block'
	var out = '<div>'
	
	// add the example to the panel as a title
	out += '<div class="ex" lang="'+clang+'" id="title">'+chars+'</div>'
    
	// add a line for transliteration
	if (translit !== '') out += '<div class="trans" id="transInPanel">'+translit+'</div>'
    
    // add instructions line
	out += '<p id="advice">Click on name for details.</p>'
	
	// create a list of characters
	//var charArray = []
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    var charArray = [...chars]
    

	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
        
		if (charData[charArray[c]]) {
            blockname = getScriptGroup(dec, false)
            blockfile = getScriptGroup(dec, true)

			out += '<div>'
			if (blockfile) {
				out += '<a target="'+target+'" href="'
				if (base === '/uniview/?char=') out += base+hex
				else out += '/scripts/'+blockfile+'/block#char'+hex
				out += '">'
				out += '<img src="'+'/c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex + ' '+charData[charArray[c]]
				out += '</a>'
				}
			else {
				out += '<img src="'+'/c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex+' '+charData[charArray[c]]
				}
			}
		else {
			out += '<img src="/c/Basic_Latin/005F.png" alt="U+'+hex+'"> U+'+hex+' No data for this character'
			}
		out += '</div>'
		}
	
    
	// write out the bottom line
	out += '<p style="text-align:left;" id="panelSharingLine">'
    out += '<img src="/scripts/common/icons/share_transp.png" alt="Send to:"> \u00A0 '
	// add a link to analysestring
	out += '<a href="/app-analysestring/?chars='+chars+'" target="_blank">Details</a>'
	out += ' • '

	// add a link to uniview
	out += '<a target="_blank" href="/uniview/?charlist='+chars+'">UniView</a>'
	out += ' • '
	
	// add a link to the character app named in window.pickerDir
    if (window.pickerDir) {
	   out += '<a target="_blank" href="/pickers/'+window.pickerDir+'/?text='+chars+'">CApp</a>'
	   out += ' • '
       }
	
	// add a trigger to produce a list with phonetics
	out += '<span onclick="alert(getPhonemeList());" style="pointer:cursor;">P</span>'

	out += '</div>'
	
	// add a close button
	out += '<p style="text-align:right"><img src="/scripts/block/images/close.png" style="cursor:pointer;" id="character_panel_close_button" alt="Close"'
	out += ' onclick="document.getElementById(\'panel\').style.display = \'none\'"'
	out += '></p>'

	panel.innerHTML = out
	}




function transliteratePanel (str, lang) {
// transliterate the rb tags in the panel
str = ' '+str

var strArray = [...str]
var exclusions = new Set(['(',')','[',']','.',' '])

// fudge because in notes autoTranslitArray has a language level which is not present in pickers
if (autoTranslitArray[lang]) {
    for (i=0;i<strArray.length;i++) {
        if (exclusions.has(strArray[i])) continue
        if (! autoTranslitArray[lang][strArray[i]]) continue
        re = new RegExp(strArray[i],'g')
        str = str.replace(re, autoTranslitArray[lang][strArray[i]])
        
        }
    }
else {
        for (i=0;i<strArray.length;i++) {
        if (exclusions.has(strArray[i])) continue
        if (! autoTranslitArray[strArray[i]]) continue
        re = new RegExp(strArray[i],'g')
        str = str.replace(re, autoTranslitArray[strArray[i]])
        }
    }

return str.trim()
}



function transliteratePanel (str, lang) {
// transliterate the rb tags in the panel

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







function showNameDetails (chars, clang, base, target, panel, list, translit) {
// get the list of characters for an example and display their names
// called by onclick created by shownames_setOnclick & shownames_setImgOnclick & listAll
// chars (string), alt text of example
// clang (string), lang attribute value of example img
// base (string), path for link to character detail
// target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
// list (string), if not null, indicates that spaces and nbsp should be ignored
// local out charArray chardiv charimg thename thelink hex dec blockname blockfile c
// global charData pickerDir
// calls getScriptGroup
console.log('showNameDetails(',chars, clang, base, target, panel, list, translit,')')

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined' || base === '') { base = '/uniview/?char=' }
	if(typeof target === 'undefined') { target = '' }
	if(typeof list === 'undefined') { list = null }
	if(typeof translit === 'undefined') { translit = '' }
	
	 chars = chars
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
	  
	// clear and show the panel
	panel.innerHTML = ''
	panel.style.display = 'block'
    var dir = ''
    if (typeof window.direction === 'string') dir = window.direction
    else if (template && typeof template.direction === 'string') dir = template.direction
    
    
	var out = '<div id="ruby">'
	
    
    
    
    
	// add the example to the panel as a title
	//out += '<div class="ex" lang="'+clang+'" id="title">'+chars+'</div>'
    var characterList = [...chars]
    //console.log('characterList',characterList)
    var graphemes = []
    var ptr = -1
    for (var c=0;c<characterList.length;c++) {
        if (window.marks.has(characterList[c]) && c !== 0) graphemes[ptr] += characterList[c]
        else {
            ptr++
            graphemes[ptr] = characterList[c]
            }
        }
    //console.log('graphemes',graphemes)
    var transcriptions = []
    for (var t=0;t<graphemes.length;t++) {
        transcriptions[t] = transliteratePanel(graphemes[t], clang)
        }
    //console.log('transcriptions',transcriptions)
    
    //var ruby = '<ruby>'
    //for (t=0;t<graphemes.length;t++) ruby += ' <rb>'+graphemes[t]+'</rb><rt>'+transcriptions[t]+'</rt>'
    //ruby += '</ruby>'

	//out += `<div dir="${ dir }" class="ex" lang="${ clang }" id="title">${ ruby }</div>`
    
    
    var gloss = '<div class="multilineGlossedText">'
    for (t=0;t<graphemes.length;t++) gloss += ` <div class="stack"><span class="rt" lang="gez">${ transcriptions[t] }</span><span class="rb">${ graphemes[t] }</div>`
    gloss += '</div>'

	out += `<div dir="${ dir }" class="ex" lang="${ clang }" id="title">${ gloss }</div>`
    
        
    
    // add instructions line
	out += '<p id="advice">Click on name for details.</p>'
	
	// create a list of characters
	//var charArray = []
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    var charArray = [...chars]
    

	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

    out += '<div id="listOfCharacters">'
	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
        
		if (charData[charArray[c]]) {
            blockname = getScriptGroup(dec, false)
            blockfile = getScriptGroup(dec, true)

			out += '<div class="panelCharacter">'
			if (blockfile) {
				out += '<a target="'+target+'" href="'
				if (base === '/uniview/?char=') out += base+hex
				else out += '/scripts/'+blockfile+'/block#char'+hex
				out += '">'
				out += '<img src="'+'/c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex + ' '+charData[charArray[c]]
				out += '</a>\n'
				}
			else {
				out += '<img src="'+'/c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
				out += ' U+'+hex+' '+charData[charArray[c]]+'\n'
				}
			}
		else {
			out += '<img src="/c/Basic_Latin/005F.png" alt="U+'+hex+'"> U+'+hex+' No data for this character'
			}
		out += '</div>'
		}
	out += '</div>'
	
    
	// write out the bottom line
	out += '<p style="text-align:left; margin-block-start: 1em;" id="panelSharingLine">'
    out += '<img src="/scripts/common28/icons/share_transp.png" title="Export text to another app" alt="Send to:" onclick="document.getElementById(\'panelShare\').style.display=\'block\'"> \u00A0 '
    out += '<img src="/scripts/common28/icons/copylist.png" onclick="copyPanelList()" title="Copy the list of code points." alt="Copy list"> \u00A0 '
    out += `<img src="/scripts/common28/icons/copybase.png" onclick="copyPanelText('.rb')" title="Copy the base text at the top." alt="Copy base"> \u00A0 `
    out += `<img src="/scripts/common28/icons/copyannotation.png" onclick="copyPanelText('.rt')" title="Copy the annotation text at the top." alt="Copy annotation"> \u00A0 `
    
    /*
	// add a link to analysestring
	out += '<a href="/app-analysestring/?chars='+chars+'" target="_blank">Details</a>'
	out += ' • '

	// add a link to uniview
	out += '<a target="_blank" href="/uniview/?charlist='+chars+'">UniView</a>'
	out += ' • '
	
	// add a link to the character app named in window.pickerDir
    if (window.pickerDir) {
	   out += '<a target="_blank" href="/pickers/'+window.pickerDir+'/?text='+chars+'">CApp</a>'
	   out += ' • '
       }
    */
	
	// add a trigger to produce a list with phonetics
    out += '<textarea id="panelCopyField" style="height:1px;width:1px;margin-inline-start:1em;"></textarea>'
	//out += ' <span onclick="alert(getPhonemeList());" style="pointer:cursor;">P</span>'
	
	// add a close button
	out += '<p style="text-align:right"><img src="/scripts/block/images/close.png" style="cursor:pointer;" id="character_panel_close_button" alt="Close"'
	out += ' onclick="document.getElementById(\'panel\').style.display = \'none\'"'
	out += '></p>'

	//out += '</div>'




    out += '<div id="panelShare" style="display:none;">'
    
	// add a link to analysestring
	out += `<div><a href="/app-analysestring/?chars=${ chars }" target="_blank" onclick="document.getElementById('panelShare').style.display='none'">Details</a></div>`

	// add a link to uniview
	out += `<div><a target="_blank" href="/uniview/?charlist=${ chars }" onclick="document.getElementById('panelShare').style.display='none'">UniView</a></div>`
	
	// add a link to the character app named in window.pickerDir
    if (window.pickerDir) {
	   out += `<div><a target="_blank" href="/pickers/${ window.pickerDir }?text=${ chars }" onclick="document.getElementById('panelShare').style.display='none'">Character App</a></div>`
       }

    // add a link to the Wiktionary lemma page
    if (typeof window.languageName === 'undefined') var fragid = ''
    else fragid = '#'+window.languageName
    out += `<a target="${ target }" href="https://en.wiktionary.org/wiki/${ chars }${ fragid }">Wiktionary</a>`
	
    out += '<p style="text-align:right"><img src="/scripts/block/images/close.png" style="cursor:pointer;" id="character_panelshare_close_button" alt="Close"'
	out += ` onclick="document.getElementById('panelShare').style.display='none'"`
	out += '></p>'
    out += '</div>'

	panel.innerHTML = out
	}


function copyPanelList () {
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


function copyPanelText (type) {
    var text = document.getElementById('ruby').querySelectorAll(type)
    var out = ''
    for (var i=0;i<text.length;i++) out += text[i].textContent
	var node = document.getElementById('panelCopyField')
    node.value = out
	node.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
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
    if (blockfile) var field = 5
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
    // draw character notes
    // global charDetails spreadsheetRows cols
    // local out charArray i 

    if (typeof charDetails === 'undefined') return

    var out = ''
    var charArray = [... chars]

    for (var i=0;i<charArray.length;i++) {
        if (spreadsheetRows[charArray[i]]) {
            out += '<tr><th class="cdChar" onclick="this.parentNode.parentNode.parentNode.style.display=\'none\'"><span class="ex" lang="fuf">'+charArray[i]+'</span><br><span class="cdCharClose">x</span></th>'
            out += '<td class="cdData">'

            var temp = spreadsheetRows[charArray[i]][cols['ucsName']].split(':')
            temp = temp[0].replace(/U\+/,'')
            out += `<p class="notesLink"><a target="_blank" href="/uniview/?codepoints=${ temp }&char=${ temp }">UniView</a>`
            if (window.notesLangtag) { // add a link to the character notes file
                out += '<br><a target="_blank" href="/scripts/'+window.blockDir+'block#'+window.notesLangtag+temp+'">Notes page</a>'
                }
            out += '</p>'
            out += '<p class="cdHeader"><span class="uname cdTitle">'+spreadsheetRows[charArray[i]][cols['ucsName']]+'</span> '

            if (spreadsheetRows[charArray[i]][cols['nameLoc']] && spreadsheetRows[charArray[i]][cols['nameLoc']] != '0') out += ' &nbsp; <span class="transliteratedname trans">'+spreadsheetRows[charArray[i]][cols['nameLoc']]+'</span>'
            out += '<br>'

            out += '<span class="cdBasics">'
            if (spreadsheetRows[charArray[i]][cols['typeLoc']]) out += '<span class="charType">'+spreadsheetRows[charArray[i]][cols['typeLoc']]+'</span>'
            if (spreadsheetRows[charArray[i]][cols['statusLoc']]) out += ' &nbsp; <span class="usageType">('+spreadsheetRows[charArray[i]][cols['statusLoc']]+')</span>'
            if (spreadsheetRows[charArray[i]][cols['ipaLoc']]) out += ' &nbsp; <span class="charIPA ipa">'+spreadsheetRows[charArray[i]][cols['ipaLoc']]+'</span>'
            if (spreadsheetRows[charArray[i]][cols['class']]) out += ' &nbsp; <span class="charGC">'+spreadsheetRows[charArray[i]][cols['class']]+'</span>'
            out += '</span></p>'

            if (charDetails[charArray[i]]) out += charDetails[charArray[i]]
            out += '</td></tr>'
            }
        }
    //out += '</table>'
    return out
    }


function showCharDetailsInPanel (evt) {
	if (typeof charDetails === 'undefined') return

	// find the language & character(s)
	var lang
	if (evt.target.className == 'listItem') lang = evt.target.lang
	else lang = evt.target.parentNode.parentNode.querySelector('span').lang
	var chars
	if (evt.target.className == 'listItem') chars = evt.target.textContent
	else chars = evt.target.parentNode.parentNode.querySelector('span').textContent
	
	// get the character
	//console.log('target',evt.target)
	//console.log('parent',evt.target.parentNode.parentNode)
	//console.log('query',evt.target.parentNode.parentNode.querySelector('span'))
	//console.log('chars',chars)
	//console.log('lang', lang)
	//var chars = evt.target.parentNode.parentNode.querySelector('span').textContent
	//var lang = evt.target.parentNode.parentNode.querySelector('span').lang

	var panel = document.getElementById('panel')
	panel.innerHTML = makePanelDetails(chars,lang)
	//document.getElementById('panel').innerHTML = charDetails[char]
	panel.style.display = 'block'
	
	addExamples(lang)
	autoTransliterate(evt.target.lang)
    var links = panel.querySelectorAll('.codepoint a')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
	setFootnoteRefs()

	return false
	}





function makePanelDetails (chars, lang) {
// creates a string from charDetail data to put in panel
var out = ''
var charArray = [... chars]
var dir = 'ltr'

for (let i=0;i<charArray.length;i++) {
	if (spreadsheetRows[charArray[i]]) {
		out += '<p class="cdChar"><span class="ex" lang="'+lang+'">'+charArray[i]+'</span></p>'
		out += '<p class="cdHeader"><span class="uname cdTitle">'+spreadsheetRows[charArray[i]][cols['ucsName']]+'</span> '
	
		if (spreadsheetRows[charArray[i]][cols['nameLoc']] && spreadsheetRows[charArray[i]][cols['nameLoc']] != '0') out += ' &nbsp; <span class="transliteratedname trans">'+spreadsheetRows[charArray[i]][cols['nameLoc']]+'</span>'
		out += '<br>'

		out += '<span class="cdBasics">'
		if (spreadsheetRows[charArray[i]][cols['typeLoc']]) out += '<span class="charType">'+spreadsheetRows[charArray[i]][cols['typeLoc']]+'</span>'
		if (spreadsheetRows[charArray[i]][cols['statusLoc']]) out += ' &nbsp; (<span class="charType">'+spreadsheetRows[charArray[i]][cols['statusLoc']]+'</span>)'
		if (spreadsheetRows[charArray[i]][cols['ipaLoc']]) out += ' &nbsp; <span class="charIPA ipa">'+spreadsheetRows[charArray[i]][cols['ipaLoc']]+'</span>'
		out += '</span></p>'

		if (charDetails[charArray[i]]) out += '<div class="charD">'+charDetails[charArray[i]]

		cchar = charArray[i]
			// vowel correspondences
			if (cols.ivowel>0 && spreadsheetRows[cchar][cols.ivowel]) {
				out += '<p class="vowelPairing">The corresponding independent vowel is '+makeCharacterLink(spreadsheetRows[cchar][cols.ivowel], lang, dir)+'</p>'
				}
			if (cols.dvowel>0 && spreadsheetRows[cchar][cols.dvowel]) {
				out += '<p class="vowelPairing">The corresponding dependent vowel is '+makeCharacterLink(spreadsheetRows[cchar][cols.dvowel], lang, dir)+'</p>'
				}

			// upper/lowercase
			if (cols.uc>0 && spreadsheetRows[cchar][cols.uc]) {
				out += '<p class="charUppercase">Uppercase is '+makeCharacterLink(spreadsheetRows[cchar][cols.uc], lang, dir)+'</p>'
				}
			if (cols.lc>0 && spreadsheetRows[cchar][cols.lc]) {
				out += '<p class="charLowercase">Lowercase is '+makeCharacterLink(spreadsheetRows[cchar][cols.lc], lang, dir)+'</p>'
				}

			// subjoined forms
			if (cols.subj>0 && spreadsheetRows[cchar][cols.subj]) {
				out += '<p class="subjPair">Subjoined form is '+makeCharacterLink(spreadsheetRows[cchar][cols.subj], lang, dir)+'</p>'
				}
			if (cols.fform>0 && spreadsheetRows[cchar][cols.fform]) {
				out += '<p class="subjPair">Non-subjoined form is '+makeCharacterLink(spreadsheetRows[cchar][cols.fform], lang, dir)+'</p>'
				}

			// tone correspondences
			if (cols.htone>0 && spreadsheetRows[cchar][cols.htone]) {
				out += '<p class="tonePairing">High class equivalent is  '+makeCharacterLink(spreadsheetRows[cchar][cols.htone], lang, dir)+'</p>'
				}
			if (cols.ltone>0 && spreadsheetRows[cchar][cols.ltone]) {
				out += '<p class="tonePairing">Low class equivalent is '+makeCharacterLink(spreadsheetRows[cchar][cols.ltone], lang, dir)+'</p>'
				}
		out += '</div>'
		}
	}
out += '<p style="text-align: right;"><img src="/scripts/block/images/close.png" alt="Close" style="cursor: pointer;" id="character_panel_close_button" onclick="document.getElementById(\'panel\').style.display = \'none\'"></p>'

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
					para += cols.othertranscriptions[i][1]+': <span class="trans">'+spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]+'</span>'
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
    var chars = [...cp]

	var out = '<span class="codepoint" translate="no">'
	var charstr = ''
	for (let i=0;i<chars.length;i++) {
        if (i>0) out += ' + '
		charstr = chars[i]
        var dec = chars[i].codePointAt(0)
		var cbase = ''
		var dir = ''
		var hex = charstr.codePointAt(0).toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex 
		
		if (spreadsheetRows[charstr]) {
			out += '<span lang="'+lang+'">'+charstr+'</span> [<a href="block#char'+hex+'" target="c"><span class="uname">'+spreadsheetRows[cp][cols['ucsName']]+'</span></a>]'
			}
		else console.log( 'Character not found in database.' )
        }
    out += '</span> '
	
	return out.trim()
	}
