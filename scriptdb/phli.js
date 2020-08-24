var spreadsheet = `
𐭠		a	ʾ	a	a aː	consonant					U+10B60: INSCRIPTIONAL PAHLAVI LETTER ALEPH	
												
𐭯		p	p	p	p b f	consonant					U+10B6F: INSCRIPTIONAL PAHLAVI LETTER PE	
𐭡		b	b	b	b w	consonant					U+10B61: INSCRIPTIONAL PAHLAVI LETTER BETH	
𐭲		t	t	t	t d	consonant					U+10B72: INSCRIPTIONAL PAHLAVI LETTER TAW	
𐭣		d	d	d	d j	consonant					U+10B63: INSCRIPTIONAL PAHLAVI LETTER DALETH	
𐭨		T	ṭ	tˤ	tˤ	consonant					U+10B68: INSCRIPTIONAL PAHLAVI LETTER TETH	
𐭪		k	k	k	k g	consonant					U+10B6A: INSCRIPTIONAL PAHLAVI LETTER KAPH	
𐭢		g	g	g	g j	consonant					U+10B62: INSCRIPTIONAL PAHLAVI LETTER GIMEL	
												
𐭮		s	s	s	s h	consonant					U+10B6E: INSCRIPTIONAL PAHLAVI LETTER SAMEKH	
𐭦		z	z	z	z	consonant					U+10B66: INSCRIPTIONAL PAHLAVI LETTER ZAYIN	
𐭰		S	ṣ	ʧ	t̠͡ʃ d̠͡ʒ z	consonant					U+10B70: INSCRIPTIONAL PAHLAVI LETTER SADHE	
𐭱		s	š	ʃ	ʃ	consonant					U+10B71: INSCRIPTIONAL PAHLAVI LETTER SHIN	
𐭧		H	ḥ	ħ	h x	consonant					U+10B67: INSCRIPTIONAL PAHLAVI LETTER HETH	
𐭤		h	h	h	h	consonant					U+10B64: INSCRIPTIONAL PAHLAVI LETTER HE	
												
𐭬		m	m	m	m q	consonant					U+10B6C: INSCRIPTIONAL PAHLAVI LETTER MEM-QOPH	
𐭭		n	n	n	n	consonant					U+10B6D: INSCRIPTIONAL PAHLAVI LETTER NUN	
												
𐭥		w	w	w	w ʕ r	consonant					U+10B65: INSCRIPTIONAL PAHLAVI LETTER WAW-AYIN-RESH	
𐭫		l	l	l	l r	consonant					U+10B6B: INSCRIPTIONAL PAHLAVI LETTER LAMEDH	
𐭩		y	y	y	j iː eː d̠͡ʒ	consonant					U+10B69: INSCRIPTIONAL PAHLAVI LETTER YODH	
												
												
𐭸			1	1		number					U+10B78: INSCRIPTIONAL PAHLAVI NUMBER ONE	
𐭹			2	2		number					U+10B79: INSCRIPTIONAL PAHLAVI NUMBER TWO	
𐭺			3	3		number					U+10B7A: INSCRIPTIONAL PAHLAVI NUMBER THREE	
𐭻			4	4		number					U+10B7B: INSCRIPTIONAL PAHLAVI NUMBER FOUR	
𐭼			10	1⁰		number					U+10B7C: INSCRIPTIONAL PAHLAVI NUMBER TEN	
𐭽			20	2⁰		number					U+10B7D: INSCRIPTIONAL PAHLAVI NUMBER TWENTY	
𐭾			100	C		number					U+10B7E: INSCRIPTIONAL PAHLAVI NUMBER ONE HUNDRED	
𐭿			1000	M		number					U+10B7F: INSCRIPTIONAL PAHLAVI NUMBER ONE THOUSAND	
												
												
												
												
												
												
												
												
												
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
