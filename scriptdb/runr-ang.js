var spreadsheet = `runr-ang	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
ᚫ	a	æ æː		æ	æ				vowel		æsc	ash tree	U+16AB: RUNIC LETTER AESC	✓
ᚪ	a	ɑ ɑː		ɑ	a				vowel		āc	oak tree	U+16AA: RUNIC LETTER AC A	✓
ᛒ	b	b		b	b				consonant		beorc	birch tree	U+16D2: RUNIC LETTER BERKANAN BEORC BJARKAN B	✓
ᚳ	c	k kʲ t͡ʃ		c	c				consonant		cēn	torch	U+16B3: RUNIC LETTER CEN	✓
ᛞ	d	d		d	d				consonant		dag	day	U+16DE: RUNIC LETTER DAGAZ DAEG D	✓
ᛖ	e	e eː		e	e				vowel		eh	steed	U+16D6: RUNIC LETTER EHWAZ EH E	✓
ᛠ	e	e͡a		eᵃ	ea				diphthong		ēar	grave soil?	U+16E0: RUNIC LETTER EAR	✓
ᚠ	f	f v		f	f				consonant		feoh	wealth, cattle	U+16A0: RUNIC LETTER FEHU FEOH FE F	✓
ᚷ	g	ɡ ɣ		g	g				consonant		gyfu	gift	U+16B7: RUNIC LETTER GEBO GYFU G	✓
ᚸ	g	ɡ ɣ		g̱̈	ḡ				consonant	manuscripts, Ruthwell Cross, Bewcastle Cross?	gar	spear	U+16B8: RUNIC LETTER GAR	✓
ᚻ	h	h x ç		h	h				consonant		hægl	hail	U+16BB: RUNIC LETTER HAEGL H	✓
ᛁ	i	i iː		i	i				vowel		īs	ice	U+16C1: RUNIC LETTER ISAZ IS ISS I	✓
ᛡ	i	io iːo		iᵒ	-				diphthong		īor	beaver? eel?	U+16E1: RUNIC LETTER IOR	✓
ᛇ	i	eo eːo? iː? x ç		ɨ	ï ʒ				diphthong		ēoh	yew tree	U+16C7: RUNIC LETTER IWAZ EOH	✓
ᛡ	j	j		j	j				consonant		gēr	year	U+16E1: RUNIC LETTER IOR	✓
ᛄ	j	j		j̱	j				consonant	alternate shape	gēr	year	U+16C4: RUNIC LETTER GER	✓
ᛣ	k	k		k	k				consonant	manuscripts & Ruthwell Cross, etc.	calc	chalk? chalice? sandal?	U+16E3: RUNIC LETTER CALC	✓
ᛤ	k	k		k̈	k̄				consonant	Ruthwell Cross only	unknown	unknown	U+16E4: RUNIC LETTER CEALC	✓
ᛚ	l	l		l	l				consonant		lagu	lake	U+16DA: RUNIC LETTER LAUKAZ LAGU LOGR L	✓
ᛗ	m	m		m	m				consonant		mann	man	U+16D7: RUNIC LETTER MANNAZ MAN M	✓
ᚾ	n	n		n	n				consonant		nȳd	need	U+16BE: RUNIC LETTER NAUDIZ NYD NAUD N	✓
ᛝ	n	ŋ		ŋ	ŋ				consonant		Ing	Ing (Ingui-Frea)?	U+16DD: RUNIC LETTER ING	✓
ᛟ	o	ø øː		œ	œ				vowel		ēðel	homeland, estate	U+16DF: RUNIC LETTER OTHALAN ETHEL O	✓
ᚩ	o	o oː		o	o				vowel		ōs	god/mouth	U+16A9: RUNIC LETTER OS O	✓
ᛈ	p	p		p	p				consonant		peorð	unknown	U+16C8: RUNIC LETTER PERTHO PEORTH P	✓
ᚦ	p	θ ð		þ	þ				consonant		þorn	thorn	U+16A6: RUNIC LETTER THURISAZ THURS THORN	✓
ᛢ	q	k		ḵ	q				consonant	manuscripts	cweorð	unknown	U+16E2: RUNIC LETTER CWEORTH	✓
ᚱ	r	r		r	r				consonant		rād	riding	U+16B1: RUNIC LETTER RAIDO RAD REID R	✓
ᛋ	s	s z		s	s				consonant		sigel	sun/sail	U+16CB: RUNIC LETTER SIGEL LONG-BRANCH-SOL S	✓
ᛥ	s	st		sᵗ	-				consonant	manuscripts	stan	stone	U+16E5: RUNIC LETTER STAN	✓
ᚴ	s	s z		ṡ	s				consonant	alternate shape	sigel	sun/sail	U+16B4: RUNIC LETTER KAUN K	✓
ᛏ	t	t		t	t				consonant		Tī, Tīr	Mars?	U+16CF: RUNIC LETTER TIWAZ TIR TYR T	✓
ᚢ	u	u uː		u	u				vowel		ūr	aurochs	U+16A2: RUNIC LETTER URUZ UR U	✓
ᚹ	w	w		w	w				consonant		ƿynn	mirth	U+16B9: RUNIC LETTER WUNJO WYNN W	✓
ᛉ	x	ks		kˢ	x				consonant		eolhx	elk's	U+16C9: RUNIC LETTER ALGIZ EOLHX	✓
ᚣ	y	y yː		y	y				vowel		ȳr	yew bow?	U+16A3: RUNIC LETTER YR	✓
														
`														
														
latinPanel = 'æ æː ɑ ɑː ç ð ɡ ɡʲ ḡ iː ï kʲ k̄ ŋ oː ø øː θ ʃ t͡ʃ uː ɣ yː ʒ'														
														
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
														