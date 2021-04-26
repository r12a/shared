// functions to display a panel listing codepoints in a string
// used in script pages, pickers, and ...

// ALSO NEEDED: 
// shared/code/character_conversions.js
// shared/code/scriptGroups.js
// shared/code/all-names.js



function initialiseShowNames (base, target) {
// add function to all images with class ex
// function will display character by character names for example in the panel
// base (string), path for link to character detail

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
	node.onclick = function(){ showNameDetails(node.alt, node.lang, base, target, document.getElementById('panel') ) }
	}

function shownames_setOnclick ( node, base, target ) {
    var list = ''
    if (node.classList.contains('list')) list = 'y'
//	node.onclick = function(){ showNameDetails(node.firstChild.data, getLanguage(node), base, target, document.getElementById('panel'), list, getTransliteration(node)) }
	node.onclick = function(){ showNameDetails(node.textContent, getLanguage(node), base, target, document.getElementById('panel'), list, getTransliteration(node)) }
	}


function getLanguage(node) {
	// given a node, returns lang value of node or nearest parent
	if(node.lang) return node.lang
	else if(node.parentNode) return getLanguage(node.parentNode)
	else return ''
	}

function getTransliteration (node) {
	// given a node, returns any span.trans
	if (node.parentNode.classList.contains('charExample')) {
		translit = node.parentNode.querySelector('.trans')
		if(translit !== null) return translit.textContent
		else return ''
		}
	else return ''
	}




function showNameDetails (chars, clang, base, target, panel, list, translit) {
// get the list of characters for an example and display their names
// chars (string), alt text of example
// clang (string), lang attribute value of example img
// base (string), path for link to character detail
// target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
// list (string), if not null, indicates that spaces and nbsp should be ignored

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
	  
	//document.getElementById('panel').innerHTML = ''
	//var panel = document.getElementById('panel')
	//panel.style.display = 'block'
	
	panel.innerHTML = ''
	panel.style.display = 'block'
	
	// add the example to the panel as a title
	var replacement = document.createElement('div')
	var str = document.createElement('div')
	str.appendChild(document.createTextNode(chars))
	str.className='ex'
	str.lang = clang
	str.id = 'title'
	replacement.appendChild(str)
    
	// add a line for transliteration
	if (translit !== '') {
		var str = document.createElement('div')
		str.appendChild(document.createTextNode(translit))
		str.className='trans'
		str.id = 'transInPanel'
		replacement.appendChild(str)
		}
    
    // add instructions line
    var advice = document.createElement('p')
    advice.appendChild(document.createTextNode('Click on name for details.'))
    advice.id = 'advice'
    advice.style.textAlign = 'right'
    advice.style.fontStyle = 'italic'
    advice.style.fontSize = '80%'
    advice.style.marginRight = '2em'
    replacement.appendChild(advice)
	
	// create a list of characters
	//var charArray = []
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    var charArray = [...chars]
    

    //convertStr2DecArray(chars, charArray)
	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
        
		if (charData[charArray[c]]) {
            blockname = getScriptGroup(dec, false)
            blockfile = getScriptGroup(dec, true)
            
			chardiv = document.createElement('div')
			charimg = document.createElement('img')
			charimg.src = '/c/'+blockname+"/"+hex+'.png'
			//charimg.alt = 'U+'+hex
			charimg.alt = charArray[c]
			chardiv.appendChild(charimg)
            thename = document.createTextNode(' '+charData[charArray[c]])
            if (blockfile) {
                thelink = document.createElement('a');
                if (base === '/uniview/?char=') { thelink.href = base+hex }
                else { thelink.href = '/scripts/'+blockfile+'/block#char'+hex }
                thelink.target = target
                thelink.appendChild(charimg)
                thelink.appendChild(document.createTextNode(' U+'+hex))
                thelink.appendChild(thename)
                chardiv.appendChild(thelink)
                }
            else {
              thename = document.createTextNode(' U+'+hex+' '+charData[charArray[c]])
              chardiv.appendChild(thename)
                }

			replacement.appendChild(chardiv);
			}
		else {
			chardiv = document.createElement('div')
			charimg = document.createElement('img')
			charimg.src = '/c/Basic_Latin/005F.png'
			charimg.alt = 'U+'+hex
			chardiv.appendChild(charimg)
			thename = document.createTextNode(' U+'+hex+' No data for this character')
			chardiv.appendChild(thename)
			
			replacement.appendChild(chardiv)
			}
		}
	
	
	//add the new data to the panel
	panel.appendChild(replacement)
	
	// add a link to analysestring
	p = document.createElement('p')
	p.style.textAlign = 'left'
    let a = document.createElement('a')
    a.href = "/app-analysestring/?chars="+chars
    a.target = "_blank"
    a.appendChild(document.createTextNode('More details'))
    p.appendChild(a)
    
    p.appendChild(document.createTextNode(' \u00A0 • \u00A0 '))
	
	// add a link to uniview
    a = document.createElement('a')
    a.href = "/uniview/?charlist="+chars
    a.target = "_blank"
    a.appendChild(document.createTextNode('Send to UniView'))
    p.appendChild(a)
    
    p.appendChild(document.createTextNode(' \u00A0 • \u00A0 '))
	
	// add a trigger to produce a list with phonetics
    a = document.createElement('span')
    a.onclick = makePhoneticList
    a.appendChild(document.createTextNode('P'))
	a.style.cursor = 'pointer'
	a.addEventListener('click', function(){ alert(getPhonemeList());}, false)
    p.appendChild(a)

	panel.appendChild(p)

	
	// add a close button
	p = document.createElement('p')
	p.style.textAlign = 'right'
	var img = document.createElement('img')
	img.src = '/scripts/block/images/close.png'
	img.alt = 'Close'
	img.style.cursor = 'pointer'
	img.id = 'character_panel_close_button'
	shownames_setClose(img)
	p.appendChild(img)	
	panel.appendChild(p)
	}




function showNameDetails (chars, clang, base, target, panel, list, translit) {
// get the list of characters for an example and display their names
// chars (string), alt text of example
// clang (string), lang attribute value of example img
// base (string), path for link to character detail
// target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
// list (string), if not null, indicates that spaces and nbsp should be ignored

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
	out = '<div>'
	
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
    

    //convertStr2DecArray(chars, charArray)
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
	
		
	out += '<p style="text-align:left;">'
	// add a link to analysestring
	out += '<a href="/app-analysestring/?chars='+chars+'" target="_blank">More details</a>'
	out += ' \u00A0 • \u00A0 '

	// add a link to uniview
	out += '<a target="_blank" href="/uniview/?charlist='+chars+'">Send to UniView</a>'
	out += ' \u00A0 • \u00A0 '
	
	// add a trigger to produce a list with phonetics
	out += '<span onclick="alert(getPhonemeList());" style="pointer:cursor;">P</span>'

	out += '</div>'
	
	// add a close button
	out += '<p style="text-align:right"><img src="/scripts/block/images/close.png" style="cursor:pointer;" id="character_panel_close_button" alt="Close"'
	out += ' onclick="document.getElementById(\'panel\').style.display = \'none\'"'
	out += '></p>'

	panel.innerHTML = out
	}


function getScriptGroup (charNum, blockfile) {
	// find the name of the script group for the character in charNum
	// codepoint: dec codepoint value
    // blockfile: boolean, determines whether to return the group name or block file name
	// returns: if blockfile not set, the Unicode block name, with spaces converted to _
    //          if blockfile set, the name of the block file under scripts
	//          or, if neither is found, ''
	
	if(typeof blockfile === 'undefined') { blockfile = false }
    if (blockfile) var field = 5
    else field = 2
    
    // find the script group
	if (charNum < 128) { return scriptGroups[1][field].replace(/ /g,'_') }
	var i=1
	while ( i<scriptGroups.length && charNum > scriptGroups[i][1] ) { i++ }
    
    // figure out what to return
	if ( i == scriptGroups.length ) { return '' }
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
    for (let i=0;i<itemlist.length;i++) { 
        out+=itemlist[i].textContent+' '; 
        } 
    out = out.replace(/-/g,'')
    out = out.replace(/•/g,'')
    showNameDetails(out, lang, window.base, 'c', document.getElementById('panel'), 'list' )
    }


function getPhonemeList () {
	inp = document.getElementById('title').textContent
	out = ''
	notfound = ''
	list = inp.split(' ')
	for (i=0;i<list.length; i++) {
		char = list[i].replace(/-|–/g,'')
		//if (spreadsheetRows[list[i]]) out += spreadsheetRows[list[i]][cols.ipaLoc] + '\t' + list[i] + '\n'
		if (spreadsheetRows[char] || char === 'x') out += spreadsheetRows[char][cols.ipaLoc] + '\t' + list[i] + '\n'
		else notfound += list[i] + '\n'
		}
	if (notfound !== '') out += '\n\nNot found:\n'+notfound
	return out
	}





function makeDetails (chars) {

if (typeof charDetails === 'undefined') return

var out = ''
//var charArray = chars.split('␣')
var charArray = [... chars]

//out += '<summary>Details</summary>'
//out += '<table id="index_letters_vowels_details">'

for (let i=0;i<charArray.length;i++) {
	if (spreadsheetRows[charArray[i]]) {
		out += '<tr><th class="cdChar" onclick="this.parentNode.parentNode.parentNode.style.display=\'none\'"><span class="ex" lang="fuf">'+charArray[i]+'</span><br><span class="cdCharClose">x</span></th>'
		out += '<td class="cdData">'
		out += '<p class="cdHeader"><span class="uname cdTitle">'+spreadsheetRows[charArray[i]][cols['ucsName']]+'</span> '
	
		if (spreadsheetRows[charArray[i]][cols['nameLoc']] && spreadsheetRows[charArray[i]][cols['nameLoc']] != '0') out += ' &nbsp; <span class="transliteratedname trans">'+spreadsheetRows[charArray[i]][cols['nameLoc']]+'</span>'
		out += '<br>'

		out += '<span class="cdBasics">'
		if (spreadsheetRows[charArray[i]][cols['typeLoc']]) out += '<span class="charType">'+spreadsheetRows[charArray[i]][cols['typeLoc']]+'</span>'
		if (spreadsheetRows[charArray[i]][cols['statusLoc']]) out += ' &nbsp; (<span class="charType">'+spreadsheetRows[charArray[i]][cols['statusLoc']]+'</span>)'
		if (spreadsheetRows[charArray[i]][cols['ipaLoc']]) out += ' &nbsp; <span class="charIPA ipa">'+spreadsheetRows[charArray[i]][cols['ipaLoc']]+'</span>'
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

	/*
	convertTranscriptionData(evt.target)
	*/
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
	var insertTranscriptions = document.querySelectorAll('.insertTranscription')

	// do the inserted transcription locations
	if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
		for (var it=0;it<insertTranscriptions.length;it++) {
			para = ''
			for (let i=0;i<cols.othertranscriptions.length;i++) {
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
