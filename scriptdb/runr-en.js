var spreadsheet = `runr-en	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
⃞	*			□			Me​		box enclosure	used for ᚦ⃞			U+20DE: COMBINING ENCLOSING SQUARE​	
᛫	]			-					word separator				U+16EB: RUNIC SINGLE PUNCTUATION	
ᚫ	a	a		a	A		Lo		vowel				U+16AB: RUNIC LETTER AESC	
ᚪ	a	a		A	a		Lo	i	vowel	used for ᛋᛗᚪᚢᚷ			U+16AA: RUNIC LETTER AC A	
ᛒ	b	b		b	B		Lo		consonant				U+16D2: RUNIC LETTER BERKANAN BEORC BJARKAN B	
ᚳ	c	c		c	C		Lo		consonant				U+16B3: RUNIC LETTER CEN	
ᛞ	d	d		d	D		Lo		consonant				U+16DE: RUNIC LETTER DAGAZ DAEG D	
ᛖ	e	e		e	E		Lo		vowel				U+16D6: RUNIC LETTER EHWAZ EH E	
ᛠ	e	ea		eᵃ	EA		Lo		diphthong				U+16E0: RUNIC LETTER EAR	
ᛟ	e	ee		eᵉ	EE		Lo		long vowel				U+16DF: RUNIC LETTER OTHALAN ETHEL O	
ᛇ	e	eo		eᵒ	EO		Lo		diphthong				U+16C7: RUNIC LETTER IWAZ EOH	
ᚠ	f	f		f	f		Lo		consonant				U+16A0: RUNIC LETTER FEHU FEOH FE F	
ᚷ	g	g		g	g		Lo		consonant				U+16B7: RUNIC LETTER GEBO GYFU G	
ᚻ	h	h		h	h		Lo		consonant				U+16BB: RUNIC LETTER HAEGL H	
ᛁ	i	i j		i	I		Lo		vowel				U+16C1: RUNIC LETTER ISAZ IS ISS I	
ᛱ	k	k		k	K		Lo		consonant				U+16F1: RUNIC LETTER K	
ᛚ	l	l		l	L		Lo		consonant				U+16DA: RUNIC LETTER LAUKAZ LAGU LOGR L	
ᛗ	m	m		m	M		Lo		consonant				U+16D7: RUNIC LETTER MANNAZ MAN M	
ᚾ	n	n		n	N		Lo		consonant				U+16BE: RUNIC LETTER NAUDIZ NYD NAUD N	
ᛝ	n	ng		ŋ	NG		Lo		consonant				U+16DD: RUNIC LETTER ING	
ᚩ	o	o		o	O		Lo		vowel				U+16A9: RUNIC LETTER OS O	
ᛳ	o	oo		oᵒ	OO		Lo		diphthong				U+16F3: RUNIC LETTER OO	
ᛈ	p	p		p	P		Lo		consonant				U+16C8: RUNIC LETTER PERTHO PEORTH P	
ᚱ	r	r		r	R		Lo		consonant				U+16B1: RUNIC LETTER RAIDO RAD REID R	
ᛋ	s	s		s	S		Lo		consonant				U+16CB: RUNIC LETTER SIGEL LONG-BRANCH-SOL S	
ᛲ	s	sh		ʃ	SH		Lo		consonant				U+16F2: RUNIC LETTER SH	
ᛥ	s	st		sᵗ	ST		Lo		consonant				U+16E5: RUNIC LETTER STAN	
ᛏ	t	t		t	T		Lo		consonant				U+16CF: RUNIC LETTER TIWAZ TIR TYR T	
ᚦ	t	th		þ	TH		Lo		consonant				U+16A6: RUNIC LETTER THURISAZ THURS THORN	
ᚢ	u	u v		u	U		Lo		vowel				U+16A2: RUNIC LETTER URUZ UR U	
ᚹ	w	w		w	W		Lo		consonant				U+16B9: RUNIC LETTER WUNJO WYNN W	
ᛉ	x	x		x	X		Lo		consonant				U+16C9: RUNIC LETTER ALGIZ EOLHX	
ᚣ	y	y		y	Y		Lo		vowel				U+16A3: RUNIC LETTER YR	
ᛣ	z	z		z	Z		Lo		consonant				U+16E6: RUNIC LETTER LONG-BRANCH-YR	
\u0020	 						Zs		space				U+0020: SPACE	
														
ᚹᚣᚱᛗ		worm		wyrm	wyrm				symbol for the Worm				U+16B9 U+16A3 U+16B1 U+16D7: RUNIC LETTER WUNJO WYNN W, LETTER YR, LETTER RAIDO RAD REID R, LETTER MANNAZ MAN M	
ᛋᛗᚪᚢᚷ		smaug		smaug	smaug				symbol for Smaug				U+16CB U+16D7 U+16AA U+16A2 U+16B7: RUNIC LETTER SIGEL LONG-BRANCH-SOL S, LETTER MANNAZ MAN M, LETTER AC A, LETTER URUZ UR U, LETTER GEBO GYFU G	
														
`														
														
latinPanel = ''														
														
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
														