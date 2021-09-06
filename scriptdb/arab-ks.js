var spreadsheet = `
پ		p	p		p	p		plosive			پ پپپ	پے	pē	U+067E: ARABIC LETTER PEH	🗸
ب		b	b		b	b		plosive			ب ببب	بے	beː	U+0628: ARABIC LETTER BEH	🗸
ت		t	t		t¶	t		plosive			ت تتت	تے	teː	U+062A: ARABIC LETTER TEH	🗸
د		d	d		d¶	d		plosive			د ـد	دال	daːl	U+062F: ARABIC LETTER DAL	🗸
ٹ		ʈ	ṭ	ʈ ṭ	t	ʈ		plosive			ٹ ٹٹٹ	ٹے	ṭeː	U+0679: ARABIC LETTER TTEH	🗸
ڈ		ɖ	ḍ	ɖ ḍ	d	ɖ		plosive			ڈ ـڈ	ڈال	ɖaːl	U+0688: ARABIC LETTER DDAL	🗸
ک		k	k		k	k		plosive			ک ککک	كیٖف	kiːf	U+06A9: ARABIC LETTER KEHEH	🗸
گ		ɡ	g	ɡ	g	g		plosive			گ گگگ	گاف	gaːf	U+06AF: ARABIC LETTER GAF	🗸
															
ژ		t͡s	ts	ts t͡s	c	ʦ		affricate			ژ ـژ	ژے	t͡seː	U+0698: ARABIC LETTER JEH	🗸
چ		t͡ʃ	c	ʧ t͡ʃ	C	ʧ		affricate			چ چچچ	چیٖم	chīm	U+0686: ARABIC LETTER TCHEH	🗸
ج		d͡ʒ	j	ʤ d͡ʒ	J	ʤ		affricate			ج ججج	جیٖم	jīm 	U+062C: ARABIC LETTER JEEM	🗸
															
پھ	s	pʰ	ph	pʰ	P	pʰ		aspirated plosive			پھ پھپھپھ			U+067E U+06BE: ARABIC LETTER PEH, LETTER HEH DOACHASHMEE	
تھ	s	tʰ	th	tʰ	T¶	tʰ		aspirated plosive			تھ تھتھتھ			U+062A U+06BE: ARABIC LETTER TEH, LETTER HEH DOACHASHMEE	
ٹھ	s	ʈʰ	ṭh	ʈʰ	T	ʈʰ		aspirated plosive			ٹھ ٹھٹھٹھ			U+0679 U+06BE: ARABIC LETTER TTEH, LETTER HEH DOACHASHMEE	
کھ	s	kʰ	kh		K	kʰ		aspirated plosive			کھ کھکھکھ			U+06A9 U+06BE: ARABIC LETTER KEHEH, LETTER HEH DOACHASHMEE	
ژھ	s	t͡sʰ	tsh	t͡sʰ ʦʰ	T	ʦʰ		aspirated affricate			ژھ ژھژھژھ			U+0698 U+06BE: ARABIC LETTER JEH, LETTER HEH DOACHASHMEE	
چھ	s	t͡ʃʰ	ch	t͡ʃʰ ʧʰ	C	ʧʰ		aspirated affricate			چھ چھچھچھ			U+0686 U+06BE: ARABIC LETTER TCHEH, LETTER HEH DOACHASHMEE	
															
															
															
س		s	s		s¶	s		fricative			س سسس	سیٖن	siːn	U+0633: ARABIC LETTER SEEN	🗸
ز		z	z		z	ż		fricative			ز ـز	زے	zeː	U+0632: ARABIC LETTER ZAIN	🗸
ش		ʃ	ś	ʃ ś	s	ʃ		fricative			ش ششش	شیٖن	ʃiːn	U+0634: ARABIC LETTER SHEEN	🗸
ہ		h	h		h	h		fricative			ہ ہہہ	ہے	ʧʰoʈiː heː	U+06C1: ARABIC LETTER HEH GOAL	🗸
ھ		ʰ	h	ʰ	H	ʰ		aspiration marker			ھ ـھ		he	U+06BE: ARABIC LETTER HEH DOACHASHMEE	🗸
															
															
م		m	m		m	m		nasal			م ممم	میٖم	miːm	U+0645: ARABIC LETTER MEEM	🗸
ن		n ̃	n ̃	 ̃	n¶	n		nasal/nasalisation marker			ن ننن	نوٗن	nuːn	U+0646: ARABIC LETTER NOON	🗸
															
و		w ʋ oː	v		w	w		approximant/vowel			و ـو	واو	waːw	U+0648: ARABIC LETTER WAW	🗸
ر		r	r		r	r		approximant			ر ـر	رے	reː	U+0631: ARABIC LETTER REH	🗸
ل		l	l		l	l		approximant			ل للل	لام	laːm	U+0644: ARABIC LETTER LAM	🗸
ی		j e iː	y		y	y		approximant/vowel			ی ییی	یے	jeː	U+06CC: ARABIC LETTER FARSI YEH	🗸
ؠ		ʲ	ẏ	ʲ ẏ	Y	ʲ		palatalisation marker			ؠ ؠؠؠ	چھوٹی یے	ʧʰoʈiː jeː	U+0620: ARABIC LETTER KASHMIRI YEH	🗸
															
															
															
ں		 ̃			n	ñ		nasalisation marker	tbc				noon ghunna	U+06BA: ARABIC LETTER NOON GHUNNA	🗸
															
															
ط		t	ṯ	ṯ	T	ṫ		plosive			ط ططط	طۄے	tɔj	U+0637: ARABIC LETTER TAH	🗸
ق		k	q		K	ḱ		plosive			ق ققق	قاف	kaːf	U+0642: ARABIC LETTER QAF	🗸
غ		ɡ	g͟h	g͟h	G	ġ		plosive			غ غغغ	غٲن	gəːn	U+063A: ARABIC LETTER GHAIN	🗸
خ		kʰ x	k͟h	kʰ k͟h	K	x		aspirated plosive			خ خخخ	خے	kʰeː	U+062E: ARABIC LETTER KHAH	🗸
ف		f pʰ	f		F	f		fricative	loan words		ف ففف	فے	feː	U+0641: ARABIC LETTER FEH	🗸
ث		s	s̱	s̱	S	ṡ		fricative			ث ثثث	ثے	seː	U+062B: ARABIC LETTER THEH	🗸
ص		s	ṣ	ṣ	S	ś		fricative			ص صصص	صۄاد	sɔːd	U+0635: ARABIC LETTER SAD	🗸
ذ		z	ẕ	ẕ	Z	z		fricative			ذ ـذ	ذال	zaːl	U+0630: ARABIC LETTER THAL	🗸
ض		z	z̤	z̤	Z	ź		fricative			ض ضضض	ضۄاد	zɔːd	U+0636: ARABIC LETTER DAD	🗸
ظ		z	ẓ	ẓ	Z	ẑ		fricative			ظ ظظظ	ظۄے	zɔj	U+0638: ARABIC LETTER ZAH	🗸
ح		h	ḥ	ḥ	H	ħ		fricative			ح ححح	حے	baṛī heː	U+062D: ARABIC LETTER HAH	🗸
ڑ		ɽ	ṛ	ṛ ɽ	R	ɽ		approximant			ڑ ـڑ	ڑے	ɽeː	U+0691: ARABIC LETTER RREH	🗸
															
															
															
ِ		i	i		i	i		medial/final vowel						U+0650: ARABIC KASRA​	🗸
اِ	s	i	i			ạ̄i		initial vowel						U+0627 U+0650: ARABIC LETTER ALEF, KASRA	
ایٖ	s	iː	ī	iː ī		ạ̄yˌ		initial vowel						U+0627 U+06CC U+0656: ARABIC LETTER ALEF, LETTER FARSI YEH, SUBSCRIPT ALEF	
یٖ	s	iː	ī		i	yˌ		medial vowel			یٖ یٖیٖیٖ			U+06CC U+0656: ARABIC LETTER FARSI YEH, SUBSCRIPT ALEF	
ٖ	o					ˌ		vowel diacritic	used with یٖـ					U+0656: ARABIC SUBSCRIPT ALEF​	🗸
إ	dc	Ɨ	u'	ɨ		ạ̄ɨ		initial vowel		\u{627}\u{655}	أ ـأ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	🗸
ٕ		Ɨ	u'		i	ɨ		medial/final vowel						U+0655: ARABIC HAMZA BELOW​	🗸
اٟ	s	Ɨː	ū'	ɨː		ạ̄ɨ̄		initial vowel						U+0627 U+065F: ARABIC LETTER ALEF, WAVY HAMZA BELOW	
ٟ		Ɨː	ū'		i	ɨ̄		medial/final vowel						U+065F: ARABIC WAVY HAMZA BELOW​	🗸
ٳ	xp	Ɨː	ū'			ɨ̸̄		precomposed vowel	deprecated	\u{627}\u{65F}				U+0673: ARABIC LETTER ALEF WITH WAVY HAMZA BELOW	🗸
اُ	s	u	u			ạ̄u		initial vowel						U+0627 U+064F: ARABIC LETTER ALEF, DAMMA	
ُ		u	u		u	u		medial/final vowel						U+064F: ARABIC DAMMA​	🗸
اوٗ	s	uː	ū	uː		ạ̄w˔		initial vowel						U+0627 U+0648 U+0657: ARABIC LETTER ALEF, LETTER WAW, INVERTED DAMMA	
وٗ	s	uː	ū	ū	u	w˔		medial/final vowel						U+0648 U+0657: ARABIC LETTER WAW, INVERTED DAMMA	
ٗ	o					˔		vowel diacritic	used with وٗ					U+0657: ARABIC INVERTED DAMMA​	🗸
															
اێ	s	e	e			ạ̄e		initial vowel						U+0627 U+06CE: ARABIC LETTER ALEF, LETTER YEH WITH SMALL V	
یٚ	s	e	e		e¶			medial vowel			یٚ یٚیٚیٚ			U+06CC U+065A: ARABIC LETTER FARSI YEH, VOWEL SIGN SMALL V ABOVE	
ٚے	s	e	e			ᵉē		final vowel						U+065A U+06D2: ARABIC VOWEL SIGN SMALL V ABOVE, LETTER YEH BARREE​	
ٚ			e	ᵉ		ᵉ		vowel diacritic						U+065A: ARABIC VOWEL SIGN SMALL V ABOVE​	🗸
ای	s	eː	ē	eː ē		ạ̄y		initial vowel						U+0627 U+06CC: ARABIC LETTER ALEF, LETTER FARSI YEH	
ے		eː	ē y		e	ē		final vowel			ے ـے	یے	jeː	U+06D2: ARABIC LETTER YEH BARREE	🗸
اۆ	s	o	o			ạ̄o		initial vowel						U+0627 U+06C6: ARABIC LETTER ALEF, LETTER OE	
وٚ	s	o	o		o	wᵉ		vowel			ۆ ـۆ			U+0648 U+065A: ARABIC LETTER WAW, VOWEL SIGN SMALL V ABOVE	
او	s	oː	ō	oː		ạ̄w		initial vowel						U+0627 U+0648: ARABIC LETTER ALEF, LETTER WAW	
															
اۄ	s	ɔ	ɔ	ɔ		ạ̄ɔ		initial vowel						U+0627 U+06C4: ARABIC LETTER ALEF, LETTER WAW WITH RING	
ۄ		ɔ	ɔ		o	ɔ		medial/final vowel			ۄ ـۄ			U+06C4: ARABIC LETTER WAW WITH RING	🗸
ۄآ	s	ɔː	ɔ̄	ɔː ɔ̄	o	ɔã		final vowel						U+06C4 U+0622: ARABIC LETTER WAW WITH RING, LETTER ALEF WITH MADDA ABOVE	
															
															
أ	dc	Ə	ạ	ə ạ		ə		initial vowel		\u{627}\u{654}	أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	🗸
ٔ		Ə	ạ		e	ᵊ		medial/final vowel						U+0654: ARABIC HAMZA ABOVE​	🗸
ٲ	f	Əː	ạ̄	əː ạ̄ ə̄	e	ə̄		initial/medial/final vowel						U+0672: ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE	🗸
ؤ	dc	wə			w	u͑		precomposed CV sequence		\u{648}\u{654}	ؤ ـؤ			U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	🗸
ۓ	dc	?			e	ɛ͑		precomposed CV sequence		\u{6D2}\u{654}	ۓ ـۓ			U+06D3: ARABIC LETTER YEH BARREE WITH HAMZA ABOVE	🗸
ۂ	dc	hə				h͑		precomposed CV sequence		\u{6C1}\u{654}	ۂ ـۂ			U+06C2: ARABIC LETTER HEH GOAL WITH HAMZA ABOVE	🗸
															
اَ	s	a	a			ạ̄a		initial vowel						U+0627 U+064E: ARABIC LETTER ALEF, FATHA	
َ		a	a		a	a		medial/final vowel						U+064E: ARABIC FATHA​	🗸
ا		aː ∅	ā		A	ạ̄		medial/final vowel			ا ـا			U+0627: ARABIC LETTER ALEF	🗸
آ	dc	aː	ā	aː ā	A	ã		initial vowel		\u0627\u0653	آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	🗸
ٓ	o				[	˜		vowel diacritic	used in decomposed text with آ					U+0653: ARABIC MADDAH ABOVE​	🗸
															
ع		ʔ ∅	ʿ	ʿ ʔ	}	ʔ		plosive			ع ععع	عٲن	'əːn	U+0639: ARABIC LETTER AIN	🗸
															
															
															
															
ࢡ						b͇		Fulfulde character	do not use !	بٔ				U+08A1: ARABIC LETTER BEH WITH HAMZA ABOVE	🗸
ݬ						r͇		Ormuri character	do not use !	رٔ				U+076C: ARABIC LETTER REH WITH HAMZA ABOVE	🗸
ځ						ħ͇		Pashto character	do not use !	حٔ				U+0681: ARABIC LETTER HAH WITH HAMZA ABOVE	🗸
ۆ						o͇		vowel for Uighur, Kurdish, Kazakh, Azerbaijani, Bosnian	do not use !	وٚ				U+06C6: ARABIC LETTER OE	🗸
ێ						e͇		vowel for Kurdish	do not use !	یٚ				U+06CE: ARABIC LETTER YEH WITH SMALL V	🗸
															
															
															
															
															
															
															
															
															
ْ	i				*	͓		vowel killer						U+0652: ARABIC SUKUN​	🗸
															
															
ّ	i				&	˖		gemination marker	infrequent					U+0651: ARABIC SHADDA​	🗸
															
															
۔			.		.	.		full stop						U+06D4: ARABIC FULL STOP	🗸
.			.		.	.		full stop						U+002E: FULL STOP	🗸
،			,		,	,		comma						U+060C: ARABIC COMMA	🗸
:			:		:	:		colon						U+003A: COLON	🗸
؛			;		;	;		semicolon						U+061B: ARABIC SEMICOLON	🗸
!			!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	
؟			?		?	?		question mark						U+061F: ARABIC QUESTION MARK	🗸
															
															
…			…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS	🗸
															
															
															
«			“		<	«		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
»			”		>	»		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
‹			‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	🗸
›			’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	🗸
“			“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	🗸
”			”		>	”		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	🗸
‘			‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	🗸
’			’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	🗸
															
															
															
(			(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	🗸
[			[		(	[		bracket						U+005B: LEFT SQUARE BRACKET	
)			)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	🗸
]			]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET	
															
															
-			-		-	-		hyphen						U+2010: HYPHEN	
‑			‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–			–		-	–		en dash						U+2013: EN DASH	🗸
—			—		-	—		em dash						U+2014: EM DASH	🗸
															
															
															
ـ			_		_	_		baseline extender							🗸
															
															
ʼ			ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§			§			§		section sign						U+00A7: SECTION SIGN	
†			†			†		dagger						U+2020: DAGGER	
‡			‡			‡		double dagger						U+2021: DOUBLE DAGGER	
′			′			′		prime						U+2032: PRIME	
″			″			″		double prime						U+2033: DOUBLE PRIME	
															
															
															
															
															
															
\u200B					]	␣		zero-width space						U+200B: ZERO WIDTH SPACE	
\u200C					=	ₓ		zwnj						U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊		zwj						U+200D: ZERO WIDTH JOINER	
\u2067					=	ʳˡⁱ		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					=	ˡʳⁱ		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068					=	ᶠˢⁱ		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069					=	ᵖᵈⁱ		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B					=	ʳˡᵉ		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					=	ˡʳᵉ		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C					=	ᵖᵈᶠ		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F					=	ʳˡᵐ		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E					=	ˡʳᵐ		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F					=	ᶜᵍʲ		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
\u061C					=	ᵃˡᵐ		arabic letter mark						U+061C: ARABIC LETTER MARK	
															
															
															
															
۰			0		0	0		digit						U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	🗸
۱			1		1	1		digit						U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	🗸
۲			2		2	2		digit						U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	🗸
۳			3		3	3		digit						U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	🗸
۴			4		4	4		digit						U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	🗸
۵			5		5	5		digit						U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	🗸
۶			6		6	6		digit						U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	🗸
۷			7		7	7		digit						U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	🗸
۸			8		8	8		digit						U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	🗸
۹			9		9	9		digit						U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	🗸
															
															
					#	‛		thousands separator							
					#	·		decimal separator							
					#	/		date separator							
₹					#	¤		currency symbol	infrequent					U+20B9: INDIAN RUPEE SIGN	
					#	¢									
					#	#		number symbol							
					#	¼		quarter							
					#	½		half							
					#	¾		three-quarters							
					#	{10} etc		extended number							
															
															
															
٪					%	%		percentage mark						U+066A: ARABIC PERCENT SIGN	🗸
‰					%	‰		per mille mark						U+2030: PER MILLE SIGN	🗸
															
															
															
															
															
															
															
ي	-					y̶		non-native letter	incorrect usage					U+064A: ARABIC LETTER YEH	🗸
ئ	-					y̶͑		non-native letter	incorrect usage					U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	🗸
ك	-					k̸		non-native letter	incorrect usage					U+0643: ARABIC LETTER KAF	🗸
ٮ	-					b̸		non-native letter	incorrect usage					U+066E: ARABIC LETTER DOTLESS BEH	🗸
۪	-					˳		non-native diacritic	incorrect usage					U+06EA: ARABIC EMPTY CENTRE LOW STOP​	🗸




`



latinPanel = 'ʿ ̃ ạ ạ̄ aː ā ɖ ḍ ʤ d͡ʒ ᵉ eː ē ə əː ə̄ ɡ g͟h ʰ ḥ iː ī ɨ ɨː ʲ kʰ k͟h oː ɔ ɔː ɔ̄ pʰ ṛ ɽ ʃ ś s̱ ṣ ʈ ṭ t͡s ʧ t͡ʃ tʰ ʈʰ t͡sʰ ʦʰ t͡ʃʰ ʧʰ ṯ uː ū ẏ ẕ z̤ ẓ ʔ'



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc":6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

"equiv": 10,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"transckey": 0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 11,

"nnameLoc": 12,
"nameLoc": 13,
"numLoc": 0,
"ucsName": 14,
"block": 15,

"othertranscriptions": [[3, 'LOC']]
}
