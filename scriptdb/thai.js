var spreadsheet = `
ป	p	p -p	o a	p	p̯	x	Lo		mid class plosive		ป ปลา	po pla	U+0E1B: THAI CHARACTER PO PLA	✓
พ	p	pʰ -p	o a	ph -p	p̱ʰ	r	Lo		low class plosive		พ พาน	pho phan	U+0E1E: THAI CHARACTER PHO PHAN	✓
ภ	p	pʰ -p	o a	ph -p	ṗ̱ʰ	4	Lo		low class plosive		ภ สำเภา	pho sam-phao	U+0E20: THAI CHARACTER PHO SAMPHAO	✓
ผ	p	pʰ	o a	ph	pʰ	z	Lo		high class plosive		ผ ผึ้ง	po pheung	U+0E1C: THAI CHARACTER PHO PHUNG	✓
บ	b	b -p	o a	b -p	b̯	[	Lo		mid class plosive		บ ใบไม้	bo baimai	U+0E1A: THAI CHARACTER BO BAIMAI	✓
ท	t	tʰ -t	o a	th -t	ṯʰ	m	Lo		low class plosive		ท ทหาร	tho thahan	U+0E17: THAI CHARACTER THO THAHAN	✓
ต	t	t -t	o a	t	t̯	9	Lo		mid class plosive		ต เต่า	to tao	U+0E15: THAI CHARACTER TO TAO	✓
ถ	t	tʰ -t	o a	th -t	tʰ	5	Lo		high class plosive		ถ ถุง	tho thung	U+0E16: THAI CHARACTER THO THUNG	✓
ธ	t	tʰ -t	o a	th -t	ṯ̇ʰ	T	Lo		low class plosive		ธ ธง	tho thong	U+0E18: THAI CHARACTER THO THONG	✓
ฐ	t	tʰ -t	o a	th -t	ṭʰ	{	Lo		high class plosive		ฐ ฐาน	tho than	U+0E10: THAI CHARACTER THO THAN	✓
ฏ	t	t -t	o a	t	ṭ̯	D	Lo		mid class plosive		ฏ ปฏัก	to pa-tak	U+0E0F: THAI CHARACTER TO PATAK	✓
ฒ	t	tʰ -t	o a	th -t	ṭ̱̇ʰ	<	Lo		low class plosive		ฒ ผู้เฒ่า	tho phu-thao	U+0E12: THAI CHARACTER THO PHUTHAO	✓
ฑ	t	tʰ -t	o a	th -t	ṭ̱ʰ	R	Lo		low class plosive		ฑ มณโฑ	tho montho	U+0E11: THAI CHARACTER THO NANGMONTHO	✓
ด	d	d -t	o a	d -t	d̯	f	Lo		mid class plosive		ด เด็ก	do dek	U+0E14: THAI CHARACTER DO DEK	✓
ฎ	d	d -t	o a	d -t	ḍ̯	E	Lo		mid class plosive		ฎ ชฎา	do cha-da	U+0E0E: THAI CHARACTER DO CHADA	✓
ก	k	k -k	o a	k -k	k̯	d	Lo		mid class plosive		ก ไก่	ko kai 	U+0E01: THAI CHARACTER KO KAI	✓
ค	k	kʰ -k	o a	kh -k	ḵʰ	8	Lo		low class plosive		ค ควาย	kho khwāi 	U+0E04: THAI CHARACTER KHO KHWAI	✓
ข	k	kʰ -k	o a	kh -k	kʰ	-	Lo		high class plosive		ข ไข่	kho khai 	U+0E02: THAI CHARACTER KHO KHAI	✓
ฆ	k	kʰ -k	o a	kh -k	ḵ̇ʰ	S	Lo		low class plosive		ฆ ระฆัง	kho ra-khang	U+0E06: THAI CHARACTER KHO RAKHANG	✓
ฃ	k	kʰ -k	o a	kh -k	k̈ʰ	\	Lo	o	high class plosive	obsolete	ฃ ขวด	kho khūat 	U+0E03: THAI CHARACTER KHO KHUAT	✓
ฅ	k	kʰ -k	o a	kh -k	ḵ̈ʰ	|	Lo	o	low class plosive	obsolete	ฅ คน	kho khon	U+0E05: THAI CHARACTER KHO KHON	✓
														
จ	c	t͡ɕ -t	o a	ch -t	c̯	0	Lo		mid class affricate		จ จาน	cho chan	U+0E08: THAI CHARACTER CHO CHAN	✓
ช	c	t͡ɕʰ -t	o a	ch -t	c̱ʰ	=	Lo		low class affricate		ช ช้าง	cho chang	U+0E0A: THAI CHARACTER CHO CHANG	✓
ฉ	c	t͡ɕʰ	o a	ch	cʰ	C	Lo		high class affricate		ฉ ฉิ่ง	cho ching	U+0E09: THAI CHARACTER CHO CHING	✓
ฌ	c	t͡ɕʰ	o a	ch	ċ̱ʰ	G	Lo		low class affricate		ฌ เฌอ	cho choe	U+0E0C: THAI CHARACTER CHO CHOE	✓
														
ม	m	m	o a	m	m̱	,	Lo		low class nasal		ม ม้า	mo ma	U+0E21: THAI CHARACTER MO MA	✓
น	n	n	o a	n	ṉ	o	Lo		low class nasal		น หนู	no nu	U+0E19: THAI CHARACTER NO NU	✓
ง	n	ŋ	o a	ng	ŋ̱	'	Lo		low class nasal		ง งู	ngo ngu	U+0E07: THAI CHARACTER NGO NGU	✓
ณ	n	n	o a	n	ṇ̱	I	Lo		low class nasal		ณ เณร	no nen	U+0E13: THAI CHARACTER NO NEN	✓
														
ฟ	f	f	o a	f	f̱	a	Lo		low class fricative		ฝ ฝา	fo fa	U+0E1F: THAI CHARACTER FO FAN	✓
ฝ	f	f -p	o a	f -p	f	/	Lo		high class fricative		ฟ ฟัน	fo fan	U+0E1D: THAI CHARACTER FO FA	✓
ห	h	h	o a	h	h	s	Lo		high class fricative		ห หีบ	ho hip	U+0E2B: THAI CHARACTER HO HIP	✓
ฮ	h	h	o a	h	ẖ	V	Lo		low class fricative		ฮ นกฮูก	ho nok-huk	U+0E2E: THAI CHARACTER HO NOKHUK	✓
ส	s	s -t	o a	s -t	s	l	Lo		high class fricative		ส เสือ	so suea	U+0E2A: THAI CHARACTER SO SUA	✓
ศ	s	s -t	o a	s -t	ś	L	Lo		high class fricative		ศ ศาลา	so sala	U+0E28: THAI CHARACTER SO SALA	✓
ซ	s	s -t	o a	s -t	ṡ̱	:	Lo		low class fricative		ซ โซ่	so so	U+0E0B: THAI CHARACTER SO SO	✓
ษ	s	s -t	o a	s -t	ṣ	K	Lo		high class fricative		ษ ฤๅษี	so rue-si	U+0E29: THAI CHARACTER SO RUSI	✓
														
														
ว	w	w	o a	w	w̱	;	Lo		low class approximant		ว แหวน	wo waen	U+0E27: THAI CHARACTER WO WAEN	✓
ร	r	r -n	o a	r -n	ṟ	i	Lo		low class approximant		ร เรือ	ro ruea	U+0E23: THAI CHARACTER RO RUA	✓
ล	l	l -n	o a	l -n	ḻ	]	Lo		low class approximant		ล ลิง	lo ling	U+0E25: THAI CHARACTER LO LING	✓
ฬ	l	l -n	o a	l -n	ḻ̇	>	Lo		low class approximant		ฬ จุฬา	lo chu-la	U+0E2C: THAI CHARACTER LO CHULA	✓
ย	y	j (-n)	o a	y (-n)	y̱	p	Lo		low class approximant		ย ยักษ์	yo yak	U+0E22: THAI CHARACTER YO YAK	✓
ญ	y	j -n	o a	y -n	ẏ̱	P	Lo		low class approximant		ญ หญิง	yo ying	U+0E0D: THAI CHARACTER YO YING	✓
														
อ	}	- ɔː		' o	ʔ̯	v	Lo		mid class vowel carrier/vowel		อ อ่าง	o ang	U+0E2D: THAI CHARACTER O ANG	✓
														
														
														
														
ิ	i	i		i	i	b	Mn		short vowel		พินทุอิ	phinthu i	U+0E34: THAI CHARACTER SARA I​	✓
ี	i	iː		i	ī	u	Mn		long vowel		ฝนทอง	fong thong	U+0E35: THAI CHARACTER SARA II​	✓
ึ	W	ɯ		ue	ɯ	7	Mn		short vowel		นิคหิต	nikkhahit	U+0E36: THAI CHARACTER SARA UE​	✓
ื	W	ɯː		ue	ɯ̄	n	Mn		long vowel		ฟันหนู	fan nu	U+0E37: THAI CHARACTER SARA UEE​	✓
ุ	u	u		u	u	6	Mn		short vowel		ตีนเหยียด	tin yiat	U+0E38: THAI CHARACTER SARA U​	✓
ู	u	uː		u	ū	^	Mn		long vowel		ตีนคู้	tin khu	U+0E39: THAI CHARACTER SARA UU​	✓
เ	e	eː		e	e	g	Lo		prescript long vowel		ไม้หน้า	mai na	U+0E40: THAI CHARACTER SARA E	✓
โ	o	oː		o	o	F	Lo		prescript long vowel		ไม้โอ	mai o	U+0E42: THAI CHARACTER SARA O	✓
แ	E	ɛː		ae	ɛ	c	Lo		prescript long vowel				U+0E41: THAI CHARACTER SARA AE	✓
า	a	aː		a	ā	k	Lo		vowel		ลากข้าง	lak khang	U+0E32: THAI CHARACTER SARA AA	✓
ั	a	-a-		a	ä	y	Mn		vowel		ไม้หันอากาศ	mai han a-kat	U+0E31: THAI CHARACTER MAI HAN-AKAT​	✓
ะ	a	a		a	a	t	Lo		vowel		วิสรรชนีย์	wisanchani	U+0E30: THAI CHARACTER SARA A	✓
ใ	a	aj		ai	äʲ	.	Lo		prescript long vowel		ไม้ม้วน	mai muan	U+0E43: THAI CHARACTER SARA AI MAIMUAN	✓
ไ	a	aj		ai	aʲ	w	Lo		prescript long vowel		ไม้มลาย	mai malai	U+0E44: THAI CHARACTER SARA AI MAIMALAI	✓
ำ	a	am			aᵐ	e	Lo		vowel				U+0E33: THAI CHARACTER SARA AM	✓
ํ					º	Y	Mn		nikahit				U+0E4D: THAI CHARACTER NIKHAHIT​	✓
														
														
ฤ	r	rɯ ri			r̥	A	Lo		vocalic		ตัว ฤ	tua rue	U+0E24: THAI CHARACTER RU	✓
ฦ	l	lɯ			l̥	?	Lo		vocalic				U+0E26: THAI CHARACTER LU	✓
ๅ	W	ɯː			ɯ̃	1	Lo		vocalic vowel lengthener				U+0E45: THAI CHARACTER LAKKHANGYAO	✓
														
														
														
่	^	̀			¹	j	Mn		tone mark		ไม้เอก	májèːk	U+0E48: THAI CHARACTER MAI EK​	✓
้	^	̂			²	h	Mn		tone mark		ไม้โท	májtʰoː	U+0E49: THAI CHARACTER MAI THO​	✓
๊	^	́			³	U	Mn		tone mark		ไม้ตรี	májtriː	U+0E4A: THAI CHARACTER MAI TRI​	✓
๋	^	̌			⁴	J	Mn		tone mark		ไม้จัตวา	májtɕàttàwaː	U+0E4B: THAI CHARACTER MAI CHATTAWA​	✓
														
														
														
														
														
														
														
														
หว	w	w		w	hw̱		s		high class approximant				U+0E2B U+0E27: THAI CHARACTER HO HIP, THAI CHARACTER WO WAEN	
หร		r		r	hṟ		s		high class approximant				U+0E2B U+0E23: THAI CHARACTER HO HIP, THAI CHARACTER RO RUA	
หล		l		l	hḻ		s		high class approximant				U+0E2B U+0E25: THAI CHARACTER HO HIP, THAI CHARACTER LO LING	
หย		j		y	hy̱		s		high class approximant				U+0E2B U+0E22: THAI CHARACTER HO HIP, THAI CHARACTER YO YAK	
หญ		j		y	hẏ̱		s		high class approximant				U+0E2B U+0E0D: THAI CHARACTER HO HIP, THAI CHARACTER YO YING	
หม		m		m	hm̱		s		high class nasal				U+0E2B U+0E21: THAI CHARACTER HO HIP, CHARACTER MO MA	
หน		n		n	hṉ		s		high class nasal				U+0E2B U+0E19: THAI CHARACTER HO HIP, CHARACTER NO NU	
หง		ŋ		ng	hŋ̱		s		high class nasal				U+0E2B U+0E07: THAI CHARACTER HO HIP, CHARACTER NGO NGU	
														
														
														
เ-ียะ	I	IƏ		IA	e-īy̱a		s						U+0E40 U+0E35 U+0E22 U+0E30: THAI CHARACTER SARA E, SARA II, YO YAK, SARA A	
เ-ีย	I	IːƏ		IA	e-īy̱		s						U+0E40 U+0E35 U+0E22: THAI CHARACTER SARA E, SARA II, YO YAK	
ิว	I	IW		IO	iw̱		s						U+002D U+0E34 U+0E27: SARA I, WO WAEN	
เ-ียว	I	IƏW		IAO	e-īy̱w̱		s						U+0E40 U+0E35 U+0E22 U+0E27: THAI CHARACTER SARA E, SARA II, YO YAK, WO WAEN	
ือ	W	Ɯː		ŪE	ɯ̄ʔ̯		s						U+002D U+0E37 U+0E2D: SARA UEE, O ANG	
เ-ือะ	W	ƜƏ		UEA	e-ɯ̄ʔ̯a		s						U+0E40 U+0E37 U+0E2D U+0E30: THAI CHARACTER SARA E, SARA UEE, O ANG, SARA A	
เ-ือ	W	ƜːƏ		UEA	e-ɯ̄ʔ̯		s						U+0E40 U+0E37 U+0E2D: THAI CHARACTER SARA E, SARA UEE, O ANG	
เ-ือย	W	ƜƏJ		UEAI	e-ɯ̄ʔ̯y̱		s	r		~20 words only			U+0E40 U+0E37 U+0E2D U+0E22: THAI CHARACTER SARA E, SARA UEE, O ANG, YO YAK	
ัวะ	U	UƏ			äw̱a		s						U+002D U+0E31 U+0E27 U+0E30: MAI HAN-AKAT, WO WAEN, SARA A	
ัว	U	UːƏ		UA	äw̱		s						U+002D U+0E31 U+0E27: MAI HAN-AKAT, WO WAEN	
ุย	U	UJ		UI	uy̱		s	r		rare			U+002D U+0E38 U+0E22: SARA U, YO YAK	
ูย	U	UːJ		UI	ūy̱		s	r		rare			U+002D U+0E39 U+0E22: SARA UU, YO YAK	
วย	U	UƏJ		UAI	w̱y̱		s						U+002D U+0E27 U+0E22: WO WAEN, YO YAK	
เ-ะ	E	E		E	e-a		s						U+0E40 U+0E30: THAI CHARACTER SARA E, SARA A	
เ-็	E	-E-			e-˘		s						U+0E40 U+0E47: THAI CHARACTER SARA E, MAITAIKHU	
เ-็ว	E	EW		EO	e-˘w̱		s						U+0E40 U+0E47 U+0E27: THAI CHARACTER SARA E, MAITAIKHU, WO WAEN	
เ-ว	E	EːW		EO	e-w̱		s						U+0E40 U+0E27: THAI CHARACTER SARA E, WO WAEN	
เ-อะ	V	ɤ		OE	e-ʔ̯a		s	r		rare			U+0E40 U+0E2D U+0E30: THAI CHARACTER SARA E, O ANG, SARA A	
เ-อ	V¶	ɤː		OE	e-ʔ̯		s	r		rare			U+0E40 U+0E2D: THAI CHARACTER SARA E, O ANG	
เ-ิ	V	ɤː			e-i		s	r		rare			U+0E40 U+0E34: THAI CHARACTER SARA E, SARA I	
เ-ย	V	ɤːJ		OEI	e-y̱		s						U+0E40 U+0E22: THAI CHARACTER SARA E, YO YAK	
โ-ะ	O	O		O	o-a		s						U+0E42 U+0E30: THAI CHARACTER SARA O, SARA A	
็อ	O	-O-			˘ʔ̯		s						U+002D U+0E47 U+0E2D: MAITAIKHU, O ANG	
แ-ะ	E	Ɛ		AE	ɛ-a		s	i		not very common			U+0E41 U+0E30: THAI CHARACTER SARA AE, SARA A	
แ-็	E	-Ɛ-			ɛ-˘		s	r		rare			U+0E41 U+0E47: THAI CHARACTER SARA AE, MAITAIKHU	
แ-ว	E	ƐːW		AEO	ɛ-w̱		s						U+0E41 U+0E27: THAI CHARACTER SARA AE, WO WAEN	
เ-าะ	O	Ɔ		O	e-āa		s	r		rare			U+0E40 U+0E32 U+0E30: THAI CHARACTER SARA E, SARA AA, SARA A	
็อย	O	ƆJ			˘ʔ̯y̱		s						U+002D U+0E47 U+0E2D U+0E22: MAITAIKHU, O ANG, YO YAK	
โ-ย	O	ƆːJ		OI	o-y̱		s						U+0E42 U+0E22: THAI CHARACTER SARA O, YO YAK	
อย	O	ƆːJ		OI	ʔ̯y̱		s						U+002D U+0E2D U+0E22: O ANG, YO YAK	
ไ-ย	A	AJ		AI	aʲ-y̱		s						U+0E44 U+0E22: THAI CHARACTER SARA AI MAIMALAI, YO YAK	
ัย	A	AJ		AI	äy̱		s	r		rare			U+002D U+0E31 U+0E22: MAI HAN-AKAT, YO YAK	
าย	A	AːJ		AI	āy̱		s						U+002D U+0E32 U+0E22: SARA AA, YO YAK	
เ-า	A	AW		AO	e-ā		s						U+0E40 U+0E32: THAI CHARACTER SARA E, SARA AA	
าว	A	AːW		AO	āw̱		s						U+002D U+0E32 U+0E27: SARA AA, WO WAEN	
														
ฤๅ	R	RƜː			r̥ɯ̃		s						U+0E24 U+0E45: THAI CHARACTER RU, LAKKHANGYAO	
ฦๅ	L	LƜː			l̥ɯ̃		s						U+0E26 U+0E45: THAI CHARACTER LU, LAKKHANGYAO	
														
														
ฯลฯ	E	pajjaːnjài			⋯ḻ⋯		s						U+0E2F U+0E25 U+0E2F: THAI CHARACTER PAIYANNOI, LO LING, PAIYANNOI	
														
														
เ-	e	eː		e	e		s				ไม้หน้า	mai na	U+0E40: THAI CHARACTER SARA E	
โ-	o	oː		o	o		s				ไม้โอ	mai o	U+0E42: THAI CHARACTER SARA O	
แ-	E	ɛː		ae	ɛ		s						U+0E41: THAI CHARACTER SARA AE	
ใ-	a	aj		ai	äʲ		s				ไม้ม้วน	mai muan	U+0E43: THAI CHARACTER SARA AI MAIMUAN	
ไ-	a	aj		ai	aʲ		s				ไม้มลาย	mai malai	U+0E44: THAI CHARACTER SARA AI MAIMALAI	
-อ	}	ɔː		' o	ʔ̯		s		consonant used as vowel		อ อ่าง	o ang	U+0E2D: THAI CHARACTER O ANG	
														
														
														
	a				à									
	a				á									
	a				â									
	a				ǎ									
	e				è									
	e				é									
	e				ê									
	e				ě									
	w				ɯ̀									
	w				ɯ́									
	w				ɯ̌									
	w				ɯ̂									
	i				ì									
	i				í									
	i				î									
	i				ǐ									
	u				ù									
	u				ú									
	u				ǔ									
	u				û									
	o				ò									
	o				ó									
	o				ô									
	o				ǒ									
	e				ɛ̀									
	e				ɛ́									
	e				ɛ̂									
	e				ɛ̌									
	o				ɔ̀									
	o				ɔ́									
	o				ɔ̂									
	o				ɔ̌									
	v				ɤ̀									
	v				ɤ́									
	v				ɤ̂									
	v				ɤ̌									
														
														
๏	-				•		Po		bullet				U+0E4F: THAI CHARACTER FONGMAN	✓
														
														
														
็	[	ɔː			˘	H	Mn		vowel shortener		ไม้ไต่คู้	mai tai khu	U+0E47: THAI CHARACTER MAITAIKHU​	✓
														
														
‍ଁ	[	̃		̃	˜		Mn		nasalisation					
														
														
ฺ	§				͓	B	Mn	l	virama	Pali			U+0E3A: THAI CHARACTER PHINTHU​	✓
๎	\				ʿ		Mn	a	cluster mark	archaic			U+0E4E: THAI CHARACTER YAMAKKAN​	✓
														
														
์	*				˟	N	Mn		cancellation mark		การันต์/ไม้ทัณฑฆาต	kaːran/májtʰantʰákʰâːt	U+0E4C: THAI CHARACTER THANTHAKHAT​	✓
‍ଽ	]				′				elision					
														
														
ๆ	&				&	q	Lm		repetition symbol		ไม้ยมก	májjàmòk	U+0E46: THAI CHARACTER MAIYAMOK	✓
														
														
ฯ	+				¨	O	Po		abbreviation symbol/phrase terminator		พยาลน้อย/ไปยาลเล็ก	pʰájaːnnɔ́ːj/pajjaːnlék	U+0E2F: THAI CHARACTER PAIYANNOI	✓
														
														
\u200B	]				␣		Cf		ZWSP				U+200B ZERO WIDTH SPACE	
														
														
๚	|				¶		Po		section end marker				U+0E5A: THAI CHARACTER ANGKHANKHU	✓
๛	|				|		Po		chapter/document start marker				U+0E5B: THAI CHARACTER KHOMUT	✓
.	.			.	.	"	Po		full stop				U+002E: FULL STOP	
,	,			,	,	}	Po		comma				U+002C: COMMA	
:	:			:	:		Po		colon				U+003A: COLON	
;	;			;	;		Po		semicolon				U+003B: SEMICOLON	
!	!			!	!		Po		exclamation mark				U+0021: EXCLAMATION MARK	
?	?			?	?	M	Po		question mark				U+003F: QUESTION MARK	
														
														
…	.			…	…		Po		ellipsis				U+2026: HORIZONTAL ELLIPSIS	
														
														
«	<			“	«		Pi		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»	>			”	»		Pf		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	<			‘	‹		Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
›	>			’	›		Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
“	<			“	 “		Pi		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
”	>			”	”		Pf		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
‘	<			‘	‘		Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
’	>			’	’		Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
														
(	(			(	(	Z	Ps		parenthesis				U+0028: LEFT PARENTHESIS	
)	)			)	)	X	Pe		parenthesis				U+0029: RIGHT PARENTHESIS	
[	(			[	[		Ps		bracket				U+005B: LEFT SQUARE BRACKET	
]	)			]	]		Pe		bracket				U+005D: RIGHT SQUARE BRACKET	
														
														
-	-			-	-		Pd		hyphen				U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen				U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash				U+2013: EN DASH	
—	-			—	—		Pd		em dash				U+2014: EM DASH	
														
														
														
ʼ				ʼ	ʼ		Lm		apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po		section sign				U+00A7: SECTION SIGN	
†				†	†		Po		dagger				U+2020: DAGGER	
‡				‡	‡		Po		double dagger				U+2021: DOUBLE DAGGER	
′				′	′		Po		prime				U+2032: PRIME	
″				″	″		Po		double prime				U+2033: DOUBLE PRIME	
														
														
\u200B	]				␣		Cf		zero-width space				U+200B: ZERO WIDTH SPACE	
\u200C	=				ₓ		Cf		zwnj				U+200C: ZERO WIDTH NON-JOINER	
\u200D	=				₊		Cf		zwj				U+200D: ZERO WIDTH JOINER	
\u034F	=				ᶜᵍʲ				combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER​	
														
														
๐	0	0		0	0̣	Q	Nd		digit				U+0E50: THAI DIGIT ZERO	✓
๑	1	1		1	1̣	@	Nd		digit				U+0E51: THAI DIGIT ONE	✓
๒	2	2		2	2̣	#	Nd		digit				U+0E52: THAI DIGIT TWO	✓
๓	3	3		3	3̣	$	Nd		digit				U+0E53: THAI DIGIT THREE	✓
๔	4	4		4	4̣	%	Nd		digit				U+0E54: THAI DIGIT FOUR	✓
๕	5	5		5	5̣	*	Nd		digit				U+0E55: THAI DIGIT FIVE	✓
๖	6	6		6	6̣	(	Nd		digit				U+0E56: THAI DIGIT SIX	✓
๗	7	7		7	7̣	)	Nd		digit				U+0E57: THAI DIGIT SEVEN	✓
๘	8	8		8	8̣	_	Nd		digit				U+0E58: THAI DIGIT EIGHT	✓
๙	9	9		9	9̣	+	Nd		digit				U+0E59: THAI DIGIT NINE	✓
														
														
฿	#				¤	&	Sc		currency sign				U+0E3F: THAI CURRENCY SYMBOL BAHT	✓
														
														
														
%	%				%		Po		percentage mark				U+0025: PERCENT SIGN	
‰	%				‰		Po		per mille mark				U+2030: PER MILLE SIGN	



`



latinPanel = '˩˩ ˩˥ ˥˩ ˧˧ aː eː ɛː iː kʰ ŋ ɔː oː pʰ tʰ t͡ɕ t͡ɕʰ uː ɯ ɯː'



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

"othertranscriptions": [[4, 'ISO-2']]
}

