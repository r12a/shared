// This data is snipped out of the larger georgian spreadsheet, to facilitate type-in.

var spreadsheet = `
ა		ɑ	a	ɑ	a	a	g	mkhedruli letter			Ა	1	ani	U+10D0: GEORGIAN LETTER AN	a	a	a	georgian
ე		ɛ	e	ɛ	e	ɛ	t	mkhedruli letter			Ე	5	eni	U+10D4: GEORGIAN LETTER EN	e	e	e	georgian
ი		i	i		i	i	n	mkhedruli letter			Ი	10	ini	U+10D8: GEORGIAN LETTER IN	i	i	i	georgian
ო		ɔ	o	ɔ	o	ɔ	k	mkhedruli letter			Ო	70	oni	U+10DD: GEORGIAN LETTER ON	o	o	o	georgian
უ		u	u		u	u	e	mkhedruli letter			Უ	400	uni	U+10E3: GEORGIAN LETTER UN	u	u	u	georgian
ფ		p⁽ʰ⁾	p		p¶	p	a	mkhedruli letter			Ფ	500	pari	U+10E4: GEORGIAN LETTER PHAR	p'	p'	p	georgian
პ		pʼ	p'	pʼ	p	ṗ	h	mkhedruli letter			Პ	80	p'ari	U+10DE: GEORGIAN LETTER PAR	p	p	ṗ	georgian
ბ		b	b		b	b	.	mkhedruli letter			Ბ	2	bani	U+10D1: GEORGIAN LETTER BAN	b	b	b	georgian
თ		t⁽ʰ⁾	t		t	t	/	mkhedruli letter			Თ	9	tani	U+10D7: GEORGIAN LETTER TAN	t'	t'	t	georgian
ტ		tʼ	t'	tʼ	t	ṫ	m	mkhedruli letter			Ტ	300	t'ari	U+10E2: GEORGIAN LETTER TAR	t	t	ť	georgian
დ		d	d		d	d	;	mkhedruli letter			Დ	4	doni	U+10D3: GEORGIAN LETTER DON	d	d	d	georgian
ქ		k⁽ʰ⁾	k		k	k	,	mkhedruli letter			Ქ	600	kani	U+10E5: GEORGIAN LETTER KHAR	k'	k'	k	georgian
კ		kʼ	k'	kʼ	k	k̇	r	mkhedruli letter			Კ	20	k'ani	U+10D9: GEORGIAN LETTER KAN	k	k	ǩ	georgian
გ		ɡ	g		g	g	u	mkhedruli letter			Გ	3	gani	U+10D2: GEORGIAN LETTER GAN	g	g	g	georgian
ყ		qʼ	q'	qʼ	q	q̇	c	mkhedruli letter			Ყ	800	q'ari	U+10E7: GEORGIAN LETTER QAR	q	q	q	georgian
ც		t͡s⁽ʰ⁾	ts		t	ʦ	]	mkhedruli letter			Ც	2000	tsani	U+10EA: GEORGIAN LETTER CAN	c’	ts'	ts	georgian
წ		t͡sʼ	ts'	t͡sʼ	t	ʦ̇	o	mkhedruli letter			Წ	4000	ts'ili	U+10EC: GEORGIAN LETTER CIL	c	ts	ts’	georgian
ძ		d͡z	dz	d͡z	d	ʣ	s	mkhedruli letter			Ძ	3000	dzili	U+10EB: GEORGIAN LETTER JIL	j	dz	ž	georgian
ჩ		t͡ʃ⁽ʰ⁾	ch		c	ʧ	x	mkhedruli letter			Ჩ	1000	chini	U+10E9: GEORGIAN LETTER CHIN	č'	ch'	ç	georgian
ჭ		t͡ʃʼ	ch'	t͡ʃʼ	c	ʧ̇	z	mkhedruli letter			Ჭ	5000	ch'ari	U+10ED: GEORGIAN LETTER CHAR	č	ch	ç̌	georgian
ჯ		d͡ʒ	j	d͡ʒ	j	ʤ	w	mkhedruli letter			Ჯ	8000	jani	U+10EF: GEORGIAN LETTER JHAN	ǰ	j	c	georgian
ვ		v	v		v	v	d	mkhedruli letter			Ვ	6	vini	U+10D5: GEORGIAN LETTER VIN	v	v	v	georgian
ს		s	s		s	s	v	mkhedruli letter			Ს	200	sani	U+10E1: GEORGIAN LETTER SAN	s	s	s	georgian
ზ		z	z		z	z	p	mkhedruli letter			Ზ	7	zeni	U+10D6: GEORGIAN LETTER ZEN	z	z	z	georgian
შ		ʃ	sh	ʃ	s	ʃ	i	mkhedruli letter			Შ	900	shini	U+10E8: GEORGIAN LETTER SHIN	š	sh	ş	georgian
ჟ		ʒ	zh	ʒ	z	ʒ	'	mkhedruli letter			Ჟ	90	zhani	U+10DF: GEORGIAN LETTER ZHAR	ž	zh	j	georgian
ღ		ɣ	gh	ɣ	y	ɣ	q	mkhedruli letter			Ღ	700	ghani	U+10E6: GEORGIAN LETTER GHAN	ḡ	gh	ğ	georgian
ხ		x χ	kh	χ	x	χ	[	mkhedruli letter			Ხ	6000	khani	U+10EE: GEORGIAN LETTER XAN	x	kh	x	georgian
ჰ		h	h		h	h	?	mkhedruli letter			Ჰ	9000	hae	U+10F0: GEORGIAN LETTER HAE	h	h	h	georgian
მ		m	m		m	m	b	mkhedruli letter			Მ	40	mani	U+10DB: GEORGIAN LETTER MAN	m	m	m	georgian
ნ		n	n		n	n	y	mkhedruli letter			Ნ	50	nari	U+10DC: GEORGIAN LETTER NAR	n	n	n	georgian
რ		r	r		r	r	j	mkhedruli letter			Რ	100	rae	U+10E0: GEORGIAN LETTER RAE	r	r	r	georgian
ლ		l	l		l	l	l	mkhedruli letter			Ლ	30	lasi	U+10DA: GEORGIAN LETTER LAS	l	l	l	georgian
ჱ		eɪ		ɪ	e	e	y	mkhedruli letter	archaic		Ჱ	8	he	U+10F1: GEORGIAN LETTER HE	ē	ey		georgian
ჲ		je			j	j	n	mkhedruli letter	archaic		Ჲ	60	hie	U+10F2: GEORGIAN LETTER HIE	y	j	y	georgian
ჳ		uɪ			w	w	d	mkhedruli letter	archaic		Ჳ	400	vie	U+10F3: GEORGIAN LETTER WE	w			georgian
ჴ		q⁽ʰ⁾			q	q	[	mkhedruli letter	archaic		Ჴ	7000	qari, hari	U+10F4: GEORGIAN LETTER HAR	ẖ	q'		georgian
ჵ		oː		oː	o	o	/	mkhedruli letter	archaic		Ჵ	10000	hoe	U+10F5: GEORGIAN LETTER HOE	ō			georgian
																		
																		
Ა		ɑ	a		A	A	G	mtavruli letter		ა		1	ani	U+1C90: GEORGIAN MTAVRULI CAPITAL LETTER AN	a	a	a	georgian
Ე		ɛ	e		E	Ɛ	T	mtavruli letter		ე		5	eni	U+1C94: GEORGIAN MTAVRULI CAPITAL LETTER EN	e	e	e	georgian
Ი		i	i		I	I	N	mtavruli letter		ი		10	ini	U+1C98: GEORGIAN MTAVRULI CAPITAL LETTER IN	i	i	i	georgian
Ო		ɔ	o		O	Ɔ	K	mtavruli letter		ო		70	oni	U+1C9D: GEORGIAN MTAVRULI CAPITAL LETTER ON	o	o	o	georgian
Უ		u	u		U	U	E	mtavruli letter		უ		400	uni	U+1CA3: GEORGIAN MTAVRULI CAPITAL LETTER UN	u	u	u	georgian
Ფ		p⁽ʰ⁾	p		P	P	A	mtavruli letter		ფ		500	pari	U+1CA4: GEORGIAN MTAVRULI CAPITAL LETTER PHAR	p'	p'	p	georgian
Პ		pʼ	p'		P	Ṗ	H	mtavruli letter		პ		80	p'ari	U+1C9E: GEORGIAN MTAVRULI CAPITAL LETTER PAR	p	p	ṗ	georgian
Ბ		b	b		B	B	>	mtavruli letter		ბ		2	bani	U+1C91: GEORGIAN MTAVRULI CAPITAL LETTER BAN	b	b	b	georgian
Თ		t⁽ʰ⁾	t		T	T	F	mtavruli letter		თ		9	tani	U+1C97: GEORGIAN MTAVRULI CAPITAL LETTER TAN	t'	t'	t	georgian
Ტ		tʼ	t'		T	Ṫ	M	mtavruli letter		ტ		300	t'ari	U+1CA2: GEORGIAN MTAVRULI CAPITAL LETTER TAR	t	t	ť	georgian
Დ		d	d		D	D	:	mtavruli letter		დ		4	doni	U+1C93: GEORGIAN MTAVRULI CAPITAL LETTER DON	d	d	d	georgian
Ქ		k⁽ʰ⁾	k		K	K	<	mtavruli letter		ქ		600	kani	U+1CA5: GEORGIAN MTAVRULI CAPITAL LETTER KHAR	k'	k'	k	georgian
Კ		kʼ	k'		K	K̇		mtavruli letter		კ		20	k'ani	U+1C99: GEORGIAN MTAVRULI CAPITAL LETTER KAN	k	k	ǩ	georgian
Გ		ɡ	g		G	G	U	mtavruli letter		გ		3	gani	U+1C92: GEORGIAN MTAVRULI CAPITAL LETTER GAN	g	g	g	georgian
Ყ		qʼ	q'		Q	Q̇	C	mtavruli letter		ყ		800	q'ari	U+1CA7: GEORGIAN MTAVRULI CAPITAL LETTER QAR	q	q	q	georgian
Ც		t͡s⁽ʰ⁾	ts		T	Tˢ	}	mtavruli letter		ც		2000	tsani	U+1CAA: GEORGIAN MTAVRULI CAPITAL LETTER CAN	c’	ts'	ts	georgian
Წ		t͡sʼ	ts'		T	Ṫˢ	O	mtavruli letter		წ		4000	ts'ili	U+1CAC: GEORGIAN MTAVRULI CAPITAL LETTER CIL	c	ts	ts’	georgian
Ძ		d͡z	dz		D	ǲ	S	mtavruli letter		ძ		3000	dzili	U+1CAB: GEORGIAN MTAVRULI CAPITAL LETTER JIL	j	dz	ž	georgian
Ჩ		t͡ʃ⁽ʰ⁾	ch		C	Tᶴ	X	mtavruli letter		ჩ		1000	chini	U+1CA9: GEORGIAN MTAVRULI CAPITAL LETTER CHIN	č'	ch'	ç	georgian
Ჭ		t͡ʃʼ	ch'		C	Ṫᶴ	Z	mtavruli letter		ჭ		5000	ch'ari	U+1CAD: GEORGIAN MTAVRULI CAPITAL LETTER CHAR	č	ch	ç̌	georgian
Ჯ		d͡ʒ	j		J	Dᶾ	W	mtavruli letter		ჯ		8000	jani	U+1CAF: GEORGIAN MTAVRULI CAPITAL LETTER JHAN	ǰ	j	c	georgian
Ვ		v	v	D	V	V	D	mtavruli letter		ვ		6	vini	U+1C95: GEORGIAN MTAVRULI CAPITAL LETTER VIN	v	v	v	georgian
Ს		s	s		S	S	V	mtavruli letter		ს		200	sani	U+1CA1: GEORGIAN MTAVRULI CAPITAL LETTER SAN	s	s	s	georgian
Ზ		z	z		Z	Z	P	mtavruli letter		ზ		7	zeni	U+1C96: GEORGIAN MTAVRULI CAPITAL LETTER ZEN	z	z	z	georgian
Შ		ʃ	sh		S	Ʃ	I	mtavruli letter		შ		900	shini	U+1CA8: GEORGIAN MTAVRULI CAPITAL LETTER SHIN	š	sh	ş	georgian
Ჟ		ʒ	zh		Z	Ʒ	"	mtavruli letter		ჟ		90	zhani	U+1C9F: GEORGIAN MTAVRULI CAPITAL LETTER ZHAR	ž	zh	j	georgian
Ღ		ɣ	gh		Y	Ɣ	Q	mtavruli letter		ღ		700	ghani	U+1CA6: GEORGIAN MTAVRULI CAPITAL LETTER GHAN	ḡ	gh	ğ	georgian
Ხ		x χ	kh		X	Χ	{	mtavruli letter		ხ		6000	khani	U+1CAE: GEORGIAN MTAVRULI CAPITAL LETTER XAN	x	kh	x	georgian
Ჰ		h	h		H	H	?	mtavruli letter		ჰ		9000	hae	U+1CB0: GEORGIAN MTAVRULI CAPITAL LETTER HAE	h	h	h	georgian
Მ		m	m		M	M	B	mtavruli letter		მ		40	mani	U+1C9B: GEORGIAN MTAVRULI CAPITAL LETTER MAN	m	m	m	georgian
Ნ		n	n		N	N	Y	mtavruli letter		ნ		50	nari	U+1C9C: GEORGIAN MTAVRULI CAPITAL LETTER NAR	n	n	n	georgian
Რ		r	r		R	R	J	mtavruli letter		რ		100	rae	U+1CA0: GEORGIAN MTAVRULI CAPITAL LETTER RAE	r	r	r	georgian
Ლ		l	l		L	L	L	mtavruli letter		ლ		30	lasi	U+1C9A: GEORGIAN MTAVRULI CAPITAL LETTER LAS	l	l	l	georgian
Ჱ		eɪ			E	E	T	mtavruli letter		ჱ		8	he	U+1CB1: GEORGIAN MTAVRULI CAPITAL LETTER HE	ē	ey		georgian
Ჲ		je			J	J	N	mtavruli letter		ჲ		60	hie	U+1CB2: GEORGIAN MTAVRULI CAPITAL LETTER HIE	y	j	y	georgian
Ჳ		uɪ			W	W	D	mtavruli letter		ჳ		400	vie	U+1CB3: GEORGIAN MTAVRULI CAPITAL LETTER WE	w			georgian
Ჴ		q⁽ʰ⁾			Q	Q	{	mtavruli letter		ჴ		7000	qari, hari	U+1CB4: GEORGIAN MTAVRULI CAPITAL LETTER HAR	ẖ	q'		georgian
Ჵ		oː			O	O	?	mtavruli letter	archaic	ჵ		10000	hoe	U+1CB5: GEORGIAN MTAVRULI CAPITAL LETTER HOE	ō			georgian
																		
																		
																		
჻						⁋		paragraph separator						U+10FB: GEORGIAN PARAGRAPH SEPARATOR				georgian
₾						¤		currency sign						U+00A4 CURRENCY SIGN				currencysymbols
№						#	3	number sign						U+2116 NUMERO SIGN				

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
"lc": 10,
"uc": 11,
"meaning":0,
"shape": 0,
"numLoc": 12,
"nnameLoc": 0,
"nameLoc": 13,
"ucsName": 14,
"block": 18,

"othertranscriptions": [[3, 'National'], [15, 'ISO']]
}



