var spreadsheet = `
а	a	a	a	a	a	vowel	a	а	U+0430: CYRILLIC SMALL LETTER A
б	b	b	b	b	b,bʲ	consonant	bɛ	бэ	U+0431: CYRILLIC SMALL LETTER BE
в	v	v	v	v	v,vʲ	consonant	vɛ	вэ	U+0432: CYRILLIC SMALL LETTER VE
г	g	g	g	g	ɡ,ɡʲ	consonant	ɡɛ	гэ	U+0433: CYRILLIC SMALL LETTER GHE
д	d	d	d	d	d,dʲ	consonant	dɛ	дэ	U+0434: CYRILLIC SMALL LETTER DE
е	e	e	e	e	je,ʲe,e	vowel	je	е	U+0435: CYRILLIC SMALL LETTER IE
ж	z	ʐ	z	ž	ʐ	consonant	ʐɛ	жэ	U+0436: CYRILLIC SMALL LETTER ZHE
з	z	z	z	z	z,zʲ	consonant	zɛ	зэ	U+0437: CYRILLIC SMALL LETTER ZE
и	i	i	i	i	i,ʲi,ɨ	vowel	i	и	U+0438: CYRILLIC SMALL LETTER I
й	y	y	i	ī	j	vowel	i ˈkratkəjɪ	и краткое	U+0439: CYRILLIC SMALL LETTER SHORT I
к	k	k	k	k	k,kʲ	consonant	ka	ка	U+043A: CYRILLIC SMALL LETTER KA
л	l	l	l	l	ɫ,lʲ	consonant	ɛlʲ	эль	U+043B: CYRILLIC SMALL LETTER EL
м	m	m	m	m	m,mʲ	consonant	ɛm	эм	U+043C: CYRILLIC SMALL LETTER EM
н	n	n	n	n	n,nʲ	consonant	ɛn	эн	U+043D: CYRILLIC SMALL LETTER EN
о	o	o	o	o	o	vowel	o	о	U+043E: CYRILLIC SMALL LETTER O
п	p	p	p	p	p,pʲ	consonant	pɛ	пэ	U+043F: CYRILLIC SMALL LETTER PE
р	r	r	r	r	r,rʲ	consonant	ɛr	эр	U+0440: CYRILLIC SMALL LETTER ER
с	s	s	s	s	s,sʲ	consonant	ɛs	эс	U+0441: CYRILLIC SMALL LETTER ES
т	t	t	t	t	t,tʲ	consonant	tɛ	тэ	U+0442: CYRILLIC SMALL LETTER TE
у	u	u	u	u	u	vowel	u	у	U+0443: CYRILLIC SMALL LETTER U
ф	f	f	f	f	f,fʲ	consonant	ɛf	эф	U+0444: CYRILLIC SMALL LETTER EF
х	x	x	h	h	x,xʲ	consonant	xa	ха	U+0445: CYRILLIC SMALL LETTER HA
ц	t	ʦ	c	c	ʦ	consonant	ʦɛ	цэ	U+0446: CYRILLIC SMALL LETTER TSE
ч	t	ʨ	c	č	ʨ	consonant	ʨɛ	чэ	U+0447: CYRILLIC SMALL LETTER CHE
ш	s	ʂ	s	š	ʂ	consonant	ʂa	шæ	U+0448: CYRILLIC SMALL LETTER SHA
щ	s	ʂ̂	s	ŝ	ɕɕ,ɕʨ	consonant	ɕɕæ	ща	U+0449: CYRILLIC SMALL LETTER SHCHA
ъ	"	ʺ	]	ʺ 		hard sign	tvʲɵrdɨj znak	твёрдый знак	U+044A: CYRILLIC SMALL LETTER HARD SIGN
ы	i	ɨ	y	y	ɨ	vowel	ɨ	ы	U+044B: CYRILLIC SMALL LETTER YERU
ь	ʹ	ʹ	[	ʹ	ʲ	soft sign	ˈmʲæxʲkʲɪj znak	мягкий знак	U+044C: CYRILLIC SMALL LETTER SOFT SIGN
э	e	ɛ	e	è 	ɛ	vowel	ɛ	э	U+044D: CYRILLIC SMALL LETTER E
ю	j	jᵘ	u	û	ju	vowel	ju	ю	U+044E: CYRILLIC SMALL LETTER YU
я	j	jᵃ	a	â	ja	vowel	ja	я	U+044F: CYRILLIC SMALL LETTER YA
ё	j	jᵒ	e	ë	jo,ʲo	vowel	ё	jo	U+0451: CYRILLIC SMALL LETTER IO
									
А	A	ạ	A	A	a	vowel	a	а	U+0410: CYRILLIC CAPITAL LETTER A
Б	B	ḅ	B	B	b,bʲ	consonant	bɛ	бэ	U+0411: CYRILLIC CAPITAL LETTER BE
В	V	ṿ	V	V	v,vʲ	consonant	vɛ	вэ	U+0412: CYRILLIC CAPITAL LETTER VE
Г	G	g̣	G	G	ɡ,ɡʲ	consonant	ɡɛ	гэ	U+0413: CYRILLIC CAPITAL LETTER GHE
Д	D	ḍ	D	D	d,dʲ	consonant	dɛ	дэ	U+0414: CYRILLIC CAPITAL LETTER DE
Е	E	ẹ	E	E	je,ʲe,e	vowel	je	е	U+0415: CYRILLIC CAPITAL LETTER IE
Ж	Z	ʐ̣	Z	Ž	ʐ	consonant	ʐɛ	жэ	U+0416: CYRILLIC CAPITAL LETTER ZHE
З	Z	ẓ	Z	Z	z,zʲ	consonant	zɛ	зэ	U+0417: CYRILLIC CAPITAL LETTER ZE
И	I	ị	I	I	i,ʲi,ɨ	vowel	i	и	U+0418: CYRILLIC CAPITAL LETTER I
Й	Y	ỵ	i	Ī	j	vowel	i ˈkratkəjɪ	и краткое	U+0419: CYRILLIC CAPITAL LETTER SHORT I
К	K	ḳ	K	K	k,kʲ	consonant	ka	ка	U+041A: CYRILLIC CAPITAL LETTER KA
Л	L	ḷ	L	L	ɫ,lʲ	consonant	ɛlʲ	эль	U+041B: CYRILLIC CAPITAL LETTER EL
М	M	ṃ	M	M	m,mʲ	consonant	ɛm	эм	U+041C: CYRILLIC CAPITAL LETTER EM
Н	N	ṇ	N	N	n,nʲ	consonant	ɛn	эн	U+041D: CYRILLIC CAPITAL LETTER EN
О	O	ọ	O	O	o	vowel	o	о	U+041E: CYRILLIC CAPITAL LETTER O
П	P	p̣	P	P	p,pʲ	consonant	pɛ	пэ	U+041F: CYRILLIC CAPITAL LETTER PE
Р	R	ṛ	R	R	r,rʲ	consonant	ɛr	эр	U+0420: CYRILLIC CAPITAL LETTER ER
С	S	ṣ	S	S	s,sʲ	consonant	ɛs	эс	U+0421: CYRILLIC CAPITAL LETTER ES
Т	T	ṭ	T	T	t,tʲ	consonant	tɛ	тэ	U+0422: CYRILLIC CAPITAL LETTER TE
У	U	ụ	U	U	u	vowel	u	у	U+0423: CYRILLIC CAPITAL LETTER U
Ф	F	f̣	F	F	f,fʲ	consonant	ɛf	эф	U+0424: CYRILLIC CAPITAL LETTER EF
Х	X	x̣	H	H	x,xʲ	consonant	xa	ха	U+0425: CYRILLIC CAPITAL LETTER HA
Ц	T	ʦ̣	C	C	ʦ	consonant	ʦɛ	цэ	U+0426: CYRILLIC CAPITAL LETTER TSE
Ч	T	ʨ̣	C	Č	ʨ	consonant	ʨɛ	чэ	U+0427: CYRILLIC CAPITAL LETTER CHE
Ш	S	ʂ̣	S	Š	ʂ	consonant	ʂa	шæ	U+0428: CYRILLIC CAPITAL LETTER SHA
Щ	S	ʂ̣̂	S	Ŝ	ɕɕ,ɕʨ	consonant	ɕɕæ	ща	U+0429: CYRILLIC CAPITAL LETTER SHCHA
Ъ	"	ʺ̣	]	ʺ		hard sign	tvʲɵrdɨj znak	твёрдый знак	U+042A: CYRILLIC CAPITAL LETTER HARD SIGN
Ы	I	ɨ̣	Y	Y	ɨ	vowel	ɨ	ы	U+042B: CYRILLIC CAPITAL LETTER YERU
Ь	ʹ	ʹ̣	[	ʹ	ʲ	soft sign	ˈmʲæxʲkʲɪj znak	мягкий знак	U+042C: CYRILLIC CAPITAL LETTER SOFT SIGN
Э	E	ɛ̣	E	È	ɛ	vowel	ɛ	э	U+042D: CYRILLIC CAPITAL LETTER E
Ю	J	j̣ᵘ	U	Û	ju	vowel	ju	ю	U+042E: CYRILLIC CAPITAL LETTER YU
Я	J	j̣ᵃ	A	Â	ja	vowel	ja	я	U+042F: CYRILLIC CAPITAL LETTER YA
Ё	J	j̣ᵒ	E	Ë	jo,ʲo	vowel	ё	jo	U+0401: CYRILLIC CAPITAL LETTER IO


`

var cols = {
"key":1,
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 8,
"nameLoc": 7,
"numLoc": 0,
"statusLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"transcription":4,
"ucsName":9,

"othertranscriptions": [[4, 'ISO 9:1995']]
}