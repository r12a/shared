var spreadsheet = `arab-ug	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	shape	native name	latin name	ucs name	USY trans	block
-	-			-	-		Pd	?	hyphen					U+2010: HYPHEN		
‑	-			‑	‑		Pd	?	non-breaking hyphen					U+2011: NON-BREAKING HYPHEN		
–	-			–	–		Pd	?	en dash					U+2013: EN DASH		✓
—	-			—	—		Pd	?	em dash					U+2014: EM DASH		✓
،	,			,	,	,	Po		comma					U+060C: ARABIC COMMA		✓
؛	;			;	;	;	Po		semicolon					U+061B: ARABIC SEMICOLON		✓
:	:			:	:		Po		colon					U+003A: COLON		✓
!	!			!	!		Po		exclamation mark					U+0021: EXCLAMATION MARK		
؟	?			?	?	?	Po		question mark					U+061F: ARABIC QUESTION MARK		✓
.	.			.	.		Po		full stop					U+002E: FULL STOP		✓
…	.			…	…		Po	?	ellipsis					U+2026: HORIZONTAL ELLIPSIS		✓
(	(			(	(		Ps		parenthesis					U+0028: LEFT PARENTHESIS		✓
[	(			[	[		Pe	?	bracket					U+005B: LEFT SQUARE BRACKET		
)	)			)	)		Ps		parenthesis					U+0029: RIGHT PARENTHESIS		✓
]	)			]	]		Pe	?	bracket					U+005D: RIGHT SQUARE BRACKET		
ٔ	[			ʿ			Mn	r	hamza above	Used in decomposed text only.				U+0654: ARABIC HAMZA ABOVE		✓
ئ	{	-		ʿ	- ’	/	Lo		consonant		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	-	✓
٪	%			%	%		Po	?	percent sign					U+066A: ARABIC PERCENT SIGN		✓
«	<			«	“	"	Pi		quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		✓
‹	<			‹			Pi	?	quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		✓
“	<			“	“		Pi	?	quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK		✓
‘	<			\‘	\‘		Pi	?	quotation mark					U+2018: LEFT SINGLE QUOTATION MARK		✓
\u200B	=			␣			Cf	?	zero-width space					U+200B: ZERO WIDTH SPACE		
\u200C	=			ᶻʷⁿʲ			Cf		zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER		
\u200D	=			ᶻʷʲ			Cf		zero-width joiner					U+200D: ZERO WIDTH JOINER		
\u034F	=			ᶜᵍʲ			Mn		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER		
\u2060	=			ʷʲ			Cf	?	word joiner					U+2060 WORD JOINER		
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
»	>			»	”		Pf		quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		✓
›	>			›			Pf	?	quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		✓
”	>			”	”		Pf	?	quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK		✓
’	>			\’	\’		Pf	?	quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK		✓
																
پ	p	p		p	p	p	Lo		consonant		پ پپپ			U+067E: ARABIC LETTER PEH	п	✓
ب	b	b		b	b	b	Lo		consonant		ب ببب			U+0628: ARABIC LETTER BEH	б	✓
ت	t	t		t	t	t	Lo		consonant		ت تتت			U+062A: ARABIC LETTER TEH	т	✓
چ	c	t͡ʃ		č	ch	q	Lo		consonant		چ چچچ			U+0686: ARABIC LETTER TCHEH	ч	✓
د	d	d		d	d	d	Lo		consonant		د ـد			U+062F: ARABIC LETTER DAL	д	✓
ج	d	d͡ʒ		ʤ	j	J	Lo		consonant		ج ججج			U+062C: ARABIC LETTER JEEM	җ	✓
ك	k	k		k	k	k	Lo		consonant		ك ككك			U+0643: ARABIC LETTER KAF	к	✓
گ	g	g		g	g	G	Lo		consonant		گ گگگ			U+06AF: ARABIC LETTER GAF	г	✓
ق	q	q		q	q	j	Lo		consonant		ق ققق			U+0642: ARABIC LETTER QAF	қ	✓
ف	f	f		f	f	F	Lo		consonant		ف ففف			U+0641: ARABIC LETTER FEH	ф	✓
ۋ	w	v w		w	w	w	Lo		semivowel		ۋ ـۋ			U+06CB: ARABIC LETTER VE	в	✓
س	s	s		s	s	s	Lo		consonant		س سسس			U+0633: ARABIC LETTER SEEN	с	✓
ز	z¶	z		z	z	z	Lo		consonant		ز ـز			U+0632: ARABIC LETTER ZAIN	з	✓
ش	s	ʃ		ʃ	sh	x	Lo		consonant		ش ششش			U+0634: ARABIC LETTER SHEEN	ш	✓
ژ	z	ʒ		ʒ	zh	D	Lo		consonant		ژ ـژ			U+0698: ARABIC LETTER JEH	ж	✓
خ	x	χ		χ	x	H	Lo		consonant		خ خخخ			U+062E: ARABIC LETTER KHAH	х	✓
غ	r	ʁ		ʁ	gh	c	Lo		consonant		غ غغغ			U+063A: ARABIC LETTER GHAIN	ғ	✓
ھ	h	h		h	h	a	Lo		consonant		ھ ھھھ			U+06BE: ARABIC LETTER HEH DOACHASHMEE	һ	✓
م	m	m		m	m	m	Lo		consonant		م ممم			U+0645: ARABIC LETTER MEEM	м	✓
ن	n	n		n	n	n	Lo		consonant		ن ننن			U+0646: ARABIC LETTER NOON	н	✓
ڭ	n	ŋ		ŋ	ng	i	Lo		consonant		ڭ ڭڭڭ			U+06AD: ARABIC LETTER NG	ң	✓
ر	r¶	r		r	r	r	Lo		consonant		ر ـر			U+0631: ARABIC LETTER REH	р	✓
ل	l	l		l	l	l	Lo		consonant		ل للل			U+0644: ARABIC LETTER LAM	л	✓
ي	y	j		y	y	y	Lo		semivowel		ي ييي			U+064A: ARABIC LETTER YEH	й	✓
																
ى	i	i ɨ		i	i	h	Lo		vowel		ى ىىى			U+0649: ARABIC LETTER ALEF MAKSURA	и	✓
ئى	I	i ɨ		ʿi	i				initial vowel					U+0626 U+0649: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF MAKSURA	и	
ۈ	u	y ʏ		ü	ü	v	Lo		vowel		ۈ ـۈ			U+06C8: ARABIC LETTER YU	ү	✓
ئۈ	U	y ʏ		ʿü	ü				initial vowel					U+0626 U+06C8: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER YU	ү	
ۇ	u	u ʊ		u	u	u	Lo		vowel		ۇ ـۇ			U+06C7: ARABIC LETTER U	у	✓
ئۇ	U	u ʊ		ʿu	u				initial vowel					U+0626 U+06C7: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER U	у	
ې	e	e		ë	ë	e	Lo		vowel		ې ېېې			U+06D0: ARABIC LETTER E	е	✓
ئې	E	e		ʿë	ë				initial vowel					U+0626 U+06D0: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER E	е	
ۆ	o	ø		ø	ö	K	Lo		vowel		ۆ ـۆ			U+06C6: ARABIC LETTER OE	ө	✓
ئۆ	O	ø		ʿø	o				initial vowel					U+0626 U+06C6: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER OE	о	
و	o	o ɔ		o	o	o	Lo		vowel		و ـو			U+0648: ARABIC LETTER WAW	о	✓
ئو	O	o ɔ		ʿo	ö				initial vowel					U+0626 U+0648: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER WAW	ө	
ە	e	ɛ æ		e	e	g	Lo		vowel		ە ەەە			U+06D5: ARABIC LETTER AE	ә	✓
ئە	E	ɛ æ		ʿe	e				initial vowel					U+0626 U+06D5: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER AE	ә	
ا	a	ɑ a		a	a	f	Lo		vowel		ا ـا			U+0627: ARABIC LETTER ALEF	а	✓
ئا	A	ɑ a		ʿa	a				initial vowel					U+0626 U+0627: ARABIC LETTER YEH WITH HAMZA ABOVE, LETTER ALEF	а	
																
لا				–		L			lam-alif ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF		
																
ʼ				ʼ	ʼ		Lm	?	apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE		
§				§	§		Po	?	section sign					U+00A7: SECTION SIGN		
†				†	†		Po	?	dagger					U+2020: DAGGER		
‡				‡	‡		Po	?	double dagger					U+2021: DOUBLE DAGGER		
′				′	′		Po	?	prime					U+2032: PRIME		
″				″	″		Po	?	double prime					U+2033: DOUBLE PRIME		
`																
																
latinPanel = 'æ ɑ d͡ʒ ɛ ë ɨ ŋ ɔ ø ö ʁ ʃ t͡ʃ ʊ ü χ ʒ'																
																
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
																
shape: 11,																
																
nnameLoc: 12,																
nameLoc: 13,																
ucsName: 14,																
block: 16,																
																
othertranscriptions: [[5, 'ULY'], [15, 'USY']]																
}																