var spreadsheet = `
𐭠		a aː	ʾ	aː ʾ	a	a		consonant				U+10B60: INSCRIPTIONAL PAHLAVI LETTER ALEPH	
													
𐭯		p b f	p		p	p		consonant				U+10B6F: INSCRIPTIONAL PAHLAVI LETTER PE	
𐭡		b w	b		b	b		consonant				U+10B61: INSCRIPTIONAL PAHLAVI LETTER BETH	
𐭲		t d	t		t	t		consonant				U+10B72: INSCRIPTIONAL PAHLAVI LETTER TAW	
𐭣		d j	d		d	d		consonant				U+10B63: INSCRIPTIONAL PAHLAVI LETTER DALETH	
𐭨		tˤ	ṭ	tˤ ṭ	T	tˤ		consonant				U+10B68: INSCRIPTIONAL PAHLAVI LETTER TETH	
𐭪		k g	k		k	k		consonant				U+10B6A: INSCRIPTIONAL PAHLAVI LETTER KAPH	
𐭢		ɡ j	g	ɡ	g	g		consonant				U+10B62: INSCRIPTIONAL PAHLAVI LETTER GIMEL	
													
𐭮		s h	s		s	s		consonant				U+10B6E: INSCRIPTIONAL PAHLAVI LETTER SAMEKH	
𐭦		z	z		z	z		consonant				U+10B66: INSCRIPTIONAL PAHLAVI LETTER ZAYIN	
𐭰		t̠͡ʃ d̠͡ʒ z	ṣ	t̠͡ʃ d̠͡ʒ ṣ	S	ʧ		consonant				U+10B70: INSCRIPTIONAL PAHLAVI LETTER SADHE	
𐭱		ʃ	š	ʃ š	s	ʃ		consonant				U+10B71: INSCRIPTIONAL PAHLAVI LETTER SHIN	
𐭧		h x	ḥ	ḥ	H	ħ		consonant				U+10B67: INSCRIPTIONAL PAHLAVI LETTER HETH	
𐭤		h	h		h	h		consonant				U+10B64: INSCRIPTIONAL PAHLAVI LETTER HE	
													
𐭬		m q	m		m	m		consonant				U+10B6C: INSCRIPTIONAL PAHLAVI LETTER MEM-QOPH	
𐭭		n	n		n	n		consonant				U+10B6D: INSCRIPTIONAL PAHLAVI LETTER NUN	
													
𐭥		w ʕ r	w	ʕ	w	w		consonant				U+10B65: INSCRIPTIONAL PAHLAVI LETTER WAW-AYIN-RESH	
𐭫		l r	l		l	l		consonant				U+10B6B: INSCRIPTIONAL PAHLAVI LETTER LAMEDH	
𐭩		j iː eː d̠͡ʒ	y	iː eː d̠͡ʒ	y	y		consonant				U+10B69: INSCRIPTIONAL PAHLAVI LETTER YODH	
													
													
𐭸			1			1		number				U+10B78: INSCRIPTIONAL PAHLAVI NUMBER ONE	
𐭹			2			2		number				U+10B79: INSCRIPTIONAL PAHLAVI NUMBER TWO	
𐭺			3			3		number				U+10B7A: INSCRIPTIONAL PAHLAVI NUMBER THREE	
𐭻			4			4		number				U+10B7B: INSCRIPTIONAL PAHLAVI NUMBER FOUR	
𐭼			10			1⁰		number				U+10B7C: INSCRIPTIONAL PAHLAVI NUMBER TEN	
𐭽			20			2⁰		number				U+10B7D: INSCRIPTIONAL PAHLAVI NUMBER TWENTY	
𐭾			100			C		number				U+10B7E: INSCRIPTIONAL PAHLAVI NUMBER ONE HUNDRED	
𐭿			1000			M		number				U+10B7F: INSCRIPTIONAL PAHLAVI NUMBER ONE THOUSAND	
													
													
													
													
													
\u200C					=	ₓ				zwnj		U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊				zwj		U+200D: ZERO WIDTH JOINER	
\u200E					=	ˡʳᵐ				lrm		U+200E: LEFT-TO-RIGHT MARK	
\u200F					=	ʳˡᵐ				rlm		U+200F: RIGHT-TO-LEFT MARK	
\u061C					=	ᵃˡᵐ				alm		U+061C: ARABIC LETTER MARK	
\u2067					=	ʳˡⁱ				rli		U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					=	ˡʳⁱ				lri		U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B					=	ʳˡᵉ				rle		U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					=	ˡʳᵉ				lre		U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069					=	ᵖᵈⁱ				pdi		U+2069: POP DIRECTIONAL ISOLATE	
\u202C					=	ᵖᵈᶠ				pdf		U+202C: POP DIRECTIONAL FORMATTING	


`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 0,
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
