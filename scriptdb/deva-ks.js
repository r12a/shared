var spreadsheet = `
प	Lo	p	p		p	p		stop							U+092A: DEVANAGARI LETTER PA	🗸
त	Lo	t	t		t¶	t		stop							U+0924: DEVANAGARI LETTER TA	🗸
च़		t͡s	c	t͡s	t	ʦ		affricate							U+091A, U+093C: DEVANAGARI LETTER CA, SIGN NUKTA	
च	Lo	ʧ	č	t͡ʃ č	c	ʧ		affricate							U+091A: DEVANAGARI LETTER CA	🗸
ट	Lo	ʈ	ṭ	ʈ ṭ	t	ʈ		stop							U+091F: DEVANAGARI LETTER TTA	🗸
क	Lo	k	k		k	k		stop							U+0915: DEVANAGARI LETTER KA	🗸
																
ब	Lo	b	b		b	b		stop							U+092C: DEVANAGARI LETTER BA	🗸
द	Lo	d	d		d¶	d		stop							U+0926: DEVANAGARI LETTER DA	🗸
ड	Lo	ɖ	ḍ	ḍ	d	ɖ		stop							U+0921: DEVANAGARI LETTER DDA	🗸
ज	Lo	d͡ʒ	j	d͡ʒ	j	ʤ		affricate							U+091C: DEVANAGARI LETTER JA	🗸
ग	Lo	g	g	ɡ	g	g		stop							U+0917: DEVANAGARI LETTER GA	🗸
																
फ	Lo	pʰ	ph	pʰ	P	pʰ		aspirated stop							U+092B: DEVANAGARI LETTER PHA	🗸
थ	Lo	tʰ	th	tʰ	T¶	tʰ		aspirated stop							U+0925: DEVANAGARI LETTER THA	🗸
छ़		t͡sʰ	ch	t͡sʰ	T	ʦʰ		aspirated affricate							U+091B, U+093C: DEVANAGARI LETTER CHA, SIGN NUKTA	
ठ	Lo	ʈʰ	ṭh	ʈʰ	T	ʈʰ		aspirated stop							U+0920: DEVANAGARI LETTER TTHA	🗸
छ	Lo	ʧʰ	čh	t͡ʃʰ	C	ʧʰ		aspirated affricate							U+091B: DEVANAGARI LETTER CHA	🗸
ख	Lo	kʰ	kh	kʰ	K	kʰ		aspirated stop							U+0916: DEVANAGARI LETTER KHA	🗸
																
स	Lo	s	s		s¶	s		fricative							U+0938: DEVANAGARI LETTER SA	🗸
श	Lo	ʃ	š	ʃ š	s	ʃ		fricative							U+0936: DEVANAGARI LETTER SHA	🗸
ह	Lo	h	h		h	h		fricative							U+0939: DEVANAGARI LETTER HA	🗸
																
ज़		z	z		z	z		fricative							U+091C, U+093C: DEVANAGARI LETTER JA, SIGN NUKTA	
																
म	Lo	m	m		m	m		nasal							U+092E: DEVANAGARI LETTER MA	🗸
न	Lo	n	n		n¶	n		nasal							U+0928: DEVANAGARI LETTER NA	🗸
																
र	Lo	r	r		r	r		liquid							U+0930: DEVANAGARI LETTER RA	🗸
ल	Lo	l	l		l	l		liquid							U+0932: DEVANAGARI LETTER LA	🗸
य	Lo	j	y		y	y		liquid/palatalisation marker							U+092F: DEVANAGARI LETTER YA	🗸
व	Lo	v w	w		v	v		fricative/liquid							U+0935: DEVANAGARI LETTER VA	🗸
																
																
																
\u095B	Lo	z	z		z	z		precomposed consonant	infrequent	ज़					U+095B: DEVANAGARI LETTER ZA	🗸
																
																
ं	Mn​	m n ŋ	ṁ	ŋ ṁ	m	m̽		final nasal						anusvara	U+0902: DEVANAGARI SIGN ANUSVARA	🗸
य्		ʲ	ⁱ	ʲ	j	y͓		palatalisation marker							U+092F DEVANAGARI LETTER YA, SIGN VIRAMA	
																
																
इ	Lo	i	i		I	ị		independent vowel			ि				U+0907: DEVANAGARI LETTER I	🗸
ई	Lo	iː	ī	iː ī	I	ị̄		independent vowel			ी				U+0908: DEVANAGARI LETTER II	🗸
ॶ	Lo	ɨ	ü	ɨ ü	I	ɨ̣		independent vowel			ॖ				U+0976: DEVANAGARI LETTER UE	🗸
ॷ	Lo	ɨː	ǖ	ɨː ǖ	I	ɨ̣̄		independent vowel			ॗ				U+0977: DEVANAGARI LETTER UUE	🗸
उ	Lo	u	u		U	ụ		independent vowel			ु				U+0909: DEVANAGARI LETTER U	🗸
ऊ	Lo	uː	ū	uː ū	U	ụ̄		independent vowel			ू				U+090A: DEVANAGARI LETTER UU	🗸
ऎ	Lo	e	e		E	ẹ		independent vowel			ॆ				U+090E: DEVANAGARI LETTER SHORT E	🗸
ए	Lo	eː	ē	eː ē	E	ẹ̄		independent vowel			े				U+090F: DEVANAGARI LETTER E	🗸
ॳ	Lo	ə	ö	ə ö	E	ə̣		independent vowel			ऺ				U+0973: DEVANAGARI LETTER OE	🗸
ॴ	Lo	əː	ȫ	əː ȫ	E	ə̣̄		independent vowel			ऻ				U+0974: DEVANAGARI LETTER OOE	🗸
ऒ	Lo	o	o		O	ọ		independent vowel			ॊ				U+0912: DEVANAGARI LETTER SHORT O	🗸
ओ	Lo	oː	ō	oː ō	O	ọ̄		independent vowel			ो				U+0913: DEVANAGARI LETTER O	🗸
अ	Lo	aː	a	aː	A	ạ		independent vowel							U+0905: DEVANAGARI LETTER A	🗸
आ	Lo	aː	ā	ā	A	ạ̄		independent vowel			ा				U+0906: DEVANAGARI LETTER AA	🗸
ॵ	Lo	ɔː		ɔː	O	ɔ̣		independent vowel			ॏ				U+0975: DEVANAGARI LETTER AW	🗸
ऐ	Lo	əĭ	ai	ĭ	E	ə̣ʲ		independent vowel			ै				U+0910: DEVANAGARI LETTER AI	🗸
औ	Lo	əŭ	au	ŭ	E	ə̣ʷ		independent vowel			ौ				U+0914: DEVANAGARI LETTER AU	🗸
																
																
ि	Mc​	i	i		i	i		vowel sign				इ			U+093F: DEVANAGARI VOWEL SIGN I	🗸
ी	Mc​	iː	ī		i	ī		vowel sign				ई			U+0940: DEVANAGARI VOWEL SIGN II	🗸
ॖ	Mn​	ɨ	ü		i	ɨ		vowel sign				ॶ			U+0956: DEVANAGARI VOWEL SIGN UE	🗸
ॗ	Mn​	ɨː	ǖ		i	ɨ̄		vowel sign				ॷ			U+0957: DEVANAGARI VOWEL SIGN UUE	🗸
ु	Mn​	u	u		u	u		vowel sign				उ			U+0941: DEVANAGARI VOWEL SIGN U	🗸
ू	Mn​	uː	ū		u	ū		vowel sign				ऊ			U+0942: DEVANAGARI VOWEL SIGN UU	🗸
ॆ	Mn​	e	e		e¶	e		vowel sign				ऎ			U+0946: DEVANAGARI VOWEL SIGN SHORT E	🗸
े	Mn​	eː	ē		e	ē		vowel sign				ए			U+0947: DEVANAGARI VOWEL SIGN E	🗸
ऺ	Mn​	ə	ö		e	ə		vowel sign				ॳ			U+093A: DEVANAGARI VOWEL SIGN OE	🗸
ऻ	Mc​	əː	ȫ		e	ə̄		vowel sign				ॴ			U+093B: DEVANAGARI VOWEL SIGN OOE	🗸
ॊ	Mc​	o	o		o	o		vowel sign				ऒ			U+094A: DEVANAGARI VOWEL SIGN SHORT O	🗸
ो	Mc​	oː	ō		o	ō		vowel sign				ओ			U+094B: DEVANAGARI VOWEL SIGN O	🗸
ा	Mc​	aː	ā		a	ā		vowel sign				आ			U+093E: DEVANAGARI VOWEL SIGN AA	🗸
ॏ	Mc​	ɔː			o	ɔ		vowel sign				ॵ			U+094F: DEVANAGARI VOWEL SIGN AW	🗸
ै	Mn​	əĭ	ai		e	əʲ		vowel sign				ऐ			U+0948: DEVANAGARI VOWEL SIGN AI	🗸
ौ	Mc​	əŭ	au		e	əʷ		vowel sign				औ			U+094C: DEVANAGARI VOWEL SIGN AU	🗸
																
																
ृ	Mn​	ri	r̥	r̥	R	r̥		vocalic vowel sign				ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R	🗸
ॄ	Mn​	riː	r̥̄	r̥̄		r̥̄		vowel sign				ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR	🗸
ऋ	Lo	ri	r̥		R	r̥̣		vocalic independent vowel			ृ				U+090B: DEVANAGARI LETTER VOCALIC R	🗸
ॠ	Lo	riː	r̥̄			r̥̣̄		independent vowel			ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	🗸
																
																
०	Nd		0		0	0		digit							U+0966: DEVANAGARI DIGIT ZERO	🗸
१	Nd		1		1	1		digit							U+0967: DEVANAGARI DIGIT ONE	🗸
२	Nd		2		2	2		digit							U+0968: DEVANAGARI DIGIT TWO	🗸
३	Nd		3		3	3		digit							U+0969: DEVANAGARI DIGIT THREE	🗸
४	Nd		4		4	4		digit							U+096A: DEVANAGARI DIGIT FOUR	🗸
५	Nd		5		5	5		digit							U+096B: DEVANAGARI DIGIT FIVE	🗸
६	Nd		6		6	6		digit							U+096C: DEVANAGARI DIGIT SIX	🗸
७	Nd		7		7	7		digit							U+096D: DEVANAGARI DIGIT SEVEN	🗸
८	Nd		8		8	8		digit							U+096E: DEVANAGARI DIGIT EIGHT	🗸
९	Nd		9		9	9		digit							U+096F: DEVANAGARI DIGIT NINE	🗸
																
																
ॐ	Lo														U+0950: DEVANAGARI OM	🗸
ऽ	Lo		'		\	ˣ		elision marker							U+093D: DEVANAGARI SIGN AVAGRAHA	🗸
₹	Sc				#	¤		currency symbol							U+20B9: INDIAN RUPEE SIGN	🗸
																
																
																
्	Mn​				*	͓		virama						halant	U+094D: DEVANAGARI SIGN VIRAMA	🗸
़	Mn​				/	ˑ		consonant modifier						nukta	U+093C: DEVANAGARI SIGN NUKTA	🗸
ँ	Mn​	̃	̃	̃	N	ŋ̽		nasalisation						candrabindu/anunāsika	U+0901: DEVANAGARI SIGN CANDRABINDU	🗸
																
																
																
																
।	Po		.		.	.								purna viram	U+0964: DEVANAGARI DANDA	🗸
॥	Po		¶		|	¶									U+0965: DEVANAGARI DOUBLE DANDA	🗸
॰	Po				+	¨									U+0970: DEVANAGARI ABBREVIATION SIGN	🗸
																
																
																
																
																
\u200C	Cf			ᶻʷⁿʲ	=	ₓ		zero-width non-joiner							U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf			ᶻʷʲ	=	₊		zero-width joiner							U+200D: ZERO WIDTH JOINER	
																
																
																
																
																
																
																
ॲ	Lo	ə				ə̸̣		independent vowel	archaic (incorrect in modern use)		ॅ				U+0972: DEVANAGARI LETTER CANDRA A	🗸
ॅ	Mn​	ə				ə̸		vowel sign	archaic (incorrect in modern use)			ॲ			U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	🗸
ऑ	Lo	əː				ə̸̣̄		independent vowel	archaic (incorrect in modern use)		ॉ				U+0911: DEVANAGARI LETTER CANDRA O	🗸
ॉ	Mc​	əː				ə̸̄		vowel sign	archaic (incorrect in modern use)			ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	🗸
																
																
ष	Lo	ʂ		ʂ		ʂ		fricative	for Sanskrit loans						U+0937: DEVANAGARI LETTER SSA	🗸
क्ष		kʂ				k͓ʂ		affricate	for Sanskrit loans						U+0915 U+094D U+0937: DEVANAGARI LETTER KA, DEVANAGARI SIGN VIRAMA, DEVANAGARI LETTER SSA	
झ	Lo	ɟʰ		ɟʰ		jʰ		aspirated stop	for Sanskrit loans						U+091D: DEVANAGARI LETTER JHA	🗸
ध	Lo	dʱ		dʱ		dʱ		aspirated stop	for Sanskrit loans						U+0927: DEVANAGARI LETTER DHA	🗸
ढ	Lo	ɖʱ		ɖʱ		ɖʱ		aspirated stop	for Sanskrit loans						U+0922: DEVANAGARI LETTER DDHA	🗸
घ	Lo	gʱ		gʱ		gʱ		aspirated stop	for Sanskrit loans						U+0918: DEVANAGARI LETTER GHA	🗸
भ	Lo	bʱ		bʱ		bʱ		aspirated stop	for Sanskrit loans						U+092D: DEVANAGARI LETTER BHA	🗸
ङ	Lo	ŋ		ŋ		ŋ		nasal	for Sanskrit loans						U+0919: DEVANAGARI LETTER NGA	🗸
ण	Lo	ɳ		ɳ		ɳ		nasal	for Sanskrit loans						U+0923: DEVANAGARI LETTER NNA	🗸
ञ	Lo	n		ñ		ɲ		nasal	for Sanskrit loans						U+091E: DEVANAGARI LETTER NYA	🗸


												
`


latinPanel = '̃ aː ā bʱ č ḍ d͡ʒ dʱ ɖʱ eː ē ə əː ɡ gʱ iː ī ɨ ɨː ĭ ʲ ɟʰ kʰ ṁ ŋ ɳ ñ ö ȫ oː ō ɔː pʰ r̥ r̥̄ ʃ š ʂ t͡s t͡ʃ ʈ ṭ tʰ t͡sʰ ʈʰ t͡ʃʰ ü ǖ uː ū ŭ'

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

"equiv": 10,
"transckey": 0,
"dvowel": 11,
"ivowel": 12,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nnameLoc": 13,
"nameLoc": 14,
"ucsName":15,
"block":16,

"othertranscriptions": [[3, 'Latin']]
}


