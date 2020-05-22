// various functions for converting between characters and code point values etc


function convertStr2DecArray ( textString, array ) { 
	// takes an array and a string and fills the array with decimal codepoints representing chars in the string
	var haut = 0
	var n = 0
	var ptr = 0
	for (var i = 0; i < textString.length; i++) {
		var b = textString.charCodeAt(i) 
		if (b < 0 || b > 0xFFFF) {
			console.log('Error in convertChar2CP: byte out of range ' + b + '!')
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				array[ptr] = 0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)
				haut = 0
				ptr++
				continue
				}
			else {
				console.log('Error in convertChar2CP: surrogate out of range ' + haut + '!')
				haut = 0
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) {
			haut = b
			}
		else {
			array[ptr] = b
			ptr++
			}
		}
	return array.length
	}




function convertStr2CharArray ( textString, array ) { 
	// takes an array and a string and fills the array with decimal codepoints representing chars in the string
	var ptr = 0
	for (var i = 0; i < textString.length; i++) {
		var b = textString.charAt(i) 
		if ('\uD800' <= b && b <= '\uDBFF') {
			array[ptr] = textString.charAt(i)+textString.charAt(i+1)  // note: i need to add error checking here at some point
			i++
			ptr++
			}
		else {
			array[ptr] = textString.charAt(i)
			ptr++
			}
		}
	return array.length
	}



function escapeNonASCII (str) {
	// used to convert output of function that produces xx-translit.js files into JavaScript.  
	// Used to avoid normalisation problems during cut&paste
	
	var chars = [...str]
	for (let i=0;i<chars.length;i++) {
		if (chars[i].codePointAt(0) > 127) chars[i] = '\\u{'+chars[i].codePointAt(0).toString(16).toUpperCase()+'}'
		}
	
	return chars.join('')	
	}