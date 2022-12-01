var spreadsheet = `lyci-xlc	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
֊	-			-			Pd		soft hyphen				U+058A: ARMENIAN HYPHEN	
,	,			,			Po		comma				U+002C: COMMA	
՝	;			;			Po		(semi) colon				U+055D: ARMENIAN COMMA	
․	:			:			Po		colon				U+2024: ONE DOT LEADER	
՜	!			!			Po		exclamation mark				U+055C: ARMENIAN EXCLAMATION MARK	
՛	!			ⸯ			Po		emphasis mark				U+055B: ARMENIAN EMPHASIS MARK	
՞	?			?			Po		question mark				U+055E: ARMENIAN QUESTION MARK	
։	.			.			Po		full stop				U+0589: ARMENIAN FULL STOP	
«	<			“			Pi		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»	>			”			Pf		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
𐊀	a	a		a	a		Lo		vowel				U+10280: LYCIAN LETTER A	
𐊙	a	ã		ã	ã		Lo		nasalised vowel				U+10299: LYCIAN LETTER AN	
𐊂	b	β		b	b		Lo		consonant				U+10282: LYCIAN LETTER B	
𐊅	d	ð		ð	d		Lo		consonant				U+10285: LYCIAN LETTER D	
𐊁	e	e		e	e		Lo		vowel				U+10281: LYCIAN LETTER E	
𐊚	e	ẽ		ẽ	ẽ		Lo		nasalised vowel				U+1029A: LYCIAN LETTER EN	
𐊄	g	ɣ		g	g		Lo		consonant				U+10284: LYCIAN LETTER G	
𐊛	h	h		h	h		Lo		consonant				U+1029B: LYCIAN LETTER H	
𐊆	i	i ĩ		i	i		Lo		vowel				U+10286: LYCIAN LETTER I	
𐊔	k	k		κ	κ		Lo		consonant				U+10294: LYCIAN LETTER KK	
𐊋	k	kʲ ɡʲ		kʲ	k		Lo		consonant				U+1028B: LYCIAN LETTER K	
𐊃	k	kʷ		kʷ	β		Lo		consonant	pronunciation not certain			U+10283: LYCIAN LETTER BH	
𐊍	l	l l̩ əl		l	l		Lo		consonant				U+1028D: LYCIAN LETTER L	
𐊎	m	m		m	m		Lo		consonant				U+1028E: LYCIAN LETTER M	
𐊐	m	m̩ əm m.		m̃	m̃		Lo		consonant				U+10290: LYCIAN LETTER MM	
𐊏	n	n		n	n		Lo		consonant				U+1028F: LYCIAN LETTER N	
𐊑	n	n̩ ən n.		ñ	ñ		Lo		consonant				U+10291: LYCIAN LETTER NN	
𐊓	p	p b		p	p		Lo		consonant				U+10293: LYCIAN LETTER P	
𐊌	q	k		q	q		Lo		consonant				U+1028C: LYCIAN LETTER Q	
𐊕	r	r r̩ ər		r	r		Lo		consonant				U+10295: LYCIAN LETTER R	
𐊖	s	s		s	s		Lo		consonant				U+10296: LYCIAN LETTER S	
𐊗	t	t d		t	t		Lo		consonant				U+10297: LYCIAN LETTER T	
𐊘	t	t͡ʃ		τ	τ		Lo		consonant				U+10298: LYCIAN LETTER TT	
𐊒	u	u ũ		u	u		Lo		vowel				U+10292: LYCIAN LETTER U	
𐊇	w	w		w	w		Lo		consonant				U+10287: LYCIAN LETTER W	
𐊜	x	q		χ	χ		Lo		consonant				U+1029C: LYCIAN LETTER X	
𐊊	y	j		y	j y		Lo		consonant				U+1028A: LYCIAN LETTER J	
𐊈	z	t͡s		ʦ	z		Lo		consonant				U+10288: LYCIAN LETTER Z	
𐊉	θ	θ		θ	θ		Lo		consonant				U+10289: LYCIAN LETTER TH	
														
⁚							Po		word separator				U+205A: TWO DOT PUNCTUATION	
														
`														
														
latinPanel = 'ã β ð ə ẽ ɡʲ ĩ kʲ kʷ l̩ m̩ m̃ n̩ ñ θ r̩ t͡s t͡ʃ ũ χ ɣ'														
														
var cols = {														
key: 1,														
ipaLoc: 2,														
ipaPlus: 3,														
transLoc: 4,														
transcription: 5,														
kbd: 6,														
class: 7,														
status: 8,														
typeLoc: 9,														
statusLoc: 10,														
														
nnameLoc: 11,														
nameLoc: 12,														
ucsName: 13,														
block: 14,														
														
othertranscriptions: [[5, 'Latin']]														
}														
														