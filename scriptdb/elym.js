var spreadsheet = `
𐿠		ʔ	ʾ	ʔ ʾ	a	ʔ		consonant				U+10FE0: ELYMAIC LETTER ALEPH	
													
𐿰		p	p		p	p		consonant				U+10FF0: ELYMAIC LETTER PE	
𐿡		b	b		b	b		consonant				U+10FE1: ELYMAIC LETTER BETH	
𐿵		t	t		t	t		consonant				U+10FF5: ELYMAIC LETTER TAW	
𐿣		d	d		d	d		consonant				U+10FE3: ELYMAIC LETTER DALETH	
𐿨		tˤ	ṭ	tˤ ṭ	T	tˤ		consonant				U+10FE8: ELYMAIC LETTER TETH	
𐿪		k	k		k	k		consonant				U+10FEA: ELYMAIC LETTER KAPH	
𐿢		g	g	g	g	g		consonant				U+10FE2: ELYMAIC LETTER GIMEL	
𐿲		q	q		q	q		consonant				U+10FF2: ELYMAIC LETTER QOPH	
													
𐿮		s	s		s	s		consonant				U+10FEE: ELYMAIC LETTER SAMEKH	
𐿦		z	z		z	z		consonant				U+10FE6: ELYMAIC LETTER ZAYIN	
𐿱		sˤ	ṣ	sˤ ṣ	S	sˤ		consonant				U+10FF1: ELYMAIC LETTER SADHE	
𐿴		ʃ	š	ʃ š	s	ʃ		consonant				U+10FF4: ELYMAIC LETTER SHIN	
𐿧		ħ	ḥ	ħ ḥ	H	ħ		consonant				U+10FE7: ELYMAIC LETTER HETH	
𐿯		ʕ	ʿ	ʕ ʿ	{	ʕ		consonant				U+10FEF: ELYMAIC LETTER AYIN	
𐿤		h	h		h	h		consonant				U+10FE4: ELYMAIC LETTER HE	
													
𐿬		m	m		m	m		consonant				U+10FEC: ELYMAIC LETTER MEM	
𐿭		n	n		n	n		consonant				U+10FED: ELYMAIC LETTER NUN	
													
𐿥		w	w		w	w		consonant				U+10FE5: ELYMAIC LETTER WAW	
𐿳		r	r		r	r		consonant				U+10FF3: ELYMAIC LETTER RESH	
𐿫		l	l		l	l		consonant				U+10FEB: ELYMAIC LETTER LAMEDH	
𐿩		y	y		y	y		consonant				U+10FE9: ELYMAIC LETTER YODH	
													
													
𐿶		zj	zy		z	zʸ		ligature				U+10FF6: ELYMAIC LIGATURE ZAYIN-YODH	
													
													
													
													
\u200C				ᶻʷⁿʲ	=	ₓ				zwnj		U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D				ᶻʷʲ	=	₊				zwj		U+200D: ZERO WIDTH JOINER	punctuation
\u200E				ˡʳᵐ	=	ˡʳᵐ				lrm		U+200E: LEFT-TO-RIGHT MARK	punctuation
\u200F				ʳˡᵐ	=	ʳˡᵐ				rlm		U+200F: RIGHT-TO-LEFT MARK	punctuation
\u061C				ᵃˡᵐ	=	ᵃˡᵐ				alm		U+061C: ARABIC LETTER MARK	punctuation
\u2067				ʳˡⁱ	=	ʳˡⁱ				rli		U+2067: RIGHT-TO-LEFT ISOLATE	punctuation
\u2066				ˡʳⁱ	=	ˡʳⁱ				lri		U+2066: LEFT-TO-RIGHT ISOLATE	punctuation
\u202B				ʳˡᵉ	=	ʳˡᵉ				rle		U+202B: RIGHT-TO-LEFT EMBEDDING	punctuation
\u202A				ˡʳᵉ	=	ˡʳᵉ				lre		U+202A: LEFT-TO-RIGHT EMBEDDING	punctuation
\u2069				ᵖᵈⁱ	=	ᵖᵈⁱ				pdi		U+2069: POP DIRECTIONAL ISOLATE	punctuation
\u202C				ᵖᵈᶠ	=	ᵖᵈᶠ				pdf		U+202C: POP DIRECTIONAL FORMATTING	punctuation

`



latinPanel = 'ˡʳᵐ ᵃˡᵐ ˡʳⁱ ˡʳᵉ ᵖᵈⁱ ᵖᵈᶠ ʿ ʳˡᵐ ʳˡⁱ ʳˡᵉ ħ ḥ sˤ ṣ ʃ š tˤ ṭ ʕ ʔ ʾ'




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc":6,
"kbd": 7,
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
"nnameLoc": 10,
"nameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[3, 'Latin']]
}
