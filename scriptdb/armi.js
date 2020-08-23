var spreadsheet = `
𐡀		a	ʾ	ʔ	ʔ aː eː	consonant			ʾālep		U+10840: IMPERIAL ARAMAIC LETTER ALEPH	
												
𐡐		p	p	p	p ɸ	consonant			pē		U+10850: IMPERIAL ARAMAIC LETTER PE	
𐡁		b	b	b	b β	consonant			bēt		U+10841: IMPERIAL ARAMAIC LETTER BETH	
𐡕		t	t	t	t θ	consonant			tāw		U+10855: IMPERIAL ARAMAIC LETTER TAW	
𐡃		d	d	d	d ð	consonant			dālet		U+10843: IMPERIAL ARAMAIC LETTER DALETH	
𐡈		T	ṭ	tˤ	tˤ	consonant			ṭēt		U+10848: IMPERIAL ARAMAIC LETTER TETH	
𐡊		k	k	k	k x	consonant			kāp		U+1084A: IMPERIAL ARAMAIC LETTER KAPH	
𐡂		g	g	g	g ɣ	consonant			gīml		U+10842: IMPERIAL ARAMAIC LETTER GIMEL	
𐡒		q	q	q	qˤ	consonant			qōp		U+10852: IMPERIAL ARAMAIC LETTER QOPH	
												
𐡎		s	s	s	s	consonant			sāmek		U+1084E: IMPERIAL ARAMAIC LETTER SAMEKH	
𐡆		z	z	z	z	consonant			zayin		U+10846: IMPERIAL ARAMAIC LETTER ZAYIN	
𐡑		S	ṣ	sˤ	sˤ	consonant			ṣādē		U+10851: IMPERIAL ARAMAIC LETTER SADHE	
𐡔		s	š	ʃ	ʃ	consonant			šīn		U+10854: IMPERIAL ARAMAIC LETTER SHIN	
𐡇		H	ḥ	ħ	ʜ χ	consonant			ḥēt		U+10847: IMPERIAL ARAMAIC LETTER HETH	
𐡏		{	ʿ	ʕ	ʢ ʁ	consonant			ʿayin		U+1084F: IMPERIAL ARAMAIC LETTER AYIN	
𐡄		h	h	h	ɦ	consonant			hē		U+10844: IMPERIAL ARAMAIC LETTER HE	
												
𐡌		m	m	m	m	consonant			mēm		U+1084C: IMPERIAL ARAMAIC LETTER MEM	
𐡍		n	n	n	n	consonant			nūn		U+1084D: IMPERIAL ARAMAIC LETTER NUN	
												
𐡅		w	w	w	w oː uː	consonant			wāw		U+10845: IMPERIAL ARAMAIC LETTER WAW	
𐡓		r	r	r	r	consonant			rēš		U+10853: IMPERIAL ARAMAIC LETTER RESH	
𐡋		l	l	l	l	consonant			lāmed		U+1084B: IMPERIAL ARAMAIC LETTER LAMEDH	
𐡉		y	y	y	j iː eː	consonant			yōd		U+10849: IMPERIAL ARAMAIC LETTER YODH	
												
												
𐡘			1	1		number					U+10858: IMPERIAL ARAMAIC NUMBER ONE	
𐡙			2	2		number					U+10859: IMPERIAL ARAMAIC NUMBER TWO	
𐡚			3	3		number					U+1085A: IMPERIAL ARAMAIC NUMBER THREE	
𐡛			10	1⁰		number					U+1085B: IMPERIAL ARAMAIC NUMBER TEN	
𐡜			20	2⁰		number					U+1085C: IMPERIAL ARAMAIC NUMBER TWENTY	
𐡝			100	1₀		number					U+1085D: IMPERIAL ARAMAIC NUMBER ONE HUNDRED	
𐡞			1000			number					U+1085E: IMPERIAL ARAMAIC NUMBER ONE THOUSAND	
𐡟			10000			number					U+1085F: IMPERIAL ARAMAIC NUMBER TEN THOUSAND	
												
												
												
												
												
𐡗		•	•	•		punctuation					U+10857: IMPERIAL ARAMAIC SECTION SIGN	
												
												
												
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
