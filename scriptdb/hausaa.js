var spreadsheet = `
ٻ		b	ɓ	ɓ		ɓ	implosive		ٻ ٻٻٻ			U+067B: ARABIC LETTER BEEH
ط		d	ɗ	ɗ t͡sʼ		ɗ ts	implosive/ejective		ط ططط			U+0637: ARABIC LETTER TAH
ڟ		t	ʦ	t͡sʼ		ts	ejective		ڟ ڟڟڟ			U+069F: ARABIC LETTER TAH WITH THREE DOTS ABOVE
ق		k	ƙ	kʼ		ƙ	ejective		ق ققق			U+0642: ARABIC LETTER QAF
												
												
ب		¶b	b	b ɓ		b ɓ	plosive/implosive		ب ببب			U+0628: ARABIC LETTER BEH
ت		t¶	t	t		t	plosive		ت تتت			U+062A: ARABIC LETTER TEH
د		¶d	d	d ɗ		d ɗ	plosive/implosive		د ـد			U+062F: ARABIC LETTER DAL
ث		t	ʧ	t͡ʃ		c	plosive		ث ثثث			U+062B: ARABIC LETTER THEH
ك		¶k	k	k kʼ		k ƙ	plosive/ejective		ك ككك			U+0643: ARABIC LETTER KAF
غ		g	ɡ	ɡ		g	plosive		غ غغغ			U+063A: ARABIC LETTER GHAIN
ع		}	ʔ	ʔ		ʼ	glottal stop		ع ععع			U+0639: ARABIC LETTER AIN
												
												
ف		f	f	ɸ		f	fricative		ف ففف			U+0641: ARABIC LETTER FEH
س		s	s	s		s	fricative		س سسس			U+0633: ARABIC LETTER SEEN
ز		z	z	z		z	fricative		ز ـز			U+0632: ARABIC LETTER ZAIN
ذ		z	ż	z		z	fricative		ذ ـذ			U+0630: ARABIC LETTER THAL
ش		s	ʃ	ʃ		sh	fricative		ش ششش			U+0634: ARABIC LETTER SHEEN
ج		d	ʒ	ʒ d͡ʒ		j	plosive/affricate		ج ججج			U+062C: ARABIC LETTER JEEM
ه		h¶	h	h		h	fricative		ه ههه			U+0647: ARABIC LETTER HEH
												
م		m	m	m		m	nasal		م ممم			U+0645: ARABIC LETTER MEEM
ن		n	n	n		n	nasal		ن ننن			U+0646: ARABIC LETTER NOON
												
و		w¶	w	w uː		w	approximant/vowel		و ـو			U+0648: ARABIC LETTER WAW
ل		l	l	l		l	approximant		ل للل			U+0644: ARABIC LETTER LAM
ر		r	r	r ɽ		r	trill/flap		ر ـر			U+0631: ARABIC LETTER REH
ی		y¶	y	j iː		y	approximant/vowel		ی ییی			U+06CC: ARABIC LETTER FARSI YEH
												
												
ِ		i	i	i		i	vowel					U+0650: ARABIC KASRA​
ِى	s	i	ī	iː		i	vowel		ِى ِىِىِى			U+0650 U+0649: ARABIC KASRA,  LETTER ALEF MAKSURA
ُ		u	u	o u		o u	vowel					U+064F: ARABIC DAMMA​
ُو	s	u	ū	oː uː		o u	vowel		ُو ـُو			U+064F U+0648: ARABIC DAMMA, LETTER WAW​
ٜ		e	e	e		e	vowel					U+065C: ARABIC VOWEL SIGN DOT BELOW
ٰٜ	s	e	ē	eː		e	vowel					U+062A U+0670 U+065C: ARABIC LETTER TEH, LETTER SUPERSCRIPT ALEF, VOWEL SIGN DOT BELOW
َ		a¶	a	a		a	vowel					U+064E: ARABIC FATHA​
َا	s	a	ā	aː		a	vowel		َا ـَا			U+064E U+0627: ARABIC FATHA, LETTER ALEF​
												
												
ا		a	ā	aː			vowel		ا ـا			U+0627: ARABIC LETTER ALEF
ى		i	ī	iː			vowel		ى ىىى			U+0649: ARABIC LETTER ALEF MAKSURA
أ	dc	a	a͑	a	\u{627}\u{654}		vowel		أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
آ	dc-	a	ɑ̄	ʔaʔ ʔaː	\u{627}\u{653}		vowel		آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
أ	dc	a	ɑ͑	ʔa ʔu ʔ	\u{627}\u{654}		consonant+vowel		أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
إ	dc-	a	ɑ̜	ʔi	\u{627}\u{655}		consonant+vowel		إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW
ٱ	-	a	ɑ̃	a			consonant+vowel	infrequent	ٱ ـٱ			U+0671: ARABIC LETTER ALEF WASLA
												
												
ٰ	o	[	̍				diacritic	used in long e ٰٜ				U+0670: ARABIC LETTER SUPERSCRIPT ALEF​
ٔ	o	[	ʿ	ʾ			diacritic	used with أ				U+0654: ARABIC HAMZA ABOVE​
ّ		&	˖				gemination mark					U+0651: ARABIC SHADDA​
ْ		*	͓				vowel absence marker					U+0652: ARABIC SUKUN​

`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"equiv": 5,
"transckey": 0,
"transcription": 6,
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
"shape": 9,
"numLoc": 0,
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,

"othertranscriptions": [[6, 'Latin']]
}



