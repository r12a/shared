var spreadsheet = `
ا		∅ (aː)	ɑ	o	- ā	h	∅ aː	consonant/mater lectionis			ا ـا	أَلِفْ	ʔalif	U+0627: ARABIC LETTER ALEF	arabic
أ	dc	ʔ	ɑ͑	}	a u	H	ʔ	glottal stop		\u{627}\u{654}	أ ـأ	أَلِفْ هَمْزة	ʔalif hamza	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	arabic
\u{627}\u{654}	s	ʔ	ɑʿ		A U			glottal stop						U+0627, 0654: ARABIC LETTER ALEF, HAMZA ABOVE	
إ	dc	ʔ	i̜	}	i	Y		glottal stop		\u{627}\u{655}	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	arabic
\u{627}\u{655}	s	ʔ	i˓		I			glottal stop						U+0627, 0655: ARABIC LETTER ALEF, HAMZA BELOW​	arabic
آ	dc	ʔaː	ɑ̃	}	ā ’ā	N	ā ’ā	glottal stop		\u{627}\u{653}	آ ـآ	أَلِفْ مَدَّة	ʔalif madda	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	arabic
\u{627}\u{653}	s	ʔaː	ɑ~		Ā ’Ā			glottal stop						U+0627, U+0653: ARABIC LETTER ALEF, MADDAH ABOVE​	
ٱ		a	ɑ̄	}	-			glottal stop	infrequent		ٱ ـٱ	اَلِفُ ٱلْوَصْلِ	ʔalifu l-wasˤli	U+0671: ARABIC LETTER ALEF WASLA	arabic
ؤ	dc	ʔ	w͑	W	’	c	’	glottal stop		\u{648}\u{654}	ؤ ـؤ	وَاو هَمْزة	waːw hamza	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	arabic
\u{648}\u{654}	s	ʔ	wʿ		’			glottal stop						U+0648, U+0654: ARABIC LETTER WAW, HAMZA ABOVE	
ئ	dc	ʔ	y͑	Y	’	z		glottal stop		\u{64A}\u{654}	ئ ئئئ	يَاء هَمْزة	jaːʔ hamza	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	arabic
\u{64A}\u{654}	s	ʔ	yʿ		’			glottal stop						U+064A, U+0654: ARABIC LETTER YEH, HAMZA ABOVE	
ء		ʔ	ʔ	}	’	x		glottal stop			ء	هَمْزة	hamzah	U+0621: ARABIC LETTER HAMZA	arabic
															
پ		p	p	p	p	F		stop	foreign words only		پ پپپ			U+067E: ARABIC LETTER PEH	arabic
ب		b	b	b	b	f		stop			ب ببب	بَاء	baːʔ	U+0628: ARABIC LETTER BEH	arabic
ت		t	t	t¶	t	j		stop			ت تتت	تَاء	taːʔ	U+062A: ARABIC LETTER TEH	arabic
ط		tˤ	ᵵ	T	ṭ	'	tˤ ṭ	pharyngealised stop			ط ططط	طَاء	tˤɑːʔ	U+0637: ARABIC LETTER TAH	arabic
د		d	d	d¶	d	]		stop			د ـد	دَالْ	daːl	U+062F: ARABIC LETTER DAL	arabic
ض		dˤ	ᵭ	D	ḍ	q	dˤ ḍ	pharyngealised stop			ض ضضض	ضَاد	dˤɑːd	U+0636: ARABIC LETTER DAD	arabic
ك		k	k	k	k	;		stop			ك ككك	كَاف	kaːf	U+0643: ARABIC LETTER KAF	arabic
ق		q	q	q¶	q	r		stop			ق ققق	قَاف	qaːf	U+0642: ARABIC LETTER QAF	arabic
															
چ		t͡ʃ	ʧ	c	ch	{	t͡ʃ	affricate	foreign words only		چ چچچ			U+0686: ARABIC LETTER TCHEH	arabic
ج		d͡ʒ ʒ	ʤ	j	j	[	d͡ʒ ʒ	affricate/fricative			ج ججج	جِيمْ	ʤiːm	U+062C: ARABIC LETTER JEEM	arabic
															
ف		f	f	f¶	f	t		fricative			ف ففف	فَاء	faːʔ	U+0641: ARABIC LETTER FEH	arabic
ڤ		v	v	v	v	T		fricative	foreign words only		ڤ ڤڤڤ			U+06A4: ARABIC LETTER VEH	arabic
ث		θ	θ	@	th	e	θ	fricative			ث ثثث	ثَاء	θaːʔ	U+062B: ARABIC LETTER THEH	arabic
ذ		ð	ð	d	dh	±	ð	fricative			ذ ـذ	ذَال	ðaːl	U+0630: ARABIC LETTER THAL	arabic
ظ		ðˤ zˤ	ð̴	D	ẓ	/	ðˤ zˤ ẓ	pharyngealised fricative			ظ ظظظ	ظَاء	ðˤɑːʔ	U+0638: ARABIC LETTER ZAH	arabic
س		s	s	s	s	s		fricative			س سسس	سِينْ	siːn	U+0633: ARABIC LETTER SEEN	arabic
ز		z	z	z	z	.		fricative			ز ـز	زَاي	zay / zajn	U+0632: ARABIC LETTER ZAIN	arabic
ص		sˤ	ᵴ	S	ṣ	w	sˤ ṣ	pharyngealised fricative			ص صصص	صَادْ	sˤɑːd	U+0635: ARABIC LETTER SAD	arabic
ش		ʃ	ʃ	s	sh	a	ʃ	fricative			ش ششش	شِينْ	ʃiːn	U+0634: ARABIC LETTER SHEEN	arabic
خ		x	x	x	kh	o		fricative			خ خخخ	خَاء	xaːʔ	U+062E: ARABIC LETTER KHAH	arabic
غ		ɣ	ɣ	g	gh	y	ɣ	fricative			غ غغغ	غَين	ɣajn	U+063A: ARABIC LETTER GHAIN	arabic
ح		ħ	ħ	H	ḥ	p	ħ ḥ	fricative			ح ححح	حَاء	ħaːʔ	U+062D: ARABIC LETTER HAH	arabic
ع		ʕ	ʕ	{	ʿ	u	ʕ	fricative			ع ععع	عَين	ʕajn	U+0639: ARABIC LETTER AIN	arabic
ه		h	h	h¶	h	i		fricative			ه ههه	هَاء	haːʔ	U+0647: ARABIC LETTER HEH	arabic
															
م		m	m	m	m	l		nasal			م ممم	مِيمْ	miːm	U+0645: ARABIC LETTER MEEM	arabic
ن		n	n	n	n	k		nasal			ن ننن	نُون	nuːn	U+0646: ARABIC LETTER NOON	arabic
															
و		w (uː)	w	w¶	w ū aw	,	uː ū	approximant/mater lectionis			و ـو	وَاو	waːw	U+0648: ARABIC LETTER WAW	arabic
ر		r	r	r	r	v		trill			ر ـر	رَاء	raːʔ	U+0631: ARABIC LETTER REH	arabic
ل		l	l	l	l	g		lateral			ل للل	لاَمْ	laːm	U+0644: ARABIC LETTER LAM	arabic
ي		j (iː)	y	y¶	y ī ay	d	iː ī	approximant/mater lectionis			ي ييي	يَاء	jaːʔ	U+064A: ARABIC LETTER YEH	arabic
															
															
ِ		ɪ	i	i	i	A	ɪ	vowel				كَسْرَة	kasra	U+0650: ARABIC KASRA​	arabic
ٍ		ɪn	iⁿ	i	in	A		vowel				كَسْرَةً	kasratān	U+064D: ARABIC KASRATAN​	arabic
ُ		ʊ	u	u	u	E	ʊ	vowel				ضَمَّة	dˤamma	U+064F: ARABIC DAMMA​	arabic
ٌ		ʊn	uⁿ	u	un	R		vowel				ضَمَّةً	ḍammatān	U+064C: ARABIC DAMMATAN​	arabic
َ		a	a	a	a	Q		vowel				فَتْحَة	fatħa	U+064E: ARABIC FATHA​	arabic
ً		an	aⁿ	a	an	W		vowel				فَتْحَةً	fatħatan	U+064B: ARABIC FATHATAN​	arabic
ٰ		aː	̍	A		H		vowel				أَلِيف خَنْجَرِيَّة	alɪf xand͡ʒarijja	U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	arabic
															
ى		aː	à	a	á	n		vowel			ى ـى	ألف مقصورة	ʔalif maqsˤuːra	U+0649: ARABIC LETTER ALEF MAKSURA	arabic
ة		- ʰ	ä	a	h t	m	ʰ	feminine indicator			ة ـة	تاء مربوطة	taːʔ marbuːtˤɑh	U+0629: ARABIC LETTER TEH MARBUTA	arabic
															
															
															
ڧ		q	q̇	q	q			stop	infrequent		ڧ ڧڧڧ			U+06A7: ARABIC LETTER QAF WITH DOT ABOVE	arabic
ڢ		f	ḟ	f	f			fricative	infrequent		 ڢ ڢڢڢ			U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW	arabic
ࢲ		zˤ	zˤ	z			zˤ	pharyngealized fricative	infrequent					U+08B2: ARABIC LETTER ZAIN WITH INVERTED V ABOVE	arabic
															
															
															
لا	s	laː	lɑ			b		ligature						U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ	s	laː	lɑ̄			B		ligature						U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ	s	lʔ	lɑ͑			G		ligature						U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ	s	lʔ	lɑ̜			T		ligature						U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
ال	s	al	ɑl	e	al-			definite article						U+0627 U+0644: ARABIC LETTER ALEF, LETTER LAM	
															
ِي	s	iː	iy		ī			long vowel						U+0650, U+064A: ARABIC KASRA​, LETTER YEH	
ُو	s	uː	uw		ū			long vowel						U+064F, U+0648: ARABIC DAMMA​, ARABIC LETTER WAW 	
َا	s	aː	aɑ		ā			long vowel						U+064E, U+0627: ARABIC FATHA​, LETTER ALEF	
															
اللّٰه	s		{Allāh}		Allāh			ligature	infrequent					U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LAM, LAM, SHADDA, SUPERSCRIPT ALEF, HEH	
ﷲ			{allāh}		Allāh			ligature	infrequent					U+FDF2: ARABIC LIGATURE ALLAH ISOLATED FORM	arabic
ﷻ			{SALLALLAHOU ALAYHE WASALLAM}					ligature	infrequent					U+FDFB: ARABIC LIGATURE JALLAJALALOUHOU	arabic
ﷺ			{ALAYHE WASALLAM}					ligature	infrequent					U+FDFA: ARABIC LIGATURE SALLALLAHOU ALAYHE WASALLAM	arabic
															
															
															
															
															
ٔ		ʔ	ʿ	}				hamza						U+0654: ARABIC HAMZA ABOVE​	arabic
ٕ		ʔ	˓	}				hamza						U+0655: ARABIC HAMZA BELOW​	arabic
ٓ	o		~	}		G		maddah diacritic	used with ا					U+0653: ARABIC MADDAH ABOVE​	arabic
٭			*	[				punctuation	infrequent					U+066D: ARABIC FIVE POINTED STAR	arabic
															
															
															
ْ			͓	*		X		vowel absence marker				سُكُون	sukūn	U+0652: ARABIC SUKUN​	arabic
															
															
ّ			˖	&		±		gemination mark				شَدَّة	shaddah	U+0651: ARABIC SHADDA​	arabic
															
															
			»	@				opening head mark							
			«	@				closing head mark							
			›	@				2nd opening head							
			‹	@				2 closing head							
			§ᵃ	@				honorific							
			 §ᵇ	@				honorific							
			§ᶜ	@				honorific							
			°	@				extra							
															
															
.			.	.	.			full stop						U+002E: FULL STOP	arabic
۔	x		.	.	.			full stop	infrequent					U+06D4: ARABIC FULL STOP	arabic
،			,	,	,	K		comma						U+060C: ARABIC COMMA	arabic
:			:	:	:	:		colon						U+003A: COLON	arabic
؛			;	;		P		semicolon						U+061B: ARABIC SEMICOLON	arabic
!			!	!	!			exclamation mark						U+0021: EXCLAMATION MARK	arabic
؟			?	?	?	?		question mark						U+061F: ARABIC QUESTION MARK	arabic
															
															
…			…	.	…	"		ellipsis						U+2026: HORIZONTAL ELLIPSIS	arabic
															
															
															
«			«	<	“	=		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
»			»	>	”	-		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
‹			‹	<	‘	}		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	arabic
›			›	>	’	{		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	arabic
“			 “	<	“	E		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	arabic
”			”	>	”	R		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	arabic
‘			‘	<	‘	Q		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	arabic
’			’	>	’	W		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	arabic
															
															
															
(			(	(	(			parenthesis						U+0028: LEFT PARENTHESIS	arabic
[			[	(	[	F		bracket						U+005B: LEFT SQUARE BRACKET	arabic
)			)	)	)			parenthesis						U+0029: RIGHT PARENTHESIS	arabic
]			]	)	]	D		bracket						U+005D: RIGHT SQUARE BRACKET	arabic
﴾			⁅	(				ornate parenthesis						U+FD3E: ORNATE LEFT PARENTHESIS	arabic
﴿			⁆	)				ornate parenthesis						U+FD3F: ORNATE RIGHT PARENTHESIS	arabic
															
															
-			-	-	-			hyphen						U+2010: HYPHEN	arabic
‑			‑	-	‑			non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	arabic
–			–	-	–			en dash						U+2013: EN DASH	arabic
—			—	-	—			em dash						U+2014: EM DASH	arabic
															
															
ـ			_	_		J		baseline extender	infrequent				tatweel	U+0640: ARABIC TATWEEL	arabic
															
															
ʼ			ʼ		ʼ			apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§			§		§			section sign						U+00A7: SECTION SIGN	
†			†		†			dagger						U+2020: DAGGER	
‡			‡		‡			double dagger						U+2021: DOUBLE DAGGER	
′			′		′			prime						U+2032: PRIME	
″			″		″			double prime						U+2033: DOUBLE PRIME	
															
															
															
															
															
\u200C			ₓ	=				zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	arabic
\u200D			₊	=				zero-width joiner						U+200D: ZERO WIDTH JOINER	arabic
\u2067			ʳˡⁱ	=				rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	arabic
\u2066			ˡʳⁱ	=				ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	arabic
\u2068			ᶠˢⁱ	=				first-strong isolate						U+2068: FIRST STRONG ISOLATE	arabic
\u2069			ᵖᵈⁱ	=				pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	arabic
\u202B			ʳˡᵉ	=				rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	arabic
\u202A			ˡʳᵉ	=				ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	arabic
\u202C			ᵖᵈᶠ	=				pop direction						U+202C: POP DIRECTIONAL FORMATTING	arabic
\u200F			ʳˡᵐ	=				rtl mark						U+200F: RIGHT-TO-LEFT MARK	arabic
\u200E			ˡʳᵐ	=				ltr mark						U+200E: LEFT-TO-RIGHT MARK	arabic
\u034F			ᶜᵍʲ	=				combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	arabic
\u061C			ᵃˡᵐ	=				arabic letter mark						U+061C: ARABIC LETTER MARK	arabic
															
															
															
															
١			1̣	±	1	1		digit				وَاحِد	wɑːħid	U+0661: ARABIC-INDIC DIGIT ONE	arabic
٢			2̣	±	2	2		digit				اِثْنَين	ʔiθnain	U+0662: ARABIC-INDIC DIGIT TWO	arabic
٣			3̣	±	3	3		digit				ثَلَاثَة	θɑlɑːθɑ	U+0663: ARABIC-INDIC DIGIT THREE	arabic
٤			4̣	±	4	4		digit				أَربَعَة	ʔɑrbɑʕɑ	U+0664: ARABIC-INDIC DIGIT FOUR	arabic
٥			5̣	±	5	5		digit				خَمْسَة	xɑmsɑ	U+0665: ARABIC-INDIC DIGIT FIVE	arabic
٦			6̣	±	6	6		digit				سِتَّة	sittɑ	U+0666: ARABIC-INDIC DIGIT SIX	arabic
٧			7̣	±	7	7		digit				سَبْعَة	sɑbʕɑ	U+0667: ARABIC-INDIC DIGIT SEVEN	arabic
٨			8̣	±	8	8		digit				ثَمَانيَة	θɑmɑːnjɑ	U+0668: ARABIC-INDIC DIGIT EIGHT	arabic
٩			9̣	±	9	9		digit				تِسْعَة	tisʕɑ	U+0669: ARABIC-INDIC DIGIT NINE	arabic
٠			0̣	±	0	0		digit						U+0660: ARABIC-INDIC DIGIT ZERO	arabic
															
															
٬			‛	#				thousands separator						U+066C: ARABIC THOUSANDS SEPARATOR	arabic
٫			·	#				decimal separator						U+066B: ARABIC DECIMAL SEPARATOR	arabic
؍			/	#				date separator	infrequent					U+060D: ARABIC DATE SEPARATOR	arabic
															
															
															
٪			٪	%				percent sign						U+066A: ARABIC PERCENT SIGN	arabic
؉			؉	%				per mille sign						U+0609 ARABIC-INDIC PER MILLE SIGN	arabic
%			%	%				percentage mark						U+0025: PERCENT SIGN	arabic
‰			‰	%				per mille sign						U+2030: PER MILLE SIGN	arabic





`



var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc": 3,
"key":4,
"transcription": 5,
"kbd": 6,
"latin": 7,
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
"transckey": 0,

"othertranscriptions": [[5, 'LOC']]
}




