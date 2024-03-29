var spreadsheet = `
ᨀ	Lo	k	k		k	k	k	consonant				U+1A00: BUGINESE LETTER KA	buginese
ᨁ	Lo	ɡ	g		g	g	g	consonant				U+1A01: BUGINESE LETTER GA	buginese
ᨂ	Lo	ŋ	ng	ŋ	n	ŋ	x	consonant				U+1A02: BUGINESE LETTER NGA	buginese
ᨌ	Lo	c	c		c	c	c	consonant				U+1A0C: BUGINESE LETTER CA	buginese
ᨍ	Lo	ɟ	j	ɟ	j	ɟ	j	consonant				U+1A0D: BUGINESE LETTER JA	buginese
ᨎ	Lo	ɲ	ny	ɲ	n	ɲ	z	consonant				U+1A0E: BUGINESE LETTER NYA	buginese
ᨈ	Lo	t	t		t	t	t	consonant				U+1A08: BUGINESE LETTER TA	buginese
ᨉ	Lo	d	d		d	d	d	consonant				U+1A09: BUGINESE LETTER DA	buginese
ᨊ	Lo	n	n		n¶	n	n	consonant				U+1A0A: BUGINESE LETTER NA	buginese
ᨄ	Lo	p	p		p	p	p	consonant				U+1A04: BUGINESE LETTER PA	buginese
ᨅ	Lo	b	b		b	b	b	consonant				U+1A05: BUGINESE LETTER BA	buginese
ᨆ	Lo	m	m		m	m	m	consonant				U+1A06: BUGINESE LETTER MA	buginese
ᨐ	Lo	j	y		y	y	y	consonant				U+1A10: BUGINESE LETTER YA	buginese
ᨑ	Lo	r	r		r	r	r	consonant				U+1A11: BUGINESE LETTER RA	buginese
ᨒ	Lo	l	l		l	l	l	consonant				U+1A12: BUGINESE LETTER LA	buginese
ᨔ	Lo	s	s		s	s	s	consonant				U+1A14: BUGINESE LETTER SA	buginese
ᨓ	Lo	w	w		w	w	v	consonant				U+1A13: BUGINESE LETTER VA	buginese
ᨖ	Lo	h	h		h	h	h	consonant				U+1A16: BUGINESE LETTER HA	buginese
													
													
ᨃ	Lo	ŋk	ngk		n	ᵑk	f	digraph				U+1A03: BUGINESE LETTER NGKA	buginese
ᨏ	Lo	ɲc	nyc		n	ᶮc	w	digraph				U+1A0F: BUGINESE LETTER NYCA	buginese
ᨋ	Lo	nr	nr		n	ⁿr	N	digraph				U+1A0B: BUGINESE LETTER NRA	buginese
ᨇ	Lo	mp	mp		m	ᵐp	M	digraph				U+1A07: BUGINESE LETTER MPA	buginese
													
													
ᨕ	Lo	ɑ	ɑ	ɑ	a	ɑ	a	vowel				U+1A15: BUGINESE LETTER A	buginese
ᨗ	Mn​	i	i		i	i	i	vowel				U+1A17: BUGINESE VOWEL SIGN I​	buginese
ᨘ	Mn​	u	u		u	u	u	vowel				U+1A18: BUGINESE VOWEL SIGN U​	buginese
ᨙ	Mc​	e	e		e	e	e	vowel				U+1A19: BUGINESE VOWEL SIGN E​	buginese
ᨚ	Mc​	o	o		o	o	o	vowel				U+1A1A: BUGINESE VOWEL SIGN O​	buginese
ᨛ	Mn​	ə	ə	ə	e	ə	q	vowel				U+1A1B: BUGINESE VOWEL SIGN AE​	buginese
													
													
᨞	Po				,	,	,	phrase separator			pallawa	U+1A1E: BUGINESE PALLAWA	buginese
᨟	Po				|	¶	.	section separator				U+1A1F: BUGINESE END OF SECTION	buginese
													
													
													
ᨕᨗ‍ᨐ		iya	iya		i	ǝ̣i‍y	A					U+1A15 U+1A17 U+200D U+1A10: BUGINESE LETTER A, VOWEL SIGN I, ZERO WIDTH JOINER, LETTER YA	
ᨕᨗ		i	i		i	ǝ̣i						U+1A15 U+1A17: BUGINESE LETTER A, VOWEL SIGN I	
ᨕᨘ		u	u		u	ǝ̣u						U+1A15 U+1A18: BUGINESE LETTER A, VOWEL SIGN U	
ᨕᨙ		e	e		e	ǝ̣e						U+1A15 U+1A19: BUGINESE LETTER A, VOWEL SIGN E	
ᨕᨚ		o	o		o	ǝ̣o						U+1A15 U+1A1A: BUGINESE LETTER A, VOWEL SIGN O	
ᨕᨛ		ə	ə		e	ǝ̣ə						U+1A15 U+1A1B: BUGINESE LETTER A, VOWEL SIGN AE	
													
													
ꧏ	Lm					–	§					U+A9CF: JAVANESE PANGRANGKEP	


`



latinPanel = 'ɑ ə ɟ ŋ ɲ'



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
"nnameLoc": 10,
"nameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[3, 'Transcription']]
}


