// This data is snipped out of the larger georgian spreadsheet, to facilitate type-in.

var spreadsheet = `
ა	a	ɑ		a	a	g	Ll		mkhedruli letter			Ა	1	ani	U+10D0: GEORGIAN LETTER AN	a	a	a	georgian
ე	e	ɛ		e	ɛ	t	Ll		mkhedruli letter			Ე	5	eni	U+10D4: GEORGIAN LETTER EN	e	e	e	georgian
ი	i	i		i	i	n	Ll		mkhedruli letter			Ი	10	ini	U+10D8: GEORGIAN LETTER IN	i	i	i	georgian
ო	o	ɔ		o	ɔ	k	Ll		mkhedruli letter			Ო	70	oni	U+10DD: GEORGIAN LETTER ON	o	o	o	georgian
უ	u	u		u	u	e	Ll		mkhedruli letter			Უ	400	uni	U+10E3: GEORGIAN LETTER UN	u	u	u	georgian
ფ	p¶	p⁽ʰ⁾		p	p	a	Ll		mkhedruli letter			Ფ	500	pari	U+10E4: GEORGIAN LETTER PHAR	p'	p'	p	georgian
პ	p	pʼ		p'	ṗ	h	Ll		mkhedruli letter			Პ	80	p'ari	U+10DE: GEORGIAN LETTER PAR	p	p	ṗ	georgian
ბ	b	b		b	b	.	Ll		mkhedruli letter			Ბ	2	bani	U+10D1: GEORGIAN LETTER BAN	b	b	b	georgian
თ	t	t⁽ʰ⁾		t	t	/	Ll		mkhedruli letter			Თ	9	tani	U+10D7: GEORGIAN LETTER TAN	t'	t'	t	georgian
ტ	t	tʼ		t'	ṫ	m	Ll		mkhedruli letter			Ტ	300	t'ari	U+10E2: GEORGIAN LETTER TAR	t	t	ť	georgian
დ	d	d		d	d	;	Ll		mkhedruli letter			Დ	4	doni	U+10D3: GEORGIAN LETTER DON	d	d	d	georgian
ქ	k	k⁽ʰ⁾		k	k	,	Ll		mkhedruli letter			Ქ	600	kani	U+10E5: GEORGIAN LETTER KHAR	k'	k'	k	georgian
კ	k	kʼ		k'	k̇	r	Ll		mkhedruli letter			Კ	20	k'ani	U+10D9: GEORGIAN LETTER KAN	k	k	ǩ	georgian
გ	g	ɡ		g	g	u	Ll		mkhedruli letter			Გ	3	gani	U+10D2: GEORGIAN LETTER GAN	g	g	g	georgian
ყ	q	qʼ		q'	q̇	c	Ll		mkhedruli letter			Ყ	800	q'ari	U+10E7: GEORGIAN LETTER QAR	q	q	q	georgian
ც	t	t͡s⁽ʰ⁾		ts	ʦ	]	Ll		mkhedruli letter			Ც	2000	tsani	U+10EA: GEORGIAN LETTER CAN	c’	ts'	ts	georgian
წ	t	t͡sʼ		ts'	ʦ̇	o	Ll		mkhedruli letter			Წ	4000	ts'ili	U+10EC: GEORGIAN LETTER CIL	c	ts	ts’	georgian
ძ	d	d͡z		dz	ʣ	s	Ll		mkhedruli letter			Ძ	3000	dzili	U+10EB: GEORGIAN LETTER JIL	j	dz	ž	georgian
ჩ	c	t͡ʃ⁽ʰ⁾		ch	ʧ	x	Ll		mkhedruli letter			Ჩ	1000	chini	U+10E9: GEORGIAN LETTER CHIN	č'	ch'	ç	georgian
ჭ	c	t͡ʃʼ		ch'	ʧ̇	z	Ll		mkhedruli letter			Ჭ	5000	ch'ari	U+10ED: GEORGIAN LETTER CHAR	č	ch	ç̌	georgian
ჯ	j	d͡ʒ		j	ʤ	w	Ll		mkhedruli letter			Ჯ	8000	jani	U+10EF: GEORGIAN LETTER JHAN	ǰ	j	c	georgian
ვ	v	v		v	v	d	Ll		mkhedruli letter			Ვ	6	vini	U+10D5: GEORGIAN LETTER VIN	v	v	v	georgian
ს	s	s		s	s	v	Ll		mkhedruli letter			Ს	200	sani	U+10E1: GEORGIAN LETTER SAN	s	s	s	georgian
ზ	z	z		z	z	p	Ll		mkhedruli letter			Ზ	7	zeni	U+10D6: GEORGIAN LETTER ZEN	z	z	z	georgian
შ	s	ʃ		sh	ʃ	i	Ll		mkhedruli letter			Შ	900	shini	U+10E8: GEORGIAN LETTER SHIN	š	sh	ş	georgian
ჟ	z	ʒ		zh	ʒ	'	Ll		mkhedruli letter			Ჟ	90	zhani	U+10DF: GEORGIAN LETTER ZHAR	ž	zh	j	georgian
ღ	y	ɣ		gh	ɣ	q	Ll		mkhedruli letter			Ღ	700	ghani	U+10E6: GEORGIAN LETTER GHAN	ḡ	gh	ğ	georgian
ხ	x	x χ		kh	χ	[	Ll		mkhedruli letter			Ხ	6000	khani	U+10EE: GEORGIAN LETTER XAN	x	kh	x	georgian
ჰ	h	h		h	h	?	Ll		mkhedruli letter			Ჰ	9000	hae	U+10F0: GEORGIAN LETTER HAE	h	h	h	georgian
მ	m	m		m	m	b	Ll		mkhedruli letter			Მ	40	mani	U+10DB: GEORGIAN LETTER MAN	m	m	m	georgian
ნ	n	n		n	n	y	Ll		mkhedruli letter			Ნ	50	nari	U+10DC: GEORGIAN LETTER NAR	n	n	n	georgian
რ	r	r		r	r	j	Ll		mkhedruli letter			Რ	100	rae	U+10E0: GEORGIAN LETTER RAE	r	r	r	georgian
ლ	l	l		l	l	l	Ll		mkhedruli letter			Ლ	30	lasi	U+10DA: GEORGIAN LETTER LAS	l	l	l	georgian
ჱ	e	eɪ			e	y	Ll		mkhedruli letter	archaic		Ჱ	8	he	U+10F1: GEORGIAN LETTER HE	ē	ey		georgian
ჲ	j	je			j	n	Ll		mkhedruli letter	archaic		Ჲ	60	hie	U+10F2: GEORGIAN LETTER HIE	y	j	y	georgian
ჳ	w	uɪ			w	d	Ll		mkhedruli letter	archaic		Ჳ	400	vie	U+10F3: GEORGIAN LETTER WE	w			georgian
ჴ	q	q⁽ʰ⁾			q	[	Ll		mkhedruli letter	archaic		Ჴ	7000	qari, hari	U+10F4: GEORGIAN LETTER HAR	ẖ	q'		georgian
ჵ	o	oː			o	/	Ll		mkhedruli letter	archaic		Ჵ	10000	hoe	U+10F5: GEORGIAN LETTER HOE	ō			georgian
																			
																			
Ა	A	ɑ		a	A	G	Lu		mtavruli letter		ა		1	ani	U+1C90: GEORGIAN MTAVRULI CAPITAL LETTER AN	a	a	a	georgian
Ე	E	ɛ		e	Ɛ	T	Lu		mtavruli letter		ე		5	eni	U+1C94: GEORGIAN MTAVRULI CAPITAL LETTER EN	e	e	e	georgian
Ი	I	i		i	I	N	Lu		mtavruli letter		ი		10	ini	U+1C98: GEORGIAN MTAVRULI CAPITAL LETTER IN	i	i	i	georgian
Ო	O	ɔ		o	Ɔ	K	Lu		mtavruli letter		ო		70	oni	U+1C9D: GEORGIAN MTAVRULI CAPITAL LETTER ON	o	o	o	georgian
Უ	U	u		u	U	E	Lu		mtavruli letter		უ		400	uni	U+1CA3: GEORGIAN MTAVRULI CAPITAL LETTER UN	u	u	u	georgian
Ფ	P	p⁽ʰ⁾		p	P	A	Lu		mtavruli letter		ფ		500	pari	U+1CA4: GEORGIAN MTAVRULI CAPITAL LETTER PHAR	p'	p'	p	georgian
Პ	P	pʼ		p'	Ṗ	H	Lu		mtavruli letter		პ		80	p'ari	U+1C9E: GEORGIAN MTAVRULI CAPITAL LETTER PAR	p	p	ṗ	georgian
Ბ	B	b		b	B	>	Lu		mtavruli letter		ბ		2	bani	U+1C91: GEORGIAN MTAVRULI CAPITAL LETTER BAN	b	b	b	georgian
Თ	T	t⁽ʰ⁾		t	T	F	Lu		mtavruli letter		თ		9	tani	U+1C97: GEORGIAN MTAVRULI CAPITAL LETTER TAN	t'	t'	t	georgian
Ტ	T	tʼ		t'	Ṫ	M	Lu		mtavruli letter		ტ		300	t'ari	U+1CA2: GEORGIAN MTAVRULI CAPITAL LETTER TAR	t	t	ť	georgian
Დ	D	d		d	D	:	Lu		mtavruli letter		დ		4	doni	U+1C93: GEORGIAN MTAVRULI CAPITAL LETTER DON	d	d	d	georgian
Ქ	K	k⁽ʰ⁾		k	K	<	Lu		mtavruli letter		ქ		600	kani	U+1CA5: GEORGIAN MTAVRULI CAPITAL LETTER KHAR	k'	k'	k	georgian
Კ	K	kʼ		k'	K̇		Lu		mtavruli letter		კ		20	k'ani	U+1C99: GEORGIAN MTAVRULI CAPITAL LETTER KAN	k	k	ǩ	georgian
Გ	G	ɡ		g	G	U	Lu		mtavruli letter		გ		3	gani	U+1C92: GEORGIAN MTAVRULI CAPITAL LETTER GAN	g	g	g	georgian
Ყ	Q	qʼ		q'	Q̇	C	Lu		mtavruli letter		ყ		800	q'ari	U+1CA7: GEORGIAN MTAVRULI CAPITAL LETTER QAR	q	q	q	georgian
Ც	T	t͡s⁽ʰ⁾		ts	Tˢ	}	Lu		mtavruli letter		ც		2000	tsani	U+1CAA: GEORGIAN MTAVRULI CAPITAL LETTER CAN	c’	ts'	ts	georgian
Წ	T	t͡sʼ		ts'	Ṫˢ	O	Lu		mtavruli letter		წ		4000	ts'ili	U+1CAC: GEORGIAN MTAVRULI CAPITAL LETTER CIL	c	ts	ts’	georgian
Ძ	D	d͡z		dz	ǲ	S	Lu		mtavruli letter		ძ		3000	dzili	U+1CAB: GEORGIAN MTAVRULI CAPITAL LETTER JIL	j	dz	ž	georgian
Ჩ	C	t͡ʃ⁽ʰ⁾		ch	Tᶴ	X	Lu		mtavruli letter		ჩ		1000	chini	U+1CA9: GEORGIAN MTAVRULI CAPITAL LETTER CHIN	č'	ch'	ç	georgian
Ჭ	C	t͡ʃʼ		ch'	Ṫᶴ	Z	Lu		mtavruli letter		ჭ		5000	ch'ari	U+1CAD: GEORGIAN MTAVRULI CAPITAL LETTER CHAR	č	ch	ç̌	georgian
Ჯ	J	d͡ʒ		j	Dᶾ	W	Lu		mtavruli letter		ჯ		8000	jani	U+1CAF: GEORGIAN MTAVRULI CAPITAL LETTER JHAN	ǰ	j	c	georgian
Ვ	V	v		v	V	D	Lu		mtavruli letter		ვ		6	vini	U+1C95: GEORGIAN MTAVRULI CAPITAL LETTER VIN	v	v	v	georgian
Ს	S	s		s	S	V	Lu		mtavruli letter		ს		200	sani	U+1CA1: GEORGIAN MTAVRULI CAPITAL LETTER SAN	s	s	s	georgian
Ზ	Z	z		z	Z	P	Lu		mtavruli letter		ზ		7	zeni	U+1C96: GEORGIAN MTAVRULI CAPITAL LETTER ZEN	z	z	z	georgian
Შ	S	ʃ		sh	Ʃ	I	Lu		mtavruli letter		შ		900	shini	U+1CA8: GEORGIAN MTAVRULI CAPITAL LETTER SHIN	š	sh	ş	georgian
Ჟ	Z	ʒ		zh	Ʒ	"	Lu		mtavruli letter		ჟ		90	zhani	U+1C9F: GEORGIAN MTAVRULI CAPITAL LETTER ZHAR	ž	zh	j	georgian
Ღ	Y	ɣ		gh	Ɣ	Q	Lu		mtavruli letter		ღ		700	ghani	U+1CA6: GEORGIAN MTAVRULI CAPITAL LETTER GHAN	ḡ	gh	ğ	georgian
Ხ	X	x χ		kh	Χ	{	Lu		mtavruli letter		ხ		6000	khani	U+1CAE: GEORGIAN MTAVRULI CAPITAL LETTER XAN	x	kh	x	georgian
Ჰ	H	h		h	H	?	Lu		mtavruli letter		ჰ		9000	hae	U+1CB0: GEORGIAN MTAVRULI CAPITAL LETTER HAE	h	h	h	georgian
Მ	M	m		m	M	B	Lu		mtavruli letter		მ		40	mani	U+1C9B: GEORGIAN MTAVRULI CAPITAL LETTER MAN	m	m	m	georgian
Ნ	N	n		n	N	Y	Lu		mtavruli letter		ნ		50	nari	U+1C9C: GEORGIAN MTAVRULI CAPITAL LETTER NAR	n	n	n	georgian
Რ	R	r		r	R	J	Lu		mtavruli letter		რ		100	rae	U+1CA0: GEORGIAN MTAVRULI CAPITAL LETTER RAE	r	r	r	georgian
Ლ	L	l		l	L	L	Lu		mtavruli letter		ლ		30	lasi	U+1C9A: GEORGIAN MTAVRULI CAPITAL LETTER LAS	l	l	l	georgian
Ჱ	E	eɪ			E	T	Lu		mtavruli letter		ჱ		8	he	U+1CB1: GEORGIAN MTAVRULI CAPITAL LETTER HE	ē	ey		georgian
Ჲ	J	je			J	N	Lu		mtavruli letter		ჲ		60	hie	U+1CB2: GEORGIAN MTAVRULI CAPITAL LETTER HIE	y	j	y	georgian
Ჳ	W	uɪ			W	D	Lu		mtavruli letter		ჳ		400	vie	U+1CB3: GEORGIAN MTAVRULI CAPITAL LETTER WE	w			georgian
Ჴ	Q	q⁽ʰ⁾			Q	{	Lu		mtavruli letter		ჴ		7000	qari, hari	U+1CB4: GEORGIAN MTAVRULI CAPITAL LETTER HAR	ẖ	q'		georgian
Ჵ	O	oː			O	?	Lu		mtavruli letter	archaic	ჵ		10000	hoe	U+1CB5: GEORGIAN MTAVRULI CAPITAL LETTER HOE	ō			georgian
																			
																			
																			
჻					⁋		Po		paragraph separator						U+10FB: GEORGIAN PARAGRAPH SEPARATOR				georgian
₾					¤		Sc		currency sign						U+00A4 CURRENCY SIGN				currencysymbols
№					#	3	So		number sign						U+2116 NUMERO SIGN				


?					?				question mark						U+003F: QUESTION MARK														



`


latinPanel = 'ɑ d͡z d͡ʒ ɛ ɪ kʼ ɔ oː pʼ qʼ ʃ tʼ t͡sʼ t͡ʃʼ χ ɣ ʒ'



var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transcription": 4,
"transLoc": 5,
"kbd": 6,
"class": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc": 11,
"uc": 12,
"meaning":0,
"shape": 0,
"numLoc": 13,

"nnameLoc": 0,
"nameLoc": 14,
"ucsName": 15,
"block": 19,

"othertranscriptions": [[4, 'National'], [16, 'ISO']]
}



