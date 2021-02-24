var spreadsheet = `
ꤶ		p		p	p	consonant					U+A936: REJANG LETTER PA	rejang
ꤷ		b		b	b	consonant					U+A937: REJANG LETTER BA	rejang
ꥂ		mb		mᵇ	m	pre-nasalised consonant					U+A942: REJANG LETTER MBA	rejang
ꤳ		t		t	t	consonant					U+A933: REJANG LETTER TA	rejang
ꤴ		d		d	d	consonant					U+A934: REJANG LETTER DA	rejang
ꥄ		nd		nᵈ	n	pre-nasalised consonant					U+A944: REJANG LETTER NDA	rejang
ꤰ		k		k	k	consonant					U+A930: REJANG LETTER KA	rejang
ꤱ		ɡ		g	g	consonant					U+A931: REJANG LETTER GA	rejang
ꥃ		ŋg		ŋᶢ	n	pre-nasalised consonant					U+A943: REJANG LETTER NGGA	rejang
												
ꤹ		c		c	c	consonant					U+A939: REJANG LETTER CA	rejang
ꤺ		ɟ		ɟ	j	consonant					U+A93A: REJANG LETTER JA	rejang
ꥅ		ɲɟ		ɲᶡ	n	pre-nasalised consonant					U+A945: REJANG LETTER NYJA	rejang
												
ꤼ		s		s	s	consonant					U+A93C: REJANG LETTER SA	rejang
ꥁ		h		h	h	consonant					U+A941: REJANG LETTER HA	rejang
												
ꤸ		m		m	m	consonant					U+A938: REJANG LETTER MA	rejang
ꤵ		n		n	n	consonant					U+A935: REJANG LETTER NA	rejang
ꤻ		ɲ		ɲ	n	consonant					U+A93B: REJANG LETTER NYA	rejang
ꤲ		ŋ		ŋ	n	consonant					U+A932: REJANG LETTER NGA	rejang
												
ꥀ		w		w	w	consonant					U+A940: REJANG LETTER WA	rejang
ꤽ		r		r	r	consonant					U+A93D: REJANG LETTER RA	rejang
ꤾ		l		l	l	consonant					U+A93E: REJANG LETTER LA	rejang
ꤿ		j		y	y	consonant					U+A93F: REJANG LETTER YA	rejang
												
												
ꥐ		n	n	n̽	n	final consonant					U+A950: REJANG CONSONANT SIGN N​	rejang
ꥏ		ŋ	ng	ɲ̽	n	final consonant					U+A94F: REJANG CONSONANT SIGN NG​	rejang
ꥑ		r	r	r̽	r	final consonant					U+A951: REJANG CONSONANT SIGN R​	rejang
ꥒ		ʔ		ʔ	}	final consonant					U+A952: REJANG CONSONANT SIGN H​	rejang
꥓				͓	*	vowel killer					U+A953: REJANG VIRAMA​	rejang
												
												
												
ꥇ		i ɪ	i	i	i	vowel					U+A947: REJANG VOWEL SIGN I​	rejang
ꥈ		u ʊ	u	u	u	vowel					U+A948: REJANG VOWEL SIGN U​	rejang
ꥉ		ɛ e	e	ɛ	e	vowel					U+A949: REJANG VOWEL SIGN E​	rejang
ꥋ		o ɔ	o	o	o	vowel					U+A94B: REJANG VOWEL SIGN O​	rejang
ꥎ		ə	ê	ə	e	diphthong					U+A94E: REJANG VOWEL SIGN EA​	rejang
ꥆ		a ə	a	a	a	vowel					U+A946: REJANG LETTER A	rejang
												
ꥊ		ai̯	ai	aⁱ	a	diphthong					U+A94A: REJANG VOWEL SIGN AI​	rejang
ꥍ		eu?	eu	eᶷ	e	diphthong					U+A94D: REJANG VOWEL SIGN EU	rejang
ꥇꥒ	s	ia	ia	iʔ		diphthong					U+A947 U+A952: REJANG VOWEL SIGN I, CONSONANT SIGN H​	rejang
ꥈꥒ	s	ua	ua	uʔ		diphthong					U+A948 U+A952: REJANG VOWEL SIGN U, CONSONANT SIGN H​	rejang
ꥉꥒ	s	e	e	ɛʔ		digraph					U+A949 U+A952: REJANG VOWEL SIGN E, CONSONANT SIGN H​	rejang
ꥋꥒ	s	o	o	oʔ		digraph					U+A94B U+A952: REJANG VOWEL SIGN O, CONSONANT SIGN H​	rejang
ꥎꥒ	s	ə	ê	ɛᵃʔ		digraph					U+A94E U+A952: REJANG VOWEL SIGN EA, CONSONANT SIGN H​	rejang
ꥌ		au̯	au	əᶷ	e	diphthong					U+A94C: REJANG VOWEL SIGN AU​	rejang
ꥇꥉ	s	iɛ	ie	iɛ		diphthong					U+A947 U+A949: REJANG VOWEL SIGN I, VOWEL SIGN E​	rejang
ꥊꥈ	s	uj	ui	aⁱu		diphthong					U+A94A U+A948: REJANG VOWEL SIGN AI, VOWEL SIGN U​	rejang
ꥊꥉ	s	ej	ei	aⁱɛ		diphthong					U+A94A U+A949: REJANG VOWEL SIGN AI, VOWEL SIGN E​	rejang
ꥊꥋ	s	oj	oi	aⁱo		diphthong					U+A94A U+A94B: REJANG VOWEL SIGN AI, VOWEL SIGN O​	rejang
ꥊꥎ	s	əj	êi	aⁱɛᵃ		diphthong					U+A94A U+A94E: REJANG VOWEL SIGN AI, VOWEL SIGN EA​	rejang
ꥈꥋ	s	aw	uo	uo		diphthong					U+A948 U+A94B: REJANG VOWEL SIGN U, VOWEL SIGN O​	rejang
ꥉꥍ	s	iɛ	eu	ɛꥍ		diphthong					U+A949 U+A94C: REJANG VOWEL SIGN E, VOWEL SIGN AU​	rejang
ꥋꥍ	s	uj	oe	oꥍ		diphthong					U+A94B U+A94C: REJANG VOWEL SIGN O, VOWEL SIGN AU​	rejang
ꥎꥍ	s	ej	êu	ɛᵃꥍ		diphthong					U+A94E U+A94C: REJANG VOWEL SIGN EA, VOWEL SIGN AU​	rejang
ꥉꥎ	s	oj	êe	ɛɛᵃ		diphthong					U+A949 U+A94E: REJANG VOWEL SIGN E, VOWEL SIGN EA​	rejang
												
												
												
												
												
,				,	,	comma					U+002C: COMMA	
«				“	<	quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»				”	>	quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
꥟				¶	|	section mark					U+A95F: REJANG SECTION MARK	rejang
`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"transLoc": 4,
"key":5,
"transckey": 0,
"typeLoc": 6,
"statusLoc": 7,
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
"nameLoc": 9,
"nnameLoc": 0,
"ucsName": 10,
"block": 11,

//"othertranscriptions": [[6, 'ISO 9985']]
}
