function addFontToLists (fontname, selectionlists) {
	// adds a font to the selection lists
	
	if (fontname === '' || fontname === null) { return }
	
	var test = fontname.match(/[^a-zA-Z0-9-_\s]/)
	if (test) { 
		alert("Bad font name.") 
		return
		}
		
	selectionelements = selectionlists.split(',')
	
	for (var i=0;i<selectionelements.length;i++) {
		var option = document.createElement('option')
		option.textContent = fontname
		option.value = fontname
		
		selectlist = document.getElementById(selectionelements[i])
		selectlist.appendChild(option)
		}
		
	alert('The font '+fontname+' has been added to the selection list(s).')
	}

