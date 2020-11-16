var spreadsheet = `
ᛈ		p	p	P	p	consonant					U+16C8: RUNIC LETTER PERTHO PEORTH P	runic
ᛒ		b	b	B	b	consonant					U+16D2: RUNIC LETTER BERKANAN BEORC BJARKAN B	runic
ᛏ		t	t	T	t	consonant					U+16CF: RUNIC LETTER TIWAZ TIR TYR T	runic
ᛞ		d	d	D	d	consonant					U+16DE: RUNIC LETTER DAGAZ DAEG D	runic
ᚳ		c	c	C	c	consonant					U+16B3: RUNIC LETTER CEN	runic
ᛱ		k	k	K	k	consonant					U+16F1: RUNIC LETTER K	runic
ᚷ		g	g	g	g	consonant					U+16B7: RUNIC LETTER GEBO GYFU G	runic
ᚠ		f	f	f	f	consonant					U+16A0: RUNIC LETTER FEHU FEOH FE F	runic
ᚦ		þ	th	TH	t	consonant					U+16A6: RUNIC LETTER THURISAZ THURS THORN	runic
ᛋ		s	s	S	s	consonant					U+16CB: RUNIC LETTER SIGEL LONG-BRANCH-SOL S	runic
ᛦ		z	z	Z	z	consonant					U+16E6: RUNIC LETTER LONG-BRANCH-YR	
ᛲ		ʃ	sh	SH	s	consonant					U+16F2: RUNIC LETTER SH	
ᚻ		h	h	h	h	consonant					U+16BB: RUNIC LETTER HAEGL H	runic
ᛗ		m	m	M	m	consonant					U+16D7: RUNIC LETTER MANNAZ MAN M	runic
ᚾ		n	n	N	n	consonant					U+16BE: RUNIC LETTER NAUDIZ NYD NAUD N	runic
ᛝ		ŋ	ng	NG	n	consonant					U+16DD: RUNIC LETTER ING	runic
ᚹ		w	w	W	w	consonant					U+16B9: RUNIC LETTER WUNJO WYNN W	runic
ᚱ		r	r	R	r	consonant					U+16B1: RUNIC LETTER RAIDO RAD REID R	runic
ᛚ		l	l	L	l	consonant					U+16DA: RUNIC LETTER LAUKAZ LAGU LOGR L	runic
ᚣ		y	y	Y	y	vowel					U+16A3: RUNIC LETTER YR	runic
												
ᛉ		x	x	X	x	consonant					U+16C9: RUNIC LETTER ALGIZ EOLHX	runic
ᛥ		sᵗ	st	ST	s	consonant					U+16E5: RUNIC LETTER STAN	runic
												runic
ᛁ		i	i j	I	i	vowel					U+16C1: RUNIC LETTER ISAZ IS ISS I	runic
ᚢ		u	u v	U	u	vowel					U+16A2: RUNIC LETTER URUZ UR U	runic
ᛖ		e	e	E	e	vowel					U+16D6: RUNIC LETTER EHWAZ EH E	runic
ᚩ		o	o	O	o	vowel					U+16A9: RUNIC LETTER OS O	runic
ᚫ		a	a	A	a	vowel					U+16AB: RUNIC LETTER AESC	runic
												
ᛳ		oᵒ	oo	OO	o	diphthong					U+16F3: RUNIC LETTER OO	runic
ᛠ		eᵃ	ea	EA	e	diphthong					U+16E0: RUNIC LETTER EAR	runic
ᛟ		eᵉ	ee	EE	e	long vowel					U+16DF: RUNIC LETTER OTHALAN ETHEL O	runic
ᛇ		eᵒ	eo	EO	e	diphthong					U+16C7: RUNIC LETTER IWAZ EOH	runic



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
