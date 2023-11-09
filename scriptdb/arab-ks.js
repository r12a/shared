var spreadsheet = `arab-ks	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	equiv	shape	native name	latin name	ucs name	block
 	_			_	_		Zs		space						U+020: SPACE	✓
ـ	_			_	_		Lm	r	baseline extender						U+0640: ARABIC TATWEEL	✓
-	-			-	-				hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd	?	non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd	?	en dash						U+2013: EN DASH	✓
—	-			—	—		Pd	?	em dash						U+2014: EM DASH	✓
،	,			,	,		Po		comma						U+060C: ARABIC COMMA	✓
؛	;			;	;		Po		semicolon						U+061B: ARABIC SEMICOLON	✓
:	:			:	:		Po		colon						U+003A: COLON	✓
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
؟	?			?	?		Po		question mark						U+061F: ARABIC QUESTION MARK	✓
۔	.			.	.		Po		full stop						U+06D4: ARABIC FULL STOP	✓
.	.			.	.		Po	?	full stop						U+002E: FULL STOP	✓
…	.			…	…		Po	?	ellipsis						U+2026: HORIZONTAL ELLIPSIS	✓
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	✓
[	(			[	[		Ps	?	bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS	✓
]	)			]	]		Pe	?	bracket						U+005D: RIGHT SQUARE BRACKET	
ٓ	[			˜			Mn	r	vowel diacritic	used in decomposed text with آ					U+0653: ARABIC MADDAH ABOVE	✓
\u200B	]			␣			Cf	?	zero-width space						U+200B: ZERO WIDTH SPACE	
ع	}	ʔ ∅		ʔ	ʿ		Lo	l	plosive			ع ععع	عٲن	əːn	U+0639: ARABIC LETTER AIN	✓
ْ	*			͞			Mn		vowel killer						U+0652: ARABIC SUKUN	✓
ّ	&			˖			Mn	i	gemination marker						U+0651: ARABIC SHADDA	✓
₹	#			¤			Sc	?	currency symbol						U+20B9: INDIAN RUPEE SIGN	
٪	%			%			Po		percentage mark						U+066A: ARABIC PERCENT SIGN	✓
‰	%			‰			Po	?	per mille mark						U+2030: PER MILLE SIGN	✓
«	<			«	“		Pi	?	quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	<			‹			Pi	?	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
“	<			“	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
‘	<			\‘	\‘		Pi	?	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
\u200C	=			ₓ			Cf		zwnj						U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf		zwj						U+200D: ZERO WIDTH JOINER	
\u2067	=			ʳˡⁱ			Cf		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	=			ᶠˢⁱ			Cf		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	=			ᵖᵈⁱ			Cf		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	=			ʳˡᵉ			Cf		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	=			ᵖᵈᶠ			Cf		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	=			ʳˡᵐ			Cf		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	=			ˡʳᵐ			Cf		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F	=			ᶜᵍʲ			Mn		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER	
\u061C	=			ᵃˡᵐ			Cf		arabic letter mark						U+061C: ARABIC LETTER MARK	
»	>			»	”		Pf	?	quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
›	>			›			Pf	?	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
”	>			”	”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
’	>			\’	\’		Pf	?	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
۰	0			0	0		Nd		digit						U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	✓
۱	1			1	1		Nd		digit						U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	✓
۲	2			2	2		Nd		digit						U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	✓
۳	3			3	3		Nd		digit						U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	✓
۴	4			4	4		Nd		digit						U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	✓
۵	5			5	5		Nd		digit						U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	✓
۶	6			6	6		Nd		digit						U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	✓
۷	7			7	7		Nd		digit						U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	✓
۸	8			8	8		Nd		digit						U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	✓
۹	9			9	9		Nd		digit						U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	✓
																
																
َ	a	a		a	a		Mn		medial/final vowel						U+064E: ARABIC FATHA	✓
ا	A	aː ∅		ạ̄	ā		Lo		medial/final vowel			ا ـا			U+0627: ARABIC LETTER ALEF	✓
آ	A	aː		ã	ā		Lo		initial vowel		\u0627\u0653	آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	✓
ب	b	b		b	b		Lo		plosive			ب ببب	بے	beː	U+0628: ARABIC LETTER BEH	✓
ژ	c	t͡s		ʦ	ts		Lo		affricate			ژ ـژ	ژے	t͡seː	U+0698: ARABIC LETTER JEH	✓
چ	C	t͡ʃ		ʧ	c		Lo		affricate			چ چچچ	چیٖم	chīm	U+0686: ARABIC LETTER TCHEH	✓
چھ	C	t͡ʃʰ		ʧʰ	ch				aspirated affricate			چھ چھچھچھ			U+0686 U+06BE: ARABIC LETTER TCHEH, LETTER HEH DOACHASHMEE	
ڈ	d	ɖ		ɖ	ḍ		Lo		plosive			ڈ ـڈ	ڈال	ɖaːl	U+0688: ARABIC LETTER DDAL	✓
د	d¶	d		d	d		Lo		plosive			د ـد	دال	daːl	U+062F: ARABIC LETTER DAL	✓
ے	e	eː		ē	ē y		Lo		final vowel			ے ـے	یے	jeː	U+06D2: ARABIC LETTER YEH BARREE	✓
ٔ	e	Ə		ᵊ	ạ		Mn		medial/final vowel						U+0654: ARABIC HAMZA ABOVE	✓
ٲ	e	Əː		ə̄	ạ̄		Lo		initial/medial/final vowel						U+0672: ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE	✓
ۓ	e	?		ɛ͑			Lo	?	precomposed CV sequence		\u{6D2}\u{654}	ۓ ـۓ			U+06D3: ARABIC LETTER YEH BARREE WITH HAMZA ABOVE	✓
یٚ	e¶	e			e				medial vowel			یٚ یٚیٚیٚ			U+06CC U+065A: ARABIC LETTER FARSI YEH, VOWEL SIGN SMALL V ABOVE	
ف	F	f pʰ		f	f		Lo	l	fricative			ف ففف	فے	feː	U+0641: ARABIC LETTER FEH	✓
گ	g	ɡ		g	g		Lo		plosive			گ گگگ	گاف	gaːf	U+06AF: ARABIC LETTER GAF	✓
غ	G	ɡ		ġ	g͟h		Lo	l	plosive			غ غغغ	غٲن	gəːn	U+063A: ARABIC LETTER GHAIN	✓
ہ	h	h		h	h		Lo		fricative			ہ ہہہ	ہے	ʧʰoʈiː heː	U+06C1: ARABIC LETTER HEH GOAL	✓
ھ	H	ʰ		ʰ	h		Lo		aspiration marker			ھ ـھ		he	U+06BE: ARABIC LETTER HEH DOACHASHMEE	✓
ح	H	h		ħ	ḥ		Lo	l	fricative			ح ححح	حے	baṛī heː	U+062D: ARABIC LETTER HAH	✓
ِ	i	i		i	i		Mn		medial/final vowel						U+0650: ARABIC KASRA	✓
یٖ	i	iː		yˌ	ī				medial vowel			یٖ یٖیٖیٖ			U+06CC U+0656: ARABIC LETTER FARSI YEH, SUBSCRIPT ALEF	
ٕ	i	Ɨ		ɨ	u'		Mn		medial/final vowel						U+0655: ARABIC HAMZA BELOW	✓
ٟ	i	Ɨː		ɨ̄	ū'		Mn		medial/final vowel						U+065F: ARABIC WAVY HAMZA BELOW	✓
ج	J	d͡ʒ		ʤ	j		Lo		affricate			ج ججج	جیٖم	jīm	U+062C: ARABIC LETTER JEEM	✓
ک	k	k		k	k		Lo		plosive			ک ککک	كیٖف	kiːf	U+06A9: ARABIC LETTER KEHEH	✓
کھ	K	kʰ		kʰ	kh				aspirated plosive			کھ کھکھکھ			U+06A9 U+06BE: ARABIC LETTER KEHEH, LETTER HEH DOACHASHMEE	
ق	K	k		ḱ	q		Lo	l	plosive			ق ققق	قاف	kaːf	U+0642: ARABIC LETTER QAF	✓
خ	K	kʰ x		x	k͟h		Lo	l	aspirated plosive			خ خخخ	خے	kʰeː	U+062E: ARABIC LETTER KHAH	✓
ل	l	l		l	l		Lo		approximant			ل للل	لام	laːm	U+0644: ARABIC LETTER LAM	✓
م	m	m		m	m		Lo		nasal			م ممم	میٖم	miːm	U+0645: ARABIC LETTER MEEM	✓
ں	n	̃		ñ			Lo		nasalisation marker	tbc				noon ghunna	U+06BA: ARABIC LETTER NOON GHUNNA	✓
ن	n¶	n ̃		n	n ̃		Lo		nasal/nasalisation marker			ن ننن	نوٗن	nuːn	U+0646: ARABIC LETTER NOON	✓
وٚ	o	o		wᵉ	o				vowel			ۆ ـۆ			U+0648 U+065A: ARABIC LETTER WAW, VOWEL SIGN SMALL V ABOVE	
ۄ	o	ɔ		ɔ	ɔ		Lo		medial/final vowel			ۄ ـۄ			U+06C4: ARABIC LETTER WAW WITH RING	✓
ۄآ	o	ɔː		ɔã	ɔ̄				final vowel						U+06C4 U+0622: ARABIC LETTER WAW WITH RING, LETTER ALEF WITH MADDA ABOVE	
پ	p	p		p	p		Lo		plosive			پ پپپ	پے	pē	U+067E: ARABIC LETTER PEH	✓
پھ	P	pʰ		pʰ	ph				aspirated plosive			پھ پھپھپھ			U+067E U+06BE: ARABIC LETTER PEH, LETTER HEH DOACHASHMEE	
ر	r	r		r	r		Lo		approximant			ر ـر	رے	reː	U+0631: ARABIC LETTER REH	✓
ڑ	R	ɽ		ɽ	ṛ		Lo	l	approximant			ڑ ـڑ	ڑے	ɽeː	U+0691: ARABIC LETTER RREH	✓
ش	s	ʃ		ʃ	ś		Lo		fricative			ش ششش	شیٖن	ʃiːn	U+0634: ARABIC LETTER SHEEN	✓
ث	S	s		ṡ	s̱		Lo	l	fricative			ث ثثث	ثے	seː	U+062B: ARABIC LETTER THEH	✓
ص	S	s		ś	ṣ		Lo	l	fricative			ص صصص	صۄاد	sɔːd	U+0635: ARABIC LETTER SAD	✓
س	s¶	s		s	s		Lo		fricative			س سسس	سیٖن	siːn	U+0633: ARABIC LETTER SEEN	✓
ٹ	t	ʈ		ʈ	ṭ		Lo		plosive			ٹ ٹٹٹ	ٹے	ṭeː	U+0679: ARABIC LETTER TTEH	✓
ٹھ	T	ʈʰ		ʈʰ	ṭh				aspirated plosive			ٹھ ٹھٹھٹھ			U+0679 U+06BE: ARABIC LETTER TTEH, LETTER HEH DOACHASHMEE	
ژھ	T	t͡sʰ		ʦʰ	tsh				aspirated affricate			ژھ ژھژھژھ			U+0698 U+06BE: ARABIC LETTER JEH, LETTER HEH DOACHASHMEE	
ط	T	t		ṫ	ṯ		Lo	l	plosive			ط ططط	طۄے	tɔj	U+0637: ARABIC LETTER TAH	✓
ت	t¶	t		t	t		Lo		plosive			ت تتت	تے	teː	U+062A: ARABIC LETTER TEH	✓
تھ	T¶	tʰ		tʰ	th				aspirated plosive			تھ تھتھتھ			U+062A U+06BE: ARABIC LETTER TEH, LETTER HEH DOACHASHMEE	
ُ	u	u		u	u		Mn		medial/final vowel						U+064F: ARABIC DAMMA	✓
وٗ	u	uː		w˔	ū				medial/final vowel						U+0648 U+0657: ARABIC LETTER WAW, INVERTED DAMMA	
و	w	w ʋ oː		w	v		Lo		approximant/vowel			و ـو	واو	waːw	U+0648: ARABIC LETTER WAW	✓
ؤ	w	wə		u͑			Lo		precomposed CV sequence		\u{648}\u{654}	ؤ ـؤ			U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	✓
ی	y	j e iː		y	y		Lo		approximant/vowel			ی ییی	یے	jeː	U+06CC: ARABIC LETTER FARSI YEH	✓
ؠ	Y	ʲ		ʲ	ẏ		Lo		palatalisation marker			ؠ ؠؠؠ	چھوٹی یے	ʧʰoʈiː jeː	U+0620: ARABIC LETTER KASHMIRI YEH	✓
ز	z	z		ż	z		Lo		fricative			ز ـز	زے	zeː	U+0632: ARABIC LETTER ZAIN	✓
ذ	Z	z		z	ẕ		Lo	l	fricative			ذ ـذ	ذال	zaːl	U+0630: ARABIC LETTER THAL	✓
ض	Z	z		ź	z̤		Lo	l	fricative			ض ضضض	ضۄاد	zɔːd	U+0636: ARABIC LETTER DAD	✓
ظ	Z	z		ẑ	ẓ		Lo	l	fricative			ظ ظظظ	ظۄے	zɔj	U+0638: ARABIC LETTER ZAH	✓
																
اِ		i		ạ̄i	i				initial vowel						U+0627 U+0650: ARABIC LETTER ALEF, KASRA	
ایٖ		iː		ạ̄yˌ	ī				initial vowel						U+0627 U+06CC U+0656: ARABIC LETTER ALEF, LETTER FARSI YEH, SUBSCRIPT ALEF	
ٖ				ˌ			Mn		vowel diacritic	orphan, used with یٖـ					U+0656: ARABIC SUBSCRIPT ALEF	✓
إ		Ɨ		ạ̄ɨ	u'		Lo		initial vowel		\u{627}\u{655}	أ ـأ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	✓
اٟ		Ɨː		ạ̄ɨ̄	ū'				initial vowel						U+0627 U+065F: ARABIC LETTER ALEF, WAVY HAMZA BELOW	
ٳ		Ɨː		ɨ̸̄	ū'		Lo	d	precomposed vowel	deprecated	\u{627}\u{65F}				U+0673: ARABIC LETTER ALEF WITH WAVY HAMZA BELOW	✓
اُ		u		ạ̄u	u				initial vowel						U+0627 U+064F: ARABIC LETTER ALEF, DAMMA	
اوٗ		uː		ạ̄w˔	ū				initial vowel						U+0627 U+0648 U+0657: ARABIC LETTER ALEF, LETTER WAW, INVERTED DAMMA	
ٗ				˔			Mn		vowel diacritic	used with وٗ					U+0657: ARABIC INVERTED DAMMA	✓
																
اێ		e		ạ̄e	e				initial vowel						U+0627 U+06CE: ARABIC LETTER ALEF, LETTER YEH WITH SMALL V	
ٚے		e		ᵉē	e				final vowel						U+065A U+06D2: ARABIC VOWEL SIGN SMALL V ABOVE, LETTER YEH BARREE	
ٚ				ᵉ	e		Mn		vowel diacritic						U+065A: ARABIC VOWEL SIGN SMALL V ABOVE	✓
ای		eː		ạ̄y	ē				initial vowel						U+0627 U+06CC: ARABIC LETTER ALEF, LETTER FARSI YEH	
اۆ		o		ạ̄o	o				initial vowel						U+0627 U+06C6: ARABIC LETTER ALEF, LETTER OE	
او		oː		ạ̄w	ō				initial vowel						U+0627 U+0648: ARABIC LETTER ALEF, LETTER WAW	
																
اۄ		ɔ		ạ̄ɔ	ɔ				initial vowel						U+0627 U+06C4: ARABIC LETTER ALEF, LETTER WAW WITH RING	
																
أ		Ə		ə	ạ		Lo		initial vowel		\u{627}\u{654}	أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	✓
ۂ		hə		h͑			Lo		precomposed CV sequence		\u{6C1}\u{654}	ۂ ـۂ			U+06C2: ARABIC LETTER HEH GOAL WITH HAMZA ABOVE	✓
																
اَ		a		ạ̄a	a				initial vowel						U+0627 U+064E: ARABIC LETTER ALEF, FATHA	
																
ࢡ				b͇			Lo	u	Fulfulde character	do not use !	بٔ				U+08A1: ARABIC LETTER BEH WITH HAMZA ABOVE	✓
ݬ				r͇			Lo	u	Ormuri character	do not use !	رٔ				U+076C: ARABIC LETTER REH WITH HAMZA ABOVE	✓
ځ				ħ͇			Lo	u	Pashto character	do not use !	حٔ				U+0681: ARABIC LETTER HAH WITH HAMZA ABOVE	✓
ۆ				o͇			Lo	u	vowel for Uighur, Kurdish, Kazakh, Azerbaijani, Bosnian	do not use !	وٚ				U+06C6: ARABIC LETTER OE	✓
ێ				e͇			Lo	u	vowel for Kurdish	do not use !	یٚ				U+06CE: ARABIC LETTER YEH WITH SMALL V	✓
																
ٛ				–			Mn	u	inverted v	do not use !					U+065B: ARABIC VOWEL SIGN INVERTED SMALL V ABOVE	
																
ʼ				ʼ	ʼ		Lm	?	apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po	?	section sign						U+00A7: SECTION SIGN	
†				†	†		Po	?	dagger						U+2020: DAGGER	
‡				‡	‡		Po	?	double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po	?	prime						U+2032: PRIME	
″				″	″		Po	?	double prime						U+2033: DOUBLE PRIME	
																
ي				y̶			Lo	u	non-native letter	incorrect usage					U+064A: ARABIC LETTER YEH	✓
ئ				y̶͑			Lo	u	non-native letter	incorrect usage					U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	✓
ك				k̸			Lo	u	non-native letter	incorrect usage					U+0643: ARABIC LETTER KAF	✓
ٮ				b̸			Lo	u	non-native letter	incorrect usage					U+066E: ARABIC LETTER DOTLESS BEH	✓
۪				˳			Mn	u	non-native diacritic	incorrect usage					U+06EA: ARABIC EMPTY CENTRE LOW STOP	✓
ۍ							Lo	u	non-native letter	incorrect usage					U+06CD: ARABIC LETTER YEH WITH TAIL	
`																
																
latinPanel = 'ʿ ̃ ạ ạ̄ aː ā ɖ ḍ ʤ d͡ʒ ᵉ eː ē ə əː ə̄ ɡ g͟h ʰ ḥ iː ī ɨ ɨː ʲ kʰ k͟h oː ɔ ɔː ɔ̄ pʰ ṛ ɽ ʃ ś s̱ ṣ ʈ ṭ t͡s ʧ t͡ʃ tʰ ʈʰ t͡sʰ ʦʰ t͡ʃʰ ʧʰ ṯ uː ū ẏ ẕ z̤ ẓ ʔ'																
																
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
																
equiv: 11,																
shape: 12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'LOC']]																
}																