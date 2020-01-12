// This data is snipped out of the larger georgian spreadsheet, to facilitate type-in.

var spreadsheet = `
ა		a	a	ɑ	a	a	a	a	a	mkhedruli letter			Ა	1	ani	U+10D0: GEORGIAN LETTER AN	georgian
ბ		b	b	b	b	b	b	b	b	mkhedruli letter			Ბ	2	bani	U+10D1: GEORGIAN LETTER BAN	georgian
გ		g	g	ɡ	g	g	g	g	g	mkhedruli letter			Გ	3	gani	U+10D2: GEORGIAN LETTER GAN	georgian
დ		d	d	d	d	d	d	d	d	mkhedruli letter			Დ	4	doni	U+10D3: GEORGIAN LETTER DON	georgian
ე		e	ɛ	ɛ	e	e	e	e	e	mkhedruli letter			Ე	5	eni	U+10D4: GEORGIAN LETTER EN	georgian
ვ		v	v	v	v	v	v	v	v	mkhedruli letter			Ვ	6	vini	U+10D5: GEORGIAN LETTER VIN	georgian
ზ		z	z	z	z	z	z	z	z	mkhedruli letter			Ზ	7	zeni	U+10D6: GEORGIAN LETTER ZEN	georgian
თ		t	t	t⁽ʰ⁾	t	t	t'	t'	t	mkhedruli letter			Თ	9	tani	U+10D7: GEORGIAN LETTER TAN	georgian
ი		i	i	i	i	i	i	i	i	mkhedruli letter			Ი	10	ini	U+10D8: GEORGIAN LETTER IN	georgian
კ		k	k̇	kʼ	k	k'	k	k	ǩ	mkhedruli letter			Კ	20	k'ani	U+10D9: GEORGIAN LETTER KAN	georgian
ლ		l	l	l	l	l	l	l	l	mkhedruli letter			Ლ	30	lasi	U+10DA: GEORGIAN LETTER LAS	georgian
მ		m	m	m	m	m	m	m	m	mkhedruli letter			Მ	40	mani	U+10DB: GEORGIAN LETTER MAN	georgian
ნ		n	n	n	n	n	n	n	n	mkhedruli letter			Ნ	50	nari	U+10DC: GEORGIAN LETTER NAR	georgian
ო		o	ɔ	ɔ	o	o	o	o	o	mkhedruli letter			Ო	70	oni	U+10DD: GEORGIAN LETTER ON	georgian
პ		p	ṗ	pʼ	p	p'	p	p	ṗ	mkhedruli letter			Პ	80	p'ari	U+10DE: GEORGIAN LETTER PAR	georgian
ჟ		z	ʒ	ʒ	z	zh	ž	zh	j	mkhedruli letter			Ჟ	90	zhani	U+10DF: GEORGIAN LETTER ZHAR	georgian
რ		r	r	r	r	r	r	r	r	mkhedruli letter			Რ	100	rae	U+10E0: GEORGIAN LETTER RAE	georgian
ს		s	s	s	s	s	s	s	s	mkhedruli letter			Ს	200	sani	U+10E1: GEORGIAN LETTER SAN	georgian
ტ		t	ṫ	tʼ	t	t'	t	t	ť	mkhedruli letter			Ტ	300	t'ari	U+10E2: GEORGIAN LETTER TAR	georgian
უ		y	u	u	u	u	u	u	u	mkhedruli letter			Უ	400	uni	U+10E3: GEORGIAN LETTER UN	georgian
ფ		p	pʰ	p⁽ʰ⁾	p	p	p'	p'	p	mkhedruli letter			Ფ	500	pari	U+10E4: GEORGIAN LETTER PHAR	georgian
ქ		k	kʰ	k⁽ʰ⁾	k	k	k'	k'	k	mkhedruli letter			Ქ	600	kani	U+10E5: GEORGIAN LETTER KHAR	georgian
ღ		y	ɣ	ɣ	g	gh	ḡ	gh	ğ	mkhedruli letter			Ღ	700	ghani	U+10E6: GEORGIAN LETTER GHAN	georgian
ყ		q	q̇	qʼ	q	q'	q	q	q	mkhedruli letter			Ყ	800	q'ari	U+10E7: GEORGIAN LETTER QAR	georgian
შ		s	ʃ	ʃ	s	sh	š	sh	ş	mkhedruli letter			Შ	900	shini	U+10E8: GEORGIAN LETTER SHIN	georgian
ჩ		c	čʰ	tʃ⁽ʰ⁾	c	ch	č'	ch'	ç	mkhedruli letter			Ჩ	1000	chini	U+10E9: GEORGIAN LETTER CHIN	georgian
ც		c	cʰ	ts⁽ʰ⁾	t	ts	c’	ts'	ts	mkhedruli letter			Ც	2000	tsani	U+10EA: GEORGIAN LETTER CAN	georgian
ძ		d	ʣ	dz	d	dz	j	dz	ž	mkhedruli letter			Ძ	3000	dzili	U+10EB: GEORGIAN LETTER JIL	georgian
წ		c	ċ	tsʼ	t	ts'	c	ts	ts’	mkhedruli letter			Წ	4000	ts'ili	U+10EC: GEORGIAN LETTER CIL	georgian
ჭ		c	č̇	tʃʼ	c	ch'	č	ch	ç̌	mkhedruli letter			Ჭ	5000	ch'ari	U+10ED: GEORGIAN LETTER CHAR	georgian
ხ		x	χ	χ	k	kh	x	kh	x	mkhedruli letter			Ხ	6000	khani	U+10EE: GEORGIAN LETTER XAN	georgian
ჯ		d	ʤ	dʒ	j	j	ǰ	j	c	mkhedruli letter			Ჯ	8000	jani	U+10EF: GEORGIAN LETTER JHAN	georgian
ჰ		h	h	h	h	h	h	h	h	mkhedruli letter			Ჰ	9000	hae	U+10F0: GEORGIAN LETTER HAE	georgian
ჱ		e	e	eɪ			ē	ey		mkhedruli letter	archaic		Ჱ	8	he	U+10F1: GEORGIAN LETTER HE	georgian
ჲ		j	j	je			y	j	y	mkhedruli letter	archaic		Ჲ	60	hie	U+10F2: GEORGIAN LETTER HIE	georgian
ჳ		u	w	uɪ			w			mkhedruli letter	archaic		Ჳ	400	vie	U+10F3: GEORGIAN LETTER WE	georgian
ჴ		q	qʰ	q⁽ʰ⁾			ẖ	q'		mkhedruli letter	archaic		Ჴ	7000	qari, hari	U+10F4: GEORGIAN LETTER HAR	georgian
ჵ		o	o	oː			ō			mkhedruli letter	archaic		Ჵ	10000	hoe	U+10F5: GEORGIAN LETTER HOE	georgian
																	
																	
Ა		A	A	ɑ	A	a	a	a	a	mtavruli letter		ა		1	ani	U+1C90: GEORGIAN MTAVRULI CAPITAL LETTER AN	georgian
Ბ		B	B	b	B	b	b	b	b	mtavruli letter		ბ		2	bani	U+1C91: GEORGIAN MTAVRULI CAPITAL LETTER BAN	georgian
Გ		G	G	ɡ	G	g	g	g	g	mtavruli letter		გ		3	gani	U+1C92: GEORGIAN MTAVRULI CAPITAL LETTER GAN	georgian
Დ		D	D	d	D	d	d	d	d	mtavruli letter		დ		4	doni	U+1C93: GEORGIAN MTAVRULI CAPITAL LETTER DON	georgian
Ე		E	Ɛ	ɛ	E	e	e	e	e	mtavruli letter		ე		5	eni	U+1C94: GEORGIAN MTAVRULI CAPITAL LETTER EN	georgian
Ვ		V	V	v	V	v	v	v	v	mtavruli letter		ვ		6	vini	U+1C95: GEORGIAN MTAVRULI CAPITAL LETTER VIN	georgian
Ზ		Z	Z	z	Z	z	z	z	z	mtavruli letter		ზ		7	zeni	U+1C96: GEORGIAN MTAVRULI CAPITAL LETTER ZEN	georgian
Თ		T	T	t⁽ʰ⁾	T	t	t'	t'	t	mtavruli letter		თ		9	tani	U+1C97: GEORGIAN MTAVRULI CAPITAL LETTER TAN	georgian
Ი		I	I	i	I	i	i	i	i	mtavruli letter		ი		10	ini	U+1C98: GEORGIAN MTAVRULI CAPITAL LETTER IN	georgian
Კ		K	K̇	kʼ	K	k'	k	k	ǩ	mtavruli letter		კ		20	k'ani	U+1C99: GEORGIAN MTAVRULI CAPITAL LETTER KAN	georgian
Ლ		L	L	l	L	l	l	l	l	mtavruli letter		ლ		30	lasi	U+1C9A: GEORGIAN MTAVRULI CAPITAL LETTER LAS	georgian
Მ		M	M	m	M	m	m	m	m	mtavruli letter		მ		40	mani	U+1C9B: GEORGIAN MTAVRULI CAPITAL LETTER MAN	georgian
Ნ		N	N	n	N	n	n	n	n	mtavruli letter		ნ		50	nari	U+1C9C: GEORGIAN MTAVRULI CAPITAL LETTER NAR	georgian
Ო		O	Ɔ	ɔ	O	o	o	o	o	mtavruli letter		ო		70	oni	U+1C9D: GEORGIAN MTAVRULI CAPITAL LETTER ON	georgian
Პ		P	Ṗ	pʼ	P	p'	p	p	ṗ	mtavruli letter		პ		80	p'ari	U+1C9E: GEORGIAN MTAVRULI CAPITAL LETTER PAR	georgian
Ჟ		Z	Ʒ	ʒ	Z	zh	ž	zh	j	mtavruli letter		ჟ		90	zhani	U+1C9F: GEORGIAN MTAVRULI CAPITAL LETTER ZHAR	georgian
Რ		R	R	r	R	r	r	r	r	mtavruli letter		რ		100	rae	U+1CA0: GEORGIAN MTAVRULI CAPITAL LETTER RAE	georgian
Ს		S	S	s	S	s	s	s	s	mtavruli letter		ს		200	sani	U+1CA1: GEORGIAN MTAVRULI CAPITAL LETTER SAN	georgian
Ტ		T	Ṫ	tʼ	T	t'	t	t	ť	mtavruli letter		ტ		300	t'ari	U+1CA2: GEORGIAN MTAVRULI CAPITAL LETTER TAR	georgian
Უ		Y	U	u	U	u	u	u	u	mtavruli letter		უ		400	uni	U+1CA3: GEORGIAN MTAVRULI CAPITAL LETTER UN	georgian
Ფ		P	Pʰ	p⁽ʰ⁾	P	p	p'	p'	p	mtavruli letter		ფ		500	pari	U+1CA4: GEORGIAN MTAVRULI CAPITAL LETTER PHAR	georgian
Ქ		K	Kʰ	k⁽ʰ⁾	K	k	k'	k'	k	mtavruli letter		ქ		600	kani	U+1CA5: GEORGIAN MTAVRULI CAPITAL LETTER KHAR	georgian
Ღ		Y	Ɣ	ɣ	G	gh	ḡ	gh	ğ	mtavruli letter		ღ		700	ghani	U+1CA6: GEORGIAN MTAVRULI CAPITAL LETTER GHAN	georgian
Ყ		Q	Q̇	qʼ	Q	q'	q	q	q	mtavruli letter		ყ		800	q'ari	U+1CA7: GEORGIAN MTAVRULI CAPITAL LETTER QAR	georgian
Შ		S	Ʃ	ʃ	S	sh	š	sh	ş	mtavruli letter		შ		900	shini	U+1CA8: GEORGIAN MTAVRULI CAPITAL LETTER SHIN	georgian
Ჩ		C	Čʰ	tʃ⁽ʰ⁾	C	ch	č'	ch'	ç	mtavruli letter		ჩ		1000	chini	U+1CA9: GEORGIAN MTAVRULI CAPITAL LETTER CHIN	georgian
Ც		C	Cʰ	ts⁽ʰ⁾	T	ts	c’	ts'	ts	mtavruli letter		ც		2000	tsani	U+1CAA: GEORGIAN MTAVRULI CAPITAL LETTER CAN	georgian
Ძ		D	Ǳ	dz	D	dz	j	dz	ž	mtavruli letter		ძ		3000	dzili	U+1CAB: GEORGIAN MTAVRULI CAPITAL LETTER JIL	georgian
Წ		C	Ċ	tsʼ	T	ts'	c	ts	ts’	mtavruli letter		წ		4000	ts'ili	U+1CAC: GEORGIAN MTAVRULI CAPITAL LETTER CIL	georgian
Ჭ		C	Č̇	tʃʼ	C	ch'	č	ch	ç̌	mtavruli letter		ჭ		5000	ch'ari	U+1CAD: GEORGIAN MTAVRULI CAPITAL LETTER CHAR	georgian
Ხ		X	Χ	χ	K	kh	x	kh	x	mtavruli letter		ხ		6000	khani	U+1CAE: GEORGIAN MTAVRULI CAPITAL LETTER XAN	georgian
Ჯ		D	Ǆ	dʒ	J	j	ǰ	j	c	mtavruli letter		ჯ		8000	jani	U+1CAF: GEORGIAN MTAVRULI CAPITAL LETTER JHAN	georgian
Ჰ		H	H	h	H	h	h	h	h	mtavruli letter		ჰ		9000	hae	U+1CB0: GEORGIAN MTAVRULI CAPITAL LETTER HAE	georgian
Ჱ		E	E	eɪ			ē	ey		mtavruli letter		ჱ		8	he	U+1CB1: GEORGIAN MTAVRULI CAPITAL LETTER HE	georgian
Ჲ		J	J	je			y	j	y	mtavruli letter		ჲ		60	hie	U+1CB2: GEORGIAN MTAVRULI CAPITAL LETTER HIE	georgian
Ჳ		U	W	uɪ			w			mtavruli letter		ჳ		400	vie	U+1CB3: GEORGIAN MTAVRULI CAPITAL LETTER WE	georgian
Ჴ		Q	Qʰ	q⁽ʰ⁾			ẖ	q'		mtavruli letter		ჴ		7000	qari, hari	U+1CB4: GEORGIAN MTAVRULI CAPITAL LETTER HAR	georgian
Ჵ		O	O	oː			ō			mtavruli letter	archaic	ჵ		10000	hoe	U+1CB5: GEORGIAN MTAVRULI CAPITAL LETTER HOE	georgian
																	
																	
																	
჻			⁋							paragraph separator						U+10FB: GEORGIAN PARAGRAPH SEPARATOR	georgian																


`



var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
"typeLoc": 10,
"statusLoc": 11,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc": 12,
"uc": 13,
"meaning":0,
"shape": 0,
"numLoc": 14,
"nameLoc": 15,
"nnameLoc": 0,
"ucsName": 16,
"block": 17,

"othertranscriptions": [[6, 'National'], [9, 'ISO']]
}







var otherlanguages = `
Ⴀ	A	A̱	A	a	a æ	asomtravuli letter		ani	a	a	a	1	ⴀ	
Ⴡ	E	E̱			eː	asomtravuli letter		he	ē	ey		8	ⴡ	
Ⴢ	J	J̱			j	asomtravuli letter		hie	y	j	y	60	ⴢ	
Ⴍ	O	Ɔ̱	O	o	œ	asomtravuli letter		oni	o	o	o	70	ⴍ	
Ⴣ	U	W̱			w	asomtravuli letter		vie	w			400	ⴣ	
Ⴓ	Y	U̱	U	u	y	asomtravuli letter		uni	u	u	u	400	ⴓ	
Ⴤ	Q	Q̱ʰ			q⁽ʰ⁾	asomtravuli letter		qari, hari	ẖ	q'		7000	ⴤ	
Ⴧ	E	Ə̱			ə	asomtravuli letter		yn, schva					ⴧ	
Ⴭ	E	Ə̱̇			ə	asomtravuli letter	archaic	aen					ⴭ	
														
														
														
ⴀ	a	a̱	a	a	a æ	nuskhuri letter		ani	a	a	a	1		Ⴀ
ⴡ	e	e̱			eː	nuskhuri letter		he	ē	ey		8		Ⴡ
ⴢ	j	j̱			j	nuskhuri letter		hie	y	j	y	60		Ⴢ
ⴍ	o	ɔ̱	o	o	œ	nuskhuri letter		oni	o	o	o	70		Ⴍ
ⴣ	u	w̱			w	nuskhuri letter		vie	w			400		Ⴣ
ⴓ	y	u̱	u	u	y	nuskhuri letter		uni	u	u	u	400		Ⴓ
ⴤ	g	q̱ʰ			q⁽ʰ⁾	nuskhuri letter		qari, hari	ẖ	q'		7000		Ⴤ
ⴧ	e	ə̱			ə	nuskhuri letter		yn, schva						Ⴧ
ⴭ	e	ə̱̇			ə	nuskhuri letter	archaic	aen						Ⴭ
														
														
														
														
ა	a	a	a	a	a æ	mkhedruli letter		ani	a	a	a	1		Ა
ჱ	e	e			eː	mkhedruli letter		he	ē	ey		8		Ჱ
ჲ	j	j			j	mkhedruli letter		hie	y	j	y	60		Ჲ
ო	o	ɔ	o	o	ɔ œ	mkhedruli letter		oni	o	o	o	70		Ო
ჳ	u	w			w	mkhedruli letter		vie	w			400		Ჳ
უ	y	u	u	u	u y	mkhedruli letter		uni	u	u	u	400		Უ
ჷ	e	ə			ə	mkhedruli letter		yn, schva						Ჷ
ჸ	}	ʔ			ʔ	mkhedruli letter		elif						Ჸ
ჴ	q	qʰ			q⁽ʰ⁾	mkhedruli letter		qari, hari	ẖ	q'		7000		Ჴ
ჶ	f	f			f	mkhedruli letter		fi	f		f			Ჶ
ჹ	g	ɢ			ɢ	mkhedruli letter	archaic	turned gani						Ჹ
ჺ	{	ʕ			ʕ	mkhedruli letter	archaic	aini						Ჺ
ჼ	n	ᴺ			̃	mkhedruli letter	archaic	modifier nar						
ჽ	e	ə̇			ə	mkhedruli letter	archaic	aen						Ჽ
ჾ	l	ᴸ			̴	mkhedruli hard sign	archaic	hard sign						Ჾ
ჿ	w	ʷ			ʷ	mkhedruli labial sign	archaic	labial sign						Ჿ
														
														
														
Ა	A	A	A	a	a æ	mtavruli letter		ani	a	a	a	1	ა	
Ჱ	E	E			eː	mtavruli letter		he	ē	ey		8	ჱ	
Ჲ	J	J			j	mtavruli letter		hie	y	j	y	60	ჲ	
Ო	O	Ɔ	O	o	œ	mtavruli letter		oni	o	o	o	70	ო	
Ჳ	U	W			w	mtavruli letter		vie	w			400	ჳ	
Უ	Y	U	U	u	y	mtavruli letter		uni	u	u	u	400	უ	
Ჷ	E	Ə			ə	mtavruli letter		yn, schva					ჷ	
Ჸ	}	ʔ			ʔ	mtavruli letter		elif					ჸ	
Ჴ	Q	Qʰ			q⁽ʰ⁾	mtavruli letter		qari, hari	ẖ	q'		7000	ჴ	
Ჶ	F	F			f	mtavruli letter		fi	f		f		ჶ	
Ჹ	G	ɢ			ɢ	mtavruli letter	archaic	turned gani					ჹ	
Ჺ	{	ʕ			ʕ	mtavruli letter	archaic	aini					ჺ	
Ჽ	E	Ə̇			ə	mtavruli letter	archaic	aen					ჽ	
Ჾ	L	ᴸ̄			̴	mtavruli hard sign	archaic	hard sign					ჾ	
Ჿ	W	ʷ̄			ʷ	mtavruli labial sign	archaic	labial sign					ჿ	
																											
														
჻		⁋				paragraph separator								`

var otherlanguagescols = {
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nameLoc": 8,
"nnameLoc": 0,
"numLoc": 12,
"statusLoc": 7,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":11,
"meaning":0,
"shape":0,
"lc":13,
"uc":14,
"transcription":4,
"transcription2":9,

"othertranscriptions": [[9, 'ISO']]
}









