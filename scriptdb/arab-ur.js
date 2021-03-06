var spreadsheet = `
پ		p	p	p	p			consonant		پ پپپ	pe		U+067E: ARABIC LETTER PEH	arabic
ب		b	b	b	b			consonant		ب ببب	be		U+0628: ARABIC LETTER BEH	arabic
ت		t¶	t	t	t			consonant		ت تتت	te		U+062A: ARABIC LETTER TEH	arabic
ط		T	t̤	t̂	t	t̤		consonant		ط ططط	toe		U+0637: ARABIC LETTER TAH	arabic
د		d	d	d	d			consonant		د ـد	dɑːl		U+062F: ARABIC LETTER DAL	arabic
ٹ		t	ṭ	ʈ	ʈ	ṭ ʈ		consonant		ٹ ٹٹٹ	ʈe		U+0679: ARABIC LETTER TTEH	arabic
ڈ		d	ḍ	ɖ	ɖ	ḍ ɖ		consonant		ڈ ـڈ	ɖɑːl		U+0688: ARABIC LETTER DDAL	arabic
ک		k¶	k	k	k			consonant		ک ککک	kɑːf		U+06A9: ARABIC LETTER KEHEH	arabic
گ		g	g	g	g			consonant		گ گگگ	gɑːf		U+06AF: ARABIC LETTER GAF	arabic
ق		q	q	q	q			consonant		ق ققق	qɑːf		U+0642: ARABIC LETTER QAF	arabic
														
چ		c	c	ʧ	t͡ʃ	t͡ʃ		consonant		چ چچچ	ʧe		U+0686: ARABIC LETTER TCHEH	arabic
ج		j	j	ʤ	d͡ʒ	d͡ʒ		consonant		ج ججج	ʤiːm		U+062C: ARABIC LETTER JEEM	arabic
														
ف		f	f	f	f			consonant		ف ففف	fe		U+0641: ARABIC LETTER FEH	arabic
س		s¶	s	s	s			consonant		س سسس	siːn		U+0633: ARABIC LETTER SEEN	arabic
ص		S	ṣ	ŝ	s	ṣ		consonant		ص صصص	svɑːd		U+0635: ARABIC LETTER SAD	arabic
ث		S	s̱	ṡ	s	s̱		consonant		ث ثثث	se		U+062B: ARABIC LETTER THEH	arabic
ز		z	z	z	z			consonant		ز ـز	ze		U+0632: ARABIC LETTER ZAIN	arabic
ض		Z	ẓ	ẑ	z	ẓ		consonant		ض ضضض	zvɑːd		U+0636: ARABIC LETTER DAD	arabic
ظ		Z	z̤	ž	z	z̤		consonant		ظ ظظظ	zoe		U+0638: ARABIC LETTER ZAH	arabic
ذ		Z	ẕ	ż	z	ẕ		consonant		ذ ـذ	zɑːl		U+0630: ARABIC LETTER THAL	arabic
ش		s	sh	ʃ	ʃ	ʃ		consonant		ش ششش	ʃiːn		U+0634: ARABIC LETTER SHEEN	arabic
ژ		z	zh	ʒ	ʒ	ʒ		consonant		ژ ـژ	ʒe		U+0698: ARABIC LETTER JEH	arabic
خ		x	k͟h	x	x	k͟h		consonant		خ خخخ	xe		U+062E: ARABIC LETTER KHAH	arabic
غ		Y	g͟h	ɣ	ɣ	g͟h ɣ		consonant		غ غغغ	ɣain		U+063A: ARABIC LETTER GHAIN	arabic
ہ		h¶	h	h	ɦ ɑː ɛ ∅	ɦ ɑː ɛ ∅		consonant		ہ ہہہ	ʧʰoʈiː he		U+06C1: ARABIC LETTER HEH GOAL	arabic
ح		H	ḥ	ḫ	ɦ	ḥ		consonant		ح ححح	baɽiː he		U+062D: ARABIC LETTER HAH	arabic
ھ		h	h	ʰ	ʰ	ʰ		aspiration marker / calendar indicator		ھ ھھھ	do cašmī he		U+06BE: ARABIC LETTER HEH DOACHASHMEE	arabic
														
م		m	m	m	m			consonant		م ممم	miːm		U+0645: ARABIC LETTER MEEM	arabic
ن		n	n	n	n ◌̃			consonant/nasalisation marker		ن ننن	nuːn		U+0646: ARABIC LETTER NOON	arabic
ں		n	ṉ	ñ	◌̃	◌̃ ṉ		nasalisation indicator	word-final	ں ںںں	nuːn ɣunna		U+06BA: ARABIC LETTER NOON GHUNNA	arabic
														
و		w	v ū o au	ʋ	ʋ uː o ɔ ∅	ʋ uː ɔ ū		consonant+vowel		و ـو	vɑːuː		U+0648: ARABIC LETTER WAW	arabic
ر		r	r	r	r			consonant		ر ـر	re		U+0631: ARABIC LETTER REH	arabic
ڑ		r	ṛ	ɽ	ɽ	ṛ ɽ		consonant		ڑ ـڑ	ɽe		U+0691: ARABIC LETTER RREH	arabic
ع		{	ā o e ʿ –	ʿ	∅	ā		consonant		ع ععع	ain		U+0639: ARABIC LETTER AIN	arabic
ل		l	l	l	l			consonant		ل للل	lɑːm		U+0644: ARABIC LETTER LAM	arabic
ی		y	y ī e á	y	j iː e ɛ a	iː ɛ		consonant+vowel		ی ییی	ye		U+06CC: ARABIC LETTER FARSI YEH	arabic
														
														
بھ	s	B	bh	bʰ	bʱ								U+0628 U+06BE: ARABIC LETTER BEH, HEH DOACHASHMEE	
پھ	s	P	ph	pʰ	pʰ								U+067E U+06BE: ARABIC LETTER PEH, HEH DOACHASHMEE	
تھ	s	T	th	tʰ	t̪ʰ								U+062A U+06BE: ARABIC LETTER TEH, HEH DOACHASHMEE	
ٹھ	s	T	ṭh	ʈʰ	ʈʰ								U+0679 U+06BE: ARABIC LETTER TTEH, HEH DOACHASHMEE	
جھ	s	J	jh	ʤʰ	d͡ʒʰ								U+062C U+06BE: ARABIC LETTER JEEM, HEH DOACHASHMEE	
چھ	s	C	ch	čʰ	t͡ʃʰ								U+0686 U+06BE: ARABIC LETTER TCHEH, HEH DOACHASHMEE	
دھ	s	D	dh	dʰ	d̪ʱ								U+062F U+06BE: ARABIC LETTER DAL, HEH DOACHASHMEE	
ڈھ	s	D	ḍh	ɖʰ	ɖʱ								U+0688 U+06BE: ARABIC LETTER DDAL, HEH DOACHASHMEE	
رھ	s	R	ṛh	rʰ	rʱ								U+0631 U+06BE: ARABIC LETTER REH, HEH DOACHASHMEE	
ڑھ	s	R	ṛh	ɽʰ	ɽʱ								U+0691 U+06BE: ARABIC LETTER RREH, HEH DOACHASHMEE	
کھ	s	K	kh	kʰ	kʰ								U+06A9 U+06BE: ARABIC LETTER KEHEH, HEH DOACHASHMEE	
گھ	s	G	gh	gʰ	ɡʱ								U+06AF U+06BE: ARABIC LETTER GAF, HEH DOACHASHMEE	
لھ	s	L	lh	lʰ	lʱ								U+0644 U+06BE: ARABIC LETTER LAM, HEH DOACHASHMEE	
مھ	s	M	mh	mʰ	mʱ								U+0645 U+06BE: ARABIC LETTER MEEM, HEH DOACHASHMEE	
نھ	s	N	nh	nʰ	nʱ								U+0646 U+06BE: ARABIC LETTER NOON, HEH DOACHASHMEE	
هھ	s	H	hh	هʰ	hʱ								U+0647 U+06BE: ARABIC LETTER HEH, HEH DOACHASHMEE	
وھ	s	V	wh	vʰ	ʋʱ								U+0648 U+06BE: ARABIC LETTER WAW, HEH DOACHASHMEE	
یھ	s	Y	yh	yʰ	jʱ								U+06CC U+06BE: ARABIC LETTER FARSI YEH, HEH DOACHASHMEE	
														
														
ا		a	ā ʾ –	ɑ	a ɪ u iː e ɛ uː o ɔ ʊ ∅ ɑː			vowel		ا ـا	alɪf		U+0627: ARABIC LETTER ALEF	arabic
آ	dc	a	ā	ɑ̄	ɑː	ɑː ā	\u{627}\u{653}	vowel	initial only	آ ـآ	əlɪf mədd		U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	arabic
\u{627}\u{653}	s			ɑٓ				vowel	decomposed		əlɪf mədd		U+0627, U+0653: ARABIC LETTER ALEF, MADDAH ABOVE	
ئ	dc	i		ɪ͑	ɪ a iː ɛ	ɪ iː ɛ	\u{64A}\u{654}	vowel separator / izafat		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	arabic
\u{64A}\u{654}	s			ي‘	ɛ			vowel separator / izafat	decomposed				U+064A, U+0654: ARABIC LETTER YEH, HAMZA ABOVE	
ي	o			ẏ				chair for hamza	used with hamza only				U+064A: ARABIC LETTER YEH	
ے		e	ai e	ɛ	eː ɛː	eː ɛː		vowel	word-final only	ے	baɽiː je		U+06D2: ARABIC LETTER YEH BARREE	arabic
ئے	s	e		ɪ͑ɛ	ɛ			izafat	word-final only				U+0626, U+06D2: ARABIC LETTER YEH WITH HAMZA ABOVE, YEH BARREE	
														
ِ		I	i	i	i ɛ			vowel/izafat			zer		U+0650: ARABIC KASRA​	arabic
ٍ		I		iⁿ	in			vowel			in		U+064D: ARABIC KASRATAN​	arabic
ُ		U	u	u	u			vowel			peʃ		U+064F: ARABIC DAMMA​	arabic
ٗ		u		ᵘ	u			vowel					U+0657: ARABIC INVERTED DAMMA​	arabic
ٌ		U		uⁿ	un			vowel			un		U+064C: ARABIC DAMMATAN​	arabic
َ		A	a	a	ə			vowel			zəbər		U+064E: ARABIC FATHA​	arabic
ً		A		aⁿ	an			vowel			an		U+064B: ARABIC FATHATAN​	arabic
														
ۂ	dc	e	yi	e͑	ɛ		\u{6C1}\u{654}	izafat		ۂ ۂۂۂ	ɪzɑːfat		U+06C2: ARABIC LETTER HEH GOAL WITH HAMZA ABOVE	arabic
\u{6C1}\u{654}	s		yi	h‘	ɛ			izafat	decomposed				U+06C1, U+0654: ARABIC LETTER HEH GOAL, HAMZA ABOVE	
ٔ		\'		‘	ɛ			izafat / vowel separator	used only with he for izafat		hamzaː		U+0654: ARABIC HAMZA ABOVE​	arabic
ء		}		ʾ				vowel separator / calendar indicator		ء	hamzaː		U+0621: ARABIC LETTER HAMZA	arabic
ؤ		u	u'	u͑	uː o		\u{648}\u{654}	vowel separator+vowel		ؤ ـؤ			U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	arabic
\u{648}\u{654}	s	u	u'	w‘	uː o			vowel separator+vowel	decomposed				U+0648, U+0654: ARABIC LETTER WAW, HAMZA ABOVE	arabic
														
أ	x			ɑ͑				consonant+vowel		أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	arabic
ۓ	x			ɛ͑	e ɛ			izafat		ۓ	ɪzɑːfat		U+06D3: ARABIC LETTER YEH BARREE WITH HAMZA ABOVE	arabic
ۀ	x			h͑						ۀ ـۀ			U+06C0: ARABIC LETTER HEH WITH YEH ABOVE	arabic
														
														
ّ		&		˖				gemination mark			taʃdiːd		U+0651: ARABIC SHADDA​	arabic
ْ		*		͓				vowel absence marker			sukuːn/ʤazm		U+0652: ARABIC SUKUN​	arabic
ٰ		a		ɑ̇	aː			superscript alef	with word-final ی				U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	arabic
یٰ	s	a		yɑ̇	aː			vowel					U+06CC, U+0670: ARABIC LETTER FARSI YEH, SUPERSCRIPT ALEF	
ٖ				ᵢ	i			vowel quality indicator					U+0656: ARABIC SUBSCRIPT ALEF​	arabic
٘		n		ᵑ				nasalisation mark	with word-medial ن				U+0658: ARABIC MARK NOON GHUNNA​	arabic
ن٘	s	n		nᵑ	̃			nasalisation					U+0646, U+0658: ARABIC LETTER NOON, MARK NOON GHUNNA	
ٓ	o	}		~				maddah diacritic	used with ا only				U+0653: ARABIC MADDAH ABOVE​	arabic
														
														
؀		#		#				number sign					U+0600: ARABIC NUMBER SIGN	arabic
؁								calendar indicator			sənh		U+0601: ARABIC SIGN SANAH	arabic
؂								footnote marker					U+0602: ARABIC FOOTNOTE MARKER	arabic
؃								page number marker			səfəh		U+0603: ARABIC SIGN SAFHA	arabic
؄								era marker					U+0604: ARABIC SIGN SAMVAT	arabic
؎								poetic verse sign					U+060E: ARABIC POETIC VERSE SIGN	arabic
؏								poetic line marker			misrə		U+060F: ARABIC SIGN MISRA	arabic
ؐ								honorific			sallallao alae va sallam		U+0610: ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM​	arabic
ؑ								honorific			alejsallam		U+0611: ARABIC SIGN ALAYHE ASSALLAM​	arabic
ؒ								honorific			raːmatʊlla alee		U+0612: ARABIC SIGN RAHMATULLAH ALAYHE​	arabic
ؓ								honorific			raziallaːo ano		U+0613: ARABIC SIGN RADI ALLAHOU ANHU​	arabic
ؔ								author name marker					U+0614: ARABIC SIGN TAKHALLUS​	arabic
														
														
ـ		_		_				baseline extender					U+0640: ARABIC TATWEEL	arabic
،		,	,	,				comma			əʃɑːrɪjɑ		U+060C: ARABIC COMMA	arabic
۔		.	.	.				full stop					U+06D4: ARABIC FULL STOP	arabic
؛		;	;	;				semi-colon					U+061B: ARABIC SEMICOLON	arabic
؟		?	?	?				question mark					U+061F: ARABIC QUESTION MARK	arabic
٪		%	%	%				percent mark					U+066A: ARABIC PERCENT SIGN	arabic
٬		#		‛				thousands separator					U+066C: ARABIC THOUSANDS SEPARATOR	arabic
٫		#		·				decimal separator					U+066B: ARABIC DECIMAL SEPARATOR	arabic
														
														
۰		0	0	0̣				digit		٠	sɪfr		U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	arabic
۱		1	1	1̣				digit		١	ek		U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	arabic
۲		2	2	2̣				digit		٢	do		U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	arabic
۳		3	3	3̣				digit		٣	tiːn		U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	arabic
۴		4	4	4̣				digit		٤	ʧɑːr		U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	arabic
۵		5	5	5̣				digit		٥	pɑ̃ːʧ		U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	arabic
۶		6	6	6̣				digit		٦	ʧʰe		U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	arabic
۷		7	7	7̣				digit		٧	sɑːt		U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	arabic
۸		8	8	8̣				digit		٨	ɑːʈʰ		U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	arabic
۹		9	9	9̣				digit		٩	nəʊ		U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	arabic
														
														
														
														
														
														
\u200C		=		ₓ		ᶻʷⁿʲ		zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=		₊		ᶻʷʲ		zero-width joiner					U+200D: ZERO WIDTH JOINER	punctuation
\u2067				ʳˡⁱ		ʳˡⁱ		rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	punctuation
\u2066				ˡʳⁱ		ˡʳⁱ⁨		ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	punctuation
\u2068				ᶠˢⁱ		ᶠˢⁱ		first-strong isolate					U+2068: FIRST STRONG ISOLATE	punctuation
\u2069				ᵖᵈⁱ		ᵖᵈⁱ		pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	punctuation
\u202B				ʳˡᵉ		ʳˡᵉ		rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	punctuation
\u202A				ˡʳᵉ		ˡʳᵉ		ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	punctuation
\u202C				ᵖᵈᶠ		ᵖᵈᶠ		pop direction					U+202C: POP DIRECTIONAL FORMATTING	punctuation
\u200F				ʳˡᵐ		ʳˡᵐ		rtl mark					U+200F: RIGHT-TO-LEFT MARK	punctuation
\u200E				ˡʳᵐ		ˡʳᵐ		ltr mark					U+200E: LEFT-TO-RIGHT MARK	punctuation
\u034F				ᶜᵍʲ		ᶜᵍʲ		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	punctuation
\u061C				ᵃˡᵐ		ᵃˡᵐ		arabic letter mark					U+061C: ARABIC LETTER MARK	punctuation

`


var cols = {
"class": 1,
"key":2,
"transcription":3,
"transLoc": 4,
"ipaLoc": 5,
"latin": 6,
"transckey": 0,
"equiv": 7,
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
"block": 14,

"othertranscriptions": [[3, 'ALA-LC']]
}


