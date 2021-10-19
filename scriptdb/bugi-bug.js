var spreadsheet = `
ᨀ	Lo	k	k	k	k	k	consonant				U+1A00: BUGINESE LETTER KA	✓
ᨁ	Lo	ɡ	g	g	g	g	consonant				U+1A01: BUGINESE LETTER GA	✓
ᨂ	Lo	ŋ	ŋ	ng	n	x	consonant				U+1A02: BUGINESE LETTER NGA	✓
ᨌ	Lo	c	c	c	c	c	consonant				U+1A0C: BUGINESE LETTER CA	✓
ᨍ	Lo	ɟ	ɟ	j	j	j	consonant				U+1A0D: BUGINESE LETTER JA	✓
ᨎ	Lo	ɲ	ɲ	ny	n	z	consonant				U+1A0E: BUGINESE LETTER NYA	✓
ᨈ	Lo	t	t	t	t	t	consonant				U+1A08: BUGINESE LETTER TA	✓
ᨉ	Lo	d	d	d	d	d	consonant				U+1A09: BUGINESE LETTER DA	✓
ᨊ	Lo	n	n	n	n¶	n	consonant				U+1A0A: BUGINESE LETTER NA	✓
ᨄ	Lo	p	p	p	p	p	consonant				U+1A04: BUGINESE LETTER PA	✓
ᨅ	Lo	b	b	b	b	b	consonant				U+1A05: BUGINESE LETTER BA	✓
ᨆ	Lo	m	m	m	m	m	consonant				U+1A06: BUGINESE LETTER MA	✓
ᨐ	Lo	j	y	y	y	y	consonant				U+1A10: BUGINESE LETTER YA	✓
ᨑ	Lo	r	r	r	r	r	consonant				U+1A11: BUGINESE LETTER RA	✓
ᨒ	Lo	l	l	l	l	l	consonant				U+1A12: BUGINESE LETTER LA	✓
ᨔ	Lo	s	s	s	s	s	consonant				U+1A14: BUGINESE LETTER SA	✓
ᨓ	Lo	w	w	w	w	v	consonant				U+1A13: BUGINESE LETTER VA	✓
ᨖ	Lo	h	h	h	h	h	consonant				U+1A16: BUGINESE LETTER HA	✓
												
												
ᨃ	Lo	ŋk	ᵑk	ngk	n	f	digraph				U+1A03: BUGINESE LETTER NGKA	✓
ᨏ	Lo	ɲc	ᶮc	nyc	n	w	digraph				U+1A0F: BUGINESE LETTER NYCA	✓
ᨋ	Lo	nr	ⁿr	nr	n	N	digraph				U+1A0B: BUGINESE LETTER NRA	✓
ᨇ	Lo	mp	ᵐp	mp	m	M	digraph				U+1A07: BUGINESE LETTER MPA	✓
												
												
ᨕ	Lo	ɑ	+	ɑ	a	a	vowel				U+1A15: BUGINESE LETTER A	✓
ᨗ	Mn​	i	i	i	i	i	vowel				U+1A17: BUGINESE VOWEL SIGN I​	✓
ᨘ	Mn​	u	u	u	u	u	vowel				U+1A18: BUGINESE VOWEL SIGN U​	✓
ᨙ	Mc​	e	e	e	e	e	vowel				U+1A19: BUGINESE VOWEL SIGN E​	✓
ᨚ	Mc​	o	o	o	o	o	vowel				U+1A1A: BUGINESE VOWEL SIGN O​	✓
ᨛ	Mn​	ə	ə	ə	e	q	vowel				U+1A1B: BUGINESE VOWEL SIGN AE​	✓
												
												
᨞	Po		,		,	,	phrase separator			pallawa	U+1A1E: BUGINESE PALLAWA	✓
᨟	Po		¶		|	.	section separator				U+1A1F: BUGINESE END OF SECTION	✓
												
												
												
ᨕᨗ‍ᨐ		iya	+i‍y	iya	i	A					U+1A15 U+1A17 U+200D U+1A10: BUGINESE LETTER A, VOWEL SIGN I, ZERO WIDTH JOINER, LETTER YA	
ᨕᨗ		i	+i	i	i						U+1A15 U+1A17: BUGINESE LETTER A, VOWEL SIGN I	
ᨕᨘ		u	+u	u	u						U+1A15 U+1A18: BUGINESE LETTER A, VOWEL SIGN U	
ᨕᨙ		e	+e	e	e						U+1A15 U+1A19: BUGINESE LETTER A, VOWEL SIGN E	
ᨕᨚ		o	+o	o	o						U+1A15 U+1A1A: BUGINESE LETTER A, VOWEL SIGN O	
ᨕᨛ		ə	+ə	ə	e						U+1A15 U+1A1B: BUGINESE LETTER A, VOWEL SIGN AE	

\u200B	Cf		␣		]		zero-width space				U+200B: ZERO WIDTH SPACE	
\u200C	Cf		ᶻʷⁿʲ		=		zero-width non-joiner				U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf		ᶻʷʲ		=		zero-width joiner				U+200D: ZERO WIDTH JOINER	

												
												
ꧏ	Lm		–			§					U+A9CF: JAVANESE PANGRANGKEP	



`



latinPanel = 'ɑ ə ɟ ŋ ɲ'



var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc": 3,
"transcription": 4,
"key": 5,
"kbd": 6,
"typeLoc": 7,
"statusLoc": 8,

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

"nnameLoc": 9,
"nameLoc": 10,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[4, 'Latin']]
}


