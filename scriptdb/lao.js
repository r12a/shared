var spreadsheet = `
ປ		p-	p		p	p̯	x	mid class plosive			ປ ປາ	pɔ̀ː paː	U+0E9B: LAO LETTER PO	bp	lao
ຜ		pʰ-	ph	pʰ	p	pʰ	z	high class plosive			ຜ ເຜິ້ງ	pʰɔ̌ː pʰɤ̏ŋ	U+0E9C: LAO LETTER PHO SUNG	p	lao
ພ		pʰ-	ph		p	p̱ʰ	r	low class consonant			ພ ພູ	pʰɔ́ː pʰúː 	U+0E9E: LAO LETTER PHO TAM	p	lao
ບ		b- -p	b -p		b	b̯	p	mid class plosive			ບ ແບ້	bɔ̀ː bɛ̑ː 	U+0E9A: LAO LETTER BO	b	lao
															
ຕ		t	t		t	t̯	8	mid class plosive			ຕ ຕາ	tɔ̀ː tàː 	U+0E95: LAO LETTER TO	dt	lao
ຖ		tʰ-	th	tʰ	t	tʰ	4	high class plosive			ຖ ຖົງ	tʰɔ̌ː tʰǒŋ	U+0E96: LAO LETTER THO SUNG	t	lao
ທ		tʰ-	th		t	ṯʰ	m	low class plosive			ທ ທຸງ	tʰɔ́ː tʰúŋ	U+0E97: LAO LETTER THO TAM	t	lao
ດ		d- -t	d -t		d	d̯	f	mid class plosive			 ດ ເດັກ 	dɔ̀ː dék	U+0E94: LAO LETTER DO	d	lao
															
ກ		k	k		k	k̯	d	mid class plosive			 ກ ໄກ່ 	kɔː kāi	U+0E81: LAO LETTER KO	g	lao
ຂ		kʰ- x	kh	kʰ	k	kʰ	0	high class plosive			 ຂ ໄຂ່ 	kʰɔ̌ː kʰāi 	U+0E82: LAO LETTER KHO SUNG	k	lao
ຄ		kʰ- x	kh		k	ḵʰ	7	low class plosive			 ຄ ຄວາຢ 	kʰɔ́ː kʷʰáːj	U+0E84: LAO LETTER KHO TAM	k	lao
															
ຈ		t͡ɕ-	ch	t͡ɕ	c	ʨ̯	9	mid class affricate			 ຈ ຈອກ 	tɕɔ̀ː tɕɔ̏ːk 	U+0E88: LAO LETTER CO	j	lao
															
ຝ		f	f		f	f	/	high class fricative			ຝ ຝົນ	fɔ̌ː fǒn	U+0E9D: LAO LETTER FO TAM	f	lao
ຟ		f	f		f	f̱	2	low class fricative			 ຟ ໄຟ 	fɔ́ː fáj 	U+0E9F: LAO LETTER FO SUNG	f	lao
ສ		s	s		s	s	l	high class fricative			ສ ເສືອ	sɔ̌ː sɯ̌ːə	U+0EAA: LAO LETTER SO SUNG	s	lao
ຊ		s	x		s	s̱	-	low class fricative			ຊ ຊ້າງ	sɔ́ː sâːŋ	U+0E8A: LAO LETTER SO TAM	s	lao
ຫ		h	h		h	h	s	high class fricative			ຫ ຫ່ານ	hɔ̌ː hāːn 	U+0EAB: LAO LETTER HO SUNG	h	lao
ຮ		h	h		h	ẖ	u	low class fricative			ຮ ເຮືອນ	hɔ́ː hɯ́ːən	U+0EAE: LAO LETTER HO TAM	h	lao
															
ມ		m	m		m	m̱	,	low class nasal			ມ ແມວ	mɔ́ː mɛ́ːw	U+0EA1: LAO LETTER MO	m	lao
ນ		n	n		n¶	ṉ	i	low class nasal			ນ ນົກ	nɔ́ː nōk	U+0E99: LAO LETTER NO	n	lao
ຍ		ɲ -j	ny -j	ɲ	n	ɲ̱	o	low class nasal			 ຍ ຍຸງ 	ɲɔ́ː ɲúŋ	U+0E8D: LAO LETTER NYO	ng	lao
ງ		ŋ	ng	ŋ	n	ŋ̱	'	low class nasal			ງ ງົວ	ŋɔ́ː ŋúə 	U+0E87: LAO LETTER NGO	ny	lao
															
ວ	-	ʋ w -w -uːə-	v ūa	ʋ uː ə ūa	w	w̱	;	low class approximant/closed vowel			ວ ວີ	vɔ́ː víː	U+0EA7: LAO LETTER WO	w ua o	lao
ຣ		r l -n	r -n		r	ṟ	I	low class approximant	obsolete		ຣະຄັງ	rākʰáŋ	U+0EA3: LAO LETTER LO LING		lao
ລ		l	l		l	ḻ	[	low class approximant			ລ ລີງ	lɔ́ː líːŋ	U+0EA5: LAO LETTER LO LOOT	l	lao
ຢ		j	y		y	y̯	1	mid class approximant			ຢ ຢາ	jɔ̀ː jaː	U+0EA2: LAO LETTER YO	y	lao
															
ອ		ʔ ɔː	- ǭ	ʔ ɔː	}	ʔ	v	mid class vowel carrier/vowel			ອ ໂອ	ɔ̀ː ʔòː	U+0EAD: LAO LETTER O	∅	lao
															
															
															
ໜ	f	n	n		h	n	O	high class digraph nasal		ຫນ			U+0EDC: LAO HO NO	n	lao
ໝ	f	m	m		h	m	M	high class digraph nasal		ຫມ			U+0EDD: LAO HO MO	m	lao
															
															
ຼ		l	l		l	l̆	^	high class subjoined approximant					U+0EBC: LAO SEMIVOWEL SIGN LO​	l	lao
															
															
															
ເ		eː	ē	eː ē	e	ē	g	prescript long vowel					U+0EC0: LAO VOWEL SIGN E	ee	lao
ແ		ɛː	ǣ	ɛː ǣ	E	ɛ̄	c	prescript long vowel					U+0EC1: LAO VOWEL SIGN EI	ɛɛ	lao
ໂ		oː	ō	oː ō	o	ō	3	prescript long vowel					U+0EC2: LAO VOWEL SIGN O	oo	lao
ໄ		aj	ai		a	aʲ	w	prescript long vowel			ໄມ້ມາຽ	mâj máːj	U+0EC4: LAO VOWEL SIGN AI	ai	lao
ໃ		aj	ai		a	äʲ	.	prescript long vowel			ໄມ້ມ້ວນ	mâj muân	U+0EC3: LAO VOWEL SIGN AY	ai	lao
															
															
															
ິ		i	i		i	i	t	short vowel					U+0EB4: LAO VOWEL SIGN I​	i	lao
ີ		iː	ī	iː ī	i	ī	y	long vowel					U+0EB5: LAO VOWEL SIGN II​	ii	lao
ຶ		ɯ	ư	ɯ ư	U	ɯ	b	short vowel					U+0EB6: LAO VOWEL SIGN Y​	ʉ	lao
ື		ɯː	ư̄	ɯː ư̄	U	ɯ̄	n	long vowel					U+0EB7: LAO VOWEL SIGN YY​	ʉʉ	lao
ຸ		u	u		u	u	5	short vowel					U+0EB8: LAO VOWEL SIGN U​	u	lao
ູ		uː	ū	uː ū	u	ū	6	long vowel					U+0EB9: LAO VOWEL SIGN UU​	uu	lao
ໍ		ɔː	ǭ	ɔː ǭ	O	ɔ̄	=	long vowel			ນິກຄະຫິດ	nīk kʰā hǐt	U+0ECD: LAO NIGGAHITA​	ɔ	lao
ົ		o	o		o	o	q	short vowel			ໄມ້ກົງ	mâj kòŋ	U+0EBB: LAO VOWEL SIGN MAI KON​		lao
ະ		a	a		a¶	a		short vowel					U+0EB0: LAO VOWEL SIGN A	a	lao
ັ		a	a		a	ä	a	short vowel			ໄມ້ກັນ	mâj kàn	U+0EB1: LAO VOWEL SIGN MAI KAN​	a	lao
າ		aː	ā	aː ā	a	ā	k	long vowel					U+0EB2: LAO VOWEL SIGN AA	aa	lao
ຽ		iːə̯	īa	iːə̯ īa	i	iᵊ	P	vowel			ວິຣາມ	vī ráːm	U+0EBD: LAO SEMIVOWEL SIGN NYO	ia	lao
ຳ		am	am		a	aᵐ	e	long vowel					U+0EB3: LAO VOWEL SIGN AM	am	lao
															
															
ັຽ	s	-IƏ̯	IA		I	-äiᵊ							U+0EB1 U+0EBD: LAO VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO	ia	
ເ-ັຍ	s	-IƏ̯	IA		I	ē-äɲ̱							U+0EC0 U+0EB1 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO	ia	
ເ-ຍ	s	-IːƏ̯	ĪA		I	ē-ɲ̱							U+0EC0 U+0E8D: LAO VOWEL SIGN E, LETTER NYO	ia	
ິວ	s	-IW	IU		I	-iw̱							U+0EB4 U+0EA7: LAO VOWEL SIGN I, LETTER WO	iu	
ີວ	s	-IːW	ĪU		I	-īw̱							U+0EB5 U+0EA7: LAO VOWEL SIGN II, LETTER WO		
ເ-ັຍະ	s	-IA			I	ē-äɲ̱a							U+0EC0 U+0EB1 U+0E8D U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO, VOWEL SIGN A	ia	
ຽວ	s	-IːƏ̯W	ĪEO		I	-iᵊw̱							U+0EBD U+0EA7: LAO SEMIVOWEL SIGN NYO, LETTER WO	iao	
ເ-ັຽວ	s		ĪEO		I	ē-äiᵊw̱							U+0EC0 U+0EB1 U+0EBD U+0EA7: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO, LETTER WO		
															
ເ-ຶອ	s	-ƜƏ̯	ƯA		U	ē-ɯʔ							U+0EC0 U+0EB6 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN Y, LETTER O	ʉa	
ເ-ືອ	s	-ƜːƏ̯	Ư̄A		U	ē-ɯ̄ʔ							U+0EC0 U+0EB7 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN YY, LETTER O	ʉa	
															
ັວ	s	-UƏ̯-	ŪA		U	äw̱-							U+0EB1 U+0EA7: LAO VOWEL SIGN MAI KAN, LETTER WO​	ua	
ົວະ	s	-UƏ̯	UA		U	-ow̱a							U+0EBB U+0EA7 U+0EB0: LAO VOWEL SIGN MAI KON, LETTER WO, VOWEL SIGN A		
ົວ	s	-UːƏ̯	ŪA		U	-ow̱-							U+0EBB U+0EA7: LAO VOWEL SIGN MAI KON, LETTER WO	ua	
															
ເ-ະ	s	-E	E		E	ē-a							U+0EC0 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN A	ei	
ເ-ັ	s	-E-	E		E	ē-ä							U+0EC0 U+0EB1: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN	e	
															
ເ-ິ	s	-ɤ	Œ	ɤ	V	ē-i							U+0EC0 U+0EB4: LAO VOWEL SIGN E, VOWEL SIGN I	ə	
ເ-ີ	s	-ɤː	Œ̄		V	ē-ī							U+0EC0 U+0EB5: LAO VOWEL SIGN E, VOWEL SIGN II	əə	
ເ-ີຽ	s	-ɤːj	Œ̄Y		V	ē-īiᵊ							U+0EC0 U+0EB5 U+0EBD: LAO VOWEL SIGN E, VOWEL SIGN II, SEMIVOWEL SIGN NYO		
ເ-ີຍ	s	-ɤːj	Œ̄Y		V	ē-īɲ̱							U+0EC0 U+0EB5 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN II, LETTER NYO	əəi	
															
ໂ-ະ	s	-O	O		O	ō-a							U+0EC2 U+0EB0: LAO VOWEL SIGN O, VOWEL SIGN A	o	
ອຍ	s	-OːJ	OI		O	ʔɲ̱							U+0EAD U+0E8D: LAO LETTER O, LETTER NYO		
															
ແ-ະ	s	-Ɛ	Æ		E	ɛ̄-a							U+0EC1 U+0EB0: LAO VOWEL SIGN EI, VOWEL SIGN A	ɛ	
ແ-ັ	s	-Ɛ-	Æ		E	ɛ̄-ä							U+0EC1 U+0EB1: LAO VOWEL SIGN EI, VOWEL SIGN MAI KAN		
ແ-ວ	s	-ƐːW	ÆW		E	ɛ̄-w̱							U+0EC1 U+0EA7: LAO VOWEL SIGN EI, LETTER WO	ɛɛo	
															
ເ-າະ	s	-Ɔ	Ǫ		O	ē-āa							U+0EC0 U+0EB2 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN AA, VOWEL SIGN A	ɔ	
ັອ	s	-Ɔ	Ǫ		O	-äʔ							U+0EB1 U+0EAD: LAO VOWEL SIGN MAI KAN, LETTER O	ɔ	
															
ັຍ	s	-AJ	AI		A	-äɲ̱							U+0EB1 U+0E8D: LAO VOWEL SIGN MAI KAN, LETTER NYO	aai	
າຍ	s	-AːJ	ĀI		A	-āɲ̱							U+0EB2 U+0E8D: LAO VOWEL SIGN AA, LETTER NYO	aao	
າຽ	s	-AːJ	ĀI		A	-āiᵊ							U+0EB2 U+0EBD: LAO VOWEL SIGN AA, SEMIVOWEL SIGN NYO		
ເ-ົາ	s	-AW	AO		A	ē-oā							U+0EC0 U+0EBB U+0EB2: LAO VOWEL SIGN E, VOWEL SIGN MAI KON, VOWEL SIGN AA	aao	
າວ	s	-AːW	AO		A	āw̱							U+0EB2 U+0EA7: LAO VOWEL SIGN AA, LETTER WO																	
															
															
															
່					^	¹	j	tone mark			ໄນ້ເອກ	mâj eːk	U+0EC8: LAO TONE MAI EK​		lao
້					^	²	h	tone mark			ໄນ້ໂທ	mâj toː	U+0EC9: LAO TONE MAI THO​		lao
໊					^	³	H	tone mark			ໄນ້ຕີ	mâj tiː	U+0ECA: LAO TONE MAI TI​		lao
໋					^	⁴	J	tone mark			ໄນ້ຈັດຕະວາ	mâj cat-ta-waː	U+0ECB: LAO TONE MAI CATAWA​		lao
															
															
₭					#	¤	Z	currency symbol					U+20AD: KIP SIGN		lao
															
															
ັ້	s					ä²	Q						U+0EB1 U+0EC9: LAO VOWEL SIGN MAI KAN, TONE MAI THO​		
ິ້	s					i²	Y						U+0EB4 U+0EC9: LAO VOWEL SIGN I, TONE MAI THO​		
ີ້	s					ī²	U						U+0EB5 U+0EC9: LAO VOWEL SIGN II, TONE MAI THO​		
ັ້	s					ä²	A						U+0EB1 U+0EC9: LAO VOWEL SIGN MAI KAN, TONE MAI THO​		
ຶ້	s					ɯ²	V						U+0EB6 U+0EC9: LAO VOWEL SIGN Y, TONE MAI THO​		
ື້	s					ɯ̄²	B						U+0EB7 U+0EC9: LAO VOWEL SIGN YY, TONE MAI THO​		
															
															
															
															
ຫງ	s	ŋ	ng			hŋ̱		high class digraph					U+0EAB U+0E87: LAO LETTER HO SUNG, LETTER NGO	ng	
ຫຍ	s	ɲ	j			hɲ̱		high class digraph					U+0EAB U+0E8D: LAO LETTER HO SUNG, LETTER NYO	ny	
ຫນ	s	n	n			hṉ		high class digraph					U+0EAB U+0E99: LAO LETTER HO SUNG, LETTER NO	n	
ຫມ	s	m	m			hm̱		high class digraph					U+0EAB U+0EA1: LAO LETTER HO SUNG, LETTER MO	m	
ຫຼ	s	l	l			hl̆	}	high class digraph					U+0EAB U+0EBC: LAO LETTER HO SUNG, SEMIVOWEL SIGN LO	l	
ຫລ	s	l	l			hḻ		high class digraph					U+0EAB U+0EA5: LAO LETTER HO SUNG, LETTER LO LOOT	l	
ຫວ	s	ʋ w	v w			hw̱		high class digraph					U+0EAB U+0EA7: LAO LETTER HO SUNG, LETTER WO	w	
															
															
ໆລໆ	s	la	la			&ḻ&					ເຄຶ່ອງໝາຍ ແລະອຶ່ນໆ	kʰɯaŋ-mǎːj-lɛ-ɯːn-ɯːn	U+0EC6 U+0EA5 U+0EC6: LAO KO LA, LAO LETTER LO LOOT, LAO KO LA		
															
															
															
ຆ									pali				U+0E86: LAO LETTER PALI GHA		
ຉ									pali				U+0E89: LAO LETTER PALI CHA		
ຌ									pali				U+0E8C: LAO LETTER PALI JHA		
ຎ									pali				U+0E8E: LAO LETTER PALI NYA		
ຏ						...			pali				U+0E8F: LAO LETTER PALI TTA		
ຐ									pali				U+0E90: LAO LETTER PALI TTHA		
ຑ									pali				U+0E91: LAO LETTER PALI DDA		
ຒ									pali				U+0E92: LAO LETTER PALI DDHA		
ຓ									pali				U+0E93: LAO LETTER PALI NNA		
ຘ									pali				U+0E98: LAO LETTER PALI DHA		
ຠ									pali				U+0EA0: LAO LETTER PALI BHA		
ຨ									pali				U+0EA8: LAO LETTER SANSKRIT SHA		
ຩ									pali				U+0EA9: LAO LETTER SANSKRIT SSA		
ຬ									pali				U+0EAC: LAO LETTER PALI LLA		
຺									pali				U+0EBA: LAO SIGN PALI VIRAMA​		
															
															
															
															
															
															
															
໌					]	′	%	cancellation mark					U+0ECC: LAO CANCELLATION MARK​		lao
															
															
ໆ					&	&	N	repetition mark			ເຄ່ຶອງໝາຍຊ້ຳ	kʰɯaŋ-mǎːj-sâm	U+0EC6: LAO KO LA		lao
															
															
					+	¨		abbreviation marker							
															
															
\u200B					]	␣		zero-width space					U+200B: ZERO WIDTH SPACE		lao
					]	-		word separator							
															
															
.			.		.	.	D	full stop					U+002E: FULL STOP		lao
,			,		,	,	F	comma					U+002C: COMMA		lao
:			:		:	:	G	colon					U+003A: COLON		lao
;			;		;	;	S	semicolon					U+003B: SEMICOLON		lao
!			!		!	!	K	exclamation mark					U+0021: EXCLAMATION MARK		lao
?			?		?	?	L	question mark					U+003F: QUESTION MARK		lao
															
															
ຯ			…		.	…	D	ellipsis					U+0EAF: LAO ELLIPSIS		lao
…			…				C	ellipsis					U+2026: HORIZONTAL ELLIPSIS		lao
															
															
															
«			“		<	«		quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		lao
»			”		>	»		quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		lao
‹			‘		<	‹		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		lao
›			’		>	›		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		lao
“			“		<	 “		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK		lao
”			”		>	”		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK		lao
‘			‘		<	‘		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		lao
’			’		>	’		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		lao
															
															
															
(			(		(	(	X	parenthesis					U+0028: LEFT PARENTHESIS		lao
[			[		(	[		bracket					U+005B: LEFT SQUARE BRACKET		lao
)			)		)	)	?	parenthesis					U+0029: RIGHT PARENTHESIS		lao
]			]		)	]		bracket					U+005D: RIGHT SQUARE BRACKET		lao
															
															
-			-		-	-	{	hyphen					U+2010: HYPHEN		lao
‑			‑		-	‑		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN		lao
–			–		-	–		en dash					U+2013: EN DASH		lao
—			—		-	—		em dash					U+2014: EM DASH		lao
															
															
															
ʼ			ʼ			ʼ		apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE		
§			§			§		section sign					U+00A7: SECTION SIGN		
†			†			†		dagger					U+2020: DAGGER		
‡			‡			‡		double dagger					U+2021: DOUBLE DAGGER		
′			′			′		prime					U+2032: PRIME		
″			″			″		double prime					U+2033: DOUBLE PRIME		
*							E								
_							R								
															
															
															
															
															
															
໐		0	0		±	0̣	W	digit	infrequent		ສູນ	sun	U+0ED0: LAO DIGIT ZERO		lao
໑		1	1		±	1̣	!	digit	infrequent		ໜຶ່ງ	neung	U+0ED1: LAO DIGIT ONE		lao
໒		2	2		±	2̣	@	digit	infrequent		ສອງ	song	U+0ED2: LAO DIGIT TWO		lao
໓		3	3		±	3̣	#	digit	infrequent		ສາມ	sam	U+0ED3: LAO DIGIT THREE		lao
໔		4	4		±	4̣	$	digit	infrequent		ສີ	si	U+0ED4: LAO DIGIT FOUR		lao
໕		5	5		±	5̣	&	digit	infrequent		ຫ້າ	ha	U+0ED5: LAO DIGIT FIVE		lao
໖		6	6		±	6̣	*	digit	infrequent		ຫົກ	hok	U+0ED6: LAO DIGIT SIX		lao
໗		7	7		±	7̣	(	digit	infrequent		ເຈັດ	chet	U+0ED7: LAO DIGIT SEVEN		lao
໘		8	8		±	8̣	)	digit	infrequent		ແປດ	paet	U+0ED8: LAO DIGIT EIGHT		lao
໙		9	9		±	9̣	_	digit	infrequent		ເກົ້າ	kao	U+0ED9: LAO DIGIT NINE		lao
															
															
															
															
%					%	%	:	percentage mark					U+0025: PERCENT SIGN		lao
‰					%	‰		per mille mark					U+2030: PER MILLE SIGN		lao



`


var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,
"equiv": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"transckey": 0,
"numLoc": 0,
"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"simmala": 14,
"block": 15,

"othertranscriptions": [[3, 'LOC']]
}
