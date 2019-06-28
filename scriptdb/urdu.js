var spreadsheet = `
ء	}	ʾ	ʾ –	-	vowel separator / calendar indicator	hamzaː			ء	U+0621: ARABIC LETTER HAMZA
ا	a	ɑ	ā ʾ –	a/ɪ/u iː/e/ɛ uː/o/ɔ ʊ/∅ ɑː	consonant+vowel	alɪf			ا ـا	U+0627: ARABIC LETTER ALEF
آ	a	ɑ̄		ɑː	vowel	əlɪf mədd			آ ـآ	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
أ	a	ɑ͑			consonant+vowel				أ ـأ	U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
ؤ	u	u͑		uː o	vowel separator+vowel				ؤ ـؤ	U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE
ئ	i	ɪ͑		ɪ/a iː ɛ	vowel separator / vowel				ئ ئئئ	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
ے	e	ɛ	ai e	e ɛ	vowel	baɽiː je			ے	U+06D2: ARABIC LETTER YEH BARREE
ۓ	e	ɛ͑		e ɛ	izafat	ɪzɑːfat			ۓ	U+06D3: ARABIC LETTER YEH BARREE WITH HAMZA ABOVE
ب	b	b	b	b	consonant	be			ب ببب	U+0628: ARABIC LETTER BEH
چ	c	č	c	ʧ	consonant	ʧe			چ چچچ	U+0686: ARABIC LETTER TCHEH
ت	t¶	t	t	t	consonant	te			ت تتت	U+062A: ARABIC LETTER TEH
ٹ	t¶	ʈ	ṭ	ʈ	consonant	ʈe			ٹ ٹٹٹ	U+0679: ARABIC LETTER TTEH
ث	s	ṡ	th	s	consonant	se			ث ثثث	U+062B: ARABIC LETTER THEH
پ	p	p	p	p	consonant	pe			پ پپپ	U+067E: ARABIC LETTER PEH
ج	D	ʤ	j	ʤ	consonant	ʤiːm			ج ججج	U+062C: ARABIC LETTER JEEM
ح	H	h	ḥ	h	consonant	baɽiː he			ح ححح	U+062D: ARABIC LETTER HAH
خ	x	x	kh	x	consonant	xe			خ خخخ	U+062E: ARABIC LETTER KHAH
ذ	z	z	ṭh	z	consonant	zɑːl			ذ ـذ	U+0630: ARABIC LETTER THAL
د	d	d	d	d	consonant	dɑːl			د ـد	U+062F: ARABIC LETTER DAL
ڈ	d	ɖ	ḍ	ɖ	consonant	ɖɑːl			ڈ ـڈ	U+0688: ARABIC LETTER DDAL
ر	r	r	r	r	consonant	re			ر ـر	U+0631: ARABIC LETTER REH
ڑ	r	ɽ	ṛ	ɽ	consonant	ɽe			ڑ ـڑ	U+0691: ARABIC LETTER RREH
ز	z	z	z	z	consonant	xe			ز ـز	U+0632: ARABIC LETTER ZAIN
ژ	z	ʒ	zh	ʒ	consonant	ʒe			ژ ـژ	U+0698: ARABIC LETTER JEH
س	s¶	s	s	s	consonant	siːn			س سسس	U+0633: ARABIC LETTER SEEN
ش	s	ʃ	sh	ʃ	consonant	ʃiːn			ش ششش	U+0634: ARABIC LETTER SHEEN
ص	S	ŝ	ṣ	s	consonant	svɑːd			ص صصص	U+0635: ARABIC LETTER SAD
ض	Z	ẑ	d	z	consonant	zvɑːd			ض ضضض	U+0636: ARABIC LETTER DAD
ط	T	t̂	t̤	t	consonant	toe			ط ططط	U+0637: ARABIC LETTER TAH
ظ	Z	ž	țh	z	consonant	zoe			ظ ظظظ	U+0638: ARABIC LETTER ZAH
ع	{	ʿ	ā o e ʿ –	∅	consonant	ain			ع ععع	U+0639: ARABIC LETTER AIN
غ	Y	ɣ	gh	ɣ	consonant	ɣain			غ غغغ	U+063A: ARABIC LETTER GHAIN
ف	f	f	f	f	consonant	fe			ف ففف	U+0641: ARABIC LETTER FEH
ق	q	q	q	q	consonant	qɑːf			ق ققق	U+0642: ARABIC LETTER QAF
گ	g	g	gh	g	consonant	gɑːf			گ گگگ	U+06AF: ARABIC LETTER GAF
ک	k¶	k	k	k	consonant	kɑːf			ک ککک	U+06A9: ARABIC LETTER KEHEH
ل	l	l	l	l	consonant	lɑːm			ل للل	U+0644: ARABIC LETTER LAM
م	m	m	m	m	consonant	miːm			م ممم	U+0645: ARABIC LETTER MEEM
ن	n	n	n	n ◌̃	consonant	nuːn			ن ننن	U+0646: ARABIC LETTER NOON
ں	n	ñ	ṉ	◌̃	nasalisation indicator	nuːn ɣunna			ں ںںں	U+06BA: ARABIC LETTER NOON GHUNNA
ہ	h¶	ḫ	h	h ɑː ɛ ∅	consonant	ʧʰoʈiː he			ہ ہہہ	U+06C1: ARABIC LETTER HEH GOAL
ھ	h¶	ʰ	h	ʰ	aspiration marker / calendar indicator	do cašmī he			ھ ھھھ	U+06BE: ARABIC LETTER HEH DOACHASHMEE
ۂ	E	e͑		hɛ	izafat	ɪzɑːfat			ۂ ۂۂۂ	U+06C2: ARABIC LETTER HEH GOAL WITH HAMZA ABOVE
ۀ	h	h͑							ۀ ـۀ	U+06C0: ARABIC LETTER HEH WITH YEH ABOVE
و	v	v	v ū o au	β uː o ɔ ∅	consonant+vowel	vɑːuː			و ـو	U+0648: ARABIC LETTER WAW
ی	y	y	y ī á	j iː e ɛ	consonant+vowel	ye			ی ییی	U+06CC: ARABIC LETTER FARSI YEH
										
										
َ	A	a		a	vowel	zəbər				U+064E: ARABIC FATHA​
ُ	U	u		u	vowel	peʃ				U+064F: ARABIC DAMMA​
ِ	I	i		i	vowel	zer				U+0650: ARABIC KASRA​
ً	A	aⁿ		an	vowel	an				U+064B: ARABIC FATHATAN​
ٌ	U	uⁿ		un	vowel	un				U+064C: ARABIC DAMMATAN​
ٍ	I	iⁿ		in	vowel	in				U+064D: ARABIC KASRATAN​
ّ	w	ᵚ			gemination mark	taʃdiːd				U+0651: ARABIC SHADDA​
ْ	*	͓			vowel absence marker	sukuːn/ʤazm				U+0652: ARABIC SUKUN​
ٰ	a	ɑ̇		aː	superscript alef					U+0670: ARABIC LETTER SUPERSCRIPT ALEF​
ٔ	\'	‘		ʾ	izafat	ɪzɑːfat				U+0654: ARABIC HAMZA ABOVE​
ٖ		ᵢ		i	vowel quality indicator					U+0656: ARABIC SUBSCRIPT ALEF​
ٗ	u	ᵘ		u	vowel quality indicator					U+0657: ARABIC INVERTED DAMMA​
٘	n	ᵑ		̃	nasalisation mark					U+0658: ARABIC MARK NOON GHUNNA​
										
										
؀					number sign					U+0600: ARABIC NUMBER SIGN
؁					calendar indicator	sənh				U+0601: ARABIC SIGN SANAH
؂					footnote marker					U+0602: ARABIC FOOTNOTE MARKER
؃					page number marker	səfəh				U+0603: ARABIC SIGN SAFHA
؄					era marker					U+0604: ARABIC SIGN SAMVAT
؎					poetic verse sign					U+060E: ARABIC POETIC VERSE SIGN
؏					poetic line marker	misrə				U+060F: ARABIC SIGN MISRA
ؐ					honorific	sallallao alae va sallam				U+0610: ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM​
ؑ					honorific	alejsallam				U+0611: ARABIC SIGN ALAYHE ASSALLAM​
ؒ					honorific	raːmatʊlla alee				U+0612: ARABIC SIGN RAHMATULLAH ALAYHE​
ؓ					honorific	raziallaːo ano				U+0613: ARABIC SIGN RADI ALLAHOU ANHU​
ؔ					author name marker					U+0614: ARABIC SIGN TAKHALLUS​
										
										
ـ	_	_			baseline extender					U+0640: ARABIC TATWEEL
،	,	,		,	comma	əʃɑːrɪjɑ				U+060C: ARABIC COMMA
۔	.	.		.	full stop					U+06D4: ARABIC FULL STOP
؛	;	;		;	semi-colon					U+061B: ARABIC SEMICOLON
؟	?	?		?	question mark					U+061F: ARABIC QUESTION MARK
٪	%	%		%	percent mark					U+066A: ARABIC PERCENT SIGN
٫					decimal separator					U+066B: ARABIC DECIMAL SEPARATOR
٬					thousands separator					U+066C: ARABIC THOUSANDS SEPARATOR
										
										
۰	0	0̣	0		digit	sɪfr			٠	U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO
۱	1	1̣	1		digit	ek			١	U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE
۲	2	2̣	2		digit	do			٢	U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO
۳	3	3̣	3		digit	tiːn			٣	U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE
۴	4	4̣	4		digit	ʧɑːr			٤	U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR
۵	5	5̣	5		digit	pɑ̃ːʧ			٥	U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE
۶	6	6̣	6		digit	ʧʰe			٦	U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX
۷	7	7̣	7		digit	sɑːt			٧	U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN
۸	8	8̣	8		digit	ɑːʈʰ			٨	U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT
۹	9	9̣	9		digit	nəʊ			٩	U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE
										
										
										
										
										
										
بھ		bʰ	bh	bʱ						U+0628 U+06BE: ARABIC LETTER BEH, HEH DOACHASHMEE
پھ		pʰ	ph	pʰ						U+067E U+06BE: ARABIC LETTER PEH, HEH DOACHASHMEE
تھ		tʰ	th	t̪ʰ						U+062A U+06BE: ARABIC LETTER TEH, HEH DOACHASHMEE
ٹھ		ʈʰ	ṭh	ʈʰ						U+0679 U+06BE: ARABIC LETTER TTEH, HEH DOACHASHMEE
جھ		ʤʰ	jh	d͡ʒʰ						U+062C U+06BE: ARABIC LETTER JEEM, HEH DOACHASHMEE
چھ		čʰ	ch	t͡ʃʰ						U+0686 U+06BE: ARABIC LETTER TCHEH, HEH DOACHASHMEE
دھ		dʰ	dh	d̪ʱ						U+062F U+06BE: ARABIC LETTER DAL, HEH DOACHASHMEE
ڈھ		ɖʰ	ḍh	ɖʱ						U+0688 U+06BE: ARABIC LETTER DDAL, HEH DOACHASHMEE
رھ		rʰ	ṛh	rʱ						U+0631 U+06BE: ARABIC LETTER REH, HEH DOACHASHMEE
ڑھ		ɽʰ	ṛh	ɽʱ						U+0691 U+06BE: ARABIC LETTER RREH, HEH DOACHASHMEE
کھ		kʰ	kh	kʰ						U+06A9 U+06BE: ARABIC LETTER KEHEH, HEH DOACHASHMEE
گھ		gʰ	gh	ɡʱ						U+06AF U+06BE: ARABIC LETTER GAF, HEH DOACHASHMEE
لھ		lʰ	lh	lʱ						U+0644 U+06BE: ARABIC LETTER LAM, HEH DOACHASHMEE
مھ		mʰ	mh	mʱ						U+0645 U+06BE: ARABIC LETTER MEEM, HEH DOACHASHMEE
نھ		nʰ	nh	nʱ						U+0646 U+06BE: ARABIC LETTER NOON, HEH DOACHASHMEE
هھ		هʰ	hh	hʱ						U+0647 U+06BE: ARABIC LETTER HEH, HEH DOACHASHMEE
وھ		vʰ	wh	ʋʱ						U+0648 U+06BE: ARABIC LETTER WAW, HEH DOACHASHMEE
یھ		yʰ	yh	jʱ						U+06CC U+06BE: ARABIC LETTER FARSI YEH, HEH DOACHASHMEE

`

var cols = {
"key": 1,
"transLoc": 2,
"ipaLoc": 4,
"typeLoc": 5,
"nnameLoc": 0,
"nameLoc": 6,
"numLoc": 0,
"statusLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"meaning":0,
"shape":9,
"transcription":3,
"ucsName": 10,


//"othertranscriptions": [[3, 'UN']]
}