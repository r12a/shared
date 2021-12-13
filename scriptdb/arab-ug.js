var spreadsheet = `
م	m	m		m	m	m	Lo		consonant		م ممم			U+0645: ARABIC LETTER MEEM	м	✓
ن	n	n		n	n	n	Lo		consonant		ن ننن			U+0646: ARABIC LETTER NOON	н	✓
د	d	d		d	d	d	Lo		consonant		د ـد			U+062F: ARABIC LETTER DAL	д	✓
ت	t	t		t	t	t	Lo		consonant		ت تتت			U+062A: ARABIC LETTER TEH	т	✓
ب	b	b		b	b	b	Lo		consonant		ب ببب			U+0628: ARABIC LETTER BEH	б	✓
پ	p	p		p	p	p	Lo		consonant		پ پپپ			U+067E: ARABIC LETTER PEH	п	✓
ف	f	f		f	f	F	Lo		consonant		ف ففف			U+0641: ARABIC LETTER FEH	ф	✓
ق	q	q		q	q	j	Lo		consonant		ق ققق			U+0642: ARABIC LETTER QAF	қ	✓
ك	k	k		k	k	k	Lo		consonant		ك ككك			U+0643: ARABIC LETTER KAF	к	✓
ڭ	n	ŋ		ŋ	ng	i	Lo		consonant		ڭ ڭڭڭ			U+06AD: ARABIC LETTER NG	ң	✓
گ	g	g		g	g	G	Lo		consonant		گ گگگ			U+06AF: ARABIC LETTER GAF	г	✓
غ	r	ʁ		ʁ	gh	c	Lo		consonant		غ غغغ			U+063A: ARABIC LETTER GHAIN	ғ	✓
ھ	h	h		h	h	a	Lo		consonant		ھ ھھھ			U+06BE: ARABIC LETTER HEH DOACHASHMEE	һ	✓
خ	x	χ		χ	x	H	Lo		consonant		خ خخخ			U+062E: ARABIC LETTER KHAH	х	✓
چ	c	ʧ		č	ch	q	Lo		consonant		چ چچچ			U+0686: ARABIC LETTER TCHEH	ч	✓
ج	d	ʤ		ʤ	j	J	Lo		consonant		ج ججج			U+062C: ARABIC LETTER JEEM	җ	✓
ژ	z	ʒ		ʒ	zh	D	Lo		consonant		ژ ـژ			U+0698: ARABIC LETTER JEH	ж	✓
ز	z¶	z		z	z	z	Lo		consonant		ز ـز			U+0632: ARABIC LETTER ZAIN	з	✓
س	s	s		s	s	s	Lo		consonant		س سسس			U+0633: ARABIC LETTER SEEN	с	✓
ش	s	ʃ		ʃ	sh	x	Lo		consonant		ش ششش			U+0634: ARABIC LETTER SHEEN	ш	✓
ر	r¶	r		r	r	r	Lo		consonant		ر ـر			U+0631: ARABIC LETTER REH	р	✓
ل	l	l		l	l	l	Lo		consonant		ل للل			U+0644: ARABIC LETTER LAM	л	✓
ئ	{	-		ʿ	- ’	/	Lo		consonant		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	-	✓
																
																
ي	y	j		y	y	y	Lo		semivowel		ي ييي			U+064A: ARABIC LETTER YEH	й	✓
ۋ	w	v w		w	w	w	Lo		semivowel		ۋ ـۋ			U+06CB: ARABIC LETTER VE	в	✓
																
																
ى	i	i ɨ		i	i	h	Lo		vowel		ى ىىى			U+0649: ARABIC LETTER ALEF MAKSURA	и	✓
ۈ	u	y ʏ		ü	ü	v	Lo		vowel		ۈ ـۈ			U+06C8: ARABIC LETTER YU	ү	✓
ۇ	u	u ʊ		u	u	u	Lo		vowel		ۇ ـۇ			U+06C7: ARABIC LETTER U	у	✓
ې	e	e		ë	ë	e	Lo		vowel		ې ېېې			U+06D0: ARABIC LETTER E	е	✓
و	o	o ɔ		o	o	o	Lo		vowel		و ـو			U+0648: ARABIC LETTER WAW	о	✓
ە	e	ɛ æ		e	e	g	Lo		vowel		ە ەەە			U+06D5: ARABIC LETTER AE	ә	✓
ۆ	o	ø		ø	ö	K	Lo		vowel		ۆ ـۆ			U+06C6: ARABIC LETTER OE	ө	✓
ا	a	ɑ a		a	a	f	Lo		vowel		ا ـا			U+0627: ARABIC LETTER ALEF	а	✓
																
ٔ	[			ʿ			Mn​		hamza above	decomposed text only				U+0654: ARABIC HAMZA ABOVE​		✓
																
																
ئى	I	i ɨ		ʿi	i									U+0626 U+0649: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF MAKSURA	и	
ئۈ	U	y ʏ		ʿü	ü									U+0626 U+06C8: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER YU	ү	
ئۇ	U	u ʊ		ʿu	u									U+0626 U+06C7: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER U	у	
ئې	E	e		ʿë	ë									U+0626 U+06D0: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER E	е	
ئو	O	o ɔ		ʿo	ö									U+0626 U+0648: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER WAW	ө	
ئە	E	ɛ æ		ʿe	e									U+0626 U+06D5: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER AE	ә	
ئۆ	O	ø		ʿø	o									U+0626 U+06C6: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER OE	о	
ئا	A	ɑ a		ʿa	a									U+0626 U+0627: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF	а	
																
																
																
لا				–		L								U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF		
																
																
																
																
																
																
																
.	.			.	.		Po		full stop					U+002E: FULL STOP		✓
،	,			,	,	,	Po		comma					U+060C: ARABIC COMMA		✓
:	:			:	:		Po		colon					U+003A: COLON		✓
؛	;			;	;	;	Po		semicolon					U+061B: ARABIC SEMICOLON		✓
!	!			!	!		Po		exclamation mark					U+0021: EXCLAMATION MARK		
؟	?			?	?	?	Po		question mark					U+061F: ARABIC QUESTION MARK		✓
																
																
…	.			…	…		Po		ellipsis					U+2026: HORIZONTAL ELLIPSIS		✓
																
																
																
«	<			«	“	"	Pi		quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		✓
‹	<			‹	‘		Pi		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		✓
“	<			 “	“		Pi		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK		✓
‘	<			‘	‘		Pi		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		✓
»	>			»	”	'	Pf		quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		✓
›	>			›	’		Pf		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		✓
”	>			”	”		Pf		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK		✓
’	>			’	’		Pf		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		✓
																
																
																
(	(			(	(		Ps		parenthesis					U+0028: LEFT PARENTHESIS		✓
[	(			[	[		Pe		bracket					U+005B: LEFT SQUARE BRACKET		
)	)			)	)		Ps		parenthesis					U+0029: RIGHT PARENTHESIS		✓
]	)			]	]		Pe		bracket					U+005D: RIGHT SQUARE BRACKET		
																
																
-	-			-	-		Pd		hyphen					U+2010: HYPHEN		
‑	-			‑	‑		Pd		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN		
–	-			–	–		Pd		en dash					U+2013: EN DASH		✓
—	-			—	—		Pd		em dash					U+2014: EM DASH		✓
																
																
																
																
ʼ				ʼ	ʼ		Lm		apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE		
§				§	§		Po		section sign					U+00A7: SECTION SIGN		
†				†	†		Po		dagger					U+2020: DAGGER		
‡				‡	‡		Po		double dagger					U+2021: DOUBLE DAGGER		
′				′	′		Po		prime					U+2032: PRIME		
″				″	″		Po		double prime					U+2033: DOUBLE PRIME		
																
																
																
																
																
																
\u200B	=			␣			Cf		zero-width space					U+200B: ZERO WIDTH SPACE		
\u200C	=			ᶻʷⁿʲ			Cf		zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER		
\u200D	=			ᶻʷʲ			Cf		zero-width joiner					U+200D: ZERO WIDTH JOINER		
\u034F	=			ᶜᵍʲ			Mn		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​		
\u2060	=			ʷʲ			Cf		word joiner					U+2060 WORD JOINER		
																
\u2067	=			ʳˡⁱ			Cf		rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE		
\u2066	=			ˡʳⁱ			Cf		ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE		
\u2068	=			ᶠˢⁱ			Cf		first-strong isolate					U+2068: FIRST STRONG ISOLATE		
\u2069	=			ᵖᵈⁱ			Cf		pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE		
\u202B	=			ʳˡᵉ			Cf		rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING		
\u202A	=			ˡʳᵉ			Cf		ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING		
\u202C	=			ᵖᵈᶠ			Cf		pop direction					U+202C: POP DIRECTIONAL FORMATTING		
\u200F	=			ʳˡᵐ			Cf		rtl mark					U+200F: RIGHT-TO-LEFT MARK		
\u200E	=			ˡʳᵐ			Cf		ltr mark					U+200E: LEFT-TO-RIGHT MARK		
\u061C	=			ᵃˡᵐ			Cf		arabic letter mark					U+061C: ARABIC LETTER MARK		
																
																
																
																
																
																
٪	%			%	%		Po		percent sign					U+066A: ARABIC PERCENT SIGN		✓


`


latinPanel = 'æ ɑ ʤ ɛ ë ɨ ŋ ɔ ø ö ʁ ʃ ʧ ʊ ü χ ʒ'



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
"lc":0,
"uc":0,
"meaning":0,
"shape": 11,
"numLoc": 0,

"nnameLoc": 12,
"nameLoc": 13,
"ucsName": 14,
"block": 16,

"othertranscriptions": [[5, 'ULY'], [15, 'USY']]
}


