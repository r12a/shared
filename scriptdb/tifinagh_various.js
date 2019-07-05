var spreadsheet = `
ⵞ		t	ʧ	t͡ʃ	c	ch tš	تش	affricate	touareg/kabyle	yatš	ⵢⴰⵞ	U+2D5E: TIFINAGH LETTER YACH
ⴾ		k	k̇	k	k	k	ک	plosive	touareg	yak	ⵢⴰⴾ	U+2D3E: TIFINAGH LETTER TUAREG YAK
ⵈ		q	q̇	q qʷ	q	q	ق	plosive	touareg	yaq	ⵢⴰⵈ	U+2D48: TIFINAGH LETTER TUAREG YAQ
												
ⴵ		d	ʤ	d͡ʒ	g	dj	ج	affricate	touareg/kabyle	yadj	ⵢⴰⴵ	U+2D35: TIFINAGH LETTER BERBER ACADEMY YAJ
ⴶ		d	ʤ̇	d͡ʒ	d	dj	ج	affricate	touareg/kabyle	yadj	ⵢⴰⴶ	U+2D36: TIFINAGH LETTER YAJ
												
												
ⵆ		x	χ̇	χ	k x	kh x	خ	fricative	touareg	yax	ⵢⴰⵆ	U+2D46: TIFINAGH LETTER TUAREG YAKH
ⵁ		h	ḣ	h	h	h	ھ	fricative	Berber Academy	yah	ⵢⴰⵁ	U+2D41: TIFINAGH LETTER BERBER ACADEMY YAH
ⵂ		h	ḧ	h	h	h	ھ	fricative	touareg	yah	ⵢⴰⵂ	U+2D42: TIFINAGH LETTER TUAREG YAH
												
ⵤ		z	ż	z	z	z	ز	fricative	tawellemet	yaz	ⵢⴰⵤ	U+2D64: TIFINAGH LETTER TAWELLEMET YAZ
ⵋ		z	ʒ̇	ʒ	j	j	ج	fricative	ahaggar	yaj	ⵢⴰⵋ	U+2D4B: TIFINAGH LETTER AHAGGAR YAZH
ⵌ		z	ʒ̈	ʒ	j	ẓ dz	ژ	fricative	touareg	yaj	ⵢⴰⵌ	U+2D4C: TIFINAGH LETTER TUAREG YAZH
ⵗ		r	ʁ̇	ʁ	g y	gh γ	غ	fricative	touareg	yay	ⵢⴰⵗ	U+2D57: TIFINAGH LETTER TUAREG YAGH
ⵘ		r	ʁ̈	ʁ	g y	gh γ j	غ ج	fricative	aïr	yaγ	ⵢⴰⵘ	U+2D58: TIFINAGH LETTER AYER YAGH
												
												
ⵐ		n	ɲ	ɲ	n	ny	ني	nasal	touareg	yagn	ⵢⴰⵐ	U+2D50: TIFINAGH LETTER TUAREG YAGN
ⵑ		n	ŋ	ŋ	n	ng	ڭ	nasal	touareg	yang	ⵢⴰⵑ	U+2D51: TIFINAGH LETTER TUAREG YANG
												
																								
												
												
ⵦ		e	ė	eː	e	e		vowel	touareg	ye		U+2D66: TIFINAGH LETTER YE
ⵧ		o	o	oː	o	o		vowel	touareg	yo		U+2D67: TIFINAGH LETTER YO
												
												
												
⵰			 • 		.	 • 		phrase separator	west africa	tazarast	ⵜⴰⵣⴰⵔⴰⵙⵜ	U+2D70: TIFINAGH SEPARATOR MARK
												
												
⵿		*	͓					consonant joiner	touareg			U+2D7F: TIFINAGH CONSONANT JOINER​
												
												
												
												
												
												
\u0307	-		˙					diacritic	infrequent notation form			U+0307: COMBINING DOT ABOVE​
\u0309	-		ʼ					diacritic	infrequent notation form			U+0309: COMBINING HOOK ABOVE​
\u0302	-		ˆ					diacritic	infrequent notation form			U+0302: COMBINING CIRCUMFLEX ACCENT​
\u0304	-		ˉ					diacritic	infrequent notation form			U+0304: COMBINING MACRON​
												
												
\u200C		=	ₓ		=	ₓ		zwnj				U+200C: ZERO WIDTH NON-JOINER
\u200D		=	₊		=	₊		zwj				U+200D: ZERO WIDTH JOINER
												
												
												
												
												
ⵅⵯ	s		xʷ	xʷ				labiovelar consonant	regional	yakhw	ⵢⴰⵅⵯ	U+2D45 U+2D6F: TIFINAGH LETTER YAKH, MODIFIER LETTER LABIALIZATION MARK
ⵇⵯ	s		qʷ	qʷ				labiovelar consonant	regional	yaqw	ⵢⴰⵇⵯ	U+2D47 U+2D6F: TIFINAGH LETTER YAQ, MODIFIER LETTER LABIALIZATION MARK
ⵖⵯ	s		ɣʷ	ɣʷ				labiovelar consonant	regional	yaghw	ⵢⴰⵖⵯ	U+2D56 U+2D6F: TIFINAGH LETTER YAGH, MODIFIER LETTER LABIALIZATION MARK


`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
"typeLoc": 8,
"statusLoc": 9,
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
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,

"othertranscriptions": [[6, 'Berber Latin'],[7, 'Arabic']]
}
