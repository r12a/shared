var spreadsheet = `
𐭀		ʔ aː	ʾ	ʔ aː ʾ	a	ʔ		consonant					U+10B40: INSCRIPTIONAL PARTHIAN LETTER ALEPH	
														
𐭐		p b	p		p	p		consonant					U+10B50: INSCRIPTIONAL PARTHIAN LETTER PE	
𐭁		b v	b		b	b		consonant					U+10B41: INSCRIPTIONAL PARTHIAN LETTER BETH	
𐭕		t d	t		t	t		consonant					U+10B55: INSCRIPTIONAL PARTHIAN LETTER TAW	
𐭃		d j	d		d	d		consonant					U+10B43: INSCRIPTIONAL PARTHIAN LETTER DALETH	
𐭈		t	ṭ	ṭ	T	tˤ		consonant					U+10B48: INSCRIPTIONAL PARTHIAN LETTER TETH	
𐭊		k	k		k	k		consonant					U+10B4A: INSCRIPTIONAL PARTHIAN LETTER KAPH	
𐭂		ɡ j	g	ɡ	g	g		consonant					U+10B42: INSCRIPTIONAL PARTHIAN LETTER GIMEL	
𐭒		q	q		q	q		consonant					U+10B52: INSCRIPTIONAL PARTHIAN LETTER QOPH	
														
𐭎		s	s		s	s		consonant					U+10B4E: INSCRIPTIONAL PARTHIAN LETTER SAMEKH	
𐭆		z	z		z	z		consonant					U+10B46: INSCRIPTIONAL PARTHIAN LETTER ZAYIN	
𐭑		s	ṣ		S	sˤ		consonant					U+10B51: INSCRIPTIONAL PARTHIAN LETTER SADHE	
𐭔		ʃ ʒ	š	ʃ ʒ š	s	ʃ		consonant					U+10B54: INSCRIPTIONAL PARTHIAN LETTER SHIN	
𐭇		h x	ḥ	ḥ	H	ħ		consonant					U+10B47: INSCRIPTIONAL PARTHIAN LETTER HETH	
𐭏		ʔ	ʿ		{	ʕ		consonant					U+10B4F: INSCRIPTIONAL PARTHIAN LETTER AYIN	
𐭄		h	h		h	h		consonant					U+10B44: INSCRIPTIONAL PARTHIAN LETTER HE	
														
𐭌		m	m		m	m		consonant					U+10B4C: INSCRIPTIONAL PARTHIAN LETTER MEM	
𐭍		n	n		n	n		consonant					U+10B4D: INSCRIPTIONAL PARTHIAN LETTER NUN	
														
𐭅		v r	w		w	w		consonant					U+10B45: INSCRIPTIONAL PARTHIAN LETTER WAW	
𐭓		r	r		r	r		consonant					U+10B53: INSCRIPTIONAL PARTHIAN LETTER RESH	
𐭋		l	l		l	l		consonant					U+10B4B: INSCRIPTIONAL PARTHIAN LETTER LAMEDH	
𐭉		j ĕː ĭː	y	ĕː ĭː	y	y		consonant					U+10B49: INSCRIPTIONAL PARTHIAN LETTER YODH	
														
														
𐭘			1			1		number					U+10B58: INSCRIPTIONAL PARTHIAN NUMBER ONE	
𐭙			2			2		number					U+10B59: INSCRIPTIONAL PARTHIAN NUMBER TWO	
𐭚			3			3		number					U+10B5A: INSCRIPTIONAL PARTHIAN NUMBER THREE	
𐭛			4			4		number					U+10B5B: INSCRIPTIONAL PARTHIAN NUMBER FOUR	
𐭜			10			1⁰		number					U+10B5C: INSCRIPTIONAL PARTHIAN NUMBER TEN	
𐭝			20			2⁰		number					U+10B5D: INSCRIPTIONAL PARTHIAN NUMBER TWENTY	
𐭞			100			C		number					U+10B5E: INSCRIPTIONAL PARTHIAN NUMBER ONE HUNDRED	
𐭟			1000			M		number					U+10B5F: INSCRIPTIONAL PARTHIAN NUMBER ONE THOUSAND	
														
														
														
														
														
														
														
														
														
\u200C					=	ₓ					zwnj		U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊					zwj		U+200D: ZERO WIDTH JOINER	
\u200E					=	ˡʳᵐ					lrm		U+200E: LEFT-TO-RIGHT MARK	
\u200F					=	ʳˡᵐ					rlm		U+200F: RIGHT-TO-LEFT MARK	
\u061C					=	ᵃˡᵐ					alm		U+061C: ARABIC LETTER MARK	
\u2067					=	ʳˡⁱ					rli		U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					=	ˡʳⁱ					lri		U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B					=	ʳˡᵉ					rle		U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					=	ˡʳᵉ					lre		U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069					=	ᵖᵈⁱ					pdi		U+2069: POP DIRECTIONAL ISOLATE	
\u202C					=	ᵖᵈᶠ					pdf		U+202C: POP DIRECTIONAL FORMATTING	



`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd":0,
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
