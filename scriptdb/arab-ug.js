var spreadsheet = `
م		m	m		m	m	m	consonant		م ممم			U+0645: ARABIC LETTER MEEM	м	arabic
ن		n	n		n	n	n	consonant		ن ننن			U+0646: ARABIC LETTER NOON	н	arabic
د		d	d		d	d	d	consonant		د ـد			U+062F: ARABIC LETTER DAL	д	arabic
ت		t	t		t	t	t	consonant		ت تتت			U+062A: ARABIC LETTER TEH	т	arabic
ب		b	b		b	b	b	consonant		ب ببب			U+0628: ARABIC LETTER BEH	б	arabic
پ		p	p		p	p	p	consonant		پ پپپ			U+067E: ARABIC LETTER PEH	п	arabic
ف		f	f		f	f	F	consonant		ف ففف			U+0641: ARABIC LETTER FEH	ф	arabic
ق		q	q		q	q	j	consonant		ق ققق			U+0642: ARABIC LETTER QAF	қ	arabic
ك		k	k		k	k	k	consonant		ك ككك			U+0643: ARABIC LETTER KAF	к	arabic
ڭ		ŋ	ng	ŋ	n	ŋ	i	consonant		ڭ ڭڭڭ			U+06AD: ARABIC LETTER NG	ң	arabic
گ		g	g	g	g	g	G	consonant		گ گگگ			U+06AF: ARABIC LETTER GAF	г	arabic
غ		ʁ	gh	ʁ	r	ʁ	c	consonant		غ غغغ			U+063A: ARABIC LETTER GHAIN	ғ	arabic
ھ		h	h		h	h	a	consonant		ھ ھھھ			U+06BE: ARABIC LETTER HEH DOACHASHMEE	һ	arabic
خ		χ	x	χ	x	χ	H	consonant		خ خخخ			U+062E: ARABIC LETTER KHAH	х	arabic
چ		ʧ	ch	ʧ	c	č	q	consonant		چ چچچ			U+0686: ARABIC LETTER TCHEH	ч	arabic
ج		ʤ	j	ʤ	d	ʤ	J	consonant		ج ججج			U+062C: ARABIC LETTER JEEM	җ	arabic
ژ		ʒ	zh	ʒ	z	ʒ	D	consonant		ژ ـژ			U+0698: ARABIC LETTER JEH	ж	arabic
ز		z	z		z¶	z	z	consonant		ز ـز			U+0632: ARABIC LETTER ZAIN	з	arabic
س		s	s		s	s	s	consonant		س سسس			U+0633: ARABIC LETTER SEEN	с	arabic
ش		ʃ	sh	ʃ	s	ʃ	x	consonant		ش ششش			U+0634: ARABIC LETTER SHEEN	ш	arabic
ر		r	r		r¶	r	r	consonant		ر ـر			U+0631: ARABIC LETTER REH	р	arabic
ل		l	l		l	l	l	consonant		ل للل			U+0644: ARABIC LETTER LAM	л	arabic
ئ		-	- ’		{	ʿ	/	consonant		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	-	arabic
															
															
ي		j	y		y	y	y	semivowel		ي ييي			U+064A: ARABIC LETTER YEH	й	arabic
ۋ		v w	w		w	w	w	semivowel		ۋ ـۋ			U+06CB: ARABIC LETTER VE	в	arabic
															
															
ى		i ɨ	i	ɨ	i	i	h	vowel		ى ىىى			U+0649: ARABIC LETTER ALEF MAKSURA	и	arabic
ۈ		y ʏ	ü	ʏ	u	ü	v	vowel		ۈ ـۈ			U+06C8: ARABIC LETTER YU	ү	arabic
ۇ		u ʊ	u	ʊ	u	u	u	vowel		ۇ ـۇ			U+06C7: ARABIC LETTER U	у	arabic
ې		e	ë		e	ë	e	vowel		ې ېېې			U+06D0: ARABIC LETTER E	е	arabic
و		o ɔ	o	ɔ	o	o	o	vowel		و ـو			U+0648: ARABIC LETTER WAW	о	arabic
ە		ɛ æ	e	ɛ æ	e	e	g	vowel		ە ەەە			U+06D5: ARABIC LETTER AE	ә	arabic
ۆ		ø	ö	ø	o	ø	K	vowel		ۆ ـۆ			U+06C6: ARABIC LETTER OE	ө	arabic
ا		ɑ a	a	ɑ	a	a	f	vowel		ا ـا			U+0627: ARABIC LETTER ALEF	а	arabic
															
															
٪			%		%	%		percent sign					U+066A: ARABIC PERCENT SIGN		arabic
؟			?		?	?	?	question mark					U+061F: ARABIC QUESTION MARK		arabic
؛			;		;	;	;	semicolon					U+061B: ARABIC SEMICOLON		arabic
،			,		,	,	,	comma					U+060C: ARABIC COMMA		arabic
															
															
															
															
															
															
ئى	s	i ɨ	i		I	ʿi							U+0626 U+0649: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF MAKSURA	и	
ئۈ	s	y ʏ	ü	ü	U	ʿü							U+0626 U+06C8: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER YU	ү	
ئۇ	s	u ʊ	u		U	ʿu							U+0626 U+06C7: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER U	у	
ئې	s	e	ë	ë	E	ʿë							U+0626 U+06D0: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER E	е	
ئو	s	o ɔ	ö	ö	O	ʿo							U+0626 U+0648: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER WAW	ө	
ئە	s	ɛ æ	e		E	ʿe							U+0626 U+06D5: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER AE	ә	
ئۆ	s	ø	o		O	ʿø							U+0626 U+06C6: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER OE	о	
ئا	s	ɑ a	a		A	ʿa							U+0626 U+0627: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF	а	
															
															
															
لا						–	L						U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF		
»						–	'						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		
«						–	"						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		


`


latinPanel = 'æ ɑ ʤ ɛ ë ɨ ŋ ɔ ø ö ʁ ʃ ʧ ʊ ü χ ʒ'



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
"lc":0,
"uc":0,
"meaning":0,
"shape": 10,
"numLoc": 0,
"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 15,

"othertranscriptions": [[3, 'ULY'], [14, 'USY']]
}


