var spreadsheet = `
m		m			m	m		nasal consonant				U+006D: LATIN SMALL LETTER M	
n		n			n	n		nasal consonant				U+006E: LATIN SMALL LETTER N	
mb	s	ᵐb		ᵐb		mb		prenasalised consonant				U+006D U+0062: LATIN SMALL LETTER M, SMALL LETTER B	
nd	s	ⁿd		ⁿd		nd		prenasalised consonant				U+006E U+0064: LATIN SMALL LETTER N, SMALL LETTER D	
													
b		p			b	b		plosive				U+0062: LATIN SMALL LETTER B	
d		t			d	d		plosive				U+0064: LATIN SMALL LETTER D	
g		k			g	g		plosive				U+0067: LATIN SMALL LETTER G	
ʼ		ʔ		ʔ	}	ʼ	'	plosive				U+02BC: MODIFIER LETTER APOSTROPHE	
gw	s	kʷ		kʷ		gw		plosive				U+0067 U+0077: LATIN SMALL LETTER G, SMALL LETTER W	
													
t		tʰ		tʰ	t	t		aspirated plosive				U+0074: LATIN SMALL LETTER T	
k		kʰ		kʰ	k	k		aspirated plosive				U+006B: LATIN SMALL LETTER K	
kw	s	kʷʰ		kʷʰ		kw		aspirated plosive				U+006B U+0077: LATIN SMALL LETTER K, SMALL LETTER W	
													
t’	s	tʼ		tʼ		t’		ejective plosive				U+0074 U+2019: LATIN SMALL LETTER T, RIGHT SINGLE QUOTATION MARK	
k’	s	kʼ		kʼ		k’		ejective plosive				U+006B U+2019: LATIN SMALL LETTER K, RIGHT SINGLE QUOTATION MARK	
kw’	s	kʷʼ		kʷʼ		kw’		ejective plosive				U+006B U+0077 U+2019: LATIN SMALL LETTER K, SMALL LETTER W, RIGHT SINGLE QUOTATION MARK	
													
dz	s	t͡s		t͡s		dz		affricate				U+0064 U+007A: LATIN SMALL LETTER D, SMALL LETTER Z	
dl	s	t͡ɬ		t͡ɬ		dl		affricate				U+0064 U+006C: LATIN SMALL LETTER D, SMALL LETTER L	
j		t͡ʃ		t͡ʃ	j	j		affricate				U+006A: LATIN SMALL LETTER J	
													
ts	s	t͡sʰ		t͡sʰ		ts		aspirated affricate				U+0074 U+0073: LATIN SMALL LETTER T, SMALL LETTER S	
tł	s	t͡ɬʰ		t͡ɬʰ		tł		aspirated affricate				U+0074 U+0142: LATIN SMALL LETTER T, SMALL LETTER L WITH STROKE	
ch	s	t͡ʃʰ		t͡ʃʰ	c	ch		aspirated affricate				U+0063 U+0068: LATIN SMALL LETTER C, SMALL LETTER H	
													
ts’	s	t͡sʼ		t͡sʼ		ts’		ejective affricate				U+0074 U+0073 U+2019: LATIN SMALL LETTER T, SMALL LETTER S, RIGHT SINGLE QUOTATION MARK	
tł’	s	t͡ɬʼ		t͡ɬʼ	t	tł’		ejective affricate				U+0074 U+0142 U+2019: LATIN SMALL LETTER T, SMALL LETTER L WITH STROKE, RIGHT SINGLE QUOTATION MARK	
ch’	s	t͡ʃ				ch’		ejective affricate				U+0063 U+0068 U+2019: LATIN SMALL LETTER C, SMALL LETTER H, RIGHT SINGLE QUOTATION MARK	
													
z		z			z	z		fricative				U+007A: LATIN SMALL LETTER Z	
l		ɮ		ɮ	l	l		fricative				U+006C: LATIN SMALL LETTER L	
zh	s	ʒ		ʒ		zh		fricative				U+007A U+0068: LATIN SMALL LETTER Z, SMALL LETTER H	
gh	s	ɣ		ɣ		gh		fricative				U+0067 U+0068: LATIN SMALL LETTER G, SMALL LETTER H	
s		s			s	s		fricative				U+0073: LATIN SMALL LETTER S	
ł		ɬ		ɬ	;	ł	;	fricative				U+0142: LATIN SMALL LETTER L WITH STROKE	
sh	s	ʃ		ʃ		sh		fricative				U+0073 U+0068: LATIN SMALL LETTER S, SMALL LETTER H	
x		x			x	x		fricative				U+0078: LATIN SMALL LETTER X	
h		h			h	h		fricative				U+0068: LATIN SMALL LETTER H	
													
r		ɾ ɹ		ɹ	r	r		approximant				U+0072: LATIN SMALL LETTER R	
y		j			y	y		approximant				U+0079: LATIN SMALL LETTER Y	
w		w			w	w		approximant				U+0077: LATIN SMALL LETTER W	
wh		ʍ		ʍ		wh		approximant				U+0077 U+0068: LATIN SMALL LETTER W, SMALL LETTER H	
													
													
a		a			a	a		vowel				U+0061: LATIN SMALL LETTER A	
à	s	a			a	à		vowel with low tone				U+00E0: LATIN SMALL LETTER A WITH GRAVE	
e		e			e	e		vowel				U+0065: LATIN SMALL LETTER E	
è	s	e			e	è		vowel with low tone				U+00E8: LATIN SMALL LETTER E WITH GRAVE	
ı		i			i	ı	i	vowel				U+0131: LATIN SMALL LETTER DOTLESS I	
o		o			o	o		vowel				U+006F: LATIN SMALL LETTER O	
ò	s	o			o	ò		vowel with low tone				U+00F2: LATIN SMALL LETTER O WITH GRAVE	
ą		ã		ã	a	ą		vowel				U+0105: LATIN SMALL LETTER A WITH OGONEK	
ę		ẽ		ẽ	e	ę		vowel				U+0119: LATIN SMALL LETTER E WITH OGONEK	
ı̨	s	ĩ		ĩ	i	ı̨		vowel				U+0131 U+0328: LATIN SMALL LETTER DOTLESS I, COMBINING OGONEK	
ǫ		õ		õ	o	ǫ		vowel				U+01EB: LATIN SMALL LETTER O WITH OGONEK	
													
													
M		m			M	M		nasal consonant				U+004D: LATIN CAPITAL LETTER M	
N		n			N	N		nasal consonant				U+004E: LATIN CAPITAL LETTER N	
Mb	s	ᵐb				Mb		prenasalised consonant				U+004D U+0062: LATIN CAPITAL LETTER M, SMALL LETTER B	
Nd	s	ⁿd				Nd		prenasalised consonant				U+004E U+0064: LATIN CAPITAL LETTER N, SMALL LETTER D	
													
B		p			B	B		plosive				U+0042: LATIN CAPITAL LETTER B	
D		t			D	D		plosive				U+0044: LATIN CAPITAL LETTER D	
G		k			G	G		plosive				U+0047: LATIN CAPITAL LETTER G	
Gw	s	kʷ				Gw		plosive				U+0047 U+0077: LATIN CAPITAL LETTER G, SMALL LETTER W	
													
T		tʰ			T	T		aspirated plosive				U+0054: LATIN CAPITAL LETTER T	
K		kʰ			K	K		aspirated plosive				U+004B: LATIN CAPITAL LETTER K	
Kw	s	kʷʰ				Kw		aspirated plosive				U+004B U+0077: LATIN CAPITAL LETTER K, SMALL LETTER W	
													
T’	s	tʼ				T’		ejective plosive				U+0054 U+2019: LATIN CAPITAL LETTER T, RIGHT SINGLE QUOTATION MARK	
K’	s	kʼ				K’		ejective plosive				U+004B U+2019: LATIN CAPITAL LETTER K, RIGHT SINGLE QUOTATION MARK	
Kw’	s	kʷʼ				Kw’		ejective plosive				U+004B U+0077 U+2019: LATIN CAPITAL LETTER K, SMALL LETTER W, RIGHT SINGLE QUOTATION MARK	
													
Dz	s	ʦ				Dz		affricate				U+0044 U+007A: LATIN CAPITAL LETTER D, SMALL LETTER Z	
Dl	s	tɬ				Dl		affricate				U+0044 U+006C: LATIN CAPITAL LETTER D, SMALL LETTER L	
J		ʧ			J	J		affricate				U+004A: LATIN CAPITAL LETTER J	
													
Ts	s	ʦʰ				Ts		aspirated affricate				U+0054 U+0073: LATIN CAPITAL LETTER T, SMALL LETTER S	
Tł	s	tɬʰ				Tł		aspirated affricate				U+0054 U+0142: LATIN CAPITAL LETTER T, SMALL LETTER L WITH STROKE	
Ch	s	ʧʰ			C	Ch		aspirated affricate				U+0043 U+0068: LATIN CAPITAL LETTER C, SMALL LETTER H	
													
Ts’	s	ʦʼ				Ts’		ejective affricate				U+0054 U+0073 U+2019: LATIN CAPITAL LETTER T, SMALL LETTER S, RIGHT SINGLE QUOTATION MARK	
Tł’	s	tɬʼ				Tł’		ejective affricate				U+0054 U+0142 U+2019: LATIN CAPITAL LETTER T, SMALL LETTER L WITH STROKE, RIGHT SINGLE QUOTATION MARK	
Ch’	s	ʧʼ				Ch’		ejective affricate				U+0043 U+0068 U+2019: LATIN CAPITAL LETTER C, SMALL LETTER H, RIGHT SINGLE QUOTATION MARK	
													
Z		z			Z	Z		fricative				U+005A: LATIN CAPITAL LETTER Z	
L		ɮ			L	L		fricative				U+004C: LATIN CAPITAL LETTER L	
Zh	s	ʒ				Zh		fricative				U+005A U+0068: LATIN CAPITAL LETTER Z, SMALL LETTER H	
Gh	s	ɣ				Gh		fricative				U+0047 U+0068: LATIN CAPITAL LETTER G, SMALL LETTER H	
S		s			S	S		fricative				U+0053: LATIN CAPITAL LETTER S	
Ł		ɬ			L	Ł	:	fricative				U+0141: LATIN CAPITAL LETTER L WITH STROKE	
Sł	s	ʃ				Sł		fricative				U+0053 U+0142: LATIN CAPITAL LETTER S, SMALL LETTER L WITH STROKE	
X		x			X	X		fricative				U+0058: LATIN CAPITAL LETTER X	
H		h			H	H		fricative				U+0048: LATIN CAPITAL LETTER H	
													
R		ɾ ɹ			R	R		approximant				U+0052: LATIN CAPITAL LETTER R	
Y		j			Y	Y		approximant				U+0059: LATIN CAPITAL LETTER Y	
W		w			W	W		approximant				U+0057: LATIN CAPITAL LETTER W	
Wh		ʍ				Wh		approximant				U+0057 U+0068: LATIN CAPITAL LETTER W, SMALL LETTER H	
													
													
A		a			A	A		vowel				U+0041: LATIN CAPITAL LETTER A	
À	s	aː			A	A		vowel				U+00C0: LATIN CAPITAL LETTER A WITH GRAVE	
E		e			E	E		vowel				U+0045: LATIN CAPITAL LETTER E	
È	s	eː			E	E		vowel				U+00C8: LATIN CAPITAL LETTER E WITH GRAVE	
I		i			I	I	I	vowel				U+0049: LATIN CAPITAL LETTER I	
O		o			O	O		vowel				U+004F: LATIN CAPITAL LETTER O	
Ò	s	oː			O	O		vowel				U+00D2: LATIN CAPITAL LETTER O WITH GRAVE	
Ą		ã			A	Ą		vowel				U+0104: LATIN CAPITAL LETTER A WITH OGONEK	
Ę		ẽ			E	Ę		vowel				U+0118: LATIN CAPITAL LETTER E WITH OGONEK	
Į	s	ĩ			I	Į		vowel				U+012E: LATIN CAPITAL LETTER I WITH OGONEK	
Ǫ		õ			O	Ǫ		vowel				U+01EA: LATIN CAPITAL LETTER O WITH OGONEK	
													
													
													
̀					[	̀	[	low tone mark				U+0300: COMBINING GRAVE ACCENT​	
													
													
̨		̃		̃	]	̨	]	nasalisation mark				U+0328: COMBINING OGONEK​	
̨̀	s				{	̨̀		nasalisation and tone mark				U+0328 U+0300: COMBINING OGONEK, COMBINING GRAVE ACCENT​	
													
													
‹					<	‹	(	quotation mark				U+2039: SINGLE LEFT-POINTING ANGLE QUOTATION MARK	
›					>	›	)	quotation mark				U+203A: SINGLE RIGHT-POINTING ANGLE QUOTATION MARK	
«					<	«	-	quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»					>	»	_	quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
’						’	|	quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
‘						‘	\	quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
“						“	{	quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
”						”	}	quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
;						;	,	semicolon				U+003B: SEMICOLON	
:						:	.	colon				U+003A: COLON	
,						,		comma				U+002C: COMMA	
.						.		fullstop				U+002E: FULL STOP	
													
													
1						1		digit				U+0031: DIGIT ONE	
2						2		digit				U+0032: DIGIT TWO	
3						3		digit				U+0033: DIGIT THREE	
4						4		digit				U+0034: DIGIT FOUR	
5						5		digit				U+0035: DIGIT FIVE	
6						6		digit				U+0036: DIGIT SIX	
7						7		digit				U+0037: DIGIT SEVEN	
8						8		digit				U+0038: DIGIT EIGHT	
9						9		digit				U+0039: DIGIT NINE	
0						0		digit				U+0030: DIGIT ZERO								


`



latinPanel = '̃ ã ẽ ĩ kʷ kʰ kʷʰ kʼ kʷʼ ɮ ɬ ᵐb ʍ ⁿd õ ɹ ʃ tʰ tʼ t͡s t͡ɬ t͡ʃ t͡sʰ t͡ɬʰ t͡ʃʰ t͡sʼ t͡ɬʼ ɣ ʒ ʔ'




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 0,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

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

"nnameLoc": 0,
"nameLoc": 0,
"ucsName": 12,
"block": 13,

//"othertranscriptions": [[4, 'ISO 15919']]
}

