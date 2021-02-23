var spreadsheet = `
𐊓		p b	p	p	p	consonant								U+10293: LYCIAN LETTER P	lycian
𐊂		β	b	b	b	consonant								U+10282: LYCIAN LETTER B	lycian
𐊗		t d	t	t	t	consonant								U+10297: LYCIAN LETTER T	lycian
𐊅		ð	d	ð	d	consonant								U+10285: LYCIAN LETTER D	lycian
𐊔		k	κ	κ	k	consonant								U+10294: LYCIAN LETTER KK	lycian
𐊌		k	q	q	q	consonant								U+1028C: LYCIAN LETTER Q	lycian
𐊋		kʲ ɡʲ	k	kʲ	k	consonant								U+1028B: LYCIAN LETTER K	lycian
𐊃		kʷ	β	kʷ	k	consonant	pronunciation not certain							U+10283: LYCIAN LETTER BH	lycian
𐊄		ɣ	g	g	g	consonant								U+10284: LYCIAN LETTER G	lycian
𐊜		q	χ	χ	x	consonant								U+1029C: LYCIAN LETTER X	lycian
															
𐊈		t͡s	z	ʦ	z	consonant								U+10288: LYCIAN LETTER Z	lycian
𐊘		t͡ʃ	τ	τ	t	consonant								U+10298: LYCIAN LETTER TT	lycian
															
𐊉		θ	θ	θ	θ	consonant								U+10289: LYCIAN LETTER TH	lycian
𐊖		s	s	s	s	consonant								U+10296: LYCIAN LETTER S	lycian
𐊛		h	h	h	h	consonant								U+1029B: LYCIAN LETTER H	lycian
															
𐊎		m	m	m	m	consonant								U+1028E: LYCIAN LETTER M	lycian
𐊏		n	n	n	n	consonant								U+1028F: LYCIAN LETTER N	lycian
𐊐		m̩ əm  m.	m̃	m̃	m	consonant								U+10290: LYCIAN LETTER MM	lycian
𐊑		n̩ ən n.	ñ	ñ	n	consonant								U+10291: LYCIAN LETTER NN	lycian
															
𐊇		w	w	w	w	consonant								U+10287: LYCIAN LETTER W	lycian
𐊕		r r̩ ər	r	r	r	consonant								U+10295: LYCIAN LETTER R	lycian
𐊍		l l̩ əl	l	l	l	consonant								U+1028D: LYCIAN LETTER L	lycian
𐊊		j	j y	y	y	consonant								U+1028A: LYCIAN LETTER J	lycian
															
															
															
															
															
𐊆		i ĩ	i	i	i	vowel								U+10286: LYCIAN LETTER I	lycian
𐊒		u ũ	u	u	u	vowel								U+10292: LYCIAN LETTER U	lycian
𐊁		e	e	e	e	vowel								U+10281: LYCIAN LETTER E	lycian
𐊀		a	a	a	a	vowel								U+10280: LYCIAN LETTER A	lycian
𐊙		ã	ã	ã	a	nasalised vowel								U+10299: LYCIAN LETTER AN	lycian
𐊚		ẽ	ẽ	ẽ	e	nasalised vowel								U+1029A: LYCIAN LETTER EN	lycian
															
															
															
															
⁚						word separator								U+205A: TWO DOT PUNCTUATION	
,				,	,	comma								U+002C: COMMA	
․				:	:	colon								U+2024: ONE DOT LEADER	
՝				;	;	(semi) colon								U+055D: ARMENIAN COMMA	
։				.	.	full stop								U+0589: ARMENIAN FULL STOP	
«				“	<	quotation mark								U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»				”	>	quotation mark								U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
՞				?	?	question mark								U+055E: ARMENIAN QUESTION MARK	
՜				!	!	exclamation mark								U+055C: ARMENIAN EXCLAMATION MARK	
՛				ⸯ	!	emphasis mark								U+055B: ARMENIAN EMPHASIS MARK	
֊				-	-	soft hyphen								U+058A: ARMENIAN HYPHEN	



`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"transLoc": 4,
"key":5,
"transckey": 0,
"typeLoc": 6,
"statusLoc": 7,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":9,
"uc":10,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 9,
"nnameLoc": 10,
"ucsName": 14,
"block": 15,

//"othertranscriptions": [[6, 'ISO 9985']]
}
