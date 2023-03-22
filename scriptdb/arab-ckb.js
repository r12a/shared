var spreadsheet = `arab-ckb	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
-	-			-	-		Pd		hyphen				U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen				U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash				U+2013: EN DASH	
—	-			—	—		Pd		em dash				U+2014: EM DASH	
،	,			,	,		Po		comma				U+060C: ARABIC COMMA	
؛	;			;			Po		semicolon				U+061B: ARABIC SEMICOLON	
:	:			:	:		Po		colon				U+003A: COLON	
!	!			!	!		Po		exclamation mark				U+0021: EXCLAMATION MARK	
؟	?			?	?		Po		question mark				U+061F: ARABIC QUESTION MARK	
.	.			.	.		Po		full stop				U+002E: FULL STOP	
…	.			…	…		Po		ellipsis				U+2026: HORIZONTAL ELLIPSIS	
(	(			(	(		Ps		parenthesis				U+0028: LEFT PARENTHESIS	
[	(			[	[		Pe		bracket				U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Ps		parenthesis				U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe		bracket				U+005D: RIGHT SQUARE BRACKET	
%	%			%			Po		percentage mark				U+0025: PERCENT SIGN	
‰	%			‰			Po		per mille mark				U+2030: PER MILLE SIGN	
«	<			«			Pi		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	<			‹			Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
“	<			“	“		Pi		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
\‘	<			\‘	\‘		Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
»	>			»			Pf		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
›	>			›			Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
”	>			”	”		Pf		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
\’	>			\’	\’		Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
ا	a	ɑ ʔ		a	a '		Lo		vowel, glottal stop				U+0627: ARABIC LETTER ALEF	
ب	b	b		b	b		Lo		consonant				U+0628: ARABIC LETTER BEH	
چ	c	t͡ʃ		c	ch		Lo		consonant				U+0686: ARABIC LETTER TCHEH	
د	d	d		d	d		Lo		consonant				U+062F: ARABIC LETTER DAL	
ێ	e	e		e	e ê		Lo		vowel				U+06CE: ARABIC LETTER YEH WITH SMALL V	
ه	E	ɛ æ			e â		Lo		vowel				U+0647: ARABIC LETTER HEH	
ڢ	f	f		f	f		Lo		consonant				U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW	
غ		ɣ		ɣ	gh		Lo		consonant				U+063A: ARABIC LETTER GHAIN	
گ	g	ɡ ɡʲ		g	g		Lo		consonant				U+06AF: ARABIC LETTER GAF	
ح	h	ħ		ħ	ḥ		Lo		consonant				U+062D: ARABIC LETTER HAH	
ھ	h	h		h	h		Lo		consonant				U+06BE: ARABIC LETTER HEH DOACHASHMEE	
ى	i	i		i	î		Lo		vowel				U+0649: ARABIC LETTER ALEF MAKSURA	
ج	j	d͡ʒ		ʤ	j		Lo		consonant				U+062C: ARABIC LETTER JEEM	
ک	k	k kʲ		k	k		Lo		consonant				U+06A9: ARABIC LETTER KEHEH	
ل	l	l		l	l		Lo		consonant				U+0644: ARABIC LETTER LAM	
ڵ	l	ɫ		ɫ	ł		Lo		consonant				U+06B5: ARABIC LETTER LAM WITH SMALL V	
م	m	m		m	m		Lo		consonant				U+0645: ARABIC LETTER MEEM	
ن	n	n		n	n		Lo		consonant				U+0646: ARABIC LETTER NOON	
ۆ	o	o		o	o		Lo		vowel				U+06C6: ARABIC LETTER OE	
پ	p	p		p	p		Lo		consonant				U+067E: ARABIC LETTER PEH	
ق		q		q	q		Lo		consonant				U+0642: ARABIC LETTER QAF	
ر	r	ɾ		ɾ	r		Lo		consonant				U+0631: ARABIC LETTER REH	
ڕ	r	r		r	ř rr		Lo		consonant				U+0695: ARABIC LETTER REH WITH SMALL V BELOW	
س	s	s		s	s		Lo		consonant				U+0633: ARABIC LETTER SEEN	
ش	s	ʃ		ʃ	sh		Lo		consonant				U+0634: ARABIC LETTER SHEEN	
ت	t	t		t	t		Lo		consonant				U+062A: ARABIC LETTER TEH	
وو	u	u		u	û				vowel				U+0648 U+0648: ARABIC LETTER WAW, LETTER WAW	
و	U	ʊ		ʊ	u		Lo		vowel				U+0648: ARABIC LETTER WAW	
ڤ		v		v	v		Lo		consonant				U+06A4: ARABIC LETTER VEH	
و	w	w		w	w		Lo		consonant				U+0648: ARABIC LETTER WAW	
خ		x		x	kh		Lo		consonant				U+062E: ARABIC LETTER KHAH	
ى	y	j		y	y		Lo		consonant				U+0649: ARABIC LETTER ALEF MAKSURA	
ز		z		z	z		Lo		consonant				U+0632: ARABIC LETTER ZAIN	
ژ		ʒ		ʒ	zh		Lo		consonant				U+0698: ARABIC LETTER JEH	
ع	{	ʕ		ʕ			Lo		consonant				U+0639: ARABIC LETTER AIN	
`														
														
latinPanel = 'd͡ʒ kʲ t͡ʃ â æ ê î û ħ ł ř ɑ ɛ ɡ ʲ ɣ ɫ ɾ ʃ ʊ ʒ ʔ ʕ ḥ'														
														
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
														
nnameLoc: 11,														
nameLoc: 12,														
ucsName: 13,														
block: 14,														
														
//othertranscriptions: [[5, 'LOC']]														
}														