var spreadsheet = `
प		p	p		p	p	h	consonant						U+092A: DEVANAGARI LETTER PA	devanagari
ब		b	b		b	b	y	consonant						U+092C: DEVANAGARI LETTER BA	devanagari
फ		pʰ	ph	pʰ	P	pʰ	H	consonant						U+092B: DEVANAGARI LETTER PHA	devanagari
भ		bʱ	bh	bʱ	B	bʱ	Y	consonant						U+092D: DEVANAGARI LETTER BHA	devanagari
त		t	t		t¶	t	l	consonant						U+0924: DEVANAGARI LETTER TA	devanagari
द		d	d		d¶	d	o	consonant						U+0926: DEVANAGARI LETTER DA	devanagari
थ		tʰ	th	tʰ	T¶	tʰ	L	consonant						U+0925: DEVANAGARI LETTER THA	devanagari
ध		dʱ	dh	dʱ	D¶	dʱ	O	consonant						U+0927: DEVANAGARI LETTER DHA	devanagari
ट		ʈ	ṭ	ṭ	t	ʈ	,	consonant						U+091F: DEVANAGARI LETTER TTA	devanagari
ड		ɖ	ḍ	ɖ ḍ	d	ɖ	[	consonant						U+0921: DEVANAGARI LETTER DDA	devanagari
ठ		ʈʰ	ṭh	ʈʰ ṭh	T	ʈʰ	"	consonant						U+0920: DEVANAGARI LETTER TTHA	devanagari
ढ		ɖʱ	ḍh	ɖʱ ḍh	D	ɖʱ	{	consonant						U+0922: DEVANAGARI LETTER DDHA	devanagari
क		k	k		k	k	k	consonant						U+0915: DEVANAGARI LETTER KA	devanagari
ग		ɡ	g		g	g	i	consonant						U+0917: DEVANAGARI LETTER GA	devanagari
ख		kʰ	kh	kʰ	K	kʰ	K	consonant						U+0916: DEVANAGARI LETTER KHA	devanagari
घ		ɡʱ	gh	ɡʱ	G	gʱ	I	consonant						U+0918: DEVANAGARI LETTER GHA	devanagari
															
च		t͡ʃ	c	t͡ʃ	c	c	;	consonant						U+091A: DEVANAGARI LETTER CA	devanagari
ज		d͡ʒ	j	d͡ʒ	j	ɟ	p	consonant						U+091C: DEVANAGARI LETTER JA	devanagari
छ		t͡ʃʰ	ch	t͡ʃʰ	C	cʰ	:	consonant						U+091B: DEVANAGARI LETTER CHA	devanagari
झ		d͡ʒʱ	jh	d͡ʒʱ	J	ɟʱ	P	consonant						U+091D: DEVANAGARI LETTER JHA	devanagari
															
स		s	s		s¶	s	m	consonant						U+0938: DEVANAGARI LETTER SA	devanagari
श		ʃ	ś	ʃ ś	s	ʃ	M	consonant						U+0936: DEVANAGARI LETTER SHA	devanagari
ष		ʃ	ṣ	ṣ	s	ʂ	,	consonant						U+0937: DEVANAGARI LETTER SSA	devanagari
ह		h	h		h	h	u	consonant						U+0939: DEVANAGARI LETTER HA	devanagari
															
म		m	m		m	m	c	consonant						U+092E: DEVANAGARI LETTER MA	devanagari
न		n	n		n¶	n	v	consonant						U+0928: DEVANAGARI LETTER NA	devanagari
ण		ɳ	ṇ	ɳ ṇ	n	ɳ	C	consonant						U+0923: DEVANAGARI LETTER NNA	devanagari
ञ		ɲ	ñ	ɲ ñ	n	ɲ	}	consonant						U+091E: DEVANAGARI LETTER NYA	devanagari
ङ		ŋ	ṅ	ŋ ṅ	N	ŋ	U	consonant						U+0919: DEVANAGARI LETTER NGA	devanagari
															
व		w ʋ	v	ʋ	v	ʋ	b	consonant						U+0935: DEVANAGARI LETTER VA	devanagari
र		r	r		r	r	j	consonant						U+0930: DEVANAGARI LETTER RA	devanagari
ल		l	l		l	l	n	consonant						U+0932: DEVANAGARI LETTER LA	devanagari
ळ		ɭ ɭ̆	ḷ	ɭ̆ ḷ	l	ɭ	N	consonant						U+0933: DEVANAGARI LETTER LLA	devanagari
य		j	y		y	y	/	consonant						U+092F: DEVANAGARI LETTER YA	devanagari
															
															
\u0958	p	q	q		q	q	k	consonant	decomposed sequence recommended					U+0958: DEVANAGARI LETTER QA	devanagari
\u0959	p	x	k͟h	k͟h	x	x		consonant	decomposed sequence recommended					U+0959: DEVANAGARI LETTER KHHA	devanagari
\u095A	p	ɣ	ġ	ɣ ġ	y	ɣ	i	consonant	decomposed sequence recommended					U+095A: DEVANAGARI LETTER GHHA	devanagari
\u095B	p	z	z		z	z	p	consonant	decomposed sequence recommended					U+095B: DEVANAGARI LETTER ZA	devanagari
\u095C	p	ɽ	ṛ	ɽ ṛ	r	ɽ		consonant	decomposed sequence recommended					U+095C: DEVANAGARI LETTER DDDHA	devanagari
\u095D	p	ɽʱ	ṛh	ɽʱ ṛh	r	ɽʱ		consonant	decomposed sequence recommended					U+095D: DEVANAGARI LETTER RHA	devanagari
\u095E	p	f	f		f	f		consonant	decomposed sequence recommended					U+095E: DEVANAGARI LETTER FA	devanagari
															
															
ं		m n ŋ	ṁ	ṁ	m	ⁿͫ	x	final nasal					anusvara	U+0902: DEVANAGARI SIGN ANUSVARA​	devanagari
ः		ɦ	ḥ	ɦ ḥ	h	h̽	-	voiceless breath					visarga	U+0903: DEVANAGARI SIGN VISARGA​	devanagari
															
															
अ		ə	a	ə	A	ạ	D	independent vowel						U+0905: DEVANAGARI LETTER A	devanagari
आ		aː	ā	aː ā	A	ạ̄	E	independent vowel		ा				U+0906: DEVANAGARI LETTER AA	devanagari
इ		ɪ	i	ɪ	I	ị	F	independent vowel		ि				U+0907: DEVANAGARI LETTER I	devanagari
ई		iː	ī	iː ī	I	ị̄	R	independent vowel		ी				U+0908: DEVANAGARI LETTER II	devanagari
उ		ʊ	u	ʊ	U	ụ	G	independent vowel		ु				U+0909: DEVANAGARI LETTER U	devanagari
ऊ		uː	ū	uː ū	U	ụ̄	T	independent vowel		ू				U+090A: DEVANAGARI LETTER UU	devanagari
ए		eː	ē	eː ē	E	ẹ̄	S	independent vowel		े				U+090F: DEVANAGARI LETTER E	devanagari
ऐ		ɛː	ai	ɛː	E	ɛ̣̄	W	independent vowel		ै				U+0910: DEVANAGARI LETTER AI	devanagari
ओ		oː	ō	oː ō	O	ọ̄	A	independent vowel		ो				U+0913: DEVANAGARI LETTER O	devanagari
औ		ɔː	au	ɔː	O	ɔ̣̄	Q	independent vowel		ौ				U+0914: DEVANAGARI LETTER AU	devanagari
ऍ		æ				æ̣		independent vowel		ॅ				U+090D: DEVANAGARI LETTER CANDRA E	devanagari
ऑ		ɔ				ɔ̣	|	independent vowel		ॉ				U+0911: DEVANAGARI LETTER CANDRA O	devanagari
															
															
ा		aː	ā		a	ā	e	vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA​	devanagari
ि		ɪ	i		i	i	f	vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I​	devanagari
ी		iː	ī		i	ī	r	vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II​	devanagari
ु		ʊ	u		u	u	g	vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U​	devanagari
ू		uː	ū		u	ū	t	vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU​	devanagari
े		eː	ē		e¶	ē	s	vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E​	devanagari
ै		ɛː	ai		e¶	ɛ̄	w	vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI​	devanagari
ो		oː	ō		o	ō	a	vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O​	devanagari
ौ		ɔː	au		o	ɔ̄	q	vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU​	devanagari
ॅ		æ				æ	@	vowel-sign						U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	devanagari
ॉ		ɔ				ɔ	\	vowel-sign			ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	devanagari
															
															
ृ		ri	r̥		R	r̥	=	vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R​	devanagari
ॄ		riː	r̥̄	riː r̥̄	R	r̥̄	=	vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR​	devanagari
ऋ		ri	r̥		R	r̥̣	+	independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R	devanagari
ॠ		riː	r̥̄	riː r̥̄	R	r̥̣̄		independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	devanagari
															
															
०			0		0	0	0	digit						U+0966: DEVANAGARI DIGIT ZERO	devanagari
१			1		1	1	1	digit						U+0967: DEVANAGARI DIGIT ONE	devanagari
२			2		2	2	2	digit						U+0968: DEVANAGARI DIGIT TWO	devanagari
३			3		3	3	3	digit						U+0969: DEVANAGARI DIGIT THREE	devanagari
४			4		4	4	4	digit						U+096A: DEVANAGARI DIGIT FOUR	devanagari
५			5		5	5	5	digit						U+096B: DEVANAGARI DIGIT FIVE	devanagari
६			6		6	6	6	digit						U+096C: DEVANAGARI DIGIT SIX	devanagari
७			7		7	7	7	digit						U+096D: DEVANAGARI DIGIT SEVEN	devanagari
८			8		8	8	8	digit						U+096E: DEVANAGARI DIGIT EIGHT	devanagari
९			9		9	9	9	digit						U+096F: DEVANAGARI DIGIT NINE	devanagari
															
															
ॐ					o	@	x	om symbol						U+0950: DEVANAGARI OM	devanagari
ऽ			'		\	´		elision marker						U+093D: DEVANAGARI SIGN AVAGRAHA	devanagari
₹					±	¤	4	currency symbol						U+20B9: INDIAN RUPEE SIGN	devanagari
₨					±	¤		currency symbol						U+20A8 RUPEE SIGN	devanagari
															
															
्					*	͓	d	virama					halant	U+094D: DEVANAGARI SIGN VIRAMA​	devanagari
़					/	ˑ	]	consonant modifier					nukta	U+093C: DEVANAGARI SIGN NUKTA​	devanagari
ँ		̃	̃		N	ŋ̽	X	nasalisation					candrabindu/anunāsika	U+0901: DEVANAGARI SIGN CANDRABINDU​	devanagari
															
															
															
															
।			.		.	.	.	danda					purna viram	U+0964: DEVANAGARI DANDA	devanagari
॥			¶		|	¶	>	double danda						U+0965: DEVANAGARI DOUBLE DANDA	devanagari
॰					+	¨		abbreviation sign						U+0970: DEVANAGARI ABBREVIATION SIGN	devanagari
															
															
															
															
															
															
\u200C					=	ₓ		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D					=	₊		zero-width joiner						U+200D: ZERO WIDTH JOINER	punctuation
															
															
‘								quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
’								quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
“								quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
”								quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
ʼ								apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
,								comma						U+002C: COMMA	
;								semicolon						U+003B: SEMICOLON	
:								colon						U+003A: COLON	
.								full stop						U+002E: FULL STOP	
?								question mark						U+003F: QUESTION MARK	
!								exclamation mark						U+0021: EXCLAMATION MARK	
(								parenthesis						U+0028: LEFT PARENTHESIS	
)								parenthesis						U+0029: RIGHT PARENTHESIS	
…								ellipsis						U+2026: HORIZONTAL ELLIPSIS	
–								en dash						U+2013: EN DASH	
—								em dash						U+2014: EM DASH	
															
															
															
															
															
															
क़	s	q	q		q	kˑ		consonant with nukta						U+0915 U+093C: DEVANAGARI LETTER KA SIGN NUKTA	
ख़	s	x	k͟h		x	kʱˑ		consonant with nukta						U+0916 U+093C: DEVANAGARI LETTER KHA SIGN NUKTA	
ग़	s	ɣ	ġ		y	gˑ		consonant with nukta						U+0917 U+093C: DEVANAGARI LETTER GA SIGN NUKTA	
ज़	s	z	z		z	jˑ		consonant with nukta						U+091C U+093C: DEVANAGARI LETTER JA SIGN NUKTA	
ड़	s	ɽ	ṛ		r	ɖˑ	[	consonant with nukta						U+0921 U+093C: DEVANAGARI LETTER DDA SIGN NUKTA	
ढ़	s	ɽʱ	ṛh		r	ɖʱˑ		consonant with nukta						U+0922 U+093C: DEVANAGARI LETTER DDHA SIGN NUKTA	
फ़	s	f	f		f	pʱˑ		consonant with nukta						U+092B U+093C: DEVANAGARI LETTER PHA SIGN NUKTA	
झ़	s	ʒ	zh		z	jʱˑ		consonant with nukta						U+091D U+093C: DEVANAGARI LETTER JHA SIGN NUKTA	
															
															
अं	s				A	ạⁿͫ		independent vowel + anusvara						U+0905 U+0902: DEVANAGARI LETTER A, SIGN ANUSVARA	
अः	s				A	ạh̽		independent vowel + visarga						U+0905 U+0903: DEVANAGARI LETTER A, SIGN VISARGA	
															
															
															
ॊ						–	§							U+094A: DEVANAGARI VOWEL SIGN SHORT O​	
ऒ						–	±							U+0912: DEVANAGARI LETTER SHORT O	
ऽ						ː	2	vowel lengthener						U+093D: DEVANAGARI SIGN AVAGRAHA	devanagari
्र						–	#							U+094D U+0930: DEVANAGARI SIGN VIRAMA, LETTER RA​	
र्						–	$							U+0930 U+094D: DEVANAGARI LETTER RA, SIGN VIRAMA	
ज्ञ						–	%							U+091C U+094D U+091E: DEVANAGARI LETTER JA, SIGN VIRAMA, LETTER NYA	
त्र						–	^							U+0924 U+094D U+0930: DEVANAGARI LETTER TA, SIGN VIRAMA, LETTER RA	
क्ष						–	&							U+0915 U+094D U+0937: DEVANAGARI LETTER KA, SIGN VIRAMA, LETTER SSA	
श्र						–	*							U+0936 U+094D U+0930: DEVANAGARI LETTER SHA, SIGN VIRAMA, LETTER RA	
ॢ						–	_							U+0962: DEVANAGARI VOWEL SIGN VOCALIC L​	
ऱ						–	J							U+0931: DEVANAGARI LETTER RRA	
ॆॆ						–	z							U+0946 U+0946: DEVANAGARI VOWEL SIGN SHORT E, VOWEL SIGN SHORT E​	
ऎ						–	Z							U+090E: DEVANAGARI LETTER SHORT E	
ऩ						–	V							U+0929: DEVANAGARI LETTER NNNA	
ऴ						–	B							U+0934: DEVANAGARI LETTER LLLA	
ऌ						–	n							U+090C: DEVANAGARI LETTER VOCALIC L	
य़						–	?							U+092F U+093C: DEVANAGARI LETTER YA, SIGN NUKTA	



`


latinPanel = 'aː ā æ bʱ dʱ ɖ ḍ ɖʱ ḍh d͡ʒ d͡ʒʱ ə eː ē ɛː ɡʱ ġ ɦ ḥ ɪ iː ī kʰ k͟h ɭ̆ ḷ ṁ ɳ ṇ ɲ ñ ŋ ṅ oː ō ɔː pʰ ɽ ṛ ɽʱ ṛh riː r̥̄ ʃ ś ṣ tʰ ṭ ʈʰ ṭh t͡ʃ t͡ʃʰ ʊ uː ū ʋ ɣ'


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
"dvowel": 10,
"ivowel": 11,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"transckey": 0,
"numLoc": 0,
"nnameLoc": 12,
"nameLoc": 13,
"ucsName": 14,
"block": 15,

"othertranscriptions": [[3, 'ISO 15919']]
}



