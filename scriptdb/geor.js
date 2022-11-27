// This data contains all of the larger georgian spreadsheet. See also geor-ka and geok-ka for character apps.

var spreadsheet = `
ა	a	ɑ		a	a	g	Ll		mkhedruli letter			Ა	1		ani	U+10D0: GEORGIAN LETTER AN	a	a	a	✓	Mkhedruli
ე	e	ɛ		ɛ	e	t	Ll		mkhedruli letter			Ე	5		eni	U+10D4: GEORGIAN LETTER EN	e	e	e	✓	
ი	i	i		i	i	n	Ll		mkhedruli letter			Ი	10		ini	U+10D8: GEORGIAN LETTER IN	i	i	i	✓	
ო	o	ɔ		ɔ	o	k	Ll		mkhedruli letter			Ო	70		oni	U+10DD: GEORGIAN LETTER ON	o	o	o	✓	
უ	u	u		u	u	e	Ll		mkhedruli letter			Უ	400		uni	U+10E3: GEORGIAN LETTER UN	u	u	u	✓	
ფ	p¶	p⁽ʰ⁾		p	p	a	Ll		mkhedruli letter			Ფ	500		pari	U+10E4: GEORGIAN LETTER PHAR	p'	p'	p	✓	
პ	p	pʼ		ṗ	p'	h	Ll		mkhedruli letter			Პ	80		p'ari	U+10DE: GEORGIAN LETTER PAR	p	p	ṗ	✓	
ბ	b	b		b	b	.	Ll		mkhedruli letter			Ბ	2		bani	U+10D1: GEORGIAN LETTER BAN	b	b	b	✓	
თ	t	t⁽ʰ⁾		t	t	/	Ll		mkhedruli letter			Თ	9		tani	U+10D7: GEORGIAN LETTER TAN	t'	t'	t	✓	
ტ	t	tʼ		ṫ	t'	m	Ll		mkhedruli letter			Ტ	300		t'ari	U+10E2: GEORGIAN LETTER TAR	t	t	ť	✓	
დ	d	d		d	d	;	Ll		mkhedruli letter			Დ	4		doni	U+10D3: GEORGIAN LETTER DON	d	d	d	✓	
ქ	k	k⁽ʰ⁾		k	k	,	Ll		mkhedruli letter			Ქ	600		kani	U+10E5: GEORGIAN LETTER KHAR	k'	k'	k	✓	
კ	k	kʼ		k̇	k'	r	Ll		mkhedruli letter			Კ	20		k'ani	U+10D9: GEORGIAN LETTER KAN	k	k	ǩ	✓	
გ	g	ɡ		g	g	u	Ll		mkhedruli letter			Გ	3		gani	U+10D2: GEORGIAN LETTER GAN	g	g	g	✓	
ყ	q	qʼ		q̇	q'	c	Ll		mkhedruli letter			Ყ	800		q'ari	U+10E7: GEORGIAN LETTER QAR	q	q	q	✓	
ც	t	t͡s⁽ʰ⁾		ʦ	ts	]	Ll		mkhedruli letter			Ც	2000		tsani	U+10EA: GEORGIAN LETTER CAN	c’	ts'	ts	✓	
წ	t	t͡sʼ		ʦ̇	ts'	o	Ll		mkhedruli letter			Წ	4000		ts'ili	U+10EC: GEORGIAN LETTER CIL	c	ts	ts’	✓	
ძ	d	d͡z		ʣ	dz	s	Ll		mkhedruli letter			Ძ	3000		dzili	U+10EB: GEORGIAN LETTER JIL	j	dz	ž	✓	
ჩ	c	t͡ʃ⁽ʰ⁾		ʧ	ch	x	Ll		mkhedruli letter			Ჩ	1000		chini	U+10E9: GEORGIAN LETTER CHIN	č'	ch'	ç	✓	
ჭ	c	t͡ʃʼ		ʧ̇	ch'	z	Ll		mkhedruli letter			Ჭ	5000		ch'ari	U+10ED: GEORGIAN LETTER CHAR	č	ch	ç̌	✓	
ჯ	j	d͡ʒ		ʤ	j	w	Ll		mkhedruli letter			Ჯ	8000		jani	U+10EF: GEORGIAN LETTER JHAN	ǰ	j	c	✓	
ვ	v	v		v	v	d	Ll		mkhedruli letter			Ვ	6		vini	U+10D5: GEORGIAN LETTER VIN	v	v	v	✓	
ს	s	s		s	s	v	Ll		mkhedruli letter			Ს	200		sani	U+10E1: GEORGIAN LETTER SAN	s	s	s	✓	
ზ	z	z		z	z	p	Ll		mkhedruli letter			Ზ	7		zeni	U+10D6: GEORGIAN LETTER ZEN	z	z	z	✓	
შ	s	ʃ		ʃ	sh	i	Ll		mkhedruli letter			Შ	900		shini	U+10E8: GEORGIAN LETTER SHIN	š	sh	ş	✓	
ჟ	z	ʒ		ʒ	zh		Ll		mkhedruli letter			Ჟ	90		zhani	U+10DF: GEORGIAN LETTER ZHAR	ž	zh	j	✓	
ღ	y	ɣ		ɣ	gh	q	Ll		mkhedruli letter			Ღ	700		ghani	U+10E6: GEORGIAN LETTER GHAN	ḡ	gh	ğ	✓	
ხ	x	x χ		χ	kh	[	Ll		mkhedruli letter			Ხ	6000		khani	U+10EE: GEORGIAN LETTER XAN	x	kh	x	✓	
ჰ	h	h		h	h	?	Ll		mkhedruli letter			Ჰ	9000		hae	U+10F0: GEORGIAN LETTER HAE	h	h	h	✓	
მ	m	m		m	m	b	Ll		mkhedruli letter			Მ	40		mani	U+10DB: GEORGIAN LETTER MAN	m	m	m	✓	
ნ	n	n		n	n	y	Ll		mkhedruli letter			Ნ	50		nari	U+10DC: GEORGIAN LETTER NAR	n	n	n	✓	
რ	r	r		r	r	j	Ll		mkhedruli letter			Რ	100		rae	U+10E0: GEORGIAN LETTER RAE	r	r	r	✓	
ლ	l	l		l	l	l	Ll		mkhedruli letter			Ლ	30		lasi	U+10DA: GEORGIAN LETTER LAS	l	l	l	✓	
ჱ	e	eɪ		e		y	Ll	a	mkhedruli letter	archaic		Ჱ	8		he	U+10F1: GEORGIAN LETTER HE	ē	ey		✓	
ჲ	j	je		j		n	Ll	a	mkhedruli letter	archaic		Ჲ	60		hie	U+10F2: GEORGIAN LETTER HIE	y	j	y	✓	
ჳ	w	uɪ		w		d	Ll	a	mkhedruli letter	archaic		Ჳ	400		vie	U+10F3: GEORGIAN LETTER WE	w			✓	
ჴ	q	q⁽ʰ⁾		q		[	Ll	a	mkhedruli letter	archaic		Ჴ	7000		qari, hari	U+10F4: GEORGIAN LETTER HAR	ẖ	q'		✓	
ჵ	o	oː		o		/	Ll	a	mkhedruli letter	archaic		Ჵ	10000		hoe	U+10F5: GEORGIAN LETTER HOE	ō			✓	
																					
Ა	A	ɑ		A	a	G	Lu		mtavruli letter		ა		1		ani	U+1C90: GEORGIAN MTAVRULI CAPITAL LETTER AN	a	a	a	✓	Mtavruli
Ე	E	ɛ		Ɛ	e	T	Lu		mtavruli letter		ე		5		eni	U+1C94: GEORGIAN MTAVRULI CAPITAL LETTER EN	e	e	e	✓	
Ი	I	i		I	i	N	Lu		mtavruli letter		ი		10		ini	U+1C98: GEORGIAN MTAVRULI CAPITAL LETTER IN	i	i	i	✓	
Ო	O	ɔ		Ɔ	o	K	Lu		mtavruli letter		ო		70		oni	U+1C9D: GEORGIAN MTAVRULI CAPITAL LETTER ON	o	o	o	✓	
Უ	U	u		U	u	E	Lu		mtavruli letter		უ		400		uni	U+1CA3: GEORGIAN MTAVRULI CAPITAL LETTER UN	u	u	u	✓	
Ფ	P	p⁽ʰ⁾		P	p	A	Lu		mtavruli letter		ფ		500		pari	U+1CA4: GEORGIAN MTAVRULI CAPITAL LETTER PHAR	p'	p'	p	✓	
Პ	P	pʼ		Ṗ	p'	H	Lu		mtavruli letter		პ		80		p'ari	U+1C9E: GEORGIAN MTAVRULI CAPITAL LETTER PAR	p	p	ṗ	✓	
Ბ	B	b		B	b	>	Lu		mtavruli letter		ბ		2		bani	U+1C91: GEORGIAN MTAVRULI CAPITAL LETTER BAN	b	b	b	✓	
Თ	T	t⁽ʰ⁾		T	t	F	Lu		mtavruli letter		თ		9		tani	U+1C97: GEORGIAN MTAVRULI CAPITAL LETTER TAN	t'	t'	t	✓	
Ტ	T	tʼ		Ṫ	t'	M	Lu		mtavruli letter		ტ		300		t'ari	U+1CA2: GEORGIAN MTAVRULI CAPITAL LETTER TAR	t	t	ť	✓	
Დ	D	d		D	d	:	Lu		mtavruli letter		დ		4		doni	U+1C93: GEORGIAN MTAVRULI CAPITAL LETTER DON	d	d	d	✓	
Ქ	K	k⁽ʰ⁾		K	k	<	Lu		mtavruli letter		ქ		600		kani	U+1CA5: GEORGIAN MTAVRULI CAPITAL LETTER KHAR	k'	k'	k	✓	
Კ	K	kʼ		K̇	k'		Lu		mtavruli letter		კ		20		k'ani	U+1C99: GEORGIAN MTAVRULI CAPITAL LETTER KAN	k	k	ǩ	✓	
Გ	G	ɡ		G	g	U	Lu		mtavruli letter		გ		3		gani	U+1C92: GEORGIAN MTAVRULI CAPITAL LETTER GAN	g	g	g	✓	
Ყ	Q	qʼ		Q̇	q'	C	Lu		mtavruli letter		ყ		800		q'ari	U+1CA7: GEORGIAN MTAVRULI CAPITAL LETTER QAR	q	q	q	✓	
Ც	T	t͡s⁽ʰ⁾		Tˢ	ts	}	Lu		mtavruli letter		ც		2000		tsani	U+1CAA: GEORGIAN MTAVRULI CAPITAL LETTER CAN	c’	ts'	ts	✓	
Წ	T	t͡sʼ		Ṫˢ	ts'	O	Lu		mtavruli letter		წ		4000		ts'ili	U+1CAC: GEORGIAN MTAVRULI CAPITAL LETTER CIL	c	ts	ts’	✓	
Ძ	D	d͡z		ǲ	dz	S	Lu		mtavruli letter		ძ		3000		dzili	U+1CAB: GEORGIAN MTAVRULI CAPITAL LETTER JIL	j	dz	ž	✓	
Ჩ	C	t͡ʃ⁽ʰ⁾		Tᶴ	ch	X	Lu		mtavruli letter		ჩ		1000		chini	U+1CA9: GEORGIAN MTAVRULI CAPITAL LETTER CHIN	č'	ch'	ç	✓	
Ჭ	C	t͡ʃʼ		Ṫᶴ	ch'	Z	Lu		mtavruli letter		ჭ		5000		ch'ari	U+1CAD: GEORGIAN MTAVRULI CAPITAL LETTER CHAR	č	ch	ç̌	✓	
Ჯ	J	d͡ʒ		Dᶾ	j	W	Lu		mtavruli letter		ჯ		8000		jani	U+1CAF: GEORGIAN MTAVRULI CAPITAL LETTER JHAN	ǰ	j	c	✓	
Ვ	V	v		V	v	D	Lu		mtavruli letter		ვ		6		vini	U+1C95: GEORGIAN MTAVRULI CAPITAL LETTER VIN	v	v	v	✓	
Ს	S	s		S	s	V	Lu		mtavruli letter		ს		200		sani	U+1CA1: GEORGIAN MTAVRULI CAPITAL LETTER SAN	s	s	s	✓	
Ზ	Z	z		Z	z	P	Lu		mtavruli letter		ზ		7		zeni	U+1C96: GEORGIAN MTAVRULI CAPITAL LETTER ZEN	z	z	z	✓	
Შ	S	ʃ		Ʃ	sh	I	Lu		mtavruli letter		შ		900		shini	U+1CA8: GEORGIAN MTAVRULI CAPITAL LETTER SHIN	š	sh	ş	✓	
Ჟ	Z	ʒ		Ʒ	zh	"	Lu		mtavruli letter		ჟ		90		zhani	U+1C9F: GEORGIAN MTAVRULI CAPITAL LETTER ZHAR	ž	zh	j	✓	
Ღ	Y	ɣ		Ɣ	gh	Q	Lu		mtavruli letter		ღ		700		ghani	U+1CA6: GEORGIAN MTAVRULI CAPITAL LETTER GHAN	ḡ	gh	ğ	✓	
Ხ	X	x χ		Χ	kh	{	Lu		mtavruli letter		ხ		6000		khani	U+1CAE: GEORGIAN MTAVRULI CAPITAL LETTER XAN	x	kh	x	✓	
Ჰ	H	h		H	h	?	Lu		mtavruli letter		ჰ		9000		hae	U+1CB0: GEORGIAN MTAVRULI CAPITAL LETTER HAE	h	h	h	✓	
Მ	M	m		M	m	B	Lu		mtavruli letter		მ		40		mani	U+1C9B: GEORGIAN MTAVRULI CAPITAL LETTER MAN	m	m	m	✓	
Ნ	N	n		N	n	Y	Lu		mtavruli letter		ნ		50		nari	U+1C9C: GEORGIAN MTAVRULI CAPITAL LETTER NAR	n	n	n	✓	
Რ	R	r		R	r	J	Lu		mtavruli letter		რ		100		rae	U+1CA0: GEORGIAN MTAVRULI CAPITAL LETTER RAE	r	r	r	✓	
Ლ	L	l		L	l	L	Lu		mtavruli letter		ლ		30		lasi	U+1C9A: GEORGIAN MTAVRULI CAPITAL LETTER LAS	l	l	l	✓	
Ჱ	E	eɪ		E		T	Lu		mtavruli letter		ჱ		8		he	U+1CB1: GEORGIAN MTAVRULI CAPITAL LETTER HE	ē	ey		✓	
Ჲ	J	je		J		N	Lu		mtavruli letter		ჲ		60		hie	U+1CB2: GEORGIAN MTAVRULI CAPITAL LETTER HIE	y	j	y	✓	
Ჳ	W	uɪ		W		D	Lu		mtavruli letter		ჳ		400		vie	U+1CB3: GEORGIAN MTAVRULI CAPITAL LETTER WE	w			✓	
Ჴ	Q	q⁽ʰ⁾		Q		{	Lu		mtavruli letter		ჴ		7000		qari, hari	U+1CB4: GEORGIAN MTAVRULI CAPITAL LETTER HAR	ẖ	q'		✓	
Ჵ	O	oː		O		?	Lu	a	mtavruli letter	archaic	ჵ		10000		hoe	U+1CB5: GEORGIAN MTAVRULI CAPITAL LETTER HOE	ō			✓	
																					
჻				⁋			Po		paragraph separator							U+10FB: GEORGIAN PARAGRAPH SEPARATOR				✓	Punctuation
₾				¤			Sc		currency sign							U+00A4 CURRENCY SIGN					
№				#		3	So		number sign							U+2116 NUMERO SIGN					
																					
Ⴀ	A	ɑ		A̱	a	G	Lu		asomtravuli letter		ⴀ		1		ani	U+10A0: GEORGIAN CAPITAL LETTER AN	a	a	a	✓	Asomtravuli
Ⴄ	E	ɛ		Ɛ̱	e	T	Lu		asomtravuli letter		ⴄ		5		eni	U+10A4: GEORGIAN CAPITAL LETTER EN	e	e	e	✓	
Ⴈ	I	i		I̱	i	N	Lu		asomtravuli letter		ⴈ		10		ini	U+10A8: GEORGIAN CAPITAL LETTER IN	i	i	i	✓	
Ⴍ	O	ɔ		Ɔ̱	o	K	Lu		asomtravuli letter		ⴍ		70		oni	U+10AD: GEORGIAN CAPITAL LETTER ON	o	o	o	✓	
Ⴓ	U	u		U̱	u	E	Lu		asomtravuli letter		ⴓ		400		uni	U+10B3: GEORGIAN CAPITAL LETTER UN	u	u	u	✓	
Ⴔ	P	p⁽ʰ⁾		P̱	p	A	Lu		asomtravuli letter		ⴔ		500		pari	U+10B4: GEORGIAN CAPITAL LETTER PHAR	p'	p'	p	✓	
Ⴎ	P	pʼ		Ṗ̱	p'	H	Lu		asomtravuli letter		ⴎ		80		p'ari	U+10AE: GEORGIAN CAPITAL LETTER PAR	p	p	ṗ	✓	
Ⴁ	B	b		Ḇ	b	>	Lu		asomtravuli letter		ⴁ		2		bani	U+10A1: GEORGIAN CAPITAL LETTER BAN	b	b	b	✓	
Ⴇ	T	t⁽ʰ⁾		Ṯ	t	F	Lu		asomtravuli letter		ⴇ		9		tani	U+10A7: GEORGIAN CAPITAL LETTER TAN	t'	t'	t	✓	
Ⴒ	T	tʼ		Ṯ̇	t'	M	Lu		asomtravuli letter		ⴒ		300		t'ari	U+10B2: GEORGIAN CAPITAL LETTER TAR	t	t	ť	✓	
Ⴃ	D	d		Ḏ	d	:	Lu		asomtravuli letter		ⴃ		4		doni	U+10A3: GEORGIAN CAPITAL LETTER DON	d	d	d	✓	
Ⴕ	K	k⁽ʰ⁾		Ḵ	k	<	Lu		asomtravuli letter		ⴕ		600		kani	U+10B5: GEORGIAN CAPITAL LETTER KHAR	k'	k'	k	✓	
Ⴉ	K	kʼ		Ḵ̇	k'		Lu		asomtravuli letter		ⴉ		20		k'ani	U+10A9: GEORGIAN CAPITAL LETTER KAN	k	k	ǩ	✓	
Ⴂ	G	ɡ		G̱	g	U	Lu		asomtravuli letter		ⴂ		3		gani	U+10A2: GEORGIAN CAPITAL LETTER GAN	g	g	g	✓	
Ⴗ	Q	qʼ		Q̱̇	q'	C	Lu		asomtravuli letter		ⴗ		800		q'ari	U+10B7: GEORGIAN CAPITAL LETTER QAR	q	q	q	✓	
Ⴚ	T	t͡s⁽ʰ⁾		Ṯˢ	ts	}	Lu		asomtravuli letter		ⴚ		2000		tsani	U+10BA: GEORGIAN CAPITAL LETTER CAN	c’	ts'	ts	✓	
Ⴜ	T	t͡sʼ		Ṯ̇ˢ	ts'	O	Lu		asomtravuli letter		ⴜ		4000		ts'ili	U+10BC: GEORGIAN CAPITAL LETTER CIL	c	ts	ts’	✓	
Ⴛ	D	d͡z		ǲ̱	dz	S	Lu		asomtravuli letter		ⴛ		3000		dzili	U+10BB: GEORGIAN CAPITAL LETTER JIL	j	dz	ž	✓	
Ⴙ	C	t͡ʃ⁽ʰ⁾		Ṯᶴ	ch	X	Lu		asomtravuli letter		ⴙ		1000		chini	U+10B9: GEORGIAN CAPITAL LETTER CHIN	č'	ch'	ç	✓	
Ⴝ	C	t͡ʃʼ		Ṯ̇ᶴ	ch'	Z	Lu		asomtravuli letter		ⴝ		5000		ch'ari	U+10BD: GEORGIAN CAPITAL LETTER CHAR	č	ch	ç̌	✓	
Ⴟ	J	d͡ʒ		Ḏᶾ	j	W	Lu		asomtravuli letter		ⴟ		8000		jani	U+10BF: GEORGIAN CAPITAL LETTER JHAN	ǰ	j	c	✓	
Ⴅ	V	v		V̱	v	D	Lu		asomtravuli letter		ⴅ		6		vini	U+10A5: GEORGIAN CAPITAL LETTER VIN	v	v	v	✓	
Ⴑ	S	s		S̱	s	V	Lu		asomtravuli letter		ⴑ		200		sani	U+10B1: GEORGIAN CAPITAL LETTER SAN	s	s	s	✓	
Ⴆ	Z	z		Ẕ	z	P	Lu		asomtravuli letter		ⴆ		7		zeni	U+10A6: GEORGIAN CAPITAL LETTER ZEN	z	z	z	✓	
Ⴘ	S	ʃ		Ʃ̱	sh	I	Lu		asomtravuli letter		ⴘ		900		shini	U+10B8: GEORGIAN CAPITAL LETTER SHIN	š	sh	ş	✓	
Ⴏ	Z	ʒ		Ʒ̱	zh	"	Lu		asomtravuli letter		ⴏ		90		zhani	U+10AF: GEORGIAN CAPITAL LETTER ZHAR	ž	zh	j	✓	
Ⴖ	Y	ɣ		Ɣ̱	gh	Q	Lu		asomtravuli letter		ⴖ		700		ghani	U+10B6: GEORGIAN CAPITAL LETTER GHAN	ḡ	gh	ğ	✓	
Ⴞ	X	x χ		Χ̱	kh	{	Lu		asomtravuli letter		ⴞ		6000		khani	U+10BE: GEORGIAN CAPITAL LETTER XAN	x	kh	x	✓	
Ⴠ	H	h		H̱	h	?	Lu		asomtravuli letter		ⴠ		9000		hae	U+10C0: GEORGIAN CAPITAL LETTER HAE	h	h	h	✓	
Ⴋ	M	m		M̱	m	B	Lu		asomtravuli letter		ⴋ		40		mani	U+10AB: GEORGIAN CAPITAL LETTER MAN	m	m	m	✓	
Ⴌ	N	n		Ṉ	n	Y	Lu		asomtravuli letter		ⴌ		50		nari	U+10AC: GEORGIAN CAPITAL LETTER NAR	n	n	n	✓	
Ⴐ	R	r		Ṟ	r	J	Lu		asomtravuli letter		ⴐ		100		rae	U+10B0: GEORGIAN CAPITAL LETTER RAE	r	r	r	✓	
Ⴊ	L	l		Ḻ	l	L	Lu		asomtravuli letter		ⴊ		30		lasi	U+10AA: GEORGIAN CAPITAL LETTER LAS	l	l	l	✓	
Ⴡ	E	eɪ		E̱		T	Lu		asomtravuli letter		ⴡ		8		he	U+10C1: GEORGIAN CAPITAL LETTER HE	ē	ey		✓	
Ⴢ	J	je		J̱		N	Lu		asomtravuli letter		ⴢ		60		hie	U+10C2: GEORGIAN CAPITAL LETTER HIE	y	j	y	✓	
Ⴣ	W	uɪ		W̱		D	Lu		asomtravuli letter		ⴣ		400		vie	U+10C3: GEORGIAN CAPITAL LETTER WE	w			✓	
Ⴤ	Q	q⁽ʰ⁾		Q̱		{	Lu		asomtravuli letter		ⴤ		7000		qari, hari	U+10C4: GEORGIAN CAPITAL LETTER HAR	ẖ	q'		✓	
Ⴥ	O	oː		O̱		?	Lu	a	asomtravuli letter	archaic	ⴥ		10000		hoe	U+10C5: GEORGIAN CAPITAL LETTER HOE	ō			✓	
																					
ⴀ	a	ɑ		a̱	a	g	Ll		nuskhuri letter			Ⴀ	1		ani	U+2D00: GEORGIAN SMALL LETTER AN	a	a	a	✓	Nuskhuri
ⴈ	i	i		i̱	i	t	Ll		nuskhuri letter			Ⴈ	10		ini	U+2D08: GEORGIAN SMALL LETTER IN	i	i	i	✓	
ⴄ	e	ɛ		ɛ̱	e	n	Ll		nuskhuri letter			Ⴄ	5		eni	U+2D04: GEORGIAN SMALL LETTER EN	e	e	e	✓	
ⴍ	o	ɔ		ɔ̱	o	k	Ll		nuskhuri letter			Ⴍ	70		oni	U+2D0D: GEORGIAN SMALL LETTER ON	o	o	o	✓	
ⴓ	u	u		u̱	u	e	Ll		nuskhuri letter			Ⴓ	400		uni	U+2D13: GEORGIAN SMALL LETTER UN	u	u	u	✓	
ⴔ	p	p⁽ʰ⁾		p̱	p	a	Ll		nuskhuri letter			Ⴔ	500		pari	U+2D14: GEORGIAN SMALL LETTER PHAR	p'	p'	p	✓	
ⴎ	p	pʼ		ṗ̱	p'	h	Ll		nuskhuri letter			Ⴎ	80		p'ari	U+2D0E: GEORGIAN SMALL LETTER PAR	p	p	ṗ	✓	
ⴁ	b	b		ḇ	b	.	Ll		nuskhuri letter			Ⴁ	2		bani	U+2D01: GEORGIAN SMALL LETTER BAN	b	b	b	✓	
ⴇ	t	t⁽ʰ⁾		ṯ	t	/	Ll		nuskhuri letter			Ⴇ	9		tani	U+2D07: GEORGIAN SMALL LETTER TAN	t'	t'	t	✓	
ⴒ	t	tʼ		ṯ̇	t'	m	Ll		nuskhuri letter			Ⴒ	300		t'ari	U+2D12: GEORGIAN SMALL LETTER TAR	t	t	ť	✓	
ⴃ	d	d		ḏ	d	;	Ll		nuskhuri letter			Ⴃ	4		doni	U+2D03: GEORGIAN SMALL LETTER DON	d	d	d	✓	
ⴕ	k	k⁽ʰ⁾		ḵ	k	,	Ll		nuskhuri letter			Ⴕ	600		kani	U+2D15: GEORGIAN SMALL LETTER KHAR	k'	k'	k	✓	
ⴉ	k	kʼ		ḵ̇	k'	r	Ll		nuskhuri letter			Ⴉ	20		k'ani	U+2D09: GEORGIAN SMALL LETTER KAN	k	k	ǩ	✓	
ⴂ	g	ɡ		g̱	g	u	Ll		nuskhuri letter			Ⴂ	3		gani	U+2D02: GEORGIAN SMALL LETTER GAN	g	g	g	✓	
ⴗ	g	qʼ		q̱̇	q'	c	Ll		nuskhuri letter			Ⴗ	800		q'ari	U+2D17: GEORGIAN SMALL LETTER QAR	q	q	q	✓	
ⴚ	t	t͡s⁽ʰ⁾		ʦ̱	ts	]	Ll		nuskhuri letter			Ⴚ	2000		tsani	U+2D1A: GEORGIAN SMALL LETTER CAN	c’	ts'	ts	✓	
ⴜ	t	t͡sʼ		ʦ̱̇	ts'	o	Ll		nuskhuri letter			Ⴜ	4000		ts'ili	U+2D1C: GEORGIAN SMALL LETTER CIL	c	ts	ts’	✓	
ⴛ	d	d͡z		ʣ̱	dz	s	Ll		nuskhuri letter			Ⴛ	3000		dzili	U+2D1B: GEORGIAN SMALL LETTER JIL	j	dz	ž	✓	
ⴙ	c	t͡ʃ⁽ʰ⁾		ʧ̱	ch	x	Ll		nuskhuri letter			Ⴙ	1000		chini	U+2D19: GEORGIAN SMALL LETTER CHIN	č'	ch'	ç	✓	
ⴝ	c	t͡ʃʼ		ʧ̱̇	ch'	z	Ll		nuskhuri letter			Ⴝ	5000		ch'ari	U+2D1D: GEORGIAN SMALL LETTER CHAR	č	ch	ç̌	✓	
ⴟ	j	d͡ʒ		ʤ̱	j	w	Ll		nuskhuri letter			Ⴟ	8000		jani	U+2D1F: GEORGIAN SMALL LETTER JHAN	ǰ	j	c	✓	
ⴅ	v	v		v̱	v	d	Ll		nuskhuri letter			Ⴅ	6		vini	U+2D05: GEORGIAN SMALL LETTER VIN	v	v	v	✓	
ⴑ	s	s		s̱	s	v	Ll		nuskhuri letter			Ⴑ	200		sani	U+2D11: GEORGIAN SMALL LETTER SAN	s	s	s	✓	
ⴆ	z	z		ẕ	z	p	Ll		nuskhuri letter			Ⴆ	7		zeni	U+2D06: GEORGIAN SMALL LETTER ZEN	z	z	z	✓	
ⴘ	s	ʃ		ʃ̱	sh	i	Ll		nuskhuri letter			Ⴘ	900		shini	U+2D18: GEORGIAN SMALL LETTER SHIN	š	sh	ş	✓	
ⴏ	z	ʒ		ʒ̱	zh		Ll		nuskhuri letter			Ⴏ	90		zhani	U+2D0F: GEORGIAN SMALL LETTER ZHAR	ž	zh	j	✓	
ⴖ	y	ɣ		ɣ̱	gh	q	Ll		nuskhuri letter			Ⴖ	700		ghani	U+2D16: GEORGIAN SMALL LETTER GHAN	ḡ	gh	ğ	✓	
ⴞ	x	x χ		χ̱	kh	[	Ll		nuskhuri letter			Ⴞ	6000		khani	U+2D1E: GEORGIAN SMALL LETTER XAN	x	kh	x	✓	
ⴠ	h	h		ẖ	h	?	Ll		nuskhuri letter			Ⴠ	9000		hae	U+2D20: GEORGIAN SMALL LETTER HAE	h	h	h	✓	
ⴋ	m	m		m̱	m	b	Ll		nuskhuri letter			Ⴋ	40		mani	U+2D0B: GEORGIAN SMALL LETTER MAN	m	m	m	✓	
ⴌ	n	n		ṉ	n	y	Ll		nuskhuri letter			Ⴌ	50		nari	U+2D0C: GEORGIAN SMALL LETTER NAR	n	n	n	✓	
ⴐ	r	r		ṟ	r	j	Ll		nuskhuri letter			Ⴐ	100		rae	U+2D10: GEORGIAN SMALL LETTER RAE	r	r	r	✓	
ⴊ	l	l		ḻ	l	l	Ll		nuskhuri letter			Ⴊ	30		lasi	U+2D0A: GEORGIAN SMALL LETTER LAS	l	l	l	✓	
ⴡ	e	eɪ		e̱		y	Ll		nuskhuri letter			Ⴡ	8		he	U+2D21: GEORGIAN SMALL LETTER HE	ē	ey		✓	
ⴢ	j	je		j̱		n	Ll		nuskhuri letter			Ⴢ	60		hie	U+2D22: GEORGIAN SMALL LETTER HIE	y	j	y	✓	
ⴣ	w	uɪ		w̱		d	Ll		nuskhuri letter			Ⴣ	400		vie	U+2D23: GEORGIAN SMALL LETTER WE	w			✓	
ⴤ	g	q⁽ʰ⁾		q̱		[	Ll		nuskhuri letter			Ⴤ	7000		qari, hari	U+2D24: GEORGIAN SMALL LETTER HAR	ẖ	q'		✓	
ⴥ	o	oː		o̱		/	Ll	a	nuskhuri letter	archaic		Ⴥ	10000		hoe	U+2D25: GEORGIAN SMALL LETTER HOE	ō			✓	
																					
																					
჻							Po		paragraph separator							U+10FB: GEORGIAN PARAGRAPH SEPARATOR				✓	
																					
ʼ				ʼ	ʼ		Lm		apostrophe							U+02BC: MODIFIER LETTER APOSTROPHE					
§				§	§		Po		section sign							U+00A7: SECTION SIGN					
†				†	†		Po		dagger							U+2020: DAGGER					
‡				‡	‡		Po		double dagger							U+2021: DOUBLE DAGGER					
′				′	′		Po		prime							U+2032: PRIME					
″				″	″		Po		double prime							U+2033: DOUBLE PRIME					
																					
.	.			.	.		Po		full stop							U+002E: FULL STOP					
,	,			,	,		Po		comma							U+002C: COMMA					
:	:			:	:		Po		colon							U+003A: COLON					
;	;			;	;		Po		semicolon							U+003B: SEMICOLON					
!	!			!	!		Po		exclamation mark							U+0021: EXCLAMATION MARK					
?	?			?	?		Po		question mark							U+003F: QUESTION MARK					
																					
«	<			«	“		Pi		quotation mark							U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK					
„	<			“	“		Pi		quotation mark							U+201E: DOUBLE LOW-9 QUOTATION MARK					
»	>			»	”		Pf		quotation mark							U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK					
“	>			›			Pf		quotation mark							U+201C: LEFT DOUBLE QUOTATION MARK					
																					
(	(			(	(		Ps		parenthesis							U+0028: LEFT PARENTHESIS					
[	(			[	[		Pe		bracket							U+005B: LEFT SQUARE BRACKET					
)	)			)	)		Ps		parenthesis							U+0029: RIGHT PARENTHESIS					
]	)			]	]		Pe		bracket							U+005D: RIGHT SQUARE BRACKET					
																					
-	-			-	-		Pd		hyphen							U+2010: HYPHEN					
‑	-			‑	‑		Pd		non-breaking hyphen							U+2011: NON-BREAKING HYPHEN					
–	-			–	–		Pd		en dash							U+2013: EN DASH					
—	-			—	—		Pd		em dash							U+2014: EM DASH					



`

latinPanel = 'A B D E G H I J K L M N O P Q R S T U V W Z a b c d e g h i j k l m n o p q r t u v w x z ¤ Ɔ Ɛ Ɣ Ʃ Ʒ ǲ ɑ ɔ ɛ ɡ ɣ ɪ ʃ ʒ ʣ ʤ ʦ ʧ ʰ ʼ ː ˢ ̇ ̱ ͡ Χ χ ᶴ ᶾ Ḇ ḇ Ḏ ḏ Ḵ ḵ Ḻ ḻ Ṉ ṉ Ṗ ṗ Ṟ ṟ Ṫ ṫ Ṯ ṯ Ẕ ẕ ẖ ⁋ ⁽ ⁾'																					


var cols = {																					
key: 1,																					
ipaLoc: 2,																					
ipaPlus: 3,																					
transLoc: 4,																					
transcription: 5,																					
kbd: 6,																					
class: 7,																					
status: 8,																					
typeLoc: 9,																					
statusLoc: 10,																					
																					
lc:11,																					
uc:12,																					
numLoc: 13,																					
																					
nnameLoc: 14,																					
nameLoc: 15,																					
ucsName: 16,																					
block: 17,																					
																					
othertranscriptions: [[4, 'National'], [16, 'ISO']]																					
}																					
