var spreadsheet = `
ا		a¶	ɑ	∅ (aː)	- ā		consonant/mater lectionis		ا ـا	ʔalif	أَلِفْ	U+0627: ARABIC LETTER ALEF	arabic
أ	dc	}	ɑ͑	ʔ	a	\u{627}\u{654}	consonant		أ ـأ	ʔalif hamza	أَلِفْ هَمْزة	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	arabic
\u{627}\u{654}	s		ɑʿ	ʔ	a		consonant					U+0627, 0654: ARABIC LETTER ALEF, HAMZA ABOVE	
إ	dc	}	i̜	ʔ	i	\u{627}\u{655}	consonant		إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	arabic
\u{627}\u{655}	s		i˓	ʔ	i		consonant					U+0627, 0655: ARABIC LETTER ALEF, HAMZA BELOW​	arabic
آ	dc	}	ɑ̃	ʔaː	ā	\u{627}\u{653}	consonant+vowel		آ ـآ	ʔalif madda	أَلِفْ مَدَّة	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	arabic
\u{627}\u{653}	s		ɑ~	ʔaː	ā		consonant+vowel					U+0627, U+0653: ARABIC LETTER ALEF, MADDAH ABOVE​	
ٱ		}	ɑ̄	a	’		consonant+vowel	infrequent	ٱ ـٱ	ʔalifu l-wasˤli	اَلِفُ ٱلْوَصْلِ	U+0671: ARABIC LETTER ALEF WASLA	arabic
ؤ	dc	w	w͑	ʔ		\u{648}\u{654}	consonant		ؤ ـؤ	waːw hamza	وَاو هَمْزة	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	arabic
\u{648}\u{654}	s		wʿ	ʔ			consonant					U+0648, U+0654: ARABIC LETTER WAW, HAMZA ABOVE	
ئ	dc	y	y͑	ʔ	ʸ	\u{64A}\u{654}	consonant		ئ ئئئ	jaːʔ hamza	يَاء هَمْزة	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	arabic
\u{64A}\u{654}	s		yʿ	ʔ			consonant					U+064A, U+0654: ARABIC LETTER YEH, HAMZA ABOVE	
ى		a	à	aː	á		vowel		ى ـى	ʔalif maqsˤuːra	ألف مقصورة	U+0649: ARABIC LETTER ALEF MAKSURA	arabic
													
ب		b	b	b	b		consonant		ب ببب	baːʔ	بَاء	U+0628: ARABIC LETTER BEH	arabic
ت		t¶	t	t	t		consonant		ت تتت	taːʔ	تَاء	U+062A: ARABIC LETTER TEH	arabic
ط		T	ᵵ	tˤ	ṭ		consonant		ط ططط	tˤɑːʔ	طَاء	U+0637: ARABIC LETTER TAH	arabic
ة		t	ẗ	- h	h		feminine indicator		ة ـة	taːʔ marbuːtˤɑh	تاء مربوطة	U+0629: ARABIC LETTER TEH MARBUTA	arabic
د		d¶	d	d	d		consonant		د ـد	daːl	دَالْ	U+062F: ARABIC LETTER DAL	arabic
ض		D	ᵭ	dˤ	ḍ		consonant		ض ضضض	dˤɑːd	ضَاد	U+0636: ARABIC LETTER DAD	arabic
ك		k	k	k	k		consonant		ك ككك	kaːf	كَاف	U+0643: ARABIC LETTER KAF	arabic
ق		q¶	q	q	q		consonant		ق ققق	qaːf	قَاف	U+0642: ARABIC LETTER QAF	arabic
ء		}	ʔ	ʔ	- ʾ		glottal stop		ء	hamzah	هَمْزة	U+0621: ARABIC LETTER HAMZA	arabic
													
ج		j	ʤ	d͡ʒ ʒ	j		consonant		ج ججج	ʤiːm	جِيمْ	U+062C: ARABIC LETTER JEEM	arabic
													
ف		f¶	f	f	f		consonant		ف ففف	faːʔ	فَاء	U+0641: ARABIC LETTER FEH	arabic
ث		@	θ	θ	th		consonant		ث ثثث	θaːʔ	ثَاء	U+062B: ARABIC LETTER THEH	arabic
ذ		d	ð	ð	dh		consonant		ذ ـذ	ðaːl	ذَال	U+0630: ARABIC LETTER THAL	arabic
ظ		D	ð̴	ðˤ zˤ	ẓ		consonant		ظ ظظظ	ðˤɑːʔ	ظَاء	U+0638: ARABIC LETTER ZAH	arabic
س		s	s	s	s		consonant		س سسس	siːn	سِينْ	U+0633: ARABIC LETTER SEEN	arabic
ز		z	z	z	z		consonant		ز ـز	zay / zajn	زَاي	U+0632: ARABIC LETTER ZAIN	arabic
ص		S	ᵴ	sˤ	ṣ		consonant		ص صصص	sˤɑːd	صَادْ	U+0635: ARABIC LETTER SAD	arabic
ش		s	ʃ	ʃ	sh		consonant		ش ششش	ʃiːn	شِينْ	U+0634: ARABIC LETTER SHEEN	arabic
خ		x	x	x	kh		consonant		خ خخخ	xaːʔ	خَاء	U+062E: ARABIC LETTER KHAH	arabic
غ		g	ɣ	ɣ	gh		consonant		غ غغغ	ɣajn	غَين	U+063A: ARABIC LETTER GHAIN	arabic
ح		H	ħ	ħ	ḥ		consonant		ح ححح	ħaːʔ	حَاء	U+062D: ARABIC LETTER HAH	arabic
ع		{	ʕ	ʕ	ʿ		consonant		ع ععع	ʕajn	عَين	U+0639: ARABIC LETTER AIN	arabic
ه		h¶	h	h	h		consonant		ه ههه	haːʔ	هَاء	U+0647: ARABIC LETTER HEH	arabic
													
م		m	m	m	m		consonant		م ممم	miːm	مِيمْ	U+0645: ARABIC LETTER MEEM	arabic
ن		n	n	n	n		consonant		ن ننن	nuːn	نُون	U+0646: ARABIC LETTER NOON	arabic
													
و		w¶	w	w (uː)	w ū		consonant/mater lectionis		و ـو	waːw	وَاو	U+0648: ARABIC LETTER WAW	arabic
ر		r	r	r	r		consonant		ر ـر	raːʔ	رَاء	U+0631: ARABIC LETTER REH	arabic
ل		l	l	l	l		consonant		ل للل	laːm	لاَمْ	U+0644: ARABIC LETTER LAM	arabic
ي		y¶	y	j (iː)	y ī		consonant/mater lectionis		ي ييي	jaːʔ	يَاء	U+064A: ARABIC LETTER YEH	arabic
													
													
ِ		I¶	i	ɪ	i		vowel			kasrah	كَسْرَة	U+0650: ARABIC KASRA​	arabic
ٍ		I	iⁿ	ɪn			vowel			kasratān		U+064D: ARABIC KASRATAN​	arabic
ُ		U¶	u	ʊ	u		vowel			ḍammah	ضَمَّة	U+064F: ARABIC DAMMA​	arabic
ٌ		U	uⁿ	ʊn			vowel			ḍammatān		U+064C: ARABIC DAMMATAN​	arabic
َ		A¶	a	a	a		vowel			fatḥah	فَتْحَة	U+064E: ARABIC FATHA​	arabic
ً		A	aⁿ	an			vowel			fatḥatān		U+064B: ARABIC FATHATAN​	arabic
ٰ		A	̍	aː	̍		vowel			alīf khanjariyyah	أَلِيف خَنْجَرِيَّة	U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	arabic
													
ّ		&	˖		ᵚ		gemination mark			shaddah	شَدَّة	U+0651: ARABIC SHADDA​	arabic
ْ		*	͓		̊		vowel absence marker			sukūn	سُكُون	U+0652: ARABIC SUKUN​	arabic
ٔ		}	ʿ	ʔ	͗		hamza					U+0654: ARABIC HAMZA ABOVE​	arabic
ٕ		}	˓	ʔ	̹		hamza					U+0655: ARABIC HAMZA BELOW​	arabic
ٓ	o	}	~				maddah diacritic	used with ا				U+0653: ARABIC MADDAH ABOVE​	arabic
													
													
ـ		_	_		_		baseline extender	infrequent		tatweel		U+0640: ARABIC TATWEEL	arabic
،		,	,				comma					U+060C: ARABIC COMMA	arabic
۔		.	.				full stop	infrequent				U+06D4: ARABIC FULL STOP	arabic
؛		;	;				semi-colon					U+061B: ARABIC SEMICOLON	arabic
؟		?	?				question mark					U+061F: ARABIC QUESTION MARK	arabic
٪		%	%				percent sign					U+066A: ARABIC PERCENT SIGN	arabic
؉		%	‰				per mille sign					U+0609 ARABIC-INDIC PER MILLE SIGN	arabic
٬		#	‛				thousands separator	infrequent				U+066C: ARABIC THOUSANDS SEPARATOR	arabic
٫		#	·				decimal separator	infrequent				U+066B: ARABIC DECIMAL SEPARATOR	arabic
؍		#	/				date separator	infrequent				U+060D: ARABIC DATE SEPARATOR	arabic
٭		[	*				punctuation	infrequent				U+066D: ARABIC FIVE POINTED STAR	arabic
«		<	 “				quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	latin
»		>	”				quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	latin
‹		<	‘				quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	latin
›		>	’				quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	latin
													
													
٠		0	0		0		digit					U+0660: ARABIC-INDIC DIGIT ZERO	arabic
١		1	1		1		digit			wɑːħid	وَاحِد	U+0661: ARABIC-INDIC DIGIT ONE	arabic
٢		2	2		2		digit			ʔiθnain	اِثْنَين	U+0662: ARABIC-INDIC DIGIT TWO	arabic
٣		3	3		3		digit			θɑlɑːθɑ	ثَلَاثَة	U+0663: ARABIC-INDIC DIGIT THREE	arabic
٤		4	4		4		digit			ʔɑrbɑʕɑ	أَربَعَة	U+0664: ARABIC-INDIC DIGIT FOUR	arabic
٥		5	5		5		digit			xɑmsɑ	خَمْسَة	U+0665: ARABIC-INDIC DIGIT FIVE	arabic
٦		6	6		6		digit			sittɑ	سِتَّة	U+0666: ARABIC-INDIC DIGIT SIX	arabic
٧		7	7		7		digit			sɑbʕɑ	سَبْعَة	U+0667: ARABIC-INDIC DIGIT SEVEN	arabic
٨		8	8		8		digit			θɑmɑːnjɑ	ثَمَانيَة	U+0668: ARABIC-INDIC DIGIT EIGHT	arabic
٩		9	9		9		digit			tisʕɑ	تِسْعَة	U+0669: ARABIC-INDIC DIGIT NINE	arabic
													
													
													
													
													
													
\u200C		=	ₓ				zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=	₊				zero-width joiner					U+200D: ZERO WIDTH JOINER	punctuation
\u2067			ʳˡⁱ				rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	punctuation
\u2066			ˡʳⁱ				ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	punctuation
\u2068			ᶠˢⁱ				first-strong isolate					U+2068: FIRST STRONG ISOLATE	punctuation
\u2069			ᵖᵈⁱ				pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	punctuation
\u202B			ʳˡᵉ				rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	punctuation
\u202A			ˡʳᵉ				ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	punctuation
\u202C			ᵖᵈᶠ				pop direction					U+202C: POP DIRECTIONAL FORMATTING	punctuation
\u200F			ʳˡᵐ				rtl mark					U+200F: RIGHT-TO-LEFT MARK	punctuation
\u200E			ˡʳᵐ				ltr mark					U+200E: LEFT-TO-RIGHT MARK	punctuation
\u034F			ᶜᵍʲ				combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	punctuation
\u061C			ᵃˡᵐ				arabic letter mark					U+061C: ARABIC LETTER MARK	punctuation
													
													
													
													
													
ڧ		q	q̇	q				infrequent	ڧ ڧڧڧ			U+06A7: ARABIC LETTER QAF WITH DOT ABOVE	arabic
ڢ		f	ḟ	f				infrequent	 ڢ ڢڢڢ			U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW	arabic
													
													
لا	s		lɑ	la			ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF		
لآ	s		lɑ̄	laː			ligature					U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE		
لأ	s		lɑ͑	lʔ			ligature					U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE		
لإ	s		lɑ̜	lʔ			ligature					U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW		
ال	s		ɑl	al			definite article					U+0627 U+0644: ARABIC LETTER ALEF, LETTER LAM		
														
ِي	s		iy	iː			long vowel					U+0650, U+064A: ARABIC KASRA​, LETTER YEH		
ُو	s		uw	uː			long vowel					U+064F, U+0648: ARABIC DAMMA​, ARABIC LETTER WAW 		
َا	s		aɑ	aː			long vowel					U+064E, U+0627: ARABIC FATHA​, LETTER ALEF		

													
اللّٰه	s		Allāh				ligature	infrequent				U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LAM, LAM, SHADDA, SUPERSCRIPT ALEF, HEH	

													
													


`



var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription": 5,
"equiv": 6,
"typeLoc": 7,
"statusLoc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 9,
"numLoc": 0,
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[5, 'LOC']]
}




