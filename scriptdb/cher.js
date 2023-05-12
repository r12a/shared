var spreadsheet = `cher-chr	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	lc	uc	native name	latin name	ucs name	block
-	-			-	-		Pd		hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd	?	non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd	?	en dash						U+2013: EN DASH	
—	-			—	—		Pd	?	em dash						U+2014: EM DASH	
,	,			,	,		Po		comma						U+002C: COMMA	
;	;			;	;		Po		semicolon						U+003B: SEMICOLON	
:	:			:	:		Po		colon						U+003A: COLON	
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark						U+003F: QUESTION MARK	
.	.			.	.		Po		full stop						U+002E: FULL STOP	
…	.			…	…		Po	?	ellipsis						U+2026: HORIZONTAL ELLIPSIS	
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	
[	(			[	[		Pe	?	bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Ps		parenthesis						U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe	?	bracket						U+005D: RIGHT SQUARE BRACKET	
̰	[	̃		˜	̃		Mn	i	nasalisation						U+0330: COMBINING TILDE BELOW	
̣	[			ˈ			Mn	i	consonant shift						U+0323: COMBINING DOT BELOW	
̱	*			͞			Mn	i	vowel-killer						U+0331: COMBINING MACRON BELOW	
̤	\			˟			Mn	i	consonant shift + vowel killer						U+0324: COMBINING DIAERESIS BELOW	
%	%			%			Po	?	percentage mark						U+0025: PERCENT SIGN	
‰	%			‰			Po	?	per mille mark						U+2030: PER MILLE SIGN	
̋	^	˥		˝	̋		Mn	r	super high tone mark	i					U+030B: COMBINING DOUBLE ACUTE ACCENT	
́	^	˦		ˊ	́		Mn	r	high tone mark	i					U+0301: COMBINING ACUTE ACCENT	
̂	^	˦˨		ˆ	̂		Mn	r	falling tone mark	i					U+0302: COMBINING CIRCUMFLEX ACCENT	
̄	^	˧		ˉ	̄		Mn	r	mid tone mark	i					U+0304: COMBINING MACRON	
̀	^	˨		ˋ	̀		Mn	r	low tone mark	i					U+0300: COMBINING GRAVE ACCENT	
̌	^	˨˦		ˇ	̌		Mn	r	rising tone mark	i					U+030C: COMBINING CARON	
“	<			“	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			\‘	\‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
”	>			”	”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
’	>			\’	\’		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
Ꭰ	a	a ʔa		A	a	A	Lu		syllable		ꭰ				U+13A0: CHEROKEE LETTER A	✓
ꭰ	A	a ʔa		a	A	a	Ll		syllable			Ꭰ			U+AB70: CHEROKEE SMALL LETTER A	✓
Ꮣ	d	ta	ː ʔ h	Dᵃ	da	C	Lu		syllable		ꮣ				U+13D3: CHEROKEE LETTER DA	✓
Ꮧ	d	ti	ː ʔ h	Dⁱ	di	D	Lu		syllable		ꮧ				U+13D7: CHEROKEE LETTER DI	✓
Ꮪ	d	tu tʰu	ː ʔ h	Dᵘ	du	J	Lu		syllable		ꮪ				U+13DA: CHEROKEE LETTER DU	✓
Ꮥ	d	te	ː ʔ h	Dᵉ	de	{	Lu		syllable		ꮥ				U+13D5: CHEROKEE LETTER DE	✓
Ꮩ	d	to tʰo	ː ʔ h	Dᵒ	do	$	Lu		syllable		ꮩ				U+13D9: CHEROKEE LETTER DO	✓
Ꮫ	d	tə̃ tʰə̃	ː ʔ h	Dᵛ	dv	R	Lu		syllable		ꮫ				U+13DB: CHEROKEE LETTER DV	✓
ꮣ	D	ta	ː ʔ h	dᵃ	Da	c	Ll		syllable			Ꮣ			U+ABA3: CHEROKEE SMALL LETTER DA	✓
ꮧ	D	ti	ː ʔ h	dⁱ	Di	d	Ll		syllable			Ꮧ			U+ABA7: CHEROKEE SMALL LETTER DI	✓
ꮪ	D	tu tʰu	ː ʔ h	dᵘ	Du	j	Ll		syllable			Ꮪ			U+ABAA: CHEROKEE SMALL LETTER DU	✓
ꮥ	D	te	ː ʔ h	dᵉ	De	[	Ll		syllable			Ꮥ			U+ABA5: CHEROKEE SMALL LETTER DE	✓
ꮩ	D	to tʰo	ː ʔ h	dᵒ	Do	4	Ll		syllable			Ꮩ			U+ABA9: CHEROKEE SMALL LETTER DO	✓
ꮫ	D	tə̃ tʰə̃	ː ʔ h	dᵛ	Dv	r	Ll		syllable			Ꮫ			U+ABAB: CHEROKEE SMALL LETTER DV	✓
Ꮬ	d	tˡa	ː ʔ h	Dˡᵃ	dla	^	Lu		syllable		ꮬ				U+13DC: CHEROKEE LETTER DLA	✓
ꮬ	D	tˡa	ː ʔ h	dˡᵃ	Dla	6	Ll		syllable			Ꮬ			U+ABAC: CHEROKEE SMALL LETTER DLA	✓
Ꭱ	e	e ʔe		E	e	E	Lu		syllable		ꭱ				U+13A1: CHEROKEE LETTER E	✓
ꭱ	E	e ʔe		e	E	e	Ll		syllable			Ꭱ			U+AB71: CHEROKEE SMALL LETTER E	✓
Ꭶ	g	ka	ː ʔ h	Gᵃ	ga	G	Lu		syllable		ꭶ				U+13A6: CHEROKEE LETTER GA	✓
Ꭹ	g	ki kʰi	ː ʔ h	Gⁱ	gi	F	Lu		syllable		ꭹ				U+13A9: CHEROKEE LETTER GI	✓
Ꭻ	g	ku kʰu	ː ʔ h	Gᵘ	gu	J	Lu		syllable		ꭻ				U+13AB: CHEROKEE LETTER GU	✓
Ꭸ	g	ke kʰe	ː ʔ h	Gᵉ	ge	B	Lu		syllable		ꭸ				U+13A8: CHEROKEE LETTER GE	✓
Ꭺ	g	ko kʰo	ː ʔ h	Gᵒ	go	Q	Lu		syllable		ꭺ				U+13AA: CHEROKEE LETTER GO	✓
Ꭼ	g	kə̃ kʰə̃	ː ʔ h	Gᵛ	gv	Z	Lu		syllable		ꭼ				U+13AC: CHEROKEE LETTER GV	✓
ꭶ	G	ka	ː ʔ h	gᵃ	Ga	g	Ll		syllable			Ꭶ			U+AB76: CHEROKEE SMALL LETTER GA	✓
ꭹ	G	ki kʰi	ː ʔ h	gⁱ	Gi	f	Ll		syllable			Ꭹ			U+AB79: CHEROKEE SMALL LETTER GI	✓
ꭻ	G	ku kʰu	ː ʔ h	gᵘ	Gu	j	Ll		syllable			Ꭻ			U+AB7B: CHEROKEE SMALL LETTER GU	✓
ꭸ	G	ke kʰe	ː ʔ h	gᵉ	Ge	b	Ll		syllable			Ꭸ			U+AB78: CHEROKEE SMALL LETTER GE	✓
ꭺ	G	ko kʰo	ː ʔ h	gᵒ	Go	q	Ll		syllable			Ꭺ			U+AB7A: CHEROKEE SMALL LETTER GO	✓
ꭼ	G	kə̃ kʰə̃	ː ʔ h	gᵛ	Gv	z	Ll		syllable			Ꭼ			U+AB7C: CHEROKEE SMALL LETTER GV	✓
Ꭽ	h	ha		Hᵃ	ha	U	Lu		syllable		ꭽ				U+13AD: CHEROKEE LETTER HA	✓
Ꭿ	h	hi		Hⁱ	hi	H	Lu		syllable		ꭿ				U+13AF: CHEROKEE LETTER HI	✓
Ꮁ	h	hu		Hᵘ	hu	!	Lu		syllable		ꮁ				U+13B1: CHEROKEE LETTER HU	✓
Ꭾ	h	he		Hᵉ	he	L	Lu		syllable		ꭾ				U+13AE: CHEROKEE LETTER HE	✓
Ꮀ	h	ho		Hᵒ	ho	$	Lu		syllable		ꮀ				U+13B0: CHEROKEE LETTER HO	✓
Ꮂ	h	hə̃		Hᵛ	hv	H	Lu		syllable		ꮂ				U+13B2: CHEROKEE LETTER HV	✓
ꭽ	H	ha		hᵃ	Ha	u	Ll		syllable			Ꭽ			U+AB7D: CHEROKEE SMALL LETTER HA	✓
ꭿ	H	hi		hⁱ	Hi	h	Ll		syllable			Ꭿ			U+AB7F: CHEROKEE SMALL LETTER HI	✓
ꮁ	H	hu		hᵘ	Hu	1	Ll		syllable			Ꮁ			U+AB81: CHEROKEE SMALL LETTER HU	✓
ꭾ	H	he		hᵉ	He	l	Ll		syllable			Ꭾ			U+AB7E: CHEROKEE SMALL LETTER HE	✓
ꮀ	H	ho		hᵒ	Ho	4	Ll		syllable			Ꮀ			U+AB80: CHEROKEE SMALL LETTER HO	✓
ꮂ	H	hə̃		hᵛ	Hv	h	Ll		syllable			Ꮂ			U+AB82: CHEROKEE SMALL LETTER HV	✓
Ꭲ	i	i ʔi		I	i	I	Lu		syllable		ꭲ				U+13A2: CHEROKEE LETTER I	✓
ꭲ	I	i ʔi		i	I	i	Ll		syllable			Ꭲ			U+AB72: CHEROKEE SMALL LETTER I	✓
Ꮳ	j	t͡sa t͡ʒa t͡ʰʃa	ː ʔ h	Tˢᵃ	tsa	E	Lu		syllable		ꮳ				U+13E3: CHEROKEE LETTER TSA	✓
Ꮵ	j	t͡si t͡ʒi t͡ʰʃi	ː ʔ h	Tˢⁱ	tsi	G	Lu		syllable		ꮵ				U+13E5: CHEROKEE LETTER TSI	✓
Ꮷ	j	t͡su t͡ʒu t͡ʰʃu	ː ʔ h	Tˢᵘ	tsu	#	Lu		syllable		ꮷ				U+13E7: CHEROKEE LETTER TSU	✓
Ꮴ	j	t͡se t͡ʒe t͡ʰʃe	ː ʔ h	Tˢᵉ	tse	}	Lu		syllable		ꮴ				U+13E4: CHEROKEE LETTER TSE	✓
Ꮶ	j	t͡so t͡ʒo t͡ʰʃo	ː ʔ h	Tˢᵒ	tso	%	Lu		syllable		ꮶ				U+13E6: CHEROKEE LETTER TSO	✓
Ꮸ	j	t͡sə̃ t͡ʒə̃ t͡ʰʃə̃	ː ʔ h	Tˢᵛ	tsv	:	Lu		syllable		ꮸ				U+13E8: CHEROKEE LETTER TSV	✓
ꮳ	J	t͡sa t͡ʒa t͡ʰʃa	ː ʔ h	tˢᵃ	Tsa	e	Ll		syllable			Ꮳ			U+ABB3: CHEROKEE SMALL LETTER TSA	✓
ꮵ	J	t͡si t͡ʒi t͡ʰʃi	ː ʔ h	tˢⁱ	Tsi	g	Ll		syllable			Ꮵ			U+ABB5: CHEROKEE SMALL LETTER TSI	✓
ꮷ	J	t͡su t͡ʒu t͡ʰʃu	ː ʔ h	tˢᵘ	Tsu	3	Ll		syllable			Ꮷ			U+ABB7: CHEROKEE SMALL LETTER TSU	✓
ꮴ	J	t͡se t͡ʒe t͡ʰʃe	ː ʔ h	tˢᵉ	Tse	]	Ll		syllable			Ꮴ			U+ABB4: CHEROKEE SMALL LETTER TSE	✓
ꮶ	J	t͡so t͡ʒo t͡ʰʃo	ː ʔ h	tˢᵒ	Tso	5	Ll		syllable			Ꮶ			U+ABB6: CHEROKEE SMALL LETTER TSO	✓
ꮸ	J	t͡sə̃ t͡ʒə̃ t͡ʰʃə̃	ː ʔ h	tˢᵛ	Tsv	;	Ll		syllable			Ꮸ			U+ABB8: CHEROKEE SMALL LETTER TSV	✓
Ꭷ	k	kʰa	ː ʔ h	Kᵃ	ka	K	Lu		syllable		ꭷ				U+13A7: CHEROKEE LETTER KA	✓
ꭷ	K	kʰa	ː ʔ h	kᵃ	Ka	k	Ll		syllable			Ꭷ			U+AB77: CHEROKEE SMALL LETTER KA	✓
Ꮃ	l	la ɬa	ː ʔ h	Lᵃ	la	W	Lu		syllable		ꮃ				U+13B3: CHEROKEE LETTER LA	✓
Ꮅ	l	li ɬi	ː ʔ h	Lⁱ	li	L	Lu		syllable		ꮅ				U+13B5: CHEROKEE LETTER LI	✓
Ꮇ	l	lu ɬu	ː ʔ h	Lᵘ	lu	M	Lu		syllable		ꮇ				U+13B7: CHEROKEE LETTER LU	✓
Ꮄ	l	le ɬe	ː ʔ h	Lᵉ	le	>	Lu		syllable		ꮄ				U+13B4: CHEROKEE LETTER LE	✓
Ꮆ	l	lo ɬo	ː ʔ h	Lᵒ	lo	}	Lu		syllable		ꮆ				U+13B6: CHEROKEE LETTER LO	✓
Ꮈ	l	lə̃ ɬə̃	ː ʔ h	Lᵛ	lv	K	Lu		syllable		ꮈ				U+13B8: CHEROKEE LETTER LV	✓
ꮃ	L	la ɬa	ː ʔ h	lᵃ	La	w	Ll		syllable			Ꮃ			U+AB83: CHEROKEE SMALL LETTER LA	✓
ꮅ	L	li ɬi	ː ʔ h	lⁱ	Li	l	Ll		syllable			Ꮅ			U+AB85: CHEROKEE SMALL LETTER LI	✓
ꮇ	L	lu ɬu	ː ʔ h	lᵘ	Lu	m	Ll		syllable			Ꮇ			U+AB87: CHEROKEE SMALL LETTER LU	✓
ꮄ	L	le ɬe	ː ʔ h	lᵉ	Le	.	Ll		syllable			Ꮄ			U+AB84: CHEROKEE SMALL LETTER LE	✓
ꮆ	L	lo ɬo	ː ʔ h	lᵒ	Lo	]	Ll		syllable			Ꮆ			U+AB86: CHEROKEE SMALL LETTER LO	✓
ꮈ	L	lə̃ ɬə̃	ː ʔ h	lᵛ	Lv	k	Ll		syllable			Ꮈ			U+AB88: CHEROKEE SMALL LETTER LV	✓
Ꮉ	m	ma		Mᵃ	ma	%	Lu		syllable		ꮉ				U+13B9: CHEROKEE LETTER MA	✓
Ꮋ	m	mi		Mⁱ	mi	N	Lu		syllable		ꮋ				U+13BB: CHEROKEE LETTER MI	✓
Ꮍ	m	mu		Mᵘ	mu	+	Lu	r	syllable		ꮍ				U+13BD: CHEROKEE LETTER MU	✓
Ꮊ	m	me		Mᵉ	me	*	Lu		syllable		ꮊ				U+13BA: CHEROKEE LETTER ME	✓
Ꮌ	m	mo		Mᵒ	mo	_	Lu	r	syllable		ꮌ				U+13BC: CHEROKEE LETTER MO	✓
Ᏽ	m	mə̃		Mᵛ	mv		Lu	a	syllable	archaic	ᏽ				U+13F5: CHEROKEE LETTER MV	✓
ꮉ	M	ma		mᵃ	Ma	5	Ll		syllable			Ꮉ			U+AB89: CHEROKEE SMALL LETTER MA	✓
ꮋ	M	mi		mⁱ	Mi	n	Ll		syllable			Ꮋ			U+AB8B: CHEROKEE SMALL LETTER MI	✓
ꮍ	M	mu		mᵘ	Mu	=	Ll	r	syllable			Ꮍ			U+AB8D: CHEROKEE SMALL LETTER MU	✓
ꮊ	M	me		mᵉ	Me	8	Ll		syllable			Ꮊ			U+AB8A: CHEROKEE SMALL LETTER ME	✓
ꮌ	M	mo		mᵒ	Mo	-	Ll	r	syllable			Ꮌ			U+AB8C: CHEROKEE SMALL LETTER MO	✓
ᏽ	M	mə̃		mᵛ	Mv		Ll	a	syllable	archaic		Ᏽ			U+13FD: CHEROKEE SMALL LETTER MV	✓
Ꮎ	n	na	ː ʔ	Nᵃ	na	N	Lu		syllable		ꮎ				U+13BE: CHEROKEE LETTER NA	✓
Ꮒ	n	ni hn̥i	ː ʔ h	Nⁱ	ni	?	Lu		syllable		ꮒ				U+13C2: CHEROKEE LETTER NI	✓
Ꮔ	n	nu hn̥u	ː ʔ h	Nᵘ	nu	)	Lu		syllable		ꮔ				U+13C4: CHEROKEE LETTER NU	✓
Ꮑ	n	ne hn̥e	ː ʔ h	Nᵉ	ne	P	Lu		syllable		ꮑ				U+13C1: CHEROKEE LETTER NE	✓
Ꮓ	n	no hn̥o	ː ʔ h	Nᵒ	no	Z	Lu		syllable		ꮓ				U+13C3: CHEROKEE LETTER NO	✓
Ꮕ	n	nə̃ hn̥ə̃	ː ʔ h	Nᵛ	nv	M	Lu		syllable		ꮕ				U+13C5: CHEROKEE LETTER NV	✓
Ꮐ	n	nah		Nᵃh	nah		Lu	i	syllable		ꮐ				U+13C0: CHEROKEE LETTER NAH	✓
Ꮏ	n	hn̥a		Hⁿᵃ	hna	_	Lu		syllable		ꮏ				U+13BF: CHEROKEE LETTER HNA	✓
ꮎ	N	na	ː ʔ	nᵃ	Na	n	Ll		syllable			Ꮎ			U+AB8E: CHEROKEE SMALL LETTER NA	✓
ꮒ	N	ni hn̥i	ː ʔ h	nⁱ	Ni	/	Ll		syllable			Ꮒ			U+AB92: CHEROKEE SMALL LETTER NI	✓
ꮔ	N	nu hn̥u	ː ʔ h	nᵘ	Nu	0	Ll		syllable			Ꮔ			U+AB94: CHEROKEE SMALL LETTER NU	✓
ꮑ	N	ne hn̥e	ː ʔ h	nᵉ	Ne	p	Ll		syllable			Ꮑ			U+AB91: CHEROKEE SMALL LETTER NE	✓
ꮓ	N	no hn̥o	ː ʔ h	nᵒ	No	z	Ll		syllable			Ꮓ			U+AB93: CHEROKEE SMALL LETTER NO	✓
ꮕ	N	nə̃ hn̥ə̃	ː ʔ h	nᵛ	Nv	m	Ll		syllable			Ꮕ			U+AB95: CHEROKEE SMALL LETTER NV	✓
ꮐ	N	nah		nᵃh	Nah		Ll	i	syllable			Ꮐ			U+AB90: CHEROKEE SMALL LETTER NAH	✓
ꮏ	N	hn̥a		hⁿᵃ	Hna	-	Ll		syllable			Ꮏ			U+AB8F: CHEROKEE SMALL LETTER HNA	✓
Ꭳ	o	o ʔo		O	o	O	Lu		syllable		ꭳ				U+13A3: CHEROKEE LETTER O	✓
ꭳ	O	o ʔo		o	O	o	Ll		syllable			Ꭳ			U+AB73: CHEROKEE SMALL LETTER O	✓
Ꮖ	q	kʷa kʰw̥a	ː ʔ h	Qᵃ	qua	Q	Lu		syllable		ꮖ				U+13C6: CHEROKEE LETTER QUA	✓
Ꮘ	q	kʷi kʰw̥i	ː ʔ h	Qⁱ	qui	F	Lu		syllable		ꮘ				U+13C8: CHEROKEE LETTER QUI	✓
Ꮚ	q	kʷu kʰw̥u	ː ʔ h	Qᵘ	quu	>	Lu		syllable		ꮚ				U+13CA: CHEROKEE LETTER QUU	✓
Ꮗ	q	kʷe kʰw̥e	ː ʔ h	Qᵉ	que	@	Lu		syllable		ꮗ				U+13C7: CHEROKEE LETTER QUE	✓
Ꮙ	q	kʷo kʰw̥o	ː ʔ h	Qᵒ	quo	?	Lu		syllable		ꮙ				U+13C9: CHEROKEE LETTER QUO	✓
Ꮛ	q	kʷə̃ kʰw̥ə̃	ː ʔ h	Qᵛ	quv	&	Lu		syllable		ꮛ				U+13CB: CHEROKEE LETTER QUV	✓
ꮖ	Q	kʷa kʰw̥a	ː ʔ h	qᵃ	Qua	q	Ll		syllable			Ꮖ			U+AB96: CHEROKEE SMALL LETTER QUA	✓
ꮘ	Q	kʷi kʰw̥i	ː ʔ h	qⁱ	Qui	f	Ll		syllable			Ꮘ			U+AB98: CHEROKEE SMALL LETTER QUI	✓
ꮚ	Q	kʷu kʰw̥u	ː ʔ h	qᵘ	Quu	.	Ll		syllable			Ꮚ			U+AB9A: CHEROKEE SMALL LETTER QUU	✓
ꮗ	Q	kʷe kʰw̥e	ː ʔ h	qᵉ	Que	2	Ll		syllable			Ꮗ			U+AB97: CHEROKEE SMALL LETTER QUE	✓
ꮙ	Q	kʷo kʰw̥o	ː ʔ h	qᵒ	Quo	/	Ll		syllable			Ꮙ			U+AB99: CHEROKEE SMALL LETTER QUO	✓
ꮛ	Q	kʷə̃ kʰw̥ə̃	ː ʔ h	qᵛ	Quv	7	Ll		syllable			Ꮛ			U+AB9B: CHEROKEE SMALL LETTER QUV	✓
Ꮜ	s	sa		Sᵃ	sa	A	Lu		syllable		ꮜ				U+13CC: CHEROKEE LETTER SA	✓
Ꮟ	s	si		Sⁱ	si	R	Lu		syllable		ꮟ				U+13CF: CHEROKEE LETTER SI	✓
Ꮡ	s	su		Sᵘ	su	{	Lu		syllable		ꮡ				U+13D1: CHEROKEE LETTER SU	✓
Ꮞ	s	se		Sᵉ	se	S	Lu		syllable		ꮞ				U+13CE: CHEROKEE LETTER SE	✓
Ꮠ	s	so		Sᵒ	so	D	Lu		syllable		ꮠ				U+13D0: CHEROKEE LETTER SO	✓
Ꮢ	s	sə̃		Sᵛ	sv	(	Lu		syllable		ꮢ				U+13D2: CHEROKEE LETTER SV	✓
Ꮝ	s	s		S	s	S	Lu		syllable		ꮝ				U+13CD: CHEROKEE LETTER S	✓
ꮜ	S	sa		sᵃ	Sa	a	Ll		syllable			Ꮜ			U+AB9C: CHEROKEE SMALL LETTER SA	✓
ꮟ	S	si		sⁱ	Si	r	Ll		syllable			Ꮟ			U+AB9F: CHEROKEE SMALL LETTER SI	✓
ꮡ	S	su		sᵘ	Su	[	Ll		syllable			Ꮡ			U+ABA1: CHEROKEE SMALL LETTER SU	✓
ꮞ	S	se		sᵉ	Se	s	Ll		syllable			Ꮞ			U+AB9E: CHEROKEE SMALL LETTER SE	✓
ꮠ	S	so		sᵒ	So	d	Ll		syllable			Ꮠ			U+ABA0: CHEROKEE SMALL LETTER SO	✓
ꮢ	S	sə̃		sᵛ	Sv	9	Ll		syllable			Ꮢ			U+ABA2: CHEROKEE SMALL LETTER SV	✓
ꮝ	S	s		s	S	s	Ll		syllable			Ꮝ			U+AB9D: CHEROKEE SMALL LETTER S	✓
Ꮤ	t	tʰa	ː ʔ h	Tᵃ	ta	T	Lu		syllable		ꮤ				U+13D4: CHEROKEE LETTER TA	✓
Ꮨ	t	tʰi	ː ʔ h	Tⁱ	ti	T	Lu		syllable		ꮨ				U+13D8: CHEROKEE LETTER TI	✓
Ꮦ	t	tʰe	ː ʔ h	Tᵉ	te	*	Lu		syllable		ꮦ				U+13D6: CHEROKEE LETTER TE	✓
ꮤ	T	tʰa	ː ʔ h	tᵃ	Ta	t	Ll		syllable			Ꮤ			U+ABA4: CHEROKEE SMALL LETTER TA	✓
ꮨ	T	tʰi	ː ʔ h	tⁱ	Ti	t	Ll		syllable			Ꮨ			U+ABA8: CHEROKEE SMALL LETTER TI	✓
ꮦ	T	tʰe	ː ʔ h	tᵉ	Te	8	Ll		syllable			Ꮦ			U+ABA6: CHEROKEE SMALL LETTER TE	✓
Ꭴ	u	u ʔu		U	u	U	Lu		syllable		ꭴ				U+13A4: CHEROKEE LETTER U	✓
ꭴ	U	u ʔu		u	U	u	Ll		syllable			Ꭴ			U+AB74: CHEROKEE SMALL LETTER U	✓
Ꭵ	v	ə̃ ʔə̃		V	v	V	Lu		syllable		ꭵ				U+13A5: CHEROKEE LETTER V	✓
ꭵ	V	ə̃ ʔə̃		v	V	v	Ll		syllable			Ꭵ			U+AB75: CHEROKEE SMALL LETTER V	✓
Ꮹ	w	wa hwa	ː ʔ h	Wᵃ	wa	|	Lu		syllable		ꮹ				U+13E9: CHEROKEE LETTER WA	✓
Ꮻ	w	wi hwi	ː ʔ h	Wⁱ	wi	W	Lu		syllable		ꮻ				U+13EB: CHEROKEE LETTER WI	✓
Ꮽ	w	wu hwu	ː ʔ h	Wᵘ	wu	X	Lu		syllable		ꮽ				U+13ED: CHEROKEE LETTER WU	✓
Ꮺ	w	we hwe	ː ʔ h	Wᵉ	we	P	Lu		syllable		ꮺ				U+13EA: CHEROKEE LETTER WE	✓
Ꮼ	w	wo hwo	ː ʔ h	Wᵒ	wo	O	Lu		syllable		ꮼ				U+13EC: CHEROKEE LETTER WO	✓
Ꮾ	w	wə̃ hwə̃	ː ʔ h	Wᵛ	wv	|	Lu		syllable		ꮾ				U+13EE: CHEROKEE LETTER WV	✓
ꮹ	W	wa hwa	ː ʔ h	wᵃ	Wa	\	Ll		syllable			Ꮹ			U+ABB9: CHEROKEE SMALL LETTER WA	✓
ꮻ	W	wi hwi	ː ʔ h	wⁱ	Wi	w	Ll		syllable			Ꮻ			U+ABBB: CHEROKEE SMALL LETTER WI	✓
ꮽ	W	wu hwu	ː ʔ h	wᵘ	Wu	x	Ll		syllable			Ꮽ			U+ABBD: CHEROKEE SMALL LETTER WU	✓
ꮺ	W	we hwe	ː ʔ h	wᵉ	We	p	Ll		syllable			Ꮺ			U+ABBA: CHEROKEE SMALL LETTER WE	✓
ꮼ	w	wo hwo	ː ʔ h	wᵒ	Wo	o	Ll		syllable			Ꮼ			U+ABBC: CHEROKEE SMALL LETTER WO	✓
ꮾ	W	wə̃ hwə̃	ː ʔ h	wᵛ	Wv	\	Ll		syllable			Ꮾ			U+ABBE: CHEROKEE SMALL LETTER WV	✓
Ꮭ	x	tˡʰa	ː ʔ h	Tˡᵃ	tla	^	Lu		syllable		ꮭ				U+13DD: CHEROKEE LETTER TLA	✓
Ꮯ	x	tˡi tʰˡi	ː ʔ h	Tˡⁱ	tli	C	Lu		syllable		ꮯ				U+13DF: CHEROKEE LETTER TLI	✓
Ꮱ	x	tˡu tʰˡu	ː ʔ h	Tˡᵘ	tlu	&	Lu		syllable		ꮱ				U+13E1: CHEROKEE LETTER TLU	✓
Ꮮ	x	tˡe tʰˡe	ː ʔ h	Tˡᵉ	tle	V	Lu		syllable		ꮮ				U+13DE: CHEROKEE LETTER TLE	✓
Ꮰ	x	tˡo tʰˡo	ː ʔ h	Tˡᵒ	tlo	:	Lu		syllable		ꮰ				U+13E0: CHEROKEE LETTER TLO	✓
Ꮲ	x	tˡə̃ tʰˡə̃	ː ʔ h	Tˡᵛ	tlv	<	Lu		syllable		ꮲ				U+13E2: CHEROKEE LETTER TLV	✓
ꮭ	X	tˡʰa	ː ʔ h	tˡᵃ	Tla	6	Ll		syllable			Ꮭ			U+ABAD: CHEROKEE SMALL LETTER TLA	✓
ꮯ	X	tˡi tʰˡi	ː ʔ h	tˡⁱ	Tli	c	Ll		syllable			Ꮯ			U+ABAF: CHEROKEE SMALL LETTER TLI	✓
ꮱ	X	tˡu tʰˡu	ː ʔ h	tˡᵘ	Tlu	7	Ll		syllable			Ꮱ			U+ABB1: CHEROKEE SMALL LETTER TLU	✓
ꮮ	X	tˡe tʰˡe	ː ʔ h	tˡᵉ	Tle	v	Ll		syllable			Ꮮ			U+ABAE: CHEROKEE SMALL LETTER TLE	✓
ꮰ	X	tˡo tʰˡo	ː ʔ h	tˡᵒ	Tlo	;	Ll		syllable			Ꮰ			U+ABB0: CHEROKEE SMALL LETTER TLO	✓
ꮲ	X	tˡə̃ tʰˡə̃	ː ʔ h	tˡᵛ	Tlv	,	Ll		syllable			Ꮲ			U+ABB2: CHEROKEE SMALL LETTER TLV	✓
Ꮿ	y	ja hja	ː ʔ h	Yᵃ	ya	Y	Lu		syllable		ꮿ				U+13EF: CHEROKEE LETTER YA	✓
Ᏹ	y	ji hji	ː ʔ h	Yⁱ	yi	I	Lu		syllable		ᏹ				U+13F1: CHEROKEE LETTER YI	✓
Ᏻ	y	ju hju	ː ʔ h	Yᵘ	yu	+	Lu		syllable		ᏻ				U+13F3: CHEROKEE LETTER YU	✓
Ᏸ	y	je hje	ː ʔ h	Yᵉ	ye	B	Lu		syllable		ᏸ				U+13F0: CHEROKEE LETTER YE	✓
Ᏺ	y	jo hjo	ː ʔ h	Yᵒ	yo	Y	Lu		syllable		ᏺ				U+13F2: CHEROKEE LETTER YO	✓
Ᏼ	y	jə̃ hjə̃	ː ʔ h	Yᵛ	yv	X	Lu		syllable		ᏼ				U+13F4: CHEROKEE LETTER YV	✓
ꮿ	Y	ja hja	ː ʔ h	yᵃ	Ya	y	Ll		syllable			Ꮿ			U+ABBF: CHEROKEE SMALL LETTER YA	✓
ᏹ	Y	ji hji	ː ʔ h	yⁱ	Yi	i	Ll		syllable			Ᏹ			U+13F9: CHEROKEE SMALL LETTER YI	✓
ᏻ	Y	ju hju	ː ʔ h	yᵘ	Yu	=	Ll		syllable			Ᏻ			U+13FB: CHEROKEE SMALL LETTER YU	✓
ᏸ	Y	je hje	ː ʔ h	yᵉ	Ye	b	Ll		syllable			Ᏸ			U+13F8: CHEROKEE SMALL LETTER YE	✓
ᏺ	Y	jo hjo	ː ʔ h	yᵒ	Yo	y	Ll		syllable			Ᏺ			U+13FA: CHEROKEE SMALL LETTER YO	✓
ᏼ	Y	jə̃ hjə̃	ː ʔ h	yᵛ	Yv	x	Ll		syllable			Ᏼ			U+13FC: CHEROKEE SMALL LETTER YV	✓
																
ᏣᎳᎩ				–		!										
ꮳꮃꭹ				–		1										
ꭳꮟᏺ				–		2										
ᎣᏏᏲ				–		@										
ᏩᏙ				–		#										
ꮹꮩ				–		3										
																
ʼ				ʼ	ʼ		Lm	?	apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po	?	section sign						U+00A7: SECTION SIGN	
†				†	†		Po	?	dagger						U+2020: DAGGER	
‡				‡	‡		Po	?	double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po	?	prime						U+2032: PRIME	
″				″	″		Po	?	double prime						U+2033: DOUBLE PRIME	
`																
																
latinPanel = ' ́ ̀ ̂ ̏ ̋ ̌ ̥ ː “ ‘ ” ’ ̃ ʰ kʰ kʷ kʰʷ tʰ ɬ t͡l t͡ɬ t͡s tʰ͡s t͡ʃ tʰ͡ʃ ʔ n̥ aː à á â ã iː ì í î ĩ uː ù ú û ũ eː è é ê ẽ oː ò ó ô õ ə̃ ə̃ː'																
																
vowelsInSyllables = ['i', 'iː', 'ĩ', 'u', 'uː', 'ũ', 'e', 'eː', 'ẽ', 'o', 'oː', 'õ', 'ə̃', 'ə̃ː', 'a', 'aː', 'ã', 'h']																
																
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
																
lc:11,																
uc:12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'Latin']]																
}																