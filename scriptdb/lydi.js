var spreadsheet = `lydi-xld	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
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
𐤠	a	a aː		a	a		Lo		vowel				U+10920: LYDIAN LETTER A	
𐤵	a	ãː		ã	ã		Lo		nasalised vowel	pronunciation not certain			U+10935: LYDIAN LETTER AN	
𐤹	c	t͡s d͡z		ʦ	c		Lo		consonant				U+10939: LYDIAN LETTER C	
𐤴	c	t͡ɕ t͡ʃ		τ	τ		Lo		consonant				U+10934: LYDIAN LETTER TT	
𐤣	d	θ ð		θ	d		Lo		consonant				U+10923: LYDIAN LETTER D	
𐤤	e	eː		e	e		Lo		vowel				U+10924: LYDIAN LETTER E	
𐤶	e	ã æ̃		ẽ	ẽ		Lo		nasalised vowel	pronunciation not certain			U+10936: LYDIAN LETTER EN	
𐤱	f	f ɸ		f	f		Lo		consonant				U+10931: LYDIAN LETTER F	
𐤢	g	ɡ		g	g		Lo		consonant				U+10922: LYDIAN LETTER G	
𐤦	i	i		i	i		Lo		vowel				U+10926: LYDIAN LETTER I	
𐤨	k	k ɡ		k	k		Lo		consonant				U+10928: LYDIAN LETTER K	
𐤩	l	l		l	l		Lo		consonant				U+10929: LYDIAN LETTER L	
𐤷	l	ʎ		ʎ	λ		Lo		consonant				U+10937: LYDIAN LETTER LY	
𐤪	m	m		m	m		Lo		consonant				U+1092A: LYDIAN LETTER M	
𐤫	n	n		n	n		Lo		consonant				U+1092B: LYDIAN LETTER N	
𐤬	o	oː		o	o		Lo		vowel				U+1092C: LYDIAN LETTER O	
𐤡	p	p b		p	p		Lo		consonant				U+10921: LYDIAN LETTER B	
𐤲	q	kʷ		q	q		Lo						U+10932: LYDIAN LETTER Q	
𐤭	r	r		r	r		Lo		consonant				U+1092D: LYDIAN LETTER R	
𐤮	s	s		s	s		Lo		consonant				U+1092E: LYDIAN LETTER SS	
𐤳	s	ç ʃ		š	š		Lo		consonant				U+10933: LYDIAN LETTER S	
𐤯	t	t d		t	t		Lo		consonant				U+1092F: LYDIAN LETTER T	
𐤰	u	u		u	u		Lo		vowel				U+10930: LYDIAN LETTER U	
𐤸	v	ɲ ŋ		ŋ	ν		Lo		consonant	pronunciation not certain			U+10938: LYDIAN LETTER NN	
𐤥	w	w v		w	w		Lo		consonant				U+10925: LYDIAN LETTER V	
𐤧	y	i̯ j		y	y		Lo		vowel	allophone			U+10927: LYDIAN LETTER Y	
														
`														
														
latinPanel = 'aː ãː ã æ̃ ç d͡z ð eː ẽ ɸ i̯ kʷ λ ɲ ŋ oː θ ʃ š t͡s t͡ɕ t͡ʃ'														
														
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
														