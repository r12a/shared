var spreadsheet = `
ᛈ		p	p		p	p		plosive		peorð, peord	(unknown)	U+16C8: RUNIC LETTER PERTHO PEORTH P	🗸
ᛒ		b	b		b	b		plosive		beorc, berc	birch tree	U+16D2: RUNIC LETTER BERKANAN BEORC BJARKAN B	🗸
ᛏ		t	t		t	t		plosive		ti, Tiw	Tiw? planet Mars?	U+16CF: RUNIC LETTER TIWAZ TIR TYR T	🗸
ᛞ		d	d		d	ḏ		plosive		dæg	day	U+16DE: RUNIC LETTER DAGAZ DAEG D	🗸
ᚳ		k kʲ t͡ʃ	c	kʲ t͡ʃ	c	c̱		plosive		cēn, cen	torch	U+16B3: RUNIC LETTER CEN	🗸
ᚷ		ɡ ɣ j x? ɡʲ?	g	ɡ ɣ ɡʲ ?	g	g		plosive		gyfu	gift	U+16B7: RUNIC LETTER GEBO GYFU G	🗸
													
ᛉ		ks	x		x	x		affricate		eolh, ilcs	elk-sedge?	U+16C9: RUNIC LETTER ALGIZ EOLHX	🗸
													
ᚠ		f v	f		f	f		fricative		feoh, feh	wealth	U+16A0: RUNIC LETTER FEHU FEOH FE F	🗸
ᚦ		θ ð	þ	θ ð	q	þ		fricative		þorn, ðorn	thorn	U+16A6: RUNIC LETTER THURISAZ THURS THORN	🗸
ᛋ		s z	s		s	s		fricative		sigel, sygil	sun	U+16CB: RUNIC LETTER SIGEL LONG-BRANCH-SOL S	🗸
ᚻ		h x ç	h	ç	h	h		fricative		hægl	hail (precipitation)	U+16BB: RUNIC LETTER HAEGL H	🗸
													
ᛗ		m	m		m	m		nasal		mann, mon	man	U+16D7: RUNIC LETTER MANNAZ MAN M	🗸
ᚾ		n	n		n	n		nasal		næd, nēod	need (plight)	U+16BE: RUNIC LETTER NAUDIZ NYD NAUD N	🗸
ᛝ		ŋg ŋ	ŋ̱	ŋ	n	ŋ̱		nasal		Ing	Ing (Ingui-Frea)?	U+16DD: RUNIC LETTER ING	🗸
													
ᚹ		w	w		w	w		approximant		ƿynn, wynn	mirth	U+16B9: RUNIC LETTER WUNJO WYNN W	🗸
ᚱ		r	r		r	r		approximant		rād, rada	riding	U+16B1: RUNIC LETTER RAIDO RAD REID R	🗸
ᛚ		l	l		l	l		approximant		lagu	body of water	U+16DA: RUNIC LETTER LAUKAZ LAGU LOGR L	🗸
ᛄ		j	j		j	j̱		approximant		gær, gēar	year	U+16C4: RUNIC LETTER GER	🗸
													
ᛁ		i iː	i	i iː	i	i		vowel		īs	ice	U+16C1: RUNIC LETTER ISAZ IS ISS I	🗸
ᛇ		i iː x ç	ï ʒ	ï ʒ	i	ɨ		consonant/vowel		ih, īw	yew tree	U+16C7: RUNIC LETTER IWAZ EOH	🗸
ᚣ		y yː	y	yː	y	y̱		vowel		ȳr	yew bow?	U+16A3: RUNIC LETTER YR	🗸
ᚢ		u uː	u	uː	u	u		vowel		ūr	aurochs	U+16A2: RUNIC LETTER URUZ UR U	🗸
ᛖ		e eː	e		e	e̱		vowel		eh	horse	U+16D6: RUNIC LETTER EHWAZ EH E	🗸
ᚩ		o oː	o	oː	o	o		vowel		ōs	god or mouth (Latin)	U+16A9: RUNIC LETTER OS O	🗸
ᛟ		ø øː	œ	ø øː	o	œ̱		vowel		ēðel, oedil	inherited land, native country	U+16DF: RUNIC LETTER OTHALAN ETHEL O	🗸
ᚫ		æ æː	æ	æ æː	a	æ̱		vowel		æsc	ash tree	U+16AB: RUNIC LETTER AESC	🗸
ᚪ		ɑ ɑː	a	ɑ ɑː	a	a̱		vowel		āc	oak tree	U+16AA: RUNIC LETTER AC A	🗸
ᛠ		æɑ æːɑ	ea		e	e̱ᵃ		vowel		ēar	grave soil?	U+16E0: RUNIC LETTER EAR	🗸
													
													
													
													
ᛣ		k	k		k	k		plosive	infrequent	calc	chalk? chalice? sandal?	U+16E3: RUNIC LETTER CALC	🗸
ᚸ		g ɣ	ḡ	ḡ	g	g̱̈		plosive	infrequent	gar	spear	U+16B8: RUNIC LETTER GAR	🗸
ᛢ		k?	q		q	q		plosive	infrequent	cweorð	unknown	U+16E2: RUNIC LETTER CWEORTH	🗸
ᛥ		st	–		s	sᵗ		affricate	infrequent	stan	stone	U+16E5: RUNIC LETTER STAN	🗸
ᛡ		io iːo	–		j	j		approximant	infrequent	īor	eel?	U+16E1: RUNIC LETTER IOR	🗸
ᛤ		k	k̄	k̄	k	k̄		plosive	infrequent	unknown	unknown	U+16E4: RUNIC LETTER CEALC	🗸
ᚴ		s z	s		s	s̄		fricative	alternate shape			U+16B4: RUNIC LETTER KAUN K	🗸
													
													
													
ᛋᚳ	s	sk ʃ	sc	ʃ	S	sc̱		digraph				U+16CB U+16B3: RUNIC LETTER SIGEL LONG-BRANCH-SOL S, LETTER CEN	



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

"equiv": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":11,
"shape": 0,
"numLoc": 0,

"nnameLoc": 0,
"nameLoc": 10,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[3, 'Latin']]
}
