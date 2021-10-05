var spreadsheet = `
ປ	Lo	p-	p		p	p̯	x	mid class plosive			ປ ປາ	pɔ̀ː paː	U+0E9B: LAO LETTER PO	bp	✓
ຜ	Lo	pʰ-	ph	pʰ	p	pʰ	z	high class plosive			ຜ ເຜິ້ງ	pʰɔ̌ː pʰɤ̏ŋ	U+0E9C: LAO LETTER PHO SUNG	p	✓
ພ	Lo	pʰ-	ph		p	p̱ʰ	r	low class consonant			ພ ພູ	pʰɔ́ː pʰúː 	U+0E9E: LAO LETTER PHO TAM	p	✓
ບ	Lo	b- -p	b -p		b	b̯	p	mid class plosive			ບ ແບ້	bɔ̀ː bɛ̑ː 	U+0E9A: LAO LETTER BO	b	✓
															
ຕ	Lo	t	t		t	t̯	8	mid class plosive			ຕ ຕາ	tɔ̀ː tàː 	U+0E95: LAO LETTER TO	dt	✓
ຖ	Lo	tʰ-	th	tʰ	t	tʰ	4	high class plosive			ຖ ຖົງ	tʰɔ̌ː tʰǒŋ	U+0E96: LAO LETTER THO SUNG	t	✓
ທ	Lo	tʰ-	th		t	ṯʰ	m	low class plosive			ທ ທຸງ	tʰɔ́ː tʰúŋ	U+0E97: LAO LETTER THO TAM	t	✓
ດ	Lo	d- -t	d -t		d	d̯	f	mid class plosive			 ດ ເດັກ 	dɔ̀ː dék	U+0E94: LAO LETTER DO	d	✓
															
ກ	Lo	k	k		k	k̯	d	mid class plosive			 ກ ໄກ່ 	kɔː kāi	U+0E81: LAO LETTER KO	g	✓
ຂ	Lo	kʰ- x	kh	kʰ	k	kʰ	0	high class plosive			 ຂ ໄຂ່ 	kʰɔ̌ː kʰāi 	U+0E82: LAO LETTER KHO SUNG	k	✓
ຄ	Lo	kʰ- x	kh		k	ḵʰ	7	low class plosive			 ຄ ຄວາຢ 	kʰɔ́ː kʷʰáːj	U+0E84: LAO LETTER KHO TAM	k	✓
															
ຈ	Lo	t͡ɕ-	ch	t͡ɕ	c	ʨ̯	9	mid class affricate			 ຈ ຈອກ 	tɕɔ̀ː tɕɔ̏ːk 	U+0E88: LAO LETTER CO	j	✓
															
ຝ	Lo	f	f		f	f	/	high class fricative			ຝ ຝົນ	fɔ̌ː fǒn	U+0E9D: LAO LETTER FO TAM	f	✓
ຟ	Lo	f	f		f	f̱	2	low class fricative			 ຟ ໄຟ 	fɔ́ː fáj 	U+0E9F: LAO LETTER FO SUNG	f	✓
ສ	Lo	s	s		s	s	l	high class fricative			ສ ເສືອ	sɔ̌ː sɯ̌ːə	U+0EAA: LAO LETTER SO SUNG	s	✓
ຊ	Lo	s	x		s	s̱	-	low class fricative			ຊ ຊ້າງ	sɔ́ː sâːŋ	U+0E8A: LAO LETTER SO TAM	s	✓
ຫ	Lo	h	h		h	h	s	high class fricative			ຫ ຫ່ານ	hɔ̌ː hāːn 	U+0EAB: LAO LETTER HO SUNG	h	✓
ຮ	Lo	h	h		h	ẖ	u	low class fricative			ຮ ເຮືອນ	hɔ́ː hɯ́ːən	U+0EAE: LAO LETTER HO TAM	h	✓
															
ມ	Lo	m	m		m	m̱	,	low class nasal			ມ ແມວ	mɔ́ː mɛ́ːw	U+0EA1: LAO LETTER MO	m	✓
ນ	Lo	n	n		n¶	ṉ	i	low class nasal			ນ ນົກ	nɔ́ː nōk	U+0E99: LAO LETTER NO	n	✓
ຍ	Lo	ɲ -j	ny -j	ɲ	n	ɲ̱	o	low class nasal			 ຍ ຍຸງ 	ɲɔ́ː ɲúŋ	U+0E8D: LAO LETTER NYO	ng	✓
ງ	Lo	ŋ	ng	ŋ	n	ŋ̱	'	low class nasal			ງ ງົວ	ŋɔ́ː ŋúə 	U+0E87: LAO LETTER NGO	ny	✓
															
ວ	Lo	ʋ w -w -uːə-	v ūa	ʋ uː ə ūa	w	w̱	;	low class approximant/closed vowel			ວ ວີ	vɔ́ː víː	U+0EA7: LAO LETTER WO	w ua o	✓
ຣ	Lo	l -n	r -n		r	ṟ	I	low class approximant	obsolete		ຣະຄັງ	rākʰáŋ	U+0EA3: LAO LETTER LO LING		✓
ລ	Lo	l	l		l	ḻ	[	low class approximant			ລ ລີງ	lɔ́ː líːŋ	U+0EA5: LAO LETTER LO LOOT	l	✓
ຢ	Lo	j	y		y	y̯	1	mid class approximant			ຢ ຢາ	jɔ̀ː jaː	U+0EA2: LAO LETTER YO	y	✓
															
ອ	Lo	ʔ ɔː	- ǭ	ʔ ɔː	}	ʔ	v	mid class vowel carrier/vowel			ອ ໂອ	ɔ̀ː ʔòː	U+0EAD: LAO LETTER O	∅	✓
															
															
															
ໜ	Lo	n	n		h	n	O	high class digraph nasal		ຫນ			U+0EDC: LAO HO NO	n	✓
ໝ	Lo	m	m		h	m	M	high class digraph nasal		ຫມ			U+0EDD: LAO HO MO	m	✓
															
															
ຼ	Mn​	l	l		l	l̆	^	high class subjoined approximant					U+0EBC: LAO SEMIVOWEL SIGN LO​	l	✓
															
															
															
ິ	Mn​	i	i		i	i	t	short vowel					U+0EB4: LAO VOWEL SIGN I​	i	✓
ີ	Mn​	iː	ī	iː ī	i	ī	y	long vowel					U+0EB5: LAO VOWEL SIGN II​	ii	✓
ຽ	Lo	iːə̯	īa	iːə̯ īa	i	iᵊ	P	vowel			ວິຣາມ	vī ráːm	U+0EBD: LAO SEMIVOWEL SIGN NYO	ia	✓
ຶ	Mn​	ɯ	ư	ɯ ư	U	ɯ	b	short vowel					U+0EB6: LAO VOWEL SIGN Y​	ʉ	✓
ື	Mn​	ɯː	ư̄	ɯː ư̄	U	ɯ̄	n	long vowel					U+0EB7: LAO VOWEL SIGN YY​	ʉʉ	✓
ຸ	Mn​	u	u		u	u	5	short vowel					U+0EB8: LAO VOWEL SIGN U​	u	✓
ູ	Mn​	uː	ū	uː ū	u	ū	6	long vowel					U+0EB9: LAO VOWEL SIGN UU​	uu	✓
ເ	Lo	eː	ē	eː ē	e	ē	g	prescript long vowel					U+0EC0: LAO VOWEL SIGN E	ee	✓
ົ	Mn​	o	o		o	o	q	short vowel			ໄມ້ກົງ	mâj kòŋ	U+0EBB: LAO VOWEL SIGN MAI KON​		✓
ໂ	Lo	oː	ō	oː ō	o	ō	3	prescript long vowel					U+0EC2: LAO VOWEL SIGN O	oo	✓
ແ	Lo	ɛː	ǣ	ɛː ǣ	E	ɛ̄	c	prescript long vowel					U+0EC1: LAO VOWEL SIGN EI	ɛɛ	✓
ໍ	Mn​	ɔː	ǭ	ɔː ǭ	O	ɔ̄	=	long vowel			ນິກຄະຫິດ	nīk kʰā hǐt	U+0ECD: LAO NIGGAHITA​	ɔ	✓
າ	Lo	aː	ā	aː ā	a	ā	k	long vowel					U+0EB2: LAO VOWEL SIGN AA	aa	✓
ັ	Mn​	a	a		a	ä	a	short vowel			ໄມ້ກັນ	mâj kàn	U+0EB1: LAO VOWEL SIGN MAI KAN​	a	✓
ະ	Lo	a	a		a¶	a		short vowel					U+0EB0: LAO VOWEL SIGN A	a	✓
ໃ	Lo	aj	ai		a	äʲ	.	prescript long vowel			ໄມ້ມ້ວນ	mâj muân	U+0EC3: LAO VOWEL SIGN AY	ai	✓
ໄ	Lo	aj	ai		a	aʲ	w	prescript long vowel			ໄມ້ມາຽ	mâj máːj	U+0EC4: LAO VOWEL SIGN AI	ai	✓
ຳ	Lo	am	am		a	aᵐ	e	long vowel					U+0EB3: LAO VOWEL SIGN AM	am	✓
															
															
ັຽ		-IƏ̯	IA		I	-äiᵊ							U+0EB1 U+0EBD: LAO VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO	ia	
ເ-ັຍ		-IƏ̯	IA		I	ē-äɲ̱							U+0EC0 U+0EB1 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO	ia	
ເ-ຍ		-IːƏ̯	ĪA		I	ē-ɲ̱							U+0EC0 U+0E8D: LAO VOWEL SIGN E, LETTER NYO	ia	
ິວ		-IW	IU		I	-iw̱							U+0EB4 U+0EA7: LAO VOWEL SIGN I, LETTER WO	iu	
ີວ		-IːW	ĪU		I	-īw̱							U+0EB5 U+0EA7: LAO VOWEL SIGN II, LETTER WO		
ເ-ັຍະ		-IA			I	ē-äɲ̱a							U+0EC0 U+0EB1 U+0E8D U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO, VOWEL SIGN A	ia	
ຽວ		-IːƏ̯W	ĪEO		I	-iᵊw̱							U+0EBD U+0EA7: LAO SEMIVOWEL SIGN NYO, LETTER WO	iao	
ເ-ັຽວ			ĪEO		I	ē-äiᵊw̱							U+0EC0 U+0EB1 U+0EBD U+0EA7: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO, LETTER WO		
															
ເ-ຶອ		-ƜƏ̯	ƯA		U	ē-ɯʔ							U+0EC0 U+0EB6 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN Y, LETTER O	ʉa	
ເ-ືອ		-ƜːƏ̯	Ư̄A		U	ē-ɯ̄ʔ							U+0EC0 U+0EB7 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN YY, LETTER O	ʉa	
															
ັວ		-UƏ̯-	ŪA		U	äw̱-							U+0EB1 U+0EA7: LAO VOWEL SIGN MAI KAN, LETTER WO​	ua	
ົວະ		-UƏ̯	UA		U	-ow̱a							U+0EBB U+0EA7 U+0EB0: LAO VOWEL SIGN MAI KON, LETTER WO, VOWEL SIGN A		
ົວ		-UːƏ̯	ŪA		U	-ow̱-							U+0EBB U+0EA7: LAO VOWEL SIGN MAI KON, LETTER WO	ua	
															
ເ-ະ		-E	E		E	ē-a							U+0EC0 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN A	ei	
ເ-ັ		-E-	E		E	ē-ä							U+0EC0 U+0EB1: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN	e	
															
ເ-ິ		-ɤ	Œ	ɤ	V	ē-i							U+0EC0 U+0EB4: LAO VOWEL SIGN E, VOWEL SIGN I	ə	
ເ-ີ		-ɤː	Œ̄		V	ē-ī							U+0EC0 U+0EB5: LAO VOWEL SIGN E, VOWEL SIGN II	əə	
ເ-ີຽ		-ɤːj	Œ̄Y		V	ē-īiᵊ							U+0EC0 U+0EB5 U+0EBD: LAO VOWEL SIGN E, VOWEL SIGN II, SEMIVOWEL SIGN NYO		
ເ-ີຍ		-ɤːj	Œ̄Y		V	ē-īɲ̱							U+0EC0 U+0EB5 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN II, LETTER NYO	əəi	
															
ໂ-ະ		-O	O		O	ō-a							U+0EC2 U+0EB0: LAO VOWEL SIGN O, VOWEL SIGN A	o	
ອຍ		-OːJ	OI		O	ʔɲ̱							U+0EAD U+0E8D: LAO LETTER O, LETTER NYO		
															
ແ-ະ		-Ɛ	Æ		E	ɛ̄-a							U+0EC1 U+0EB0: LAO VOWEL SIGN EI, VOWEL SIGN A	ɛ	
ແ-ັ		-Ɛ-	Æ		E	ɛ̄-ä							U+0EC1 U+0EB1: LAO VOWEL SIGN EI, VOWEL SIGN MAI KAN		
ແ-ວ		-ƐːW	ÆW		E	ɛ̄-w̱							U+0EC1 U+0EA7: LAO VOWEL SIGN EI, LETTER WO	ɛɛo	
															
ເ-າະ		-Ɔ	Ǫ		O	ē-āa							U+0EC0 U+0EB2 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN AA, VOWEL SIGN A	ɔ	
ັອ		-Ɔ	Ǫ		O	-äʔ							U+0EB1 U+0EAD: LAO VOWEL SIGN MAI KAN, LETTER O	ɔ	
															
ັຍ		-AJ	AI		A	-äɲ̱							U+0EB1 U+0E8D: LAO VOWEL SIGN MAI KAN, LETTER NYO	aai	
າຍ		-AːJ	ĀI		A	-āɲ̱							U+0EB2 U+0E8D: LAO VOWEL SIGN AA, LETTER NYO	aao	
າຽ		-AːJ	ĀI		A	-āiᵊ							U+0EB2 U+0EBD: LAO VOWEL SIGN AA, SEMIVOWEL SIGN NYO		
ເ-ົາ		-AW	AO		A	ē-oā							U+0EC0 U+0EBB U+0EB2: LAO VOWEL SIGN E, VOWEL SIGN MAI KON, VOWEL SIGN AA	aao	
າວ		-AːW	AO		A	āw̱							U+0EB2 U+0EA7: LAO VOWEL SIGN AA, LETTER WO		
															
															
															
															
				˧˩											
່	Mn​			˨˦	^	¹	j	tone mark			ໄນ້ເອກ	mâj eːk	U+0EC8: LAO TONE MAI EK​		✓
້	Mn​			˦	^	²	h	tone mark			ໄນ້ໂທ	mâj toː	U+0EC9: LAO TONE MAI THO​		✓
໊	Mn​			˥˧	^	³	H	tone mark			ໄນ້ຕີ	mâj tiː	U+0ECA: LAO TONE MAI TI​		✓
໋	Mn​			˧	^	⁴	J	tone mark			ໄນ້ຈັດຕະວາ	mâj cat-ta-waː	U+0ECB: LAO TONE MAI CATAWA​		✓
				˩											
															
₭	Sc				#	¤	Z	currency symbol					U+20AD: KIP SIGN		
															
															
ັ້						ä²	Q						U+0EB1 U+0EC9: LAO VOWEL SIGN MAI KAN, TONE MAI THO​		
ິ້						i²	Y						U+0EB4 U+0EC9: LAO VOWEL SIGN I, TONE MAI THO​		
ີ້						ī²	U						U+0EB5 U+0EC9: LAO VOWEL SIGN II, TONE MAI THO​		
ັ້						ä²	A						U+0EB1 U+0EC9: LAO VOWEL SIGN MAI KAN, TONE MAI THO​		
ຶ້						ɯ²	V						U+0EB6 U+0EC9: LAO VOWEL SIGN Y, TONE MAI THO​		
ື້						ɯ̄²	B						U+0EB7 U+0EC9: LAO VOWEL SIGN YY, TONE MAI THO​		
															
															
															
															
ຫງ		ŋ	ng			hŋ̱		high class digraph					U+0EAB U+0E87: LAO LETTER HO SUNG, LETTER NGO	ng	
ຫຍ		ɲ	j			hɲ̱		high class digraph					U+0EAB U+0E8D: LAO LETTER HO SUNG, LETTER NYO	ny	
ຫນ		n	n			hṉ		high class digraph					U+0EAB U+0E99: LAO LETTER HO SUNG, LETTER NO	n	
ຫມ		m	m			hm̱		high class digraph					U+0EAB U+0EA1: LAO LETTER HO SUNG, LETTER MO	m	
ຫຼ		l	l			hl̆	}	high class digraph					U+0EAB U+0EBC: LAO LETTER HO SUNG, SEMIVOWEL SIGN LO	l	
ຫລ		l	l			hḻ		high class digraph					U+0EAB U+0EA5: LAO LETTER HO SUNG, LETTER LO LOOT	l	
ຫວ		ʋ w	v w			hw̱		high class digraph					U+0EAB U+0EA7: LAO LETTER HO SUNG, LETTER WO	w	
															
															
ໆລໆ		la	la			&ḻ&					ເຄຶ່ອງໝາຍ ແລະອຶ່ນໆ	kʰɯaŋ-mǎːj-lɛ-ɯːn-ɯːn	U+0EC6 U+0EA5 U+0EC6: LAO KO LA, LAO LETTER LO LOOT, LAO KO LA		
															
															
															
ຆ	Lo								pali				U+0E86: LAO LETTER PALI GHA		✓
ຉ	Lo								pali				U+0E89: LAO LETTER PALI CHA		✓
ຌ	Lo								pali				U+0E8C: LAO LETTER PALI JHA		✓
ຎ	Lo								pali				U+0E8E: LAO LETTER PALI NYA		✓
ຏ	Lo					...			pali				U+0E8F: LAO LETTER PALI TTA		✓
ຐ	Lo								pali				U+0E90: LAO LETTER PALI TTHA		✓
ຑ	Lo								pali				U+0E91: LAO LETTER PALI DDA		✓
ຒ	Lo								pali				U+0E92: LAO LETTER PALI DDHA		✓
ຓ	Lo								pali				U+0E93: LAO LETTER PALI NNA		✓
ຘ	Lo								pali				U+0E98: LAO LETTER PALI DHA		✓
ຠ	Lo								pali				U+0EA0: LAO LETTER PALI BHA		✓
ຨ	Lo								pali				U+0EA8: LAO LETTER SANSKRIT SHA		✓
ຩ	Lo								pali				U+0EA9: LAO LETTER SANSKRIT SSA		✓
ຬ	Lo								pali				U+0EAC: LAO LETTER PALI LLA		✓
຺	Mn​								pali				U+0EBA: LAO SIGN PALI VIRAMA​		✓
															
															
															
															
															
															
															
໌	Mn​				]	′	%	cancellation mark					U+0ECC: LAO CANCELLATION MARK​		✓
															
															
ໆ	Lm				&	&	N	repetition mark			ເຄ່ຶອງໝາຍຊ້ຳ	kʰɯaŋ-mǎːj-sâm	U+0EC6: LAO KO LA		✓
															
															
					+	¨		abbreviation marker							
															
															
.	Po		.		.	.	D	full stop					U+002E: FULL STOP		
,	Po		,		,	,	F	comma					U+002C: COMMA		
:	Po		:		:	:	G	colon					U+003A: COLON		
;	Po		;		;	;	S	semicolon					U+003B: SEMICOLON		
!	Po		!		!	!	K	exclamation mark					U+0021: EXCLAMATION MARK		
?	Po		?		?	?	L	question mark					U+003F: QUESTION MARK		
															
															
ຯ	Lo		…		.	…	D	ellipsis					U+0EAF: LAO ELLIPSIS		✓
…	Po		…				C	ellipsis					U+2026: HORIZONTAL ELLIPSIS		
															
															
															
«	Pi		“		<	«		quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		
»	Pf		”		>	»		quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		
‹	Pi		‘		<	‹		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		
›	Pf		’		>	›		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		
“	Pi		“		<	 “		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK		
”	Pf		”		>	”		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK		
‘	Pi		‘		<	‘		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		
’	Pf		’		>	’		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		
															
															
															
(	Ps		(		(	(	X	parenthesis					U+0028: LEFT PARENTHESIS		
[	Ps		[		(	[		bracket					U+005B: LEFT SQUARE BRACKET		
)	Pe		)		)	)	?	parenthesis					U+0029: RIGHT PARENTHESIS		
]	Pe		]		)	]		bracket					U+005D: RIGHT SQUARE BRACKET		
															
															
-	Po		-		-	-	{	hyphen					U+2010: HYPHEN		
‑	Pd		‑		-	‑		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN		
–	Pd		–		-	–		en dash					U+2013: EN DASH		
—	Pd		—		-	—		em dash					U+2014: EM DASH		
															
															
															
ʼ	Lm		ʼ			ʼ		apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE		
§	Po		§			§		section sign					U+00A7: SECTION SIGN		
†	Po		†			†		dagger					U+2020: DAGGER		
‡	Po		‡			‡		double dagger					U+2021: DOUBLE DAGGER		
′	Po		′			′		prime					U+2032: PRIME		
″	Po		″			″		double prime					U+2033: DOUBLE PRIME		
*	Po						E								
_	Pc						R								
															
															
															
															
\u200B	Cf				]	␣		zero-width space					U+200B: ZERO WIDTH SPACE		✓
\u200C	Cf				=	ₓ		zwnj					U+200C: ZERO WIDTH NON-JOINER		
\u200D	Cf				=	₊		zwj					U+200D: ZERO WIDTH JOINER		
\u034F	Mn				=	ᶜᵍʲ		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​		
\u2060	Cf				=	ʷʲ		word joiner					U+2060 WORD JOINER		✓
															
															
															
															
															
໐	Nd	0	0		±	0̣	W	digit	infrequent		ສູນ	sun	U+0ED0: LAO DIGIT ZERO		✓
໑	Nd	1	1		±	1̣	!	digit	infrequent		ໜຶ່ງ	neung	U+0ED1: LAO DIGIT ONE		✓
໒	Nd	2	2		±	2̣	@	digit	infrequent		ສອງ	song	U+0ED2: LAO DIGIT TWO		✓
໓	Nd	3	3		±	3̣	#	digit	infrequent		ສາມ	sam	U+0ED3: LAO DIGIT THREE		✓
໔	Nd	4	4		±	4̣	$	digit	infrequent		ສີ	si	U+0ED4: LAO DIGIT FOUR		✓
໕	Nd	5	5		±	5̣	&	digit	infrequent		ຫ້າ	ha	U+0ED5: LAO DIGIT FIVE		✓
໖	Nd	6	6		±	6̣	*	digit	infrequent		ຫົກ	hok	U+0ED6: LAO DIGIT SIX		✓
໗	Nd	7	7		±	7̣	(	digit	infrequent		ເຈັດ	chet	U+0ED7: LAO DIGIT SEVEN		✓
໘	Nd	8	8		±	8̣	)	digit	infrequent		ແປດ	paet	U+0ED8: LAO DIGIT EIGHT		✓
໙	Nd	9	9		±	9̣	_	digit	infrequent		ເກົ້າ	kao	U+0ED9: LAO DIGIT NINE		✓
															
															
															
															
%	Po				%	%	:	percentage mark					U+0025: PERCENT SIGN		
‰	Po				%	‰		per mille mark					U+2030: PER MILLE SIGN		
`



latinPanel = '˨˦ ˦ ˥˧ ˧ ǣ aː ā ə eː ē ɛː iː ī iːə̯ īa kʰ ɲ ŋ ɔː oː ō ǭ pʰ tʰ t͡ɕ uː ūa ư ư̄ ū ʋ ɤ ɯ ɯː ʔ'



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
