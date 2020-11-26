var spreadsheet = `
ᨸ		p	p	pá	high class plosive				ᨻ		ᨸ ᩅ᩠ᨸ			U+1A38: TAI THAM LETTER HIGH PA	taitham
ᨲ		t¶	t	tá -t	high class plosive				ᨴ		ᨲ ᩅ᩠ᨲ			U+1A32: TAI THAM LETTER HIGH TA	taitham
ᨭ		t	ṫ	tá -t	high class plosive						ᨭ ᩅ᩠ᨭ			U+1A2D: TAI THAM LETTER RATA	taitham
ᨧ		c	c	ʨá -t	high class plosive				ᨩ		ᨧ ᩅ᩠ᨧ			U+1A27: TAI THAM LETTER HIGH CA	taitham
ᨠ		k	k	ká -k	high class plosive				ᨣ		ᨠ ᩅ᩠ᨠ			U+1A20: TAI THAM LETTER HIGH KA	taitham
															
ᨻ		p	p̱	pa᷇ -p	low class plosive					ᨸ	ᨻ ᩅ᩠ᨻ			U+1A3B: TAI THAM LETTER LOW PA	taitham
ᨻ		p	p̱	pa᷇ -p	low class plosive					ᨸ	ᨻ ᩅ᩠ᨻ			U+1A3B: TAI THAM LETTER LOW PA	taitham
᩠ᨻ	s	p	p̱	pa᷇ -p	low class plosive									U+1A3B: TAI THAM LETTER LOW PA	
ᨴ		t¶	ṯ	ta᷇ -t	low class plosive					ᨲ	ᨴ ᩅ᩠ᨴ			U+1A34: TAI THAM LETTER LOW TA	taitham
ᨯ		d	d̯	da -t	mid class plosive						ᨯ ᩅ᩠ᨯ			U+1A2F: TAI THAM LETTER DA	taitham
ᨩ		c	c̱	ʨa᷇ -t	low class affricate					ᨧ	ᨩ ᩅ᩠ᨩ			U+1A29: TAI THAM LETTER LOW CA	taitham
ᨣ		k	ḵ	ka -k᷇	low class plosive					ᨠ	ᨣ ᩅ᩠ᨣ			U+1A23: TAI THAM LETTER LOW KA	taitham
															
ᨹ		p	pʰ	pʰá -p	high class aspirated plosive				ᨽ		ᨹ ᩅ᩠ᨹ			U+1A39: TAI THAM LETTER HIGH PHA	taitham
ᨽ		p	p̱ʰ	pʰa᷇ -p	low class aspirated plosive					ᨹ	ᨽ ᩅ᩠ᨽ			U+1A3D: TAI THAM LETTER LOW PHA	taitham
ᨷᩕ	s 		b̯r̆	pr-	consonant sequence									U+1A37 U+1A55: TAI THAM LETTER BA,  CONSONANT SIGN MEDIAL RA	
ᨳ		t¶	tʰ	tʰá -t	high class aspirated plosive				ᨵ		ᨳ ᩅ᩠ᨳ			U+1A33: TAI THAM LETTER HIGH THA	taitham
ᨮ		t	ṫʰ	tʰá	high class aspirated plosive				ᨰ		ᨮ ᩅ᩠ᨮ			U+1A2E: TAI THAM LETTER HIGH RATHA	taitham
ᨵ		t¶	ṯʰ	tʰa᷇ -t	low class aspirated plosive					ᨳ	ᨵ ᩅ᩠ᨵ			U+1A35: TAI THAM LETTER LOW THA	taitham
ᨲᩕ	s		tr̆	tʰ-	consonant sequence									U+1A32 U+1A55: TAI THAM LETTER HIGH TA,  CONSONANT SIGN MEDIAL RA	
ᨴᩕ	s		ṯr̆	tʰ-	consonant sequence									U+1A34 U+1A55: TAI THAM LETTER LOW TA,  CONSONANT SIGN MEDIAL RA	
ᨰ		t	ṯ̇ʰ	tʰa᷇ -t	low class aspirated plosive					ᨰ	ᨰ ᩅ᩠ᨰ			U+1A30: TAI THAM LETTER LOW RATHA	taitham
															
ᨺ		f	f	fá	high class fricative				ᨼ		ᨺ ᩅ᩠ᨺ			U+1A3A: TAI THAM LETTER HIGH FA	taitham
ᩈ		s	s	sá -t	high class fricative				ᨪ		ᩈ ᩅ᩠ᩈ			U+1A48: TAI THAM LETTER HIGH SA	taitham
ᩆ		s	ś	sá -t	high class fricative						ᩆ ᩅ᩠ᩆ			U+1A46: TAI THAM LETTER HIGH SHA	taitham
ᩇ		s	ṡ	sá -t	high class fricative						ᩇ ᩅ᩠ᩇ			U+1A47: TAI THAM LETTER HIGH SSA	taitham
ᨨ		s	ŝ	sá	high class fricative				ᨫ		ᨨ ᩅ᩠ᨨ			U+1A28: TAI THAM LETTER HIGH CHA	taitham
ᨡ		x	x	xá	high class fricative				ᨥ		ᨡ ᩅ᩠ᨡ			U+1A21: TAI THAM LETTER HIGH KHA	taitham
ᨢ		x	ẋ	xá	high class fricative						ᨢ ᩅ᩠ᨢ			U+1A22: TAI THAM LETTER HIGH KXA	taitham
ᨠᩕ	s		kr̆	x-	high class fricative									U+1A20 U+1A55: TAI THAM LETTER HIGH KA,  CONSONANT SIGN MEDIAL RA	
ᩉ		h	h	há	high class fricative				ᩌ		ᩉ ᩅ᩠ᩉ			U+1A49: TAI THAM LETTER HIGH HA	taitham
															
ᨼ		f	f̱	fa᷇	low class fricative					ᨺ	ᨼ ᩅ᩠ᨼ			U+1A3C: TAI THAM LETTER LOW FA	taitham
ᨪ		s	s̱	sa᷇	low class fricative				ᩈ		ᨪ ᩅ᩠ᨪ			U+1A2A: TAI THAM LETTER LOW SA	taitham
ᨫ		s	ŝ̱	sa᷇	low class fricative					ᨨ	ᨫ ᩅ᩠ᨫ			U+1A2B: TAI THAM LETTER LOW CHA	taitham
ᨥ		x	x̱	xa᷇	low class fricative					ᨡ	ᨥ ᩅ᩠ᨥ			U+1A25: TAI THAM LETTER LOW KHA	taitham
ᨤ		x	ẋ̱	xa᷇	low class fricative						ᨤ ᩅ᩠ᨤ			U+1A24: TAI THAM LETTER LOW KXA	taitham
ᨣᩕ	s		ḵr̆	x-	consonant sequence									U+1A23 U+1A55: TAI THAM LETTER LOW KA,  CONSONANT SIGN MEDIAL RA	
ᩌ		h	ẖ	ha᷇	low class fricative					ᩉ	ᩌ ᩅ᩠ᩌ			U+1A4C: TAI THAM LETTER LOW HA	taitham
															
ᨾ		m	m̱	ma᷇ -m	low class nasal					ᩉ᩠ᨾ	ᨾ ᩅ᩠ᨾ			U+1A3E: TAI THAM LETTER MA	taitham
ᨶ		n	ṉ	na᷇ -n	low class nasal					ᩉ᩠ᨶ	ᨶ ᩅ᩠ᨶ			U+1A36: TAI THAM LETTER NA	taitham
ᨱ		n	ṉ̇	na᷇ -n	low class nasal						ᨱ ᩅ᩠ᨱ			U+1A31: TAI THAM LETTER RANA	taitham
ᨬ		n	ɲ̱	ɲa᷇ ja᷇	low class nasal						ᨬ ᩅ᩠ᨬ			U+1A2C: TAI THAM LETTER NYA	taitham
ᨦ		n	ŋ̱	ŋa᷇ -ŋ	low class nasal					ᩉ᩠ᨦ	ᨦ ᩅ᩠ᨦ			U+1A26: TAI THAM LETTER NGA	taitham
ᨿ		y	ɲ̱̇	ɲa᷇ -j	low class nasal					ᩉ᩠ᨿ	ᨿ ᩅ᩠ᨿ			U+1A3F: TAI THAM LETTER LOW YA	taitham
															
ᩉ᩠ᨾ	s		h˖m̱	m-	consonant sequence									U+1A49 U+1A60 U+1A3E: TAI THAM LETTER HIGH HA,  SIGN SAKOT,  LETTER MA	
ᩉ᩠ᨶ	s		h˖ṉ	n-	consonant sequence									U+1A49 U+1A60 U+1A36: TAI THAM LETTER HIGH HA,  SIGN SAKOT,  LETTER NA	
ᩉ᩠ᨿ	s		h˖y̱	ɲ	consonant sequence									U+1A49 U+1A60 U+1A3F: TAI THAM LETTER HIGH HA,  SIGN SAKOT,  LETTER LOW YA	
ᩉ᩠ᨦ	s		h˖ŋ̱	ŋ	consonant sequence									U+1A49 U+1A60 U+1A26: TAI THAM LETTER HIGH HA,  SIGN SAKOT,  LETTER NGA	
															
ᩅ		w	w̱	wa᷇	low class approximant					ᩉ᩠ᩅ	ᩅ ᩅ᩠ᩅ			U+1A45: TAI THAM LETTER WA	taitham
ᩁ		r	ṟ	ha᷇ la᷇ -n	low class consonant					ᩉᩕ	ᩁ ᩅ᩠ᩁ			U+1A41: TAI THAM LETTER RA	taitham
ᩃ		l	ḻ	la᷇ -n	low class approximant					ᩉᩖ	ᩃ ᩅ᩠ᩃ			U+1A43: TAI THAM LETTER LA	taitham
ᩊ		l	ḻ̇	la᷇ -n	low class approximant						ᩊ ᩅ᩠ᩊ			U+1A4A: TAI THAM LETTER LLA	taitham
ᩀ		y	y̯	já	mid class approximant						ᩀ -			U+1A40: TAI THAM LETTER HIGH YA	taitham
															
ᩉ᩠ᩅ	s		h˖w̱	w-	consonant sequence									U+1A49 U+1A60 U+1A45: TAI THAM LETTER HIGH HA,  SIGN SAKOT,  LETTER WA	
ᩉᩖ	s		hl̆	l-	consonant sequence									U+1A49 U+1A56: TAI THAM LETTER HIGH HA,  CONSONANT SIGN MEDIAL LA	
ᩉ᩠ᩃ	s		h˖ḻ	l-	consonant sequence									U+1A49 U+1A60 U+1A43: TAI THAM LETTER HIGH HA,  SIGN SAKOT,  LETTER LA	
															
ᩋ		}	ʔ̯	ʔá	mid class glottal stop						ᩋ ᩅ᩠ᩋ			U+1A4B: TAI THAM LETTER A	taitham
															
															
															
															
															
ᩕ		r	r̆	ʰ l	medial consonant						ᩕ			U+1A55: TAI THAM CONSONANT SIGN MEDIAL RA​	taitham
ᩖ		l	l̆	l ∅	medial consonant						ᩖ			U+1A56: TAI THAM CONSONANT SIGN MEDIAL LA​	taitham
															
															
															
ᩙ		N	ŋ̽	-ŋ	final consonant						ᩙ			U+1A59: TAI THAM CONSONANT SIGN FINAL NGA​	taitham
ᩘ		N	ŋ̣̽	-ŋ (ɔː)	final consonant						ᩘ			U+1A58: TAI THAM SIGN MAI KANG LAI​	taitham
ᩴ		N	ŋ̊	-ŋ -m	final consonant						ᩴ	maj⁵² kaŋ¹⁵ tɔːm¹		U+1A74: TAI THAM SIGN MAI KANG​	taitham
ᩝ			b̽	b	final consonant						ᩝ			U+1A5D: TAI THAM CONSONANT SIGN BA​	taitham
ᩞ			s̽	s	final consonant						ᩞ			U+1A5E: TAI THAM CONSONANT SIGN SA​	taitham
															
															
ᩛ		p	ᵽ	p, tʰ	special form						ᩛ			U+1A5B: TAI THAM CONSONANT SIGN HIGH RATHA OR LOW PA​	taitham
ᩓ		l	lₔ	lɛː	low tone ligature						ᩓ			U+1A53: TAI THAM LETTER LAE	taitham
ᩔ		s	S	-ss-	medial ss ligature						ᩔ			U+1A54: TAI THAM LETTER GREAT SA	taitham
ᩗ											ᩗ			U+1A57: TAI THAM CONSONANT SIGN LA TANG LAI​	taitham
															
															
															
ᩂ		R	r̥	lɯː	vocalic						ᩂ			U+1A42: TAI THAM LETTER RUE	taitham
ᩄ		L	l̥	lɯː	vocalic						ᩄ			U+1A44: TAI THAM LETTER LUE	taitham
															
															
															
ᩍ		I	ị	i	independent vowel			ᩥ			ᩍ			U+1A4D: TAI THAM LETTER I	taitham
ᩎ		I	ị̄	iː	independent vowel			ᩦ			ᩎ			U+1A4E: TAI THAM LETTER II	taitham
ᩏ		U	ụ	u	independent vowel			ᩩ			ᩏ			U+1A4F: TAI THAM LETTER U	taitham
ᩐ		U	ụ̄	uː	independent vowel			ᩪ			ᩐ			U+1A50: TAI THAM LETTER UU	taitham
ᩑ		E	ẹ	eː	independent vowel			ᩮ			ᩑ			U+1A51: TAI THAM LETTER EE	taitham
															
															
															
ᩥ		i	i	-iʔ -i-	dependent vowel			ᩍ			ᩥ			U+1A65: TAI THAM VOWEL SIGN I​	taitham
ᩦ		i	ī	-iː -iː-	dependent vowel			ᩎ			ᩦ			U+1A66: TAI THAM VOWEL SIGN II​	taitham
ᩧ		u	ɯ	-ɯʔ -ɯ-	dependent vowel						ᩧ			U+1A67: TAI THAM VOWEL SIGN UE​	taitham
ᩨ		u	ɯ̄	-ɯː -ɯː-	dependent vowel						ᩨ			U+1A68: TAI THAM VOWEL SIGN UUE​	taitham
ᩩ		u	u	-uʔ -u-	dependent vowel			ᩏ			ᩩ			U+1A69: TAI THAM VOWEL SIGN U​	taitham
ᩪ		u	ū	-uː -uː-	dependent vowel			ᩐ			ᩪ			U+1A6A: TAI THAM VOWEL SIGN UU​	taitham
															
ᩮ		e	e	-eː -eː-	dependent vowel						ᩮ			U+1A6E: TAI THAM VOWEL SIGN E​	taitham
ᩮᩢ	s	e	ēá	-e-	vowel-sign sequence									U+1A6E U+1A62: TAI THAM VOWEL SIGN E,  VOWEL SIGN MAI SAT​	
ᩮᩡ	s	e	ēa	-eʔ	vowel-sign sequence									U+1A6E U+1A61: TAI THAM VOWEL SIGN E,  VOWEL SIGN A​	
															
ᩫ		o	o	-o-	dependent vowel						ᩫ			U+1A6B: TAI THAM VOWEL SIGN O​	taitham
ᩰᩡ	s		ōa	-oʔ	vowel-sign sequence									U+1A70 U+1A61: TAI THAM VOWEL SIGN OO, VOWEL SIGN A​	
ᩰᩫ	s		ōɔ̈	-oː-	vowel-sign sequence									U+1A70 U+1A6B: TAI THAM VOWEL SIGN OO,  VOWEL SIGN O​	
ᩰ		o	ō	-oː	dependent vowel						ᩰ			U+1A70: TAI THAM VOWEL SIGN OO​	taitham
															
ᩯ		e	ɛ̄	-ɛː -ɛː-	dependent vowel						ᩯ			U+1A6F: TAI THAM VOWEL SIGN AE​	taitham
ᩯᩢ	s	e	ɛá	-ɛ-	vowel-sign sequence									U+1A6F U+1A62: TAI THAM VOWEL SIGN AE,  VOWEL SIGN MAI SAT​	
ᩯᩡ	s	e	ɛa	-ɛʔ	vowel-sign sequence									U+1A6F U+1A61: TAI THAM VOWEL SIGN AE,  VOWEL SIGN A​	
															
ᩮᩥᩢ	s	e	ēiá	-ɜ-	vowel-sign sequence									U+1A6E U+1A65 U+1A62: TAI THAM VOWEL SIGN E,  VOWEL SIGN I,  VOWEL SIGN MAI SAT​	
ᩮᩬᩥᩡ	s	e	ēɔ̄ia	-ɜʔ	vowel-sign sequence									U+1A6E U+1A6C U+1A65 U+1A61: TAI THAM VOWEL SIGN E,  VOWEL SIGN OA BELOW,  VOWEL SIGN I,  VOWEL SIGN A​	
ᩮᩥ	s	e	ēi	-ɜː-	vowel-sign sequence									U+1A6E U+1A65: TAI THAM VOWEL SIGN E,  VOWEL SIGN I​	
ᩮᩬᩥ	s	e	ēɔ̄i	-ɜː	vowel-sign sequence									U+1A6E U+1A6C U+1A65: TAI THAM VOWEL SIGN E,  VOWEL SIGN OA BELOW,  VOWEL SIGN I​	
															
ᩬ		o	ɔ̄	-ɔː -ɔː-	dependent vowel						ᩬ			U+1A6C: TAI THAM VOWEL SIGN OA BELOW​	taitham
ᩬᩴ	s	o	ɔ̄ŋ̊	-ɔː	vowel-sign sequence									U+1A6C U+1A74: TAI THAM VOWEL SIGN OA BELOW,  SIGN MAI KANG​	
ᩬᩢ	s	o	ɔ̄á	-ɔ-	vowel-sign sequence									U+1A6C U+1A62: TAI THAM VOWEL SIGN OA BELOW,  VOWEL SIGN MAI SAT​	
ᩰᩬᩡ	s	o	ōɔ̄a	-ɔʔ	vowel-sign sequence									U+1A70 U+1A6C U+1A61: TAI THAM VOWEL SIGN OO,  VOWEL SIGN OA BELOW,  VOWEL SIGN A​	
															
ᩢ		a	á	-a-	dependent vowel						ᩢ			U+1A62: TAI THAM VOWEL SIGN MAI SAT​	taitham
ᩣ		a	ā	-aː -aː-	dependent vowel						ᩣ			U+1A63: TAI THAM VOWEL SIGN AA​	taitham
ᩤ		a	ä	-aː -aː-	dependent vowel						ᩤ			U+1A64: TAI THAM VOWEL SIGN TALL AA​	taitham
															
ᩱ		A	aʲ	-aj	dependent vowel						ᩱ			U+1A71: TAI THAM VOWEL SIGN AI​	taitham
ᩱ᩠ᨿ	s	A	aʲ˖y̱	-aj	vowel-sign sequence									U+1A71 U+1A60 U+1A3F: TAI THAM VOWEL SIGN AI,  SIGN SAKOT,  LETTER LOW YA​	
ᩲ		A	ȧʲ	-aj	dependent vowel	little used					ᩲ			U+1A72: TAI THAM VOWEL SIGN THAM AI​	taitham
ᩳ		A	aʷ	-aw	dependent vowel	little used					ᩳ			U+1A73: TAI THAM VOWEL SIGN OA ABOVE​	taitham
ᩡ		A	ʔ	ʔ	dependent vowel						ᩡ			U+1A61: TAI THAM VOWEL SIGN A​	taitham
															
															
ᩮᩢᩣ	s	A	ēáā	-aw	vowel-sign sequence									U+1A6E U+1A62 U+1A63: TAI THAM VOWEL SIGN E,  VOWEL SIGN MAI SAT,  VOWEL SIGN AA​	
᩠ᨿ	s	I	˖y̱	-ia	vowel-sign sequence									U+1A60 U+1A3F: TAI THAM SIGN SAKOT, LETTER LOW YA​	
᩠ᨿᩮ	s	I	˖y̱ē	-ia	vowel-sign sequence									U+1A60 U+1A3F U+1A6E: TAI THAM SIGN SAKOT,  LETTER LOW YA,  VOWEL SIGN E​	
᩠ᨿᩮᩡ	s	I	˖y̱ēa	-iaʔ	vowel-sign sequence									U+1A60 U+1A3F U+1A6E U+1A61: TAI THAM SIGN SAKOT,  LETTER LOW YA,  VOWEL SIGN E,  VOWEL SIGN A​	
ᩢ᩠ᨿ	s	I	á˖y̱	-ia-	vowel-sign sequence									U+1A62 U+1A60 U+1A3F: TAI THAM VOWEL SIGN MAI SAT,  SIGN SAKOT,  LETTER LOW YA​	
ᩮᩬᩥᩢ	s	I	ēɔ̄iá	-ia-	vowel-sign sequence									U+1A6E U+1A6C U+1A65 U+1A62: TAI THAM VOWEL SIGN E,  VOWEL SIGN OA BELOW,  VOWEL SIGN I,  VOWEL SIGN MAI SAT​	
ᩮᩬᩨᩢ	s	I	ēɔ̄ɯ̄á	-ia-	vowel-sign sequence									U+1A6E U+1A6C U+1A68 U+1A62: TAI THAM VOWEL SIGN E,  VOWEL SIGN OA BELOW,  VOWEL SIGN UUE,  VOWEL SIGN MAI SAT​	
ᩮᩬᩨᩋᩡ	s	U	ēɔ̄ɯ̄ʔ̯a	-ɯa	vowel-sign sequence									U+1A6E U+1A68 U+1A6C U+1A4B U+1A61: TAI THAM VOWEL SIGN E,  VOWEL SIGN UUE,  VOWEL SIGN OA BELOW,  LETTER A,  VOWEL SIGN A​	
ᩮᩬᩨᩋ	s	U	ēɔ̄ɯ̄ʔ̯	-ɯaː	vowel-sign sequence									U+1A6E U+1A68 U+1A6C U+1A4B: TAI THAM VOWEL SIGN E,  VOWEL SIGN UUE,  VOWEL SIGN OA BELOW,  LETTER A​	
ᩮᩬᩨ	s	U	ēɔ̄ɯ̄	-ɯa-	vowel-sign sequence									U+1A6E U+1A6C U+1A68: TAI THAM VOWEL SIGN E,  VOWEL SIGN OA BELOW,  VOWEL SIGN UUE​	
᩠ᩅ	s	U	˖w̱	-ua	vowel-sign sequence									U+1A60 U+1A45: TAI THAM SIGN SAKOT,  LETTER WA​	
᩠ᩅᩫᩡ	s	I	˖w̱ɔ̈a	-uaʔ	vowel-sign sequence									U+1A60 U+1A45 U+1A6B U+1A61: TAI THAM SIGN SAKOT,  LETTER WA,  VOWEL SIGN O,  VOWEL SIGN A​	
᩠ᩅᩫ	s	I	˖w̱ɔ̈	-uaː	vowel-sign sequence									U+1A60 U+1A45 U+1A6B: TAI THAM SIGN SAKOT,  LETTER WA,  VOWEL SIGN O​	
᩠ᩅᩢ	s	I	˖w̱á	-ua-	vowel-sign sequence									U+1A60 U+1A45 U+1A62: TAI THAM SIGN SAKOT,  LETTER WA,  VOWEL SIGN MAI SAT​	
᩠ᩅ᩠ᨿ	s	U	˖w̱˖y̱	-uaj	vowel-sign sequence									U+1A60 U+1A45 U+1A60 U+1A3F: TAI THAM SIGN SAKOT,  LETTER WA,  SIGN SAKOT,  LETTER LOW YA​	
															
															
᩵		^	¹		tone mark						᩵			U+1A75: TAI THAM SIGN TONE-1​	taitham
᩶		^	²		tone mark						᩶			U+1A76: TAI THAM SIGN TONE-2​	taitham
															
															
															
᩠		*	˖		sakot						᩠			U+1A60: TAI THAM SIGN SAKOT​	taitham
															
															
															
᩺		*	˟		silencer mark						᩺			U+1A7A: TAI THAM SIGN RA HAAM​	taitham
᩻		&	ʻ		repetition / disambiguation mark						᩻	maj⁶sam⁶	ᨾᩱ᩶ᨪ᩶ᩣᩴ	U+1A7B: TAI THAM SIGN MAI SAM​	taitham
᩿		[	˽		cryptogram mark						᩿			U+1A7F: TAI THAM COMBINING CRYPTOGRAMMIC DOT​	taitham
															
															
															
															
															
															
															
᪨		,	,		delimiter						᪨			U+1AA8: TAI THAM SIGN KAAN	taitham
᪩		.	.		delimiter						᪩			U+1AA9: TAI THAM SIGN KAANKUU	taitham
᪪		|			delimiter						᪪			U+1AAA: TAI THAM SIGN SATKAAN	taitham
᪫		|			delimiter						᪫			U+1AAB: TAI THAM SIGN SATKAANKUU	taitham
ᪧ		&			repetition						ᪧ	maj⁵² ja⁴mok⁵³		U+1AA7: TAI THAM SIGN MAI YAMOK	taitham
᪦		#			section terminator	infrequent					᪦			U+1AA6: TAI THAM SIGN REVERSED ROTATED RANA	taitham
᪬		#			section terminator	infrequent					᪬			U+1AAC: TAI THAM SIGN HANG	taitham
᪣		#			section starter	infrequent					᪣			U+1AA3: TAI THAM SIGN KEOW	taitham
᪤		#			section starter	infrequent					᪤			U+1AA4: TAI THAM SIGN HOY	taitham
᪥		#			section starter	infrequent					᪥			U+1AA5: TAI THAM SIGN DOKMAI	taitham
᪭		#			section starter	infrequent					᪭			U+1AAD: TAI THAM SIGN CAANG	taitham
															
															
															
᪠		!	city		logograph	infrequent					᪠			U+1AA0: TAI THAM SIGN WIANG	taitham
᪡		!	village		logograph	infrequent					᪡			U+1AA1: TAI THAM SIGN WIANGWAAK	taitham
᪢		!	heaven		logograph	infrequent					᪢			U+1AA2: TAI THAM SIGN SAWAN	taitham
															
															
															
᪀		0	0	0	secular digit						᪀			U+1A80: TAI THAM HORA DIGIT ZERO	taitham
᪁		1	1	1	secular digit						᪁			U+1A81: TAI THAM HORA DIGIT ONE	taitham
᪂		2	2	2	secular digit						᪂			U+1A82: TAI THAM HORA DIGIT TWO	taitham
᪃		3	3	3	secular digit						᪃			U+1A83: TAI THAM HORA DIGIT THREE	taitham
᪄		4	4	4	secular digit						᪄			U+1A84: TAI THAM HORA DIGIT FOUR	taitham
᪅		5	5	5	secular digit						᪅			U+1A85: TAI THAM HORA DIGIT FIVE	taitham
᪆		6	6	6	secular digit						᪆			U+1A86: TAI THAM HORA DIGIT SIX	taitham
᪇		7	7	7	secular digit						᪇			U+1A87: TAI THAM HORA DIGIT SEVEN	taitham
᪈		8	8	8	secular digit						᪈			U+1A88: TAI THAM HORA DIGIT EIGHT	taitham
᪉		9	9	9	secular digit						᪉ 			U+1A89 U+0020: TAI THAM HORA DIGIT NINE, SPACE	taitham
															
᪐		§	0̣	0	ecclesiastic digit	infrequent					᪐			U+1A90: TAI THAM THAM DIGIT ZERO	taitham
᪑		§	1̣	1	ecclesiastic digit	infrequent					᪑			U+1A91: TAI THAM THAM DIGIT ONE	taitham
᪒		§	2̣	2	ecclesiastic digit	infrequent					᪒			U+1A92: TAI THAM THAM DIGIT TWO	taitham
᪓		§	3̣	3	ecclesiastic digit	infrequent					᪓			U+1A93: TAI THAM THAM DIGIT THREE	taitham
᪔		§	4̣	4	ecclesiastic digit	infrequent					᪔			U+1A94: TAI THAM THAM DIGIT FOUR	taitham
᪕		§	5̣	5	ecclesiastic digit	infrequent					᪕			U+1A95: TAI THAM THAM DIGIT FIVE	taitham
᪖		§	6̣	6	ecclesiastic digit	infrequent					᪖			U+1A96: TAI THAM THAM DIGIT SIX	taitham
᪗		§	7̣	7	ecclesiastic digit	infrequent					᪗			U+1A97: TAI THAM THAM DIGIT SEVEN	taitham
᪘		§	8̣	8	ecclesiastic digit	infrequent					᪘			U+1A98: TAI THAM THAM DIGIT EIGHT	taitham
᪙		§	9̣	9	ecclesiastic digit	infrequent					᪙			U+1A99: TAI THAM THAM DIGIT NINE	taitham



\u200B					zero-width space									U+200B ZERO WIDTH SPACE	
\u200C			ₓ		zero-width non-joiner									U+200C: ZERO WIDTH NON-JOINER	
\u200D			₊		zero-width joiner									U+200D: ZERO WIDTH JOINER	
\u034F			ᶜᵍʲ		combining grapheme joiner									U+034F: COMBINING GRAPHEME JOINER​	
															
															
“		<			quotation mark									U+201C: LEFT DOUBLE QUOTATION MARK	
”		>			quotation mark									U+201D: RIGHT DOUBLE QUOTATION MARK	
‘		<			quotation mark									U+2018: LEFT SINGLE QUOTATION MARK	
’		>			quotation mark									U+2019: RIGHT SINGLE QUOTATION MARK	
«		"	“		quotation mark									U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»		"	”		quotation mark									U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
ʼ					apostrophe									U+02BC: MODIFIER LETTER APOSTROPHE	
,					comma									U+002C: COMMA	
;					semicolon									U+003B: SEMICOLON	
:					colon									U+003A: COLON	
.					full stop									U+002E: FULL STOP	
?					question mark									U+003F: QUESTION MARK	
!					exclamation mark									U+0021: EXCLAMATION MARK	
(					parenthesis									U+0028: LEFT PARENTHESIS	
)					parenthesis									U+0029: RIGHT PARENTHESIS	
…					ellipsis									U+2026: HORIZONTAL ELLIPSIS	
–					en dash									U+2013: EN DASH	
—					em dash									U+2014: EM DASH	
															
§					section sign									U+00A7: SECTION SIGN	
†					dagger									U+2020: DAGGER	
‡					double dagger									U+2021: DOUBLE DAGGER	
′					prime									U+2032: PRIME	
″					double prime									U+2033: DOUBLE PRIME	
‐					hyphen									U+2010 HYPHEN	
‑					non-breaking hyphen									U+2011 NON-BREAKING HYPHEN	



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
"block": 15,

//"othertranscriptions": [[6, 'ISO 9985']]
}
