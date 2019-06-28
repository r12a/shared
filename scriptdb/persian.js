var spreadsheet = `
ء	}	ʔ	’	ʔ	consonant	hamza	همزه			U+0621: ARABIC LETTER HAMZA
أ	a	ɑ͑	’	x	consonant					U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
ا	a	ɑ	ā a o e	ʔ ɔ æ -	consonant+vowel	ʾalef	الف			U+0627: ARABIC LETTER ALEF
آ	a	ɑ̄	ā	x	vowel					U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
ب	b	b	b	b	consonant	be	بِ			U+0628: ARABIC LETTER BEH
پ	p	p	p	p	consonant	pe	پِ			U+067E: ARABIC LETTER PEH
ت	t	t	t	t	consonant	te	تِ			U+062A: ARABIC LETTER TEH
ث	s	ṡ	s	s̱	consonant	se	ثِ			U+062B: ARABIC LETTER THEH
ج	D	ʤ	j	ʤ	consonant	jim	جیم			U+062C: ARABIC LETTER JEEM
چ	c	č	č	ʧ	consonant	če	چِ			U+0686: ARABIC LETTER TCHEH
ح	h	ħ	h	h -	consonant	he	حِ			U+062D: ARABIC LETTER HAH
خ	x	x	x	x	consonant	xe	خِ			U+062E: ARABIC LETTER KHAH
د	d	d	d	d	consonant	dāl	دال			U+062F: ARABIC LETTER DAL
ذ	z	ż	z	z	consonant	zāl	ذال			U+0630: ARABIC LETTER THAL
ر	r	r	r	r	consonant	re	رِ			U+0631: ARABIC LETTER REH
ز	z¶	z	z	z	consonant	ze	زِ			U+0632: ARABIC LETTER ZAIN
ژ	z	ʒ	ž	ʒ	consonant	že	ژِ			U+0698: ARABIC LETTER JEH
س	s¶	s	s	s	consonant	sin	سین			U+0633: ARABIC LETTER SEEN
ش	s	ʃ	š	ʃ	consonant	šin	شین			U+0634: ARABIC LETTER SHEEN
ص	s	ŝ	s	s	consonant	sād	صاد			U+0635: ARABIC LETTER SAD
ض	z	ẑ	z	z	consonant	zād	ضاد			U+0636: ARABIC LETTER DAD
ط	t	t̂	t	t	consonant	ṭā	طی			U+0637: ARABIC LETTER TAH
ظ	z	ž	z	z	consonant	ẓā	ظی			U+0638: ARABIC LETTER ZAH
ع	{	ʔ̇	a ’	ʔ -	consonant	ʿeyn	عین			U+0639: ARABIC LETTER AIN
غ	y	ɣ	q check this	ɣ	consonant	ġeyn	غین			U+063A: ARABIC LETTER GHAIN
ف	f	f	f	f	consonant	fe	فِ			U+0641: ARABIC LETTER FEH
ق	q	q	q	q ɢ	consonant	qāf	قاف			U+0642: ARABIC LETTER QAF
ک	k	k	k	k	consonant	kāf	کاف			U+06A9: ARABIC LETTER KEHEH
گ	g	g	g	g	consonant	ɡāf	گاف		گ گگگ	U+06AF: ARABIC LETTER GAF
ل	l	l	l	l	consonant	lām	لام			U+0644: ARABIC LETTER LAM
م	m	m	m	m	consonant	mim	میم			U+0645: ARABIC LETTER MEEM
ن	n	n	n	n	consonant	nun	نون			U+0646: ARABIC LETTER NOON
و	v	v	v u	v u o ow -	consonant+vowel	vāv	واو			U+0648: ARABIC LETTER WAW
ه	h¶	h	h e	h - ɛ æ e	consonant	he do-češm	هِ			U+0647: ARABIC LETTER HEH
ی	y¶	y	y i	j i ɒː aj	consonant+vowel	ye	یِ			U+06CC: ARABIC LETTER FARSI YEH
ة	t	ẗ		h - ɛ æ	consonant+vowel					U+0629: ARABIC LETTER TEH MARBUTA
ؤ	w	w͑	’	ʔ	consonant					U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE
ئ	y	y͑	’	ʔ	consonant					U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
ۀ	h	h͑	ye	ej	vowel	he ye				U+06C0: ARABIC LETTER HEH WITH YEH ABOVE
										
										
َ	A	a		a	vowel	zebar	زِبَر			U+064E: ARABIC FATHA​
ُ	U	u		u	vowel	piš	پیش			U+064F: ARABIC DAMMA​
ِ	I	i		i	vowel	zir	زیر			U+0650: ARABIC KASRA​
ً	A	aⁿ		an	vowel	tanvin e nasb	تنوین نصب			U+064B: ARABIC FATHATAN​
ٌ	U	uⁿ		un	vowel	tanvin e rafe	تنوین رفع			U+064C: ARABIC DAMMATAN​
ٍ	I	iⁿ		in	vowel	tanvin e jarr	تنوین جرّ			U+064D: ARABIC KASRATAN​
ّ	w	ᵚ			gemination mark	tašdid	تشدید			U+0651: ARABIC SHADDA​
ْ	*	°			vowel absence marker	sokun	سکون			U+0652: ARABIC SUKUN​
ٔ		ʿ		ʔ						U+0654: ARABIC HAMZA ABOVE​
ٕ		˓		ʔ						U+0655: ARABIC HAMZA BELOW​
										
										
ـ	_	_			baseline extender	tatweel				U+0640: ARABIC TATWEEL
،	,	,			comma					U+060C: ARABIC COMMA
۔	.	.			full stop					U+06D4: ARABIC FULL STOP
؛	;	;			semi-colon					U+061B: ARABIC SEMICOLON
؟	?	?			question mark					U+061F: ARABIC QUESTION MARK
٪	%	%			percent mark					U+066A: ARABIC PERCENT SIGN
؉	%	‰			per-mille sign					U+0609: ARABIC-INDIC PER MILLE SIGN
										
										
۰	0	0̣		0	digit	sefr	صِفر			U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO
۱	1	1̣		1	digit	yek	یِک			U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE
۲	2	2̣		2	digit	do	دُو			U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO
۳	3	3̣		3	digit	se	سِه			U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE
۴	4	4̣		4	digit	čahār	چَهَار			U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR
۵	5	5̣		5	digit	panj	پَنج			U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE
۶	6	6̣		6	digit	šeš	شِش			U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX
۷	7	7̣		7	digit	haft	هَفت			U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN
۸	8	8̣		8	digit	hašt	هَشت			U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT
۹	9	9̣		9	digit	noh	نُه			U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE

`

var cols = {
"key": 1,
"transLoc": 2,
"ipaLoc": 4,
"typeLoc": 5,
"nnameLoc": 7,
"nameLoc": 6,
"numLoc": 0,
"statusLoc": 8,
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