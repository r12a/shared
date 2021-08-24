var spreadsheet = `
𐊓		p b	p		p	p		consonant				U+10293: LYCIAN LETTER P	
𐊂		β	b	β	b	b		consonant				U+10282: LYCIAN LETTER B	
𐊗		t d	t		t	t		consonant				U+10297: LYCIAN LETTER T	
𐊅		ð	d	ð	d	ð		consonant				U+10285: LYCIAN LETTER D	
𐊔		k	κ	κ	k	κ		consonant				U+10294: LYCIAN LETTER KK	
𐊌		k	q		q	q		consonant				U+1028C: LYCIAN LETTER Q	
𐊋		kʲ ɡʲ	k	kʲ ɡʲ	k	kʲ		consonant				U+1028B: LYCIAN LETTER K	
𐊃		kʷ	β	kʷ	k	kʷ		consonant	pronunciation not certain			U+10283: LYCIAN LETTER BH	
𐊄		ɣ	g	ɣ	g	g		consonant				U+10284: LYCIAN LETTER G	
𐊜		q	χ	χ	x	χ		consonant				U+1029C: LYCIAN LETTER X	
													
𐊈		t͡s	z	t͡s	z	ʦ		consonant				U+10288: LYCIAN LETTER Z	
𐊘		t͡ʃ	τ	t͡ʃ τ	t	τ		consonant				U+10298: LYCIAN LETTER TT	
													
𐊉		θ	θ	θ	θ	θ		consonant				U+10289: LYCIAN LETTER TH	
𐊖		s	s		s	s		consonant				U+10296: LYCIAN LETTER S	
𐊛		h	h		h	h		consonant				U+1029B: LYCIAN LETTER H	
													
𐊎		m	m		m	m		consonant				U+1028E: LYCIAN LETTER M	
𐊏		n	n		n	n		consonant				U+1028F: LYCIAN LETTER N	
𐊐		m̩ əm m.	m̃	m̩ m̃	m	m̃		consonant				U+10290: LYCIAN LETTER MM	
𐊑		n̩ ən n.	ñ	n̩ ñ	n	ñ		consonant				U+10291: LYCIAN LETTER NN	
													
𐊇		w	w		w	w		consonant				U+10287: LYCIAN LETTER W	
𐊕		r r̩ ər	r	r̩	r	r		consonant				U+10295: LYCIAN LETTER R	
𐊍		l l̩ əl	l	l̩	l	l		consonant				U+1028D: LYCIAN LETTER L	
𐊊		j	j y		y	y		consonant				U+1028A: LYCIAN LETTER J	
													
													
													
													
													
𐊆		i ĩ	i	ĩ	i	i		vowel				U+10286: LYCIAN LETTER I	
𐊒		u ũ	u	ũ	u	u		vowel				U+10292: LYCIAN LETTER U	
𐊁		e	e	ə	e	e		vowel				U+10281: LYCIAN LETTER E	
𐊀		a	a		a	a		vowel				U+10280: LYCIAN LETTER A	
𐊙		ã	ã	ã	a	ã		nasalised vowel				U+10299: LYCIAN LETTER AN	
𐊚		ẽ	ẽ	ẽ	e	ẽ		nasalised vowel				U+1029A: LYCIAN LETTER EN	
													
													
													
													
⁚								word separator				U+205A: TWO DOT PUNCTUATION	
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
"nameLoc": 0,
"nnameLoc": 0,
"ucsName": 12,
"block": 13,

//"othertranscriptions": [[6, 'ISO 9985']]
}
