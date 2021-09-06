var spreadsheet = `
ၵ		ka	k		k	k	u	consonant				U+1075: MYANMAR LETTER SHAN KA	myanmar
ၶ		kʰa	kh	kʰ	k	kʰ	c	consonant				U+1076: MYANMAR LETTER SHAN KHA	myanmar
င		ŋa	ng	ŋ	N	ŋ	i	consonant				U+1004: MYANMAR LETTER NGA	myanmar
ၸ		ʨa	ts	ʨ	c	c	q	consonant				U+1078: MYANMAR LETTER SHAN CA	myanmar
ၺ		ɲa	ny	ɲ	n	ɲ	n	consonant				U+107A: MYANMAR LETTER SHAN NYA	myanmar
တ		ta	t		t	t	w	consonant				U+1010: MYANMAR LETTER TA	myanmar
ထ		tʰa	th	tʰ	t	tʰ	x	consonant				U+1011: MYANMAR LETTER THA	myanmar
ၼ		na	n		n¶	n	e	consonant				U+107C: MYANMAR LETTER SHAN NA	myanmar
ပ		pa	p		p	p	y	consonant				U+1015: MYANMAR LETTER PA	myanmar
ၽ		pʰa	ph	pʰ	p	pʰ	z	consonant				U+107D: MYANMAR LETTER SHAN PHA	myanmar
ၾ		fa	f		f	f		consonant				U+107E: MYANMAR LETTER SHAN FA	myanmar
မ		ma	m		m	m	r	consonant				U+1019: MYANMAR LETTER MA	myanmar
ယ		ja	y		y	y	b	consonant				U+101A: MYANMAR LETTER YA	myanmar
ရ		ra	r		r	r	I	consonant				U+101B: MYANMAR LETTER RA	myanmar
လ		la	l		l	l	v	consonant				U+101C: MYANMAR LETTER LA	myanmar
ဝ		wa	w		w	w	o	consonant				U+101D: MYANMAR LETTER WA	myanmar
သ		sa	s		s	s	O	consonant				U+101E: MYANMAR LETTER SA	myanmar
ႁ		ha	h		h	h	p	consonant				U+1081: MYANMAR LETTER SHAN HA	myanmar
ဢ		ʔa	a	ʔ	}	ʔ	t	consonant				U+1022: MYANMAR LETTER SHAN A	myanmar
													
													
ၿ		b	b		b	b	Y	consonant	rare, for non-Shan sounds			U+107F: MYANMAR LETTER SHAN BA	myanmar
ၻ		d	d		d	d	W	consonant	rare, for non-Shan sounds			U+107B: MYANMAR LETTER SHAN DA	myanmar
ၷ		ɡ	g		g	g	U	consonant	rare, for non-Shan sounds			U+1077: MYANMAR LETTER SHAN GA	myanmar
ႀ		θ	x	θ	Q	θ	P	consonant	rare, for non-Shan sounds			U+1080: MYANMAR LETTER SHAN THA	myanmar
ၹ		z	z		z	z		consonant	rare, for non-Shan sounds			U+1079: MYANMAR LETTER SHAN ZA	myanmar
													
													
ျ		ʲ		ʲ	y	y̆	B	medial consonant				U+103B: MYANMAR CONSONANT SIGN MEDIAL YA​	myanmar
ြ		ʳ		ʳ	r	r̆	T	medial consonant				U+103C: MYANMAR CONSONANT SIGN MEDIAL RA​	myanmar
ႂ		ʷ	w	ʷ	w	w̆	G	medial consonant				U+1082: MYANMAR CONSONANT SIGN SHAN MEDIAL WA​	myanmar
													
													
													
ိ		-i-	i		i	i		vowel sign				U+102D: MYANMAR VOWEL SIGN I​	myanmar
ီ		-iː	ii	iː	i	ī	D	vowel sign				U+102E: MYANMAR VOWEL SIGN II​	myanmar
ို	s	-ɯ-	eu	ɯ		iu	d					U+102D U+102F: MYANMAR VOWEL SIGN I, VOWEL SIGN U​	
ိုဝ်	s	-ɯ	eu			iuwˣ						U+102D U+102F U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER WA, SIGN ASAT​	
ု		-u-	u		u	u	k	vowel sign				U+102F: MYANMAR VOWEL SIGN U​	myanmar
ူ		-o- -uː	o uu		u	ū	l	vowel sign				U+1030: MYANMAR VOWEL SIGN UU​	myanmar
ေ		-e	e		e	e	a	vowel sign				U+1031: MYANMAR VOWEL SIGN E​	myanmar
ဵ		-e-	e		e	ė	A	vowel sign				U+1035: MYANMAR VOWEL SIGN E ABOVE​	myanmar
ူဝ်	s	-o	o			ūwˣ						U+1030 U+101D U+103A: MYANMAR VOWEL SIGN UU, LETTER WA, SIGN ASAT​	
ႄ		-ɛ	ae	ɛ	a	ɛ	s	vowel sign				U+1084: MYANMAR VOWEL SIGN SHAN E​	myanmar
ႅ		-ɛ-	ae		a	ɛ̇	S	vowel sign				U+1085: MYANMAR VOWEL SIGN SHAN E ABOVE​	myanmar
ွ		-ɔ-	aw o	ɔ	o	ɔ	g	vowel sign				U+103D: MYANMAR CONSONANT SIGN MEDIAL WA​	myanmar
ေႃ	s	-ɔ	aw o			ea						U+1031 U+1083: MYANMAR VOWEL SIGN E, VOWEL SIGN SHAN AA​	
ိူဝ်	s	-ə		ə								U+102D U+1030 U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER WA, SIGN ASAT​	
ိူ	s	-ə-	oe			iū						U+102D U+1030: MYANMAR VOWEL SIGN I, VOWEL SIGN UU​	
ႃ		-ɑː	aa	ɑː	a	a	M	vowel sign				U+1083: MYANMAR VOWEL SIGN SHAN AA​	myanmar
ၢ		-ɑː-	aa		a	ā	m	vowel sign				U+1062: MYANMAR VOWEL SIGN SGAW KAREN EU​	myanmar
													
႟					o	o	N	vowel				U+109F: MYANMAR SYMBOL SHAN EXCLAMATION	myanmar
													
													
ိဝ်	s	-iu	iu			iwˣ						U+102D U+101D U+103A: MYANMAR VOWEL SIGN I, LETTER WA, SIGN ASAT​	
ိုၺ်	s	-ɨi	uei uey			iuɲˣ						U+102D U+102F U+107A U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER SHAN NYA, SIGN ASAT​	
ုၺ်	s	-ui	ui			uɲˣ						U+102F U+107A U+103A: MYANMAR VOWEL SIGN U, LETTER SHAN NYA, SIGN ASAT​	
													
ဵဝ်	s	-eu	eo			ėwˣ							
ူၺ်	s	-oi	ohi uai			ūɲˣ						U+1030 U+107A U+103A: MYANMAR VOWEL SIGN UU, LETTER SHAN NYA, SIGN ASAT​	
													
ိူၺ်	s	-əi	oei oey			iūɲˣ						U+102D U+1030 U+107A U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER SHAN NYA, SIGN ASAT​	
													
ႅဝ်	s	-ɛw	aeo			ɛ̇wˣ						U+1085 U+101D U+103A: MYANMAR VOWEL SIGN SHAN E ABOVE, LETTER WA, SIGN ASAT​	
ွႆ	s	-ɔi	oi oy			ɔaʲ						U+103D U+1086: MYANMAR CONSONANT SIGN MEDIAL WA, VOWEL SIGN SHAN FINAL Y​	
ႆ		-ai	ai		a	aʲ	J	vowel sign				U+1086: MYANMAR VOWEL SIGN SHAN FINAL Y​	myanmar
ၢႆ	s	-aːi	aai			āaʲ						U+1062 U+1086: MYANMAR VOWEL SIGN SGAW KAREN EU, VOWEL SIGN SHAN FINAL Y​	
ဝ်	s	-au	aw			wˣ	f					U+101D U+103A: MYANMAR LETTER WA, SIGN ASAT	
ၢဝ်	s	-aːw	aaw			āwˣ						U+1062 U+101D U+103A: MYANMAR VOWEL SIGN SGAW KAREN EU, LETTER WA, SIGN ASAT​	
ႂ်	s	-aɯ	aɨ			w̆ˣ	F					U+1082 U+103A: MYANMAR CONSONANT SIGN SHAN MEDIAL WA, SIGN ASAT​	
													
													
													
်					\	ˣ		asat				U+103A: MYANMAR SIGN ASAT​	myanmar
္					*	͓		virama				U+1039: MYANMAR SIGN VIRAMA​	myanmar
													
													
													
ႇ		˩	,	˩	^	²	j	low tone mark 11		ယၵ်း	ják	U+1087: MYANMAR SIGN SHAN TONE-2​	myanmar
ႈ		˧˨	;	˧˨	^	³	;	mid tone mark 32		ယၵ်းၸမ်ႈ	ják tsam	U+1088: MYANMAR SIGN SHAN TONE-3​	myanmar
း		˥	:	˥	^	⁴	:	high tone mark 55		ၸမ်ႈၼႃႈ	tsam naː	U+1038: MYANMAR SIGN VISARGA​	myanmar
ႉ		˦˨ˀ	.	˦˨ˀ	^	⁵	h	falling/creaky tone mark 42		ၸမ်ႈတႂ်ႈ	tsam tau	U+1089: MYANMAR SIGN SHAN TONE-5​	myanmar
ႊ		˧˦˧		˧˦˧	^	⁶	L	emphatic tone mark 343		ယၵ်းၶိုၼ်ႈ	ják kʰɯn	U+108A: MYANMAR SIGN SHAN TONE-6​	myanmar
													
													
၊					,	,	,	comma				U+104A: MYANMAR SIGN LITTLE SECTION	myanmar
။					.	.	.	full stop				U+104B: MYANMAR SIGN SECTION	myanmar
													
													
႐					§	0̣	0	shan digit				U+1090: MYANMAR SHAN DIGIT ZERO	myanmar
႑					§	1̣	1	shan digit				U+1091: MYANMAR SHAN DIGIT ONE	myanmar
႒					§	2̣	2	shan digit				U+1092: MYANMAR SHAN DIGIT TWO	myanmar
႓					§	3̣	3	shan digit				U+1093: MYANMAR SHAN DIGIT THREE	myanmar
႔					§	4̣	4	shan digit				U+1094: MYANMAR SHAN DIGIT FOUR	myanmar
႕					§	5̣	5	shan digit				U+1095: MYANMAR SHAN DIGIT FIVE	myanmar
႖					§	6̣	6	shan digit				U+1096: MYANMAR SHAN DIGIT SIX	myanmar
႗					§	7̣	7	shan digit				U+1097: MYANMAR SHAN DIGIT SEVEN	myanmar
႘					§	8̣	8	shan digit				U+1098: MYANMAR SHAN DIGIT EIGHT	myanmar
႙					§	9̣	9	shan digit				U+1099: MYANMAR SHAN DIGIT NINE	myanmar
													
၀					!	0̤		myanmar digit				U+1040: MYANMAR DIGIT ZERO	myanmar
၁					!	1̤		myanmar digit				U+1041: MYANMAR DIGIT ONE	myanmar
၂					!	2̤		myanmar digit				U+1042: MYANMAR DIGIT TWO	myanmar
၃					!	3̤		myanmar digit				U+1043: MYANMAR DIGIT THREE	myanmar
၄					!	4̤		myanmar digit				U+1044: MYANMAR DIGIT FOUR	myanmar
၅					!	5̤		myanmar digit				U+1045: MYANMAR DIGIT FIVE	myanmar
၆					!	6̤		myanmar digit				U+1046: MYANMAR DIGIT SIX	myanmar
၇					!	7̤		myanmar digit				U+1047: MYANMAR DIGIT SEVEN	myanmar
၈					!	8̤		myanmar digit				U+1048: MYANMAR DIGIT EIGHT	myanmar
၉					!	9̤		myanmar digit				U+1049: MYANMAR DIGIT NINE	myanmar
													
													
													
													
													
													
													
													
													
													
													
													
ၶျ	s	cʰ				kʰy						U+1076 U+103B: MYANMAR LETTER SHAN KHA, CONSONANT SIGN MEDIAL YA	
သျ	s	ʃ				sy						U+101E U+103B: MYANMAR LETTER SA, CONSONANT SIGN MEDIAL YA	
													
													
													
													
ေႃ်	s	-ɔ	aw o			eaˣ						U+1031 U+1083 U+103A: MYANMAR VOWEL SIGN E, VOWEL SIGN SHAN AA, SIGN ASAT​	
ိူဝ်ဝ်	s	-ə	oe									U+102D U+1030 U+101D U+103A U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER WA, SIGN ASAT, LETTER WA, SIGN ASAT​	
ိုဝ်ဝ်	s											U+102D U+102F U+101D U+103A U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER WA, SIGN ASAT, LETTER WA, SIGN ASAT​	
ွၺ်	s											U+103D U+107A U+103A: MYANMAR CONSONANT SIGN MEDIAL WA, LETTER SHAN NYA, SIGN ASAT​	
ၢၺ်	s											U+1062 U+107A U+103A: MYANMAR VOWEL SIGN SGAW KAREN EU, LETTER SHAN NYA, SIGN ASAT​	
ၺ်	s											U+107A U+103A: MYANMAR LETTER SHAN NYA, SIGN ASAT	
ုဝ်	s											U+102F U+101D U+103A: MYANMAR VOWEL SIGN U, LETTER WA, SIGN ASAT​	
													
													
													
													
													
\u200B								zero-width space				U+200B ZERO WIDTH SPACE	
\u200C						ₓ		zero-width non-joiner				U+200C: ZERO WIDTH NON-JOINER	
\u200D						₊		zero-width joiner				U+200D: ZERO WIDTH JOINER	
\u034F						ᶜᵍʲ		combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER​	
\u2067						ʳˡⁱ		rtl isolate				U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066						ˡʳⁱ		ltr isolate				U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068						ᶠˢⁱ		first-strong isolate				U+2068: FIRST STRONG ISOLATE	
\u2069						ᵖᵈⁱ		pop direction isolate				U+2069: POP DIRECTIONAL ISOLATE	
\u202B						ʳˡᵉ		rtl embed				U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A						ˡʳᵉ		ltr embed				U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C						ᵖᵈᶠ		pop direction				U+202C: POP DIRECTIONAL FORMATTING	
\u200F						ʳˡᵐ		rtl mark				U+200F: RIGHT-TO-LEFT MARK	
\u200E						ˡʳᵐ		ltr mark				U+200E: LEFT-TO-RIGHT MARK	
\u061C						ᵃˡᵐ		arabic letter mark				U+061C: ARABIC LETTER MARK	
													
													
“					“	<		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
”					”	>		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
‘						<		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
’						>		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
«			“			"		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»			”			"		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
ʼ								apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE	
,								comma				U+002C: COMMA	
;								semicolon				U+003B: SEMICOLON	
:								colon				U+003A: COLON	
.								full stop				U+002E: FULL STOP	
?								question mark				U+003F: QUESTION MARK	
!								exclamation mark				U+0021: EXCLAMATION MARK	
(								parenthesis				U+0028: LEFT PARENTHESIS	
)								parenthesis				U+0029: RIGHT PARENTHESIS	
…								ellipsis				U+2026: HORIZONTAL ELLIPSIS	
–								en dash				U+2013: EN DASH	
—								em dash				U+2014: EM DASH	
													
§								section sign				U+00A7: SECTION SIGN	
†								dagger				U+2020: DAGGER	
‡								double dagger				U+2021: DOUBLE DAGGER	
′								prime				U+2032: PRIME	
″								double prime				U+2033: DOUBLE PRIME	
‐								hyphen				U+2010 HYPHEN	
‑								non-breaking hyphen				U+2011 NON-BREAKING HYPHEN	
													
													
													
႞						–	R					U+109E: MYANMAR SYMBOL SHAN ONE	myanmar
ံ						–	H					U+1036: MYANMAR SIGN ANUSVARA​	myanmar



`



latinPanel = 'ʳ ˩ ˧˨ ˥ ˦˨ˀ ˧˦˧ ɑː ɛ ə iː ʲ kʰ ŋ ɲ ɔ pʰ θ ʨ tʰ ʷ ɯ ʔ'




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

"transckey": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nnameLoc": 10,
"nameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[3, 'Latin']]
}
