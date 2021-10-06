var spreadsheet = `
п	Ll	p pʲ	p		p	p	g	plosive			П	пэ	pɛ	U+043F: CYRILLIC SMALL LETTER PE	✓
б	Ll	b bʲ	b		b	b	,	plosive			Б	бэ	bɛ	U+0431: CYRILLIC SMALL LETTER BE	✓
т	Ll	t tʲ	t		t	t	n	plosive			Т	тэ	tɛ	U+0442: CYRILLIC SMALL LETTER TE	✓
д	Ll	d dʲ	d		d	d	l	plosive			Д	дэ	dɛ	U+0434: CYRILLIC SMALL LETTER DE	✓
к	Ll	k kʲ	k		k	k	r	plosive			К	ка	ka	U+043A: CYRILLIC SMALL LETTER KA	✓
г	Ll	ɡ ɡʲ	g	ɡ	g	ɡ	u	plosive			Г	гэ	ɡɛ	U+0433: CYRILLIC SMALL LETTER GHE	✓
															
ц	Ll	t͡s	c	t͡s	t	ʦ	w	affricate			Ц	цэ	ʦɛ	U+0446: CYRILLIC SMALL LETTER TSE	✓
ч	Ll	t͡ɕ	č	t͡ɕ	t	ʨ	x	affricate			Ч	чэ	ʨɛ	U+0447: CYRILLIC SMALL LETTER CHE	✓
															
ф	Ll	f fʲ	f		f	f	a	fricative			Ф	эф	ɛf	U+0444: CYRILLIC SMALL LETTER EF	✓
в	Ll	v vʲ	v		v	v	d	fricative			В	вэ	vɛ	U+0432: CYRILLIC SMALL LETTER VE	✓
с	Ll	s sʲ	s		s	s	c	fricative			С	эс	ɛs	U+0441: CYRILLIC SMALL LETTER ES	✓
з	Ll	z zʲ	z		z	z	p	fricative			З	зэ	zɛ	U+0437: CYRILLIC SMALL LETTER ZE	✓
щ	Ll	ɕɕ	ŝ	ɕ	s	ʂ̂	o	fricative			Щ	ща	ɕɕæ	U+0449: CYRILLIC SMALL LETTER SHCHA	✓
ш	Ll	ʂ	š	ʂ	s	ʂ	i	fricative			Ш	шæ	ʂa	U+0448: CYRILLIC SMALL LETTER SHA	✓
ж	Ll	ʐ	ž	ʐ	z	ʐ	;	fricative			Ж	жэ	ʐɛ	U+0436: CYRILLIC SMALL LETTER ZHE	✓
х	Ll	x xʲ	h		x	x	[	fricative			Х	ха	xa	U+0445: CYRILLIC SMALL LETTER HA	✓
															
м	Ll	m mʲ	m		m	m	v	nasal			М	эм	ɛm	U+043C: CYRILLIC SMALL LETTER EM	✓
н	Ll	n nʲ	n		n	n	y	nasal			Н	эн	ɛn	U+043D: CYRILLIC SMALL LETTER EN	✓
															
р	Ll	r rʲ	r		r	r	h	approximant			Р	эр	ɛr	U+0440: CYRILLIC SMALL LETTER ER	✓
л	Ll	ɫ lʲ	l	ɫ	l	l	k	approximant			Л	эль	ɛlʲ	U+043B: CYRILLIC SMALL LETTER EL	✓
й	Ll	j	ī	ī	y	y	q	semivowel			Й	и краткое	i ˈkratkəjɪ	U+0439: CYRILLIC SMALL LETTER SHORT I	✓
															
и	Ll	i ɪ ɨ	i	ɨ ɪ	i	i	b	vowel			И	и	i	U+0438: CYRILLIC SMALL LETTER I	✓
ы	Ll	ɨ	y	ɨ	i	ɨ	s	vowel			Ы	ы	ɨ	U+044B: CYRILLIC SMALL LETTER YERU	✓
ю	Ll	ju u ʊ ʉ	û	û	u	jᵘ	.	vowel			Ю	ю	ju	U+044E: CYRILLIC SMALL LETTER YU	✓
у	Ll	u ʊ	u		u	u	e	vowel			У	у	u	U+0443: CYRILLIC SMALL LETTER U	✓
е	Ll	je e ɛ ɪ	e		e	e	t	vowel			Е	е	je	U+0435: CYRILLIC SMALL LETTER IE	✓
ё	Ll	ɵ	ë	ë	o	jᵒ	\	vowel			Ё	jo	ё	U+0451: CYRILLIC SMALL LETTER IO	✓
о	Ll	o	o		o	o	j	vowel			О	о	o	U+043E: CYRILLIC SMALL LETTER O	✓
э	Ll	ɛ	è 	ɛ è	e	ɛ	'	vowel			Э	э	ɛ	U+044D: CYRILLIC SMALL LETTER E	✓
я	Ll	jæ jɪ æ a ɪ	â	â	a	jᵃ	z	vowel			Я	я	ja	U+044F: CYRILLIC SMALL LETTER YA	✓
а	Ll	a ə ʌ	a		a	a	f	vowel			А	а	a	U+0430: CYRILLIC SMALL LETTER A	✓
															
ъ	Ll		ʺ 		"	ʺ	]	hard sign			Ъ	твёрдый знак	tvʲɵrdɨj znak	U+044A: CYRILLIC SMALL LETTER HARD SIGN	✓
ь	Ll	ʲ	ʹ	ʲ	ʹ	ʹ	m	soft sign			Ь	мягкий знак	ˈmʲæxʲkʲɪj znak	U+044C: CYRILLIC SMALL LETTER SOFT SIGN	✓
															
А	Lu	a	A		A	ạ	F	vowel		а		а	a	U+0410: CYRILLIC CAPITAL LETTER A	✓
Б	Lu	b bʲ	B		B	ḅ	<	consonant		б		бэ	bɛ	U+0411: CYRILLIC CAPITAL LETTER BE	✓
В	Lu	v vʲ	V		V	ṿ	D	consonant		в		вэ	vɛ	U+0412: CYRILLIC CAPITAL LETTER VE	✓
Г	Lu	ɡ ɡʲ	G		G	g̣	U	consonant		г		гэ	ɡɛ	U+0413: CYRILLIC CAPITAL LETTER GHE	✓
Д	Lu	d dʲ	D		D	ḍ	L	consonant		д		дэ	dɛ	U+0414: CYRILLIC CAPITAL LETTER DE	✓
Е	Lu	je ʲe e	E		E	ẹ	T	vowel		е		е	je	U+0415: CYRILLIC CAPITAL LETTER IE	✓
Ж	Lu	ʐ	Ž		Z	ʐ̣	:	consonant		ж		жэ	ʐɛ	U+0416: CYRILLIC CAPITAL LETTER ZHE	✓
З	Lu	z zʲ	Z		Z	ẓ	P	consonant		з		зэ	zɛ	U+0417: CYRILLIC CAPITAL LETTER ZE	✓
И	Lu	i ʲi ɨ	I		I	ị	B	vowel		и		и	i	U+0418: CYRILLIC CAPITAL LETTER I	✓
Й	Lu	j	Ī		Y	ỵ	Q	vowel		й		и краткое	i ˈkratkəjɪ	U+0419: CYRILLIC CAPITAL LETTER SHORT I	✓
К	Lu	k kʲ	K		K	ḳ	R	consonant		к		ка	ka	U+041A: CYRILLIC CAPITAL LETTER KA	✓
Л	Lu	ɫ lʲ	L		L	ḷ	K	consonant		л		эль	ɛlʲ	U+041B: CYRILLIC CAPITAL LETTER EL	✓
М	Lu	m mʲ	M		M	ṃ	V	consonant		м		эм	ɛm	U+041C: CYRILLIC CAPITAL LETTER EM	✓
Н	Lu	n nʲ	N		N	ṇ	Y	consonant		н		эн	ɛn	U+041D: CYRILLIC CAPITAL LETTER EN	✓
О	Lu	o	O		O	ọ	J	vowel		о		о	o	U+041E: CYRILLIC CAPITAL LETTER O	✓
П	Lu	p pʲ	P		P	p̣	G	consonant		п		пэ	pɛ	U+041F: CYRILLIC CAPITAL LETTER PE	✓
Р	Lu	r rʲ	R		R	ṛ	H	consonant		р		эр	ɛr	U+0420: CYRILLIC CAPITAL LETTER ER	✓
С	Lu	s sʲ	S		S	ṣ	C	consonant		с		эс	ɛs	U+0421: CYRILLIC CAPITAL LETTER ES	✓
Т	Lu	t tʲ	T		T	ṭ	N	consonant		т		тэ	tɛ	U+0422: CYRILLIC CAPITAL LETTER TE	✓
У	Lu	u	U		U	ụ	E	vowel		у		у	u	U+0423: CYRILLIC CAPITAL LETTER U	✓
Ф	Lu	f fʲ	F		F	f̣	A	consonant		ф		эф	ɛf	U+0424: CYRILLIC CAPITAL LETTER EF	✓
Х	Lu	x xʲ	H		X	x̣	{	consonant		х		ха	xa	U+0425: CYRILLIC CAPITAL LETTER HA	✓
Ц	Lu	t͡s	C		T	ʦ̣	W	consonant		ц		цэ	ʦɛ	U+0426: CYRILLIC CAPITAL LETTER TSE	✓
Ч	Lu	t͡ɕ	Č		T	ʨ̣	X	consonant		ч		чэ	ʨɛ	U+0427: CYRILLIC CAPITAL LETTER CHE	✓
Ш	Lu	ʂ	Š		S	ʂ̣	I	consonant		ш		шæ	ʂa	U+0428: CYRILLIC CAPITAL LETTER SHA	✓
Щ	Lu	ɕː ɕʨ	Ŝ		S	ʂ̣̂	O	consonant		щ		ща	ɕɕæ	U+0429: CYRILLIC CAPITAL LETTER SHCHA	✓
Ы	Lu	ɨ	Y		I	ɨ̣	S	vowel		ы		ы	ɨ	U+042B: CYRILLIC CAPITAL LETTER YERU	✓
Э	Lu	ɛ	È		E	ɛ̣	"	vowel		э		э	ɛ	U+042D: CYRILLIC CAPITAL LETTER E	✓
Ю	Lu	ju	Û		J	j̣ᵘ	.	vowel		ю		ю	ju	U+042E: CYRILLIC CAPITAL LETTER YU	✓
Я	Lu	ja	Â		J	j̣ᵃ	Z	vowel		я		я	ja	U+042F: CYRILLIC CAPITAL LETTER YA	✓
Ё	Lu	jo ʲo	Ë		J	j̣ᵒ	|	vowel		ё		jo	ё	U+0401: CYRILLIC CAPITAL LETTER IO	✓
Ъ	Lu		ʺ		"	ʺ̣	}	hard sign		ъ		твёрдый знак	tvʲɵrdɨj znak	U+042A: CYRILLIC CAPITAL LETTER HARD SIGN	✓
Ь	Lu	ʲ	ʹ		ʹ	ʹ̣	M	soft sign		ь		мягкий знак	ˈmʲæxʲkʲɪj znak	U+042C: CYRILLIC CAPITAL LETTER SOFT SIGN	✓
															
															
															
ѱ	Ll	ps						consonant						U+0471: CYRILLIC SMALL LETTER PSI	✓
Ѱ	Lu	ps						consonant						U+0470: CYRILLIC CAPITAL LETTER PSI	✓
ѕ	Ll	z						consonant						U+0455: CYRILLIC SMALL LETTER DZE	✓
Ѕ	Lu	z						consonant						U+0405: CYRILLIC CAPITAL LETTER DZE	✓
ѯ	Ll	ks						consonant						U+046F: CYRILLIC SMALL LETTER KSI	✓
Ѯ	Lu	ks						consonant						U+046E: CYRILLIC CAPITAL LETTER KSI	✓
ѳ	Ll	f						consonant						U+0473: CYRILLIC SMALL LETTER FITA	✓
Ѳ	Lu	f						consonant						U+0472: CYRILLIC CAPITAL LETTER FITA	✓
															
ѵ	Ll	i						vowel						U+0475: CYRILLIC SMALL LETTER IZHITSA	✓
Ѵ	Lu	i						vowel						U+0474: CYRILLIC CAPITAL LETTER IZHITSA	✓
ѫ	Ll	ju u						vowel						U+046B: CYRILLIC SMALL LETTER BIG YUS	✓
Ѫ	Lu	ju u						vowel						U+046A: CYRILLIC CAPITAL LETTER BIG YUS	✓
ѧ	Ll	ja						vowel						U+0467: CYRILLIC SMALL LETTER LITTLE YUS	✓
Ѧ	Lu	ja						vowel						U+0466: CYRILLIC CAPITAL LETTER LITTLE YUS	✓
ѭ	Ll	ju						vowel						U+046D: CYRILLIC SMALL LETTER IOTIFIED BIG YUS	✓
Ѭ	Lu	ju						vowel						U+046C: CYRILLIC CAPITAL LETTER IOTIFIED BIG YUS	✓
ѩ	Ll	ja						vowel						U+0469: CYRILLIC SMALL LETTER IOTIFIED LITTLE YUS	✓
Ѩ	Lu	ja						vowel						U+0468: CYRILLIC CAPITAL LETTER IOTIFIED LITTLE YUS	✓
ѣ	Ll	e						vowel						U+0463: CYRILLIC SMALL LETTER YAT	✓
Ѣ	Lu	e						vowel						U+0462: CYRILLIC CAPITAL LETTER YAT	✓
і	Ll	i						vowel						U+0456: CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I	✓
І	Lu	i						vowel						U+0406: CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I	✓
															
̆	Mn​					_		diacritic	orphan, found only in decomposed text					U+0306: COMBINING BREVE​	✓
̈	Mn​					_		diacritic	orphan, found only in decomposed text					U+0308: COMBINING DIAERESIS​		✓														
															
															
́	Mn​	ˈ		ˈ	[	ˈ		stress accent	used in dictionaries, etc.					U+0301: COMBINING ACUTE ACCENT​	✓
															
															
.	Po		.		.	.	/	full stop						U+002E: FULL STOP	
,	Po		,		,	,	?	comma						U+002C: COMMA	
:	Po		:		:	:	^	colon						U+003A: COLON	
;	Po		;		;	;	$	semicolon						U+003B: SEMICOLON	
!	Po		!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	
?	Po		?		?	?	&	question mark						U+003F: QUESTION MARK	
															
															
…	Po		…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
															
															
															
«	Pi		“		<	«		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»	Pf		”		>	»		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	Pi		‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
›	Pf		’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
“	Pi		“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
„	Ps		”		>	”		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
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
															
															
															
															
₽	Sc			₽	#	¤	*	currency symbol						U+20BD: RUBLE SIGN	
№	So			№	#	#	#	number symbol						U+2116: NUMERO SIGN	
															
															
															
%	Po				%	%		percentage mark						U+0025: PERCENT SIGN	
‰	Po				%	‰		per mille mark						U+2030: PER MILLE SIGN	



`


latinPanel = 'â ɕ ë ɛ è ɡ ī ɨ ɪ ʲ ɫ ʂ t͡s t͡ɕ û ʐ'



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
