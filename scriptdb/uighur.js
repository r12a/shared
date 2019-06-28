var spreadsheet = `
م	m	m	m	м	m	consonant					U+0645: ARABIC LETTER MEEM
ن	n	n	n	н	n	consonant					U+0646: ARABIC LETTER NOON
د	d	d	d	д	d	consonant					U+062F: ARABIC LETTER DAL
ت	t	t	t	т	t	consonant					U+062A: ARABIC LETTER TEH
ب	b	b	b	б	b	consonant					U+0628: ARABIC LETTER BEH
پ	p	p	p	п	p	consonant					U+067E: ARABIC LETTER PEH
ف	f	f	f	ф	f	consonant					U+0641: ARABIC LETTER FEH
ق	q	q	q	қ	q	consonant					U+0642: ARABIC LETTER QAF
ك	k	k	k	к	k	consonant					U+0643: ARABIC LETTER KAF
ڭ	n	ŋ	ng	ң	ŋ	consonant				ڭ ڭڭڭ	U+06AD: ARABIC LETTER NG
گ	g	g	g	г	g	consonant					U+06AF: ARABIC LETTER GAF
غ	r	ʁ	gh	ғ	ʁ	consonant					U+063A: ARABIC LETTER GHAIN
ھ	h	h	h	һ	h	consonant					U+06BE: ARABIC LETTER HEH DOACHASHMEE
خ	x	χ	x	х	χ	consonant					U+062E: ARABIC LETTER KHAH
چ	c	č	ch	ч	ʧ	consonant					U+0686: ARABIC LETTER TCHEH
ج	d	ʤ	j	җ	ʤ	consonant					U+062C: ARABIC LETTER JEEM
ژ	z	ʒ	zh	ж	ʒ	consonant					U+0698: ARABIC LETTER JEH
ز	z¶	z	z	з	z	consonant					U+0632: ARABIC LETTER ZAIN
س	s	s	s	с	s	consonant					U+0633: ARABIC LETTER SEEN
ش	s	ʃ	sh	ш	ʃ	consonant					U+0634: ARABIC LETTER SHEEN
ر	r¶	r	r	р	r	consonant					U+0631: ARABIC LETTER REH
ل	l	l	l	л	l	consonant					U+0644: ARABIC LETTER LAM
ئ	{	ʿ	- ’	-	-	consonant					U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
											
											
ي	y	y	y	й	j	semivowel					U+064A: ARABIC LETTER YEH
ۋ	w	w	w	в	v w	semivowel					U+06CB: ARABIC LETTER VE
											
											
ا	a	a	a	а	ɑ	vowel					U+0627: ARABIC LETTER ALEF
ە	e	e	e	ә	ɛ	vowel					U+06D5: ARABIC LETTER AE
ې	e	ë	ë	е	e	vowel					U+06D0: ARABIC LETTER E
ى	i	i	i	и	i	vowel					U+0649: ARABIC LETTER ALEF MAKSURA
و	o	o	o	о	o	vowel					U+0648: ARABIC LETTER WAW
ۆ	o	ø	ö	ө	ø	vowel					U+06C6: ARABIC LETTER OE
ۇ	u	u	u	у	u	vowel					U+06C7: ARABIC LETTER U
ۈ	u	ü	ü	ү	y	vowel					U+06C8: ARABIC LETTER YU
											
											
٪	%	%	%			percent sign					U+066A: ARABIC PERCENT SIGN
؟	?	?	?			question mark					U+061F: ARABIC QUESTION MARK
؛	;	;	;			semicolon					U+061B: ARABIC SEMICOLON
،	,	,	,			comma					U+060C: ARABIC COMMA
											
											
											
											
											
											
ئا	A	’a	a	а	ɑ						U+0626 U+0627: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER ALEF
ئە	E	’e	e	ә	ɛ						U+0626 U+06D5: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER AE
ئې	E	 ’ë	ë	е	e						U+0626 U+06D0: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER E
ئى	I	’i	i	и	i						U+0626 U+0649: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER ALEF MAKSURA
ئو	O	’o	ö	ө	o						U+0626 U+0648: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER WAW
ئۆ	O	’ø	o	о	ø						U+0626 U+06C6: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER OE
ئۇ	U	’u	u	у	u						U+0626 U+06C7: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER U
ئۈ	U	’ü	ü	ү	y						U+0626 U+06C8: ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER YU

`

var cols = {
"key": 1,
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"meaning":0,
"shape":10,
"transcription":3,
"transcription2":4,
"ucsName": 11,


"othertranscriptions": [[3, 'ULY'], [4, 'USY']]
}
