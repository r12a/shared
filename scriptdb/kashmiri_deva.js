var spreadsheet = `
प	p	p	p	p	p	consonant						U+092A: DEVANAGARI LETTER PA
त	t¶	t	t¶	t	t	consonant						U+0924: DEVANAGARI LETTER TA
च़	t	ʦ		c	t͡s							U+091A, U+093C: DEVANAGARI LETTER CA, SIGN NUKTA
ट	t	ʈ	t	ṭ	ʈ	consonant						U+091F: DEVANAGARI LETTER TTA
च	c	ʧ	c	č	ʧ	consonant						U+091A: DEVANAGARI LETTER CA
क	k	k	k	k	k	consonant						U+0915: DEVANAGARI LETTER KA
												
ब	b	b	b	b	b	consonant						U+092C: DEVANAGARI LETTER BA
द	d¶	d	d¶	d	d	consonant						U+0926: DEVANAGARI LETTER DA
ड	d	ɖ	d	ḍ	ɖ	consonant						U+0921: DEVANAGARI LETTER DDA
ज	j	ʤ	j	j	d͡ʒ	consonant						U+091C: DEVANAGARI LETTER JA
ग	g	g	g	g	g	consonant						U+0917: DEVANAGARI LETTER GA
												
फ	P	pʰ	P	ph	pʰ	consonant						U+092B: DEVANAGARI LETTER PHA
थ	T¶	tʰ	T¶	th	tʰ	consonant						U+0925: DEVANAGARI LETTER THA
छ़	t	ʦʰ		ch	t͡sʰ							U+091B, U+093C: DEVANAGARI LETTER CHA, SIGN NUKTA
ठ	T	ʈʰ	T	ṭh	ʈʰ	consonant						U+0920: DEVANAGARI LETTER TTHA
छ	C	ʧʰ	C	čh	ʧʰ	consonant						U+091B: DEVANAGARI LETTER CHA
ख	K	kʰ	K	kh	kʰ	consonant						U+0916: DEVANAGARI LETTER KHA
												
स	s¶	s	s¶	s	s	consonant						U+0938: DEVANAGARI LETTER SA
श	s	ʃ	s	š	ʃ	consonant						U+0936: DEVANAGARI LETTER SHA
ह	h	h	h	h	h	consonant						U+0939: DEVANAGARI LETTER HA
												
ज़	z	z		z	z							U+091C, U+093C: DEVANAGARI LETTER JA, SIGN NUKTA
												
म	m	m	m	m	m	consonant						U+092E: DEVANAGARI LETTER MA
न	n¶	n	n¶	n	n	consonant						U+0928: DEVANAGARI LETTER NA
												
र	r	r	r	r	r	consonant						U+0930: DEVANAGARI LETTER RA
ल	l	l	l	l	l	consonant						U+0932: DEVANAGARI LETTER LA
य	y	y	y	y	j	consonant						U+092F: DEVANAGARI LETTER YA
व	v	v	v	w	v	consonant						U+0935: DEVANAGARI LETTER VA												
												
												
\u095B	z	z	z	z	z	consonant						U+095B: DEVANAGARI LETTER ZA
												
												
ं	m	n̽	m	ṁ	m n ŋ	final nasal	anusvara					U+0902: DEVANAGARI SIGN ANUSVARA
ः	h	h̽	h	ḥ	ɦ	voiceless breath	visarga					U+0903: DEVANAGARI SIGN VISARGA
												
												
अ	A	ạ	A	a	aː	independent vowel						U+0905: DEVANAGARI LETTER A
आ	A	ạ̄	A	ā	aː	independent vowel				ा		U+0906: DEVANAGARI LETTER AA
ऎ	E	ẹ		e	e	independent vowel				ॆ		U+090E: DEVANAGARI LETTER SHORT E
ए	E	ẹ̄	E	ē	eː	independent vowel				े		U+090F: DEVANAGARI LETTER E
ॳ	E	ə̣		ö	ə	independent vowel				ऺ		U+0973: DEVANAGARI LETTER OE
ॴ	E	ə̣̄		ȫ	əː	independent vowel				ऻ		U+0974: DEVANAGARI LETTER OOE
ऐ	E	ə̣ʲ	A	ai	əi	independent vowel				ै		U+0910: DEVANAGARI LETTER AI
औ	E	ə̣ʷ	A	au	əu	independent vowel				ौ		U+0914: DEVANAGARI LETTER AU
ॶ	I	ɨ̣		ü	ɨ	independent vowel				ॖ		U+0976: DEVANAGARI LETTER UE
ॷ	I	ɨ̣̄		ǖ	ɨː	independent vowel				ॗ		U+0977: DEVANAGARI LETTER UUE
इ	I	ị	I	i	i	independent vowel				ि		U+0907: DEVANAGARI LETTER I
ई	I	ị̄	I	ī	iː	independent vowel				ी		U+0908: DEVANAGARI LETTER II
ऒ	O	ọ		o	o	independent vowel				ॊ		U+0912: DEVANAGARI LETTER SHORT O
ओ	O	ọ̄	O	ō	oː	independent vowel				ो		U+0913: DEVANAGARI LETTER O
ॵ	O	ɔ̣̄			ɔː	independent vowel				ॏ		U+0975: DEVANAGARI LETTER AW
उ	U	ụ	U	u	u	independent vowel				ु		U+0909: DEVANAGARI LETTER U
ऊ	U	ụ̄	U	ū	uː	independent vowel				ू		U+090A: DEVANAGARI LETTER UU
												
												
ा	a	ā	a	ā	aː	vowel sign					आ	U+093E: DEVANAGARI VOWEL SIGN AA
ॆ	e¶	e		e	e	vowel sign					ऎ	U+0946: DEVANAGARI VOWEL SIGN SHORT E
े	e	ē	e¶	ē	eː	vowel sign					ए	U+0947: DEVANAGARI VOWEL SIGN E
ऺ	e	ə		ö	ə	vowel sign					ॳ	U+093A: DEVANAGARI VOWEL SIGN OE
ऻ	e	ə̄		ȫ	əː	vowel sign					ॴ	U+093B: DEVANAGARI VOWEL SIGN OOE
ै	e	əʲ	a	ai	əi	vowel sign					ऐ	U+0948: DEVANAGARI VOWEL SIGN AI
ौ	e	əʷ	a	au	əu	vowel sign					औ	U+094C: DEVANAGARI VOWEL SIGN AU
ॖ	i	ɨ		ü	ɨ	vowel sign					ॶ	U+0956: DEVANAGARI VOWEL SIGN UE
ॗ	i	ɨ̄		ǖ	ɨː	vowel sign					ॷ	U+0957: DEVANAGARI VOWEL SIGN UUE
ि	i	i	i	i	i	vowel sign					इ	U+093F: DEVANAGARI VOWEL SIGN I
ी	i	ī	i	ī	iː	vowel sign					ई	U+0940: DEVANAGARI VOWEL SIGN II
ॊ	o	o		o	o	vowel sign					ऒ	U+094A: DEVANAGARI VOWEL SIGN SHORT O
ो	o	ō	o	ō	oː	vowel sign					ओ	U+094B: DEVANAGARI VOWEL SIGN O
ॏ	o	ɔ			ɔː	vowel sign					ॵ	U+094F: DEVANAGARI VOWEL SIGN AW
ु	u	u	u	u	u	vowel sign					उ	U+0941: DEVANAGARI VOWEL SIGN U
ू	u	ū	u	ū	uː	vowel sign					ऊ	U+0942: DEVANAGARI VOWEL SIGN UU
												
												
ृ		r̥	R	r̥	ri	vowel sign					ऋ	U+0943: DEVANAGARI VOWEL SIGN VOCALIC R
ॄ		r̥̄	R	r̥̄	riː	vowel sign					ॠ	U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR
ऋ		r̥̣	R	r̥	ri	independent vowel				ृ		U+090B: DEVANAGARI LETTER VOCALIC R
ॠ		r̥̣̄	R	r̥̄	riː	independent vowel				ॄ		U+0960: DEVANAGARI LETTER VOCALIC RR
												
												
०	0	0	0	0		digit						U+0966: DEVANAGARI DIGIT ZERO
१	1	1	1	1		digit						U+0967: DEVANAGARI DIGIT ONE
२	2	2	2	2		digit						U+0968: DEVANAGARI DIGIT TWO
३	3	3	3	3		digit						U+0969: DEVANAGARI DIGIT THREE
४	4	4	4	4		digit						U+096A: DEVANAGARI DIGIT FOUR
५	5	5	5	5		digit						U+096B: DEVANAGARI DIGIT FIVE
६	6	6	6	6		digit						U+096C: DEVANAGARI DIGIT SIX
७	7	7	7	7		digit						U+096D: DEVANAGARI DIGIT SEVEN
८	8	8	8	8		digit						U+096E: DEVANAGARI DIGIT EIGHT
९	9	9	9	9		digit						U+096F: DEVANAGARI DIGIT NINE
												
												
ॐ												U+0950: DEVANAGARI OM
ऽ	\	´	\	'		elision marker						U+093D: DEVANAGARI SIGN AVAGRAHA
₹	±	¤				currency symbol						U+20B9: INDIAN RUPEE SIGN
												
												
												
्	*	͓	*			virama	halant					U+094D: DEVANAGARI SIGN VIRAMA
़	/	ˑ	/			consonant modifier	nukta					U+093C: DEVANAGARI SIGN NUKTA
ँ	N	ŋ̽	N	̃	̃	nasalisation	candrabindu/anunāsika					U+0901: DEVANAGARI SIGN CANDRABINDU
												
												
												
												
।	.	.	.	.			purna viram					U+0964: DEVANAGARI DANDA
॥	|	¶	|	¶								U+0965: DEVANAGARI DOUBLE DANDA
॰	+	¨										U+0970: DEVANAGARI ABBREVIATION SIGN
												
																			
												
												
\u200C	=	ₓ				zero-width non-joiner						
\u200D	=	₊				zero-width joiner						
												
`




var cols = {
"key":1,
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 0,
"dvowel": 10,
"ivowel": 11,
"subj":0,
"ltone":0,
"htone":0,
"meaning":0,
"transcription":4,
"ucsName":12,

"othertranscriptions": [[4, 'ISO 15919']]
}
