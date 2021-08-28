var spreadsheet = `
𐤀		ʔ	ʾ	ʔ ʾ	}	ʔ		consonant			ʾālep	U+10900: PHOENICIAN LETTER ALF	
													
𐤐		p	p		p	p		consonant			pē	U+10910: PHOENICIAN LETTER PE	
𐤁		b	b		b	b		consonant			bēt	U+10901: PHOENICIAN LETTER BET	
𐤕		t	t		t	t		consonant			tāw	U+10915: PHOENICIAN LETTER TAU	
𐤃		d	d		d	d		consonant			dālet	U+10903: PHOENICIAN LETTER DELT	
𐤈		tˤ	ṭ	tˤ ṭ	T	tˤ		consonant			ṭēt	U+10908: PHOENICIAN LETTER TET	
𐤊		k	k		k	k		consonant			kāp	U+1090A: PHOENICIAN LETTER KAF	
𐤂		ɡ	g	ɡ	g	g		consonant			gīml	U+10902: PHOENICIAN LETTER GAML	
𐤒		q	q		q	q		consonant			qōp	U+10912: PHOENICIAN LETTER QOF	
													
𐤎		s	s		s	s		consonant			sāmek	U+1090E: PHOENICIAN LETTER SEMK	
𐤆		z	z		z	z		consonant			zayin	U+10906: PHOENICIAN LETTER ZAI	
𐤑		sˤ	ṣ	sˤ ṣ	S	sˤ		consonant			ṣādē	U+10911: PHOENICIAN LETTER SADE	
𐤔		ʃ	š	ʃ š	s	ʃ		consonant			šīn	U+10914: PHOENICIAN LETTER SHIN	
𐤇		ħ	ḥ	ħ ḥ	H	ħ		consonant			ḥēt	U+10907: PHOENICIAN LETTER HET	
𐤏		ʕ	ʿ		{	ʕ		consonant			ʿayin	U+1090F: PHOENICIAN LETTER AIN	
𐤄		h	h		h	h		consonant			hē	U+10904: PHOENICIAN LETTER HE	
													
𐤌		m	m		m	m		consonant			mēm	U+1090C: PHOENICIAN LETTER MEM	
𐤍		n	n		n	n		consonant			nūn	U+1090D: PHOENICIAN LETTER NUN	
													
𐤅		w	w		w	w		consonant			wāw	U+10905: PHOENICIAN LETTER WAU	
𐤓		r	r		r	r		consonant			rēš	U+10913: PHOENICIAN LETTER ROSH	
𐤋		l	l		l	l		consonant			lāmed	U+1090B: PHOENICIAN LETTER LAMD	
𐤉		j	y		y	y		consonant			yōd	U+10909: PHOENICIAN LETTER YOD	
													
													
𐤖			1			1		number				U+10916: PHOENICIAN NUMBER ONE	
𐤚			2			2		number				U+1091A: PHOENICIAN NUMBER TWO	
𐤛			3			3		number				U+1091B: PHOENICIAN NUMBER THREE	
𐤗			10			1⁰		number				U+10917: PHOENICIAN NUMBER TEN	
𐤘			20			2⁰		number				U+10918: PHOENICIAN NUMBER TWENTY	
𐤙			100			1₀		number				U+10919: PHOENICIAN NUMBER ONE HUNDRED	
													
													
𐤟			•		•	•		punctuation				U+1091F: PHOENICIAN WORD SEPARATOR	
													
													
													
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
