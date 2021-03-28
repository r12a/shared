var spreadsheet = `
ء		ʔ	ʔ	}	’			glottal stop		ء	همزه	hamza	U+0621: ARABIC LETTER HAMZA	
ا		ʔ ɔ æ -	ɑ	A	ā a o e			vowel carrier/vowel		ا ـا	الف	ʾalef	U+0627: ARABIC LETTER ALEF	
أ		x	ɑ͑	A	’			glottal stop		أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	
آ		x	ɑ̄	A	ā			glottal stop		آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	
ئ		ʔ	y͑	y	’			glottal stop		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	
														
پ		p	p	p	p			stop		پ پپپ	پِ	pe	U+067E: ARABIC LETTER PEH	
ب		b	b	b	b			stop		ب ببب	بِ	be	U+0628: ARABIC LETTER BEH	
ت		t	t	t	t			stop		ت تتت	تِ	te	U+062A: ARABIC LETTER TEH	
د		d	d	d	d			stop		د ـد	دال	dāl	U+062F: ARABIC LETTER DAL	
ط		t	t̂	T	t			pharyngealised stop		ط ططط	طی	ṭā	U+0637: ARABIC LETTER TAH	
ک		k	k	k	k			stop		ک ککک	کاف	kāf	U+06A9: ARABIC LETTER KEHEH	
گ		g	g	g¶	g			stop		گ گگگ	گاف	ɡāf	U+06AF: ARABIC LETTER GAF	
ق		q ɢ	q	q	q			stop		ق ققق	قاف	qāf	U+0642: ARABIC LETTER QAF	
														
چ		ʧ	č	c	č			affricate		چ چچچ	چِ	če	U+0686: ARABIC LETTER TCHEH	
ج		ʤ	ʤ	j	j			affricate		ج ججج	جیم	jim	U+062C: ARABIC LETTER JEEM	
														
ف		f	f	f	f			fricative		ف ففف	فِ	fe	U+0641: ARABIC LETTER FEH	
و		v u o ow -	v	v	v u			fricative/mater lectionis		و ـو	واو	vāv	U+0648: ARABIC LETTER WAW	
س		s	s	s¶	s			fricative		س سسس	سین	sin	U+0633: ARABIC LETTER SEEN	
ث		s̱	ṡ	s	s			fricative		ث ثثث	ثِ	se	U+062B: ARABIC LETTER THEH	
ص		s	ŝ	S	s			fricative		ص صصص	صاد	sād	U+0635: ARABIC LETTER SAD	
ذ		z	ż	z	z			fricative		ذ ـذ	ذال	zāl	U+0630: ARABIC LETTER THAL	
ز		z	z	z¶	z			fricative		ز ـز	زِ	ze	U+0632: ARABIC LETTER ZAIN	
ض		z	ẑ	Z	z			fricative		ض ضضض	ضاد	zād	U+0636: ARABIC LETTER DAD	
ظ		z	ž	Z	z			consonant		ظ ظظظ	ظی	ẓā	U+0638: ARABIC LETTER ZAH	
ش		ʃ	ʃ	s	š			fricative		ش ششش	شین	šin	U+0634: ARABIC LETTER SHEEN	
ژ		ʒ	ʒ	z	ž			fricative		ژ ـژ	ژِ	že	U+0698: ARABIC LETTER JEH	
خ		x	x	x	x			fricative		خ خخخ	خِ	xe	U+062E: ARABIC LETTER KHAH	
ع		ʔ -	ʔ̇	{	a ’			fricative		ع ععع	عین	ʿeyn	U+0639: ARABIC LETTER AIN	
ه		h - ɛ æ e	h	h¶	h e			fricative		ه ههه	هِ	he do-češm	U+0647: ARABIC LETTER HEH	
ة		h - ɛ æ	ẗ	t				consonant+vowel		ة ـة			U+0629: ARABIC LETTER TEH MARBUTA	
ح		h -	ħ	h	h			fricative		ح ححح	حِ	he	U+062D: ARABIC LETTER HAH	
														
م		m	m	m	m			nasal		م ممم	میم	mim	U+0645: ARABIC LETTER MEEM	
ن		n	n	n	n			nasal		ن ننن	نون	nun	U+0646: ARABIC LETTER NOON	
														
ؤ		ʔ	w͑	w	’			approximant		ؤ ـؤ			U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	
ر		r	r	r	r			trill		ر ـر	رِ	re	U+0631: ARABIC LETTER REH	
ل		l	l	l	l			lateral		ل للل	لام	lām	U+0644: ARABIC LETTER LAM	
ی		j i ɒː aj	y	y¶	y i			consonant+vowel		ی ییی	یِ	ye	U+06CC: ARABIC LETTER FARSI YEH	
														
غ		ɣ	ɣ	g	q check this			consonant		ع ععع	غین	ġeyn	U+063A: ARABIC LETTER GHAIN	
ۀ		ej	h͑	e	ye			vowel		ۀ ۀۀۀ		he ye	U+06C0: ARABIC LETTER HEH WITH YEH ABOVE	
														
														
َ		a	a	a				vowel			زِبَر	zebar	U+064E: ARABIC FATHA​	
ُ		u	u	u				vowel			پیش	piš	U+064F: ARABIC DAMMA​	
ِ		i	i	i				vowel			زیر	zir	U+0650: ARABIC KASRA​	
ً		an	aⁿ	a				vowel			تنوین نصب	tanvin e nasb	U+064B: ARABIC FATHATAN​	
ٌ		un	uⁿ	u				vowel			تنوین رفع	tanvin e rafe	U+064C: ARABIC DAMMATAN​	
ٍ		in	iⁿ	i				vowel			تنوین جرّ	tanvin e jarr	U+064D: ARABIC KASRATAN​	
ْ			͓	*				vowel absence marker			سکون	sokun	U+0652: ARABIC SUKUN​	
ٔ		ʔ	ʿ	[				hamza					U+0654: ARABIC HAMZA ABOVE​	
ٕ		ʔ	˓	[				hamza					U+0655: ARABIC HAMZA BELOW​	
														
														
														
														
														
إ	dc	ʔi	ɑ̂	A				consonant+vowel	non-native	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	
ى		ɑː	â	A				vowel	non-native	ى ـى			U+0649: ARABIC LETTER ALEF MAKSURA	
ي		j iː	ŷ	Y				consonant+vowel	non-native	ي ييي			U+064A: ARABIC LETTER YEH	
ك		k	k̂	K				consonant	non-native	ك ككك			U+0643: ARABIC LETTER KAF	
﷼			¤	#				currency sign	infrequent				U+FDFC: RIAL SIGN	
														
														
														
لا	-		lɑ					ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ	-		lɑ̄					ligature					U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ	-		lɑ͑					ligature					U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ	-		lɑ̜					ligature					U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
														
														
														
														
ٔ			ʿ	}				hamza					U+0654: ARABIC HAMZA ABOVE​	arabic
ٕ			˓	}				hamza					U+0655: ARABIC HAMZA BELOW​	arabic
ٓ	o		~	}				maddah diacritic	used with ا				U+0653: ARABIC MADDAH ABOVE​	arabic
٭			*	[				punctuation	infrequent				U+066D: ARABIC FIVE POINTED STAR	arabic
														
														
														
ْ			͓	*				vowel absence marker			سُكُون	sukūn	U+0652: ARABIC SUKUN​	arabic
														
														
ّ			˖					gemination mark			تشدید	tašdid	U+0651: ARABIC SHADDA​	
														
														
			»	@				opening head mark						
			«	@				closing head mark						
			›	@				2nd opening head						
			‹	@				2 closing head						
			§ᵃ	@				honorific						
			 §ᵇ	@				honorific						
			§ᶜ	@				honorific						
			°	@				extra						
														
														
.			.	.	.			full stop					U+002E: FULL STOP	arabic
۔			.	.	.			full stop	infrequent				U+06D4: ARABIC FULL STOP	arabic
،			,	,	,			comma					U+060C: ARABIC COMMA	arabic
:			:	:	:			colon					U+003A: COLON	arabic
؛			;	;				semicolon					U+061B: ARABIC SEMICOLON	arabic
!			!	!	!			exclamation mark					U+0021: EXCLAMATION MARK	arabic
؟			?	?	?			question mark					U+061F: ARABIC QUESTION MARK	arabic
														
														
…			…	.	…			ellipsis					U+2026: HORIZONTAL ELLIPSIS	arabic
														
														
														
«			«	<	“			quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
»			»	>	”			quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
‹			‹	<	‘			quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	arabic
›			›	>	’			quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	arabic
“			 “	<	“			quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	arabic
”			”	>	”			quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	arabic
‘			‘	<	‘			quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	arabic
’			’	>	’			quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	arabic
														
														
														
(			(	(	(			parenthesis					U+0028: LEFT PARENTHESIS	arabic
[			[	(	[			bracket					U+005B: LEFT SQUARE BRACKET	arabic
)			)	)	)			parenthesis					U+0029: RIGHT PARENTHESIS	arabic
]			]	)	]			bracket					U+005D: RIGHT SQUARE BRACKET	arabic
﴾			⁅	)				ornate parenthesis					U+FD3E: ORNATE LEFT PARENTHESIS	arabic
﴿			⁆	)				ornate parenthesis					U+FD3F: ORNATE RIGHT PARENTHESIS	arabic
														
														
-			-	-	-			hyphen					U+2010: HYPHEN	arabic
‑			‑	-	‑			non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	arabic
–			–	-	–			en dash					U+2013: EN DASH	arabic
—			—	-	—			em dash					U+2014: EM DASH	arabic
														
														
ـ			_	_				baseline extender	infrequent				U+0640: ARABIC TATWEEL	arabic
														
														
ʼ			ʼ		ʼ			apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE	
§			§		§			section sign					U+00A7: SECTION SIGN	
†			†		†			dagger					U+2020: DAGGER	
‡			‡		‡			double dagger					U+2021: DOUBLE DAGGER	
′			′		′			prime					U+2032: PRIME	
″			″		″			double prime					U+2033: DOUBLE PRIME	
														
														
														
														
														
														
\u200C			ₓ	=				zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER	
\u200D			₊	=				zero-width joiner					U+200D: ZERO WIDTH JOINER	
\u2067			ʳˡⁱ	=				rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066			ˡʳⁱ	=				ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068			ᶠˢⁱ	=				first-strong isolate					U+2068: FIRST STRONG ISOLATE	
\u2069			ᵖᵈⁱ	=				pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	
\u202B			ʳˡᵉ	=				rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A			ˡʳᵉ	=				ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C			ᵖᵈᶠ	=				pop direction					U+202C: POP DIRECTIONAL FORMATTING	
\u200F			ʳˡᵐ	=				rtl mark					U+200F: RIGHT-TO-LEFT MARK	
\u200E			ˡʳᵐ	=				ltr mark					U+200E: LEFT-TO-RIGHT MARK	
\u034F			ᶜᵍʲ	=				combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	
\u061C			ᵃˡᵐ	=				arabic letter mark					U+061C: ARABIC LETTER MARK	
														
														
														
														
۰			0̣	±	0			digit			صِفر	sefr	U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	
۱			1̣	±	1			digit			یِک	yek	U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	
۲			2̣	±	2			digit			دُو	do	U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	
۳			3̣	±	3			digit			سِه	se	U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	
۴			4̣	±	4			digit			چَهَار	čahār	U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	
۵			5̣	±	5			digit			پَنج	panj	U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	
۶			6̣	±	6			digit			شِش	šeš	U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	
۷			7̣	±	7			digit			هَفت	haft	U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	
۸			8̣	±	8			digit			هَشت	hašt	U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	
۹			9̣	±	9			digit			نُه	noh	U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	
														
														
٬			‛	#				thousands separator					U+066C: ARABIC THOUSANDS SEPARATOR	arabic
٫			·	#				decimal separator					U+066B: ARABIC DECIMAL SEPARATOR	arabic
؍			/	#				date separator	infrequent				U+060D: ARABIC DATE SEPARATOR	arabic
														
														
														
٪			٪	%				percent sign					U+066A: ARABIC PERCENT SIGN	arabic
؉			؉	%				per mille sign					U+0609 ARABIC-INDIC PER MILLE SIGN	arabic
%			%	%				percentage mark					U+0025: PERCENT SIGN	arabic
‰			‰	%				per mille sign					U+2030: PER MILLE SIGN	arabic



`

var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc": 3,
"key":4,
"transcription":5,
"kbd": 6,
"latin": 7,
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

//"othertranscriptions": [[6, 'ISO 9985']]
}
