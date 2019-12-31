var spreadsheet = `
م		m	m	m	m	м	consonant		م ممم			U+0645: ARABIC LETTER MEEM
ن		n	n	n	n	н	consonant		ن ننن			U+0646: ARABIC LETTER NOON
د		d	d	d	d	д	consonant		د ـد			U+062F: ARABIC LETTER DAL
ت		t	t	t	t	т	consonant		ت تتت			U+062A: ARABIC LETTER TEH
ب		b	b	b	b	б	consonant		ب ببب			U+0628: ARABIC LETTER BEH
پ		p	p	p	p	п	consonant		پ پپپ			U+067E: ARABIC LETTER PEH
ف		f	f	f	f	ф	consonant		ف ففف			U+0641: ARABIC LETTER FEH
ق		q	q	q	q	қ	consonant		ق ققق			U+0642: ARABIC LETTER QAF
ك		k	k	k	k	к	consonant		ك ككك			U+0643: ARABIC LETTER KAF
ڭ		n	ŋ	ŋ	ng	ң	consonant		ڭ ڭڭڭ			U+06AD: ARABIC LETTER NG
گ		g	g	g	g	г	consonant		گ گگگ			U+06AF: ARABIC LETTER GAF
غ		r	ʁ	ʁ	gh	ғ	consonant		غ غغغ			U+063A: ARABIC LETTER GHAIN
ھ		h	h	h	h	һ	consonant		ھ ھھھ			U+06BE: ARABIC LETTER HEH DOACHASHMEE
خ		x	χ	χ	x	х	consonant		خ خخخ			U+062E: ARABIC LETTER KHAH
چ		c	č	ʧ	ch	ч	consonant		چ چچچ			U+0686: ARABIC LETTER TCHEH
ج		d	ʤ	ʤ	j	җ	consonant		ج ججج			U+062C: ARABIC LETTER JEEM
ژ		z	ʒ	ʒ	zh	ж	consonant		ژ ـژ			U+0698: ARABIC LETTER JEH
ز		z¶	z	z	z	з	consonant		ز ـز			U+0632: ARABIC LETTER ZAIN
س		s	s	s	s	с	consonant		س سسس			U+0633: ARABIC LETTER SEEN
ش		s	ʃ	ʃ	sh	ш	consonant		ش ششش			U+0634: ARABIC LETTER SHEEN
ر		r¶	r	r	r	р	consonant		ر ـر			U+0631: ARABIC LETTER REH
ل		l	l	l	l	л	consonant		ل للل			U+0644: ARABIC LETTER LAM
ئ		{	ʿ	-	- ’	-	consonant		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
												
												
ي		y	y	j	y	й	semivowel		ي ييي			U+064A: ARABIC LETTER YEH
ۋ		w	w	v w	w	в	semivowel		ۋ ـۋ			U+06CB: ARABIC LETTER VE
												
												
ى		i	i	i ɨ	i	и	vowel		ى ىىى			U+0649: ARABIC LETTER ALEF MAKSURA
ۈ		u	ü	y ʏ	ü	ү	vowel		ۈ ـۈ			U+06C8: ARABIC LETTER YU
ۇ		u	u	u ʊ	u	у	vowel		ۇ ـۇ			U+06C7: ARABIC LETTER U
ې		e	ë	e	ë	е	vowel		ې ېېې			U+06D0: ARABIC LETTER E
و		o	o	o ɔ	o	о	vowel		و ـو			U+0648: ARABIC LETTER WAW
ە		e	e	ɛ æ	e	ә	vowel		ە ەەە			U+06D5: ARABIC LETTER AE
ۆ		o	ø	ø	ö	ө	vowel		ۆ ـۆ			U+06C6: ARABIC LETTER OE
ا		a	a	ɑ a	a	а	vowel		ا ـا			U+0627: ARABIC LETTER ALEF
												
												
٪		%	%		%		percent sign					U+066A: ARABIC PERCENT SIGN
؟		?	?		?		question mark					U+061F: ARABIC QUESTION MARK
؛		;	;		;		semicolon					U+061B: ARABIC SEMICOLON
،		,	,		,		comma					U+060C: ARABIC COMMA
												
												
												
												
												
												
ئى	s	I	’i	i ɨ	i	и						U+0626 U+0649: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF MAKSURA
ئۈ	s	U	’ü	y ʏ	ü	ү						U+0626 U+06C8: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER YU
ئۇ	s	U	’u	u ʊ	u	у						U+0626 U+06C7: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER U
ئې	s	E	 ’ë	e	ë	е						U+0626 U+06D0: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER E
ئو	s	O	’o	o ɔ	ö	ө						U+0626 U+0648: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER WAW
ئە	s	E	’e	ɛ æ	e	ә						U+0626 U+06D5: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER AE
ئۆ	s	O	’ø	ø	o	о						U+0626 U+06C6: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER OE
ئا	s	A	’a	ɑ a	a	а						U+0626 U+0627: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF


`

var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":5,
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

"othertranscriptions": [[5, 'ULY'], [6, 'USY']]
}


