var spreadsheet = `
ځ								consonant					U+0681: ARABIC LETTER HAH WITH HAMZA ABOVE	🗸
ݬ								consonant					U+076C: ARABIC LETTER REH WITH HAMZA ABOVE	🗸
ࢡ								consonant					U+08A1: ARABIC LETTER BEH WITH HAMZA ABOVE	🗸
ئ													U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	🗸
ࢨ								consonant					U+08A8: ARABIC LETTER YEH WITH TWO DOTS BELOW AND HAMZA ABOVE	🗸
ۆ								vowel					U+06C6: ARABIC LETTER OE	🗸
ۊ													U+06CA: ARABIC LETTER WAW WITH TWO DOTS ABOVE	🗸
ێ								vowel					U+06CE: ARABIC LETTER YEH WITH SMALL V	🗸
ࢬ								vowel	Rohingya				U+08AC: ARABIC LETTER ROHINGYA YEH	🗸
م								consonant					U+0645: ARABIC LETTER MEEM	🗸
ݪ								consonant					U+076A: ARABIC LETTER LAM WITH BAR	🗸
														
ڽ		ɲ						nasal		ڽڽڽ ڽ			U+06BD: ARABIC LETTER NOON WITH THREE DOTS ABOVE	🗸
														
ڵ		ɫ						velarised approximant		ڵڵڵ ڵ			U+06B5: ARABIC LETTER LAM WITH SMALL V	🗸
ڶ		ɫ						velarised approximant	variant				U+06B6: ARABIC LETTER LAM WITH DOT ABOVE	🗸
ڷ		ɫ						velarised approximant	variant				U+06B7: ARABIC LETTER LAM WITH THREE DOTS ABOVE	🗸ڕ		ɾ						flap		ـڕ ڕ			U+0695: ARABIC LETTER REH WITH SMALL V BELOW	🗸
و								approximant/mater lectionis					U+0648: ARABIC LETTER WAW	🗸
ڒ		ɾ						flap	variant				U+0692: ARABIC LETTER REH WITH SMALL V	🗸
ڔ								consonant	variant				U+0694: ARABIC LETTER REH WITH DOT BELOW	🗸
ٵ								letter with high hamza	deprecated				U+0675: ARABIC LETTER HIGH HAMZA ALEF	🗸
ٶ								letter with high hamza	deprecated				U+0676: ARABIC LETTER HIGH HAMZA WAW	🗸
ٸ								letter with high hamza	deprecated				U+0678: ARABIC LETTER HIGH HAMZA YEH	🗸
														
؞								punctuation					U+061E: ARABIC TRIPLE DOT PUNCTUATION MARK	🗸
؅								punctuation					U+0605: ARABIC NUMBER MARK ABOVE	🗸
														
؋								currency symbol					U+060B: AFGHANI SIGN	🗸
۝								number sign					U+06DD: ARABIC END OF AYAH	🗸
࣢								number sign					U+08E2: ARABIC DISPUTED END OF AYAH	🗸



`



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

"equiv": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 10,
"numLoc": 0,

"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 14,

//"othertranscriptions": [[5, 'LOC']]
}




