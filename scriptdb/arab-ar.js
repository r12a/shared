var spreadsheet = `arab-ar	key	ipa	ipa+	translit	LOC	kbd	class	status	type	usage	equiv	shape	native name	name	ucs name	block
\u0020							Zs	u	space						U+0020: SPACE	
ـ	_			_		J	Lm	i	baseline extender					tatweel	U+0640: ARABIC TATWEEL	✓
-	-			-	-			u	hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd	u	non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash						U+2013: EN DASH	✓
—	-			—	—		Pd		em dash						U+2014: EM DASH	✓
،	,			,	,	K	Po		comma						U+060C: ARABIC COMMA	✓
؛	;			;		P	Po		semicolon						U+061B: ARABIC SEMICOLON	✓
:	:			:	:	:	Po		colon						U+003A: COLON	✓
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
؟	?			?	?	?	Po		question mark						U+061F: ARABIC QUESTION MARK	✓
.	.			.	.		Po		full stop						U+002E: FULL STOP	✓
۔	.			.̣	.		Po	u	full stop						U+06D4: ARABIC FULL STOP	✓
…	.			…	…	"	Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	✓
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	✓
[	(			[	[	F	Ps	u	bracket						U+005B: LEFT SQUARE BRACKET	
﴾	(			[˙			Pe	i	ornate parenthesis						U+FD3E: ORNATE LEFT PARENTHESIS	✓
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS	✓
]	)			]	]	D	Pe	u	bracket						U+005D: RIGHT SQUARE BRACKET	
﴿	)			]˙			Ps	i	ornate parenthesis						U+FD3F: ORNATE RIGHT PARENTHESIS	✓
٭	[			*			Po	i	punctuation						U+066D: ARABIC FIVE POINTED STAR	✓
ْ	*			͞		X	Mn	i	vowel absence marker				سُكُون	sukūn	U+0652: ARABIC SUKUN	✓
ʼ	\'			ʼ	ʼ		Lm	u	apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
ّ	&			˖		±	Mn	i	gemination mark				شَدَّة	shaddah	U+0651: ARABIC SHADDA	✓
٬	#			ᵗ			Po		thousands separator						U+066C: ARABIC THOUSANDS SEPARATOR	✓
٫	#			ᵈ			Po		decimal separator						U+066B: ARABIC DECIMAL SEPARATOR	✓
؍	#			/			Po	i	date separator						U+060D: ARABIC DATE SEPARATOR	✓
«	<			«	“	=	Pi		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	<			‹		}	Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
“	<			“	“	E	Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
‘	<			'		Q	Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
»	>			»	”	-	Pf		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
›	>			›		{	Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
”	>			”	”	R	Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
’	>			'		W	Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
																
*	*			*	*		Po	u	asterisk						U+002A ASTERISK	
§	*			§	§		Po	u	section sign						U+00A7: SECTION SIGN	
†	*			†	†		Po	u	dagger						U+2020: DAGGER	
‡	*			‡	‡		Po	u	double dagger						U+2021: DOUBLE DAGGER	
′	\'			′	′		Po	u	prime						U+2032: PRIME	
″	"			″	″		Po	u	double prime						U+2033: DOUBLE PRIME	
•	•			•			Po	u	bullet						U+2022: BULLET	
/						L	Po	u								
\u200C	=			ₓ			Cf		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf		zero-width joiner						U+200D: ZERO WIDTH JOINER	
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
																
أ	}	ʔ		ɑ͑	a u	H	Lo		glottal stop		\u{627}\u{654}	أ ـأ	أَلِفْ هَمْزة	ʔalif hamza	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	✓
إ	}	ʔ		i̜	i	Y	Lo		glottal stop		\u{627}\u{655}	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	✓
آ	}	ʔaː		ɑ̃	ā ’ā	N	Lo		glottal stop		\u{627}\u{653}	آ ـآ	أَلِفْ مَدَّة	ʔalif madda	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	✓
ء	}	ʔ		ʔ		x	Lo		glottal stop			ء	هَمْزة	hamzah	U+0621: ARABIC LETTER HAMZA	✓
ٔ	}	ʔ		ʿ			Mn	r	hamza	Found in decomposed text only.					U+0654: ARABIC HAMZA ABOVE	✓
ٕ	}	ʔ		˓			Mn	r	hamza	Found in decomposed text only.					U+0655: ARABIC HAMZA BELOW	✓
ٓ	}	ʔ		~		G	Mn	r	maddah diacritic	Found in decomposed text only; used only with ا.					U+0653: ARABIC MADDAH ABOVE	✓
ؤ	W	ʔ		w͑		c	Lo		glottal stop		\u{648}\u{654}	ؤ ـؤ	وَاو هَمْزة	waːw hamza	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	✓
ئ	Y	ʔ		y͑		z	Lo		glottal stop		\u{64A}\u{654}	ئ ئئئ	يَاء هَمْزة	jaːʔ hamza	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	✓
\u{627}\u{654}		ʔ		ɑʿ	A U		s		glottal stop						U+0627, 0654: ARABIC LETTER ALEF, HAMZA ABOVE	
\u{627}\u{655}		ʔ		i˓	I		s		glottal stop						U+0627, 0655: ARABIC LETTER ALEF, HAMZA BELOW	
\u{627}\u{653}		ʔaː		ɑ~	Ā ’Ā		s		glottal stop						U+0627, U+0653: ARABIC LETTER ALEF, MADDAH ABOVE	
\u{648}\u{654}		ʔ		wʿ			s		glottal stop						U+0648, U+0654: ARABIC LETTER WAW, HAMZA ABOVE	
\u{64A}\u{654}		ʔ		yʿ			s		glottal stop						U+064A, U+0654: ARABIC LETTER YEH, HAMZA ABOVE	
																
پ	p	p		p	p	F	Lo	l	consonant			پ پپپ			U+067E: ARABIC LETTER PEH	✓
ب	b	b		b	b	f	Lo		consonant			ب ببب	بَاء	baːʔ	U+0628: ARABIC LETTER BEH	✓
ت	t¶	t		t	t	j	Lo		consonant			ت تتت	تَاء	taːʔ	U+062A: ARABIC LETTER TEH	✓
ط	T	tˤ		ᵵ	ṭ		Lo		pharyngealised consonant			ط ططط	طَاء	tˤɑːʔ	U+0637: ARABIC LETTER TAH	✓
چ	c	t͡ʃ		ʧ	ch	{	Lo	l	consonant			چ چچچ			U+0686: ARABIC LETTER TCHEH	✓
د	d¶	d		d	d	]	Lo		consonant			د ـد	دَالْ	daːl	U+062F: ARABIC LETTER DAL	✓
ض	D	dˤ		ᵭ	ḍ	q	Lo		pharyngealised consonant			ض ضضض	ضَاد	dˤɑːd	U+0636: ARABIC LETTER DAD	✓
ج	j	d͡ʒ ʒ		ʤ	j	[	Lo		consonant			ج ججج	جِيمْ	ʤiːm	U+062C: ARABIC LETTER JEEM	✓
ك	k	k		k	k	;	Lo		consonant			ك ككك	كَاف	kaːf	U+0643: ARABIC LETTER KAF	✓
ق	q¶	q		q	q	r	Lo		consonant			ق ققق	قَاف	qaːf	U+0642: ARABIC LETTER QAF	✓
ڧ	q	q		q̇	q		Lo	i	consonant	Maghrebi form, used in North Africa.		ڧ ڧڧڧ			U+06A7: ARABIC LETTER QAF WITH DOT ABOVE	✓
ف	f¶	f		f	f	t	Lo		consonant			ف ففف	فَاء	faːʔ	U+0641: ARABIC LETTER FEH	✓
ڢ	f	f		ḟ	f		Lo	i	consonant	Maghrebi form, used in North Africa.		ڢ ڢڢڢ			U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW	✓
ڤ	v	v		v	v	T	Lo	l	consonant			ڤ ڤڤڤ			U+06A4: ARABIC LETTER VEH	✓
ث	@	θ		θ	th	e	Lo		consonant			ث ثثث	ثَاء	θaːʔ	U+062B: ARABIC LETTER THEH	✓
ذ	d	ð		ð	dh	±	Lo		consonant			ذ ـذ	ذَال	ðaːl	U+0630: ARABIC LETTER THAL	✓
ظ	D	ðˤ zˤ		ð̴	ẓ	/	Lo		pharyngealised consonant			ظ ظظظ	ظَاء	ðˤɑːʔ	U+0638: ARABIC LETTER ZAH	✓
س	s	s		s	s	s	Lo		consonant			س سسس	سِينْ	siːn	U+0633: ARABIC LETTER SEEN	✓
ص	S	sˤ		ᵴ	ṣ	w	Lo		pharyngealised consonant			ص صصص	صَادْ	sˤɑːd	U+0635: ARABIC LETTER SAD	✓
ز	z	z		z	z	.	Lo		consonant			ز ـز	زَاي	zay / zajn	U+0632: ARABIC LETTER ZAIN	✓
ࢲ	z	zˤ		zˤ			Lo	l	pharyngealized consonant	Sometimes used for Berber sounds.					U+08B2: ARABIC LETTER ZAIN WITH INVERTED V ABOVE	✓
ش	s	ʃ		ʃ	sh	a	Lo		consonant			ش ششش	شِينْ	ʃiːn	U+0634: ARABIC LETTER SHEEN	✓
خ	x	x		x	kh	o	Lo		consonant			خ خخخ	خَاء	xaːʔ	U+062E: ARABIC LETTER KHAH	✓
غ	g	ɣ		ɣ	gh	y	Lo		consonant			غ غغغ	غَين	ɣajn	U+063A: ARABIC LETTER GHAIN	✓
ع	{	ʕ		ʕ	ʿ	u	Lo		consonant			ع ععع	عَين	ʕajn	U+0639: ARABIC LETTER AIN	✓
ح	H	ħ		ħ	ḥ	p	Lo		consonant			ح ححح	حَاء	ħaːʔ	U+062D: ARABIC LETTER HAH	✓
ه	h¶	h		h	h	i	Lo		consonant			ه ههه	هَاء	haːʔ	U+0647: ARABIC LETTER HEH	✓
م	m	m		m	m	l	Lo		consonant			م ممم	مِيمْ	miːm	U+0645: ARABIC LETTER MEEM	✓
ن	n	n		n	n	k	Lo		consonant			ن ننن	نُون	nuːn	U+0646: ARABIC LETTER NOON	✓
و	w¶	w (uː)		w	w ū aw	,	Lo		consonant/mater lectionis			و ـو	وَاو	waːw	U+0648: ARABIC LETTER WAW	✓
ر	r	r		r	r	v	Lo		consonant			ر ـر	رَاء	raːʔ	U+0631: ARABIC LETTER REH	✓
ل	l	l		l	l	g	Lo		consonant			ل للل	لاَمْ	laːm	U+0644: ARABIC LETTER LAM	✓
ي	y¶	j (iː)		y	y ī ay	d	Lo		consonant/mater lectionis			ي ييي	يَاء	jaːʔ	U+064A: ARABIC LETTER YEH	✓
																
ال	e	al		ɑl	al-				definite article						U+0627 U+0644: ARABIC LETTER ALEF, LETTER LAM	
لا		laː		lɑ		b			ligature						U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF	
لآ		laː		lɑ̄		B			ligature						U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE	
لأ		lʔ		lɑ͑		G			ligature						U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE	
لإ		lʔ		lɑ̜		T			ligature						U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW	
																
ِ	i	ɪ		i	i	A	Mn	i	vowel				كَسْرَة	kasra	U+0650: ARABIC KASRA	✓
ٍ	i	ɪn		iⁿ	in	A	Mn	i	vowel				كَسْرَةً	kasratān	U+064D: ARABIC KASRATAN	✓
اِ		i		ɑi	i			i	standalone vowel						U+0627 U+0650: ARABIC LETTER ALEF, KASRA	
ُ	u	ʊ		u	u	E	Mn	i	vowel				ضَمَّة	dˤamma	U+064F: ARABIC DAMMA	✓
ٌ	u	ʊn		uⁿ	un	R	Mn	i	vowel				ضَمَّةً	ḍammatān	U+064C: ARABIC DAMMATAN	✓
ا	o	∅ (aː)		ɑ	- ā	h	Lo		consonant/mater lectionis			ا ـا	أَلِفْ	ʔalif	U+0627: ARABIC LETTER ALEF	✓
َ	a	a		a	a	Q	Mn	i	vowel				فَتْحَة	fatħa	U+064E: ARABIC FATHA	✓
ً	a	an		aⁿ	an	W	Mn	i	vowel				فَتْحَةً	fatħatan	U+064B: ARABIC FATHATAN	✓
ٰ	A	aː		̍		H	Mn	i	vowel				أَلِيف خَنْجَرِيَّة	alɪf xand͡ʒarijja	U+0670: ARABIC LETTER SUPERSCRIPT ALEF	✓
اَ		a		ɑa	a			i	standalone vowel						U+0627 U+064E: ARABIC LETTER ALEF, FATHA	
ى	a	aː		à	á	n	Lo		vowel			ى ـى	ألف مقصورة	ʔalif maqsˤuːra	U+0649: ARABIC LETTER ALEF MAKSURA	✓
ة	a	- ʰ		ä	h t	m	Lo		feminine indicator			ة ـة	تاء مربوطة	taːʔ marbuːtˤɑh	U+0629: ARABIC LETTER TEH MARBUTA	✓
ٱ	}	a		ɑ̄	-		Lo	i	vowel			ٱ ـٱ	اَلِفُ ٱلْوَصْلِ	ʔalifu l-wasˤli	U+0671: ARABIC LETTER ALEF WASLA	✓
																
ِي		iː		iy	ī				long vowel						U+0650, U+064A: ARABIC KASRA , LETTER YEH	
ُو		uː		uw	ū				long vowel						U+064F, U+0648: ARABIC DAMMA , ARABIC LETTER WAW	
َا		aː		aɑ	ā				long vowel						U+064E, U+0627: ARABIC FATHA , LETTER ALEF	
اللّٰه		ʔaɫˈɫaːh		{Allāh}	Allāh			i	ligature						U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LAM, LAM, SHADDA, SUPERSCRIPT ALEF, HEH	
ﷲ		ʔaɫˈɫaːh		{allāh}	Allāh		Lo	i	ligature						U+FDF2: ARABIC LIGATURE ALLAH ISOLATED FORM	✓
ﷻ				{SALLALLAHOU ALAYHE WASALLAM}			Lo	i	ligature						U+FDFB: ARABIC LIGATURE JALLAJALALOUHOU	✓
ﷺ				{ALAYHE WASALLAM}			Lo	i	ligature						U+FDFA: ARABIC LIGATURE SALLALLAHOU ALAYHE WASALLAM	✓
﷽				{In the name of God, the Most Gracious, the Most Merciful}			So	i	ligature						U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM	✓
																
١	±			1̣	1	1	Nd		digit				وَاحِد	wɑːħid	U+0661: ARABIC-INDIC DIGIT ONE	✓
٢	±			2̣	2	2	Nd		digit				اِثْنَين	ʔiθnain	U+0662: ARABIC-INDIC DIGIT TWO	✓
٣	±			3̣	3	3	Nd		digit				ثَلَاثَة	θɑlɑːθɑ	U+0663: ARABIC-INDIC DIGIT THREE	✓
٤	±			4̣	4	4	Nd		digit				أَربَعَة	ʔɑrbɑʕɑ	U+0664: ARABIC-INDIC DIGIT FOUR	✓
٥	±			5̣	5	5	Nd		digit				خَمْسَة	xɑmsɑ	U+0665: ARABIC-INDIC DIGIT FIVE	✓
٦	±			6̣	6	6	Nd		digit				سِتَّة	sittɑ	U+0666: ARABIC-INDIC DIGIT SIX	✓
٧	±			7̣	7	7	Nd		digit				سَبْعَة	sɑbʕɑ	U+0667: ARABIC-INDIC DIGIT SEVEN	✓
٨	±			8̣	8	8	Nd		digit				ثَمَانيَة	θɑmɑːnjɑ	U+0668: ARABIC-INDIC DIGIT EIGHT	✓
٩	±			9̣	9	9	Nd		digit				تِسْعَة	tisʕɑ	U+0669: ARABIC-INDIC DIGIT NINE	✓
٠	±			0̣	0	0	Nd		digit						U+0660: ARABIC-INDIC DIGIT ZERO	✓
٪	%			٪			Po		percent sign						U+066A: ARABIC PERCENT SIGN	✓
؉	%			؉			Po		per mille sign						U+0609 ARABIC-INDIC PER MILLE SIGN	✓
%	%			%			Po		percentage mark						U+0025: PERCENT SIGN	✓
‰	%			‰			Po		per mille sign						U+2030: PER MILLE SIGN	✓
1				1	1		Nd		digit				وَاحِد	wɑːħid	U+0031: DIGIT ONE	
2				2	2		Nd		digit				اِثْنَين	ʔiθnain	U+0032: DIGIT TWO	
3				3	3		Nd		digit				ثَلَاثَة	θɑlɑːθɑ	U+0033: DIGIT THREE	
4				4	4		Nd		digit				أَربَعَة	ʔɑrbɑʕɑ	U+0034: DIGIT FOUR	
5				5	5		Nd		digit				خَمْسَة	xɑmsɑ	U+0035: DIGIT FIVE	
6				6	6		Nd		digit				سِتَّة	sittɑ	U+0036: DIGIT SIX	
7				7	7		Nd		digit				سَبْعَة	sɑbʕɑ	U+0037: DIGIT SEVEN	
8				8	8		Nd		digit				ثَمَانيَة	θɑmɑːnjɑ	U+0038: DIGIT EIGHT	
9				9	9		Nd		digit				تِسْعَة	tisʕɑ	U+0039: DIGIT NINE	
0				0	0		Nd		digit						U+0030: DIGIT ZERO	
࢐							Cf	u	currency symbol	Egyptian					U+0890: ARABIC POUND MARK ABOVE	✓
࢑							Cf	u	currency symbol	Egyptian					U+0891: ARABIC PIASTRE MARK ABOVE	✓
﷼		ri.jaːl		{RIAL}			Sc	i	currency symbol						U+FDFC: RIAL SIGN	✓
﵀				{RAHIMAHU ALLAAH}			So		word ligature	honorific					U+FD40: ARABIC LIGATURE RAHIMAHU ALLAAH	
﵁				{RADI ALLAAHU ANH}			So		word ligature	honorific					U+FD41: ARABIC LIGATURE RADI ALLAAHU ANH	
﵂				{RADI ALLAAHU ANHAA}			So		word ligature	honorific					U+FD42: ARABIC LIGATURE RADI ALLAAHU ANHAA	
﵃				{RADI ALLAAHU ANHUM}			So		word ligature	honorific					U+FD43: ARABIC LIGATURE RADI ALLAAHU ANHUM	
﵄				{RADI ALLAAHU ANHUMAA}			So		word ligature	honorific					U+FD44: ARABIC LIGATURE RADI ALLAAHU ANHUMAA	
﵅				{RADI ALLAAHU ANHUNNA}			So		word ligature	honorific					U+FD45: ARABIC LIGATURE RADI ALLAAHU ANHUNNA	
﵆				{SALLALLAAHU ALAYHI WA-AALIH}			So		word ligature	honorific					U+FD46: ARABIC LIGATURE SALLALLAAHU ALAYHI WA-AALIH	
﵇				{ALAYHI AS-SALAAM}			So		word ligature	honorific					U+FD47: ARABIC LIGATURE ALAYHI AS-SALAAM	
﵈				{ALAYHIM AS-SALAAM}			So		word ligature	honorific					U+FD48: ARABIC LIGATURE ALAYHIM AS-SALAAM	
﵉				{ALAYHIMAA AS-SALAAM}			So		word ligature	honorific					U+FD49: ARABIC LIGATURE ALAYHIMAA AS-SALAAM	
﵊				{ALAYHI AS-SALAATU WAS-SALAAM}			So		word ligature	honorific					U+FD4A: ARABIC LIGATURE ALAYHI AS-SALAATU WAS-SALAAM	
﵋				{QUDDISA SIRRAH}			So		word ligature	honorific					U+FD4B: ARABIC LIGATURE QUDDISA SIRRAH	
﵌				{SALLALLAHU ALAYHI WAAALIHEE WA-SALLAM}			So		word ligature	honorific					U+FD4C: ARABIC LIGATURE SALLALLAHU ALAYHI WAAALIHEE WA-SALLAM	
﵍				{ALAYHAA AS-SALAAM}			So		word ligature	honorific					U+FD4D: ARABIC LIGATURE ALAYHAA AS-SALAAM	
﵎				{TABAARAKA WA-TAAALAA}			So		word ligature	honorific					U+FD4E: ARABIC LIGATURE TABAARAKA WA-TAAALAA	
﵏				{RAHIMAHUM ALLAAH}			So		word ligature	honorific					U+FD4F: ARABIC LIGATURE RAHIMAHUM ALLAAH	
﷏				{SALAAMUHU ALAYNAA}			So		word ligature	honorific					U+FDCF: ARABIC LIGATURE SALAAMUHU ALAYNAA	
﷾				{SUBHAANAHU WA TAAALAA}			So		word ligature	honorific					U+FDFE: ARABIC LIGATURE SUBHAANAHU WA TAAALAA	
﷿				{AZZA WA JALL}			So		word ligature	honorific					U+FDFF: ARABIC LIGATURE AZZA WA JALL	
ﷴ				{MOHAMMAD}			Lo		word ligature	honorific					U+FDF4: ARABIC LIGATURE MOHAMMAD ISOLATED FORM	
﮲				{DOT ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBB2: ARABIC SYMBOL DOT ABOVE	
﮳				{DOT BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBB3: ARABIC SYMBOL DOT BELOW	
﮴				{TWO DOTS ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBB4: ARABIC SYMBOL TWO DOTS ABOVE	
﮵				{TWO DOTS BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBB5: ARABIC SYMBOL TWO DOTS BELOW	
﮶				{THREE DOTS ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBB6: ARABIC SYMBOL THREE DOTS ABOVE	
﮷				{THREE DOTS BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBB7: ARABIC SYMBOL THREE DOTS BELOW	
﮸				{THREE DOTS POINTING DOWNWARDS ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBB8: ARABIC SYMBOL THREE DOTS POINTING DOWNWARDS ABOVE	
﮹				{THREE DOTS POINTING DOWNWARDS BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBB9: ARABIC SYMBOL THREE DOTS POINTING DOWNWARDS BELOW	
﮺				{FOUR DOTS ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBBA: ARABIC SYMBOL FOUR DOTS ABOVE	
﮻				{FOUR DOTS BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBBB: ARABIC SYMBOL FOUR DOTS BELOW	
﮼				{DOUBLE VERTICAL BAR BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBBC: ARABIC SYMBOL DOUBLE VERTICAL BAR BELOW	
﮽				{TWO DOTS VERTICALLY ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBBD: ARABIC SYMBOL TWO DOTS VERTICALLY ABOVE	
﮾				{TWO DOTS VERTICALLY BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBBE: ARABIC SYMBOL TWO DOTS VERTICALLY BELOW	
﮿				{RING}			Sk		independent ijam symbol	pedagogical use only					U+FBBF: ARABIC SYMBOL RING	
﯀				{SMALL TAH ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBC0: ARABIC SYMBOL SMALL TAH ABOVE	
﯁				{SMALL TAH BELOW}			Sk		independent ijam symbol	pedagogical use only					U+FBC1: ARABIC SYMBOL SMALL TAH BELOW	
﯂				{WASLA ABOVE}			Sk		independent ijam symbol	pedagogical use only					U+FBC2: ARABIC SYMBOL WASLA ABOVE	
																
ؐ				{SIGN SALLALLAHOU ALAYHE WASSALLAM}					honorific diacritic	honorific					U+0610: ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM	
ؑ				{SIGN ALAYHE ASSALLAM}					honorific diacritic	honorific					U+0611: ARABIC SIGN ALAYHE ASSALLAM	
ؒ				{SIGN RAHMATULLAH ALAYHE}					honorific diacritic	honorific					U+0612: ARABIC SIGN RAHMATULLAH ALAYHE	
ؓ				{SIGN RADI ALLAHOU ANHU}					honorific diacritic	honorific					U+0613: ARABIC SIGN RADI ALLAHOU ANHU	
ؔ							Mn		author name marker	honorific					U+0614: ARABIC SIGN TAKHALLUS	
ۜ							Mn​	r	koranic annotation						U+06DC: ARABIC SMALL HIGH SEEN	
\u06DD							Cf	r	koranic annotation						U+06DD: ARABIC END OF AYAH	
`																
																
latinPanel = '’ā ’ aː ā dˤ d͡ʒ ð ðˤ ḍ ħ ʰ ḥ iː ī ɪ ∅ θ sˤ ṣ ʃ tˤ t͡ʃ ṭ uː ū ʊ ɣ ʒ zˤ ẓ ʕ ʔ'																
																
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