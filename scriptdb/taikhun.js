var spreadsheet = `
ᨠ		k	k	ká -k	high tone consonant				ᨣ		ᨠ ᩅ᩠ᨠ			U+1A20: TAI THAM LETTER HIGH KA
ᨣ		k	ḵ	ka -k᷇	low tone consonant					ᨠ	 ᨣ ᩅ᩠ᨣ			U+1A23: TAI THAM LETTER LOW KA
ᨡ		k	kʰ	kʰá -k	high tone consonant				ᨥ		ᨡ ᩅ᩠ᨡ			U+1A21: TAI THAM LETTER HIGH KHA
ᨥ		k	ḵʰ	kʰa᷇ -k	low tone consonant					ᨡ	ᨥ ᩅ᩠ᨥ			U+1A25: TAI THAM LETTER LOW KHA
ᨤ		k	ḵ̇ʰ	kʰa᷇	low tone consonant						ᨤ -			U+1A24: TAI THAM LETTER LOW KXA
ᨦ		n	ŋ̱	ŋa᷇ -ŋ	low tone consonant					ᩉ᩠ᨦ	ᨦ ᩅ᩠ᨦ			U+1A26: TAI THAM LETTER NGA
														
ᨧ		c	c	cá -t	high tone consonant				ᨩ		ᨧ ᩅ᩠ᨧ			U+1A27: TAI THAM LETTER HIGH CA
ᨩ		c	c̱	ca᷇	low tone consonant					ᨧ	ᨩ ᩅ᩠ᨩ			U+1A29: TAI THAM LETTER LOW CA
ᨨ		c	cʰ	cʰá	high tone consonant				ᨫ		ᨨ ᩅ᩠ᨨ			U+1A28: TAI THAM LETTER HIGH CHA
ᨫ		c	c̱ʰ	cʰa᷇ -cʰ-	low tone consonant					ᨨ	ᨫ ᩅ᩠ᨫ			U+1A2B: TAI THAM LETTER LOW CHA
ᨬ		n	ɲ̱	ja᷇	low tone consonant					ᩉ᩠ᨬ	ᨬ ᩅ᩠ᨬ			U+1A2C: TAI THAM LETTER NYA
														
ᨭ		t	ṫ	tá -t	high tone consonant						ᨭ ᩅ᩠ᨭ			U+1A2D: TAI THAM LETTER RATA
ᨮ		t	ṫʰ	tʰá -t	high tone consonant				ᨰ					U+1A2E: TAI THAM LETTER HIGH RATHA
ᨰ		t	ṯ̇ʰ	tʰa᷇ -t	low tone consonant					ᨰ	ᨰ ᩅ᩠ᨰ			U+1A30: TAI THAM LETTER LOW RATHA
ᨯ		d	d̯	da -t	mid tone consonant						ᨯ ᩅ᩠ᨯ			U+1A2F: TAI THAM LETTER DA
ᨱ		n	ṉ̇	na᷇ -n	low tone consonant						ᨱ ᩅ᩠ᨱ			U+1A31: TAI THAM LETTER RANA
														
ᨲ		t	t	tá -t	high tone consonant				ᨴ		ᨲ ᩅ᩠ᨲ			U+1A32: TAI THAM LETTER HIGH TA
ᨴ		t	ṯ	ta᷇ -t	low tone consonant					ᨲ	ᨴ ᩅ᩠ᨴ			U+1A34: TAI THAM LETTER LOW TA
ᨳ		t	tʰ	tʰá -t	high tone consonant				ᨵ		ᨳ ᩅ᩠ᨳ			U+1A33: TAI THAM LETTER HIGH THA
ᨵ		t	ṯʰ	tʰa᷇ -t	low tone consonant					ᨳ	ᨵ ᩅ᩠ᨵ			U+1A35: TAI THAM LETTER LOW THA
ᨶ		n	ṉ	na᷇ -n	low tone consonant					ᩉ᩠ᨶ	ᨶ ᩅ᩠ᨶ			U+1A36: TAI THAM LETTER NA
														
ᨸ		p	p	pá	high tone consonant				ᨻ		ᨸ -			U+1A38: TAI THAM LETTER HIGH PA
ᨻ		p	p̱	pa᷇ -pʰ-	low tone consonant					ᨸ	ᨻ ᩅ᩠ᨻ			U+1A3B: TAI THAM LETTER LOW PA
ᨹ		p	pʰ	pʰá -pʰ-	high tone consonant				ᨽ		ᨹ ᩅ᩠ᨹ			U+1A39: TAI THAM LETTER HIGH PHA
ᨽ		p	p̱ʰ	pʰa᷇ -p	low tone consonant					ᨹ	ᨽ ᩅ᩠ᨽ			U+1A3D: TAI THAM LETTER LOW PHA
ᨷ		b	b̯	ba -p	mid tone consonant						ᨷ ᩅ᩠ᨷ			U+1A37: TAI THAM LETTER BA
ᨾ		m	m̱	ma᷇ -m	low tone consonant					ᩉ᩠ᨾ	ᨾ ᩅ᩠ᨾ			U+1A3E: TAI THAM LETTER MA
														
ᩃ		l	ḻ	la᷇ -n	low tone consonant					ᩉᩖ	ᩃ ᩅ᩠ᩃ			U+1A43: TAI THAM LETTER LA
ᩊ		l	ḻ̇	la᷇ -n	low tone consonant						ᩊ ᩅ᩠ᩊ			U+1A4A: TAI THAM LETTER LLA
ᩁ		r	r	ra᷇ -n	high tone consonant					ᩉᩕ	ᩁ ᩅ᩠ᩁ			U+1A41: TAI THAM LETTER RA
ᩀ		y	y	já	high tone consonant				ᨿ		ᩀ -			U+1A40: TAI THAM LETTER HIGH YA
ᨿ		y	y̱	ja᷇ -j	low tone consonant					ᩉ᩠ᨿ	ᨿ ᩅ᩠ᨿ			U+1A3F: TAI THAM LETTER LOW YA
ᩅ		w	w̱	wa᷇ -w	low tone consonant					ᩉ᩠ᩅ	ᩅ ᩅ᩠ᩅ			U+1A45: TAI THAM LETTER WA
														
ᩈ		s	s	sá -t	high tone consonant				ᨪ		ᩈ ᩅ᩠ᩈ			U+1A48: TAI THAM LETTER HIGH SA
ᩆ		s	ś	sá -t	high tone consonant						ᩆ ᩅ᩠ᩆ			U+1A46: TAI THAM LETTER HIGH SHA
ᨪ		s	s̱	sa᷇	low tone consonant				ᩈ		ᨪ -			U+1A2A: TAI THAM LETTER LOW SA
ᩇ		s	ṡ	sá -t	high tone consonant						ᩇ ᩅ᩠ᩇ			U+1A47: TAI THAM LETTER HIGH SSA
ᨺ		f	f	fá	high tone consonant				ᨼ		ᨺ -			U+1A3A: TAI THAM LETTER HIGH FA
ᨼ		f	f̱	fa᷇	low tone consonant					ᨺ	ᨼ -			U+1A3C: TAI THAM LETTER LOW FA
ᩉ		h	h	há -h-	high tone consonant				ᩌ		ᩉ ᩅ᩠ᩉ			U+1A49: TAI THAM LETTER HIGH HA
ᩌ		h	ẖ	ha᷇	low tone consonant					ᩉ	ᩌ -			U+1A4C: TAI THAM LETTER LOW HA
														
ᩋ		}	ʔ̯	ʔ ʔa	mid tone consonant						ᩋ ᩅ᩠ᩋ			U+1A4B: TAI THAM LETTER A
														
														
														
														
ᩕ		r	r̆	ʰ	medial consonant						ᩕ			U+1A55: TAI THAM CONSONANT SIGN MEDIAL RA​
ᩖ		l	l̆	l	medial consonant						ᩖ			U+1A56: TAI THAM CONSONANT SIGN MEDIAL LA​
														
														
														
᩺		R	r̽	n	final r/n						᩺			U+1A7A: TAI THAM SIGN RA HAAM​
ᩴ		N	ŋ̊	-ŋ -m	final consonant						ᩴ	maj⁵² kaŋ¹⁵ tɔːm¹		U+1A74: TAI THAM SIGN MAI KANG​
ᩙ		N	ŋ̽	-ŋ	final consonant						ᩙ			U+1A59: TAI THAM CONSONANT SIGN FINAL NGA​
ᩘ		N	ŋ̣̽	-ŋ	final consonant						ᩘ			U+1A58: TAI THAM SIGN MAI KANG LAI​
ᩜ		M	m̽	-m	final consonant						ᩜ			U+1A5C: TAI THAM CONSONANT SIGN MA​
ᩝ		B	b̽	-b	final consonant	rare								U+1A5D: TAI THAM CONSONANT SIGN BA​
ᩞ		S	s̽	-s	final consonant	rare								U+1A5E: TAI THAM CONSONANT SIGN SA​
														
														
ᩛ		p	ᵽ	p tʰ	special form						ᩛ			U+1A5B: TAI THAM CONSONANT SIGN HIGH RATHA OR LOW PA​
ᩓ		l	lₔ	lɛː	low tone ligature						ᩓ			U+1A53: TAI THAM LETTER LAE
ᩔ		s	S	-ss-	medial ss ligature						ᩔ			U+1A54: TAI THAM LETTER GREAT SA
ᩚ			p̆		not used in kkh									U+1A5A: TAI THAM CONSONANT SIGN LOW PA​
														
														
ᩂ		R	r̥	rɯː	vocalic						ᩂ			U+1A42: TAI THAM LETTER RUE
ᩄ		L	l̥	lɯː	vocalic						ᩄ			U+1A44: TAI THAM LETTER LUE
														
														
														
ᩍ		I	ị	ʔi²	independent vowel		ᩥ				ᩍ			U+1A4D: TAI THAM LETTER I
ᩎ		I	ị̄	ʔiː²	independent vowel		ᩦ				ᩎ			U+1A4E: TAI THAM LETTER II
ᩏ		U	ụ	ʔu²	independent vowel		ᩩ				ᩏ			U+1A4F: TAI THAM LETTER U
ᩐ		U	ụ̄	ʔuː²	independent vowel		ᩪ				ᩐ			U+1A50: TAI THAM LETTER UU
ᩑ		E	ẹ	ʔeː²	independent vowel		ᩮ				ᩑ			U+1A51: TAI THAM LETTER EE
ᩒ		O	ọ	ʔoː²	independent vowel		ᩰ				ᩒ			U+1A52: TAI THAM LETTER OO
														
														
ᩮ		e	e	-eː -eː-	dependent vowel			ᩑ			ᩮ			U+1A6E: TAI THAM VOWEL SIGN E​
ᩯ		e	ɛ	-ɛː -ɛː-	dependent vowel						ᩯ			U+1A6F: TAI THAM VOWEL SIGN AE​
ᩱ		a	aʲ	-aj	dependent vowel						ᩱ			U+1A71: TAI THAM VOWEL SIGN AI​
ᩰ		o	o	-oː -oː-	dependent vowel			ᩒ			ᩰ			U+1A70: TAI THAM VOWEL SIGN OO​
														
														
ᩣ		a	ā	-aː -aː-	dependent vowel						ᩣ			U+1A63: TAI THAM VOWEL SIGN AA​
ᩤ		a	ä	-aː-	dependent vowel						ᩤ			U+1A64: TAI THAM VOWEL SIGN TALL AA​
ᩡ		a	a	-a	dependent vowel						ᩡ			U+1A61: TAI THAM VOWEL SIGN A​
ᩢ		a	á	-a-	dependent vowel						ᩢ			U+1A62: TAI THAM VOWEL SIGN MAI SAT​
ᩥ		i	i	-i -i-	dependent vowel			ᩍ			ᩥ			U+1A65: TAI THAM VOWEL SIGN I​
ᩦ		i	ī	-iː -iː-	dependent vowel			ᩎ			ᩦ			U+1A66: TAI THAM VOWEL SIGN II​
ᩧ		u	ɯ	-ɯ -ɯ-	dependent vowel						ᩧ			U+1A67: TAI THAM VOWEL SIGN UE​
ᩨ		u	ɯ̄	-ɯː -ɯː-	dependent vowel						ᩨ			U+1A68: TAI THAM VOWEL SIGN UUE​
ᩩ		u	u	-u -u-	dependent vowel			ᩏ			ᩩ			U+1A69: TAI THAM VOWEL SIGN U​
ᩪ		u	ū	-uː -uː-	dependent vowel			ᩐ			ᩪ			U+1A6A: TAI THAM VOWEL SIGN UU​
ᩭ		o	oʲ	-ɔːj	dependent vowel						ᩭ			U+1A6D: TAI THAM VOWEL SIGN OY​
ᩫ		o	ɔ̈	-ɔ-	dependent vowel						ᩫ			U+1A6B: TAI THAM VOWEL SIGN O​
ᩬ		o	ɔ̱	-ɔː-	dependent vowel						ᩬ			U+1A6C: TAI THAM VOWEL SIGN OA BELOW​
ᩳ		o	ɔ̂	-ɔː	dependent vowel						ᩳ			U+1A73: TAI THAM VOWEL SIGN OA ABOVE​
														
														
														
᩵		^	¹		tone mark						᩵			U+1A75: TAI THAM SIGN TONE-1​
᩶		^	²		tone mark						᩶			U+1A76: TAI THAM SIGN TONE-2​
᩷		^	³		tone mark						᩷			U+1A77: TAI THAM SIGN KHUEN TONE-3​
᩸		^	⁴		tone mark						᩸			U+1A78: TAI THAM SIGN KHUEN TONE-4​
᩹		^	⁵		tone mark						᩹			U+1A79: TAI THAM SIGN KHUEN TONE-5​
														
														
᩠		*	˖		sakot						᩠			U+1A60: TAI THAM SIGN SAKOT​
														
														
														
᩼		*	˚		silencer mark						᩼			U+1A7C: TAI THAM SIGN KHUEN-LUE KARAN​
														
														
														
᪨		,	,		comma-like delimiter						᪨			U+1AA8: TAI THAM SIGN KAAN
᪩		.	.		full stop-like delimiter						᪩			U+1AA9: TAI THAM SIGN KAANKUU
᪪		|			phrase delimiter						᪪			U+1AAA: TAI THAM SIGN SATKAAN
᪫		|			phrase delimiter						᪫			U+1AAB: TAI THAM SIGN SATKAANKUU
ᪧ		&			repetition						ᪧ	maj⁵² ja⁴mok⁵³		U+1AA7: TAI THAM SIGN MAI YAMOK
᪦		#			section terminator						᪦			U+1AA6: TAI THAM SIGN REVERSED ROTATED RANA
᪬		#			section terminator						᪬			U+1AAC: TAI THAM SIGN HANG
᪣		#			section starter						᪣			U+1AA3: TAI THAM SIGN KEOW
᪤		#			section starter						᪤			U+1AA4: TAI THAM SIGN HOY
᪥		#			section starter						᪥			U+1AA5: TAI THAM SIGN DOKMAI
᪭		#			section starter						᪭			U+1AAD: TAI THAM SIGN CAANG
														
														
														
᪠		!	(city)		logograph						᪠			U+1AA0: TAI THAM SIGN WIANG
᪡		!	(village)		logograph						᪡			U+1AA1: TAI THAM SIGN WIANGWAAK
᪢		!	(heaven)		logograph						᪢			U+1AA2: TAI THAM SIGN SAWAN
														
														
														
᪀		0	0	0	secular digit						᪀			U+1A80: TAI THAM HORA DIGIT ZERO
᪁		1	1	1	secular digit						᪁			U+1A81: TAI THAM HORA DIGIT ONE
᪂		2	2	2	secular digit						᪂			U+1A82: TAI THAM HORA DIGIT TWO
᪃		3	3	3	secular digit						᪃			U+1A83: TAI THAM HORA DIGIT THREE
᪄		4	4	4	secular digit						᪄			U+1A84: TAI THAM HORA DIGIT FOUR
᪅		5	5	5	secular digit						᪅			U+1A85: TAI THAM HORA DIGIT FIVE
᪆		6	6	6	secular digit						᪆			U+1A86: TAI THAM HORA DIGIT SIX
᪇		7	7	7	secular digit						᪇			U+1A87: TAI THAM HORA DIGIT SEVEN
᪈		8	8	8	secular digit						᪈			U+1A88: TAI THAM HORA DIGIT EIGHT
᪉ 		9	9	9	secular digit						᪉ 			U+1A89 U+0020: TAI THAM HORA DIGIT NINE, SPACE
														
᪐		§	0̣		ecclesiastic digit						᪐			U+1A90: TAI THAM THAM DIGIT ZERO
᪑		§	1̣		ecclesiastic digit						᪑			U+1A91: TAI THAM THAM DIGIT ONE
᪒		§	2̣		ecclesiastic digit						᪒			U+1A92: TAI THAM THAM DIGIT TWO
᪓		§	3̣		ecclesiastic digit						᪓			U+1A93: TAI THAM THAM DIGIT THREE
᪔		§	4̣		ecclesiastic digit						᪔			U+1A94: TAI THAM THAM DIGIT FOUR
᪕		§	5̣		ecclesiastic digit						᪕			U+1A95: TAI THAM THAM DIGIT FIVE
᪖		§	6̣		ecclesiastic digit						᪖			U+1A96: TAI THAM THAM DIGIT SIX
᪗		§	7̣		ecclesiastic digit						᪗			U+1A97: TAI THAM THAM DIGIT SEVEN
᪘		§	8̣		ecclesiastic digit						᪘			U+1A98: TAI THAM THAM DIGIT EIGHT
᪙		§	9̣		ecclesiastic digit						᪙			U+1A99: TAI THAM THAM DIGIT NINE
														
														
														
														
														
														
														
᩠ᨿ	s		˖ȳ	eː										U+1A60 U+1A3F: TAI THAM SIGN SAKOT, LETTER LOW YA​
᩠ᩅ	s		˖w̱	ua										U+1A60 U+1A45: TAI THAM SIGN SAKOT, LETTER WA​
ᩮ᩠ᨿ	s		e˖ȳ	ia										U+1A6E U+1A60 U+1A3F: TAI THAM VOWEL SIGN E, SIGN SAKOT, LETTER LOW YA​
ᩱ᩠ᨿ	s		aʲ˖ȳ	aj										U+1A71 U+1A60 U+1A3F: TAI THAM VOWEL SIGN AI, SIGN SAKOT, LETTER LOW YA​
ᩢ᩠ᨿ	s		á˖ȳ	aj										U+1A62 U+1A60 U+1A3F: TAI THAM VOWEL SIGN MAI SAT, SIGN SAKOT, LETTER LOW YA​
᩠ᩅᩫ	s		˖w̱ɔ̈	ua										U+1A60 U+1A45 U+1A6B: TAI THAM SIGN SAKOT, LETTER WA, VOWEL SIGN O​
ᩮ᩠ᨿᩡ	s		e˖ȳa	iaʔ										U+1A6E U+1A60 U+1A3F U+1A61: TAI THAM VOWEL SIGN E, SIGN SAKOT, LETTER LOW YA, VOWEL SIGN A​
᩠ᩅᩫᩡ	s		˖w̱ɔ̈a	uaʔ										U+1A60 U+1A45 U+1A6B U+1A61: TAI THAM SIGN SAKOT, LETTER WA, VOWEL SIGN O, VOWEL SIGN A​
ᩅ᩠ᩅ᩠ᨿ	s		w̱˖w̱˖ȳ											U+1A45 U+1A60 U+1A45 U+1A60 U+1A3F: TAI THAM LETTER WA, SIGN SAKOT, LETTER WA, SIGN SAKOT, LETTER LOW YA
														
ᩮᩡ	s		ea	eʔ										U+1A6E U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN A​
ᩯᩡ	s		ɛa	ɛʔ										U+1A6F U+1A61: TAI THAM VOWEL SIGN AE, VOWEL SIGN A​
ᩮᩣ	s		eā	oː										U+1A6E U+1A63: TAI THAM VOWEL SIGN E, VOWEL SIGN AA​
ᩰᩡ	s		oa	oʔ										U+1A70 U+1A61: TAI THAM VOWEL SIGN OO, VOWEL SIGN A​
ᩮᩨ	s		eɯ̄											U+1A6E U+1A68: TAI THAM VOWEL SIGN E, VOWEL SIGN UUE​
ᩰᩢ	s		oá	o										U+1A70 U+1A62: TAI THAM VOWEL SIGN OO, VOWEL SIGN MAI SAT​
ᩬᩴ	s		ɔ̱ŋ̊	ɔː										U+1A6C U+1A74: TAI THAM VOWEL SIGN OA BELOW, SIGN MAI KANG​
ᩮᩬᩥ	s		eɔ̱i	ɤː/ɨa-										U+1A6E U+1A6C U+1A65: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I​
ᩮᩬᩨ	s		eɔ̱ɯ̄	ɤʔː										U+1A6E U+1A6C U+1A68: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN UUE​
ᩮᩢᩣ	s		eáā	o										U+1A6E U+1A62 U+1A63: TAI THAM VOWEL SIGN E, VOWEL SIGN MAI SAT, VOWEL SIGN AA​
ᩰᩬᩡ	s		oɔ̱a	ɔʔ										U+1A70 U+1A6C U+1A61: TAI THAM VOWEL SIGN OO, VOWEL SIGN OA BELOW, VOWEL SIGN A​
ᩮᩬᩥᩡ	s		eɔ̱ia	ɤʔ										U+1A6E U+1A6C U+1A65 U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I, VOWEL SIGN A​
ᩮᩬᩨᩡ	s		eɔ̱ɯ̄a	ɤʔ										U+1A6E U+1A6C U+1A68 U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN UUE, VOWEL SIGN A​
ᩮᩬᩥᩋ	s		eɔ̱iʔ̯	ɯa										U+1A6E U+1A6C U+1A65 U+1A4B: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I, LETTER A​
ᩮᩬᩥᩋᩡ	s		eɔ̱iʔ̯a	ɯaʔ										U+1A6E U+1A6C U+1A65 U+1A4B U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I, LETTER A, VOWEL SIGN A​


`



var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":0,
"typeLoc": 5,
"statusLoc": 6,
"dvowel": 7,
"ivowel": 8,
"subj":0,
"ltone":9,
"htone":10,
"lc":0,
"uc":0,
"meaning":0,
"shape": 11,
"numLoc": 0,
"nameLoc": 12,
"nnameLoc": 13,
"ucsName": 14,

//"othertranscriptions": [[6, 'ISO 9985']]
}

