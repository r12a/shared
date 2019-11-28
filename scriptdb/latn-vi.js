var spreadsheet = `
b			b	b	b	plosive		ɓe˧, ɓəː˧˩	bê bờ	U+0062: LATIN SMALL LETTER B
p			p	-p	-p	final plosive		pe˧, pəː˧˩	pê pờ; bê phở (colloq.)	U+0070: LATIN SMALL LETTER P
t			t	t -t	t -k	plosive		te˧, təː˧˩	tê tờ	U+0074: LATIN SMALL LETTER T
th	s		th	tʰ	tʰ	plosive				U+0074 U+0068: LATIN SMALL LETTER T, SMALL LETTER H
c			c	k -k	k -k	plosive		se˧, kəː˧˩	xê cờ	U+0063: LATIN SMALL LETTER C
k			k	k	k	plosive				U+006B: LATIN SMALL LETTER K
qu	s	q	qu	kʷ	kʷ	plosive		ku˧, kwi˧, kwəː˧˩	cu; quy quờ	U+0071 U+0075: LATIN SMALL LETTER Q, SMALL LETTER U
ch	s		ch	tɕ -ʲk	c -t	affricate				U+0063 U+0068: LATIN SMALL LETTER C, SMALL LETTER H
tr			tr	tɕ	ʈ	affricate/retroflex				U+0074 U+0072: LATIN SMALL LETTER T, SMALL LETTER R
đ		d	đ	ɗ	ɗ	implosive		ɗe˧, ɗəː˧˩	đê đờ	U+0111: LATIN SMALL LETTER D WITH STROKE
m			m	m -m	m -m	nasal		(ɛm˧)məː˧˩	em-mờ mờ	U+006D: LATIN SMALL LETTER M
n			n	n -n	n -ŋ	nasal		(ɛn˧)nəː˧˩	en-nờ nờ	U+006E: LATIN SMALL LETTER N
ng	s		ng	ŋ -ŋ	ŋ -ŋ	nasal				U+006E U+0067: LATIN SMALL LETTER N, SMALL LETTER G
ngh	s		ngh	ŋ	ŋ	nasal				U+006E U+0067 U+0068: LATIN SMALL LETTER N, SMALL LETTER G, SMALL LETTER H
nh	s		nh	ɲ -ʲŋ	ɲ -n	nasal				U+006E U+0068: LATIN SMALL LETTER N, SMALL LETTER H
ph	s		ph	f	f	fricative				U+0070 U+0068: LATIN SMALL LETTER P, SMALL LETTER H
v			v	v	j	fricative/glide		ve˧, vəː˧	vê vờ	U+0076: LATIN SMALL LETTER V
x			x	s	s	fricative		ik˦˥si˧˩, səː˧˩	ích xì; xờ nhẹ xờ	U+0078: LATIN SMALL LETTER X
d		d	d	z -j	z -j	fricative		ze˧, zəː˧˩	dê dờ	U+0064: LATIN SMALL LETTER D
gi	s		gi	z -j	z -j	fricative				U+0067 U+0069: LATIN SMALL LETTER G, SMALL LETTER I
g			g	ɣ	ɣ	fricative				U+0067: LATIN SMALL LETTER G
gh	s		gh	ɣ	ɣ	fricative		ze˧, ɣəː˧˩	giê gờ	U+0067 U+0068: LATIN SMALL LETTER G, SMALL LETTER H
h			h	h	h	fricative		hək˧˥, həː˧˩	hát hờ	U+0068: LATIN SMALL LETTER H
kh	s		kh	x	x	fricative		kaː˧	ca	U+006B U+0068: LATIN SMALL LETTER K, SMALL LETTER H
s			s	s	ʂ	fricative		ɛt˦˥si˧˩, ʂəː˧˩	ét-xì; xờ nặng sờ	U+0073: LATIN SMALL LETTER S
r			r	z	r	fricative/approximant		(ɛ˧)rəː˧˩	e-rờ rờ	U+0072: LATIN SMALL LETTER R
l			l	l	l	approximant		(ɛ˧)ləː˧˩	e-lờ lờ	U+006C: LATIN SMALL LETTER L
										
										
a		a	a	a˧	a˧	mid-tone vowel		aː˧	a	U+0061: LATIN SMALL LETTER A
ă		a	ă	ă˧	ă˧	mid-tone vowel		aː˧˥	á	U+0103: LATIN SMALL LETTER A WITH BREVE
â		a	â	ə̆˧	ə̆˧	mid-tone vowel		əː˧˥	ớ	U+00E2: LATIN SMALL LETTER A WITH CIRCUMFLEX
e		e	e	ɛ˧	ɛ˧	mid-tone vowel		ɛ˧	e	U+0065: LATIN SMALL LETTER E
ê		e	ê	e˧	e˧	mid-tone vowel		e˧	ê	U+00EA: LATIN SMALL LETTER E WITH CIRCUMFLEX
i		i	i	i˧	i˧	mid-tone vowel		i˧, i˧ ŋan˧˥	i; i ngắn	U+0069: LATIN SMALL LETTER I
o		o	o	ɔ˧	ɔ˧	mid-tone vowel		ɔ˧	o	U+006F: LATIN SMALL LETTER O
ô		o	ô	o˧	o˧	mid-tone vowel		o˧	ô	U+00F4: LATIN SMALL LETTER O WITH CIRCUMFLEX
ơ		o	ơ	ə˧	ə˧	mid-tone vowel		əː˧	ơ	U+01A1: LATIN SMALL LETTER O WITH HORN
u		u	u	u˧	u˧	mid-tone vowel		u˧	u	U+0075: LATIN SMALL LETTER U
ư		u	ư	ɨ˧	ɨ˧	mid-tone vowel		ɨ˧	ư	U+01B0: LATIN SMALL LETTER U WITH HORN
y		y	y	i˧	i˧	mid-tone vowel		i˧zaːj˧˩, i˧kəː˧rɛt˦˥	i dài; i-cờ-rét	U+0079: LATIN SMALL LETTER Y
										
à			à	a	a˨˩	low-falling vowel				U+00E0: LATIN SMALL LETTER A WITH GRAVE
ằ			ằ	ă	ă˨˩	low-falling vowel				U+1EB1: LATIN SMALL LETTER A WITH BREVE AND GRAVE
ầ			ầ	ə̆	ə̆˨˩	low-falling vowel				U+1EA7: LATIN SMALL LETTER A WITH CIRCUMFLEX AND GRAVE
è			è	ɛ	ɛ˨˩	low-falling vowel				U+00E8: LATIN SMALL LETTER E WITH GRAVE
ề			ề	e	e˨˩	low-falling vowel				U+1EC1: LATIN SMALL LETTER E WITH CIRCUMFLEX AND GRAVE
ì			ì	i	i˨˩	low-falling vowel				U+00EC: LATIN SMALL LETTER I WITH GRAVE
ò			ò	ɔ	ɔ˨˩	low-falling vowel				U+00F2: LATIN SMALL LETTER O WITH GRAVE
ồ			ồ	o	o˨˩	low-falling vowel				U+1ED3: LATIN SMALL LETTER O WITH CIRCUMFLEX AND GRAVE
ờ			ờ	ə	ə˨˩	low-falling vowel				U+1EDD: LATIN SMALL LETTER O WITH HORN AND GRAVE
ù			ù	u	u˨˩	low-falling vowel				U+00F9: LATIN SMALL LETTER U WITH GRAVE
ừ			ừ	ɨ	ɨ˨˩	low-falling vowel				U+1EEB: LATIN SMALL LETTER U WITH HORN AND GRAVE
ỳ			ỳ	i	i˨˩	low-falling vowel				U+1EF3: LATIN SMALL LETTER Y WITH GRAVE
										
ả			ả	a˧˩	a˨˩˥	mid-falling vowel				U+1EA3: LATIN SMALL LETTER A WITH HOOK ABOVE
ẳ			ẳ	ă˧˩	ă˨˩˥	mid-falling vowel				U+1EB3: LATIN SMALL LETTER A WITH BREVE AND HOOK ABOVE
ẩ			ẩ	ə̆˧˩	ə̆˨˩˥	mid-falling vowel				U+1EA9: LATIN SMALL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE
ẻ			ẻ	ɛ˧˩	ɛ˨˩˥	mid-falling vowel				U+1EBB: LATIN SMALL LETTER E WITH HOOK ABOVE
ể			ể	e˧˩	e˨˩˥	mid-falling vowel				U+1EC3: LATIN SMALL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE
ỉ			ỉ	i˧˩	i˨˩˥	mid-falling vowel				U+1EC9: LATIN SMALL LETTER I WITH HOOK ABOVE
ỏ			ỏ	ɔ˧˩	ɔ˨˩˥	mid-falling vowel				U+1ECF: LATIN SMALL LETTER O WITH HOOK ABOVE
ổ			ổ	o˧˩	o˨˩˥	mid-falling vowel				U+1ED5: LATIN SMALL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE
ở			ở	ə˧˩	ə˨˩˥	mid-falling vowel				U+1EDF: LATIN SMALL LETTER O WITH HORN AND HOOK ABOVE
ủ			ủ	u˧˩	u˨˩˥	mid-falling vowel				U+1EE7: LATIN SMALL LETTER U WITH HOOK ABOVE
ử			ử	ɨ˧˩	ɨ˨˩˥	mid-falling vowel				U+1EED: LATIN SMALL LETTER U WITH HORN AND HOOK ABOVE
ỷ			ỷ	i˧˩	i˨˩˥	mid-falling vowel				U+1EF7: LATIN SMALL LETTER Y WITH HOOK ABOVE
										
ã			ã	a˧˥ˀ	a˨˩˥ 	glottalised-rising vowel				U+00E3: LATIN SMALL LETTER A WITH TILDE
ẵ			ẵ	ă˧˥ˀ	ă˨˩˥ 	glottalised-rising vowel				U+1EB5: LATIN SMALL LETTER A WITH BREVE AND TILDE
ẫ			ẫ	ə̆˧˥ˀ	ə̆˨˩˥ 	glottalised-rising vowel				U+1EAB: LATIN SMALL LETTER A WITH CIRCUMFLEX AND TILDE
ẽ			ẽ	ɛ˧˥ˀ	ɛ˨˩˥ 	glottalised-rising vowel				U+1EBD: LATIN SMALL LETTER E WITH TILDE
ễ			ễ	e˧˥ˀ	e˨˩˥ 	glottalised-rising vowel				U+1EC5: LATIN SMALL LETTER E WITH CIRCUMFLEX AND TILDE
ĩ			ĩ	i˧˥ˀ	i˨˩˥ 	glottalised-rising vowel				U+0129: LATIN SMALL LETTER I WITH TILDE
õ			õ	ɔ˧˥ˀ	ɔ˨˩˥ 	glottalised-rising vowel				U+00F5: LATIN SMALL LETTER O WITH TILDE
ỗ			ỗ	o˧˥ˀ	o˨˩˥ 	glottalised-rising vowel				U+1ED7: LATIN SMALL LETTER O WITH CIRCUMFLEX AND TILDE
ỡ			ỡ	ə˧˥ˀ	ə˨˩˥ 	glottalised-rising vowel				U+1EE1: LATIN SMALL LETTER O WITH HORN AND TILDE
ũ			ũ	u˧˥ˀ	u˨˩˥ 	glottalised-rising vowel				U+0169: LATIN SMALL LETTER U WITH TILDE
ữ			ữ	ɨ˧˥ˀ	ɨ˨˩˥ 	glottalised-rising vowel				U+1EEF: LATIN SMALL LETTER U WITH HORN AND TILDE
ỹ			ỹ	i˧˥ˀ	i˨˩˥ 	glottalised-rising vowel				U+1EF9: LATIN SMALL LETTER Y WITH TILDE
										
á			á	a˧˥	a˧˥	high-rising vowel				U+00E1: LATIN SMALL LETTER A WITH ACUTE
ắ			ắ	ă˧˥	ă˧˥	high-rising vowel				U+1EAF: LATIN SMALL LETTER A WITH BREVE AND ACUTE
ấ			ấ	ə̆˧˥	ə̆˧˥	high-rising vowel				U+1EA5: LATIN SMALL LETTER A WITH CIRCUMFLEX AND ACUTE
é			é	ɛ˧˥	ɛ˧˥	high-rising vowel				U+00E9: LATIN SMALL LETTER E WITH ACUTE
ế			ế	e˧˥	e˧˥	high-rising vowel				U+1EBF: LATIN SMALL LETTER E WITH CIRCUMFLEX AND ACUTE
í			í	i˧˥	i˧˥	high-rising vowel				U+00ED: LATIN SMALL LETTER I WITH ACUTE
ó			ó	ɔ˧˥	ɔ˧˥	high-rising vowel				U+00F3: LATIN SMALL LETTER O WITH ACUTE
ố			ố	o˧˥	o˧˥	high-rising vowel				U+1ED1: LATIN SMALL LETTER O WITH CIRCUMFLEX AND ACUTE
ớ			ớ	ə˧˥	ə˧˥	high-rising vowel				U+1EDB: LATIN SMALL LETTER O WITH HORN AND ACUTE
ú			ú	u˧˥	u˧˥	high-rising vowel				U+00FA: LATIN SMALL LETTER U WITH ACUTE
ứ			ứ	ɨ˧˥	ɨ˧˥	high-rising vowel				U+1EE9: LATIN SMALL LETTER U WITH HORN AND ACUTE
ý			ý	i˧˥	i˧˥	high-rising vowel				U+00FD: LATIN SMALL LETTER Y WITH ACUTE
										
ạ			ạ	a˧˨ˀ	a˩˧ 	glottalised-falling vowel				U+1EA1: LATIN SMALL LETTER A WITH DOT BELOW
ặ			ặ	ă˧˨ˀ	ă˩˧ 	glottalised-falling vowel				U+1EB7: LATIN SMALL LETTER A WITH BREVE AND DOT BELOW
ậ			ậ	ə̆˧˨ˀ	ə̆˩˧ 	glottalised-falling vowel				U+1EAD: LATIN SMALL LETTER A WITH CIRCUMFLEX AND DOT BELOW
ẹ			ẹ	ɛ˧˨ˀ	ɛ˩˧ 	glottalised-falling vowel				U+1EB9: LATIN SMALL LETTER E WITH DOT BELOW
ệ			ệ	e˧˨ˀ	e˩˧ 	glottalised-falling vowel				U+1EC7: LATIN SMALL LETTER E WITH CIRCUMFLEX AND DOT BELOW
ị			ị	i˧˨ˀ	i˩˧ 	glottalised-falling vowel				U+1ECB: LATIN SMALL LETTER I WITH DOT BELOW
ọ			ọ	ɔ˧˨ˀ	ɔ˩˧ 	glottalised-falling vowel				U+1ECD: LATIN SMALL LETTER O WITH DOT BELOW
ộ			ộ	o˧˨ˀ	o˩˧ 	glottalised-falling vowel				U+1ED9: LATIN SMALL LETTER O WITH CIRCUMFLEX AND DOT BELOW
ợ			ợ	ə˧˨ˀ	ə˩˧ 	glottalised-falling vowel				U+1EE3: LATIN SMALL LETTER O WITH HORN AND DOT BELOW
ụ			ụ	u˧˨ˀ	u˩˧ 	glottalised-falling vowel				U+1EE5: LATIN SMALL LETTER U WITH DOT BELOW
ự			ự	ɨ˧˨ˀ	ɨ˩˧ 	glottalised-falling vowel				U+1EF1: LATIN SMALL LETTER U WITH HORN AND DOT BELOW
ỵ			ỵ	i˧˨ˀ	i˩˧ 	glottalised-falling vowel				U+1EF5: LATIN SMALL LETTER Y WITH DOT BELOW
										
										
̛	c		̛			combining character	used only in decomposed text			U+031B: COMBINING HORN​
̂	c		̂			combining character	used only in decomposed text			U+0302: COMBINING CIRCUMFLEX ACCENT​
̆	c		̆			combining character	used only in decomposed text			U+0306: COMBINING BREVE​
										
										
										
̀		%	̀	˨˩	˨˩	low-falling tone mark			Huyền 	U+0300: COMBINING GRAVE ACCENT​
́		*	́	˧˥	˧˥	high-rising tone mark			Sắc 	U+0301: COMBINING ACUTE ACCENT​
̃		&	̃	˧˥ˀ		glottalised-rising tone mark			Ngã 	U+0303: COMBINING TILDE​
̉		^	̉	˧˩	˨˩˥ 	mid-falling/dipping tone mark			Hỏi 	U+0309: COMBINING HOOK ABOVE​
̣		(	̣	˧˨ˀ	˩˧ 	glottalised-falling/low-rising tone mark			Nặng 	U+0323: COMBINING DOT BELOW​
										
										
(		(	(			quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
)		)	)			quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
										
										
₫		@	₫			dong sign				U+20AB: DONG SIGN
										
										
										
										
										
B			B	b	b	plosive		ɓe˧, ɓəː˧˩	bê bờ	U+0042: LATIN CAPITAL LETTER B
P			P	-p	-p	final plosive		pe˧, pəː˧˩	pê pờ; bê phở (colloq.)	U+0050: LATIN CAPITAL LETTER P
T			T	t -t	t -k	plosive		te˧, təː˧˩	tê tờ	U+0054: LATIN CAPITAL LETTER T
Th	s		Th	tʰ	tʰ	plosive				U+0054 U+0068: LATIN CAPITAL LETTER T, SMALL LETTER H
C			C	k -k	k -k	plosive		se˧, kəː˧˩	xê cờ	U+0043: LATIN CAPITAL LETTER C
K			K	k	k	plosive				U+004B: LATIN CAPITAL LETTER K
Qu	s	Q	Qu	kʷ	kʷ	plosive		ku˧, kwi˧, kwəː˧˩	cu; quy quờ	U+0051 U+0075: LATIN CAPITAL LETTER Q, SMALL LETTER U
Ch	s		Ch	tɕ -ʲk	c -t	affricate				U+0043 U+0068: LATIN CAPITAL LETTER C, SMALL LETTER H
Tr			Tr	tɕ	ʈ	affricate/retroflex				U+0054 U+0072: LATIN CAPITAL LETTER T, SMALL LETTER R
Đ		D	Đ	ɗ	ɗ	implosive		ɗe˧, ɗəː˧˩	đê đờ	U+0110: LATIN CAPITAL LETTER D WITH STROKE
M			M	m -m	m -m	nasal		(ɛm˧)məː˧˩	em-mờ mờ	U+004D: LATIN CAPITAL LETTER M
N			N	n -n	n -ŋ	nasal		(ɛn˧)nəː˧˩	en-nờ nờ	U+004E: LATIN CAPITAL LETTER N
Ng	s		Ng	ŋ -ŋ	ŋ -ŋ	nasal				U+004E U+0067: LATIN CAPITAL LETTER N, SMALL LETTER G
Ngh	s		Ngh	ŋ	ŋ	nasal				U+004E U+0067 U+0068: LATIN CAPITAL LETTER N, SMALL LETTER G, SMALL LETTER H
Nh	s		Nh	ɲ -ʲŋ	ɲ -n	nasal				U+004E U+0068: LATIN CAPITAL LETTER N, SMALL LETTER H
Ph	s		Ph	f	f	fricative				U+0050 U+0068: LATIN CAPITAL LETTER P, SMALL LETTER H
V			V	v	j	fricative/glide		ve˧, vəː˧	vê vờ	U+0056: LATIN CAPITAL LETTER V
X			X	s	s	fricative		ik˦˥si˧˩, səː˧˩	ích xì; xờ nhẹ xờ	U+0058: LATIN CAPITAL LETTER X
D		D	D	z -j	z -j	fricative		ze˧, zəː˧˩	dê dờ	U+0044: LATIN CAPITAL LETTER D
Gi	s		Gi	z -j	z -j	fricative				U+0047 U+0069: LATIN CAPITAL LETTER G, SMALL LETTER I
G			G	ɣ	ɣ	fricative				U+0047: LATIN CAPITAL LETTER G
Gh	s		Gh	ɣ	ɣ	fricative		ze˧, ɣəː˧˩	giê gờ	U+0047 U+0068: LATIN CAPITAL LETTER G, SMALL LETTER H
H			H	h	h	fricative		hək˧˥, həː˧˩	hát hờ	U+0048: LATIN CAPITAL LETTER H
Kh	s		Kh	x	x	fricative		kaː˧	ca	U+004B U+0068: LATIN CAPITAL LETTER K, SMALL LETTER H
S			S	s	ʂ	fricative		ɛt˦˥si˧˩, ʂəː˧˩	ét-xì; xờ nặng sờ	U+0053: LATIN CAPITAL LETTER S
R			R	z	r	fricative/approximant		(ɛ˧)rəː˧˩	e-rờ rờ	U+0052: LATIN CAPITAL LETTER R
L			L	l	l	approximant		(ɛ˧)ləː˧˩	e-lờ lờ	U+004C: LATIN CAPITAL LETTER L
										
										
A		A	A	a˧	a˧	mid-tone vowel		aː˧	a	U+0041: LATIN CAPITAL LETTER A
Ă		A	Ă	ă˧	ă˧	mid-tone vowel		aː˧˥	á	U+0102: LATIN CAPITAL LETTER A WITH BREVE
Â		A	Â	ə̆˧	ə̆˧	mid-tone vowel		əː˧˥	ớ	U+00C2: LATIN CAPITAL LETTER A WITH CIRCUMFLEX
E		E	E	ɛ˧	ɛ˧	mid-tone vowel		ɛ˧	e	U+0045: LATIN CAPITAL LETTER E
Ê		E	Ê	e˧	e˧	mid-tone vowel		e˧	ê	U+00CA: LATIN CAPITAL LETTER E WITH CIRCUMFLEX
I		I	I	i˧	i˧	mid-tone vowel		i˧, i˧ ŋan˧˥	i; i ngắn	U+0049: LATIN CAPITAL LETTER I
O		O	O	ɔ˧	ɔ˧	mid-tone vowel		ɔ˧	o	U+004F: LATIN CAPITAL LETTER O
Ô		O	Ô	o˧	o˧	mid-tone vowel		o˧	ô	U+00D4: LATIN CAPITAL LETTER O WITH CIRCUMFLEX
Ơ		O	Ơ	ə˧	ə˧	mid-tone vowel		əː˧	ơ	U+01A0: LATIN CAPITAL LETTER O WITH HORN
U		U	U	u˧	u˧	mid-tone vowel		u˧	u	U+0055: LATIN CAPITAL LETTER U
Ư		U	Ư	ɨ˧	ɨ˧	mid-tone vowel		ɨ˧	ư	U+01AF: LATIN CAPITAL LETTER U WITH HORN
Y		Y	Y	i˧	i˧	mid-tone vowel		i˧zaːj˧˩, i˧kəː˧rɛt˦˥	i dài; i-cờ-rét	U+0059: LATIN CAPITAL LETTER Y
										
À			À	a	a˨˩	low-falling vowel				U+00C0: LATIN CAPITAL LETTER A WITH GRAVE
Ằ			Ằ	ă	ă˨˩	low-falling vowel				U+1EB0: LATIN CAPITAL LETTER A WITH BREVE AND GRAVE
Ầ			Ầ	ə̆	ə̆˨˩	low-falling vowel				U+1EA6: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND GRAVE
È			È	ɛ	ɛ˨˩	low-falling vowel				U+00C8: LATIN CAPITAL LETTER E WITH GRAVE
Ề			Ề	e	e˨˩	low-falling vowel				U+1EC0: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND GRAVE
Ì			Ì	i	i˨˩	low-falling vowel				U+00CC: LATIN CAPITAL LETTER I WITH GRAVE
Ò			Ò	ɔ	ɔ˨˩	low-falling vowel				U+00D2: LATIN CAPITAL LETTER O WITH GRAVE
Ồ			Ồ	o	o˨˩	low-falling vowel				U+1ED2: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND GRAVE
Ờ			Ờ	ə	ə˨˩	low-falling vowel				U+1EDC: LATIN CAPITAL LETTER O WITH HORN AND GRAVE
Ù			Ù	u	u˨˩	low-falling vowel				U+00D9: LATIN CAPITAL LETTER U WITH GRAVE
Ừ			Ừ	ɨ	ɨ˨˩	low-falling vowel				U+1EEA: LATIN CAPITAL LETTER U WITH HORN AND GRAVE
Ỳ			Ỳ	i	i˨˩	low-falling vowel				U+1EF2: LATIN CAPITAL LETTER Y WITH GRAVE
										
Ả			Ả	a˧˩	a˨˩˥	mid-falling vowel				U+1EA2: LATIN CAPITAL LETTER A WITH HOOK ABOVE
Ẳ			Ẳ	ă˧˩	ă˨˩˥	mid-falling vowel				U+1EB2: LATIN CAPITAL LETTER A WITH BREVE AND HOOK ABOVE
Ẩ			Ẩ	ə̆˧˩	ə̆˨˩˥	mid-falling vowel				U+1EA8: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE
Ẻ			Ẻ	ɛ˧˩	ɛ˨˩˥	mid-falling vowel				U+1EBA: LATIN CAPITAL LETTER E WITH HOOK ABOVE
Ể			Ể	e˧˩	e˨˩˥	mid-falling vowel				U+1EC2: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE
Ỉ			Ỉ	i˧˩	i˨˩˥	mid-falling vowel				U+1EC8: LATIN CAPITAL LETTER I WITH HOOK ABOVE
Ỏ			Ỏ	ɔ˧˩	ɔ˨˩˥	mid-falling vowel				U+1ECE: LATIN CAPITAL LETTER O WITH HOOK ABOVE
Ổ			Ổ	o˧˩	o˨˩˥	mid-falling vowel				U+1ED4: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE
Ở			Ở	ə˧˩	ə˨˩˥	mid-falling vowel				U+1EDE: LATIN CAPITAL LETTER O WITH HORN AND HOOK ABOVE
Ủ			Ủ	u˧˩	u˨˩˥	mid-falling vowel				U+1EE6: LATIN CAPITAL LETTER U WITH HOOK ABOVE
Ử			Ử	ɨ˧˩	ɨ˨˩˥	mid-falling vowel				U+1EEC: LATIN CAPITAL LETTER U WITH HORN AND HOOK ABOVE
Ỷ			Ỷ	i˧˩	i˨˩˥	mid-falling vowel				U+1EF6: LATIN CAPITAL LETTER Y WITH HOOK ABOVE
										
Ã			Ã	a˧˥ˀ	a˨˩˥ 	glottalised-rising vowel				U+00C3: LATIN CAPITAL LETTER A WITH TILDE
Ẵ			Ẵ	ă˧˥ˀ	ă˨˩˥ 	glottalised-rising vowel				U+1EB4: LATIN CAPITAL LETTER A WITH BREVE AND TILDE
Ẫ			Ẫ	ə̆˧˥ˀ	ə̆˨˩˥ 	glottalised-rising vowel				U+1EAA: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND TILDE
Ẽ			Ẽ	ɛ˧˥ˀ	ɛ˨˩˥ 	glottalised-rising vowel				U+1EBC: LATIN CAPITAL LETTER E WITH TILDE
Ễ			Ễ	e˧˥ˀ	e˨˩˥ 	glottalised-rising vowel				U+1EC4: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND TILDE
Ĩ			Ĩ	i˧˥ˀ	i˨˩˥ 	glottalised-rising vowel				U+0128: LATIN CAPITAL LETTER I WITH TILDE
Õ			Õ	ɔ˧˥ˀ	ɔ˨˩˥ 	glottalised-rising vowel				U+00D5: LATIN CAPITAL LETTER O WITH TILDE
Ỗ			Ỗ	o˧˥ˀ	o˨˩˥ 	glottalised-rising vowel				U+1ED6: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND TILDE
Ỡ			Ỡ	ə˧˥ˀ	ə˨˩˥ 	glottalised-rising vowel				U+1EE0: LATIN CAPITAL LETTER O WITH HORN AND TILDE
Ũ			Ũ	u˧˥ˀ	u˨˩˥ 	glottalised-rising vowel				U+0168: LATIN CAPITAL LETTER U WITH TILDE
Ữ			Ữ	ɨ˧˥ˀ	ɨ˨˩˥ 	glottalised-rising vowel				U+1EEE: LATIN CAPITAL LETTER U WITH HORN AND TILDE
Ỹ			Ỹ	i˧˥ˀ	i˨˩˥ 	glottalised-rising vowel				U+1EF8: LATIN CAPITAL LETTER Y WITH TILDE
										
Á			Á	a˧˥	a˧˥	high-rising vowel				U+00C1: LATIN CAPITAL LETTER A WITH ACUTE
Ắ			Ắ	ă˧˥	ă˧˥	high-rising vowel				U+1EAE: LATIN CAPITAL LETTER A WITH BREVE AND ACUTE
Ấ			Ấ	ə̆˧˥	ə̆˧˥	high-rising vowel				U+1EA4: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND ACUTE
É			É	ɛ˧˥	ɛ˧˥	high-rising vowel				U+00C9: LATIN CAPITAL LETTER E WITH ACUTE
Ế			Ế	e˧˥	e˧˥	high-rising vowel				U+1EBE: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND ACUTE
Í			Í	i˧˥	i˧˥	high-rising vowel				U+00CD: LATIN CAPITAL LETTER I WITH ACUTE
Ó			Ó	ɔ˧˥	ɔ˧˥	high-rising vowel				U+00D3: LATIN CAPITAL LETTER O WITH ACUTE
Ố			Ố	o˧˥	o˧˥	high-rising vowel				U+1ED0: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND ACUTE
Ớ			Ớ	ə˧˥	ə˧˥	high-rising vowel				U+1EDA: LATIN CAPITAL LETTER O WITH HORN AND ACUTE
Ú			Ú	u˧˥	u˧˥	high-rising vowel				U+00DA: LATIN CAPITAL LETTER U WITH ACUTE
Ứ			Ứ	ɨ˧˥	ɨ˧˥	high-rising vowel				U+1EE8: LATIN CAPITAL LETTER U WITH HORN AND ACUTE
Ý			Ý	i˧˥	i˧˥	high-rising vowel				U+00DD: LATIN CAPITAL LETTER Y WITH ACUTE
										
Ạ			Ạ	a˧˨ˀ	a˩˧ 	glottalised-falling vowel				U+1EA0: LATIN CAPITAL LETTER A WITH DOT BELOW
Ặ			Ặ	ă˧˨ˀ	ă˩˧ 	glottalised-falling vowel				U+1EB6: LATIN CAPITAL LETTER A WITH BREVE AND DOT BELOW
Ậ			Ậ	ə̆˧˨ˀ	ə̆˩˧ 	glottalised-falling vowel				U+1EAC: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND DOT BELOW
Ẹ			Ẹ	ɛ˧˨ˀ	ɛ˩˧ 	glottalised-falling vowel				U+1EB8: LATIN CAPITAL LETTER E WITH DOT BELOW
Ệ			Ệ	e˧˨ˀ	e˩˧ 	glottalised-falling vowel				U+1EC6: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND DOT BELOW
Ị			Ị	i˧˨ˀ	i˩˧ 	glottalised-falling vowel				U+1ECA: LATIN CAPITAL LETTER I WITH DOT BELOW
Ọ			Ọ	ɔ˧˨ˀ	ɔ˩˧ 	glottalised-falling vowel				U+1ECC: LATIN CAPITAL LETTER O WITH DOT BELOW
Ộ			Ộ	o˧˨ˀ	o˩˧ 	glottalised-falling vowel				U+1ED8: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND DOT BELOW
Ợ			Ợ	ə˧˨ˀ	ə˩˧ 	glottalised-falling vowel				U+1EE2: LATIN CAPITAL LETTER O WITH HORN AND DOT BELOW
Ụ			Ụ	u˧˨ˀ	u˩˧ 	glottalised-falling vowel				U+1EE4: LATIN CAPITAL LETTER U WITH DOT BELOW
Ự			Ự	ɨ˧˨ˀ	ɨ˩˧ 	glottalised-falling vowel				U+1EF0: LATIN CAPITAL LETTER U WITH HORN AND DOT BELOW
Ỵ			Ỵ	i˧˨ˀ	i˩˧ 	glottalised-falling vowel				U+1EF4: LATIN CAPITAL LETTER Y WITH DOT BELOW


`



var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"transckey": 0,
"transcription":0,
"ipaLoc": 4,
"typeLoc": 6,
"statusLoc": 7,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"nameLoc": 8,
"nnameLoc": 9,
"numLoc": 0,
"ucsName": 10,

//"othertranscriptions": [[4, 'ISO 15919']]
}

