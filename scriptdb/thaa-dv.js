var spreadsheet = `
ހ	h	h		h	h	p	Lo		consonant		ހާ	haa	U+0780: THAANA LETTER HAA	✓
ށ	s	ʂ		sh	ʂ	,	Lo		consonant		ށަވިޔަނަ	shaviyana	U+0781: THAANA LETTER SHAVIYANI	✓
ނ	n	n		n	n	k	Lo		consonant		ނޫނު	noonu	U+0782: THAANA LETTER NOONU	✓
ރ	r	r		r	r	u	Lo		consonant		ރާ	raa	U+0783: THAANA LETTER RAA	✓
ބ	b	b		b	b	m	Lo		consonant		ބާ	baa	U+0784: THAANA LETTER BAA	✓
ޅ	l	ɭ		lh	ɭ	b	Lo		consonant		ޅަވިޔަނި	lhaviyani	U+0785: THAANA LETTER LHAVIYANI	✓
ކ	k	k		k	k	l	Lo		consonant		ކާފު	kaafu	U+0786: THAANA LETTER KAAFU	✓
އ	{	∅			ʿ	j	Lo		vowel support		އަލިފު	alifu	U+0787: THAANA LETTER ALIFU	✓
ވ	v	v		v	v	h	Lo		consonant		ވާވު	vaavu	U+0788: THAANA LETTER VAAVU	✓
މ	m	m		m	m	i	Lo		consonant		މީމު	meemu	U+0789: THAANA LETTER MEEMU	✓
ފ	f	f		f	f	;	Lo		consonant		ފާފު	faafu	U+078A: THAANA LETTER FAAFU	✓
ދ	d	d		dh	d	n	Lo		consonant		ދާލު	dhaalu	U+078B: THAANA LETTER DHAALU	✓
ތ	t	t		th	t	o	Lo		consonant		ތާ	thaa	U+078C: THAANA LETTER THAA	✓
ލ	l	l		l	l	[	Lo		consonant		ލާމު	laamu	U+078D: THAANA LETTER LAAMU	✓
ގ	g	ɡ		g	g	y	Lo		consonant		ގާފު	gaafu	U+078E: THAANA LETTER GAAFU	✓
ޏ	n	ɲ		gn	ɲ	C	Lo		consonant		ޏަވިޔަނި	gnaviyani	U+078F: THAANA LETTER GNAVIYANI	✓
ސ	s	s		s	s	c	Lo		consonant		ސީނު	seenu	U+0790: THAANA LETTER SEENU	✓
ޑ	d	ɖ		d	ɖ	x	Lo		consonant		ޑަވިޔަނި	daviyani	U+0791: THAANA LETTER DAVIYANI	✓
ޒ	z	z		z	z	z	Lo		consonant		ޒަވިޔަނި	zaviyani	U+0792: THAANA LETTER ZAVIYANI	✓
ޓ	t	ʈ		t	ʈ	.	Lo		consonant		ޓަވިޔަނި	taviyani	U+0793: THAANA LETTER TAVIYANI	✓
ޔ	y	j		y	y	v	Lo		consonant		ޔަވިޔަނި	yaviyani	U+0794: THAANA LETTER YAA	✓
ޕ	p	p		p	p	X	Lo		consonant		ޕަވިޔަނި	paviyani	U+0795: THAANA LETTER PAVIYANI	✓
ޖ	j	ɟ		j	ɟ	Z	Lo		consonant		ޖަވިޔަނި	javiyani	U+0796: THAANA LETTER JAVIYANI	✓
ޗ	c	c		ch	c	V	Lo		consonant		ޗަވިޔަނި	chaviyani	U+0797: THAANA LETTER CHAVIYANI	✓
														
														
ޘ	Q	ث		ṯ	θ	K	Lo		arabic consonant		ޘާ	ttaa	U+0798: THAANA LETTER TTAA	✓
ޙ	H	ح		ḥ	ħ	O	Lo		arabic consonant		ޙާ	hhaa	U+0799: THAANA LETTER HHAA	✓
ޚ	X	خ		ḫ	x	L	Lo		arabic consonant		ޚާ	khaa	U+079A: THAANA LETTER KHAA	✓
ޛ	D	ذ		ḏ	ð	N	Lo		arabic consonant		ޛާލު	thaalu	U+079B: THAANA LETTER THAALU	✓
ޜ	Z	ʒ			ʒ	Y	Lo		arabic consonant		ޜާ	zaa	U+079C: THAANA LETTER ZAA	✓
ޝ	S	ش		š	ʃ	M	Lo		arabic consonant		ޝީނު	sheenu	U+079D: THAANA LETTER SHEENU	✓
ޞ	S	ص		ṣ	s̴	>	Lo		arabic consonant		ޞާޑު	saadhu	U+079E: THAANA LETTER SAADHU	✓
ޟ	D	ض		d̤	d̴	B	Lo		arabic consonant		ޟާޑު	daadhu	U+079F: THAANA LETTER DAADHU	✓
ޠ	T	ط		t̤	t̴	I	Lo		arabic consonant		ޓޮ	to	U+07A0: THAANA LETTER TO	✓
ޡ	Z	ظ			z̴	:	Lo		arabic consonant		ޡޮ	zo	U+07A1: THAANA LETTER ZO	✓
ޢ	{	ع		ʻ	ʕ	J	Lo		arabic consonant		ޢައިނު	aïnu	U+07A2: THAANA LETTER AINU	✓
ޣ	Y	غ		ǵ	ɣ	U	Lo		arabic consonant		ޣައިނު	ghaïnu	U+07A3: THAANA LETTER GHAINU	✓
ޤ	Q	ق		q	q	T	Lo		arabic consonant		ޤާފު	qaafu	U+07A4: THAANA LETTER QAAFU	✓
ޥ	W	و		w	w	H	Lo		arabic consonant		ޥާވު	waavu	U+07A5: THAANA LETTER WAAVU	✓
ޱ	N	ɳ		ṇ	ɳ		Lo		arabic consonant		ޱަވިޔަނަ	naviyani	U+07B1: THAANA LETTER NAA	✓
														
														
ަ	e	ə		a	ə	f	Mn​		vowel		އަބަ ފިލި	aba fili	U+07A6: THAANA ABAFILI​	✓
ާ	e	əː		aa	ə̄	e	Mn​		vowel		އާބާ ފިލި	aabaa fili	U+07A7: THAANA AABAAFILI​	✓
ި	i	i		i	i	a	Mn​		vowel		އިބި ފިލި	ibi fili	U+07A8: THAANA IBIFILI​	✓
ީ	i	iː		ee	ī	r	Mn​		vowel		އީބީ ފިލި	eebee fili	U+07A9: THAANA EEBEEFILI​	✓
ު	u	u		u	u	s	Mn​		vowel		އުބު ފިލި	ubu fili	U+07AA: THAANA UBUFILI​	✓
ޫ	u	uː		oo	ū	q	Mn​		vowel		އޫބޫ ފިލި	ooboo fili	U+07AB: THAANA OOBOOFILI​	✓
ެ	e	e		e	e	g	Mn​		vowel		އެބެެ ފިލި	ebe fili	U+07AC: THAANA EBEFILI​	✓
ޭ	e	eː		ey	ē	t	Mn​		vowel		އޭބޭ ފިލި	eybey fili	U+07AD: THAANA EYBEYFILI​	✓
ޮ	o	ɔ		oo	o	w	Mn​		vowel		އޮބޮ ފިލި	obo fili	U+07AE: THAANA OBOFILI​	✓
ޯ	o	ɔː		oa	ō	/	Mn​		vowel		އޯބޯ ފިލި	oaboa fili	U+07AF: THAANA OABOAFILI​	✓
ް	*	∅			͓	d	Mn​		vowel killer		ސުކުނ	sukun	U+07B0: THAANA SUKUN​	✓
														
														
،	,			,	,	F	Po		arabic comma				U+060C: ARABIC COMMA	
؛	;			;	;	"	Po		arabic semicolon				U+061B: ARABIC SEMICOLON	
														
														
														
/					–	E	Po						U+002F: SOLIDUS	
:					–	R	Po						U+003A: COLON	
<					–	A	Sm						U+003C: LESS-THAN SIGN	
>					–	S	Sm						U+003E: GREATER-THAN SIGN	
.					–	D	Po						U+002E: FULL STOP	
,					–	d	Po						U+002C: COMMA	
"					–	G	Po						U+0022: QUOTATION MARK	
اللّٰه					–	'							U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LETTER LAM, LETTER LAM, SHADDA, LETTER SUPERSCRIPT ALEF, LETTER HEH	
;					–	'	Po						U+003B: SEMICOLON	
\					–	<	Po						U+005C: REVERSE SOLIDUS	
؟					–	|	Po						U+061F: ARABIC QUESTION MARK	
														
														
.	.			.	.		Po		full stop				U+002E: FULL STOP	
,	,			,	,		Po		comma				U+002C: COMMA	
⹁	,			⹁	⹁		Po		comma				U+2E41: REVERSED COMMA	
:	:			:	:		Po		colon				U+003A: COLON	
;	;			;	;		Po		semicolon				U+003B: SEMICOLON	
!	!			!	!		Po		exclamation mark				U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark				U+003F: QUESTION MARK	
														
(	(			(	(		Ps		parenthesis				U+0028: LEFT PARENTHESIS	
[	(			[	[		Pe		bracket				U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Ps		parenthesis				U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe		bracket				U+005D: RIGHT SQUARE BRACKET	




`


latinPanel = 'ɖ ḏ d̤ ə əː eː ǵ ḥ ḫ iː ɟ ɲ ṇ ∅ ɔ ɔː ʂ š ṣ ṯ t̤ uː ʻ ʒ'



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

"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 14,

"othertranscriptions": [[4, 'Maldivian Latin']]
}

