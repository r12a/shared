var spreadsheet = `
प	Lo	p	p		p	p	h	consonant						U+092A: DEVANAGARI LETTER PA	devanagari
ब	Lo	b	b		b	b	y	consonant						U+092C: DEVANAGARI LETTER BA	devanagari
फ	Lo	pʰ	ph	pʰ	P	pʰ	H	consonant						U+092B: DEVANAGARI LETTER PHA	devanagari
भ	Lo	bʱ	bh	bʱ	B	bʱ	Y	consonant						U+092D: DEVANAGARI LETTER BHA	devanagari
त	Lo	t	t		t¶	t	l	consonant						U+0924: DEVANAGARI LETTER TA	devanagari
द	Lo	d	d		d¶	d	o	consonant						U+0926: DEVANAGARI LETTER DA	devanagari
थ	Lo	tʰ	th	tʰ	T¶	tʰ	L	consonant						U+0925: DEVANAGARI LETTER THA	devanagari
ध	Lo	dʱ	dh	dʱ	D¶	dʱ	O	consonant						U+0927: DEVANAGARI LETTER DHA	devanagari
ट	Lo	ʈ	ṭ	ṭ	t	ʈ	,	consonant						U+091F: DEVANAGARI LETTER TTA	devanagari
ड	Lo	ɖ	ḍ	ɖ ḍ	d	ɖ	[	consonant						U+0921: DEVANAGARI LETTER DDA	devanagari
ठ	Lo	ʈʰ	ṭh	ʈʰ ṭh	T	ʈʰ	"	consonant						U+0920: DEVANAGARI LETTER TTHA	devanagari
ढ	Lo	ɖʱ	ḍh	ɖʱ ḍh	D	ɖʱ	{	consonant						U+0922: DEVANAGARI LETTER DDHA	devanagari
क	Lo	k	k		k	k	k	consonant						U+0915: DEVANAGARI LETTER KA	devanagari
ग	Lo	ɡ	g		g	g	i	consonant						U+0917: DEVANAGARI LETTER GA	devanagari
ख	Lo	kʰ	kh	kʰ	K	kʰ	K	consonant						U+0916: DEVANAGARI LETTER KHA	devanagari
घ	Lo	ɡʱ	gh	ɡʱ	G	gʱ	I	consonant						U+0918: DEVANAGARI LETTER GHA	devanagari
															
च	Lo	t͡ʃ	c	t͡ʃ	c	c	;	consonant						U+091A: DEVANAGARI LETTER CA	devanagari
ज	Lo	d͡ʒ	j	d͡ʒ	j	ɟ	p	consonant						U+091C: DEVANAGARI LETTER JA	devanagari
छ	Lo	t͡ʃʰ	ch	t͡ʃʰ	C	cʰ	:	consonant						U+091B: DEVANAGARI LETTER CHA	devanagari
झ	Lo	d͡ʒʱ	jh	d͡ʒʱ	J	ɟʱ	P	consonant						U+091D: DEVANAGARI LETTER JHA	devanagari
															
स	Lo	s	s		s¶	s	m	consonant						U+0938: DEVANAGARI LETTER SA	devanagari
श	Lo	ʃ	ś	ʃ ś	s	ʃ	M	consonant						U+0936: DEVANAGARI LETTER SHA	devanagari
ष	Lo	ʃ	ṣ	ṣ	s	ʂ	,	consonant						U+0937: DEVANAGARI LETTER SSA	devanagari
ह	Lo	h	h		h	h	u	consonant						U+0939: DEVANAGARI LETTER HA	devanagari
															
म	Lo	m	m		m	m	c	consonant						U+092E: DEVANAGARI LETTER MA	devanagari
न	Lo	n	n		n¶	n	v	consonant						U+0928: DEVANAGARI LETTER NA	devanagari
ण	Lo	ɳ	ṇ	ɳ ṇ	n	ɳ	C	consonant						U+0923: DEVANAGARI LETTER NNA	devanagari
ञ	Lo	ɲ	ñ	ɲ ñ	n	ɲ	}	consonant						U+091E: DEVANAGARI LETTER NYA	devanagari
ङ	Lo	ŋ	ṅ	ŋ ṅ	N	ŋ	U	consonant						U+0919: DEVANAGARI LETTER NGA	devanagari
															
व	Lo	w ʋ	v	ʋ	v	ʋ	b	consonant						U+0935: DEVANAGARI LETTER VA	devanagari
र	Lo	r	r		r	r	j	consonant						U+0930: DEVANAGARI LETTER RA	devanagari
ल	Lo	l	l		l	l	n	consonant						U+0932: DEVANAGARI LETTER LA	devanagari
ळ	Lo	ɭ ɭ̆	ḷ	ɭ̆ ḷ	l	ɭ	N	consonant						U+0933: DEVANAGARI LETTER LLA	devanagari
य	Lo	j	y		y	y	/	consonant						U+092F: DEVANAGARI LETTER YA	devanagari
															
ज्ञ	s	ɡjə	gya			ɟ͓ɲ	%	consonant letter						U+091C U+094D U+091E: DEVANAGARI LETTER JA, SIGN VIRAMA, LETTER NYA	
त्र	s	t̪ɾə	tra			t͓r	^	consonant letter						U+0924 U+094D U+0930: DEVANAGARI LETTER TA, SIGN VIRAMA, LETTER RA	
क्ष	s	kʂə	kṣa			k͓ʂ	&	consonant letter						U+0915 U+094D U+0937: DEVANAGARI LETTER KA, SIGN VIRAMA, LETTER SSA	
															
															
क़	s	q	q		q	kˑ		consonant with nukta						U+0915 U+093C: DEVANAGARI LETTER KA SIGN NUKTA	
ख़	s	x	k͟h		x	kʱˑ		consonant with nukta						U+0916 U+093C: DEVANAGARI LETTER KHA SIGN NUKTA	
ग़	s	ɣ	ġ		y	gˑ		consonant with nukta						U+0917 U+093C: DEVANAGARI LETTER GA SIGN NUKTA	
ज़	s	z	z		z	jˑ		consonant with nukta						U+091C U+093C: DEVANAGARI LETTER JA SIGN NUKTA	
ड़	s	ɽ	ṛ		r	ɖˑ	[	consonant with nukta						U+0921 U+093C: DEVANAGARI LETTER DDA SIGN NUKTA	
ढ़	s	ɽʱ	ṛh		r	ɖʱˑ		consonant with nukta						U+0922 U+093C: DEVANAGARI LETTER DDHA SIGN NUKTA	
फ़	s	f	f		f	pʱˑ		consonant with nukta						U+092B U+093C: DEVANAGARI LETTER PHA SIGN NUKTA	
झ़	s	ʒ	zh		z	jʱˑ		consonant with nukta						U+091D U+093C: DEVANAGARI LETTER JHA SIGN NUKTA	
श़	s	ʒ	ža		z	ʃˑ		consonant with nukta						U+0936 U+093C: DEVANAGARI LETTER SHA, SIGN NUKTA	
															
															
\u0958	Lo	q	q		q	q	k	precomposed consonant	decomposed sequence recommended					U+0958: DEVANAGARI LETTER QA	devanagari
\u0959	Lo	x	k͟h	k͟h	x	x		precomposed consonant	decomposed sequence recommended					U+0959: DEVANAGARI LETTER KHHA	devanagari
\u095A	Lo	ɣ	ġ	ɣ ġ	y	ɣ	i	precomposed consonant	decomposed sequence recommended					U+095A: DEVANAGARI LETTER GHHA	devanagari
\u095B	Lo	z	z		z	z	p	precomposed consonant	decomposed sequence recommended					U+095B: DEVANAGARI LETTER ZA	devanagari
\u095C	Lo	ɽ	ṛ	ɽ ṛ	r	ɽ		precomposed consonant	decomposed sequence recommended					U+095C: DEVANAGARI LETTER DDDHA	devanagari
\u095D	Lo	ɽʱ	ṛh	ɽʱ ṛh	r	ɽʱ		precomposed consonant	decomposed sequence recommended					U+095D: DEVANAGARI LETTER RHA	devanagari
\u095E	Lo	f	f		f	f		precomposed consonant	decomposed sequence recommended					U+095E: DEVANAGARI LETTER FA	devanagari
															
															
ं	Mn	m n ŋ	ṁ	ṁ	m	ⁿͫ	x	final nasal				अनुस्वार	ə.nʊs.ʋɑːɾ	U+0902: DEVANAGARI SIGN ANUSVARA​	devanagari
ः	Mc	ɦ	ḥ	ɦ ḥ	h	h̽	-	voiceless breath					visarga	U+0903: DEVANAGARI SIGN VISARGA​	devanagari
															
															
ा	Mc	aː	ā		a	ā	e	vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA​	devanagari
ि	Mc	ɪ	i		i	i	f	vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I​	devanagari
ी	Mc	iː	ī		i	ī	r	vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II​	devanagari
ु	Mn	ʊ	u		u	u	g	vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U​	devanagari
ू	Mn	uː	ū		u	ū	t	vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU​	devanagari
े	Mn	eː	ē		e¶	ē	s	vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E​	devanagari
ै	Mn	ɛː	ai		e¶	ɛ̄	w	vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI​	devanagari
ो	Mc	oː	ō		o	ō	a	vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O​	devanagari
ौ	Mc	ɔː	au		o	ɔ̄	q	vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU​	devanagari
ॅ	Mn	æ				æ	@	vowel-sign			ऍ			U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	devanagari
ॉ	Mc	ɔ				ɔ	\	vowel-sign			ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	devanagari
															
															
अ	Lo	ə	a	ə	A	ạ	D	independent vowel						U+0905: DEVANAGARI LETTER A	devanagari
आ	Lo	aː	ā	aː ā	A	ạ̄	E	independent vowel		ा				U+0906: DEVANAGARI LETTER AA	devanagari
इ	Lo	ɪ	i	ɪ	I	ị	F	independent vowel		ि				U+0907: DEVANAGARI LETTER I	devanagari
ई	Lo	iː	ī	iː ī	I	ị̄	R	independent vowel		ी				U+0908: DEVANAGARI LETTER II	devanagari
उ	Lo	ʊ	u	ʊ	U	ụ	G	independent vowel		ु				U+0909: DEVANAGARI LETTER U	devanagari
ऊ	Lo	uː	ū	uː ū	U	ụ̄	T	independent vowel		ू				U+090A: DEVANAGARI LETTER UU	devanagari
ए	Lo	eː	ē	eː ē	E	ẹ̄	S	independent vowel		े				U+090F: DEVANAGARI LETTER E	devanagari
ऐ	Lo	ɛː	ai	ɛː	E	ɛ̣̄	W	independent vowel		ै				U+0910: DEVANAGARI LETTER AI	devanagari
ओ	Lo	oː	ō	oː ō	O	ọ̄	A	independent vowel		ो				U+0913: DEVANAGARI LETTER O	devanagari
औ	Lo	ɔː	au	ɔː	O	ɔ̣̄	Q	independent vowel		ौ				U+0914: DEVANAGARI LETTER AU	devanagari
ऍ	Lo	æ				æ̣		independent vowel		ॅ				U+090D: DEVANAGARI LETTER CANDRA E	devanagari
ऑ	Lo	ɔ				ɔ̣	|	independent vowel		ॉ				U+0911: DEVANAGARI LETTER CANDRA O	devanagari
															
अं	s	ə̃	an			ạⁿͫ		independent vowel						U+0905 U+0902: DEVANAGARI LETTER A, SIGN ANUSVARA	
अः	s	ə(ɦ)	aḥ			ạh̽		independent vowel						U+0905 U+0903: DEVANAGARI LETTER A, SIGN VISARGA	
अँ	s	ə̃	ã			ạŋ̽		independent vowel						U+0905 U+0901: DEVANAGARI LETTER A, SIGN CANDRABINDU	
															
															
ृ	Mn	ri	r̥		R	r̥	=	vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R​	devanagari
ॄ	Mn	riː	r̥̄	riː r̥̄	R	r̥̄	=	vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR​	devanagari
ऋ	Lo	ri	r̥		R	r̥̣	+	independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R	devanagari
ॠ	Lo	riː	r̥̄	riː r̥̄	R	r̥̣̄		independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	devanagari
															
															
ॐ	Lo	oːm			o	@	x	symbol						U+0950: DEVANAGARI OM	devanagari
ऽ	Lo		'		\	ː	2	vowel lengthener						U+093D: DEVANAGARI SIGN AVAGRAHA	devanagari
															
															
															
															
															
															
															
															
।	Po		.		|	|	.	section divider					purna viram	U+0964: DEVANAGARI DANDA	
॥	Po		¶		|	¶	>	section divider						U+0965: DEVANAGARI DOUBLE DANDA	
.	Po		.		.	.		full stop						U+002E: FULL STOP	
,	Po		,		,	,		comma						U+002C: COMMA	
⹁	Po		⹁		,	⹁		comma						U+2E41: REVERSED COMMA	
:	Po		:		:	:		colon						U+003A: COLON	
;	Po		;		;	;		semicolon						U+003B: SEMICOLON	
!	Po		!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	
?	Po		?		?	?		question mark						U+003F: QUESTION MARK	
															
															
…	Po		…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
															
															
															
“	Pi		“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
”	Pf		”		>	”		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
‘	Pi		‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
’	Pf		’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
															
															
															
(	Ps		(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	
)	Pe		)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	
[	Ps		[		(	[		bracket						U+005B: LEFT SQUARE BRACKET	
]	Pe		]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET	
															
															
-	Pd		-		-	-		hyphen						U+2010: HYPHEN	
‑	Pd		‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	Pd		–		-	–		en dash						U+2013: EN DASH	
—	Pd		—		-	—		em dash						U+2014: EM DASH	
															
															
															
															
															
															
															
ँ	Mn	̃	̃		N	˜	X	nasalisation				चन्द्रबिन्दु	candrabindu/anunāsika	U+0901: DEVANAGARI SIGN CANDRABINDU​	devanagari
															
															
्	Mn				*	͓	d	vowel-killer					halant	U+094D: DEVANAGARI SIGN VIRAMA​	devanagari
															
															
															
															
़	Mn				/	ˑ	]	consonant modifier					nukta	U+093C: DEVANAGARI SIGN NUKTA​	devanagari
															
															
															
															
															
															
॰	Po				+	¨		abbreviation marker						U+0970: DEVANAGARI ABBREVIATION SIGN	devanagari
															
															
															
															
															
															
ʼ	Lm		ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
															
															
															
															
															
															
\u200B	Cf				]	␣		zero-width space						U+200B: ZERO WIDTH SPACE	
\u200C	Cf				=	ₓ		zwnj						U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf				=	₊		zwj						U+200D: ZERO WIDTH JOINER	
\u2067	Cf				=	ʳˡⁱ		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	Cf				=	ˡʳⁱ		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	Cf				=	ᶠˢⁱ		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	Cf				=	ᵖᵈⁱ		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	Cf				=	ʳˡᵉ		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	Cf				=	ˡʳᵉ		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	Cf				=	ᵖᵈᶠ		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	Cf				=	ʳˡᵐ		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	Cf				=	ˡʳᵐ		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F	Mn				=	ᶜᵍʲ		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
\u061C	Cf				=	ᵃˡᵐ		arabic letter mark						U+061C: ARABIC LETTER MARK	
															
															
															
															
०	Nd		0		±	0̣	0	digit						U+0966: DEVANAGARI DIGIT ZERO	devanagari
१	Nd		1		±	1̣	1	digit						U+0967: DEVANAGARI DIGIT ONE	devanagari
२	Nd		2		±	2̣	2	digit						U+0968: DEVANAGARI DIGIT TWO	devanagari
३	Nd		3		±	3̣	3	digit						U+0969: DEVANAGARI DIGIT THREE	devanagari
४	Nd		4		±	4̣	4	digit						U+096A: DEVANAGARI DIGIT FOUR	devanagari
५	Nd		5		±	5̣	5	digit						U+096B: DEVANAGARI DIGIT FIVE	devanagari
६	Nd		6		±	6̣	6	digit						U+096C: DEVANAGARI DIGIT SIX	devanagari
७	Nd		7		±	7̣	7	digit						U+096D: DEVANAGARI DIGIT SEVEN	devanagari
८	Nd		8		±	8̣	8	digit						U+096E: DEVANAGARI DIGIT EIGHT	devanagari
९	Nd		9		±	9̣	9	digit						U+096F: DEVANAGARI DIGIT NINE	devanagari
															
															
₹	Sc				#	¤	4	currency symbol						U+20B9: INDIAN RUPEE SIGN	devanagari
₨	Sc				#	¢		currency symbol						U+20A8 RUPEE SIGN	devanagari
															
															
%	Po				%	%		percentage mark						U+0025: PERCENT SIGN	
‰	Po				%	‰		per mille mark						U+2030: PER MILLE SIGN	
															
															
															
															
															
ॊ						–	§							U+094A: DEVANAGARI VOWEL SIGN SHORT O​	
ऒ						–	±							U+0912: DEVANAGARI LETTER SHORT O	
ॆ						–	z							U+0946 U+0946: DEVANAGARI VOWEL SIGN SHORT E	
ऎ						–	Z							U+090E: DEVANAGARI LETTER SHORT E	
्र						–	#							U+094D U+0930: DEVANAGARI SIGN VIRAMA, LETTER RA​	
र्	s					–	$							U+0930 U+094D: DEVANAGARI LETTER RA, SIGN VIRAMA	
श्र	s					–	*							U+0936 U+094D U+0930: DEVANAGARI LETTER SHA, SIGN VIRAMA, LETTER RA	
ॢ						–	_							U+0962: DEVANAGARI VOWEL SIGN VOCALIC L​	
ऱ						–	J							U+0931: DEVANAGARI LETTER RRA	
ऩ						–	V							U+0929: DEVANAGARI LETTER NNNA	
ऴ						–	B							U+0934: DEVANAGARI LETTER LLLA	
य़						–	?							U+092F U+093C: DEVANAGARI LETTER YA, SIGN NUKTA	
ऌ						–	n							U+090C: DEVANAGARI LETTER VOCALIC L	



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



