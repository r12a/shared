var spreadsheet = `
क		k	k	k	k	k	consonant						U+0915: DEVANAGARI LETTER KA	devanagari
ख		K	kʰ	kʰ	K	kh	consonant						U+0916: DEVANAGARI LETTER KHA	devanagari
ग		g	g	g	g	g	consonant						U+0917: DEVANAGARI LETTER GA	devanagari
घ		G	gʰ	gʰ	G	gh	consonant						U+0918: DEVANAGARI LETTER GHA	devanagari
ङ		N	ŋ	ŋ	N	ṅ	consonant						U+0919: DEVANAGARI LETTER NGA	devanagari
च		c	c	ʧ	c	c	consonant						U+091A: DEVANAGARI LETTER CA	devanagari
छ		C	cʰ	ʧʰ	C	ch	consonant						U+091B: DEVANAGARI LETTER CHA	devanagari
ज		j	j	ɟ	j	j	consonant						U+091C: DEVANAGARI LETTER JA	devanagari
झ		J	jʰ	ɟʰ	J	jh	consonant						U+091D: DEVANAGARI LETTER JHA	devanagari
ञ		n	ɲ	ɲ	n	ñ	consonant						U+091E: DEVANAGARI LETTER NYA	devanagari
ट		t	ʈ	ʈ	t	ṭ	consonant						U+091F: DEVANAGARI LETTER TTA	devanagari
ठ		T	ʈʰ	ʈʰ	T	ṭh	consonant						U+0920: DEVANAGARI LETTER TTHA	devanagari
ड		d	ɖ	ɖ	d	ḍ	consonant						U+0921: DEVANAGARI LETTER DDA	devanagari
ढ		D	ɖʰ	ɖʰ	D	ḍh	consonant						U+0922: DEVANAGARI LETTER DDHA	devanagari
ण		n	ɳ	ɳ	n	ṇ	consonant						U+0923: DEVANAGARI LETTER NNA	devanagari
त		t¶	t	t	t¶	t	consonant						U+0924: DEVANAGARI LETTER TA	devanagari
थ		T¶	tʰ	tʰ	T¶	th	consonant						U+0925: DEVANAGARI LETTER THA	devanagari
द		d¶	d	d	d¶	d	consonant						U+0926: DEVANAGARI LETTER DA	devanagari
ध		D¶	dʰ	dʰ	D¶	dh	consonant						U+0927: DEVANAGARI LETTER DHA	devanagari
न		n¶	n	n	n¶	n	consonant						U+0928: DEVANAGARI LETTER NA	devanagari
प		p	p	p	p	p	consonant						U+092A: DEVANAGARI LETTER PA	devanagari
फ		P	pʰ	pʰ	P	ph	consonant						U+092B: DEVANAGARI LETTER PHA	devanagari
ब		b	b	b	b	b	consonant						U+092C: DEVANAGARI LETTER BA	devanagari
भ		B	bʰ	bʰ	B	bh	consonant						U+092D: DEVANAGARI LETTER BHA	devanagari
म		m	m	m	m	m	consonant						U+092E: DEVANAGARI LETTER MA	devanagari
य		y	y	j	y	y	consonant						U+092F: DEVANAGARI LETTER YA	devanagari
र		r	r	r	r	r	consonant						U+0930: DEVANAGARI LETTER RA	devanagari
ल		l	l	l	l	l	consonant						U+0932: DEVANAGARI LETTER LA	devanagari
व		v	ʋ	w ʋ	v	v	consonant						U+0935: DEVANAGARI LETTER VA	devanagari
श		s	ʃ	ɕ ʃ	s	ś	consonant						U+0936: DEVANAGARI LETTER SHA	devanagari
ष		s	ʂ	ʂ	s	ṣ	consonant						U+0937: DEVANAGARI LETTER SSA	devanagari
स		s¶	s	s	s¶	s	consonant						U+0938: DEVANAGARI LETTER SA	devanagari
ह		h	h	h	h	h	consonant						U+0939: DEVANAGARI LETTER HA	devanagari
														
														
ळ		l	ɭ	ɭ ɭ̆	l	ḷ	consonant						U+0933: DEVANAGARI LETTER LLA	devanagari
ॹ							consonant						U+0979: DEVANAGARI LETTER ZHA	devanagari
ॺ							consonant						U+097A: DEVANAGARI LETTER HEAVY YA	devanagari
ॻ		g	ɠ	ɠə			consonant						U+097B: DEVANAGARI LETTER GGA	devanagari
ॼ		s	ʄ	ʄə			consonant						U+097C: DEVANAGARI LETTER JJA	devanagari
ॾ		d	ɗ	ɗə			consonant						U+097E: DEVANAGARI LETTER DDDA	devanagari
ॿ		b	ɓ	ɓə			consonant						U+097F: DEVANAGARI LETTER BBA	devanagari
														
														
\u0929	p	n	ṉ		n	ṉ	Dravidian alveolar n				ऩ		U+0929: DEVANAGARI LETTER NNNA	devanagari
\u0931	p				r	ṟ	Dravidian alveolar r				ऱ		U+0931: DEVANAGARI LETTER RRA	devanagari
\u0934	p			ɭʱä	l	ḻ	Dravidian l				ऴ		U+0934: DEVANAGARI LETTER LLLA	devanagari
\u0958	p	q	q	q	q	q	क़						U+0958: DEVANAGARI LETTER QA	devanagari
\u0959	p	x	x	x	K	k͟h	ख़						U+0959: DEVANAGARI LETTER KHHA	devanagari
\u095A	p	y	ɣ	ɣ	g	ġ	ग़						U+095A: DEVANAGARI LETTER GHHA	devanagari
\u095B	p	z	z	z	z	z	ज़						U+095B: DEVANAGARI LETTER ZA	devanagari
\u095C	p	r	ɾ	ɾ	r	ṛ	ड़						U+095C: DEVANAGARI LETTER DDDHA	devanagari
\u095D	p	r	ɾʰ	ɾʰ	r	ṛh	ढ़						U+095D: DEVANAGARI LETTER RHA	devanagari
\u095E	p	f	f	f	f	f	फ़						U+095E: DEVANAGARI LETTER FA	devanagari
\u095F	p	y	ẏ		y	ẏ	य़						U+095F: DEVANAGARI LETTER YYA	devanagari
	p													
														
ं		m	m̽	m n ŋ	m	ṁ	final nasal						U+0902: DEVANAGARI SIGN ANUSVARA​	devanagari
ः		h	h̽	ɦ	h	ḥ	voiceless breath						U+0903: DEVANAGARI SIGN VISARGA​	devanagari
														
														
														
														
अ		A	ạ	ʌ	A	a	independent vowel		ा				U+0905: DEVANAGARI LETTER A	devanagari
आ		A	ạ̄	aː	A	ā	independent vowel		ि				U+0906: DEVANAGARI LETTER AA	devanagari
इ		I	ị	i	I	i	independent vowel		ी				U+0907: DEVANAGARI LETTER I	devanagari
ई		I	ị̄	iː	I	ī	independent vowel		ु				U+0908: DEVANAGARI LETTER II	devanagari
उ		U	ụ	u	U	u	independent vowel		ू				U+0909: DEVANAGARI LETTER U	devanagari
ऊ		U	ụ̄	uː	U	ū	independent vowel		े				U+090A: DEVANAGARI LETTER UU	devanagari
ए		E	ẹ̄	eː	E	ē	independent vowel		ै				U+090F: DEVANAGARI LETTER E	devanagari
ऐ		A	ɛ̣̄	ɛː	A	ai	independent vowel		ो				U+0910: DEVANAGARI LETTER AI	devanagari
ओ		O	ọ̄	oː	O	ō	independent vowel		ौ				U+0913: DEVANAGARI LETTER O	devanagari
औ		A	ɔ̣̄	ɔː	A	au	independent vowel						U+0914: DEVANAGARI LETTER AU	devanagari
														
ऄ							independent vowel						U+0904: DEVANAGARI LETTER SHORT A	devanagari
ॲ		A	ậ	æ	e	ê	independent vowel						U+0972: DEVANAGARI LETTER CANDRA A	devanagari
ॶ							independent vowel						U+0976: DEVANAGARI LETTER UE	devanagari
ॷ							independent vowel						U+0977: DEVANAGARI LETTER UUE	devanagari
ऎ		E¶	ẹ		E¶	e	independent vowel						U+090E: DEVANAGARI LETTER SHORT E	devanagari
ऍ		E	ệ		E	ê	independent vowel						U+090D: DEVANAGARI LETTER CANDRA E	devanagari
ऑ		O	ộ	ɒ	O	ô	independent vowel						U+0911: DEVANAGARI LETTER CANDRA O	devanagari
ऒ		O	ọ		O	o	independent vowel						U+0912: DEVANAGARI LETTER SHORT O	devanagari
ॵ							independent vowel						U+0975: DEVANAGARI LETTER AW	devanagari
ॳ							independent vowel						U+0973: DEVANAGARI LETTER OE	devanagari
ॴ							independent vowel						U+0974: DEVANAGARI LETTER OOE	devanagari
														
														
ा		a	ā	aː	a	ā	vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA​	devanagari
ि		i	i	ɪ	i	i	vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I​	devanagari
ी		i	ī	iː	i	ī	vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II​	devanagari
ु		u	u	ʊ	u	u	vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U​	devanagari
ू		u	ū	uː	u	ū	vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU​	devanagari
े		e	ē	eː	e	ē	vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E​	devanagari
ै		a	ɛ̄	ɛː	a	ai	vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI​	devanagari
ो		o	ō	oː	o	ō	vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O​	devanagari
ौ		a	ɔ̄	ɔː	a	au	vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU​	devanagari
														
ॕ		a	â	æ			vowel sign						U+0955: DEVANAGARI VOWEL SIGN CANDRA LONG E​	devanagari
ॖ							vowel sign						U+0956: DEVANAGARI VOWEL SIGN UE​	devanagari
ॗ							vowel sign						U+0957: DEVANAGARI VOWEL SIGN UUE​	devanagari
ॆ		e¶	e		e¶	e	vowel sign						U+0946: DEVANAGARI VOWEL SIGN SHORT E​	devanagari
ॅ		e	ê		e	ê	vowel sign						U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	devanagari
ॊ		o	o		o	o	vowel sign						U+094A: DEVANAGARI VOWEL SIGN SHORT O​	devanagari
ॉ		o	ô		o	ô	vowel sign						U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	devanagari
ॏ							vowel sign						U+094F: DEVANAGARI VOWEL SIGN AW​	devanagari
ऺ							vowel sign						U+093A: DEVANAGARI VOWEL SIGN OE​	devanagari
ऻ							vowel sign						U+093B: DEVANAGARI VOWEL SIGN OOE​	devanagari
														
														
ृ		R	r̥	ri	R	r̥	vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R​	devanagari
ॄ		R	r̥̄	riː			vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR​	devanagari
ऋ		R	r̥̣	ri	R	r̥	independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R	devanagari
ॠ		R	r̥̣̄	riː	R	r̥̄	independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	devanagari
ॢ		L	l̥	li	L	l̥	vowel sign						U+0962: DEVANAGARI VOWEL SIGN VOCALIC L​	devanagari
ॣ		L	l̥̄				vowel sign						U+0963: DEVANAGARI VOWEL SIGN VOCALIC LL​	devanagari
ऌ		L	l̥̣	li	L	l̥	independent vowel						U+090C: DEVANAGARI LETTER VOCALIC L	devanagari
ॡ		L	l̥̣̄				independent vowel						U+0961: DEVANAGARI LETTER VOCALIC LL	devanagari
														
														
०		0	0		0	0	digit						U+0966: DEVANAGARI DIGIT ZERO	devanagari
१		1	1		1	1	digit						U+0967: DEVANAGARI DIGIT ONE	devanagari
२		2	2		2	2	digit						U+0968: DEVANAGARI DIGIT TWO	devanagari
३		3	3		3	3	digit						U+0969: DEVANAGARI DIGIT THREE	devanagari
४		4	4		4	4	digit						U+096A: DEVANAGARI DIGIT FOUR	devanagari
५		5	5		5	5	digit						U+096B: DEVANAGARI DIGIT FIVE	devanagari
६		6	6		6	6	digit						U+096C: DEVANAGARI DIGIT SIX	devanagari
७		7	7		7	7	digit						U+096D: DEVANAGARI DIGIT SEVEN	devanagari
८		8	8		8	8	digit						U+096E: DEVANAGARI DIGIT EIGHT	devanagari
९		9	9		9	9	digit						U+096F: DEVANAGARI DIGIT NINE	devanagari
														
														
ॐ													U+0950: DEVANAGARI OM	devanagari
ऽ			´										U+093D: DEVANAGARI SIGN AVAGRAHA	devanagari
ॽ													U+097D: DEVANAGARI LETTER GLOTTAL STOP	devanagari
₹													U+20B9: INDIAN RUPEE SIGN	devanagari
														
														
्		*	͓		*								U+094D: DEVANAGARI SIGN VIRAMA​	devanagari
़		[	ˑ	̣	[		consonant modifier				nukta		U+093C: DEVANAGARI SIGN NUKTA​	devanagari
ऀ													U+0900: DEVANAGARI SIGN INVERTED CANDRABINDU​	devanagari
ँ		m	ŋ̽	̃	m		nasalisation						U+0901: DEVANAGARI SIGN CANDRABINDU​	devanagari
ॱ													U+0971: DEVANAGARI SIGN HIGH SPACING DOT	devanagari
॑													U+0951: DEVANAGARI STRESS SIGN UDATTA​	devanagari
॒													U+0952: DEVANAGARI STRESS SIGN ANUDATTA​	devanagari
॓													U+0953: DEVANAGARI GRAVE ACCENT​	devanagari
॔													U+0954: DEVANAGARI ACUTE ACCENT​	devanagari
														
														
।		.	.		.	.							U+0964: DEVANAGARI DANDA	devanagari
॥		|	¶		|	¶							U+0965: DEVANAGARI DOUBLE DANDA	devanagari
॰													U+0970: DEVANAGARI ABBREVIATION SIGN	devanagari
														
														
														
														
														
\u200C		=	ₓ				zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=	₊				zero-width joiner						U+200D: ZERO WIDTH JOINER	punctuation
														
														
														
														
														
														
झ़	s	z	jʰˑ	ʒ			consonant with nukta						U+091D U+093C: DEVANAGARI LETTER JHA, SIGN NUKTA	
ऩ					n	ṉ	Dravidian alveolar n						U+0929: DEVANAGARI LETTER NNNA	devanagari
ऱ					r	ṟ	Dravidian alveolar r						U+0931: DEVANAGARI LETTER RRA	devanagari
ऴ					l	ḻ	Dravidian l						U+0934: DEVANAGARI LETTER LLLA	devanagari
क़	s	q	kˑ	q	q	q							U+0915 U+093C: DEVANAGARI LETTER KA, SIGN NUKTA	
ख़	s	x	kʰˑ	x	k	k͟h							U+0916 U+093C: DEVANAGARI LETTER KHA, SIGN NUKTA	
ग़	s	y	gˑ	ɣ	g	ġ							U+0917 U+093C: DEVANAGARI LETTER GA, SIGN NUKTA	
ज़	s	z	jˑ	z	z	z							U+091C U+093C: DEVANAGARI LETTER JA, SIGN NUKTA	
ड़	s	r	ɖˑ	ɾ	r	ṛ							U+0921 U+093C: DEVANAGARI LETTER DDA, SIGN NUKTA	
ढ़	s	r	ɖʰˑ	ɾʰ	r	ṛh							U+0922 U+093C: DEVANAGARI LETTER DDHA, SIGN NUKTA	
फ़	s	f	pʰˑ	f	f	f							U+092B U+093C: DEVANAGARI LETTER PHA, SIGN NUKTA	
य़	s		yˑ		y	ẏ							U+092F U+093C: DEVANAGARI LETTER YA, SIGN NUKTA	


`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
"typeLoc": 7,
"statusLoc": 8,
"dvowel": 9,
"ivowel": 10,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 11,
"nnameLoc": 12,
"ucsName": 13,
"block": 14,

"othertranscriptions": [[6, 'ISO 15919']]
}



