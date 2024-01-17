var spreadsheet = `arab-ckb	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	shape	native name	latin name	ucs name	block
\u0020				 	 		Sp		space					U+0020: SPACE	
-	-			-	-		Pd	?	hyphen					U+2010: HYPHEN	
‑	-			‑	‑		Pd	?	non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd	?	en dash					U+2013: EN DASH	
—	-			—	—		Pd	?	em dash					U+2014: EM DASH	
،	,			,	,		Po		comma					U+060C: ARABIC COMMA	
؛	;			;			Po		semicolon					U+061B: ARABIC SEMICOLON	
:	:			:	:		Po		colon					U+003A: COLON	
!	!			!	!		Po		exclamation mark					U+0021: EXCLAMATION MARK	
؟	?			?	?		Po		question mark					U+061F: ARABIC QUESTION MARK	
.	.			.	.		Po		full stop					U+002E: FULL STOP	
…	.			…	…		Po		ellipsis					U+2026: HORIZONTAL ELLIPSIS	
(	(			(	(		Ps		parenthesis					U+0028: LEFT PARENTHESIS	
[	(			[	[		Pe		bracket					U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Ps		parenthesis					U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe		bracket					U+005D: RIGHT SQUARE BRACKET	
%	%			%			Po	?	percentage mark					U+0025: PERCENT SIGN	
‰	%			‰			Po	?	per mille mark					U+2030: PER MILLE SIGN	
«	<			«			Pi	?	quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	<			‹			Pi	?	quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	
“	<			“	“		Pi		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			‘	‘		Pi	?	quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	
»	>			»			Pf	?	quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
›	>			›			Pf	?	quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	
”	>			”	”		Pf		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	
’	>			’	’		Pf	?	quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	
ا	a	ɑː		a	a		Lo		vowel, glottal stop		ا ـا			U+0627: ARABIC LETTER ALEF	
ب	b	b		b	b		Lo		consonant		ب ببب			U+0628: ARABIC LETTER BEH	
چ	c	t͡ʃ		c	ç		Lo		consonant		چ چچچ			U+0686: ARABIC LETTER TCHEH	
د	d	d		d	d		Lo		consonant		د ـد			U+062F: ARABIC LETTER DAL	
ە	e	æ ə ɛ		ɛ	e		Lo		vowel		ە ـە			U+06D5: ARABIC LETTER AE	
ێ	E	eː		e	ê		Lo		vowel		 ێ ێێێ			U+06CE: ARABIC LETTER YEH WITH SMALL V	
ف	f	f		f	f		Lo		consonant		ف ففف			U+0641: ARABIC LETTER FEH	
گ	g	ɡ		g	g		Lo		consonant		گ گگگ			U+06AF: ARABIC LETTER GAF	
ه	h	h		h	h		Lo		consonant		ه ههـ			U+0647: ARABIC LETTER HEH	
ح	H	ħ		ħ	h		Lo		consonant		ح ححح			U+062D: ARABIC LETTER HAH	
ھ	h	h		h	h		Lo		consonant		ھ ھھـ			U+06BE: ARABIC LETTER HEH DOACHASHMEE	
ژ	j	ʒ		ʒ	j		Lo		consonant		ژ ـژ			U+0698: ARABIC LETTER JEH	
ج	J	d͡ʒ		ʤ	c		Lo		consonant		 ج ججج			U+062C: ARABIC LETTER JEEM	
ک	k	k	c	k	k		Lo		consonant		ک ککک			U+06A9: ARABIC LETTER KEHEH	
ل	l	l		l	l		Lo		consonant		ل للل			U+0644: ARABIC LETTER LAM	
ڵ	L	ɫ		ɫ	ll		Lo		consonant		ڵ ـڵڵ			U+06B5: ARABIC LETTER LAM WITH SMALL V	
م	m	m		m	m		Lo		consonant		م ممم			U+0645: ARABIC LETTER MEEM	
ن	n	n		n	n		Lo		consonant		ن ننن			U+0646: ARABIC LETTER NOON	
ۆ	o	oː		o	o		Lo		vowel		ۆ ـۆ			U+06C6: ARABIC LETTER OE	
پ	p	p		p	p		Lo		consonant		پ پپپ			U+067E: ARABIC LETTER PEH	
ق	q	q		q	q		Lo		consonant		ق ققق			U+0642: ARABIC LETTER QAF	
ر	r	ɾ		ɾ	r		Lo		consonant		ر ـر			U+0631: ARABIC LETTER REH	
ڕ	R	r		r	rr		Lo		consonant		ڕ ـڕ			U+0695: ARABIC LETTER REH WITH SMALL V BELOW	
س	s	s		s	s		Lo		consonant		س سسس			U+0633: ARABIC LETTER SEEN	
ش	S	ʃ		ʃ	ş		Lo		consonant		ش ششش			U+0634: ARABIC LETTER SHEEN	
ت	t	t	tʰ	t	t		Lo		consonant		ت تتت			U+062A: ARABIC LETTER TEH	
و	u	ʊ w		ʊ	u		Lo		vowel		و ـو			U+0648: ARABIC LETTER WAW	
وو	U	uː		u	û				vowel		وو ـوو			U+0648 U+0648: ARABIC LETTER WAW, LETTER WAW	
ڤ	v	v		v	v		Lo		consonant		ڤ ڤڤڤ			U+06A4: ARABIC LETTER VEH	
خ	x	x		x	x		Lo		consonant		خ خخخ			U+062E: ARABIC LETTER KHAH	
غ	X	ɣ		ɣ	ẍ		Lo		consonant		غ غغغ			U+063A: ARABIC LETTER GHAIN	
ی	y	j iː		i	y i		Lo		consonant		ی ییی			U+06CC: ARABIC LETTER FARSI YEH	
ز	z	z		z	z		Lo		consonant		ز ـز			U+0632: ARABIC LETTER ZAIN	
ع	{	ʕ		ʕ	–		Lo		consonant		ع ععع			U+0639: ARABIC LETTER AIN	
نٚ	N	ŋ		ŋ	ň			r	consonant					U+0646 U+065A: ARABIC LETTER NOON, VOWEL SIGN SMALL V ABOVE	
ئ	{	ʔ		ʔ	–		Lo		word-initial vowel carrier					U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	
															
ي				í			Lo	r	decomposed part of standalone vowel carrier	not normally used				U+064A: ARABIC LETTER YEH	
ٔ				ʾ			Mn​	r	decomposed part of standalone vowel carrier	not normally used				U+0654: ARABIC HAMZA ABOVE	
\u065A				^			Mn​	u	inappropriate orphan					U+065A: ARABIC VOWEL SIGN SMALL V ABOVE	
ك		k		ḳ			Lo	u	arabic k	not normally used				U+0643: ARABIC LETTER KAF	
ڶ		ɫ		ĺ			Lo	u	consonant	poorly attested alternative				U+06B6: ARABIC LETTER LAM WITH DOT ABOVE	
ڷ		ɫ		ľ			Lo	u	consonant	poorly attested alternative				U+06B7: ARABIC LETTER LAM WITH THREE DOTS ABOVE	
ڒ		r		ṙ			Lo	u	consonant	poorly attested alternative				U+0692: ARABIC LETTER REH WITH SMALL V	
ڔ		r		ṝ			Lo	u	consonant	poorly attested alternative				U+0694: ARABIC LETTER REH WITH DOT BELOW	
ۊ	y	yː		y	–		Lo	r	vowel		ۊ ـۊ			U+06CA: ARABIC LETTER WAW WITH TWO DOTS ABOVE	
ّ				–			Mn	u	gemination diacritic	not used				U+0651: ARABIC SHADDA	
ْ				–			Mn	u	absent vowel indicator	not used				U+0652: ARABIC SUKUN	
															
۱		1		1	1				digit					U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	
۲		2		2	2				digit					U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	
۳		3		3	3				digit					U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	
۴		4		4	4				digit					U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	
۵		5		5	5				digit					U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	
۶		6		6	6				digit					U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	
۷		7		7	7				digit					U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	
۸		8		8	8				digit					U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	
۹		9		9	9				digit					U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	
۰		0		0	0				digit					U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	
															
\u200C	=			ₓ			Cf		zwnj					U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf		zwj					U+200D: ZERO WIDTH JOINER	
\u2067	=			ʳˡⁱ			Cf		rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf		ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	=			ᶠˢⁱ			Cf		first-strong isolate					U+2068: FIRST STRONG ISOLATE	
\u2069	=			ᵖᵈⁱ			Cf		pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	
\u202B	=			ʳˡᵉ			Cf		rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf		ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	=			ᵖᵈᶠ			Cf		pop direction					U+202C: POP DIRECTIONAL FORMATTING	
\u200F	=			ʳˡᵐ			Cf		rtl mark					U+200F: RIGHT-TO-LEFT MARK	
\u200E	=			ˡʳᵐ			Cf		ltr mark					U+200E: LEFT-TO-RIGHT MARK	
\u034F	=			ᶜᵍʲ			Mn	?	combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER	
\u061C	=			ᵃˡᵐ			Cf	?	arabic letter mark					U+061C: ARABIC LETTER MARK	
`															
															
latinPanel = 'æ aː d͡ʒ eː ɪ iː pˤ tʰ t͡ʃ t͡ʃʰ oː uː yː â ç ê î û ħ ň ŋ ş ɘ ɛ ɡ ɣ ɫ ɾ ʃ ʊ ʒ ʕ ʤ ʔ ḥ'															
															
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
block: 15,															
															
//othertranscriptions: [[5, 'Hawar']]															
}															
															
// source: https://en.wikipedia.org/wiki/Kurdish_alphabets#Comparison_of_Kurdish_alphabets															
// source:https://en.wikipedia.org/wiki/Help:IPA/Kurdish															
// https://en.wiktionary.org/wiki/Category:Central_Kurdish_lemmas															