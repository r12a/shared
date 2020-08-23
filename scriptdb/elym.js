var spreadsheet = `
𐿠		a	ʾ	ʔ	ʔ	consonant					U+10FE0: ELYMAIC LETTER ALEPH	
												
𐿰		p	p	p	p	consonant					U+10FF0: ELYMAIC LETTER PE	
𐿡		b	b	b	b	consonant					U+10FE1: ELYMAIC LETTER BETH	
𐿵		t	t	t	t	consonant					U+10FF5: ELYMAIC LETTER TAW	
𐿣		d	d	d	d	consonant					U+10FE3: ELYMAIC LETTER DALETH	
𐿨		T	ṭ	tˤ	tˤ	consonant					U+10FE8: ELYMAIC LETTER TETH	
𐿪		k	k	k	k	consonant					U+10FEA: ELYMAIC LETTER KAPH	
𐿢		g	g	g	g	consonant					U+10FE2: ELYMAIC LETTER GIMEL	
𐿲		q	q	q	q	consonant					U+10FF2: ELYMAIC LETTER QOPH	
												
𐿮		s	s	s	s	consonant					U+10FEE: ELYMAIC LETTER SAMEKH	
𐿦		z	z	z	z	consonant					U+10FE6: ELYMAIC LETTER ZAYIN	
𐿱		S	ṣ	sˤ	sˤ	consonant					U+10FF1: ELYMAIC LETTER SADHE	
𐿴		s	š	ʃ	ʃ	consonant					U+10FF4: ELYMAIC LETTER SHIN	
𐿧		H	ḥ	ħ	ħ	consonant					U+10FE7: ELYMAIC LETTER HETH	
𐿯		{	ʿ	ʕ	ʕ	consonant					U+10FEF: ELYMAIC LETTER AYIN	
𐿤		h	h	h	h	consonant					U+10FE4: ELYMAIC LETTER HE	
												
𐿬		m	m	m	m	consonant					U+10FEC: ELYMAIC LETTER MEM	
𐿭		n	n	n	n	consonant					U+10FED: ELYMAIC LETTER NUN	
												
𐿥		w	w	w	w	consonant					U+10FE5: ELYMAIC LETTER WAW	
𐿳		r	r	r	r	consonant					U+10FF3: ELYMAIC LETTER RESH	
𐿫		l	l	l	l	consonant					U+10FEB: ELYMAIC LETTER LAMEDH	
𐿩		y	y	y	y	consonant					U+10FE9: ELYMAIC LETTER YODH	
												
												
𐿶		z	zy	zʸ	zj	ligature					U+10FF6: ELYMAIC LIGATURE ZAYIN-YODH	
												
												
												
												
\u200C		=		ₓ						zwnj	U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=		₊						zwj	U+200D: ZERO WIDTH JOINER	punctuation
\u200E		=		ˡʳᵐ						lrm	U+200E: LEFT-TO-RIGHT MARK	punctuation
\u200F		=		ʳˡᵐ						rlm	U+200F: RIGHT-TO-LEFT MARK	punctuation
\u061C		=		ᵃˡᵐ						alm	U+061C: ARABIC LETTER MARK	punctuation
\u2067		=		ʳˡⁱ						rli	U+2067: RIGHT-TO-LEFT ISOLATE	punctuation
\u2066		=		ˡʳⁱ						lri	U+2066: LEFT-TO-RIGHT ISOLATE	punctuation
\u202B		=		ʳˡᵉ						rle	U+202B: RIGHT-TO-LEFT EMBEDDING	punctuation
\u202A		=		ˡʳᵉ						lre	U+202A: LEFT-TO-RIGHT EMBEDDING	punctuation
\u2069		=		ᵖᵈⁱ						pdi	U+2069: POP DIRECTIONAL ISOLATE	punctuation
\u202C		=		ᵖᵈᶠ						pdf	U+202C: POP DIRECTIONAL FORMATTING	punctuation


`




var cols = {
"class": 1,
"key":2,
"transcription":3,
"transLoc": 4,
"ipaLoc": 5,
"transckey": 0,
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
"nameLoc": 9,
"nnameLoc": 0,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[3, 'Latin']]
}
