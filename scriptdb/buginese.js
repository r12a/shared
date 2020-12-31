var spreadsheet = `
ᨀ		k	k	ka	k	consonant				U+1A00: BUGINESE LETTER KA	buginese
ᨁ		g	g	ɡa	g	consonant				U+1A01: BUGINESE LETTER GA	buginese
ᨂ		n	ŋ	ŋa	ng	consonant				U+1A02: BUGINESE LETTER NGA	buginese
ᨌ		c	c	ca	c	consonant				U+1A0C: BUGINESE LETTER CA	buginese
ᨍ		j	ɟ	ɟa	j	consonant				U+1A0D: BUGINESE LETTER JA	buginese
ᨎ		n	ɲ	ɲa	ny	consonant				U+1A0E: BUGINESE LETTER NYA	buginese
ᨈ		t	t	ta	t	consonant				U+1A08: BUGINESE LETTER TA	buginese
ᨉ		d	d	da	d	consonant				U+1A09: BUGINESE LETTER DA	buginese
ᨊ		n¶	n	na	n	consonant				U+1A0A: BUGINESE LETTER NA	buginese
ᨄ		p	p	pa	p	consonant				U+1A04: BUGINESE LETTER PA	buginese
ᨅ		b	b	ba	b	consonant				U+1A05: BUGINESE LETTER BA	buginese
ᨆ		m	m	ma	m	consonant				U+1A06: BUGINESE LETTER MA	buginese
ᨐ		y	y	ja	y	consonant				U+1A10: BUGINESE LETTER YA	buginese
ᨑ		r	r	ra	r	consonant				U+1A11: BUGINESE LETTER RA	buginese
ᨒ		l	l	la	l	consonant				U+1A12: BUGINESE LETTER LA	buginese
ᨔ		s	s	sa	s	consonant				U+1A14: BUGINESE LETTER SA	buginese
ᨓ		w	w	wa	w	consonant				U+1A13: BUGINESE LETTER VA	buginese
ᨖ		h	h	ha	h	consonant				U+1A16: BUGINESE LETTER HA	buginese
											
											
ᨃ		n	ᵑk	ŋka	ngk	digraph				U+1A03: BUGINESE LETTER NGKA	buginese
ᨏ		n	ᶮc	ɲca	nyc	digraph				U+1A0F: BUGINESE LETTER NYCA	buginese
ᨋ		n	ⁿr	nra	nr	digraph				U+1A0B: BUGINESE LETTER NRA	buginese
ᨇ		m	ᵐp	mpa	mp	digraph				U+1A07: BUGINESE LETTER MPA	buginese
											
											
ᨕ		a	ɑ	ɑ	ɑ	vowel				U+1A15: BUGINESE LETTER A	buginese
ᨗ		i	i	i	i	vowel				U+1A17: BUGINESE VOWEL SIGN I​	buginese
ᨘ		u	u	u	u	vowel				U+1A18: BUGINESE VOWEL SIGN U​	buginese
ᨙ		e	e	e	e	vowel				U+1A19: BUGINESE VOWEL SIGN E​	buginese
ᨚ		o	o	o	o	vowel				U+1A1A: BUGINESE VOWEL SIGN O​	buginese
ᨛ		e	ə	ə	ə	vowel				U+1A1B: BUGINESE VOWEL SIGN AE​	buginese
											
											
᨞		,	,			phrase separator		pallawa		U+1A1E: BUGINESE PALLAWA	buginese
᨟		|	¶			section separator				U+1A1F: BUGINESE END OF SECTION	buginese
											
											
											
ᨕᨗ‍ᨐ	s	i	ǝ̣i‍y	iya	iya					U+1A15 U+1A17 U+200D U+1A10: BUGINESE LETTER A, VOWEL SIGN I, ZERO WIDTH JOINER, LETTER YA	
ᨕᨗ	s	i	ǝ̣i	i	i					U+1A15 U+1A17: BUGINESE LETTER A, VOWEL SIGN I	
ᨕᨘ	s	u	ǝ̣u	u	u					U+1A15 U+1A18: BUGINESE LETTER A, VOWEL SIGN U	
ᨕᨙ	s	e	ǝ̣e	e	e					U+1A15 U+1A19: BUGINESE LETTER A, VOWEL SIGN E	
ᨕᨚ	s	o	ǝ̣o	o	o					U+1A15 U+1A1A: BUGINESE LETTER A, VOWEL SIGN O	
ᨕᨛ	s	e	ǝ̣ə	ə	ə					U+1A15 U+1A1B: BUGINESE LETTER A, VOWEL SIGN AE	


`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":5,
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
"nameLoc": 8,
"nnameLoc": 9,
"ucsName": 10,
"block": 11,

"othertranscriptions": [[5, 'Transcription']]
}


