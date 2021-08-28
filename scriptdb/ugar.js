var spreadsheet = `
𐎀		ʔa	a	ʔ	a	a		letter				U+10380: UGARITIC LETTER ALPA	
𐎛		ʔi	ʾi	ʾi	i	i		letter				U+1039B: UGARITIC LETTER I	
𐎜		ʔu	ʾu	ʾu	u	u		letter				U+1039C: UGARITIC LETTER U	
													
𐎔		p	p		p	p		consonant				U+10394: UGARITIC LETTER PU	
𐎁		b	b		b	b		consonant				U+10381: UGARITIC LETTER BETA	
𐎚		t	t		t	t		consonant				U+1039A: UGARITIC LETTER TO	
𐎄		d	d		d	d		consonant				U+10384: UGARITIC LETTER DELTA	
𐎉		tˠ	ṭ	tˠ ṭ	T	tˠ		consonant				U+10389: UGARITIC LETTER TET	
𐎋		k	k		k	k		consonant				U+1038B: UGARITIC LETTER KAF	
𐎂		ɡ	g		g	g		consonant				U+10382: UGARITIC LETTER GAMLA	
𐎖		q	q		q	q		consonant				U+10396: UGARITIC LETTER QOPA	
													
𐎘		θ	ṯ	θ ṯ	t	θ		consonant				U+10398: UGARITIC LETTER THANNA	
𐎏		ð	ḏ	ð ḏ	d	ð		consonant				U+1038F: UGARITIC LETTER DHAL	
𐎑		θˠ	ẓ	θˠ ẓ	Z	θˠ		consonant				U+10391: UGARITIC LETTER ZU	
𐎒		s	s		s	s		consonant				U+10392: UGARITIC LETTER SAMKA	
𐎝			s2		s	ṡ		consonant				U+1039D: UGARITIC LETTER SSU	
𐎇		z	z		z	z		consonant				U+10387: UGARITIC LETTER ZETA	
𐎕		sˠ	ṣ	sˠ ṣ	S	sˠ		consonant				U+10395: UGARITIC LETTER SADE	
𐎌		ʃ	š	ʃ š	s	ʃ		consonant				U+1038C: UGARITIC LETTER SHIN	
𐎃		x	ḫ	ḫ	h	x		consonant				U+10383: UGARITIC LETTER KHA	
𐎙		ɣ	ġ	ɣ ġ	g	ɣ		consonant				U+10399: UGARITIC LETTER GHAIN	
𐎈		ħ	ḥ	ħ ḥ	H	ħ		consonant				U+10388: UGARITIC LETTER HOTA	
𐎓		ʕ	ʿ	ʕ ʿ	{	ʕ		consonant				U+10393: UGARITIC LETTER AIN	
𐎅		h	h		h	h		consonant				U+10385: UGARITIC LETTER HO	
													
													
𐎎		m	m		m	m		consonant				U+1038E: UGARITIC LETTER MEM	
𐎐		n	n		n	n		consonant				U+10390: UGARITIC LETTER NUN	
													
𐎆		w	w		w	w		consonant				U+10386: UGARITIC LETTER WO	
𐎗		r	r		r	r		consonant				U+10397: UGARITIC LETTER RASHA	
𐎍		l	l		l	l		consonant				U+1038D: UGARITIC LETTER LAMDA	
𐎊		j	y		y	y		consonant				U+1038A: UGARITIC LETTER YOD	
													
													
𐎟					]	␣		word divider				U+1039F: UGARITIC WORD DIVIDER	
													
													
													
													
\u200C					=	ₓ					zwnj	U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊					zwj	U+200D: ZERO WIDTH JOINER	
\u200E					=	ˡʳᵐ					lrm	U+200E: LEFT-TO-RIGHT MARK	
\u200F					=	ʳˡᵐ					rlm	U+200F: RIGHT-TO-LEFT MARK	
\u061C					=	ᵃˡᵐ					alm	U+061C: ARABIC LETTER MARK	
\u2067					=	ʳˡⁱ					rli	U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					=	ˡʳⁱ					lri	U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B					=	ʳˡᵉ					rle	U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					=	ˡʳᵉ					lre	U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069					=	ᵖᵈⁱ					pdi	U+2069: POP DIRECTIONAL ISOLATE	
\u202C					=	ᵖᵈᶠ					pdf	U+202C: POP DIRECTIONAL FORMATTING	



`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
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
