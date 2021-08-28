var spreadsheet = `
q		q				q		consonant				U+0071: LATIN SMALL LETTER Q	
w		w				w		consonant				U+0077: LATIN SMALL LETTER W	
r		r			r	r	r	consonant				U+0072: LATIN SMALL LETTER R	
ʀ		ʀ		ʀ	r	ʀ	r	consonant				U+0280: LATIN LETTER SMALL CAPITAL R	
t		t			t	t	t	consonant				U+0074: LATIN SMALL LETTER T	
þ		θ		θ	q¶	þ	t	consonant				U+00FE: LATIN SMALL LETTER THORN	
y		y			y	y	y	consonant				U+0079: LATIN SMALL LETTER Y	
ý		yː		yː	y	ý	y	consonant				U+00FD: LATIN SMALL LETTER Y WITH ACUTE	
p		p				p		consonant				U+0070: LATIN SMALL LETTER P	
s		s				s		consonant				U+0073: LATIN SMALL LETTER S	
d		d			d	d	d	consonant				U+0064: LATIN SMALL LETTER D	
ð		ð		ð	d	ð	d	consonant				U+00F0: LATIN SMALL LETTER ETH	
f		f				f		consonant				U+0066: LATIN SMALL LETTER F	
g		g				g		consonant				U+0067: LATIN SMALL LETTER G	
h		h				h		consonant				U+0068: LATIN SMALL LETTER H	
j		j				j		consonant				U+006A: LATIN SMALL LETTER J	
k		k				k		consonant				U+006B: LATIN SMALL LETTER K	
l		l				l		consonant				U+006C: LATIN SMALL LETTER L	
z		t͡s		t͡s		z		consonant				U+007A: LATIN SMALL LETTER Z	
x		x				x		consonant				U+0078: LATIN SMALL LETTER X	
c		c				c		consonant				U+0063: LATIN SMALL LETTER C	
v		w				v		consonant				U+0076: LATIN SMALL LETTER V	
b		b				b		consonant				U+0062: LATIN SMALL LETTER B	
n		n				n		consonant				U+006E: LATIN SMALL LETTER N	
m		m				m		consonant				U+006D: LATIN SMALL LETTER M	
Q		q				Q		consonant				U+0051: LATIN CAPITAL LETTER Q	
W		w				W		consonant				U+0057: LATIN CAPITAL LETTER W	
R		r			R	R	R	consonant				U+0052: LATIN CAPITAL LETTER R	
Ʀ		ʀ			R	Ʀ	R	consonant				U+01A6: LATIN LETTER YR	
T		t			T	T	T	consonant				U+0054: LATIN CAPITAL LETTER T	
Þ		θ			Q¶	Þ	T	consonant				U+00DE: LATIN CAPITAL LETTER THORN	
Y		y			Y	Y	Y	consonant				U+0059: LATIN CAPITAL LETTER Y	
Ý		yː			Y	Ý	Y	consonant				U+00DD: LATIN CAPITAL LETTER Y WITH ACUTE	
P		p				P		consonant				U+0050: LATIN CAPITAL LETTER P	
S		s				S		consonant				U+0053: LATIN CAPITAL LETTER S	
D		d			D	D	D	consonant				U+0044: LATIN CAPITAL LETTER D	
Ð		ð			D	Ð	D	consonant				U+00D0: LATIN CAPITAL LETTER ETH	
F		f				F		consonant				U+0046: LATIN CAPITAL LETTER F	
G		g				G		consonant				U+0047: LATIN CAPITAL LETTER G	
H		h				H		consonant				U+0048: LATIN CAPITAL LETTER H	
J		j				J		consonant				U+004A: LATIN CAPITAL LETTER J	
K		k				K		consonant				U+004B: LATIN CAPITAL LETTER K	
L		l				L		consonant				U+004C: LATIN CAPITAL LETTER L	
Z		ts				Z		consonant				U+005A: LATIN CAPITAL LETTER Z	
X		x				X		consonant				U+0058: LATIN CAPITAL LETTER X	
C		c				C		consonant				U+0043: LATIN CAPITAL LETTER C	
V		w				V		consonant				U+0056: LATIN CAPITAL LETTER V	
B		b				B		consonant				U+0042: LATIN CAPITAL LETTER B	
N		n				N		consonant				U+004E: LATIN CAPITAL LETTER N	
M		m				M		consonant				U+004D: LATIN CAPITAL LETTER M	
													
													
e		e			e	e	e	vowel				U+0065: LATIN SMALL LETTER E	
é		eː		eː	e	é	e	vowel				U+00E9: LATIN SMALL LETTER E WITH ACUTE	
u		u			u	u	u	vowel				U+0075: LATIN SMALL LETTER U	
ú		uː		uː	u	ú	u	vowel				U+00FA: LATIN SMALL LETTER U WITH ACUTE	
i		i			i	i	i	vowel				U+0069: LATIN SMALL LETTER I	
í		iː		iː	i	í	i	vowel				U+00ED: LATIN SMALL LETTER I WITH ACUTE	
o		o			o¶	o	o	vowel				U+006F: LATIN SMALL LETTER O	
ó		oː		oː	o	ó	o	vowel				U+00F3: LATIN SMALL LETTER O WITH ACUTE	
ǫ		ɔ		ɔ	o	ǫ	o	vowel				U+01EB: LATIN SMALL LETTER O WITH OGONEK	
ø		œ		œ	o	ø	[	vowel				U+00F8: LATIN SMALL LETTER O WITH STROKE	
œ		œː		œː	o	œ	]	vowel				U+0153: LATIN SMALL LIGATURE OE	
a		a			a	a	a	vowel				U+0061: LATIN SMALL LETTER A	
á		aː		aː	a	á	a	vowel				U+00E1: LATIN SMALL LETTER A WITH ACUTE	
æ		æː		æː	a	æ	q	vowel				U+00E6: LATIN SMALL LETTER AE	
E		e			E	E	E	vowel				U+0045: LATIN CAPITAL LETTER E	
É		eː			E	É	E	vowel				U+00C9: LATIN CAPITAL LETTER E WITH ACUTE	
U		u			U	U	U	vowel				U+0055: LATIN CAPITAL LETTER U	
Ú		uː			U	Ú	U	vowel				U+00DA: LATIN CAPITAL LETTER U WITH ACUTE	
I		i			I	I	I	vowel				U+0049: LATIN CAPITAL LETTER I	
Í		iː			I	Í	I	vowel				U+00CD: LATIN CAPITAL LETTER I WITH ACUTE	
O		o			O	O	O	vowel				U+004F: LATIN CAPITAL LETTER O	
Ó		oː			O	Ó	O	vowel				U+00D3: LATIN CAPITAL LETTER O WITH ACUTE	
Ǫ		ɔ			O	Ǫ	O	vowel				U+01EA: LATIN CAPITAL LETTER O WITH OGONEK	
Œ		œː			O	Œ	}	vowel				U+0152: LATIN CAPITAL LIGATURE OE	
Ø		œ			O	Ø	{	vowel				U+00D8: LATIN CAPITAL LETTER O WITH STROKE	
A		a			A	A	A	vowel				U+0041: LATIN CAPITAL LETTER A	
Á		aː			A	Á	A	vowel				U+00C1: LATIN CAPITAL LETTER A WITH ACUTE	
Æ		æː			A	Æ	Q	vowel				U+00C6: LATIN CAPITAL LETTER AE	
													
													
«					<	«	-	quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»					>	»	=	quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹					<	‹	9	quotation mark				U+2039: SINGLE LEFT-POINTING ANGLE QUOTATION MARK	
›					>	›	0	quotation mark				U+203A: SINGLE RIGHT-POINTING ANGLE QUOTATION MARK	
’					'	’	'	apostrophe				U+2019: RIGHT SINGLE QUOTATION MARK	
͡					*	͓	.	ligature				U+0361: COMBINING DOUBLE INVERTED BREVE	


`




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

"nnameLoc": 10,
"nameLoc": 11,
"numLoc": 12,
"ucsName": 13,

//"othertranscriptions": [[4, 'ISO 15919']]
}

