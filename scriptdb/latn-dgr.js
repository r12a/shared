var spreadsheet = `
m		m	m	m	nasal consonant				U+006D: LATIN SMALL LETTER M
n		n	n	n	nasal consonant				U+006E: LATIN SMALL LETTER N
mb	s		mb	ᵐb	prenasalised consonant				U+006D U+0062: LATIN SMALL LETTER M, LATIN SMALL LETTER B
nd	s		nd	ⁿd	prenasalised consonant				U+006E U+0064: LATIN SMALL LETTER N, LATIN SMALL LETTER D
									
b		b	b	p	plosive				U+0062: LATIN SMALL LETTER B
d		d	d	t	plosive				U+0064: LATIN SMALL LETTER D
g		g	g	k	plosive				U+0067: LATIN SMALL LETTER G
ʼ		'	ʼ	ʔ	plosive				U+02BC: MODIFIER LETTER APOSTROPHE
gw	s		gw	kʷ	plosive				U+0067 U+0077: LATIN SMALL LETTER G, LATIN SMALL LETTER W
									
t		t	t	tʰ	aspirated plosive				U+0074: LATIN SMALL LETTER T
k		k	k	kʰ	aspirated plosive				U+006B: LATIN SMALL LETTER K
kw	s		kw	kʷʰ	aspirated plosive				U+006B U+0077: LATIN SMALL LETTER K, LATIN SMALL LETTER W
									
t’	s		t’	tʼ	ejective plosive				U+0074 U+2019: LATIN SMALL LETTER T, RIGHT SINGLE QUOTATION MARK
k’	s		k’	kʼ	ejective plosive				U+006B U+2019: LATIN SMALL LETTER K, RIGHT SINGLE QUOTATION MARK
kw’	s		kw’	kʷʼ	ejective plosive				U+006B U+0077 U+2019: LATIN SMALL LETTER K, LATIN SMALL LETTER W, RIGHT SINGLE QUOTATION MARK
									
dz	s		dz	ʦ	affricate				U+0064 U+007A: LATIN SMALL LETTER D, LATIN SMALL LETTER Z
dl	s		dl	tɬ	affricate				U+0064 U+006C: LATIN SMALL LETTER D, LATIN SMALL LETTER L
j		j	j	ʧ	affricate				U+006A: LATIN SMALL LETTER J
									
ts	s		ts	ʦʰ	aspirated affricate				U+0074 U+0073: LATIN SMALL LETTER T, LATIN SMALL LETTER S
tł	s	t	tł	tɬʰ	aspirated affricate				U+0074 U+0142: LATIN SMALL LETTER T, LATIN SMALL LETTER L WITH STROKE
ch	s	c	ch	ʧʰ	aspirated affricate				U+0063 U+0068: LATIN SMALL LETTER C, LATIN SMALL LETTER H
									
ts’	s		ts’	ʦʼ	ejective affricate				U+0074 U+0073 U+2019: LATIN SMALL LETTER T, LATIN SMALL LETTER S, RIGHT SINGLE QUOTATION MARK
tł’	s		tł’	tɬʼ	ejective affricate				U+0074 U+0142 U+2019: LATIN SMALL LETTER T, LATIN SMALL LETTER L WITH STROKE, RIGHT SINGLE QUOTATION MARK
ch’	s		ch’	ʧʼ	ejective affricate				U+0063 U+0068 U+2019: LATIN SMALL LETTER C, LATIN SMALL LETTER H, RIGHT SINGLE QUOTATION MARK
									
z		z	z	z	fricative				U+007A: LATIN SMALL LETTER Z
l		l	l	ɮ	fricative				U+006C: LATIN SMALL LETTER L
zh	s		zh	ʒ	fricative				U+007A U+0068: LATIN SMALL LETTER Z, LATIN SMALL LETTER H
gh	s		gh	ɣ	fricative				U+0067 U+0068: LATIN SMALL LETTER G, LATIN SMALL LETTER H
s		s	s	s	fricative				U+0073: LATIN SMALL LETTER S
ł		l	ł	ɬ	fricative				U+0142: LATIN SMALL LETTER L WITH STROKE
sh	s		sh	ʃ	fricative				U+0073 U+0068: LATIN SMALL LETTER S, LATIN SMALL LETTER H
x		x	x	x	fricative				U+0078: LATIN SMALL LETTER X
h		h	h	h	fricative				U+0068: LATIN SMALL LETTER H
									
r		r	r	ɾ ɹ	approximant				U+0072: LATIN SMALL LETTER R
y		y	y	j	approximant				U+0079: LATIN SMALL LETTER Y
w		w	w	w	approximant				U+0077: LATIN SMALL LETTER W
wh			wh	ʍ	approximant				U+0077 U+0068: LATIN SMALL LETTER W, LATIN SMALL LETTER H
									
									
a		a	a	a	vowel				U+0061: LATIN SMALL LETTER A
à	s	a	à	a	vowel with low tone				U+0061 U+0061: LATIN SMALL LETTER A, LATIN SMALL LETTER A
e		e	e	e	vowel				U+0065: LATIN SMALL LETTER E
è	s	e	è	e	vowel with low tone				U+0065 U+0065: LATIN SMALL LETTER E, LATIN SMALL LETTER E
ı		i	ı	i	vowel				U+0131: LATIN SMALL LETTER DOTLESS I
o		o	o	o	vowel				U+006F: LATIN SMALL LETTER O
ò	s	o	ò	o	vowel with low tone				U+006F U+006F: LATIN SMALL LETTER O, LATIN SMALL LETTER O
ą		a	ą	ã	vowel				U+0105: LATIN SMALL LETTER A WITH OGONEK
ę		e	ę	ẽ	vowel				U+0119: LATIN SMALL LETTER E WITH OGONEK
ı̨	s	i	ı̨	ĩ	vowel				U+0131 U+0328: LATIN SMALL LETTER DOTLESS I, COMBINING OGONEK
ǫ		o	ǫ	õ	vowel				U+01EB: LATIN SMALL LETTER O WITH OGONEK
									
									
M		M	M	m	nasal consonant				U+004D: LATIN CAPITAL LETTER M
N		N	N	n	nasal consonant				U+004E: LATIN CAPITAL LETTER N
Mb	s		Mb	ᵐb	prenasalised consonant				U+004D U+0042: LATIN CAPITAL LETTER M, LATIN CAPITAL LETTER B
Nd	s		Nd	ⁿd	prenasalised consonant				U+004E U+0044: LATIN CAPITAL LETTER N, LATIN CAPITAL LETTER D
									
B		B	B	p	plosive				U+0042: LATIN CAPITAL LETTER B
D		D	D	t	plosive				U+0044: LATIN CAPITAL LETTER D
G		G	G	k	plosive				U+0047: LATIN CAPITAL LETTER G
Gw	s		Gw	kʷ	plosive				U+0047 U+0057: LATIN CAPITAL LETTER G, LATIN CAPITAL LETTER W
									
T		T	T	tʰ	aspirated plosive				U+0054: LATIN CAPITAL LETTER T
K		K	K	kʰ	aspirated plosive				U+004B: LATIN CAPITAL LETTER K
Kw	s		Kw	kʷʰ	aspirated plosive				U+004B U+0057: LATIN CAPITAL LETTER K, LATIN CAPITAL LETTER W
									
T’	s		T’	tʼ	ejective plosive				U+0054 U+2019: LATIN CAPITAL LETTER T, RIGHT SINGLE QUOTATION MARK
K’	s		K’	kʼ	ejective plosive				U+004B U+2019: LATIN CAPITAL LETTER K, RIGHT SINGLE QUOTATION MARK
Kw’	s		Kw’	kʷʼ	ejective plosive				U+004B U+0057 U+2019: LATIN CAPITAL LETTER K, LATIN CAPITAL LETTER W, RIGHT SINGLE QUOTATION MARK
									
Dz	s		Dz	ʦ	affricate				U+0044 U+005A: LATIN CAPITAL LETTER D, LATIN CAPITAL LETTER Z
Dl	s		Dl	tɬ	affricate				U+0044 U+004C: LATIN CAPITAL LETTER D, LATIN CAPITAL LETTER L
J		J	J	ʧ	affricate				U+004A: LATIN CAPITAL LETTER J
									
Ts	s		Ts	ʦʰ	aspirated affricate				U+0054 U+0053: LATIN CAPITAL LETTER T, LATIN CAPITAL LETTER S
Tł	s		Tł	tɬʰ	aspirated affricate				U+0054 U+0141: LATIN CAPITAL LETTER T, LATIN CAPITAL LETTER L WITH STROKE
Ch	s	C	Ch	ʧʰ	aspirated affricate				U+0043 U+0048: LATIN CAPITAL LETTER C, LATIN CAPITAL LETTER H
									
Ts’	s		Ts’	ʦʼ	ejective affricate				U+0054 U+0053 U+2019: LATIN CAPITAL LETTER T, LATIN CAPITAL LETTER S, RIGHT SINGLE QUOTATION MARK
Tł’	s	T	Tł’	tɬʼ	ejective affricate				U+0054 U+0141 U+2019: LATIN CAPITAL LETTER T, LATIN CAPITAL LETTER L WITH STROKE, RIGHT SINGLE QUOTATION MARK
Ch’	s		Ch’	ʧʼ	ejective affricate				U+0043 U+0048 U+2019: LATIN CAPITAL LETTER C, LATIN CAPITAL LETTER H, RIGHT SINGLE QUOTATION MARK
									
Z		Z	Z	z	fricative				U+005A: LATIN CAPITAL LETTER Z
L		L	L	ɮ	fricative				U+004C: LATIN CAPITAL LETTER L
Zh	s		Zh	ʒ	fricative				U+005A U+0048: LATIN CAPITAL LETTER Z, LATIN CAPITAL LETTER H
Gh	s		Gh	ɣ	fricative				U+0047 U+0048: LATIN CAPITAL LETTER G, LATIN CAPITAL LETTER H
S		S	S	s	fricative				U+0053: LATIN CAPITAL LETTER S
Ł		L	Ł	ɬ	fricative				U+0141: LATIN CAPITAL LETTER L WITH STROKE
Sł	s		Sł	ʃ	fricative				U+0053 U+0048: LATIN CAPITAL LETTER S, LATIN CAPITAL LETTER H
X		X	X	x	fricative				U+0058: LATIN CAPITAL LETTER X
H		H	H	h	fricative				U+0048: LATIN CAPITAL LETTER H
									
R		R	R	ɾ ɹ	approximant				U+0052: LATIN CAPITAL LETTER R
Y		Y	Y	j	approximant				U+0059: LATIN CAPITAL LETTER Y
W		W	W	w	approximant				U+0057: LATIN CAPITAL LETTER W
Wh			Wh	ʍ	approximant				U+0057 U+0048: LATIN CAPITAL LETTER W, LATIN CAPITAL LETTER H
									
									
A		A	A	a	vowel				U+0041: LATIN CAPITAL LETTER A
À	s	A	A	aː	vowel				U+0041: LATIN CAPITAL LETTER A
E		E	E	e	vowel				U+0045: LATIN CAPITAL LETTER E
È	s	E	E	eː	vowel				U+0045: LATIN CAPITAL LETTER E
I		I	I	i	vowel				U+0049: LATIN CAPITAL LETTER I
O		O	O	o	vowel				U+004F: LATIN CAPITAL LETTER O
Ò	s	O	O	oː	vowel				U+004F: LATIN CAPITAL LETTER O
Ą		A	Ą	ã	vowel				U+0104: LATIN CAPITAL LETTER A WITH OGONEK
Ę		E	Ę	ẽ	vowel				U+0118: LATIN CAPITAL LETTER E WITH OGONEK
Į	s	I	Į	ĩ	vowel				U+012E: LATIN CAPITAL LETTER I WITH OGONEK
Ǫ		O	Ǫ	õ	vowel				U+01EA: LATIN CAPITAL LETTER O WITH OGONEK
									
									
									
̀		[	̀		low tone mark				U+0300: COMBINING GRAVE ACCENT​
									
									
̨		]	̨	̃	nasalisation mark				U+0328: COMBINING OGONEK​
̨̀	s	{	̨̀		nasalisation and tone mark				U+0328 U+0300: COMBINING OGONEK, COMBINING GRAVE ACCENT​
									
									
‹		<	‹		quotation mark				U+2039: SINGLE LEFT-POINTING ANGLE QUOTATION MARK
›		>	›		quotation mark				U+203A: SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
«		<	«		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
»		>	»		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
’			’		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK
‘			‘		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK
“			“		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK
”			”		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK
;			;		semicolon				U+003B: SEMICOLON
:			:		colon				U+003A: COLON
,			,		comma				U+002C: COMMA
.			.		fullstop				U+002E: FULL STOP
									
									
1			1		digit				U+0031: DIGIT ONE
2			2		digit				U+0032: DIGIT TWO
3			3		digit				U+0033: DIGIT THREE
4			4		digit				U+0034: DIGIT FOUR
5			5		digit				U+0035: DIGIT FIVE
6			6		digit				U+0036: DIGIT SIX
7			7		digit				U+0037: DIGIT SEVEN
8			8		digit				U+0038: DIGIT EIGHT
9			9		digit				U+0039: DIGIT NINE
0			0		digit				U+0030: DIGIT ZERO

							


`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"transckey": 0,
"transcription":0,
"ipaLoc": 4,
"typeLoc": 5,
"statusLoc": 6,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"nameLoc": 7,
"nnameLoc": 8,
"numLoc": 0,
"ucsName": 9,

//"othertranscriptions": [[4, 'ISO 15919']]
}

