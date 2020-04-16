var spreadsheet = `
پ		p	p	p	p	consonant		پ پپپ	pe		U+067E: ARABIC LETTER PEH	arabic
ب		b	b	b	b	consonant		ب ببب	be		U+0628: ARABIC LETTER BEH	arabic
ت		t¶	t	t	t	consonant		ت تتت	te		U+062A: ARABIC LETTER TEH	arabic
ط		T	t̂	t	t̤	consonant		ط ططط	toe		U+0637: ARABIC LETTER TAH	arabic
د		d	d	d	d	consonant		د ـد	dɑːl		U+062F: ARABIC LETTER DAL	arabic
ٹ		t	ʈ	ʈ	ṭ	consonant		ٹ ٹٹٹ	ʈe		U+0679: ARABIC LETTER TTEH	arabic
ڈ		d	ɖ	ɖ	ḍ	consonant		ڈ ـڈ	ɖɑːl		U+0688: ARABIC LETTER DDAL	arabic
ک		k¶	k	k	k	consonant		ک ککک	kɑːf		U+06A9: ARABIC LETTER KEHEH	arabic
گ		g	g	g	g	consonant		گ گگگ	gɑːf		U+06AF: ARABIC LETTER GAF	arabic
ق		q	q	q	q	consonant		ق ققق	qɑːf		U+0642: ARABIC LETTER QAF	arabic
												
چ		c	ʧ	t͡ʃ	c	consonant		چ چچچ	ʧe		U+0686: ARABIC LETTER TCHEH	arabic
ج		j	ʤ	d͡ʒ	j	consonant		ج ججج	ʤiːm		U+062C: ARABIC LETTER JEEM	arabic
												
ف		f	f	f	f	consonant		ف ففف	fe		U+0641: ARABIC LETTER FEH	arabic
س		s¶	s	s	s	consonant		س سسس	siːn		U+0633: ARABIC LETTER SEEN	arabic
ص		S	ŝ	s	ṣ	consonant		ص صصص	svɑːd		U+0635: ARABIC LETTER SAD	arabic
ث		S	ṡ	s	s̱	consonant		ث ثثث	se		U+062B: ARABIC LETTER THEH	arabic
ز		z	z	z	z	consonant		ز ـز	ze		U+0632: ARABIC LETTER ZAIN	arabic
ض		Z	ẑ	z	ẓ	consonant		ض ضضض	zvɑːd		U+0636: ARABIC LETTER DAD	arabic
ظ		Z	ž	z	z̤	consonant		ظ ظظظ	zoe		U+0638: ARABIC LETTER ZAH	arabic
ذ		Z	ż	z	ẕ	consonant		ذ ـذ	zɑːl		U+0630: ARABIC LETTER THAL	arabic
ش		s	ʃ	ʃ	sh	consonant		ش ششش	ʃiːn		U+0634: ARABIC LETTER SHEEN	arabic
ژ		z	ʒ	ʒ	zh	consonant		ژ ـژ	ʒe		U+0698: ARABIC LETTER JEH	arabic
خ		x	x	x	k͟h	consonant		خ خخخ	xe		U+062E: ARABIC LETTER KHAH	arabic
غ		Y	ɣ	ɣ	g͟h	consonant		غ غغغ	ɣain		U+063A: ARABIC LETTER GHAIN	arabic
ہ		h¶	h	ɦ ɑː ɛ ∅	h	consonant		ہ ہہہ	ʧʰoʈiː he		U+06C1: ARABIC LETTER HEH GOAL	arabic
ح		H	ḫ	ɦ	ḥ	consonant		ح ححح	baɽiː he		U+062D: ARABIC LETTER HAH	arabic
ھ		h	ʰ	ʰ	h	aspiration marker / calendar indicator		ھ ھھھ	do cašmī he		U+06BE: ARABIC LETTER HEH DOACHASHMEE	arabic
												
م		m	m	m	m	consonant		م ممم	miːm		U+0645: ARABIC LETTER MEEM	arabic
ن		n	n	n ◌̃	n	consonant/nasalisation marker		ن ننن	nuːn		U+0646: ARABIC LETTER NOON	arabic
ں		n	ñ	◌̃	ṉ	nasalisation indicator	word-final	ں ںںں	nuːn ɣunna		U+06BA: ARABIC LETTER NOON GHUNNA	arabic
												
و		w	ʋ	ʋ uː o ɔ ∅	v ū o au	consonant+vowel		و ـو	vɑːuː		U+0648: ARABIC LETTER WAW	arabic
ر		r	r	r	r	consonant		ر ـر	re		U+0631: ARABIC LETTER REH	arabic
ڑ		r	ɽ	ɽ	ṛ	consonant		ڑ ـڑ	ɽe		U+0691: ARABIC LETTER RREH	arabic
ع		{	ʿ	∅	ā o e ʿ –	consonant		ع ععع	ain		U+0639: ARABIC LETTER AIN	arabic
ل		l	l	l	l	consonant		ل للل	lɑːm		U+0644: ARABIC LETTER LAM	arabic
ی		y	y	j iː e ɛ a	y ī e á	consonant+vowel		ی ییی	ye		U+06CC: ARABIC LETTER FARSI YEH	arabic
												
												
ا		a	ɑ	a ɪ u iː e ɛ uː o ɔ ʊ ∅ ɑː	ā ʾ –	consonant+vowel		ا ـا	alɪf		U+0627: ARABIC LETTER ALEF	arabic
آ		a	ɑ̄	ɑː		vowel		آ ـآ	əlɪf mədd		U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	arabic
أ		a	ɑ͑			consonant+vowel		أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	arabic
ئ		i	ɪ͑	ɪ a iː ɛ		vowel separator / vowel		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	arabic
ے		e	ɛ	e ɛ	ai e	vowel		ے	baɽiː je		U+06D2: ARABIC LETTER YEH BARREE	arabic
												
َ		A	a	ə		vowel			zəbər		U+064E: ARABIC FATHA​	arabic
ُ		U	u	u		vowel			peʃ		U+064F: ARABIC DAMMA​	arabic
ِ		I	i	i ɛ		vowel/izafat			zer		U+0650: ARABIC KASRA​	arabic
ً		A	aⁿ	an		vowel			an		U+064B: ARABIC FATHATAN​	arabic
ٌ		U	uⁿ	un		vowel			un		U+064C: ARABIC DAMMATAN​	arabic
ٍ		I	iⁿ	in		vowel			in		U+064D: ARABIC KASRATAN​	arabic
												
ۂ		e	e͑	ɛ	yi	izafat		ۂ ۂۂۂ	ɪzɑːfat		U+06C2: ARABIC LETTER HEH GOAL WITH HAMZA ABOVE	arabic
\u{6C1}\u{654}	s		h‘	ɛ	yi	izafat	decomposed				U+06C1, U+0654: ARABIC LETTER HEH GOAL, HAMZA ABOVE	
ٔ		\'	‘	ʾ ɛ		izafat			ɪzɑːfat		U+0654: ARABIC HAMZA ABOVE​	arabic
ء		}	ʾ	-	ʾ –	vowel separator / calendar indicator		ء	hamzaː		U+0621: ARABIC LETTER HAMZA	arabic
ؤ		u	u͑	uː o		vowel separator+vowel		ؤ ـؤ			U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	arabic
\u{648}\u{654}	s	u	w‘	uː o		vowel separator+vowel					U+0648, U+0654: ARABIC LETTER WAW, HAMZA ABOVE	arabic
												
ۓ		e	ɛ͑	e ɛ		izafat		ۓ	ɪzɑːfat		U+06D3: ARABIC LETTER YEH BARREE WITH HAMZA ABOVE	arabic
ۀ		h	h͑					ۀ ـۀ			U+06C0: ARABIC LETTER HEH WITH YEH ABOVE	arabic
												
												
ّ		&	˖			gemination mark			taʃdiːd		U+0651: ARABIC SHADDA​	arabic
ْ		*	͓			vowel absence marker			sukuːn/ʤazm		U+0652: ARABIC SUKUN​	arabic
ٰ		a	ɑ̇	aː		superscript alef					U+0670: ARABIC LETTER SUPERSCRIPT ALEF​	arabic
ٖ			ᵢ	i		vowel quality indicator					U+0656: ARABIC SUBSCRIPT ALEF​	arabic
ٗ		u	ᵘ	u		vowel quality indicator					U+0657: ARABIC INVERTED DAMMA​	arabic
٘		n	ᵑ	̃		nasalisation mark					U+0658: ARABIC MARK NOON GHUNNA​	arabic
												
												
؀						number sign					U+0600: ARABIC NUMBER SIGN	arabic
؁						calendar indicator			sənh		U+0601: ARABIC SIGN SANAH	arabic
؂						footnote marker					U+0602: ARABIC FOOTNOTE MARKER	arabic
؃						page number marker			səfəh		U+0603: ARABIC SIGN SAFHA	arabic
؄						era marker					U+0604: ARABIC SIGN SAMVAT	arabic
؎						poetic verse sign					U+060E: ARABIC POETIC VERSE SIGN	arabic
؏						poetic line marker			misrə		U+060F: ARABIC SIGN MISRA	arabic
ؐ						honorific			sallallao alae va sallam		U+0610: ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM​	arabic
ؑ						honorific			alejsallam		U+0611: ARABIC SIGN ALAYHE ASSALLAM​	arabic
ؒ						honorific			raːmatʊlla alee		U+0612: ARABIC SIGN RAHMATULLAH ALAYHE​	arabic
ؓ						honorific			raziallaːo ano		U+0613: ARABIC SIGN RADI ALLAHOU ANHU​	arabic
ؔ						author name marker					U+0614: ARABIC SIGN TAKHALLUS​	arabic
												
												
ـ		_	_			baseline extender					U+0640: ARABIC TATWEEL	arabic
،		,	,	,		comma			əʃɑːrɪjɑ		U+060C: ARABIC COMMA	arabic
۔		.	.	.		full stop					U+06D4: ARABIC FULL STOP	arabic
؛		;	;	;		semi-colon					U+061B: ARABIC SEMICOLON	arabic
؟		?	?	?		question mark					U+061F: ARABIC QUESTION MARK	arabic
٪		%	%	%		percent mark					U+066A: ARABIC PERCENT SIGN	arabic
٫						decimal separator					U+066B: ARABIC DECIMAL SEPARATOR	arabic
٬						thousands separator					U+066C: ARABIC THOUSANDS SEPARATOR	arabic
												
												
۰		0	0̣		0	digit		٠	sɪfr		U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO	arabic
۱		1	1̣		1	digit		١	ek		U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE	arabic
۲		2	2̣		2	digit		٢	do		U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO	arabic
۳		3	3̣		3	digit		٣	tiːn		U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE	arabic
۴		4	4̣		4	digit		٤	ʧɑːr		U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR	arabic
۵		5	5̣		5	digit		٥	pɑ̃ːʧ		U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE	arabic
۶		6	6̣		6	digit		٦	ʧʰe		U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX	arabic
۷		7	7̣		7	digit		٧	sɑːt		U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN	arabic
۸		8	8̣		8	digit		٨	ɑːʈʰ		U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT	arabic
۹		9	9̣		9	digit		٩	nəʊ		U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE	arabic
												
												
												
												
												
												
بھ	s	B	bʰ	bʱ	bh						U+0628 U+06BE: ARABIC LETTER BEH, HEH DOACHASHMEE	
پھ	s	P	pʰ	pʰ	ph						U+067E U+06BE: ARABIC LETTER PEH, HEH DOACHASHMEE	
تھ	s	T	tʰ	t̪ʰ	th						U+062A U+06BE: ARABIC LETTER TEH, HEH DOACHASHMEE	
ٹھ	s	T	ʈʰ	ʈʰ	ṭh						U+0679 U+06BE: ARABIC LETTER TTEH, HEH DOACHASHMEE	
جھ	s	J	ʤʰ	d͡ʒʰ	jh						U+062C U+06BE: ARABIC LETTER JEEM, HEH DOACHASHMEE	
چھ	s	C	čʰ	t͡ʃʰ	ch						U+0686 U+06BE: ARABIC LETTER TCHEH, HEH DOACHASHMEE	
دھ	s	D	dʰ	d̪ʱ	dh						U+062F U+06BE: ARABIC LETTER DAL, HEH DOACHASHMEE	
ڈھ	s	D	ɖʰ	ɖʱ	ḍh						U+0688 U+06BE: ARABIC LETTER DDAL, HEH DOACHASHMEE	
رھ	s	R	rʰ	rʱ	ṛh						U+0631 U+06BE: ARABIC LETTER REH, HEH DOACHASHMEE	
ڑھ	s	R	ɽʰ	ɽʱ	ṛh						U+0691 U+06BE: ARABIC LETTER RREH, HEH DOACHASHMEE	
کھ	s	K	kʰ	kʰ	kh						U+06A9 U+06BE: ARABIC LETTER KEHEH, HEH DOACHASHMEE	
گھ	s	G	gʰ	ɡʱ	gh						U+06AF U+06BE: ARABIC LETTER GAF, HEH DOACHASHMEE	
لھ	s	L	lʰ	lʱ	lh						U+0644 U+06BE: ARABIC LETTER LAM, HEH DOACHASHMEE	
مھ	s	M	mʰ	mʱ	mh						U+0645 U+06BE: ARABIC LETTER MEEM, HEH DOACHASHMEE	
نھ	s	N	nʰ	nʱ	nh						U+0646 U+06BE: ARABIC LETTER NOON, HEH DOACHASHMEE	
هھ	s	H	هʰ	hʱ	hh						U+0647 U+06BE: ARABIC LETTER HEH, HEH DOACHASHMEE	
وھ	s	V	vʰ	ʋʱ	wh						U+0648 U+06BE: ARABIC LETTER WAW, HEH DOACHASHMEE	
یھ	s	Y	yʰ	jʱ	yh						U+06CC U+06BE: ARABIC LETTER FARSI YEH, HEH DOACHASHMEE	



`


var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":5,
"typeLoc": 6,
"statusLoc": 7,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 8,
"numLoc": 0,
"nameLoc": 9,
"nnameLoc": 10,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[5, 'ALA-LC']]
}


