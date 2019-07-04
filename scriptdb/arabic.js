var spreadsheet = `
ا		a¶	ɑ	aː a ʔa -		-	consonant+vowel		ا ـا	’alif	أَلِفْ	U+0627: ARABIC LETTER ALEF
آ		a	ɑ̄	ʔaʔ ʔaː		ā	vowel		آ ـآ	ʼalīf maddah	أَلِفْ مَدَّة	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
أ		a	ɑ͑	ʔa ʔu ʔ		a	consonant+vowel		أ ـأ	ʼalīf hamzah	أَلِفْ هَمْزة	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
إ		a	ɑ̜	ʔi		i	consonant+vowel		إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW
ٱ		a	ɑ̃	a		’	consonant+vowel	infrequent	ٱ ـٱ	alifu l-waṣli	اَلِفُ ٱلْوَصْلِ	U+0671: ARABIC LETTER ALEF WASLA
ى		a	à	ɑː		ỳ	vowel		ى ـى	alif maqṣūrah	ألف مقصورة	U+0649: ARABIC LETTER ALEF MAKSURA
												
ت		t¶	t	t		t	consonant		ت تتت	tā’	تَاء	U+062A: ARABIC LETTER TEH
ط		T	t̴	t̴		ṭ	consonant		ط ططط	ṭā’	طَاء	U+0637: ARABIC LETTER TAH
ة		t	ẗ	- t		h	consonant+vowel		ة ـة	tāʼ marbūṭah	تاء مربوطة	U+0629: ARABIC LETTER TEH MARBUTA
ك		k	k	k		k	consonant		ك ككك	kāf	كَاف	U+0643: ARABIC LETTER KAF
ق		q	q	q		q	consonant		ق ققق	qāf	قَاف	U+0642: ARABIC LETTER QAF
ء		}	ʔ	ʔ		- ʾ	glottal stop		ء	hamzah	هَمْزة	U+0621: ARABIC LETTER HAMZA
												
ب		b	b	b		b	consonant		ب ببب	bā’	بَاء	U+0628: ARABIC LETTER BEH
د		d	d	d		d	consonant		د ـد	dāl	دَالْ	U+062F: ARABIC LETTER DAL
ض		d	d̴	d̴		ḍ	consonant		ض ضضض	ḍād	ضَاد	U+0636: ARABIC LETTER DAD
												
ف		f	f	f		f	consonant		ف ففف	fā’	فَاء	U+0641: ARABIC LETTER FEH
ث		Q	θ	θ		th	consonant		ث ثثث	thā’	ثَاء	U+062B: ARABIC LETTER THEH
س		s	s	s		s	consonant		س سسس	sīn	ِسِينْ	U+0633: ARABIC LETTER SEEN
ص		S	s̴	s̴		ṣ	consonant		ص صصص	ṣād	صَادْ	U+0635: ARABIC LETTER SAD
ش		s	ʃ	ʃ		sh	consonant		ش ششش	shīn	شِينْ	U+0634: ARABIC LETTER SHEEN
خ		x	x	x		kh	consonant		خ خخخ	khā’	خَاء	U+062E: ARABIC LETTER KHAH
ه		h¶	h	h		h	consonant		ه ههه	hā’	هَاء	U+0647: ARABIC LETTER HEH
ح		H	ħ	ħ		ḥ	consonant		ح ححح	ḥā’	حَاء	U+062D: ARABIC LETTER HAH
												
ز		z	z	z		z	consonant		ز ـز	zayn	زَاي	U+0632: ARABIC LETTER ZAIN
ظ		Z	z̴	z̴		ẓ	consonant		ظ ظظظ	ẓā’	ظَاء	U+0638: ARABIC LETTER ZAH
ذ		D	ð	ð		dh	consonant		ذ ـذ	dhāl	ذَال	U+0630: ARABIC LETTER THAL
ج		z	ʒ	ʒ		j	consonant		ج ججج	jīm	جِيمْ	U+062C: ARABIC LETTER JEEM
غ		y	ɣ	ɣ		gh	consonant		غ غغغ	ghayn	غَين	U+063A: ARABIC LETTER GHAIN
ع		{	ʕ	ʕ		ʿ	consonant		ع ععع	‘ayn	عَين	U+0639: ARABIC LETTER AIN
												
و		w¶	w	w u		w	consonant+vowel		و ـو	wāw	وَاو	U+0648: ARABIC LETTER WAW
ؤ		w	w͑	ʔu ʔ			consonant+vowel		ؤ ـؤ	wāw hamzah	وَاو هَمْزة	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE
ل		l	l	l		l	consonant		ل للل	lām	لاَمْ	U+0644: ARABIC LETTER LAM
ر		r	r	r		r	consonant		ر ـر	rā’	رَاء	U+0631: ARABIC LETTER REH
ي		y¶	y	j iː		y	consonant+vowel		ي ييي	yā’	يَاء	U+064A: ARABIC LETTER YEH
ئ		y	y͑	ʔɪ ʔ		ʸ	consonant+vowel		ئ ئئئ	yāʼ hamzah	يَاء هَمْزة	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
												
م		m	m	m		m	consonant		م ممم	mīm	مِيمْ	U+0645: ARABIC LETTER MEEM
ن		n	n	n		n	consonant		ن ننن	nūn	نُون	U+0646: ARABIC LETTER NOON
												
												
ِ		i	i	i		i	vowel			kasrah	كَسْرَة	U+0650: ARABIC KASRA​
ٍ		i	iⁿ	in		iⁿ	vowel			kasratān		U+064D: ARABIC KASRATAN​
ُ		u	u	u		u	vowel			ḍammah	ضَمَّة	U+064F: ARABIC DAMMA​
ٌ		u	uⁿ	un		uⁿ	vowel			ḍammatān		U+064C: ARABIC DAMMATAN​
َ		a	a	a		a	vowel			fatḥah	فَتْحَة	U+064E: ARABIC FATHA​
ً		a	aⁿ	an		aⁿ	vowel			fatḥatān		U+064B: ARABIC FATHATAN​
ّ		w	ᵚ			ᵚ	gemination mark			shaddah	شَدَّة	U+0651: ARABIC SHADDA​
ْ		*	°			̊	vowel absence marker			sukūn	سُكُون	U+0652: ARABIC SUKUN​
ٰ		[	̍	aː		̍	vowel			alīf khanjariyyah	أَلِيف خَنْجَرِيَّة	U+0670: ARABIC LETTER SUPERSCRIPT ALEF​
ٔ		[	ʿ	ʾ		͗						U+0654: ARABIC HAMZA ABOVE​
ٕ		[	˓	ʾ		̹						U+0655: ARABIC HAMZA BELOW​
												
												
ـ		_	_			_	baseline extender	infrequent		tatweel		U+0640: ARABIC TATWEEL
،		,	,	,		,	comma					U+060C: ARABIC COMMA
۔		.	.	.		.	full stop	infrequent				U+06D4: ARABIC FULL STOP
؛		;	;	;		;	semi-colon					U+061B: ARABIC SEMICOLON
؟		?	?	?		?	question mark					U+061F: ARABIC QUESTION MARK
٪		%	%	%		%	percent mark					U+066A: ARABIC PERCENT SIGN
٫		[					decimal separator	infrequent				U+066B: ARABIC DECIMAL SEPARATOR
٬		[					thousands separator	infrequent				U+066C: ARABIC THOUSANDS SEPARATOR
												
												
٠		§	0			0	digit		٠			U+0660: ARABIC-INDIC DIGIT ZERO
١		§	1	1		1	digit		١	wɑːħid	وَاحِد	U+0661: ARABIC-INDIC DIGIT ONE
٢		§	2	2		2	digit		٢	ʔiθnain	اِثْنَين	U+0662: ARABIC-INDIC DIGIT TWO
٣		§	3	3		3	digit		٣	θɑlɑːθɑ	ثَلَاثَة	U+0663: ARABIC-INDIC DIGIT THREE
٤		§	4	4		4	digit		٤	ʔɑrbɑʕɑ	أَربَعَة	U+0664: ARABIC-INDIC DIGIT FOUR
٥		§	5	5		5	digit		٥	xɑmsɑ	خَمْسَة	U+0665: ARABIC-INDIC DIGIT FIVE
٦		§	6	6		6	digit		٦	sittɑ	سِتَّة	U+0666: ARABIC-INDIC DIGIT SIX
٧		§	7	7		7	digit		٧	sɑbʕɑ	سَبْعَة	U+0667: ARABIC-INDIC DIGIT SEVEN
٨		§	8	8		8	digit		٨	θɑmɑːnjɑ	ثَمَانيَة	U+0668: ARABIC-INDIC DIGIT EIGHT
٩		§	9	9		9	digit		٩	tisʕɑ	تِسْعَة	U+0669: ARABIC-INDIC DIGIT NINE
												
												
												
												
												
												
\u200C		=	ₓ				zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER
\u200D		=	₊				zero-width joiner					U+200D: ZERO WIDTH JOINER
\u2067			ʳˡⁱ				rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE
\u2066			ˡʳⁱ				ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE
\u2068			ᶠˢⁱ				first-strong isolate					U+2068: FIRST STRONG ISOLATE
\u2069			ᵖᵈⁱ				pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE
\u202B			ʳˡᵉ				rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING
\u202A			ˡʳᵉ				ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING
\u202C			ᵖᵈᶠ				pop direction					U+202C: POP DIRECTIONAL FORMATTING
\u200F			ʳˡᵐ				rtl mark					U+200F: RIGHT-TO-LEFT MARK
\u200E			ˡʳᵐ				ltr mark					U+200E: LEFT-TO-RIGHT MARK
\u034F			ᶜᵍʲ				combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​
\u061C			ᵃˡᵐ				arabic letter mark					U+061C: ARABIC LETTER MARK
												
												
												
												
												
اللّٰه	s		Allāh					infrequent				U+0627 U+0644 U+0644 U+0651 U+0670 U+0647: ARABIC LETTER ALEF, LAM, LAM, SHADDA, SUPERSCRIPT ALEF, HEH



`



var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
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

"othertranscriptions": [[6, 'LOC']]
}




