var spreadsheet = `
𐤡		p b	p		p	p		consonant				U+10921: LYDIAN LETTER B	
𐤯		t d	t		t	t		consonant				U+1092F: LYDIAN LETTER T	
𐤨		k ɡ	k		k	k		consonant				U+10928: LYDIAN LETTER K	
𐤲		kʷ	q	kʷ	q	q						U+10932: LYDIAN LETTER Q	
𐤢		ɡ	g		g	g		consonant				U+10922: LYDIAN LETTER G	
													
𐤹		t͡s d͡z	c	t͡s d͡z	c	ʦ		consonant				U+10939: LYDIAN LETTER C	
𐤴		t͡ɕ t͡ʃ	τ	t͡ɕ t͡ʃ τ	c	τ		consonant				U+10934: LYDIAN LETTER TT	
													
𐤱		f ɸ	f	ɸ	f	f		consonant				U+10931: LYDIAN LETTER F	
𐤣		θ ð	d	θ ð	d	θ		consonant				U+10923: LYDIAN LETTER D	
𐤮		s	s		s	s		consonant				U+1092E: LYDIAN LETTER SS	
𐤳		ç ʃ	š	ç ʃ š	s	š		consonant				U+10933: LYDIAN LETTER S	
													
𐤪		m	m		m	m		consonant				U+1092A: LYDIAN LETTER M	
𐤫		n	n		n	n		consonant				U+1092B: LYDIAN LETTER N	
𐤸		ɲ ŋ	ν	ɲ ŋ	v	ŋ		consonant	pronunciation not certain			U+10938: LYDIAN LETTER NN	
													
𐤥		w v	w		w	w		consonant				U+10925: LYDIAN LETTER V	
𐤭		r	r		r	r		consonant				U+1092D: LYDIAN LETTER R	
𐤩		l	l		l	l		consonant				U+10929: LYDIAN LETTER L	
𐤷		ʎ	λ	ʎ λ	l	ʎ		consonant				U+10937: LYDIAN LETTER LY	
													
													
													
													
													
𐤦		i	i		i	i		vowel				U+10926: LYDIAN LETTER I	
𐤧		i̯ j	y	i̯	y	y		vowel	allophone			U+10927: LYDIAN LETTER Y	
𐤰		u	u		u	u		vowel				U+10930: LYDIAN LETTER U	
𐤤		eː	e	eː	e	e		vowel				U+10924: LYDIAN LETTER E	
𐤬		oː	o	oː	o	o		vowel				U+1092C: LYDIAN LETTER O	
𐤠		a aː	a	aː	a	a		vowel				U+10920: LYDIAN LETTER A	
𐤵		ãː	ã	ãː ã	a	ã		nasalised vowel	pronunciation not certain			U+10935: LYDIAN LETTER AN	
𐤶		ã æ̃	ẽ	æ̃ ẽ	e	ẽ		nasalised vowel	pronunciation not certain			U+10936: LYDIAN LETTER EN	
													
													
													
													
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

"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,
"block": 13,

//"othertranscriptions": [[6, 'ISO 9985']]
}
