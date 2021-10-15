var spreadsheet = `
													
ପ	Lo	p	p	p	p	ɔ	plosive					U+0B2A: ORIYA LETTER PA	oriya
ବ	Lo	b	b	b	b	bʰ	plosive					U+0B2C: ORIYA LETTER BA	oriya
ଫ	Lo	pʰ	pʰ	ph	p	pʰ	plosive					U+0B2B: ORIYA LETTER PHA	oriya
ଭ	Lo	bʰ	bʰ	bh	b		plosive					U+0B2D: ORIYA LETTER BHA	oriya
ତ	Lo	t	t	t	t		plosive					U+0B24: ORIYA LETTER TA	oriya
ଦ	Lo	d	d	d	d		plosive					U+0B26: ORIYA LETTER DA	oriya
ଥ	Lo	tʰ	tʰ	th	t	tʰ	plosive					U+0B25: ORIYA LETTER THA	oriya
ଧ	Lo	dʰ	dʰ	dh	d	dʰ	plosive					U+0B27: ORIYA LETTER DHA	oriya
ଟ	Lo	ʈ	ʈ	ṭ	t	ʈ ṭ	plosive					U+0B1F: ORIYA LETTER TTA	oriya
ଡ	Lo	ɖ	ɖ	ḍ	d	ɖ ḍ	plosive					U+0B21: ORIYA LETTER DDA	oriya
ଠ	Lo	ʈʰ	ʈʰ	ṭh	t	ʈʰ ṭh	plosive					U+0B20: ORIYA LETTER TTHA	oriya
ଢ	Lo	ɖʰ	ɖʰ	ḍh	d	ɖʰ ḍh	plosive					U+0B22: ORIYA LETTER DDHA	oriya
କ	Lo	k	k	k	k		plosive					U+0B15: ORIYA LETTER KA	oriya
ଗ	Lo	g	g	g	g		plosive					U+0B17: ORIYA LETTER GA	oriya
ଖ	Lo	kʰ	kʰ	kh	k	kʰ	plosive					U+0B16: ORIYA LETTER KHA	oriya
ଘ	Lo	gʰ	gʰ	gh	g	gʰ	plosive					U+0B18: ORIYA LETTER GHA	oriya
													
ଚ	Lo	t͡ʃ	c	c	c	t͡ʃ	affricate					U+0B1A: ORIYA LETTER CA	oriya
ଛ	Lo	t͡ʃʰ	cʰ	ch	c	t͡ʃʰ cʰ	affricate					U+0B1B: ORIYA LETTER CHA	oriya
ଜ	Lo	d͡ʒ	j	j	j	d͡ʒ	affricate					U+0B1C: ORIYA LETTER JA	oriya
ଝ	Lo	d͡ʒʰ	jʰ	jh	j	d͡ʒʰ jʰ	affricate					U+0B1D: ORIYA LETTER JHA	oriya
ଯ	Lo	d͡ʒ	ʤ	ẏ	y	ʤ ẏ	afficate			antaḥstha ja		U+0B2F: ORIYA LETTER YA	oriya
													
ଵ	Lo	v	v	v	v		fricative					U+0B35: ORIYA LETTER VA	oriya
ସ	Lo	s	s	s	s		fricative			dantya sa	ଦନ୍ତ୍ୟ	U+0B38: ORIYA LETTER SA	oriya
ଷ	Lo	s	ṣ	ṣ	s	ṣ	fricative			murddhanya sa	ମୂର୍ଦ୍ଧନ୍ୟ	U+0B37: ORIYA LETTER SSA	oriya
ଶ	Lo	s	ś	ś	s	ś	fricative			talabya sa	ତାଲବ୍ୟ	U+0B36: ORIYA LETTER SHA	oriya
ହ	Lo	ɦ	ɦ	h	h	ɦ	fricative					U+0B39: ORIYA LETTER HA	oriya
													
ମ	Lo	m	m	m	m		nasal					U+0B2E: ORIYA LETTER MA	oriya
ନ	Lo	n	n	n	n		nasal					U+0B28: ORIYA LETTER NA	oriya
ଞ	Lo	ɲ	ɲ	ñ	n	ɲ ñ	nasal					U+0B1E: ORIYA LETTER NYA	oriya
ଣ	Lo	ɳ	ɳ	ṇ	n	ɳ ṇ	nasal					U+0B23: ORIYA LETTER NNA	oriya
ଙ	Lo	ŋ	ŋ	ṅ	N	ṅ	nasal					U+0B19: ORIYA LETTER NGA	oriya
													
ୱ	Lo	w	w	w	w		liquid			abargya ba	ଅବର୍ଗ୍ୟ ବ	U+0B71: ORIYA LETTER WA	oriya
ର	Lo	r	r	r	r		liquid					U+0B30: ORIYA LETTER RA	oriya
ଡ଼		ɽ	rˑ	ṛ	r	ɽ ṛ	liquid					U+0B21 U+0B3C: ORIYA LETTER DDA, SIGN NUKTA	
\u0B5C	Lo	ɽ	rˑ	ṛ	r		liquid					U+0B5C: ORIYA LETTER RRA	oriya
ଢ଼		ɽʰ	rʰˑ	ṛh	r	ɽʰ	liquid					U+0B22 U+0B3C: ORIYA LETTER DDHA, SIGN NUKTA	
\u0B5D	Lo	ɽʰ	rʰˑ	ṛh	r		liquid					U+0B5D: ORIYA LETTER RHA	oriya
ଲ	Lo	l	l	l	l		liquid					U+0B32: ORIYA LETTER LA	oriya
ଳ	Lo	ɭ	ɭ	ḷ	l	ɭ ḷ	liquid					U+0B33: ORIYA LETTER LLA	oriya
ୟ	Lo	j	y	y	y		liquid					U+0B5F: ORIYA LETTER YYA	oriya
													
କ୍ଷ		kʰj	k͞ṣ	kṣ								U+0B15 U+0B4D U+0B37: ORIYA LETTER KA, SIGN VIRAMA, LETTER SSA	
୍ବ		w b	͞b	w b								U+0B4D U+0B2C: ORIYA SIGN VIRAMA​, LETTER BA	
													
													
ି	Mn​	i	i	i	i	ô	vowel-sign					U+0B3F: ORIYA VOWEL SIGN I​	oriya
ୀ	Mc​	i	ī	ī	i	ī	vowel-sign					U+0B40: ORIYA VOWEL SIGN II​	oriya
ୁ	Mn​	u	u	u	u		vowel-sign					U+0B41 U+0020: ORIYA VOWEL SIGN U	oriya
ୂ	Mn​	u	ū	ū	u	ū	vowel-sign					U+0B42: ORIYA VOWEL SIGN UU​	oriya
େ	Mc​	e	e	e	e		vowel-sign					U+0B47: ORIYA VOWEL SIGN E​	oriya
ୋ	Mc​	o	o	o	o		vowel-sign					U+0B4B: ORIYA VOWEL SIGN O​	oriya
ା	Mc​	a	ā	ā	a	ā	vowel-sign					U+0B3E: ORIYA VOWEL SIGN AA​	oriya
													
ୈ	Mc​	ɔi	ɔʲ	ai	a	ɔʲ	vowel-sign					U+0B48: ORIYA VOWEL SIGN AI​	oriya
ୌ	Mc​	ɔu	ɔᵘ	au	a	ɔᵘ	vowel-sign					U+0B4C: ORIYA VOWEL SIGN AU​	oriya
													
ୖ	Mn​		xʲ		x		lengthening mark					U+0B56: ORIYA AI LENGTH MARK​	oriya
ୗ	Mc​		xᵘ		x		lengthening mark					U+0B57: ORIYA AU LENGTH MARK​	oriya
													
													
													
													
ଇ	Lo	i	ị	i	I	ị	independent vowel					U+0B07 U+0020: ORIYA LETTER I	oriya
ଈ	Lo	i	ị̄	ī	I	ị̄	independent vowel					U+0B08: ORIYA LETTER II	oriya
ଉ	Lo	u	ụ	u	U	ụ	independent vowel					U+0B09: ORIYA LETTER U	oriya
ଊ	Lo	u	ụ̄	ū	U	ụ̄	independent vowel					U+0B0A: ORIYA LETTER UU	oriya
ଏ	Lo	e	ẹ	e	E	ẹ	independent vowel					U+0B0F: ORIYA LETTER E	oriya
ଓ	Lo	o	ọ	o	O	ọ	independent vowel					U+0B13: ORIYA LETTER O	oriya
ଅ	Lo	ɔ	ɔ̣	a	A	ɔ̣	independent vowel					U+0B05: ORIYA LETTER A	oriya
ଆ	Lo	a	ạ̄	ā	A		independent vowel					U+0B06 U+0020: ORIYA LETTER AA	oriya
													
ଐ	Lo	ɔi	ɔ̣ʲ	ai	A	ɔ̣ʲ	independent vowel					U+0B10: ORIYA LETTER AI	oriya
ଔ	Lo	ɔu	ɔ̣ᵘ	au	A	ɔ̣ᵘ	independent vowel					U+0B14: ORIYA LETTER AU	oriya
													
													
ୃ	Mn​	ru	r̥	r̥	R	r̥	vocalic					U+0B43: ORIYA VOWEL SIGN VOCALIC R​	oriya
ୄ	Mn​	ru	r̥̄	r̥̄	R	r̥̄	vocalic	for Sanskrit				U+0B44: ORIYA VOWEL SIGN VOCALIC RR​	oriya
ୢ	Mn​	lu	l̥	l̥	L	l̥	vocalic	for Sanskrit				U+0B62 U+0020: ORIYA VOWEL SIGN VOCALIC L	oriya
ୣ	Mn​	lu	l̥̄	l̥̄	L	l̥̄	vocalic	for Sanskrit				U+0B63: ORIYA VOWEL SIGN VOCALIC LL​	oriya
													
ଋ	Lo	ru	r̥̣	r̥	R	r̥̣	vocalic					U+0B0B U+0020: ORIYA LETTER VOCALIC R	oriya
ୠ	Lo	ru	r̥̣̄	r̥̄	R	r̥̣̄	vocalic	for Sanskrit				U+0B60: ORIYA LETTER VOCALIC RR	oriya
ଌ	Lo	lu	l̥̣	l̥	L	l̥̣	vocalic	for Sanskrit				U+0B0C: ORIYA LETTER VOCALIC L	oriya
ୡ	Lo	lu	l̥̣̄	l̥̄	L	l̥̣̄	vocalic	for Sanskrit				U+0B61: ORIYA LETTER VOCALIC LL	oriya
													
													
ଂ	Mc​	m ŋ	m̽	ṃ	m	m̽ ṃ	final nasal			anusvara	ଅନୁସ୍ୱାର	U+0B02: ORIYA SIGN ANUSVARA​	oriya
ଃ	Mc​	h	h̽	ḥ	h	h̽ ḥ	final aspiration/consonant doubler			visarga	ବିସର୍ଗ	U+0B03: ORIYA SIGN VISARGA​	oriya
													
													
													
													
													
													
													
													
													
୕	Mn​		ˉ		[		overline	Kuvi				U+0B55: ORIYA SIGN OVERLINE​	oriya
ଓଁ		om			[		om sign					U+0B13 U+0B01: LETTER O, SIGN CANDRABINDU	
													
													
ଁ	Mn​	̃	˜	̃	[		nasalisation			chandrabindu	ଚନ୍ଦ୍ରବିନ୍ଦୁ	U+0B01: ORIYA SIGN CANDRABINDU​	oriya
													
													
୍	Mn​		͞		*		vowel-killer			halanta	ହଳନ୍ତ	U+0B4D: ORIYA SIGN VIRAMA​	oriya
													
													
ଽ	Lo		′		]		elision; vowel prolongation			avagraha	ଅବଗ୍ରହ	U+0B3D: ORIYA SIGN AVAGRAHA	oriya
													
													
଼	Mn​		ˑ		/		nukta			nukta		U+0B3C: ORIYA SIGN NUKTA​	oriya
													
													
			ː		:		length mark						
													
													
୰	So		°		@		deceased sign; name of deity			iswara		U+0B70: ORIYA ISSHAR	oriya
													
													
।	Po		|	.	|		section divider			purṇṇacheda	ପୂର୍ଣ୍ଣଛେଦ	U+0964: DEVANAGARI DANDA	
॥	Po		‖		|		section divider			double purṇṇacheda		U+0965: DEVANAGARI DOUBLE DANDA	
.	Po		.	.	.		full stop					U+002E: FULL STOP	
⋯	Sm		⋯	⋯	.		ellipsis					U+22EF: MIDLINE HORIZONTAL ELLIPSIS	
,	Po		,	,	,		comma					U+002C: COMMA	
:	Po		:	:	:		colon					U+003A: COLON	
;	Po		;	;	;		semicolon					U+003B: SEMICOLON	
!	Po		!	!	!		exclamation mark					U+0021: EXCLAMATION MARK	
?	Po		?	?	?		question mark					U+003F: QUESTION MARK	
													
													
													
“	Pi		“	“	<		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	
‘	Pi		‘	‘	<		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	
”	Pf		”	”	>		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	
’	Pf		’	’	>		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	
													
													
													
(	Ps		(	(	(		parenthesis					U+0028: LEFT PARENTHESIS	
[	Ps		[	[	(		bracket					U+005B: LEFT SQUARE BRACKET	
)	Pe		)	)	)		parenthesis					U+0029: RIGHT PARENTHESIS	
]	Pe		]	]	)		bracket					U+005D: RIGHT SQUARE BRACKET	
													
													
-			-	-	-		hyphen					:	
‑	Pd		‑	‑	-		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	
–	Pd		–	–	-		en dash					U+2013: EN DASH	
—	Pd		—	—	-		em dash					U+2014: EM DASH	
													
													
ʼ	Lm		ʼ	ʼ			apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE	
§	Po		§	§			section sign					U+00A7: SECTION SIGN	
†	Po		†	†			dagger					U+2020: DAGGER	
‡	Po		‡	‡			double dagger					U+2021: DOUBLE DAGGER	
′	Po		′	′			prime					U+2032: PRIME	
″	Po		″	″			double prime					U+2033: DOUBLE PRIME	
													
													
													
													
													
													
\u200C	Cf		ₓ		=		zwnj					U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf		₊		=		zwj					U+200D: ZERO WIDTH JOINER	
\u2067	Cf		ʳˡⁱ		=		rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	Cf		ˡʳⁱ		=		ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	Cf		ᶠˢⁱ		=		first-strong isolate					U+2068: FIRST STRONG ISOLATE	
\u2069	Cf		ᵖᵈⁱ		=		pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	
\u202B	Cf		ʳˡᵉ		=		rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	Cf		ˡʳᵉ		=		ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	Cf		ᵖᵈᶠ		=		pop direction					U+202C: POP DIRECTIONAL FORMATTING	
\u200F	Cf		ʳˡᵐ		=		rtl mark					U+200F: RIGHT-TO-LEFT MARK	
\u200E	Cf		ˡʳᵐ		=		ltr mark					U+200E: LEFT-TO-RIGHT MARK	
\u034F	Mn​		ᶜᵍʲ		=		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	
\u061C	Cf		ᵃˡᵐ		=		arabic letter mark					U+061C: ARABIC LETTER MARK	
													
													
													
													
୦	Nd		0̣	0	±		digit			śūnya	ଶୂନ୍ୟ	U+0B66: ORIYA DIGIT ZERO	
୧	Nd		1̣	1	±		digit			eka 	ଏକ	U+0B67: ORIYA DIGIT ONE	
୨	Nd		2̣	2	±		digit			dui	ଦୁଇ	U+0B68: ORIYA DIGIT TWO	
୩	Nd		3̣	3	±		digit			tini	ତିନି	U+0B69: ORIYA DIGIT THREE	
୪	Nd		4̣	4	±		digit			cāri	ଚାରି	U+0B6A: ORIYA DIGIT FOUR	
୫	Nd		5̣	5	±		digit			pāñca	ପାଞ୍ଚ	U+0B6B: ORIYA DIGIT FIVE	
୬	Nd		6̣	6	±		digit			cha'a 	ଛଅ	U+0B6C: ORIYA DIGIT SIX	
୭	Nd		7̣	7	±		digit			sāta	ସାତ	U+0B6D: ORIYA DIGIT SEVEN	
୮	Nd		8̣	8	±		digit			āṭha	ଆଠ	U+0B6E: ORIYA DIGIT EIGHT	
୯	Nd		9̣	9	±		digit			na'a	ନଅ	U+0B6F: ORIYA DIGIT NINE	
													
													
୲	No		¼		#		quarter					U+0B72: ORIYA FRACTION ONE QUARTER	
୳	No		½		#		half					U+0B73 U+0020: ORIYA FRACTION ONE HALF, SPACE	
୴	No		¾		#		three-quarters					U+0B74: ORIYA FRACTION THREE QUARTERS	
୶	No		{1/8}				one eighth					U+0B76: ORIYA FRACTION ONE EIGHTH	
୵	No		{1/16}				one sixteenth					U+0B75: ORIYA FRACTION ONE SIXTEENTH	
୷	No		{3/16}				three sixteenths					U+0B77: ORIYA FRACTION THREE SIXTEENTHS	
													
													
													
%	Po		%	%	%		percentage mark					U+0025: PERCENT SIGN	




`



latinPanel = 'ā bʰ cʰ dʰ ɖ ḍ ɖʰ ḍh d͡ʒ d͡ʒʰ ʤ ẹ gʰ ɦ h̽ ḥ ī ị ị̄ jʰ kʰ ɭ ḷ l̥ l̥̄ l̥̣ l̥̣̄ m̽ ṃ ɲ ñ ɳ ṇ ṅ ɔ ô ɔʲ ɔᵘ ọ ɔ̣ ɔ̣ʲ ɔ̣ᵘ pʰ ɽ ṛ ɽʰ r̥ r̥̄ r̥̣ r̥̣̄ ṣ ś tʰ ʈ ṭ ʈʰ ṭh t͡ʃ t͡ʃʰ ū ụ ụ̄ ẏ'



var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc": 3,
"transcription": 4,
"key":5,
"latin": 6,
"transckey": 0,
"typeLoc": 7,
"statusLoc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 10,
"nnameLoc": 0,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[4, 'ALA LC']]
}
