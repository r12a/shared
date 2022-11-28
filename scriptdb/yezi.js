var spreadsheet = `yezi-xlc	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
,	,			,			Po		comma				U+002C: COMMA	
𐺫	{	ʕ		ʕ			Mn​		hamza				U+10EAB: YEZIDI COMBINING HAMZA MARK	
𐺭	*			–			Pd		hyphenation				U+10EAD: YEZIDI HYPHENATION MARK	
“	<			“			Pi		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
”	>			”			Pf		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
𐺀	a	a		a	a		Lo		vowel				U+10E80: YEZIDI LETTER ELIF	
𐺁	b	b		b	b		Lo		consonant				U+10E81: YEZIDI LETTER BE	
𐺇	c	t͡ʃ		ʧ	ç		Lo		consonant				U+10E87: YEZIDI LETTER CHIM	
𐺈	c	t͡ʃʼ		ʧʼ	çʼ		Lo		consonant				U+10E88: YEZIDI LETTER CHHIM	
𐺆	c	d͡ʒ		ʤ	c		Lo		consonant				U+10E86: YEZIDI LETTER CIM	
𐺋	d	d		d	d		Lo		consonant				U+10E8B: YEZIDI LETTER DAL	
𐺔	d	dˁ		dˁ	ḍ		Lo		consonant				U+10E94: YEZIDI LETTER DAD	
𐺗	e	ʔ		ʔ	ʼ eʼ		Lo		consonant				U+10E97: YEZIDI LETTER EYN	
𐺩	e	e		e	ê		Lo		vowel				U+10EA9: YEZIDI LETTER ET	
𐺦	e	ə		ə	e		Lo		vowel				U+10EA6: YEZIDI LETTER EW	
𐺱	e	ə		ɚ			Lo	a	consonant	historical			U+10EB1: YEZIDI LETTER YOT WITH CIRCUMFLEX ABOVE	
𐺙	f	f		f	f		Lo		consonant				U+10E99: YEZIDI LETTER FA	
𐺟	g	ɡ		ɡ	g		Lo		consonant				U+10E9F: YEZIDI LETTER GAF	
𐺉	h	ħ		ħ	hʼ		Lo		consonant				U+10E89: YEZIDI LETTER HHA	
𐺧	h	h		h	h		Lo		consonant				U+10EA7: YEZIDI LETTER HAY	
𐺐	j	ʒ		ʒ	j		Lo		consonant				U+10E90: YEZIDI LETTER JA	
𐺝	k	k		k	k		Lo		consonant				U+10E9D: YEZIDI LETTER KAF	
𐺞	k	kʼ		kʼ	k		Lo		consonant				U+10E9E: YEZIDI LETTER KHAF	
𐺠	l	l		l	l		Lo		consonant				U+10EA0: YEZIDI LETTER LAM	
𐺰	l	ɫ		ɫ			Lo	a	consonant	historical			U+10EB0: YEZIDI LETTER LAM WITH DOT ABOVE	
𐺡	m	m		m	m		Lo		consonant				U+10EA1: YEZIDI LETTER MIM	
𐺢	n	n		n	n		Lo		consonant				U+10EA2: YEZIDI LETTER NUN	
𐺥	o	o		o	o		Lo		vowel				U+10EA5: YEZIDI LETTER OW	
𐺂	p	p		p	p		Lo		consonant				U+10E82: YEZIDI LETTER PE	
𐺃	p	pʼ		pʼ	pʼ		Lo		consonant				U+10E83: YEZIDI LETTER PHE	
𐺜	q	q		q	q		Lo		consonant				U+10E9C: YEZIDI LETTER QAF	
𐺍	r	r		r	r		Lo		consonant				U+10E8D: YEZIDI LETTER RA	
𐺎	r	rʼ		rʼ	rʼ		Lo		consonant				U+10E8E: YEZIDI LETTER RHA	
𐺅	s	s		s	s		Lo		consonant				U+10E85: YEZIDI LETTER SE	
𐺑	s	s		s	s		Lo		consonant				U+10E91: YEZIDI LETTER SIN	
𐺓	s	sˁ		sˁ	ṣ		Lo		consonant				U+10E93: YEZIDI LETTER SAD	
𐺒	s	ʃ		ʃ	ş		Lo		consonant				U+10E91: YEZIDI LETTER SIN	
𐺕	t	t		t	t		Lo		consonant				U+10E95: YEZIDI LETTER TA	
𐺄	t	tʼ		tʼ	tʼ		Lo		consonant				U+10E84: YEZIDI LETTER THE	
𐺣	u	u		u	u		Lo		vowel				U+10EA3: YEZIDI LETTER UM	
𐺚	v	v		v	v		Lo		consonant				U+10E9A: YEZIDI LETTER VA	
𐺛	v	v		v	v		Lo		consonant				U+10E9B: YEZIDI LETTER VA ALTERNATE FORM	
𐺤	w	w		w	w		Lo		consonant				U+10EA4: YEZIDI LETTER WAW	
𐺘	x	ʕ		ʕ	xʼ		Lo		consonant				U+10E98: YEZIDI LETTER XHEYN	
𐺊	x	x		x	x		Lo		consonant				U+10E8A: YEZIDI LETTER XA	
𐺨	y	j		j	î y		Lo		consonant				U+10EA8: YEZIDI LETTER YOT	
𐺏	z	z		z	z		Lo		consonant				U+10E8F: YEZIDI LETTER ZA	
𐺌	z	zˁ		zˁ	ẓ		Lo		consonant				U+10E8C: YEZIDI LETTER ZAL	
𐺖	z	zʼ		zʼ	zʼ		Lo		consonant				U+10E96: YEZIDI LETTER ZE	
														
𐺬							Mn​		madda				U+10EAC: YEZIDI COMBINING MADDA MARK	
														
`														
														
latinPanel = '͓ ḍ dˁ d͡ʒ ʤ eʼ ê ə ɡ ħ hʼ î kʼ ɫ pʼ rʼ sˁ ṣ ʃ ş tʼ t͡ʃ ʧ ʧʼ xʼ ʼ zˁ ẓ zʼ ʒ ʕ ʔ'														
														
														
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
														
nnameLoc: 11,														
nameLoc: 12,														
ucsName: 13,														
block: 14,														
														
othertranscriptions: [[5, 'Latin']]														
}														
														