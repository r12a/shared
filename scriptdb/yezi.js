var spreadsheet = `
𐺂		p	p		p	p		plosive				U+10E82: YEZIDI LETTER PE	
𐺁		b	b		b	b		plosive				U+10E81: YEZIDI LETTER BE	
𐺃		pʼ	pʼ	pʼ	p	pʼ		plosive				U+10E83: YEZIDI LETTER PHE	
𐺕		t	t		t	t		plosive				U+10E95: YEZIDI LETTER TA	
𐺄		tʼ	tʼ	tʼ	t	tʼ		plosive				U+10E84: YEZIDI LETTER THE	
𐺋		d	d		d	d		plosive				U+10E8B: YEZIDI LETTER DAL	
𐺔		dˁ	ḍ	ḍ dˁ	d	dˁ		plosive				U+10E94: YEZIDI LETTER DAD	
𐺝		k	k		k	k		plosive				U+10E9D: YEZIDI LETTER KAF	
𐺞		kʼ	k	kʼ	k	kʼ		plosive				U+10E9E: YEZIDI LETTER KHAF	
𐺟		ɡ	g	ɡ	g	ɡ		plosive				U+10E9F: YEZIDI LETTER GAF	
𐺘		ʕ	xʼ	ʕ xʼ	x	ʕ		plosive				U+10E98: YEZIDI LETTER XHEYN	
𐺜		q	q		q	q		plosive				U+10E9C: YEZIDI LETTER QAF	
													
𐺇		t͡ʃ	ç	t͡ʃ ʧ	c	ʧ		affricate				U+10E87: YEZIDI LETTER CHIM	
𐺈		t͡ʃʼ	çʼ	ʧʼ	c	ʧʼ		affricate				U+10E88: YEZIDI LETTER CHHIM	
𐺆		d͡ʒ	c	d͡ʒ ʤ	c	ʤ		affricate				U+10E86: YEZIDI LETTER CIM	
													
𐺙		f	f		f	f		fricative				U+10E99: YEZIDI LETTER FA	
𐺚		v	v		v	v		fricative				U+10E9A: YEZIDI LETTER VA	
𐺛		v	v		v	v		fricative				U+10E9B: YEZIDI LETTER VA ALTERNATE FORM	
𐺅		s	s		s	s		fricative				U+10E85: YEZIDI LETTER SE	
𐺑		s	s		s	s		fricative				U+10E91: YEZIDI LETTER SIN	
𐺏		z	z		z	z		fricative				U+10E8F: YEZIDI LETTER ZA	
𐺓		sˁ	ṣ	sˁ ṣ	s	sˁ		fricative				U+10E93: YEZIDI LETTER SAD	
𐺌		zˁ	ẓ	zˁ ẓ	z	zˁ		fricative				U+10E8C: YEZIDI LETTER ZAL	
𐺖		zʼ	zʼ	zʼ	z	zʼ		fricative				U+10E96: YEZIDI LETTER ZE	
𐺒		ʃ	ş	ʃ ş	s	ʃ		fricative				U+10E91: YEZIDI LETTER SIN	
𐺐		ʒ	j	ʒ	j	ʒ		fricative				U+10E90: YEZIDI LETTER JA	
𐺊		x	x		x	x		fricative				U+10E8A: YEZIDI LETTER XA	
𐺉		ħ	hʼ	ħ hʼ	h	ħ		fricative				U+10E89: YEZIDI LETTER HHA	
𐺧		h	h		h	h		fricative				U+10EA7: YEZIDI LETTER HAY	
𐺗		ʔ	ʼ eʼ	ʔ ʼ eʼ	e	ʔ		fricative				U+10E97: YEZIDI LETTER EYN	
													
𐺡		m	m		m	m		nasal				U+10EA1: YEZIDI LETTER MIM	
𐺢		n	n		n	n		nasal				U+10EA2: YEZIDI LETTER NUN	
													
𐺤		w	w		w	w		liquid				U+10EA4: YEZIDI LETTER WAW	
𐺍		r	r		r	r		liquid				U+10E8D: YEZIDI LETTER RA	
𐺎		rʼ	rʼ	rʼ	r	rʼ		liquid				U+10E8E: YEZIDI LETTER RHA	
𐺠		l	l		l	l		liquid				U+10EA0: YEZIDI LETTER LAM	
𐺨		j	î y	î	y	j		liquid				U+10EA8: YEZIDI LETTER YOT	
													
													
𐺫		ʕ		ʕ	{	ʕ		hamza				U+10EAB: YEZIDI COMBINING HAMZA MARK​	
𐺬								madda				U+10EAC: YEZIDI COMBINING MADDA MARK​	
𐺭				͓	*	–		hyphenation				U+10EAD: YEZIDI HYPHENATION MARK														
													
													
													
													
𐺣		u	u		u	u		vowel				U+10EA3: YEZIDI LETTER UM	
𐺩		e	ê	ê	e	e		vowel				U+10EA9: YEZIDI LETTER ET	
𐺥		o	o		o	o		vowel				U+10EA5: YEZIDI LETTER OW	
𐺦		ə	e	ə	e	ə		vowel				U+10EA6: YEZIDI LETTER EW	
𐺀		a	a		a	a		vowel				U+10E80: YEZIDI LETTER ELIF	
													
													
													
𐺰		ɫ		ɫ	l	ɫ		liquid	historical			U+10EB0: YEZIDI LETTER LAM WITH DOT ABOVE	
𐺱		ə			e	ɚ		consonant	historical			U+10EB1: YEZIDI LETTER YOT WITH CIRCUMFLEX ABOVE	
													
													
													
													
,					,	,		comma				U+002C: COMMA	
“					<	“		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
”					>	”		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	



`



latinPanel = '͓ ḍ dˁ d͡ʒ ʤ eʼ ê ə ɡ ħ hʼ î kʼ ɫ pʼ rʼ sˁ ṣ ʃ ş tʼ t͡ʃ ʧ ʧʼ xʼ ʼ zˁ ẓ zʼ ʒ ʕ ʔ'




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
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
"numLoc": 0,

"nnameLoc": 0,
"nameLoc": 0,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[3, 'Latin']]
}
