var spreadsheet = `
ا		a¶	ɑ		-	aː a ʔa -	consonant+vowel		’alif	أَلِفْ	ا ـا	U+0627: ARABIC LETTER ALEF
آ		a	ɑ̄		ā	ʔaʔ ʔaː	vowel		ʼalīf maddah	أَلِفْ مَدَّة	آ ـآ	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
أ		a	ɑ͑		a	ʔa ʔu ʔ	consonant+vowel		ʼalīf hamzah	أَلِفْ هَمْزة	أ ـأ	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
إ		a	ɑ̜		i	ʔi	consonant+vowel				إ ـإ	U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW
ٱ		a	ɑ̃		’	a	consonant+vowel	infrequent	alifu l-waṣli	اَلِفُ ٱلْوَصْلِ	ٱ ـٱ	U+0671: ARABIC LETTER ALEF WASLA
ى		a	à		ỳ	ɑː	vowel		alif maqṣūrah	ألف مقصورة	ى ـى	U+0649: ARABIC LETTER ALEF MAKSURA
												
ت		t¶	t		t	t	consonant		tā’	تَاء	ت تتت	U+062A: ARABIC LETTER TEH
ط		T	t̴		ṭ	t̴	consonant		ṭā’	طَاء	ط ططط	U+0637: ARABIC LETTER TAH
ة		t	ẗ		h	- t	consonant+vowel		tāʼ marbūṭah	تاء مربوطة	ة ـة	U+0629: ARABIC LETTER TEH MARBUTA
ك		k	k		k	k	consonant		kāf	كَاف	ك ككك	U+0643: ARABIC LETTER KAF
ق		q	q		q	q	consonant		qāf	قَاف	ق ققق	U+0642: ARABIC LETTER QAF
ء		}	ʔ		- ʾ	ʔ	glottal stop		hamzah	هَمْزة	ء	U+0621: ARABIC LETTER HAMZA
												
ب		b	b		b	b	consonant		bā’	بَاء	ب ببب	U+0628: ARABIC LETTER BEH
د		d	d		d	d	consonant		dāl	دَالْ	د ـد	U+062F: ARABIC LETTER DAL
ض		d	d̴		ḍ	d̴	consonant		ḍād	ضَاد	ض ضضض	U+0636: ARABIC LETTER DAD
												
ف		f	f		f	f	consonant		fā’	فَاء	ف ففف	U+0641: ARABIC LETTER FEH
ث		Q	θ		th	θ	consonant		thā’	ثَاء	ث ثثث	U+062B: ARABIC LETTER THEH
س		s	s		s	s	consonant		sīn	ِسِينْ	س سسس	U+0633: ARABIC LETTER SEEN
ص		S	s̴		ṣ	s̴	consonant		ṣād	صَادْ	ص صصص	U+0635: ARABIC LETTER SAD
ش		s	ʃ		sh	ʃ	consonant		shīn	شِينْ	ش ششش	U+0634: ARABIC LETTER SHEEN
خ		x	x		kh	x	consonant		khā’	خَاء	خ خخخ	U+062E: ARABIC LETTER KHAH
ه		h¶	h		h	h	consonant		hā’	هَاء	ه ههه	U+0647: ARABIC LETTER HEH
ح		H	ħ		ḥ	ħ	consonant		ḥā’	حَاء	ح ححح	U+062D: ARABIC LETTER HAH
												
ز		z	z		z	z	consonant		zayn	زَاي	ز ـز	U+0632: ARABIC LETTER ZAIN
ظ		Z	z̴		ẓ	z̴	consonant		ẓā’	ظَاء	ظ ظظظ	U+0638: ARABIC LETTER ZAH
ذ		D	ð		dh	ð	consonant		dhāl	ذَال	ذ ـذ	U+0630: ARABIC LETTER THAL
ج		z	ʒ		j	ʒ	consonant		jīm	جِيمْ	ج ججج	U+062C: ARABIC LETTER JEEM
غ		y	ɣ		gh	ɣ	consonant		ghayn	غَين	غ غغغ	U+063A: ARABIC LETTER GHAIN
ع		{	ʕ		ʿ	ʕ	consonant		‘ayn	عَين	ع ععع	U+0639: ARABIC LETTER AIN
												
و		w¶	w		w	w u	consonant+vowel		wāw	وَاو	و ـو	U+0648: ARABIC LETTER WAW
ؤ		w	w͑			ʔu ʔ	consonant+vowel		wāw hamzah	وَاو هَمْزة	ؤ ـؤ	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE
ل		l	l		l	l	consonant		lām	لاَمْ	ل للل	U+0644: ARABIC LETTER LAM
ر		r	r		r	r	consonant		rā’	رَاء	ر ـر	U+0631: ARABIC LETTER REH
ي		y¶	y		y	j iː	consonant+vowel		yā’	يَاء	ي ييي	U+064A: ARABIC LETTER YEH
ئ		y	y͑		ʸ	ʔɪ ʔ	consonant+vowel		yāʼ hamzah	يَاء هَمْزة	ئ ئئئ	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
												
م		m	m		m	m	consonant		mīm	مِيمْ	م ممم	U+0645: ARABIC LETTER MEEM
ن		n	n		n	n	consonant		nūn	نُون	ن ننن	U+0646: ARABIC LETTER NOON
												
												
ِ		i	i		i	i	vowel		kasrah	كَسْرَة		U+0650: ARABIC KASRA​
ٍ		i	iⁿ		iⁿ	in	vowel		kasratān			U+064D: ARABIC KASRATAN​
ُ		u	u		u	u	vowel		ḍammah	ضَمَّة		U+064F: ARABIC DAMMA​
ٌ		u	uⁿ		uⁿ	un	vowel		ḍammatān			U+064C: ARABIC DAMMATAN​
َ		a	a		a	a	vowel		fatḥah	فَتْحَة		U+064E: ARABIC FATHA​
ً		a	aⁿ		aⁿ	an	vowel		fatḥatān			U+064B: ARABIC FATHATAN​
ّ		w	ᵚ		ᵚ		gemination mark		shaddah	شَدَّة		U+0651: ARABIC SHADDA​
ْ		*	°		̊		vowel absence marker		sukūn	سُكُون		U+0652: ARABIC SUKUN​
ٰ		[	̍		̍	aː	vowel		alīf khanjariyyah	أَلِيف خَنْجَرِيَّة		U+0670: ARABIC LETTER SUPERSCRIPT ALEF​
ٔ		[	ʿ		͗	ʾ						U+0654: ARABIC HAMZA ABOVE​
ٕ		[	˓		̹	ʾ						U+0655: ARABIC HAMZA BELOW​
												
												
ـ		_	_		_		baseline extender	infrequent	tatweel			U+0640: ARABIC TATWEEL
،		,	,		,	,	comma					U+060C: ARABIC COMMA
۔		.	.		.	.	full stop	infrequent				U+06D4: ARABIC FULL STOP
؛		;	;		;	;	semi-colon					U+061B: ARABIC SEMICOLON
؟		?	?		?	?	question mark					U+061F: ARABIC QUESTION MARK
٪		%	%		%	%	percent mark					U+066A: ARABIC PERCENT SIGN
٫		[					decimal separator	infrequent				U+066B: ARABIC DECIMAL SEPARATOR
٬		[					thousands separator	infrequent				U+066C: ARABIC THOUSANDS SEPARATOR
												
												
٠		§	0		0		digit				٠	U+0660: ARABIC-INDIC DIGIT ZERO
١		§	1		1	1	digit		wɑːħid	وَاحِد	١	U+0661: ARABIC-INDIC DIGIT ONE
٢		§	2		2	2	digit		ʔiθnain	اِثْنَين	٢	U+0662: ARABIC-INDIC DIGIT TWO
٣		§	3		3	3	digit		θɑlɑːθɑ	ثَلَاثَة	٣	U+0663: ARABIC-INDIC DIGIT THREE
٤		§	4		4	4	digit		ʔɑrbɑʕɑ	أَربَعَة	٤	U+0664: ARABIC-INDIC DIGIT FOUR
٥		§	5		5	5	digit		xɑmsɑ	خَمْسَة	٥	U+0665: ARABIC-INDIC DIGIT FIVE
٦		§	6		6	6	digit		sittɑ	سِتَّة	٦	U+0666: ARABIC-INDIC DIGIT SIX
٧		§	7		7	7	digit		sɑbʕɑ	سَبْعَة	٧	U+0667: ARABIC-INDIC DIGIT SEVEN
٨		§	8		8	8	digit		θɑmɑːnjɑ	ثَمَانيَة	٨	U+0668: ARABIC-INDIC DIGIT EIGHT
٩		§	9		9	9	digit		tisʕɑ	تِسْعَة	٩	U+0669: ARABIC-INDIC DIGIT NINE
												
												
												
												
												
												
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
"transckey": 4,
"transcription":5,
"ipaLoc": 6,
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
"nameLoc": 10,
"nnameLoc": 11,
"numLoc": 0,
"ucsName": 12,

"othertranscriptions": [[3, 'ULY'], [4, 'USY']]
}




