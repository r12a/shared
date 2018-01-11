// functions to display a panel listing codepoints in a string
// used in script pages, pickers, and ...

// ALSO NEEDED: 
// shared/code/character_conversions.js



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
	node.onclick = function(){ showNameDetails(node.firstChild.data, getLanguage(node), base, target, document.getElementById('panel')) }
	}


function getLanguage(node) {
	// given a node, returns lang value of node or nearest parent
	if(node.lang) return node.lang
	else if(node.parentNode) return getLanguage(node.parentNode)
	else return ''
	}






function showNameDetails (chars, clang, base, target, panel,list) { 
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
    
    advice = document.createElement('p')
    advice.appendChild(document.createTextNode('Click on name for details.'))
    advice.id = 'advice'
    advice.style.textAlign = 'right'
    advice.style.fontStyle = 'italic'
    advice.style.fontSize = '80%'
    advice.style.marginRight = '2em'
    replacement.appendChild(advice)
	
	// create a list of characters
	var charArray = []
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'')
	convertStr2DecArray(chars, charArray)
	var chardiv, charimg, thename, thelink, hex

	for (var c=0; c<charArray.length; c++) { 
		if (charData[String.fromCodePoint(charArray[c])]) {
			hex = charArray[c].toString(16)
			while (hex.length < 4) { hex = '0'+hex }
			hex = hex.toUpperCase()
			chardiv = document.createElement('div')
			charimg = document.createElement('img')
			charimg.src = '/c/'+getScriptGroup(charArray[c])+"/"+hex+'.png'
			charimg.alt = 'U+'+hex
			chardiv.appendChild(charimg)
			thelink = document.createElement('a');
			if (base === '/uniview/?char=') { thelink.href = base+hex }
			else { thelink.href = base+'#char'+hex }
			thelink.target = target
			thelink.appendChild(charimg)
			thelink.appendChild(document.createTextNode(' U+'+hex));
			thename = document.createTextNode(' '+charData[String.fromCodePoint(charArray[c])])
			thelink.appendChild(thename)
			chardiv.appendChild(thelink)
			//chardiv.appendChild(thename)

			replacement.appendChild(chardiv);
			}
		else {
			hex = charArray[c].toString(16)
			while (hex.length < 4) { hex = '0'+hex }
			hex = hex.toUpperCase()
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
	
	// add a close button
	var p = document.createElement('p')
	p.style.textAlign = 'right'
	var img = document.createElement('img')
	img.src = '/scripts/block/images/close.png'
	img.alt = 'Close'
	img.style.cursor = 'pointer'
	shownames_setClose(img)
	p.appendChild(img)	
	panel.appendChild(p)
	}


function getScriptGroup (charNum) {
	// find the name of the script group
	//   for the character in codepoint
	// codepoint: dec codepoint value
	// returns: the Unicode block name, if successful, with spaces converted to _
	//          otherwise ''
	
	if (charNum < 128) { return scriptGroups[1][2].replace(/ /g,'_') }
	var i=1
	while ( i<scriptGroups.length && charNum > scriptGroups[i][1] ) { i++ } 
	if ( i == scriptGroups.length ) { return '' }
	else { 
		return scriptGroups[i][2].replace(/ /g,'_')
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
    showNameDetails(out, lang, window.base, 'c', document.getElementById('panel'), 'list' )
    }
