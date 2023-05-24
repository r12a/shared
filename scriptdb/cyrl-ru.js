var spreadsheet = `cyrl-ru	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	lc	uc	native name	latin name	ucs name	block
-	-			-	-				hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd	?	non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash						U+2013: EN DASH	
—	-			—	—		Pd		em dash						U+2014: EM DASH	
,	,			,	,	?	Po		comma						U+002C: COMMA	
;	;			;	;	$	Po		semicolon						U+003B: SEMICOLON	
:	:			:	:	^	Po		colon						U+003A: COLON	
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
?	?			?	?	&	Po		question mark						U+003F: QUESTION MARK	
.	.			.	.	/	Po		full stop						U+002E: FULL STOP	
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
ъ	"			ʺ	ʺ	]	Ll		hard sign			Ъ	твёрдый знак	tvʲɵrdɨj znak	U+044A: CYRILLIC SMALL LETTER HARD SIGN	✓
Ъ	"			ʺ̣	ʺ	}	Lu		hard sign		ъ		твёрдый знак	tvʲɵrdɨj znak	U+042A: CYRILLIC CAPITAL LETTER HARD SIGN	✓
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	
[	(			[	[		Ps	?	bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe	?	bracket						U+005D: RIGHT SQUARE BRACKET	
́	[	ˈ		ˈ			Mn	r	stress accent	used in dictionaries, etc.					U+0301: COMBINING ACUTE ACCENT	✓
₽	#			¤		*	Sc	?	currency symbol						U+20BD: RUBLE SIGN	
№	#			#		#	So	?	number symbol						U+2116: NUMERO SIGN	
%	%			%			Po	?	percentage mark						U+0025: PERCENT SIGN	
‰	%			‰			Po	?	per mille mark						U+2030: PER MILLE SIGN	
ь	ʹ	ʲ		ʹ	ʹ	m	Ll		soft sign			Ь	мягкий знак	ˈmʲæxʲkʲɪj znak	U+044C: CYRILLIC SMALL LETTER SOFT SIGN	✓
Ь	ʹ	ʲ		ʹ̣	ʹ	M	Lu		soft sign		ь		мягкий знак	ˈmʲæxʲkʲɪj znak	U+042C: CYRILLIC CAPITAL LETTER SOFT SIGN	✓
«	<			«	“		Pi		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	<			‹			Pi	?	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
“	<			“	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			\‘	\‘		Pi	?	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
»	>			»	”		Pf		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
›	>			›			Pf	?	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
„	>			”	”		Ps		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
‚	>			\‚	\‚		Ps	?	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
																
я	a	jæ jɪ æ a ɪ		jᵃ	â	z	Ll		vowel			Я	я	ja	U+044F: CYRILLIC SMALL LETTER YA	✓
а	a	a ə ʌ		a	a	f	Ll		vowel			А	а	a	U+0430: CYRILLIC SMALL LETTER A	✓
А	A	a		ạ	A	F	Lu		vowel		а		а	a	U+0410: CYRILLIC CAPITAL LETTER A	✓
б	b	b bʲ		b	b	,	Ll		plosive			Б	бэ	bɛ	U+0431: CYRILLIC SMALL LETTER BE	✓
Б	B	b bʲ		ḅ	B	<	Lu		consonant		б		бэ	bɛ	U+0411: CYRILLIC CAPITAL LETTER BE	✓
д	d	d dʲ		d	d	l	Ll		plosive			Д	дэ	dɛ	U+0434: CYRILLIC SMALL LETTER DE	✓
Д	D	d dʲ		ḍ	D	L	Lu		consonant		д		дэ	dɛ	U+0414: CYRILLIC CAPITAL LETTER DE	✓
е	e	je e ɛ ɪ		e	e	t	Ll		vowel			Е	е	je	U+0435: CYRILLIC SMALL LETTER IE	✓
э	e	ɛ		ɛ	è		Ll		vowel			Э	э	ɛ	U+044D: CYRILLIC SMALL LETTER E	✓
Е	E	je ʲe e		ẹ	E	T	Lu		vowel		е		е	je	U+0415: CYRILLIC CAPITAL LETTER IE	✓
Э	E	ɛ		ɛ̣	È	"	Lu		vowel		э		э	ɛ	U+042D: CYRILLIC CAPITAL LETTER E	✓
ф	f	f fʲ		f	f	a	Ll		fricative			Ф	эф	ɛf	U+0444: CYRILLIC SMALL LETTER EF	✓
Ф	F	f fʲ		f̣	F	A	Lu		consonant		ф		эф	ɛf	U+0424: CYRILLIC CAPITAL LETTER EF	✓
г	g	ɡ ɡʲ		ɡ	g	u	Ll		plosive			Г	гэ	ɡɛ	U+0433: CYRILLIC SMALL LETTER GHE	✓
Г	G	ɡ ɡʲ		g̣	G	U	Lu		consonant		г		гэ	ɡɛ	U+0413: CYRILLIC CAPITAL LETTER GHE	✓
и	i	i ɪ ɨ		i	i	b	Ll		vowel			И	и	i	U+0438: CYRILLIC SMALL LETTER I	✓
ы	i	ɨ		ɨ	y	s	Ll		vowel			Ы	ы	ɨ	U+044B: CYRILLIC SMALL LETTER YERU	✓
И	I	i ʲi ɨ		ị	I	B	Lu		vowel		и		и	i	U+0418: CYRILLIC CAPITAL LETTER I	✓
Ы	I	ɨ		ɨ̣	Y	S	Lu		vowel		ы		ы	ɨ	U+042B: CYRILLIC CAPITAL LETTER YERU	✓
Ю	J	ju		j̣ᵘ	Û	.	Lu		vowel		ю		ю	ju	U+042E: CYRILLIC CAPITAL LETTER YU	✓
Я	J	ja		j̣ᵃ	Â	Z	Lu		vowel		я		я	ja	U+042F: CYRILLIC CAPITAL LETTER YA	✓
Ё	J	jo ʲo		j̣ᵒ	Ë	|	Lu		vowel		ё		jo	ё	U+0401: CYRILLIC CAPITAL LETTER IO	✓
к	k	k kʲ		k	k	r	Ll		plosive			К	ка	ka	U+043A: CYRILLIC SMALL LETTER KA	✓
К	K	k kʲ		ḳ	K	R	Lu		consonant		к		ка	ka	U+041A: CYRILLIC CAPITAL LETTER KA	✓
л	l	ɫ lʲ		l	l	k	Ll		approximant			Л	эль	ɛlʲ	U+043B: CYRILLIC SMALL LETTER EL	✓
Л	L	ɫ lʲ		ḷ	L	K	Lu		consonant		л		эль	ɛlʲ	U+041B: CYRILLIC CAPITAL LETTER EL	✓
м	m	m mʲ		m	m	v	Ll		nasal			М	эм	ɛm	U+043C: CYRILLIC SMALL LETTER EM	✓
М	M	m mʲ		ṃ	M	V	Lu		consonant		м		эм	ɛm	U+041C: CYRILLIC CAPITAL LETTER EM	✓
н	n	n nʲ		n	n	y	Ll		nasal			Н	эн	ɛn	U+043D: CYRILLIC SMALL LETTER EN	✓
Н	N	n nʲ		ṇ	N	Y	Lu		consonant		н		эн	ɛn	U+041D: CYRILLIC CAPITAL LETTER EN	✓
ё	o	ɵ		jᵒ	ë	\	Ll		vowel			Ё	jo	ё	U+0451: CYRILLIC SMALL LETTER IO	✓
о	o	o		o	o	j	Ll		vowel			О	о	o	U+043E: CYRILLIC SMALL LETTER O	✓
О	O	o		ọ	O	J	Lu		vowel		о		о	o	U+041E: CYRILLIC CAPITAL LETTER O	✓
п	p	p pʲ		p	p	g	Ll		plosive			П	пэ	pɛ	U+043F: CYRILLIC SMALL LETTER PE	✓
П	P	p pʲ		p̣	P	G	Lu		consonant		п		пэ	pɛ	U+041F: CYRILLIC CAPITAL LETTER PE	✓
р	r	r rʲ		r	r	h	Ll		approximant			Р	эр	ɛr	U+0440: CYRILLIC SMALL LETTER ER	✓
Р	R	r rʲ		ṛ	R	H	Lu		consonant		р		эр	ɛr	U+0420: CYRILLIC CAPITAL LETTER ER	✓
с	s	s sʲ		s	s	c	Ll		fricative			С	эс	ɛs	U+0441: CYRILLIC SMALL LETTER ES	✓
щ	s	ɕɕ		ʂ̂	ŝ	o	Ll		fricative			Щ	ща	ɕɕæ	U+0449: CYRILLIC SMALL LETTER SHCHA	✓
ш	s	ʂ		ʂ	š	i	Ll		fricative			Ш	шæ	ʂa	U+0448: CYRILLIC SMALL LETTER SHA	✓
С	S	s sʲ		ṣ	S	C	Lu		consonant		с		эс	ɛs	U+0421: CYRILLIC CAPITAL LETTER ES	✓
Ш	S	ʂ		ʂ̣	Š	I	Lu		consonant		ш		шæ	ʂa	U+0428: CYRILLIC CAPITAL LETTER SHA	✓
Щ	S	ɕː ɕʨ		ʂ̣̂	Ŝ	O	Lu		consonant		щ		ща	ɕɕæ	U+0429: CYRILLIC CAPITAL LETTER SHCHA	✓
т	t	t tʲ		t	t	n	Ll		plosive			Т	тэ	tɛ	U+0442: CYRILLIC SMALL LETTER TE	✓
ц	t	t͡s		ʦ	c	w	Ll		affricate			Ц	цэ	ʦɛ	U+0446: CYRILLIC SMALL LETTER TSE	✓
ч	t	t͡ɕ		ʨ	č	x	Ll		affricate			Ч	чэ	ʨɛ	U+0447: CYRILLIC SMALL LETTER CHE	✓
Т	T	t tʲ		ṭ	T	N	Lu		consonant		т		тэ	tɛ	U+0422: CYRILLIC CAPITAL LETTER TE	✓
Ц	T	t͡s		ʦ̣	C	W	Lu		consonant		ц		цэ	ʦɛ	U+0426: CYRILLIC CAPITAL LETTER TSE	✓
Ч	T	t͡ɕ		ʨ̣	Č	X	Lu		consonant		ч		чэ	ʨɛ	U+0427: CYRILLIC CAPITAL LETTER CHE	✓
ю	u	ju u ʊ ʉ		jᵘ	û	.	Ll		vowel			Ю	ю	ju	U+044E: CYRILLIC SMALL LETTER YU	✓
у	u	u ʊ		u	u	e	Ll		vowel			У	у	u	U+0443: CYRILLIC SMALL LETTER U	✓
У	U	u		ụ	U	E	Lu		vowel		у		у	u	U+0423: CYRILLIC CAPITAL LETTER U	✓
в	v	v vʲ		v	v	d	Ll		fricative			В	вэ	vɛ	U+0432: CYRILLIC SMALL LETTER VE	✓
В	V	v vʲ		ṿ	V	D	Lu		consonant		в		вэ	vɛ	U+0412: CYRILLIC CAPITAL LETTER VE	✓
х	x	x xʲ		x	h	[	Ll		fricative			Х	ха	xa	U+0445: CYRILLIC SMALL LETTER HA	✓
Х	X	x xʲ		x̣	H	{	Lu		consonant		х		ха	xa	U+0425: CYRILLIC CAPITAL LETTER HA	✓
й	y	j		y	ī	q	Ll		semivowel			Й	и краткое	i ˈkratkəjɪ	U+0439: CYRILLIC SMALL LETTER SHORT I	✓
Й	Y	j		ỵ	Ī	Q	Lu		vowel		й		и краткое	i ˈkratkəjɪ	U+0419: CYRILLIC CAPITAL LETTER SHORT I	✓
з	z	z zʲ		z	z	p	Ll		fricative			З	зэ	zɛ	U+0437: CYRILLIC SMALL LETTER ZE	✓
ж	z	ʐ		ʐ	ž	;	Ll		fricative			Ж	жэ	ʐɛ	U+0436: CYRILLIC SMALL LETTER ZHE	✓
Ж	Z	ʐ		ʐ̣	Ž	:	Lu		consonant		ж		жэ	ʐɛ	U+0416: CYRILLIC CAPITAL LETTER ZHE	✓
З	Z	z zʲ		ẓ	Z	P	Lu		consonant		з		зэ	zɛ	U+0417: CYRILLIC CAPITAL LETTER ZE	✓
																
																
ѱ		ps					Ll	u	consonant						U+0471: CYRILLIC SMALL LETTER PSI	✓
Ѱ		ps					Lu	u	consonant						U+0470: CYRILLIC CAPITAL LETTER PSI	✓
ѕ		z					Ll	u	consonant						U+0455: CYRILLIC SMALL LETTER DZE	✓
Ѕ		z					Lu	u	consonant						U+0405: CYRILLIC CAPITAL LETTER DZE	✓
ѯ		ks					Ll	u	consonant						U+046F: CYRILLIC SMALL LETTER KSI	✓
Ѯ		ks					Lu	u	consonant						U+046E: CYRILLIC CAPITAL LETTER KSI	✓
ѳ		f					Ll	u	consonant						U+0473: CYRILLIC SMALL LETTER FITA	✓
Ѳ		f					Lu	u	consonant						U+0472: CYRILLIC CAPITAL LETTER FITA	✓
																
ѵ		i					Ll	u	vowel						U+0475: CYRILLIC SMALL LETTER IZHITSA	✓
Ѵ		i					Lu	u	vowel						U+0474: CYRILLIC CAPITAL LETTER IZHITSA	✓
ѫ		ju u					Ll	u	vowel						U+046B: CYRILLIC SMALL LETTER BIG YUS	✓
Ѫ		ju u					Lu	u	vowel						U+046A: CYRILLIC CAPITAL LETTER BIG YUS	✓
ѧ		ja					Ll	u	vowel						U+0467: CYRILLIC SMALL LETTER LITTLE YUS	✓
Ѧ		ja					Lu	u	vowel						U+0466: CYRILLIC CAPITAL LETTER LITTLE YUS	✓
ѭ		ju					Ll	u	vowel						U+046D: CYRILLIC SMALL LETTER IOTIFIED BIG YUS	✓
Ѭ		ju					Lu	u	vowel						U+046C: CYRILLIC CAPITAL LETTER IOTIFIED BIG YUS	✓
ѩ		ja					Ll	u	vowel						U+0469: CYRILLIC SMALL LETTER IOTIFIED LITTLE YUS	✓
Ѩ		ja					Lu	u	vowel						U+0468: CYRILLIC CAPITAL LETTER IOTIFIED LITTLE YUS	✓
ѣ		e					Ll	u	vowel						U+0463: CYRILLIC SMALL LETTER YAT	✓
Ѣ		e					Lu	u	vowel						U+0462: CYRILLIC CAPITAL LETTER YAT	✓
і		i					Ll	u	vowel						U+0456: CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I	✓
І		i					Lu	u	vowel						U+0406: CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I	✓
																
̆				_			Mn	r	diacritic	orphan, found only in decomposed text					U+0306: COMBINING BREVE	
̈				_			Mn	r	diacritic	orphan, found only in decomposed text					U+0308: COMBINING DIAERESIS	
																
ʼ				ʼ	ʼ		Lm	?	apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po	?	section sign						U+00A7: SECTION SIGN	
†				†	†		Po	?	dagger						U+2020: DAGGER	
‡				‡	‡		Po	?	double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po	?	prime						U+2032: PRIME	
″				″	″		Po	?	double prime						U+2033: DOUBLE PRIME	
`																
																
latinPanel = 'â ɕ ë ɛ è ɡ ī ɨ ɪ ʲ ɫ ʂ t͡s t͡ɕ û ʐ'																
																
var cols = {																
key: 1,																
ipaLoc: 2,																
ipaPlus: 3,																
transLoc: 4,																
transcription: 5,																
kbd: 6,																
class: 7,																
status: 8,																
typeLoc: 9,																
statusLoc: 10,																
																
lc:11,																
uc:12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'ISO 9:1995']]																
}																