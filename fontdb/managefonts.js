/* jshint strict: false */
/* globals fontDB */



function makeFontChanger (lang, fontlocale, webFonts, size) {
    // make the panel with the vertical blue line, bottom right of window
    // makeFontChanger(window.languageList.join(','), window.scriptISO, window.webfonts, window.defaultSize)
    // locals: out, temp, i
    // calls: makeFontList
    
    if (document.getElementById('fontsetting') === null) return

	var out = '<h2 class="notoc"><a id="fonts">Fonts</a></h2>'
	out += '<div id="fontsettingswitch" title="Click to show/hide the panel."  onclick="if (this.parentNode.className == \'open\'){this.parentNode.className=\'closed\'; this.textContent=\'◀\';} else {this.parentNode.className=\'open\';this.textContent=\'▶\';}">◀</div>'
	
	out += '<p>Language to change: <select id="langtag">'
	var temp = lang.split(',')
	for (var i=0;i<temp.length;i++) {
		out += '<option value="'+temp[i]+'">'+temp[i]+'</option>'
		}
	out += '</select>'
	out += '</p>'
	
	out += '<p>Change font to<br/>'
    out += '<select id="fontSelect" onchange="changeFont(this.value, document.getElementById(\'langtag\').value)">'
	
	out += makeFontList(fontlocale, webFonts)
	
	out += '</select>'
      
	out += '<p>Change size:<br /><input id="fontSizeSlider" type="range" min="12" max="80" step="1" value="'+size.replace(/px/,'')+'" onInput="changeSize(this.value, document.getElementById(\'langtag\').value); document.getElementById(\'sizeIndicator\').textContent=this.value+\'px\'"> &#xA0; <span id="sizeIndicator">'+size+'</span>'
 
 	out += '<p onclick="newfont=prompt(\'Enter the font name. (Only spaces, hyphens, underlines and alphanum allowed.)\', \'...\'); addFontToLists(newfont, document.getElementById(\'fontSelect\'));" style="cursor:pointer;">Add a font to the font list</p>'
	document.getElementById('fontsetting').innerHTML = out
	}





function changeFont (fontname, language) {
    // used by the font dialogue box to change the font for a document's examples
    // local searchstr examples e largeChars
    
	if (language === '') return
	
	// change the examples
	var searchstr = '[lang="'+language+'"]'
	var examples = document.querySelectorAll(searchstr)
	for (var e=0;e<examples.length;e++) {
		examples[e].style.fontFamily = "'"+fontname+"'"
		}

	// change the large characters if this is a block file
	var largeChars = document.querySelectorAll('.charimg')
	for (e=0;e<largeChars.length;e++) {  
		largeChars[e].style.fontFamily = fontname
		}
	}



function changeSize (size, language) {
    // used by the font dialogue box to change the font size for a document's examples
    // local searchstr examples e
    
	if (size === '') return
	
	// change the examples
	var searchstr = '[lang="'+language+'"]'
	var examples = document.querySelectorAll(searchstr)
	for (var e=0;e<examples.length;e++) {
		if (examples[e].id && examples[e].id === 'freeText') continue
		else examples[e].style.fontSize = size+'px'
		}
	}



function makeFontList (fontlocale, webFonts) {
    // called by makeFontChanger
    // calls createFontPulldowns
    // global fontDB
    // local localeList rec macArray winArray notoArray silArray otherArray
    
    if (typeof fontDB === 'undefined') {
        //fontSelection = ''
        webFonts = ''
        }
    else {  
        // create a subset of the fontDB
        var localeList = []
        for (var rec in fontDB) { 
            if (fontDB[rec].locales.has(fontlocale)) localeList.push(fontDB[rec])
            }
        var macArray = ["Mac fonts"]
        var winArray = ["Windows fonts"]
        var notoArray = ["Google fonts"]
        var silArray = ["SIL fonts"]
        var otherArray = ["Other fonts"]
        for (rec in localeList) {
            if (localeList[rec].system.has('mac')) macArray.push(localeList[rec].name)
            if (localeList[rec].system.has('win')) winArray.push(localeList[rec].name)
            if (localeList[rec].system.has('goog')) notoArray.push(localeList[rec].name)
            if (localeList[rec].system.has('sil')) silArray.push(localeList[rec].name)
            if (localeList[rec].system.has('other')) otherArray.push(localeList[rec].name)
            }

        fontDB = []
        fontDB.push(macArray)
        fontDB.push(winArray)
        fontDB.push(notoArray)
        fontDB.push(silArray)
        fontDB.push(otherArray)
        macArray = []
        winArray = []
        notoArray = []
        silArray = []
        otherArray = []

        return createFontPulldowns( webFonts)
        }
    }




function createFontPulldowns (webFonts) {
	// create the select list markup for the font pulldowns (used if fontDB available)
    // called by makeFontList
    // global fontDB
    // local out w r i
	
	if (typeof webFonts === 'undefined') alert('The webFonts array is not defined.')
	
	var out = '<optgroup label="Webfonts">\n'
	for (var w=0;w<webFonts.length;w++) {
		out += '<option value="'+webFonts[w]+'">'+webFonts[w]+'</option>\n'
		}
	out += '</optgroup>\n'
	
	for (var r=0; r<fontDB.length;r++) {
		if (fontDB[r].length > 1) {
			out += '<optgroup label="'+fontDB[r][0]+'">\n'
			for (var i=1;i<fontDB[r].length;i++) {
				out += '<option value="'+fontDB[r][i]+'">'+fontDB[r][i]+'</option>\n'
				}
			out += '</optgroup>\n'
			}
		}
	return out
	}



function addFontToLists (fontname, selectlist, announce) {
	// adds a font to the selection lists
    // interactive: called from font dialogue box
    // local: test optGroup option 
    
	
	if (fontname === '' || fontname === null) { return }
    if (typeof announce === 'undefined') announce = true
	
	var test = fontname.match(/[^a-zA-Z0-9-_\s]/)
	if (test) { 
		alert("Bad font name.") 
		return
		}

	if (selectlist.querySelector('#userFontSelections') === null) {
		var optGroup = document.createElement('optgroup')
		optGroup.id = 'userFontSelections'
		optGroup.label = 'My fonts'
		selectlist.appendChild(optGroup)
		}
	else optGroup = selectlist.querySelector('#userFontSelections')

	var option = document.createElement('option')
	option.textContent = fontname
	option.value = fontname
	optGroup.appendChild(option)
	

    if (announce) alert('The font '+fontname+' has been added to the selection lists.')
	}



function removeUserFonts (selectionlists) {
	// removes user-specified fonts from the selection lists
    // local: selectionelements i
	
	var selectionelements = selectionlists.split(',')
	
    for (var i=0;i<selectionelements.length;i++) {
        var selectlist = document.getElementById(selectionelements[i])
        if (selectlist.querySelector('#userFontSelections') !== null) {
            selectlist.querySelector('#userFontSelections').innerHTML = ''
            }
		}
	}

