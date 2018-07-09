function addFontToLists (fontname, selectionlists, announce = true) {
	// adds a font to the selection lists
	
	if (fontname === '' || fontname === null) { return }
	
	var test = fontname.match(/[^a-zA-Z0-9-_\s]/)
	if (test) { 
		alert("Bad font name.") 
		return
		}
		
	var selectionelements = selectionlists.split(',')
	
    for (var i=0;i<selectionelements.length;i++) {
        var selectlist = document.getElementById(selectionelements[i])
        if (selectlist.querySelector('#userFontSelections') === null) {
            var optGroup = document.createElement('optgroup')
            optGroup.id = 'userFontSelections'
            optGroup.label = 'User-nominated fonts'
            selectlist.appendChild(optGroup)
            }
        else optGroup = selectlist.querySelector('#userFontSelections')

		var option = document.createElement('option')
		option.textContent = fontname
		option.value = fontname
		optGroup.appendChild(option)
		}

    if (announce) alert('The font '+fontname+' has been added to the selection lists.')
	}



function removeUserFonts (selectionlists) {
	// removes user-specified fonts from the selection lists
	
	var selectionelements = selectionlists.split(',')
	
    for (var i=0;i<selectionelements.length;i++) {
        var selectlist = document.getElementById(selectionelements[i])
        if (selectlist.querySelector('#userFontSelections') !== null) {
            selectlist.querySelector('#userFontSelections').innerHTML = ''
            }
		}
	}

