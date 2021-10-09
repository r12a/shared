var spreadsheet = `
и	Ll	i	i	aː	i	i	n	neutral vowel			И	и		U+0438: CYRILLIC SMALL LETTER I	ᠢ	✓
й	Ll	i̯	i	d͡z	i	ĭ	a	glide	for diphthongs		Й	хагас и		U+0439: CYRILLIC SMALL LETTER SHORT I	ᠢ	✓
ий		iː	ii	d͡ʒ				long neutral vowel						U+0438 U+0439: CYRILLIC SMALL LETTER I, SMALL LETTER SHORT I		
иа		i̯a	ia	e				dipthong						U+0438 U+0430: CYRILLIC SMALL LETTER I, SMALL LETTER A		
ы	Ll	i	y	ᵊ	I	ɪ	s	vowel			Ы	эр үгийн ы		U+044B: CYRILLIC SMALL LETTER YERU	ᠢ	✓
ү	Ll	u	ü	eː	u	u	o	front (+ATR) vowel			Ү	ү		U+04AF: CYRILLIC SMALL LETTER STRAIGHT U	ᠦ	✓
үү		uː	üü	ɛː				long front (+ATR) vowel						U+04AF U+04AF: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER STRAIGHT U		
үй		ui̯	ui	ɡ				diphthong						U+04AF U+0439: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER SHORT I		
у	Ll	ʊ	u	i̯	u	ʊ	e	back (-ATR) vowel			У	у		U+0443: CYRILLIC SMALL LETTER U	ᠤ	✓
уу		ʊː	uu	ⁱ				long back (-ATR) vowel						U+0443 U+0443: CYRILLIC SMALL LETTER U, SMALL LETTER U		
уй		ʊi̯	ui	iː				diphthong						U+0443 U+0439: CYRILLIC SMALL LETTER U, SMALL LETTER SHORT I		
уа		u̯a	ua	ʲ				diphthong						U+0443 U+0430: CYRILLIC SMALL LETTER U, SMALL LETTER A		
ю	Ll	jʊ ju	yu	ɮ	u	jᵘ	/	ioticised vowel			Ю	ю		U+044E: CYRILLIC SMALL LETTER YU	ᠶᠦ	✓
юү		juː	yüü	ŋ		jᵘu		ioticised long vowel						U+044E U+04AF: CYRILLIC SMALL LETTER YU, SMALL LETTER STRAIGHT U		
юу		jʊː	yuu	ɔ		jᵘʊ		ioticised long vowel						U+044E U+0443: CYRILLIC SMALL LETTER YU, SMALL LETTER U		
																
э	Ll	e i	e	ɵ	e	e	t	front (+ATR) vowel			Э	э		U+044D: CYRILLIC SMALL LETTER E	ᠡ	✓
ээ		eː	ee	oː		ee		long front (+ATR) vowel						U+044D U+044D: CYRILLIC SMALL LETTER E, SMALL LETTER E		
эй		ei̯	ei	ɔː				diphthong						U+044D U+0439: CYRILLIC SMALL LETTER E, SMALL LETTER SHORT I		
ө	Ll	ɵ o	ö	ʃ	e	ɵ	f	front (+ATR) vowel			Ө	ө		U+04E9: CYRILLIC SMALL LETTER BARRED O	ᠥ	✓
өө		ɵː	öö	t		ɵɵ		long front (+ATR) vowel						U+04E9 U+04E9: CYRILLIC SMALL LETTER BARRED O, SMALL LETTER BARRED O		
е	Ll	ji je	ye	t͡s	e	jᵉ		ioticised vowel			Е	е		U+0435: CYRILLIC SMALL LETTER IE	ᠶᠡ	✓
																
о	Ll	ɔ	o	t͡ʃ	o	ɔ	k	back (-ATR) vowel			О	о		U+043E: CYRILLIC SMALL LETTER O	ᠣ	✓
оо		ɔː	oo	ü		ɔɔ		long back (-ATR) vowel						U+043E U+043E: CYRILLIC SMALL LETTER O, SMALL LETTER O		
ой		ɔi̯	oi	uː				diphthong						U+043E U+0439: CYRILLIC SMALL LETTER O, SMALL LETTER SHORT I		
ё	Ll	jɔ	yo	ʊ	o	jᵒ	c	ioticised vowel			Ё	ё		U+0451: CYRILLIC SMALL LETTER IO	ᠶᠣ	✓
ёо		jɔː	yoo	ʊː		jᵒɔ		ioticised long vowel						U+0451 U+043E: CYRILLIC SMALL LETTER IO, SMALL LETTER O		
																
а	Ll	a	a	w̜	a	a	g	back (-ATR) vowel			А	а		U+0430: CYRILLIC SMALL LETTER A	ᠠ	✓
аа		aː	aa	ɣ		aa		long back (-ATR) vowel			АА			U+0430 U+0430: CYRILLIC SMALL LETTER A, SMALL LETTER A		
ай		ɛː	ai					diphthong						U+0430 U+0439: CYRILLIC SMALL LETTER A, SMALL LETTER SHORT I		
я	Ll	ja	ya		a	jᵃ	z	ioticised vowel			Я	я		U+044F: CYRILLIC SMALL LETTER YA	ᠶᠠ	✓
яа		jaː	yaa			jᵃa		ioticised long vowel						U+044F U+0430: CYRILLIC SMALL LETTER YA, SMALL LETTER A		
																
И	Lu	i	i	aː	I	I	n	neutral vowel		и		и		U+0418: CYRILLIC CAPITAL LETTER I	ᠢ	✓
Й	Lu	i̯	i	d͡z	I	Ĭ	a	glide	for diphthongs	й		хагас и		U+0419: CYRILLIC CAPITAL LETTER SHORT I	ᠢ	✓
ИЙ		iː	ii	d͡ʒ				long neutral vowel						U+0418 U+0418 U+0306: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER SHORT I		
ИА		i̯a	ia	e				dipthong						U+0418 U+0410: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER A		
Ы	Lu	i	y	ᵊ	I	Ɪ	s	vowel		ы		эр үгийн ы		U+042B: CYRILLIC CAPITAL LETTER YERU	ᠢ	✓
Ү	Lu	u	ü	eː	U	U	o	front (+ATR) vowel		ү		ү		U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U	ᠦ	✓
ҮҮ		uː	üü	ɛː				long front (+ATR) vowel						U+04AE U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER STRAIGHT U		
ҮЙ		ui̯	ui	ɡ				diphthong						U+04AE U+0418 U+0306: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER SHORT I		
У	Lu	ʊ	u	i̯	U	Ʊ	e	back (-ATR) vowel		у		у		U+0423: CYRILLIC CAPITAL LETTER U	ᠤ	✓
УУ		ʊː	uu	ⁱ				long back (-ATR) vowel						U+0423 U+0423: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER U		
УЙ		ʊi̯	ui	iː				diphthong						U+0423 U+0418 U+0306: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER SHORT I		
УА		u̯a	ua	ʲ				diphthong						U+0423 U+0410: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER A		
Ю	Lu	jʊ ju	yu	ɮ	U	Jᵘ	/	ioticised vowel		ю		ю		U+042E: CYRILLIC CAPITAL LETTER YU	ᠶᠦ	✓
ЮҮ		juː	yüü	ŋ		JᵘU		ioticised long vowel						U+042E U+04AE: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER STRAIGHT U		
ЮУ		jʊː	yuu	ɔ		JᵘƱ		ioticised long vowel						U+042E U+0423: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER U		
																
Э	Lu	e i	e	ɵ	E	E	t	front (+ATR) vowel		э		э		U+042D: CYRILLIC CAPITAL LETTER E	ᠡ	✓
ЭЭ		eː	ee	oː		EE		long front (+ATR) vowel						U+042D U+042D: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER E		
ЭЙ		ei̯	ei	ɔː				diphthong						U+042D U+0418 U+0306: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER SHORT I		
Ө	Lu	ɵ o	ö	ʃ	E	Ɵ	f	front (+ATR) vowel		ө		ө		U+04E8: CYRILLIC CAPITAL LETTER BARRED O	ᠥ	✓
ӨӨ		ɵː	öö	t		ƟƟ		long front (+ATR) vowel						U+04E8 U+04E8: CYRILLIC CAPITAL LETTER BARRED O, CAPITAL LETTER BARRED O		
Е	Lu	jɵ	ye	t͡s	E	Jᵉ		ioticised vowel		е		е		U+0415: CYRILLIC CAPITAL LETTER IE	ᠶᠡ	✓
																
О	Lu	ɔ	o	t͡ʃ	O	Ɔ	k	back (-ATR) vowel		о		о		U+041E: CYRILLIC CAPITAL LETTER O	ᠣ	✓
ОО		ɔː	oo	ü		ƆƆ		long back (-ATR) vowel						U+041E U+041E: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER O		
ОЙ		ɔi̯	oi	uː				diphthong						U+041E U+0419: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER SHORT I		
Ё	Lu	jɔ	yo	ʊ	O	Jᵒ	c	ioticised vowel		ё		ё		U+0401: CYRILLIC CAPITAL LETTER IO	ᠶᠣ	✓
ЁО		jɔː	yoo	ʊː		JᵒƆ		ioticised long vowel						U+0401 U+041E: CYRILLIC CAPITAL LETTER IO, CAPITAL LETTER O		
																
А	Lu	a	a	w̜	A	A	g	back (-ATR) vowel		а		а		U+0410: CYRILLIC CAPITAL LETTER A	ᠠ	✓
АА		aː	aa	ɣ		AA		long back (-ATR) vowel		аа				U+0410 U+0410: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER A		
АЙ		ɛː	ai					diphthong						U+0410 U+0418 U+0306: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER I, COMBINING BREVE		
Я	Lu	ja	ya		A	Jᵃ	z	ioticised vowel		я		я		U+042F: CYRILLIC CAPITAL LETTER YA	ᠶᠠ	✓
ЯА		jaː	yaa			JᵃA		ioticised long vowel						U+042F U+0410: CYRILLIC CAPITAL LETTER YA, CAPITAL LETTER A		
																
																
ь	Ll	ĭ ʲ	i			ʲ	,	short vowel / palatalisation marker			Ь	зөөлний тэмдэг		U+044C: CYRILLIC SMALL LETTER SOFT SIGN	ᠢ	✓
ъ	Ll	∅	"			ʲ	]				Ъ	хатуугийн тэмдэг		U+044A: CYRILLIC SMALL LETTER HARD SIGN	ᠢ	✓
																
																
																
п	Ll	p	p		p	p	'	plosive	mostly foreign loan words		П	пэ		U+043F: CYRILLIC SMALL LETTER PE	ᠫ	✓
б	Ll	b	b		b	b	d	plosive			Б	бэ		U+0431: CYRILLIC SMALL LETTER BE	ᠪ	✓
т	Ll	t	t		t	t	m	plosive			Т	тэ		U+0442: CYRILLIC SMALL LETTER TE	ᠲ	✓
д	Ll	d	d		d	d	;	plosive			Д	дэ		U+0434: CYRILLIC SMALL LETTER DE	ᠳ	✓
к	Ll	k x	k		k	k	[	plosive/fricative	for transliteration		К	ка		U+043A: CYRILLIC SMALL LETTER KA	ᠺ	✓
г	Ll	ɡ ɣ ɢ	g		g	g	u	plosive			Г	гэ		U+0433: CYRILLIC SMALL LETTER GHE	ᠭ	✓
																
ц	Ll	t͡s	ts		q	ʦ	w	affricate			Ц	цэ		U+0446: CYRILLIC SMALL LETTER TSE	ᠴ	✓
з	Ll	d͡z	z		z	ʣ	p	affricate			З			U+0437: CYRILLIC SMALL LETTER ZE	ᠽ	✓
ч	Ll	t͡ʃ	ch		c	ʧ	x	affricate			Ч	чэ		U+0447: CYRILLIC SMALL LETTER CHE	ᠴᠤ	✓
ж	Ll	d͡ʒ	j		j	ʤ	r	affricate			Ж	жэ		U+0436: CYRILLIC SMALL LETTER ZHE	ᠵ	✓
																
ф	Ll	f pʰ	f		f	f	q	fricative	for transliteration		Ф	фэ, фа, эф		U+0444: CYRILLIC SMALL LETTER EF	ᠹ	✓
в	Ll	v w̜ f	v		w	v	.	fricative			В	вэ		U+0432: CYRILLIC SMALL LETTER VE	ᠸ	✓
с	Ll	s	s		s	s	v	fricative			С	эс		U+0441: CYRILLIC SMALL LETTER ES	ᠰ	✓
ш	Ll	ʃ	sh		s	ʃ	i	fricative			Ш	ша, эш		U+0448: CYRILLIC SMALL LETTER SHA	ᠱ	✓
щ	Ll	ʃ	sh		s	š	=	fricative	Russian words only		Щ	ща, эшчэ		U+0449: CYRILLIC SMALL LETTER SHCHA	ᠰᠢ	✓
л	Ll	ɮ	l		l	ɮ	l	approximant			Л	эл		U+043B: CYRILLIC SMALL LETTER EL	ᠯ	✓
х	Ll	x	kh		x	x	h	fricative			Х	хэ, ха		U+0445: CYRILLIC SMALL LETTER HA	ᠬ	✓
																
м	Ll	m	m		m	m	b	nasal			М	эм		U+043C: CYRILLIC SMALL LETTER EM	ᠮ	✓
н	Ll	n ŋ	n		n	n	y	nasal			Н	эн		U+043D: CYRILLIC SMALL LETTER EN	ᠨ	✓
																
р	Ll	r	r		r	r	j	approximant			Р	эр		U+0440: CYRILLIC SMALL LETTER ER	ᠷ	✓
																
																
П	Lu	p	P		P	P		plosive	mostly foreign loan words	п		пэ		U+041F: CYRILLIC CAPITAL LETTER PE	ᠫ	✓
Б	Lu	b	B		B	B	D	plosive		б		бэ		U+0411: CYRILLIC CAPITAL LETTER BE	ᠪ	✓
Т	Lu	t	T		T	T	M	plosive		т		тэ		U+0422: CYRILLIC CAPITAL LETTER TE	ᠲ	✓
Д	Lu	d	D		D	D	;	plosive		д		дэ		U+0414: CYRILLIC CAPITAL LETTER DE	ᠳ	✓
К	Lu	k x	K		K	K	[	plosive/fricative	for transliteration	к		ка		U+041A: CYRILLIC CAPITAL LETTER KA	ᠺ	✓
Г	Lu	ɡ ɣ ɢ	G		G	G	U	plosive		г		гэ		U+0413: CYRILLIC CAPITAL LETTER GHE	ᠭ	✓
																
Ц	Lu	t͡s	TS		Q	ʦ̿	W	affricate		ц		цэ		U+0426: CYRILLIC CAPITAL LETTER TSE	ᠴ	✓
З	Lu	d͡z	Z		Z	ʣ̿	P	affricate		з				U+0417: CYRILLIC CAPITAL LETTER ZE	ᠽ	✓
Ч	Lu	t͡ʃ	CH		C	ʧ̿	X	affricate		ч		чэ		U+0427: CYRILLIC CAPITAL LETTER CHE	ᠴᠤ	✓
Ж	Lu	d͡ʒ	J		J	ʤ̿	R	affricate		ж		жэ		U+0416: CYRILLIC CAPITAL LETTER ZHE	ᠵ	✓
																
Ф	Lu	f pʰ	F		F	F	Q	fricative	for transliteration	ф		фэ, фа, эф		U+0424: CYRILLIC CAPITAL LETTER EF	ᠹ	✓
В	Lu	v w̜ f	V		W	V	.	fricative		в		вэ		U+0412: CYRILLIC CAPITAL LETTER VE	ᠸ	✓
С	Lu	s	S		S	S	V	fricative		с		эс		U+0421: CYRILLIC CAPITAL LETTER ES	ᠰ	✓
Ш	Lu	ʃ	SH		S	Ʃ	I	fricative		ш		ша, эш		U+0428: CYRILLIC CAPITAL LETTER SHA	ᠱ	✓
Щ	Lu	ʃ	SH		S	Š	=	fricative	Russian words only	щ		ща, эшчэ		U+0429: CYRILLIC CAPITAL LETTER SHCHA	ᠰᠢ	✓
Л	Lu	ɮ	L		L	ɮ	L	approximant		л		эл		U+041B: CYRILLIC CAPITAL LETTER EL	ᠯ	✓
Х	Lu	x	KH		X	X	H	fricative		х		хэ, ха		U+0425: CYRILLIC CAPITAL LETTER HA	ᠬ	✓
																
М	Lu	m	M		M	M	B	nasal		м		эм		U+041C: CYRILLIC CAPITAL LETTER EM	ᠮ	✓
Н	Lu	n ŋ	N		N	N	Y	nasal		н		эн		U+041D: CYRILLIC CAPITAL LETTER EN	ᠨ	✓
																
Р	Lu	r	R		R	R	J	approximant		р		эр		U+0420: CYRILLIC CAPITAL LETTER ER	ᠷ	✓
																
																
̆	Mn​					–		diacritic	decomposed text only					U+0306: COMBINING BREVE​		✓
̈	Mn​					–		diacritic	decomposed text only					U+0308: COMBINING DIAERESIS​		✓
																
																
																
																
																
																
																
																
																
																
.	Po		.		.	.	/	full stop						U+002E: FULL STOP		
,	Po		,		,	,	?	comma						U+002C: COMMA		
:	Po		:		:	:	^	colon						U+003A: COLON		
;	Po		;		;	;	$	semicolon						U+003B: SEMICOLON		
!	Po		!		!	!		exclamation mark						U+0021: EXCLAMATION MARK		
?	Po		?		?	?	&	question mark						U+003F: QUESTION MARK		
																
																
…	Po		…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS		
																
																
																
«	Pi		“		<	«	:	quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		
»	Pf		”		>	»	;	quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		
‹	Pi		‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK		
›	Pf		’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK		
„	Ps		”		>	”		quotation mark						U+201E: DOUBLE LOW-9 QUOTATION MARK		
“	Pi		“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK		
‘	Pi		‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK		
‚	Ps		’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK		
																
																
																
(	Ps		(		(	(		parenthesis						U+0028: LEFT PARENTHESIS		
[	Ps		[		(	[		bracket						U+005B: LEFT SQUARE BRACKET		
)	Pe		)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS		
]	Pe		]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET		
																
																
-			-		-	-		hyphen						U+2010: HYPHEN		
‑	Pd		‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN		
–	Pd		–		-	–		en dash						U+2013: EN DASH		
—	Pd		—		-	—		em dash						U+2014: EM DASH		
																
																
																
ʼ	Lm		ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE		
§	Po		§			§		section sign						U+00A7: SECTION SIGN		
†	Po		†			†		dagger						U+2020: DAGGER		
‡	Po		‡			‡		double dagger						U+2021: DOUBLE DAGGER		
′	Po		′			′		prime						U+2032: PRIME		
″	Po		″			″		double prime						U+2033: DOUBLE PRIME		
																
																
																
																
₮	Sc				#	¤	$	currency symbol						U+20AE: TUGRIK SIGN		✓
№	So			№	#	#	!	number symbol						U+2116: NUMERO SIGN		
																
																
																
%	Po				%	%		percentage mark						U+0025: PERCENT SIGN		
‰	Po				%	‰		per mille mark						U+2030: PER MILLE SIGN		



`


latinPanel = 'aː ă d͡z d͡ʒ e ᵊ eː ɛː ɡ i̯ ĭ ⁱ iː ʲ ɮ ŋ ɔ ɵ oː ɔː ŏ ʃ t t͡s t͡ʃ ü uː ʊ ʊː w̜ ɣ'


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

