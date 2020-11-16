var spreadsheet = `
ᛈ		p	p	p	p	consonant			peorð	unknown	U+16C8: RUNIC LETTER PERTHO PEORTH P	runic
ᛒ		b	b	b	b	consonant			beorc	birch tree	U+16D2: RUNIC LETTER BERKANAN BEORC BJARKAN B	runic
ᛏ		t	t	t	t	consonant			Tī, Tīr	Mars?	U+16CF: RUNIC LETTER TIWAZ TIR TYR T	runic
ᛞ		d	d	d	d	consonant			dag	day	U+16DE: RUNIC LETTER DAGAZ DAEG D	runic
ᚳ		c	k kʲ t͡ʃ	c	c	consonant			cēn	torch	U+16B3: RUNIC LETTER CEN	runic
ᛣ		k	k	k	k	consonant	manuscripts & Ruthwell Cross, etc.		calc	chalk? chalice? sandal?	U+16E3: RUNIC LETTER CALC	runic
ᚷ		g	ɡ ɣ	g	g	consonant			gyfu	gift	U+16B7: RUNIC LETTER GEBO GYFU G	runic
ᚸ		g̱̈	ɡ ɣ	ḡ	g	consonant	manuscripts, Ruthwell Cross, Bewcastle Cross?		gar	spear	U+16B8: RUNIC LETTER GAR	runic
ᚠ		f	f v	f	f	consonant			feoh	wealth, cattle	U+16A0: RUNIC LETTER FEHU FEOH FE F	runic
ᚦ		þ	θ ð 	þ	p	consonant			þorn	thorn	U+16A6: RUNIC LETTER THURISAZ THURS THORN	runic
ᛋ		s	s z	s	s	consonant			sigel	sun/sail	U+16CB: RUNIC LETTER SIGEL LONG-BRANCH-SOL S	runic
ᚻ		h	h x ç	h	h	consonant			hægl	hail	U+16BB: RUNIC LETTER HAEGL H	runic
ᛗ		m	m	m	m	consonant			mann	man	U+16D7: RUNIC LETTER MANNAZ MAN M	runic
ᚾ		n	n	n	n	consonant			nȳd	need	U+16BE: RUNIC LETTER NAUDIZ NYD NAUD N	runic
ᛝ		ŋ	ŋ	ŋ	n	consonant			Ing	Ing (Ingui-Frea)?	U+16DD: RUNIC LETTER ING	runic
ᚹ		w	w	w	w	consonant			ƿynn	mirth	U+16B9: RUNIC LETTER WUNJO WYNN W	runic
ᚱ		r	r	r	r	consonant			rād	riding	U+16B1: RUNIC LETTER RAIDO RAD REID R	runic
ᛚ		l	l	l	l	consonant			lagu	lake	U+16DA: RUNIC LETTER LAUKAZ LAGU LOGR L	runic
ᛡ		j	j	j	j	consonant			gēr	year	U+16E1: RUNIC LETTER IOR	runic
												
ᛉ		kˢ	ks	x	x	consonant			eolhx	elk's	U+16C9: RUNIC LETTER ALGIZ EOLHX	runic
ᛥ		sᵗ	st	-	s	consonant	manuscripts		stan	stone	U+16E5: RUNIC LETTER STAN	runic
												runic
ᛤ		k̈	k	k̄	k	consonant	Ruthwell Cross only		unknown	unknown	U+16E4: RUNIC LETTER CEALC	runic
ᛢ		ḵ	k	q	q	consonant	manuscripts		cweorð	unknown	U+16E2: RUNIC LETTER CWEORTH	runic
ᚴ		ṡ	s z	s	s	consonant	alternate shape		sigel	sun/sail	U+16B4: RUNIC LETTER KAUN K	runic
ᛄ		j̱	j	j	j	consonant	alternate shape		gēr	year	U+16C4: RUNIC LETTER GER	runic
												runic
ᛁ		i	i iː	i	i	vowel			īs	ice	U+16C1: RUNIC LETTER ISAZ IS ISS I	runic
ᚣ		y	y yː	y	y	vowel			ȳr	yew bow?	U+16A3: RUNIC LETTER YR	runic
ᚢ		u	u uː	u	u	vowel			ūr	aurochs	U+16A2: RUNIC LETTER URUZ UR U	runic
ᛖ		e	e eː	e	e	vowel			eh	steed	U+16D6: RUNIC LETTER EHWAZ EH E	runic
ᛟ		œ	ø øː	œ	o	vowel			ēðel	homeland, estate	U+16DF: RUNIC LETTER OTHALAN ETHEL O	runic
ᚩ		o	o oː	o	o	vowel			ōs	god/mouth	U+16A9: RUNIC LETTER OS O	runic
ᚫ		æ	æ æː	æ	a	vowel			æsc	ash tree	U+16AB: RUNIC LETTER AESC	runic
ᚪ		ɑ	ɑ ɑː	a	a	vowel			āc	oak tree	U+16AA: RUNIC LETTER AC A	runic
												
ᛡ		iᵒ	io iːo	-	i	diphthong			īor	beaver? eel?	U+16E1: RUNIC LETTER IOR	runic
ᛠ		eᵃ	e͡a	ea	e	diphthong			ēar	grave soil?	U+16E0: RUNIC LETTER EAR	runic
ᛇ		 ɨ	 eo eːo? iː? x ç	ï ʒ	i	diphthong			ēoh	yew tree	U+16C7: RUNIC LETTER IWAZ EOH	runic

`


var cols = {
"class": 1,
"transLoc": 2,
"ipaLoc": 3,
"transcription":4,
"key":5,
"typeLoc": 6,
"statusLoc": 7,
"equiv": 0,
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
"nameLoc": 9,
"nnameLoc": 10,
"ucsName": 11,

//"othertranscriptions": [[4, 'Elder'], [5, 'LB/ST'], [6, 'Medieval'], [7, 'AS/F']]
}
