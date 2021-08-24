var spreadsheet = `
b		b	b			b	b	plosive		bê bờ	ɓe˧, ɓəː˧˩	U+0062: LATIN SMALL LETTER B	
p		-p	-p			p	p	final plosive		pê pờ; bê phở (colloq.)	pe˧, pəː˧˩	U+0070: LATIN SMALL LETTER P	
t		t -k	t -t			t	t	plosive		tê tờ	te˧, təː˧˩	U+0074: LATIN SMALL LETTER T	
th	s	tʰ	tʰ	tʰ		th		plosive				U+0074 U+0068: LATIN SMALL LETTER T, SMALL LETTER H	
c		k -k	k -k			c	c	plosive		xê cờ	se˧, kəː˧˩	U+0063: LATIN SMALL LETTER C	
k		k	k			k	k	plosive				U+006B: LATIN SMALL LETTER K	
qu	s	kʷ	kʷ	kʷ	q	qu		plosive		cu; quy quờ	ku˧, kwi˧, kwəː˧˩	U+0071 U+0075: LATIN SMALL LETTER Q, SMALL LETTER U	
ch	s	c -t	tɕ -ʲk	tɕ ʲk		ch		affricate				U+0063 U+0068: LATIN SMALL LETTER C, SMALL LETTER H	
tr	s	ʈ	tɕ			tr		affricate/retroflex				U+0074 U+0072: LATIN SMALL LETTER T, SMALL LETTER R	
đ		ɗ	ɗ	ɗ	d	đ	d	implosive		đê đờ	ɗe˧, ɗəː˧˩	U+0111: LATIN SMALL LETTER D WITH STROKE	latin
m		m -m	m -m			m	m	nasal		em-mờ mờ	(ɛm˧)məː˧˩	U+006D: LATIN SMALL LETTER M	
n		n -ŋ	n -n	ŋ		n	n	nasal		en-nờ nờ	(ɛn˧)nəː˧˩	U+006E: LATIN SMALL LETTER N	
ng	s	ŋ -ŋ	ŋ -ŋ			ng		nasal				U+006E U+0067: LATIN SMALL LETTER N, SMALL LETTER G	
ngh	s	ŋ	ŋ			ngh		nasal				U+006E U+0067 U+0068: LATIN SMALL LETTER N, SMALL LETTER G, SMALL LETTER H	
nh	s	ɲ -n	ɲ -ʲŋ	ʲŋ		nh		nasal				U+006E U+0068: LATIN SMALL LETTER N, SMALL LETTER H	
ph	s	f	f			ph		fricative				U+0070 U+0068: LATIN SMALL LETTER P, SMALL LETTER H	
v		j	v			v	v	fricative/glide		vê vờ	ve˧, vəː˧	U+0076: LATIN SMALL LETTER V	
x		s	s			x	x	fricative		ích xì; xờ nhẹ xờ	ik˦˥si˧˩, səː˧˩	U+0078: LATIN SMALL LETTER X	
d		z -j	z -j		d	d	d	fricative		dê dờ	ze˧, zəː˧˩	U+0064: LATIN SMALL LETTER D	
gi	s	z -j	z -j			gi		fricative				U+0067 U+0069: LATIN SMALL LETTER G, SMALL LETTER I	
g		ɣ	ɣ	ɣ		g	g	fricative				U+0067: LATIN SMALL LETTER G	
gh	s	ɣ	ɣ			gh		fricative		giê gờ	ze˧, ɣəː˧˩	U+0067 U+0068: LATIN SMALL LETTER G, SMALL LETTER H	
h		h	h			h	h	fricative		hát hờ	hək˧˥, həː˧˩	U+0068: LATIN SMALL LETTER H	
kh	s	x	x			kh		fricative		ca	kaː˧	U+006B U+0068: LATIN SMALL LETTER K, SMALL LETTER H	
s		ʂ	s	ʂ		s	s	fricative		ét-xì; xờ nặng sờ	ɛt˦˥si˧˩, ʂəː˧˩	U+0073: LATIN SMALL LETTER S	
r		r	z			r	r	fricative/approximant		e-rờ rờ	(ɛ˧)rəː˧˩	U+0072: LATIN SMALL LETTER R	
l		l	l			l	l	approximant		e-lờ lờ	(ɛ˧)ləː˧˩	U+006C: LATIN SMALL LETTER L	
													
													
a		a˧	a˧		a	a	a	mid-tone vowel		a	aː˧	U+0061: LATIN SMALL LETTER A	
ă		ă˧	ă˧	ă	a	ă	a	mid-tone vowel		á	aː˧˥	U+0103: LATIN SMALL LETTER A WITH BREVE	latin
â		ə̆˧	ə̆˧	ə̆	a	â	a	mid-tone vowel		ớ	əː˧˥	U+00E2: LATIN SMALL LETTER A WITH CIRCUMFLEX	latin
e		ɛ˧	ɛ˧	ɛ	e	e	e	mid-tone vowel		e	ɛ˧	U+0065: LATIN SMALL LETTER E	
ê		e˧	e˧		e	ê	e	mid-tone vowel		ê	e˧	U+00EA: LATIN SMALL LETTER E WITH CIRCUMFLEX	latin
i		i˧	i˧		i	i	i	mid-tone vowel		i; i ngắn	i˧, i˧ ŋan˧˥	U+0069: LATIN SMALL LETTER I	
o		ɔ˧	ɔ˧	ɔ	o	o	o	mid-tone vowel		o	ɔ˧	U+006F: LATIN SMALL LETTER O	
ô		o˧	o˧		o	ô	o	mid-tone vowel		ô	o˧	U+00F4: LATIN SMALL LETTER O WITH CIRCUMFLEX	latin
ơ		ə˧	ə˧	ə	o	ơ	o	mid-tone vowel		ơ	əː˧	U+01A1: LATIN SMALL LETTER O WITH HORN	latin
u		u˧	u˧		u	u	u	mid-tone vowel		u	u˧	U+0075: LATIN SMALL LETTER U	
ư		ɨ˧	ɨ˧	ɨ	u	ư	u	mid-tone vowel		ư	ɨ˧	U+01B0: LATIN SMALL LETTER U WITH HORN	latin
y		i˧	i˧		y	y	y	mid-tone vowel		i dài; i-cờ-rét	i˧zaːj˧˩, i˧kəː˧rɛt˦˥	U+0079: LATIN SMALL LETTER Y	
													
à		a˨˩	a			à		low-falling vowel				U+00E0: LATIN SMALL LETTER A WITH GRAVE	latin
ằ		ă˨˩	ă			ằ		low-falling vowel				U+1EB1: LATIN SMALL LETTER A WITH BREVE AND GRAVE	latin
ầ		ə̆˨˩	ə̆			ầ		low-falling vowel				U+1EA7: LATIN SMALL LETTER A WITH CIRCUMFLEX AND GRAVE	latin
è		ɛ˨˩	ɛ			è		low-falling vowel				U+00E8: LATIN SMALL LETTER E WITH GRAVE	latin
ề		e˨˩	e			ề		low-falling vowel				U+1EC1: LATIN SMALL LETTER E WITH CIRCUMFLEX AND GRAVE	latin
ì		i˨˩	i			ì		low-falling vowel				U+00EC: LATIN SMALL LETTER I WITH GRAVE	latin
ò		ɔ˨˩	ɔ			ò		low-falling vowel				U+00F2: LATIN SMALL LETTER O WITH GRAVE	latin
ồ		o˨˩	o			ồ		low-falling vowel				U+1ED3: LATIN SMALL LETTER O WITH CIRCUMFLEX AND GRAVE	latin
ờ		ə˨˩	ə			ờ		low-falling vowel				U+1EDD: LATIN SMALL LETTER O WITH HORN AND GRAVE	latin
ù		u˨˩	u			ù		low-falling vowel				U+00F9: LATIN SMALL LETTER U WITH GRAVE	latin
ừ		ɨ˨˩	ɨ			ừ		low-falling vowel				U+1EEB: LATIN SMALL LETTER U WITH HORN AND GRAVE	latin
ỳ		i˨˩	i			ỳ		low-falling vowel				U+1EF3: LATIN SMALL LETTER Y WITH GRAVE	latin
													
ả		a˨˩˥	a˧˩			ả		mid-falling vowel				U+1EA3: LATIN SMALL LETTER A WITH HOOK ABOVE	latin
ẳ		ă˨˩˥	ă˧˩			ẳ		mid-falling vowel				U+1EB3: LATIN SMALL LETTER A WITH BREVE AND HOOK ABOVE	latin
ẩ		ə̆˨˩˥	ə̆˧˩			ẩ		mid-falling vowel				U+1EA9: LATIN SMALL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE	latin
ẻ		ɛ˨˩˥	ɛ˧˩			ẻ		mid-falling vowel				U+1EBB: LATIN SMALL LETTER E WITH HOOK ABOVE	latin
ể		e˨˩˥	e˧˩			ể		mid-falling vowel				U+1EC3: LATIN SMALL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE	latin
ỉ		i˨˩˥	i˧˩			ỉ		mid-falling vowel				U+1EC9: LATIN SMALL LETTER I WITH HOOK ABOVE	latin
ỏ		ɔ˨˩˥	ɔ˧˩			ỏ		mid-falling vowel				U+1ECF: LATIN SMALL LETTER O WITH HOOK ABOVE	latin
ổ		o˨˩˥	o˧˩			ổ		mid-falling vowel				U+1ED5: LATIN SMALL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE	latin
ở		ə˨˩˥	ə˧˩			ở		mid-falling vowel				U+1EDF: LATIN SMALL LETTER O WITH HORN AND HOOK ABOVE	latin
ủ		u˨˩˥	u˧˩			ủ		mid-falling vowel				U+1EE7: LATIN SMALL LETTER U WITH HOOK ABOVE	latin
ử		ɨ˨˩˥	ɨ˧˩			ử		mid-falling vowel				U+1EED: LATIN SMALL LETTER U WITH HORN AND HOOK ABOVE	latin
ỷ		i˨˩˥	i˧˩			ỷ		mid-falling vowel				U+1EF7: LATIN SMALL LETTER Y WITH HOOK ABOVE	latin
													
ã		a˨˩˥ 	a˧˥ˀ			ã		glottalised-rising vowel				U+00E3: LATIN SMALL LETTER A WITH TILDE	latin
ẵ		ă˨˩˥ 	ă˧˥ˀ			ẵ		glottalised-rising vowel				U+1EB5: LATIN SMALL LETTER A WITH BREVE AND TILDE	latin
ẫ		ə̆˨˩˥ 	ə̆˧˥ˀ			ẫ		glottalised-rising vowel				U+1EAB: LATIN SMALL LETTER A WITH CIRCUMFLEX AND TILDE	latin
ẽ		ɛ˨˩˥ 	ɛ˧˥ˀ			ẽ		glottalised-rising vowel				U+1EBD: LATIN SMALL LETTER E WITH TILDE	latin
ễ		e˨˩˥ 	e˧˥ˀ			ễ		glottalised-rising vowel				U+1EC5: LATIN SMALL LETTER E WITH CIRCUMFLEX AND TILDE	latin
ĩ		i˨˩˥ 	i˧˥ˀ			ĩ		glottalised-rising vowel				U+0129: LATIN SMALL LETTER I WITH TILDE	latin
õ		ɔ˨˩˥ 	ɔ˧˥ˀ			õ		glottalised-rising vowel				U+00F5: LATIN SMALL LETTER O WITH TILDE	latin
ỗ		o˨˩˥ 	o˧˥ˀ			ỗ		glottalised-rising vowel				U+1ED7: LATIN SMALL LETTER O WITH CIRCUMFLEX AND TILDE	latin
ỡ		ə˨˩˥ 	ə˧˥ˀ			ỡ		glottalised-rising vowel				U+1EE1: LATIN SMALL LETTER O WITH HORN AND TILDE	latin
ũ		u˨˩˥ 	u˧˥ˀ			ũ		glottalised-rising vowel				U+0169: LATIN SMALL LETTER U WITH TILDE	latin
ữ		ɨ˨˩˥ 	ɨ˧˥ˀ			ữ		glottalised-rising vowel				U+1EEF: LATIN SMALL LETTER U WITH HORN AND TILDE	latin
ỹ		i˨˩˥ 	i˧˥ˀ			ỹ		glottalised-rising vowel				U+1EF9: LATIN SMALL LETTER Y WITH TILDE	latin
													
á		a˧˥	a˧˥			á		high-rising vowel				U+00E1: LATIN SMALL LETTER A WITH ACUTE	latin
ắ		ă˧˥	ă˧˥			ắ		high-rising vowel				U+1EAF: LATIN SMALL LETTER A WITH BREVE AND ACUTE	latin
ấ		ə̆˧˥	ə̆˧˥			ấ		high-rising vowel				U+1EA5: LATIN SMALL LETTER A WITH CIRCUMFLEX AND ACUTE	latin
é		ɛ˧˥	ɛ˧˥			é		high-rising vowel				U+00E9: LATIN SMALL LETTER E WITH ACUTE	latin
ế		e˧˥	e˧˥			ế		high-rising vowel				U+1EBF: LATIN SMALL LETTER E WITH CIRCUMFLEX AND ACUTE	latin
í		i˧˥	i˧˥			í		high-rising vowel				U+00ED: LATIN SMALL LETTER I WITH ACUTE	latin
ó		ɔ˧˥	ɔ˧˥			ó		high-rising vowel				U+00F3: LATIN SMALL LETTER O WITH ACUTE	latin
ố		o˧˥	o˧˥			ố		high-rising vowel				U+1ED1: LATIN SMALL LETTER O WITH CIRCUMFLEX AND ACUTE	latin
ớ		ə˧˥	ə˧˥			ớ		high-rising vowel				U+1EDB: LATIN SMALL LETTER O WITH HORN AND ACUTE	latin
ú		u˧˥	u˧˥			ú		high-rising vowel				U+00FA: LATIN SMALL LETTER U WITH ACUTE	latin
ứ		ɨ˧˥	ɨ˧˥			ứ		high-rising vowel				U+1EE9: LATIN SMALL LETTER U WITH HORN AND ACUTE	latin
ý		i˧˥	i˧˥			ý		high-rising vowel				U+00FD: LATIN SMALL LETTER Y WITH ACUTE	latin
													
ạ		a˩˧ 	a˧˨ˀ			ạ		glottalised-falling vowel				U+1EA1: LATIN SMALL LETTER A WITH DOT BELOW	latin
ặ		ă˩˧ 	ă˧˨ˀ			ặ		glottalised-falling vowel				U+1EB7: LATIN SMALL LETTER A WITH BREVE AND DOT BELOW	latin
ậ		ə̆˩˧ 	ə̆˧˨ˀ			ậ		glottalised-falling vowel				U+1EAD: LATIN SMALL LETTER A WITH CIRCUMFLEX AND DOT BELOW	latin
ẹ		ɛ˩˧ 	ɛ˧˨ˀ			ẹ		glottalised-falling vowel				U+1EB9: LATIN SMALL LETTER E WITH DOT BELOW	latin
ệ		e˩˧ 	e˧˨ˀ			ệ		glottalised-falling vowel				U+1EC7: LATIN SMALL LETTER E WITH CIRCUMFLEX AND DOT BELOW	latin
ị		i˩˧ 	i˧˨ˀ			ị		glottalised-falling vowel				U+1ECB: LATIN SMALL LETTER I WITH DOT BELOW	latin
ọ		ɔ˩˧ 	ɔ˧˨ˀ			ọ		glottalised-falling vowel				U+1ECD: LATIN SMALL LETTER O WITH DOT BELOW	latin
ộ		o˩˧ 	o˧˨ˀ			ộ		glottalised-falling vowel				U+1ED9: LATIN SMALL LETTER O WITH CIRCUMFLEX AND DOT BELOW	latin
ợ		ə˩˧ 	ə˧˨ˀ			ợ		glottalised-falling vowel				U+1EE3: LATIN SMALL LETTER O WITH HORN AND DOT BELOW	latin
ụ		u˩˧ 	u˧˨ˀ			ụ		glottalised-falling vowel				U+1EE5: LATIN SMALL LETTER U WITH DOT BELOW	latin
ự		ɨ˩˧ 	ɨ˧˨ˀ			ự		glottalised-falling vowel				U+1EF1: LATIN SMALL LETTER U WITH HORN AND DOT BELOW	latin
ỵ		i˩˧ 	i˧˨ˀ			ỵ		glottalised-falling vowel				U+1EF5: LATIN SMALL LETTER Y WITH DOT BELOW	latin
													
													
̛	c					̛		combining character	used only in decomposed text			U+031B: COMBINING HORN​	latin
̂	c					̂		combining character	used only in decomposed text			U+0302: COMBINING CIRCUMFLEX ACCENT​	latin
̆	c					̆		combining character	used only in decomposed text			U+0306: COMBINING BREVE​	latin
													
													
													
̀		˨˩	˨˩	˨˩	%	̀	5	low-falling tone mark		Huyền 		U+0300: COMBINING GRAVE ACCENT​	
́		˧˥	˧˥	˧˥	*	́	8	high-rising tone mark		Sắc 		U+0301: COMBINING ACUTE ACCENT​	
̃			˧˥ˀ	˧˥ˀ	&	̃	7	glottalised-rising tone mark		Ngã 		U+0303: COMBINING TILDE​	
̉		˨˩˥ 	˧˩	˨˩˥  ˧˩	^	̉	6	mid-falling/dipping tone mark		Hỏi 		U+0309: COMBINING HOOK ABOVE​	
̣		˩˧ 	˧˨ˀ	˩˧  ˧˨ˀ	(	̣	9	glottalised-falling/low-rising tone mark		Nặng 		U+0323: COMBINING DOT BELOW​	
													
													
(					(	(		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
)					)	)		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
													
													
₫					@	₫	2	dong sign				U+20AB: DONG SIGN	currency
													
													
													
													
													
B		b	b			B	B	plosive		bê bờ	ɓe˧, ɓəː˧˩	U+0042: LATIN CAPITAL LETTER B	
P		-p	-p			P	P	final plosive		pê pờ; bê phở (colloq.)	pe˧, pəː˧˩	U+0050: LATIN CAPITAL LETTER P	
T		t -k	t -t			T	T	plosive		tê tờ	te˧, təː˧˩	U+0054: LATIN CAPITAL LETTER T	
Th	s	tʰ	tʰ			Th		plosive				U+0054 U+0068: LATIN CAPITAL LETTER T, SMALL LETTER H	
C		k -k	k -k			C	C	plosive		xê cờ	se˧, kəː˧˩	U+0043: LATIN CAPITAL LETTER C	
K		k	k			K	K	plosive				U+004B: LATIN CAPITAL LETTER K	
Qu	s	kʷ	kʷ		Q	Qu		plosive		cu; quy quờ	ku˧, kwi˧, kwəː˧˩	U+0051 U+0075: LATIN CAPITAL LETTER Q, SMALL LETTER U	
Ch	s	c -t	tɕ -ʲk			Ch		affricate				U+0043 U+0068: LATIN CAPITAL LETTER C, SMALL LETTER H	
Tr	s	ʈ	tɕ			Tr		affricate/retroflex				U+0054 U+0072: LATIN CAPITAL LETTER T, SMALL LETTER R	
Đ		ɗ	ɗ		D	Đ	D	implosive		đê đờ	ɗe˧, ɗəː˧˩	U+0110: LATIN CAPITAL LETTER D WITH STROKE	latin
M		m -m	m -m			M	M	nasal		em-mờ mờ	(ɛm˧)məː˧˩	U+004D: LATIN CAPITAL LETTER M	
N		n -ŋ	n -n			N	N	nasal		en-nờ nờ	(ɛn˧)nəː˧˩	U+004E: LATIN CAPITAL LETTER N	
Ng	s	ŋ -ŋ	ŋ -ŋ			Ng		nasal				U+004E U+0067: LATIN CAPITAL LETTER N, SMALL LETTER G	
Ngh	s	ŋ	ŋ			Ngh		nasal				U+004E U+0067 U+0068: LATIN CAPITAL LETTER N, SMALL LETTER G, SMALL LETTER H	
Nh	s	ɲ -n	ɲ -ʲŋ			Nh		nasal				U+004E U+0068: LATIN CAPITAL LETTER N, SMALL LETTER H	
Ph	s	f	f			Ph		fricative				U+0050 U+0068: LATIN CAPITAL LETTER P, SMALL LETTER H	
V		j	v			V	V	fricative/glide		vê vờ	ve˧, vəː˧	U+0056: LATIN CAPITAL LETTER V	
X		s	s			X	X	fricative		ích xì; xờ nhẹ xờ	ik˦˥si˧˩, səː˧˩	U+0058: LATIN CAPITAL LETTER X	
D		z -j	z -j		D	D	D	fricative		dê dờ	ze˧, zəː˧˩	U+0044: LATIN CAPITAL LETTER D	
Gi	s	z -j	z -j			Gi		fricative				U+0047 U+0069: LATIN CAPITAL LETTER G, SMALL LETTER I	
G		ɣ	ɣ			G	G	fricative				U+0047: LATIN CAPITAL LETTER G	
Gh	s	ɣ	ɣ			Gh		fricative		giê gờ	ze˧, ɣəː˧˩	U+0047 U+0068: LATIN CAPITAL LETTER G, SMALL LETTER H	
H		h	h			H	H	fricative		hát hờ	hək˧˥, həː˧˩	U+0048: LATIN CAPITAL LETTER H	
Kh	s	x	x			Kh		fricative		ca	kaː˧	U+004B U+0068: LATIN CAPITAL LETTER K, SMALL LETTER H	
S		ʂ	s			S	S	fricative		ét-xì; xờ nặng sờ	ɛt˦˥si˧˩, ʂəː˧˩	U+0053: LATIN CAPITAL LETTER S	
R		r	z			R	R	fricative/approximant		e-rờ rờ	(ɛ˧)rəː˧˩	U+0052: LATIN CAPITAL LETTER R	
L		l	l			L	L	approximant		e-lờ lờ	(ɛ˧)ləː˧˩	U+004C: LATIN CAPITAL LETTER L	
													
													
A		a˧	a˧		A	A	A	mid-tone vowel		a	aː˧	U+0041: LATIN CAPITAL LETTER A	
Ă		ă˧	ă˧		A	Ă	A	mid-tone vowel		á	aː˧˥	U+0102: LATIN CAPITAL LETTER A WITH BREVE	latin
Â		ə̆˧	ə̆˧		A	Â	A	mid-tone vowel		ớ	əː˧˥	U+00C2: LATIN CAPITAL LETTER A WITH CIRCUMFLEX	latin
E		ɛ˧	ɛ˧		E	E	E	mid-tone vowel		e	ɛ˧	U+0045: LATIN CAPITAL LETTER E	
Ê		e˧	e˧		E	Ê	E	mid-tone vowel		ê	e˧	U+00CA: LATIN CAPITAL LETTER E WITH CIRCUMFLEX	latin
I		i˧	i˧		I	I	I	mid-tone vowel		i; i ngắn	i˧, i˧ ŋan˧˥	U+0049: LATIN CAPITAL LETTER I	
O		ɔ˧	ɔ˧		O	O	O	mid-tone vowel		o	ɔ˧	U+004F: LATIN CAPITAL LETTER O	
Ô		o˧	o˧		O	Ô	O	mid-tone vowel		ô	o˧	U+00D4: LATIN CAPITAL LETTER O WITH CIRCUMFLEX	latin
Ơ		ə˧	ə˧		O	Ơ	O	mid-tone vowel		ơ	əː˧	U+01A0: LATIN CAPITAL LETTER O WITH HORN	latin
U		u˧	u˧		U	U	U	mid-tone vowel		u	u˧	U+0055: LATIN CAPITAL LETTER U	
Ư		ɨ˧	ɨ˧		U	Ư	U	mid-tone vowel		ư	ɨ˧	U+01AF: LATIN CAPITAL LETTER U WITH HORN	latin
Y		i˧	i˧		Y	Y	Y	mid-tone vowel		i dài; i-cờ-rét	i˧zaːj˧˩, i˧kəː˧rɛt˦˥	U+0059: LATIN CAPITAL LETTER Y	
													
À		a˨˩	a			À		low-falling vowel				U+00C0: LATIN CAPITAL LETTER A WITH GRAVE	latin
Ằ		ă˨˩	ă			Ằ		low-falling vowel				U+1EB0: LATIN CAPITAL LETTER A WITH BREVE AND GRAVE	latin
Ầ		ə̆˨˩	ə̆			Ầ		low-falling vowel				U+1EA6: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND GRAVE	latin
È		ɛ˨˩	ɛ			È		low-falling vowel				U+00C8: LATIN CAPITAL LETTER E WITH GRAVE	latin
Ề		e˨˩	e			Ề		low-falling vowel				U+1EC0: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND GRAVE	latin
Ì		i˨˩	i			Ì		low-falling vowel				U+00CC: LATIN CAPITAL LETTER I WITH GRAVE	latin
Ò		ɔ˨˩	ɔ			Ò		low-falling vowel				U+00D2: LATIN CAPITAL LETTER O WITH GRAVE	latin
Ồ		o˨˩	o			Ồ		low-falling vowel				U+1ED2: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND GRAVE	latin
Ờ		ə˨˩	ə			Ờ		low-falling vowel				U+1EDC: LATIN CAPITAL LETTER O WITH HORN AND GRAVE	latin
Ù		u˨˩	u			Ù		low-falling vowel				U+00D9: LATIN CAPITAL LETTER U WITH GRAVE	latin
Ừ		ɨ˨˩	ɨ			Ừ		low-falling vowel				U+1EEA: LATIN CAPITAL LETTER U WITH HORN AND GRAVE	latin
Ỳ		i˨˩	i			Ỳ		low-falling vowel				U+1EF2: LATIN CAPITAL LETTER Y WITH GRAVE	latin
													
Ả		a˨˩˥	a˧˩			Ả		mid-falling vowel				U+1EA2: LATIN CAPITAL LETTER A WITH HOOK ABOVE	latin
Ẳ		ă˨˩˥	ă˧˩			Ẳ		mid-falling vowel				U+1EB2: LATIN CAPITAL LETTER A WITH BREVE AND HOOK ABOVE	latin
Ẩ		ə̆˨˩˥	ə̆˧˩			Ẩ		mid-falling vowel				U+1EA8: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE	latin
Ẻ		ɛ˨˩˥	ɛ˧˩			Ẻ		mid-falling vowel				U+1EBA: LATIN CAPITAL LETTER E WITH HOOK ABOVE	latin
Ể		e˨˩˥	e˧˩			Ể		mid-falling vowel				U+1EC2: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE	latin
Ỉ		i˨˩˥	i˧˩			Ỉ		mid-falling vowel				U+1EC8: LATIN CAPITAL LETTER I WITH HOOK ABOVE	latin
Ỏ		ɔ˨˩˥	ɔ˧˩			Ỏ		mid-falling vowel				U+1ECE: LATIN CAPITAL LETTER O WITH HOOK ABOVE	latin
Ổ		o˨˩˥	o˧˩			Ổ		mid-falling vowel				U+1ED4: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE	latin
Ở		ə˨˩˥	ə˧˩			Ở		mid-falling vowel				U+1EDE: LATIN CAPITAL LETTER O WITH HORN AND HOOK ABOVE	latin
Ủ		u˨˩˥	u˧˩			Ủ		mid-falling vowel				U+1EE6: LATIN CAPITAL LETTER U WITH HOOK ABOVE	latin
Ử		ɨ˨˩˥	ɨ˧˩			Ử		mid-falling vowel				U+1EEC: LATIN CAPITAL LETTER U WITH HORN AND HOOK ABOVE	latin
Ỷ		i˨˩˥	i˧˩			Ỷ		mid-falling vowel				U+1EF6: LATIN CAPITAL LETTER Y WITH HOOK ABOVE	latin
													
Ã		a˨˩˥ 	a˧˥ˀ			Ã		glottalised-rising vowel				U+00C3: LATIN CAPITAL LETTER A WITH TILDE	latin
Ẵ		ă˨˩˥ 	ă˧˥ˀ			Ẵ		glottalised-rising vowel				U+1EB4: LATIN CAPITAL LETTER A WITH BREVE AND TILDE	latin
Ẫ		ə̆˨˩˥ 	ə̆˧˥ˀ			Ẫ		glottalised-rising vowel				U+1EAA: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND TILDE	latin
Ẽ		ɛ˨˩˥ 	ɛ˧˥ˀ			Ẽ		glottalised-rising vowel				U+1EBC: LATIN CAPITAL LETTER E WITH TILDE	latin
Ễ		e˨˩˥ 	e˧˥ˀ			Ễ		glottalised-rising vowel				U+1EC4: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND TILDE	latin
Ĩ		i˨˩˥ 	i˧˥ˀ			Ĩ		glottalised-rising vowel				U+0128: LATIN CAPITAL LETTER I WITH TILDE	latin
Õ		ɔ˨˩˥ 	ɔ˧˥ˀ			Õ		glottalised-rising vowel				U+00D5: LATIN CAPITAL LETTER O WITH TILDE	latin
Ỗ		o˨˩˥ 	o˧˥ˀ			Ỗ		glottalised-rising vowel				U+1ED6: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND TILDE	latin
Ỡ		ə˨˩˥ 	ə˧˥ˀ			Ỡ		glottalised-rising vowel				U+1EE0: LATIN CAPITAL LETTER O WITH HORN AND TILDE	latin
Ũ		u˨˩˥ 	u˧˥ˀ			Ũ		glottalised-rising vowel				U+0168: LATIN CAPITAL LETTER U WITH TILDE	latin
Ữ		ɨ˨˩˥ 	ɨ˧˥ˀ			Ữ		glottalised-rising vowel				U+1EEE: LATIN CAPITAL LETTER U WITH HORN AND TILDE	latin
Ỹ		i˨˩˥ 	i˧˥ˀ			Ỹ		glottalised-rising vowel				U+1EF8: LATIN CAPITAL LETTER Y WITH TILDE	latin
													
Á		a˧˥	a˧˥			Á		high-rising vowel				U+00C1: LATIN CAPITAL LETTER A WITH ACUTE	latin
Ắ		ă˧˥	ă˧˥			Ắ		high-rising vowel				U+1EAE: LATIN CAPITAL LETTER A WITH BREVE AND ACUTE	latin
Ấ		ə̆˧˥	ə̆˧˥			Ấ		high-rising vowel				U+1EA4: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND ACUTE	latin
É		ɛ˧˥	ɛ˧˥			É		high-rising vowel				U+00C9: LATIN CAPITAL LETTER E WITH ACUTE	latin
Ế		e˧˥	e˧˥			Ế		high-rising vowel				U+1EBE: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND ACUTE	latin
Í		i˧˥	i˧˥			Í		high-rising vowel				U+00CD: LATIN CAPITAL LETTER I WITH ACUTE	latin
Ó		ɔ˧˥	ɔ˧˥			Ó		high-rising vowel				U+00D3: LATIN CAPITAL LETTER O WITH ACUTE	latin
Ố		o˧˥	o˧˥			Ố		high-rising vowel				U+1ED0: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND ACUTE	latin
Ớ		ə˧˥	ə˧˥			Ớ		high-rising vowel				U+1EDA: LATIN CAPITAL LETTER O WITH HORN AND ACUTE	latin
Ú		u˧˥	u˧˥			Ú		high-rising vowel				U+00DA: LATIN CAPITAL LETTER U WITH ACUTE	latin
Ứ		ɨ˧˥	ɨ˧˥			Ứ		high-rising vowel				U+1EE8: LATIN CAPITAL LETTER U WITH HORN AND ACUTE	latin
Ý		i˧˥	i˧˥			Ý		high-rising vowel				U+00DD: LATIN CAPITAL LETTER Y WITH ACUTE	latin
													
Ạ		a˩˧ 	a˧˨ˀ			Ạ		glottalised-falling vowel				U+1EA0: LATIN CAPITAL LETTER A WITH DOT BELOW	latin
Ặ		ă˩˧ 	ă˧˨ˀ			Ặ		glottalised-falling vowel				U+1EB6: LATIN CAPITAL LETTER A WITH BREVE AND DOT BELOW	latin
Ậ		ə̆˩˧ 	ə̆˧˨ˀ			Ậ		glottalised-falling vowel				U+1EAC: LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND DOT BELOW	latin
Ẹ		ɛ˩˧ 	ɛ˧˨ˀ			Ẹ		glottalised-falling vowel				U+1EB8: LATIN CAPITAL LETTER E WITH DOT BELOW	latin
Ệ		e˩˧ 	e˧˨ˀ			Ệ		glottalised-falling vowel				U+1EC6: LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND DOT BELOW	latin
Ị		i˩˧ 	i˧˨ˀ			Ị		glottalised-falling vowel				U+1ECA: LATIN CAPITAL LETTER I WITH DOT BELOW	latin
Ọ		ɔ˩˧ 	ɔ˧˨ˀ			Ọ		glottalised-falling vowel				U+1ECC: LATIN CAPITAL LETTER O WITH DOT BELOW	latin
Ộ		o˩˧ 	o˧˨ˀ			Ộ		glottalised-falling vowel				U+1ED8: LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND DOT BELOW	latin
Ợ		ə˩˧ 	ə˧˨ˀ			Ợ		glottalised-falling vowel				U+1EE2: LATIN CAPITAL LETTER O WITH HORN AND DOT BELOW	latin
Ụ		u˩˧ 	u˧˨ˀ			Ụ		glottalised-falling vowel				U+1EE4: LATIN CAPITAL LETTER U WITH DOT BELOW	latin
Ự		ɨ˩˧ 	ɨ˧˨ˀ			Ự		glottalised-falling vowel				U+1EF0: LATIN CAPITAL LETTER U WITH HORN AND DOT BELOW	latin
Ỵ		i˩˧ 	i˧˨ˀ			Ỵ		glottalised-falling vowel				U+1EF4: LATIN CAPITAL LETTER Y WITH DOT BELOW	latin




`



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc":6,
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

"nnameLoc": 10,
"nameLoc": 11,
"ucsName": 12,
"block": 13,

//"othertranscriptions": [[4, 'ISO 15919']]
}

