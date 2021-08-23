var spreadsheet = `
ا		ɒː æ e o ∅	ā a o e	ɒː æ ∅	A	ɑ	h	vowel carrier/vowel		ا ـا	الف	ʾalef	U+0627: ARABIC LETTER ALEF	🗸
آ		ɒː	ā	ā	A	ɑ̄	H	glottal stop		آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	🗸
														
ء		ʔ	’	ʔ	}	ʔ	M	glottal stop		ء	همزه	hamza	U+0621: ARABIC LETTER HAMZA	🗸
أ		ʔ	’		A	ɑ͑	G	glottal stop	rare	أ ـأ	همزه	hamza	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	🗸
یٔ	s	ʔ	’		y	yʿ		glottal stop		ئ ئئئ	همزه	hamza	U+06CC U+0654: ARABIC LETTER FARSI YEH, HAMZA ABOVE	
ئ		ʔ	’		Y	y͑	S	glottal stop	incorrect character	ئ ئئئ	همزه	hamza	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	🗸
ي		j iː			Y	ŷ	D	consonant+vowel	non-native	ي ييي			U+064A: ARABIC LETTER YEH	🗸
ؤ		ʔ	’		w	w͑	A	glottal stop		ؤ ـؤ	همزه	hamza	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	🗸
														
پ		p	p		p	p	m	stop		پ پپپ	پِ	pe	U+067E: ARABIC LETTER PEH	🗸
ب		b	b		b	b	f	stop		ب ببب	بِ	be	U+0628: ARABIC LETTER BEH	🗸
ت		t	t		t	t	j	stop		ت تتت	تِ	te	U+062A: ARABIC LETTER TEH	🗸
د		d	d		d	d	n	stop		د ـد	دال	dāl	U+062F: ARABIC LETTER DAL	🗸
ط		t	t		T	t̂	x	stop		ط ططط	طی	ṭā	U+0637: ARABIC LETTER TAH	🗸
ک		k	k		k	k	;	stop		ک ککک	کاف	kāf	U+06A9: ARABIC LETTER KEHEH	🗸
گ		g	g		g¶	g	'	stop		گ گگگ	گاف	ɡāf	U+06AF: ARABIC LETTER GAF	🗸
ق		q ɢ	q	ɢ	q	q	r	stop		ق ققق	قاف	qāf	U+0642: ARABIC LETTER QAF	🗸
														
چ		t͡ʃ	č	t͡ʃ č	c	ʧ	]	affricate		چ چچچ	چِ	če	U+0686: ARABIC LETTER TCHEH	🗸
ج		d͡ʒ	j	d͡ʒ	j	ʤ	[	affricate		ج ججج	جیم	jim	U+062C: ARABIC LETTER JEEM	🗸
														
ف		f	f		f	f	t	fricative		ف ففف	فِ	fe	U+0641: ARABIC LETTER FEH	🗸
و		v u o ow	v u		v	v	,	fricative/mater lectionis		و ـو	واو	vāv	U+0648: ARABIC LETTER WAW	🗸
س		s	s		s¶	s	s	fricative		س سسس	سین	sin	U+0633: ARABIC LETTER SEEN	🗸
ث		s	s		s	ṡ	e	fricative		ث ثثث	ثِ	se	U+062B: ARABIC LETTER THEH	🗸
ص		s	s		S	ŝ	w	fricative		ص صصص	صاد	sād	U+0635: ARABIC LETTER SAD	🗸
ذ		z	z		z	ż	b	fricative		ذ ـذ	ذال	zāl	U+0630: ARABIC LETTER THAL	🗸
ز		z	z		z¶	z	c	fricative		ز ـز	زِ	ze	U+0632: ARABIC LETTER ZAIN	🗸
ض		z	z		Z	ẑ	q	fricative		ض ضضض	ضاد	zād	U+0636: ARABIC LETTER DAD	🗸
ظ		z	z		Z	ž	z	consonant		ظ ظظظ	ظی	ẓā	U+0638: ARABIC LETTER ZAH	🗸
ش		ʃ	š	ʃ	s	ʃ	a	fricative		ش ششش	شین	šin	U+0634: ARABIC LETTER SHEEN	🗸
ژ		ʒ	ž	ʒ	z	ʒ	C	fricative		ژ ـژ	ژِ	že	U+0698: ARABIC LETTER JEH	🗸
خ		x	x		x	x	o	fricative		خ خخخ	خِ	xe	U+062E: ARABIC LETTER KHAH	🗸
ع		ʔ ∅	a ’		{	ʔ̇	u	fricative		ع ععع	عین	ʿeyn	U+0639: ARABIC LETTER AIN	🗸
ه		h e	h e	ɛ	h¶	h	i	fricative		ه ههه	هِ	he do-češm	U+0647: ARABIC LETTER HEH	🗸
ح		h	h		h	ħ	p	fricative		ح ححح	حِ	he	U+062D: ARABIC LETTER HAH	🗸
														
م		m	m		m	m	l	nasal		م ممم	میم	mim	U+0645: ARABIC LETTER MEEM	🗸
ن		n	n		n	n	k	nasal		ن ننن	نون	nun	U+0646: ARABIC LETTER NOON	🗸
														
ر		r	r		r	r	v	trill		ر ـر	رِ	re	U+0631: ARABIC LETTER REH	🗸
ل		l	l		l	l	g	lateral		ل للل	لام	lām	U+0644: ARABIC LETTER LAM	🗸
ی		j iː	y i	iː	y¶	y	d	approximant/mater lectionis		ی ییی	یِ	ye	U+06CC: ARABIC LETTER FARSI YEH	🗸
														
غ		ɢ ɣ	ġ	ɣ	g	ɣ	y	consonant		ع ععع	غین	ġeyn	U+063A: ARABIC LETTER GHAIN	🗸
														
														
														
ِ		e			i	i	Y	vowel			زیر	zir	U+0650: ARABIC KASRA​	🗸
ُ		o			u	u	T	vowel			پیش	piš	U+064F: ARABIC DAMMA​	🗸
َ		æ		æ	a	a	U	vowel			زِبَر	zebar	U+064E: ARABIC FATHA​	🗸
														
ً		an			a	aⁿ	R	vowel			تنوین نصب	tanvin e nasb	U+064B: ARABIC FATHATAN​	🗸
ٔ		ʔ			[	ʿ	N	hamza					U+0654: ARABIC HAMZA ABOVE​	🗸
ٓ	o				}	~	X	maddah diacritic	used with ا				U+0653: ARABIC MADDAH ABOVE​	🗸
														
														
ة		h - ɛ æ			t	ẗ	J	consonant+vowel	infrequent	ة ـة			U+0629: ARABIC LETTER TEH MARBUTA	🗸
إ	dc	ʔi			A	ɑ̂	F	consonant+vowel	non-native	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	🗸
ى		ɑː		ɑː	A	â		vowel	non-native	ى ـى			U+0649: ARABIC LETTER ALEF MAKSURA	🗸
ك		k			K	k̂	Z	consonant	non-native	ك ككك			U+0643: ARABIC LETTER KAF	🗸
ڤ		β		β				fricative	archaic				U+06A4: ARABIC LETTER VEH	🗸
ٌ		un			u	uⁿ	W	vowel			تنوین رفع	tanvin e rafe	U+064C: ARABIC DAMMATAN​	🗸
ٍ		in			i	iⁿ	E	vowel			تنوین جرّ	tanvin e jarr	U+064D: ARABIC KASRATAN​	🗸
ْ					*	͓	Q	vowel absence marker			سکون	sokun	U+0652: ARABIC SUKUN​	🗸
ٕ		ʔ			[	˓		hamza					U+0655: ARABIC HAMZA BELOW​	🗸
														
														
														
														
														
														
﷼					#	¤	$	currency sign	infrequent				U+FDFC: RIAL SIGN	
														
														
														
لا	-					lɑ		ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ	-					lɑ̄		ligature					U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ	-					lɑ͑		ligature					U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ	-					lɑ̜		ligature					U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
														
														
														
														
ٕ					}	˓		hamza	not used				U+0655: ARABIC HAMZA BELOW​	🗸
٭					[	*		punctuation	infrequent				U+066D: ARABIC FIVE POINTED STAR	🗸
														
														
														
ْ					*	͓		vowel absence marker			سُكُون	sukūn	U+0652: ARABIC SUKUN​	🗸
														
														
ّ						˖	I	gemination mark			تشدید	tašdid	U+0651: ARABIC SHADDA​	🗸
														
														
														
.			.		.	.		full stop					U+002E: FULL STOP	🗸
۔			.		.	.		full stop	infrequent				U+06D4: ARABIC FULL STOP	🗸
،			,		,	,	&	comma					U+060C: ARABIC COMMA	🗸
:			:		:	:		colon					U+003A: COLON	🗸
؛					;	;	"	semicolon					U+061B: ARABIC SEMICOLON	🗸
!			!		!	!		exclamation mark					U+0021: EXCLAMATION MARK	
؟			?		?	?	/	question mark					U+061F: ARABIC QUESTION MARK	🗸
														
														
…			…		.	…		ellipsis					U+2026: HORIZONTAL ELLIPSIS	🗸
														
														
														
«			“		<	«	K	quotation mark			گیومه		U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
»			”		>	»	L	quotation mark			گیومه		U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
‹			‘		<	‹		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	🗸
›			’		>	›		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	🗸
“			“		<	 “		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	🗸
”			”		>	”		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	🗸
‘			‘		<	‘		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	🗸
’			’		>	’		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	🗸
														
														
														
(			(		(	(	)	parenthesis					U+0028: LEFT PARENTHESIS	🗸
[			[		(	[	P	bracket					U+005B: LEFT SQUARE BRACKET	
)			)		)	)	(	parenthesis					U+0029: RIGHT PARENTHESIS	🗸
]			]		)	]	O	bracket					U+005D: RIGHT SQUARE BRACKET	
{			{			{	}	bracket					U+007B: LEFT CURLY BRACKET	
}			}			}	{	bracket					U+007D: RIGHT CURLY BRACKET	
														
														
-			-		-	-		hyphen					U+2010: HYPHEN	
‑			‑		-	‑		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	
–			–		-	–		en dash					U+2013: EN DASH	🗸
—			—		-	—		em dash					U+2014: EM DASH	🗸
														
														
ـ					_	_		baseline extender	infrequent				U+0640: ARABIC TATWEEL	🗸
														
														
ʼ			ʼ			ʼ		apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE	
§			§			§		section sign					U+00A7: SECTION SIGN	
†			†			†		dagger					U+2020: DAGGER	
‡			‡			‡		double dagger					U+2021: DOUBLE DAGGER	
′			′			′		prime					U+2032: PRIME	
″			″			″		double prime					U+2033: DOUBLE PRIME	
														
														
														
														
														
														
\u200C					=	ₓ		zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊		zero-width joiner					U+200D: ZERO WIDTH JOINER	
\u2067					=	ʳˡⁱ		rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					=	ˡʳⁱ		ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068					=	ᶠˢⁱ		first-strong isolate					U+2068: FIRST STRONG ISOLATE	
\u2069					=	ᵖᵈⁱ		pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	
\u202B					=	ʳˡᵉ		rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					=	ˡʳᵉ		ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C					=	ᵖᵈᶠ		pop direction					U+202C: POP DIRECTIONAL FORMATTING	
\u200F					=	ʳˡᵐ		rtl mark					U+200F: RIGHT-TO-LEFT MARK	
\u200E					=	ˡʳᵐ		ltr mark					U+200E: LEFT-TO-RIGHT MARK	
\u034F					=	ᶜᵍʲ		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	
\u061C					=	ᵃˡᵐ		arabic letter mark					U+061C: ARABIC LETTER MARK	
														
														
														
														
۰			0		±	0̣	0	digit			صِفر	sefr	U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	🗸
۱			1		±	1̣	1	digit			یِک	yek	U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	🗸
۲			2		±	2̣	2	digit			دُو	do	U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	🗸
۳			3		±	3̣	3	digit			سِه	se	U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	🗸
۴			4		±	4̣	4	digit			چَهَار	čahār	U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	🗸
۵			5		±	5̣	5	digit			پَنج	panj	U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	🗸
۶			6		±	6̣	6	digit			شِش	šeš	U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	🗸
۷			7		±	7̣	7	digit			هَفت	haft	U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	🗸
۸			8		±	8̣	8	digit			هَشت	hašt	U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	🗸
۹			9		±	9̣	9	digit			نُه	noh	U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	🗸
														
														
٬					#	‛	@	thousands separator					U+066C: ARABIC THOUSANDS SEPARATOR	🗸
٫					#	·	#	decimal separator					U+066B: ARABIC DECIMAL SEPARATOR	🗸
؍					#	/		date separator	infrequent				U+060D: ARABIC DATE SEPARATOR	🗸
														
														
														
٪					%	٪	%	percent sign					U+066A: ARABIC PERCENT SIGN	🗸
؉					%	؉		per mille sign					U+0609 ARABIC-INDIC PER MILLE SIGN	🗸
%					%	%		percentage mark					U+0025: PERCENT SIGN	🗸
‰					%	‰		per mille sign					U+2030: PER MILLE SIGN	🗸
														
														
														
ٰ						–	V						U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	🗸														




`

var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 10,
"numLoc": 0,

"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 14,

"othertranscriptions": [[3, 'UN']]
}
