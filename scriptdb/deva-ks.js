var spreadsheet = `
प		p	p	p		p	p	consonant						U+092A: DEVANAGARI LETTER PA	devanagari
त		t¶	t	t		t¶	t	consonant						U+0924: DEVANAGARI LETTER TA	devanagari
च़	s	t	ʦ	t͡s			c							U+091A, U+093C: DEVANAGARI LETTER CA, SIGN NUKTA	devanagari
ट		t	ʈ	ʈ		t	ṭ	consonant						U+091F: DEVANAGARI LETTER TTA	devanagari
च		c	ʧ	ʧ		c	č	consonant						U+091A: DEVANAGARI LETTER CA	devanagari
क		k	k	k		k	k	consonant						U+0915: DEVANAGARI LETTER KA	devanagari
															
ब		b	b	b		b	b	consonant						U+092C: DEVANAGARI LETTER BA	devanagari
द		d¶	d	d		d¶	d	consonant						U+0926: DEVANAGARI LETTER DA	devanagari
ड		d	ɖ	ɖ		d	ḍ	consonant						U+0921: DEVANAGARI LETTER DDA	devanagari
ज		j	ʤ	d͡ʒ		j	j	consonant						U+091C: DEVANAGARI LETTER JA	devanagari
ग		g	g	g		g	g	consonant						U+0917: DEVANAGARI LETTER GA	devanagari
															
फ		P	pʰ	pʰ		P	ph	consonant						U+092B: DEVANAGARI LETTER PHA	devanagari
थ		T¶	tʰ	tʰ		T¶	th	consonant						U+0925: DEVANAGARI LETTER THA	devanagari
छ़	s	t	ʦʰ	t͡sʰ			ch							U+091B, U+093C: DEVANAGARI LETTER CHA, SIGN NUKTA	devanagari
ठ		T	ʈʰ	ʈʰ		T	ṭh	consonant						U+0920: DEVANAGARI LETTER TTHA	devanagari
छ		C	ʧʰ	ʧʰ		C	čh	consonant						U+091B: DEVANAGARI LETTER CHA	devanagari
ख		K	kʰ	kʰ		K	kh	consonant						U+0916: DEVANAGARI LETTER KHA	devanagari
															
स		s¶	s	s		s¶	s	consonant						U+0938: DEVANAGARI LETTER SA	devanagari
श		s	ʃ	ʃ		s	š	consonant						U+0936: DEVANAGARI LETTER SHA	devanagari
ह		h	h	h		h	h	consonant						U+0939: DEVANAGARI LETTER HA	devanagari
															
ज़	s	z	z	z			z							U+091C, U+093C: DEVANAGARI LETTER JA, SIGN NUKTA	devanagari
															
म		m	m	m		m	m	consonant						U+092E: DEVANAGARI LETTER MA	devanagari
न		n¶	n	n		n¶	n	consonant						U+0928: DEVANAGARI LETTER NA	devanagari
															
र		r	r	r		r	r	consonant						U+0930: DEVANAGARI LETTER RA	devanagari
ल		l	l	l		l	l	consonant						U+0932: DEVANAGARI LETTER LA	devanagari
य		y	y	j		y	y	consonant						U+092F: DEVANAGARI LETTER YA	devanagari
व		v	v	v		v	w	consonant						U+0935: DEVANAGARI LETTER VA	devanagari
															
															
															
\u095B	dn	z	z	z	ज़	z	z	precomposed consonant	infrequent					U+095B: DEVANAGARI LETTER ZA	devanagari
															
															
ं		m	m̽	m n ŋ		m	ṁ	final nasal				anusvara		U+0902: DEVANAGARI SIGN ANUSVARA	devanagari
ः	-	h	h̽	ɦ		h	ḥ	voiceless breath				visarga		U+0903: DEVANAGARI SIGN VISARGA	devanagari
															
															
इ		I	ị	i		I	i	independent vowel		ि				U+0907: DEVANAGARI LETTER I	devanagari
ई		I	ị̄	iː		I	ī	independent vowel		ी				U+0908: DEVANAGARI LETTER II	devanagari
ॶ		I	ɨ̣	ɨ			ü	independent vowel		ॖ				U+0976: DEVANAGARI LETTER UE	devanagari
ॷ		I	ɨ̣̄	ɨː			ǖ	independent vowel		ॗ				U+0977: DEVANAGARI LETTER UUE	devanagari
उ		U	ụ	u		U	u	independent vowel		ु				U+0909: DEVANAGARI LETTER U	devanagari
ऊ		U	ụ̄	uː		U	ū	independent vowel		ू				U+090A: DEVANAGARI LETTER UU	devanagari
ऎ		E	ẹ	e			e	independent vowel		ॆ				U+090E: DEVANAGARI LETTER SHORT E	devanagari
ए		E	ẹ̄	eː		E	ē	independent vowel		े				U+090F: DEVANAGARI LETTER E	devanagari
ॳ		E	ə̣	ə			ö	independent vowel		ऺ				U+0973: DEVANAGARI LETTER OE	devanagari
ॴ		E	ə̣̄	əː			ȫ	independent vowel		ऻ				U+0974: DEVANAGARI LETTER OOE	devanagari
ऒ		O	ọ	o			o	independent vowel		ॊ				U+0912: DEVANAGARI LETTER SHORT O	devanagari
ओ		O	ọ̄	oː		O	ō	independent vowel		ो				U+0913: DEVANAGARI LETTER O	devanagari
अ		A	ạ	aː		A	a	independent vowel						U+0905: DEVANAGARI LETTER A	devanagari
आ		A	ạ̄	aː		A	ā	independent vowel		ा				U+0906: DEVANAGARI LETTER AA	devanagari
ॵ		O	ɔ̣	ɔː				independent vowel		ॏ				U+0975: DEVANAGARI LETTER AW	devanagari
ऐ		E	ə̣ʲ	əi		A	ai	independent vowel		ै				U+0910: DEVANAGARI LETTER AI	devanagari
औ		E	ə̣ʷ	əu		A	au	independent vowel		ौ				U+0914: DEVANAGARI LETTER AU	devanagari
															
															
ि		i	i	i		i	i	vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I	devanagari
ी		i	ī	iː		i	ī	vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II	devanagari
ॖ		i	ɨ	ɨ			ü	vowel sign			ॶ			U+0956: DEVANAGARI VOWEL SIGN UE	devanagari
ॗ		i	ɨ̄	ɨː			ǖ	vowel sign			ॷ			U+0957: DEVANAGARI VOWEL SIGN UUE	devanagari
ु		u	u	u		u	u	vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U	devanagari
ू		u	ū	uː		u	ū	vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU	devanagari
ॆ		e¶	e	e			e	vowel sign			ऎ			U+0946: DEVANAGARI VOWEL SIGN SHORT E	devanagari
े		e	ē	eː		e¶	ē	vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E	devanagari
ऺ		e	ə	ə			ö	vowel sign			ॳ			U+093A: DEVANAGARI VOWEL SIGN OE	devanagari
ऻ		e	ə̄	əː			ȫ	vowel sign			ॴ			U+093B: DEVANAGARI VOWEL SIGN OOE	devanagari
ॊ		o	o	o			o	vowel sign			ऒ			U+094A: DEVANAGARI VOWEL SIGN SHORT O	devanagari
ो		o	ō	oː		o	ō	vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O	devanagari
ा		a	ā	aː		a	ā	vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA	devanagari
ॏ		o	ɔ	ɔː				vowel sign			ॵ			U+094F: DEVANAGARI VOWEL SIGN AW	devanagari
ै		e	əʲ	əi		a	ai	vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI	devanagari
ौ		e	əʷ	əu		a	au	vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU	devanagari
															
															
ृ	-		r̥	ri		R	r̥	vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R	devanagari
ॄ	-		r̥̄	riː		R	r̥̄	vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR	devanagari
ऋ	-		r̥̣	ri		R	r̥	independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R	devanagari
ॠ	-		r̥̣̄	riː		R	r̥̄	independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	devanagari
															
															
०		0	0			0	0	digit						U+0966: DEVANAGARI DIGIT ZERO	devanagari
१		1	1			1	1	digit						U+0967: DEVANAGARI DIGIT ONE	devanagari
२		2	2			2	2	digit						U+0968: DEVANAGARI DIGIT TWO	devanagari
३		3	3			3	3	digit						U+0969: DEVANAGARI DIGIT THREE	devanagari
४		4	4			4	4	digit						U+096A: DEVANAGARI DIGIT FOUR	devanagari
५		5	5			5	5	digit						U+096B: DEVANAGARI DIGIT FIVE	devanagari
६		6	6			6	6	digit						U+096C: DEVANAGARI DIGIT SIX	devanagari
७		7	7			7	7	digit						U+096D: DEVANAGARI DIGIT SEVEN	devanagari
८		8	8			8	8	digit						U+096E: DEVANAGARI DIGIT EIGHT	devanagari
९		9	9			9	9	digit						U+096F: DEVANAGARI DIGIT NINE	devanagari
															
															
ॐ	-													U+0950: DEVANAGARI OM	devanagari
ऽ	-	\	ˣ			\	'	elision marker						U+093D: DEVANAGARI SIGN AVAGRAHA	devanagari
₹	-	#	¤					currency symbol						U+20B9: INDIAN RUPEE SIGN	currency
															
															
															
्		*	͓			*		virama				halant		U+094D: DEVANAGARI SIGN VIRAMA	devanagari
़		/	ˑ			/		consonant modifier				nukta		U+093C: DEVANAGARI SIGN NUKTA	devanagari
ँ		N	ŋ̽	̃		N	̃	nasalisation				candrabindu/anunāsika		U+0901: DEVANAGARI SIGN CANDRABINDU	devanagari
															
															
															
															
।		.	.			.	.					purna viram		U+0964: DEVANAGARI DANDA	devanagari
॥		|	¶			|	¶							U+0965: DEVANAGARI DOUBLE DANDA	devanagari
॰	-	+	¨											U+0970: DEVANAGARI ABBREVIATION SIGN	devanagari
															
															
															
															
															
\u200C		=	ₓ					zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=	₊					zero-width joiner						U+200D: ZERO WIDTH JOINER	punctuation
															
															
															
															
															
															
															
ॲ	x		ə̸̣	ə				independent vowel	archaic (incorrect in modern use)	ॅ				U+0972: DEVANAGARI LETTER CANDRA A	
ॅ	x		ə̸	ə				vowel sign	archaic (incorrect in modern use)		ॲ			U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	
ऑ	x		ə̸̣̄	əː				independent vowel	archaic (incorrect in modern use)	ॉ				U+0911: DEVANAGARI LETTER CANDRA O	
ॉ	x		ə̸̄	əː				vowel sign	archaic (incorrect in modern use)		ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	
															
															
ष			ʂ	ʂ				consonant	non-native					U+0937: DEVANAGARI LETTER SSA	devanagari
क्ष	s		k͓ʂ	kʂ				consonant	non-native					U+0915 U+094D U+0937: DEVANAGARI LETTER KA, DEVANAGARI SIGN VIRAMA, DEVANAGARI LETTER SSA	
झ			jʰ	ɟʰ				consonant	non-native					U+091D: DEVANAGARI LETTER JHA	devanagari
ङ			ŋ	ŋ				consonant	non-native					U+0919: DEVANAGARI LETTER NGA	devanagari
ण			ɳ	ɳ				consonant	non-native					U+0923: DEVANAGARI LETTER NNA	devanagari


												
`


var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"equiv": 5,
"transckey": 6,
"transcription": 7,
"typeLoc": 8,
"statusLoc": 9,
"dvowel": 10,
"ivowel": 11,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 12,
"nnameLoc": 13,
"ucsName":14,
"block":15,

"othertranscriptions": [[7, 'Latin']]
}


