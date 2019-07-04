var spreadsheet = `
م		m	m	m	m	м	consonant					U+0645: ARABIC LETTER MEEM
ن		n	n	n	n	н	consonant					U+0646: ARABIC LETTER NOON
د		d	d	d	d	д	consonant					U+062F: ARABIC LETTER DAL
ت		t	t	t	t	т	consonant					U+062A: ARABIC LETTER TEH
ب		b	b	b	b	б	consonant					U+0628: ARABIC LETTER BEH
پ		p	p	p	p	п	consonant					U+067E: ARABIC LETTER PEH
ف		f	f	f	f	ф	consonant					U+0641: ARABIC LETTER FEH
ق		q	q	q	q	қ	consonant					U+0642: ARABIC LETTER QAF
ك		k	k	k	k	к	consonant					U+0643: ARABIC LETTER KAF
ڭ		n	ŋ	ŋ	ng	ң	consonant		ڭ ڭڭڭ			U+06AD: ARABIC LETTER NG
گ		g	g	g	g	г	consonant					U+06AF: ARABIC LETTER GAF
غ		r	ʁ	ʁ	gh	ғ	consonant					U+063A: ARABIC LETTER GHAIN
ھ		h	h	h	h	һ	consonant					U+06BE: ARABIC LETTER HEH DOACHASHMEE
خ		x	χ	χ	x	х	consonant					U+062E: ARABIC LETTER KHAH
چ		c	č	ʧ	ch	ч	consonant					U+0686: ARABIC LETTER TCHEH
ج		d	ʤ	ʤ	j	җ	consonant					U+062C: ARABIC LETTER JEEM
ژ		z	ʒ	ʒ	zh	ж	consonant					U+0698: ARABIC LETTER JEH
ز		z¶	z	z	z	з	consonant					U+0632: ARABIC LETTER ZAIN
س		s	s	s	s	с	consonant					U+0633: ARABIC LETTER SEEN
ش		s	ʃ	ʃ	sh	ш	consonant					U+0634: ARABIC LETTER SHEEN
ر		r¶	r	r	r	р	consonant					U+0631: ARABIC LETTER REH
ل		l	l	l	l	л	consonant					U+0644: ARABIC LETTER LAM
ئ		{	ʿ	-	- ’	-	consonant					U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
												
												
ي		y	y	j	y	й	semivowel					U+064A: ARABIC LETTER YEH
ۋ		w	w	v w	w	в	semivowel					U+06CB: ARABIC LETTER VE
												
												
ا		a	a	ɑ	a	а	vowel					U+0627: ARABIC LETTER ALEF
ە		e	e	ɛ	e	ә	vowel					U+06D5: ARABIC LETTER AE
ې		e	ë	e	ë	е	vowel					U+06D0: ARABIC LETTER E
ى		i	i	i	i	и	vowel					U+0649: ARABIC LETTER ALEF MAKSURA
و		o	o	o	o	о	vowel					U+0648: ARABIC LETTER WAW
ۆ		o	ø	ø	ö	ө	vowel					U+06C6: ARABIC LETTER OE
ۇ		u	u	u	u	у	vowel					U+06C7: ARABIC LETTER U
ۈ		u	ü	y	ü	ү	vowel					U+06C8: ARABIC LETTER YU
												
												
٪		%	%		%		percent sign					U+066A: ARABIC PERCENT SIGN
؟		?	?		?		question mark					U+061F: ARABIC QUESTION MARK
؛		;	;		;		semicolon					U+061B: ARABIC SEMICOLON
،		,	,		,		comma					U+060C: ARABIC COMMA
												
												
												
												
												
												
ئا	s	A	’a	ɑ	a	а						U+0626 U+0627: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF
ئە	s	E	’e	ɛ	e	ә						U+0626 U+06D5: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER AE
ئې	s	E	 ’ë	e	ë	е						U+0626 U+06D0: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER E
ئى	s	I	’i	i	i	и						U+0626 U+0649: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF MAKSURA
ئو	s	O	’o	o	ö	ө						U+0626 U+0648: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER WAW
ئۆ	s	O	’ø	ø	o	о						U+0626 U+06C6: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER OE
ئۇ	s	U	’u	u	u	у						U+0626 U+06C7: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER U
ئۈ	s	U	’ü	y	ü	ү						U+0626 U+06C8: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER YU


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


