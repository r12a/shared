var spreadsheet = `
ا		ɒː æ e o ∅	ā a o e	ɒː æ ∅	A	ɑ		vowel carrier/vowel		ا ـا	الف	ʾalef	U+0627: ARABIC LETTER ALEF	arabic
آ		ɒː	ā	ā	A	ɑ̄		glottal stop		آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	arabic
ء		ʔ	’	ʔ	}	ʔ		glottal stop		ء	همزه	hamza	U+0621: ARABIC LETTER HAMZA	arabic
أ		ʔ	’		A	ɑ͑		glottal stop		أ ـأ	همزه	hamza	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	arabic
یٔ	s	ʔ	’		y	yʿ		glottal stop		ئ ئئئ	همزه	hamza	U+06CC U+0654: ARABIC LETTER FARSI YEH, HAMZA ABOVE	
ئ		ʔ	’			y͑		glottal stop	incorrect character	ئ ئئئ	همزه	hamza	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	arabic
ؤ		ʔ	’		w	w͑		glottal stop		ؤ ـؤ	همزه	hamza	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	arabic
														
پ		p	p		p	p		stop		پ پپپ	پِ	pe	U+067E: ARABIC LETTER PEH	arabic
ب		b	b		b	b		stop		ب ببب	بِ	be	U+0628: ARABIC LETTER BEH	arabic
ت		t	t		t	t		stop		ت تتت	تِ	te	U+062A: ARABIC LETTER TEH	arabic
د		d	d		d	d		stop		د ـد	دال	dāl	U+062F: ARABIC LETTER DAL	arabic
ط		t	t		T	t̂		stop		ط ططط	طی	ṭā	U+0637: ARABIC LETTER TAH	arabic
ک		k	k		k	k		stop		ک ککک	کاف	kāf	U+06A9: ARABIC LETTER KEHEH	arabic
گ		g	g		g¶	g		stop		گ گگگ	گاف	ɡāf	U+06AF: ARABIC LETTER GAF	arabic
ق		q ɢ	q	ɢ	q	q		stop		ق ققق	قاف	qāf	U+0642: ARABIC LETTER QAF	arabic
														
چ		t͡ʃ	č	t͡ʃ č	c	ʧ		affricate		چ چچچ	چِ	če	U+0686: ARABIC LETTER TCHEH	arabic
ج		d͡ʒ	j	d͡ʒ	j	ʤ		affricate		ج ججج	جیم	jim	U+062C: ARABIC LETTER JEEM	arabic
														
ف		f	f		f	f		fricative		ف ففف	فِ	fe	U+0641: ARABIC LETTER FEH	arabic
و		v u o ow	v u		v	v		fricative/mater lectionis		و ـو	واو	vāv	U+0648: ARABIC LETTER WAW	arabic
س		s	s		s¶	s		fricative		س سسس	سین	sin	U+0633: ARABIC LETTER SEEN	arabic
ث		s	s		s	ṡ		fricative		ث ثثث	ثِ	se	U+062B: ARABIC LETTER THEH	arabic
ص		s	s		S	ŝ		fricative		ص صصص	صاد	sād	U+0635: ARABIC LETTER SAD	arabic
ذ		z	z		z	ż		fricative		ذ ـذ	ذال	zāl	U+0630: ARABIC LETTER THAL	arabic
ز		z	z		z¶	z		fricative		ز ـز	زِ	ze	U+0632: ARABIC LETTER ZAIN	arabic
ض		z	z		Z	ẑ		fricative		ض ضضض	ضاد	zād	U+0636: ARABIC LETTER DAD	arabic
ظ		z	z		Z	ž		consonant		ظ ظظظ	ظی	ẓā	U+0638: ARABIC LETTER ZAH	arabic
ش		ʃ	š	ʃ	s	ʃ		fricative		ش ششش	شین	šin	U+0634: ARABIC LETTER SHEEN	arabic
ژ		ʒ	ž	ʒ	z	ʒ		fricative		ژ ـژ	ژِ	že	U+0698: ARABIC LETTER JEH	arabic
خ		x	x		x	x		fricative		خ خخخ	خِ	xe	U+062E: ARABIC LETTER KHAH	arabic
ع		ʔ ∅	a ’		{	ʔ̇		fricative		ع ععع	عین	ʿeyn	U+0639: ARABIC LETTER AIN	arabic
ه		h e	h e	ɛ	h¶	h		fricative		ه ههه	هِ	he do-češm	U+0647: ARABIC LETTER HEH	arabic
ح		h	h		h	ħ		fricative		ح ححح	حِ	he	U+062D: ARABIC LETTER HAH	arabic
														
م		m	m		m	m		nasal		م ممم	میم	mim	U+0645: ARABIC LETTER MEEM	arabic
ن		n	n		n	n		nasal		ن ننن	نون	nun	U+0646: ARABIC LETTER NOON	arabic
														
ر		r	r		r	r		trill		ر ـر	رِ	re	U+0631: ARABIC LETTER REH	arabic
ل		l	l		l	l		lateral		ل للل	لام	lām	U+0644: ARABIC LETTER LAM	arabic
ی		j iː	y i		y¶	y		approximant/mater lectionis		ی ییی	یِ	ye	U+06CC: ARABIC LETTER FARSI YEH	arabic
														
غ		ɢ ɣ	ġ	ɣ	g	ɣ		consonant		ع ععع	غین	ġeyn	U+063A: ARABIC LETTER GHAIN	arabic
														
														
														
ِ		e			i	i		vowel			زیر	zir	U+0650: ARABIC KASRA​	arabic
ُ		o			u	u		vowel			پیش	piš	U+064F: ARABIC DAMMA​	arabic
َ		æ		æ	a	a		vowel			زِبَر	zebar	U+064E: ARABIC FATHA​	arabic
														
ً		an			a	aⁿ		vowel			تنوین نصب	tanvin e nasb	U+064B: ARABIC FATHATAN​	arabic
ٔ		ʔ			[	ʿ		hamza					U+0654: ARABIC HAMZA ABOVE​	arabic
														
														
ة		h - ɛ æ			t	ẗ		consonant+vowel		ة ـة			U+0629: ARABIC LETTER TEH MARBUTA	arabic
إ	dc	ʔi			A	ɑ̂		consonant+vowel	non-native	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	arabic
ى		ɑː			A	â		vowel	non-native	ى ـى			U+0649: ARABIC LETTER ALEF MAKSURA	arabic
ي		j iː			Y	ŷ		consonant+vowel	non-native	ي ييي			U+064A: ARABIC LETTER YEH	arabic
ك		k			K	k̂		consonant	non-native	ك ككك			U+0643: ARABIC LETTER KAF	arabic
ڤ		β						fricative	archaic				U+06A4: ARABIC LETTER VEH	arabic
ٌ		un			u	uⁿ		vowel			تنوین رفع	tanvin e rafe	U+064C: ARABIC DAMMATAN​	arabic
ٍ		in			i	iⁿ		vowel			تنوین جرّ	tanvin e jarr	U+064D: ARABIC KASRATAN​	arabic
ْ					*	͓		vowel absence marker			سکون	sokun	U+0652: ARABIC SUKUN​	arabic
ٕ		ʔ			[	˓		hamza					U+0655: ARABIC HAMZA BELOW​	arabic
														
														
														
														
														
														
﷼					#	¤		currency sign	infrequent				U+FDFC: RIAL SIGN	
														
														
														
لا	-					lɑ		ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ	-					lɑ̄		ligature					U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ	-					lɑ͑		ligature					U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ	-					lɑ̜		ligature					U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
														
														
														
														
ٔ					}	ʿ		hamza					U+0654: ARABIC HAMZA ABOVE​	arabic
ٕ					}	˓		hamza					U+0655: ARABIC HAMZA BELOW​	arabic
ٓ	o				}	~		maddah diacritic	used with ا				U+0653: ARABIC MADDAH ABOVE​	arabic
٭					[	*		punctuation	infrequent				U+066D: ARABIC FIVE POINTED STAR	arabic
														
														
														
ْ					*	͓		vowel absence marker			سُكُون	sukūn	U+0652: ARABIC SUKUN​	arabic
														
														
ّ						˖		gemination mark			تشدید	tašdid	U+0651: ARABIC SHADDA​	
														
														
														
.			.		.	.		full stop					U+002E: FULL STOP	arabic
۔			.		.	.		full stop	infrequent				U+06D4: ARABIC FULL STOP	arabic
،			,		,	,		comma					U+060C: ARABIC COMMA	arabic
:			:		:	:		colon					U+003A: COLON	arabic
؛					;	;		semicolon					U+061B: ARABIC SEMICOLON	arabic
!			!		!	!		exclamation mark					U+0021: EXCLAMATION MARK	arabic
؟			?		?	?		question mark					U+061F: ARABIC QUESTION MARK	arabic
														
														
…			…		.	…		ellipsis					U+2026: HORIZONTAL ELLIPSIS	arabic
														
														
														
«			“		<	«		quotation mark			گیومه		U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
»			”		>	»		quotation mark			گیومه		U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
‹			‘		<	‹		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	arabic
›			’		>	›		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	arabic
“			“		<	 “		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	arabic
”			”		>	”		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	arabic
‘			‘		<	‘		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	arabic
’			’		>	’		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	arabic
														
														
														
(			(		(	(		parenthesis					U+0028: LEFT PARENTHESIS	arabic
[			[		(	[		bracket					U+005B: LEFT SQUARE BRACKET	arabic
)			)		)	)		parenthesis					U+0029: RIGHT PARENTHESIS	arabic
]			]		)	]		bracket					U+005D: RIGHT SQUARE BRACKET	arabic
														
														
-			-		-	-		hyphen					U+2010: HYPHEN	arabic
‑			‑		-	‑		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	arabic
–			–		-	–		en dash					U+2013: EN DASH	arabic
—			—		-	—		em dash					U+2014: EM DASH	arabic
														
														
ـ					_	_		baseline extender	infrequent				U+0640: ARABIC TATWEEL	arabic
														
														
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
														
														
														
														
۰			0		±	0̣		digit			صِفر	sefr	U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	
۱			1		±	1̣		digit			یِک	yek	U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	
۲			2		±	2̣		digit			دُو	do	U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	
۳			3		±	3̣		digit			سِه	se	U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	
۴			4		±	4̣		digit			چَهَار	čahār	U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	
۵			5		±	5̣		digit			پَنج	panj	U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	
۶			6		±	6̣		digit			شِش	šeš	U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	
۷			7		±	7̣		digit			هَفت	haft	U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	
۸			8		±	8̣		digit			هَشت	hašt	U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	
۹			9		±	9̣		digit			نُه	noh	U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	
														
														
٬					#	‛		thousands separator					U+066C: ARABIC THOUSANDS SEPARATOR	arabic
٫					#	·		decimal separator					U+066B: ARABIC DECIMAL SEPARATOR	arabic
؍					#	/		date separator	infrequent				U+060D: ARABIC DATE SEPARATOR	arabic
														
														
														
٪					%	٪		percent sign					U+066A: ARABIC PERCENT SIGN	arabic
؉					%	؉		per mille sign					U+0609 ARABIC-INDIC PER MILLE SIGN	arabic
%					%	%		percentage mark					U+0025: PERCENT SIGN	arabic
‰					%	‰		per mille sign					U+2030: PER MILLE SIGN	arabic


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
"transckey": 0,

"othertranscriptions": [[3, 'UN']]
}
