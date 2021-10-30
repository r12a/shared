var spreadsheet = `
ପ	Lo	p	p	p	p		plosive						U+0B2A: ORIYA LETTER PA	✓
ବ	Lo	b	b	b	b		plosive						U+0B2C: ORIYA LETTER BA	✓
ଫ	Lo	pʰ	pʰ	ph	p		plosive						U+0B2B: ORIYA LETTER PHA	✓
ଭ	Lo	bʰ	bʰ	bh	b		plosive						U+0B2D: ORIYA LETTER BHA	✓
ତ	Lo	t	t	t	t		plosive						U+0B24: ORIYA LETTER TA	✓
ଦ	Lo	d	d	d	d		plosive						U+0B26: ORIYA LETTER DA	✓
ଥ	Lo	tʰ	tʰ	th	t		plosive						U+0B25: ORIYA LETTER THA	✓
ଧ	Lo	dʰ	dʰ	dh	d		plosive						U+0B27: ORIYA LETTER DHA	✓
ଟ	Lo	ʈ	ʈ	ṭ	t		plosive						U+0B1F: ORIYA LETTER TTA	✓
ଡ	Lo	ɖ	ɖ	ḍ	d		plosive						U+0B21: ORIYA LETTER DDA	✓
ଠ	Lo	ʈʰ	ʈʰ	ṭh	t		plosive						U+0B20: ORIYA LETTER TTHA	✓
ଢ	Lo	ɖʰ	ɖʰ	ḍh	d		plosive						U+0B22: ORIYA LETTER DDHA	✓
କ	Lo	k	k	k	k		plosive						U+0B15: ORIYA LETTER KA	✓
ଗ	Lo	g	g	g	g		plosive						U+0B17: ORIYA LETTER GA	✓
ଖ	Lo	kʰ	kʰ	kh	k		plosive						U+0B16: ORIYA LETTER KHA	✓
ଘ	Lo	gʰ	gʰ	gh	g		plosive						U+0B18: ORIYA LETTER GHA	✓
														
ଚ	Lo	t͡ʃ	c	c	c		affricate						U+0B1A: ORIYA LETTER CA	✓
ଛ	Lo	t͡ʃʰ	cʰ	ch	c		affricate						U+0B1B: ORIYA LETTER CHA	✓
ଜ	Lo	d͡ʒ	j	j	j		affricate						U+0B1C: ORIYA LETTER JA	✓
ଝ	Lo	d͡ʒʰ	jʰ	jh	j		affricate						U+0B1D: ORIYA LETTER JHA	✓
ଯ	Lo	d͡ʒ	ʤ	ẏ	y		afficate					antaḥstha ja	U+0B2F: ORIYA LETTER YA	✓
														
ଵ	Lo	ʋ	v	v	v		fricative						U+0B35: ORIYA LETTER VA	✓
ସ	Lo	s	s	s	s		fricative				ଦନ୍ତ୍ୟ	dantya sa	U+0B38: ORIYA LETTER SA	✓
ଷ	Lo	s	ṣ	ṣ	s		fricative				ମୂର୍ଦ୍ଧନ୍ୟ	murddhanya sa	U+0B37: ORIYA LETTER SSA	✓
ଶ	Lo	s	ś	ś	s		fricative				ତାଲବ୍ୟ	talabya sa	U+0B36: ORIYA LETTER SHA	✓
ହ	Lo	ɦ	ɦ	h	h		fricative						U+0B39: ORIYA LETTER HA	✓
														
ମ	Lo	m	m	m	m		nasal						U+0B2E: ORIYA LETTER MA	✓
ନ	Lo	n	n	n	n		nasal						U+0B28: ORIYA LETTER NA	✓
ଞ	Lo	ɲ	ɲ	ñ	n		nasal						U+0B1E: ORIYA LETTER NYA	✓
ଣ	Lo	ɳ	ɳ	ṇ	n		nasal						U+0B23: ORIYA LETTER NNA	✓
ଙ	Lo	ŋ	ŋ	ṅ	N		nasal						U+0B19: ORIYA LETTER NGA	✓
														
ୱ	Lo	w	w	w	w		sonorant				ଅବର୍ଗ୍ୟ ବ	abargya ba	U+0B71: ORIYA LETTER WA	✓
ର	Lo	r	r	r	r		sonorant						U+0B30: ORIYA LETTER RA	✓
ଡ଼		ɽ	rˑ	ṛ	r		sonorant						U+0B21 U+0B3C: ORIYA LETTER DDA, SIGN NUKTA	
\u0B5C	Lo	ɽ	rˑ	ṛ	r		sonorant	decomposed is recommended					U+0B5C: ORIYA LETTER RRA	
ଢ଼		ɽʰ	rʰˑ	ṛh	r		sonorant						U+0B22 U+0B3C: ORIYA LETTER DDHA, SIGN NUKTA	
\u0B5D	Lo	ɽʰ	rʰˑ	ṛh	r		sonorant	decomposed is recommended					U+0B5D: ORIYA LETTER RHA	
ଲ	Lo	l	l	l	l		sonorant						U+0B32: ORIYA LETTER LA	✓
ଳ	Lo	ɭ	ɭ	ḷ	l		sonorant						U+0B33: ORIYA LETTER LLA	✓
ୟ	Lo	j	y	y	y		sonorant						U+0B5F: ORIYA LETTER YYA	✓
														
କ୍ଷ		kʰj	k͓ṣ	kṣ			alphabetic letter						U+0B15 U+0B4D U+0B37: ORIYA LETTER KA, SIGN VIRAMA, LETTER SSA	
୍ବ		w b	͓b	w b									U+0B4D U+0B2C: ORIYA SIGN VIRAMA​, LETTER BA	
														
														
ି	Mn​	i	i	i	i		vowel-sign			ଇ			U+0B3F: ORIYA VOWEL SIGN I​	✓
ୀ	Mc​	i	ī	ī	i		vowel-sign			ଈ			U+0B40: ORIYA VOWEL SIGN II​	✓
ୁ	Mn​	u	u	u	u		vowel-sign			ଉ			U+0B41 U+0020: ORIYA VOWEL SIGN U	✓
ୂ	Mn​	u	ū	ū	u		vowel-sign			ଊ			U+0B42: ORIYA VOWEL SIGN UU​	✓
େ	Mc​	e	e	e	e		vowel-sign			ଏ			U+0B47: ORIYA VOWEL SIGN E​	✓
ୋ	Mc​	o	o	o	o		vowel-sign			ଓ			U+0B4B: ORIYA VOWEL SIGN O​	✓
ା	Mc​	a	ā	ā	a		vowel-sign			ଆ			U+0B3E: ORIYA VOWEL SIGN AA​	✓
														
ୈ	Mc​	ɔi	ɔʲ	ai	a		vowel-sign			ଐ			U+0B48: ORIYA VOWEL SIGN AI​	✓
ୌ	Mc​	ɔu	ɔᵘ	au	a		vowel-sign			ଔ			U+0B4C: ORIYA VOWEL SIGN AU​	✓
														
ୖ	Mn​		xʲ		x		lengthening mark	decomposed text only					U+0B56: ORIYA AI LENGTH MARK​	✓
ୗ	Mc​		xᵘ		x		lengthening mark	decomposed text only					U+0B57: ORIYA AU LENGTH MARK​	✓
														
														
														
														
ଇ	Lo	i	ị	i	I		independent vowel		ି				U+0B07 U+0020: ORIYA LETTER I	✓
ଈ	Lo	i	ị̄	ī	I		independent vowel		ୀ				U+0B08: ORIYA LETTER II	✓
ଉ	Lo	u	ụ	u	U		independent vowel		ୁ				U+0B09: ORIYA LETTER U	✓
ଊ	Lo	u	ụ̄	ū	U		independent vowel		ୂ				U+0B0A: ORIYA LETTER UU	✓
ଏ	Lo	e	ẹ	e	E		independent vowel		େ				U+0B0F: ORIYA LETTER E	✓
ଓ	Lo	o	ọ	o	O		independent vowel		ୋ				U+0B13: ORIYA LETTER O	✓
ଅ	Lo	ɔ	ɔ̣	a	A		independent vowel						U+0B05: ORIYA LETTER A	✓
ଆ	Lo	a	ạ̄	ā	A		independent vowel		ା				U+0B06 U+0020: ORIYA LETTER AA	✓
														
ଐ	Lo	ɔi	ɔ̣ʲ	ai	A		independent vowel		ୈ				U+0B10: ORIYA LETTER AI	✓
ଔ	Lo	ɔu	ɔ̣ᵘ	au	A		independent vowel		ୌ				U+0B14: ORIYA LETTER AU	✓
														
														
ୃ	Mn​	ru	r̥	r̥	R		vocalic			ଋ			U+0B43: ORIYA VOWEL SIGN VOCALIC R​	✓
ୄ	Mn​	ru	r̥̄	r̥̄	R		vocalic	for Sanskrit		ୠ			U+0B44: ORIYA VOWEL SIGN VOCALIC RR​	✓
ୢ	Mn​	lu	l̥	l̥	L		vocalic	for Sanskrit		ଌ			U+0B62 U+0020: ORIYA VOWEL SIGN VOCALIC L	✓
ୣ	Mn​	lu	l̥̄	l̥̄	L		vocalic	for Sanskrit		ୡ			U+0B63: ORIYA VOWEL SIGN VOCALIC LL​	✓
														
ଋ	Lo	ru	r̥̣	r̥	R		vocalic	for Sanskrit	ୃ				U+0B0B U+0020: ORIYA LETTER VOCALIC R	✓
ୠ	Lo	ru	r̥̣̄	r̥̄	R		vocalic	for Sanskrit	ୄ				U+0B60: ORIYA LETTER VOCALIC RR	✓
ଌ	Lo	lu	l̥̣	l̥	L		vocalic	for Sanskrit	ୢ				U+0B0C: ORIYA LETTER VOCALIC L	✓
ୡ	Lo	lu	l̥̣̄	l̥̄	L		vocalic	for Sanskrit	ୣ				U+0B61: ORIYA LETTER VOCALIC LL	✓
														
														
ଂ	Mc​	m ŋ	m̽	ṃ	m		final nasal				ଅନୁସ୍ୱାର	anusvara	U+0B02: ORIYA SIGN ANUSVARA​	✓
ଃ	Mc​	h	h̽	ḥ	h		final aspiration/consonant doubler				ବିସର୍ଗ	visarga	U+0B03: ORIYA SIGN VISARGA​	✓
														
														
														
														
														
														
														
														
														
୕	Mn​		ˉ		[		overline	Kuvi					U+0B55: ORIYA SIGN OVERLINE​	✓
ଓଁ		om			[		om sign						U+0B13 U+0B01: LETTER O, SIGN CANDRABINDU	
														
														
ଁ	Mn​	̃	˜	̃	[		nasalisation				ଚନ୍ଦ୍ରବିନ୍ଦୁ	chandrabindu	U+0B01: ORIYA SIGN CANDRABINDU​	✓
														
														
୍	Mn​		͞		*		vowel-killer				ହଳନ୍ତ	halanta	U+0B4D: ORIYA SIGN VIRAMA​	✓
														
														
ଽ	Lo		′		]		elision; vowel prolongation				ଅବଗ୍ରହ	avagraha	U+0B3D: ORIYA SIGN AVAGRAHA	✓
														
														
଼	Mn​		ˑ		/		nukta					nukta	U+0B3C: ORIYA SIGN NUKTA​	✓
														
														
			ː		:		length mark							
														
														
୰	So		°		@		deceased sign; name of deity					iswara	U+0B70: ORIYA ISSHAR	✓
														
														
।	Po		|	.	|		section divider				ପୂର୍ଣ୍ଣଛେଦ	purṇṇacheda	U+0964: DEVANAGARI DANDA	✓
॥	Po		‖		|		section divider					double purṇṇacheda	U+0965: DEVANAGARI DOUBLE DANDA	✓
.	Po		.	.	.		full stop						U+002E: FULL STOP	
…	Po		⋯	⋯	.		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
,	Po		,	,	,		comma						U+002C: COMMA	
:	Po		:	:	:		colon						U+003A: COLON	
;	Po		;	;	;		semicolon						U+003B: SEMICOLON	
!	Po		!	!	!		exclamation mark						U+0021: EXCLAMATION MARK	
?	Po		?	?	?		question mark						U+003F: QUESTION MARK	
														
														
														
“	Pi		“	“	<		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
‘	Pi		‘	‘	<		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
”	Pf		”	”	>		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
’	Pf		’	’	>		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
														
														
														
(	Ps		(	(	(		parenthesis						U+0028: LEFT PARENTHESIS	
[	Ps		[	[	(		bracket						U+005B: LEFT SQUARE BRACKET	
)	Pe		)	)	)		parenthesis						U+0029: RIGHT PARENTHESIS	
]	Pe		]	]	)		bracket						U+005D: RIGHT SQUARE BRACKET	
														
														
-			-	-	-		hyphen						U+002D: HYPHEN-MINUS	
‑	Pd		‑	‑	-		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	Pd		–	–	-		en dash						U+2013: EN DASH	
—	Pd		—	—	-		em dash						U+2014: EM DASH	
														
														
ʼ	Lm		ʼ	ʼ			apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§	Po		§	§			section sign						U+00A7: SECTION SIGN	
†	Po		†	†			dagger						U+2020: DAGGER	
‡	Po		‡	‡			double dagger						U+2021: DOUBLE DAGGER	
′	Po		′	′			prime						U+2032: PRIME	
″	Po		″	″			double prime						U+2033: DOUBLE PRIME	
														
														
														
														
														
														
\u200C	Cf		ₓ		=		zwnj						U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf		₊		=		zwj						U+200D: ZERO WIDTH JOINER	
\u2067	Cf		ʳˡⁱ		=		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	Cf		ˡʳⁱ		=		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	Cf		ᶠˢⁱ		=		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	Cf		ᵖᵈⁱ		=		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	Cf		ʳˡᵉ		=		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	Cf		ˡʳᵉ		=		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	Cf		ᵖᵈᶠ		=		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	Cf		ʳˡᵐ		=		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	Cf		ˡʳᵐ		=		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F	Mn​		ᶜᵍʲ		=		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
\u061C	Cf		ᵃˡᵐ		=		arabic letter mark						U+061C: ARABIC LETTER MARK	
														
														
														
														
୦	Nd		0̣	0	±		digit				ଶୂନ୍ୟ	śūnya	U+0B66: ORIYA DIGIT ZERO	✓
୧	Nd		1̣	1	±		digit				ଏକ	eka 	U+0B67: ORIYA DIGIT ONE	✓
୨	Nd		2̣	2	±		digit				ଦୁଇ	dui	U+0B68: ORIYA DIGIT TWO	✓
୩	Nd		3̣	3	±		digit				ତିନି	tini	U+0B69: ORIYA DIGIT THREE	✓
୪	Nd		4̣	4	±		digit				ଚାରି	cāri	U+0B6A: ORIYA DIGIT FOUR	✓
୫	Nd		5̣	5	±		digit				ପାଞ୍ଚ	pāñca	U+0B6B: ORIYA DIGIT FIVE	✓
୬	Nd		6̣	6	±		digit				ଛଅ	cha'a 	U+0B6C: ORIYA DIGIT SIX	✓
୭	Nd		7̣	7	±		digit				ସାତ	sāta	U+0B6D: ORIYA DIGIT SEVEN	✓
୮	Nd		8̣	8	±		digit				ଆଠ	āṭha	U+0B6E: ORIYA DIGIT EIGHT	✓
୯	Nd		9̣	9	±		digit				ନଅ	na'a	U+0B6F: ORIYA DIGIT NINE	✓
														
														
୲	No		¼		#		quarter						U+0B72: ORIYA FRACTION ONE QUARTER	✓
୳	No		½		#		half						U+0B73 U+0020: ORIYA FRACTION ONE HALF, SPACE	✓
୴	No		¾		#		three-quarters						U+0B74: ORIYA FRACTION THREE QUARTERS	✓
୶	No		{1/8}				one eighth						U+0B76: ORIYA FRACTION ONE EIGHTH	✓
୵	No		{1/16}				one sixteenth						U+0B75: ORIYA FRACTION ONE SIXTEENTH	✓
୷	No		{3/16}				three sixteenths						U+0B77: ORIYA FRACTION THREE SIXTEENTHS	✓
														
														
														
%	Po		%	%	%		percentage mark						U+0025: PERCENT SIGN	





`



latinPanel = 'ā bʰ cʰ dʰ ɖ ḍ ɖʰ ḍh d͡ʒ d͡ʒʰ ʤ ẹ gʰ ɦ h̽ ḥ ī ị ị̄ jʰ kʰ ɭ ḷ l̥ l̥̄ l̥̣ l̥̣̄ m̽ ṃ ɲ ñ ɳ ṇ ṅ ɔ ô ɔʲ ɔᵘ ọ ɔ̣ ɔ̣ʲ ɔ̣ᵘ pʰ ɽ ṛ ɽʰ r̥ r̥̄ r̥̣ r̥̣̄ ṣ ś tʰ ʈ ṭ ʈʰ ṭh t͡ʃ t͡ʃʰ ū ụ ụ̄ ẏ'



var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc": 3,
"transcription": 4,
"key":5,
"kbd": 6,
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

"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 14,

"othertranscriptions": [[4, 'ALA LC']]
}
