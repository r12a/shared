var spreadsheet = `
𐍀		p	p		p	p		consonant				U+10340: GOTHIC LETTER PAIRTHRA	gothic
𐌱		b	b		b	b		consonant				U+10331: GOTHIC LETTER BAIRKAN	gothic
𐍄		t	t		t	t		consonant				U+10344: GOTHIC LETTER TEIWS	gothic
𐌳		d	d		d	d		consonant				U+10333: GOTHIC LETTER DAGS	gothic
𐌺		k	k		k	k		consonant				U+1033A: GOTHIC LETTER KUSMA	gothic
𐍇		k	x		x	x		consonant	proper nouns & loan words from Greek			U+10347: GOTHIC LETTER IGGWS	gothic
𐌵		kʷ	q	kʷ	q	q		consonant				U+10335: GOTHIC LETTER QAIRTHRA	gothic
𐌲		ɡ	g		g	g		consonant				U+10332: GOTHIC LETTER GIBA	gothic
													
𐍆		ɸ	f	ɸ	f	f		consonant				U+10346: GOTHIC LETTER FAIHU	gothic
𐌸		θ	þ	θ þ	p	þ		consonant				U+10338: GOTHIC LETTER THIUTH	gothic
𐍃		s	s		s	s		consonant				U+10343: GOTHIC LETTER SAUIL	gothic
𐌶		z	z		z	z		consonant				U+10336: GOTHIC LETTER IUJA	gothic
𐌷		h x	h		h	h		consonant				U+10337: GOTHIC LETTER HAGL	gothic
𐍈		hʷ ʍ	ƕ	hʷ ʍ ƕ	h	ƕ		consonant				U+10348: GOTHIC LETTER HWAIR	gothic
													
𐌼		m	m		m	m		consonant				U+1033C: GOTHIC LETTER MANNA	gothic
𐌽		n	n		n	n		consonant				U+1033D: GOTHIC LETTER NAUTHS	gothic
													
𐍅		w y	w		w	w						U+10345: GOTHIC LETTER WINJA	gothic
𐍂		r	r		r	r		consonant				U+10342: GOTHIC LETTER RAIDA	gothic
𐌻		l	l		l	l		consonant				U+1033B: GOTHIC LETTER LAGUS	gothic
𐌾		j	j		j	j		consonant				U+1033E: GOTHIC LETTER JER	gothic
													
𐍁		∅		∅		y		consonant				U+10341: GOTHIC LETTER NINETY	gothic
𐍊		∅				^		consonant				U+1034A: GOTHIC LETTER NINE HUNDRED	gothic
													
													
													
													
𐌹		i	i		i	i		vowel				U+10339: GOTHIC LETTER EIS	gothic
𐌿		ʊ uː	u		u	u		vowel				U+1033F: GOTHIC LETTER URUS	gothic
𐌴		eː	e		e	e		vowel				U+10334: GOTHIC LETTER AIHVU	gothic
𐍉		oː	o		o	o		vowel				U+10349: GOTHIC LETTER OTHAL	gothic
𐌰		a aː	a		a	a		vowel				U+10330: GOTHIC LETTER AHSA	gothic
													
													
													
													
,					,	,		comma				U+002C: COMMA	
․					:	:		colon				U+2024: ONE DOT LEADER	
՝					;	;		(semi) colon				U+055D: ARMENIAN COMMA	
։					.	.		full stop				U+0589: ARMENIAN FULL STOP	
«					<	“		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»					>	”		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
՞					?	?		question mark				U+055E: ARMENIAN QUESTION MARK	
՜					!	!		exclamation mark				U+055C: ARMENIAN EXCLAMATION MARK	
՛					!	ⸯ		emphasis mark				U+055B: ARMENIAN EMPHASIS MARK	
֊					-	-		soft hyphen				U+058A: ARMENIAN HYPHEN	


`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc":6,
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

"othertranscriptions": [[3, 'Transcription']]
}
