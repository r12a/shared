var spreadsheet = `
¡		latin-1 punctuation/symbol	letter	U+00A1: INVERTED EXCLAMATION MARK	latin
¢		latin-1 punctuation/symbol	letter	U+00A2: CENT SIGN	latin
£		latin-1 punctuation/symbol	letter	U+00A3: POUND SIGN	latin
¤		latin-1 punctuation/symbol	letter	U+00A4: CURRENCY SIGN	
¥		latin-1 punctuation/symbol	letter	U+00A5: YEN SIGN	
¦		latin-1 punctuation/symbol	letter	U+00A6: BROKEN BAR	
§		latin-1 punctuation/symbol	letter	U+00A7: SECTION SIGN	
¨		latin-1 punctuation/symbol	letter	U+00A8: DIAERESIS	
©		latin-1 punctuation/symbol	letter	U+00A9: COPYRIGHT SIGN	
ª		latin-1 punctuation/symbol	letter	U+00AA: FEMININE ORDINAL INDICATOR	
«		latin-1 punctuation/symbol	letter	U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
¬		latin-1 punctuation/symbol	letter	U+00AC: NOT SIGN	
­		latin-1 punctuation/symbol	letter	U+00AD: SOFT HYPHEN	
®		latin-1 punctuation/symbol	letter	U+00AE: REGISTERED SIGN	
¯		latin-1 punctuation/symbol	letter	U+00AF: MACRON	
°		latin-1 punctuation/symbol	letter	U+00B0: DEGREE SIGN	
±		latin-1 punctuation/symbol	letter	U+00B1: PLUS-MINUS SIGN	
²		latin-1 punctuation/symbol	letter	U+00B2: SUPERSCRIPT TWO	
³		latin-1 punctuation/symbol	letter	U+00B3: SUPERSCRIPT THREE	
´		latin-1 punctuation/symbol	letter	U+00B4: ACUTE ACCENT	
µ		latin-1 punctuation/symbol	letter	U+00B5: MICRO SIGN	
¶		latin-1 punctuation/symbol	letter	U+00B6: PILCROW SIGN	
·		latin-1 punctuation/symbol	letter	U+00B7: MIDDLE DOT	
¸		latin-1 punctuation/symbol	letter	U+00B8: CEDILLA	
¹		latin-1 punctuation/symbol	letter	U+00B9: SUPERSCRIPT ONE	
º		latin-1 punctuation/symbol	letter	U+00BA: MASCULINE ORDINAL INDICATOR	
»		latin-1 punctuation/symbol	letter	U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
¼		vulgar fraction	letter	U+00BC: VULGAR FRACTION ONE QUARTER	
½		vulgar fraction	letter	U+00BD: VULGAR FRACTION ONE HALF	
¾		vulgar fraction	letter	U+00BE: VULGAR FRACTION THREE QUARTERS	
¿		punctuation	letter	U+00BF: INVERTED QUESTION MARK	
À			letter	U+00C0: LATIN CAPITAL LETTER A WITH GRAVE	
Á			letter	U+00C1: LATIN CAPITAL LETTER A WITH ACUTE	
Â			letter	U+00C2: LATIN CAPITAL LETTER A WITH CIRCUMFLEX	
Ã			letter	U+00C3: LATIN CAPITAL LETTER A WITH TILDE	
Ä			letter	U+00C4: LATIN CAPITAL LETTER A WITH DIAERESIS	
Å			letter	U+00C5: LATIN CAPITAL LETTER A WITH RING ABOVE	
Æ			letter	U+00C6: LATIN CAPITAL LETTER AE	
Ç			letter	U+00C7: LATIN CAPITAL LETTER C WITH CEDILLA	
È			letter	U+00C8: LATIN CAPITAL LETTER E WITH GRAVE	
É			letter	U+00C9: LATIN CAPITAL LETTER E WITH ACUTE	
Ê			letter	U+00CA: LATIN CAPITAL LETTER E WITH CIRCUMFLEX	
Ë			letter	U+00CB: LATIN CAPITAL LETTER E WITH DIAERESIS	
Ì			letter	U+00CC: LATIN CAPITAL LETTER I WITH GRAVE	
Í			letter	U+00CD: LATIN CAPITAL LETTER I WITH ACUTE	
Î			letter	U+00CE: LATIN CAPITAL LETTER I WITH CIRCUMFLEX	
Ï			letter	U+00CF: LATIN CAPITAL LETTER I WITH DIAERESIS	
Ð			letter	U+00D0: LATIN CAPITAL LETTER ETH	
Ñ			letter	U+00D1: LATIN CAPITAL LETTER N WITH TILDE	
Ò			letter	U+00D2: LATIN CAPITAL LETTER O WITH GRAVE	
Ó			letter	U+00D3: LATIN CAPITAL LETTER O WITH ACUTE	
Ô			letter	U+00D4: LATIN CAPITAL LETTER O WITH CIRCUMFLEX	
Õ			letter	U+00D5: LATIN CAPITAL LETTER O WITH TILDE	
Ö			letter	U+00D6: LATIN CAPITAL LETTER O WITH DIAERESIS	
×		mathematical operator	letter	U+00D7: MULTIPLICATION SIGN	
Ø			letter	U+00D8: LATIN CAPITAL LETTER O WITH STROKE	
Ù			letter	U+00D9: LATIN CAPITAL LETTER U WITH GRAVE	
Ú			letter	U+00DA: LATIN CAPITAL LETTER U WITH ACUTE	
Û			letter	U+00DB: LATIN CAPITAL LETTER U WITH CIRCUMFLEX	
Ü			letter	U+00DC: LATIN CAPITAL LETTER U WITH DIAERESIS	
Ý			letter	U+00DD: LATIN CAPITAL LETTER Y WITH ACUTE	
Þ			letter	U+00DE: LATIN CAPITAL LETTER THORN	
ß			letter	U+00DF: LATIN SMALL LETTER SHARP S	
à			letter	U+00E0: LATIN SMALL LETTER A WITH GRAVE	
á			letter	U+00E1: LATIN SMALL LETTER A WITH ACUTE	
â			letter	U+00E2: LATIN SMALL LETTER A WITH CIRCUMFLEX	
ã			letter	U+00E3: LATIN SMALL LETTER A WITH TILDE	
ä			letter	U+00E4: LATIN SMALL LETTER A WITH DIAERESIS	
å			letter	U+00E5: LATIN SMALL LETTER A WITH RING ABOVE	
æ			letter	U+00E6: LATIN SMALL LETTER AE	
ç			letter	U+00E7: LATIN SMALL LETTER C WITH CEDILLA	
è			letter	U+00E8: LATIN SMALL LETTER E WITH GRAVE	
é			letter	U+00E9: LATIN SMALL LETTER E WITH ACUTE	
ê			letter	U+00EA: LATIN SMALL LETTER E WITH CIRCUMFLEX	
ë			letter	U+00EB: LATIN SMALL LETTER E WITH DIAERESIS	
ì			letter	U+00EC: LATIN SMALL LETTER I WITH GRAVE	
í			letter	U+00ED: LATIN SMALL LETTER I WITH ACUTE	
î			letter	U+00EE: LATIN SMALL LETTER I WITH CIRCUMFLEX	
ï			letter	U+00EF: LATIN SMALL LETTER I WITH DIAERESIS	
ð			letter	U+00F0: LATIN SMALL LETTER ETH	
ñ			letter	U+00F1: LATIN SMALL LETTER N WITH TILDE	
ò			letter	U+00F2: LATIN SMALL LETTER O WITH GRAVE	
ó			letter	U+00F3: LATIN SMALL LETTER O WITH ACUTE	
ô			letter	U+00F4: LATIN SMALL LETTER O WITH CIRCUMFLEX	
õ			letter	U+00F5: LATIN SMALL LETTER O WITH TILDE	
ö			letter	U+00F6: LATIN SMALL LETTER O WITH DIAERESIS	
÷		mathematical operator	letter	U+00F7: DIVISION SIGN	
ø			letter	U+00F8: LATIN SMALL LETTER O WITH STROKE	
ù			letter	U+00F9: LATIN SMALL LETTER U WITH GRAVE	
ú			letter	U+00FA: LATIN SMALL LETTER U WITH ACUTE	
û			letter	U+00FB: LATIN SMALL LETTER U WITH CIRCUMFLEX	
ü			letter	U+00FC: LATIN SMALL LETTER U WITH DIAERESIS	
ý			letter	U+00FD: LATIN SMALL LETTER Y WITH ACUTE	
þ			letter	U+00FE: LATIN SMALL LETTER THORN	
ÿ			letter	U+00FF: LATIN SMALL LETTER Y WITH DIAERESIS	
					
					
Ā		european Latin	letter	U+0100: LATIN CAPITAL LETTER A WITH MACRON	
ā		european Latin	letter	U+0101: LATIN SMALL LETTER A WITH MACRON	
Ă		european Latin	letter	U+0102: LATIN CAPITAL LETTER A WITH BREVE	
ă		european Latin	letter	U+0103: LATIN SMALL LETTER A WITH BREVE	
Ą		european Latin	letter	U+0104: LATIN CAPITAL LETTER A WITH OGONEK	
ą		european Latin	letter	U+0105: LATIN SMALL LETTER A WITH OGONEK	
Ć		european Latin	letter	U+0106: LATIN CAPITAL LETTER C WITH ACUTE	
ć		european Latin	letter	U+0107: LATIN SMALL LETTER C WITH ACUTE	
Ĉ		european Latin	letter	U+0108: LATIN CAPITAL LETTER C WITH CIRCUMFLEX	
ĉ		european Latin	letter	U+0109: LATIN SMALL LETTER C WITH CIRCUMFLEX	
Ċ		european Latin	letter	U+010A: LATIN CAPITAL LETTER C WITH DOT ABOVE	
ċ		european Latin	letter	U+010B: LATIN SMALL LETTER C WITH DOT ABOVE	
Č		european Latin	letter	U+010C: LATIN CAPITAL LETTER C WITH CARON	
č		european Latin	letter	U+010D: LATIN SMALL LETTER C WITH CARON	
Ď		european Latin	letter	U+010E: LATIN CAPITAL LETTER D WITH CARON	
ď		european Latin	letter	U+010F: LATIN SMALL LETTER D WITH CARON	
Đ		european Latin	letter	U+0110: LATIN CAPITAL LETTER D WITH STROKE	
đ		european Latin	letter	U+0111: LATIN SMALL LETTER D WITH STROKE	
Ē		european Latin	letter	U+0112: LATIN CAPITAL LETTER E WITH MACRON	
ē		european Latin	letter	U+0113: LATIN SMALL LETTER E WITH MACRON	
Ĕ		european Latin	letter	U+0114: LATIN CAPITAL LETTER E WITH BREVE	
ĕ		european Latin	letter	U+0115: LATIN SMALL LETTER E WITH BREVE	
Ė		european Latin	letter	U+0116: LATIN CAPITAL LETTER E WITH DOT ABOVE	
ė		european Latin	letter	U+0117: LATIN SMALL LETTER E WITH DOT ABOVE	
Ę		european Latin	letter	U+0118: LATIN CAPITAL LETTER E WITH OGONEK	
ę		european Latin	letter	U+0119: LATIN SMALL LETTER E WITH OGONEK	
Ě		european Latin	letter	U+011A: LATIN CAPITAL LETTER E WITH CARON	
ě		european Latin	letter	U+011B: LATIN SMALL LETTER E WITH CARON	
Ĝ		european Latin	letter	U+011C: LATIN CAPITAL LETTER G WITH CIRCUMFLEX	
ĝ		european Latin	letter	U+011D: LATIN SMALL LETTER G WITH CIRCUMFLEX	
Ğ		european Latin	letter	U+011E: LATIN CAPITAL LETTER G WITH BREVE	
ğ		european Latin	letter	U+011F: LATIN SMALL LETTER G WITH BREVE	
Ġ		european Latin	letter	U+0120: LATIN CAPITAL LETTER G WITH DOT ABOVE	
ġ		european Latin	letter	U+0121: LATIN SMALL LETTER G WITH DOT ABOVE	
Ģ		european Latin	letter	U+0122: LATIN CAPITAL LETTER G WITH CEDILLA	
ģ		european Latin	letter	U+0123: LATIN SMALL LETTER G WITH CEDILLA	
Ĥ		european Latin	letter	U+0124: LATIN CAPITAL LETTER H WITH CIRCUMFLEX	
ĥ		european Latin	letter	U+0125: LATIN SMALL LETTER H WITH CIRCUMFLEX	
Ħ		european Latin	letter	U+0126: LATIN CAPITAL LETTER H WITH STROKE	
ħ		european Latin	letter	U+0127: LATIN SMALL LETTER H WITH STROKE	
Ĩ		european Latin	letter	U+0128: LATIN CAPITAL LETTER I WITH TILDE	
ĩ		european Latin	letter	U+0129: LATIN SMALL LETTER I WITH TILDE	
Ī		european Latin	letter	U+012A: LATIN CAPITAL LETTER I WITH MACRON	
ī		european Latin	letter	U+012B: LATIN SMALL LETTER I WITH MACRON	
Ĭ		european Latin	letter	U+012C: LATIN CAPITAL LETTER I WITH BREVE	
ĭ		european Latin	letter	U+012D: LATIN SMALL LETTER I WITH BREVE	
Į		european Latin	letter	U+012E: LATIN CAPITAL LETTER I WITH OGONEK	
į		european Latin	letter	U+012F: LATIN SMALL LETTER I WITH OGONEK	
İ		european Latin	letter	U+0130: LATIN CAPITAL LETTER I WITH DOT ABOVE	
ı		european Latin	letter	U+0131: LATIN SMALL LETTER DOTLESS I	
Ĳ		european Latin	letter	U+0132: LATIN CAPITAL LIGATURE IJ	
ĳ		european Latin	letter	U+0133: LATIN SMALL LIGATURE IJ	
Ĵ		european Latin	letter	U+0134: LATIN CAPITAL LETTER J WITH CIRCUMFLEX	
ĵ		european Latin	letter	U+0135: LATIN SMALL LETTER J WITH CIRCUMFLEX	
Ķ		european Latin	letter	U+0136: LATIN CAPITAL LETTER K WITH CEDILLA	
ķ		european Latin	letter	U+0137: LATIN SMALL LETTER K WITH CEDILLA	
ĸ		european Latin	letter	U+0138: LATIN SMALL LETTER KRA	
Ĺ		european Latin	letter	U+0139: LATIN CAPITAL LETTER L WITH ACUTE	
ĺ		european Latin	letter	U+013A: LATIN SMALL LETTER L WITH ACUTE	
Ļ		european Latin	letter	U+013B: LATIN CAPITAL LETTER L WITH CEDILLA	
ļ		european Latin	letter	U+013C: LATIN SMALL LETTER L WITH CEDILLA	
Ľ		european Latin	letter	U+013D: LATIN CAPITAL LETTER L WITH CARON	
ľ		european Latin	letter	U+013E: LATIN SMALL LETTER L WITH CARON	
Ŀ		european Latin	letter	U+013F: LATIN CAPITAL LETTER L WITH MIDDLE DOT	
ŀ		european Latin	letter	U+0140: LATIN SMALL LETTER L WITH MIDDLE DOT	
Ł		european Latin	letter	U+0141: LATIN CAPITAL LETTER L WITH STROKE	
ł		european Latin	letter	U+0142: LATIN SMALL LETTER L WITH STROKE	
Ń		european Latin	letter	U+0143: LATIN CAPITAL LETTER N WITH ACUTE	
ń		european Latin	letter	U+0144: LATIN SMALL LETTER N WITH ACUTE	
Ņ		european Latin	letter	U+0145: LATIN CAPITAL LETTER N WITH CEDILLA	
ņ		european Latin	letter	U+0146: LATIN SMALL LETTER N WITH CEDILLA	
Ň		european Latin	letter	U+0147: LATIN CAPITAL LETTER N WITH CARON	
ň		european Latin	letter	U+0148: LATIN SMALL LETTER N WITH CARON	
ŉ		deprecated letter	letter	U+0149: LATIN SMALL LETTER N PRECEDED BY APOSTROPHE	
Ŋ		european Latin	letter	U+014A: LATIN CAPITAL LETTER ENG	
ŋ		european Latin	letter	U+014B: LATIN SMALL LETTER ENG	
Ō		european Latin	letter	U+014C: LATIN CAPITAL LETTER O WITH MACRON	
ō		european Latin	letter	U+014D: LATIN SMALL LETTER O WITH MACRON	
Ŏ		european Latin	letter	U+014E: LATIN CAPITAL LETTER O WITH BREVE	
ŏ		european Latin	letter	U+014F: LATIN SMALL LETTER O WITH BREVE	
Ő		european Latin	letter	U+0150: LATIN CAPITAL LETTER O WITH DOUBLE ACUTE	
ő		european Latin	letter	U+0151: LATIN SMALL LETTER O WITH DOUBLE ACUTE	
Œ		european Latin	letter	U+0152: LATIN CAPITAL LIGATURE OE	
œ		european Latin	letter	U+0153: LATIN SMALL LIGATURE OE	
Ŕ		european Latin	letter	U+0154: LATIN CAPITAL LETTER R WITH ACUTE	
ŕ		european Latin	letter	U+0155: LATIN SMALL LETTER R WITH ACUTE	
Ŗ		european Latin	letter	U+0156: LATIN CAPITAL LETTER R WITH CEDILLA	
ŗ		european Latin	letter	U+0157: LATIN SMALL LETTER R WITH CEDILLA	
Ř		european Latin	letter	U+0158: LATIN CAPITAL LETTER R WITH CARON	
ř		european Latin	letter	U+0159: LATIN SMALL LETTER R WITH CARON	
Ś		european Latin	letter	U+015A: LATIN CAPITAL LETTER S WITH ACUTE	
ś		european Latin	letter	U+015B: LATIN SMALL LETTER S WITH ACUTE	
Ŝ		european Latin	letter	U+015C: LATIN CAPITAL LETTER S WITH CIRCUMFLEX	
ŝ		european Latin	letter	U+015D: LATIN SMALL LETTER S WITH CIRCUMFLEX	
Ş		european Latin	letter	U+015E: LATIN CAPITAL LETTER S WITH CEDILLA	
ş		european Latin	letter	U+015F: LATIN SMALL LETTER S WITH CEDILLA	
Š		european Latin	letter	U+0160: LATIN CAPITAL LETTER S WITH CARON	
š		european Latin	letter	U+0161: LATIN SMALL LETTER S WITH CARON	
Ţ		european Latin	letter	U+0162: LATIN CAPITAL LETTER T WITH CEDILLA	
ţ		european Latin	letter	U+0163: LATIN SMALL LETTER T WITH CEDILLA	
Ť		european Latin	letter	U+0164: LATIN CAPITAL LETTER T WITH CARON	
ť		european Latin	letter	U+0165: LATIN SMALL LETTER T WITH CARON	
Ŧ		european Latin	letter	U+0166: LATIN CAPITAL LETTER T WITH STROKE	
ŧ		european Latin	letter	U+0167: LATIN SMALL LETTER T WITH STROKE	
Ũ		european Latin	letter	U+0168: LATIN CAPITAL LETTER U WITH TILDE	
ũ		european Latin	letter	U+0169: LATIN SMALL LETTER U WITH TILDE	
Ū		european Latin	letter	U+016A: LATIN CAPITAL LETTER U WITH MACRON	
ū		european Latin	letter	U+016B: LATIN SMALL LETTER U WITH MACRON	
Ŭ		european Latin	letter	U+016C: LATIN CAPITAL LETTER U WITH BREVE	
ŭ		european Latin	letter	U+016D: LATIN SMALL LETTER U WITH BREVE	
Ů		european Latin	letter	U+016E: LATIN CAPITAL LETTER U WITH RING ABOVE	
ů		european Latin	letter	U+016F: LATIN SMALL LETTER U WITH RING ABOVE	
Ű		european Latin	letter	U+0170: LATIN CAPITAL LETTER U WITH DOUBLE ACUTE	
ű		european Latin	letter	U+0171: LATIN SMALL LETTER U WITH DOUBLE ACUTE	
Ų		european Latin	letter	U+0172: LATIN CAPITAL LETTER U WITH OGONEK	
ų		european Latin	letter	U+0173: LATIN SMALL LETTER U WITH OGONEK	
Ŵ		european Latin	letter	U+0174: LATIN CAPITAL LETTER W WITH CIRCUMFLEX	
ŵ		european Latin	letter	U+0175: LATIN SMALL LETTER W WITH CIRCUMFLEX	
Ŷ		european Latin	letter	U+0176: LATIN CAPITAL LETTER Y WITH CIRCUMFLEX	
ŷ		european Latin	letter	U+0177: LATIN SMALL LETTER Y WITH CIRCUMFLEX	
Ÿ		european Latin	letter	U+0178: LATIN CAPITAL LETTER Y WITH DIAERESIS	
Ź		european Latin	letter	U+0179: LATIN CAPITAL LETTER Z WITH ACUTE	
ź		european Latin	letter	U+017A: LATIN SMALL LETTER Z WITH ACUTE	
Ż		european Latin	letter	U+017B: LATIN CAPITAL LETTER Z WITH DOT ABOVE	
ż		european Latin	letter	U+017C: LATIN SMALL LETTER Z WITH DOT ABOVE	
Ž		european Latin	letter	U+017D: LATIN CAPITAL LETTER Z WITH CARON	
ž		european Latin	letter	U+017E: LATIN SMALL LETTER Z WITH CARON	
ſ		european Latin	letter	U+017F: LATIN SMALL LETTER LONG S	
					
					
ƀ		non-European/historic	letter	U+0180: LATIN SMALL LETTER B WITH STROKE	
Ɓ		non-European/historic	letter	U+0181: LATIN CAPITAL LETTER B WITH HOOK	
Ƃ		non-European/historic	letter	U+0182: LATIN CAPITAL LETTER B WITH TOPBAR	
ƃ		non-European/historic	letter	U+0183: LATIN SMALL LETTER B WITH TOPBAR	
Ƅ		non-European/historic	letter	U+0184: LATIN CAPITAL LETTER TONE SIX	
ƅ		non-European/historic	letter	U+0185: LATIN SMALL LETTER TONE SIX	
Ɔ		non-European/historic	letter	U+0186: LATIN CAPITAL LETTER OPEN O	
Ƈ		non-European/historic	letter	U+0187: LATIN CAPITAL LETTER C WITH HOOK	
ƈ		non-European/historic	letter	U+0188: LATIN SMALL LETTER C WITH HOOK	
Ɖ		non-European/historic	letter	U+0189: LATIN CAPITAL LETTER AFRICAN D	
Ɗ		non-European/historic	letter	U+018A: LATIN CAPITAL LETTER D WITH HOOK	
Ƌ		non-European/historic	letter	U+018B: LATIN CAPITAL LETTER D WITH TOPBAR	
ƌ		non-European/historic	letter	U+018C: LATIN SMALL LETTER D WITH TOPBAR	
ƍ		non-European/historic	letter	U+018D: LATIN SMALL LETTER TURNED DELTA	
Ǝ		non-European/historic	letter	U+018E: LATIN CAPITAL LETTER REVERSED E	
Ə		non-European/historic	letter	U+018F: LATIN CAPITAL LETTER SCHWA	
Ɛ		non-European/historic	letter	U+0190: LATIN CAPITAL LETTER OPEN E	
Ƒ		non-European/historic	letter	U+0191: LATIN CAPITAL LETTER F WITH HOOK	
ƒ		non-European/historic	letter	U+0192: LATIN SMALL LETTER F WITH HOOK	
Ɠ		non-European/historic	letter	U+0193: LATIN CAPITAL LETTER G WITH HOOK	
Ɣ		non-European/historic	letter	U+0194: LATIN CAPITAL LETTER GAMMA	
ƕ		non-European/historic	letter	U+0195: LATIN SMALL LETTER HV	
Ɩ		non-European/historic	letter	U+0196: LATIN CAPITAL LETTER IOTA	
Ɨ		non-European/historic	letter	U+0197: LATIN CAPITAL LETTER I WITH STROKE	
Ƙ		non-European/historic	letter	U+0198: LATIN CAPITAL LETTER K WITH HOOK	
ƙ		non-European/historic	letter	U+0199: LATIN SMALL LETTER K WITH HOOK	
ƚ		non-European/historic	letter	U+019A: LATIN SMALL LETTER L WITH BAR	
ƛ		non-European/historic	letter	U+019B: LATIN SMALL LETTER LAMBDA WITH STROKE	
Ɯ		non-European/historic	letter	U+019C: LATIN CAPITAL LETTER TURNED M	
Ɲ		non-European/historic	letter	U+019D: LATIN CAPITAL LETTER N WITH LEFT HOOK	
ƞ		non-European/historic	letter	U+019E: LATIN SMALL LETTER N WITH LONG RIGHT LEG	
Ɵ		non-European/historic	letter	U+019F: LATIN CAPITAL LETTER O WITH MIDDLE TILDE	
Ơ		non-European/historic	letter	U+01A0: LATIN CAPITAL LETTER O WITH HORN	
ơ		non-European/historic	letter	U+01A1: LATIN SMALL LETTER O WITH HORN	
Ƣ		non-European/historic	letter	U+01A2: LATIN CAPITAL LETTER OI	
ƣ		non-European/historic	letter	U+01A3: LATIN SMALL LETTER OI	
Ƥ		non-European/historic	letter	U+01A4: LATIN CAPITAL LETTER P WITH HOOK	
ƥ		non-European/historic	letter	U+01A5: LATIN SMALL LETTER P WITH HOOK	
Ʀ		non-European/historic	letter	U+01A6: LATIN LETTER YR	
Ƨ		non-European/historic	letter	U+01A7: LATIN CAPITAL LETTER TONE TWO	
ƨ		non-European/historic	letter	U+01A8: LATIN SMALL LETTER TONE TWO	
Ʃ		non-European/historic	letter	U+01A9: LATIN CAPITAL LETTER ESH	
ƪ		non-European/historic	letter	U+01AA: LATIN LETTER REVERSED ESH LOOP	
ƫ		non-European/historic	letter	U+01AB: LATIN SMALL LETTER T WITH PALATAL HOOK	
Ƭ		non-European/historic	letter	U+01AC: LATIN CAPITAL LETTER T WITH HOOK	
ƭ		non-European/historic	letter	U+01AD: LATIN SMALL LETTER T WITH HOOK	
Ʈ		non-European/historic	letter	U+01AE: LATIN CAPITAL LETTER T WITH RETROFLEX HOOK	
Ư		non-European/historic	letter	U+01AF: LATIN CAPITAL LETTER U WITH HORN	
ư		non-European/historic	letter	U+01B0: LATIN SMALL LETTER U WITH HORN	
Ʊ		non-European/historic	letter	U+01B1: LATIN CAPITAL LETTER UPSILON	
Ʋ		non-European/historic	letter	U+01B2: LATIN CAPITAL LETTER V WITH HOOK	
Ƴ		non-European/historic	letter	U+01B3: LATIN CAPITAL LETTER Y WITH HOOK	
ƴ		non-European/historic	letter	U+01B4: LATIN SMALL LETTER Y WITH HOOK	
Ƶ		non-European/historic	letter	U+01B5: LATIN CAPITAL LETTER Z WITH STROKE	
ƶ		non-European/historic	letter	U+01B6: LATIN SMALL LETTER Z WITH STROKE	
Ʒ		non-European/historic	letter	U+01B7: LATIN CAPITAL LETTER EZH	
Ƹ		non-European/historic	letter	U+01B8: LATIN CAPITAL LETTER EZH REVERSED	
ƹ		non-European/historic	letter	U+01B9: LATIN SMALL LETTER EZH REVERSED	
ƺ		non-European/historic	letter	U+01BA: LATIN SMALL LETTER EZH WITH TAIL	
ƻ		non-European/historic	letter	U+01BB: LATIN LETTER TWO WITH STROKE	
Ƽ		non-European/historic	letter	U+01BC: LATIN CAPITAL LETTER TONE FIVE	
ƽ		non-European/historic	letter	U+01BD: LATIN SMALL LETTER TONE FIVE	
ƾ		non-European/historic	letter	U+01BE: LATIN LETTER INVERTED GLOTTAL STOP WITH STROKE	
ƿ		non-European/historic	letter	U+01BF: LATIN LETTER WYNN	
ǀ		african letter for clicks	letter	U+01C0: LATIN LETTER DENTAL CLICK	
ǁ		african letter for clicks	letter	U+01C1: LATIN LETTER LATERAL CLICK	
ǂ		african letter for clicks	letter	U+01C2: LATIN LETTER ALVEOLAR CLICK	
ǃ		african letter for clicks	letter	U+01C3: LATIN LETTER RETROFLEX CLICK	
Ǆ		digraph matching Serbian Cyrillic letter	letter	U+01C4: LATIN CAPITAL LETTER DZ WITH CARON	
ǅ		digraph matching Serbian Cyrillic letter	letter	U+01C5: LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON	
ǆ		digraph matching Serbian Cyrillic letter	letter	U+01C6: LATIN SMALL LETTER DZ WITH CARON	
Ǉ		digraph matching Serbian Cyrillic letter	letter	U+01C7: LATIN CAPITAL LETTER LJ	
ǈ		digraph matching Serbian Cyrillic letter	letter	U+01C8: LATIN CAPITAL LETTER L WITH SMALL LETTER J	
ǉ		digraph matching Serbian Cyrillic letter	letter	U+01C9: LATIN SMALL LETTER LJ	
Ǌ		digraph matching Serbian Cyrillic letter	letter	U+01CA: LATIN CAPITAL LETTER NJ	
ǋ		digraph matching Serbian Cyrillic letter	letter	U+01CB: LATIN CAPITAL LETTER N WITH SMALL LETTER J	
ǌ		digraph matching Serbian Cyrillic letter	letter	U+01CC: LATIN SMALL LETTER NJ	
Ǎ		pinyin diacritic-vowel combination	letter	U+01CD: LATIN CAPITAL LETTER A WITH CARON	
ǎ		pinyin diacritic-vowel combination	letter	U+01CE: LATIN SMALL LETTER A WITH CARON	
Ǐ		pinyin diacritic-vowel combination	letter	U+01CF: LATIN CAPITAL LETTER I WITH CARON	
ǐ		pinyin diacritic-vowel combination	letter	U+01D0: LATIN SMALL LETTER I WITH CARON	
Ǒ		pinyin diacritic-vowel combination	letter	U+01D1: LATIN CAPITAL LETTER O WITH CARON	
ǒ		pinyin diacritic-vowel combination	letter	U+01D2: LATIN SMALL LETTER O WITH CARON	
Ǔ		pinyin diacritic-vowel combination	letter	U+01D3: LATIN CAPITAL LETTER U WITH CARON	
ǔ		pinyin diacritic-vowel combination	letter	U+01D4: LATIN SMALL LETTER U WITH CARON	
Ǖ		pinyin diacritic-vowel combination	letter	U+01D5: LATIN CAPITAL LETTER U WITH DIAERESIS AND MACRON	
ǖ		pinyin diacritic-vowel combination	letter	U+01D6: LATIN SMALL LETTER U WITH DIAERESIS AND MACRON	
Ǘ		pinyin diacritic-vowel combination	letter	U+01D7: LATIN CAPITAL LETTER U WITH DIAERESIS AND ACUTE	
ǘ		pinyin diacritic-vowel combination	letter	U+01D8: LATIN SMALL LETTER U WITH DIAERESIS AND ACUTE	
Ǚ		pinyin diacritic-vowel combination	letter	U+01D9: LATIN CAPITAL LETTER U WITH DIAERESIS AND CARON	
ǚ		pinyin diacritic-vowel combination	letter	U+01DA: LATIN SMALL LETTER U WITH DIAERESIS AND CARON	
Ǜ		pinyin diacritic-vowel combination	letter	U+01DB: LATIN CAPITAL LETTER U WITH DIAERESIS AND GRAVE	
ǜ		pinyin diacritic-vowel combination	letter	U+01DC: LATIN SMALL LETTER U WITH DIAERESIS AND GRAVE	
ǝ		phonetic/historic letter	letter	U+01DD: LATIN SMALL LETTER TURNED E	
Ǟ		phonetic/historic letter	letter	U+01DE: LATIN CAPITAL LETTER A WITH DIAERESIS AND MACRON	
ǟ		phonetic/historic letter	letter	U+01DF: LATIN SMALL LETTER A WITH DIAERESIS AND MACRON	
Ǡ		phonetic/historic letter	letter	U+01E0: LATIN CAPITAL LETTER A WITH DOT ABOVE AND MACRON	
ǡ		phonetic/historic letter	letter	U+01E1: LATIN SMALL LETTER A WITH DOT ABOVE AND MACRON	
Ǣ		phonetic/historic letter	letter	U+01E2: LATIN CAPITAL LETTER AE WITH MACRON	
ǣ		phonetic/historic letter	letter	U+01E3: LATIN SMALL LETTER AE WITH MACRON	
Ǥ		phonetic/historic letter	letter	U+01E4: LATIN CAPITAL LETTER G WITH STROKE	
ǥ		phonetic/historic letter	letter	U+01E5: LATIN SMALL LETTER G WITH STROKE	
Ǧ		phonetic/historic letter	letter	U+01E6: LATIN CAPITAL LETTER G WITH CARON	
ǧ		phonetic/historic letter	letter	U+01E7: LATIN SMALL LETTER G WITH CARON	
Ǩ		phonetic/historic letter	letter	U+01E8: LATIN CAPITAL LETTER K WITH CARON	
ǩ		phonetic/historic letter	letter	U+01E9: LATIN SMALL LETTER K WITH CARON	
Ǫ		phonetic/historic letter	letter	U+01EA: LATIN CAPITAL LETTER O WITH OGONEK	
ǫ		phonetic/historic letter	letter	U+01EB: LATIN SMALL LETTER O WITH OGONEK	
Ǭ		phonetic/historic letter	letter	U+01EC: LATIN CAPITAL LETTER O WITH OGONEK AND MACRON	
ǭ		phonetic/historic letter	letter	U+01ED: LATIN SMALL LETTER O WITH OGONEK AND MACRON	
Ǯ		phonetic/historic letter	letter	U+01EE: LATIN CAPITAL LETTER EZH WITH CARON	
ǯ		phonetic/historic letter	letter	U+01EF: LATIN SMALL LETTER EZH WITH CARON	
ǰ		phonetic/historic letter	letter	U+01F0: LATIN SMALL LETTER J WITH CARON	
Ǳ		phonetic/historic letter	letter	U+01F1: LATIN CAPITAL LETTER DZ	
ǲ		phonetic/historic letter	letter	U+01F2: LATIN CAPITAL LETTER D WITH SMALL LETTER Z	
ǳ		phonetic/historic letter	letter	U+01F3: LATIN SMALL LETTER DZ	
Ǵ		phonetic/historic letter	letter	U+01F4: LATIN CAPITAL LETTER G WITH ACUTE	
ǵ		phonetic/historic letter	letter	U+01F5: LATIN SMALL LETTER G WITH ACUTE	
Ƕ		phonetic/historic letter	letter	U+01F6: LATIN CAPITAL LETTER HWAIR	
Ƿ		phonetic/historic letter	letter	U+01F7: LATIN CAPITAL LETTER WYNN	
Ǹ		phonetic/historic letter	letter	U+01F8: LATIN CAPITAL LETTER N WITH GRAVE	
ǹ		phonetic/historic letter	letter	U+01F9: LATIN SMALL LETTER N WITH GRAVE	
Ǻ		phonetic/historic letter	letter	U+01FA: LATIN CAPITAL LETTER A WITH RING ABOVE AND ACUTE	
ǻ		phonetic/historic letter	letter	U+01FB: LATIN SMALL LETTER A WITH RING ABOVE AND ACUTE	
Ǽ		phonetic/historic letter	letter	U+01FC: LATIN CAPITAL LETTER AE WITH ACUTE	
ǽ		phonetic/historic letter	letter	U+01FD: LATIN SMALL LETTER AE WITH ACUTE	
Ǿ		phonetic/historic letter	letter	U+01FE: LATIN CAPITAL LETTER O WITH STROKE AND ACUTE	
ǿ		phonetic/historic letter	letter	U+01FF: LATIN SMALL LETTER O WITH STROKE AND ACUTE	
Ȁ		Slovenian	letter	U+0200: LATIN CAPITAL LETTER A WITH DOUBLE GRAVE	
ȁ		Slovenian	letter	U+0201: LATIN SMALL LETTER A WITH DOUBLE GRAVE	
Ȃ		Slovenian	letter	U+0202: LATIN CAPITAL LETTER A WITH INVERTED BREVE	
ȃ		Slovenian	letter	U+0203: LATIN SMALL LETTER A WITH INVERTED BREVE	
Ȅ		Slovenian	letter	U+0204: LATIN CAPITAL LETTER E WITH DOUBLE GRAVE	
ȅ		Slovenian	letter	U+0205: LATIN SMALL LETTER E WITH DOUBLE GRAVE	
Ȇ		Slovenian	letter	U+0206: LATIN CAPITAL LETTER E WITH INVERTED BREVE	
ȇ		Slovenian	letter	U+0207: LATIN SMALL LETTER E WITH INVERTED BREVE	
Ȉ		Slovenian	letter	U+0208: LATIN CAPITAL LETTER I WITH DOUBLE GRAVE	
ȉ		Slovenian	letter	U+0209: LATIN SMALL LETTER I WITH DOUBLE GRAVE	
Ȋ		Slovenian	letter	U+020A: LATIN CAPITAL LETTER I WITH INVERTED BREVE	
ȋ		Slovenian	letter	U+020B: LATIN SMALL LETTER I WITH INVERTED BREVE	
Ȍ		Slovenian	letter	U+020C: LATIN CAPITAL LETTER O WITH DOUBLE GRAVE	
ȍ		Slovenian	letter	U+020D: LATIN SMALL LETTER O WITH DOUBLE GRAVE	
Ȏ		Slovenian	letter	U+020E: LATIN CAPITAL LETTER O WITH INVERTED BREVE	
ȏ		Slovenian	letter	U+020F: LATIN SMALL LETTER O WITH INVERTED BREVE	
Ȑ		Slovenian	letter	U+0210: LATIN CAPITAL LETTER R WITH DOUBLE GRAVE	
ȑ		Slovenian	letter	U+0211: LATIN SMALL LETTER R WITH DOUBLE GRAVE	
Ȓ		Slovenian	letter	U+0212: LATIN CAPITAL LETTER R WITH INVERTED BREVE	
ȓ		Slovenian	letter	U+0213: LATIN SMALL LETTER R WITH INVERTED BREVE	
Ȕ		Slovenian	letter	U+0214: LATIN CAPITAL LETTER U WITH DOUBLE GRAVE	
ȕ		Slovenian	letter	U+0215: LATIN SMALL LETTER U WITH DOUBLE GRAVE	
Ȗ		Slovenian	letter	U+0216: LATIN CAPITAL LETTER U WITH INVERTED BREVE	
ȗ		Slovenian	letter	U+0217: LATIN SMALL LETTER U WITH INVERTED BREVE	
Ș		Romanian	letter	U+0218: LATIN CAPITAL LETTER S WITH COMMA BELOW	
ș		Romanian	letter	U+0219: LATIN SMALL LETTER S WITH COMMA BELOW	
Ț		Romanian	letter	U+021A: LATIN CAPITAL LETTER T WITH COMMA BELOW	
ț		Romanian	letter	U+021B: LATIN SMALL LETTER T WITH COMMA BELOW	
Ȝ		miscellaneous	letter	U+021C: LATIN CAPITAL LETTER YOGH	
ȝ		miscellaneous	letter	U+021D: LATIN SMALL LETTER YOGH	
Ȟ		miscellaneous	letter	U+021E: LATIN CAPITAL LETTER H WITH CARON	
ȟ		miscellaneous	letter	U+021F: LATIN SMALL LETTER H WITH CARON	
Ƞ		miscellaneous	letter	U+0220: LATIN CAPITAL LETTER N WITH LONG RIGHT LEG	
ȡ		miscellaneous	letter	U+0221: LATIN SMALL LETTER D WITH CURL	
Ȣ		miscellaneous	letter	U+0222: LATIN CAPITAL LETTER OU	
ȣ		miscellaneous	letter	U+0223: LATIN SMALL LETTER OU	
Ȥ		miscellaneous	letter	U+0224: LATIN CAPITAL LETTER Z WITH HOOK	
ȥ		miscellaneous	letter	U+0225: LATIN SMALL LETTER Z WITH HOOK	
Ȧ		miscellaneous	letter	U+0226: LATIN CAPITAL LETTER A WITH DOT ABOVE	
ȧ		miscellaneous	letter	U+0227: LATIN SMALL LETTER A WITH DOT ABOVE	
Ȩ		miscellaneous	letter	U+0228: LATIN CAPITAL LETTER E WITH CEDILLA	
ȩ		miscellaneous	letter	U+0229: LATIN SMALL LETTER E WITH CEDILLA	
Ȫ		Livonian	letter	U+022A: LATIN CAPITAL LETTER O WITH DIAERESIS AND MACRON	
ȫ		Livonian	letter	U+022B: LATIN SMALL LETTER O WITH DIAERESIS AND MACRON	
Ȭ		Livonian	letter	U+022C: LATIN CAPITAL LETTER O WITH TILDE AND MACRON	
ȭ		Livonian	letter	U+022D: LATIN SMALL LETTER O WITH TILDE AND MACRON	
Ȯ		Livonian	letter	U+022E: LATIN CAPITAL LETTER O WITH DOT ABOVE	
ȯ		Livonian	letter	U+022F: LATIN SMALL LETTER O WITH DOT ABOVE	
Ȱ		Livonian	letter	U+0230: LATIN CAPITAL LETTER O WITH DOT ABOVE AND MACRON	
ȱ		Livonian	letter	U+0231: LATIN SMALL LETTER O WITH DOT ABOVE AND MACRON	
Ȳ		Livonian	letter	U+0232: LATIN CAPITAL LETTER Y WITH MACRON	
ȳ		Livonian	letter	U+0233: LATIN SMALL LETTER Y WITH MACRON	
ȴ		sinology	letter	U+0234: LATIN SMALL LETTER L WITH CURL	
ȵ		sinology	letter	U+0235: LATIN SMALL LETTER N WITH CURL	
ȶ		sinology	letter	U+0236: LATIN SMALL LETTER T WITH CURL	
ȷ		miscellaneous	letter	U+0237: LATIN SMALL LETTER DOTLESS J	
ȸ		africanist linguistics	letter	U+0238: LATIN SMALL LETTER DB DIGRAPH	
ȹ		africanist linguistics	letter	U+0239: LATIN SMALL LETTER QP DIGRAPH	
Ⱥ		Sencoten	letter	U+023A: LATIN CAPITAL LETTER A WITH STROKE	
Ȼ		Sencoten	letter	U+023B: LATIN CAPITAL LETTER C WITH STROKE	
ȼ		Sencoten	letter	U+023C: LATIN SMALL LETTER C WITH STROKE	
Ƚ		Sencoten	letter	U+023D: LATIN CAPITAL LETTER L WITH BAR	
Ⱦ		Sencoten	letter	U+023E: LATIN CAPITAL LETTER T WITH DIAGONAL STROKE	
ȿ		africanist linguistics	letter	U+023F: LATIN SMALL LETTER S WITH SWASH TAIL	
ɀ		africanist linguistics	letter	U+0240: LATIN SMALL LETTER Z WITH SWASH TAIL	
Ɂ		miscellaneous	letter	U+0241: LATIN CAPITAL LETTER GLOTTAL STOP	
ɂ		miscellaneous	letter	U+0242: LATIN SMALL LETTER GLOTTAL STOP	
Ƀ		miscellaneous	letter	U+0243: LATIN CAPITAL LETTER B WITH STROKE	
Ʉ		miscellaneous	letter	U+0244: LATIN CAPITAL LETTER U BAR	
Ʌ		miscellaneous	letter	U+0245: LATIN CAPITAL LETTER TURNED V	
Ɇ		miscellaneous	letter	U+0246: LATIN CAPITAL LETTER E WITH STROKE	
ɇ		miscellaneous	letter	U+0247: LATIN SMALL LETTER E WITH STROKE	
Ɉ		miscellaneous	letter	U+0248: LATIN CAPITAL LETTER J WITH STROKE	
ɉ		miscellaneous	letter	U+0249: LATIN SMALL LETTER J WITH STROKE	
Ɋ		miscellaneous	letter	U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL	
ɋ		miscellaneous	letter	U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL	
Ɍ		miscellaneous	letter	U+024C: LATIN CAPITAL LETTER R WITH STROKE	
ɍ		miscellaneous	letter	U+024D: LATIN SMALL LETTER R WITH STROKE	
Ɏ		miscellaneous	letter	U+024E: LATIN CAPITAL LETTER Y WITH STROKE	
ɏ		miscellaneous	letter	U+024F: LATIN SMALL LETTER Y WITH STROKE	
					
					
Ⱡ		orthographic addition	letter	U+2C60: LATIN CAPITAL LETTER L WITH DOUBLE BAR	
ⱡ		orthographic addition	letter	U+2C61: LATIN SMALL LETTER L WITH DOUBLE BAR	
Ɫ		orthographic addition	letter	U+2C62: LATIN CAPITAL LETTER L WITH MIDDLE TILDE	
Ᵽ		orthographic addition	letter	U+2C63: LATIN CAPITAL LETTER P WITH STROKE	
Ɽ		orthographic addition	letter	U+2C64: LATIN CAPITAL LETTER R WITH TAIL	
ⱥ		orthographic addition	letter	U+2C65: LATIN SMALL LETTER A WITH STROKE	
ⱦ		orthographic addition	letter	U+2C66: LATIN SMALL LETTER T WITH DIAGONAL STROKE	
Ⱨ		uyghur	letter	U+2C67: LATIN CAPITAL LETTER H WITH DESCENDER	
ⱨ		uyghur	letter	U+2C68: LATIN SMALL LETTER H WITH DESCENDER	
Ⱪ		uyghur	letter	U+2C69: LATIN CAPITAL LETTER K WITH DESCENDER	
ⱪ		uyghur	letter	U+2C6A: LATIN SMALL LETTER K WITH DESCENDER	
Ⱬ		uyghur	letter	U+2C6B: LATIN CAPITAL LETTER Z WITH DESCENDER	
ⱬ		uyghur	letter	U+2C6C: LATIN SMALL LETTER Z WITH DESCENDER	
Ɑ		miscellaneous	letter	U+2C6D: LATIN CAPITAL LETTER ALPHA	
Ɱ		miscellaneous	letter	U+2C6E: LATIN CAPITAL LETTER M WITH HOOK	
Ɐ		miscellaneous	letter	U+2C6F: LATIN CAPITAL LETTER TURNED A	
Ɒ		miscellaneous	letter	U+2C70: LATIN CAPITAL LETTER TURNED ALPHA	
ⱱ		miscellaneous	letter	U+2C71: LATIN SMALL LETTER V WITH RIGHT HOOK	
Ⱳ		miscellaneous	letter	U+2C72: LATIN CAPITAL LETTER W WITH HOOK	
ⱳ		miscellaneous	letter	U+2C73: LATIN SMALL LETTER W WITH HOOK	
ⱴ		miscellaneous	letter	U+2C74: LATIN SMALL LETTER V WITH CURL	
Ⱶ		claudian	letter	U+2C75: LATIN CAPITAL LETTER HALF H	
ⱶ		claudian	letter	U+2C76: LATIN SMALL LETTER HALF H	
ⱷ		UPA	letter	U+2C77: LATIN SMALL LETTER TAILLESS PHI	
ⱸ		UPA	letter	U+2C78: LATIN SMALL LETTER E WITH NOTCH	
ⱹ		UPA	letter	U+2C79: LATIN SMALL LETTER TURNED R WITH TAIL	
ⱺ		UPA	letter	U+2C7A: LATIN SMALL LETTER O WITH LOW RING INSIDE	
ⱻ		UPA	letter	U+2C7B: LATIN LETTER SMALL CAPITAL TURNED E	
ⱼ		UPA	letter	U+2C7C: LATIN SUBSCRIPT SMALL LETTER J	
ⱽ		UPA	letter	U+2C7D: MODIFIER LETTER CAPITAL V	
Ȿ		shona	letter	U+2C7E: LATIN CAPITAL LETTER S WITH SWASH TAIL	
Ɀ		shona	letter	U+2C7F: LATIN CAPITAL LETTER Z WITH SWASH TAIL	
					
					
꜠		UPA	symbol	U+A720: MODIFIER LETTER STRESS AND HIGH TONE	
꜡		UPA	symbol	U+A721: MODIFIER LETTER STRESS AND LOW TONE	
Ꜣ		egyptological	letter	U+A722: LATIN CAPITAL LETTER EGYPTOLOGICAL ALEF	
ꜣ		egyptological	letter	U+A723: LATIN SMALL LETTER EGYPTOLOGICAL ALEF	
Ꜥ		egyptological	letter	U+A724: LATIN CAPITAL LETTER EGYPTOLOGICAL AIN	
ꜥ		egyptological	letter	U+A725: LATIN SMALL LETTER EGYPTOLOGICAL AIN	
Ꜧ		mayanist	letter	U+A726: LATIN CAPITAL LETTER HENG	
ꜧ		mayanist	letter	U+A727: LATIN SMALL LETTER HENG	
Ꜩ		mayanist	letter	U+A728: LATIN CAPITAL LETTER TZ	
ꜩ		mayanist	letter	U+A729: LATIN SMALL LETTER TZ	
Ꜫ		mayanist	letter	U+A72A: LATIN CAPITAL LETTER TRESILLO	
ꜫ		mayanist	letter	U+A72B: LATIN SMALL LETTER TRESILLO	
Ꜭ		mayanist	letter	U+A72C: LATIN CAPITAL LETTER CUATRILLO	
ꜭ		mayanist	letter	U+A72D: LATIN SMALL LETTER CUATRILLO	
Ꜯ		mayanist	letter	U+A72E: LATIN CAPITAL LETTER CUATRILLO WITH COMMA	
ꜯ		mayanist	letter	U+A72F: LATIN SMALL LETTER CUATRILLO WITH COMMA	
ꜰ		medievalist	letter	U+A730: LATIN LETTER SMALL CAPITAL F	
ꜱ		medievalist	letter	U+A731: LATIN LETTER SMALL CAPITAL S	
Ꜳ		medievalist	letter	U+A732: LATIN CAPITAL LETTER AA	
ꜳ		medievalist	letter	U+A733: LATIN SMALL LETTER AA	
Ꜵ		medievalist	letter	U+A734: LATIN CAPITAL LETTER AO	
ꜵ		medievalist	letter	U+A735: LATIN SMALL LETTER AO	
Ꜷ		medievalist	letter	U+A736: LATIN CAPITAL LETTER AU	
ꜷ		medievalist	letter	U+A737: LATIN SMALL LETTER AU	
Ꜹ		medievalist	letter	U+A738: LATIN CAPITAL LETTER AV	
ꜹ		medievalist	letter	U+A739: LATIN SMALL LETTER AV	
Ꜻ		medievalist	letter	U+A73A: LATIN CAPITAL LETTER AV WITH HORIZONTAL BAR	
ꜻ		medievalist	letter	U+A73B: LATIN SMALL LETTER AV WITH HORIZONTAL BAR	
Ꜽ		medievalist	letter	U+A73C: LATIN CAPITAL LETTER AY	
ꜽ		medievalist	letter	U+A73D: LATIN SMALL LETTER AY	
Ꜿ		medievalist	letter	U+A73E: LATIN CAPITAL LETTER REVERSED C WITH DOT	
ꜿ		medievalist	letter	U+A73F: LATIN SMALL LETTER REVERSED C WITH DOT	
Ꝁ		medievalist	letter	U+A740: LATIN CAPITAL LETTER K WITH STROKE	
ꝁ		medievalist	letter	U+A741: LATIN SMALL LETTER K WITH STROKE	
Ꝃ		medievalist	letter	U+A742: LATIN CAPITAL LETTER K WITH DIAGONAL STROKE	
ꝃ		medievalist	letter	U+A743: LATIN SMALL LETTER K WITH DIAGONAL STROKE	
Ꝅ		medievalist	letter	U+A744: LATIN CAPITAL LETTER K WITH STROKE AND DIAGONAL STROKE	
ꝅ		medievalist	letter	U+A745: LATIN SMALL LETTER K WITH STROKE AND DIAGONAL STROKE	
Ꝇ		medievalist	letter	U+A746: LATIN CAPITAL LETTER BROKEN L	
ꝇ		medievalist	letter	U+A747: LATIN SMALL LETTER BROKEN L	
Ꝉ		medievalist	letter	U+A748: LATIN CAPITAL LETTER L WITH HIGH STROKE	
ꝉ		medievalist	letter	U+A749: LATIN SMALL LETTER L WITH HIGH STROKE	
Ꝋ		medievalist	letter	U+A74A: LATIN CAPITAL LETTER O WITH LONG STROKE OVERLAY	
ꝋ		medievalist	letter	U+A74B: LATIN SMALL LETTER O WITH LONG STROKE OVERLAY	
Ꝍ		medievalist	letter	U+A74C: LATIN CAPITAL LETTER O WITH LOOP	
ꝍ		medievalist	letter	U+A74D: LATIN SMALL LETTER O WITH LOOP	
Ꝏ		medievalist	letter	U+A74E: LATIN CAPITAL LETTER OO	
ꝏ		medievalist	letter	U+A74F: LATIN SMALL LETTER OO	
Ꝑ		medievalist	letter	U+A750: LATIN CAPITAL LETTER P WITH STROKE THROUGH DESCENDER	
ꝑ		medievalist	letter	U+A751: LATIN SMALL LETTER P WITH STROKE THROUGH DESCENDER	
Ꝓ		medievalist	letter	U+A752: LATIN CAPITAL LETTER P WITH FLOURISH	
ꝓ		medievalist	letter	U+A753: LATIN SMALL LETTER P WITH FLOURISH	
Ꝕ		medievalist	letter	U+A754: LATIN CAPITAL LETTER P WITH SQUIRREL TAIL	
ꝕ		medievalist	letter	U+A755: LATIN SMALL LETTER P WITH SQUIRREL TAIL	
Ꝗ		medievalist	letter	U+A756: LATIN CAPITAL LETTER Q WITH STROKE THROUGH DESCENDER	
ꝗ		medievalist	letter	U+A757: LATIN SMALL LETTER Q WITH STROKE THROUGH DESCENDER	
Ꝙ		medievalist	letter	U+A758: LATIN CAPITAL LETTER Q WITH DIAGONAL STROKE	
ꝙ		medievalist	letter	U+A759: LATIN SMALL LETTER Q WITH DIAGONAL STROKE	
Ꝛ		medievalist	letter	U+A75A: LATIN CAPITAL LETTER R ROTUNDA	
ꝛ		medievalist	letter	U+A75B: LATIN SMALL LETTER R ROTUNDA	
Ꝝ		medievalist	letter	U+A75C: LATIN CAPITAL LETTER RUM ROTUNDA	
ꝝ		medievalist	letter	U+A75D: LATIN SMALL LETTER RUM ROTUNDA	
Ꝟ		medievalist	letter	U+A75E: LATIN CAPITAL LETTER V WITH DIAGONAL STROKE	
ꝟ		medievalist	letter	U+A75F: LATIN SMALL LETTER V WITH DIAGONAL STROKE	
Ꝡ		medievalist	letter	U+A760: LATIN CAPITAL LETTER VY	
ꝡ		medievalist	letter	U+A761: LATIN SMALL LETTER VY	
Ꝣ		medievalist	letter	U+A762: LATIN CAPITAL LETTER VISIGOTHIC Z	
ꝣ		medievalist	letter	U+A763: LATIN SMALL LETTER VISIGOTHIC Z	
Ꝥ		medievalist	letter	U+A764: LATIN CAPITAL LETTER THORN WITH STROKE	
ꝥ		medievalist	letter	U+A765: LATIN SMALL LETTER THORN WITH STROKE	
Ꝧ		medievalist	letter	U+A766: LATIN CAPITAL LETTER THORN WITH STROKE THROUGH DESCENDER	
ꝧ		medievalist	letter	U+A767: LATIN SMALL LETTER THORN WITH STROKE THROUGH DESCENDER	
Ꝩ		medievalist	letter	U+A768: LATIN CAPITAL LETTER VEND	
ꝩ		medievalist	letter	U+A769: LATIN SMALL LETTER VEND	
Ꝫ		medievalist	letter	U+A76A: LATIN CAPITAL LETTER ET	
ꝫ		medievalist	letter	U+A76B: LATIN SMALL LETTER ET	
Ꝭ		medievalist	letter	U+A76C: LATIN CAPITAL LETTER IS	
ꝭ		medievalist	letter	U+A76D: LATIN SMALL LETTER IS	
Ꝯ		medievalist	letter	U+A76E: LATIN CAPITAL LETTER CON	
ꝯ		medievalist	letter	U+A76F: LATIN SMALL LETTER CON	
ꝰ		medievalist	letter	U+A770: MODIFIER LETTER US	
ꝱ		medievalist	letter	U+A771: LATIN SMALL LETTER DUM	
ꝲ		medievalist	letter	U+A772: LATIN SMALL LETTER LUM	
ꝳ		medievalist	letter	U+A773: LATIN SMALL LETTER MUM	
ꝴ		medievalist	letter	U+A774: LATIN SMALL LETTER NUM	
ꝵ		medievalist	letter	U+A775: LATIN SMALL LETTER RUM	
ꝶ		medievalist	letter	U+A776: LATIN LETTER SMALL CAPITAL RUM	
ꝷ		medievalist	letter	U+A777: LATIN SMALL LETTER TUM	
ꝸ		medievalist	letter	U+A778: LATIN SMALL LETTER UM	
Ꝺ		insular & celticist	letter	U+A779: LATIN CAPITAL LETTER INSULAR D	
ꝺ		insular & celticist	letter	U+A77A: LATIN SMALL LETTER INSULAR D	
Ꝼ		insular & celticist	letter	U+A77B: LATIN CAPITAL LETTER INSULAR F	
ꝼ		insular & celticist	letter	U+A77C: LATIN SMALL LETTER INSULAR F	
Ᵹ		insular & celticist	letter	U+A77D: LATIN CAPITAL LETTER INSULAR G	
Ꝿ		insular & celticist	letter	U+A77E: LATIN CAPITAL LETTER TURNED INSULAR G	
ꝿ		insular & celticist	letter	U+A77F: LATIN SMALL LETTER TURNED INSULAR G	
Ꞁ		insular & celticist	letter	U+A780: LATIN CAPITAL LETTER TURNED L	
ꞁ		insular & celticist	letter	U+A781: LATIN SMALL LETTER TURNED L	
Ꞃ		insular & celticist	letter	U+A782: LATIN CAPITAL LETTER INSULAR R	
ꞃ		insular & celticist	letter	U+A783: LATIN SMALL LETTER INSULAR R	
Ꞅ		insular & celticist	letter	U+A784: LATIN CAPITAL LETTER INSULAR S	
ꞅ		insular & celticist	letter	U+A785: LATIN SMALL LETTER INSULAR S	
Ꞇ		insular & celticist	letter	U+A786: LATIN CAPITAL LETTER INSULAR T	
ꞇ		insular & celticist	letter	U+A787: LATIN SMALL LETTER INSULAR T	
ꞈ		modifier	letter	U+A788: MODIFIER LETTER LOW CIRCUMFLEX ACCENT	
꞉		modifier	symbol	U+A789: MODIFIER LETTER COLON	
꞊		modifier	symbol	U+A78A: MODIFIER LETTER SHORT EQUALS SIGN	
Ꞌ		orthographic letter for glottal	letter	U+A78B: LATIN CAPITAL LETTER SALTILLO	
ꞌ		orthographic letter for glottal	letter	U+A78C: LATIN SMALL LETTER SALTILLO	
Ɥ		additional letter	letter	U+A78D: LATIN CAPITAL LETTER TURNED H	
ꞎ		phonetic symbol	letter	U+A78E: LATIN SMALL LETTER L WITH RETROFLEX HOOK AND BELT	
ꞏ		transliteration letter	letter	U+A78F: LATIN LETTER SINOLOGICAL DOT	
Ꞑ		additional letter	letter	U+A790: LATIN CAPITAL LETTER N WITH DESCENDER	
ꞑ		additional letter	letter	U+A791: LATIN SMALL LETTER N WITH DESCENDER	
Ꞓ		additional letter	letter	U+A792: LATIN CAPITAL LETTER C WITH BAR	
ꞓ		additional letter	letter	U+A793: LATIN SMALL LETTER C WITH BAR	
ꞔ		lithuanian dialectology	letter	U+A794: LATIN SMALL LETTER C WITH PALATAL HOOK	
ꞕ		lithuanian dialectology	letter	U+A795: LATIN SMALL LETTER H WITH PALATAL HOOK	
Ꞗ		middle Vietnamese	letter	U+A796: LATIN CAPITAL LETTER B WITH FLOURISH	
ꞗ		middle Vietnamese	letter	U+A797: LATIN SMALL LETTER B WITH FLOURISH	
Ꞙ		archaic Ewe	letter	U+A798: LATIN CAPITAL LETTER F WITH STROKE	
ꞙ		archaic Ewe	letter	U+A799: LATIN SMALL LETTER F WITH STROKE	
Ꞛ		archaic Volapük	letter	U+A79A: LATIN CAPITAL LETTER VOLAPUK AE	
ꞛ		archaic Volapük	letter	U+A79B: LATIN SMALL LETTER VOLAPUK AE	
Ꞝ		archaic Volapük	letter	U+A79C: LATIN CAPITAL LETTER VOLAPUK OE	
ꞝ		archaic Volapük	letter	U+A79D: LATIN SMALL LETTER VOLAPUK OE	
Ꞟ		archaic Volapük	letter	U+A79E: LATIN CAPITAL LETTER VOLAPUK UE	
ꞟ		archaic Volapük	letter	U+A79F: LATIN SMALL LETTER VOLAPUK UE	
Ꞡ		pre-1921 Latvian	letter	U+A7A0: LATIN CAPITAL LETTER G WITH OBLIQUE STROKE	
ꞡ		pre-1921 Latvian	letter	U+A7A1: LATIN SMALL LETTER G WITH OBLIQUE STROKE	
Ꞣ		pre-1921 Latvian	letter	U+A7A2: LATIN CAPITAL LETTER K WITH OBLIQUE STROKE	
ꞣ		pre-1921 Latvian	letter	U+A7A3: LATIN SMALL LETTER K WITH OBLIQUE STROKE	
Ꞥ		pre-1921 Latvian	letter	U+A7A4: LATIN CAPITAL LETTER N WITH OBLIQUE STROKE	
ꞥ		pre-1921 Latvian	letter	U+A7A5: LATIN SMALL LETTER N WITH OBLIQUE STROKE	
Ꞧ		pre-1921 Latvian	letter	U+A7A6: LATIN CAPITAL LETTER R WITH OBLIQUE STROKE	
ꞧ		pre-1921 Latvian	letter	U+A7A7: LATIN SMALL LETTER R WITH OBLIQUE STROKE	
Ꞩ		pre-1921 Latvian	letter	U+A7A8: LATIN CAPITAL LETTER S WITH OBLIQUE STROKE	
ꞩ		pre-1921 Latvian	letter	U+A7A9: LATIN SMALL LETTER S WITH OBLIQUE STROKE	
Ɦ		additional letter	letter	U+A7AA: LATIN CAPITAL LETTER H WITH HOOK	
Ɜ		additional letter	letter	U+A7AB: LATIN CAPITAL LETTER REVERSED OPEN E	
Ɡ		additional letter	letter	U+A7AC: LATIN CAPITAL LETTER SCRIPT G	
Ɬ		additional letter	letter	U+A7AD: LATIN CAPITAL LETTER L WITH BELT	
Ɪ		west African languages	letter	U+A7AE: LATIN CAPITAL LETTER SMALL CAPITAL I	
ꞯ		Japanese phonemic transcription	letter	U+A7AF: LATIN LETTER SMALL CAPITAL Q	
Ʞ		americanist orthographies	letter	U+A7B0: LATIN CAPITAL LETTER TURNED K	
Ʇ		americanist orthographies	letter	U+A7B1: LATIN CAPITAL LETTER TURNED T	
Ʝ		African languages	letter	U+A7B2: LATIN CAPITAL LETTER J WITH CROSSED-TAIL	
Ꭓ		German dialectology	letter	U+A7B3: LATIN CAPITAL LETTER CHI	
Ꞵ		African languages	letter	U+A7B4: LATIN CAPITAL LETTER BETA	
ꞵ		African languages	letter	U+A7B5: LATIN SMALL LETTER BETA	
Ꞷ		African languages	letter	U+A7B6: LATIN CAPITAL LETTER OMEGA	
ꞷ		African languages	letter	U+A7B7: LATIN SMALL LETTER OMEGA	
Ꞹ		Mazahua (México)	letter	U+A7B8: LATIN CAPITAL LETTER U WITH STROKE	
ꞹ		Mazahua (México)	letter	U+A7B9: LATIN SMALL LETTER U WITH STROKE	
Ꞻ		Ugaritic & egyptological transliteration	letter	U+A7BA: LATIN CAPITAL LETTER GLOTTAL A	
ꞻ		Ugaritic & egyptological transliteration	letter	U+A7BB: LATIN SMALL LETTER GLOTTAL A	
Ꞽ		Ugaritic & egyptological transliteration	letter	U+A7BC: LATIN CAPITAL LETTER GLOTTAL I	
ꞽ		Ugaritic & egyptological transliteration	letter	U+A7BD: LATIN SMALL LETTER GLOTTAL I	
Ꞿ		Ugaritic & egyptological transliteration	letter	U+A7BE: LATIN CAPITAL LETTER GLOTTAL U	
ꞿ		Ugaritic & egyptological transliteration	letter	U+A7BF: LATIN SMALL LETTER GLOTTAL U	
Ꟁ		medieval	letter	U+A7C0: LATIN CAPITAL LETTER OLD POLISH O	
ꟁ		medieval	letter	U+A7C1: LATIN SMALL LETTER OLD POLISH O	
Ꟃ		medieval	letter	U+A7C2: LATIN CAPITAL LETTER ANGLICANA W	
ꟃ		medieval	letter	U+A7C3: LATIN SMALL LETTER ANGLICANA W	
Ꞔ		early Pinyin romanization	letter	U+A7C4: LATIN CAPITAL LETTER C WITH PALATAL HOOK	
Ʂ		early Pinyin romanization	letter	U+A7C5: LATIN CAPITAL LETTER S WITH HOOK	
Ᶎ		early Pinyin romanization	letter	U+A7C6: LATIN CAPITAL LETTER Z WITH PALATAL HOOK	
Ꟈ		Gaulish	letter	U+A7C7: LATIN CAPITAL LETTER D WITH SHORT STROKE OVERLAY	
ꟈ		Gaulish	letter	U+A7C8: LATIN SMALL LETTER D WITH SHORT STROKE OVERLAY	
Ꟊ		Gaulish	letter	U+A7C9: LATIN CAPITAL LETTER S WITH SHORT STROKE OVERLAY	
ꟊ		Gaulish	letter	U+A7CA: LATIN SMALL LETTER S WITH SHORT STROKE OVERLAY	
Ꟑ		Middle English Ormulum	letter	U+A7D0: LATIN CAPITAL LETTER CLOSED INSULAR G	
ꟑ		Middle English Ormulum	letter	U+A7D1: LATIN SMALL LETTER CLOSED INSULAR G	
ꟓ		Middle English Ormulum	letter	U+A7D3: LATIN SMALL LETTER DOUBLE THORN	
ꟕ		Middle English Ormulum	letter	U+A7D5: LATIN SMALL LETTER DOUBLE WYNN	
Ꟗ		medieval palaeography	letter	U+A7D6: LATIN CAPITAL LETTER MIDDLE SCOTS S	
ꟗ		medieval palaeography	letter	U+A7D7: LATIN SMALL LETTER MIDDLE SCOTS S	
Ꟙ		medieval palaeography	letter	U+A7D8: LATIN CAPITAL LETTER SIGMOID S	
ꟙ		medieval palaeography	letter	U+A7D9: LATIN SMALL LETTER SIGMOID S	
ꟲ		Chatino (México) modifier	letter	U+A7F2: MODIFIER LETTER CAPITAL C	
ꟳ		Chatino (México) modifier	letter	U+A7F3: MODIFIER LETTER CAPITAL F	
ꟴ		Japanese phonemic transcription modifier	letter	U+A7F4: MODIFIER LETTER CAPITAL Q	
Ꟶ		ancient Gaulish & Celtic epigraphic	letter	U+A7F5: LATIN CAPITAL LETTER REVERSED HALF H	
ꟶ		ancient Gaulish & Celtic epigraphic	letter	U+A7F6: LATIN SMALL LETTER REVERSED HALF H	
ꟷ		ancient Gaulish & Celtic epigraphic	letter	U+A7F7: LATIN EPIGRAPHIC LETTER SIDEWAYS I	
ꟸ		extended IPA	letter	U+A7F8: MODIFIER LETTER CAPITAL H WITH STROKE	
ꟹ		extended IPA	letter	U+A7F9: MODIFIER LETTER SMALL LIGATURE OE	
ꟺ		UPA	letter	U+A7FA: LATIN LETTER SMALL CAPITAL TURNED M	
ꟻ		Ancient Roman epigraphic	letter	U+A7FB: LATIN EPIGRAPHIC LETTER REVERSED F	
ꟼ		Ancient Roman epigraphic	letter	U+A7FC: LATIN EPIGRAPHIC LETTER REVERSED P	
ꟽ		Ancient Roman epigraphic	letter	U+A7FD: LATIN EPIGRAPHIC LETTER INVERTED M	
ꟾ		Ancient Roman epigraphic	letter	U+A7FE: LATIN EPIGRAPHIC LETTER I LONGA	
ꟿ		Ancient Roman epigraphic	letter	U+A7FF: LATIN EPIGRAPHIC LETTER ARCHAIC M	
					
					
ꬰ		German dialectology	letter	U+AB30: LATIN SMALL LETTER BARRED ALPHA	
ꬱ		German dialectology	letter	U+AB31: LATIN SMALL LETTER A REVERSED-SCHWA	
ꬲ		German dialectology	letter	U+AB32: LATIN SMALL LETTER BLACKLETTER E	
ꬳ		German dialectology	letter	U+AB33: LATIN SMALL LETTER BARRED E	
ꬴ		German dialectology	letter	U+AB34: LATIN SMALL LETTER E WITH FLOURISH	
ꬵ		German dialectology	letter	U+AB35: LATIN SMALL LETTER LENIS F	
ꬶ		German dialectology	letter	U+AB36: LATIN SMALL LETTER SCRIPT G WITH CROSSED-TAIL	
ꬷ		German dialectology	letter	U+AB37: LATIN SMALL LETTER L WITH INVERTED LAZY S	
ꬸ		German dialectology	letter	U+AB38: LATIN SMALL LETTER L WITH DOUBLE MIDDLE TILDE	
ꬹ		German dialectology	letter	U+AB39: LATIN SMALL LETTER L WITH MIDDLE RING	
ꬺ		German dialectology	letter	U+AB3A: LATIN SMALL LETTER M WITH CROSSED-TAIL	
ꬻ		German dialectology	letter	U+AB3B: LATIN SMALL LETTER N WITH CROSSED-TAIL	
ꬼ		German dialectology	letter	U+AB3C: LATIN SMALL LETTER ENG WITH CROSSED-TAIL	
ꬽ		German dialectology	letter	U+AB3D: LATIN SMALL LETTER BLACKLETTER O	
ꬾ		German dialectology	letter	U+AB3E: LATIN SMALL LETTER BLACKLETTER O WITH STROKE	
ꬿ		German dialectology	letter	U+AB3F: LATIN SMALL LETTER OPEN O WITH STROKE	
ꭀ		German dialectology	letter	U+AB40: LATIN SMALL LETTER INVERTED OE	
ꭁ		German dialectology	letter	U+AB41: LATIN SMALL LETTER TURNED OE WITH STROKE	
ꭂ		German dialectology	letter	U+AB42: LATIN SMALL LETTER TURNED OE WITH HORIZONTAL STROKE	
ꭃ		German dialectology	letter	U+AB43: LATIN SMALL LETTER TURNED O OPEN-O	
ꭄ		German dialectology	letter	U+AB44: LATIN SMALL LETTER TURNED O OPEN-O WITH STROKE	
ꭅ		German dialectology	letter	U+AB45: LATIN SMALL LETTER STIRRUP R	
ꭆ		German dialectology	letter	U+AB46: LATIN LETTER SMALL CAPITAL R WITH RIGHT LEG	
ꭇ		German dialectology	letter	U+AB47: LATIN SMALL LETTER R WITHOUT HANDLE	
ꭈ		German dialectology	letter	U+AB48: LATIN SMALL LETTER DOUBLE R	
ꭉ		German dialectology	letter	U+AB49: LATIN SMALL LETTER R WITH CROSSED-TAIL	
ꭊ		German dialectology	letter	U+AB4A: LATIN SMALL LETTER DOUBLE R WITH CROSSED-TAIL	
ꭋ		German dialectology	letter	U+AB4B: LATIN SMALL LETTER SCRIPT R	
ꭌ		German dialectology	letter	U+AB4C: LATIN SMALL LETTER SCRIPT R WITH RING	
ꭍ		German dialectology	letter	U+AB4D: LATIN SMALL LETTER BASELINE ESH	
ꭎ		German dialectology	letter	U+AB4E: LATIN SMALL LETTER U WITH SHORT RIGHT LEG	
ꭏ		German dialectology	letter	U+AB4F: LATIN SMALL LETTER U BAR WITH SHORT RIGHT LEG	
ꭐ		German dialectology	letter	U+AB50: LATIN SMALL LETTER UI	
ꭑ		German dialectology	letter	U+AB51: LATIN SMALL LETTER TURNED UI	
ꭒ		German dialectology	letter	U+AB52: LATIN SMALL LETTER U WITH LEFT HOOK	
ꭓ		German dialectology	letter	U+AB53: LATIN SMALL LETTER CHI	
ꭔ		German dialectology	letter	U+AB54: LATIN SMALL LETTER CHI WITH LOW RIGHT RING	
ꭕ		German dialectology	letter	U+AB55: LATIN SMALL LETTER CHI WITH LOW LEFT SERIF	
ꭖ		German dialectology	letter	U+AB56: LATIN SMALL LETTER X WITH LOW RIGHT RING	
ꭗ		German dialectology	letter	U+AB57: LATIN SMALL LETTER X WITH LONG LEFT LEG	
ꭘ		German dialectology	letter	U+AB58: LATIN SMALL LETTER X WITH LONG LEFT LEG AND LOW RIGHT RING	
ꭙ		German dialectology	letter	U+AB59: LATIN SMALL LETTER X WITH LONG LEFT LEG WITH SERIF	
ꭚ		German dialectology	letter	U+AB5A: LATIN SMALL LETTER Y WITH SHORT RIGHT LEG	
꭛		German dialectology modifier	symbol	U+AB5B: MODIFIER BREVE WITH INVERTED BREVE	
ꭜ		German dialectology modifier	letter	U+AB5C: MODIFIER LETTER SMALL HENG	
ꭝ		German dialectology modifier	letter	U+AB5D: MODIFIER LETTER SMALL L WITH INVERTED LAZY S	
ꭞ		German dialectology modifier	letter	U+AB5E: MODIFIER LETTER SMALL L WITH MIDDLE TILDE	
ꭟ		German dialectology modifier	letter	U+AB5F: MODIFIER LETTER SMALL U WITH LEFT HOOK	
ꭠ		Sakha (Yakut) historic letter	letter	U+AB60: LATIN SMALL LETTER SAKHA YAT	
ꭡ		Sakha (Yakut) historic letter	letter	U+AB61: LATIN SMALL LETTER IOTIFIED E	
ꭢ		Sakha (Yakut) historic letter	letter	U+AB62: LATIN SMALL LETTER OPEN OE	
ꭣ		Sakha (Yakut) historic letter	letter	U+AB63: LATIN SMALL LETTER UO	
ꭤ		americanist orthography	letter	U+AB64: LATIN SMALL LETTER INVERTED ALPHA	
ꭥ		americanist orthography	letter	U+AB65: GREEK LETTER SMALL CAPITAL OMEGA	
ꭦ		sinological transcription	letter	U+AB66: LATIN SMALL LETTER DZ DIGRAPH WITH RETROFLEX HOOK	
ꭧ		sinological transcription	letter	U+AB67: LATIN SMALL LETTER TS DIGRAPH WITH RETROFLEX HOOK	
ꭨ		Scots dialectology	letter	U+AB68: LATIN SMALL LETTER TURNED R WITH MIDDLE TILDE	
ꭩ		Scots dialectology	letter	U+AB69: MODIFIER LETTER SMALL TURNED W	
꭪		Scots dialectology	symbol	U+AB6A: MODIFIER LETTER LEFT TACK	
꭫		Scots dialectology	symbol	U+AB6B: MODIFIER LETTER RIGHT TACK	
					
					
𐞀		VoQS modifier	letter	U+10780: MODIFIER LETTER SMALL CAPITAL AA	
𐞁		IPA modifier	letter	U+10781: MODIFIER LETTER SUPERSCRIPT TRIANGULAR COLON	
𐞂		IPA modifier	letter	U+10782: MODIFIER LETTER SUPERSCRIPT HALF TRIANGULAR COLON	
𐞃		IPA modifier	letter	U+10783: MODIFIER LETTER SMALL AE	
𐞄		IPA modifier	letter	U+10784: MODIFIER LETTER SMALL CAPITAL B	
𐞅		IPA modifier	letter	U+10785: MODIFIER LETTER SMALL B WITH HOOK	
𐞇		IPA modifier	letter	U+10787: MODIFIER LETTER SMALL DZ DIGRAPH	
𐞈		IPA modifier	letter	U+10788: MODIFIER LETTER SMALL DZ DIGRAPH WITH RETROFLEX HOOK	
𐞉		IPA modifier	letter	U+10789: MODIFIER LETTER SMALL DZ DIGRAPH WITH CURL	
𐞊		IPA modifier	letter	U+1078A: MODIFIER LETTER SMALL DEZH DIGRAPH	
𐞋		IPA modifier	letter	U+1078B: MODIFIER LETTER SMALL D WITH TAIL	
𐞌		IPA modifier	letter	U+1078C: MODIFIER LETTER SMALL D WITH HOOK	
𐞍		IPA modifier	letter	U+1078D: MODIFIER LETTER SMALL D WITH HOOK AND TAIL	
𐞎		IPA modifier	letter	U+1078E: MODIFIER LETTER SMALL REVERSED E	
𐞏		IPA modifier	letter	U+1078F: MODIFIER LETTER SMALL CLOSED REVERSED OPEN E	
𐞐		IPA modifier	letter	U+10790: MODIFIER LETTER SMALL FENG DIGRAPH	
𐞑		IPA modifier	letter	U+10791: MODIFIER LETTER SMALL RAMS HORN	
𐞒		IPA modifier	letter	U+10792: MODIFIER LETTER SMALL CAPITAL G	
𐞓		IPA modifier	letter	U+10793: MODIFIER LETTER SMALL G WITH HOOK	
𐞔		IPA modifier	letter	U+10794: MODIFIER LETTER SMALL CAPITAL G WITH HOOK	
𐞕		IPA modifier	letter	U+10795: MODIFIER LETTER SMALL H WITH STROKE	
𐞖		IPA modifier	letter	U+10796: MODIFIER LETTER SMALL CAPITAL H	
𐞗		IPA modifier	letter	U+10797: MODIFIER LETTER SMALL HENG WITH HOOK	
𐞘		IPA modifier	letter	U+10798: MODIFIER LETTER SMALL DOTLESS J WITH STROKE AND HOOK	
𐞙		IPA modifier	letter	U+10799: MODIFIER LETTER SMALL LS DIGRAPH	
𐞚		IPA modifier	letter	U+1079A: MODIFIER LETTER SMALL LZ DIGRAPH	
𐞛		IPA modifier	letter	U+1079B: MODIFIER LETTER SMALL L WITH BELT	
𐞜		IPA modifier	letter	U+1079C: MODIFIER LETTER SMALL CAPITAL L WITH BELT	
𐞝		IPA modifier	letter	U+1079D: MODIFIER LETTER SMALL L WITH RETROFLEX HOOK AND BELT	
𐞞		IPA modifier	letter	U+1079E: MODIFIER LETTER SMALL LEZH	
𐞟		IPA modifier	letter	U+1079F: MODIFIER LETTER SMALL LEZH WITH RETROFLEX HOOK	
𐞠		IPA modifier	letter	U+107A0: MODIFIER LETTER SMALL TURNED Y	
𐞡		IPA modifier	letter	U+107A1: MODIFIER LETTER SMALL TURNED Y WITH BELT	
𐞢		IPA modifier	letter	U+107A2: MODIFIER LETTER SMALL O WITH STROKE	
𐞣		IPA modifier	letter	U+107A3: MODIFIER LETTER SMALL CAPITAL OE	
𐞤		IPA modifier	letter	U+107A4: MODIFIER LETTER SMALL CLOSED OMEGA	
𐞥		IPA modifier	letter	U+107A5: MODIFIER LETTER SMALL Q	
𐞦		IPA modifier	letter	U+107A6: MODIFIER LETTER SMALL TURNED R WITH LONG LEG	
𐞧		IPA modifier	letter	U+107A7: MODIFIER LETTER SMALL TURNED R WITH LONG LEG AND RETROFLEX HOOK	
𐞨		IPA modifier	letter	U+107A8: MODIFIER LETTER SMALL R WITH TAIL	
𐞩		IPA modifier	letter	U+107A9: MODIFIER LETTER SMALL R WITH FISHHOOK	
𐞪		IPA modifier	letter	U+107AA: MODIFIER LETTER SMALL CAPITAL R	
𐞫		IPA modifier	letter	U+107AB: MODIFIER LETTER SMALL TC DIGRAPH WITH CURL	
𐞬		IPA modifier	letter	U+107AC: MODIFIER LETTER SMALL TS DIGRAPH	
𐞭		IPA modifier	letter	U+107AD: MODIFIER LETTER SMALL TS DIGRAPH WITH RETROFLEX HOOK	
𐞮		IPA modifier	letter	U+107AE: MODIFIER LETTER SMALL TESH DIGRAPH	
𐞯		IPA modifier	letter	U+107AF: MODIFIER LETTER SMALL T WITH RETROFLEX HOOK	
𐞰		IPA modifier	letter	U+107B0: MODIFIER LETTER SMALL V WITH RIGHT HOOK	
𐞲		IPA modifier	letter	U+107B2: MODIFIER LETTER SMALL CAPITAL Y	
𐞳		IPA modifier	letter	U+107B3: MODIFIER LETTER GLOTTAL STOP WITH STROKE	
𐞴		IPA modifier	letter	U+107B4: MODIFIER LETTER REVERSED GLOTTAL STOP WITH STROKE	
𐞵		IPA modifier	letter	U+107B5: MODIFIER LETTER BILABIAL CLICK	
𐞶		IPA modifier	letter	U+107B6: MODIFIER LETTER DENTAL CLICK	
𐞷		IPA modifier	letter	U+107B7: MODIFIER LETTER LATERAL CLICK	
𐞸		IPA modifier	letter	U+107B8: MODIFIER LETTER ALVEOLAR CLICK	
𐞹		IPA modifier	letter	U+107B9: MODIFIER LETTER RETROFLEX CLICK WITH RETROFLEX HOOK	
𐞺		IPA modifier	letter	U+107BA: MODIFIER LETTER SMALL S WITH CURL	
					
					
𝼀		IPA for disordered speech	letter	U+1DF00: LATIN SMALL LETTER FENG DIGRAPH WITH TRILL	
𝼁		IPA for disordered speech	letter	U+1DF01: LATIN SMALL LETTER REVERSED SCRIPT G	
𝼂		IPA for disordered speech	letter	U+1DF02: LATIN LETTER SMALL CAPITAL TURNED G	
𝼃		IPA for disordered speech	letter	U+1DF03: LATIN SMALL LETTER REVERSED K	
𝼄		IPA for disordered speech	letter	U+1DF04: LATIN LETTER SMALL CAPITAL L WITH BELT	
𝼅		IPA for disordered speech	letter	U+1DF05: LATIN SMALL LETTER LEZH WITH RETROFLEX HOOK	
𝼆		IPA for disordered speech	letter	U+1DF06: LATIN SMALL LETTER TURNED Y WITH BELT	
𝼇		IPA for disordered speech	letter	U+1DF07: LATIN SMALL LETTER REVERSED ENG	
𝼈		IPA extension	letter	U+1DF08: LATIN SMALL LETTER TURNED R WITH LONG LEG AND RETROFLEX HOOK	
𝼉		IPA extension	letter	U+1DF09: LATIN SMALL LETTER T WITH HOOK AND RETROFLEX HOOK	
𝼊		IPA extension	letter	U+1DF0A: LATIN LETTER RETROFLEX CLICK WITH RETROFLEX HOOK	
𝼋		click	letter	U+1DF0B: LATIN SMALL LETTER ESH WITH DOUBLE BAR	
𝼌		click	letter	U+1DF0C: LATIN SMALL LETTER ESH WITH DOUBLE BAR AND CURL	
𝼍		click	letter	U+1DF0D: LATIN SMALL LETTER TURNED T WITH CURL	
𝼎		click	letter	U+1DF0E: LATIN LETTER INVERTED GLOTTAL STOP WITH CURL	
𝼏		click	letter	U+1DF0F: LATIN LETTER STRETCHED C WITH CURL	
𝼐		click	letter	U+1DF10: LATIN LETTER SMALL CAPITAL TURNED K	
𝼑		lateral	letter	U+1DF11: LATIN SMALL LETTER L WITH FISHHOOK	
𝼒		palatal hook	letter	U+1DF12: LATIN SMALL LETTER DEZH DIGRAPH WITH PALATAL HOOK	
𝼓		palatal hook	letter	U+1DF13: LATIN SMALL LETTER L WITH BELT AND PALATAL HOOK	
𝼔		palatal hook	letter	U+1DF14: LATIN SMALL LETTER ENG WITH PALATAL HOOK	
𝼕		palatal hook	letter	U+1DF15: LATIN SMALL LETTER TURNED R WITH PALATAL HOOK	
𝼖		palatal hook	letter	U+1DF16: LATIN SMALL LETTER R WITH FISHHOOK AND PALATAL HOOK	
𝼗		palatal hook	letter	U+1DF17: LATIN SMALL LETTER TESH DIGRAPH WITH PALATAL HOOK	
𝼘		palatal hook	letter	U+1DF18: LATIN SMALL LETTER EZH WITH PALATAL HOOK	
𝼙		retroflex hook	letter	U+1DF19: LATIN SMALL LETTER DEZH DIGRAPH WITH RETROFLEX HOOK	
𝼚		retroflex hook	letter	U+1DF1A: LATIN SMALL LETTER I WITH STROKE AND RETROFLEX HOOK	
𝼛		retroflex hook	letter	U+1DF1B: LATIN SMALL LETTER O WITH RETROFLEX HOOK	
𝼜		retroflex hook	letter	U+1DF1C: LATIN SMALL LETTER TESH DIGRAPH WITH RETROFLEX HOOK	
𝼝		retroflex hook	letter	U+1DF1D: LATIN SMALL LETTER C WITH RETROFLEX HOOK	
𝼞		IPA extension	letter	U+1DF1E: LATIN SMALL LETTER S WITH CURL	
					
					
Ḁ		general use extension	letter	U+1E00: LATIN CAPITAL LETTER A WITH RING BELOW	
ḁ		general use extension	letter	U+1E01: LATIN SMALL LETTER A WITH RING BELOW	
Ḃ		general use extension	letter	U+1E02: LATIN CAPITAL LETTER B WITH DOT ABOVE	
ḃ		general use extension	letter	U+1E03: LATIN SMALL LETTER B WITH DOT ABOVE	
Ḅ		general use extension	letter	U+1E04: LATIN CAPITAL LETTER B WITH DOT BELOW	
ḅ		general use extension	letter	U+1E05: LATIN SMALL LETTER B WITH DOT BELOW	
Ḇ		general use extension	letter	U+1E06: LATIN CAPITAL LETTER B WITH LINE BELOW	
ḇ		general use extension	letter	U+1E07: LATIN SMALL LETTER B WITH LINE BELOW	
Ḉ		general use extension	letter	U+1E08: LATIN CAPITAL LETTER C WITH CEDILLA AND ACUTE	
ḉ		general use extension	letter	U+1E09: LATIN SMALL LETTER C WITH CEDILLA AND ACUTE	
Ḋ		general use extension	letter	U+1E0A: LATIN CAPITAL LETTER D WITH DOT ABOVE	
ḋ		general use extension	letter	U+1E0B: LATIN SMALL LETTER D WITH DOT ABOVE	
Ḍ		general use extension	letter	U+1E0C: LATIN CAPITAL LETTER D WITH DOT BELOW	
ḍ		general use extension	letter	U+1E0D: LATIN SMALL LETTER D WITH DOT BELOW	
Ḏ		general use extension	letter	U+1E0E: LATIN CAPITAL LETTER D WITH LINE BELOW	
ḏ		general use extension	letter	U+1E0F: LATIN SMALL LETTER D WITH LINE BELOW	
Ḑ		general use extension	letter	U+1E10: LATIN CAPITAL LETTER D WITH CEDILLA	
ḑ		general use extension	letter	U+1E11: LATIN SMALL LETTER D WITH CEDILLA	
Ḓ		general use extension	letter	U+1E12: LATIN CAPITAL LETTER D WITH CIRCUMFLEX BELOW	
ḓ		general use extension	letter	U+1E13: LATIN SMALL LETTER D WITH CIRCUMFLEX BELOW	
Ḕ		general use extension	letter	U+1E14: LATIN CAPITAL LETTER E WITH MACRON AND GRAVE	
ḕ		general use extension	letter	U+1E15: LATIN SMALL LETTER E WITH MACRON AND GRAVE	
Ḗ		general use extension	letter	U+1E16: LATIN CAPITAL LETTER E WITH MACRON AND ACUTE	
ḗ		general use extension	letter	U+1E17: LATIN SMALL LETTER E WITH MACRON AND ACUTE	
Ḙ		general use extension	letter	U+1E18: LATIN CAPITAL LETTER E WITH CIRCUMFLEX BELOW	
ḙ		general use extension	letter	U+1E19: LATIN SMALL LETTER E WITH CIRCUMFLEX BELOW	
Ḛ		general use extension	letter	U+1E1A: LATIN CAPITAL LETTER E WITH TILDE BELOW	
ḛ		general use extension	letter	U+1E1B: LATIN SMALL LETTER E WITH TILDE BELOW	
Ḝ		general use extension	letter	U+1E1C: LATIN CAPITAL LETTER E WITH CEDILLA AND BREVE	
ḝ		general use extension	letter	U+1E1D: LATIN SMALL LETTER E WITH CEDILLA AND BREVE	
Ḟ		general use extension	letter	U+1E1E: LATIN CAPITAL LETTER F WITH DOT ABOVE	
ḟ		general use extension	letter	U+1E1F: LATIN SMALL LETTER F WITH DOT ABOVE	
Ḡ		general use extension	letter	U+1E20: LATIN CAPITAL LETTER G WITH MACRON	
ḡ		general use extension	letter	U+1E21: LATIN SMALL LETTER G WITH MACRON	
Ḣ		general use extension	letter	U+1E22: LATIN CAPITAL LETTER H WITH DOT ABOVE	
ḣ		general use extension	letter	U+1E23: LATIN SMALL LETTER H WITH DOT ABOVE	
Ḥ		general use extension	letter	U+1E24: LATIN CAPITAL LETTER H WITH DOT BELOW	
ḥ		general use extension	letter	U+1E25: LATIN SMALL LETTER H WITH DOT BELOW	
Ḧ		general use extension	letter	U+1E26: LATIN CAPITAL LETTER H WITH DIAERESIS	
ḧ		general use extension	letter	U+1E27: LATIN SMALL LETTER H WITH DIAERESIS	
Ḩ		general use extension	letter	U+1E28: LATIN CAPITAL LETTER H WITH CEDILLA	
ḩ		general use extension	letter	U+1E29: LATIN SMALL LETTER H WITH CEDILLA	
Ḫ		general use extension	letter	U+1E2A: LATIN CAPITAL LETTER H WITH BREVE BELOW	
ḫ		general use extension	letter	U+1E2B: LATIN SMALL LETTER H WITH BREVE BELOW	
Ḭ		general use extension	letter	U+1E2C: LATIN CAPITAL LETTER I WITH TILDE BELOW	
ḭ		general use extension	letter	U+1E2D: LATIN SMALL LETTER I WITH TILDE BELOW	
Ḯ		general use extension	letter	U+1E2E: LATIN CAPITAL LETTER I WITH DIAERESIS AND ACUTE	
ḯ		general use extension	letter	U+1E2F: LATIN SMALL LETTER I WITH DIAERESIS AND ACUTE	
Ḱ		general use extension	letter	U+1E30: LATIN CAPITAL LETTER K WITH ACUTE	
ḱ		general use extension	letter	U+1E31: LATIN SMALL LETTER K WITH ACUTE	
Ḳ		general use extension	letter	U+1E32: LATIN CAPITAL LETTER K WITH DOT BELOW	
ḳ		general use extension	letter	U+1E33: LATIN SMALL LETTER K WITH DOT BELOW	
Ḵ		general use extension	letter	U+1E34: LATIN CAPITAL LETTER K WITH LINE BELOW	
ḵ		general use extension	letter	U+1E35: LATIN SMALL LETTER K WITH LINE BELOW	
Ḷ		general use extension	letter	U+1E36: LATIN CAPITAL LETTER L WITH DOT BELOW	
ḷ		general use extension	letter	U+1E37: LATIN SMALL LETTER L WITH DOT BELOW	
Ḹ		general use extension	letter	U+1E38: LATIN CAPITAL LETTER L WITH DOT BELOW AND MACRON	
ḹ		general use extension	letter	U+1E39: LATIN SMALL LETTER L WITH DOT BELOW AND MACRON	
Ḻ		general use extension	letter	U+1E3A: LATIN CAPITAL LETTER L WITH LINE BELOW	
ḻ		general use extension	letter	U+1E3B: LATIN SMALL LETTER L WITH LINE BELOW	
Ḽ		general use extension	letter	U+1E3C: LATIN CAPITAL LETTER L WITH CIRCUMFLEX BELOW	
ḽ		general use extension	letter	U+1E3D: LATIN SMALL LETTER L WITH CIRCUMFLEX BELOW	
Ḿ		general use extension	letter	U+1E3E: LATIN CAPITAL LETTER M WITH ACUTE	
ḿ		general use extension	letter	U+1E3F: LATIN SMALL LETTER M WITH ACUTE	
Ṁ		general use extension	letter	U+1E40: LATIN CAPITAL LETTER M WITH DOT ABOVE	
ṁ		general use extension	letter	U+1E41: LATIN SMALL LETTER M WITH DOT ABOVE	
Ṃ		general use extension	letter	U+1E42: LATIN CAPITAL LETTER M WITH DOT BELOW	
ṃ		general use extension	letter	U+1E43: LATIN SMALL LETTER M WITH DOT BELOW	
Ṅ		general use extension	letter	U+1E44: LATIN CAPITAL LETTER N WITH DOT ABOVE	
ṅ		general use extension	letter	U+1E45: LATIN SMALL LETTER N WITH DOT ABOVE	
Ṇ		general use extension	letter	U+1E46: LATIN CAPITAL LETTER N WITH DOT BELOW	
ṇ		general use extension	letter	U+1E47: LATIN SMALL LETTER N WITH DOT BELOW	
Ṉ		general use extension	letter	U+1E48: LATIN CAPITAL LETTER N WITH LINE BELOW	
ṉ		general use extension	letter	U+1E49: LATIN SMALL LETTER N WITH LINE BELOW	
Ṋ		general use extension	letter	U+1E4A: LATIN CAPITAL LETTER N WITH CIRCUMFLEX BELOW	
ṋ		general use extension	letter	U+1E4B: LATIN SMALL LETTER N WITH CIRCUMFLEX BELOW	
Ṍ		general use extension	letter	U+1E4C: LATIN CAPITAL LETTER O WITH TILDE AND ACUTE	
ṍ		general use extension	letter	U+1E4D: LATIN SMALL LETTER O WITH TILDE AND ACUTE	
Ṏ		general use extension	letter	U+1E4E: LATIN CAPITAL LETTER O WITH TILDE AND DIAERESIS	
ṏ		general use extension	letter	U+1E4F: LATIN SMALL LETTER O WITH TILDE AND DIAERESIS	
Ṑ		general use extension	letter	U+1E50: LATIN CAPITAL LETTER O WITH MACRON AND GRAVE	
ṑ		general use extension	letter	U+1E51: LATIN SMALL LETTER O WITH MACRON AND GRAVE	
Ṓ		general use extension	letter	U+1E52: LATIN CAPITAL LETTER O WITH MACRON AND ACUTE	
ṓ		general use extension	letter	U+1E53: LATIN SMALL LETTER O WITH MACRON AND ACUTE	
Ṕ		general use extension	letter	U+1E54: LATIN CAPITAL LETTER P WITH ACUTE	
ṕ		general use extension	letter	U+1E55: LATIN SMALL LETTER P WITH ACUTE	
Ṗ		general use extension	letter	U+1E56: LATIN CAPITAL LETTER P WITH DOT ABOVE	
ṗ		general use extension	letter	U+1E57: LATIN SMALL LETTER P WITH DOT ABOVE	
Ṙ		general use extension	letter	U+1E58: LATIN CAPITAL LETTER R WITH DOT ABOVE	
ṙ		general use extension	letter	U+1E59: LATIN SMALL LETTER R WITH DOT ABOVE	
Ṛ		general use extension	letter	U+1E5A: LATIN CAPITAL LETTER R WITH DOT BELOW	
ṛ		general use extension	letter	U+1E5B: LATIN SMALL LETTER R WITH DOT BELOW	
Ṝ		general use extension	letter	U+1E5C: LATIN CAPITAL LETTER R WITH DOT BELOW AND MACRON	
ṝ		general use extension	letter	U+1E5D: LATIN SMALL LETTER R WITH DOT BELOW AND MACRON	
Ṟ		general use extension	letter	U+1E5E: LATIN CAPITAL LETTER R WITH LINE BELOW	
ṟ		general use extension	letter	U+1E5F: LATIN SMALL LETTER R WITH LINE BELOW	
Ṡ		general use extension	letter	U+1E60: LATIN CAPITAL LETTER S WITH DOT ABOVE	
ṡ		general use extension	letter	U+1E61: LATIN SMALL LETTER S WITH DOT ABOVE	
Ṣ		general use extension	letter	U+1E62: LATIN CAPITAL LETTER S WITH DOT BELOW	
ṣ		general use extension	letter	U+1E63: LATIN SMALL LETTER S WITH DOT BELOW	
Ṥ		general use extension	letter	U+1E64: LATIN CAPITAL LETTER S WITH ACUTE AND DOT ABOVE	
ṥ		general use extension	letter	U+1E65: LATIN SMALL LETTER S WITH ACUTE AND DOT ABOVE	
Ṧ		general use extension	letter	U+1E66: LATIN CAPITAL LETTER S WITH CARON AND DOT ABOVE	
ṧ		general use extension	letter	U+1E67: LATIN SMALL LETTER S WITH CARON AND DOT ABOVE	
Ṩ		general use extension	letter	U+1E68: LATIN CAPITAL LETTER S WITH DOT BELOW AND DOT ABOVE	
ṩ		general use extension	letter	U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE	
Ṫ		general use extension	letter	U+1E6A: LATIN CAPITAL LETTER T WITH DOT ABOVE	
ṫ		general use extension	letter	U+1E6B: LATIN SMALL LETTER T WITH DOT ABOVE	
Ṭ		general use extension	letter	U+1E6C: LATIN CAPITAL LETTER T WITH DOT BELOW	
ṭ		general use extension	letter	U+1E6D: LATIN SMALL LETTER T WITH DOT BELOW	
Ṯ		general use extension	letter	U+1E6E: LATIN CAPITAL LETTER T WITH LINE BELOW	
ṯ		general use extension	letter	U+1E6F: LATIN SMALL LETTER T WITH LINE BELOW	
Ṱ		general use extension	letter	U+1E70: LATIN CAPITAL LETTER T WITH CIRCUMFLEX BELOW	
ṱ		general use extension	letter	U+1E71: LATIN SMALL LETTER T WITH CIRCUMFLEX BELOW	
Ṳ		general use extension	letter	U+1E72: LATIN CAPITAL LETTER U WITH DIAERESIS BELOW	
ṳ		general use extension	letter	U+1E73: LATIN SMALL LETTER U WITH DIAERESIS BELOW	
Ṵ		general use extension	letter	U+1E74: LATIN CAPITAL LETTER U WITH TILDE BELOW	
ṵ		general use extension	letter	U+1E75: LATIN SMALL LETTER U WITH TILDE BELOW	
Ṷ		general use extension	letter	U+1E76: LATIN CAPITAL LETTER U WITH CIRCUMFLEX BELOW	
ṷ		general use extension	letter	U+1E77: LATIN SMALL LETTER U WITH CIRCUMFLEX BELOW	
Ṹ		general use extension	letter	U+1E78: LATIN CAPITAL LETTER U WITH TILDE AND ACUTE	
ṹ		general use extension	letter	U+1E79: LATIN SMALL LETTER U WITH TILDE AND ACUTE	
Ṻ		general use extension	letter	U+1E7A: LATIN CAPITAL LETTER U WITH MACRON AND DIAERESIS	
ṻ		general use extension	letter	U+1E7B: LATIN SMALL LETTER U WITH MACRON AND DIAERESIS	
Ṽ		general use extension	letter	U+1E7C: LATIN CAPITAL LETTER V WITH TILDE	
ṽ		general use extension	letter	U+1E7D: LATIN SMALL LETTER V WITH TILDE	
Ṿ		general use extension	letter	U+1E7E: LATIN CAPITAL LETTER V WITH DOT BELOW	
ṿ		general use extension	letter	U+1E7F: LATIN SMALL LETTER V WITH DOT BELOW	
Ẁ		general use extension	letter	U+1E80: LATIN CAPITAL LETTER W WITH GRAVE	
ẁ		general use extension	letter	U+1E81: LATIN SMALL LETTER W WITH GRAVE	
Ẃ		general use extension	letter	U+1E82: LATIN CAPITAL LETTER W WITH ACUTE	
ẃ		general use extension	letter	U+1E83: LATIN SMALL LETTER W WITH ACUTE	
Ẅ		general use extension	letter	U+1E84: LATIN CAPITAL LETTER W WITH DIAERESIS	
ẅ		general use extension	letter	U+1E85: LATIN SMALL LETTER W WITH DIAERESIS	
Ẇ		general use extension	letter	U+1E86: LATIN CAPITAL LETTER W WITH DOT ABOVE	
ẇ		general use extension	letter	U+1E87: LATIN SMALL LETTER W WITH DOT ABOVE	
Ẉ		general use extension	letter	U+1E88: LATIN CAPITAL LETTER W WITH DOT BELOW	
ẉ		general use extension	letter	U+1E89: LATIN SMALL LETTER W WITH DOT BELOW	
Ẋ		general use extension	letter	U+1E8A: LATIN CAPITAL LETTER X WITH DOT ABOVE	
ẋ		general use extension	letter	U+1E8B: LATIN SMALL LETTER X WITH DOT ABOVE	
Ẍ		general use extension	letter	U+1E8C: LATIN CAPITAL LETTER X WITH DIAERESIS	
ẍ		general use extension	letter	U+1E8D: LATIN SMALL LETTER X WITH DIAERESIS	
Ẏ		general use extension	letter	U+1E8E: LATIN CAPITAL LETTER Y WITH DOT ABOVE	
ẏ		general use extension	letter	U+1E8F: LATIN SMALL LETTER Y WITH DOT ABOVE	
Ẑ		general use extension	letter	U+1E90: LATIN CAPITAL LETTER Z WITH CIRCUMFLEX	
ẑ		general use extension	letter	U+1E91: LATIN SMALL LETTER Z WITH CIRCUMFLEX	
Ẓ		general use extension	letter	U+1E92: LATIN CAPITAL LETTER Z WITH DOT BELOW	
ẓ		general use extension	letter	U+1E93: LATIN SMALL LETTER Z WITH DOT BELOW	
Ẕ		general use extension	letter	U+1E94: LATIN CAPITAL LETTER Z WITH LINE BELOW	
ẕ		general use extension	letter	U+1E95: LATIN SMALL LETTER Z WITH LINE BELOW	
ẖ		general use extension	letter	U+1E96: LATIN SMALL LETTER H WITH LINE BELOW	
ẗ		general use extension	letter	U+1E97: LATIN SMALL LETTER T WITH DIAERESIS	
ẘ		general use extension	letter	U+1E98: LATIN SMALL LETTER W WITH RING ABOVE	
ẙ		general use extension	letter	U+1E99: LATIN SMALL LETTER Y WITH RING ABOVE	
ẚ		general use extension	letter	U+1E9A: LATIN SMALL LETTER A WITH RIGHT HALF RING	
ẛ		general use extension	letter	U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE	
ẜ		medievalist	letter	U+1E9C: LATIN SMALL LETTER LONG S WITH DIAGONAL STROKE	
ẝ		medievalist	letter	U+1E9D: LATIN SMALL LETTER LONG S WITH HIGH STROKE	
ẞ		German typography	letter	U+1E9E: LATIN CAPITAL LETTER SHARP S	
ẟ		medievalist	letter	U+1E9F: LATIN SMALL LETTER DELTA	
Ạ		Vietnamese extension	letter	U+1EA0: LATIN CAPITAL LETTER A WITH DOT BELOW	
ạ		Vietnamese extension	letter	U+1EA1: LATIN SMALL LETTER A WITH DOT BELOW	
Ả		Vietnamese extension	letter	U+1EA2: LATIN CAPITAL LETTER A WITH HOOK ABOVE	
ả		Vietnamese extension	letter	U+1EA3: LATIN SMALL LETTER A WITH HOOK ABOVE	
Ấ		Vietnamese extension	letter	U+1EA4: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND ACUTE	
ấ		Vietnamese extension	letter	U+1EA5: LATIN SMALL LETTER A WITH CIRCUMFLEX AND ACUTE	
Ầ		Vietnamese extension	letter	U+1EA6: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND GRAVE	
ầ		Vietnamese extension	letter	U+1EA7: LATIN SMALL LETTER A WITH CIRCUMFLEX AND GRAVE	
Ẩ		Vietnamese extension	letter	U+1EA8: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE	
ẩ		Vietnamese extension	letter	U+1EA9: LATIN SMALL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE	
Ẫ		Vietnamese extension	letter	U+1EAA: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND TILDE	
ẫ		Vietnamese extension	letter	U+1EAB: LATIN SMALL LETTER A WITH CIRCUMFLEX AND TILDE	
Ậ		Vietnamese extension	letter	U+1EAC: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND DOT BELOW	
ậ		Vietnamese extension	letter	U+1EAD: LATIN SMALL LETTER A WITH CIRCUMFLEX AND DOT BELOW	
Ắ		Vietnamese extension	letter	U+1EAE: LATIN CAPITAL LETTER A WITH BREVE AND ACUTE	
ắ		Vietnamese extension	letter	U+1EAF: LATIN SMALL LETTER A WITH BREVE AND ACUTE	
Ằ		Vietnamese extension	letter	U+1EB0: LATIN CAPITAL LETTER A WITH BREVE AND GRAVE	
ằ		Vietnamese extension	letter	U+1EB1: LATIN SMALL LETTER A WITH BREVE AND GRAVE	
Ẳ		Vietnamese extension	letter	U+1EB2: LATIN CAPITAL LETTER A WITH BREVE AND HOOK ABOVE	
ẳ		Vietnamese extension	letter	U+1EB3: LATIN SMALL LETTER A WITH BREVE AND HOOK ABOVE	
Ẵ		Vietnamese extension	letter	U+1EB4: LATIN CAPITAL LETTER A WITH BREVE AND TILDE	
ẵ		Vietnamese extension	letter	U+1EB5: LATIN SMALL LETTER A WITH BREVE AND TILDE	
Ặ		Vietnamese extension	letter	U+1EB6: LATIN CAPITAL LETTER A WITH BREVE AND DOT BELOW	
ặ		Vietnamese extension	letter	U+1EB7: LATIN SMALL LETTER A WITH BREVE AND DOT BELOW	
Ẹ		Vietnamese extension	letter	U+1EB8: LATIN CAPITAL LETTER E WITH DOT BELOW	
ẹ		Vietnamese extension	letter	U+1EB9: LATIN SMALL LETTER E WITH DOT BELOW	
Ẻ		Vietnamese extension	letter	U+1EBA: LATIN CAPITAL LETTER E WITH HOOK ABOVE	
ẻ		Vietnamese extension	letter	U+1EBB: LATIN SMALL LETTER E WITH HOOK ABOVE	
Ẽ		Vietnamese extension	letter	U+1EBC: LATIN CAPITAL LETTER E WITH TILDE	
ẽ		Vietnamese extension	letter	U+1EBD: LATIN SMALL LETTER E WITH TILDE	
Ế		Vietnamese extension	letter	U+1EBE: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND ACUTE	
ế		Vietnamese extension	letter	U+1EBF: LATIN SMALL LETTER E WITH CIRCUMFLEX AND ACUTE	
Ề		Vietnamese extension	letter	U+1EC0: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND GRAVE	
ề		Vietnamese extension	letter	U+1EC1: LATIN SMALL LETTER E WITH CIRCUMFLEX AND GRAVE	
Ể		Vietnamese extension	letter	U+1EC2: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE	
ể		Vietnamese extension	letter	U+1EC3: LATIN SMALL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE	
Ễ		Vietnamese extension	letter	U+1EC4: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND TILDE	
ễ		Vietnamese extension	letter	U+1EC5: LATIN SMALL LETTER E WITH CIRCUMFLEX AND TILDE	
Ệ		Vietnamese extension	letter	U+1EC6: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND DOT BELOW	
ệ		Vietnamese extension	letter	U+1EC7: LATIN SMALL LETTER E WITH CIRCUMFLEX AND DOT BELOW	
Ỉ		Vietnamese extension	letter	U+1EC8: LATIN CAPITAL LETTER I WITH HOOK ABOVE	
ỉ		Vietnamese extension	letter	U+1EC9: LATIN SMALL LETTER I WITH HOOK ABOVE	
Ị		Vietnamese extension	letter	U+1ECA: LATIN CAPITAL LETTER I WITH DOT BELOW	
ị		Vietnamese extension	letter	U+1ECB: LATIN SMALL LETTER I WITH DOT BELOW	
Ọ		Vietnamese extension	letter	U+1ECC: LATIN CAPITAL LETTER O WITH DOT BELOW	
ọ		Vietnamese extension	letter	U+1ECD: LATIN SMALL LETTER O WITH DOT BELOW	
Ỏ		Vietnamese extension	letter	U+1ECE: LATIN CAPITAL LETTER O WITH HOOK ABOVE	
ỏ		Vietnamese extension	letter	U+1ECF: LATIN SMALL LETTER O WITH HOOK ABOVE	
Ố		Vietnamese extension	letter	U+1ED0: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND ACUTE	
ố		Vietnamese extension	letter	U+1ED1: LATIN SMALL LETTER O WITH CIRCUMFLEX AND ACUTE	
Ồ		Vietnamese extension	letter	U+1ED2: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND GRAVE	
ồ		Vietnamese extension	letter	U+1ED3: LATIN SMALL LETTER O WITH CIRCUMFLEX AND GRAVE	
Ổ		Vietnamese extension	letter	U+1ED4: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE	
ổ		Vietnamese extension	letter	U+1ED5: LATIN SMALL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE	
Ỗ		Vietnamese extension	letter	U+1ED6: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND TILDE	
ỗ		Vietnamese extension	letter	U+1ED7: LATIN SMALL LETTER O WITH CIRCUMFLEX AND TILDE	
Ộ		Vietnamese extension	letter	U+1ED8: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND DOT BELOW	
ộ		Vietnamese extension	letter	U+1ED9: LATIN SMALL LETTER O WITH CIRCUMFLEX AND DOT BELOW	
Ớ		Vietnamese extension	letter	U+1EDA: LATIN CAPITAL LETTER O WITH HORN AND ACUTE	
ớ		Vietnamese extension	letter	U+1EDB: LATIN SMALL LETTER O WITH HORN AND ACUTE	
Ờ		Vietnamese extension	letter	U+1EDC: LATIN CAPITAL LETTER O WITH HORN AND GRAVE	
ờ		Vietnamese extension	letter	U+1EDD: LATIN SMALL LETTER O WITH HORN AND GRAVE	
Ở		Vietnamese extension	letter	U+1EDE: LATIN CAPITAL LETTER O WITH HORN AND HOOK ABOVE	
ở		Vietnamese extension	letter	U+1EDF: LATIN SMALL LETTER O WITH HORN AND HOOK ABOVE	
Ỡ		Vietnamese extension	letter	U+1EE0: LATIN CAPITAL LETTER O WITH HORN AND TILDE	
ỡ		Vietnamese extension	letter	U+1EE1: LATIN SMALL LETTER O WITH HORN AND TILDE	
Ợ		Vietnamese extension	letter	U+1EE2: LATIN CAPITAL LETTER O WITH HORN AND DOT BELOW	
ợ		Vietnamese extension	letter	U+1EE3: LATIN SMALL LETTER O WITH HORN AND DOT BELOW	
Ụ		Vietnamese extension	letter	U+1EE4: LATIN CAPITAL LETTER U WITH DOT BELOW	
ụ		Vietnamese extension	letter	U+1EE5: LATIN SMALL LETTER U WITH DOT BELOW	
Ủ		Vietnamese extension	letter	U+1EE6: LATIN CAPITAL LETTER U WITH HOOK ABOVE	
ủ		Vietnamese extension	letter	U+1EE7: LATIN SMALL LETTER U WITH HOOK ABOVE	
Ứ		Vietnamese extension	letter	U+1EE8: LATIN CAPITAL LETTER U WITH HORN AND ACUTE	
ứ		Vietnamese extension	letter	U+1EE9: LATIN SMALL LETTER U WITH HORN AND ACUTE	
Ừ		Vietnamese extension	letter	U+1EEA: LATIN CAPITAL LETTER U WITH HORN AND GRAVE	
ừ		Vietnamese extension	letter	U+1EEB: LATIN SMALL LETTER U WITH HORN AND GRAVE	
Ử		Vietnamese extension	letter	U+1EEC: LATIN CAPITAL LETTER U WITH HORN AND HOOK ABOVE	
ử		Vietnamese extension	letter	U+1EED: LATIN SMALL LETTER U WITH HORN AND HOOK ABOVE	
Ữ		Vietnamese extension	letter	U+1EEE: LATIN CAPITAL LETTER U WITH HORN AND TILDE	
ữ		Vietnamese extension	letter	U+1EEF: LATIN SMALL LETTER U WITH HORN AND TILDE	
Ự		Vietnamese extension	letter	U+1EF0: LATIN CAPITAL LETTER U WITH HORN AND DOT BELOW	
ự		Vietnamese extension	letter	U+1EF1: LATIN SMALL LETTER U WITH HORN AND DOT BELOW	
Ỳ		general extension	letter	U+1EF2: LATIN CAPITAL LETTER Y WITH GRAVE	
ỳ		general extension	letter	U+1EF3: LATIN SMALL LETTER Y WITH GRAVE	
Ỵ		general extension	letter	U+1EF4: LATIN CAPITAL LETTER Y WITH DOT BELOW	
ỵ		general extension	letter	U+1EF5: LATIN SMALL LETTER Y WITH DOT BELOW	
Ỷ		general extension	letter	U+1EF6: LATIN CAPITAL LETTER Y WITH HOOK ABOVE	
ỷ		general extension	letter	U+1EF7: LATIN SMALL LETTER Y WITH HOOK ABOVE	
Ỹ		general extension	letter	U+1EF8: LATIN CAPITAL LETTER Y WITH TILDE	
ỹ		general extension	letter	U+1EF9: LATIN SMALL LETTER Y WITH TILDE	
Ỻ		medievalist	letter	U+1EFA: LATIN CAPITAL LETTER MIDDLE-WELSH LL	
ỻ		medievalist	letter	U+1EFB: LATIN SMALL LETTER MIDDLE-WELSH LL	
Ỽ		medievalist	letter	U+1EFC: LATIN CAPITAL LETTER MIDDLE-WELSH V	
ỽ		medievalist	letter	U+1EFD: LATIN SMALL LETTER MIDDLE-WELSH V	
Ỿ		medievalist	letter	U+1EFE: LATIN CAPITAL LETTER Y WITH LOOP	
ỿ		medievalist	letter	U+1EFF: LATIN SMALL LETTER Y WITH LOOP	
					
					
					
ɐ		IPA extension	letter	U+0250: LATIN SMALL LETTER TURNED A	
ɑ		IPA extension	letter	U+0251: LATIN SMALL LETTER ALPHA	
ɒ		IPA extension	letter	U+0252: LATIN SMALL LETTER TURNED ALPHA	
ɓ		IPA extension	letter	U+0253: LATIN SMALL LETTER B WITH HOOK	
ɔ		IPA extension	letter	U+0254: LATIN SMALL LETTER OPEN O	
ɕ		IPA extension	letter	U+0255: LATIN SMALL LETTER C WITH CURL	
ɖ		IPA extension	letter	U+0256: LATIN SMALL LETTER D WITH TAIL	
ɗ		IPA extension	letter	U+0257: LATIN SMALL LETTER D WITH HOOK	
ɘ		IPA extension	letter	U+0258: LATIN SMALL LETTER REVERSED E	
ə		IPA extension	letter	U+0259: LATIN SMALL LETTER SCHWA	
ɚ		IPA extension	letter	U+025A: LATIN SMALL LETTER SCHWA WITH HOOK	
ɛ		IPA extension	letter	U+025B: LATIN SMALL LETTER OPEN E	
ɜ		IPA extension	letter	U+025C: LATIN SMALL LETTER REVERSED OPEN E	
ɝ		IPA extension	letter	U+025D: LATIN SMALL LETTER REVERSED OPEN E WITH HOOK	
ɞ		IPA extension	letter	U+025E: LATIN SMALL LETTER CLOSED REVERSED OPEN E	
ɟ		IPA extension	letter	U+025F: LATIN SMALL LETTER DOTLESS J WITH STROKE	
ɠ		IPA extension	letter	U+0260: LATIN SMALL LETTER G WITH HOOK	
ɡ		IPA extension	letter	U+0261: LATIN SMALL LETTER SCRIPT G	
ɢ		IPA extension	letter	U+0262: LATIN LETTER SMALL CAPITAL G	
ɣ		IPA extension	letter	U+0263: LATIN SMALL LETTER GAMMA	
ɤ		IPA extension	letter	U+0264: LATIN SMALL LETTER RAMS HORN	
ɥ		IPA extension	letter	U+0265: LATIN SMALL LETTER TURNED H	
ɦ		IPA extension	letter	U+0266: LATIN SMALL LETTER H WITH HOOK	
ɧ		IPA extension	letter	U+0267: LATIN SMALL LETTER HENG WITH HOOK	
ɨ		IPA extension	letter	U+0268: LATIN SMALL LETTER I WITH STROKE	
ɩ		IPA extension	letter	U+0269: LATIN SMALL LETTER IOTA	
ɪ		IPA extension	letter	U+026A: LATIN LETTER SMALL CAPITAL I	
ɫ		IPA extension	letter	U+026B: LATIN SMALL LETTER L WITH MIDDLE TILDE	
ɬ		IPA extension	letter	U+026C: LATIN SMALL LETTER L WITH BELT	
ɭ		IPA extension	letter	U+026D: LATIN SMALL LETTER L WITH RETROFLEX HOOK	
ɮ		IPA extension	letter	U+026E: LATIN SMALL LETTER LEZH	
ɯ		IPA extension	letter	U+026F: LATIN SMALL LETTER TURNED M	
ɰ		IPA extension	letter	U+0270: LATIN SMALL LETTER TURNED M WITH LONG LEG	
ɱ		IPA extension	letter	U+0271: LATIN SMALL LETTER M WITH HOOK	
ɲ		IPA extension	letter	U+0272: LATIN SMALL LETTER N WITH LEFT HOOK	
ɳ		IPA extension	letter	U+0273: LATIN SMALL LETTER N WITH RETROFLEX HOOK	
ɴ		IPA extension	letter	U+0274: LATIN LETTER SMALL CAPITAL N	
ɵ		IPA extension	letter	U+0275: LATIN SMALL LETTER BARRED O	
ɶ		IPA extension	letter	U+0276: LATIN LETTER SMALL CAPITAL OE	
ɷ		IPA extension	letter	U+0277: LATIN SMALL LETTER CLOSED OMEGA	
ɸ		IPA extension	letter	U+0278: LATIN SMALL LETTER PHI	
ɹ		IPA extension	letter	U+0279: LATIN SMALL LETTER TURNED R	
ɺ		IPA extension	letter	U+027A: LATIN SMALL LETTER TURNED R WITH LONG LEG	
ɻ		IPA extension	letter	U+027B: LATIN SMALL LETTER TURNED R WITH HOOK	
ɼ		IPA extension	letter	U+027C: LATIN SMALL LETTER R WITH LONG LEG	
ɽ		IPA extension	letter	U+027D: LATIN SMALL LETTER R WITH TAIL	
ɾ		IPA extension	letter	U+027E: LATIN SMALL LETTER R WITH FISHHOOK	
ɿ		IPA extension	letter	U+027F: LATIN SMALL LETTER REVERSED R WITH FISHHOOK	
ʀ		IPA extension	letter	U+0280: LATIN LETTER SMALL CAPITAL R	
ʁ		IPA extension	letter	U+0281: LATIN LETTER SMALL CAPITAL INVERTED R	
ʂ		IPA extension	letter	U+0282: LATIN SMALL LETTER S WITH HOOK	
ʃ		IPA extension	letter	U+0283: LATIN SMALL LETTER ESH	
ʄ		IPA extension	letter	U+0284: LATIN SMALL LETTER DOTLESS J WITH STROKE AND HOOK	
ʅ		IPA extension	letter	U+0285: LATIN SMALL LETTER SQUAT REVERSED ESH	
ʆ		IPA extension	letter	U+0286: LATIN SMALL LETTER ESH WITH CURL	
ʇ		IPA extension	letter	U+0287: LATIN SMALL LETTER TURNED T	
ʈ		IPA extension	letter	U+0288: LATIN SMALL LETTER T WITH RETROFLEX HOOK	
ʉ		IPA extension	letter	U+0289: LATIN SMALL LETTER U BAR	
ʊ		IPA extension	letter	U+028A: LATIN SMALL LETTER UPSILON	
ʋ		IPA extension	letter	U+028B: LATIN SMALL LETTER V WITH HOOK	
ʌ		IPA extension	letter	U+028C: LATIN SMALL LETTER TURNED V	
ʍ		IPA extension	letter	U+028D: LATIN SMALL LETTER TURNED W	
ʎ		IPA extension	letter	U+028E: LATIN SMALL LETTER TURNED Y	
ʏ		IPA extension	letter	U+028F: LATIN LETTER SMALL CAPITAL Y	
ʐ		IPA extension	letter	U+0290: LATIN SMALL LETTER Z WITH RETROFLEX HOOK	
ʑ		IPA extension	letter	U+0291: LATIN SMALL LETTER Z WITH CURL	
ʒ		IPA extension	letter	U+0292: LATIN SMALL LETTER EZH	
ʓ		IPA extension	letter	U+0293: LATIN SMALL LETTER EZH WITH CURL	
ʔ		IPA extension	letter	U+0294: LATIN LETTER GLOTTAL STOP	
ʕ		IPA extension	letter	U+0295: LATIN LETTER PHARYNGEAL VOICED FRICATIVE	
ʖ		IPA extension	letter	U+0296: LATIN LETTER INVERTED GLOTTAL STOP	
ʗ		IPA extension	letter	U+0297: LATIN LETTER STRETCHED C	
ʘ		IPA extension	letter	U+0298: LATIN LETTER BILABIAL CLICK	
ʙ		IPA extension	letter	U+0299: LATIN LETTER SMALL CAPITAL B	
ʚ		IPA extension	letter	U+029A: LATIN SMALL LETTER CLOSED OPEN E	
ʛ		IPA extension	letter	U+029B: LATIN LETTER SMALL CAPITAL G WITH HOOK	
ʜ		IPA extension	letter	U+029C: LATIN LETTER SMALL CAPITAL H	
ʝ		IPA extension	letter	U+029D: LATIN SMALL LETTER J WITH CROSSED-TAIL	
ʞ		IPA extension	letter	U+029E: LATIN SMALL LETTER TURNED K	
ʟ		IPA extension	letter	U+029F: LATIN LETTER SMALL CAPITAL L	
ʠ		IPA extension	letter	U+02A0: LATIN SMALL LETTER Q WITH HOOK	
ʡ		IPA extension	letter	U+02A1: LATIN LETTER GLOTTAL STOP WITH STROKE	
ʢ		IPA extension	letter	U+02A2: LATIN LETTER REVERSED GLOTTAL STOP WITH STROKE	
ʣ		IPA extension	letter	U+02A3: LATIN SMALL LETTER DZ DIGRAPH	
ʤ		IPA extension	letter	U+02A4: LATIN SMALL LETTER DEZH DIGRAPH	
ʥ		IPA extension	letter	U+02A5: LATIN SMALL LETTER DZ DIGRAPH WITH CURL	
ʦ		IPA extension	letter	U+02A6: LATIN SMALL LETTER TS DIGRAPH	
ʧ		IPA extension	letter	U+02A7: LATIN SMALL LETTER TESH DIGRAPH	
ʨ		IPA extension	letter	U+02A8: LATIN SMALL LETTER TC DIGRAPH WITH CURL	
ʩ		IPA extension for disordered speech	letter	U+02A9: LATIN SMALL LETTER FENG DIGRAPH	
ʪ		IPA extension for disordered speech	letter	U+02AA: LATIN SMALL LETTER LS DIGRAPH	
ʫ		IPA extension for disordered speech	letter	U+02AB: LATIN SMALL LETTER LZ DIGRAPH	
ʬ		IPA extension for disordered speech	letter	U+02AC: LATIN LETTER BILABIAL PERCUSSIVE	
ʭ		IPA extension for disordered speech	letter	U+02AD: LATIN LETTER BIDENTAL PERCUSSIVE	
ʮ		IPA extension for sinology	letter	U+02AE: LATIN SMALL LETTER TURNED H WITH FISHHOOK	
ʯ		IPA extension for sinology	letter	U+02AF: LATIN SMALL LETTER TURNED H WITH FISHHOOK AND TAIL	
					
					
̀		ordinary diacritic	mark	U+0300: COMBINING GRAVE ACCENT​	
́		ordinary diacritic	mark	U+0301: COMBINING ACUTE ACCENT​	
̂		ordinary diacritic	mark	U+0302: COMBINING CIRCUMFLEX ACCENT​	
̃		ordinary diacritic	mark	U+0303: COMBINING TILDE​	
̄		ordinary diacritic	mark	U+0304: COMBINING MACRON​	
̅		ordinary diacritic	mark	U+0305: COMBINING OVERLINE​	
̆		ordinary diacritic	mark	U+0306: COMBINING BREVE​	
̇		ordinary diacritic	mark	U+0307: COMBINING DOT ABOVE​	
̈		ordinary diacritic	mark	U+0308: COMBINING DIAERESIS​	
̉		ordinary diacritic	mark	U+0309: COMBINING HOOK ABOVE​	
̊		ordinary diacritic	mark	U+030A: COMBINING RING ABOVE​	
̋		ordinary diacritic	mark	U+030B: COMBINING DOUBLE ACUTE ACCENT​	
̌		ordinary diacritic	mark	U+030C: COMBINING CARON​	
̍		ordinary diacritic	mark	U+030D: COMBINING VERTICAL LINE ABOVE​	
̎		ordinary diacritic	mark	U+030E: COMBINING DOUBLE VERTICAL LINE ABOVE​	
̏		ordinary diacritic	mark	U+030F: COMBINING DOUBLE GRAVE ACCENT​	
̐		ordinary diacritic	mark	U+0310: COMBINING CANDRABINDU​	
̑		ordinary diacritic	mark	U+0311: COMBINING INVERTED BREVE​	
̒		ordinary diacritic	mark	U+0312: COMBINING TURNED COMMA ABOVE​	
̓		ordinary diacritic	mark	U+0313: COMBINING COMMA ABOVE​	
̔		ordinary diacritic	mark	U+0314: COMBINING REVERSED COMMA ABOVE​	
̕		ordinary diacritic	mark	U+0315: COMBINING COMMA ABOVE RIGHT​	
̖		ordinary diacritic	mark	U+0316: COMBINING GRAVE ACCENT BELOW​	
̗		ordinary diacritic	mark	U+0317: COMBINING ACUTE ACCENT BELOW​	
̘		ordinary diacritic	mark	U+0318: COMBINING LEFT TACK BELOW​	
̙		ordinary diacritic	mark	U+0319: COMBINING RIGHT TACK BELOW​	
̚		ordinary diacritic	mark	U+031A: COMBINING LEFT ANGLE ABOVE​	
̛		ordinary diacritic	mark	U+031B: COMBINING HORN​	
̜		ordinary diacritic	mark	U+031C: COMBINING LEFT HALF RING BELOW​	
̝		ordinary diacritic	mark	U+031D: COMBINING UP TACK BELOW​	
̞		ordinary diacritic	mark	U+031E: COMBINING DOWN TACK BELOW​	
̟		ordinary diacritic	mark	U+031F: COMBINING PLUS SIGN BELOW​	
̠		ordinary diacritic	mark	U+0320: COMBINING MINUS SIGN BELOW​	
̡		ordinary diacritic	mark	U+0321: COMBINING PALATALIZED HOOK BELOW​	
̢		ordinary diacritic	mark	U+0322: COMBINING RETROFLEX HOOK BELOW​	
̣		ordinary diacritic	mark	U+0323: COMBINING DOT BELOW​	
̤		ordinary diacritic	mark	U+0324: COMBINING DIAERESIS BELOW​	
̥		ordinary diacritic	mark	U+0325: COMBINING RING BELOW​	
̦		ordinary diacritic	mark	U+0326: COMBINING COMMA BELOW​	
̧		ordinary diacritic	mark	U+0327: COMBINING CEDILLA​	
̨		ordinary diacritic	mark	U+0328: COMBINING OGONEK​	
̩		ordinary diacritic	mark	U+0329: COMBINING VERTICAL LINE BELOW​	
̪		ordinary diacritic	mark	U+032A: COMBINING BRIDGE BELOW​	
̫		ordinary diacritic	mark	U+032B: COMBINING INVERTED DOUBLE ARCH BELOW​	
̬		ordinary diacritic	mark	U+032C: COMBINING CARON BELOW​	
̭		ordinary diacritic	mark	U+032D: COMBINING CIRCUMFLEX ACCENT BELOW​	
̮		ordinary diacritic	mark	U+032E: COMBINING BREVE BELOW​	
̯		ordinary diacritic	mark	U+032F: COMBINING INVERTED BREVE BELOW​	
̰		ordinary diacritic	mark	U+0330: COMBINING TILDE BELOW​	
̱		ordinary diacritic	mark	U+0331: COMBINING MACRON BELOW​	
̲		ordinary diacritic	mark	U+0332: COMBINING LOW LINE​	
̳		ordinary diacritic	mark	U+0333: COMBINING DOUBLE LOW LINE​	
̴		overstruck diacritic	mark	U+0334: COMBINING TILDE OVERLAY​	
̵		overstruck diacritic	mark	U+0335: COMBINING SHORT STROKE OVERLAY​	
̶		overstruck diacritic	mark	U+0336: COMBINING LONG STROKE OVERLAY​	
̷		overstruck diacritic	mark	U+0337: COMBINING SHORT SOLIDUS OVERLAY​	
̸		overstruck diacritic	mark	U+0338: COMBINING LONG SOLIDUS OVERLAY​	
̹		miscellaneous	mark	U+0339: COMBINING RIGHT HALF RING BELOW​	
̺		miscellaneous	mark	U+033A: COMBINING INVERTED BRIDGE BELOW​	
̻		miscellaneous	mark	U+033B: COMBINING SQUARE BELOW​	
̼		miscellaneous	mark	U+033C: COMBINING SEAGULL BELOW​	
̽		miscellaneous	mark	U+033D: COMBINING X ABOVE​	
̾		miscellaneous	mark	U+033E: COMBINING VERTICAL TILDE​	
̿		miscellaneous	mark	U+033F: COMBINING DOUBLE OVERLINE​	
̀		Vietnamese tone mark	mark	U+0340: COMBINING GRAVE TONE MARK​	
́		Vietnamese tone mark	mark	U+0341: COMBINING ACUTE TONE MARK​	
͂		Greek	mark	U+0342: COMBINING GREEK PERISPOMENI​	
̓		Greek	mark	U+0343: COMBINING GREEK KORONIS​	
̈́		Greek	mark	U+0344: COMBINING GREEK DIALYTIKA TONOS​	
ͅ		Greek	mark	U+0345: COMBINING GREEK YPOGEGRAMMENI​	
͆		IPA	mark	U+0346: COMBINING BRIDGE ABOVE​	
͇		IPA	mark	U+0347: COMBINING EQUALS SIGN BELOW​	
͈		IPA	mark	U+0348: COMBINING DOUBLE VERTICAL LINE BELOW​	
͉		IPA	mark	U+0349: COMBINING LEFT ANGLE BELOW​	
͊		IPA	mark	U+034A: COMBINING NOT TILDE ABOVE​	
͋		IPA for disordered speech	mark	U+034B: COMBINING HOMOTHETIC ABOVE​	
͌		IPA for disordered speech	mark	U+034C: COMBINING ALMOST EQUAL TO ABOVE​	
͍		IPA for disordered speech	mark	U+034D: COMBINING LEFT RIGHT ARROW BELOW​	
͎		IPA for disordered speech	mark	U+034E: COMBINING UPWARDS ARROW BELOW​	
͏		grapheme joiner	mark	U+034F: COMBINING GRAPHEME JOINER​	
͐		Uralic phonetic alphabet	mark	U+0350: COMBINING RIGHT ARROWHEAD ABOVE​	
͑		Uralic phonetic alphabet	mark	U+0351: COMBINING LEFT HALF RING ABOVE​	
͒		Uralic phonetic alphabet	mark	U+0352: COMBINING FERMATA​	
͓		Uralic phonetic alphabet	mark	U+0353: COMBINING X BELOW​	
͔		Uralic phonetic alphabet	mark	U+0354: COMBINING LEFT ARROWHEAD BELOW​	
͕		Uralic phonetic alphabet	mark	U+0355: COMBINING RIGHT ARROWHEAD BELOW​	
͖		Uralic phonetic alphabet	mark	U+0356: COMBINING RIGHT ARROWHEAD AND UP ARROWHEAD BELOW​	
͗		Uralic phonetic alphabet	mark	U+0357: COMBINING RIGHT HALF RING ABOVE​	
͘		miscellaneous	mark	U+0358: COMBINING DOT ABOVE RIGHT​	
͙		miscellaneous	mark	U+0359: COMBINING ASTERISK BELOW​	
͚		miscellaneous	mark	U+035A: COMBINING DOUBLE RING BELOW​	
͛		miscellaneous	mark	U+035B: COMBINING ZIGZAG ABOVE​	
͜		double diacritic	mark	U+035C: COMBINING DOUBLE BREVE BELOW​	
͝		double diacritic	mark	U+035D: COMBINING DOUBLE BREVE​	
͞		double diacritic	mark	U+035E: COMBINING DOUBLE MACRON​	
͟		double diacritic	mark	U+035F: COMBINING DOUBLE MACRON BELOW​	
͠		double diacritic	mark	U+0360: COMBINING DOUBLE TILDE​	
͡		double diacritic	mark	U+0361: COMBINING DOUBLE INVERTED BREVE​	
͢		double diacritic	mark	U+0362: COMBINING DOUBLE RIGHTWARDS ARROW BELOW​	
ͣ		medieval superscript letter	mark	U+0363: COMBINING LATIN SMALL LETTER A​	
ͤ		medieval superscript letter	mark	U+0364: COMBINING LATIN SMALL LETTER E​	
ͥ		medieval superscript letter	mark	U+0365: COMBINING LATIN SMALL LETTER I​	
ͦ		medieval superscript letter	mark	U+0366: COMBINING LATIN SMALL LETTER O​	
ͧ		medieval superscript letter	mark	U+0367: COMBINING LATIN SMALL LETTER U​	
ͨ		medieval superscript letter	mark	U+0368: COMBINING LATIN SMALL LETTER C​	
ͩ		medieval superscript letter	mark	U+0369: COMBINING LATIN SMALL LETTER D​	
ͪ		medieval superscript letter	mark	U+036A: COMBINING LATIN SMALL LETTER H​	
ͫ		medieval superscript letter	mark	U+036B: COMBINING LATIN SMALL LETTER M​	
ͬ		medieval superscript letter	mark	U+036C: COMBINING LATIN SMALL LETTER R​	
ͭ		medieval superscript letter	mark	U+036D: COMBINING LATIN SMALL LETTER T​	
ͮ		medieval superscript letter	mark	U+036E: COMBINING LATIN SMALL LETTER V​	
ͯ		medieval superscript letter	mark	U+036F: COMBINING LATIN SMALL LETTER X​	
					
					
᪰		German dialectology		U+1AB0: COMBINING DOUBLED CIRCUMFLEX ACCENT​	
᪱		German dialectology		U+1AB1: COMBINING DIAERESIS-RING​	
᪲		German dialectology		U+1AB2: COMBINING INFINITY​	
᪳		German dialectology		U+1AB3: COMBINING DOWNWARDS ARROW​	
᪴		German dialectology		U+1AB4: COMBINING TRIPLE DOT​	
᪵		German dialectology		U+1AB5: COMBINING X-X BELOW​	
᪶		German dialectology		U+1AB6: COMBINING WIGGLY LINE BELOW​	
᪷		German dialectology		U+1AB7: COMBINING OPEN MARK BELOW​	
᪸		German dialectology		U+1AB8: COMBINING DOUBLE OPEN MARK BELOW​	
᪹		German dialectology		U+1AB9: COMBINING LIGHT CENTRALIZATION STROKE BELOW​	
᪺		German dialectology		U+1ABA: COMBINING STRONG CENTRALIZATION STROKE BELOW​	
᪻		surrounding other diacritics or letters		U+1ABB: COMBINING PARENTHESES ABOVE​	
᪼		surrounding other diacritics or letters		U+1ABC: COMBINING DOUBLE PARENTHESES ABOVE​	
᪽		surrounding other diacritics or letters		U+1ABD: COMBINING PARENTHESES BELOW​	
᪾		surrounding other diacritics or letters		U+1ABE: COMBINING PARENTHESES OVERLAY​	
ᪿ		Scots dialectology		U+1ABF: COMBINING LATIN SMALL LETTER W BELOW​	
ᫀ		Scots dialectology		U+1AC0: COMBINING LATIN SMALL LETTER TURNED W BELOW​	
᫁		next to or surrounding other diacritics		U+1AC1: COMBINING LEFT PARENTHESIS ABOVE LEFT​	
᫂		next to or surrounding other diacritics		U+1AC2: COMBINING RIGHT PARENTHESIS ABOVE RIGHT​	
᫃		next to or surrounding other diacritics		U+1AC3: COMBINING LEFT PARENTHESIS BELOW LEFT​	
᫄		next to or surrounding other diacritics		U+1AC4: COMBINING RIGHT PARENTHESIS BELOW RIGHT​	
᫅		next to or surrounding other diacritics		U+1AC5: COMBINING SQUARE BRACKETS ABOVE​	
᫆		phonetic sign		U+1AC6: COMBINING NUMBER SIGN ABOVE​	
᫇		extended IPA		U+1AC7: COMBINING INVERTED DOUBLE ARCH ABOVE​	
᫈		extended IPA		U+1AC8: COMBINING PLUS SIGN ABOVE​	
᫉		extended IPA		U+1AC9: COMBINING DOUBLE PLUS SIGN ABOVE​	
᫊		extended IPA		U+1ACA: COMBINING DOUBLE PLUS SIGN BELOW​	
᫋		Middle English Ormulum		U+1ACB: COMBINING TRIPLE ACUTE ACCENT​	
ᫌ		Middle English Ormulum		U+1ACC: COMBINING LATIN SMALL LETTER INSULAR G​	
ᫍ		Middle English Ormulum		U+1ACD: COMBINING LATIN SMALL LETTER INSULAR R​	
ᫎ		Middle English Ormulum		U+1ACE: COMBINING LATIN SMALL LETTER INSULAR T​	
					
					
᷀		ancient Greek		U+1DC0: COMBINING DOTTED GRAVE ACCENT​	
᷁		ancient Greek		U+1DC1: COMBINING DOTTED ACUTE ACCENT​	
᷂		miscellaneous		U+1DC2: COMBINING SNAKE BELOW​	
᷃		miscellaneous		U+1DC3: COMBINING SUSPENSION MARK​	
᷄		contour tone mark		U+1DC4: COMBINING MACRON-ACUTE​	
᷅		contour tone mark		U+1DC5: COMBINING GRAVE-MACRON​	
᷆		contour tone mark		U+1DC6: COMBINING MACRON-GRAVE​	
᷇		contour tone mark		U+1DC7: COMBINING ACUTE-MACRON​	
᷈		contour tone mark		U+1DC8: COMBINING GRAVE-ACUTE-GRAVE​	
᷉		contour tone mark		U+1DC9: COMBINING ACUTE-GRAVE-ACUTE​	
᷊		miscellaneous		U+1DCA: COMBINING LATIN SMALL LETTER R BELOW​	
᷋		contour tone mark		U+1DCB: COMBINING BREVE-MACRON​	
᷌		contour tone mark		U+1DCC: COMBINING MACRON-BREVE​	
᷍		double diacritic		U+1DCD: COMBINING DOUBLE CIRCUMFLEX ABOVE​	
᷎		medievalist		U+1DCE: COMBINING OGONEK ABOVE​	
᷏		medievalist		U+1DCF: COMBINING ZIGZAG BELOW​	
᷐		medievalist		U+1DD0: COMBINING IS BELOW​	
᷑		medievalist		U+1DD1: COMBINING UR ABOVE​	
᷒		medievalist		U+1DD2: COMBINING US ABOVE​	
ᷓ		medieval superscript letter diacritic		U+1DD3: COMBINING LATIN SMALL LETTER FLATTENED OPEN A ABOVE​	
ᷔ		medieval superscript letter diacritic		U+1DD4: COMBINING LATIN SMALL LETTER AE​	
ᷕ		medieval superscript letter diacritic		U+1DD5: COMBINING LATIN SMALL LETTER AO​	
ᷖ		medieval superscript letter diacritic		U+1DD6: COMBINING LATIN SMALL LETTER AV​	
ᷗ		medieval superscript letter diacritic		U+1DD7: COMBINING LATIN SMALL LETTER C CEDILLA​	
ᷘ		medieval superscript letter diacritic		U+1DD8: COMBINING LATIN SMALL LETTER INSULAR D​	
ᷙ		medieval superscript letter diacritic		U+1DD9: COMBINING LATIN SMALL LETTER ETH​	
ᷚ		medieval superscript letter diacritic		U+1DDA: COMBINING LATIN SMALL LETTER G​	
ᷛ		medieval superscript letter diacritic		U+1DDB: COMBINING LATIN LETTER SMALL CAPITAL G​	
ᷜ		medieval superscript letter diacritic		U+1DDC: COMBINING LATIN SMALL LETTER K​	
ᷝ		medieval superscript letter diacritic		U+1DDD: COMBINING LATIN SMALL LETTER L​	
ᷞ		medieval superscript letter diacritic		U+1DDE: COMBINING LATIN LETTER SMALL CAPITAL L​	
ᷟ		medieval superscript letter diacritic		U+1DDF: COMBINING LATIN LETTER SMALL CAPITAL M​	
ᷠ		medieval superscript letter diacritic		U+1DE0: COMBINING LATIN SMALL LETTER N​	
ᷡ		medieval superscript letter diacritic		U+1DE1: COMBINING LATIN LETTER SMALL CAPITAL N​	
ᷢ		medieval superscript letter diacritic		U+1DE2: COMBINING LATIN LETTER SMALL CAPITAL R​	
ᷣ		medieval superscript letter diacritic		U+1DE3: COMBINING LATIN SMALL LETTER R ROTUNDA​	
ᷤ		medieval superscript letter diacritic		U+1DE4: COMBINING LATIN SMALL LETTER S​	
ᷥ		medieval superscript letter diacritic		U+1DE5: COMBINING LATIN SMALL LETTER LONG S​	
ᷦ		medieval superscript letter diacritic		U+1DE6: COMBINING LATIN SMALL LETTER Z​	
ᷧ		superscript letter diacritic for German dialectology		U+1DE7: COMBINING LATIN SMALL LETTER ALPHA​	
ᷨ		superscript letter diacritic for German dialectology		U+1DE8: COMBINING LATIN SMALL LETTER B​	
ᷩ		superscript letter diacritic for German dialectology		U+1DE9: COMBINING LATIN SMALL LETTER BETA​	
ᷪ		superscript letter diacritic for German dialectology		U+1DEA: COMBINING LATIN SMALL LETTER SCHWA​	
ᷫ		superscript letter diacritic for German dialectology		U+1DEB: COMBINING LATIN SMALL LETTER F​	
ᷬ		superscript letter diacritic for German dialectology		U+1DEC: COMBINING LATIN SMALL LETTER L WITH DOUBLE MIDDLE TILDE​	
ᷭ		superscript letter diacritic for German dialectology		U+1DED: COMBINING LATIN SMALL LETTER O WITH LIGHT CENTRALIZATION STROKE​	
ᷮ		superscript letter diacritic for German dialectology		U+1DEE: COMBINING LATIN SMALL LETTER P​	
ᷯ		superscript letter diacritic for German dialectology		U+1DEF: COMBINING LATIN SMALL LETTER ESH​	
ᷰ		superscript letter diacritic for German dialectology		U+1DF0: COMBINING LATIN SMALL LETTER U WITH LIGHT CENTRALIZATION STROKE​	
ᷱ		superscript letter diacritic for German dialectology		U+1DF1: COMBINING LATIN SMALL LETTER W​	
ᷲ		superscript letter diacritic for German dialectology		U+1DF2: COMBINING LATIN SMALL LETTER A WITH DIAERESIS​	
ᷳ		superscript letter diacritic for German dialectology		U+1DF3: COMBINING LATIN SMALL LETTER O WITH DIAERESIS​	
ᷴ		superscript letter diacritic for German dialectology		U+1DF4: COMBINING LATIN SMALL LETTER U WITH DIAERESIS​	
᷵		American lexicography		U+1DF5: COMBINING UP TACK ABOVE​	
᷶		typicon mark		U+1DF6: COMBINING KAVYKA ABOVE RIGHT​	
᷷		typicon mark		U+1DF7: COMBINING KAVYKA ABOVE LEFT​	
᷸		miscellaneous		U+1DF8: COMBINING DOT ABOVE LEFT​	
᷹		miscellaneous		U+1DF9: COMBINING WIDE INVERTED BRIDGE BELOW​	
᷺		miscellaneous		U+1DFA: COMBINING DOT BELOW LEFT​	
᷻		miscellaneous		U+1DFB: COMBINING DELETION MARK​	
᷼		double diacritic mark for UPA		U+1DFC: COMBINING DOUBLE INVERTED BREVE BELOW​	
᷽		miscellaneous		U+1DFD: COMBINING ALMOST EQUAL TO BELOW​	
᷾		UPA		U+1DFE: COMBINING LEFT ARROWHEAD ABOVE​	
᷿		UPA		U+1DFF: COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW​	
					
					
︠		combining half mark		U+FE20: COMBINING LIGATURE LEFT HALF​	
︡		combining half mark		U+FE21: COMBINING LIGATURE RIGHT HALF​	
︢		combining half mark		U+FE22: COMBINING DOUBLE TILDE LEFT HALF​	
︣		combining half mark		U+FE23: COMBINING DOUBLE TILDE RIGHT HALF​	
︤		continuous macron for Coptic		U+FE24: COMBINING MACRON LEFT HALF​	
︥		continuous macron for Coptic		U+FE25: COMBINING MACRON RIGHT HALF​	
︦		continuous macron for Coptic		U+FE26: COMBINING CONJOINING MACRON​	
︧		combining half mark below		U+FE27: COMBINING LIGATURE LEFT HALF BELOW​	
︨		combining half mark below		U+FE28: COMBINING LIGATURE RIGHT HALF BELOW​	
︩		combining half mark below		U+FE29: COMBINING TILDE LEFT HALF BELOW​	
︪		combining half mark below		U+FE2A: COMBINING TILDE RIGHT HALF BELOW​	
︫		combining half mark below		U+FE2B: COMBINING MACRON LEFT HALF BELOW​	
︬		combining half mark below		U+FE2C: COMBINING MACRON RIGHT HALF BELOW​	
︭		combining half mark below		U+FE2D: COMBINING CONJOINING MACRON BELOW​	
︮		combining half mark		U+FE2E: COMBINING CYRILLIC TITLO LEFT HALF​	
︯		combining half mark		U+FE2F: COMBINING CYRILLIC TITLO RIGHT HALF​	
					
					
ᴀ		Latin		U+1D00: LATIN LETTER SMALL CAPITAL A	
ᴁ		Latin		U+1D01: LATIN LETTER SMALL CAPITAL AE	
ᴂ		Latin		U+1D02: LATIN SMALL LETTER TURNED AE	
ᴃ		Latin		U+1D03: LATIN LETTER SMALL CAPITAL BARRED B	
ᴄ		Latin		U+1D04: LATIN LETTER SMALL CAPITAL C	
ᴅ		Latin		U+1D05: LATIN LETTER SMALL CAPITAL D	
ᴆ		Latin		U+1D06: LATIN LETTER SMALL CAPITAL ETH	
ᴇ		Latin		U+1D07: LATIN LETTER SMALL CAPITAL E	
ᴈ		Latin		U+1D08: LATIN SMALL LETTER TURNED OPEN E	
ᴉ		Latin		U+1D09: LATIN SMALL LETTER TURNED I	
ᴊ		Latin		U+1D0A: LATIN LETTER SMALL CAPITAL J	
ᴋ		Latin		U+1D0B: LATIN LETTER SMALL CAPITAL K	
ᴌ		Latin		U+1D0C: LATIN LETTER SMALL CAPITAL L WITH STROKE	
ᴍ		Latin		U+1D0D: LATIN LETTER SMALL CAPITAL M	
ᴎ		Latin		U+1D0E: LATIN LETTER SMALL CAPITAL REVERSED N	
ᴏ		Latin		U+1D0F: LATIN LETTER SMALL CAPITAL O	
ᴐ		Latin		U+1D10: LATIN LETTER SMALL CAPITAL OPEN O	
ᴑ		Latin		U+1D11: LATIN SMALL LETTER SIDEWAYS O	
ᴒ		Latin		U+1D12: LATIN SMALL LETTER SIDEWAYS OPEN O	
ᴓ		Latin		U+1D13: LATIN SMALL LETTER SIDEWAYS O WITH STROKE	
ᴔ		Latin		U+1D14: LATIN SMALL LETTER TURNED OE	
ᴕ		Latin		U+1D15: LATIN LETTER SMALL CAPITAL OU	
ᴖ		Latin		U+1D16: LATIN SMALL LETTER TOP HALF O	
ᴗ		Latin		U+1D17: LATIN SMALL LETTER BOTTOM HALF O	
ᴘ		Latin		U+1D18: LATIN LETTER SMALL CAPITAL P	
ᴙ		Latin		U+1D19: LATIN LETTER SMALL CAPITAL REVERSED R	
ᴚ		Latin		U+1D1A: LATIN LETTER SMALL CAPITAL TURNED R	
ᴛ		Latin		U+1D1B: LATIN LETTER SMALL CAPITAL T	
ᴜ		Latin		U+1D1C: LATIN LETTER SMALL CAPITAL U	
ᴝ		Latin		U+1D1D: LATIN SMALL LETTER SIDEWAYS U	
ᴞ		Latin		U+1D1E: LATIN SMALL LETTER SIDEWAYS DIAERESIZED U	
ᴟ		Latin		U+1D1F: LATIN SMALL LETTER SIDEWAYS TURNED M	
ᴠ		Latin		U+1D20: LATIN LETTER SMALL CAPITAL V	
ᴡ		Latin		U+1D21: LATIN LETTER SMALL CAPITAL W	
ᴢ		Latin		U+1D22: LATIN LETTER SMALL CAPITAL Z	
ᴣ		Latin		U+1D23: LATIN LETTER SMALL CAPITAL EZH	
ᴤ		Latin		U+1D24: LATIN LETTER VOICED LARYNGEAL SPIRANT	
ᴥ		Latin		U+1D25: LATIN LETTER AIN	
ᴦ		Greek		U+1D26: GREEK LETTER SMALL CAPITAL GAMMA	
ᴧ		Greek		U+1D27: GREEK LETTER SMALL CAPITAL LAMDA	
ᴨ		Greek		U+1D28: GREEK LETTER SMALL CAPITAL PI	
ᴩ		Greek		U+1D29: GREEK LETTER SMALL CAPITAL RHO	
ᴪ		Greek		U+1D2A: GREEK LETTER SMALL CAPITAL PSI	
ᴫ		Cyrillic		U+1D2B: CYRILLIC LETTER SMALL CAPITAL EL	
ᴬ		Latin superscript modifier letter		U+1D2C: MODIFIER LETTER CAPITAL A	
ᴭ		Latin superscript modifier letter		U+1D2D: MODIFIER LETTER CAPITAL AE	
ᴮ		Latin superscript modifier letter		U+1D2E: MODIFIER LETTER CAPITAL B	
ᴯ		Latin superscript modifier letter		U+1D2F: MODIFIER LETTER CAPITAL BARRED B	
ᴰ		Latin superscript modifier letter		U+1D30: MODIFIER LETTER CAPITAL D	
ᴱ		Latin superscript modifier letter		U+1D31: MODIFIER LETTER CAPITAL E	
ᴲ		Latin superscript modifier letter		U+1D32: MODIFIER LETTER CAPITAL REVERSED E	
ᴳ		Latin superscript modifier letter		U+1D33: MODIFIER LETTER CAPITAL G	
ᴴ		Latin superscript modifier letter		U+1D34: MODIFIER LETTER CAPITAL H	
ᴵ		Latin superscript modifier letter		U+1D35: MODIFIER LETTER CAPITAL I	
ᴶ		Latin superscript modifier letter		U+1D36: MODIFIER LETTER CAPITAL J	
ᴷ		Latin superscript modifier letter		U+1D37: MODIFIER LETTER CAPITAL K	
ᴸ		Latin superscript modifier letter		U+1D38: MODIFIER LETTER CAPITAL L	
ᴹ		Latin superscript modifier letter		U+1D39: MODIFIER LETTER CAPITAL M	
ᴺ		Latin superscript modifier letter		U+1D3A: MODIFIER LETTER CAPITAL N	
ᴻ		Latin superscript modifier letter		U+1D3B: MODIFIER LETTER CAPITAL REVERSED N	
ᴼ		Latin superscript modifier letter		U+1D3C: MODIFIER LETTER CAPITAL O	
ᴽ		Latin superscript modifier letter		U+1D3D: MODIFIER LETTER CAPITAL OU	
ᴾ		Latin superscript modifier letter		U+1D3E: MODIFIER LETTER CAPITAL P	
ᴿ		Latin superscript modifier letter		U+1D3F: MODIFIER LETTER CAPITAL R	
ᵀ		Latin superscript modifier letter		U+1D40: MODIFIER LETTER CAPITAL T	
ᵁ		Latin superscript modifier letter		U+1D41: MODIFIER LETTER CAPITAL U	
ᵂ		Latin superscript modifier letter		U+1D42: MODIFIER LETTER CAPITAL W	
ᵃ		Latin superscript modifier letter		U+1D43: MODIFIER LETTER SMALL A	
ᵄ		Latin superscript modifier letter		U+1D44: MODIFIER LETTER SMALL TURNED A	
ᵅ		Latin superscript modifier letter		U+1D45: MODIFIER LETTER SMALL ALPHA	
ᵆ		Latin superscript modifier letter		U+1D46: MODIFIER LETTER SMALL TURNED AE	
ᵇ		Latin superscript modifier letter		U+1D47: MODIFIER LETTER SMALL B	
ᵈ		Latin superscript modifier letter		U+1D48: MODIFIER LETTER SMALL D	
ᵉ		Latin superscript modifier letter		U+1D49: MODIFIER LETTER SMALL E	
ᵊ		Latin superscript modifier letter		U+1D4A: MODIFIER LETTER SMALL SCHWA	
ᵋ		Latin superscript modifier letter		U+1D4B: MODIFIER LETTER SMALL OPEN E	
ᵌ		Latin superscript modifier letter		U+1D4C: MODIFIER LETTER SMALL TURNED OPEN E	
ᵍ		Latin superscript modifier letter		U+1D4D: MODIFIER LETTER SMALL G	
ᵎ		Latin superscript modifier letter		U+1D4E: MODIFIER LETTER SMALL TURNED I	
ᵏ		Latin superscript modifier letter		U+1D4F: MODIFIER LETTER SMALL K	
ᵐ		Latin superscript modifier letter		U+1D50: MODIFIER LETTER SMALL M	
ᵑ		Latin superscript modifier letter		U+1D51: MODIFIER LETTER SMALL ENG	
ᵒ		Latin superscript modifier letter		U+1D52: MODIFIER LETTER SMALL O	
ᵓ		Latin superscript modifier letter		U+1D53: MODIFIER LETTER SMALL OPEN O	
ᵔ		Latin superscript modifier letter		U+1D54: MODIFIER LETTER SMALL TOP HALF O	
ᵕ		Latin superscript modifier letter		U+1D55: MODIFIER LETTER SMALL BOTTOM HALF O	
ᵖ		Latin superscript modifier letter		U+1D56: MODIFIER LETTER SMALL P	
ᵗ		Latin superscript modifier letter		U+1D57: MODIFIER LETTER SMALL T	
ᵘ		Latin superscript modifier letter		U+1D58: MODIFIER LETTER SMALL U	
ᵙ		Latin superscript modifier letter		U+1D59: MODIFIER LETTER SMALL SIDEWAYS U	
ᵚ		Latin superscript modifier letter		U+1D5A: MODIFIER LETTER SMALL TURNED M	
ᵛ		Latin superscript modifier letter		U+1D5B: MODIFIER LETTER SMALL V	
ᵜ		Latin superscript modifier letter		U+1D5C: MODIFIER LETTER SMALL AIN	
ᵝ		Greek superscript modifier letter		U+1D5D: MODIFIER LETTER SMALL BETA	
ᵞ		Greek superscript modifier letter		U+1D5E: MODIFIER LETTER SMALL GREEK GAMMA	
ᵟ		Greek superscript modifier letter		U+1D5F: MODIFIER LETTER SMALL DELTA	
ᵠ		Greek superscript modifier letter		U+1D60: MODIFIER LETTER SMALL GREEK PHI	
ᵡ		Greek superscript modifier letter		U+1D61: MODIFIER LETTER SMALL CHI	
ᵢ		Latin subscript modifier letter		U+1D62: LATIN SUBSCRIPT SMALL LETTER I	
ᵣ		Latin subscript modifier letter		U+1D63: LATIN SUBSCRIPT SMALL LETTER R	
ᵤ		Latin subscript modifier letter		U+1D64: LATIN SUBSCRIPT SMALL LETTER U	
ᵥ		Latin subscript modifier letter		U+1D65: LATIN SUBSCRIPT SMALL LETTER V	
ᵦ		Greek subscript modifier letter		U+1D66: GREEK SUBSCRIPT SMALL LETTER BETA	
ᵧ		Greek subscript modifier letter		U+1D67: GREEK SUBSCRIPT SMALL LETTER GAMMA	
ᵨ		Greek subscript modifier letter		U+1D68: GREEK SUBSCRIPT SMALL LETTER RHO	
ᵩ		Greek subscript modifier letter		U+1D69: GREEK SUBSCRIPT SMALL LETTER PHI	
ᵪ		Greek subscript modifier letter		U+1D6A: GREEK SUBSCRIPT SMALL LETTER CHI	
ᵫ		Latin		U+1D6B: LATIN SMALL LETTER UE	
ᵬ		Latin letter with middle tilde		U+1D6C: LATIN SMALL LETTER B WITH MIDDLE TILDE	
ᵭ		Latin letter with middle tilde		U+1D6D: LATIN SMALL LETTER D WITH MIDDLE TILDE	
ᵮ		Latin letter with middle tilde		U+1D6E: LATIN SMALL LETTER F WITH MIDDLE TILDE	
ᵯ		Latin letter with middle tilde		U+1D6F: LATIN SMALL LETTER M WITH MIDDLE TILDE	
ᵰ		Latin letter with middle tilde		U+1D70: LATIN SMALL LETTER N WITH MIDDLE TILDE	
ᵱ		Latin letter with middle tilde		U+1D71: LATIN SMALL LETTER P WITH MIDDLE TILDE	
ᵲ		Latin letter with middle tilde		U+1D72: LATIN SMALL LETTER R WITH MIDDLE TILDE	
ᵳ		Latin letter with middle tilde		U+1D73: LATIN SMALL LETTER R WITH FISHHOOK AND MIDDLE TILDE	
ᵴ		Latin letter with middle tilde		U+1D74: LATIN SMALL LETTER S WITH MIDDLE TILDE	
ᵵ		Latin letter with middle tilde		U+1D75: LATIN SMALL LETTER T WITH MIDDLE TILDE	
ᵶ		Latin letter with middle tilde		U+1D76: LATIN SMALL LETTER Z WITH MIDDLE TILDE	
ᵷ		Caucasian linguistics		U+1D77: LATIN SMALL LETTER TURNED G	
ᵸ		Caucasian linguistics		U+1D78: MODIFIER LETTER CYRILLIC EN	
ᵹ		phonetic symbol		U+1D79: LATIN SMALL LETTER INSULAR G	
ᵺ		phonetic symbol		U+1D7A: LATIN SMALL LETTER TH WITH STRIKETHROUGH	
ᵻ		phonetic symbol		U+1D7B: LATIN SMALL CAPITAL LETTER I WITH STROKE	
ᵼ		phonetic symbol		U+1D7C: LATIN SMALL LETTER IOTA WITH STROKE	
ᵽ		phonetic symbol		U+1D7D: LATIN SMALL LETTER P WITH STROKE	
ᵾ		phonetic symbol		U+1D7E: LATIN SMALL CAPITAL LETTER U WITH STROKE	
ᵿ		phonetic symbol		U+1D7F: LATIN SMALL LETTER UPSILON WITH STROKE	
					
					
ᶀ		Latin letter with palatal hook		U+1D80: LATIN SMALL LETTER B WITH PALATAL HOOK	
ᶁ		Latin letter with palatal hook		U+1D81: LATIN SMALL LETTER D WITH PALATAL HOOK	
ᶂ		Latin letter with palatal hook		U+1D82: LATIN SMALL LETTER F WITH PALATAL HOOK	
ᶃ		Latin letter with palatal hook		U+1D83: LATIN SMALL LETTER G WITH PALATAL HOOK	
ᶄ		Latin letter with palatal hook		U+1D84: LATIN SMALL LETTER K WITH PALATAL HOOK	
ᶅ		Latin letter with palatal hook		U+1D85: LATIN SMALL LETTER L WITH PALATAL HOOK	
ᶆ		Latin letter with palatal hook		U+1D86: LATIN SMALL LETTER M WITH PALATAL HOOK	
ᶇ		Latin letter with palatal hook		U+1D87: LATIN SMALL LETTER N WITH PALATAL HOOK	
ᶈ		Latin letter with palatal hook		U+1D88: LATIN SMALL LETTER P WITH PALATAL HOOK	
ᶉ		Latin letter with palatal hook		U+1D89: LATIN SMALL LETTER R WITH PALATAL HOOK	
ᶊ		Latin letter with palatal hook		U+1D8A: LATIN SMALL LETTER S WITH PALATAL HOOK	
ᶋ		Latin letter with palatal hook		U+1D8B: LATIN SMALL LETTER ESH WITH PALATAL HOOK	
ᶌ		Latin letter with palatal hook		U+1D8C: LATIN SMALL LETTER V WITH PALATAL HOOK	
ᶍ		Latin letter with palatal hook		U+1D8D: LATIN SMALL LETTER X WITH PALATAL HOOK	
ᶎ		Latin letter with palatal hook		U+1D8E: LATIN SMALL LETTER Z WITH PALATAL HOOK	
ᶏ		Latin letter with retroflex hook		U+1D8F: LATIN SMALL LETTER A WITH RETROFLEX HOOK	
ᶐ		Latin letter with retroflex hook		U+1D90: LATIN SMALL LETTER ALPHA WITH RETROFLEX HOOK	
ᶑ		Latin letter with retroflex hook		U+1D91: LATIN SMALL LETTER D WITH HOOK AND TAIL	
ᶒ		Latin letter with retroflex hook		U+1D92: LATIN SMALL LETTER E WITH RETROFLEX HOOK	
ᶓ		Latin letter with retroflex hook		U+1D93: LATIN SMALL LETTER OPEN E WITH RETROFLEX HOOK	
ᶔ		Latin letter with retroflex hook		U+1D94: LATIN SMALL LETTER REVERSED OPEN E WITH RETROFLEX HOOK	
ᶕ		Latin letter with retroflex hook		U+1D95: LATIN SMALL LETTER SCHWA WITH RETROFLEX HOOK	
ᶖ		Latin letter with retroflex hook		U+1D96: LATIN SMALL LETTER I WITH RETROFLEX HOOK	
ᶗ		Latin letter with retroflex hook		U+1D97: LATIN SMALL LETTER OPEN O WITH RETROFLEX HOOK	
ᶘ		Latin letter with retroflex hook		U+1D98: LATIN SMALL LETTER ESH WITH RETROFLEX HOOK	
ᶙ		Latin letter with retroflex hook		U+1D99: LATIN SMALL LETTER U WITH RETROFLEX HOOK	
ᶚ		Latin letter with retroflex hook		U+1D9A: LATIN SMALL LETTER EZH WITH RETROFLEX HOOK	
ᶛ		modifier letter		U+1D9B: MODIFIER LETTER SMALL TURNED ALPHA	
ᶜ		modifier letter		U+1D9C: MODIFIER LETTER SMALL C	
ᶝ		modifier letter		U+1D9D: MODIFIER LETTER SMALL C WITH CURL	
ᶞ		modifier letter		U+1D9E: MODIFIER LETTER SMALL ETH	
ᶟ		modifier letter		U+1D9F: MODIFIER LETTER SMALL REVERSED OPEN E	
ᶠ		modifier letter		U+1DA0: MODIFIER LETTER SMALL F	
ᶡ		modifier letter		U+1DA1: MODIFIER LETTER SMALL DOTLESS J WITH STROKE	
ᶢ		modifier letter		U+1DA2: MODIFIER LETTER SMALL SCRIPT G	
ᶣ		modifier letter		U+1DA3: MODIFIER LETTER SMALL TURNED H	
ᶤ		modifier letter		U+1DA4: MODIFIER LETTER SMALL I WITH STROKE	
ᶥ		modifier letter		U+1DA5: MODIFIER LETTER SMALL IOTA	
ᶦ		modifier letter		U+1DA6: MODIFIER LETTER SMALL CAPITAL I	
ᶧ		modifier letter		U+1DA7: MODIFIER LETTER SMALL CAPITAL I WITH STROKE	
ᶨ		modifier letter		U+1DA8: MODIFIER LETTER SMALL J WITH CROSSED-TAIL	
ᶩ		modifier letter		U+1DA9: MODIFIER LETTER SMALL L WITH RETROFLEX HOOK	
ᶪ		modifier letter		U+1DAA: MODIFIER LETTER SMALL L WITH PALATAL HOOK	
ᶫ		modifier letter		U+1DAB: MODIFIER LETTER SMALL CAPITAL L	
ᶬ		modifier letter		U+1DAC: MODIFIER LETTER SMALL M WITH HOOK	
ᶭ		modifier letter		U+1DAD: MODIFIER LETTER SMALL TURNED M WITH LONG LEG	
ᶮ		modifier letter		U+1DAE: MODIFIER LETTER SMALL N WITH LEFT HOOK	
ᶯ		modifier letter		U+1DAF: MODIFIER LETTER SMALL N WITH RETROFLEX HOOK	
ᶰ		modifier letter		U+1DB0: MODIFIER LETTER SMALL CAPITAL N	
ᶱ		modifier letter		U+1DB1: MODIFIER LETTER SMALL BARRED O	
ᶲ		modifier letter		U+1DB2: MODIFIER LETTER SMALL PHI	
ᶳ		modifier letter		U+1DB3: MODIFIER LETTER SMALL S WITH HOOK	
ᶴ		modifier letter		U+1DB4: MODIFIER LETTER SMALL ESH	
ᶵ		modifier letter		U+1DB5: MODIFIER LETTER SMALL T WITH PALATAL HOOK	
ᶶ		modifier letter		U+1DB6: MODIFIER LETTER SMALL U BAR	
ᶷ		modifier letter		U+1DB7: MODIFIER LETTER SMALL UPSILON	
ᶸ		modifier letter		U+1DB8: MODIFIER LETTER SMALL CAPITAL U	
ᶹ		modifier letter		U+1DB9: MODIFIER LETTER SMALL V WITH HOOK	
ᶺ		modifier letter		U+1DBA: MODIFIER LETTER SMALL TURNED V	
ᶻ		modifier letter		U+1DBB: MODIFIER LETTER SMALL Z	
ᶼ		modifier letter		U+1DBC: MODIFIER LETTER SMALL Z WITH RETROFLEX HOOK	
ᶽ		modifier letter		U+1DBD: MODIFIER LETTER SMALL Z WITH CURL	
ᶾ		modifier letter		U+1DBE: MODIFIER LETTER SMALL EZH	
ᶿ		modifier letter		U+1DBF: MODIFIER LETTER SMALL THETA	
					
					
ʰ		Latin superscript modifier letter		U+02B0: MODIFIER LETTER SMALL H	
ʱ		Latin superscript modifier letter		U+02B1: MODIFIER LETTER SMALL H WITH HOOK	
ʲ		Latin superscript modifier letter		U+02B2: MODIFIER LETTER SMALL J	
ʳ		Latin superscript modifier letter		U+02B3: MODIFIER LETTER SMALL R	
ʴ		Latin superscript modifier letter		U+02B4: MODIFIER LETTER SMALL TURNED R	
ʵ		Latin superscript modifier letter		U+02B5: MODIFIER LETTER SMALL TURNED R WITH HOOK	
ʶ		Latin superscript modifier letter		U+02B6: MODIFIER LETTER SMALL CAPITAL INVERTED R	
ʷ		Latin superscript modifier letter		U+02B7: MODIFIER LETTER SMALL W	
ʸ		Latin superscript modifier letter		U+02B8: MODIFIER LETTER SMALL Y	
ʹ		miscellaneous phonetic modifier		U+02B9: MODIFIER LETTER PRIME	
ʺ		miscellaneous phonetic modifier		U+02BA: MODIFIER LETTER DOUBLE PRIME	
ʻ		miscellaneous phonetic modifier		U+02BB: MODIFIER LETTER TURNED COMMA	
ʼ		miscellaneous phonetic modifier		U+02BC: MODIFIER LETTER APOSTROPHE	
ʽ		miscellaneous phonetic modifier		U+02BD: MODIFIER LETTER REVERSED COMMA	
ʾ		miscellaneous phonetic modifier		U+02BE: MODIFIER LETTER RIGHT HALF RING	
ʿ		miscellaneous phonetic modifier		U+02BF: MODIFIER LETTER LEFT HALF RING	
ˀ		miscellaneous phonetic modifier		U+02C0: MODIFIER LETTER GLOTTAL STOP	
ˁ		miscellaneous phonetic modifier		U+02C1: MODIFIER LETTER REVERSED GLOTTAL STOP	
˂		miscellaneous phonetic modifier		U+02C2: MODIFIER LETTER LEFT ARROWHEAD	
˃		miscellaneous phonetic modifier		U+02C3: MODIFIER LETTER RIGHT ARROWHEAD	
˄		miscellaneous phonetic modifier		U+02C4: MODIFIER LETTER UP ARROWHEAD	
˅		miscellaneous phonetic modifier		U+02C5: MODIFIER LETTER DOWN ARROWHEAD	
ˆ		miscellaneous phonetic modifier		U+02C6: MODIFIER LETTER CIRCUMFLEX ACCENT	
ˇ		miscellaneous phonetic modifier		U+02C7: CARON	
ˈ		miscellaneous phonetic modifier		U+02C8: MODIFIER LETTER VERTICAL LINE	
ˉ		miscellaneous phonetic modifier		U+02C9: MODIFIER LETTER MACRON	
ˊ		miscellaneous phonetic modifier		U+02CA: MODIFIER LETTER ACUTE ACCENT	
ˋ		miscellaneous phonetic modifier		U+02CB: MODIFIER LETTER GRAVE ACCENT	
ˌ		miscellaneous phonetic modifier		U+02CC: MODIFIER LETTER LOW VERTICAL LINE	
ˍ		miscellaneous phonetic modifier		U+02CD: MODIFIER LETTER LOW MACRON	
ˎ		miscellaneous phonetic modifier		U+02CE: MODIFIER LETTER LOW GRAVE ACCENT	
ˏ		miscellaneous phonetic modifier		U+02CF: MODIFIER LETTER LOW ACUTE ACCENT	
ː		miscellaneous phonetic modifier		U+02D0: MODIFIER LETTER TRIANGULAR COLON	
ˑ		miscellaneous phonetic modifier		U+02D1: MODIFIER LETTER HALF TRIANGULAR COLON	
˒		miscellaneous phonetic modifier		U+02D2: MODIFIER LETTER CENTRED RIGHT HALF RING	
˓		miscellaneous phonetic modifier		U+02D3: MODIFIER LETTER CENTRED LEFT HALF RING	
˔		miscellaneous phonetic modifier		U+02D4: MODIFIER LETTER UP TACK	
˕		miscellaneous phonetic modifier		U+02D5: MODIFIER LETTER DOWN TACK	
˖		miscellaneous phonetic modifier		U+02D6: MODIFIER LETTER PLUS SIGN	
˗		miscellaneous phonetic modifier		U+02D7: MODIFIER LETTER MINUS SIGN	
˘		spacing clone of diacritic		U+02D8: BREVE	
˙		spacing clone of diacritic		U+02D9: DOT ABOVE	
˚		spacing clone of diacritic		U+02DA: RING ABOVE	
˛		spacing clone of diacritic		U+02DB: OGONEK	
˜		spacing clone of diacritic		U+02DC: SMALL TILDE	
˝		spacing clone of diacritic		U+02DD: DOUBLE ACUTE ACCENT	
˞		addition based on 1989 IPA		U+02DE: MODIFIER LETTER RHOTIC HOOK	
˟		addition based on 1989 IPA		U+02DF: MODIFIER LETTER CROSS ACCENT	
ˠ		addition based on 1989 IPA		U+02E0: MODIFIER LETTER SMALL GAMMA	
ˡ		addition based on 1989 IPA		U+02E1: MODIFIER LETTER SMALL L	
ˢ		addition based on 1989 IPA		U+02E2: MODIFIER LETTER SMALL S	
ˣ		addition based on 1989 IPA		U+02E3: MODIFIER LETTER SMALL X	
ˤ		addition based on 1989 IPA		U+02E4: MODIFIER LETTER SMALL REVERSED GLOTTAL STOP	
˥		tone letter		U+02E5: MODIFIER LETTER EXTRA-HIGH TONE BAR	
˦		tone letter		U+02E6: MODIFIER LETTER HIGH TONE BAR	
˧		tone letter		U+02E7: MODIFIER LETTER MID TONE BAR	
˨		tone letter		U+02E8: MODIFIER LETTER LOW TONE BAR	
˩		tone letter		U+02E9: MODIFIER LETTER EXTRA-LOW TONE BAR	
˪		extended Bopomofo tone mark		U+02EA: MODIFIER LETTER YIN DEPARTING TONE MARK	
˫		extended Bopomofo tone mark		U+02EB: MODIFIER LETTER YANG DEPARTING TONE MARK	
ˬ		IPA modifier		U+02EC: MODIFIER LETTER VOICING	
˭		IPA modifier		U+02ED: MODIFIER LETTER UNASPIRATED	
ˮ		modifier letter		U+02EE: MODIFIER LETTER DOUBLE APOSTROPHE	
˯		UPA modifier		U+02EF: MODIFIER LETTER LOW DOWN ARROWHEAD	
˰		UPA modifier		U+02F0: MODIFIER LETTER LOW UP ARROWHEAD	
˱		UPA modifier		U+02F1: MODIFIER LETTER LOW LEFT ARROWHEAD	
˲		UPA modifier		U+02F2: MODIFIER LETTER LOW RIGHT ARROWHEAD	
˳		UPA modifier		U+02F3: MODIFIER LETTER LOW RING	
˴		UPA modifier		U+02F4: MODIFIER LETTER MIDDLE GRAVE ACCENT	
˵		UPA modifier		U+02F5: MODIFIER LETTER MIDDLE DOUBLE GRAVE ACCENT	
˶		UPA modifier		U+02F6: MODIFIER LETTER MIDDLE DOUBLE ACUTE ACCENT	
˷		UPA modifier		U+02F7: MODIFIER LETTER LOW TILDE	
˸		UPA modifier		U+02F8: MODIFIER LETTER RAISED COLON	
˹		UPA modifier		U+02F9: MODIFIER LETTER BEGIN HIGH TONE	
˺		UPA modifier		U+02FA: MODIFIER LETTER END HIGH TONE	
˻		UPA modifier		U+02FB: MODIFIER LETTER BEGIN LOW TONE	
˼		UPA modifier		U+02FC: MODIFIER LETTER END LOW TONE	
˽		UPA modifier		U+02FD: MODIFIER LETTER SHELF	
˾		UPA modifier		U+02FE: MODIFIER LETTER OPEN SHELF	
˿		UPA modifier		U+02FF: MODIFIER LETTER LOW LEFT ARROW	
					
					
꜀		corner tone mark for Chinese		U+A700: MODIFIER LETTER CHINESE TONE YIN PING	
꜁		corner tone mark for Chinese		U+A701: MODIFIER LETTER CHINESE TONE YANG PING	
꜂		corner tone mark for Chinese		U+A702: MODIFIER LETTER CHINESE TONE YIN SHANG	
꜃		corner tone mark for Chinese		U+A703: MODIFIER LETTER CHINESE TONE YANG SHANG	
꜄		corner tone mark for Chinese		U+A704: MODIFIER LETTER CHINESE TONE YIN QU	
꜅		corner tone mark for Chinese		U+A705: MODIFIER LETTER CHINESE TONE YANG QU	
꜆		corner tone mark for Chinese		U+A706: MODIFIER LETTER CHINESE TONE YIN RU	
꜇		corner tone mark for Chinese		U+A707: MODIFIER LETTER CHINESE TONE YANG RU	
꜈		dotted tone letter		U+A708: MODIFIER LETTER EXTRA-HIGH DOTTED TONE BAR	
꜉		dotted tone letter		U+A709: MODIFIER LETTER HIGH DOTTED TONE BAR	
꜊		dotted tone letter		U+A70A: MODIFIER LETTER MID DOTTED TONE BAR	
꜋		dotted tone letter		U+A70B: MODIFIER LETTER LOW DOTTED TONE BAR	
꜌		dotted tone letter		U+A70C: MODIFIER LETTER EXTRA-LOW DOTTED TONE BAR	
꜍		dotted tone letter		U+A70D: MODIFIER LETTER EXTRA-HIGH DOTTED LEFT-STEM TONE BAR	
꜎		dotted tone letter		U+A70E: MODIFIER LETTER HIGH DOTTED LEFT-STEM TONE BAR	
꜏		dotted tone letter		U+A70F: MODIFIER LETTER MID DOTTED LEFT-STEM TONE BAR	
꜐		dotted tone letter		U+A710: MODIFIER LETTER LOW DOTTED LEFT-STEM TONE BAR	
꜑		dotted tone letter		U+A711: MODIFIER LETTER EXTRA-LOW DOTTED LEFT-STEM TONE BAR	
꜒		left-stem tone letter		U+A712: MODIFIER LETTER EXTRA-HIGH LEFT-STEM TONE BAR	
꜓		left-stem tone letter		U+A713: MODIFIER LETTER HIGH LEFT-STEM TONE BAR	
꜔		left-stem tone letter		U+A714: MODIFIER LETTER MID LEFT-STEM TONE BAR	
꜕		left-stem tone letter		U+A715: MODIFIER LETTER LOW LEFT-STEM TONE BAR	
꜖		left-stem tone letter		U+A716: MODIFIER LETTER EXTRA-LOW LEFT-STEM TONE BAR	
ꜗ		Chinantec tone mark		U+A717: MODIFIER LETTER DOT VERTICAL BAR	
ꜘ		Chinantec tone mark		U+A718: MODIFIER LETTER DOT SLASH	
ꜙ		Chinantec tone mark		U+A719: MODIFIER LETTER DOT HORIZONTAL BAR	
ꜚ		Chinantec tone mark		U+A71A: MODIFIER LETTER LOWER RIGHT CORNER ANGLE	
ꜛ		Africanist tone letter		U+A71B: MODIFIER LETTER RAISED UP ARROW	
ꜜ		Africanist tone letter		U+A71C: MODIFIER LETTER RAISED DOWN ARROW	
ꜝ		Africanist tone letter		U+A71D: MODIFIER LETTER RAISED EXCLAMATION MARK	
ꜞ		Africanist tone letter		U+A71E: MODIFIER LETTER RAISED INVERTED EXCLAMATION MARK	
ꜟ		Africanist tone letter		U+A71F: MODIFIER LETTER LOW INVERTED EXCLAMATION MARK	
					
					
⁰		superscript		U+2070: SUPERSCRIPT ZERO	
ⁱ		superscript		U+2071: SUPERSCRIPT LATIN SMALL LETTER I	
⁴		superscript		U+2074: SUPERSCRIPT FOUR	
⁵		superscript		U+2075: SUPERSCRIPT FIVE	
⁶		superscript		U+2076: SUPERSCRIPT SIX	
⁷		superscript		U+2077: SUPERSCRIPT SEVEN	
⁸		superscript		U+2078: SUPERSCRIPT EIGHT	
⁹		superscript		U+2079: SUPERSCRIPT NINE	
⁺		superscript		U+207A: SUPERSCRIPT PLUS SIGN	
⁻		superscript		U+207B: SUPERSCRIPT MINUS	
⁼		superscript		U+207C: SUPERSCRIPT EQUALS SIGN	
⁽		superscript		U+207D: SUPERSCRIPT LEFT PARENTHESIS	
⁾		superscript		U+207E: SUPERSCRIPT RIGHT PARENTHESIS	
ⁿ		superscript		U+207F: SUPERSCRIPT LATIN SMALL LETTER N	
₀		subscript		U+2080: SUBSCRIPT ZERO	
₁		subscript		U+2081: SUBSCRIPT ONE	
₂		subscript		U+2082: SUBSCRIPT TWO	
₃		subscript		U+2083: SUBSCRIPT THREE	
₄		subscript		U+2084: SUBSCRIPT FOUR	
₅		subscript		U+2085: SUBSCRIPT FIVE	
₆		subscript		U+2086: SUBSCRIPT SIX	
₇		subscript		U+2087: SUBSCRIPT SEVEN	
₈		subscript		U+2088: SUBSCRIPT EIGHT	
₉		subscript		U+2089: SUBSCRIPT NINE	
₊		subscript		U+208A: SUBSCRIPT PLUS SIGN	
₋		subscript		U+208B: SUBSCRIPT MINUS	
₌		subscript		U+208C: SUBSCRIPT EQUALS SIGN	
₍		subscript		U+208D: SUBSCRIPT LEFT PARENTHESIS	
₎		subscript		U+208E: SUBSCRIPT RIGHT PARENTHESIS	
ₐ		subscript		U+2090: LATIN SUBSCRIPT SMALL LETTER A	
ₑ		subscript		U+2091: LATIN SUBSCRIPT SMALL LETTER E	
ₒ		subscript		U+2092: LATIN SUBSCRIPT SMALL LETTER O	
ₓ		subscript		U+2093: LATIN SUBSCRIPT SMALL LETTER X	
ₔ		subscript		U+2094: LATIN SUBSCRIPT SMALL LETTER SCHWA	
ₕ		subscript for UPA		U+2095: LATIN SUBSCRIPT SMALL LETTER H	
ₖ		subscript for UPA		U+2096: LATIN SUBSCRIPT SMALL LETTER K	
ₗ		subscript for UPA		U+2097: LATIN SUBSCRIPT SMALL LETTER L	
ₘ		subscript for UPA		U+2098: LATIN SUBSCRIPT SMALL LETTER M	
ₙ		subscript for UPA		U+2099: LATIN SUBSCRIPT SMALL LETTER N	
ₚ		subscript for UPA		U+209A: LATIN SUBSCRIPT SMALL LETTER P	
ₛ		subscript for UPA		U+209B: LATIN SUBSCRIPT SMALL LETTER S	
ₜ		subscript for UPA		U+209C: LATIN SUBSCRIPT SMALL LETTER T	
					
					
					
←		arrow		U+2190: LEFTWARDS ARROW	
→		arrow		U+2192: RIGHTWARDS ARROW	
					
					
&#x2000;		space		U+2000: EN QUAD	
&#x2001;		space		U+2001: EM QUAD	
&#x2002;		space		U+2002: EN SPACE	
&#x2003;		space		U+2003: EM SPACE	
&#x2004;		space		U+2004: THREE-PER-EM SPACE	
&#x2005;		space		U+2005: FOUR-PER-EM SPACE	
&#x2006;		space		U+2006: SIX-PER-EM SPACE	
&#x2007;		space		U+2007: FIGURE SPACE	
&#x2008;		space		U+2008: PUNCTUATION SPACE	
&#x2009;		space		U+2009: THIN SPACE	
&#x200A;		space		U+200A: HAIR SPACE	
​		format character		U+200B: ZERO WIDTH SPACE	
‌		format character		U+200C: ZERO WIDTH NON-JOINER	
‍		format character		U+200D: ZERO WIDTH JOINER	
‎		format character		U+200E: LEFT-TO-RIGHT MARK	
‏		format character		U+200F: RIGHT-TO-LEFT MARK	
‐		dash		U+2010: HYPHEN	
‑		dash		U+2011: NON-BREAKING HYPHEN	
‒		dash		U+2012: FIGURE DASH	
–		dash		U+2013: EN DASH	
—		dash		U+2014: EM DASH	
―		dash		U+2015: HORIZONTAL BAR	
‖		general punctuation		U+2016: DOUBLE VERTICAL LINE	
‗		general punctuation		U+2017: DOUBLE LOW LINE	
‘		quotation mark/apostrophe		U+2018: LEFT SINGLE QUOTATION MARK	
’		quotation mark/apostrophe		U+2019: RIGHT SINGLE QUOTATION MARK	
‚		quotation mark/apostrophe		U+201A: SINGLE LOW-9 QUOTATION MARK	
‛		quotation mark/apostrophe		U+201B: SINGLE HIGH-REVERSED-9 QUOTATION MARK	
“		quotation mark/apostrophe		U+201C: LEFT DOUBLE QUOTATION MARK	
”		quotation mark/apostrophe		U+201D: RIGHT DOUBLE QUOTATION MARK	
„		quotation mark/apostrophe		U+201E: DOUBLE LOW-9 QUOTATION MARK	
‟		quotation mark/apostrophe		U+201F: DOUBLE HIGH-REVERSED-9 QUOTATION MARK	
†		general punctuation		U+2020: DAGGER	
‡		general punctuation		U+2021: DOUBLE DAGGER	
•		general punctuation		U+2022: BULLET	
‣		general punctuation		U+2023: TRIANGULAR BULLET	
․		general punctuation		U+2024: ONE DOT LEADER	
‥		general punctuation		U+2025: TWO DOT LEADER	
…		general punctuation		U+2026: HORIZONTAL ELLIPSIS	
‧		general punctuation		U+2027: HYPHENATION POINT	
		separator		U+2028 LINE SEPARATOR	
		separator		U+2029 PARAGRAPH SEPARATOR	
‪		format character		U+202A: LEFT-TO-RIGHT EMBEDDING	
‫		format character		U+202B: RIGHT-TO-LEFT EMBEDDING	
‬		format character		U+202C: POP DIRECTIONAL FORMATTING	
‭		format character		U+202D: LEFT-TO-RIGHT OVERRIDE	
‮		format character		U+202E: RIGHT-TO-LEFT OVERRIDE	
 		narrow no-break space		U+202F NARROW NO-BREAK SPACE	
‰		general punctuation		U+2030: PER MILLE SIGN	
‱		general punctuation		U+2031: PER TEN THOUSAND SIGN	
′		general punctuation		U+2032: PRIME	
″		general punctuation		U+2033: DOUBLE PRIME	
‴		general punctuation		U+2034: TRIPLE PRIME	
‵		general punctuation		U+2035: REVERSED PRIME	
‶		general punctuation		U+2036: REVERSED DOUBLE PRIME	
‷		general punctuation		U+2037: REVERSED TRIPLE PRIME	
‸		general punctuation		U+2038: CARET	
‹		quotation mark		U+2039: SINGLE LEFT-POINTING ANGLE QUOTATION MARK	
›		quotation mark		U+203A: SINGLE RIGHT-POINTING ANGLE QUOTATION MARK	
※		general punctuation		U+203B: REFERENCE MARK	
‼		double punctuation for vertical text		U+203C: DOUBLE EXCLAMATION MARK	
‽		general punctuation		U+203D: INTERROBANG	
‾		general punctuation		U+203E: OVERLINE	
‿		general punctuation		U+203F: UNDERTIE	
⁀		general punctuation		U+2040: CHARACTER TIE	
⁁		general punctuation		U+2041: CARET INSERTION POINT	
⁂		general punctuation		U+2042: ASTERISM	
⁃		general punctuation		U+2043: HYPHEN BULLET	
⁄		general punctuation		U+2044: FRACTION SLASH	
⁅		brackets		U+2045: LEFT SQUARE BRACKET WITH QUILL	
⁆		brackets		U+2046: RIGHT SQUARE BRACKET WITH QUILL	
⁇		double punctuation for vertical text		U+2047: DOUBLE QUESTION MARK	
⁈		double punctuation for vertical text		U+2048: QUESTION EXCLAMATION MARK	
⁉		double punctuation for vertical text		U+2049: EXCLAMATION QUESTION MARK	
⁊		general punctuation		U+204A: TIRONIAN SIGN ET	
⁋		general punctuation		U+204B: REVERSED PILCROW SIGN	
⁌		general punctuation		U+204C: BLACK LEFTWARDS BULLET	
⁍		general punctuation		U+204D: BLACK RIGHTWARDS BULLET	
⁎		general punctuation		U+204E: LOW ASTERISK	
⁏		general punctuation		U+204F: REVERSED SEMICOLON	
⁐		general punctuation		U+2050: CLOSE UP	
⁑		general punctuation		U+2051: TWO ASTERISKS ALIGNED VERTICALLY	
⁒		general punctuation		U+2052: COMMERCIAL MINUS SIGN	
⁓		general punctuation		U+2053: SWUNG DASH	
⁔		general punctuation		U+2054: INVERTED UNDERTIE	
⁕		general punctuation		U+2055: FLOWER PUNCTUATION MARK	
⁖		archaic punctuation		U+2056: THREE DOT PUNCTUATION	
⁗		general punctuation		U+2057: QUADRUPLE PRIME	
⁘		archaic punctuation		U+2058: FOUR DOT PUNCTUATION	
⁙		archaic punctuation		U+2059: FIVE DOT PUNCTUATION	
⁚		archaic punctuation		U+205A: TWO DOT PUNCTUATION	
⁛		archaic punctuation		U+205B: FOUR DOT MARK	
⁜		archaic punctuation		U+205C: DOTTED CROSS	
⁝		archaic punctuation		U+205D: TRICOLON	
⁞		archaic punctuation		U+205E: VERTICAL FOUR DOTS	
		space		U+205F MEDIUM MATHEMATICAL SPACE	
⁠		format character		U+2060: WORD JOINER	
⁡		invisible operators		U+2061: FUNCTION APPLICATION	
⁢		invisible operators		U+2062: INVISIBLE TIMES	
⁣		invisible operators		U+2063: INVISIBLE SEPARATOR	
⁤		invisible operators		U+2064: INVISIBLE PLUS	
⁦		format character		U+2066: LEFT-TO-RIGHT ISOLATE	
⁧		format character		U+2067: RIGHT-TO-LEFT ISOLATE	
⁨		format character		U+2068: FIRST STRONG ISOLATE	
⁩		format character		U+2069: POP DIRECTIONAL ISOLATE	
⁪		punctuation	deprecated	U+206A: INHIBIT SYMMETRIC SWAPPING	
⁫		punctuation	deprecated	U+206B: ACTIVATE SYMMETRIC SWAPPING	
⁬		punctuation	deprecated	U+206C: INHIBIT ARABIC FORM SHAPING	
⁭		punctuation	deprecated	U+206D: ACTIVATE ARABIC FORM SHAPING	
⁮		punctuation	deprecated	U+206E: NATIONAL DIGIT SHAPES	
⁯		punctuation	deprecated	U+206F: NOMINAL DIGIT SHAPES	




`




var cols = {
"class": 1,
"key":0,
"transLoc": 0,
"ipaLoc": 0,
"transckey": 0,
"transcription": 0,
"typeLoc": 2,
"statusLoc": 3,
"equiv": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 0,
"nnameLoc": 0,
"ucsName": 4,
"block": 5,

//"othertranscriptions": [[6, 'ISO 15919']]
}



