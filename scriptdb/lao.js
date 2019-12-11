var spreadsheet = `
ກ		k	k̯	k	k	mid class consonant			kɔː kāi	 ກ ໄກ່ 	U+0E81: LAO LETTER KO
ຂ		k	kʰ	kʰ x	kh	high class consonant			kʰɔ̌ː kʰāi 	 ຂ ໄຂ່ 	U+0E82: LAO LETTER KHO SUNG
ຄ		k	ḵʰ	kʰ x	kh	low class consonant			kʰɔ́ː kʷʰáːj	 ຄ ຄວາຢ 	U+0E84: LAO LETTER KHO TAM
ງ		n	ŋ̱	ŋ	ng	low class consonant			ŋɔ́ː ŋúə 	ງ ງົວ	U+0E87: LAO LETTER NGO
											
ຈ		c	ʨ̯	tɕ	ch	mid class consonant			tɕɔ̀ː tɕɔ̏ːk 	 ຈ ຈອກ 	U+0E88: LAO LETTER CO
ຍ		n	ɲ̱	ɲ -j	ny -j	low class consonant			ɲɔ́ː ɲúŋ	 ຍ ຍຸງ 	U+0E8D: LAO LETTER NYO
											
ຕ		t	t̯	t	t	mid class consonant			tɔ̀ː tàː 	ຕ ຕາ	U+0E95: LAO LETTER TO
ຖ		t	tʰ	tʰ	th	high class consonant			tʰɔ̌ː tʰǒŋ	ຖ ຖົງ	U+0E96: LAO LETTER THO SUNG
ທ		t	ṯʰ	tʰ	th	low class consonant			tʰɔ́ː tʰúŋ	ທ ທຸງ	U+0E97: LAO LETTER THO TAM
ດ		d	d̯	d -t	d/-t	mid class consonant			dɔ̀ː dék	 ດ ເດັກ 	U+0E94: LAO LETTER DO
ນ		n¶	ṉ	n	n	low class consonant			nɔ́ː nōk	ນ ນົກ	U+0E99: LAO LETTER NO
											
ປ		p	p̯	p	p	mid class consonant			pɔ̀ː paː	ປ ປາ	U+0E9B: LAO LETTER PO
ຜ		p	pʰ	pʰ	ph	high class consonant			pʰɔ̌ː pʰɤ̏ŋ	ຜ ເຜິ້ງ	U+0E9C: LAO LETTER PHO SUNG
ພ		p	p̱ʰ	pʰ	ph	low class consonant			pʰɔ́ː pʰúː 	ພ ພູ	U+0E9E: LAO LETTER PHO TAM
ບ		b	b̯	b -p	b -p	mid class consonant			bɔ̀ː bɛ̑ː 	ບ ແບ້	U+0E9A: LAO LETTER BO
ມ		m	m̱	m	m	low class consonant			mɔ́ː mɛ́ːw	ມ ແມວ	U+0EA1: LAO LETTER MO
											
ລ		l	ḻ	l	l	low class consonant			lɔ́ː líːŋ	ລ ລີງ	U+0EA5: LAO LETTER LO LOOT
ຢ		y	y̯	j	y	mid class consonant			jɔ̀ː jaː	ຢ ຢາ	U+0EA2: LAO LETTER YO
ຣ		r	ṟ	r l -n	r -n	low class consonant	obsolete		rākʰáŋ	ຣະຄັງ	U+0EA3: LAO LETTER LO LING
ວ		w	w̱	ʋ w -w	v w	low class consonant			vɔ́ː víː	ວ ວີ	U+0EA7: LAO LETTER WO
											
ຫ		h	h	h	h	high class consonant			hɔ̌ː hāːn 	ຫ ຫ່ານ	U+0EAB: LAO LETTER HO SUNG
ຮ		h	ẖ	h	h	low class consonant			hɔ́ː hɯ́ːən	ຮ ເຮືອນ	U+0EAE: LAO LETTER HO TAM
ສ		s	s	s	s	high class consonant			sɔ̌ː sɯ̌ːə	ສ ເສືອ	U+0EAA: LAO LETTER SO SUNG
ຊ		s	s̱	s	x	low class consonant			sɔ́ː sâːŋ	ຊ ຊ້າງ	U+0E8A: LAO LETTER SO TAM
ຝ		f	f	f	f	high class consonant			fɔ̌ː fǒn	ຝ ຝົນ	U+0E9D: LAO LETTER FO TAM
ຟ		f	f̱	f	f	low class consonant			fɔ́ː fáj 	 ຟ ໄຟ 	U+0E9F: LAO LETTER FO SUNG
											
ອ		}	ʔ	ʔ	-	mid class consonant			ɔ̀ː ʔòː	ອ ໂອ	U+0EAD: LAO LETTER O
											
											
											
ໜ	f	h	n	n	n	high class digraph consonant		ຫນ			U+0EDC: LAO HO NO
ໝ	f	h	m	m	m	high class digraph consonant		ຫມ			U+0EDD: LAO HO MO
											
											
ຼ		l	l̆	l	l	high class subjoined consonant					U+0EBC: LAO SEMIVOWEL SIGN LO​
											
											
											
											
											
ເ		e	ē	eː	ē	prescript long vowel					U+0EC0: LAO VOWEL SIGN E
ແ		E	ɛ̄	ɛː	ǣ	prescript long vowel					U+0EC1: LAO VOWEL SIGN EI
ໂ		o	ō	oː	ō	prescript long vowel					U+0EC2: LAO VOWEL SIGN O
ໄ		a	aʲ	aj	ai	prescript long vowel			mâj máːj	ໄມ້ມາຽ	U+0EC4: LAO VOWEL SIGN AI
ໃ		a	äʲ	aj	ai	prescript long vowel			mâj muân	ໄມ້ມ້ວນ	U+0EC3: LAO VOWEL SIGN AY
											
											
											
ິ		i	i	i	i	short vowel					U+0EB4: LAO VOWEL SIGN I​
ີ		i	ī	iː	ī	long vowel					U+0EB5: LAO VOWEL SIGN II​
ຶ		U	ɯ	ɯ	ư	short vowel					U+0EB6: LAO VOWEL SIGN Y​
ື		U	ɯ̄	ɯː	ư̄	long vowel					U+0EB7: LAO VOWEL SIGN YY​
ຸ		u	u	u	u	short vowel					U+0EB8: LAO VOWEL SIGN U​
ູ		u	ū	uː	ū	long vowel					U+0EB9: LAO VOWEL SIGN UU​
ຽ		i	iᵊ	iːə	īa	vowel			vī ráːm	ວິຣາມ	U+0EBD: LAO SEMIVOWEL SIGN NYO
ໍ		O	ɔ̄	ɔː	ǭ	long vowel			nīk kʰā hǐt	ນິກຄະຫິດ	U+0ECD: LAO NIGGAHITA​
ົ		o	o	oʔ o	o	short vowel			mâj kòŋ	ໄມ້ກົງ	U+0EBB: LAO VOWEL SIGN MAI KON​
ະ		a¶	a	aʔ a	a	short vowel					U+0EB0: LAO VOWEL SIGN A
ັ		a	ä	aʔ a	a	short vowel			mâj kàn	ໄມ້ກັນ	U+0EB1: LAO VOWEL SIGN MAI KAN​
າ		a	ā	aː	ā	long vowel					U+0EB2: LAO VOWEL SIGN AA
ຳ		a	aᵐ	am	am	long vowel					U+0EB3: LAO VOWEL SIGN AM
											
											
											
											
່		^	¹			tone mark			mâj eːk	ໄນ້ເອກ	U+0EC8: LAO TONE MAI EK​
້		^	²			tone mark			mâj toː	ໄນ້ໂທ	U+0EC9: LAO TONE MAI THO​
໊		^	³			tone mark			mâj tiː	ໄນ້ຕີ	U+0ECA: LAO TONE MAI TI​
໋		^	⁴			tone mark			mâj cat-ta-waː	ໄນ້ຈັດຕະວາ	U+0ECB: LAO TONE MAI CATAWA​
											
											
໌		\\	ˣ			cancellation mark					U+0ECC: LAO CANCELLATION MARK​
											
											
໐		0	0	0	0	digit	infrequent		sun	ສູນ	U+0ED0: LAO DIGIT ZERO
໑		1	1	1	1	digit	infrequent		neung	ໜຶ່ງ	U+0ED1: LAO DIGIT ONE
໒		2	2	2	2	digit	infrequent		song	ສອງ	U+0ED2: LAO DIGIT TWO
໓		3	3	3	3	digit	infrequent		sam	ສາມ	U+0ED3: LAO DIGIT THREE
໔		4	4	4	4	digit	infrequent		si	ສີ	U+0ED4: LAO DIGIT FOUR
໕		5	5	5	5	digit	infrequent		ha	ຫ້າ	U+0ED5: LAO DIGIT FIVE
໖		6	6	6	6	digit	infrequent		hok	ຫົກ	U+0ED6: LAO DIGIT SIX
໗		7	7	7	7	digit	infrequent		chet	ເຈັດ	U+0ED7: LAO DIGIT SEVEN
໘		8	8	8	8	digit	infrequent		paet	ແປດ	U+0ED8: LAO DIGIT EIGHT
໙		9	9	9	9	digit	infrequent		kao	ເກົ້າ	U+0ED9: LAO DIGIT NINE
											
											
.		.	.	.	.	full stop					U+002E: FULL STOP
ຯ		.	...			ellipsis					U+0EAF: LAO ELLIPSIS
ໆ		+	&			repetition mark			kʰɯaŋ-mǎːj-sâm	ເຄ່ຶອງໝາຍຊ້ຳ	U+0EC6: LAO KO LA
											
											
₭		#	¤			currency symbol					U+20AD: KIP SIGN
											
											
\u200B		]	␣			zero-width space					U+200B: ZERO WIDTH SPACE
											
											
											
											
											
											
											
ຫງ	s		ŋ	ŋ	ng	high class digraph					U+0EAB U+0E87: LAO LETTER HO SUNG, LETTER NGO
ຫຍ	s		ɲ	ɲ	j	high class digraph					U+0EAB U+0E8D: LAO LETTER HO SUNG, LETTER NYO
ຫນ	s		n	n	n	high class digraph					U+0EAB U+0E99: LAO LETTER HO SUNG, LETTER NO
ຫມ	s		m	m	m	high class digraph					U+0EAB U+0EA1: LAO LETTER HO SUNG, LETTER MO
ຫຼ	s		l	l	l	high class digraph					U+0EAB U+0EBC: LAO LETTER HO SUNG, SEMIVOWEL SIGN LO
ຫລ	s		l	l	l	high class digraph					U+0EAB U+0EA5: LAO LETTER HO SUNG, LETTER LO LOOT
ຫວ	s		w	ʋ w	v w	high class digraph					U+0EAB U+0EA7: LAO LETTER HO SUNG, LETTER WO
											
											
-ັຽ	s	i	iᵊ	iə	ia						U+0EB1 U+0EBD: LAO VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO
ເ-ຍ	s	i	īᵊ	iːə	īa						U+0EC0 U+0E8D: LAO VOWEL SIGN E, LETTER NYO
ເ-ັຍ	s	i	īᵊ	iːə	ia						U+0EC0 U+0EB1 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO
-ິວ	s	i	iʷ	iw	iu						U+0EB4 U+0EA7: LAO VOWEL SIGN I, LETTER WO
-ີວ	s	i	īʷ	iːw	īu						U+0EB5 U+0EA7: LAO VOWEL SIGN II, LETTER WO
ເ-ັຍະ	s	i	iᵊ	ia							U+0EC0 U+0EB1 U+0E8D U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, LETTER NYO, VOWEL SIGN A
-ຽວ	s	i	iᵊʷ		īeo						U+0EBD U+0EA7: LAO SEMIVOWEL SIGN NYO, LETTER WO
ເ-ັຽວ	s	i	iᵊʷ		īeo						U+0EC0 U+0EB1 U+0EBD U+0EA7: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN, SEMIVOWEL SIGN NYO, LETTER WO
											
ເ-ຶອ	s	U	ɯᵊ	ɯə	ưa						U+0EC0 U+0EB6 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN Y, LETTER O
ເ-ືອ	s	U	ɯ̄ᵊ	ɯːə	ư̄a						U+0EC0 U+0EB7 U+0EAD: LAO VOWEL SIGN E, VOWEL SIGN YY, LETTER O
											
-ົວະ	s	u	uᵊ	uə	ua						U+0EBB U+0EA7 U+0EB0: LAO VOWEL SIGN MAI KON, LETTER WO, VOWEL SIGN A
-ົວ	s	u	uᵊ	uə	ūa						U+0EBB U+0EA7: LAO VOWEL SIGN MAI KON, LETTER WO
											
ເ-ະ	s	e	e	e	e						U+0EC0 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN A
ເ-ັ	s	e	e	e	e						U+0EC0 U+0EB1: LAO VOWEL SIGN E, VOWEL SIGN MAI KAN
											
ເ-ິ	s	v	ɤ	ɤ	œ						U+0EC0 U+0EB4: LAO VOWEL SIGN E, VOWEL SIGN I
ເ-ີ	s	v	ɤ̄	ɤː	œ̄						U+0EC0 U+0EB5: LAO VOWEL SIGN E, VOWEL SIGN II
ເ-ີຽ	s	v	ɤ̄ʲ	ɤːj	œ̄y						U+0EC0 U+0EB5 U+0EBD: LAO VOWEL SIGN E, VOWEL SIGN II, SEMIVOWEL SIGN NYO
ເ-ີຍ	s	v	ɤ̄ʲ	ɤːj	œ̄y						U+0EC0 U+0EB5 U+0E8D: LAO VOWEL SIGN E, VOWEL SIGN II, LETTER NYO
											
ໂ-ະ	s	o	o	oʔ o	o						U+0EC2 U+0EB0: LAO VOWEL SIGN O, VOWEL SIGN A
											
ແ-ະ	s	E	ɛ	ɛ	æ						U+0EC1 U+0EB0: LAO VOWEL SIGN EI, VOWEL SIGN A
ແ-ັ	s	E	ɛ	ɛ	æ						U+0EC1 U+0EB1: LAO VOWEL SIGN EI, VOWEL SIGN MAI KAN
ແ-ວ	s	E	ɛʷ	ɛːw	æw						U+0EC1 U+0EA7: LAO VOWEL SIGN EI, LETTER WO
											
ເ-າະ	s	O	ɔ	ɔ	ǫ						U+0EC0 U+0EB2 U+0EB0: LAO VOWEL SIGN E, VOWEL SIGN AA, VOWEL SIGN A
-ັອ	s	O	ɔ	ɔ	ǫ						U+0EB1 U+0EAD: LAO VOWEL SIGN MAI KAN, LETTER O
-ອ	-	}	ʔ	ʔ ɔː	ǭ						U+0EAD: LAO LETTER O
											
-ັຍ	s	a	aʲ	aj	ai						U+0EB1 U+0E8D: LAO VOWEL SIGN MAI KAN, LETTER NYO
-າຍ	s	a	āʲ	aːj	āi						U+0EB2 U+0E8D: LAO VOWEL SIGN AA, LETTER NYO
-າຽ	s	a	āʲ	aːj	āi						U+0EB2 U+0EBD: LAO VOWEL SIGN AA, SEMIVOWEL SIGN NYO
ເ-ົາ	s	a	aʷ	aw	ao						U+0EC0 U+0EBB U+0EB2: LAO VOWEL SIGN E, VOWEL SIGN MAI KON, VOWEL SIGN AA
											
ວ	-	w	w̱	ʋ w -w uːə	ūa						U+0EA7: LAO LETTER WO
											
											
ໆລໆ	s		...	la	la				kʰɯaŋ-mǎːj-lɛ-ɯːn-ɯːn	ເຄຶ່ອງໝາຍ ແລະອຶ່ນໆ	U+0EC6 U+0EA5 U+0EC6: LAO KO LA, LAO LETTER LO LOOT, LAO KO LA
											
											
											

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

"othertranscriptions": [[5, 'LOC']]
}
