var spreadsheet = `deva-hi	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	dvowel	ivowel	native name	latin name	ucs name	block
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
\u200B	]			␣			Cf		zero-width space						U+200B: ZERO WIDTH SPACE	
्	*			͞		d	Mn		vowel-killer					halant	U+094D: DEVANAGARI SIGN VIRAMA	✓
़	/			ˑ		]	Mn		consonant modifier					nukta	U+093C: DEVANAGARI SIGN NUKTA	✓
ऽ	\			ː		2	Lo	i	vowel lengthener						U+093D: DEVANAGARI SIGN AVAGRAHA	✓
₹	#			¤		4	Sc		currency symbol						U+20B9: INDIAN RUPEE SIGN	✓
₨	#			¢			Sc	u	currency symbol						U+20A8 RUPEE SIGN	✓
%	%			%			Po		percentage mark						U+0025: PERCENT SIGN	
‰	%			‰			Po		per mille mark						U+2030: PER MILLE SIGN	
॰	+			¨			Po		abbreviation marker						U+0970: DEVANAGARI ABBREVIATION SIGN	✓
०	±			0̣	0	0	Nd		digit						U+0966: DEVANAGARI DIGIT ZERO	✓
१	±			1̣	1	1	Nd		digit						U+0967: DEVANAGARI DIGIT ONE	✓
२	±			2̣	2	2	Nd		digit						U+0968: DEVANAGARI DIGIT TWO	✓
३	±			3̣	3	3	Nd		digit						U+0969: DEVANAGARI DIGIT THREE	✓
४	±			4̣	4	4	Nd		digit						U+096A: DEVANAGARI DIGIT FOUR	✓
५	±			5̣	5	5	Nd		digit						U+096B: DEVANAGARI DIGIT FIVE	✓
६	±			6̣	6	6	Nd		digit						U+096C: DEVANAGARI DIGIT SIX	✓
७	±			7̣	7	7	Nd		digit						U+096D: DEVANAGARI DIGIT SEVEN	✓
८	±			8̣	8	8	Nd		digit						U+096E: DEVANAGARI DIGIT EIGHT	✓
९	±			9̣	9	9	Nd		digit						U+096F: DEVANAGARI DIGIT NINE	✓
“	<			“	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
\‘	<			\‘	\‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
\u200C	=			ᶻʷⁿʲ			Cf		zwnj						U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			ᶻʷʲ			Cf		zwj						U+200D: ZERO WIDTH JOINER	
\u2067	=			ʳˡⁱ			Cf		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	=			ᶠˢⁱ			Cf		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	=			ᵖᵈⁱ			Cf		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	=			ʳˡᵉ			Cf		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	=			ᵖᵈᶠ			Cf		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	=			ʳˡᵐ			Cf		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	=			ˡʳᵐ			Cf		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F	=			ᶜᵍʲ			Mn		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER	
\u061C	=			ᵃˡᵐ			Cf		arabic letter mark						U+061C: ARABIC LETTER MARK	
”	>			”	”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
\’	>			\’	\’		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
।	|			|	.	.	Po		section divider					purna viram	U+0964: DEVANAGARI DANDA	✓
॥	|			¶	¶	>	Po		section divider						U+0965: DEVANAGARI DOUBLE DANDA	✓
ा	a	aː		ā	ā	e	Mc		vowel sign			आ			U+093E: DEVANAGARI VOWEL SIGN AA	✓
अ	A	ə		ạ	a	D	Lo		independent vowel						U+0905: DEVANAGARI LETTER A	✓
आ	A	aː		ạ̄	ā	E	Lo		independent vowel		ा				U+0906: DEVANAGARI LETTER AA	✓
ब	b	b	ə	b	b	y	Lo		consonant						U+092C: DEVANAGARI LETTER BA	✓
भ	B	bʱ	ə	bʱ	bh	Y	Lo		consonant						U+092D: DEVANAGARI LETTER BHA	✓
च	c	t͡ʃ	ə	c	c	;	Lo		consonant						U+091A: DEVANAGARI LETTER CA	✓
छ	C	t͡ʃʰ	ə	cʰ	ch	:	Lo		consonant						U+091B: DEVANAGARI LETTER CHA	✓
द	d¶	d	ə	d	d	o	Lo		consonant						U+0926: DEVANAGARI LETTER DA	✓
ड	d	ɖ	ə	ɖ	ḍ	[	Lo		consonant						U+0921: DEVANAGARI LETTER DDA	✓
ध	D¶	dʱ	ə	dʱ	dh	O	Lo		consonant						U+0927: DEVANAGARI LETTER DHA	✓
ढ	D	ɖʱ	ə	ɖʱ	ḍh	{	Lo		consonant						U+0922: DEVANAGARI LETTER DDHA	✓
े	e¶	eː		ē	ē	s	Mn		vowel sign			ए			U+0947: DEVANAGARI VOWEL SIGN E	✓
ै	e¶	ɛː		ɛ̄	ai	w	Mn		vowel sign			ऐ			U+0948: DEVANAGARI VOWEL SIGN AI	✓
ए	E	eː		ẹ̄	ē	S	Lo		independent vowel		े				U+090F: DEVANAGARI LETTER E	✓
ऐ	E	ɛː		ɛ̣̄	ai	W	Lo		independent vowel		ै				U+0910: DEVANAGARI LETTER AI	✓
फ़	f	f	ə	pʱˑ	f		s		consonant with nukta						U+092B U+093C: DEVANAGARI LETTER PHA SIGN NUKTA	
\u095E	f	f	ə	f	f		Lo	d	precomposed consonant	decomposed sequence recommended					U+095E: DEVANAGARI LETTER FA	
ग	g	ɡ	ə	g	g	i	Lo		consonant						U+0917: DEVANAGARI LETTER GA	✓
घ	G	ɡʱ	ə	gʱ	gh	I	Lo		consonant						U+0918: DEVANAGARI LETTER GHA	✓
ह	h	h	ə	h	h	u	Lo		consonant						U+0939: DEVANAGARI LETTER HA	✓
ः	h	ɦ		h̽	ḥ	-	Mc		voiceless breath					visarga	U+0903: DEVANAGARI SIGN VISARGA	✓
ि	i	ɪ		i	i	f	Mc		vowel sign			इ			U+093F: DEVANAGARI VOWEL SIGN I	✓
ी	i	iː		ī	ī	r	Mc		vowel sign			ई			U+0940: DEVANAGARI VOWEL SIGN II	✓
इ	I	ɪ		ị	i	F	Lo		independent vowel		ि				U+0907: DEVANAGARI LETTER I	✓
ई	I	iː		ị̄	ī	R	Lo		independent vowel		ी				U+0908: DEVANAGARI LETTER II	✓
ज	j	d͡ʒ	ə	ɟ	j	p	Lo		consonant						U+091C: DEVANAGARI LETTER JA	✓
झ	J	d͡ʒʱ	ə	ɟʱ	jh	P	Lo		consonant						U+091D: DEVANAGARI LETTER JHA	✓
क	k	k	ə	k	k	k	Lo		consonant						U+0915: DEVANAGARI LETTER KA	✓
ख	K	kʰ	ə	kʰ	kh	K	Lo		consonant						U+0916: DEVANAGARI LETTER KHA	✓
ल	l	l	ə	l	l	n	Lo		consonant						U+0932: DEVANAGARI LETTER LA	✓
ळ	l	ɭ ɭ̆	ə	ɭ	ḷ	N	Lo		consonant						U+0933: DEVANAGARI LETTER LLA	✓
म	m	m	ə	m	m	c	Lo		consonant						U+092E: DEVANAGARI LETTER MA	✓
ं	m	m n ŋ		ⁿͫ	ṁ	x	Mn		final nasal				अनुस्वार	ə.nʊs.ʋɑːɾ	U+0902: DEVANAGARI SIGN ANUSVARA	✓
न	n¶	n	ə	n	n	v	Lo		consonant						U+0928: DEVANAGARI LETTER NA	✓
ण	n	ɳ	ə	ɳ	ṇ	C	Lo		consonant						U+0923: DEVANAGARI LETTER NNA	✓
ञ	n	ɲ	ə	ɲ	ñ	}	Lo		consonant						U+091E: DEVANAGARI LETTER NYA	✓
ङ	N	ŋ	ə	ŋ	ṅ	U	Lo		consonant						U+0919: DEVANAGARI LETTER NGA	✓
ँ	N	̃		˜	̃	X	Mn		nasalisation				चन्द्रबिन्दु	candrabindu/anunāsika	U+0901: DEVANAGARI SIGN CANDRABINDU	✓
ो	o	oː		ō	ō	a	Mc		vowel sign			ओ			U+094B: DEVANAGARI VOWEL SIGN O	✓
ौ	o	ɔː		ɔ̄	au	q	Mc		vowel sign			औ			U+094C: DEVANAGARI VOWEL SIGN AU	✓
ॐ	o	oːm		@		x	Lo	i	symbol						U+0950: DEVANAGARI OM	✓
ओ	O	oː		ọ̄	ō	A	Lo		independent vowel		ो				U+0913: DEVANAGARI LETTER O	✓
औ	O	ɔː		ɔ̣̄	au	Q	Lo		independent vowel		ौ				U+0914: DEVANAGARI LETTER AU	✓
प	p	p	ə	p	p	h	Lo		consonant						U+092A: DEVANAGARI LETTER PA	✓
फ	P	pʰ	ə	pʰ	ph	H	Lo		consonant						U+092B: DEVANAGARI LETTER PHA	✓
क़	q	q	ə	kˑ	q		s		consonant with nukta						U+0915 U+093C: DEVANAGARI LETTER KA SIGN NUKTA	
\u0958	q	q	ə	q	q	k	Lo	d	precomposed consonant	decomposed sequence recommended					U+0958: DEVANAGARI LETTER QA	
र	r	r	ə	r	r	j	Lo		consonant						U+0930: DEVANAGARI LETTER RA	✓
ड़	r	ɽ	ə	ɖˑ	ṛ	[	s		consonant with nukta						U+0921 U+093C: DEVANAGARI LETTER DDA SIGN NUKTA	
ढ़	r	ɽʱ	ə	ɖʱˑ	ṛh		s		consonant with nukta						U+0922 U+093C: DEVANAGARI LETTER DDHA SIGN NUKTA	
\u095C	r	ɽ	ə	ɽ	ṛ		Lo	d	precomposed consonant	decomposed sequence recommended					U+095C: DEVANAGARI LETTER DDDHA	
\u095D	r	ɽʱ	ə	ɽʱ	ṛh		Lo	d	precomposed consonant	decomposed sequence recommended					U+095D: DEVANAGARI LETTER RHA	
ृ	R	ri		r̥	r̥	=	Mn		vowel sign			ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R	✓
ॄ	R	riː		r̥̄	r̥̄	=	Mn		vowel sign			ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR	✓
ऋ	R	ri		r̥̣	r̥	+	Lo		independent vowel		ृ				U+090B: DEVANAGARI LETTER VOCALIC R	✓
ॠ	R	riː		r̥̣̄	r̥̄		Lo		independent vowel		ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	✓
स	s¶	s	ə	s	s	m	Lo		consonant						U+0938: DEVANAGARI LETTER SA	✓
श	s	ʃ	ə	ʃ	ś	M	Lo		consonant						U+0936: DEVANAGARI LETTER SHA	✓
ष	s	ʃ	ə	ʂ	ṣ	,	Lo		consonant						U+0937: DEVANAGARI LETTER SSA	✓
त	t¶	t	ə	t	t	l	Lo		consonant						U+0924: DEVANAGARI LETTER TA	✓
ट	t	ʈ	ə	ʈ	ṭ	,	Lo		consonant						U+091F: DEVANAGARI LETTER TTA	✓
थ	T¶	tʰ	ə	tʰ	th	L	Lo		consonant						U+0925: DEVANAGARI LETTER THA	✓
ठ	T	ʈʰ	ə	ʈʰ	ṭh	"	Lo		consonant						U+0920: DEVANAGARI LETTER TTHA	✓
ु	u	ʊ		u	u	g	Mn		vowel sign			उ			U+0941: DEVANAGARI VOWEL SIGN U	✓
ू	u	uː		ū	ū	t	Mn		vowel sign			ऊ			U+0942: DEVANAGARI VOWEL SIGN UU	✓
उ	U	ʊ		ụ	u	G	Lo		independent vowel		ु				U+0909: DEVANAGARI LETTER U	✓
ऊ	U	uː		ụ̄	ū	T	Lo		independent vowel		ू				U+090A: DEVANAGARI LETTER UU	✓
व	v	w ʋ	ə	ʋ	v	b	Lo		consonant						U+0935: DEVANAGARI LETTER VA	✓
ख़	x	x	ə	kʱˑ	k͟h		s		consonant with nukta						U+0916 U+093C: DEVANAGARI LETTER KHA SIGN NUKTA	
\u0959	x	x	ə	x	k͟h		Lo	d	precomposed consonant	decomposed sequence recommended					U+0959: DEVANAGARI LETTER KHHA	
य	y	j	ə	y	y	/	Lo		consonant						U+092F: DEVANAGARI LETTER YA	✓
ग़	y	ɣ	ə	gˑ	ġ		s		consonant with nukta						U+0917 U+093C: DEVANAGARI LETTER GA SIGN NUKTA	
\u095A	y	ɣ	ə	ɣ	ġ	i	Lo	d	precomposed consonant	decomposed sequence recommended					U+095A: DEVANAGARI LETTER GHHA	
ज़	z	z	ə	jˑ	z		s		consonant with nukta						U+091C U+093C: DEVANAGARI LETTER JA SIGN NUKTA	
झ़	z	ʒ	ə	jʱˑ	zh		s		consonant with nukta						U+091D U+093C: DEVANAGARI LETTER JHA SIGN NUKTA	
श़	z	ʒ	ə	ʃˑ	ža		s		consonant with nukta						U+0936 U+093C: DEVANAGARI LETTER SHA, SIGN NUKTA	
\u095B	z	z	ə	z	z	p	Lo	d	precomposed consonant	decomposed sequence recommended					U+095B: DEVANAGARI LETTER ZA	
																
ज्ञ		ɡjə		ɟ͓ɲ	gya	%	s		consonant letter						U+091C U+094D U+091E: DEVANAGARI LETTER JA, SIGN VIRAMA, LETTER NYA	
त्र		t̪ɾə		t͓r	tra	^	s		consonant letter						U+0924 U+094D U+0930: DEVANAGARI LETTER TA, SIGN VIRAMA, LETTER RA	
क्ष		kʂə		k͓ʂ	kṣa	&	s		consonant letter						U+0915 U+094D U+0937: DEVANAGARI LETTER KA, SIGN VIRAMA, LETTER SSA	
																
ॅ	a	æ		æ		@	Mn	l	vowel-sign			ऍ			U+0945: DEVANAGARI VOWEL SIGN CANDRA E	✓
ॉ	o	ɔ		ɔ		\	Mc	l	vowel-sign			ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O	✓
																
ऍ	A	æ		æ̣			Lo	l	independent vowel		ॅ				U+090D: DEVANAGARI LETTER CANDRA E	✓
ऑ	O	ɔ		ɔ̣		|	Lo	l	independent vowel		ॉ				U+0911: DEVANAGARI LETTER CANDRA O	✓
																
अं		ə̃		ạⁿͫ	an		s		independent vowel						U+0905 U+0902: DEVANAGARI LETTER A, SIGN ANUSVARA	
अः		ə(ɦ)		ạh̽	aḥ		s		independent vowel						U+0905 U+0903: DEVANAGARI LETTER A, SIGN VISARGA	
अँ		ə̃		ạŋ̽	ã		s		independent vowel						U+0905 U+0901: DEVANAGARI LETTER A, SIGN CANDRABINDU	
																
ʼ				ʼ	ʼ		Lm		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
																
ॊ				–		§			for the keyboard						U+094A: DEVANAGARI VOWEL SIGN SHORT O	
ऒ				–		±			for the keyboard						U+0912: DEVANAGARI LETTER SHORT O	
ॆ				–		z			for the keyboard						U+0946 U+0946: DEVANAGARI VOWEL SIGN SHORT E	✓
ऎ				–		Z			for the keyboard						U+090E: DEVANAGARI LETTER SHORT E	✓
्र				–		#			for the keyboard						U+094D U+0930: DEVANAGARI SIGN VIRAMA, LETTER RA	✓
र्				–		$	s		for the keyboard						U+0930 U+094D: DEVANAGARI LETTER RA, SIGN VIRAMA	✓
श्र				–		*	s		for the keyboard						U+0936 U+094D U+0930: DEVANAGARI LETTER SHA, SIGN VIRAMA, LETTER RA	
ॢ				–		_			for the keyboard						U+0962: DEVANAGARI VOWEL SIGN VOCALIC L	
ऱ				–		J			for the keyboard						U+0931: DEVANAGARI LETTER RRA	
ऩ				–		V			for the keyboard						U+0929: DEVANAGARI LETTER NNNA	✓
ऴ				–		B			for the keyboard						U+0934: DEVANAGARI LETTER LLLA	✓
य़				–		?			for the keyboard						U+092F U+093C: DEVANAGARI LETTER YA, SIGN NUKTA	✓
ऌ				–		n			for the keyboard						U+090C: DEVANAGARI LETTER VOCALIC L	✓
																
`																
																
																
latinPanel = 'aː ā æ bʱ dʱ ɖ ḍ ɖʱ ḍh d͡ʒ d͡ʒʱ ə eː ē ɛː ɡʱ ġ ɦ ḥ ɪ iː ī kʰ k͟h ɭ̆ ḷ ṁ ɳ ṇ ɲ ñ ŋ ṅ oː ō ɔː pʰ ɽ ṛ ɽʱ ṛh riː r̥̄ ʃ ś ṣ tʰ ṭ ʈʰ ṭh t͡ʃ t͡ʃʰ ʊ uː ū ʋ ɣ'																
																
																
																
var cols = {																
key: 1,																
ipaLoc: 2,																
ipaPlus: 3,																
transLoc: 4,																
transcription: 5,																
kbd: 6,																
class: 7,																
status: 8,																
typeLoc: 9,																
statusLoc: 10,																
																
dvowel: 11,																
ivowel: 12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'ISO 15919']]																
}																
																
																