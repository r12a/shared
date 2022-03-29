var spreadsheet = `
́	[	ˈ		ˈ			Mn​		stress accent	used in dictionaries, etc.					U+0301: COMBINING ACUTE ACCENT​	✓
̆				_			Mn​		diacritic	orphan, found only in decomposed text					U+0306: COMBINING BREVE​	✓
̈				_			Mn​		diacritic	orphan, found only in decomposed text					U+0308: COMBINING DIAERESIS​	✓
-	-			-	-				hyphen						U+002D: HYPHEN-MINUS	
‑	-			‑	‑		Pd		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash						U+2013: EN DASH	
—	-			—	—		Pd		em dash						U+2014: EM DASH	
,	,			,	,		Po		comma						U+002C: COMMA	
;	;			;	;		Po		semicolon						U+003B: SEMICOLON	
:	:			:	:		Po		colon						U+003A: COLON	
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark						U+003F: QUESTION MARK	
.	.			.	.		Po		full stop						U+002E: FULL STOP	
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
‘	<			‘	‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
‚	>			’	’		Ps		quotation mark						U+201A: SINGLE LOW-9 QUOTATION MARK	
‹	<			‹	‘		Pi		quotation mark						U+2039: SINGLE LEFT-POINTING ANGLE QUOTATION MARK	
›	>			›	’		Pf		quotation mark						U+203A: SINGLE RIGHT-POINTING ANGLE QUOTATION MARK	
“	<			 “	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
„	>			”	”		Ps		quotation mark						U+201E: DOUBLE LOW-9 QUOTATION MARK	
«	<			«	“		Pi		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»	>			»	”		Pf		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS	
[	(			[	[		Ps		bracket						U+005B: LEFT SQUARE BRACKET	
]	)			]	]		Pe		bracket						U+005D: RIGHT SQUARE BRACKET	
§				§	§		Po		section sign						U+00A7: SECTION SIGN	
%	%			%	%		Po		percentage mark						U+0025: PERCENT SIGN	
‰	%			‰			Po		per mille mark						U+2030: PER MILLE SIGN	
†				†	†		Po		dagger						U+2020: DAGGER	
‡				‡	‡		Po		double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po		prime						U+2032: PRIME	
″				″	″		Po		double prime						U+2033: DOUBLE PRIME	
₽	#			¤			Sc		currency symbol						U+20BD: RUBLE SIGN	
№	#			#			So		number symbol						U+2116: NUMERO SIGN	
ʼ	\'			ʼ	ʼ		Lm		hard sign				апостроф	ɑˈpɔstrɔf	U+02BC: MODIFIER LETTER APOSTROPHE	✓
\'				ʼ	ʼ		Lm		hard sign				апостроф	ɑˈpɔstrɔf		
а	a	a ɐ		a	a		Ll		vowel			А	а	ɑ	U+0430: CYRILLIC SMALL LETTER A	✓
А	A	A Ɐ		ạ	A		Lu		vowel		а		а	a	U+0410: CYRILLIC CAPITAL LETTER A	✓
б	b	b		b	b		Ll		consonant			Б	бе	bɛ	U+0431: CYRILLIC SMALL LETTER BE	✓
Б	B	B		ḅ	B		Lu		consonant		б		бе	bɛ	U+0411: CYRILLIC CAPITAL LETTER BE	✓
в	v	w ʋ u̯		v	v		Ll		consonant			В	вэ	vɛ	U+0432: CYRILLIC SMALL LETTER VE	✓
В	V	W Ʋ U̯		ṿ	V		Lu		consonant		в		вэ	vɛ	U+0412: CYRILLIC CAPITAL LETTER VE	✓
г	h	ɦ		ɦ	h		Ll		consonant			Г	гэ	ɦɛ	U+0433: CYRILLIC SMALL LETTER GHE	✓
Г	H	Ɦ		ɦ̣	H		Lu		consonant		г		гэ	ɦɛ	U+0413: CYRILLIC CAPITAL LETTER GHE	✓
ґ	g	g		ɡ	g		Ll		consonant			Ґ 	ґэ	ɡɛ	U+0491: CYRILLIC SMALL LETTER GHE WITH UPTURN	✓
Ґ	G	G		g̣	G				consonant		ґ		ґэ	ɡɛ	U+0490 U+0020: CYRILLIC CAPITAL LETTER GHE WITH UPTURN	✓
д	d	d	dʲ	d	d		Ll		consonant			Д	дэ	dɛ	U+0434: CYRILLIC SMALL LETTER DE	✓
Д	D	D	dʲ	ḍ	D		Lu		consonant		д		дэ	dɛ	U+0414: CYRILLIC CAPITAL LETTER DE	✓
е	e	ɛ e		ɛ	e		Ll		vowel			Е	е	ɛ	U+0435: CYRILLIC SMALL LETTER IE	✓
Е	E	Ɛ E		ɛ̣	E		Lu		vowel		е		е	ɛ	U+0415: CYRILLIC CAPITAL LETTER IE	✓
є	e	jɛ je ʲɛ ʲe		jᵋ	ie ye		Ll		vowel			Є	jɛ	є	U+0454: CYRILLIC SMALL LETTER UKRAINIAN IE	✓
Є	E	Jɛ Je ʲɛ ʲe		jᵋ̣	Ie Ye		Lu		vowel		є		jɛ	є	U+0404: CYRILLIC CAPITAL LETTER UKRAINIAN IE	✓
ж	z	ʒ		ʒ	ž		Ll		consonant			Ж	жэ	ʒɛ	U+0436: CYRILLIC SMALL LETTER ZHE	✓
Ж	Z	Ʒ		ʒ̣	Ž		Lu		consonant		ж		жэ	ʒɛ	U+0416: CYRILLIC CAPITAL LETTER ZHE	✓
з	z	z	zʲ	z	z		Ll		consonant			З	зэ	zɛ	U+0437: CYRILLIC SMALL LETTER ZE	✓
З	Z	Z	zʲ	ẓ	Z		Lu		consonant		з		зэ	zɛ	U+0417: CYRILLIC CAPITAL LETTER ZE	✓
і	i	ʲi i		ị	i		Ll		vowel			І	i	i	U+0456: CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I	✓
І	I	I		ị	I		Lu		vowel		і		i	i	U+0406: CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I	✓
ї	i	ji		ï	yi		Ll		vowel			Ї	ї	ji	U+0457: CYRILLIC SMALL LETTER YI	✓
Ї	I	Ji		ị̈	yi		Lu		vowel		ї		ї	ji	U+0407: CYRILLIC CAPITAL LETTER YI	✓
и	i	ɪ e		ɪ	y		Ll		vowel			И	и	ɪ̈	U+0438: CYRILLIC SMALL LETTER I	✓
И	I	Ɪ E		ɪ̣	Y		Lu		vowel		и		и	ɪ̈	U+0418: CYRILLIC CAPITAL LETTER I	✓
й	y	j i̯		y	i j y		Ll		semivowel			Й	йот, й	jɔt, ɪj	U+0439: CYRILLIC SMALL LETTER SHORT I	✓
Й	Y	J I̯		ỵ	i j y		Lu		semivowel		й		йот, й	jɔt, ɪj	U+0419: CYRILLIC CAPITAL LETTER SHORT I	✓
к	k	k	kʲ	k	k		Ll		consonant			К	ка	kɑ	U+043A: CYRILLIC SMALL LETTER KA	✓
К	K	K	kʲ	ḳ	K		Lu		consonant		к		ка	kɑ	U+041A: CYRILLIC CAPITAL LETTER KA	✓
л	l	ɫ	lʲ	l	l		Ll		consonant			Л	эл	ɛl	U+043B: CYRILLIC SMALL LETTER EL	✓
Л	L	Ɫ	lʲ	ḷ	L		Lu		consonant		л		эл	ɛl	U+041B: CYRILLIC CAPITAL LETTER EL	✓
м	m	m	mʲ	m	m		Ll		consonant			М	ем	ɛm	U+043C: CYRILLIC SMALL LETTER EM	✓
М	M	M	mʲ	ṃ	M		Lu		consonant		м		ем	ɛm	U+041C: CYRILLIC CAPITAL LETTER EM	✓
н	n	n	nʲ	n	n		Ll		consonant			Н	ен	ɛn	U+043D: CYRILLIC SMALL LETTER EN	✓
Н	N	N	nʲ	ṇ	N		Lu		consonant		н		ен	ɛn	U+041D: CYRILLIC CAPITAL LETTER EN	✓
о	o	ɔ		ɔ	o		Ll		vowel			О	о	ɔ	U+043E: CYRILLIC SMALL LETTER O	✓
О	O	Ɔ		ɔ̣	O		Lu		vowel		о		о	ɔ	U+041E: CYRILLIC CAPITAL LETTER O	✓
п	p	p	pʲ	p	p		Ll		consonant			П	пе	pɛ	U+043F: CYRILLIC SMALL LETTER PE	✓
П	P	P	pʲ	p̣	P		Lu		consonant		п		пе	pɛ	U+041F: CYRILLIC CAPITAL LETTER PE	✓
р	r	r	rʲ	r	r		Ll		consonant			Р	ер	ɛr	U+0440: CYRILLIC SMALL LETTER ER	✓
Р	R	R	rʲ	ṛ	R		Lu		consonant		р		ер	ɛr	U+0420: CYRILLIC CAPITAL LETTER ER	✓
с	s	s	sʲ	s	s		Ll		consonant			С	ес	ɛs	U+0441: CYRILLIC SMALL LETTER ES	✓
С	S	S	sʲ	ṣ	S		Lu		consonant		с		ес	ɛs	U+0421: CYRILLIC CAPITAL LETTER ES	✓
т	t	t	tʲ	t	t		Ll		consonant			Т	те	tɛ	U+0442: CYRILLIC SMALL LETTER TE	✓
Т	T	T	tʲ	ṭ	T		Lu		consonant		т		те	tɛ	U+0422: CYRILLIC CAPITAL LETTER TE	✓
у	u	u ʊ		u	u		Ll		vowel			У	у	u	U+0443: CYRILLIC SMALL LETTER U	✓
У	U	U Ʊ		ụ	U		Lu		vowel		у		у	u	U+0423: CYRILLIC CAPITAL LETTER U	✓
ф	f	f	fʲ	f	f		Ll		consonant			Ф	еф	ɛf	U+0444: CYRILLIC SMALL LETTER EF	✓
Ф	F	F	fʲ	f̣	F		Lu		consonant		ф		еф	ɛf	U+0424: CYRILLIC CAPITAL LETTER EF	✓
х	x	x	xʲ	x	kh		Ll		consonant			Х	ха	xɑ	U+0445: CYRILLIC SMALL LETTER HA	✓
Х	X	X	xʲ	x̣	Kh		Lu		consonant		х		ха	xɑ	U+0425: CYRILLIC CAPITAL LETTER HA	✓
ц	t	t͡s	t͡sʲ	ʦ	ts		Ll		consonant			Ц	це	t͡sɛ	U+0446: CYRILLIC SMALL LETTER TSE	✓
Ц	T	T͡S	t͡sʲ	ʦ̣	Ts		Lu		consonant		ц		це	t͡sɛ	U+0426: CYRILLIC CAPITAL LETTER TSE	✓
ч	t	t͡ʃ	t͡ʃʲ	ʧ	ch		Ll		consonant			Ч	че	t͡ʃɛ	U+0447: CYRILLIC SMALL LETTER CHE	✓
Ч	T	T͡Ʃ	t͡ʃʲ	ʧ̣	Ch		Lu		consonant		ч		че	t͡ʃɛ	U+0427: CYRILLIC CAPITAL LETTER CHE	✓
ш	s	ʃ	ʃʲ	ʃ	sh		Ll		consonant			Ш	ша	ʃɑ	U+0448: CYRILLIC SMALL LETTER SHA	✓
Ш	S	Ʃ	ʃʲ	ʃ	Sh		Lu		consonant		ш		ша	ʃɑ	U+0428: CYRILLIC CAPITAL LETTER SHA	✓
щ	s	ʃt͡ʃ	ʃt͡ʃʲ	ʃᵗᶴ	shch		Ll		consonant			Щ	ща	ʃt͡ʃɑ	U+0449: CYRILLIC SMALL LETTER SHCHA	✓
Щ	S	ƩT͡Ʃ	ʃt͡ʃʲ	ʃᵗ̣ᶴ	Shch		Lu		consonant		щ		ща	ʃt͡ʃɑ	U+0429: CYRILLIC CAPITAL LETTER SHCHA	✓
ь	ʹ	ʲ		ʹ			Ll		soft sign			Ь	м’який знак	mjɑˈkɪj ˈznɑk	U+044C: CYRILLIC SMALL LETTER SOFT SIGN	✓
Ь	ʹ	ʲ		ʹ̣			Lu		soft sign		ь		м’який знак	mjɑˈkɪj ˈznɑk	U+042C: CYRILLIC CAPITAL LETTER SOFT SIGN	✓
ю	u	ju jʊ ʲu ʲʊ		jᵘ	iu yu		Ll		vowel			Ю	ю	ju	U+044E: CYRILLIC SMALL LETTER YU	✓
Ю	U	Ju Jʊ ʲu ʲʊ		j̣ᵘ	Iu Yu		Lu		vowel		ю		ю	ju	U+042E: CYRILLIC CAPITAL LETTER YU	✓
я	a	ja jɐ ʲa ʲɐ		jᵃ	ia ya		Ll		vowel			Я	я	jɑ	U+044F: CYRILLIC SMALL LETTER YA	✓
Я	A	Ja Jɐ ʲa ʲɐ		j̣ᵃ	Ia Ya		Lu		vowel		я		я	jɑ	U+042F: CYRILLIC CAPITAL LETTER YA	✓
																
дж		d͡ʒ							affricate						U+0434 U+0436: CYRILLIC SMALL LETTER DE, LETTER ZHE	
дз		d͡z							affricate						U+0434 U+0437: CYRILLIC SMALL LETTER DE, LETTER ZE	



`


latinPanel = 'ɐ ɕ d͡ʒ d͡z ɛ ɡ ɦ i̯ ɪ ʲ ɫ ɔ ʃ t͡s t͡ʃ ʃt͡ʃ u̯ ʊ ʋ ʒ'



var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transLoc": 4,
"transcription": 5,
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

"nameLoc": 13,
"nnameLoc": 14,
"ucsName": 15,
"block": 16,

"othertranscriptions": [[5, 'Uk. Nat. Trans.']]
}
