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
	node.onclick = function(){ showNameDetails(node.firstChild.data, getLanguage(node), base, target, document.getElementById('panel'), list, getTransliteration(node)) }
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
    a.onclick = "makePhoneticList"
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
	shownames_setClose(img)
	p.appendChild(img)	
	panel.appendChild(p)
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