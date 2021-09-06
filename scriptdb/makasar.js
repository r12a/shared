var spreadsheet = `
𑻠		k			k	k	k	consonant				U+11EE0: MAKASAR LETTER KA	
𑻡		g		g	g	g	g	consonant				U+11EE1: MAKASAR LETTER GA	
𑻢		ŋ		ŋ	N	ŋ	N	consonant				U+11EE2: MAKASAR LETTER NGA	
𑻩		c			c	c	c	consonant				U+11EE9: MAKASAR LETTER CA	
𑻪		j			j	j	j	consonant				U+11EEA: MAKASAR LETTER JA	
𑻨		n			n¶	n	n	consonant				U+11EE8: MAKASAR LETTER NA	
𑻫		ɳ		ɳ	n	ɳ	n	consonant				U+11EEB: MAKASAR LETTER NYA	
𑻦		t			t	t	t	consonant				U+11EE6: MAKASAR LETTER TA	
𑻧		d			d	d	d	consonant				U+11EE7: MAKASAR LETTER DA	
𑻣		p			p	p	p	consonant				U+11EE3: MAKASAR LETTER PA	
𑻤		b			b	b	b	consonant				U+11EE4: MAKASAR LETTER BA	
𑻥		m			m	m	m	consonant				U+11EE5: MAKASAR LETTER MA	
𑻬		j			y	y	y	consonant				U+11EEC: MAKASAR LETTER YA	
𑻭		r			r	r	r	consonant				U+11EED: MAKASAR LETTER RA	
𑻮		l			l	l	l	consonant				U+11EEE: MAKASAR LETTER LA	
𑻰		s			s	s	s	consonant				U+11EF0: MAKASAR LETTER SA	
𑻯		w			w	w	w	consonant				U+11EEF: MAKASAR LETTER VA	
													
𑻲					&	˖˖	q	repetition symbol				U+11EF2: MAKASAR ANGKA	
													
													
𑻱		a			a	a	a	vowel				U+11EF1: MAKASAR LETTER A	
𑻳		i			i	i	i	vowel				U+11EF3: MAKASAR VOWEL SIGN I​	
𑻴		u			u	u	u	vowel				U+11EF4: MAKASAR VOWEL SIGN U​	
𑻵		e			e	e	e	vowel				U+11EF5: MAKASAR VOWEL SIGN E​	
𑻶		o			o	o	o	vowel				U+11EF6: MAKASAR VOWEL SIGN O​	
													
													
𑻷					.	•	,	phrase delimiter				U+11EF7: MAKASAR PASSIMBANG	
𑻸					|	¶	.	section delimiter				U+11EF8: MAKASAR END OF SECTION	

`



latinPanel = 'ŋ ɳ'


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

"nameLoc": 0,
"nnameLoc": 0,
"ucsName": 12,
"block": 13,

//"othertranscriptions": [[6, 'ISO 9985']]
}
