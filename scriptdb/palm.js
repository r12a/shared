var spreadsheet = `
𐡠		ʔ	ʾ	ʔ ʾ	a	ʔ		consonant					U+10860: PALMYRENE LETTER ALEPH	
														
𐡱		p	p		p	p		consonant					U+10871: PALMYRENE LETTER PE	
𐡡		b	b		b	b		consonant					U+10861: PALMYRENE LETTER BETH	
𐡶		tˤ	t	tˤ	t	t		consonant					U+10876: PALMYRENE LETTER TAW	
𐡣		d	d		d	d		consonant					U+10863: PALMYRENE LETTER DALETH	
𐡨		tˤ	ṭ	ṭ	T	tˤ		consonant					U+10868: PALMYRENE LETTER TETH	
𐡪		k	k		k	k		consonant					U+1086A: PALMYRENE LETTER KAPH	
𐡢		ɡ	g	ɡ	g	g		consonant					U+10862: PALMYRENE LETTER GIMEL	
𐡳		q	q		q	q		consonant					U+10873: PALMYRENE LETTER QOPH	
														
𐡯		s	s		s	s		consonant					U+1086F: PALMYRENE LETTER SAMEKH	
𐡦		z	z		z	z		consonant					U+10866: PALMYRENE LETTER ZAYIN	
𐡲		sˤ	ṣ	sˤ ṣ	S	sˤ		consonant					U+10872: PALMYRENE LETTER SADHE	
𐡵		ʃ	š	ʃ š	s	ʃ		consonant					U+10875: PALMYRENE LETTER SHIN	
𐡧		ħ	ḥ	ħ ḥ	H	ħ		consonant					U+10867: PALMYRENE LETTER HETH	
𐡰		ʕ	ʿ		{	ʕ		consonant					U+10870: PALMYRENE LETTER AYIN	
𐡤		h	h		h	h		consonant					U+10864: PALMYRENE LETTER HE	
														
𐡬		m	m		m	m		consonant					U+1086C: PALMYRENE LETTER MEM	
𐡮		n	n		n	n		consonant					U+1086E: PALMYRENE LETTER NUN	
𐡭		n	n		N	n̽		consonant	final				U+1086D: PALMYRENE LETTER FINAL NUN	
														
𐡥		w	w		w	w		consonant					U+10865: PALMYRENE LETTER WAW	
𐡴		r	r		r	r		consonant					U+10874: PALMYRENE LETTER RESH	
𐡫		l	l		l	l		consonant					U+1086B: PALMYRENE LETTER LAMEDH	
𐡩		j	y		y	y		consonant					U+10869: PALMYRENE LETTER YODH	
														
														
𐡹			1			1		number					U+10879: PALMYRENE NUMBER ONE	
𐡺			2			2		number					U+1087A: PALMYRENE NUMBER TWO	
𐡻			3			3		number					U+1087B: PALMYRENE NUMBER THREE	
𐡼			4			4		number					U+1087C: PALMYRENE NUMBER FOUR	
𐡽			5			5		number					U+1087D: PALMYRENE NUMBER FIVE	
𐡾			10			1⁰		number					U+1087E: PALMYRENE NUMBER TEN	
𐡿			20			2⁰		number					U+1087F: PALMYRENE NUMBER TWENTY	
														
														
𐡷					<	«		symbol					U+10877: PALMYRENE LEFT-POINTING FLEURON	
𐡸					>	»		symbol					U+10878: PALMYRENE RIGHT-POINTING FLEURON	
														
														
														
														
														
\u200C					=	ₓ						zwnj	U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊						zwj	U+200D: ZERO WIDTH JOINER	
\u200E					=	ˡʳᵐ						lrm	U+200E: LEFT-TO-RIGHT MARK	
\u200F					=	ʳˡᵐ						rlm	U+200F: RIGHT-TO-LEFT MARK	
\u061C					=	ᵃˡᵐ						alm	U+061C: ARABIC LETTER MARK	
\u2067					=	ʳˡⁱ						rli	U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					=	ˡʳⁱ						lri	U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B					=	ʳˡᵉ						rle	U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					=	ˡʳᵉ						lre	U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069					=	ᵖᵈⁱ						pdi	U+2069: POP DIRECTIONAL ISOLATE	
\u202C					=	ᵖᵈᶠ						pdf	U+202C: POP DIRECTIONAL FORMATTING	


`



latinPanel = 'ɡ ħ ḥ sˤ ṣ ʃ š tˤ ṭ ʔ ʾ'




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
