var spreadsheet = `
ا	Lo	∅ (aː)	- ā	∅ aː	o	ɑ	h	consonant/mater lectionis			ا ـا	أَلِفْ	ʔalif	U+0627: ARABIC LETTER ALEF	🗸
أ	Lo	ʔ	a u	ʔ	}	ɑ͑	H	glottal stop		\u{627}\u{654}	أ ـأ	أَلِفْ هَمْزة	ʔalif hamza	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	🗸
\u{627}\u{654}	s	ʔ	A U			ɑʿ		glottal stop						U+0627, 0654: ARABIC LETTER ALEF, HAMZA ABOVE	
إ	Lo	ʔ	i		}	i̜	Y	glottal stop		\u{627}\u{655}	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	🗸
\u{627}\u{655}	s	ʔ	I			i˓		glottal stop						U+0627, 0655: ARABIC LETTER ALEF, HAMZA BELOW​	
آ	Lo	ʔaː	ā ’ā	ā ’ā	}	ɑ̃	N	glottal stop		\u{627}\u{653}	آ ـآ	أَلِفْ مَدَّة	ʔalif madda	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	🗸
\u{627}\u{653}	s	ʔaː	Ā ’Ā			ɑ~		glottal stop						U+0627, U+0653: ARABIC LETTER ALEF, MADDAH ABOVE​	
ٱ	Lo	a	-		}	ɑ̄		glottal stop	infrequent		ٱ ـٱ	اَلِفُ ٱلْوَصْلِ	ʔalifu l-wasˤli	U+0671: ARABIC LETTER ALEF WASLA	🗸
ؤ	Lo	ʔ	’	’	W	w͑	c	glottal stop		\u{648}\u{654}	ؤ ـؤ	وَاو هَمْزة	waːw hamza	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	🗸
\u{648}\u{654}	s	ʔ	’			wʿ		glottal stop						U+0648, U+0654: ARABIC LETTER WAW, HAMZA ABOVE	
ئ	Lo	ʔ	’		Y	y͑	z	glottal stop		\u{64A}\u{654}	ئ ئئئ	يَاء هَمْزة	jaːʔ hamza	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	🗸
\u{64A}\u{654}	s	ʔ	’			yʿ		glottal stop						U+064A, U+0654: ARABIC LETTER YEH, HAMZA ABOVE	
ء	Lo	ʔ	’		}	ʔ	x	glottal stop			ء	هَمْزة	hamzah	U+0621: ARABIC LETTER HAMZA	🗸
															
پ	Lo	p	p		p	p	F	stop	foreign words only		پ پپپ			U+067E: ARABIC LETTER PEH	🗸
ب	Lo	b	b		b	b	f	stop			ب ببب	بَاء	baːʔ	U+0628: ARABIC LETTER BEH	🗸
ت	Lo	t	t		t¶	t	j	stop			ت تتت	تَاء	taːʔ	U+062A: ARABIC LETTER TEH	🗸
ط	Lo	tˤ	ṭ	tˤ ṭ	T	ᵵ	'	pharyngealised stop			ط ططط	طَاء	tˤɑːʔ	U+0637: ARABIC LETTER TAH	🗸
د	Lo	d	d		d¶	d	]	stop			د ـد	دَالْ	daːl	U+062F: ARABIC LETTER DAL	🗸
ض	Lo	dˤ	ḍ	dˤ ḍ	D	ᵭ	q	pharyngealised stop			ض ضضض	ضَاد	dˤɑːd	U+0636: ARABIC LETTER DAD	🗸
ك	Lo	k	k		k	k	;	stop			ك ككك	كَاف	kaːf	U+0643: ARABIC LETTER KAF	🗸
ق	Lo	q	q		q¶	q	r	stop			ق ققق	قَاف	qaːf	U+0642: ARABIC LETTER QAF	🗸
															
چ	Lo	t͡ʃ	ch	t͡ʃ	c	ʧ	{	affricate	foreign words only		چ چچچ			U+0686: ARABIC LETTER TCHEH	🗸
ج	Lo	d͡ʒ ʒ	j	d͡ʒ ʒ	j	ʤ	[	affricate/fricative			ج ججج	جِيمْ	ʤiːm	U+062C: ARABIC LETTER JEEM	🗸
															
ف	Lo	f	f		f¶	f	t	fricative			ف ففف	فَاء	faːʔ	U+0641: ARABIC LETTER FEH	🗸
ڤ	Lo	v	v		v	v	T	fricative	foreign words only		ڤ ڤڤڤ			U+06A4: ARABIC LETTER VEH	🗸
ث	Lo	θ	th	θ	@	θ	e	fricative			ث ثثث	ثَاء	θaːʔ	U+062B: ARABIC LETTER THEH	🗸
ذ	Lo	ð	dh	ð	d	ð	±	fricative			ذ ـذ	ذَال	ðaːl	U+0630: ARABIC LETTER THAL	🗸
ظ	Lo	ðˤ zˤ	ẓ	ðˤ zˤ ẓ	D	ð̴	/	pharyngealised fricative			ظ ظظظ	ظَاء	ðˤɑːʔ	U+0638: ARABIC LETTER ZAH	🗸
س	Lo	s	s		s	s	s	fricative			س سسس	سِينْ	siːn	U+0633: ARABIC LETTER SEEN	🗸
ز	Lo	z	z		z	z	.	fricative			ز ـز	زَاي	zay / zajn	U+0632: ARABIC LETTER ZAIN	🗸
ص	Lo	sˤ	ṣ	sˤ ṣ	S	ᵴ	w	pharyngealised fricative			ص صصص	صَادْ	sˤɑːd	U+0635: ARABIC LETTER SAD	🗸
ش	Lo	ʃ	sh	ʃ	s	ʃ	a	fricative			ش ششش	شِينْ	ʃiːn	U+0634: ARABIC LETTER SHEEN	🗸
خ	Lo	x	kh		x	x	o	fricative			خ خخخ	خَاء	xaːʔ	U+062E: ARABIC LETTER KHAH	🗸
غ	Lo	ɣ	gh	ɣ	g	ɣ	y	fricative			غ غغغ	غَين	ɣajn	U+063A: ARABIC LETTER GHAIN	🗸
ح	Lo	ħ	ḥ	ħ ḥ	H	ħ	p	fricative			ح ححح	حَاء	ħaːʔ	U+062D: ARABIC LETTER HAH	🗸
ع	Lo	ʕ	ʿ	ʕ	{	ʕ	u	fricative			ع ععع	عَين	ʕajn	U+0639: ARABIC LETTER AIN	🗸
ه	Lo	h	h		h¶	h	i	fricative			ه ههه	هَاء	haːʔ	U+0647: ARABIC LETTER HEH	🗸
															
م	Lo	m	m		m	m	l	nasal			م ممم	مِيمْ	miːm	U+0645: ARABIC LETTER MEEM	🗸
ن	Lo	n	n		n	n	k	nasal			ن ننن	نُون	nuːn	U+0646: ARABIC LETTER NOON	🗸
															
و	Lo	w (uː)	w ū aw	uː ū	w¶	w	,	approximant/mater lectionis			و ـو	وَاو	waːw	U+0648: ARABIC LETTER WAW	🗸
ر	Lo	r	r		r	r	v	trill			ر ـر	رَاء	raːʔ	U+0631: ARABIC LETTER REH	🗸
ل	Lo	l	l		l	l	g	lateral			ل للل	لاَمْ	laːm	U+0644: ARABIC LETTER LAM	🗸
ي	Lo	j (iː)	y ī ay	iː ī	y¶	y	d	approximant/mater lectionis			ي ييي	يَاء	jaːʔ	U+064A: ARABIC LETTER YEH	🗸
															
															
ِ	Mn​	ɪ	i	ɪ	i	i	A	vowel				كَسْرَة	kasra	U+0650: ARABIC KASRA​	🗸
ٍ	Mn​	ɪn	in		i	iⁿ	A	vowel				كَسْرَةً	kasratān	U+064D: ARABIC KASRATAN​	🗸
ُ	Mn​	ʊ	u	ʊ	u	u	E	vowel				ضَمَّة	dˤamma	U+064F: ARABIC DAMMA​	🗸
ٌ	Mn​	ʊn	un		u	uⁿ	R	vowel				ضَمَّةً	ḍammatān	U+064C: ARABIC DAMMATAN​	🗸
َ	Mn​	a	a		a	a	Q	vowel				فَتْحَة	fatħa	U+064E: ARABIC FATHA​	🗸
ً	Mn​	an	an		a	aⁿ	W	vowel				فَتْحَةً	fatħatan	U+064B: ARABIC FATHATAN​	🗸
ٰ	Mn​	aː			A	̍	H	vowel				أَلِيف خَنْجَرِيَّة	alɪf xand͡ʒarijja	U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	🗸
															
ى	Lo	aː	á		a	à	n	vowel			ى ـى	ألف مقصورة	ʔalif maqsˤuːra	U+0649: ARABIC LETTER ALEF MAKSURA	🗸
ة	Lo	- ʰ	h t	ʰ	a	ä	m	feminine indicator			ة ـة	تاء مربوطة	taːʔ marbuːtˤɑh	U+0629: ARABIC LETTER TEH MARBUTA	🗸
															
															
															
ڧ	Lo	q	q		q	q̇		stop	infrequent		ڧ ڧڧڧ			U+06A7: ARABIC LETTER QAF WITH DOT ABOVE	🗸
ڢ	Lo	f	f		f	ḟ		fricative	infrequent		 ڢ ڢڢڢ			U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW	🗸
ࢲ	Lo	zˤ		zˤ	z	zˤ		pharyngealized fricative	infrequent					U+08B2: ARABIC LETTER ZAIN WITH INVERTED V ABOVE	🗸
															
															
															
لا		laː				lɑ	b	ligature						U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ		laː				lɑ̄	B	ligature						U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ		lʔ				lɑ͑	G	ligature						U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ		lʔ				lɑ̜	T	ligature						U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
ال		al	al-		e	ɑl		definite article						U+0627 U+0644: ARABIC LETTER ALEF, LETTER LAM	
															
ِي		iː	ī			iy		long vowel						U+0650, U+064A: ARABIC KASRA​, LETTER YEH	
ُو		uː	ū			uw		long vowel						U+064F, U+0648: ARABIC DAMMA​, ARABIC LETTER WAW 	
َا		aː	ā			aɑ		long vowel						U+064E, U+0627: ARABIC FATHA​, LETTER ALEF	
															
اللّٰه		ʔaɫˈɫaːh	Allāh			{Allāh}		ligature	infrequent					U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LAM, LAM, SHADDA, SUPERSCRIPT ALEF, HEH	
ﷲ	Lo	ʔaɫˈɫaːh	Allāh			{allāh}		ligature	infrequent					U+FDF2: ARABIC LIGATURE ALLAH ISOLATED FORM	🗸
ﷻ	Lo					{SALLALLAHOU ALAYHE WASALLAM}		ligature	infrequent					U+FDFB: ARABIC LIGATURE JALLAJALALOUHOU	🗸
ﷺ	Lo					{ALAYHE WASALLAM}		ligature	infrequent					U+FDFA: ARABIC LIGATURE SALLALLAHOU ALAYHE WASALLAM	🗸
﷽	So					{In the name of God, the Most Gracious, the Most Merciful}		ligature	infrequent					U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM	🗸
															
															
															
															
															
ٔ	Mn​	ʔ			}	ʿ		hamza						U+0654: ARABIC HAMZA ABOVE​	🗸
ٕ	Mn​	ʔ			}	˓		hamza						U+0655: ARABIC HAMZA BELOW​	🗸
ٓ	Mn​				}	~	G	maddah diacritic	used with ا					U+0653: ARABIC MADDAH ABOVE​	🗸
٭	Po				[	*		punctuation	infrequent					U+066D: ARABIC FIVE POINTED STAR	🗸
															
															
															
ْ	Mn​				*	͞	X	vowel absence marker				سُكُون	sukūn	U+0652: ARABIC SUKUN​	🗸
															
															
ّ	Mn​				&	˖	±	gemination mark				شَدَّة	shaddah	U+0651: ARABIC SHADDA​	🗸
															
															
					@	»		opening head mark							
					@	«		closing head mark							
					@	›		2nd opening head							
					@	‹		2 closing head							
					@	§ᵃ		honorific							
					@	 §ᵇ		honorific							
					@	§ᶜ		honorific							
					@	°		extra							
															
															
.	Po		.		.	.		full stop						U+002E: FULL STOP	🗸
۔	Po		.		.	.		full stop	infrequent					U+06D4: ARABIC FULL STOP	🗸
،	Po		,		,	,	K	comma						U+060C: ARABIC COMMA	🗸
:	Po		:		:	:	:	colon						U+003A: COLON	🗸
؛	Po				;	;	P	semicolon						U+061B: ARABIC SEMICOLON	🗸
!	Po		!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	
؟	Po		?		?	?	?	question mark						U+061F: ARABIC QUESTION MARK	🗸
															
															
…	Po		…		.	…	"	ellipsis						U+2026: HORIZONTAL ELLIPSIS	🗸
															
															
															
«	Pi		“		<	«	=	quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
»	Pf		”		>	»	-	quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
‹	Pi		‘		<	‹	}	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	🗸
›	Pf		’		>	›	{	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	🗸
“	Pi		“		<	 “	E	quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	🗸
”	Pf		”		>	”	R	quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	🗸
‘	Pi		‘		<	‘	Q	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	🗸
’	Pf		’		>	’	W	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	🗸
															
															
															
(	Ps		(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	🗸
[	Ps		[		(	[	F	bracket						U+005B: LEFT SQUARE BRACKET	
)	Pe		)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	🗸
]	Pe		]		)	]	D	bracket						U+005D: RIGHT SQUARE BRACKET	
﴾	Pe				(	⁅		ornate parenthesis						U+FD3E: ORNATE LEFT PARENTHESIS	🗸
﴿	Ps				)	⁆		ornate parenthesis						U+FD3F: ORNATE RIGHT PARENTHESIS	🗸
															
															
-			-		-	-		hyphen						U+2010: HYPHEN	
‑	Pd		‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	Pd		–		-	–		en dash						U+2013: EN DASH	🗸
—	Pd		—		-	—		em dash						U+2014: EM DASH	🗸
															
															
ـ	Lm				_	_	J	baseline extender	infrequent				tatweel	U+0640: ARABIC TATWEEL	🗸
															
															
ʼ	Lm		ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§	Po		§			§		section sign						U+00A7: SECTION SIGN	
†	Po		†			†		dagger						U+2020: DAGGER	
‡	Po		‡			‡		double dagger						U+2021: DOUBLE DAGGER	
′	Po		′			′		prime						U+2032: PRIME	
″	Po		″			″		double prime						U+2033: DOUBLE PRIME	
/	Po						L								
															
															
															
															
															
\u200C	Cf				=	ₓ		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf				=	₊		zero-width joiner						U+200D: ZERO WIDTH JOINER	
\u2067	Cf				=	ʳˡⁱ		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	Cf				=	ˡʳⁱ		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	Cf				=	ᶠˢⁱ		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	Cf				=	ᵖᵈⁱ		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	Cf				=	ʳˡᵉ		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	Cf				=	ˡʳᵉ		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	Cf				=	ᵖᵈᶠ		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	Cf				=	ʳˡᵐ		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	Cf				=	ˡʳᵐ		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F	Mn​				=	ᶜᵍʲ		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
\u061C	Cf				=	ᵃˡᵐ		arabic letter mark						U+061C: ARABIC LETTER MARK	
															
															
															
															
١	Nd		1		±	1̣	1	digit				وَاحِد	wɑːħid	U+0661: ARABIC-INDIC DIGIT ONE	🗸
٢	Nd		2		±	2̣	2	digit				اِثْنَين	ʔiθnain	U+0662: ARABIC-INDIC DIGIT TWO	🗸
٣	Nd		3		±	3̣	3	digit				ثَلَاثَة	θɑlɑːθɑ	U+0663: ARABIC-INDIC DIGIT THREE	🗸
٤	Nd		4		±	4̣	4	digit				أَربَعَة	ʔɑrbɑʕɑ	U+0664: ARABIC-INDIC DIGIT FOUR	🗸
٥	Nd		5		±	5̣	5	digit				خَمْسَة	xɑmsɑ	U+0665: ARABIC-INDIC DIGIT FIVE	🗸
٦	Nd		6		±	6̣	6	digit				سِتَّة	sittɑ	U+0666: ARABIC-INDIC DIGIT SIX	🗸
٧	Nd		7		±	7̣	7	digit				سَبْعَة	sɑbʕɑ	U+0667: ARABIC-INDIC DIGIT SEVEN	🗸
٨	Nd		8		±	8̣	8	digit				ثَمَانيَة	θɑmɑːnjɑ	U+0668: ARABIC-INDIC DIGIT EIGHT	🗸
٩	Nd		9		±	9̣	9	digit				تِسْعَة	tisʕɑ	U+0669: ARABIC-INDIC DIGIT NINE	🗸
٠	Nd		0		±	0̣	0	digit						U+0660: ARABIC-INDIC DIGIT ZERO	🗸
															
1	Nd		1			1		digit				وَاحِد	wɑːħid	U+0031: DIGIT ONE	
2	Nd		2			2		digit				اِثْنَين	ʔiθnain	U+0032: DIGIT TWO	
3	Nd		3			3		digit				ثَلَاثَة	θɑlɑːθɑ	U+0033: DIGIT THREE	
4	Nd		4			4		digit				أَربَعَة	ʔɑrbɑʕɑ	U+0034: DIGIT FOUR	
5	Nd		5			5		digit				خَمْسَة	xɑmsɑ	U+0035: DIGIT FIVE	
6	Nd		6			6		digit				سِتَّة	sittɑ	U+0036: DIGIT SIX	
7	Nd		7			7		digit				سَبْعَة	sɑbʕɑ	U+0037: DIGIT SEVEN	
8	Nd		8			8		digit				ثَمَانيَة	θɑmɑːnjɑ	U+0038: DIGIT EIGHT	
9	Nd		9			9		digit				تِسْعَة	tisʕɑ	U+0039: DIGIT NINE	
0	Nd		0			0		digit						U+0030: DIGIT ZERO	
															
															
٬	Po				#	‛		thousands separator						U+066C: ARABIC THOUSANDS SEPARATOR	🗸
٫	Po				#	·		decimal separator						U+066B: ARABIC DECIMAL SEPARATOR	🗸
؍	Po				#	/		date separator	infrequent					U+060D: ARABIC DATE SEPARATOR	🗸
࢐	Cf							currency symbol	Egyptian					U+0890: ARABIC POUND MARK ABOVE	🗸
࢑	Cf							currency symbol	Egyptian					U+0891: ARABIC PIASTRE MARK ABOVE	🗸
﷼	Sc	ri.jaːl				{RIAL}		currency symbol	infrequent					U+FDFC: RIAL SIGN	🗸
															
															
															
٪	Po				%	٪		percent sign						U+066A: ARABIC PERCENT SIGN	🗸
؉	Po				%	؉		per mille sign						U+0609 ARABIC-INDIC PER MILLE SIGN	🗸
%	Po				%	%		percentage mark						U+0025: PERCENT SIGN	🗸
‰	Po				%	‰		per mille sign						U+2030: PER MILLE SIGN	🗸

 	Po							space						U+0020: SPACE	🗸
•	Po							bullet						U+2022: BULLET	🗸


`



latinPanel = '’ā ’ aː ā dˤ d͡ʒ ð ðˤ ḍ ħ ʰ ḥ iː ī ɪ ∅ θ sˤ ṣ ʃ tˤ t͡ʃ ṭ uː ū ʊ ɣ ʒ zˤ ẓ ʕ ʔ'


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

"equiv": 10,
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
"block": 15,

"othertranscriptions": [[3, 'LOC']]
}




