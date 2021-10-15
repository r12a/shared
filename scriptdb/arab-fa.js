var spreadsheet = `
ا	Lo	ɒː æ e o ∅	ā a o e	ɒː æ ∅	A	ɑ	h	vowel carrier/vowel		ا ـا	الف	ʾalef	U+0627: ARABIC LETTER ALEF	🗸
آ	Lo	ɒː	ā	ā	A	ɑ̄	H	glottal stop		آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	🗸
														
ء	Lo	ʔ	’	ʔ	}	ʔ	M	glottal stop		ء	همزه	hæmze	U+0621: ARABIC LETTER HAMZA	🗸
أ	Lo	ʔ	’		A	ɑ͑	G	glottal stop	rare	أ ـأ	همزه	hæmze	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	🗸
یٔ		ʔ	’		y	yʿ		glottal stop		ئ ئئئ	همزه	hæmze	U+06CC U+0654: ARABIC LETTER FARSI YEH, HAMZA ABOVE	
ئ	Lo	ʔ	’		Y	y͑	S	glottal stop	incorrect character	ئ ئئئ	همزه	hæmze	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	🗸
ي	Lo	j iː			Y	ŷ	D	consonant+vowel	non-native	ي ييي			U+064A: ARABIC LETTER YEH	🗸
ؤ	Lo	ʔ	’		w	w͑	A	glottal stop		ؤ ـؤ	همزه	hæmze	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	🗸
														
پ	Lo	p	p		p	p	m	stop		پ پپپ	پِ	pe	U+067E: ARABIC LETTER PEH	🗸
ب	Lo	b	b		b	b	f	stop		ب ببب	بِ	be	U+0628: ARABIC LETTER BEH	🗸
ت	Lo	t	t		t	t	j	stop		ت تتت	تِ	te	U+062A: ARABIC LETTER TEH	🗸
د	Lo	d	d		d	d	n	stop		د ـد	دال	dāl	U+062F: ARABIC LETTER DAL	🗸
ط	Lo	t	t		T	t̂	x	stop		ط ططط	طی	ṭā	U+0637: ARABIC LETTER TAH	🗸
ک	Lo	k	k		k	k	;	stop		ک ککک	کاف	kāf	U+06A9: ARABIC LETTER KEHEH	🗸
گ	Lo	g	g		g¶	g	'	stop		گ گگگ	گاف	ɡāf	U+06AF: ARABIC LETTER GAF	🗸
ق	Lo	ɢ	q	ɢ	q	ɢ	r	stop		ق ققق	قاف	qāf	U+0642: ARABIC LETTER QAF	🗸
														
چ	Lo	t͡ʃ	č	t͡ʃ č	c	ʧ	]	affricate		چ چچچ	چِ	če	U+0686: ARABIC LETTER TCHEH	🗸
ج	Lo	d͡ʒ	j	d͡ʒ	j	ʤ	[	affricate		ج ججج	جیم	jim	U+062C: ARABIC LETTER JEEM	🗸
														
ف	Lo	f	f		f	f	t	fricative		ف ففف	فِ	fe	U+0641: ARABIC LETTER FEH	🗸
و	Lo	v u o ow	v u		v	v	,	fricative/mater lectionis		و ـو	واو	vāv	U+0648: ARABIC LETTER WAW	🗸
س	Lo	s	s		s¶	s	s	fricative		س سسس	سین	sin	U+0633: ARABIC LETTER SEEN	🗸
ث	Lo	s	s		s	ṡ	e	fricative		ث ثثث	ثِ	se	U+062B: ARABIC LETTER THEH	🗸
ص	Lo	s	s		S	ŝ	w	fricative		ص صصص	صاد	sād	U+0635: ARABIC LETTER SAD	🗸
ذ	Lo	z	z		z	ż	b	fricative		ذ ـذ	ذال	zāl	U+0630: ARABIC LETTER THAL	🗸
ز	Lo	z	z		z¶	z	c	fricative		ز ـز	زِ	ze	U+0632: ARABIC LETTER ZAIN	🗸
ض	Lo	z	z		Z	ẑ	q	fricative		ض ضضض	ضاد	zād	U+0636: ARABIC LETTER DAD	🗸
ظ	Lo	z	z		Z	ž	z	consonant		ظ ظظظ	ظی	ẓā	U+0638: ARABIC LETTER ZAH	🗸
ش	Lo	ʃ	š	ʃ	s	ʃ	a	fricative		ش ششش	شین	šin	U+0634: ARABIC LETTER SHEEN	🗸
ژ	Lo	ʒ	ž	ʒ	z	ʒ	C	fricative		ژ ـژ	ژِ	že	U+0698: ARABIC LETTER JEH	🗸
خ	Lo	x	x		x	x	o	fricative		خ خخخ	خِ	xe	U+062E: ARABIC LETTER KHAH	🗸
ع	Lo	ʔ ∅	a ’		{	ʔ̇	u	fricative		ع ععع	عین	ʿeyn	U+0639: ARABIC LETTER AIN	🗸
ه	Lo	h e	h e	ɛ	h¶	h	i	fricative		ه ههه	هِ	he do-češm	U+0647: ARABIC LETTER HEH	🗸
ح	Lo	h	h		h	ħ	p	fricative		ح ححح	حِ	he	U+062D: ARABIC LETTER HAH	🗸
														
م	Lo	m	m		m	m	l	nasal		م ممم	میم	mim	U+0645: ARABIC LETTER MEEM	🗸
ن	Lo	n	n		n	n	k	nasal		ن ننن	نون	nun	U+0646: ARABIC LETTER NOON	🗸
														
ر	Lo	r	r		r	r	v	trill		ر ـر	رِ	re	U+0631: ARABIC LETTER REH	🗸
ل	Lo	l	l		l	l	g	lateral		ل للل	لام	lām	U+0644: ARABIC LETTER LAM	🗸
ی	Lo	j iː	y i	iː	y¶	y	d	approximant/mater lectionis		ی ییی	یِ	ye	U+06CC: ARABIC LETTER FARSI YEH	🗸
														
غ	Lo	ɢ ɣ	ġ	ɣ	g	ɣ	y	consonant		ع ععع	غین	ġeyn	U+063A: ARABIC LETTER GHAIN	🗸
														
														
														
ِ	Mn​	e			i	i	Y	vowel			زیر	zir	U+0650: ARABIC KASRA​	🗸
ُ	Mn​	o			u	u	T	vowel			پیش	piš	U+064F: ARABIC DAMMA​	🗸
َ	Mn​	æ		æ	a	a	U	vowel			زِبَر	zebar	U+064E: ARABIC FATHA​	🗸
														
ً	Mn​	an			a	aⁿ	R	vowel			تنوین نصب	tanvin e nasb	U+064B: ARABIC FATHATAN​	🗸
ٔ	Mn​	ʔ			[	ʿ	N	hamza					U+0654: ARABIC HAMZA ABOVE​	🗸
ٓ	Mn​				}	~	X	maddah diacritic	used with ا				U+0653: ARABIC MADDAH ABOVE​	🗸
														
														
ة	Lo	h - ɛ æ			t	ẗ	J	consonant+vowel	infrequent	ة ـة			U+0629: ARABIC LETTER TEH MARBUTA	🗸
ڤ	Lo	β		β				fricative	archaic				U+06A4: ARABIC LETTER VEH	🗸
ٌ	Mn​	un			u	uⁿ	W	vowel			تنوین رفع	tanvin e rafe	U+064C: ARABIC DAMMATAN​	🗸
ٍ	Mn​	in			i	iⁿ	E	vowel			تنوین جرّ	tanvin e jarr	U+064D: ARABIC KASRATAN​	🗸
ْ	Mn​				*	͞	Q	vowel absence marker			سکون	sokun	U+0652: ARABIC SUKUN​	🗸
														
														
														
														
ۀ	Lo					–		confusable	do not use for Persian				U+06C0: ARABIC LETTER HEH WITH YEH ABOVE	
ە	Lo					–		confusable	do not use for Persian				U+06D5: ARABIC LETTER AE	
ہ	Lo					–		confusable	do not use for Persian				U+06C1: ARABIC LETTER HEH GOAL	
ۂ	Lo					–		confusable	do not use for Persian				U+06C2: ARABIC LETTER HEH GOAL WITH HAMZA ABOVE	
ئ	Lo					–		confusable	do not use for Persian				U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	
ࢨ	Lo					–		confusable	do not use for Persian				U+08A8: ARABIC LETTER YEH WITH TWO DOTS BELOW AND HAMZA ABOVE	
ي	Lo					–		confusable	do not use for Persian				U+064A: ARABIC LETTER YEH	
ۃ	Lo					–		confusable	do not use for Persian				U+06C3: ARABIC LETTER TEH MARBUTA GOAL	
ك	Lo					–		confusable	do not use for Persian				U+0643: ARABIC LETTER KAF	
														
														
														
														
														
														
														
﷼	Sc				#	¤	$	currency sign	do not use for Persian				U+FDFC: RIAL SIGN	
														
														
														
لا						lɑ		ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ						lɑ̄		ligature					U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ						lɑ͑		ligature					U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ						lɑ̜		ligature					U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
														
														
														
														
ٕ	Mn​				}	˓		hamza	not used				U+0655: ARABIC HAMZA BELOW​	🗸
٭	Po				[	*		punctuation	infrequent				U+066D: ARABIC FIVE POINTED STAR	🗸
														
														
														
ْ	Mn​				*	͓		vowel absence marker			سُكُون	sukūn	U+0652: ARABIC SUKUN​	🗸
														
														
ّ	Mn​					˖	I	gemination mark			تشدید	tašdid	U+0651: ARABIC SHADDA​	🗸
														
														
														
.	Po		.		.	.		full stop					U+002E: FULL STOP	🗸
۔	Po		.		.	.		full stop	infrequent				U+06D4: ARABIC FULL STOP	🗸
،	Po		,		,	,	&	comma					U+060C: ARABIC COMMA	🗸
:	Po		:		:	:		colon					U+003A: COLON	🗸
؛	Po				;	;	"	semicolon					U+061B: ARABIC SEMICOLON	🗸
!	Po		!		!	!		exclamation mark					U+0021: EXCLAMATION MARK	
؟	Po		?		?	?	/	question mark					U+061F: ARABIC QUESTION MARK	🗸
														
														
…	Po		…		.	…		ellipsis					U+2026: HORIZONTAL ELLIPSIS	🗸
														
														
														
«	Pi		“		<	«	K	quotation mark			گیومه		U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
»	Pf		”		>	»	L	quotation mark			گیومه		U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
‹	Pi		‘		<	‹		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	🗸
›	Pf		’		>	›		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	🗸
“	Pi		“		<	 “		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	🗸
”	Pf		”		>	”		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	🗸
‘	Pi		‘		<	‘		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	🗸
’	Pf		’		>	’		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	🗸
														
														
														
(	Ps		(		(	(	)	parenthesis					U+0028: LEFT PARENTHESIS	🗸
[	Ps		[		(	[	P	bracket					U+005B: LEFT SQUARE BRACKET	
)	Pe		)		)	)	(	parenthesis					U+0029: RIGHT PARENTHESIS	🗸
]	Pe		]		)	]	O	bracket					U+005D: RIGHT SQUARE BRACKET	
{	Ps		{			{	}	bracket					U+007B: LEFT CURLY BRACKET	
}	Pe		}			}	{	bracket					U+007D: RIGHT CURLY BRACKET	
														
														
-			-		-	-		hyphen					U+2010: HYPHEN	
‑	Pd		‑		-	‑		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	
–	Pd		–		-	–		en dash					U+2013: EN DASH	🗸
—	Pd		—		-	—		em dash					U+2014: EM DASH	🗸
														
														
ـ	Lm				_	_		baseline extender	infrequent				U+0640: ARABIC TATWEEL	🗸
														
														
ʼ	Lm		ʼ			ʼ		apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE	
§	Po		§			§		section sign					U+00A7: SECTION SIGN	
†	Po		†			†		dagger					U+2020: DAGGER	
‡	Po		‡			‡		double dagger					U+2021: DOUBLE DAGGER	
′	Po		′			′		prime					U+2032: PRIME	
″	Po		″			″		double prime					U+2033: DOUBLE PRIME	
														
														
														
														
														
														
\u200C	Cf				=	ₓ		zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf				=	₊		zero-width joiner					U+200D: ZERO WIDTH JOINER	
\u2067	Cf				=	ʳˡⁱ		rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	Cf				=	ˡʳⁱ		ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	Cf				=	ᶠˢⁱ		first-strong isolate					U+2068: FIRST STRONG ISOLATE	
\u2069	Cf				=	ᵖᵈⁱ		pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	
\u202B	Cf				=	ʳˡᵉ		rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	Cf				=	ˡʳᵉ		ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	Cf				=	ᵖᵈᶠ		pop direction					U+202C: POP DIRECTIONAL FORMATTING	
\u200F	Cf				=	ʳˡᵐ		rtl mark					U+200F: RIGHT-TO-LEFT MARK	
\u200E	Cf				=	ˡʳᵐ		ltr mark					U+200E: LEFT-TO-RIGHT MARK	
\u034F	Mn​				=	ᶜᵍʲ		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	
\u061C	Cf				=	ᵃˡᵐ		arabic letter mark					U+061C: ARABIC LETTER MARK	
														
														
														
														
۰	Nd		0		±	0̣	0	digit			صِفر	sefr	U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	🗸
۱	Nd		1		±	1̣	1	digit			یِک	yek	U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	🗸
۲	Nd		2		±	2̣	2	digit			دُو	do	U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	🗸
۳	Nd		3		±	3̣	3	digit			سِه	se	U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	🗸
۴	Nd		4		±	4̣	4	digit			چَهَار	čahār	U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	🗸
۵	Nd		5		±	5̣	5	digit			پَنج	panj	U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	🗸
۶	Nd		6		±	6̣	6	digit			شِش	šeš	U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	🗸
۷	Nd		7		±	7̣	7	digit			هَفت	haft	U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	🗸
۸	Nd		8		±	8̣	8	digit			هَشت	hašt	U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	🗸
۹	Nd		9		±	9̣	9	digit			نُه	noh	U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	🗸
														
														
٬	Po				#	‛	@	thousands separator					U+066C: ARABIC THOUSANDS SEPARATOR	🗸
٫	Po				#	·	#	decimal separator					U+066B: ARABIC DECIMAL SEPARATOR	🗸
؍	Po				#	/		date separator	infrequent				U+060D: ARABIC DATE SEPARATOR	🗸
														
														
														
٪	Po				%	٪	%	percent sign					U+066A: ARABIC PERCENT SIGN	🗸
؉	Po				%	؉		per mille sign					U+0609 ARABIC-INDIC PER MILLE SIGN	🗸
%	Po				%	%		percentage mark					U+0025: PERCENT SIGN	🗸
‰	Po				%	‰		per mille sign					U+2030: PER MILLE SIGN	🗸
														
														
														
ٰ	Mn​					–	V						U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	🗸
														
\u0020					\u0020			space					U+0020: SPACE	
\u200B					\u0020			zero-width space					U+200B: ZERO WIDTH SPACE	
\u2003					\u0020			em space					U+2003: EM SPACE	


`


latinPanel = 'æ č d͡ʒ ʃ ʒ ɛ iː ɣ æ β ɒː ∅ ā ʔ ɢ t͡ʃ'



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
