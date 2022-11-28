var spreadsheet = `goth-cu	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
֊	-			-					soft hyphen				U+058A: ARMENIAN HYPHEN	
,	,			,					comma				U+002C: COMMA	
՝	;			;					(semi) colon				U+055D: ARMENIAN COMMA	
․	:			:					colon				U+2024: ONE DOT LEADER	
՜	!			!					exclamation mark				U+055C: ARMENIAN EXCLAMATION MARK	
՛	!			ⸯ					emphasis mark				U+055B: ARMENIAN EMPHASIS MARK	
՞	?			?					question mark				U+055E: ARMENIAN QUESTION MARK	
։	.			.					full stop				U+0589: ARMENIAN FULL STOP	
«	<			“					quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»	>			”					quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
𐌰	a	a aː		a	a				vowel				U+10330: GOTHIC LETTER AHSA	✓
𐌱	b	b		b	b				consonant				U+10331: GOTHIC LETTER BAIRKAN	✓
𐌳	d	d		d	d				consonant				U+10333: GOTHIC LETTER DAGS	✓
𐌴	e	eː		e	e				vowel				U+10334: GOTHIC LETTER AIHVU	✓
𐍆	f	ɸ		f	f				consonant				U+10346: GOTHIC LETTER FAIHU	✓
𐌲	g	ɡ		g	g				consonant				U+10332: GOTHIC LETTER GIBA	✓
𐌷	h	h x		h	h				consonant				U+10337: GOTHIC LETTER HAGL	✓
𐍈	h	hʷ ʍ		ƕ	ƕ				consonant				U+10348: GOTHIC LETTER HWAIR	✓
𐌹	i	i		i	i				vowel				U+10339: GOTHIC LETTER EIS	✓
𐌾	j	j		j	j				consonant				U+1033E: GOTHIC LETTER JER	✓
𐌺	k	k		k	k				consonant				U+1033A: GOTHIC LETTER KUSMA	✓
𐌻	l	l		l	l				consonant				U+1033B: GOTHIC LETTER LAGUS	✓
𐌼	m	m		m	m				consonant				U+1033C: GOTHIC LETTER MANNA	✓
𐌽	n	n		n	n				consonant				U+1033D: GOTHIC LETTER NAUTHS	✓
𐍉	o	oː		o	o				vowel				U+10349: GOTHIC LETTER OTHAL	✓
𐍀	p	p		p	p				consonant				U+10340: GOTHIC LETTER PAIRTHRA	✓
𐌸	p	θ		þ	þ				consonant				U+10338: GOTHIC LETTER THIUTH	✓
𐌵	q	kʷ		q	q				consonant				U+10335: GOTHIC LETTER QAIRTHRA	✓
𐍂	r	r		r	r				consonant				U+10342: GOTHIC LETTER RAIDA	✓
𐍃	s	s		s	s				consonant				U+10343: GOTHIC LETTER SAUIL	✓
𐍄	t	t		t	t				consonant				U+10344: GOTHIC LETTER TEIWS	✓
𐌿	u	ʊ uː		u	u				vowel				U+1033F: GOTHIC LETTER URUS	✓
𐍅	w	w y		w	w								U+10345: GOTHIC LETTER WINJA	✓
𐍇	x	k		x	x				consonant	proper nouns & loan words from Greek			U+10347: GOTHIC LETTER IGGWS	✓
𐌶	z	z		z	z				consonant				U+10336: GOTHIC LETTER IUJA	✓
														
														
𐍁		∅		y					consonant				U+10341: GOTHIC LETTER NINETY	✓
𐍊		∅		^					consonant				U+1034A: GOTHIC LETTER NINE HUNDRED	✓
														
`														
														
latinPanel = 'ɸ hʷ kʷ ʍ ∅ þ θ'														
														
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
														