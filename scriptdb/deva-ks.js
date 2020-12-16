var spreadsheet = `
प		p	p	p	p			stop						U+092A: DEVANAGARI LETTER PA	devanagari
त		t¶	t	t	t			stop						U+0924: DEVANAGARI LETTER TA	devanagari
च़	s	t	c	ʦ	t͡s	t͡s		affricate						U+091A, U+093C: DEVANAGARI LETTER CA, SIGN NUKTA	devanagari
च		c	č	ʧ	ʧ	t͡ʃ č		affricate						U+091A: DEVANAGARI LETTER CA	devanagari
ट		t	ṭ	ʈ	ʈ	ʈ ṭ		stop						U+091F: DEVANAGARI LETTER TTA	devanagari
क		k	k	k	k			stop						U+0915: DEVANAGARI LETTER KA	devanagari
															
ब		b	b	b	b			stop						U+092C: DEVANAGARI LETTER BA	devanagari
द		d¶	d	d	d			stop						U+0926: DEVANAGARI LETTER DA	devanagari
ड		d	ḍ	ɖ	ɖ	ḍ		stop						U+0921: DEVANAGARI LETTER DDA	devanagari
ज		j	j	ʤ	d͡ʒ	d͡ʒ		affricate						U+091C: DEVANAGARI LETTER JA	devanagari
ग		g	g	g	g	ɡ		stop						U+0917: DEVANAGARI LETTER GA	devanagari
															
फ		P	ph	pʰ	pʰ	pʰ		aspirated stop						U+092B: DEVANAGARI LETTER PHA	devanagari
थ		T¶	th	tʰ	tʰ	tʰ		aspirated stop						U+0925: DEVANAGARI LETTER THA	devanagari
छ़	s	T	ch	ʦʰ	t͡sʰ	t͡sʰ		aspirated affricate						U+091B, U+093C: DEVANAGARI LETTER CHA, SIGN NUKTA	devanagari
ठ		T	ṭh	ʈʰ	ʈʰ	ʈʰ		aspirated stop						U+0920: DEVANAGARI LETTER TTHA	devanagari
छ		C	čh	ʧʰ	ʧʰ	t͡ʃʰ		aspirated affricate						U+091B: DEVANAGARI LETTER CHA	devanagari
ख		K	kh	kʰ	kʰ	kʰ		aspirated stop						U+0916: DEVANAGARI LETTER KHA	devanagari
															
स		s¶	s	s	s			fricative						U+0938: DEVANAGARI LETTER SA	devanagari
श		s	š	ʃ	ʃ	ʃ š		fricative						U+0936: DEVANAGARI LETTER SHA	devanagari
ह		h	h	h	h			fricative						U+0939: DEVANAGARI LETTER HA	devanagari
															
ज़	s	z	z	z	z			fricative						U+091C, U+093C: DEVANAGARI LETTER JA, SIGN NUKTA	devanagari
															
म		m	m	m	m			nasal						U+092E: DEVANAGARI LETTER MA	devanagari
न		n¶	n	n	n			nasal						U+0928: DEVANAGARI LETTER NA	devanagari
															
र		r	r	r	r			liquid						U+0930: DEVANAGARI LETTER RA	devanagari
ल		l	l	l	l			liquid						U+0932: DEVANAGARI LETTER LA	devanagari
य		y	y	y	j			liquid/palatalisation marker						U+092F: DEVANAGARI LETTER YA	devanagari
व		v	w	v	v w			fricative/liquid						U+0935: DEVANAGARI LETTER VA	devanagari
															
															
															
\u095B	dn	z	z	z	z		ज़	precomposed consonant	infrequent					U+095B: DEVANAGARI LETTER ZA	devanagari
															
															
ं		m	ṁ	m̽	m n ŋ	ŋ ṁ		final nasal				anusvara		U+0902: DEVANAGARI SIGN ANUSVARA	devanagari
य्	s	j	ⁱ	y͓	ʲ	ʲ		palatalisation marker						U+092F DEVANAGARI LETTER YA, SIGN VIRAMA	devanagari
															
															
इ		I	i	ị	i			independent vowel		ि				U+0907: DEVANAGARI LETTER I	devanagari
ई		I	ī	ị̄	iː	iː ī		independent vowel		ी				U+0908: DEVANAGARI LETTER II	devanagari
ॶ		I	ü	ɨ̣	ɨ	ɨ ü		independent vowel		ॖ				U+0976: DEVANAGARI LETTER UE	devanagari
ॷ		I	ǖ	ɨ̣̄	ɨː	ɨː ǖ		independent vowel		ॗ				U+0977: DEVANAGARI LETTER UUE	devanagari
उ		U	u	ụ	u			independent vowel		ु				U+0909: DEVANAGARI LETTER U	devanagari
ऊ		U	ū	ụ̄	uː	uː ū		independent vowel		ू				U+090A: DEVANAGARI LETTER UU	devanagari
ऎ		E	e	ẹ	e			independent vowel		ॆ				U+090E: DEVANAGARI LETTER SHORT E	devanagari
ए		E	ē	ẹ̄	eː	eː ē		independent vowel		े				U+090F: DEVANAGARI LETTER E	devanagari
ॳ		E	ö	ə̣	ə	ə ö		independent vowel		ऺ				U+0973: DEVANAGARI LETTER OE	devanagari
ॴ		E	ȫ	ə̣̄	əː	əː ȫ		independent vowel		ऻ				U+0974: DEVANAGARI LETTER OOE	devanagari
ऒ		O	o	ọ	o			independent vowel		ॊ				U+0912: DEVANAGARI LETTER SHORT O	devanagari
ओ		O	ō	ọ̄	oː	oː ō		independent vowel		ो				U+0913: DEVANAGARI LETTER O	devanagari
अ		A	a	ạ	aː	aː		independent vowel						U+0905: DEVANAGARI LETTER A	devanagari
आ		A	ā	ạ̄	aː	ā		independent vowel		ा				U+0906: DEVANAGARI LETTER AA	devanagari
ॵ		O		ɔ̣	ɔː	ɔː		independent vowel		ॏ				U+0975: DEVANAGARI LETTER AW	devanagari
ऐ		E	ai	ə̣ʲ	əĭ	ĭ		independent vowel		ै				U+0910: DEVANAGARI LETTER AI	devanagari
औ		E	au	ə̣ʷ	əŭ	ŭ		independent vowel		ौ				U+0914: DEVANAGARI LETTER AU	devanagari
															
															
ि		i	i	i	i			vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I	devanagari
ी		i	ī	ī	iː			vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II	devanagari
ॖ		i	ü	ɨ	ɨ			vowel sign			ॶ			U+0956: DEVANAGARI VOWEL SIGN UE	devanagari
ॗ		i	ǖ	ɨ̄	ɨː			vowel sign			ॷ			U+0957: DEVANAGARI VOWEL SIGN UUE	devanagari
ु		u	u	u	u			vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U	devanagari
ू		u	ū	ū	uː			vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU	devanagari
ॆ		e¶	e	e	e			vowel sign			ऎ			U+0946: DEVANAGARI VOWEL SIGN SHORT E	devanagari
े		e	ē	ē	eː			vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E	devanagari
ऺ		e	ö	ə	ə			vowel sign			ॳ			U+093A: DEVANAGARI VOWEL SIGN OE	devanagari
ऻ		e	ȫ	ə̄	əː			vowel sign			ॴ			U+093B: DEVANAGARI VOWEL SIGN OOE	devanagari
ॊ		o	o	o	o			vowel sign			ऒ			U+094A: DEVANAGARI VOWEL SIGN SHORT O	devanagari
ो		o	ō	ō	oː			vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O	devanagari
ा		a	ā	ā	aː			vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA	devanagari
ॏ		o		ɔ	ɔː			vowel sign			ॵ			U+094F: DEVANAGARI VOWEL SIGN AW	devanagari
ै		e	ai	əʲ	əĭ			vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI	devanagari
ौ		e	au	əʷ	əŭ			vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU	devanagari
															
															
ृ		R	r̥	r̥	ri	r̥		vocalic vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R	devanagari
ॄ	-		r̥̄	r̥̄	riː	r̥̄		vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR	devanagari
ऋ		R	r̥	r̥̣	ri			vocalic independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R	devanagari
ॠ	-		r̥̄	r̥̣̄	riː			independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	devanagari
															
															
०		0	0	0				digit						U+0966: DEVANAGARI DIGIT ZERO	devanagari
१		1	1	1				digit						U+0967: DEVANAGARI DIGIT ONE	devanagari
२		2	2	2				digit						U+0968: DEVANAGARI DIGIT TWO	devanagari
३		3	3	3				digit						U+0969: DEVANAGARI DIGIT THREE	devanagari
४		4	4	4				digit						U+096A: DEVANAGARI DIGIT FOUR	devanagari
५		5	5	5				digit						U+096B: DEVANAGARI DIGIT FIVE	devanagari
६		6	6	6				digit						U+096C: DEVANAGARI DIGIT SIX	devanagari
७		7	7	7				digit						U+096D: DEVANAGARI DIGIT SEVEN	devanagari
८		8	8	8				digit						U+096E: DEVANAGARI DIGIT EIGHT	devanagari
९		9	9	9				digit						U+096F: DEVANAGARI DIGIT NINE	devanagari
															
															
ॐ	-													U+0950: DEVANAGARI OM	devanagari
ऽ	-	\	'	ˣ				elision marker						U+093D: DEVANAGARI SIGN AVAGRAHA	devanagari
₹	-	#		¤				currency symbol						U+20B9: INDIAN RUPEE SIGN	currency
															
															
															
्		*		͓				virama				halant		U+094D: DEVANAGARI SIGN VIRAMA	devanagari
़		/		ˑ				consonant modifier				nukta		U+093C: DEVANAGARI SIGN NUKTA	devanagari
ँ		N	̃	ŋ̽	̃	̃		nasalisation				candrabindu/anunāsika		U+0901: DEVANAGARI SIGN CANDRABINDU	devanagari
															
															
															
															
।		.	.	.								purna viram		U+0964: DEVANAGARI DANDA	devanagari
॥		|	¶	¶										U+0965: DEVANAGARI DOUBLE DANDA	devanagari
॰	-	+		¨										U+0970: DEVANAGARI ABBREVIATION SIGN	devanagari
															
															
															
															
															
\u200C		=		ₓ		ᶻʷⁿʲ		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=		₊		ᶻʷʲ		zero-width joiner						U+200D: ZERO WIDTH JOINER	punctuation
															
															
															
															
															
															
															
ॲ	x			ə̸̣	ə			independent vowel	archaic (incorrect in modern use)	ॅ				U+0972: DEVANAGARI LETTER CANDRA A	
ॅ	x			ə̸	ə			vowel sign	archaic (incorrect in modern use)		ॲ			U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	
ऑ	x			ə̸̣̄	əː			independent vowel	archaic (incorrect in modern use)	ॉ				U+0911: DEVANAGARI LETTER CANDRA O	
ॉ	x			ə̸̄	əː			vowel sign	archaic (incorrect in modern use)		ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	
															
															
ष				ʂ	ʂ	ʂ		fricative	for Sanskrit loans					U+0937: DEVANAGARI LETTER SSA	devanagari
क्ष	s			k͓ʂ	kʂ			affricate	for Sanskrit loans					U+0915 U+094D U+0937: DEVANAGARI LETTER KA, DEVANAGARI SIGN VIRAMA, DEVANAGARI LETTER SSA	
झ				jʰ	ɟʰ	ɟʰ		aspirated stop	for Sanskrit loans					U+091D: DEVANAGARI LETTER JHA	devanagari
ध				dʱ	dʱ	dʱ		aspirated stop	for Sanskrit loans					U+0927: DEVANAGARI LETTER DHA	devanagari
ढ				ɖʱ	ɖʱ	ɖʱ		aspirated stop	for Sanskrit loans					U+0922: DEVANAGARI LETTER DDHA	devanagari
घ				gʱ	gʱ	gʱ		aspirated stop	for Sanskrit loans					U+0918: DEVANAGARI LETTER GHA	devanagari
भ				bʱ	bʱ	bʱ		aspirated stop	for Sanskrit loans					U+092D: DEVANAGARI LETTER BHA	devanagari
ङ				ŋ	ŋ	ŋ		nasal	for Sanskrit loans					U+0919: DEVANAGARI LETTER NGA	devanagari
ण				ɳ	ɳ	ɳ		nasal	for Sanskrit loans					U+0923: DEVANAGARI LETTER NNA	devanagari
ञ				ɲ	n	ñ		nasal	for Sanskrit loans					U+091E: DEVANAGARI LETTER NYA	devanagari


												
`


var cols = {
"class": 1,
"key":2,
"transcription": 3,
"transLoc": 4,
"ipaLoc": 5,
"latin": 6,
"equiv": 7,
"transckey": 0,
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

"othertranscriptions": [[3, 'Latin']]
}


