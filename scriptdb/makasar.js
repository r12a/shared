var spreadsheet = `maka-mak	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𑻷	.			•		,			phrase delimiter				U+11EF7: MAKASAR PASSIMBANG	
𑻲	&			˖˖		q			repetition symbol				U+11EF2: MAKASAR ANGKA	
𑻸	|			¶		.			section delimiter				U+11EF8: MAKASAR END OF SECTION	
𑻱	a	a		a		a			vowel				U+11EF1: MAKASAR LETTER A	
𑻤	b	b		b		b			consonant				U+11EE4: MAKASAR LETTER BA	
𑻩	c	c		c		c			consonant				U+11EE9: MAKASAR LETTER CA	
𑻧	d	d		d		d			consonant				U+11EE7: MAKASAR LETTER DA	
𑻵	e	e		e		e			vowel				U+11EF5: MAKASAR VOWEL SIGN E	
𑻡	g	g		g		g			consonant				U+11EE1: MAKASAR LETTER GA	
𑻳	i	i		i		i			vowel				U+11EF3: MAKASAR VOWEL SIGN I	
𑻪	j	j		j		j			consonant				U+11EEA: MAKASAR LETTER JA	
𑻠	k	k		k		k			consonant				U+11EE0: MAKASAR LETTER KA	
𑻮	l	l		l		l			consonant				U+11EEE: MAKASAR LETTER LA	
𑻥	m	m		m		m			consonant				U+11EE5: MAKASAR LETTER MA	
𑻢	N	ŋ		ŋ		N			consonant				U+11EE2: MAKASAR LETTER NGA	
𑻨	n¶	n		n		n			consonant				U+11EE8: MAKASAR LETTER NA	
𑻫	n	ɳ		ɳ		n			consonant				U+11EEB: MAKASAR LETTER NYA	
𑻶	o	o		o		o			vowel				U+11EF6: MAKASAR VOWEL SIGN O	
𑻣	p	p		p		p			consonant				U+11EE3: MAKASAR LETTER PA	
𑻭	r	r		r		r			consonant				U+11EED: MAKASAR LETTER RA	
𑻰	s	s		s		s			consonant				U+11EF0: MAKASAR LETTER SA	
𑻦	t	t		t		t			consonant				U+11EE6: MAKASAR LETTER TA	
𑻴	u	u		u		u			vowel				U+11EF4: MAKASAR VOWEL SIGN U	
𑻯	w	w		w		w			consonant				U+11EEF: MAKASAR LETTER VA	
𑻬	y	j		y		y			consonant				U+11EEC: MAKASAR LETTER YA	
														
`														
														
latinPanel = 'g ŋ ɳ'														
														
														
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
														
//othertranscriptions: [[5, 'LOC']]														
}														
														