var spreadsheet = `
и	i	i		i	i	n	Ll		neutral vowel			И	и		U+0438: CYRILLIC SMALL LETTER I	ᠢ	✓
й	i	i̯		i	ĭ	a	Ll		glide	for diphthongs		Й	хагас и		U+0439: CYRILLIC SMALL LETTER SHORT I	ᠢ	✓
ий		iː		ii					long neutral vowel						U+0438 U+0439: CYRILLIC SMALL LETTER I, SMALL LETTER SHORT I		
иа		i̯a		ia					dipthong						U+0438 U+0430: CYRILLIC SMALL LETTER I, SMALL LETTER A		
ы	I	i		y	ɪ	s	Ll		vowel			Ы	эр үгийн ы		U+044B: CYRILLIC SMALL LETTER YERU	ᠢ	✓
ү	u	u		ü	u	o	Ll		front (+ATR) vowel			Ү	ү		U+04AF: CYRILLIC SMALL LETTER STRAIGHT U	ᠦ	✓
үү		uː		üü					long front (+ATR) vowel						U+04AF U+04AF: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER STRAIGHT U		
үй		ui̯		ui					diphthong						U+04AF U+0439: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER SHORT I		
у	u	ʊ		u	ʊ	e	Ll		back (-ATR) vowel			У	у		U+0443: CYRILLIC SMALL LETTER U	ᠤ	✓
уу		ʊː		uu					long back (-ATR) vowel						U+0443 U+0443: CYRILLIC SMALL LETTER U, SMALL LETTER U		
уй		ʊi̯		ui					diphthong						U+0443 U+0439: CYRILLIC SMALL LETTER U, SMALL LETTER SHORT I		
уа		u̯a		ua					diphthong						U+0443 U+0430: CYRILLIC SMALL LETTER U, SMALL LETTER A		
ю	u	jʊ ju		yu	jᵘ	/	Ll		ioticised vowel			Ю	ю		U+044E: CYRILLIC SMALL LETTER YU	ᠶᠦ	✓
юү		juː		yüü	jᵘu				ioticised long vowel						U+044E U+04AF: CYRILLIC SMALL LETTER YU, SMALL LETTER STRAIGHT U		
юу		jʊː		yuu	jᵘʊ				ioticised long vowel						U+044E U+0443: CYRILLIC SMALL LETTER YU, SMALL LETTER U		
																	
э	e	e i		e	e	t	Ll		front (+ATR) vowel			Э	э		U+044D: CYRILLIC SMALL LETTER E	ᠡ	✓
ээ		eː		ee	ee				long front (+ATR) vowel						U+044D U+044D: CYRILLIC SMALL LETTER E, SMALL LETTER E		
эй		ei̯		ei					diphthong						U+044D U+0439: CYRILLIC SMALL LETTER E, SMALL LETTER SHORT I		
ө	e	ɵ o		ö	ɵ	f	Ll		front (+ATR) vowel			Ө	ө		U+04E9: CYRILLIC SMALL LETTER BARRED O	ᠥ	✓
өө		ɵː		öö	ɵɵ				long front (+ATR) vowel						U+04E9 U+04E9: CYRILLIC SMALL LETTER BARRED O, SMALL LETTER BARRED O		
е	e	ji je		ye	jᵉ		Ll		ioticised vowel			Е	е		U+0435: CYRILLIC SMALL LETTER IE	ᠶᠡ	✓
																	
о	o	ɔ		o	ɔ	k	Ll		back (-ATR) vowel			О	о		U+043E: CYRILLIC SMALL LETTER O	ᠣ	✓
оо		ɔː		oo	ɔɔ				long back (-ATR) vowel						U+043E U+043E: CYRILLIC SMALL LETTER O, SMALL LETTER O		
ой		ɔi̯		oi					diphthong						U+043E U+0439: CYRILLIC SMALL LETTER O, SMALL LETTER SHORT I		
ё	o	jɔ		yo	jᵒ	c	Ll		ioticised vowel			Ё	ё		U+0451: CYRILLIC SMALL LETTER IO	ᠶᠣ	✓
ёо		jɔː		yoo	jᵒɔ				ioticised long vowel						U+0451 U+043E: CYRILLIC SMALL LETTER IO, SMALL LETTER O		
																	
а	a	a		a	a	g	Ll		back (-ATR) vowel			А	а		U+0430: CYRILLIC SMALL LETTER A	ᠠ	✓
аа		aː		aa	aa				long back (-ATR) vowel			АА			U+0430 U+0430: CYRILLIC SMALL LETTER A, SMALL LETTER A		
ай		ɛː		ai					diphthong						U+0430 U+0439: CYRILLIC SMALL LETTER A, SMALL LETTER SHORT I		
я	a	ja		ya	jᵃ	z	Ll		ioticised vowel			Я	я		U+044F: CYRILLIC SMALL LETTER YA	ᠶᠠ	✓
яа		jaː		yaa	jᵃa				ioticised long vowel						U+044F U+0430: CYRILLIC SMALL LETTER YA, SMALL LETTER A		
																	
И	I	i		i	I	n	Lu		neutral vowel		и		и		U+0418: CYRILLIC CAPITAL LETTER I	ᠢ	✓
Й	I	i̯		i	Ĭ	a	Lu		glide	for diphthongs	й		хагас и		U+0419: CYRILLIC CAPITAL LETTER SHORT I	ᠢ	✓
ИЙ		iː		ii					long neutral vowel						U+0418 U+0418 U+0306: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER SHORT I		
ИА		i̯a		ia					dipthong						U+0418 U+0410: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER A		
Ы	I	i		y	Ɪ	s	Lu		vowel		ы		эр үгийн ы		U+042B: CYRILLIC CAPITAL LETTER YERU	ᠢ	✓
Ү	U	u		ü	U	o	Lu		front (+ATR) vowel		ү		ү		U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U	ᠦ	✓
ҮҮ		uː		üü					long front (+ATR) vowel						U+04AE U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER STRAIGHT U		
ҮЙ		ui̯		ui					diphthong						U+04AE U+0418 U+0306: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER SHORT I		
У	U	ʊ		u	Ʊ	e	Lu		back (-ATR) vowel		у		у		U+0423: CYRILLIC CAPITAL LETTER U	ᠤ	✓
УУ		ʊː		uu					long back (-ATR) vowel						U+0423 U+0423: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER U		
УЙ		ʊi̯		ui					diphthong						U+0423 U+0418 U+0306: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER SHORT I		
УА		u̯a		ua					diphthong						U+0423 U+0410: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER A		
Ю	U	jʊ ju		yu	Jᵘ	/	Lu		ioticised vowel		ю		ю		U+042E: CYRILLIC CAPITAL LETTER YU	ᠶᠦ	✓
ЮҮ		juː		yüü	JᵘU				ioticised long vowel						U+042E U+04AE: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER STRAIGHT U		
ЮУ		jʊː		yuu	JᵘƱ				ioticised long vowel						U+042E U+0423: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER U		
																	
Э	E	e i		e	E	t	Lu		front (+ATR) vowel		э		э		U+042D: CYRILLIC CAPITAL LETTER E	ᠡ	✓
ЭЭ		eː		ee	EE				long front (+ATR) vowel						U+042D U+042D: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER E		
ЭЙ		ei̯		ei					diphthong						U+042D U+0418 U+0306: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER SHORT I		
Ө	E	ɵ o		ö	Ɵ	f	Lu		front (+ATR) vowel		ө		ө		U+04E8: CYRILLIC CAPITAL LETTER BARRED O	ᠥ	✓
ӨӨ		ɵː		öö	ƟƟ				long front (+ATR) vowel						U+04E8 U+04E8: CYRILLIC CAPITAL LETTER BARRED O, CAPITAL LETTER BARRED O		
Е	E	jɵ		ye	Jᵉ		Lu		ioticised vowel		е		е		U+0415: CYRILLIC CAPITAL LETTER IE	ᠶᠡ	✓
																	
О	O	ɔ		o	Ɔ	k	Lu		back (-ATR) vowel		о		о		U+041E: CYRILLIC CAPITAL LETTER O	ᠣ	✓
ОО		ɔː		oo	ƆƆ				long back (-ATR) vowel						U+041E U+041E: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER O		
ОЙ		ɔi̯		oi					diphthong						U+041E U+0419: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER SHORT I		
Ё	O	jɔ		yo	Jᵒ	c	Lu		ioticised vowel		ё		ё		U+0401: CYRILLIC CAPITAL LETTER IO	ᠶᠣ	✓
ЁО		jɔː		yoo	JᵒƆ				ioticised long vowel						U+0401 U+041E: CYRILLIC CAPITAL LETTER IO, CAPITAL LETTER O		
																	
А	A	a		a	A	g	Lu		back (-ATR) vowel		а		а		U+0410: CYRILLIC CAPITAL LETTER A	ᠠ	✓
АА		aː		aa	AA				long back (-ATR) vowel		аа				U+0410 U+0410: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER A		
АЙ		ɛː		ai					diphthong						U+0410 U+0418 U+0306: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER I, COMBINING BREVE		
Я	A	ja		ya	Jᵃ	z	Lu		ioticised vowel		я		я		U+042F: CYRILLIC CAPITAL LETTER YA	ᠶᠠ	✓
ЯА		jaː		yaa	JᵃA				ioticised long vowel						U+042F U+0410: CYRILLIC CAPITAL LETTER YA, CAPITAL LETTER A		
																	
																	
ь		ĭ ʲ		i	ʲ	,	Ll		short vowel / palatalisation marker			Ь	зөөлний тэмдэг		U+044C: CYRILLIC SMALL LETTER SOFT SIGN	ᠢ	✓
ъ		∅		"	ʲ	]	Ll					Ъ	хатуугийн тэмдэг		U+044A: CYRILLIC SMALL LETTER HARD SIGN	ᠢ	✓
																	
																	
																	
п	p	p		p	p	'	Ll		plosive	mostly foreign loan words		П	пэ		U+043F: CYRILLIC SMALL LETTER PE	ᠫ	✓
б	b	b		b	b	d	Ll		plosive			Б	бэ		U+0431: CYRILLIC SMALL LETTER BE	ᠪ	✓
т	t	t		t	t	m	Ll		plosive			Т	тэ		U+0442: CYRILLIC SMALL LETTER TE	ᠲ	✓
д	d	d		d	d	;	Ll		plosive			Д	дэ		U+0434: CYRILLIC SMALL LETTER DE	ᠳ	✓
к	k	k x		k	k	[	Ll		plosive/fricative	for transliteration		К	ка		U+043A: CYRILLIC SMALL LETTER KA	ᠺ	✓
г	g	ɡ ɣ ɢ		g	g	u	Ll		plosive			Г	гэ		U+0433: CYRILLIC SMALL LETTER GHE	ᠭ	✓
																	
ц	q	t͡s		ts	ʦ	w	Ll		affricate			Ц	цэ		U+0446: CYRILLIC SMALL LETTER TSE	ᠴ	✓
з	z	d͡z		z	ʣ	p	Ll		affricate			З			U+0437: CYRILLIC SMALL LETTER ZE	ᠽ	✓
ч	c	t͡ʃ		ch	ʧ	x	Ll		affricate			Ч	чэ		U+0447: CYRILLIC SMALL LETTER CHE	ᠴᠤ	✓
ж	j	d͡ʒ		j	ʤ	r	Ll		affricate			Ж	жэ		U+0436: CYRILLIC SMALL LETTER ZHE	ᠵ	✓
																	
ф	f	f pʰ		f	f	q	Ll		fricative	for transliteration		Ф	фэ, фа, эф		U+0444: CYRILLIC SMALL LETTER EF	ᠹ	✓
в	w	w̜ v f		v	v	.	Ll		fricative			В	вэ		U+0432: CYRILLIC SMALL LETTER VE	ᠸ	✓
с	s	s		s	s	v	Ll		fricative			С	эс		U+0441: CYRILLIC SMALL LETTER ES	ᠰ	✓
ш	s	ʃ		sh	ʃ	i	Ll		fricative			Ш	ша, эш		U+0448: CYRILLIC SMALL LETTER SHA	ᠱ	✓
щ	s	ʃ		sh	š	=	Ll		fricative	Russian words only		Щ	ща, эшчэ		U+0449: CYRILLIC SMALL LETTER SHCHA	ᠰᠢ	✓
л	l	ɮ		l	ɮ	l	Ll		approximant			Л	эл		U+043B: CYRILLIC SMALL LETTER EL	ᠯ	✓
х	x	x		kh	x	h	Ll		fricative			Х	хэ, ха		U+0445: CYRILLIC SMALL LETTER HA	ᠬ	✓
																	
м	m	m		m	m	b	Ll		nasal			М	эм		U+043C: CYRILLIC SMALL LETTER EM	ᠮ	✓
н	n	n ŋ		n	n	y	Ll		nasal			Н	эн		U+043D: CYRILLIC SMALL LETTER EN	ᠨ	✓
																	
р	r	r		r	r	j	Ll		approximant			Р	эр		U+0440: CYRILLIC SMALL LETTER ER	ᠷ	✓
																	
																	
П	P	p		P	P		Lu		plosive	mostly foreign loan words	п		пэ		U+041F: CYRILLIC CAPITAL LETTER PE	ᠫ	✓
Б	B	b		B	B	D	Lu		plosive		б		бэ		U+0411: CYRILLIC CAPITAL LETTER BE	ᠪ	✓
Т	T	t		T	T	M	Lu		plosive		т		тэ		U+0422: CYRILLIC CAPITAL LETTER TE	ᠲ	✓
Д	D	d		D	D	;	Lu		plosive		д		дэ		U+0414: CYRILLIC CAPITAL LETTER DE	ᠳ	✓
К	K	k x		K	K	[	Lu		plosive/fricative	for transliteration	к		ка		U+041A: CYRILLIC CAPITAL LETTER KA	ᠺ	✓
Г	G	ɡ ɣ ɢ		G	G	U	Lu		plosive		г		гэ		U+0413: CYRILLIC CAPITAL LETTER GHE	ᠭ	✓
																	
Ц	Q	t͡s		TS	ʦ̿	W	Lu		affricate		ц		цэ		U+0426: CYRILLIC CAPITAL LETTER TSE	ᠴ	✓
З	Z	d͡z		Z	ʣ̿	P	Lu		affricate		з				U+0417: CYRILLIC CAPITAL LETTER ZE	ᠽ	✓
Ч	C	t͡ʃ		CH	ʧ̿	X	Lu		affricate		ч		чэ		U+0427: CYRILLIC CAPITAL LETTER CHE	ᠴᠤ	✓
Ж	J	d͡ʒ		J	ʤ̿	R	Lu		affricate		ж		жэ		U+0416: CYRILLIC CAPITAL LETTER ZHE	ᠵ	✓
																	
Ф	F	f pʰ		F	F	Q	Lu		fricative	for transliteration	ф		фэ, фа, эф		U+0424: CYRILLIC CAPITAL LETTER EF	ᠹ	✓
В	W	w̜ v f		V	V	.	Lu		fricative		в		вэ		U+0412: CYRILLIC CAPITAL LETTER VE	ᠸ	✓
С	S	s		S	S	V	Lu		fricative		с		эс		U+0421: CYRILLIC CAPITAL LETTER ES	ᠰ	✓
Ш	S	ʃ		SH	Ʃ	I	Lu		fricative		ш		ша, эш		U+0428: CYRILLIC CAPITAL LETTER SHA	ᠱ	✓
Щ	S	ʃ		SH	Š	=	Lu		fricative	Russian words only	щ		ща, эшчэ		U+0429: CYRILLIC CAPITAL LETTER SHCHA	ᠰᠢ	✓
Л	L	ɮ		L	ɮ	L	Lu		approximant		л		эл		U+041B: CYRILLIC CAPITAL LETTER EL	ᠯ	✓
Х	X	x		KH	X	H	Lu		fricative		х		хэ, ха		U+0425: CYRILLIC CAPITAL LETTER HA	ᠬ	✓
																	
М	M	m		M	M	B	Lu		nasal		м		эм		U+041C: CYRILLIC CAPITAL LETTER EM	ᠮ	✓
Н	N	n ŋ		N	N	Y	Lu		nasal		н		эн		U+041D: CYRILLIC CAPITAL LETTER EN	ᠨ	✓
																	
Р	R	r		R	R	J	Lu		approximant		р		эр		U+0420: CYRILLIC CAPITAL LETTER ER	ᠷ	✓
																	
																	
̆					–		Mn​		diacritic	decomposed text only					U+0306: COMBINING BREVE​		✓
̈					–		Mn​		diacritic	decomposed text only					U+0308: COMBINING DIAERESIS​		✓
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
.	.			.	.	/	Po		full stop						U+002E: FULL STOP		
,	,			,	,	?	Po		comma						U+002C: COMMA		
:	:			:	:	^	Po		colon						U+003A: COLON		
;	;			;	;	$	Po		semicolon						U+003B: SEMICOLON		
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK		
?	?			?	?	&	Po		question mark						U+003F: QUESTION MARK		
																	
																	
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS		
																	
																	
																	
«	<			“	«	:	Pi		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		
»	>			”	»	;	Pf		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		
‹	<			‘	‹		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK		
›	>			’	›		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK		
„	>			”	”		Ps		quotation mark						U+201E: DOUBLE LOW-9 QUOTATION MARK		
“	<			“	 “		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK		
‘	<			‘	‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK		
‚	>			’	’		Ps		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK		
																	
																	
																	
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS		
[	(			[	[		Ps		bracket						U+005B: LEFT SQUARE BRACKET		
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS		
]	)			]	]		Pe		bracket						U+005D: RIGHT SQUARE BRACKET		
																	
																	
-	-			-	-		Pd		hyphen						U+2010: HYPHEN		
‑	-			‑	‑		Pd		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN		
–	-			–	–		Pd		en dash						U+2013: EN DASH		
—	-			—	—		Pd		em dash						U+2014: EM DASH		
																	
																	
																	
ʼ				ʼ	ʼ		Lm		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE		
§				§	§		Po		section sign						U+00A7: SECTION SIGN		
†				†	†		Po		dagger						U+2020: DAGGER		
‡				‡	‡		Po		double dagger						U+2021: DOUBLE DAGGER		
′				′	′		Po		prime						U+2032: PRIME		
″				″	″		Po		double prime						U+2033: DOUBLE PRIME		
																	
																	
																	
																	
₮	#				¤	$	Sc		currency symbol						U+20AE: TUGRIK SIGN		✓
№	#				#	!	So		number symbol						U+2116: NUMERO SIGN		
																	
																	
																	
%	%				%		Po		percentage mark						U+0025: PERCENT SIGN		
‰	%				‰		Po		per mille mark						U+2030: PER MILLE SIGN		




`


latinPanel = 'aː ă d͡z d͡ʒ e ᵊ eː ɛː ɡ i̯ ĭ ⁱ iː ʲ ɮ ŋ ɔ ɵ oː ɔː ŏ ʃ t t͡s t͡ʃ ü uː ʊ ʊː w̜ ɣ'


var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transcription": 4,
"transLoc": 5,
"kbd": 6,
"class": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":11,
"uc":12,
"meaning":0,
"shape": 0,
"numLoc": 0,

"nnameLoc": 13,
"nameLoc": 14,
"ucsName": 15,
"block": 17,

"othertranscriptions": [[4, 'MNS 5217:2012']]
}

