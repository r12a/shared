var spreadsheet = `
-	-			-	-		Pd		hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash						U+2013: EN DASH	
—	-			—	—		Pd		em dash						U+2014: EM DASH	✓
,	,			,	,		Po		comma						U+002C: COMMA	
⹁	,			⹁	⹁		Po		comma						U+2E41: REVERSED COMMA	
;	;			;	;		Po		semicolon						U+003B: SEMICOLON	
:	:			:	:		Po		colon						U+003A: COLON	
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark						U+003F: QUESTION MARK	
.	.			.	.		Po		full stop						U+002E: FULL STOP	
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	
[	(			[	[		Ps		bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe		bracket						U+005D: RIGHT SQUARE BRACKET	
\u200B	]				␣		Cf		zero-width space						U+200B: ZERO WIDTH SPACE	
्	*				͞	d	Mn		vowel-killer					halant	U+094D: DEVANAGARI SIGN VIRAMA​	✓
़	/				ˑ	]	Mn		consonant modifier					nukta	U+093C: DEVANAGARI SIGN NUKTA​	✓
ऽ	\			'	ː	2	Lo		vowel lengthener						U+093D: DEVANAGARI SIGN AVAGRAHA	✓
₹	#				¤	4	Sc		currency symbol						U+20B9: INDIAN RUPEE SIGN	✓
₨	#				¢		Sc		currency symbol						U+20A8 RUPEE SIGN	✓
%	%				%		Po		percentage mark						U+0025: PERCENT SIGN	
‰	%				‰		Po		per mille mark						U+2030: PER MILLE SIGN	
॰	+				¨		Po		abbreviation marker						U+0970: DEVANAGARI ABBREVIATION SIGN	✓
०	±			0	0̣	0	Nd		digit						U+0966: DEVANAGARI DIGIT ZERO	✓
१	±			1	1̣	1	Nd		digit						U+0967: DEVANAGARI DIGIT ONE	✓
२	±			2	2̣	2	Nd		digit						U+0968: DEVANAGARI DIGIT TWO	✓
३	±			3	3̣	3	Nd		digit						U+0969: DEVANAGARI DIGIT THREE	✓
४	±			4	4̣	4	Nd		digit						U+096A: DEVANAGARI DIGIT FOUR	✓
५	±			5	5̣	5	Nd		digit						U+096B: DEVANAGARI DIGIT FIVE	✓
६	±			6	6̣	6	Nd		digit						U+096C: DEVANAGARI DIGIT SIX	✓
७	±			7	7̣	7	Nd		digit						U+096D: DEVANAGARI DIGIT SEVEN	✓
८	±			8	8̣	8	Nd		digit						U+096E: DEVANAGARI DIGIT EIGHT	✓
९	±			9	9̣	9	Nd		digit						U+096F: DEVANAGARI DIGIT NINE	✓
“	<			“	 “		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
‘	<			‘	‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
\u200C	=				ₓ		Cf		zwnj						U+200C: ZERO WIDTH NON-JOINER	
\u200D	=				₊		Cf		zwj						U+200D: ZERO WIDTH JOINER	
\u2067	=				ʳˡⁱ		Cf		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=				ˡʳⁱ		Cf		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	=				ᶠˢⁱ		Cf		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	=				ᵖᵈⁱ		Cf		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	=				ʳˡᵉ		Cf		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=				ˡʳᵉ		Cf		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	=				ᵖᵈᶠ		Cf		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	=				ʳˡᵐ		Cf		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	=				ˡʳᵐ		Cf		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F	=				ᶜᵍʲ		Mn		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
\u061C	=				ᵃˡᵐ		Cf		arabic letter mark						U+061C: ARABIC LETTER MARK	
”	>			”	”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
’	>			’	’		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
।	|			.	|	.	Po		section divider					purna viram	U+0964: DEVANAGARI DANDA	✓
॥	|			¶	¶	>	Po		section divider						U+0965: DEVANAGARI DOUBLE DANDA	✓
ा	a	aː		ā	ā	e	Mc		vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA​	✓
अ	A	ə		a	ạ	D	Lo		independent vowel						U+0905: DEVANAGARI LETTER A	✓
आ	A	aː		ā	ạ̄	E	Lo		independent vowel		ा				U+0906: DEVANAGARI LETTER AA	✓
ब	b	b	ə	b	b	y	Lo		consonant						U+092C: DEVANAGARI LETTER BA	✓
भ	B	bʱ	ə	bh	bʱ	Y	Lo		consonant						U+092D: DEVANAGARI LETTER BHA	✓
च	c	t͡ʃ	ə	c	c	;	Lo		consonant						U+091A: DEVANAGARI LETTER CA	✓
छ	C	t͡ʃʰ	ə	ch	cʰ	:	Lo		consonant						U+091B: DEVANAGARI LETTER CHA	✓
द	d¶	d	ə	d	d	o	Lo		consonant						U+0926: DEVANAGARI LETTER DA	✓
ड	d	ɖ	ə	ḍ	ɖ	[	Lo		consonant						U+0921: DEVANAGARI LETTER DDA	✓
ध	D¶	dʱ	ə	dh	dʱ	O	Lo		consonant						U+0927: DEVANAGARI LETTER DHA	✓
ढ	D	ɖʱ	ə	ḍh	ɖʱ	{	Lo		consonant						U+0922: DEVANAGARI LETTER DDHA	✓
े	e¶	eː		ē	ē	s	Mn		vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E​	✓
ै	e¶	ɛː		ai	ɛ̄	w	Mn		vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI​	✓
ए	E	eː		ē	ẹ̄	S	Lo		independent vowel		े				U+090F: DEVANAGARI LETTER E	✓
ऐ	E	ɛː		ai	ɛ̣̄	W	Lo		independent vowel		ै				U+0910: DEVANAGARI LETTER AI	✓
फ़	f	f	ə	f	pʱˑ		s		consonant with nukta						U+092B U+093C: DEVANAGARI LETTER PHA SIGN NUKTA	
\u095E	f	f	ə	f	f		Lo	d	precomposed consonant	decomposed sequence recommended					U+095E: DEVANAGARI LETTER FA	
ग	g	ɡ	ə	g	g	i	Lo		consonant						U+0917: DEVANAGARI LETTER GA	✓
घ	G	ɡʱ	ə	gh	gʱ	I	Lo		consonant						U+0918: DEVANAGARI LETTER GHA	✓
ह	h	h	ə	h	h	u	Lo		consonant						U+0939: DEVANAGARI LETTER HA	✓
ः	h	ɦ		ḥ	h̽	-	Mc		voiceless breath					visarga	U+0903: DEVANAGARI SIGN VISARGA​	✓
ि	i	ɪ		i	i	f	Mc		vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I​	✓
ी	i	iː		ī	ī	r	Mc		vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II​	✓
इ	I	ɪ		i	ị	F	Lo		independent vowel		ि				U+0907: DEVANAGARI LETTER I	✓
ई	I	iː		ī	ị̄	R	Lo		independent vowel		ी				U+0908: DEVANAGARI LETTER II	✓
ज	j	d͡ʒ	ə	j	ɟ	p	Lo		consonant						U+091C: DEVANAGARI LETTER JA	✓
झ	J	d͡ʒʱ	ə	jh	ɟʱ	P	Lo		consonant						U+091D: DEVANAGARI LETTER JHA	✓
क	k	k	ə	k	k	k	Lo		consonant						U+0915: DEVANAGARI LETTER KA	✓
ख	K	kʰ	ə	kh	kʰ	K	Lo		consonant						U+0916: DEVANAGARI LETTER KHA	✓
ल	l	l	ə	l	l	n	Lo		consonant						U+0932: DEVANAGARI LETTER LA	✓
ळ	l	ɭ ɭ̆	ə	ḷ	ɭ	N	Lo		consonant						U+0933: DEVANAGARI LETTER LLA	✓
म	m	m	ə	m	m	c	Lo		consonant						U+092E: DEVANAGARI LETTER MA	✓
ं	m	m n ŋ		ṁ	ⁿͫ	x	Mn		final nasal				अनुस्वार	ə.nʊs.ʋɑːɾ	U+0902: DEVANAGARI SIGN ANUSVARA​	✓
न	n¶	n	ə	n	n	v	Lo		consonant						U+0928: DEVANAGARI LETTER NA	✓
ण	n	ɳ	ə	ṇ	ɳ	C	Lo		consonant						U+0923: DEVANAGARI LETTER NNA	✓
ञ	n	ɲ	ə	ñ	ɲ	}	Lo		consonant						U+091E: DEVANAGARI LETTER NYA	✓
ङ	N	ŋ	ə	ṅ	ŋ	U	Lo		consonant						U+0919: DEVANAGARI LETTER NGA	✓
ँ	N	̃		̃	˜	X	Mn		nasalisation				चन्द्रबिन्दु	candrabindu/anunāsika	U+0901: DEVANAGARI SIGN CANDRABINDU​	✓
ो	o	oː		ō	ō	a	Mc		vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O​	✓
ौ	o	ɔː		au	ɔ̄	q	Mc		vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU​	✓
ॐ	o	oːm			@	x	Lo		symbol						U+0950: DEVANAGARI OM	✓
ओ	O	oː		ō	ọ̄	A	Lo		independent vowel		ो				U+0913: DEVANAGARI LETTER O	✓
औ	O	ɔː		au	ɔ̣̄	Q	Lo		independent vowel		ौ				U+0914: DEVANAGARI LETTER AU	✓
प	p	p	ə	p	p	h	Lo		consonant						U+092A: DEVANAGARI LETTER PA	✓
फ	P	pʰ	ə	ph	pʰ	H	Lo		consonant						U+092B: DEVANAGARI LETTER PHA	✓
क़	q	q	ə	q	kˑ		s		consonant with nukta						U+0915 U+093C: DEVANAGARI LETTER KA SIGN NUKTA	
\u0958	q	q	ə	q	q	k	Lo	d	precomposed consonant	decomposed sequence recommended					U+0958: DEVANAGARI LETTER QA	
र	r	r	ə	r	r	j	Lo		consonant						U+0930: DEVANAGARI LETTER RA	✓
ड़	r	ɽ	ə	ṛ	ɖˑ	[	s		consonant with nukta						U+0921 U+093C: DEVANAGARI LETTER DDA SIGN NUKTA	
ढ़	r	ɽʱ	ə	ṛh	ɖʱˑ		s		consonant with nukta						U+0922 U+093C: DEVANAGARI LETTER DDHA SIGN NUKTA	
\u095C	r	ɽ	ə	ṛ	ɽ		Lo	d	precomposed consonant	decomposed sequence recommended					U+095C: DEVANAGARI LETTER DDDHA	
\u095D	r	ɽʱ	ə	ṛh	ɽʱ		Lo	d	precomposed consonant	decomposed sequence recommended					U+095D: DEVANAGARI LETTER RHA	
ृ	R	ri		r̥	r̥	=	Mn		vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R​	✓
ॄ	R	riː		r̥̄	r̥̄	=	Mn		vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR​	✓
ऋ	R	ri		r̥	r̥̣	+	Lo		independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R	✓
ॠ	R	riː		r̥̄	r̥̣̄		Lo		independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	✓
स	s¶	s	ə	s	s	m	Lo		consonant						U+0938: DEVANAGARI LETTER SA	✓
श	s	ʃ	ə	ś	ʃ	M	Lo		consonant						U+0936: DEVANAGARI LETTER SHA	✓
ष	s	ʃ	ə	ṣ	ʂ	,	Lo		consonant						U+0937: DEVANAGARI LETTER SSA	✓
त	t¶	t	ə	t	t	l	Lo		consonant						U+0924: DEVANAGARI LETTER TA	✓
ट	t	ʈ	ə	ṭ	ʈ	,	Lo		consonant						U+091F: DEVANAGARI LETTER TTA	✓
थ	T¶	tʰ	ə	th	tʰ	L	Lo		consonant						U+0925: DEVANAGARI LETTER THA	✓
ठ	T	ʈʰ	ə	ṭh	ʈʰ	"	Lo		consonant						U+0920: DEVANAGARI LETTER TTHA	✓
ु	u	ʊ		u	u	g	Mn		vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U​	✓
ू	u	uː		ū	ū	t	Mn		vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU​	✓
उ	U	ʊ		u	ụ	G	Lo		independent vowel		ु				U+0909: DEVANAGARI LETTER U	✓
ऊ	U	uː		ū	ụ̄	T	Lo		independent vowel		ू				U+090A: DEVANAGARI LETTER UU	✓
व	v	w ʋ	ə	v	ʋ	b	Lo		consonant						U+0935: DEVANAGARI LETTER VA	✓
ख़	x	x	ə	k͟h	kʱˑ		s		consonant with nukta						U+0916 U+093C: DEVANAGARI LETTER KHA SIGN NUKTA	
\u0959	x	x	ə	k͟h	x		Lo	d	precomposed consonant	decomposed sequence recommended					U+0959: DEVANAGARI LETTER KHHA	
य	y	j	ə	y	y	/	Lo		consonant						U+092F: DEVANAGARI LETTER YA	✓
ग़	y	ɣ	ə	ġ	gˑ		s		consonant with nukta						U+0917 U+093C: DEVANAGARI LETTER GA SIGN NUKTA	
\u095A	y	ɣ	ə	ġ	ɣ	i	Lo	d	precomposed consonant	decomposed sequence recommended					U+095A: DEVANAGARI LETTER GHHA	
ज़	z	z	ə	z	jˑ		s		consonant with nukta						U+091C U+093C: DEVANAGARI LETTER JA SIGN NUKTA	
झ़	z	ʒ	ə	zh	jʱˑ		s		consonant with nukta						U+091D U+093C: DEVANAGARI LETTER JHA SIGN NUKTA	
श़	z	ʒ	ə	ža	ʃˑ		s		consonant with nukta						U+0936 U+093C: DEVANAGARI LETTER SHA, SIGN NUKTA	
\u095B	z	z	ə	z	z	p	Lo	d	precomposed consonant	decomposed sequence recommended					U+095B: DEVANAGARI LETTER ZA	
																
																
																
																
																
ज्ञ		ɡjə		gya	ɟ͓ɲ	%	s		consonant letter						U+091C U+094D U+091E: DEVANAGARI LETTER JA, SIGN VIRAMA, LETTER NYA	
त्र		t̪ɾə		tra	t͓r	^	s		consonant letter						U+0924 U+094D U+0930: DEVANAGARI LETTER TA, SIGN VIRAMA, LETTER RA	
क्ष		kʂə		kṣa	k͓ʂ	&	s		consonant letter						U+0915 U+094D U+0937: DEVANAGARI LETTER KA, SIGN VIRAMA, LETTER SSA	
																
																
																
ॅ	a	æ			æ	@	Mn		vowel-sign			ऍ			U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	✓
ॉ	o	ɔ			ɔ	\	Mc		vowel-sign			ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	✓
																
ऍ	A	æ			æ̣		Lo		independent vowel		ॅ				U+090D: DEVANAGARI LETTER CANDRA E	✓
ऑ	O	ɔ			ɔ̣	|	Lo		independent vowel		ॉ				U+0911: DEVANAGARI LETTER CANDRA O	✓
																
अं		ə̃		an	ạⁿͫ		s		independent vowel						U+0905 U+0902: DEVANAGARI LETTER A, SIGN ANUSVARA	
अः		ə(ɦ)		aḥ	ạh̽		s		independent vowel						U+0905 U+0903: DEVANAGARI LETTER A, SIGN VISARGA	
अँ		ə̃		ã	ạŋ̽		s		independent vowel						U+0905 U+0901: DEVANAGARI LETTER A, SIGN CANDRABINDU	
																
ʼ	'			ʼ	ʼ		Lm		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
																
																
																
For the keyboard																
ॊ					–	§									U+094A: DEVANAGARI VOWEL SIGN SHORT O​	
ऒ					–	±									U+0912: DEVANAGARI LETTER SHORT O	
ॆ					–	z									U+0946 U+0946: DEVANAGARI VOWEL SIGN SHORT E	✓
ऎ					–	Z									U+090E: DEVANAGARI LETTER SHORT E	✓
्र					–	#									U+094D U+0930: DEVANAGARI SIGN VIRAMA, LETTER RA​	✓
र्					–	$	s								U+0930 U+094D: DEVANAGARI LETTER RA, SIGN VIRAMA	✓
श्र					–	*	s								U+0936 U+094D U+0930: DEVANAGARI LETTER SHA, SIGN VIRAMA, LETTER RA	
ॢ					–	_									U+0962: DEVANAGARI VOWEL SIGN VOCALIC L​	
ऱ					–	J									U+0931: DEVANAGARI LETTER RRA	
ऩ					–	V									U+0929: DEVANAGARI LETTER NNNA	✓
ऴ					–	B									U+0934: DEVANAGARI LETTER LLLA	✓
य़					–	?									U+092F U+093C: DEVANAGARI LETTER YA, SIGN NUKTA	✓
ऌ					–	n									U+090C: DEVANAGARI LETTER VOCALIC L	✓





`


latinPanel = 'aː ā æ bʱ dʱ ɖ ḍ ɖʱ ḍh d͡ʒ d͡ʒʱ ə eː ē ɛː ɡʱ ġ ɦ ḥ ɪ iː ī kʰ k͟h ɭ̆ ḷ ṁ ɳ ṇ ɲ ñ ŋ ṅ oː ō ɔː pʰ ɽ ṛ ɽʱ ṛh riː r̥̄ ʃ ś ṣ tʰ ṭ ʈʰ ṭh t͡ʃ t͡ʃʰ ʊ uː ū ʋ ɣ'


var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transcription": 4,
"transLoc": 5,
"kbd": 6,
"class": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

"dvowel": 11,
"ivowel": 12,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"transckey": 0,
"numLoc": 0,

"nnameLoc": 13,
"nameLoc": 14,
"ucsName": 15,
"block": 16,

"othertranscriptions": [[4, 'ISO 15919']]
}



