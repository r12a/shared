var spreadsheet = `
پ	p	p	p	p	p	consonant	pe			U+067E: ARABIC LETTER PEH
ت	t¶	t	t¶	t	t	consonant	te			U+062A: ARABIC LETTER TEH
ط	t	ṫ			t	consonant	toʾe 			U+0637: ARABIC LETTER TAH
ژ	t	ʦ		c	t͡s	consonant	ce			U+0698: ARABIC LETTER JEH
ٹ	t	ʈ	t	ṭ	ʈ	consonant	ṭe 			U+0679: ARABIC LETTER TTEH
چ	c	ʧ	c	č	ʧ	consonant	če			U+0686: ARABIC LETTER TCHEH
ک	k	k	k	k	k	consonant	kāf 			U+06A9: ARABIC LETTER KEHEH
ق	k	ḱ			k	consonant	baṛī kāf 			U+0642: ARABIC LETTER QAF
ع	}	ʔ			ʔ ∅	consonant	ain 			U+0639: ARABIC LETTER AIN
										
پھ	P	pʰ			pʰ	consonant				U+067E U+06BE: ARABIC LETTER PEH, HEH DOACHASHMEE
تھ	T¶	tʰ	T¶	th	tʰ	consonant				U+062A U+06BE: ARABIC LETTER TEH, HEH DOACHASHMEE
ثھ	T	ʦʰ		ch	t͡sʰ	consonant				U+091B U+093C: DEVANAGARI LETTER CHA, DEVANAGARI SIGN NUKTA
ٹھ	T	ʈʰ	T	ṭh	ʈʰ	consonant				U+0679 U+06BE: ARABIC LETTER TTEH, HEH DOACHASHMEE
چھ	C	ʧʰ	C	čh	ʧʰ	consonant				U+0686 U+06BE: ARABIC LETTER TCHEH, HEH DOACHASHMEE
خ	K	kʰ	K	kh	kʰ	consonant	khe 			U+062E: ARABIC LETTER KHAH
کھ	K	ḱʰ			kʰ	consonant				U+06A9 U+06BE: ARABIC LETTER KEHEH, HEH DOACHASHMEE
										
ب	b	b	b	b	b	consonant	be			U+0628: ARABIC LETTER BEH
د	d¶	d	d¶	d	d	consonant	dāl			U+062F: ARABIC LETTER DAL
ڈ	d	ɖ	d	ḍ	ɖ	consonant	ḍāl 			U+0688: ARABIC LETTER DDAL
ج	j	ʤ	j	j	d͡ʒ	consonant	jīm 			U+062C: ARABIC LETTER JEEM
گ	g	g	g	g	g	consonant	gāf 			U+06AF: ARABIC LETTER GAF
غ	g	ġ			g	consonant	gain			U+063A: ARABIC LETTER GHAIN
										
										
ف	f	f			f pʰ	consonant	fe			U+0641: ARABIC LETTER FEH
س	s¶	s	s¶	s	s	consonant	sīn 			U+0633: ARABIC LETTER SEEN
ث	s	ṡ	s	s	s	consonant	se			U+062B: ARABIC LETTER THEH
ص	s	ś			s	consonant	swād  			U+0635: ARABIC LETTER SAD
ش	s	ʃ	s	š	ʃ	consonant	šīn			U+0634: ARABIC LETTER SHEEN
ح	h	H	h	h	h	consonant	baṛī he 			U+062D: ARABIC LETTER HAH
ہ	h	h			h	consonant	ʧʰoʈiː he			U+06C1: ARABIC LETTER HEH GOAL
ھ	h	ḣ			h	apiration marker	he			U+06BE: ARABIC LETTER HEH DOACHASHMEE
										
و		v	v	w	v	consonant				U+0648: ARABIC LETTER WAW
ذ	z	z		z	z	consonant	zāl 			U+0630: ARABIC LETTER THAL
ز	z	ż		z	z	consonant	ze 			U+0632: ARABIC LETTER ZAIN
ض	z	ź			z	consonant	zwād 			U+0636: ARABIC LETTER DAD
ظ	z	ẑ			z	consonant	zoʾe 			U+0638: ARABIC LETTER ZAH
										
م	m	m	m	m	m	consonant	mīm 			U+0645: ARABIC LETTER MEEM
ن	n¶	n	n¶	n	n	consonant	nūn 			U+0646: ARABIC LETTER NOON
										
و	w	w			-w oː	consonant/ o-vowel	wāʾo			U+0648: ARABIC LETTER WAW
ر	r	r	r	r	r	consonant	re 			U+0631: ARABIC LETTER REH
ڑ	r	ɽ			ɽ	consonant	ṛe			U+0691: ARABIC LETTER RREH
ل	l	l	l	l	l	consonant	lām			U+0644: ARABIC LETTER LAM
ی	y	y			j	consonant	ye			U+06CC: ARABIC LETTER FARSI YEH
ے	y	ȳ	y	y	j	consonant	baṛī ye 			U+06D2: ARABIC LETTER YEH BARREE
ؠ	y	ẏ			ʲ	palatalisation marker	choṭī ye			U+0620: ARABIC LETTER KASHMIRI YEH
										
										
										
										
										
										
										
										
										
ِ	i	i	i	i	i	vowel				U+0650: ARABIC KASRA​
يٖ	i	ī	i	ī	iː	vowel				U+064A U+0656: ARABIC LETTER YEH, ARABIC SUBSCRIPT ALEF
ٕ	i	ɨ		ü	ɨ	vowel				U+0655: ARABIC HAMZA BELOW​
ٳ	i	ɨ̄		ǖ	ɨː	vowel				U+0673: ARABIC LETTER ALEF WITH WAVY HAMZA BELOW
ُ	u	u	u	u	u	vowel				U+064F: ARABIC DAMMA​
وٗ	u	ū	u	ū	uː	vowel				U+0648 U+0657: ARABIC LETTER WAW, ARABIC INVERTED DAMMA
										
ێ	e¶	e		e	e	vowel				U+06CE: ARABIC LETTER YEH WITH SMALL V
ي	e	ē	e¶	ē	eː	vowel				U+064A: ARABIC LETTER YEH
ٔ	e	ə		ö	ə	vowel				U+0654: ARABIC HAMZA ABOVE​
ٲ	e	ə̄		ȫ	əː	vowel				U+0672: ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE
ۆ	o	o		o	o	vowel				U+06C6: ARABIC LETTER OE
و		ō	o	ō	oː	vowel				U+0648: ARABIC LETTER WAW
										
َ	a	a			aː	vowel				U+064E: ARABIC FATHA​
ا	a	ạ̄	a	ā	aː	vowel				U+0627: ARABIC LETTER ALEF
آ	A	ã			aː	vowel				U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
ۄ	o	ɔ			ɔ	vowel				U+06C4: ARABIC LETTER WAW WITH RING
ۄآ	o	ɔ̄			ɔː	vowel				U+06C4 U+0622: ARABIC LETTER WAW WITH RING, ALEF WITH MADDA ABOVE
										
ै		əʲ	a	ai	əi	vowel				U+0948: DEVANAGARI VOWEL SIGN AI​
ौ		əʷ	a	au	əu	vowel				U+094C: DEVANAGARI VOWEL SIGN AU​
										
										
										
۰	0	0	0	0		digit				U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO
۱	1	1	1	1		digit				U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE
۲	2	2	2	2		digit				U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO
۳	3	3	3	3		digit				U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE
۴	4	4	4	4		digit				U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR
۵	5	5	5	5		digit				U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE
۶	6	6	6	6		digit				U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX
۷	7	7	7	7		digit				U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN
۸	8	8	8	8		digit				U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT
۹	9	9	9	9		digit				U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE

												
`




var cols = {
"key":1,
"transLoc": 2,
"transcription":4,
"ipaLoc": 5,
"typeLoc": 6,
"nameLoc": 7,
"nnameLoc": 0,
"numLoc": 0,
"statusLoc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"meaning":0,
"ucsName":9,

//"othertranscriptions": [[4, 'ISO 15919']]
}
