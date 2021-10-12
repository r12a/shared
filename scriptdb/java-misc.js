var spreadsheet = `
																	
																	
ꦘ	Lo							murda consonant								U+A998: JAVANESE LETTER NYA MURDA	✓
ꦬ	Lo							consonant				ꦬ ꦥ꧀ꦬ			ra agung	U+A9AC: JAVANESE LETTER RA AGUNG	✓
																	
																	
ꦞ	Lo							consonant								U+A99E: JAVANESE LETTER DDA MAHAPRANA	✓
ꦙ	Lo							consonant								U+A999: JAVANESE LETTER JA MAHAPRANA	✓
ꦰ	Lo							consonant								U+A9B0: JAVANESE LETTER SA MAHAPRANA	✓
ꦜ	Lo							consonant								U+A99C: JAVANESE LETTER TTA MAHAPRANA	✓
																	
																	
																	
ꦊ	Lo							independent vocalic							nga lelet	U+A98A: JAVANESE LETTER NGA LELET	✓
ꦋ	Lo							independent vocalic				ꦋ ꦥ꧀ꦋ			nga lelet raswadi	U+A98B: JAVANESE LETTER NGA LELET RASWADI	✓
																	
																	
																	
ꦆ	Lo							independent vowel								U+A986: JAVANESE LETTER I	✓
ꦇ	Lo							independent vowel								U+A987: JAVANESE LETTER II	✓
ꦅ	Lo							independent vowel								U+A985: JAVANESE LETTER I KAWI	✓
ꦈ	Lo							independent vowel								U+A988: JAVANESE LETTER U	✓
ꦎ	Lo							independent vowel								U+A98E: JAVANESE LETTER O	✓
ꦄ	Lo							independent vowel								U+A984: JAVANESE LETTER A	✓
																	
																	
ꦷ	Mn​							vowel sign			ꦇ					U+A9B7: JAVANESE VOWEL SIGN WULU MELIK​	✓
ꦹ	Mn​							vowel sign			ꦈꦴ					U+A9B9: JAVANESE VOWEL SIGN SUKU MENDUT​	✓
ꦼ	Mn​							vowel sign							pepet	U+A9BC: JAVANESE VOWEL SIGN PEPET​	✓
ꦵ	Mc​							vowel sign							tolong	U+A9B5: JAVANESE VOWEL SIGN TOLONG​	✓
ꦴ	Mc​							vowel sign/length mark							tarung	U+A9B4: JAVANESE VOWEL SIGN TARUNG​	✓
ꦻ	Mc​							vowel sign							dirga mure	U+A9BB: JAVANESE VOWEL SIGN DIRGA MURE​	✓																	
																	
																	
꧈	Po						,	comma/full stop							pada lingsa	U+A9C8: JAVANESE PADA LINGSA	✓




`



latinPanel = 'aː aʲ aʷ ɖ d͡ʒ ð ə ɡ ħ ɲ ŋ ∅ ʃ t͡ʃ ʈ ɤ ɣ ʔ'



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc":6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

"dvowel": 10,
"ivowel": 11,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 12,
"conj": 13,
"numLoc": 0,
"nnameLoc": 14,
"nameLoc": 15,
"ucsName": 16,
"block": 17,

"othertranscriptions": [[3, 'Latin']]
}
