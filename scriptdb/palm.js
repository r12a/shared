var spreadsheet = `
𐡠		a	ʾ	ʔ	ʔ	consonant					U+10860: PALMYRENE LETTER ALEPH	
												
𐡱		p	p	p	p	consonant					U+10871: PALMYRENE LETTER PE	
𐡡		b	b	b	b	consonant					U+10861: PALMYRENE LETTER BETH	
𐡶		t	t	t	tˤ	consonant					U+10876: PALMYRENE LETTER TAW	
𐡣		d	d	d	d	consonant					U+10863: PALMYRENE LETTER DALETH	
𐡨		T	ṭ	tˤ	tˤ	consonant					U+10868: PALMYRENE LETTER TETH	
𐡪		k	k	k	k	consonant					U+1086A: PALMYRENE LETTER KAPH	
𐡢		g	g	g	g	consonant					U+10862: PALMYRENE LETTER GIMEL	
𐡳		q	q	q	q	consonant					U+10873: PALMYRENE LETTER QOPH	
												
𐡯		s	s	s	s	consonant					U+1086F: PALMYRENE LETTER SAMEKH	
𐡦		z	z	z	z	consonant					U+10866: PALMYRENE LETTER ZAYIN	
𐡲		S	ṣ	sˤ	sˤ	consonant					U+10872: PALMYRENE LETTER SADHE	
𐡵		s	š	ʃ	ʃ	consonant					U+10875: PALMYRENE LETTER SHIN	
𐡧		H	ḥ	ħ	ħ	consonant					U+10867: PALMYRENE LETTER HETH	
𐡰		{	ʿ	ʕ	ʕ	consonant					U+10870: PALMYRENE LETTER AYIN	
𐡤		h	h	h	h	consonant					U+10864: PALMYRENE LETTER HE	
												
𐡬		m	m	m	m	consonant					U+1086C: PALMYRENE LETTER MEM	
𐡮		n	n	n	n	consonant					U+1086E: PALMYRENE LETTER NUN	
𐡭		N	n	n̽	n	consonant	final				U+1086D: PALMYRENE LETTER FINAL NUN	
												
𐡥		w	w	w	w	consonant					U+10865: PALMYRENE LETTER WAW	
𐡴		r	r	r	r	consonant					U+10874: PALMYRENE LETTER RESH	
𐡫		l	l	l	l	consonant					U+1086B: PALMYRENE LETTER LAMEDH	
𐡩		y	y	y	j	consonant					U+10869: PALMYRENE LETTER YODH	
												
												
𐡹			1	1		number					U+10879: PALMYRENE NUMBER ONE	
𐡺			2	2		number					U+1087A: PALMYRENE NUMBER TWO	
𐡻			3	3		number					U+1087B: PALMYRENE NUMBER THREE	
𐡼			4	4		number					U+1087C: PALMYRENE NUMBER FOUR	
𐡽			5	5		number					U+1087D: PALMYRENE NUMBER FIVE	
𐡾			10	1⁰		number					U+1087E: PALMYRENE NUMBER TEN	
𐡿			20	2⁰		number					U+1087F: PALMYRENE NUMBER TWENTY	
												
												
𐡷		<		«		symbol					U+10877: PALMYRENE LEFT-POINTING FLEURON	
𐡸		>		»		symbol					U+10878: PALMYRENE RIGHT-POINTING FLEURON	
												
												
												
												
												
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
