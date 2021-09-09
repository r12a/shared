var spreadsheet = `
и		i	i	aː	i	i	n	neutral vowel			И	и		U+0438: CYRILLIC SMALL LETTER I	ᠢ	🗸
й		i̯	i	d͡z	i	ĭ	a	glide	for diphthongs		Й	хагас и		U+0439: CYRILLIC SMALL LETTER SHORT I	ᠢ	🗸
ий	s	iː	ii	d͡ʒ				long neutral vowel						U+0438 U+0439: CYRILLIC SMALL LETTER I, SMALL LETTER SHORT I		
иа	s	i̯a	ia	e				dipthong						U+0438 U+0430: CYRILLIC SMALL LETTER I, SMALL LETTER A		
ы		i	y	ᵊ	I	ɪ	s	vowel			Ы	эр үгийн ы		U+044B: CYRILLIC SMALL LETTER YERU	ᠢ	🗸
ү		u	ü	eː	u	u	o	front (+ATR) vowel			Ү	ү		U+04AF: CYRILLIC SMALL LETTER STRAIGHT U	ᠦ	🗸
үү	s	uː	üü	ɛː				long front (+ATR) vowel						U+04AF U+04AF: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER STRAIGHT U		
үй	s	ui̯	ui	ɡ				diphthong						U+04AF U+0439: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER SHORT I		
у		ʊ	u	i̯	u	ʊ	e	back (-ATR) vowel			У	у		U+0443: CYRILLIC SMALL LETTER U	ᠤ	🗸
уу	s	ʊː	uu	ⁱ				long back (-ATR) vowel						U+0443 U+0443: CYRILLIC SMALL LETTER U, SMALL LETTER U		
уй	s	ʊi̯	ui	iː				diphthong						U+0443 U+0439: CYRILLIC SMALL LETTER U, SMALL LETTER SHORT I		
уа	s	u̯a	ua	ʲ				diphthong						U+0443 U+0430: CYRILLIC SMALL LETTER U, SMALL LETTER A		
ю		jʊ ju	yu	ɮ	u	jᵘ	/	ioticised vowel			Ю	ю		U+044E: CYRILLIC SMALL LETTER YU	ᠶᠦ	🗸
юү	s	juː	yüü	ŋ		jᵘu		ioticised long vowel						U+044E U+04AF: CYRILLIC SMALL LETTER YU, SMALL LETTER STRAIGHT U		
юу	s	jʊː	yuu	ɔ		jᵘʊ		ioticised long vowel						U+044E U+0443: CYRILLIC SMALL LETTER YU, SMALL LETTER U		
																
э		e i	e	ɵ	e	e	t	front (+ATR) vowel			Э	э		U+044D: CYRILLIC SMALL LETTER E	ᠡ	🗸
ээ	s	eː	ee	oː		ee		long front (+ATR) vowel						U+044D U+044D: CYRILLIC SMALL LETTER E, SMALL LETTER E		
эй	s	ei̯	ei	ɔː				diphthong						U+044D U+0439: CYRILLIC SMALL LETTER E, SMALL LETTER SHORT I		
ө		ɵ o	ö	ʃ	e	ɵ	f	front (+ATR) vowel			Ө	ө		U+04E9: CYRILLIC SMALL LETTER BARRED O	ᠥ	🗸
өө	s	ɵː	öö	t		ɵɵ		long front (+ATR) vowel						U+04E9 U+04E9: CYRILLIC SMALL LETTER BARRED O, SMALL LETTER BARRED O		
е		ji je	ye	t͡s	e	jᵉ		ioticised vowel			Е	е		U+0435: CYRILLIC SMALL LETTER IE	ᠶᠡ	🗸
																
о		ɔ	o	t͡ʃ	o	ɔ	k	back (-ATR) vowel			О	о		U+043E: CYRILLIC SMALL LETTER O	ᠣ	🗸
оо	s	ɔː	oo	ü		ɔɔ		long back (-ATR) vowel						U+043E U+043E: CYRILLIC SMALL LETTER O, SMALL LETTER O		
ой	s	ɔi̯	oi	uː				diphthong						U+043E U+0439: CYRILLIC SMALL LETTER O, SMALL LETTER SHORT I		
ё		jɔ	yo	ʊ	o	jᵒ	c	ioticised vowel			Ё	ё		U+0451: CYRILLIC SMALL LETTER IO	ᠶᠣ	🗸
ёо	s	jɔː	yoo	ʊː		jᵒɔ		ioticised long vowel						U+0451 U+043E: CYRILLIC SMALL LETTER IO, SMALL LETTER O		
																
а		a	a	w̜	a	a	g	back (-ATR) vowel			А	а		U+0430: CYRILLIC SMALL LETTER A	ᠠ	🗸
аа	s	aː	aa	ɣ		aa		long back (-ATR) vowel			АА			U+0430 U+0430: CYRILLIC SMALL LETTER A, SMALL LETTER A		
ай	s	ɛː	ai					diphthong						U+0430 U+0439: CYRILLIC SMALL LETTER A, SMALL LETTER SHORT I		
я		ja	ya		a	jᵃ	z	ioticised vowel			Я	я		U+044F: CYRILLIC SMALL LETTER YA	ᠶᠠ	🗸
яа	s	jaː	yaa			jᵃa		ioticised long vowel						U+044F U+0430: CYRILLIC SMALL LETTER YA, SMALL LETTER A		
																
И		i	i	aː	I	I	n	neutral vowel		и		и		U+0418: CYRILLIC CAPITAL LETTER I	ᠢ	🗸
Й		i̯	i	d͡z	I	Ĭ	a	glide	for diphthongs	й		хагас и		U+0419: CYRILLIC CAPITAL LETTER SHORT I	ᠢ	
ИЙ	s	iː	ii	d͡ʒ				long neutral vowel						U+0418 U+0418 U+0306: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER SHORT I		
ИА	s	i̯a	ia	e				dipthong						U+0418 U+0410: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER A		
Ы		i	y	ᵊ	I	Ɪ	s	vowel		ы		эр үгийн ы		U+042B: CYRILLIC CAPITAL LETTER YERU	ᠢ	🗸
Ү		u	ü	eː	U	U	o	front (+ATR) vowel		ү		ү		U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U	ᠦ	
ҮҮ	s	uː	üü	ɛː				long front (+ATR) vowel						U+04AE U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER STRAIGHT U		
ҮЙ	s	ui̯	ui	ɡ				diphthong						U+04AE U+0418 U+0306: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER SHORT I		
У		ʊ	u	i̯	U	Ʊ	e	back (-ATR) vowel		у		у		U+0423: CYRILLIC CAPITAL LETTER U	ᠤ	🗸
УУ	s	ʊː	uu	ⁱ				long back (-ATR) vowel						U+0423 U+0423: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER U		
УЙ	s	ʊi̯	ui	iː				diphthong						U+0423 U+0418 U+0306: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER SHORT I		
УА	s	u̯a	ua	ʲ				diphthong						U+0423 U+0410: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER A		
Ю		jʊ ju	yu	ɮ	U	Jᵘ	/	ioticised vowel		ю		ю		U+042E: CYRILLIC CAPITAL LETTER YU	ᠶᠦ	🗸
ЮҮ	s	juː	yüü	ŋ		JᵘU		ioticised long vowel						U+042E U+04AE: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER STRAIGHT U		
ЮУ	s	jʊː	yuu	ɔ		JᵘƱ		ioticised long vowel						U+042E U+0423: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER U		
																
Э		e i	e	ɵ	E	E	t	front (+ATR) vowel		э		э		U+042D: CYRILLIC CAPITAL LETTER E	ᠡ	🗸
ЭЭ	s	eː	ee	oː		EE		long front (+ATR) vowel						U+042D U+042D: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER E		
ЭЙ	s	ei̯	ei	ɔː				diphthong						U+042D U+0418 U+0306: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER SHORT I		
Ө		ɵ o	ö	ʃ	E	Ɵ	f	front (+ATR) vowel		ө		ө		U+04E8: CYRILLIC CAPITAL LETTER BARRED O	ᠥ	
ӨӨ	s	ɵː	öö	t		ƟƟ		long front (+ATR) vowel						U+04E8 U+04E8: CYRILLIC CAPITAL LETTER BARRED O, CAPITAL LETTER BARRED O		
Е		ji je	ye	t͡s	E	Jᵉ		ioticised vowel		е		е		U+0415: CYRILLIC CAPITAL LETTER IE	ᠶᠡ	🗸
																
О		ɔ	o	t͡ʃ	O	Ɔ	k	back (-ATR) vowel		о		о		U+041E: CYRILLIC CAPITAL LETTER O	ᠣ	🗸
ОО	s	ɔː	oo	ü		ƆƆ		long back (-ATR) vowel						U+041E U+041E: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER O		
ОЙ	s	ɔi̯	oi	uː				diphthong						U+041E U+0419: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER SHORT I		
Ё		jɔ	yo	ʊ	O	Jᵒ	c	ioticised vowel		ё		ё		U+0401: CYRILLIC CAPITAL LETTER IO	ᠶᠣ	🗸
ЁО	s	jɔː	yoo	ʊː		JᵒƆ		ioticised long vowel						U+0401 U+041E: CYRILLIC CAPITAL LETTER IO, CAPITAL LETTER O		
																
А		a	a	w̜	A	A	g	back (-ATR) vowel		а		а		U+0410: CYRILLIC CAPITAL LETTER A	ᠠ	🗸
АА	s	aː	aa	ɣ		AA		long back (-ATR) vowel		аа				U+0410 U+0410: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER A		
АЙ	s	ɛː	ai					diphthong						U+0410 U+0418 U+0306: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER I, COMBINING BREVE		
Я		ja	ya		A	Jᵃ	z	ioticised vowel		я		я		U+042F: CYRILLIC CAPITAL LETTER YA	ᠶᠠ	🗸
ЯА	s	jaː	yaa			JᵃA		ioticised long vowel						U+042F U+0410: CYRILLIC CAPITAL LETTER YA, CAPITAL LETTER A		
																
																
ь		ĭ ʲ	i			ʲ	,	short vowel / palatalisation marker			Ь	зөөлний тэмдэг		U+044C: CYRILLIC SMALL LETTER SOFT SIGN	ᠢ	
ъ		∅	"			ʲ	]				Ъ	хатуугийн тэмдэг		U+044A: CYRILLIC SMALL LETTER HARD SIGN	ᠢ	
																
																
																
п		p	p		p	p	'	plosive	mostly foreign loan words		П	пэ		U+043F: CYRILLIC SMALL LETTER PE	ᠫ	🗸
б		b	b		b	b	d	plosive			Б	бэ		U+0431: CYRILLIC SMALL LETTER BE	ᠪ	🗸
т		t	t		t	t	m	plosive			Т	тэ		U+0442: CYRILLIC SMALL LETTER TE	ᠲ	🗸
д		d	d		d	d	;	plosive			Д	дэ		U+0434: CYRILLIC SMALL LETTER DE	ᠳ	🗸
к		k x	k		k	k	[	plosive/fricative	for transliteration		К	ка		U+043A: CYRILLIC SMALL LETTER KA	ᠺ	🗸
г		ɡ ɣ ɢ	g		g	g	u	plosive			Г	гэ		U+0433: CYRILLIC SMALL LETTER GHE	ᠭ	🗸
																
ц		t͡s	ts		q	c	w	affricate			Ц	цэ		U+0446: CYRILLIC SMALL LETTER TSE	ᠴ	🗸
з		d͡z	z		z	ž	p	affricate			З			U+0437: CYRILLIC SMALL LETTER ZE	ᠽ	🗸
ч		t͡ʃ	ch		c	č	x	affricate			Ч	чэ		U+0447: CYRILLIC SMALL LETTER CHE	ᠴᠤ	🗸
ж		d͡ʒ	j		j	ǰ	r	affricate			Ж	жэ		U+0436: CYRILLIC SMALL LETTER ZHE	ᠵ	🗸
																
ф		f pʰ	f		f	f	q	fricative	for transliteration		Ф	фэ, фа, эф		U+0444: CYRILLIC SMALL LETTER EF	ᠹ	🗸
в		v w̜ f	v		w	v	.	fricative			В	вэ		U+0432: CYRILLIC SMALL LETTER VE	ᠸ	🗸
с		s	s		s	s	v	fricative			С	эс		U+0441: CYRILLIC SMALL LETTER ES	ᠰ	🗸
ш		ʃ	sh		s	ʃ	i	fricative			Ш	ша, эш		U+0448: CYRILLIC SMALL LETTER SHA	ᠱ	🗸
щ		ʃ	sh		s	š	=	fricative	Russian words only		Щ	ща, эшчэ		U+0449: CYRILLIC SMALL LETTER SHCHA	ᠰᠢ	🗸
л		ɮ	l		l	ɮ	l	approximant			Л	эл		U+043B: CYRILLIC SMALL LETTER EL	ᠯ	🗸
х		x	kh		x	x	h	fricative			Х	хэ, ха		U+0445: CYRILLIC SMALL LETTER HA	ᠬ	🗸
																
м		m	m		m	m	b	nasal			М	эм		U+043C: CYRILLIC SMALL LETTER EM	ᠮ	🗸
н		n ŋ	n		n	n	y	nasal			Н	эн		U+043D: CYRILLIC SMALL LETTER EN	ᠨ	🗸
																
р		r	r		r	r	j	approximant			Р	эр		U+0440: CYRILLIC SMALL LETTER ER	ᠷ	🗸
																
																
П		p	P		P	P		plosive	mostly foreign loan words	п		пэ		U+041F: CYRILLIC CAPITAL LETTER PE	ᠫ	🗸
Б		b	B		B	B	D	plosive		б		бэ		U+0411: CYRILLIC CAPITAL LETTER BE	ᠪ	🗸
Т		t	T		T	T	M	plosive		т		тэ		U+0422: CYRILLIC CAPITAL LETTER TE	ᠲ	🗸
Д		d	D		D	D	;	plosive		д		дэ		U+0414: CYRILLIC CAPITAL LETTER DE	ᠳ	🗸
К		k x	K		K	K	[	plosive/fricative	for transliteration	к		ка		U+041A: CYRILLIC CAPITAL LETTER KA	ᠺ	🗸
Г		ɡ ɣ ɢ	G		G	G	U	plosive		г		гэ		U+0413: CYRILLIC CAPITAL LETTER GHE	ᠭ	🗸
																
Ц		t͡s	TS		Q	C	W	affricate		ц		цэ		U+0426: CYRILLIC CAPITAL LETTER TSE	ᠴ	🗸
З		d͡z	Z		Z	Ž	P	affricate		з				U+0417: CYRILLIC CAPITAL LETTER ZE	ᠽ	🗸
Ч		t͡ʃ	CH		C	Č	X	affricate		ч		чэ		U+0427: CYRILLIC CAPITAL LETTER CHE	ᠴᠤ	🗸
Ж		d͡ʒ	J		J	J̌	R	affricate		ж		жэ		U+0416: CYRILLIC CAPITAL LETTER ZHE	ᠵ	🗸
																
Ф		f pʰ	F		F	F	Q	fricative	for transliteration	ф		фэ, фа, эф		U+0424: CYRILLIC CAPITAL LETTER EF	ᠹ	🗸
В		v w̜ f	V		W	V	.	fricative		в		вэ		U+0412: CYRILLIC CAPITAL LETTER VE	ᠸ	🗸
С		s	S		S	S	V	fricative		с		эс		U+0421: CYRILLIC CAPITAL LETTER ES	ᠰ	🗸
Ш		ʃ	SH		S	Ʃ	I	fricative		ш		ша, эш		U+0428: CYRILLIC CAPITAL LETTER SHA	ᠱ	🗸
Щ		ʃ	SH		S	Š	=	fricative	Russian words only	щ		ща, эшчэ		U+0429: CYRILLIC CAPITAL LETTER SHCHA	ᠰᠢ	🗸
Л		ɮ	L		L	ɮ	L	approximant		л		эл		U+041B: CYRILLIC CAPITAL LETTER EL	ᠯ	🗸
Х		x	KH		X	X	H	fricative		х		хэ, ха		U+0425: CYRILLIC CAPITAL LETTER HA	ᠬ	🗸
																
М		m	M		M	M	B	nasal		м		эм		U+041C: CYRILLIC CAPITAL LETTER EM	ᠮ	🗸
Н		n ŋ	N		N	N	Y	nasal		н		эн		U+041D: CYRILLIC CAPITAL LETTER EN	ᠨ	🗸
																
Р		r	R		R	R	J	approximant		р		эр		U+0420: CYRILLIC CAPITAL LETTER ER	ᠷ	🗸
																
																
̆						–		diacritic	decomposed text only					U+0306: COMBINING BREVE​		
̈						–		diacritic	decomposed text only					U+0308: COMBINING DIAERESIS​		
																
																
																
																
																
																
																
																
																
																
.			.		.	.	/	full stop						U+002E: FULL STOP		
,			,		,	,	?	comma						U+002C: COMMA		
:			:		:	:	^	colon						U+003A: COLON		
;			;		;	;	$	semicolon						U+003B: SEMICOLON		
!			!		!	!		exclamation mark						U+0021: EXCLAMATION MARK		
?			?		?	?	&	question mark						U+003F: QUESTION MARK		
																
																
…			…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS		
																
																
																
«			“		<	«	:	quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		
»			”		>	»	;	quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		
‹			‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK		
›			’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK		
„			”		>	”		quotation mark						U+201E: DOUBLE LOW-9 QUOTATION MARK		
“			“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK		
‘			‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK		
‚			’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK		
																
																
																
(			(		(	(		parenthesis						U+0028: LEFT PARENTHESIS		
[			[		(	[		bracket						U+005B: LEFT SQUARE BRACKET		
)			)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS		
]			]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET		
																
																
-			-		-	-		hyphen						U+2010: HYPHEN		
‑			‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN		
–			–		-	–		en dash						U+2013: EN DASH		
—			—		-	—		em dash						U+2014: EM DASH		
																
																
																
ʼ			ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE		
§			§			§		section sign						U+00A7: SECTION SIGN		
†			†			†		dagger						U+2020: DAGGER		
‡			‡			‡		double dagger						U+2021: DOUBLE DAGGER		
′			′			′		prime						U+2032: PRIME		
″			″			″		double prime						U+2033: DOUBLE PRIME		
																
																
																
																
₮					#	¤	$	currency symbol						U+20AE: TUGRIK SIGN		🗸
№				№	#	#	!	number symbol						U+2116: NUMERO SIGN		
																
																
																
%					%	%		percentage mark						U+0025: PERCENT SIGN		
‰					%	‰		per mille mark						U+2030: PER MILLE SIGN		


`

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
"lc":10,
"uc":11,
"meaning":0,
"shape": 0,
"numLoc": 0,

"nnameLoc": 12,
"nameLoc": 13,
"ucsName": 14,
"block": 16,

"othertranscriptions": [[3, 'MNS 5217:2012']]
}

latinPanel = 'aː ă d͡z d͡ʒ e ᵊ eː ɛː ɡ i̯ ĭ ⁱ iː ʲ ɮ ŋ ɔ ɵ oː ɔː ŏ ʃ t t͡s t͡ʃ ü uː ʊ ʊː w̜ ɣ'



