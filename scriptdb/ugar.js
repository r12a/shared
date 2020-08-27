var spreadsheet = `
𐎀		a	a	a	ʔa	letter					U+10380: UGARITIC LETTER ALPA	
𐎛		i	ʾi	i	ʔi	letter					U+1039B: UGARITIC LETTER I	
𐎜		u	ʾu	u	ʔu	letter					U+1039C: UGARITIC LETTER U	
												
𐎔		p	p	p	p	consonant					U+10394: UGARITIC LETTER PU	
𐎁		b	b	b	b	consonant					U+10381: UGARITIC LETTER BETA	
𐎚		t	t	t	t	consonant					U+1039A: UGARITIC LETTER TO	
𐎄		d	d	d	d	consonant					U+10384: UGARITIC LETTER DELTA	
𐎉		T	ṭ	tˠ	tˠ	consonant					U+10389: UGARITIC LETTER TET	
𐎋		k	k	k	k	consonant					U+1038B: UGARITIC LETTER KAF	
𐎂		g	g	g	ɡ	consonant					U+10382: UGARITIC LETTER GAMLA	
𐎖		q	q	q	q	consonant					U+10396: UGARITIC LETTER QOPA	
												
𐎘		t	ṯ	θ	θ	consonant					U+10398: UGARITIC LETTER THANNA	
𐎏		d	ḏ	ð	ð	consonant					U+1038F: UGARITIC LETTER DHAL	
𐎇		z	z	z	z	consonant					U+10387: UGARITIC LETTER ZETA	
𐎑		Z	ẓ	θˠ	θˠ	consonant					U+10391: UGARITIC LETTER ZU	
𐎒		s	s	s	s	consonant					U+10392: UGARITIC LETTER SAMKA	
𐎝		s	s2	ṡ		consonant					U+1039D: UGARITIC LETTER SSU	
𐎕		S	ṣ	sˠ	sˠ	consonant					U+10395: UGARITIC LETTER SADE	
𐎌		s	š	ʃ	ʃ	consonant					U+1038C: UGARITIC LETTER SHIN	
𐎙		g	ġ	ɣ	ɣ	consonant					U+10399: UGARITIC LETTER GHAIN	
𐎈		H	ḥ	ħ	ħ	consonant					U+10388: UGARITIC LETTER HOTA	
𐎅		h	h	h	h	consonant					U+10385: UGARITIC LETTER HO	
𐎃		h	ḫ	x	x	consonant					U+10383: UGARITIC LETTER KHA	
𐎓		{	ʿ	ʕ	ʕ	consonant					U+10393: UGARITIC LETTER AIN	
												
												
𐎎		m	m	m	m	consonant					U+1038E: UGARITIC LETTER MEM	
𐎐		n	n	n	n	consonant					U+10390: UGARITIC LETTER NUN	
												
𐎆		w	w	w	w	consonant					U+10386: UGARITIC LETTER WO	
𐎗		r	r	r	r	consonant					U+10397: UGARITIC LETTER RASHA	
𐎍		l	l	l	l	consonant					U+1038D: UGARITIC LETTER LAMDA	
𐎊		y	y	y	j	consonant					U+1038A: UGARITIC LETTER YOD	
												
												
𐎟		]		␣		word divider					U+1039F: UGARITIC WORD DIVIDER	
												
												
												
												
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
