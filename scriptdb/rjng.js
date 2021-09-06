var spreadsheet = `
ꤶ		p	p		p	p		consonant				U+A936: REJANG LETTER PA	
ꤷ		b	b		b	b		consonant				U+A937: REJANG LETTER BA	
ꥂ		mb	mb		m	mᵇ		pre-nasalised consonant				U+A942: REJANG LETTER MBA	
ꤳ		t	t		t	t		consonant				U+A933: REJANG LETTER TA	
ꤴ		d	d		d	d		consonant				U+A934: REJANG LETTER DA	
ꥄ		nd	nd		n	nᵈ		pre-nasalised consonant				U+A944: REJANG LETTER NDA	
ꤰ		k	k		k	k		consonant				U+A930: REJANG LETTER KA	
ꤱ		ɡ	ɡ		g	g		consonant				U+A931: REJANG LETTER GA	
ꥃ		ŋg	ng	ŋ	n	ŋᶢ		pre-nasalised consonant				U+A943: REJANG LETTER NGGA	
													
ꤹ		c	c		c	c		consonant				U+A939: REJANG LETTER CA	
ꤺ		ɟ	ɟ	ɟ	j	ɟ		consonant				U+A93A: REJANG LETTER JA	
ꥅ		ɲɟ	ɲɟ	ɲ	n	ɲᶡ		pre-nasalised consonant				U+A945: REJANG LETTER NYJA	
													
ꤼ		s	s		s	s		consonant				U+A93C: REJANG LETTER SA	
ꥁ		h	h		h	h		consonant				U+A941: REJANG LETTER HA	
													
ꤸ		m	m		m	m		consonant				U+A938: REJANG LETTER MA	
ꤵ		n	n		n	n		consonant				U+A935: REJANG LETTER NA	
ꤻ		ɲ	ɲ		n	ɲ		consonant				U+A93B: REJANG LETTER NYA	
ꤲ		ŋ	ŋ		n	ŋ		consonant				U+A932: REJANG LETTER NGA	
													
ꥀ		w	w		w	w		consonant				U+A940: REJANG LETTER WA	
ꤽ		r	r		r	r		consonant				U+A93D: REJANG LETTER RA	
ꤾ		l	l		l	l		consonant				U+A93E: REJANG LETTER LA	
ꤿ		j	j		y	y		consonant				U+A93F: REJANG LETTER YA	
													
													
ꥐ		n	n		n	n̽		final consonant				U+A950: REJANG CONSONANT SIGN N​	
ꥏ		ŋ	ng		n	ɲ̽		final consonant				U+A94F: REJANG CONSONANT SIGN NG​	
ꥑ		r	r		r	r̽		final consonant				U+A951: REJANG CONSONANT SIGN R​	
ꥒ		ʔ			}	ʔ		final consonant				U+A952: REJANG CONSONANT SIGN H​	
꥓					*	͓		vowel killer				U+A953: REJANG VIRAMA​	
													
													
													
ꥇ		i ɪ	i	ɪ	i	i		vowel				U+A947: REJANG VOWEL SIGN I​	
ꥈ		u ʊ	u	ʊ	u	u		vowel				U+A948: REJANG VOWEL SIGN U​	
ꥉ		ɛ e	e	ɛ	e	ɛ		vowel				U+A949: REJANG VOWEL SIGN E​	
ꥋ		o ɔ	o	ɔ	o	o		vowel				U+A94B: REJANG VOWEL SIGN O​	
ꥎ		ə	ê	ə ê	e	ə		diphthong				U+A94E: REJANG VOWEL SIGN EA​	
ꥆ		a ə	a		a	a		vowel				U+A946: REJANG LETTER A	
													
ꥊ		ai̯	ai	i̯	a	aⁱ		diphthong				U+A94A: REJANG VOWEL SIGN AI​	
ꥍ		eu?	eu		e	eᶷ		diphthong				U+A94D: REJANG VOWEL SIGN EU	
ꥇꥒ	s	ia	ia			iʔ		diphthong				U+A947 U+A952: REJANG VOWEL SIGN I, CONSONANT SIGN H​	
ꥈꥒ	s	ua	ua			uʔ		diphthong				U+A948 U+A952: REJANG VOWEL SIGN U, CONSONANT SIGN H​	
ꥉꥒ	s	e	e			ɛʔ		digraph				U+A949 U+A952: REJANG VOWEL SIGN E, CONSONANT SIGN H​	
ꥋꥒ	s	o	o			oʔ		digraph				U+A94B U+A952: REJANG VOWEL SIGN O, CONSONANT SIGN H​	
ꥎꥒ	s	ə	ê			ɛᵃʔ		digraph				U+A94E U+A952: REJANG VOWEL SIGN EA, CONSONANT SIGN H​	
ꥌ		au̯	au	u̯	e	əᶷ		diphthong				U+A94C: REJANG VOWEL SIGN AU​	
ꥇꥉ	s	iɛ	ie			iɛ		diphthong				U+A947 U+A949: REJANG VOWEL SIGN I, VOWEL SIGN E​	
ꥊꥈ	s	uj	ui			aⁱu		diphthong				U+A94A U+A948: REJANG VOWEL SIGN AI, VOWEL SIGN U​	
ꥊꥉ	s	ej	ei			aⁱɛ		diphthong				U+A94A U+A949: REJANG VOWEL SIGN AI, VOWEL SIGN E​	
ꥊꥋ	s	oj	oi			aⁱo		diphthong				U+A94A U+A94B: REJANG VOWEL SIGN AI, VOWEL SIGN O​	
ꥊꥎ	s	əj	êi			aⁱɛᵃ		diphthong				U+A94A U+A94E: REJANG VOWEL SIGN AI, VOWEL SIGN EA​	
ꥈꥋ	s	aw	uo			uo		diphthong				U+A948 U+A94B: REJANG VOWEL SIGN U, VOWEL SIGN O​	
ꥉꥍ	s	iɛ	eu			ɛꥍ		diphthong				U+A949 U+A94C: REJANG VOWEL SIGN E, VOWEL SIGN AU​	
ꥋꥍ	s	uj	oe			oꥍ		diphthong				U+A94B U+A94C: REJANG VOWEL SIGN O, VOWEL SIGN AU​	
ꥎꥍ	s	ej	êu			ɛᵃꥍ		diphthong				U+A94E U+A94C: REJANG VOWEL SIGN EA, VOWEL SIGN AU​	
ꥉꥎ	s	oj	êe			ɛɛᵃ		diphthong				U+A949 U+A94E: REJANG VOWEL SIGN E, VOWEL SIGN EA​	
													
													
													
													
													
,					,	,		comma				U+002C: COMMA	
«					<	“		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»					>	”		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
꥟					|	¶		section mark				U+A95F: REJANG SECTION MARK	



`



latinPanel = 'ɛ ə ê ɪ i̯ ɟ ŋ ɲ ɔ ʊ u̯'




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 0,
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

//"othertranscriptions": [[6, 'ISO 9985']]
}
