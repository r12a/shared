var spreadsheet = `
ء		}	ʔ	ʔ	’	consonant		ء	hamza	همزه	U+0621: ARABIC LETTER HAMZA
ا		A	ɑ	ʔ ɔ æ -	ā a o e	consonant+vowel		ا ـا	ʾalef	الف	U+0627: ARABIC LETTER ALEF
أ		A	ɑ͑	x	’	consonant		أ ـأ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE
آ		A	ɑ̄	x	ā	vowel		آ ـآ			U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE
ب		b	b	b	b	consonant		ب ببب	be	بِ	U+0628: ARABIC LETTER BEH
پ		p	p	p	p	consonant		پ پپپ	pe	پِ	U+067E: ARABIC LETTER PEH
ت		t	t	t	t	consonant		ت تتت	te	تِ	U+062A: ARABIC LETTER TEH
ث		s	ṡ	s̱	s	consonant		ث ثثث	se	ثِ	U+062B: ARABIC LETTER THEH
ج		j	ʤ	ʤ	j	consonant		ج ججج	jim	جیم	U+062C: ARABIC LETTER JEEM
چ		c	č	ʧ	č	consonant		چ چچچ	če	چِ	U+0686: ARABIC LETTER TCHEH
ح		h	ħ	h -	h	consonant		ح ححح	he	حِ	U+062D: ARABIC LETTER HAH
خ		x	x	x	x	consonant		خ خخخ	xe	خِ	U+062E: ARABIC LETTER KHAH
د		d	d	d	d	consonant		د ـد	dāl	دال	U+062F: ARABIC LETTER DAL
ذ		z	ż	z	z	consonant		ذ ـذ	zāl	ذال	U+0630: ARABIC LETTER THAL
ر		r	r	r	r	consonant		ر ـر	re	رِ	U+0631: ARABIC LETTER REH
ز		z¶	z	z	z	consonant		ز ـز	ze	زِ	U+0632: ARABIC LETTER ZAIN
ژ		z	ʒ	ʒ	ž	consonant		ژ ـژ	že	ژِ	U+0698: ARABIC LETTER JEH
س		s¶	s	s	s	consonant		س سسس	sin	سین	U+0633: ARABIC LETTER SEEN
ش		s	ʃ	ʃ	š	consonant		ش ششش	šin	شین	U+0634: ARABIC LETTER SHEEN
ص		S	ŝ	s	s	consonant		ص صصص	sād	صاد	U+0635: ARABIC LETTER SAD
ض		Z	ẑ	z	z	consonant		ض ضضض	zād	ضاد	U+0636: ARABIC LETTER DAD
ط		T	t̂	t	t	consonant		ط ططط	ṭā	طی	U+0637: ARABIC LETTER TAH
ظ		Z	ž	z	z	consonant		ظ ظظظ	ẓā	ظی	U+0638: ARABIC LETTER ZAH
ع		{	ʔ̇	ʔ -	a ’	consonant		ع ععع	ʿeyn	عین	U+0639: ARABIC LETTER AIN
غ		g	ɣ	ɣ	q check this	consonant		ع ععع	ġeyn	غین	U+063A: ARABIC LETTER GHAIN
ف		f	f	f	f	consonant		ف ففف	fe	فِ	U+0641: ARABIC LETTER FEH
ق		q	q	q ɢ	q	consonant		ق ققق	qāf	قاف	U+0642: ARABIC LETTER QAF
ک		k	k	k	k	consonant		ک ککک	kāf	کاف	U+06A9: ARABIC LETTER KEHEH
گ		g¶	g	g	g	consonant		گ گگگ	ɡāf	گاف	U+06AF: ARABIC LETTER GAF
ل		l	l	l	l	consonant		ل للل	lām	لام	U+0644: ARABIC LETTER LAM
م		m	m	m	m	consonant		م ممم	mim	میم	U+0645: ARABIC LETTER MEEM
ن		n	n	n	n	consonant		ن ننن	nun	نون	U+0646: ARABIC LETTER NOON
و		v	v	v u o ow -	v u	consonant+vowel		و ـو	vāv	واو	U+0648: ARABIC LETTER WAW
ه		h¶	h	h - ɛ æ e	h e	consonant		ه ههه	he do-češm	هِ	U+0647: ARABIC LETTER HEH
ی		y¶	y	j i ɒː aj	y i	consonant+vowel		ی ییی	ye	یِ	U+06CC: ARABIC LETTER FARSI YEH
ة		t	ẗ	h - ɛ æ		consonant+vowel		ة ـة			U+0629: ARABIC LETTER TEH MARBUTA
ؤ		w	w͑	ʔ	’	consonant		ؤ ـؤ			U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE
ئ		y	y͑	ʔ	’	consonant		ئ ئئئ			U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE
ۀ		e	h͑	ej	ye	vowel		ۀ ۀۀۀ	he ye		U+06C0: ARABIC LETTER HEH WITH YEH ABOVE
											
											
َ		a	a	a		vowel			zebar	زِبَر	U+064E: ARABIC FATHA​
ُ		u	u	u		vowel			piš	پیش	U+064F: ARABIC DAMMA​
ِ		i	i	i		vowel			zir	زیر	U+0650: ARABIC KASRA​
ً		a	aⁿ	an		vowel			tanvin e nasb	تنوین نصب	U+064B: ARABIC FATHATAN​
ٌ		u	uⁿ	un		vowel			tanvin e rafe	تنوین رفع	U+064C: ARABIC DAMMATAN​
ٍ		i	iⁿ	in		vowel			tanvin e jarr	تنوین جرّ	U+064D: ARABIC KASRATAN​
ّ		&	˖			gemination mark			tašdid	تشدید	U+0651: ARABIC SHADDA​
ْ		*	͓			vowel absence marker			sokun	سکون	U+0652: ARABIC SUKUN​
ٔ		[	ʿ	ʔ		hamza					U+0654: ARABIC HAMZA ABOVE​
ٕ		[	˓	ʔ		hamza					U+0655: ARABIC HAMZA BELOW​
											
											
ـ		_	_			baseline extender			tatweel		U+0640: ARABIC TATWEEL
،		,	,			comma					U+060C: ARABIC COMMA
.		.	.			full stop					U+002E: FULL STOP
۔		.	.			full stop					U+06D4: ARABIC FULL STOP
؛		;	;			semi-colon					U+061B: ARABIC SEMICOLON
؟		?	?			question mark					U+061F: ARABIC QUESTION MARK
٪		%	%			percent mark					U+066A: ARABIC PERCENT SIGN
؉		%	‰			per-mille sign					U+0609: ARABIC-INDIC PER MILLE SIGN
«		<	 “			quotation mark					U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
»		>	”			quotation mark					U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
‹		<	‘			quotation mark					U+2018: LEFT SINGLE QUOTATION MARK
›		>	’			quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK
٬		#	‛			thousands separator	infrequent				U+066C: ARABIC THOUSANDS SEPARATOR
٫		#	·			decimal separator	infrequent				U+066B: ARABIC DECIMAL SEPARATOR
											
											
۰		0	0̣	0		digit			sefr	صِفر	U+06F0: EXTENDED ARABIC-INDIC DIGIT ZERO
۱		1	1̣	1		digit			yek	یِک	U+06F1: EXTENDED ARABIC-INDIC DIGIT ONE
۲		2	2̣	2		digit			do	دُو	U+06F2: EXTENDED ARABIC-INDIC DIGIT TWO
۳		3	3̣	3		digit			se	سِه	U+06F3: EXTENDED ARABIC-INDIC DIGIT THREE
۴		4	4̣	4		digit			čahār	چَهَار	U+06F4: EXTENDED ARABIC-INDIC DIGIT FOUR
۵		5	5̣	5		digit			panj	پَنج	U+06F5: EXTENDED ARABIC-INDIC DIGIT FIVE
۶		6	6̣	6		digit			šeš	شِش	U+06F6: EXTENDED ARABIC-INDIC DIGIT SIX
۷		7	7̣	7		digit			haft	هَفت	U+06F7: EXTENDED ARABIC-INDIC DIGIT SEVEN
۸		8	8̣	8		digit			hašt	هَشت	U+06F8: EXTENDED ARABIC-INDIC DIGIT EIGHT
۹		9	9̣	9		digit			noh	نُه	U+06F9: EXTENDED ARABIC-INDIC DIGIT NINE
											
											
											
											
\u200C		=	ₓ			zero-width non-joiner					U+200C: ZERO WIDTH NON-JOINER
\u200D		=	₊			zero-width joiner					U+200D: ZERO WIDTH JOINER
\u2067			ʳˡⁱ			rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE
\u2066			ˡʳⁱ			ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE
\u2068			ᶠˢⁱ			first-strong isolate					U+2068: FIRST STRONG ISOLATE
\u2069			ᵖᵈⁱ			pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE
\u202B			ʳˡᵉ			rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING
\u202A			ˡʳᵉ			ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING
\u202C			ᵖᵈᶠ			pop direction					U+202C: POP DIRECTIONAL FORMATTING
\u200F			ʳˡᵐ			rtl mark					U+200F: RIGHT-TO-LEFT MARK
\u200E			ˡʳᵐ			ltr mark					U+200E: LEFT-TO-RIGHT MARK
\u034F			ᶜᵍʲ			combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​
\u061C			ᵃˡᵐ			arabic letter mark					U+061C: ARABIC LETTER MARK
											
											
											
											
											
إ	dc	A	ɑ̂	ʔi		consonant+vowel	non-native	إ ـإ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW
ى		A	â	ɑː		vowel	non-native	ى ـى			U+0649: ARABIC LETTER ALEF MAKSURA
ي		Y	ŷ	j iː		consonant+vowel	non-native	ي ييي			U+064A: ARABIC LETTER YEH
ك		K	k̂	k		consonant	non-native	ك ككك			U+0643: ARABIC LETTER KAF
﷼		#	¤			currency sign	infrequent				U+FDFC: RIAL SIGN											
											
											
لا	-		lɑ			ligature					U+0644 U+0627: ARABIC LETTER LAM, LETTER ALEF
لآ	-		lɑ̄			ligature					U+0644 U+0622: ARABIC LETTER LAM, LETTER ALEF WITH MADDA ABOVE
لأ	-		lɑ͑			ligature					U+0644 U+0623: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA ABOVE
لإ	-		lɑ̜			ligature					U+0644 U+0625: ARABIC LETTER LAM, LETTER ALEF WITH HAMZA BELOW


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

//"othertranscriptions": [[6, 'ISO 9985']]
}
