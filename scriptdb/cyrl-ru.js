var spreadsheet = `
п		p	p		p	p	g	plosive			П	пэ	pɛ	U+043F: CYRILLIC SMALL LETTER PE	cyrillic
б		b	b		b	b	,	plosive			Б	бэ	bɛ	U+0431: CYRILLIC SMALL LETTER BE	cyrillic
т		t 	t		t	t	n	plosive			Т	тэ	tɛ	U+0442: CYRILLIC SMALL LETTER TE	cyrillic
д		d	d		d	d	l	plosive			Д	дэ	dɛ	U+0434: CYRILLIC SMALL LETTER DE	cyrillic
к		k	k		k	k	r	plosive			К	ка	ka	U+043A: CYRILLIC SMALL LETTER KA	cyrillic
г		g	g		g	g	u	plosive			Г	гэ	ɡɛ	U+0433: CYRILLIC SMALL LETTER GHE	cyrillic
															
ц		t͡s	c	t͡s	t	ʦ	w	affricate			Ц	цэ	ʦɛ	U+0446: CYRILLIC SMALL LETTER TSE	cyrillic
ч		t͡ɕ	č	t͡ɕ	t	ʨ	x	affricate			Ч	чэ	ʨɛ	U+0447: CYRILLIC SMALL LETTER CHE	cyrillic
															
ф		f	f		f	f	a	fricative			Ф	эф	ɛf	U+0444: CYRILLIC SMALL LETTER EF	cyrillic
в		v	v		v	v	d	fricative			В	вэ	vɛ	U+0432: CYRILLIC SMALL LETTER VE	cyrillic
с		s	s		s	s	c	fricative			С	эс	ɛs	U+0441: CYRILLIC SMALL LETTER ES	cyrillic
з		z	z		z	z	p	fricative			З	зэ	zɛ	U+0437: CYRILLIC SMALL LETTER ZE	cyrillic
щ		ɕɕ	ŝ	ɕ	s	ʂ̂	o	fricative			Щ	ща	ɕɕæ	U+0449: CYRILLIC SMALL LETTER SHCHA	cyrillic
ш		ʂ	š	ʂ	s	ʂ	i	fricative			Ш	шæ	ʂa	U+0448: CYRILLIC SMALL LETTER SHA	cyrillic
ж		ʐ	ž	ʐ	z	ʐ	;	fricative			Ж	жэ	ʐɛ	U+0436: CYRILLIC SMALL LETTER ZHE	cyrillic
х		x	h		x	x	[	fricative			Х	ха	xa	U+0445: CYRILLIC SMALL LETTER HA	cyrillic
															
м		m	m		m	m	v	nasal			М	эм	ɛm	U+043C: CYRILLIC SMALL LETTER EM	cyrillic
н		n	n		n	n	y	nasal			Н	эн	ɛn	U+043D: CYRILLIC SMALL LETTER EN	cyrillic
															
р		r	r		r	r	h	approximant			Р	эр	ɛr	U+0440: CYRILLIC SMALL LETTER ER	cyrillic
л		ɫ l	l	ɫ	l	l	k	approximant			Л	эль	ɛlʲ	U+043B: CYRILLIC SMALL LETTER EL	cyrillic
й		j	ī	ī	y	y	q	semivowel			Й	и краткое	i ˈkratkəjɪ	U+0439: CYRILLIC SMALL LETTER SHORT I	cyrillic
															
и		i ɪ ɨ	i	ɨ ɪ	i	i	b	vowel			И	и	i	U+0438: CYRILLIC SMALL LETTER I	cyrillic
ы		ɨ	y	ɨ	i	ɨ	s	vowel			Ы	ы	ɨ	U+044B: CYRILLIC SMALL LETTER YERU	cyrillic
ю		ju u ʊ ʉ	û	û	u	jᵘ	.	vowel			Ю	ю	ju	U+044E: CYRILLIC SMALL LETTER YU	cyrillic
у		u ʊ	u		u	u	e	vowel			У	у	u	U+0443: CYRILLIC SMALL LETTER U	cyrillic
е		je e ɛ ɪ	e		e	e	t	vowel			Е	е	je	U+0435: CYRILLIC SMALL LETTER IE	cyrillic
ё		ɵ	ë	ë	o	jᵒ	\	vowel			Ё	jo	ё	U+0451: CYRILLIC SMALL LETTER IO	cyrillic
о		o	o		o	o	j	vowel			О	о	o	U+043E: CYRILLIC SMALL LETTER O	cyrillic
э		ɛ	è 	ɛ è	e	ɛ	'	vowel			Э	э	ɛ	U+044D: CYRILLIC SMALL LETTER E	cyrillic
я		jæ jɪ æ a ɪ	â	â	a	jᵃ	z	vowel			Я	я	ja	U+044F: CYRILLIC SMALL LETTER YA	cyrillic
а		a ə ʌ	a		a	a	f	vowel			А	а	a	U+0430: CYRILLIC SMALL LETTER A	cyrillic
															
ъ			ʺ 		"	ʺ	]	hard sign			Ъ	твёрдый знак	tvʲɵrdɨj znak	U+044A: CYRILLIC SMALL LETTER HARD SIGN	cyrillic
ь		ʲ	ʹ	ʲ	ʹ	ʹ	m	soft sign			Ь	мягкий знак	ˈmʲæxʲkʲɪj znak	U+044C: CYRILLIC SMALL LETTER SOFT SIGN	cyrillic
															
А		a	A		A	ạ	F	vowel		а		а	a	U+0410: CYRILLIC CAPITAL LETTER A	cyrillic
Б		b bʲ	B		B	ḅ	<	consonant		б		бэ	bɛ	U+0411: CYRILLIC CAPITAL LETTER BE	cyrillic
В		v vʲ	V		V	ṿ	D	consonant		в		вэ	vɛ	U+0412: CYRILLIC CAPITAL LETTER VE	cyrillic
Г		ɡ ɡʲ	G		G	g̣	U	consonant		г		гэ	ɡɛ	U+0413: CYRILLIC CAPITAL LETTER GHE	cyrillic
Д		d dʲ	D		D	ḍ	L	consonant		д		дэ	dɛ	U+0414: CYRILLIC CAPITAL LETTER DE	cyrillic
Е		je ʲe e	E		E	ẹ	T	vowel		е		е	je	U+0415: CYRILLIC CAPITAL LETTER IE	cyrillic
Ж		ʐ	Ž		Z	ʐ̣	:	consonant		ж		жэ	ʐɛ	U+0416: CYRILLIC CAPITAL LETTER ZHE	cyrillic
З		z zʲ	Z		Z	ẓ	P	consonant		з		зэ	zɛ	U+0417: CYRILLIC CAPITAL LETTER ZE	cyrillic
И		i ʲi ɨ	I		I	ị	B	vowel		и		и	i	U+0418: CYRILLIC CAPITAL LETTER I	cyrillic
Й		j	Ī		Y	ỵ	Q	vowel		й		и краткое	i ˈkratkəjɪ	U+0419: CYRILLIC CAPITAL LETTER SHORT I	cyrillic
К		k kʲ	K		K	ḳ	R	consonant		к		ка	ka	U+041A: CYRILLIC CAPITAL LETTER KA	cyrillic
Л		ɫ lʲ	L		L	ḷ	K	consonant		л		эль	ɛlʲ	U+041B: CYRILLIC CAPITAL LETTER EL	cyrillic
М		m mʲ	M		M	ṃ	V	consonant		м		эм	ɛm	U+041C: CYRILLIC CAPITAL LETTER EM	cyrillic
Н		n nʲ	N		N	ṇ	Y	consonant		н		эн	ɛn	U+041D: CYRILLIC CAPITAL LETTER EN	cyrillic
О		o	O		O	ọ	J	vowel		о		о	o	U+041E: CYRILLIC CAPITAL LETTER O	cyrillic
П		p pʲ	P		P	p̣	G	consonant		п		пэ	pɛ	U+041F: CYRILLIC CAPITAL LETTER PE	cyrillic
Р		r rʲ	R		R	ṛ	H	consonant		р		эр	ɛr	U+0420: CYRILLIC CAPITAL LETTER ER	cyrillic
С		s sʲ	S		S	ṣ	C	consonant		с		эс	ɛs	U+0421: CYRILLIC CAPITAL LETTER ES	cyrillic
Т		t tʲ	T		T	ṭ	N	consonant		т		тэ	tɛ	U+0422: CYRILLIC CAPITAL LETTER TE	cyrillic
У		u	U		U	ụ	E	vowel		у		у	u	U+0423: CYRILLIC CAPITAL LETTER U	cyrillic
Ф		f fʲ	F		F	f̣	A	consonant		ф		эф	ɛf	U+0424: CYRILLIC CAPITAL LETTER EF	cyrillic
Х		x xʲ	H		X	x̣	{	consonant		х		ха	xa	U+0425: CYRILLIC CAPITAL LETTER HA	cyrillic
Ц		t͡s	C		T	ʦ̣	W	consonant		ц		цэ	ʦɛ	U+0426: CYRILLIC CAPITAL LETTER TSE	cyrillic
Ч		t͡ɕ	Č		T	ʨ̣	X	consonant		ч		чэ	ʨɛ	U+0427: CYRILLIC CAPITAL LETTER CHE	cyrillic
Ш		ʂ	Š		S	ʂ̣	I	consonant		ш		шæ	ʂa	U+0428: CYRILLIC CAPITAL LETTER SHA	cyrillic
Щ		ɕː ɕʨ	Ŝ		S	ʂ̣̂	O	consonant		щ		ща	ɕɕæ	U+0429: CYRILLIC CAPITAL LETTER SHCHA	cyrillic
Ы		ɨ	Y		I	ɨ̣	S	vowel		ы		ы	ɨ	U+042B: CYRILLIC CAPITAL LETTER YERU	cyrillic
Э		ɛ	È		E	ɛ̣	"	vowel		э		э	ɛ	U+042D: CYRILLIC CAPITAL LETTER E	cyrillic
Ю		ju	Û		J	j̣ᵘ	.	vowel		ю		ю	ju	U+042E: CYRILLIC CAPITAL LETTER YU	cyrillic
Я		ja	Â		J	j̣ᵃ	Z	vowel		я		я	ja	U+042F: CYRILLIC CAPITAL LETTER YA	cyrillic
Ё		jo ʲo	Ë		J	j̣ᵒ	|	vowel		ё		jo	ё	U+0401: CYRILLIC CAPITAL LETTER IO	cyrillic
Ъ			ʺ		"	ʺ̣	}	hard sign		ъ		твёрдый знак	tvʲɵrdɨj znak	U+042A: CYRILLIC CAPITAL LETTER HARD SIGN	cyrillic
Ь		ʲ	ʹ		ʹ	ʹ̣	M	soft sign		ь		мягкий знак	ˈmʲæxʲkʲɪj znak	U+042C: CYRILLIC CAPITAL LETTER SOFT SIGN	cyrillic
															
															
															
															
ѱ		ps						consonant						U+0471: CYRILLIC SMALL LETTER PSI	
Ѱ		ps						consonant						U+0470: CYRILLIC CAPITAL LETTER PSI	
ѕ		z						consonant						U+0455: CYRILLIC SMALL LETTER DZE	
Ѕ		z						consonant						U+0405: CYRILLIC CAPITAL LETTER DZE	
ѯ		ks						consonant						U+046F: CYRILLIC SMALL LETTER KSI	
Ѯ		ks						consonant						U+046E: CYRILLIC CAPITAL LETTER KSI	
ѳ		f						consonant						U+0473: CYRILLIC SMALL LETTER FITA	
Ѳ		f						consonant						U+0472: CYRILLIC CAPITAL LETTER FITA	
															
ѵ		i						vowel						U+0475: CYRILLIC SMALL LETTER IZHITSA	
Ѵ		i						vowel						U+0474: CYRILLIC CAPITAL LETTER IZHITSA	
ѫ		ju u						vowel						U+046B: CYRILLIC SMALL LETTER BIG YUS	
Ѫ		ju u						vowel						U+046A: CYRILLIC CAPITAL LETTER BIG YUS	
ѧ		ja						vowel						U+0467: CYRILLIC SMALL LETTER LITTLE YUS	
Ѧ		ja						vowel						U+0466: CYRILLIC CAPITAL LETTER LITTLE YUS	
ѭ		ju						vowel						U+046D: CYRILLIC SMALL LETTER IOTIFIED BIG YUS	
Ѭ		ju						vowel						U+046C: CYRILLIC CAPITAL LETTER IOTIFIED BIG YUS	
ѩ		ja						vowel						U+0469: CYRILLIC SMALL LETTER IOTIFIED LITTLE YUS	
Ѩ		ja						vowel						U+0468: CYRILLIC CAPITAL LETTER IOTIFIED LITTLE YUS	
ѣ		e						vowel						U+0463: CYRILLIC SMALL LETTER YAT	
Ѣ		e						vowel						U+0462: CYRILLIC CAPITAL LETTER YAT	
і		i						vowel						U+0456: CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I	
І		i						vowel						U+0406: CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I	
															
																														
															
́		ˈ		ˈ	[	ˈ		stress accent	used in dictionaries, etc.					U+0301: COMBINING ACUTE ACCENT​	cyrillic
															
															
.			.		.	.	/	full stop						U+002E: FULL STOP	cyrillic
,			,		,	,	?	comma						U+002C: COMMA	cyrillic
:			:		:	:	^	colon						U+003A: COLON	cyrillic
;			;		;	;	$	semicolon						U+003B: SEMICOLON	cyrillic
!			!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	cyrillic
?			?		?	?	&	question mark						U+003F: QUESTION MARK	cyrillic
															
															
…			…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS	cyrillic
															
															
															
«			“		<	«		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	cyrillic
»			”		>	»		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	cyrillic
‹			‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	cyrillic
›			’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	cyrillic
“			“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	cyrillic
„			”		>	”		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	cyrillic
‘			‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	cyrillic
‚			’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	cyrillic
															
															
															
(			(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	cyrillic
[			[		(	[		bracket						U+005B: LEFT SQUARE BRACKET	cyrillic
)			)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	cyrillic
]			]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET	cyrillic
															
															
-			-		-	-		hyphen						U+2010: HYPHEN	cyrillic
‑			‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	cyrillic
–			–		-	–		en dash						U+2013: EN DASH	cyrillic
—			—		-	—		em dash						U+2014: EM DASH	cyrillic
															
															
															
ʼ			ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	cyrillic
§			§			§		section sign						U+00A7: SECTION SIGN	cyrillic
†			†			†		dagger						U+2020: DAGGER	cyrillic
‡			‡			‡		double dagger						U+2021: DOUBLE DAGGER	cyrillic
′			′			′		prime						U+2032: PRIME	cyrillic
″			″			″		double prime						U+2033: DOUBLE PRIME	cyrillic
															
															
															
															
₽				₽	#	¤	*	currency symbol						U+20BD: RUBLE SIGN	cyrillic
№				№	#	#	#	number symbol						U+2116: NUMERO SIGN	cyrillic
															
															
															
%					%	%		percentage mark						U+0025: PERCENT SIGN	cyrillic
‰					%	‰		per mille mark						U+2030: PER MILLE SIGN	cyrillic




`

var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key":5,
"transLoc": 6,
"kbd": 7,
"transckey": 0,
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
"block": 15,

"othertranscriptions": [[3, 'ISO 9:1995']]
}
