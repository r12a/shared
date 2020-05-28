var spreadsheet = `
प		p	p	p	p	p	consonant						U+092A: DEVANAGARI LETTER PA		devanagari
ब		b	b	b	b	b	consonant						U+092C: DEVANAGARI LETTER BA		devanagari
फ		P	pʰ	pʰ	P	ph	consonant						U+092B: DEVANAGARI LETTER PHA		devanagari
भ		B	bʱ	bʱ	B	bh	consonant						U+092D: DEVANAGARI LETTER BHA		devanagari
त		t¶	t	t	t¶	t	consonant						U+0924: DEVANAGARI LETTER TA		devanagari
द		d¶	d	d	d¶	d	consonant						U+0926: DEVANAGARI LETTER DA		devanagari
थ		T¶	tʰ	tʰ	T¶	th	consonant						U+0925: DEVANAGARI LETTER THA		devanagari
ध		D¶	dʱ	dʱ	D¶	dh	consonant						U+0927: DEVANAGARI LETTER DHA		devanagari
ट		t	ʈ	ʈ	t	ṭ	consonant						U+091F: DEVANAGARI LETTER TTA		devanagari
ड		d	ɖ	ɖ	d	ḍ	consonant						U+0921: DEVANAGARI LETTER DDA		devanagari
ठ		T	ʈʰ	ʈʰ	T	ṭh	consonant						U+0920: DEVANAGARI LETTER TTHA		devanagari
ढ		D	ɖʱ	ɖʱ	D	ḍh	consonant						U+0922: DEVANAGARI LETTER DDHA		devanagari
क		k	k	k	k	k	consonant						U+0915: DEVANAGARI LETTER KA		devanagari
ग		g	g	ɡ	g	g	consonant						U+0917: DEVANAGARI LETTER GA		devanagari
ख		K	kʰ	kʰ	K	kh	consonant						U+0916: DEVANAGARI LETTER KHA		devanagari
घ		G	gʱ	ɡʱ	G	gh	consonant						U+0918: DEVANAGARI LETTER GHA		devanagari
															
च		c	c	t͡ʃ	c	c	consonant						U+091A: DEVANAGARI LETTER CA		devanagari
ज		j	ɟ	d͡ʒ	j	j	consonant						U+091C: DEVANAGARI LETTER JA		devanagari
छ		C	cʰ	t͡ʃʰ	C	ch	consonant						U+091B: DEVANAGARI LETTER CHA		devanagari
झ		J	ɟʱ	d͡ʒʱ	J	jh	consonant						U+091D: DEVANAGARI LETTER JHA		devanagari
															
स		s¶	s	s	s¶	s	consonant						U+0938: DEVANAGARI LETTER SA		devanagari
श		s	ʃ	ʃ	s	ś	consonant						U+0936: DEVANAGARI LETTER SHA		devanagari
ष		s	ʂ	ʃ	s	ṣ	consonant						U+0937: DEVANAGARI LETTER SSA		devanagari
ह		h	h	h	h	h	consonant						U+0939: DEVANAGARI LETTER HA		devanagari
															
म		m	m	m	m	m	consonant						U+092E: DEVANAGARI LETTER MA		devanagari
न		n¶	n	n	n¶	n	consonant						U+0928: DEVANAGARI LETTER NA		devanagari
ण		n	ɳ	ɳ	n	ṇ	consonant						U+0923: DEVANAGARI LETTER NNA		devanagari
ञ		n	ɲ	ɲ	n	ñ	consonant						U+091E: DEVANAGARI LETTER NYA		devanagari
ङ		N	ŋ	ŋ	N	ṅ	consonant						U+0919: DEVANAGARI LETTER NGA		devanagari
															
व		v	ʋ	w ʋ	v	v	consonant						U+0935: DEVANAGARI LETTER VA		devanagari
र		r	r	r	r	r	consonant						U+0930: DEVANAGARI LETTER RA		devanagari
ल		l	l	l	l	l	consonant						U+0932: DEVANAGARI LETTER LA		devanagari
ळ		l	ɭ	ɭ ɭ̆	l	ḷ	consonant						U+0933: DEVANAGARI LETTER LLA		devanagari
य		y	y	j	y	y	consonant						U+092F: DEVANAGARI LETTER YA		devanagari
															
															
\u0958	p	q	q	q	q	q							U+0958: DEVANAGARI LETTER QA		devanagari
\u0959	p	x	x	x	K	k͟h							U+0959: DEVANAGARI LETTER KHHA		devanagari
\u095A	p	y	ɣ	ɣ	g	ġ							U+095A: DEVANAGARI LETTER GHHA		devanagari
\u095B	p	z	z	z	z	z							U+095B: DEVANAGARI LETTER ZA		devanagari
\u095C	p	r	ɽ	ɽ	r	ṛ							U+095C: DEVANAGARI LETTER DDDHA		devanagari
\u095D	p	r	ɽʱ	ɽʱ	r	ṛh							U+095D: DEVANAGARI LETTER RHA		devanagari
\u095E	p	f	f	f	f	f							U+095E: DEVANAGARI LETTER FA		devanagari
															
															
ं		m	ⁿͫ	m n ŋ	m	ṁ	final nasal				anusvara		U+0902: DEVANAGARI SIGN ANUSVARA​		devanagari
ः		h	h̽	ɦ	h	ḥ	voiceless breath				visarga		U+0903: DEVANAGARI SIGN VISARGA​		devanagari
															
															
अ		A	ạ	ə	A	a	independent vowel						U+0905: DEVANAGARI LETTER A		devanagari
आ		A	ạ̄	aː	A	ā	independent vowel		ा				U+0906: DEVANAGARI LETTER AA		devanagari
इ		I	ị	ɪ	I	i	independent vowel		ि				U+0907: DEVANAGARI LETTER I		devanagari
ई		I	ị̄	iː	I	ī	independent vowel		ी				U+0908: DEVANAGARI LETTER II		devanagari
उ		U	ụ	ʊ	U	u	independent vowel		ु				U+0909: DEVANAGARI LETTER U		devanagari
ऊ		U	ụ̄	uː	U	ū	independent vowel		ू				U+090A: DEVANAGARI LETTER UU		devanagari
ए		E	ẹ̄	eː	E	ē	independent vowel		े				U+090F: DEVANAGARI LETTER E		devanagari
ऐ		E	ɛ̣̄	ɛː	A	ai	independent vowel		ै				U+0910: DEVANAGARI LETTER AI		devanagari
ओ		O	ọ̄	oː	O	ō	independent vowel		ो				U+0913: DEVANAGARI LETTER O		devanagari
औ		O	ɔ̣̄	ɔː	A	au	independent vowel		ौ				U+0914: DEVANAGARI LETTER AU		devanagari
															
															
ा		a	ā	aː	a	ā	vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA​		devanagari
ि		i	i	ɪ	i	i	vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I​		devanagari
ी		i	ī	iː	i	ī	vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II​		devanagari
ु		u	u	ʊ	u	u	vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U​		devanagari
ू		u	ū	uː	u	ū	vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU​		devanagari
े		e¶	ē	eː	e¶	ē	vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E​		devanagari
ै		e¶	ɛ̄	ɛː	a	ai	vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI​		devanagari
ो		o	ō	oː	o	ō	vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O​		devanagari
ौ		o	ɔ̄	ɔː	a	au	vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU​		devanagari
															
															
ृ		R	r̥	ri	R	r̥	vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R​		devanagari
ॄ		R	r̥̄	riː	R	r̥̄	vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR​		devanagari
ऋ		R	r̥̣	ri	R	r̥	independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R		devanagari
ॠ		R	r̥̣̄	riː	R	r̥̄	independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR		devanagari
															
															
०		0	0		0	0	digit						U+0966: DEVANAGARI DIGIT ZERO		devanagari
१		1	1		1	1	digit						U+0967: DEVANAGARI DIGIT ONE		devanagari
२		2	2		2	2	digit						U+0968: DEVANAGARI DIGIT TWO		devanagari
३		3	3		3	3	digit						U+0969: DEVANAGARI DIGIT THREE		devanagari
४		4	4		4	4	digit						U+096A: DEVANAGARI DIGIT FOUR		devanagari
५		5	5		5	5	digit						U+096B: DEVANAGARI DIGIT FIVE		devanagari
६		6	6		6	6	digit						U+096C: DEVANAGARI DIGIT SIX		devanagari
७		7	7		7	7	digit						U+096D: DEVANAGARI DIGIT SEVEN		devanagari
८		8	8		8	8	digit						U+096E: DEVANAGARI DIGIT EIGHT		devanagari
९		9	9		9	9	digit						U+096F: DEVANAGARI DIGIT NINE		devanagari
															
															
ॐ							om symbol						U+0950: DEVANAGARI OM		devanagari
ऽ		\	´		\	'	elision marker						U+093D: DEVANAGARI SIGN AVAGRAHA		devanagari
₹		±	¤				currency symbol						U+20B9: INDIAN RUPEE SIGN		currencysymbols
															
															
															
्		*	͓		*		virama				halant		U+094D: DEVANAGARI SIGN VIRAMA​		devanagari
़		/	ˑ		/		consonant modifier				nukta		U+093C: DEVANAGARI SIGN NUKTA​		devanagari
ँ		N	ŋ̽	̃	N	̃	nasalisation				candrabindu/anunāsika		U+0901: DEVANAGARI SIGN CANDRABINDU​		devanagari
															
															
															
															
।		.	.		.	.					purna viram		U+0964: DEVANAGARI DANDA		devanagari
॥		|	¶		|	¶							U+0965: DEVANAGARI DOUBLE DANDA		devanagari
॰		+	¨										U+0970: DEVANAGARI ABBREVIATION SIGN		devanagari
															
															
															
															
															
\u200C		=	ₓ				zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER		punctuation
\u200D		=	₊				zero-width joiner						U+200D: ZERO WIDTH JOINER		punctuation
															
															
															
															
															
															
															
क़	s	q	kˑ	q	q	q	consonant with nukta						U+0915 U+093C: DEVANAGARI LETTER KA SIGN NUKTA		
ख़	s	x	kʱˑ	x	k	k͟h	consonant with nukta						U+0916 U+093C: DEVANAGARI LETTER KHA SIGN NUKTA		
ग़	s	y	gˑ	ɣ	g	ġ	consonant with nukta						U+0917 U+093C: DEVANAGARI LETTER GA SIGN NUKTA		
ज़	s	z	jˑ	z	z	z	consonant with nukta						U+091C U+093C: DEVANAGARI LETTER JA SIGN NUKTA		
ड़	s	r	ɖˑ	ɽ	r	ṛ	consonant with nukta						U+0921 U+093C: DEVANAGARI LETTER DDA SIGN NUKTA		
ढ़	s	r	ɖʱˑ	ɽʱ	r	ṛh	consonant with nukta						U+0922 U+093C: DEVANAGARI LETTER DDHA SIGN NUKTA		
फ़	s	f	pʱˑ	f	f	f	consonant with nukta						U+092B U+093C: DEVANAGARI LETTER PHA SIGN NUKTA		
झ़	s	z	jʱˑ	ʒ		zh	consonant with nukta						U+091D U+093C: DEVANAGARI LETTER JHA SIGN NUKTA		
															
															
अं	s	A	ạⁿͫ				independent vowel + anusvara						U+0905 U+0902: DEVANAGARI LETTER A, SIGN ANUSVARA		
अः	s	A	ạh̽				independent vowel + visarga						U+0905 U+0903: DEVANAGARI LETTER A, SIGN VISARGA		


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



