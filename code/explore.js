// code for opening apps/docs to view info about character(s)

// DEPENDENCY: For links to Core Spec the app needs to load linkdb.js


function explore (chars, destination, script, scriptname) {
    // used by select control in printProperties to open the relevant app/document

    console.log('Chars:',chars, 'Destination:',destination, 'Script:',script, 'Scriptname:',scriptname)

    switch (destination) {
        case 'charuse': openUsageWin(chars); break
        case 'listgc': openListGenCatWindow(chars); break
        case 'listbidi': openListBidiWindow(chars); break
        case 'listindic': openListindicWindow(chars); break
        case 'listlinebreak': openListlinebreakWindow(chars); break
        case 'listchars': openListCharsWindow(chars); break
        case 'analyseipa': openAnalyseIPAWindow(chars); break
        case 'escapes': openEscapesWindow(chars); break
        case 'analysestring': openAnalyseStringWindow(chars); break
        case 'graphemeclusters': openGraphemeClusterWindow(chars); break

        case 'fontlister': openFontListWindow(chars, script); break
        case 'characternotes': openCharacterNotesWindow(chars, script); break
        case 'scriptlinks': openScriptLinksWindow(chars, script); break
        case 'notofonts': openNotoFontsWindow(chars, scriptname); break
        case 'textsamples': openTextSamplesWindow(chars, script); break
        case 'corespec': openCoreSpecWindow(chars, script); break
        }

    }





function openUsageWin (chars) {
    // reduce characters to one of each
    console.log('opening',chars)
    filtered = [...chars]
    const uniqueSet = new Set(filtered)
    const backToArray = [...uniqueSet]
    chars = backToArray.join('')
	var usage = window.open('../app-charuse/index.html?charlist='+	encodeURIComponent(chars), 'usage') 
	usage.focus()
	}


function openListindicWindow (chars) {
	var listindic = window.open('../scripts/apps/listindic/index.html?chars='+encodeURIComponent(chars), 'listindic') 
	listindic.focus()
	}


function openListlinebreakWindow (chars) {
	var listlines = window.open('../scripts/apps/listlinebreak/index.html?chars='+	encodeURIComponent(chars), 'listlines') 
	listlines.focus()
	}


function openListGenCatWindow (chars) {
	var gencat = window.open('../scripts/apps/listcategories/index.html?chars='+	encodeURIComponent(chars), 'gencat') 
	gencat.focus()
	}


function openListBidiWindow (chars) {
	var listbidi = window.open('../scripts/apps/listbidi/index.html?chars='+	encodeURIComponent(chars), 'listbidi') 
	listbidi.focus()
	}


function openListCharsWindow (chars) {
	var listcharacters = window.open('../app-listcharacters/index.html?chars='+	encodeURIComponent(chars), 'listcharacters') 
	listcharacters.focus()
	}


function openAnalyseIPAWindow (chars) {
	var ipawindow = window.open('../scripts/apps/ipa_analyser/index.html?q='+	encodeURIComponent(chars), 'ipawindow') 
	ipawindow.focus()
	}


function openFontListWindow (chars, script) {
	var fontlistwindow = window.open('../scripts/fontlist/index.html?script='+encodeURIComponent(script)+'&text='+encodeURIComponent(chars), 'fontlistwindow') 
	fontlistwindow.focus()
	}


function openCharacterNotesWindow (chars, script) {
    char = chars.codePointAt(0).toString(16)
    while (char.length < 4) char = '0'+char
	var characternoteswindow = window.open('../scripts/'+script+'/block.html#char'+encodeURIComponent(char), 'characternoteswindow') 
	characternoteswindow.focus()
	}


function openScriptLinksWindow (chars, script) {
	var linkswindow = window.open('../scripts/links.html?iso='+encodeURIComponent(script)+'&clickthrough='+chars, 'linkswindow') 
	linkswindow.focus()
	}


function openNotoFontsWindow (chars, script) {
	var notowindow = window.open('https://notofonts.github.io/#'+encodeURIComponent(script.toLowerCase()), 'notowindow') 
	notowindow.focus()
	}

function openTextSamplesWindow (chars, script) {
	var textsampleswindow = window.open('../scripts/samples/index.html?script='+encodeURIComponent(script), 'textsampleswindow') 
	textsampleswindow.focus()
	}

function openEscapesWindow (chars, script) {
	var escapeswindow = window.open('../app-conversion/index.html?q='+encodeURIComponent(chars), 'escapeswindow') 
	escapeswindow.focus()
	}

function openAnalyseStringWindow (chars, script) {
	var analysestringwindow = window.open('../app-analysestring/index.html?chars='+encodeURIComponent(chars), 'analysestringwindow') 
	analysestringwindow.focus()
	}

function openGraphemeClusterWindow (chars) {
	var gcwindow = window.open('../scripts/apps/graphemes/index.html?q='+encodeURIComponent(chars), 'gcwindow') 
	gcwindow.focus()
	}

function openCoreSpecWindow (chars, script) {
    var parts = linkDB[script].htmlchapter.split('/')
	var corespec = window.open('https://unicode.org/versions/Unicode16.0.0/core-spec/chapter-'+parts[0]+'/'+parts[1], 'corespec') 
	corespec.focus()
	}




