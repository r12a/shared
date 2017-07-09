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


