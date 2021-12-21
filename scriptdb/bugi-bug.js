var spreadsheet = `
ᨀ	k	k	a	k	k	k	Lo		consonant				U+1A00: BUGINESE LETTER KA	✓
ᨁ	g	ɡ	a	g	g	g	Lo		consonant				U+1A01: BUGINESE LETTER GA	✓
ᨂ	n	ŋ	a	ng	ŋ	x	Lo		consonant				U+1A02: BUGINESE LETTER NGA	✓
ᨌ	c	c	a	c	c	c	Lo		consonant				U+1A0C: BUGINESE LETTER CA	✓
ᨍ	j	ɟ	a	j	ɟ	j	Lo		consonant				U+1A0D: BUGINESE LETTER JA	✓
ᨎ	n	ɲ	a	ny	ɲ	z	Lo		consonant				U+1A0E: BUGINESE LETTER NYA	✓
ᨈ	t	t	a	t	t	t	Lo		consonant				U+1A08: BUGINESE LETTER TA	✓
ᨉ	d	d	a	d	d	d	Lo		consonant				U+1A09: BUGINESE LETTER DA	✓
ᨊ	n¶	n	a	n	n	n	Lo		consonant				U+1A0A: BUGINESE LETTER NA	✓
ᨄ	p	p	a	p	p	p	Lo		consonant				U+1A04: BUGINESE LETTER PA	✓
ᨅ	b	b	a	b	b	b	Lo		consonant				U+1A05: BUGINESE LETTER BA	✓
ᨆ	m	m	a	m	m	m	Lo		consonant				U+1A06: BUGINESE LETTER MA	✓
ᨐ	y	j	a	y	y	y	Lo		consonant				U+1A10: BUGINESE LETTER YA	✓
ᨑ	r	r	a	r	r	r	Lo		consonant				U+1A11: BUGINESE LETTER RA	✓
ᨒ	l	l	a	l	l	l	Lo		consonant				U+1A12: BUGINESE LETTER LA	✓
ᨔ	s	s	a	s	s	s	Lo		consonant				U+1A14: BUGINESE LETTER SA	✓
ᨓ	w	w	a	w	w	v	Lo		consonant				U+1A13: BUGINESE LETTER VA	✓
ᨖ	h	h	a	h	h	h	Lo		consonant				U+1A16: BUGINESE LETTER HA	✓
														
														
ᨃ	n	ŋk	a	ngk	ᵑk	f	Lo		digraph				U+1A03: BUGINESE LETTER NGKA	✓
ᨏ	n	ɲc	a	nyc	ᶮc	w	Lo		digraph				U+1A0F: BUGINESE LETTER NYCA	✓
ᨋ	n	nr	a	nr	ⁿr	N	Lo		digraph				U+1A0B: BUGINESE LETTER NRA	✓
ᨇ	m	mp	a	mp	ᵐp	M	Lo		digraph				U+1A07: BUGINESE LETTER MPA	✓
														
														
ᨕ	a	ɑ		ɑ	+	a	Lo		vowel				U+1A15: BUGINESE LETTER A	✓
ᨗ	i	i		i	i	i	Mn​		vowel				U+1A17: BUGINESE VOWEL SIGN I​	✓
ᨘ	u	u		u	u	u	Mn​		vowel				U+1A18: BUGINESE VOWEL SIGN U​	✓
ᨙ	e	e		e	e	e	Mc​		vowel				U+1A19: BUGINESE VOWEL SIGN E​	✓
ᨚ	o	o		o	o	o	Mc​		vowel				U+1A1A: BUGINESE VOWEL SIGN O​	✓
ᨛ	e	ə		ə	ə	q	Mn​		vowel				U+1A1B: BUGINESE VOWEL SIGN AE​	✓
														
														
᨞	,				,	,	Po		phrase separator			pallawa	U+1A1E: BUGINESE PALLAWA	✓
᨟	|				¶	.	Po		section separator				U+1A1F: BUGINESE END OF SECTION	✓
														
														
														
ᨕᨗ‍ᨐ	i	iya		iya	+i‍y	A							U+1A15 U+1A17 U+200D U+1A10: BUGINESE LETTER A, VOWEL SIGN I, ZERO WIDTH JOINER, LETTER YA	
ᨕᨗ	i	i		i	+i								U+1A15 U+1A17: BUGINESE LETTER A, VOWEL SIGN I	
ᨕᨘ	u	u		u	+u								U+1A15 U+1A18: BUGINESE LETTER A, VOWEL SIGN U	
ᨕᨙ	e	e		e	+e								U+1A15 U+1A19: BUGINESE LETTER A, VOWEL SIGN E	
ᨕᨚ	o	o		o	+o								U+1A15 U+1A1A: BUGINESE LETTER A, VOWEL SIGN O	
ᨕᨛ	e	ə		ə	+ə								U+1A15 U+1A1B: BUGINESE LETTER A, VOWEL SIGN AE	
														
														
\u200B	]				␣		Cf		zero-width space				U+200B: ZERO WIDTH SPACE	
\u200C	=				ᶻʷⁿʲ		Cf		zero-width non-joiner				U+200C: ZERO WIDTH NON-JOINER	
\u200D	=				ᶻʷʲ		Cf		zero-width joiner				U+200D: ZERO WIDTH JOINER	
														
														
														
														
ꧏ					–	§	Lm						U+A9CF: JAVANESE PANGRANGKEP	



`



latinPanel = 'ɑ ə ɟ ŋ ɲ'



var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transcription": 4,
"transLoc": 5,
"kbd": 6,
"class": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

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

"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 14,

"othertranscriptions": [[4, 'Latin']]
}


