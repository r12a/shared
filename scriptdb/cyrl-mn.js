var spreadsheet = `cyrl-mn	key	ipa	ipa+	translit	MNS 5217:2012	kbd	class	status	type	usage	lc	uc	native name	latin name	ucs name	mong	block			
-	-			-	-		Pd		hyphen						U+2010: HYPHEN					
‑	-			‑	‑		Pd		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN					
–	-			–	–		Pd		en dash						U+2013: EN DASH					
—	-			—	—		Pd		em dash						U+2014: EM DASH					
,	,			,	,	?	Po		comma						U+002C: COMMA					
;	;			;	;	$	Po		semicolon						U+003B: SEMICOLON					
:	:			:	:	^	Po		colon						U+003A: COLON					
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK					
?	?			?	?	&	Po		question mark						U+003F: QUESTION MARK					
.	.			.	.	/	Po		full stop						U+002E: FULL STOP					
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS					
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS					
[	(			[	[		Ps		bracket						U+005B: LEFT SQUARE BRACKET					
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS					
]	)			]	]		Pe		bracket						U+005D: RIGHT SQUARE BRACKET					
₮	#			¤		$	Sc		currency symbol						U+20AE: TUGRIK SIGN		✓			
№	#			#		!	So		number symbol						U+2116: NUMERO SIGN					
%	%			%			Po		percentage mark						U+0025: PERCENT SIGN					
‰	%			‰			Po		per mille mark						U+2030: PER MILLE SIGN					
«	<			«	“	:	Pi		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK					
‹	<			‹			Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK					
“	<			“	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK					
\‘	<			\‘	\‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK					
»	>			»	”	;	Pf		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK					
›	>			›			Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK					
„	>			”	”		Ps		quotation mark						U+201E: DOUBLE LOW-9 QUOTATION MARK					
\‚	>			\’	\’		Ps		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK					
																				
																				
а	a	a		a	a	g	Ll		back (-ATR) vowel			А	а		U+0430: CYRILLIC SMALL LETTER A	ᠠ	✓	a	a	ɑ
я	a	ja		jᵃ	ya	z	Ll		ioticised vowel			Я	я		U+044F: CYRILLIC SMALL LETTER YA	ᠶᠠ	✓	ya	â	
А	A	a		A	a	g	Lu		back (-ATR) vowel		а		а		U+0410: CYRILLIC CAPITAL LETTER A	ᠠ	✓	a	a	ɑ
Я	A	ja		Jᵃ	ya	z	Lu		ioticised vowel		я		я		U+042F: CYRILLIC CAPITAL LETTER YA	ᠶᠠ	✓	ya	â	
б	b	b		b	b	d	Ll		plosive			Б	бэ		U+0431: CYRILLIC SMALL LETTER BE	ᠪ	✓	b	b	b
Б	B	b		B	B	D	Lu		plosive		б		бэ		U+0411: CYRILLIC CAPITAL LETTER BE	ᠪ	✓	b	b	b
ч	c	t͡ʃ		ʧ	ch	x	Ll		affricate			Ч	чэ		U+0447: CYRILLIC SMALL LETTER CHE	ᠴᠤ	✓			
Ч	C	t͡ʃ		ʧ̿	CH	X	Lu		affricate		ч		чэ		U+0427: CYRILLIC CAPITAL LETTER CHE	ᠴᠤ	✓			
д	d	d		d	d	;	Ll		plosive			Д	дэ		U+0434: CYRILLIC SMALL LETTER DE	ᠳ	✓	d	d	d
Д	D	d		D	D	;	Lu		plosive		д		дэ		U+0414: CYRILLIC CAPITAL LETTER DE	ᠳ	✓	d	d	d
э	e	e i		e	e	t	Ll		front (+ATR) vowel			Э	э		U+044D: CYRILLIC SMALL LETTER E	ᠡ	✓	e	è	ə
ө	e	ɵ o		ɵ	ö	f	Ll		front (+ATR) vowel			Ө	ө		U+04E9: CYRILLIC SMALL LETTER BARRED O	ᠥ	✓	ö	ô	o
е	e	ji je		jᵉ	ye		Ll		ioticised vowel			Е	е		U+0435: CYRILLIC SMALL LETTER IE	ᠶᠡ	✓	yö	e	
Э	E	e i		E	e	t	Lu		front (+ATR) vowel		э		э		U+042D: CYRILLIC CAPITAL LETTER E	ᠡ	✓	e	è	ə
Ө	E	ɵ o		Ɵ	ö	f	Lu		front (+ATR) vowel		ө		ө		U+04E8: CYRILLIC CAPITAL LETTER BARRED O	ᠥ	✓	ö	ô	o
Е	E	jɵ		Jᵉ	ye		Lu		ioticised vowel		е		е		U+0415: CYRILLIC CAPITAL LETTER IE	ᠶᠡ	✓	yö	e	
ф	f	f pʰ		f	f	q	Ll	l	fricative	for transliteration		Ф	фэ, фа, эф		U+0444: CYRILLIC SMALL LETTER EF	ᠹ	✓	f	f	f
Ф	F	f pʰ		F	F	Q	Lu	l	fricative	for transliteration	ф		фэ, фа, эф		U+0424: CYRILLIC CAPITAL LETTER EF	ᠹ	✓	f	f	f
г	g	ɡ ɣ ɢ		g	g	u	Ll		plosive			Г	гэ		U+0433: CYRILLIC SMALL LETTER GHE	ᠭ	✓	g	g	ɣ ɡ
Г	G	ɡ ɣ ɢ		G	G	U	Lu		plosive		г		гэ		U+0413: CYRILLIC CAPITAL LETTER GHE	ᠭ	✓	g	g	ɣ ɡ
и	i	i		i	i	n	Ll		neutral vowel			И	и		U+0438: CYRILLIC SMALL LETTER I	ᠢ	✓	i	i	i ɪ
й	i	i̯		ĭ	i	a	Ll		glide	for diphthongs		Й	хагас и		U+0439: CYRILLIC SMALL LETTER SHORT I	ᠢ	✓	y	j	
ы	I	i		ɪ	y	s	Ll		vowel			Ы	эр үгийн ы		U+044B: CYRILLIC SMALL LETTER YERU	ᠢ	✓	ϊ	y	
И	I	i		I	i	n	Lu		neutral vowel		и		и		U+0418: CYRILLIC CAPITAL LETTER I	ᠢ	✓	i	i	i ɪ
Й	I	i̯		Ĭ	i	a	Lu		glide	for diphthongs	й		хагас и		U+0419: CYRILLIC CAPITAL LETTER SHORT I	ᠢ	✓	y	j	
Ы	I	i		Ɪ	y	s	Lu		vowel		ы		эр үгийн ы		U+042B: CYRILLIC CAPITAL LETTER YERU	ᠢ	✓	ϊ	y	
ж	j	d͡ʒ		ʤ	j	r	Ll		affricate			Ж	жэ		U+0436: CYRILLIC SMALL LETTER ZHE	ᠵ	✓	j	ž	ʤ
Ж	J	d͡ʒ		ʤ̿	J	R	Lu		affricate		ж		жэ		U+0416: CYRILLIC CAPITAL LETTER ZHE	ᠵ	✓	j	ž	ʤ
к	k	k x		k	k	[	Ll	l	plosive/fricative	for transliteration		К	ка		U+043A: CYRILLIC SMALL LETTER KA	ᠺ	✓	k	k	k
К	K	k x		K	K	[	Lu	l	plosive/fricative	for transliteration	к		ка		U+041A: CYRILLIC CAPITAL LETTER KA	ᠺ	✓	k	k	k
л	l	ɮ		ɮ	l	l	Ll		approximant			Л	эл		U+043B: CYRILLIC SMALL LETTER EL	ᠯ	✓	l	l	l
Л	L	ɮ		ɮ	L	L	Lu		approximant		л		эл		U+041B: CYRILLIC CAPITAL LETTER EL	ᠯ	✓	l	l	l
м	m	m		m	m	b	Ll		nasal			М	эм		U+043C: CYRILLIC SMALL LETTER EM	ᠮ	✓	m	m	m
М	M	m		M	M	B	Lu		nasal		м		эм		U+041C: CYRILLIC CAPITAL LETTER EM	ᠮ	✓	m	m	m
н	n	n ŋ		n	n	y	Ll		nasal			Н	эн		U+043D: CYRILLIC SMALL LETTER EN	ᠨ	✓	n	n	n ŋ
Н	N	n ŋ		N	N	Y	Lu		nasal		н		эн		U+041D: CYRILLIC CAPITAL LETTER EN	ᠨ	✓	n	n	n ŋ
о	o	ɔ		ɔ	o	k	Ll		back (-ATR) vowel			О	о		U+043E: CYRILLIC SMALL LETTER O	ᠣ	✓	o	o	ɔ
ё	o	jɔ		jᵒ	yo	c	Ll		ioticised vowel			Ё	ё		U+0451: CYRILLIC SMALL LETTER IO	ᠶᠣ	✓	yo	ë	
О	O	ɔ		Ɔ	o	k	Lu		back (-ATR) vowel		о		о		U+041E: CYRILLIC CAPITAL LETTER O	ᠣ	✓	o	o	ɔ
Ё	O	jɔ		Jᵒ	yo	c	Lu		ioticised vowel		ё		ё		U+0401: CYRILLIC CAPITAL LETTER IO	ᠶᠣ	✓	yo	ë	
п	p	p		p	p		Ll	l	plosive	mostly foreign loan words		П	пэ		U+043F: CYRILLIC SMALL LETTER PE	ᠫ	✓	p	p	p
П	P	p		P	P		Lu	l	plosive	mostly foreign loan words	п		пэ		U+041F: CYRILLIC CAPITAL LETTER PE	ᠫ	✓	p	p	p
ц	q	t͡s		ʦ	ts	w	Ll		affricate			Ц	цэ		U+0446: CYRILLIC SMALL LETTER TSE	ᠴ	✓	ts	c	ʧʰ
Ц	Q	t͡s		ʦ̿	TS	W	Lu		affricate		ц		цэ		U+0426: CYRILLIC CAPITAL LETTER TSE	ᠴ	✓	ts	c	ʧʰ
р	r	r		r	r	j	Ll		approximant			Р	эр		U+0440: CYRILLIC SMALL LETTER ER	ᠷ	✓	r	r	r
Р	R	r		R	R	J	Lu		approximant		р		эр		U+0420: CYRILLIC CAPITAL LETTER ER	ᠷ	✓	r	r	r
с	s	s		s	s	v	Ll		fricative			С	эс		U+0441: CYRILLIC SMALL LETTER ES	ᠰ	✓	s	s	s ʃ
ш	s	ʃ		ʃ	sh	i	Ll		fricative			Ш	ша, эш		U+0448: CYRILLIC SMALL LETTER SHA	ᠱ	✓	sh	š	ʃ
щ	s	ʃ		š	sh	=	Ll	l	fricative	Russian words only		Щ	ща, эшчэ		U+0449: CYRILLIC SMALL LETTER SHCHA	ᠰᠢ	✓	shch	ŝ	
С	S	s		S	S	V	Lu		fricative		с		эс		U+0421: CYRILLIC CAPITAL LETTER ES	ᠰ	✓	s	s	s ʃ
Ш	S	ʃ		Ʃ	SH	I	Lu		fricative		ш		ша, эш		U+0428: CYRILLIC CAPITAL LETTER SHA	ᠱ	✓	sh	š	ʃ
Щ	S	ʃ		Š	SH	=	Lu	l	fricative	Russian words only	щ		ща, эшчэ		U+0429: CYRILLIC CAPITAL LETTER SHCHA	ᠰᠢ	✓	shch	ŝ	
т	t	t		t	t	m	Ll		plosive			Т	тэ		U+0442: CYRILLIC SMALL LETTER TE	ᠲ	✓	t	t	t
Т	T	t		T	T	M	Lu		plosive		т		тэ		U+0422: CYRILLIC CAPITAL LETTER TE	ᠲ	✓	t	t	t
ү	u	u		u	ü	o	Ll		front (+ATR) vowel			Ү	ү		U+04AF: CYRILLIC SMALL LETTER STRAIGHT U	ᠦ	✓	ü	ü	u
у	u	ʊ		ʊ	u	e	Ll		back (-ATR) vowel			У	у		U+0443: CYRILLIC SMALL LETTER U	ᠤ	✓	u	u	ʊ
ю	u	jʊ ju		jᵘ	yu	/	Ll		ioticised vowel			Ю	ю		U+044E: CYRILLIC SMALL LETTER YU	ᠶᠦ	✓	yu yü	û	
Ү	U	u		U	ü	o	Lu		front (+ATR) vowel		ү		ү		U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U	ᠦ	✓	ü	ü	u
У	U	ʊ		Ʊ	u	e	Lu		back (-ATR) vowel		у		у		U+0423: CYRILLIC CAPITAL LETTER U	ᠤ	✓	u	u	ʊ
Ю	U	jʊ ju		Jᵘ	yu	/	Lu		ioticised vowel		ю		ю		U+042E: CYRILLIC CAPITAL LETTER YU	ᠶᠦ	✓	yu yü	û	
в	w	w̜ v f		v	v	.	Ll		fricative			В	вэ		U+0432: CYRILLIC SMALL LETTER VE	ᠸ	✓	v	v	w v
В	W	w̜ v f		V	V	.	Lu		fricative		в		вэ		U+0412: CYRILLIC CAPITAL LETTER VE	ᠸ	✓	v	v	w v
х	x	x		x	kh	h	Ll		fricative			Х	хэ, ха		U+0445: CYRILLIC SMALL LETTER HA	ᠬ	✓	h	h	x
Х	X	x		X	KH	H	Lu		fricative		х		хэ, ха		U+0425: CYRILLIC CAPITAL LETTER HA	ᠬ	✓	h	h	x
з	z	d͡z		ʣ	z	p	Ll		affricate			З			U+0437: CYRILLIC SMALL LETTER ZE	ᠽ	✓	dz	z	ʤ
З	Z	d͡z		ʣ̿	Z	P	Lu		affricate		з				U+0417: CYRILLIC CAPITAL LETTER ZE	ᠽ	✓	dz	z	ʤ
																				
																				
ий		iː			ii				long neutral vowel						U+0438 U+0439: CYRILLIC SMALL LETTER I, SMALL LETTER SHORT I					
иа		i̯a			ia				dipthong						U+0438 U+0430: CYRILLIC SMALL LETTER I, SMALL LETTER A					
үү		uː			üü				long front (+ATR) vowel						U+04AF U+04AF: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER STRAIGHT U					
үй		ui̯			ui				diphthong						U+04AF U+0439: CYRILLIC SMALL LETTER STRAIGHT U, SMALL LETTER SHORT I					
уу		ʊː			uu				long back (-ATR) vowel						U+0443 U+0443: CYRILLIC SMALL LETTER U, SMALL LETTER U					
уй		ʊi̯			ui				diphthong						U+0443 U+0439: CYRILLIC SMALL LETTER U, SMALL LETTER SHORT I					
уа		u̯a			ua				diphthong						U+0443 U+0430: CYRILLIC SMALL LETTER U, SMALL LETTER A					
юү		juː		jᵘu	yüü				ioticised long vowel						U+044E U+04AF: CYRILLIC SMALL LETTER YU, SMALL LETTER STRAIGHT U					
юу		jʊː		jᵘʊ	yuu				ioticised long vowel						U+044E U+0443: CYRILLIC SMALL LETTER YU, SMALL LETTER U					
																				
ээ		eː		ee	ee				long front (+ATR) vowel						U+044D U+044D: CYRILLIC SMALL LETTER E, SMALL LETTER E					
эй		ei̯			ei				diphthong						U+044D U+0439: CYRILLIC SMALL LETTER E, SMALL LETTER SHORT I					
өө		ɵː		ɵɵ	öö				long front (+ATR) vowel						U+04E9 U+04E9: CYRILLIC SMALL LETTER BARRED O, SMALL LETTER BARRED O					
																				
оо		ɔː		ɔɔ	oo				long back (-ATR) vowel						U+043E U+043E: CYRILLIC SMALL LETTER O, SMALL LETTER O					
ой		ɔi̯			oi				diphthong						U+043E U+0439: CYRILLIC SMALL LETTER O, SMALL LETTER SHORT I					
ёо		jɔː		jᵒɔ	yoo				ioticised long vowel						U+0451 U+043E: CYRILLIC SMALL LETTER IO, SMALL LETTER O					
																				
аа		aː		aa	aa				long back (-ATR) vowel			АА			U+0430 U+0430: CYRILLIC SMALL LETTER A, SMALL LETTER A					
ай		ɛː			ai				diphthong						U+0430 U+0439: CYRILLIC SMALL LETTER A, SMALL LETTER SHORT I					
яа		jaː		jᵃa	yaa				ioticised long vowel						U+044F U+0430: CYRILLIC SMALL LETTER YA, SMALL LETTER A					
																				
ИЙ		iː			ii				long neutral vowel						U+0418 U+0418 U+0306: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER SHORT I					
ИА		i̯a			ia				dipthong						U+0418 U+0410: CYRILLIC CAPITAL LETTER I, CAPITAL LETTER A					
ҮҮ		uː			üü				long front (+ATR) vowel						U+04AE U+04AE: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER STRAIGHT U					
ҮЙ		ui̯			ui				diphthong						U+04AE U+0418 U+0306: CYRILLIC CAPITAL LETTER STRAIGHT U, CAPITAL LETTER SHORT I					
УУ		ʊː			uu				long back (-ATR) vowel						U+0423 U+0423: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER U					
УЙ		ʊi̯			ui				diphthong						U+0423 U+0418 U+0306: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER SHORT I					
УА		u̯a			ua				diphthong						U+0423 U+0410: CYRILLIC CAPITAL LETTER U, CAPITAL LETTER A					
ЮҮ		juː		JᵘU	yüü				ioticised long vowel						U+042E U+04AE: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER STRAIGHT U					
ЮУ		jʊː		JᵘƱ	yuu				ioticised long vowel						U+042E U+0423: CYRILLIC CAPITAL LETTER YU, CAPITAL LETTER U					
																				
ЭЭ		eː		EE	ee				long front (+ATR) vowel						U+042D U+042D: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER E					
ЭЙ		ei̯			ei				diphthong						U+042D U+0418 U+0306: CYRILLIC CAPITAL LETTER E, CAPITAL LETTER SHORT I					
ӨӨ		ɵː		ƟƟ	öö				long front (+ATR) vowel						U+04E8 U+04E8: CYRILLIC CAPITAL LETTER BARRED O, CAPITAL LETTER BARRED O					
																				
ОО		ɔː		ƆƆ	oo				long back (-ATR) vowel						U+041E U+041E: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER O					
ОЙ		ɔi̯			oi				diphthong						U+041E U+0419: CYRILLIC CAPITAL LETTER O, CAPITAL LETTER SHORT I					
ЁО		jɔː		JᵒƆ	yoo				ioticised long vowel						U+0401 U+041E: CYRILLIC CAPITAL LETTER IO, CAPITAL LETTER O					
																				
АА		aː		AA	aa				long back (-ATR) vowel		аа				U+0410 U+0410: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER A					
АЙ		ɛː			ai				diphthong						U+0410 U+0418 U+0306: CYRILLIC CAPITAL LETTER A, CAPITAL LETTER I, COMBINING BREVE					
ЯА		jaː		JᵃA	yaa				ioticised long vowel						U+042F U+0410: CYRILLIC CAPITAL LETTER YA, CAPITAL LETTER A					
																				
ь		ĭ ʲ		ʲ	i	,	Ll		short vowel / palatalisation marker			Ь	зөөлний тэмдэг		U+044C: CYRILLIC SMALL LETTER SOFT SIGN	ᠢ	✓	ĭ		
ъ		∅		ʲ	"	]	Ll					Ъ	хатуугийн тэмдэг		U+044A: CYRILLIC SMALL LETTER HARD SIGN	ᠢ	✓		"	
																				
̆				–			Mn	r	diacritic	decomposed text only					U+0306: COMBINING BREVE		✓			
̈				–			Mn	r	diacritic	decomposed text only					U+0308: COMBINING DIAERESIS		✓			
																				
ʼ				ʼ	ʼ		Lm		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE					
§				§	§		Po		section sign						U+00A7: SECTION SIGN					
†				†	†		Po		dagger						U+2020: DAGGER					
‡				‡	‡		Po		double dagger						U+2021: DOUBLE DAGGER					
′				′	′		Po		prime						U+2032: PRIME					
″				″	″		Po		double prime						U+2033: DOUBLE PRIME					
																				
`																				
																				
																				
latinPanel = 'aː ă d͡z d͡ʒ e ᵊ eː ɛː ɡ i̯ ĭ ⁱ iː ʲ ɮ ŋ ɔ ɵ oː ɔː ŏ ʃ t t͡s t͡ʃ ü uː ʊ ʊː w̜ ɣ'																				
																				
																				
																				
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
block: 17,																				
																				
othertranscriptions: [[5, 'MNS 5217:2012'], [16, 'Hudum']]																				
}																				
																				