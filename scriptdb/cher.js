var spreadsheet = `
-	Pd	-			-	-			hyphen				U+2010: HYPHEN	
‑	Pd	-			‑	‑			non-breaking hyphen				U+2011: NON-BREAKING HYPHEN	
–	Pd	-			–	–			en dash				U+2013: EN DASH	
—	Pd	-			—	—			em dash				U+2014: EM DASH	
,	Po	,			,	,			comma				U+002C: COMMA	
;	Po	;			;	;			semicolon				U+003B: SEMICOLON	
:	Po	:			:	:			colon				U+003A: COLON	
!	Po	!			!	!			exclamation mark				U+0021: EXCLAMATION MARK	
?	Po	?			?	?			question mark				U+003F: QUESTION MARK	
.	Po	.			.	.			full stop				U+002E: FULL STOP	
…	Po	.			…	…			ellipsis				U+2026: HORIZONTAL ELLIPSIS	
(	Ps	(			(	(			parenthesis				U+0028: LEFT PARENTHESIS	
[	Pe	(			[	[			bracket				U+005B: LEFT SQUARE BRACKET	
)	Ps	)			)	)			parenthesis				U+0029: RIGHT PARENTHESIS	
]	Pe	)			]	]			bracket				U+005D: RIGHT SQUARE BRACKET	
̰	Mn​	[	̃		˜	̃		i	nasalisation				U+0330: COMBINING TILDE BELOW​	
̣	Mn​	[			ˈ			i	consonant shift				U+0323: COMBINING DOT BELOW​	
̱	Mn​	*			͞			i	vowel-killer				U+0331: COMBINING MACRON BELOW​	
̤	Mn​	\			˟			i	consonant shift + vowel killer				U+0324: COMBINING DIAERESIS BELOW​	
%	Po	%			%				percentage mark				U+0025: PERCENT SIGN	
‰	Po	%			‰				per mille mark				U+2030: PER MILLE SIGN	
̋	Mn​	^	˥		˝	̋			super high tone mark	i			U+030B: COMBINING DOUBLE ACUTE ACCENT​	
́	Mn​	^	˦		ˊ	́			high tone mark	i			U+0301: COMBINING ACUTE ACCENT​	
̂	Mn​	^	˦˨		ˆ	̂			falling tone mark	i			U+0302: COMBINING CIRCUMFLEX ACCENT​	
̄	Mn​	^	˧		ˉ	̄			mid tone mark	i			U+0304: COMBINING MACRON​	
̀	Mn​	^	˨		ˋ	̀			low tone mark	i			U+0300: COMBINING GRAVE ACCENT​	
̌	Mn​	^	˨˦		ˇ	̌			rising tone mark	i			U+030C: COMBINING CARON​	
“	Pi	<			 “	“			quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
‘	Pi	<			‘	‘			quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
”	Pf	>			”	”			quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
’	Pf	>			’	’			quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
Ꭰ	Lu	a	a ʔa		A	a	A		syllable		ꭰ		U+13A0: CHEROKEE LETTER A	cherokee
ꭰ	Ll	A	a ʔa		a	A	a		syllable			Ꭰ	U+AB70: CHEROKEE SMALL LETTER A	cherokee
Ꮣ	Lu	d	ta	ː ʔ h	Dᵃ	da	C		syllable		ꮣ		U+13D3: CHEROKEE LETTER DA	cherokee
Ꮧ	Lu	d	ti	ː ʔ h	Dⁱ	di	D		syllable		ꮧ		U+13D7: CHEROKEE LETTER DI	cherokee
Ꮪ	Lu	d	tu tʰu	ː ʔ h	Dᵘ	du	J		syllable		ꮪ		U+13DA: CHEROKEE LETTER DU	cherokee
Ꮥ	Lu	d	te	ː ʔ h	Dᵉ	de	{		syllable		ꮥ		U+13D5: CHEROKEE LETTER DE	cherokee
Ꮩ	Lu	d	to tʰo	ː ʔ h	Dᵒ	do	$		syllable		ꮩ		U+13D9: CHEROKEE LETTER DO	cherokee
Ꮫ	Lu	d	tə̃ tʰə̃	ː ʔ h	Dᵛ	dv	R		syllable		ꮫ		U+13DB: CHEROKEE LETTER DV	cherokee
ꮣ	Ll	D	ta	ː ʔ h	dᵃ	Da	c		syllable			Ꮣ	U+ABA3: CHEROKEE SMALL LETTER DA	cherokee
ꮧ	Ll	D	ti	ː ʔ h	dⁱ	Di	d		syllable			Ꮧ	U+ABA7: CHEROKEE SMALL LETTER DI	cherokee
ꮪ	Ll	D	tu tʰu	ː ʔ h	dᵘ	Du	j		syllable			Ꮪ	U+ABAA: CHEROKEE SMALL LETTER DU	cherokee
ꮥ	Ll	D	te	ː ʔ h	dᵉ	De	[		syllable			Ꮥ	U+ABA5: CHEROKEE SMALL LETTER DE	cherokee
ꮩ	Ll	D	to tʰo	ː ʔ h	dᵒ	Do	4		syllable			Ꮩ	U+ABA9: CHEROKEE SMALL LETTER DO	cherokee
ꮫ	Ll	D	tə̃ tʰə̃	ː ʔ h	dᵛ	Dv	r		syllable			Ꮫ	U+ABAB: CHEROKEE SMALL LETTER DV	cherokee
Ꮬ	Lu	d	tˡa	ː ʔ h	Dˡᵃ	dla	^		syllable		ꮬ		U+13DC: CHEROKEE LETTER DLA	cherokee
ꮬ	Ll	D	tˡa	ː ʔ h	dˡᵃ	Dla	6		syllable			Ꮬ	U+ABAC: CHEROKEE SMALL LETTER DLA	cherokee
Ꭱ	Lu	e	e ʔe		E	e	E		syllable		ꭱ		U+13A1: CHEROKEE LETTER E	cherokee
ꭱ	Ll	E	e ʔe		e	E	e		syllable			Ꭱ	U+AB71: CHEROKEE SMALL LETTER E	cherokee
Ꭶ	Lu	g	ka	ː ʔ h	Gᵃ	ga	G		syllable		ꭶ		U+13A6: CHEROKEE LETTER GA	cherokee
Ꭹ	Lu	g	ki kʰi	ː ʔ h	Gⁱ	gi	F		syllable		ꭹ		U+13A9: CHEROKEE LETTER GI	cherokee
Ꭻ	Lu	g	ku kʰu	ː ʔ h	Gᵘ	gu	J		syllable		ꭻ		U+13AB: CHEROKEE LETTER GU	cherokee
Ꭸ	Lu	g	ke kʰe	ː ʔ h	Gᵉ	ge	B		syllable		ꭸ		U+13A8: CHEROKEE LETTER GE	cherokee
Ꭺ	Lu	g	ko kʰo	ː ʔ h	Gᵒ	go	Q		syllable		ꭺ		U+13AA: CHEROKEE LETTER GO	cherokee
Ꭼ	Lu	g	kə̃ kʰə̃	ː ʔ h	Gᵛ	gv	Z		syllable		ꭼ		U+13AC: CHEROKEE LETTER GV	cherokee
ꭶ	Ll	G	ka	ː ʔ h	gᵃ	Ga	g		syllable			Ꭶ	U+AB76: CHEROKEE SMALL LETTER GA	cherokee
ꭹ	Ll	G	ki kʰi	ː ʔ h	gⁱ	Gi	f		syllable			Ꭹ	U+AB79: CHEROKEE SMALL LETTER GI	cherokee
ꭻ	Ll	G	ku kʰu	ː ʔ h	gᵘ	Gu	j		syllable			Ꭻ	U+AB7B: CHEROKEE SMALL LETTER GU	cherokee
ꭸ	Ll	G	ke kʰe	ː ʔ h	gᵉ	Ge	b		syllable			Ꭸ	U+AB78: CHEROKEE SMALL LETTER GE	cherokee
ꭺ	Ll	G	ko kʰo	ː ʔ h	gᵒ	Go	q		syllable			Ꭺ	U+AB7A: CHEROKEE SMALL LETTER GO	cherokee
ꭼ	Ll	G	kə̃ kʰə̃	ː ʔ h	gᵛ	Gv	z		syllable			Ꭼ	U+AB7C: CHEROKEE SMALL LETTER GV	cherokee
Ꭽ	Lu	h	ha		Hᵃ	ha	U		syllable		ꭽ		U+13AD: CHEROKEE LETTER HA	cherokee
Ꭿ	Lu	h	hi		Hⁱ	hi	H		syllable		ꭿ		U+13AF: CHEROKEE LETTER HI	cherokee
Ꮁ	Lu	h	hu		Hᵘ	hu	!		syllable		ꮁ		U+13B1: CHEROKEE LETTER HU	cherokee
Ꭾ	Lu	h	he		Hᵉ	he	L		syllable		ꭾ		U+13AE: CHEROKEE LETTER HE	cherokee
Ꮀ	Lu	h	ho		Hᵒ	ho	$		syllable		ꮀ		U+13B0: CHEROKEE LETTER HO	cherokee
Ꮂ	Lu	h	hə̃		Hᵛ	hv	H		syllable		ꮂ		U+13B2: CHEROKEE LETTER HV	cherokee
ꭽ	Ll	H	ha		hᵃ	Ha	u		syllable			Ꭽ	U+AB7D: CHEROKEE SMALL LETTER HA	cherokee
ꭿ	Ll	H	hi		hⁱ	Hi	h		syllable			Ꭿ	U+AB7F: CHEROKEE SMALL LETTER HI	cherokee
ꮁ	Ll	H	hu		hᵘ	Hu	1		syllable			Ꮁ	U+AB81: CHEROKEE SMALL LETTER HU	cherokee
ꭾ	Ll	H	he		hᵉ	He	l		syllable			Ꭾ	U+AB7E: CHEROKEE SMALL LETTER HE	cherokee
ꮀ	Ll	H	ho		hᵒ	Ho	4		syllable			Ꮀ	U+AB80: CHEROKEE SMALL LETTER HO	cherokee
ꮂ	Ll	H	hə̃		hᵛ	Hv	h		syllable			Ꮂ	U+AB82: CHEROKEE SMALL LETTER HV	cherokee
Ꭲ	Lu	i	i ʔi		I	i	I		syllable		ꭲ		U+13A2: CHEROKEE LETTER I	cherokee
ꭲ	Ll	I	i ʔi		i	I	i		syllable			Ꭲ	U+AB72: CHEROKEE SMALL LETTER I	cherokee
Ꮳ	Lu	j	t͡sa t͡ʒa t͡ʰʃa	ː ʔ h	Tˢᵃ	tsa	E		syllable		ꮳ		U+13E3: CHEROKEE LETTER TSA	cherokee
Ꮵ	Lu	j	t͡si t͡ʒi t͡ʰʃi	ː ʔ h	Tˢⁱ	tsi	G		syllable		ꮵ		U+13E5: CHEROKEE LETTER TSI	cherokee
Ꮷ	Lu	j	t͡su t͡ʒu t͡ʰʃu	ː ʔ h	Tˢᵘ	tsu	#		syllable		ꮷ		U+13E7: CHEROKEE LETTER TSU	cherokee
Ꮴ	Lu	j	t͡se t͡ʒe t͡ʰʃe	ː ʔ h	Tˢᵉ	tse	}		syllable		ꮴ		U+13E4: CHEROKEE LETTER TSE	cherokee
Ꮶ	Lu	j	t͡so t͡ʒo t͡ʰʃo	ː ʔ h	Tˢᵒ	tso	%		syllable		ꮶ		U+13E6: CHEROKEE LETTER TSO	cherokee
Ꮸ	Lu	j	t͡sə̃ t͡ʒə̃ t͡ʰʃə̃	ː ʔ h	Tˢᵛ	tsv	:		syllable		ꮸ		U+13E8: CHEROKEE LETTER TSV	cherokee
ꮳ	Ll	J	t͡sa t͡ʒa t͡ʰʃa	ː ʔ h	tˢᵃ	Tsa	e		syllable			Ꮳ	U+ABB3: CHEROKEE SMALL LETTER TSA	cherokee
ꮵ	Ll	J	t͡si t͡ʒi t͡ʰʃi	ː ʔ h	tˢⁱ	Tsi	g		syllable			Ꮵ	U+ABB5: CHEROKEE SMALL LETTER TSI	cherokee
ꮷ	Ll	J	t͡su t͡ʒu t͡ʰʃu	ː ʔ h	tˢᵘ	Tsu	3		syllable			Ꮷ	U+ABB7: CHEROKEE SMALL LETTER TSU	cherokee
ꮴ	Ll	J	t͡se t͡ʒe t͡ʰʃe	ː ʔ h	tˢᵉ	Tse	]		syllable			Ꮴ	U+ABB4: CHEROKEE SMALL LETTER TSE	cherokee
ꮶ	Ll	J	t͡so t͡ʒo t͡ʰʃo	ː ʔ h	tˢᵒ	Tso	5		syllable			Ꮶ	U+ABB6: CHEROKEE SMALL LETTER TSO	cherokee
ꮸ	Ll	J	t͡sə̃ t͡ʒə̃ t͡ʰʃə̃	ː ʔ h	tˢᵛ	Tsv	;		syllable			Ꮸ	U+ABB8: CHEROKEE SMALL LETTER TSV	cherokee
Ꭷ	Lu	k	kʰa	ː ʔ h	Kᵃ	ka	K		syllable		ꭷ		U+13A7: CHEROKEE LETTER KA	cherokee
ꭷ	Ll	K	kʰa	ː ʔ h	kᵃ	Ka	k		syllable			Ꭷ	U+AB77: CHEROKEE SMALL LETTER KA	cherokee
Ꮃ	Lu	l	la ɬa	ː ʔ h	Lᵃ	la	W		syllable		ꮃ		U+13B3: CHEROKEE LETTER LA	cherokee
Ꮅ	Lu	l	li ɬi	ː ʔ h	Lⁱ	li	L		syllable		ꮅ		U+13B5: CHEROKEE LETTER LI	cherokee
Ꮇ	Lu	l	lu ɬu	ː ʔ h	Lᵘ	lu	M		syllable		ꮇ		U+13B7: CHEROKEE LETTER LU	cherokee
Ꮄ	Lu	l	le ɬe	ː ʔ h	Lᵉ	le	>		syllable		ꮄ		U+13B4: CHEROKEE LETTER LE	cherokee
Ꮆ	Lu	l	lo ɬo	ː ʔ h	Lᵒ	lo	}		syllable		ꮆ		U+13B6: CHEROKEE LETTER LO	cherokee
Ꮈ	Lu	l	lə̃ ɬə̃	ː ʔ h	Lᵛ	lv	K		syllable		ꮈ		U+13B8: CHEROKEE LETTER LV	cherokee
ꮃ	Ll	L	la ɬa	ː ʔ h	lᵃ	La	w		syllable			Ꮃ	U+AB83: CHEROKEE SMALL LETTER LA	cherokee
ꮅ	Ll	L	li ɬi	ː ʔ h	lⁱ	Li	l		syllable			Ꮅ	U+AB85: CHEROKEE SMALL LETTER LI	cherokee
ꮇ	Ll	L	lu ɬu	ː ʔ h	lᵘ	Lu	m		syllable			Ꮇ	U+AB87: CHEROKEE SMALL LETTER LU	cherokee
ꮄ	Ll	L	le ɬe	ː ʔ h	lᵉ	Le	.		syllable			Ꮄ	U+AB84: CHEROKEE SMALL LETTER LE	cherokee
ꮆ	Ll	L	lo ɬo	ː ʔ h	lᵒ	Lo	]		syllable			Ꮆ	U+AB86: CHEROKEE SMALL LETTER LO	cherokee
ꮈ	Ll	L	lə̃ ɬə̃	ː ʔ h	lᵛ	Lv	k		syllable			Ꮈ	U+AB88: CHEROKEE SMALL LETTER LV	cherokee
Ꮉ	Lu	m	ma		Mᵃ	ma	%		syllable		ꮉ		U+13B9: CHEROKEE LETTER MA	cherokee
Ꮋ	Lu	m	mi		Mⁱ	mi	N		syllable		ꮋ		U+13BB: CHEROKEE LETTER MI	cherokee
Ꮍ	Lu	m	mu		Mᵘ	mu	+	r	syllable		ꮍ		U+13BD: CHEROKEE LETTER MU	cherokee
Ꮊ	Lu	m	me		Mᵉ	me	*		syllable		ꮊ		U+13BA: CHEROKEE LETTER ME	cherokee
Ꮌ	Lu	m	mo		Mᵒ	mo	_	r	syllable		ꮌ		U+13BC: CHEROKEE LETTER MO	cherokee
Ᏽ	Lu	m	mə̃		Mᵛ	mv		a	syllable	archaic	ᏽ		U+13F5: CHEROKEE LETTER MV	cherokee
ꮉ	Ll	M	ma		mᵃ	Ma	5		syllable			Ꮉ	U+AB89: CHEROKEE SMALL LETTER MA	cherokee
ꮋ	Ll	M	mi		mⁱ	Mi	n		syllable			Ꮋ	U+AB8B: CHEROKEE SMALL LETTER MI	cherokee
ꮍ	Ll	M	mu		mᵘ	Mu	=	r	syllable			Ꮍ	U+AB8D: CHEROKEE SMALL LETTER MU	cherokee
ꮊ	Ll	M	me		mᵉ	Me	8		syllable			Ꮊ	U+AB8A: CHEROKEE SMALL LETTER ME	cherokee
ꮌ	Ll	M	mo		mᵒ	Mo	-	r	syllable			Ꮌ	U+AB8C: CHEROKEE SMALL LETTER MO	cherokee
ᏽ	Ll	M	mə̃		mᵛ	Mv		a	syllable	archaic		Ᏽ	U+13FD: CHEROKEE SMALL LETTER MV	cherokee
Ꮎ	Lu	n	na	ː ʔ	Nᵃ	na	N		syllable		ꮎ		U+13BE: CHEROKEE LETTER NA	cherokee
Ꮒ	Lu	n	ni hn̥i	ː ʔ h	Nⁱ	ni	?		syllable		ꮒ		U+13C2: CHEROKEE LETTER NI	cherokee
Ꮔ	Lu	n	nu hn̥u	ː ʔ h	Nᵘ	nu	)		syllable		ꮔ		U+13C4: CHEROKEE LETTER NU	cherokee
Ꮑ	Lu	n	ne hn̥e	ː ʔ h	Nᵉ	ne	P		syllable		ꮑ		U+13C1: CHEROKEE LETTER NE	cherokee
Ꮓ	Lu	n	no hn̥o	ː ʔ h	Nᵒ	no	Z		syllable		ꮓ		U+13C3: CHEROKEE LETTER NO	cherokee
Ꮕ	Lu	n	nə̃ hn̥ə̃	ː ʔ h	Nᵛ	nv	M		syllable		ꮕ		U+13C5: CHEROKEE LETTER NV	cherokee
Ꮐ	Lu	n	nah		Nᵃh	nah		i	syllable		ꮐ		U+13C0: CHEROKEE LETTER NAH	cherokee
Ꮏ	Lu	n	hn̥a		Hⁿᵃ	hna	_		syllable		ꮏ		U+13BF: CHEROKEE LETTER HNA	cherokee
ꮎ	Ll	N	na	ː ʔ	nᵃ	Na	n		syllable			Ꮎ	U+AB8E: CHEROKEE SMALL LETTER NA	cherokee
ꮒ	Ll	N	ni hn̥i	ː ʔ h	nⁱ	Ni	/		syllable			Ꮒ	U+AB92: CHEROKEE SMALL LETTER NI	cherokee
ꮔ	Ll	N	nu hn̥u	ː ʔ h	nᵘ	Nu	0		syllable			Ꮔ	U+AB94: CHEROKEE SMALL LETTER NU	cherokee
ꮑ	Ll	N	ne hn̥e	ː ʔ h	nᵉ	Ne	p		syllable			Ꮑ	U+AB91: CHEROKEE SMALL LETTER NE	cherokee
ꮓ	Ll	N	no hn̥o	ː ʔ h	nᵒ	No	z		syllable			Ꮓ	U+AB93: CHEROKEE SMALL LETTER NO	cherokee
ꮕ	Ll	N	nə̃ hn̥ə̃	ː ʔ h	nᵛ	Nv	m		syllable			Ꮕ	U+AB95: CHEROKEE SMALL LETTER NV	cherokee
ꮐ	Ll	N	nah		nᵃh	Nah		i	syllable			Ꮐ	U+AB90: CHEROKEE SMALL LETTER NAH	cherokee
ꮏ	Ll	N	hn̥a		hⁿᵃ	Hna	-		syllable			Ꮏ	U+AB8F: CHEROKEE SMALL LETTER HNA	cherokee
Ꭳ	Lu	o	o ʔo		O	o	O		syllable		ꭳ		U+13A3: CHEROKEE LETTER O	cherokee
ꭳ	Ll	O	o ʔo		o	O	o		syllable			Ꭳ	U+AB73: CHEROKEE SMALL LETTER O	cherokee
Ꮖ	Lu	q	kʷa kʰw̥a	ː ʔ h	Qᵃ	qua	Q		syllable		ꮖ		U+13C6: CHEROKEE LETTER QUA	cherokee
Ꮘ	Lu	q	kʷi kʰw̥i	ː ʔ h	Qⁱ	qui	F		syllable		ꮘ		U+13C8: CHEROKEE LETTER QUI	cherokee
Ꮚ	Lu	q	kʷu kʰw̥u	ː ʔ h	Qᵘ	quu	>		syllable		ꮚ		U+13CA: CHEROKEE LETTER QUU	cherokee
Ꮗ	Lu	q	kʷe kʰw̥e	ː ʔ h	Qᵉ	que	@		syllable		ꮗ		U+13C7: CHEROKEE LETTER QUE	cherokee
Ꮙ	Lu	q	kʷo kʰw̥o	ː ʔ h	Qᵒ	quo	?		syllable		ꮙ		U+13C9: CHEROKEE LETTER QUO	cherokee
Ꮛ	Lu	q	kʷə̃ kʰw̥ə̃	ː ʔ h	Qᵛ	quv	&		syllable		ꮛ		U+13CB: CHEROKEE LETTER QUV	cherokee
ꮖ	Ll	Q	kʷa kʰw̥a	ː ʔ h	qᵃ	Qua	q		syllable			Ꮖ	U+AB96: CHEROKEE SMALL LETTER QUA	cherokee
ꮘ	Ll	Q	kʷi kʰw̥i	ː ʔ h	qⁱ	Qui	f		syllable			Ꮘ	U+AB98: CHEROKEE SMALL LETTER QUI	cherokee
ꮚ	Ll	Q	kʷu kʰw̥u	ː ʔ h	qᵘ	Quu	.		syllable			Ꮚ	U+AB9A: CHEROKEE SMALL LETTER QUU	cherokee
ꮗ	Ll	Q	kʷe kʰw̥e	ː ʔ h	qᵉ	Que	2		syllable			Ꮗ	U+AB97: CHEROKEE SMALL LETTER QUE	cherokee
ꮙ	Ll	Q	kʷo kʰw̥o	ː ʔ h	qᵒ	Quo	/		syllable			Ꮙ	U+AB99: CHEROKEE SMALL LETTER QUO	cherokee
ꮛ	Ll	Q	kʷə̃ kʰw̥ə̃	ː ʔ h	qᵛ	Quv	7		syllable			Ꮛ	U+AB9B: CHEROKEE SMALL LETTER QUV	cherokee
Ꮜ	Lu	s	sa		Sᵃ	sa	A		syllable		ꮜ		U+13CC: CHEROKEE LETTER SA	cherokee
Ꮟ	Lu	s	si		Sⁱ	si	R		syllable		ꮟ		U+13CF: CHEROKEE LETTER SI	cherokee
Ꮡ	Lu	s	su		Sᵘ	su	{		syllable		ꮡ		U+13D1: CHEROKEE LETTER SU	cherokee
Ꮞ	Lu	s	se		Sᵉ	se	S		syllable		ꮞ		U+13CE: CHEROKEE LETTER SE	cherokee
Ꮠ	Lu	s	so		Sᵒ	so	D		syllable		ꮠ		U+13D0: CHEROKEE LETTER SO	cherokee
Ꮢ	Lu	s	sə̃		Sᵛ	sv	(		syllable		ꮢ		U+13D2: CHEROKEE LETTER SV	cherokee
Ꮝ	Lu	s	s		S	s	S		syllable		ꮝ		U+13CD: CHEROKEE LETTER S	cherokee
ꮜ	Ll	S	sa		sᵃ	Sa	a		syllable			Ꮜ	U+AB9C: CHEROKEE SMALL LETTER SA	cherokee
ꮟ	Ll	S	si		sⁱ	Si	r		syllable			Ꮟ	U+AB9F: CHEROKEE SMALL LETTER SI	cherokee
ꮡ	Ll	S	su		sᵘ	Su	[		syllable			Ꮡ	U+ABA1: CHEROKEE SMALL LETTER SU	cherokee
ꮞ	Ll	S	se		sᵉ	Se	s		syllable			Ꮞ	U+AB9E: CHEROKEE SMALL LETTER SE	cherokee
ꮠ	Ll	S	so		sᵒ	So	d		syllable			Ꮠ	U+ABA0: CHEROKEE SMALL LETTER SO	cherokee
ꮢ	Ll	S	sə̃		sᵛ	Sv	9		syllable			Ꮢ	U+ABA2: CHEROKEE SMALL LETTER SV	cherokee
ꮝ	Ll	S	s		s	S	s		syllable			Ꮝ	U+AB9D: CHEROKEE SMALL LETTER S	cherokee
Ꮤ	Lu	t	tʰa	ː ʔ h	Tᵃ	ta	T		syllable		ꮤ		U+13D4: CHEROKEE LETTER TA	cherokee
Ꮨ	Lu	t	tʰi	ː ʔ h	Tⁱ	ti	T		syllable		ꮨ		U+13D8: CHEROKEE LETTER TI	cherokee
Ꮦ	Lu	t	tʰe	ː ʔ h	Tᵉ	te	*		syllable		ꮦ		U+13D6: CHEROKEE LETTER TE	cherokee
ꮤ	Ll	T	tʰa	ː ʔ h	tᵃ	Ta	t		syllable			Ꮤ	U+ABA4: CHEROKEE SMALL LETTER TA	cherokee
ꮨ	Ll	T	tʰi	ː ʔ h	tⁱ	Ti	t		syllable			Ꮨ	U+ABA8: CHEROKEE SMALL LETTER TI	cherokee
ꮦ	Ll	T	tʰe	ː ʔ h	tᵉ	Te	8		syllable			Ꮦ	U+ABA6: CHEROKEE SMALL LETTER TE	cherokee
Ꭴ	Lu	u	u ʔu		U	u	U		syllable		ꭴ		U+13A4: CHEROKEE LETTER U	cherokee
ꭴ	Ll	U	u ʔu		u	U	u		syllable			Ꭴ	U+AB74: CHEROKEE SMALL LETTER U	cherokee
Ꭵ	Lu	v	ə̃ ʔə̃		V	v	V		syllable		ꭵ		U+13A5: CHEROKEE LETTER V	cherokee
ꭵ	Ll	V	ə̃ ʔə̃		v	V	v		syllable			Ꭵ	U+AB75: CHEROKEE SMALL LETTER V	cherokee
Ꮹ	Lu	w	wa hwa	ː ʔ h	Wᵃ	wa	|		syllable		ꮹ		U+13E9: CHEROKEE LETTER WA	cherokee
Ꮻ	Lu	w	wi hwi	ː ʔ h	Wⁱ	wi	W		syllable		ꮻ		U+13EB: CHEROKEE LETTER WI	cherokee
Ꮽ	Lu	w	wu hwu	ː ʔ h	Wᵘ	wu	X		syllable		ꮽ		U+13ED: CHEROKEE LETTER WU	cherokee
Ꮺ	Lu	w	we hwe	ː ʔ h	Wᵉ	we	P		syllable		ꮺ		U+13EA: CHEROKEE LETTER WE	cherokee
Ꮼ	Lu	w	wo hwo	ː ʔ h	Wᵒ	wo	O		syllable		ꮼ		U+13EC: CHEROKEE LETTER WO	cherokee
Ꮾ	Lu	w	wə̃ hwə̃	ː ʔ h	Wᵛ	wv	|		syllable		ꮾ		U+13EE: CHEROKEE LETTER WV	cherokee
ꮹ	Ll	W	wa hwa	ː ʔ h	wᵃ	Wa	\		syllable			Ꮹ	U+ABB9: CHEROKEE SMALL LETTER WA	cherokee
ꮻ	Ll	W	wi hwi	ː ʔ h	wⁱ	Wi	w		syllable			Ꮻ	U+ABBB: CHEROKEE SMALL LETTER WI	cherokee
ꮽ	Ll	W	wu hwu	ː ʔ h	wᵘ	Wu	x		syllable			Ꮽ	U+ABBD: CHEROKEE SMALL LETTER WU	cherokee
ꮺ	Ll	W	we hwe	ː ʔ h	wᵉ	We	p		syllable			Ꮺ	U+ABBA: CHEROKEE SMALL LETTER WE	cherokee
ꮼ	Ll	w	wo hwo	ː ʔ h	wᵒ	Wo	o		syllable			Ꮼ	U+ABBC: CHEROKEE SMALL LETTER WO	cherokee
ꮾ	Ll	W	wə̃ hwə̃	ː ʔ h	wᵛ	Wv	\		syllable			Ꮾ	U+ABBE: CHEROKEE SMALL LETTER WV	cherokee
Ꮭ	Lu	x	tˡʰa	ː ʔ h	Tˡᵃ	tla	^		syllable		ꮭ		U+13DD: CHEROKEE LETTER TLA	cherokee
Ꮯ	Lu	x	tˡi tʰˡi	ː ʔ h	Tˡⁱ	tli	C		syllable		ꮯ		U+13DF: CHEROKEE LETTER TLI	cherokee
Ꮱ	Lu	x	tˡu tʰˡu	ː ʔ h	Tˡᵘ	tlu	&		syllable		ꮱ		U+13E1: CHEROKEE LETTER TLU	cherokee
Ꮮ	Lu	x	tˡe tʰˡe	ː ʔ h	Tˡᵉ	tle	V		syllable		ꮮ		U+13DE: CHEROKEE LETTER TLE	cherokee
Ꮰ	Lu	x	tˡo tʰˡo	ː ʔ h	Tˡᵒ	tlo	:		syllable		ꮰ		U+13E0: CHEROKEE LETTER TLO	cherokee
Ꮲ	Lu	x	tˡə̃ tʰˡə̃	ː ʔ h	Tˡᵛ	tlv	<		syllable		ꮲ		U+13E2: CHEROKEE LETTER TLV	cherokee
ꮭ	Ll	X	tˡʰa	ː ʔ h	tˡᵃ	Tla	6		syllable			Ꮭ	U+ABAD: CHEROKEE SMALL LETTER TLA	cherokee
ꮯ	Ll	X	tˡi tʰˡi	ː ʔ h	tˡⁱ	Tli	c		syllable			Ꮯ	U+ABAF: CHEROKEE SMALL LETTER TLI	cherokee
ꮱ	Ll	X	tˡu tʰˡu	ː ʔ h	tˡᵘ	Tlu	7		syllable			Ꮱ	U+ABB1: CHEROKEE SMALL LETTER TLU	cherokee
ꮮ	Ll	X	tˡe tʰˡe	ː ʔ h	tˡᵉ	Tle	v		syllable			Ꮮ	U+ABAE: CHEROKEE SMALL LETTER TLE	cherokee
ꮰ	Ll	X	tˡo tʰˡo	ː ʔ h	tˡᵒ	Tlo	;		syllable			Ꮰ	U+ABB0: CHEROKEE SMALL LETTER TLO	cherokee
ꮲ	Ll	X	tˡə̃ tʰˡə̃	ː ʔ h	tˡᵛ	Tlv	,		syllable			Ꮲ	U+ABB2: CHEROKEE SMALL LETTER TLV	cherokee
Ꮿ	Lu	y	ja hja	ː ʔ h	Yᵃ	ya	Y		syllable		ꮿ		U+13EF: CHEROKEE LETTER YA	cherokee
Ᏹ	Lu	y	ji hji	ː ʔ h	Yⁱ	yi	I		syllable		ᏹ		U+13F1: CHEROKEE LETTER YI	cherokee
Ᏻ	Lu	y	ju hju	ː ʔ h	Yᵘ	yu	+		syllable		ᏻ		U+13F3: CHEROKEE LETTER YU	cherokee
Ᏸ	Lu	y	je hje	ː ʔ h	Yᵉ	ye	B		syllable		ᏸ		U+13F0: CHEROKEE LETTER YE	cherokee
Ᏺ	Lu	y	jo hjo	ː ʔ h	Yᵒ	yo	Y		syllable		ᏺ		U+13F2: CHEROKEE LETTER YO	cherokee
Ᏼ	Lu	y	jə̃ hjə̃	ː ʔ h	Yᵛ	yv	X		syllable		ᏼ		U+13F4: CHEROKEE LETTER YV	cherokee
ꮿ	Ll	Y	ja hja	ː ʔ h	yᵃ	Ya	y		syllable			Ꮿ	U+ABBF: CHEROKEE SMALL LETTER YA	cherokee
ᏹ	Ll	Y	ji hji	ː ʔ h	yⁱ	Yi	i		syllable			Ᏹ	U+13F9: CHEROKEE SMALL LETTER YI	cherokee
ᏻ	Ll	Y	ju hju	ː ʔ h	yᵘ	Yu	=		syllable			Ᏻ	U+13FB: CHEROKEE SMALL LETTER YU	cherokee
ᏸ	Ll	Y	je hje	ː ʔ h	yᵉ	Ye	b		syllable			Ᏸ	U+13F8: CHEROKEE SMALL LETTER YE	cherokee
ᏺ	Ll	Y	jo hjo	ː ʔ h	yᵒ	Yo	y		syllable			Ᏺ	U+13FA: CHEROKEE SMALL LETTER YO	cherokee
ᏼ	Ll	Y	jə̃ hjə̃	ː ʔ h	yᵛ	Yv	x		syllable			Ᏼ	U+13FC: CHEROKEE SMALL LETTER YV	cherokee
														
														
														
														
ᏣᎳᎩ					–		!							
ꮳꮃꭹ					–		1							
ꭳꮟᏺ					–		2							
ᎣᏏᏲ					–		@							
ᏩᏙ					–		#							
ꮹꮩ					–		3							
														
														
														
ʼ	Lm				ʼ	ʼ			apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE	
§	Po				§	§			section sign				U+00A7: SECTION SIGN	
†	Po				†	†			dagger				U+2020: DAGGER	
‡	Po				‡	‡			double dagger				U+2021: DOUBLE DAGGER	
′	Po				′	′			prime				U+2032: PRIME	
″	Po				″	″			double prime				U+2033: DOUBLE PRIME	





`


latinPanel = ' ́ ̀ ̂ ̏ ̋ ̌ ̥ ː “ ‘ ” ’ ̃ ʰ kʰ kʷ kʰʷ tʰ ɬ t͡l t͡ɬ t͡s tʰ͡s t͡ʃ tʰ͡ʃ ʔ n̥ aː à á â ã iː ì í î ĩ uː ù ú û ũ eː è é ê ẽ oː ò ó ô õ ə̃ ə̃ː'

vowelsInSyllables = ['i', 'iː', 'ĩ', 'u', 'uː', 'ũ', 'e', 'eː', 'ẽ', 'o', 'oː', 'õ', 'ə̃', 'ə̃ː', 'a', 'aː', 'ã', 'h']



var cols = {
"class": 1,
"key": 2,
"ipaLoc": 3,
"ipaPlus": 4,
"transLoc": 5,
"transcription": 6,
"kbd": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":11,
"uc":12,
"meaning":0,
"shape": 0,
"numLoc": 0,

"nameLoc": 0,
"nnameLoc": 0,
"ucsName": 13,
"block": 14,

"othertranscriptions": [[6, 'Latin']]
}
