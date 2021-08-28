var spreadsheet = `
ᛈ		p	P		p	p		consonant		U+16C8: RUNIC LETTER PERTHO PEORTH P	
ᛒ		b	B		b	b		consonant		U+16D2: RUNIC LETTER BERKANAN BEORC BJARKAN B	
ᛏ		t	T		t	t		consonant		U+16CF: RUNIC LETTER TIWAZ TIR TYR T	
ᛞ		d	D		d	d		consonant		U+16DE: RUNIC LETTER DAGAZ DAEG D	
ᚳ		c	C		c	c		consonant		U+16B3: RUNIC LETTER CEN	
ᛱ		k	K		k	k		consonant		U+16F1: RUNIC LETTER K	
ᚷ		g	g		g	g		consonant		U+16B7: RUNIC LETTER GEBO GYFU G	
ᚠ		f	f		f	f		consonant		U+16A0: RUNIC LETTER FEHU FEOH FE F	
ᚦ		th	TH		t	þ		consonant		U+16A6: RUNIC LETTER THURISAZ THURS THORN	
ᛋ		s	S		s	s		consonant		U+16CB: RUNIC LETTER SIGEL LONG-BRANCH-SOL S	
ᛣ		z	Z		z	z		consonant		U+16E6: RUNIC LETTER LONG-BRANCH-YR	
ᛲ		sh	SH		s	ʃ		consonant		U+16F2: RUNIC LETTER SH	
ᚻ		h	h		h	h		consonant		U+16BB: RUNIC LETTER HAEGL H	
ᛗ		m	M		m	m		consonant		U+16D7: RUNIC LETTER MANNAZ MAN M	
ᚾ		n	N		n	n		consonant		U+16BE: RUNIC LETTER NAUDIZ NYD NAUD N	
ᛝ		ng	NG		n	ŋ		consonant		U+16DD: RUNIC LETTER ING	
ᚹ		w	W		w	w		consonant		U+16B9: RUNIC LETTER WUNJO WYNN W	
ᚱ		r	R		r	r		consonant		U+16B1: RUNIC LETTER RAIDO RAD REID R	
ᛚ		l	L		l	l		consonant		U+16DA: RUNIC LETTER LAUKAZ LAGU LOGR L	
ᚣ		y	Y		y	y		vowel		U+16A3: RUNIC LETTER YR	
											
ᛉ		x	X		x	x		consonant		U+16C9: RUNIC LETTER ALGIZ EOLHX	
ᛥ		st	ST		s	sᵗ		consonant		U+16E5: RUNIC LETTER STAN	
											
ᛁ		i j	I		i	i		vowel		U+16C1: RUNIC LETTER ISAZ IS ISS I	
ᚢ		u v	U		u	u		vowel		U+16A2: RUNIC LETTER URUZ UR U	
ᛖ		e	E		e	e		vowel		U+16D6: RUNIC LETTER EHWAZ EH E	
ᚩ		o	O		o	o		vowel		U+16A9: RUNIC LETTER OS O	
ᚫ		a	A		a	a		vowel		U+16AB: RUNIC LETTER AESC	
											
ᛳ		oo	OO		o	oᵒ		diphthong		U+16F3: RUNIC LETTER OO	
ᛠ		ea	EA		e	eᵃ		diphthong		U+16E0: RUNIC LETTER EAR	
ᛟ		ee	EE		e	eᵉ		long vowel		U+16DF: RUNIC LETTER OTHALAN ETHEL O	
ᛇ		eo	EO		e	eᵒ		diphthong		U+16C7: RUNIC LETTER IWAZ EOH	


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
"meaning":0,
"shape": 0,

"numLoc": 0,
"nameLoc": 0,
"nnameLoc": 10,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[3, 'Latin']]
}
