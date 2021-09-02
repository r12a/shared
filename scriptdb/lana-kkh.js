var spreadsheet = `
ᨸ		pá		á	p	p	x	high class consonant				ᨻ		ᨸ -			U+1A38: TAI THAM LETTER HIGH PA	taitham
ᨷ		ba -p		a᷇	b	b̯	[	mid class consonant						ᨷ ᩅ᩠ᨷ			U+1A37: TAI THAM LETTER BA	taitham
ᨲ		tá -t			t	t	9	high class consonant				ᨴ		ᨲ ᩅ᩠ᨲ			U+1A32: TAI THAM LETTER HIGH TA	taitham
ᨭ		tá -t			t	ṫ		high class consonant						ᨭ ᩅ᩠ᨭ			U+1A2D: TAI THAM LETTER RATA	taitham
ᨯ		da -t			d	d̯	f	mid class consonant						ᨯ ᩅ᩠ᨯ			U+1A2F: TAI THAM LETTER DA	taitham
ᨧ		cá -t			c	c	0	high class consonant				ᨩ		ᨧ ᩅ᩠ᨧ			U+1A27: TAI THAM LETTER HIGH CA	taitham
ᨠ		ká -k			k	k	d	high class consonant				ᨣ		ᨠ ᩅ᩠ᨠ			U+1A20: TAI THAM LETTER HIGH KA	taitham
ᩋ		ʔ ʔa		ʔ	}	ʔ̯	D	mid class consonant						ᩋ ᩅ᩠ᩋ			U+1A4B: TAI THAM LETTER A	taitham
																		
ᨻ		pa᷇ -pʰ-		pʰ	p	p̱	r	low class consonant					ᨸ	ᨻ ᩅ᩠ᨻ			U+1A3B: TAI THAM LETTER LOW PA	taitham
ᨴ		ta᷇ -t			t	ṯ	m	low class consonant					ᨲ	ᨴ ᩅ᩠ᨴ			U+1A34: TAI THAM LETTER LOW TA	taitham
ᨩ		ca᷇			c	c̱	=	low class consonant					ᨧ	ᨩ ᩅ᩠ᨩ			U+1A29: TAI THAM LETTER LOW CA	taitham
ᨣ		ka -k᷇		k᷇	k	ḵ	8	low class consonant					ᨠ	 ᨣ ᩅ᩠ᨣ			U+1A23: TAI THAM LETTER LOW KA	taitham
																		
ᨹ		pʰá -pʰ-			p	pʰ	z	high class consonant				ᨽ		ᨹ ᩅ᩠ᨹ			U+1A39: TAI THAM LETTER HIGH PHA	taitham
ᨳ		tʰá -t			t	tʰ	5	high class consonant				ᨵ		ᨳ ᩅ᩠ᨳ			U+1A33: TAI THAM LETTER HIGH THA	taitham
ᨮ		tʰá -t			t	ṫʰ	{	high class consonant				ᨰ					U+1A2E: TAI THAM LETTER HIGH RATHA	taitham
ᨨ		cʰá			c	cʰ	C	high class consonant				ᨫ		ᨨ ᩅ᩠ᨨ			U+1A28: TAI THAM LETTER HIGH CHA	taitham
ᨡ		kʰá -k			k	kʰ	-	high class consonant				ᨥ		ᨡ ᩅ᩠ᨡ			U+1A21: TAI THAM LETTER HIGH KHA	taitham
																		
ᨽ		pʰa᷇ -p			p	p̱ʰ	4	low class consonant					ᨹ	ᨽ ᩅ᩠ᨽ			U+1A3D: TAI THAM LETTER LOW PHA	taitham
ᨵ		tʰa᷇ -t			t	ṯʰ	t	low class consonant					ᨳ	ᨵ ᩅ᩠ᨵ			U+1A35: TAI THAM LETTER LOW THA	taitham
ᨰ		tʰa᷇ -t			t	ṯ̇ʰ	R	low class consonant					ᨰ	ᨰ ᩅ᩠ᨰ			U+1A30: TAI THAM LETTER LOW RATHA	taitham
ᨫ		cʰa᷇ -cʰ-			c	c̱ʰ	G	low class consonant					ᨨ	ᨫ ᩅ᩠ᨫ			U+1A2B: TAI THAM LETTER LOW CHA	taitham
ᨥ		kʰa᷇ -k		kʰ	k	ḵʰ	S	low class consonant					ᨡ	ᨥ ᩅ᩠ᨥ			U+1A25: TAI THAM LETTER LOW KHA	taitham
ᨤ		kʰa᷇			k	ḵ̇ʰ	\	low class consonant						ᨤ -			U+1A24: TAI THAM LETTER LOW KXA	taitham
																		
ᨾ		ma᷇ -m			m	m̱	,	low class consonant					ᩉ᩠ᨾ	ᨾ ᩅ᩠ᨾ			U+1A3E: TAI THAM LETTER MA	taitham
ᨶ		na᷇ -n			n	ṉ	o	low class consonant					ᩉ᩠ᨶ	ᨶ ᩅ᩠ᨶ			U+1A36: TAI THAM LETTER NA	taitham
ᨱ		na᷇ -n			n	ṉ̇	I	low class consonant						ᨱ ᩅ᩠ᨱ			U+1A31: TAI THAM LETTER RANA	taitham
ᨬ		ja᷇			n	ɲ̱	P	low class consonant					ᩉ᩠ᨬ	ᨬ ᩅ᩠ᨬ			U+1A2C: TAI THAM LETTER NYA	taitham
ᨦ		ŋa᷇ -ŋ		ŋ	n	ŋ̱	'	low class consonant					ᩉ᩠ᨦ	ᨦ ᩅ᩠ᨦ			U+1A26: TAI THAM LETTER NGA	taitham
ᩉ᩠ᨾ	s	má			m	h˖m̱		high class consonant				ᨾ					U+1A49 U+1A60 U+1A3E: TAI THAM LETTER HIGH HA, SIGN SAKOT, LETTER MA	
ᩉ᩠ᨶ	s	ná			n	h˖ṉ		high class consonant				ᨶ					U+1A49 U+1A60 U+1A36: TAI THAM LETTER HIGH HA, SIGN SAKOT, LETTER NA	
																		
ᨺ		fá			f	f	/	high class consonant				ᨼ		ᨺ -			U+1A3A: TAI THAM LETTER HIGH FA	taitham
ᨼ		fa᷇			f	f̱	a	low class consonant					ᨺ	ᨼ -			U+1A3C: TAI THAM LETTER LOW FA	taitham
ᩈ		sá -t			s	s	l	high class consonant				ᨪ		ᩈ ᩅ᩠ᩈ			U+1A48: TAI THAM LETTER HIGH SA	taitham
ᩆ		sá -t			s	ś	j	high class consonant						ᩆ ᩅ᩠ᩆ			U+1A46: TAI THAM LETTER HIGH SHA	taitham
ᩇ		sá -t			s	ṡ	k	high class consonant						ᩇ ᩅ᩠ᩇ			U+1A47: TAI THAM LETTER HIGH SSA	taitham
ᨪ		sa᷇			s	s̱	:	low class consonant				ᩈ		ᨪ -			U+1A2A: TAI THAM LETTER LOW SA	taitham
ᩉ		há			h	h	s	high class consonant				ᩌ		ᩉ ᩅ᩠ᩉ			U+1A49: TAI THAM LETTER HIGH HA	taitham
ᩌ		ha᷇			h	ẖ	V	low class consonant					ᩉ	ᩌ -			U+1A4C: TAI THAM LETTER LOW HA	taitham
																		
ᩅ		wa᷇ -w			w	w̱		low class consonant					ᩉ᩠ᩅ	ᩅ ᩅ᩠ᩅ			U+1A45: TAI THAM LETTER WA	taitham
ᩁ		ra᷇ -n			r	ṟ	i	low class consonant					ᩉᩕ	ᩁ ᩅ᩠ᩁ			U+1A41: TAI THAM LETTER RA	taitham
ᩃ		la᷇ -n			l	ḻ	]	low class consonant					ᩉᩖ	ᩃ ᩅ᩠ᩃ			U+1A43: TAI THAM LETTER LA	taitham
ᩊ		la᷇ -n			l	ḻ̇	>	low class consonant						ᩊ ᩅ᩠ᩊ			U+1A4A: TAI THAM LETTER LLA	taitham
ᩀ		já			y	y̯	A	mid class consonant				ᨿ		ᩀ -			U+1A40: TAI THAM LETTER HIGH YA	taitham
ᨿ		ja᷇ -j			y	y̱	p	low class consonant					ᩉ᩠ᨿ	ᨿ ᩅ᩠ᨿ			U+1A3F: TAI THAM LETTER LOW YA	taitham
ᩉᩖ	s	lá			l	hl̆		high class consonant				ᩃ					U+1A49 U+1A56: TAI THAM LETTER HIGH HA, CONSONANT SIGN MEDIAL LA	
ᩉ᩠ᨿ	s	já			y	h˖y̱		high class consonant				ᨿ					U+1A49 U+1A60 U+1A3F: TAI THAM LETTER HIGH HA, SIGN SAKOT, LETTER LOW YA	
																		
																		
																		
																		
																		
																		
ᩕ		ʰ			r	r̆	1	medial consonant						ᩕ			U+1A55: TAI THAM CONSONANT SIGN MEDIAL RA​	taitham
ᩖ		l			l	l̆	]	medial consonant						ᩖ			U+1A56: TAI THAM CONSONANT SIGN MEDIAL LA​	taitham
																		
																		
																		
᩺		n			R	r̽	i	final r/n						᩺			U+1A7A: TAI THAM SIGN RA HAAM​	taitham
ᩴ		-ŋ -m			N	ŋ̊		final consonant						ᩴ		maj⁵² kaŋ¹⁵ tɔːm¹	U+1A74: TAI THAM SIGN MAI KANG​	taitham
ᩙ		-ŋ			N	ŋ̽	'	final consonant						ᩙ			U+1A59: TAI THAM CONSONANT SIGN FINAL NGA​	taitham
ᩘ		-ŋ			N	ŋ̣̽	|	final consonant						ᩘ			U+1A58: TAI THAM SIGN MAI KANG LAI​	taitham
ᩜ		-m			M	m̽	,	secondary subjoined form						ᩜ			U+1A5C: TAI THAM CONSONANT SIGN MA​	taitham
ᩝ		-b			B	b̽		final consonant	rare								U+1A5D: TAI THAM CONSONANT SIGN BA​	taitham
ᩞ		-s			S	s̽		final consonant	rare								U+1A5E: TAI THAM CONSONANT SIGN SA​	taitham
																		
																		
ᩛ		p tʰ		tʰ	p	ᵽ	+	special form						ᩛ			U+1A5B: TAI THAM CONSONANT SIGN HIGH RATHA OR LOW PA​	taitham
ᩓ		lɛː			l	lₔ	}	low tone ligature						ᩓ			U+1A53: TAI THAM LETTER LAE	taitham
ᩔ		-ss-			s	S	L	medial ss ligature						ᩔ			U+1A54: TAI THAM LETTER GREAT SA	taitham
																		
																		
ᩂ		rɯː			R	r̥	/	vocalic						ᩂ			U+1A42: TAI THAM LETTER RUE	taitham
ᩄ		lɯː			L	l̥	.	vocalic						ᩄ			U+1A44: TAI THAM LETTER LUE	taitham
																		
																		
																		
ᩍ		ʔi²			I	ị	b	independent vowel		ᩥ				ᩍ			U+1A4D: TAI THAM LETTER I	taitham
ᩎ		ʔiː²		iː	I	ị̄	n	independent vowel		ᩦ				ᩎ			U+1A4E: TAI THAM LETTER II	taitham
ᩏ		ʔu²			U	ụ	2	independent vowel		ᩩ				ᩏ			U+1A4F: TAI THAM LETTER U	taitham
ᩐ		ʔuː²		uː	U	ụ̄	6	independent vowel		ᩪ				ᩐ			U+1A50: TAI THAM LETTER UU	taitham
ᩑ		ʔeː²		eː	E	ẹ	3	independent vowel		ᩮ				ᩑ			U+1A51: TAI THAM LETTER EE	taitham
ᩒ		ʔoː²		oː	O	ọ	f	independent vowel		ᩰ				ᩒ			U+1A52: TAI THAM LETTER OO	taitham
ᩋᩣ	s	ʔaː		aː	A	ʔ̯ā		independent vowel									U+1A4B U+1A63: TAI THAM LETTER A, VOWEL SIGN AA	
																		
																		
ᩥ		-i -i-			i	i	b	dependent vowel			ᩍ			ᩥ			U+1A65: TAI THAM VOWEL SIGN I​	taitham
ᩦ		-iː -iː-			i	ī		dependent vowel			ᩎ			ᩦ			U+1A66: TAI THAM VOWEL SIGN II​	taitham
ᩧ		-ɯ -ɯ-		ɯ	u	ɯ	7	dependent vowel						ᩧ			U+1A67: TAI THAM VOWEL SIGN UE​	taitham
ᩨ		-ɯː -ɯː-		ɯː	u	ɯ̄	n	dependent vowel						ᩨ			U+1A68: TAI THAM VOWEL SIGN UUE​	taitham
ᩩ		-u -u-			u	u	6	dependent vowel			ᩏ			ᩩ			U+1A69: TAI THAM VOWEL SIGN U​	taitham
ᩪ		-uː -uː-			u	ū	^	dependent vowel			ᩐ			ᩪ			U+1A6A: TAI THAM VOWEL SIGN UU​	taitham
																		
ᩮᩡ	s	eʔ				ēa		vowel-sign sequence									U+1A6E U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN A​	
ᩮ		-eː -eː-			e	ē	g	dependent vowel			ᩑ			ᩮ			U+1A6E: TAI THAM VOWEL SIGN E​	taitham
᩠ᨿ	s	-eː-				˖y̱		vowel-sign sequence									U+1A60 U+1A3F: TAI THAM SIGN SAKOT, LETTER LOW YA​	
																		
ᩮᩬᩨᩡ	s	-ɤʔ		ɤ		ēɔ̄ɯ̄a		vowel-sign sequence									U+1A6E U+1A6C U+1A68 U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN UUE, VOWEL SIGN A​	
ᩮᩬᩨ	s	-ɤː		ɤː		ēɔ̄ɯ̄		vowel-sign sequence									U+1A6E U+1A6C U+1A68: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN UUE​	
ᩮᩨ	s	-ɤː-				ēɯ̄		vowel-sign sequence									U+1A6E U+1A68: TAI THAM VOWEL SIGN E, VOWEL SIGN UUE​	
																		
ᩰᩡ	s	-oʔ				ōa		vowel-sign sequence									U+1A70 U+1A61: TAI THAM VOWEL SIGN OO, VOWEL SIGN A​	
᩠ᩅᩫᩡ	s	-oʔ				˖w̱ɔ̈a		vowel-sign sequence									U+1A60 U+1A45 U+1A6B U+1A61: TAI THAM SIGN SAKOT, LETTER WA, VOWEL SIGN O, VOWEL SIGN A​	
ᩰ		-oː -oː-			o	ō	F	dependent vowel			ᩒ			ᩰ			U+1A70: TAI THAM VOWEL SIGN OO​	taitham
᩠ᩅᩫ	s	-oː				˖w̱ɔ̈		vowel-sign sequence									U+1A60 U+1A45 U+1A6B: TAI THAM SIGN SAKOT, LETTER WA, VOWEL SIGN O​	
᩠ᩅ	s	-oː-			o	˖w̱	;	dependent vowel									U+1A60 U+1A45: TAI THAM SIGN SAKOT, LETTER WA​	
																		
ᩯᩡ	s	-ɛʔ		ɛ		ɛa		vowel-sign sequence									U+1A6F U+1A61: TAI THAM VOWEL SIGN AE, VOWEL SIGN A​	
ᩯ		-ɛː -ɛː-		ɛː	e	ɛ	c	dependent vowel						ᩯ			U+1A6F: TAI THAM VOWEL SIGN AE​	taitham
																		
ᩰᩬᩡ	s	-ɔʔ		ɔ		ōɔ̄a		vowel-sign sequence									U+1A70 U+1A6C U+1A61: TAI THAM VOWEL SIGN OO, VOWEL SIGN OA BELOW, VOWEL SIGN A​	
ᩫ		-ɔ-			o	ɔ̈	y	dependent vowel						ᩫ			U+1A6B: TAI THAM VOWEL SIGN O​	taitham
ᩬ		-ɔː-		ɔː	o	ɔ̄	v	dependent vowel						ᩬ			U+1A6C: TAI THAM VOWEL SIGN OA BELOW​	taitham
ᩳ		-ɔː			o	ɔ̂		dependent vowel						ᩳ			U+1A73: TAI THAM VOWEL SIGN OA ABOVE​	taitham
																		
ᩡ		-a			a	a	T	dependent vowel						ᩡ			U+1A61: TAI THAM VOWEL SIGN A​	taitham
ᩢ		-a-			a	á	h	dependent vowel						ᩢ			U+1A62: TAI THAM VOWEL SIGN MAI SAT​	taitham
ᩣ		-aː -aː-			a	ā	k	dependent vowel						ᩣ			U+1A63: TAI THAM VOWEL SIGN AA​	taitham
ᩤ		-aː-			a	ä	K	dependent vowel						ᩤ			U+1A64: TAI THAM VOWEL SIGN TALL AA​	taitham
																		
ᩓ᩠ᩅ		lɛːw			s	lₔ˖w̱		ligature+vowel									U+1A53 U+1A60 U+1A45: TAI THAM LETTER LAE, SIGN SAKOT, LETTER WA	
																		
																		
ᩮ᩠ᨿ	s	ia				ē˖y̱		composite vowel									U+1A6E U+1A60 U+1A3F: TAI THAM VOWEL SIGN E, SIGN SAKOT, LETTER LOW YA​	
ᩧ᩠ᨿ	s	ɯj				ɯ˖y̱		composite vowel									U+1A67 U+1A60 U+1A3F: TAI THAM VOWEL SIGN UE, SIGN SAKOT, LETTER LOW YA​	
ᩨ᩠ᨿ	s	ɯːj				ɯ̄˖y̱		composite vowel									U+1A68 U+1A60 U+1A3F: TAI THAM VOWEL SIGN UUE, SIGN SAKOT, LETTER LOW YA​	
ᩩᨿ	s	uj				uy̱		composite vowel									U+1A69 U+1A3F: TAI THAM VOWEL SIGN U, LETTER LOW YA​	
ᩮᩅ	s	eːw				ēw̱		composite vowel									U+1A6E U+1A45: TAI THAM VOWEL SIGN E, LETTER WA​	
ᩮᩤ	s	eːw				ēä		composite vowel									U+1A6E U+1A64: TAI THAM VOWEL SIGN E, VOWEL SIGN TALL AA​	
ᩴ᩠ᨿ	s	eːw				ŋ̊˖y̱	Y	composite vowel									U+1A74 U+1A60 U+1A3F: TAI THAM SIGN MAI KANG, SIGN SAKOT, LETTER LOW YA​	
ᩮᩬᩨᩡ᩠ᨿ	s	ɤj				ēɔ̄ɯ̄a˖y̱		composite vowel									U+1A6E U+1A6C U+1A68 U+1A61 U+1A60 U+1A3F: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN UUE, VOWEL SIGN A, SIGN SAKOT, LETTER LOW YA​	
ᩮᩬᩨ᩠ᨿ	s	ɤːj				ēɔ̄ɯ̄˖y̱		composite vowel									U+1A6E U+1A6C U+1A68 U+1A60 U+1A3F: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN UUE, SIGN SAKOT, LETTER LOW YA​	
ᩯᩅ		ɛːw				ɛw̱		composite vowel									U+1A6F U+1A45: TAI THAM VOWEL SIGN AE, LETTER WA​	
ᩭ		-ɔːj			o	ōʲ	Q	composite vowel						ᩭ			U+1A6D: TAI THAM VOWEL SIGN OY​	taitham
᩠ᩅ᩠ᨿ	s	-ɔːj				˖w̱˖y̱		composite vowel									U+1A60 U+1A45 U+1A60 U+1A3F: TAI THAM SIGN SAKOT, LETTER WA, SIGN SAKOT, LETTER LOW YA​	
ᩱ		-aj			a	aʲ	.	composite vowel						ᩱ			U+1A71: TAI THAM VOWEL SIGN AI​	taitham
ᩱ᩠ᨿ	s	aj				aʲ˖y̱		composite vowel									U+1A71 U+1A60 U+1A3F: TAI THAM VOWEL SIGN AI, SIGN SAKOT, LETTER LOW YA​	
ᩣ᩠ᨿ	s	aːj				ā˖y̱		composite vowel									U+1A63 U+1A60 U+1A3F: TAI THAM VOWEL SIGN AA, SIGN SAKOT, LETTER LOW YA​	
ᩮᩢᩣ	s	aw				ēáā		composite vowel									U+1A6E U+1A62 U+1A63: TAI THAM VOWEL SIGN E, VOWEL SIGN MAI SAT, VOWEL SIGN AA​	
ᩮᩢᩤ	s	aw				ēáä		composite vowel									U+1A6E U+1A62 U+1A64: TAI THAM VOWEL SIGN E, VOWEL SIGN MAI SAT, VOWEL SIGN TALL AA​	
																		
																		
																		
᩵					^	¹	J	tone mark						᩵			U+1A75: TAI THAM SIGN TONE-1​	taitham
᩶					^	²	H	tone mark						᩶			U+1A76: TAI THAM SIGN TONE-2​	taitham
᩷					^	³	u	tone mark						᩷			U+1A77: TAI THAM SIGN KHUEN TONE-3​	taitham
᩸					^	⁴	y	tone mark						᩸			U+1A78: TAI THAM SIGN KHUEN TONE-4​	taitham
᩹					^	⁵	t	tone mark						᩹			U+1A79: TAI THAM SIGN KHUEN TONE-5​	taitham
																		
																		
᩠					*	˖	j	sakot						᩠			U+1A60: TAI THAM SIGN SAKOT​	taitham
																		
																		
																		
᩼					*	˚	N	silencer mark						᩼			U+1A7C: TAI THAM SIGN KHUEN-LUE KARAN​	taitham
																		
																		
																		
᪨					,	,	"	comma-like delimiter						᪨			U+1AA8: TAI THAM SIGN KAAN	taitham
᪩					.	.	w	full stop-like delimiter						᪩			U+1AA9: TAI THAM SIGN KAANKUU	taitham
᪪					|	_	o	phrase delimiter						᪪			U+1AAA: TAI THAM SIGN SATKAAN	taitham
᪫					|	_	O	phrase delimiter						᪫			U+1AAB: TAI THAM SIGN SATKAANKUU	taitham
ᪧ					&	_	q	repetition						ᪧ		maj⁵² ja⁴mok⁵³	U+1AA7: TAI THAM SIGN MAI YAMOK	taitham
᪦					#			section terminator						᪦			U+1AA6: TAI THAM SIGN REVERSED ROTATED RANA	taitham
᪬					#			section terminator						᪬			U+1AAC: TAI THAM SIGN HANG	taitham
᪣					#			section starter						᪣			U+1AA3: TAI THAM SIGN KEOW	taitham
᪤					#			section starter						᪤			U+1AA4: TAI THAM SIGN HOY	taitham
᪥					#			section starter						᪥			U+1AA5: TAI THAM SIGN DOKMAI	taitham
᪭					#			section starter						᪭			U+1AAD: TAI THAM SIGN CAANG	taitham
																		
																		
																		
᪠					!	(city)		logograph						᪠			U+1AA0: TAI THAM SIGN WIANG	taitham
᪡					!	(village)		logograph						᪡			U+1AA1: TAI THAM SIGN WIANGWAAK	taitham
᪢					!	(heaven)		logograph						᪢			U+1AA2: TAI THAM SIGN SAWAN	taitham
																		
																		
																		
᪀		0			0	0	-	secular digit						᪀			U+1A80: TAI THAM HORA DIGIT ZERO	taitham
᪁		1			1	1	1	secular digit						᪁			U+1A81: TAI THAM HORA DIGIT ONE	taitham
᪂		2			2	2	2	secular digit						᪂			U+1A82: TAI THAM HORA DIGIT TWO	taitham
᪃		3			3	3	3	secular digit						᪃			U+1A83: TAI THAM HORA DIGIT THREE	taitham
᪄		4			4	4	4	secular digit						᪄			U+1A84: TAI THAM HORA DIGIT FOUR	taitham
᪅		5			5	5	5	secular digit						᪅			U+1A85: TAI THAM HORA DIGIT FIVE	taitham
᪆		6			6	6	7	secular digit						᪆			U+1A86: TAI THAM HORA DIGIT SIX	taitham
᪇		7			7	7	8	secular digit						᪇			U+1A87: TAI THAM HORA DIGIT SEVEN	taitham
᪈		8			8	8	9	secular digit						᪈			U+1A88: TAI THAM HORA DIGIT EIGHT	taitham
᪉ 		9			9	9	0	secular digit						᪉ 			U+1A89 U+0020: TAI THAM HORA DIGIT NINE, SPACE	taitham
																		
᪐					§	0̣	_	ecclesiastic digit						᪐			U+1A90: TAI THAM THAM DIGIT ZERO	taitham
᪑					§	1̣	!	ecclesiastic digit						᪑			U+1A91: TAI THAM THAM DIGIT ONE	taitham
᪒					§	2̣	@	ecclesiastic digit						᪒			U+1A92: TAI THAM THAM DIGIT TWO	taitham
᪓					§	3̣	#	ecclesiastic digit						᪓			U+1A93: TAI THAM THAM DIGIT THREE	taitham
᪔					§	4̣	$	ecclesiastic digit						᪔			U+1A94: TAI THAM THAM DIGIT FOUR	taitham
᪕					§	5̣	%	ecclesiastic digit						᪕			U+1A95: TAI THAM THAM DIGIT FIVE	taitham
᪖					§	6̣	&	ecclesiastic digit						᪖			U+1A96: TAI THAM THAM DIGIT SIX	taitham
᪗					§	7̣	*	ecclesiastic digit						᪗			U+1A97: TAI THAM THAM DIGIT SEVEN	taitham
᪘					§	8̣	(	ecclesiastic digit						᪘			U+1A98: TAI THAM THAM DIGIT EIGHT	taitham
᪙					§	9̣	)	ecclesiastic digit						᪙			U+1A99: TAI THAM THAM DIGIT NINE	taitham
																		
																		
																		
																		
																		
																		
																		
ᩰᩢ	x	o				o		compound vowel									U+1A70 U+1A62: TAI THAM VOWEL SIGN OO, VOWEL SIGN MAI SAT​	
ᩮᩣ	x	oː				ō		compound vowel									U+1A6E U+1A63: TAI THAM VOWEL SIGN E, VOWEL SIGN AA​	
ᩬᩴ	x	ɔː				ɔ̄		compound vowel									U+1A6C U+1A74: TAI THAM VOWEL SIGN OA BELOW, SIGN MAI KANG​	
ᩮ᩠ᨿᩡ	x	iaʔ				iaʔ											U+1A6E U+1A60 U+1A3F U+1A61: TAI THAM VOWEL SIGN E, SIGN SAKOT, LETTER LOW YA, VOWEL SIGN A​	
ᩮᩬᩥᩋ	x	ɯa				ɯa											U+1A6E U+1A6C U+1A65 U+1A4B: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I, LETTER A​	
ᩮᩬᩥᩋᩡ	x	ɯaʔ				ɯaʔ											U+1A6E U+1A6C U+1A65 U+1A4B U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I, LETTER A, VOWEL SIGN A​	
ᩮᩬᩥ	x	ɤː/ɨa-				ɤː											U+1A6E U+1A6C U+1A65: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I​	
ᩮᩬᩥᩡ	x	ɤʔ				ɤʔ											U+1A6E U+1A6C U+1A65 U+1A61: TAI THAM VOWEL SIGN E, VOWEL SIGN OA BELOW, VOWEL SIGN I, VOWEL SIGN A​	
ᩢ᩠ᨿ	x	aj				aj											U+1A62 U+1A60 U+1A3F: TAI THAM VOWEL SIGN MAI SAT, SIGN SAKOT, LETTER LOW YA​	
																		
																		
																		
																		
\u200B								zero-width space									U+200B ZERO WIDTH SPACE	
\u200C						ₓ		zero-width non-joiner									U+200C: ZERO WIDTH NON-JOINER	
\u200D						₊		zero-width joiner									U+200D: ZERO WIDTH JOINER	
\u034F						ᶜᵍʲ		combining grapheme joiner									U+034F: COMBINING GRAPHEME JOINER​	
																		
																		
“					<			quotation mark									U+201C: LEFT DOUBLE QUOTATION MARK	
”					>			quotation mark									U+201D: RIGHT DOUBLE QUOTATION MARK	
‘					<			quotation mark									U+2018: LEFT SINGLE QUOTATION MARK	
’					>			quotation mark									U+2019: RIGHT SINGLE QUOTATION MARK	
«					"	“		quotation mark									U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»					"	”		quotation mark									U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
ʼ								apostrophe									U+02BC: MODIFIER LETTER APOSTROPHE	
,								comma									U+002C: COMMA	
;								semicolon									U+003B: SEMICOLON	
:								colon									U+003A: COLON	
.								full stop									U+002E: FULL STOP	
?						?	M	question mark									U+003F: QUESTION MARK	
!								exclamation mark									U+0021: EXCLAMATION MARK	
(						(	Z	parenthesis									U+0028: LEFT PARENTHESIS	
)						)	X	parenthesis									U+0029: RIGHT PARENTHESIS	
…								ellipsis									U+2026: HORIZONTAL ELLIPSIS	
–								en dash									U+2013: EN DASH	
—								em dash									U+2014: EM DASH	
																		
§								section sign									U+00A7: SECTION SIGN	
†								dagger									U+2020: DAGGER	
‡								double dagger									U+2021: DOUBLE DAGGER	
′								prime									U+2032: PRIME	
″								double prime									U+2033: DOUBLE PRIME	
‐								hyphen									U+2010 HYPHEN	
‑								non-breaking hyphen									U+2011 NON-BREAKING HYPHEN	
																		
																		
ᩲ						–	W										U+1A72: TAI THAM VOWEL SIGN THAM AI​	
ᩣᩴ						–	e										U+1A63 U+1A74: TAI THAM VOWEL SIGN AA, SIGN MAI KANG​	
᩻						–	E										U+1A7B: TAI THAM SIGN MAI SAM​	
ᩚ						–	r										U+1A5A: TAI THAM CONSONANT SIGN LOW PA​	
ᩦ						–	u										U+1A66: TAI THAM VOWEL SIGN II​	
ᩳ						–	U										U+1A73: TAI THAM VOWEL SIGN OA ABOVE​	
᩿						–	B										U+1A7F: TAI THAM COMBINING CRYPTOGRAMMIC DOT​	
ᩗ						–	<										U+1A57: TAI THAM CONSONANT SIGN LA TANG LAI​	





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

"dvowel": 10,
"ivowel": 11,
"subj":0,
"ltone":12,
"htone":13,
"lc":0,
"uc":0,
"meaning":0,
"shape": 14,
"numLoc": 0,

"nnameLoc": 15,
"nameLoc": 16,
"ucsName": 17,
"block": 18,

//"othertranscriptions": [[6, 'ISO 9985']]
}

