var spreadsheet = `
ا		A¶	ɑ	aː a ʔa -			-	consonant+vowel		ا ـا	’alif	أَلِفْ	U+0627: ARABIC LETTER ALEF
آ	dc	A	ɑ̄	ʔaʔ ʔaː	\u{627}\u{653}		ā	vowel		آ ـآ	ʼalīf maddah	أَلِفْ مَدَّة	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
أ	dc	A	ɑ͑	ʔa ʔu ʔ	\u{627}\u{654}		a	consonant+vowel		أ ـأ	ʼalīf hamzah	أَلِفْ هَمْزة	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
إ	dc	A	ɑ̜	ʔi	\u{627}\u{655}		i	consonant+vowel		إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW
ٱ		A	ɑ̃	a			’	consonant+vowel	infrequent	ٱ ـٱ	alifu l-waṣli	اَلِفُ ٱلْوَصْلِ	U+0671: ARABIC LETTER ALEF WASLA
ى		A	à	ɑː			ỳ	vowel		ى ـى	alif maqṣūrah	ألف مقصورة	U+0649: ARABIC LETTER ALEF MAKSURA
													
ت		t¶	t	t			t	consonant		ت تتت	tā’	تَاء	U+062A: ARABIC LETTER TEH
ط		T	ᵵ	tˤ			ṭ	consonant		ط ططط	ṭā’	طَاء	U+0637: ARABIC LETTER TAH
ة		t	ẗ	- t			h	consonant+vowel		ة ـة	tāʼ marbūṭah	تاء مربوطة	U+0629: ARABIC LETTER TEH MARBUTA
ك		k	k	k			k	consonant		ك ككك	kāf	كَاف	U+0643: ARABIC LETTER KAF
ق		q¶	q	q			q	consonant		ق ققق	qāf	قَاف	U+0642: ARABIC LETTER QAF
ء		}	ʔ	ʔ			- ʾ	glottal stop		ء	hamzah	هَمْزة	U+0621: ARABIC LETTER HAMZA
													
ب		b	b	b			b	consonant		ب ببب	bā’	بَاء	U+0628: ARABIC LETTER BEH
د		d¶	d	d			d	consonant		د ـد	dāl	دَالْ	U+062F: ARABIC LETTER DAL
ض		D	ᵭ	dˤ			ḍ	consonant		ض ضضض	ḍād	ضَاد	U+0636: ARABIC LETTER DAD
													
ف		f¶	f	f			f	consonant		ف ففف	fā’	فَاء	U+0641: ARABIC LETTER FEH
ث		Q	θ	θ			th	consonant		ث ثثث	thā’	ثَاء	U+062B: ARABIC LETTER THEH
س		s	s	s			s	consonant		س سسس	sīn	ِسِينْ	U+0633: ARABIC LETTER SEEN
ص		S	ᵴ	sˤ			ṣ	consonant		ص صصص	ṣād	صَادْ	U+0635: ARABIC LETTER SAD
ش		s	ʃ	ʃ			sh	consonant		ش ششش	shīn	شِينْ	U+0634: ARABIC LETTER SHEEN
خ		x	x	x			kh	consonant		خ خخخ	khā’	خَاء	U+062E: ARABIC LETTER KHAH
ه		h¶	h	h			h	consonant		ه ههه	hā’	هَاء	U+0647: ARABIC LETTER HEH
ح		H	ħ	ħ			ḥ	consonant		ح ححح	ḥā’	حَاء	U+062D: ARABIC LETTER HAH
													
ز		z	z	z			z	consonant		ز ـز	zayn	زَاي	U+0632: ARABIC LETTER ZAIN
ظ		Z	ᵶ	dˤ			ẓ	consonant		ظ ظظظ	ẓā’	ظَاء	U+0638: ARABIC LETTER ZAH
ذ		d	ð	ð			dh	consonant		ذ ـذ	dhāl	ذَال	U+0630: ARABIC LETTER THAL
ج		z	ʒ	ʒ			j	consonant		ج ججج	jīm	جِيمْ	U+062C: ARABIC LETTER JEEM
غ		g	ɣ	ɣ			gh	consonant		غ غغغ	ghayn	غَين	U+063A: ARABIC LETTER GHAIN
ع		{	ʕ	ʕ			ʿ	consonant		ع ععع	‘ayn	عَين	U+0639: ARABIC LETTER AIN
													
و		w¶	w	w u			w	consonant+vowel		و ـو	wāw	وَاو	U+0648: ARABIC LETTER WAW
ؤ	dc	w	w͑	ʔu ʔ	\u{648}\u{654}			consonant+vowel		ؤ ـؤ	wāw hamzah	وَاو هَمْزة	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE
ل		l	l	l			l	consonant		ل للل	lām	لاَمْ	U+0644: ARABIC LETTER LAM
ر		r	r	r			r	consonant		ر ـر	rā’	رَاء	U+0631: ARABIC LETTER REH
ي		y¶	y	j iː			y	consonant+vowel		ي ييي	yā’	يَاء	U+064A: ARABIC LETTER YEH
ئ	dc	y	y͑	ʔɪ ʔ	\u{64A}\u{654}		ʸ	consonant+vowel		ئ ئئئ	yāʼ hamzah	يَاء هَمْزة	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
													
م		m	m	m			m	consonant		م ممم	mīm	مِيمْ	U+0645: ARABIC LETTER MEEM
ن		n	n	n			n	consonant		ن ننن	nūn	نُون	U+0646: ARABIC LETTER NOON
													
													
ِ		i	i	i			i	vowel			kasrah	كَسْرَة	U+0650: ARABIC KASRA​
ٍ		i	iⁿ	in			iⁿ	vowel			kasratān		U+064D: ARABIC KASRATAN​
ُ		u	u	u			u	vowel			ḍammah	ضَمَّة	U+064F: ARABIC DAMMA​
ٌ		u	uⁿ	un			uⁿ	vowel			ḍammatān		U+064C: ARABIC DAMMATAN​
َ		a	a	a			a	vowel			fatḥah	فَتْحَة	U+064E: ARABIC FATHA​
ً		a	aⁿ	an			aⁿ	vowel			fatḥatān		U+064B: ARABIC FATHATAN​
ّ		&	˖				ᵚ	gemination mark			shaddah	شَدَّة	U+0651: ARABIC SHADDA​
ْ		*	͓				̊	vowel absence marker			sukūn	سُكُون	U+0652: ARABIC SUKUN​
ٰ		[	̍	aː			̍	vowel			alīf khanjariyyah	أَلِيف خَنْجَرِيَّة	U+0670: ARABIC LETTER SUPERSCRIPT ALEF​
ٔ		[	ʿ	ʾ			͗	hamza					U+0654: ARABIC HAMZA ABOVE​
ٕ		[	˓	ʾ			̹	hamza					U+0655: ARABIC HAMZA BELOW​
ٓ	o	[	~					maddah diacritic	used with ا				U+0653: ARABIC MADDAH ABOVE​
													
													
ـ		_	_				_	baseline extender	infrequent		tatweel		U+0640: ARABIC TATWEEL
،		,	,	,			,	comma					U+060C: ARABIC COMMA
۔		.	.	.			.	full stop	infrequent				U+06D4: ARABIC FULL STOP
؛		;	;	;			;	semi-colon					U+061B: ARABIC SEMICOLON
؟		?	?	?			?	question mark					U+061F: ARABIC QUESTION MARK
٪		%	%	%			%	percent mark					U+066A: ARABIC PERCENT SIGN
٬		#	‛					thousands separator	infrequent				U+066C: ARABIC THOUSANDS SEPARATOR
٫		#	·					decimal separator	infrequent				U+066B: ARABIC DECIMAL SEPARATOR
؍		#	/					date separator	infrequent				U+060D: ARABIC DATE SEPARATOR
٭		[	*					punctuation	infrequent				U+066D: ARABIC FIVE POINTED STAR
«		<	 “					quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
»		>	”					quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
‹		<	‘					quotation mark					U+2018: LEFT SINGLE QUOTATION MARK
›		>	’					quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK
													
													
٠		±	0				0	digit					U+0660: ARABIC-INDIC DIGIT ZERO
١		±	1	1			1	digit			wɑːħid	وَاحِد	U+0661: ARABIC-INDIC DIGIT ONE
٢		±	2	2			2	digit			ʔiθnain	اِثْنَين	U+0662: ARABIC-INDIC DIGIT TWO
٣		±	3	3			3	digit			θɑlɑːθɑ	ثَلَاثَة	U+0663: ARABIC-INDIC DIGIT THREE
٤		±	4	4			4	digit			ʔɑrbɑʕɑ	أَربَعَة	U+0664: ARABIC-INDIC DIGIT FOUR
٥		±	5	5			5	digit			xɑmsɑ	خَمْسَة	U+0665: ARABIC-INDIC DIGIT FIVE
٦		±	6	6			6	digit			sittɑ	سِتَّة	U+0666: ARABIC-INDIC DIGIT SIX
٧		±	7	7			7	digit			sɑbʕɑ	سَبْعَة	U+0667: ARABIC-INDIC DIGIT SEVEN
٨		±	8	8			8	digit			θɑmɑːnjɑ	ثَمَانيَة	U+0668: ARABIC-INDIC DIGIT EIGHT
٩		±	9	9			9	digit			tisʕɑ	تِسْعَة	U+0669: ARABIC-INDIC DIGIT NINE
													
													
													
													
													
													
\u200C		=	ₓ					zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER
\u200D		=	₊					zero-width joiner					U+200D: ZERO WIDTH JOINER
\u2067			ʳˡⁱ					rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE
\u2066			ˡʳⁱ					ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE
\u2068			ᶠˢⁱ					first-strong isolate					U+2068: FIRST STRONG ISOLATE
\u2069			ᵖᵈⁱ					pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE
\u202B			ʳˡᵉ					rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING
\u202A			ˡʳᵉ					ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING
\u202C			ᵖᵈᶠ					pop direction					U+202C: POP DIRECTIONAL FORMATTING
\u200F			ʳˡᵐ					rtl mark					U+200F: RIGHT-TO-LEFT MARK
\u200E			ˡʳᵐ					ltr mark					U+200E: LEFT-TO-RIGHT MARK
\u034F			ᶜᵍʲ					combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​
\u061C			ᵃˡᵐ					arabic letter mark					U+061C: ARABIC LETTER MARK
													
													
													
													
													
اللّٰه	s		Allāh						infrequent				U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LAM, LAM, SHADDA, SUPERSCRIPT ALEF, HEH
ڧ		q	q̇						infrequent				U+06A7: ARABIC LETTER QAF WITH DOT ABOVE
ڢ		f	ḟ						infrequent				U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW
													
													
لا	-		lɑ					ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF
لآ	-		lɑ̄					ligature					U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE
لأ	-		lɑ͑					ligature					U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE
لإ	-		lɑ̜					ligature					U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW
ال	-		ɑl					definite article					U+0627 U+0644: ARABIC LETTER ALEF, LETTER LAM


`



var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"equiv": 5,
"transckey": 6,
"transcription": 7,
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
"nameLoc": 11,
"nnameLoc": 12,
"ucsName": 13,

"othertranscriptions": [[7, 'LOC']]
}




