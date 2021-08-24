var spreadsheet = `
𐢁		ʔ	ʾ	ʔ ʾ	a	ʔ		consonant			ʾālap̄/ʾalif	U+10881: NABATAEAN LETTER ALEPH	
𐢀		ʔ	ʾ		A	ʔ̽		consonant	final			U+10880: NABATAEAN LETTER FINAL ALEPH	
													
𐢘		p	p		p	p		consonant			pe/fa	U+10898: NABATAEAN LETTER PE	
𐢃		b	b		b	b		consonant			beth/ba	U+10883: NABATAEAN LETTER BETH	
𐢂			b		B	b̽		consonant	final			U+10882: NABATAEAN LETTER FINAL BETH	
𐢞		tˤ	t	tˤ	t	t		consonant			taw/ta	U+1089E: NABATAEAN LETTER TAW	
𐢅		d	d		d	d		consonant			daleth/dal	U+10885: NABATAEAN LETTER DALETH	
𐢋		tˤ	ṭ	ṭ	T	tˤ		consonant			teth	U+1088B: NABATAEAN LETTER TETH	
𐢏		k	k		k	k		consonant			kaph	U+1088F: NABATAEAN LETTER KAPH	
𐢎		k	k		K	k̽		consonant	final			U+1088E: NABATAEAN LETTER FINAL KAPH	
𐢄		ɡ	g	ɡ	g	g		consonant			gamal/jin	U+10884: NABATAEAN LETTER GIMEL	
𐢚		q	q		q	q		consonant			qoph	U+1089A: NABATAEAN LETTER QOPH	
													
𐢖		s	s		s	s		consonant			simkath	U+10896: NABATAEAN LETTER SAMEKH	
𐢉		z	z		z	z		consonant			zain	U+10889: NABATAEAN LETTER ZAYIN	
𐢙		sˤ	ṣ	sˤ ṣ	S	sˤ		consonant			ṣāḏē/ṣad	U+10899: NABATAEAN LETTER SADHE	
𐢝		ʃ	š	ʃ š	s	ʃ		consonant			šin/sin	U+1089D: NABATAEAN LETTER SHIN	
𐢜		ʃ	š		S	ʃ̽		consonant	final			U+1089C: NABATAEAN LETTER FINAL SHIN	
𐢊		ħ	ḥ	ħ ḥ	H	ħ		consonant			ha/heth	U+1088A: NABATAEAN LETTER HETH	
𐢗		ʕ	ʿ		{	ʕ		consonant			e/ain	U+10897: NABATAEAN LETTER AYIN	
𐢇		h	h		h	h		consonant			heh	U+10887: NABATAEAN LETTER HE	
𐢆			h		H	h̽		consonant	final			U+10886: NABATAEAN LETTER FINAL HE	
													
𐢓		m	m		m	m		consonant			mim	U+10893: NABATAEAN LETTER MEM	
𐢒		m	m		M	m̽		consonant	final			U+10892: NABATAEAN LETTER FINAL MEM	
𐢕		n	n		n	n		consonant			nun	U+10895: NABATAEAN LETTER NUN	
𐢔		n	n		N	n̽		consonant	final			U+10894: NABATAEAN LETTER FINAL NUN	
													
𐢈		w	w		w	w		consonant			waw	U+10888: NABATAEAN LETTER WAW	
𐢛		r	r		r	r		consonant			resh/ra	U+1089B: NABATAEAN LETTER RESH	
𐢑		l	l		l	l		consonant			lamadh/lam	U+10891: NABATAEAN LETTER LAMEDH	
𐢐		l	l		L	l̽		consonant	final			U+10890: NABATAEAN LETTER FINAL LAMEDH	
𐢍		j	y		y	y		consonant			yodh/ya	U+1088D: NABATAEAN LETTER YODH	
𐢌		j	y		Y	y̽		consonant	final			U+1088C: NABATAEAN LETTER FINAL YODH	
													
													
𐢧			1			1		number				U+108A7: NABATAEAN NUMBER ONE	
𐢨			2			2		number				U+108A8: NABATAEAN NUMBER TWO	
𐢩			3			3		number				U+108A9: NABATAEAN NUMBER THREE	
𐢪			4			4		number				U+108AA: NABATAEAN NUMBER FOUR	
𐢫			4			4̇		number				U+108AB: NABATAEAN CRUCIFORM NUMBER FOUR	
𐢬			5			5		number				U+108AC: NABATAEAN NUMBER FIVE	
𐢭			10			1⁰		number				U+108AD: NABATAEAN NUMBER TEN	
𐢮			20			2⁰		number				U+108AE: NABATAEAN NUMBER TWENTY	
𐢯			100			1₀		number				U+108AF: NABATAEAN NUMBER ONE HUNDRED	
													
													
													
													
													
													
													
													
													
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
