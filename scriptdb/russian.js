var spreadsheet = `
а		a	a	a	a	a	vowel		a	а	U+0430: CYRILLIC SMALL LETTER A
б		b	b	b,bʲ	b	b	consonant		bɛ	бэ	U+0431: CYRILLIC SMALL LETTER BE
в		v	v	v,vʲ	v	v	consonant		vɛ	вэ	U+0432: CYRILLIC SMALL LETTER VE
г		g	g	ɡ,ɡʲ	g	g	consonant		ɡɛ	гэ	U+0433: CYRILLIC SMALL LETTER GHE
д		d	d	d,dʲ	d	d	consonant		dɛ	дэ	U+0434: CYRILLIC SMALL LETTER DE
е		e	e	je,ʲe,e	e	e	vowel		je	е	U+0435: CYRILLIC SMALL LETTER IE
ж		z	ʐ	ʐ	z	ž	consonant		ʐɛ	жэ	U+0436: CYRILLIC SMALL LETTER ZHE
з		z	z	z,zʲ	z	z	consonant		zɛ	зэ	U+0437: CYRILLIC SMALL LETTER ZE
и		i	i	i,ʲi,ɨ	i	i	vowel		i	и	U+0438: CYRILLIC SMALL LETTER I
й		y	y	j	i	ī	vowel		i ˈkratkəjɪ	и краткое	U+0439: CYRILLIC SMALL LETTER SHORT I
к		k	k	k,kʲ	k	k	consonant		ka	ка	U+043A: CYRILLIC SMALL LETTER KA
л		l	l	ɫ,lʲ	l	l	consonant		ɛlʲ	эль	U+043B: CYRILLIC SMALL LETTER EL
м		m	m	m,mʲ	m	m	consonant		ɛm	эм	U+043C: CYRILLIC SMALL LETTER EM
н		n	n	n,nʲ	n	n	consonant		ɛn	эн	U+043D: CYRILLIC SMALL LETTER EN
о		o	o	o	o	o	vowel		o	о	U+043E: CYRILLIC SMALL LETTER O
п		p	p	p,pʲ	p	p	consonant		pɛ	пэ	U+043F: CYRILLIC SMALL LETTER PE
р		r	r	r,rʲ	r	r	consonant		ɛr	эр	U+0440: CYRILLIC SMALL LETTER ER
с		s	s	s,sʲ	s	s	consonant		ɛs	эс	U+0441: CYRILLIC SMALL LETTER ES
т		t	t	t,tʲ	t	t	consonant		tɛ	тэ	U+0442: CYRILLIC SMALL LETTER TE
у		u	u	u	u	u	vowel		u	у	U+0443: CYRILLIC SMALL LETTER U
ф		f	f	f,fʲ	f	f	consonant		ɛf	эф	U+0444: CYRILLIC SMALL LETTER EF
х		x	x	x,xʲ	h	h	consonant		xa	ха	U+0445: CYRILLIC SMALL LETTER HA
ц		t	ʦ	ʦ	c	c	consonant		ʦɛ	цэ	U+0446: CYRILLIC SMALL LETTER TSE
ч		t	ʨ	ʨ	c	č	consonant		ʨɛ	чэ	U+0447: CYRILLIC SMALL LETTER CHE
ш		s	ʂ	ʂ	s	š	consonant		ʂa	шæ	U+0448: CYRILLIC SMALL LETTER SHA
щ		s	ʂ̂	ɕɕ,ɕʨ	s	ŝ	consonant		ɕɕæ	ща	U+0449: CYRILLIC SMALL LETTER SHCHA
ъ		"	ʺ		]	ʺ 	hard sign		tvʲɵrdɨj znak	твёрдый знак	U+044A: CYRILLIC SMALL LETTER HARD SIGN
ы		i	ɨ	ɨ	y	y	vowel		ɨ	ы	U+044B: CYRILLIC SMALL LETTER YERU
ь		ʹ	ʹ	ʲ	[	ʹ	soft sign		ˈmʲæxʲkʲɪj znak	мягкий знак	U+044C: CYRILLIC SMALL LETTER SOFT SIGN
э		e	ɛ	ɛ	e	è 	vowel		ɛ	э	U+044D: CYRILLIC SMALL LETTER E
ю		j	jᵘ	ju	u	û	vowel		ju	ю	U+044E: CYRILLIC SMALL LETTER YU
я		j	jᵃ	ja	a	â	vowel		ja	я	U+044F: CYRILLIC SMALL LETTER YA
ё		j	jᵒ	jo,ʲo	e	ë	vowel		ё	jo	U+0451: CYRILLIC SMALL LETTER IO
											
А		A	ạ	a	A	A	vowel		a	а	U+0410: CYRILLIC CAPITAL LETTER A
Б		B	ḅ	b,bʲ	B	B	consonant		bɛ	бэ	U+0411: CYRILLIC CAPITAL LETTER BE
В		V	ṿ	v,vʲ	V	V	consonant		vɛ	вэ	U+0412: CYRILLIC CAPITAL LETTER VE
Г		G	g̣	ɡ,ɡʲ	G	G	consonant		ɡɛ	гэ	U+0413: CYRILLIC CAPITAL LETTER GHE
Д		D	ḍ	d,dʲ	D	D	consonant		dɛ	дэ	U+0414: CYRILLIC CAPITAL LETTER DE
Е		E	ẹ	je,ʲe,e	E	E	vowel		je	е	U+0415: CYRILLIC CAPITAL LETTER IE
Ж		Z	ʐ̣	ʐ	Z	Ž	consonant		ʐɛ	жэ	U+0416: CYRILLIC CAPITAL LETTER ZHE
З		Z	ẓ	z,zʲ	Z	Z	consonant		zɛ	зэ	U+0417: CYRILLIC CAPITAL LETTER ZE
И		I	ị	i,ʲi,ɨ	I	I	vowel		i	и	U+0418: CYRILLIC CAPITAL LETTER I
Й		Y	ỵ	j	i	Ī	vowel		i ˈkratkəjɪ	и краткое	U+0419: CYRILLIC CAPITAL LETTER SHORT I
К		K	ḳ	k,kʲ	K	K	consonant		ka	ка	U+041A: CYRILLIC CAPITAL LETTER KA
Л		L	ḷ	ɫ,lʲ	L	L	consonant		ɛlʲ	эль	U+041B: CYRILLIC CAPITAL LETTER EL
М		M	ṃ	m,mʲ	M	M	consonant		ɛm	эм	U+041C: CYRILLIC CAPITAL LETTER EM
Н		N	ṇ	n,nʲ	N	N	consonant		ɛn	эн	U+041D: CYRILLIC CAPITAL LETTER EN
О		O	ọ	o	O	O	vowel		o	о	U+041E: CYRILLIC CAPITAL LETTER O
П		P	p̣	p,pʲ	P	P	consonant		pɛ	пэ	U+041F: CYRILLIC CAPITAL LETTER PE
Р		R	ṛ	r,rʲ	R	R	consonant		ɛr	эр	U+0420: CYRILLIC CAPITAL LETTER ER
С		S	ṣ	s,sʲ	S	S	consonant		ɛs	эс	U+0421: CYRILLIC CAPITAL LETTER ES
Т		T	ṭ	t,tʲ	T	T	consonant		tɛ	тэ	U+0422: CYRILLIC CAPITAL LETTER TE
У		U	ụ	u	U	U	vowel		u	у	U+0423: CYRILLIC CAPITAL LETTER U
Ф		F	f̣	f,fʲ	F	F	consonant		ɛf	эф	U+0424: CYRILLIC CAPITAL LETTER EF
Х		X	x̣	x,xʲ	H	H	consonant		xa	ха	U+0425: CYRILLIC CAPITAL LETTER HA
Ц		T	ʦ̣	ʦ	C	C	consonant		ʦɛ	цэ	U+0426: CYRILLIC CAPITAL LETTER TSE
Ч		T	ʨ̣	ʨ	C	Č	consonant		ʨɛ	чэ	U+0427: CYRILLIC CAPITAL LETTER CHE
Ш		S	ʂ̣	ʂ	S	Š	consonant		ʂa	шæ	U+0428: CYRILLIC CAPITAL LETTER SHA
Щ		S	ʂ̣̂	ɕɕ,ɕʨ	S	Ŝ	consonant		ɕɕæ	ща	U+0429: CYRILLIC CAPITAL LETTER SHCHA
Ъ		"	ʺ̣		]	ʺ	hard sign		tvʲɵrdɨj znak	твёрдый знак	U+042A: CYRILLIC CAPITAL LETTER HARD SIGN
Ы		I	ɨ̣	ɨ	Y	Y	vowel		ɨ	ы	U+042B: CYRILLIC CAPITAL LETTER YERU
Ь		ʹ	ʹ̣	ʲ	[	ʹ	soft sign		ˈmʲæxʲkʲɪj znak	мягкий знак	U+042C: CYRILLIC CAPITAL LETTER SOFT SIGN
Э		E	ɛ̣	ɛ	E	È	vowel		ɛ	э	U+042D: CYRILLIC CAPITAL LETTER E
Ю		J	j̣ᵘ	ju	U	Û	vowel		ju	ю	U+042E: CYRILLIC CAPITAL LETTER YU
Я		J	j̣ᵃ	ja	A	Â	vowel		ja	я	U+042F: CYRILLIC CAPITAL LETTER YA
Ё		J	j̣ᵒ	jo,ʲo	E	Ë	vowel		ё	jo	U+0401: CYRILLIC CAPITAL LETTER IO


`

var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
"typeLoc": 7,
"statusLoc": 8,
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

"othertranscriptions": [[6, 'ISO 9:1995']]
}
