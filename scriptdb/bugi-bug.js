var spreadsheet = `bugi-bug	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
᨞	,			,		,	Po		phrase separator			pallawa	U+1A1E: BUGINESE PALLAWA	✓
\u200B	]			␣			Cf	?	zero-width space				U+200B: ZERO WIDTH SPACE	
\u200C	=			ᶻʷⁿʲ			Cf	?	zero-width non-joiner				U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			ᶻʷʲ			Cf		zero-width joiner				U+200D: ZERO WIDTH JOINER	
᨟	|			¶		.	Po		section separator				U+1A1F: BUGINESE END OF SECTION	✓
														
ᨄ	p	p	a	p	p	p	Lo		consonant				U+1A04: BUGINESE LETTER PA	✓
ᨅ	b	b	a	b	b	b	Lo		consonant				U+1A05: BUGINESE LETTER BA	✓
ᨈ	t	t	a	t	t	t	Lo		consonant				U+1A08: BUGINESE LETTER TA	✓
ᨉ	d	d	a	d	d	d	Lo		consonant				U+1A09: BUGINESE LETTER DA	✓
ᨌ	c	c	a	c	c	c	Lo		consonant				U+1A0C: BUGINESE LETTER CA	✓
ᨍ	j	ɟ	a	ɟ	j	j	Lo		consonant				U+1A0D: BUGINESE LETTER JA	✓
ᨀ	k	k	a	k	k	k	Lo		consonant				U+1A00: BUGINESE LETTER KA	✓
ᨁ	g	ɡ	a	g	g	g	Lo		consonant				U+1A01: BUGINESE LETTER GA	✓
ᨔ	s	s	a	s	s	s	Lo		consonant				U+1A14: BUGINESE LETTER SA	✓
ᨖ	h	h	a	h	h	h	Lo		consonant				U+1A16: BUGINESE LETTER HA	✓
ᨆ	m	m	a	m	m	m	Lo		consonant				U+1A06: BUGINESE LETTER MA	✓
ᨇ	m	mp	a	ᵐp	mp	M	Lo		digraph				U+1A07: BUGINESE LETTER MPA	✓
ᨊ	n¶	n	a	n	n	n	Lo		consonant				U+1A0A: BUGINESE LETTER NA	✓
ᨋ	n	nr	a	ⁿr	nr	N	Lo		digraph				U+1A0B: BUGINESE LETTER NRA	✓
ᨏ	n	ɲc	a	ᶮc	nyc	w	Lo		digraph				U+1A0F: BUGINESE LETTER NYCA	✓
ᨂ	n	ŋ	a	ŋ	ng	x	Lo		consonant				U+1A02: BUGINESE LETTER NGA	✓
ᨎ	n	ɲ	a	ɲ	ny	z	Lo		consonant				U+1A0E: BUGINESE LETTER NYA	✓
ᨃ	n	ŋk	a	ᵑk	ngk	f	Lo		digraph				U+1A03: BUGINESE LETTER NGKA	✓
ᨓ	w	w	a	w	w	v	Lo		consonant				U+1A13: BUGINESE LETTER VA	✓
ᨑ	r	r	a	r	r	r	Lo		consonant				U+1A11: BUGINESE LETTER RA	✓
ᨒ	l	l	a	l	l	l	Lo		consonant				U+1A12: BUGINESE LETTER LA	✓
ᨐ	y	j	a	y	y	y	Lo		consonant				U+1A10: BUGINESE LETTER YA	✓
														
ᨗ	i	i		i	i	i	Mn		vowel			tetti’ riase’,	U+1A17: BUGINESE VOWEL SIGN I	✓
ᨕᨗ	i	i		+i	i				standalone vowel				U+1A15 U+1A17: BUGINESE LETTER A, VOWEL SIGN I	
ᨕᨗ‍ᨐ	i	iya		+i‍y	iya	A			ligature				U+1A15 U+1A17 U+200D U+1A10: BUGINESE LETTER A, VOWEL SIGN I, ZERO WIDTH JOINER, LETTER YA	
ᨘ	u	u		u	u	u	Mn		vowel			tetti’ riawa	U+1A18: BUGINESE VOWEL SIGN U	✓
ᨕᨘ	u	u		+u	u				standalone vowel				U+1A15 U+1A18: BUGINESE LETTER A, VOWEL SIGN U	
ᨙ	e	e		e	e	e	Mc		vowel			kecce’ riolo	U+1A19: BUGINESE VOWEL SIGN E	✓
ᨕᨙ	e	e		+e	e				standalone vowel				U+1A15 U+1A19: BUGINESE LETTER A, VOWEL SIGN E	
ᨚ	o	o		o	o	o	Mc		vowel			kecce’ rimunri	U+1A1A: BUGINESE VOWEL SIGN O	✓
ᨕᨚ	o	o		+o	o				standalone vowel				U+1A15 U+1A1A: BUGINESE LETTER A, VOWEL SIGN O	
ᨛ	e	ə		ə	ə	q	Mn		vowel			kecce’ riase’	U+1A1B: BUGINESE VOWEL SIGN AE	✓
ᨕᨛ	e	ə		+ə	ə				standalone vowel				U+1A15 U+1A1B: BUGINESE LETTER A, VOWEL SIGN AE	
ᨕ	a	ɑ		+	ɑ	a	Lo		vowel				U+1A15: BUGINESE LETTER A	✓
														
ꧏ				–		§	Lm		for the keyboard				U+A9CF: JAVANESE PANGRANGKEP	
\u25CC				\u25CC					for display				Consonant	
`														
														
latinPanel = 'ɑ ə ɟ ŋ ɲ'														
														
var cols = {														
key: 1,														
ipaLoc: 2,														
ipaPlus: 3,														
transLoc: 4,														
transcription: 5,														
kbd: 6,														
class: 7,														
status: 8,														
typeLoc: 9,														
statusLoc: 10,														
														
nnameLoc: 11,														
nameLoc: 12,														
ucsName: 13,														
block: 14,														
														
othertranscriptions: [[5, 'Latin']]														
}														