var spreadsheet = `
ก		k	k̯	k -k	k -k	mid class consonant		ko kai 	ก ไก่	U+0E01: THAI CHARACTER KO KAI
ข		k	kʰ	kʰ -k	kh -k	high class consonant		kho khai 	ข ไข่	U+0E02: THAI CHARACTER KHO KHAI
ฃ		k	k̈ʰ	kʰ -k	kh -k	high class consonant	obsolete	kho khūat 	ฃ ขวด	U+0E03: THAI CHARACTER KHO KHUAT
ค		k	ḵʰ	kʰ -k	kh -k	low class consonant		kho khwāi 	ค ควาย	U+0E04: THAI CHARACTER KHO KHWAI
ฆ		k	ḵ̇ʰ	kʰ -k	kh -k	low class consonant		kho ra-khang	ฆ ระฆัง	U+0E06: THAI CHARACTER KHO RAKHANG
ฅ		k	ḵ̈ʰ	kʰ -k	kh -k	low class consonant	obsolete	kho khon	ฅ คน	U+0E05: THAI CHARACTER KHO KHON
ง		n	ŋ̱	ŋ̱	ng	low class consonant		ngo ngu	ง งู	U+0E07: THAI CHARACTER NGO NGU
										
จ		c	c̯	tɕ -t	ch -t	mid class consonant		cho chan	จ จาน	U+0E08: THAI CHARACTER CHO CHAN
ฉ		c	cʰ	tɕʰ	ch	high class consonant		cho ching	ฉ ฉิ่ง	U+0E09: THAI CHARACTER CHO CHING
ช		c	c̱ʰ	tɕʰ -t	ch -t	low class consonant		cho chang	ช ช้าง	U+0E0A: THAI CHARACTER CHO CHANG
ฌ		c	ċ̱ʰ	tɕʰ	ch	low class consonant		cho choe	ฌ เฌอ	U+0E0C: THAI CHARACTER CHO CHOE
										
ฏ		t	ṭ̯	t -t	t	mid class consonant		to pa-tak	ฏ ปฏัก	U+0E0F: THAI CHARACTER TO PATAK
ฐ		t	ṭʰ	tʰ -t	th -t	high class consonant		tho than	ฐ ฐาน	U+0E10: THAI CHARACTER THO THAN
ฑ		t	ṭ̱ʰ	tʰ -t	th -t	low class consonant		tho montho	ฑ มณโฑ	U+0E11: THAI CHARACTER THO NANGMONTHO
ฒ		t	ṭ̱̇ʰ	tʰ -t	th -t	low class consonant		tho phu-thao	ฒ ผู้เฒ่า	U+0E12: THAI CHARACTER THO PHUTHAO
ฎ		d	ḍ̯	d -t	d -t	mid class consonant		do cha-da	ฎ ชฎา	U+0E0E: THAI CHARACTER DO CHADA
ณ		n	ṇ̱	n	n	low class consonant		no nen	ณ เณร	U+0E13: THAI CHARACTER NO NEN
										
ต		t	t̯	t -t	t	mid class consonant		to tao	ต เต่า	U+0E15: THAI CHARACTER TO TAO
ถ		t	tʰ	tʰ -t	th -t	high class consonant		tho thung	ถ ถุง	U+0E16: THAI CHARACTER THO THUNG
ท		t	ṯʰ	tʰ -t	th -t	low class consonant		tho thahan	ท ทหาร	U+0E17: THAI CHARACTER THO THAHAN
ธ		t	ṯ̇ʰ	tʰ -t	th -t	low class consonant		tho thong	ธ ธง	U+0E18: THAI CHARACTER THO THONG
ด		d	d̯	d -t	d -t	mid class consonant		do dek	ด เด็ก	U+0E14: THAI CHARACTER DO DEK
น		n	ṉ	n	n	low class consonant		no nu	น หนู	U+0E19: THAI CHARACTER NO NU
										
ป		p	p̯	p -p	p	mid class consonant		po pla	ป ปลา	U+0E1B: THAI CHARACTER PO PLA
ผ		p	pʰ	pʰ	ph	high class consonant		po pheung	ผ ผึ้ง	U+0E1C: THAI CHARACTER PHO PHUNG
พ		p	p̱ʰ	pʰ -p	ph -p	low class consonant		pho phan	พ พาน	U+0E1E: THAI CHARACTER PHO PHAN
ภ		p	ṗ̱ʰ	pʰ -p	ph -p	low class consonant		pho sam-phao	ภ สำเภา	U+0E20: THAI CHARACTER PHO SAMPHAO
บ		b	b̯	b -p	b -p	mid class consonant		bo baimai	บ ใบไม้	U+0E1A: THAI CHARACTER BO BAIMAI
ม		m	m̱	m	m	low class consonant		mo ma	ม ม้า	U+0E21: THAI CHARACTER MO MA
										
ล		l	ḻ	l -n	l -n	low class consonant		lo ling	ล ลิง	U+0E25: THAI CHARACTER LO LING
ฬ		l	ḻ̇	l -n	l -n	low class consonant		lo chu-la	ฬ จุฬา	U+0E2C: THAI CHARACTER LO CHULA
ย		y	y̱	j (-n)	y (-n)	low class consonant		yo yak	ย ยักษ์	U+0E22: THAI CHARACTER YO YAK
ญ		y	ẏ̱	j -n	y -n	low class consonant		yo ying	ญ หญิง	U+0E0D: THAI CHARACTER YO YING
ร		r	ṟ	r -n	r -n	low class consonant		ro ruea	ร เรือ	U+0E23: THAI CHARACTER RO RUA
ว		w	w̱	w	w	low class consonant		wo waen	ว แหวน	U+0E27: THAI CHARACTER WO WAEN
										
ห		h	h	h	h	high class consonant		ho hip	ห หีบ	U+0E2B: THAI CHARACTER HO HIP
ฮ		h	ẖ	h	h	low class consonant		ho nok-huk	ฮ นกฮูก	U+0E2E: THAI CHARACTER HO NOKHUK
ส		s	s	s -t	s -t	high class consonant		so suea	ส เสือ	U+0E2A: THAI CHARACTER SO SUA
ศ		s	ś	s -t	s -t	high class consonant		so sala	ศ ศาลา	U+0E28: THAI CHARACTER SO SALA
ษ		s	ṣ	s -t	s -t	high class consonant		so rue-si	ษ ฤๅษี	U+0E29: THAI CHARACTER SO RUSI
ซ		s	ṡ̱	s -t	s -t	low class consonant		so so	ซ โซ่	U+0E0B: THAI CHARACTER SO SO
ฝ		f	f	f -p	f -p	high class consonant		fo fan	ฟ ฟัน	U+0E1D: THAI CHARACTER FO FA
ฟ		f	f̱	f	f	low class consonant		fo fa	ฝ ฝา	U+0E1F: THAI CHARACTER FO FAN
										
อ		}	ʔ̯	- ɔː	' o	mid class consonant		o ang	อ อ่าง	U+0E2D: THAI CHARACTER O ANG
										
										
										
										
เ		e	e	eː	e			mai na	ไม้หน้า	U+0E40: THAI CHARACTER SARA E
แ		e	ɛ	ɛː	ae					U+0E41: THAI CHARACTER SARA AE
โ		o	o	oː	o			mai o	ไม้โอ	U+0E42: THAI CHARACTER SARA O
ใ		a	äʲ	aj	ai			mai muan	ไม้ม้วน	U+0E43: THAI CHARACTER SARA AI MAIMUAN
ไ		a	aʲ	aj	ai			mai malai	ไม้มลาย	U+0E44: THAI CHARACTER SARA AI MAIMALAI
										
ะ		a	a	a	a			wisanchani	วิสรรชนีย์	U+0E30: THAI CHARACTER SARA A
ั		a	ä	a	a			mai han a-kat	ไม้หันอากาศ	U+0E31: THAI CHARACTER MAI HAN-AKAT​
า		a	ā	aː	a			lak khang	ลากข้าง	U+0E32: THAI CHARACTER SARA AA
ิ		i	i	i	i			phinthu i	พินทุอิ	U+0E34: THAI CHARACTER SARA I​
ี		i	ī	iː	i			fong thong	ฝนทอง	U+0E35: THAI CHARACTER SARA II​
ึ		u	ɯ	ɯ	ue			nikkhahit	นิคหิต	U+0E36: THAI CHARACTER SARA UE​
ื		u	ɯ̄	ɯː	ue			fan nu	ฟันหนู	U+0E37: THAI CHARACTER SARA UEE​
ุ		u	u	u	u			tin yiat	ตีนเหยียด	U+0E38: THAI CHARACTER SARA U​
ู		u	ū	uː	u			tin khu	ตีนคู้	U+0E39: THAI CHARACTER SARA UU​
ำ		a	aᵐ	am						U+0E33: THAI CHARACTER SARA AM
										
										
ฤ		r	r̥	rɯ ri				tua rue	ตัว ฤ	U+0E24: THAI CHARACTER RU
ฦ		l	l̥	lɯ						U+0E26: THAI CHARACTER LU
ๅ		u	ɯ̃	ɯː		vocalic vowel lengthener				U+0E45: THAI CHARACTER LAKKHANGYAO
										
										
										
่		^	¹	̀		tone mark		májèːk	ไม้เอก	U+0E48: THAI CHARACTER MAI EK​
้		^	²	̂		tone mark		májtʰoː	ไม้โท	U+0E49: THAI CHARACTER MAI THO​
๊		^	³	́		tone mark		májtriː	ไม้ตรี	U+0E4A: THAI CHARACTER MAI TRI​
๋		^	⁴	̌		tone mark		májtɕàttàwaː	ไม้จัตวา	U+0E4B: THAI CHARACTER MAI CHATTAWA​
										
										
์		*	˟			cancellation mark		kaːran/májtʰantʰákʰâːt	การันต์/ไม้ทัณฑฆาต	U+0E4C: THAI CHARACTER THANTHAKHAT​
็		[	˘	ɔː		vowel shortener		mai tai khu	ไม้ไต่คู้	U+0E47: THAI CHARACTER MAITAIKHU​
										
										
๐		0	0	0		digit				U+0E50: THAI DIGIT ZERO
๑		1	1	1		digit				U+0E51: THAI DIGIT ONE
๒		2	2	2		digit				U+0E52: THAI DIGIT TWO
๓		3	3	3		digit				U+0E53: THAI DIGIT THREE
๔		4	4	4		digit				U+0E54: THAI DIGIT FOUR
๕		5	5	5		digit				U+0E55: THAI DIGIT FIVE
๖		6	6	6		digit				U+0E56: THAI DIGIT SIX
๗		7	7	7		digit				U+0E57: THAI DIGIT SEVEN
๘		8	8	8		digit				U+0E58: THAI DIGIT EIGHT
๙		9	9	9		digit				U+0E59: THAI DIGIT NINE
										
										
฿		±	¤			currency sign				U+0E3F: THAI CURRENCY SYMBOL BAHT
๚		|	¶			section end marker				U+0E5A: THAI CHARACTER ANGKHANKHU
๛		|	|			chapter/document start marker				U+0E5B: THAI CHARACTER KHOMUT
ๆ		&	˖			repetition symbol		májjàmòk	ไม้ยมก	U+0E46: THAI CHARACTER MAIYAMOK
ฯ		.	⋯			abbreviation symbol/phrase terminator		pʰájaːnnɔ́ːj/pajjaːnlék	พยาลน้อย/ไปยาลเล็ก	U+0E2F: THAI CHARACTER PAIYANNOI
๏		-	•			bullet				U+0E4F: THAI CHARACTER FONGMAN
										
										
										
										
										
										
										
										
-ือ	s	U	-ɯ̄ʔ̯	ɯː	ūe					U+002D U+0E37 U+0E2D: SARA UEE, O ANG
-็อ	s	O	˘ʔ̯	o						U+002D U+0E47 U+0E2D: MAITAIKHU, O ANG
-ัว	s	U	-äw̱	ua	ua					U+002D U+0E31 U+0E27: MAI HAN-AKAT, WO WAEN
-ัย	s	A	-äy̱	ai aj	ai					U+002D U+0E31 U+0E22: MAI HAN-AKAT, YO YAK
-ิว	s	I	-iw̱	iu iw	io					U+002D U+0E34 U+0E27: SARA I, WO WAEN
-าว	s	A	-āw̱	aːu	ao					U+002D U+0E32 U+0E27: SARA AA, WO WAEN
-าย	s	A	-āy̱	aːi aːj	ai					U+002D U+0E32 U+0E22: SARA AA, YO YAK
-อย	s	O	-ʔ̯y̱	ɔːi ɔːj	oi					U+002D U+0E2D U+0E22: O ANG, YO YAK
-ุย	s	U	-uy̱	ui uj	ui					U+002D U+0E38 U+0E22: SARA U, YO YAK
-ูย	s		-ūy̱		ui					U+002D U+0E39 U+0E22: SARA UU, YO YAK
-วย	s	U	-w̱y̱	uai uaj	uai					U+002D U+0E27 U+0E22: WO WAEN, YO YAK
เ-ะ	s	E	e-a	e	e					U+0E40 U+002D U+0E30: THAI CHARACTER SARA E, SARA A
เ-็	s	E	e-˘	e						U+0E40 U+002D U+0E47: THAI CHARACTER SARA E, MAITAIKHU
เ-อ	s	V	e-ʔ̯	ɤː	oe					U+0E40 U+002D U+0E2D: THAI CHARACTER SARA E, O ANG
เ-ิ	s	V	e-i	ɤː						U+0E40 U+002D U+0E34: THAI CHARACTER SARA E, SARA I
เ-ว	s	E	e-w̱	eːu eːw	eo					U+0E40 U+002D U+0E27: THAI CHARACTER SARA E, WO WAEN
เ-า	s	A	e-ā	au aw	ao					U+0E40 U+002D U+0E32: THAI CHARACTER SARA E, SARA AA
เ-ย	s	V	e-y̱	ɤːi ɤːj	oei					U+0E40 U+002D U+0E22: THAI CHARACTER SARA E, YO YAK
แ-ว	s	E	ɛ-w̱	eːu eːw	aeo					U+0E41 U+002D U+0E27: THAI CHARACTER SARA AE, WO WAEN
แ-ะ	s	E	ɛ-a	ɛ	ae					U+0E41 U+002D U+0E30: THAI CHARACTER SARA AE, SARA A
แ-็	s	E	ɛ-˘	ɛ						U+0E41 U+002D U+0E47: THAI CHARACTER SARA AE, MAITAIKHU
โ-ะ	s	O	o-a	o	o					U+0E42 U+002D U+0E30: THAI CHARACTER SARA O, SARA A
โ-ย	s	O	o-y̱	ɔːi ɔːj	oi					U+0E42 U+002D U+0E22: THAI CHARACTER SARA O, YO YAK
ไ-ย	s	A	aʲ-y̱	ai aj	ai					U+0E44 U+002D U+0E22: THAI CHARACTER SARA AI MAIMALAI, YO YAK
-็อย	s	O	-˘ʔ̯y̱	ɔi ɔj						U+002D U+0E47 U+0E2D U+0E22: MAITAIKHU, O ANG, YO YAK
-ัวะ	s	U	-äw̱a	uaʔ						U+002D U+0E31 U+0E27 U+0E30: MAI HAN-AKAT, WO WAEN, SARA A
เ-าะ	s	E	e-āa	ɔ	o					U+0E40 U+002D U+0E32 U+0E30: THAI CHARACTER SARA E, SARA AA, SARA A
เ-อะ	s	V	e-ʔ̯a	ɤʔ	oe					U+0E40 U+002D U+0E2D U+0E30: THAI CHARACTER SARA E, O ANG, SARA A
เ-ือ	s	U	e-ɯ̄ʔ̯	ɯa	uea					U+0E40 U+002D U+0E37 U+0E2D: THAI CHARACTER SARA E, SARA UEE, O ANG
เ-็ว	s	E	e-˘w̱	eu ew	eo					U+0E40 U+002D U+0E47 U+0E27: THAI CHARACTER SARA E, MAITAIKHU, WO WAEN
เ-ีย	s	I	e-īy̱	ia	ia					U+0E40 U+002D U+0E35 U+0E22: THAI CHARACTER SARA E, SARA II, YO YAK
เ-ียะ	s	I	e-īy̱a	iaʔ	ia					U+0E40 U+002D U+0E35 U+0E22 U+0E30: THAI CHARACTER SARA E, SARA II, YO YAK, SARA A
เ-ือะ	s	U	e-ɯ̄ʔ̯a	ɯaʔ	uea					U+0E40 U+002D U+0E37 U+0E2D U+0E30: THAI CHARACTER SARA E, SARA UEE, O ANG, SARA A
เ-ียว	s	I	e-īy̱w̱	iau iaw	iao					U+0E40 U+002D U+0E35 U+0E22 U+0E27: THAI CHARACTER SARA E, SARA II, YO YAK, WO WAEN
เ-ือย	s	U	e-ɯ̄ʔ̯y̱	ɯai ɯaj	ueai					U+0E40 U+002D U+0E37 U+0E2D U+0E22: THAI CHARACTER SARA E, SARA UEE, O ANG, YO YAK
ฤๅ	s	R	r̥ɯ̃	rɯː						U+0E24 U+0E45: THAI CHARACTER RU, LAKKHANGYAO
ฦๅ	s	L	l̥ɯ̃	lɯː						U+0E26 U+0E45: THAI CHARACTER LU, LAKKHANGYAO
										
										
ฯลฯ	s	E	⋯ḻ⋯	pajjaːnjài						U+0E2F U+0E25 U+0E2F: THAI CHARACTER PAIYANNOI, LO LING, PAIYANNOI


`



var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":5,
"typeLoc": 6,
"statusLoc": 7,
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
"nameLoc": 8,
"nnameLoc": 9,
"ucsName": 10,

"othertranscriptions": [[5, 'ISO-2']]
}

