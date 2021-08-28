var spreadsheet = `
ป		p -p	p		p	p̯	x	mid class plosive			ป ปลา	po pla	U+0E1B: THAI CHARACTER PO PLA	thai
พ		pʰ -p	ph -p		p	p̱ʰ	r	low class plosive			พ พาน	pho phan	U+0E1E: THAI CHARACTER PHO PHAN	thai
ภ		pʰ -p	ph -p		p	ṗ̱ʰ	4	low class plosive			ภ สำเภา	pho sam-phao	U+0E20: THAI CHARACTER PHO SAMPHAO	thai
ผ		pʰ	ph	pʰ	p	pʰ	z	high class plosive			ผ ผึ้ง	po pheung	U+0E1C: THAI CHARACTER PHO PHUNG	thai
บ		b -p	b -p		b	b̯	[	mid class plosive			บ ใบไม้	bo baimai	U+0E1A: THAI CHARACTER BO BAIMAI	thai
ท		tʰ -t	th -t		t	ṯʰ	m	low class plosive			ท ทหาร	tho thahan	U+0E17: THAI CHARACTER THO THAHAN	thai
ต		t -t	t		t	t̯	9	mid class plosive			ต เต่า	to tao	U+0E15: THAI CHARACTER TO TAO	thai
ถ		tʰ -t	th -t		t	tʰ	5	high class plosive			ถ ถุง	tho thung	U+0E16: THAI CHARACTER THO THUNG	thai
ธ		tʰ -t	th -t		t	ṯ̇ʰ	T	low class plosive			ธ ธง	tho thong	U+0E18: THAI CHARACTER THO THONG	thai
ฐ		tʰ -t	th -t	tʰ	t	ṭʰ	{	high class plosive			ฐ ฐาน	tho than	U+0E10: THAI CHARACTER THO THAN	thai
ฏ		t -t	t		t	ṭ̯	D	mid class plosive			ฏ ปฏัก	to pa-tak	U+0E0F: THAI CHARACTER TO PATAK	thai
ฒ		tʰ -t	th -t		t	ṭ̱̇ʰ	<	low class plosive			ฒ ผู้เฒ่า	tho phu-thao	U+0E12: THAI CHARACTER THO PHUTHAO	thai
ฑ		tʰ -t	th -t		t	ṭ̱ʰ	R	low class plosive			ฑ มณโฑ	tho montho	U+0E11: THAI CHARACTER THO NANGMONTHO	thai
ด		d -t	d -t		d	d̯	f	mid class plosive			ด เด็ก	do dek	U+0E14: THAI CHARACTER DO DEK	thai
ฎ		d -t	d -t		d	ḍ̯	E	mid class plosive			ฎ ชฎา	do cha-da	U+0E0E: THAI CHARACTER DO CHADA	thai
ก		k -k	k -k		k	k̯	d	mid class plosive			ก ไก่	ko kai 	U+0E01: THAI CHARACTER KO KAI	thai
ค		kʰ -k	kh -k		k	ḵʰ	8	low class plosive			ค ควาย	kho khwāi 	U+0E04: THAI CHARACTER KHO KHWAI	thai
ข		kʰ -k	kh -k	kʰ	k	kʰ	-	high class plosive			ข ไข่	kho khai 	U+0E02: THAI CHARACTER KHO KHAI	thai
ฆ		kʰ -k	kh -k		k	ḵ̇ʰ	S	low class plosive			ฆ ระฆัง	kho ra-khang	U+0E06: THAI CHARACTER KHO RAKHANG	thai
ฃ		kʰ -k	kh -k		k	k̈ʰ	\	high class plosive	obsolete		ฃ ขวด	kho khūat 	U+0E03: THAI CHARACTER KHO KHUAT	thai
ฅ		kʰ -k	kh -k		k	ḵ̈ʰ	|	low class plosive	obsolete		ฅ คน	kho khon	U+0E05: THAI CHARACTER KHO KHON	thai
														
จ		t͡ɕ -t	ch -t	t͡ɕ	c	c̯	0	mid class affricate			จ จาน	cho chan	U+0E08: THAI CHARACTER CHO CHAN	thai
ช		t͡ɕʰ -t	ch -t		c	c̱ʰ	=	low class affricate			ช ช้าง	cho chang	U+0E0A: THAI CHARACTER CHO CHANG	thai
ฉ		t͡ɕʰ	ch	t͡ɕʰ	c	cʰ	C	high class affricate			ฉ ฉิ่ง	cho ching	U+0E09: THAI CHARACTER CHO CHING	thai
ฌ		t͡ɕʰ	ch		c	ċ̱ʰ	G	low class affricate			ฌ เฌอ	cho choe	U+0E0C: THAI CHARACTER CHO CHOE	thai
														
ม		m	m		m	m̱	,	low class nasal			ม ม้า	mo ma	U+0E21: THAI CHARACTER MO MA	thai
น		n	n		n	ṉ	o	low class nasal			น หนู	no nu	U+0E19: THAI CHARACTER NO NU	thai
ง		ŋ	ng	ŋ	n	ŋ̱	'	low class nasal			ง งู	ngo ngu	U+0E07: THAI CHARACTER NGO NGU	thai
ณ		n	n		n	ṇ̱	I	low class nasal			ณ เณร	no nen	U+0E13: THAI CHARACTER NO NEN	thai
														
ฟ		f	f		f	f̱	a	low class fricative			ฝ ฝา	fo fa	U+0E1F: THAI CHARACTER FO FAN	thai
ฝ		f -p	f -p		f	f	/	high class fricative			ฟ ฟัน	fo fan	U+0E1D: THAI CHARACTER FO FA	thai
ห		h	h		h	h	s	high class fricative			ห หีบ	ho hip	U+0E2B: THAI CHARACTER HO HIP	thai
ฮ		h	h		h	ẖ	V	low class fricative			ฮ นกฮูก	ho nok-huk	U+0E2E: THAI CHARACTER HO NOKHUK	thai
ส		s -t	s -t		s	s	l	high class fricative			ส เสือ	so suea	U+0E2A: THAI CHARACTER SO SUA	thai
ศ		s -t	s -t		s	ś	L	high class fricative			ศ ศาลา	so sala	U+0E28: THAI CHARACTER SO SALA	thai
ซ		s -t	s -t		s	ṡ̱	:	low class fricative			ซ โซ่	so so	U+0E0B: THAI CHARACTER SO SO	thai
ษ		s -t	s -t		s	ṣ	K	high class fricative			ษ ฤๅษี	so rue-si	U+0E29: THAI CHARACTER SO RUSI	thai
														
														
ว		w	w		w	w̱	;	low class approximant			ว แหวน	wo waen	U+0E27: THAI CHARACTER WO WAEN	thai
ร		r -n	r -n		r	ṟ	i	low class approximant			ร เรือ	ro ruea	U+0E23: THAI CHARACTER RO RUA	thai
ล		l -n	l -n		l	ḻ	]	low class approximant			ล ลิง	lo ling	U+0E25: THAI CHARACTER LO LING	thai
ฬ		l -n	l -n		l	ḻ̇	>	low class approximant			ฬ จุฬา	lo chu-la	U+0E2C: THAI CHARACTER LO CHULA	thai
ย		j (-n)	y (-n)		y	y̱	p	low class approximant			ย ยักษ์	yo yak	U+0E22: THAI CHARACTER YO YAK	thai
ญ		j -n	y -n		y	ẏ̱	P	low class approximant			ญ หญิง	yo ying	U+0E0D: THAI CHARACTER YO YING	thai
														
อ		- ɔː	' o	ɔː	}	ʔ̯	v	mid class vowel carrier/vowel			อ อ่าง	o ang	U+0E2D: THAI CHARACTER O ANG	thai
														
														
														
														
ิ		i	i		i	i	b	short vowel			พินทุอิ	phinthu i	U+0E34: THAI CHARACTER SARA I​	thai
ี		iː	i	iː	i	ī	u	long vowel			ฝนทอง	fong thong	U+0E35: THAI CHARACTER SARA II​	thai
ึ		ɯ	ue	ɯ	W	ɯ	7	short vowel			นิคหิต	nikkhahit	U+0E36: THAI CHARACTER SARA UE​	thai
ื		ɯː	ue	ɯː	W	ɯ̄	n	long vowel			ฟันหนู	fan nu	U+0E37: THAI CHARACTER SARA UEE​	thai
ุ		u	u		u	u	6	short vowel			ตีนเหยียด	tin yiat	U+0E38: THAI CHARACTER SARA U​	thai
ู		uː	u	uː	u	ū	^	long vowel			ตีนคู้	tin khu	U+0E39: THAI CHARACTER SARA UU​	thai
เ		eː	e	eː	e	e	g	prescript long vowel			ไม้หน้า	mai na	U+0E40: THAI CHARACTER SARA E	thai
โ		oː	o	oː	o	o	F	prescript long vowel			ไม้โอ	mai o	U+0E42: THAI CHARACTER SARA O	thai
แ		ɛː	ae	ɛː	E	ɛ	c	prescript long vowel					U+0E41: THAI CHARACTER SARA AE	thai
า		aː	a	aː	a	ā	k	vowel			ลากข้าง	lak khang	U+0E32: THAI CHARACTER SARA AA	thai
ั		-a-	a		a	ä	y	vowel			ไม้หันอากาศ	mai han a-kat	U+0E31: THAI CHARACTER MAI HAN-AKAT​	thai
ะ		a	a		a	a	t	vowel			วิสรรชนีย์	wisanchani	U+0E30: THAI CHARACTER SARA A	thai
ใ		aj	ai		a	äʲ	.	prescript long vowel			ไม้ม้วน	mai muan	U+0E43: THAI CHARACTER SARA AI MAIMUAN	thai
ไ		aj	ai		a	aʲ	w	prescript long vowel			ไม้มลาย	mai malai	U+0E44: THAI CHARACTER SARA AI MAIMALAI	thai
ำ		am			a	aᵐ	e	vowel					U+0E33: THAI CHARACTER SARA AM	thai
ํ						º	Y	nikahit					U+0E4D: THAI CHARACTER NIKHAHIT​	
														
														
ฤ		rɯ ri			r	r̥	A	vocalic			ตัว ฤ	tua rue	U+0E24: THAI CHARACTER RU	thai
ฦ		lɯ			l	l̥	?	vocalic					U+0E26: THAI CHARACTER LU	thai
ๅ		ɯː			W	ɯ̃	1	vocalic vowel lengthener					U+0E45: THAI CHARACTER LAKKHANGYAO	thai
														
														
														
่		̀		˩˩	^	¹	j	tone mark			ไม้เอก	májèːk	U+0E48: THAI CHARACTER MAI EK​	thai
้		̂		˩˥	^	²	h	tone mark			ไม้โท	májtʰoː	U+0E49: THAI CHARACTER MAI THO​	thai
๊		́		˥˩	^	³	U	tone mark			ไม้ตรี	májtriː	U+0E4A: THAI CHARACTER MAI TRI​	thai
๋		̌		˧˧	^	⁴	J	tone mark			ไม้จัตวา	májtɕàttàwaː	U+0E4B: THAI CHARACTER MAI CHATTAWA​	thai
				˦˥										
														
														
														
														
														
														
														
หว	s	w	w		w	hw̱		high class approximant					U+0E2B U+0E27: THAI CHARACTER HO HIP, THAI CHARACTER WO WAEN	
หร	s	r	r			hṟ		high class approximant					U+0E2B U+0E23: THAI CHARACTER HO HIP, THAI CHARACTER RO RUA	
หล	s	l	l			hḻ		high class approximant					U+0E2B U+0E25: THAI CHARACTER HO HIP, THAI CHARACTER LO LING	
หย	s	j	y			hy̱		high class approximant					U+0E2B U+0E22: THAI CHARACTER HO HIP, THAI CHARACTER YO YAK	
หญ	s	j	y			hẏ̱		high class approximant					U+0E2B U+0E0D: THAI CHARACTER HO HIP, THAI CHARACTER YO YING	
หม	s	m	m			hm̱		high class nasal					U+0E2B U+0E21: THAI CHARACTER HO HIP, CHARACTER MO MA	
หน	s	n	n			hṉ		high class nasal					U+0E2B U+0E19: THAI CHARACTER HO HIP, CHARACTER NO NU	
หง	s	ŋ	ng			hŋ̱		high class nasal					U+0E2B U+0E07: THAI CHARACTER HO HIP, CHARACTER NGO NGU	
														
														
														
เ-ียะ	s	IƏ	IA		I	e-īy̱a							U+0E40 U+0E35 U+0E22 U+0E30: THAI CHARACTER SARA E, SARA II, YO YAK, SARA A	
เ-ีย	s	IːƏ	IA		I	e-īy̱							U+0E40 U+0E35 U+0E22: THAI CHARACTER SARA E, SARA II, YO YAK	
ิว	s	IW	IO		I	iw̱							U+002D U+0E34 U+0E27: SARA I, WO WAEN	
เ-ียว	s	IƏW	IAO		I	e-īy̱w̱							U+0E40 U+0E35 U+0E22 U+0E27: THAI CHARACTER SARA E, SARA II, YO YAK, WO WAEN	
ือ	s	Ɯː	ŪE		W	ɯ̄ʔ̯							U+002D U+0E37 U+0E2D: SARA UEE, O ANG	
เ-ือะ	s	ƜƏ	UEA		W	e-ɯ̄ʔ̯a							U+0E40 U+0E37 U+0E2D U+0E30: THAI CHARACTER SARA E, SARA UEE, O ANG, SARA A	
เ-ือ	s	ƜːƏ	UEA		W	e-ɯ̄ʔ̯							U+0E40 U+0E37 U+0E2D: THAI CHARACTER SARA E, SARA UEE, O ANG	
เ-ือย	s	ƜƏJ	UEAI		W	e-ɯ̄ʔ̯y̱			~20 words only				U+0E40 U+0E37 U+0E2D U+0E22: THAI CHARACTER SARA E, SARA UEE, O ANG, YO YAK	
ัวะ	s	UƏ			U	äw̱a							U+002D U+0E31 U+0E27 U+0E30: MAI HAN-AKAT, WO WAEN, SARA A	
ัว	s	UːƏ	UA		U	äw̱							U+002D U+0E31 U+0E27: MAI HAN-AKAT, WO WAEN	
ุย	s	UJ	UI		U	uy̱			rare				U+002D U+0E38 U+0E22: SARA U, YO YAK	
ูย	s	UːJ	UI		U	ūy̱			rare				U+002D U+0E39 U+0E22: SARA UU, YO YAK	
วย	s	UƏJ	UAI		U	w̱y̱							U+002D U+0E27 U+0E22: WO WAEN, YO YAK	
เ-ะ	s	E	E		E	e-a							U+0E40 U+0E30: THAI CHARACTER SARA E, SARA A	
เ-็	s	-E-			E	e-˘							U+0E40 U+0E47: THAI CHARACTER SARA E, MAITAIKHU	
เ-็ว	s	EW	EO		E	e-˘w̱							U+0E40 U+0E47 U+0E27: THAI CHARACTER SARA E, MAITAIKHU, WO WAEN	
เ-ว	s	EːW	EO		E	e-w̱							U+0E40 U+0E27: THAI CHARACTER SARA E, WO WAEN	
เ-อะ	s	ɤ	OE		V	e-ʔ̯a			rare				U+0E40 U+0E2D U+0E30: THAI CHARACTER SARA E, O ANG, SARA A	
เ-อ	s	ɤː	OE		V¶	e-ʔ̯			rare				U+0E40 U+0E2D: THAI CHARACTER SARA E, O ANG	
เ-ิ	s	ɤː			V	e-i			rare				U+0E40 U+0E34: THAI CHARACTER SARA E, SARA I	
เ-ย	s	ɤːJ	OEI		V	e-y̱							U+0E40 U+0E22: THAI CHARACTER SARA E, YO YAK	
โ-ะ	s	O	O		O	o-a							U+0E42 U+0E30: THAI CHARACTER SARA O, SARA A	
็อ	s	-O-			O	˘ʔ̯							U+002D U+0E47 U+0E2D: MAITAIKHU, O ANG	
แ-ะ	s	Ɛ	AE		E	ɛ-a			not very common				U+0E41 U+0E30: THAI CHARACTER SARA AE, SARA A	
แ-็	s	-Ɛ-			E	ɛ-˘			rare				U+0E41 U+0E47: THAI CHARACTER SARA AE, MAITAIKHU	
แ-ว	s	ƐːW	AEO		E	ɛ-w̱							U+0E41 U+0E27: THAI CHARACTER SARA AE, WO WAEN	
เ-าะ	s	Ɔ	O		O	e-āa			rare				U+0E40 U+0E32 U+0E30: THAI CHARACTER SARA E, SARA AA, SARA A	
็อย	s	ƆJ			O	˘ʔ̯y̱							U+002D U+0E47 U+0E2D U+0E22: MAITAIKHU, O ANG, YO YAK	
โ-ย	s	ƆːJ	OI		O	o-y̱							U+0E42 U+0E22: THAI CHARACTER SARA O, YO YAK	
อย	s	ƆːJ	OI		O	ʔ̯y̱							U+002D U+0E2D U+0E22: O ANG, YO YAK	
ไ-ย	s	AJ	AI		A	aʲ-y̱							U+0E44 U+0E22: THAI CHARACTER SARA AI MAIMALAI, YO YAK	
ัย	s	AJ	AI		A	äy̱			rare				U+002D U+0E31 U+0E22: MAI HAN-AKAT, YO YAK	
าย	s	AːJ	AI		A	āy̱							U+002D U+0E32 U+0E22: SARA AA, YO YAK	
เ-า	s	AW	AO		A	e-ā							U+0E40 U+0E32: THAI CHARACTER SARA E, SARA AA	
าว	s	AːW	AO		A	āw̱							U+002D U+0E32 U+0E27: SARA AA, WO WAEN	
														
ฤๅ	s	RƜː			R	r̥ɯ̃							U+0E24 U+0E45: THAI CHARACTER RU, LAKKHANGYAO	
ฦๅ	s	LƜː			L	l̥ɯ̃							U+0E26 U+0E45: THAI CHARACTER LU, LAKKHANGYAO	
														
														
ฯลฯ	s	pajjaːnjài			E	⋯ḻ⋯							U+0E2F U+0E25 U+0E2F: THAI CHARACTER PAIYANNOI, LO LING, PAIYANNOI	
														
														
เ-	s	eː	e		e	e					ไม้หน้า	mai na	U+0E40: THAI CHARACTER SARA E	
โ-	s	oː	o		o	o					ไม้โอ	mai o	U+0E42: THAI CHARACTER SARA O	
แ-	s	ɛː	ae		E	ɛ							U+0E41: THAI CHARACTER SARA AE	
ใ-	s	aj	ai		a	äʲ					ไม้ม้วน	mai muan	U+0E43: THAI CHARACTER SARA AI MAIMUAN	
ไ-	s	aj	ai		a	aʲ					ไม้มลาย	mai malai	U+0E44: THAI CHARACTER SARA AI MAIMALAI	
-อ	s	ɔː	' o		}	ʔ̯		consonant used as vowel			อ อ่าง	o ang	U+0E2D: THAI CHARACTER O ANG	
														
														
														
				à	a	à								
				á	a	á								
				â	a	â								
				ǎ	a	ǎ								
				è	e	è								
				é	e	é								
				ê	e	ê								
				ě	e	ě								
				ɯ̀	w	ɯ̀								
				ɯ́	w	ɯ́								
				ɯ̌	w	ɯ̌								
				ɯ̂	w	ɯ̂								
				ì	i	ì								
				í	i	í								
				î	i	î								
				ǐ	i	ǐ								
				ù	u	ù								
				ú	u	ú								
				ǔ	u	ǔ								
				û	u	û								
				ò	o	ò								
				ó	o	ó								
				ô	o	ô								
				ǒ	o	ǒ								
				ɛ̀	e	ɛ̀								
				ɛ́	e	ɛ́								
				ɛ̂	e	ɛ̂								
				ɛ̌	e	ɛ̌								
				ɔ̀	o	ɔ̀								
				ɔ́	o	ɔ́								
				ɔ̂	o	ɔ̂								
				ɔ̌	o	ɔ̌								
				ɤ̀	v	ɤ̀								
				ɤ́	v	ɤ́								
				ɤ̂	v	ɤ̂								
				ɤ̌	v	ɤ̌								
														
														
๏					-	•		bullet					U+0E4F: THAI CHARACTER FONGMAN	thai
														
														
														
็		ɔː			[	˘	H	vowel shortener			ไม้ไต่คู้	mai tai khu	U+0E47: THAI CHARACTER MAITAIKHU​	thai
														
														
‍ଁ		̃	̃		[	˜		nasalisation						
														
														
ฺ					§	͓	B	virama	Pali				U+0E3A: THAI CHARACTER PHINTHU​	
๎					\	ʿ		cluster mark	archaic				U+0E4E: THAI CHARACTER YAMAKKAN​	thai
														
														
์					*	˟	N	cancellation mark			การันต์/ไม้ทัณฑฆาต	kaːran/májtʰantʰákʰâːt	U+0E4C: THAI CHARACTER THANTHAKHAT​	thai
‍ଽ					]	′		elision						
														
														
ๆ					&	&	q	repetition symbol			ไม้ยมก	májjàmòk	U+0E46: THAI CHARACTER MAIYAMOK	thai
														
														
ฯ					+	¨	O	abbreviation symbol/phrase terminator			พยาลน้อย/ไปยาลเล็ก	pʰájaːnnɔ́ːj/pajjaːnlék	U+0E2F: THAI CHARACTER PAIYANNOI	thai
														
														
\u200B					]	␣		ZWSP					U+200B ZERO WIDTH SPACE	thai
														
														
๚					|	¶		section end marker					U+0E5A: THAI CHARACTER ANGKHANKHU	thai
๛					|	|		chapter/document start marker					U+0E5B: THAI CHARACTER KHOMUT	thai
.			.		.	.	"	full stop					U+002E: FULL STOP	
,			,		,	,	}	comma					U+002C: COMMA	
:			:		:	:		colon					U+003A: COLON	
;			;		;	;		semicolon					U+003B: SEMICOLON	
!			!		!	!		exclamation mark					U+0021: EXCLAMATION MARK	
?			?		?	?	M	question mark					U+003F: QUESTION MARK	
														
														
…			…		.	…		ellipsis					U+2026: HORIZONTAL ELLIPSIS	
														
														
«			“		<	«		quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»			”		>	»		quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹			‘		<	‹		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	thai
›			’		>	›		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	thai
“			“		<	 “		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	thai
”			”		>	”		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	thai
‘			‘		<	‘		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	thai
’			’		>	’		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	thai
														
(			(		(	(	Z	parenthesis					U+0028: LEFT PARENTHESIS	thai
[			[		(	[		bracket					U+005B: LEFT SQUARE BRACKET	thai
)			)		)	)	X	parenthesis					U+0029: RIGHT PARENTHESIS	thai
]			]		)	]		bracket					U+005D: RIGHT SQUARE BRACKET	thai
														
														
-			-		-	-		hyphen					U+2010: HYPHEN	thai
‑			‑		-	‑		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	thai
–			–		-	–		en dash					U+2013: EN DASH	thai
—			—		-	—		em dash					U+2014: EM DASH	thai
														
														
														
ʼ			ʼ			ʼ		apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE	
§			§			§		section sign					U+00A7: SECTION SIGN	
†			†			†		dagger					U+2020: DAGGER	
‡			‡			‡		double dagger					U+2021: DOUBLE DAGGER	
′			′			′		prime					U+2032: PRIME	
″			″			″		double prime					U+2033: DOUBLE PRIME	
														
														
\u200B					]	␣		zero-width space					U+200B: ZERO WIDTH SPACE	thai
\u200C					=	ₓ		zwnj					U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊		zwj					U+200D: ZERO WIDTH JOINER	
\u034F					=	ᶜᵍʲ		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	thai
														
														
๐		0	0		0	0̣	Q	digit					U+0E50: THAI DIGIT ZERO	thai
๑		1	1		1	1̣	@	digit					U+0E51: THAI DIGIT ONE	thai
๒		2	2		2	2̣	#	digit					U+0E52: THAI DIGIT TWO	thai
๓		3	3		3	3̣	$	digit					U+0E53: THAI DIGIT THREE	thai
๔		4	4		4	4̣	%	digit					U+0E54: THAI DIGIT FOUR	thai
๕		5	5		5	5̣	*	digit					U+0E55: THAI DIGIT FIVE	thai
๖		6	6		6	6̣	(	digit					U+0E56: THAI DIGIT SIX	thai
๗		7	7		7	7̣	)	digit					U+0E57: THAI DIGIT SEVEN	thai
๘		8	8		8	8̣	_	digit					U+0E58: THAI DIGIT EIGHT	thai
๙		9	9		9	9̣	+	digit					U+0E59: THAI DIGIT NINE	thai
														
														
฿					#	¤	&	currency sign					U+0E3F: THAI CURRENCY SYMBOL BAHT	thai
														
														
														
%					%	%		percentage mark					U+0025: PERCENT SIGN	thai
‰					%	‰		per mille mark					U+2030: PER MILLE SIGN	thai


`



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 7,
"transckey": 0,
"typeLoc": 8,
"statusLoc": 9,
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

"othertranscriptions": [[3, 'ISO-2']]
}

