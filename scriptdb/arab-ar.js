var spreadsheet = `
ا		∅ (aː)	- ā	∅ aː	o	ɑ	h	consonant/mater lectionis			ا ـا	أَلِفْ	ʔalif	U+0627: ARABIC LETTER ALEF	🗸
أ	dc	ʔ	a u	ʔ	}	ɑ͑	H	glottal stop		\u{627}\u{654}	أ ـأ	أَلِفْ هَمْزة	ʔalif hamza	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	🗸
\u{627}\u{654}	s	ʔ	A U			ɑʿ		glottal stop						U+0627, 0654: ARABIC LETTER ALEF, HAMZA ABOVE	
إ	dc	ʔ	i		}	i̜	Y	glottal stop		\u{627}\u{655}	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	🗸
\u{627}\u{655}	s	ʔ	I			i˓		glottal stop						U+0627, 0655: ARABIC LETTER ALEF, HAMZA BELOW​	
آ	dc	ʔaː	ā ’ā	ā ’ā	}	ɑ̃	N	glottal stop		\u{627}\u{653}	آ ـآ	أَلِفْ مَدَّة	ʔalif madda	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	🗸
\u{627}\u{653}	s	ʔaː	Ā ’Ā			ɑ~		glottal stop						U+0627, U+0653: ARABIC LETTER ALEF, MADDAH ABOVE​	
ٱ		a	-		}	ɑ̄		glottal stop	infrequent		ٱ ـٱ	اَلِفُ ٱلْوَصْلِ	ʔalifu l-wasˤli	U+0671: ARABIC LETTER ALEF WASLA	🗸
ؤ	dc	ʔ	’	’	W	w͑	c	glottal stop		\u{648}\u{654}	ؤ ـؤ	وَاو هَمْزة	waːw hamza	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	🗸
\u{648}\u{654}	s	ʔ	’			wʿ		glottal stop						U+0648, U+0654: ARABIC LETTER WAW, HAMZA ABOVE	
ئ	dc	ʔ	’		Y	y͑	z	glottal stop		\u{64A}\u{654}	ئ ئئئ	يَاء هَمْزة	jaːʔ hamza	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	🗸
\u{64A}\u{654}	s	ʔ	’			yʿ		glottal stop						U+064A, U+0654: ARABIC LETTER YEH, HAMZA ABOVE	
ء		ʔ	’		}	ʔ	x	glottal stop			ء	هَمْزة	hamzah	U+0621: ARABIC LETTER HAMZA	🗸
															
پ		p	p		p	p	F	stop	foreign words only		پ پپپ			U+067E: ARABIC LETTER PEH	🗸
ب		b	b		b	b	f	stop			ب ببب	بَاء	baːʔ	U+0628: ARABIC LETTER BEH	🗸
ت		t	t		t¶	t	j	stop			ت تتت	تَاء	taːʔ	U+062A: ARABIC LETTER TEH	🗸
ط		tˤ	ṭ	tˤ ṭ	T	ᵵ	'	pharyngealised stop			ط ططط	طَاء	tˤɑːʔ	U+0637: ARABIC LETTER TAH	🗸
د		d	d		d¶	d	]	stop			د ـد	دَالْ	daːl	U+062F: ARABIC LETTER DAL	🗸
ض		dˤ	ḍ	dˤ ḍ	D	ᵭ	q	pharyngealised stop			ض ضضض	ضَاد	dˤɑːd	U+0636: ARABIC LETTER DAD	🗸
ك		k	k		k	k	;	stop			ك ككك	كَاف	kaːf	U+0643: ARABIC LETTER KAF	🗸
ق		q	q		q¶	q	r	stop			ق ققق	قَاف	qaːf	U+0642: ARABIC LETTER QAF	🗸
															
چ		t͡ʃ	ch	t͡ʃ	c	ʧ	{	affricate	foreign words only		چ چچچ			U+0686: ARABIC LETTER TCHEH	🗸
ج		d͡ʒ ʒ	j	d͡ʒ ʒ	j	ʤ	[	affricate/fricative			ج ججج	جِيمْ	ʤiːm	U+062C: ARABIC LETTER JEEM	🗸
															
ف		f	f		f¶	f	t	fricative			ف ففف	فَاء	faːʔ	U+0641: ARABIC LETTER FEH	🗸
ڤ		v	v		v	v	T	fricative	foreign words only		ڤ ڤڤڤ			U+06A4: ARABIC LETTER VEH	🗸
ث		θ	th	θ	@	θ	e	fricative			ث ثثث	ثَاء	θaːʔ	U+062B: ARABIC LETTER THEH	🗸
ذ		ð	dh	ð	d	ð	±	fricative			ذ ـذ	ذَال	ðaːl	U+0630: ARABIC LETTER THAL	🗸
ظ		ðˤ zˤ	ẓ	ðˤ zˤ ẓ	D	ð̴	/	pharyngealised fricative			ظ ظظظ	ظَاء	ðˤɑːʔ	U+0638: ARABIC LETTER ZAH	🗸
س		s	s		s	s	s	fricative			س سسس	سِينْ	siːn	U+0633: ARABIC LETTER SEEN	🗸
ز		z	z		z	z	.	fricative			ز ـز	زَاي	zay / zajn	U+0632: ARABIC LETTER ZAIN	🗸
ص		sˤ	ṣ	sˤ ṣ	S	ᵴ	w	pharyngealised fricative			ص صصص	صَادْ	sˤɑːd	U+0635: ARABIC LETTER SAD	🗸
ش		ʃ	sh	ʃ	s	ʃ	a	fricative			ش ششش	شِينْ	ʃiːn	U+0634: ARABIC LETTER SHEEN	🗸
خ		x	kh		x	x	o	fricative			خ خخخ	خَاء	xaːʔ	U+062E: ARABIC LETTER KHAH	🗸
غ		ɣ	gh	ɣ	g	ɣ	y	fricative			غ غغغ	غَين	ɣajn	U+063A: ARABIC LETTER GHAIN	🗸
ح		ħ	ḥ	ħ ḥ	H	ħ	p	fricative			ح ححح	حَاء	ħaːʔ	U+062D: ARABIC LETTER HAH	🗸
ع		ʕ	ʿ	ʕ	{	ʕ	u	fricative			ع ععع	عَين	ʕajn	U+0639: ARABIC LETTER AIN	🗸
ه		h	h		h¶	h	i	fricative			ه ههه	هَاء	haːʔ	U+0647: ARABIC LETTER HEH	🗸
															
م		m	m		m	m	l	nasal			م ممم	مِيمْ	miːm	U+0645: ARABIC LETTER MEEM	🗸
ن		n	n		n	n	k	nasal			ن ننن	نُون	nuːn	U+0646: ARABIC LETTER NOON	🗸
															
و		w (uː)	w ū aw	uː ū	w¶	w	,	approximant/mater lectionis			و ـو	وَاو	waːw	U+0648: ARABIC LETTER WAW	🗸
ر		r	r		r	r	v	trill			ر ـر	رَاء	raːʔ	U+0631: ARABIC LETTER REH	🗸
ل		l	l		l	l	g	lateral			ل للل	لاَمْ	laːm	U+0644: ARABIC LETTER LAM	🗸
ي		j (iː)	y ī ay	iː ī	y¶	y	d	approximant/mater lectionis			ي ييي	يَاء	jaːʔ	U+064A: ARABIC LETTER YEH	🗸
															
															
ِ		ɪ	i	ɪ	i	i	A	vowel				كَسْرَة	kasra	U+0650: ARABIC KASRA​	🗸
ٍ		ɪn	in		i	iⁿ	A	vowel				كَسْرَةً	kasratān	U+064D: ARABIC KASRATAN​	🗸
ُ		ʊ	u	ʊ	u	u	E	vowel				ضَمَّة	dˤamma	U+064F: ARABIC DAMMA​	🗸
ٌ		ʊn	un		u	uⁿ	R	vowel				ضَمَّةً	ḍammatān	U+064C: ARABIC DAMMATAN​	🗸
َ		a	a		a	a	Q	vowel				فَتْحَة	fatħa	U+064E: ARABIC FATHA​	🗸
ً		an	an		a	aⁿ	W	vowel				فَتْحَةً	fatħatan	U+064B: ARABIC FATHATAN​	🗸
ٰ		aː			A	̍	H	vowel				أَلِيف خَنْجَرِيَّة	alɪf xand͡ʒarijja	U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	🗸
															
ى		aː	á		a	à	n	vowel			ى ـى	ألف مقصورة	ʔalif maqsˤuːra	U+0649: ARABIC LETTER ALEF MAKSURA	🗸
ة		- ʰ	h t	ʰ	a	ä	m	feminine indicator			ة ـة	تاء مربوطة	taːʔ marbuːtˤɑh	U+0629: ARABIC LETTER TEH MARBUTA	🗸
															
															
															
ڧ		q	q		q	q̇		stop	infrequent		ڧ ڧڧڧ			U+06A7: ARABIC LETTER QAF WITH DOT ABOVE	🗸
ڢ		f	f		f	ḟ		fricative	infrequent		 ڢ ڢڢڢ			U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW	🗸
ࢲ		zˤ		zˤ	z	zˤ		pharyngealized fricative	infrequent					U+08B2: ARABIC LETTER ZAIN WITH INVERTED V ABOVE	🗸
															
															
															
لا	s	laː				lɑ	b	ligature						U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ	s	laː				lɑ̄	B	ligature						U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ	s	lʔ				lɑ͑	G	ligature						U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ	s	lʔ				lɑ̜	T	ligature						U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
ال	s	al	al-		e	ɑl		definite article						U+0627 U+0644: ARABIC LETTER ALEF, LETTER LAM	
															
ِي	s	iː	ī			iy		long vowel						U+0650, U+064A: ARABIC KASRA​, LETTER YEH	
ُو	s	uː	ū			uw		long vowel						U+064F, U+0648: ARABIC DAMMA​, ARABIC LETTER WAW 	
َا	s	aː	ā			aɑ		long vowel						U+064E, U+0627: ARABIC FATHA​, LETTER ALEF	
															
اللّٰه	s		Allāh			{Allāh}		ligature	infrequent					U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LAM, LAM, SHADDA, SUPERSCRIPT ALEF, HEH	
ﷲ			Allāh			{allāh}		ligature	infrequent					U+FDF2: ARABIC LIGATURE ALLAH ISOLATED FORM	🗸
ﷻ						{SALLALLAHOU ALAYHE WASALLAM}		ligature	infrequent					U+FDFB: ARABIC LIGATURE JALLAJALALOUHOU	🗸
ﷺ						{ALAYHE WASALLAM}		ligature	infrequent					U+FDFA: ARABIC LIGATURE SALLALLAHOU ALAYHE WASALLAM	🗸
															
															
															
															
															
ٔ		ʔ			}	ʿ		hamza						U+0654: ARABIC HAMZA ABOVE​	🗸
ٕ		ʔ			}	˓		hamza						U+0655: ARABIC HAMZA BELOW​	🗸
ٓ	o				}	~	G	maddah diacritic	used with ا					U+0653: ARABIC MADDAH ABOVE​	🗸
٭					[	*		punctuation	infrequent					U+066D: ARABIC FIVE POINTED STAR	🗸
															
															
															
ْ					*	͓	X	vowel absence marker				سُكُون	sukūn	U+0652: ARABIC SUKUN​	🗸
															
															
ّ					&	˖	±	gemination mark				شَدَّة	shaddah	U+0651: ARABIC SHADDA​	🗸
															
															
					@	»		opening head mark							
					@	«		closing head mark							
					@	›		2nd opening head							
					@	‹		2 closing head							
					@	§ᵃ		honorific							
					@	 §ᵇ		honorific							
					@	§ᶜ		honorific							
					@	°		extra							
															
															
.			.		.	.		full stop						U+002E: FULL STOP	🗸
۔	x		.		.	.		full stop	infrequent					U+06D4: ARABIC FULL STOP	🗸
،			,		,	,	K	comma						U+060C: ARABIC COMMA	🗸
:			:		:	:	:	colon						U+003A: COLON	🗸
؛					;	;	P	semicolon						U+061B: ARABIC SEMICOLON	🗸
!			!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	
؟			?		?	?	?	question mark						U+061F: ARABIC QUESTION MARK	🗸
															
															
…			…		.	…	"	ellipsis						U+2026: HORIZONTAL ELLIPSIS	🗸
															
															
															
«			“		<	«	=	quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
»			”		>	»	-	quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	🗸
‹			‘		<	‹	}	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	🗸
›			’		>	›	{	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	🗸
“			“		<	 “	E	quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	🗸
”			”		>	”	R	quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	🗸
‘			‘		<	‘	Q	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	🗸
’			’		>	’	W	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	🗸
															
															
															
(			(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	🗸
[			[		(	[	F	bracket						U+005B: LEFT SQUARE BRACKET	
)			)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	🗸
]			]		)	]	D	bracket						U+005D: RIGHT SQUARE BRACKET	
﴾					(	⁅		ornate parenthesis						U+FD3E: ORNATE LEFT PARENTHESIS	🗸
﴿					)	⁆		ornate parenthesis						U+FD3F: ORNATE RIGHT PARENTHESIS	🗸
															
															
-			-		-	-		hyphen						U+2010: HYPHEN	
‑			‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–			–		-	–		en dash						U+2013: EN DASH	🗸
—			—		-	—		em dash						U+2014: EM DASH	🗸
															
															
ـ					_	_	J	baseline extender	infrequent				tatweel	U+0640: ARABIC TATWEEL	🗸
															
															
ʼ			ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§			§			§		section sign						U+00A7: SECTION SIGN	
†			†			†		dagger						U+2020: DAGGER	
‡			‡			‡		double dagger						U+2021: DOUBLE DAGGER	
′			′			′		prime						U+2032: PRIME	
″			″			″		double prime						U+2033: DOUBLE PRIME	
/							L								
															
															
															
															
															
\u200C					=	ₓ		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊		zero-width joiner						U+200D: ZERO WIDTH JOINER	
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
															
															
															
															
١			1		±	1̣	1	digit				وَاحِد	wɑːħid	U+0661: ARABIC-INDIC DIGIT ONE	🗸
٢			2		±	2̣	2	digit				اِثْنَين	ʔiθnain	U+0662: ARABIC-INDIC DIGIT TWO	🗸
٣			3		±	3̣	3	digit				ثَلَاثَة	θɑlɑːθɑ	U+0663: ARABIC-INDIC DIGIT THREE	🗸
٤			4		±	4̣	4	digit				أَربَعَة	ʔɑrbɑʕɑ	U+0664: ARABIC-INDIC DIGIT FOUR	🗸
٥			5		±	5̣	5	digit				خَمْسَة	xɑmsɑ	U+0665: ARABIC-INDIC DIGIT FIVE	🗸
٦			6		±	6̣	6	digit				سِتَّة	sittɑ	U+0666: ARABIC-INDIC DIGIT SIX	🗸
٧			7		±	7̣	7	digit				سَبْعَة	sɑbʕɑ	U+0667: ARABIC-INDIC DIGIT SEVEN	🗸
٨			8		±	8̣	8	digit				ثَمَانيَة	θɑmɑːnjɑ	U+0668: ARABIC-INDIC DIGIT EIGHT	🗸
٩			9		±	9̣	9	digit				تِسْعَة	tisʕɑ	U+0669: ARABIC-INDIC DIGIT NINE	🗸
٠			0		±	0̣	0	digit						U+0660: ARABIC-INDIC DIGIT ZERO	🗸
															
															
٬					#	‛		thousands separator						U+066C: ARABIC THOUSANDS SEPARATOR	🗸
٫					#	·		decimal separator						U+066B: ARABIC DECIMAL SEPARATOR	🗸
؍					#	/		date separator	infrequent					U+060D: ARABIC DATE SEPARATOR	🗸
࢐								currency symbol	Egyptian					U+0890: ARABIC POUND MARK ABOVE	🗸
࢑								currency symbol	Egyptian					U+0891: ARABIC PIASTRE MARK ABOVE	🗸
															
															
															
٪					%	٪		percent sign						U+066A: ARABIC PERCENT SIGN	🗸
؉					%	؉		per mille sign						U+0609 ARABIC-INDIC PER MILLE SIGN	🗸
%					%	%		percentage mark						U+0025: PERCENT SIGN	🗸
‰					%	‰		per mille sign						U+2030: PER MILLE SIGN	🗸




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




