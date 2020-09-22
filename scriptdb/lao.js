var spreadsheet = `
ກ		k	k̯	k	k	mid class consonant			kɔː kāi	 ກ ໄກ່ 	U+0E81: LAO LETTER KO	lao
ຂ		k	kʰ	kʰ x	kh	high class consonant			kʰɔ̌ː kʰāi 	 ຂ ໄຂ່ 	U+0E82: LAO LETTER KHO SUNG	lao
ຄ		k	ḵʰ	kʰ x	kh	low class consonant			kʰɔ́ː kʷʰáːj	 ຄ ຄວາຢ 	U+0E84: LAO LETTER KHO TAM	lao
ງ		n	ŋ̱	ŋ	ng	low class consonant			ŋɔ́ː ŋúə 	ງ ງົວ	U+0E87: LAO LETTER NGO	lao
												
ຈ		c	ʨ̯	t͡ɕ	ch	mid class consonant			tɕɔ̀ː tɕɔ̏ːk 	 ຈ ຈອກ 	U+0E88: LAO LETTER CO	lao
ຍ		n	ɲ̱	ɲ -j	ny -j	low class consonant			ɲɔ́ː ɲúŋ	 ຍ ຍຸງ 	U+0E8D: LAO LETTER NYO	lao
												
ຕ		t	t̯	t	t	mid class consonant			tɔ̀ː tàː 	ຕ ຕາ	U+0E95: LAO LETTER TO	lao
ຖ		t	tʰ	tʰ	th	high class consonant			tʰɔ̌ː tʰǒŋ	ຖ ຖົງ	U+0E96: LAO LETTER THO SUNG	lao
ທ		t	ṯʰ	tʰ	th	low class consonant			tʰɔ́ː tʰúŋ	ທ ທຸງ	U+0E97: LAO LETTER THO TAM	lao
ດ		d	d̯	d -t	d/-t	mid class consonant			dɔ̀ː dék	 ດ ເດັກ 	U+0E94: LAO LETTER DO	lao
ນ		n¶	ṉ	n	n	low class consonant			nɔ́ː nōk	ນ ນົກ	U+0E99: LAO LETTER NO	lao
												
ປ		p	p̯	p	p	mid class consonant			pɔ̀ː paː	ປ ປາ	U+0E9B: LAO LETTER PO	lao
ຜ		p	pʰ	pʰ	ph	high class consonant			pʰɔ̌ː pʰɤ̏ŋ	ຜ ເຜິ້ງ	U+0E9C: LAO LETTER PHO SUNG	lao
ພ		p	p̱ʰ	pʰ	ph	low class consonant			pʰɔ́ː pʰúː 	ພ ພູ	U+0E9E: LAO LETTER PHO TAM	lao
ບ		b	b̯	b -p	b -p	mid class consonant			bɔ̀ː bɛ̑ː 	ບ ແບ້	U+0E9A: LAO LETTER BO	lao
ມ		m	m̱	m	m	low class consonant			mɔ́ː mɛ́ːw	ມ ແມວ	U+0EA1: LAO LETTER MO	lao
												
ລ		l	ḻ	l	l	low class consonant			lɔ́ː líːŋ	ລ ລີງ	U+0EA5: LAO LETTER LO LOOT	lao
ຢ		y	y̯	j	y	mid class consonant			jɔ̀ː jaː	ຢ ຢາ	U+0EA2: LAO LETTER YO	lao
ຣ		r	ṟ	r l -n	r -n	low class consonant	obsolete		rākʰáŋ	ຣະຄັງ	U+0EA3: LAO LETTER LO LING	lao
ວ	-	w	w̱	ʋ w -w uːə	v ūa	low class consonant			vɔ́ː víː	ວ ວີ	U+0EA7: LAO LETTER WO	lao
												
ຫ		h	h	h	h	high class consonant			hɔ̌ː hāːn 	ຫ ຫ່ານ	U+0EAB: LAO LETTER HO SUNG	lao
ຮ		h	ẖ	h	h	low class consonant			hɔ́ː hɯ́ːən	ຮ ເຮືອນ	U+0EAE: LAO LETTER HO TAM	lao
ສ		s	s	s	s	high class consonant			sɔ̌ː sɯ̌ːə	ສ ເສືອ	U+0EAA: LAO LETTER SO SUNG	lao
ຊ		s	s̱	s	x	low class consonant			sɔ́ː sâːŋ	ຊ ຊ້າງ	U+0E8A: LAO LETTER SO TAM	lao
ຝ		f	f	f	f	high class consonant			fɔ̌ː fǒn	ຝ ຝົນ	U+0E9D: LAO LETTER FO TAM	lao
ຟ		f	f̱	f	f	low class consonant			fɔ́ː fáj 	 ຟ ໄຟ 	U+0E9F: LAO LETTER FO SUNG	lao
												
ອ		}	ʔ	ʔ ɔː	-	mid class consonant			ɔ̀ː ʔòː	ອ ໂອ	U+0EAD: LAO LETTER O	lao
												
												
												
ໜ	f	h	n	n	n	high class digraph consonant		ຫນ			U+0EDC: LAO HO NO	lao
ໝ	f	h	m	m	m	high class digraph consonant		ຫມ			U+0EDD: LAO HO MO	lao
												
												
ຼ		l	l̆	l	l	high class subjoined consonant					U+0EBC: LAO SEMIVOWEL SIGN LO​	lao
												
												
												
												
												
ເ		e	ē	eː	ē	prescript long vowel					U+0EC0: LAO VOWEL SIGN E	lao
ແ		E	ɛ̄	ɛː	ǣ	prescript long vowel					U+0EC1: LAO VOWEL SIGN EI	lao
ໂ		o	ō	oː	ō	prescript long vowel					U+0EC2: LAO VOWEL SIGN O	lao
ໄ		a	aʲ	aj	ai	prescript long vowel			mâj máːj	ໄມ້ມາຽ	U+0EC4: LAO VOWEL SIGN AI	lao
ໃ		a	äʲ	aj	ai	prescript long vowel			mâj muân	ໄມ້ມ້ວນ	U+0EC3: LAO VOWEL SIGN AY	lao
												
												
												
ິ		i	i	i	i	short vowel					U+0EB4: LAO VOWEL SIGN I​	lao
ີ		i	ī	iː	ī	long vowel					U+0EB5: LAO VOWEL SIGN II​	lao
ຶ		U	ɯ	ɯ	ư	short vowel					U+0EB6: LAO VOWEL SIGN Y​	lao
ື		U	ɯ̄	ɯː	ư̄	long vowel					U+0EB7: LAO VOWEL SIGN YY​	lao
ຸ		u	u	u	u	short vowel					U+0EB8: LAO VOWEL SIGN U​	lao
ູ		u	ū	uː	ū	long vowel					U+0EB9: LAO VOWEL SIGN UU​	lao
ຽ		i	iᵊ	iːə̯	īa	vowel			vī ráːm	ວິຣາມ	U+0EBD: LAO SEMIVOWEL SIGN NYO	lao
ໍ		O	ɔ̄	ɔː	ǭ	long vowel			nīk kʰā hǐt	ນິກຄະຫິດ	U+0ECD: LAO NIGGAHITA​	lao
ົ		o	o	o	o	short vowel			mâj kòŋ	ໄມ້ກົງ	U+0EBB: LAO VOWEL SIGN MAI KON​	lao
ະ		a¶	a	a	a	short vowel					U+0EB0: LAO VOWEL SIGN A	lao
ັ		a	ä	a	a	short vowel			mâj kàn	ໄມ້ກັນ	U+0EB1: LAO VOWEL SIGN MAI KAN​	lao
າ		a	ā	aː	ā	long vowel					U+0EB2: LAO VOWEL SIGN AA	lao
ຳ		a	aᵐ	am	am	long vowel					U+0EB3: LAO VOWEL SIGN AM	lao
												
												
												
												
່		^	¹			tone mark			mâj eːk	ໄນ້ເອກ	U+0EC8: LAO TONE MAI EK​	lao
້		^	²			tone mark			mâj toː	ໄນ້ໂທ	U+0EC9: LAO TONE MAI THO​	lao
໊		^	³			tone mark			mâj tiː	ໄນ້ຕີ	U+0ECA: LAO TONE MAI TI​	lao
໋		^	⁴			tone mark			mâj cat-ta-waː	ໄນ້ຈັດຕະວາ	U+0ECB: LAO TONE MAI CATAWA​	lao
												
												
໌		\\	ˣ			cancellation mark					U+0ECC: LAO CANCELLATION MARK​	lao
												
												
໐		0	0	0	0	digit	infrequent		sun	ສູນ	U+0ED0: LAO DIGIT ZERO	lao
໑		1	1	1	1	digit	infrequent		neung	ໜຶ່ງ	U+0ED1: LAO DIGIT ONE	lao
໒		2	2	2	2	digit	infrequent		song	ສອງ	U+0ED2: LAO DIGIT TWO	lao
໓		3	3	3	3	digit	infrequent		sam	ສາມ	U+0ED3: LAO DIGIT THREE	lao
໔		4	4	4	4	digit	infrequent		si	ສີ	U+0ED4: LAO DIGIT FOUR	lao
໕		5	5	5	5	digit	infrequent		ha	ຫ້າ	U+0ED5: LAO DIGIT FIVE	lao
໖		6	6	6	6	digit	infrequent		hok	ຫົກ	U+0ED6: LAO DIGIT SIX	lao
໗		7	7	7	7	digit	infrequent		chet	ເຈັດ	U+0ED7: LAO DIGIT SEVEN	lao
໘		8	8	8	8	digit	infrequent		paet	ແປດ	U+0ED8: LAO DIGIT EIGHT	lao
໙		9	9	9	9	digit	infrequent		kao	ເກົ້າ	U+0ED9: LAO DIGIT NINE	lao
												
												
.		.	.	.	.	full stop					U+002E: FULL STOP	
ຯ		.	…			ellipsis					U+0EAF: LAO ELLIPSIS	lao
ໆ		+	&			repetition mark			kʰɯaŋ-mǎːj-sâm	ເຄ່ຶອງໝາຍຊ້ຳ	U+0EC6: LAO KO LA	lao
												
												
₭		#	¤			currency symbol					U+20AD: KIP SIGN	currency
												
												
\u200B		]	␣			zero-width space					U+200B: ZERO WIDTH SPACE	punctuation
												
												
												
												
												
												
												
ຫງ	s		hŋ̱	ŋ	ng	high class digraph					U+0EAB U+0E87: LAO LETTER HO SUNG, LETTER NGO	
ຫຍ	s		hɲ̱	ɲ	j	high class digraph					U+0EAB U+0E8D: LAO LETTER HO SUNG, LETTER NYO	
ຫນ	s		hṉ	n	n	high class digraph					U+0EAB U+0E99: LAO LETTER HO SUNG, LETTER NO	
ຫມ	s		hm̱	m	m	high class digraph					U+0EAB U+0EA1: LAO LETTER HO SUNG, LETTER MO	
ຫຼ	s		hl̆	l	l	high class digraph					U+0EAB U+0EBC: LAO LETTER HO SUNG, SEMIVOWEL SIGN LO	
ຫລ	s		hḻ	l	l	high class digraph					U+0EAB U+0EA5: LAO LETTER HO SUNG, LETTER LO LOOT	
ຫວ	s		hw̱	ʋ w	v w	high class digraph					U+0EAB U+0EA7: LAO LETTER HO SUNG, LETTER WO	
												
												
ັຽ	s	i	-äiᵊ	-iə̯	ia						U+0EB1 U+0EBD: LAO VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO	
ເັຍ	s	i	ē-äɲ̱	-iə̯	ia						U+0EC0 U+0EB1 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO	
ຽ	s	i	-iᵊ-	-iːə̯-	ia						U+0EBD: LAO SEMIVOWEL SIGN NYO	
ເຍ	s	i	ē-ɲ̱	-iːə̯	īa						U+0EC0 U+0E8D: LAO VOWEL SIGN E, LETTER NYO	
ິວ	s	i	-iw̱	-iw	iu						U+0EB4 U+0EA7: LAO VOWEL SIGN I, LETTER WO	
ີວ	s	i	-īw̱	-iːw	īu						U+0EB5 U+0EA7: LAO VOWEL SIGN II, LETTER WO	
ເັຍະ	s	i	ē-äɲ̱a	-ia							U+0EC0 U+0EB1 U+0E8D U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO, VOWEL SIGN A	
ຽວ	s	i	-iᵊw̱		īeo						U+0EBD U+0EA7: LAO SEMIVOWEL SIGN NYO, LETTER WO	
ເັຽວ	s	i	ē-äiᵊw̱		īeo						U+0EC0 U+0EB1 U+0EBD U+0EA7: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO, LETTER WO	
												
ເຶອ	s	U	ē-ɯʔ	-ɯə̯	ưa						U+0EC0 U+0EB6 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN Y, LETTER O	
ເືອ	s	U	ē-ɯ̄ʔ	-ɯːə̯	ư̄a						U+0EC0 U+0EB7 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN YY, LETTER O	
												
ົວະ	s	u	-ow̱a	-uə̯	ua						U+0EBB U+0EA7 U+0EB0: LAO VOWEL SIGN MAI KON, LETTER WO, VOWEL SIGN A	
ົວ	s	u	-ow̱-	-uə̯-	ūa						U+0EBB U+0EA7: LAO VOWEL SIGN MAI KON, LETTER WO	
ົວ	s	u	-ow̱	-uːə̯	ūa						U+0EBB U+0EA7: LAO VOWEL SIGN MAI KON, LETTER WO	
ວ	s	u	-w̱-	-uːə̯-	ūa						U+0EBB U+0EA7: LAO VOWEL SIGN MAI KON, LETTER WO	
												
ເະ	s	e	ē-a	-e	e						U+0EC0 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN A	
ເັ	s	e	ē-ä	-e-	e						U+0EC0 U+0EB1: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN	
												
ເິ	s	v	ē-i	-ɤ	œ						U+0EC0 U+0EB4: LAO VOWEL SIGN E, VOWEL SIGN I	
ເີ	s	v	ē-ī	-ɤː	œ̄						U+0EC0 U+0EB5: LAO VOWEL SIGN E, VOWEL SIGN II	
ເີຽ	s	v	ē-īiᵊ	-ɤːj	œ̄y						U+0EC0 U+0EB5 U+0EBD: LAO VOWEL SIGN E, VOWEL SIGN II, SEMIVOWEL SIGN NYO	
ເີຍ	s	v	ē-īɲ̱	-ɤːj	œ̄y						U+0EC0 U+0EB5 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN II, LETTER NYO	
												
ໂະ	s	o	ō-a	-o	o						U+0EC2 U+0EB0: LAO VOWEL SIGN O, VOWEL SIGN A	
												
ແະ	s	E	ɛ̄-a	-ɛ	æ						U+0EC1 U+0EB0: LAO VOWEL SIGN EI, VOWEL SIGN A	
ແັ	s	E	ɛ̄-ä	-ɛ-	æ						U+0EC1 U+0EB1: LAO VOWEL SIGN EI, VOWEL SIGN MAI KAN	
ແວ	s	E	ɛ̄-w̱	-ɛːw	æw						U+0EC1 U+0EA7: LAO VOWEL SIGN EI, LETTER WO	
												
ເາະ	s	O	ē-āa	-ɔ	ǫ						U+0EC0 U+0EB2 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN AA, VOWEL SIGN A	
ັອ	s	O	-äʔ	-ɔ	ǫ						U+0EB1 U+0EAD: LAO VOWEL SIGN MAI KAN, LETTER O	
ອ	-	}	-ʔ-	-ɔː-	ǭ						U+0EAD: LAO LETTER O	
												
ັຍ	s	a	-äɲ̱	-aj	ai						U+0EB1 U+0E8D: LAO VOWEL SIGN MAI KAN, LETTER NYO	
າຍ	s	a	-āɲ̱	-aːj	āi						U+0EB2 U+0E8D: LAO VOWEL SIGN AA, LETTER NYO	
າຽ	s	a	-āiᵊ	-aːj	āi						U+0EB2 U+0EBD: LAO VOWEL SIGN AA, SEMIVOWEL SIGN NYO	
ເົາ	s	a	ē-oā	-aw	ao						U+0EC0 U+0EBB U+0EB2: LAO VOWEL SIGN E, VOWEL SIGN MAI KON, VOWEL SIGN AA	
ຳ	s	a	-aᵐ	-am	am						U+0EB3: LAO VOWEL SIGN AM	
												
												
												
ໆລໆ	s		&ḻ&	la	la				kʰɯaŋ-mǎːj-lɛ-ɯːn-ɯːn	ເຄຶ່ອງໝາຍ ແລະອຶ່ນໆ	U+0EC6 U+0EA5 U+0EC6: LAO KO LA, LAO LETTER LO LOOT, LAO KO LA	
												
												
											

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
"equiv": 8,
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
"nameLoc": 9,
"nnameLoc": 10,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[5, 'LOC']]
}
