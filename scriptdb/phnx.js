var spreadsheet = `
𐤀		a	ʾ	ʔ	ʔ	consonant			ʾālep		U+10900: PHOENICIAN LETTER ALF	phoenician
												
𐤐		p	p	p	p	consonant			pē		U+10910: PHOENICIAN LETTER PE	phoenician
𐤁		b	b	b	b	consonant			bēt		U+10901: PHOENICIAN LETTER BET	phoenician
𐤕		t	t	t	t	consonant			tāw		U+10915: PHOENICIAN LETTER TAU	phoenician
𐤃		d	d	d	d	consonant			dālet		U+10903: PHOENICIAN LETTER DELT	phoenician
𐤈		T	ṭ	tˤ	tˤ	consonant			ṭēt		U+10908: PHOENICIAN LETTER TET	phoenician
𐤊		k	k	k	k	consonant			kāp		U+1090A: PHOENICIAN LETTER KAF	phoenician
𐤂		g	g	g	g	consonant			gīml		U+10902: PHOENICIAN LETTER GAML	phoenician
𐤒		q	q	q	q	consonant			qōp		U+10912: PHOENICIAN LETTER QOF	phoenician
												
𐤎		s	s	s	s	consonant			sāmek		U+1090E: PHOENICIAN LETTER SEMK	phoenician
𐤆		z	z	z	z	consonant			zayin		U+10906: PHOENICIAN LETTER ZAI	phoenician
𐤑		S	ṣ	sˤ	sˤ	consonant			ṣādē		U+10911: PHOENICIAN LETTER SADE	phoenician
𐤔		s	š	ʃ	ʃ	consonant			šīn		U+10914: PHOENICIAN LETTER SHIN	phoenician
𐤇		H	ḥ	ħ	ħ	consonant			ḥēt		U+10907: PHOENICIAN LETTER HET	phoenician
𐤏		{	ʿ	ʕ	ʕ	consonant			ʿayin		U+1090F: PHOENICIAN LETTER AIN	phoenician
𐤄		h	h	h	h	consonant			hē		U+10904: PHOENICIAN LETTER HE	phoenician
												
𐤌		m	m	m	m	consonant			mēm		U+1090C: PHOENICIAN LETTER MEM	phoenician
𐤍		n	n	n	n	consonant			nūn		U+1090D: PHOENICIAN LETTER NUN	phoenician
												
𐤅		w	w	w	w	consonant			wāw		U+10905: PHOENICIAN LETTER WAU	phoenician
𐤓		r	r	r	r	consonant			rēš		U+10913: PHOENICIAN LETTER ROSH	phoenician
𐤋		l	l	l	l	consonant			lāmed		U+1090B: PHOENICIAN LETTER LAMD	phoenician
𐤉		y	y	y	y	consonant			yōd		U+10909: PHOENICIAN LETTER YOD	phoenician
												
												
𐤖			1	1		number					U+10916: PHOENICIAN NUMBER ONE	phoenician
𐤚			2	2		number					U+1091A: PHOENICIAN NUMBER TWO	phoenician
𐤛			3	3		number					U+1091B: PHOENICIAN NUMBER THREE	phoenician
𐤗			10	1⁰		number					U+10917: PHOENICIAN NUMBER TEN	phoenician
𐤘			20	2⁰		number					U+10918: PHOENICIAN NUMBER TWENTY	phoenician
𐤙			100	1₀		number					U+10919: PHOENICIAN NUMBER ONE HUNDRED	phoenician
												
												
𐤟		•	•	•		punctuation					U+1091F: PHOENICIAN WORD SEPARATOR	phoenician
												
												
												
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
