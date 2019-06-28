var spreadsheet = `
ᨀ	k	k	k	ka	consonant				U+1A00: BUGINESE LETTER KA
ᨁ	g	g	g	ɡa	consonant				U+1A01: BUGINESE LETTER GA
ᨂ	n	ŋ	ng	ŋa	consonant				U+1A02: BUGINESE LETTER NGA
ᨌ	c	c	c	ca	consonant				U+1A0C: BUGINESE LETTER CA
ᨍ	j	ɟ	j	ɟa	consonant				U+1A0D: BUGINESE LETTER JA
ᨎ	n	ɲ	ny	ɲa	consonant				U+1A0E: BUGINESE LETTER NYA
ᨈ	t	t	t	ta	consonant				U+1A08: BUGINESE LETTER TA
ᨉ	d	d	d	da	consonant				U+1A09: BUGINESE LETTER DA
ᨊ	n¶	n	n	na	consonant				U+1A0A: BUGINESE LETTER NA
ᨄ	p	p	p	pa	consonant				U+1A04: BUGINESE LETTER PA
ᨅ	b	b	b	ba	consonant				U+1A05: BUGINESE LETTER BA
ᨆ	m	m	m	ma	consonant				U+1A06: BUGINESE LETTER MA
ᨐ	y	y	y	ja	consonant				U+1A10: BUGINESE LETTER YA
ᨑ	r	r	r	ra	consonant				U+1A11: BUGINESE LETTER RA
ᨒ	l	l	l	la	consonant				U+1A12: BUGINESE LETTER LA
ᨔ	s	s	s	sa	consonant				U+1A14: BUGINESE LETTER SA
ᨓ	w	w	w	wa	consonant				U+1A13: BUGINESE LETTER VA
ᨖ	h	h	h	ha	consonant				U+1A16: BUGINESE LETTER HA
									
									
ᨃ	n	ᵑk	ngk	ŋka	digraph				U+1A03: BUGINESE LETTER NGKA
ᨏ	n	ᶮc	nyc	ɲca	digraph				U+1A0F: BUGINESE LETTER NYCA
ᨋ	n	ⁿr	nr	nra	digraph				U+1A0B: BUGINESE LETTER NRA
ᨇ	m	ᵐp	mp	mpa	digraph				U+1A07: BUGINESE LETTER MPA
									
									
ᨕ	a	ɑ	ɑ	ɑ	vowel				U+1A15: BUGINESE LETTER A
ᨗ	i	i	i	i	vowel				U+1A17: BUGINESE VOWEL SIGN I​
ᨘ	u	u	u	u	vowel				U+1A18: BUGINESE VOWEL SIGN U​
ᨙ	e	e	e	e	vowel				U+1A19: BUGINESE VOWEL SIGN E​
ᨚ	o	o	o	o	vowel				U+1A1A: BUGINESE VOWEL SIGN O​
ᨛ	e	ə	ə	ə	vowel				U+1A1B: BUGINESE VOWEL SIGN AE​
									
									
᨞	,	,			phrase separator	pallawa			U+1A1E: BUGINESE PALLAWA
᨟	|	¶			section separator				U+1A1F: BUGINESE END OF SECTION
									
									
									
ᨕᨗ‍ᨐ	i	i͡a	iya	iya					U+1A15 U+1A17 U+200D U+1A10: BUGINESE LETTER A, BUGINESE VOWEL SIGN I, ZERO WIDTH JOINER, BUGINESE LETTER YA
ᨕᨗ	i	ị	i	i					U+1A15 U+1A17: BUGINESE LETTER A, BUGINESE VOWEL SIGN I
ᨕᨘ	u	ụ	u	u					U+1A15 U+1A18: BUGINESE LETTER A, BUGINESE VOWEL SIGN U
ᨕᨙ	e	ẹ	e	e					U+1A15 U+1A19: BUGINESE LETTER A, BUGINESE VOWEL SIGN E
ᨕ	o	ọ	o	o					U+1A15: BUGINESE LETTER A
ᨕ	e	ǝ̣	ə	ə					U+1A15: BUGINESE LETTER A

`

var cols = {
"key":1,
"transLoc": 2,
"ipaLoc": 4,
"typeLoc": 5,
"nnameLoc": 7,
"nameLoc": 6,
"numLoc": 0,
"statusLoc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"transcription": 3,
"ucsName":9,

"othertranscriptions": [[3, 'Transcription']]
}