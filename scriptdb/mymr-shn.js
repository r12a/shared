var spreadsheet = `
ၵ		k	k	k	ka	consonant				U+1075: MYANMAR LETTER SHAN KA	myanmar
ၶ		k	kh	kʰ	kʰa	consonant				U+1076: MYANMAR LETTER SHAN KHA	myanmar
င		N	ng	ŋ	ŋa	consonant				U+1004: MYANMAR LETTER NGA	myanmar
ၸ		c	ts	c	ʨa	consonant				U+1078: MYANMAR LETTER SHAN CA	myanmar
ၺ		n	ny	ɲ	ɲa	consonant				U+107A: MYANMAR LETTER SHAN NYA	myanmar
တ		t	t	t	ta	consonant				U+1010: MYANMAR LETTER TA	myanmar
ထ		t	th	tʰ	tʰa	consonant				U+1011: MYANMAR LETTER THA	myanmar
ၼ		n¶	n	n	na	consonant				U+107C: MYANMAR LETTER SHAN NA	myanmar
ပ		p	p	p	pa	consonant				U+1015: MYANMAR LETTER PA	myanmar
ၽ		p	ph	pʰ	pʰa	consonant				U+107D: MYANMAR LETTER SHAN PHA	myanmar
ၾ		f	f	f	fa	consonant				U+107E: MYANMAR LETTER SHAN FA	myanmar
မ		m	m	m	ma	consonant				U+1019: MYANMAR LETTER MA	myanmar
ယ		y	y	y	ja	consonant				U+101A: MYANMAR LETTER YA	myanmar
ရ		r	r	r	ra	consonant				U+101B: MYANMAR LETTER RA	myanmar
လ		l	l	l	la	consonant				U+101C: MYANMAR LETTER LA	myanmar
ဝ		w	w	w	wa	consonant				U+101D: MYANMAR LETTER WA	myanmar
သ		s	s	s	sa	consonant				U+101E: MYANMAR LETTER SA	myanmar
ႁ		h	h	h	ha	consonant				U+1081: MYANMAR LETTER SHAN HA	myanmar
ဢ		}	a	ʔ	ʔa	consonant				U+1022: MYANMAR LETTER SHAN A	myanmar
											
											
ၿ		b	b	b	b	consonant	rare, for non-Shan sounds			U+107F: MYANMAR LETTER SHAN BA	myanmar
ၻ		d	d	d	d	consonant	rare, for non-Shan sounds			U+107B: MYANMAR LETTER SHAN DA	myanmar
ၷ		g	g	g	ɡ	consonant	rare, for non-Shan sounds			U+1077: MYANMAR LETTER SHAN GA	myanmar
ႀ		Q	x	θ	θ	consonant	rare, for non-Shan sounds			U+1080: MYANMAR LETTER SHAN THA	myanmar
ၹ		z	z	z	z	consonant	rare, for non-Shan sounds			U+1079: MYANMAR LETTER SHAN ZA	myanmar
											
											
ျ		y		y̆	ʲ	medial consonant				U+103B: MYANMAR CONSONANT SIGN MEDIAL YA​	myanmar
ြ		r		r̆	r	medial consonant				U+103C: MYANMAR CONSONANT SIGN MEDIAL RA​	myanmar
ႂ		w	w	w̆	ʷ	medial consonant				U+1082: MYANMAR CONSONANT SIGN SHAN MEDIAL WA​	myanmar
											
											
											
ိ		i	i	i	-i-	vowel sign				U+102D: MYANMAR VOWEL SIGN I​	myanmar
ီ		i	ii	ī	-iː	vowel sign				U+102E: MYANMAR VOWEL SIGN II​	myanmar
ု		u	u	u	-u-	vowel sign				U+102F: MYANMAR VOWEL SIGN U​	myanmar
ူ		u	o uu	ū	-o- -uː	vowel sign				U+1030: MYANMAR VOWEL SIGN UU​	myanmar
ေ		e	e	e	-e	vowel sign				U+1031: MYANMAR VOWEL SIGN E​	myanmar
ဵ		e	e	ė	-e-	vowel sign				U+1035: MYANMAR VOWEL SIGN E ABOVE​	myanmar
ႄ		a	ae	ɛ	-ɛ	vowel sign				U+1084: MYANMAR VOWEL SIGN SHAN E​	myanmar
ႅ		a	ae	ɛ̇	-ɛ-	vowel sign				U+1085: MYANMAR VOWEL SIGN SHAN E ABOVE​	myanmar
ွ		o	aw o	ɔ	-ɔ-	vowel sign				U+103D: MYANMAR CONSONANT SIGN MEDIAL WA​	myanmar
ႃ		a	aa	a	-ɑː	vowel sign				U+1083: MYANMAR VOWEL SIGN SHAN AA​	myanmar
ၢ		a	aa	ā	-ɑː-	vowel sign				U+1062: MYANMAR VOWEL SIGN SGAW KAREN EU​	myanmar
ႆ		a	ai	aʲ	-ai	vowel sign				U+1086: MYANMAR VOWEL SIGN SHAN FINAL Y​	myanmar
											
႟		o		o		vowel				U+109F: MYANMAR SYMBOL SHAN EXCLAMATION	myanmar
											
											
ိဝ်	s		iu	iwˣ	-iu					U+102D U+101D U+103A: MYANMAR VOWEL SIGN I, LETTER WA, SIGN ASAT​	
ိုၺ်	s		uei uey	iuɲˣ	-ɨi					U+102D U+102F U+107A U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER SHAN NYA, SIGN ASAT​	
ို	s		eu	iu	-ɯ-					U+102D U+102F: MYANMAR VOWEL SIGN I, VOWEL SIGN U​	
ိုဝ်	s		eu	iuwˣ	-ɯ					U+102D U+102F U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER WA, SIGN ASAT​	
ုၺ်	s		ui	uɲˣ	-ui					U+102F U+107A U+103A: MYANMAR VOWEL SIGN U, LETTER SHAN NYA, SIGN ASAT​	
											
ဵဝ်	s		eo	ėwˣ	-eu						
ူဝ်	s		o	ūwˣ	-o					U+1030 U+101D U+103A: MYANMAR VOWEL SIGN UU, LETTER WA, SIGN ASAT​	
ူၺ်	s		ohi uai	ūɲˣ	-oi					U+1030 U+107A U+103A: MYANMAR VOWEL SIGN UU, LETTER SHAN NYA, SIGN ASAT​	
											
ိူဝ်	s				-ə					U+102D U+1030 U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER WA, SIGN ASAT​	
ိူ	s		oe	iū	-ə-					U+102D U+1030: MYANMAR VOWEL SIGN I, VOWEL SIGN UU​	
ိူၺ်	s		oei oey	iūɲˣ	-əi					U+102D U+1030 U+107A U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER SHAN NYA, SIGN ASAT​	
											
ႅဝ်	s		aeo	ɛ̇wˣ	-ɛw					U+1085 U+101D U+103A: MYANMAR VOWEL SIGN SHAN E ABOVE, LETTER WA, SIGN ASAT​	
ေႃ	s		aw o	ea	-ɔ					U+1031 U+1083: MYANMAR VOWEL SIGN E, VOWEL SIGN SHAN AA​	
ေႃ်	s		aw o	eaˣ	-ɔ					U+1031 U+1083 U+103A: MYANMAR VOWEL SIGN E, VOWEL SIGN SHAN AA, SIGN ASAT​	
ွႆ	s		oi oy	ɔaʲ	-ɔi					U+103D U+1086: MYANMAR CONSONANT SIGN MEDIAL WA, VOWEL SIGN SHAN FINAL Y​	
ၢႆ	s		aai	āaʲ	-aːi					U+1062 U+1086: MYANMAR VOWEL SIGN SGAW KAREN EU, VOWEL SIGN SHAN FINAL Y​	
ဝ်	s		aw	wˣ	-au					U+101D U+103A: MYANMAR LETTER WA, SIGN ASAT	
ၢဝ်	s		aaw	āwˣ	-aːw					U+1062 U+101D U+103A: MYANMAR VOWEL SIGN SGAW KAREN EU, LETTER WA, SIGN ASAT​	
ႂ်	s		aɨ	w̆ˣ	-aɯ					U+1082 U+103A: MYANMAR CONSONANT SIGN SHAN MEDIAL WA, SIGN ASAT​	
											
ိူဝ်ဝ်	s		oe		-ə					U+102D U+1030 U+101D U+103A U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER WA, SIGN ASAT, LETTER WA, SIGN ASAT​	
ိုဝ်ဝ်	s									U+102D U+102F U+101D U+103A U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER WA, SIGN ASAT, LETTER WA, SIGN ASAT​	
ွၺ်	s									U+103D U+107A U+103A: MYANMAR CONSONANT SIGN MEDIAL WA, LETTER SHAN NYA, SIGN ASAT​	
ၢၺ်	s									U+1062 U+107A U+103A: MYANMAR VOWEL SIGN SGAW KAREN EU, LETTER SHAN NYA, SIGN ASAT​	
ၺ်	s									U+107A U+103A: MYANMAR LETTER SHAN NYA, SIGN ASAT	
ုဝ်	s									U+102F U+101D U+103A: MYANMAR VOWEL SIGN U, LETTER WA, SIGN ASAT​	
											
											
်		\		ˣ		asat				U+103A: MYANMAR SIGN ASAT​	myanmar
္		*		͓		virama				U+1039: MYANMAR SIGN VIRAMA​	myanmar
											
											
											
ႇ		^	,	²	˩	low tone mark 11		ják	ယၵ်း	U+1087: MYANMAR SIGN SHAN TONE-2​	myanmar
ႈ		^	;	³	˧˨	mid tone mark 32		ják tsam	ယၵ်းၸမ်ႈ	U+1088: MYANMAR SIGN SHAN TONE-3​	myanmar
း		^	:	⁴	˥	high tone mark 55		tsam naː	ၸမ်ႈၼႃႈ	U+1038: MYANMAR SIGN VISARGA​	myanmar
ႉ		^	.	⁵	˦˨ˀ	falling/creaky tone mark 42		tsam tau	ၸမ်ႈတႂ်ႈ	U+1089: MYANMAR SIGN SHAN TONE-5​	myanmar
ႊ		^		⁶	˧˦˧	emphatic tone mark 343		ják kʰɯn	ယၵ်းၶိုၼ်ႈ	U+108A: MYANMAR SIGN SHAN TONE-6​	myanmar
											
											
၊		,		,		comma				U+104A: MYANMAR SIGN LITTLE SECTION	myanmar
။		.		.		full stop				U+104B: MYANMAR SIGN SECTION	myanmar
											
											
႐		§		0̣		shan digit				U+1090: MYANMAR SHAN DIGIT ZERO	myanmar
႑		§		1̣		shan digit				U+1091: MYANMAR SHAN DIGIT ONE	myanmar
႒		§		2̣		shan digit				U+1092: MYANMAR SHAN DIGIT TWO	myanmar
႓		§		3̣		shan digit				U+1093: MYANMAR SHAN DIGIT THREE	myanmar
႔		§		4̣		shan digit				U+1094: MYANMAR SHAN DIGIT FOUR	myanmar
႕		§		5̣		shan digit				U+1095: MYANMAR SHAN DIGIT FIVE	myanmar
႖		§		6̣		shan digit				U+1096: MYANMAR SHAN DIGIT SIX	myanmar
႗		§		7̣		shan digit				U+1097: MYANMAR SHAN DIGIT SEVEN	myanmar
႘		§		8̣		shan digit				U+1098: MYANMAR SHAN DIGIT EIGHT	myanmar
႙		§		9̣		shan digit				U+1099: MYANMAR SHAN DIGIT NINE	myanmar
											
၀		!		0̤		myanmar digit				U+1040: MYANMAR DIGIT ZERO	myanmar
၁		!		1̤		myanmar digit				U+1041: MYANMAR DIGIT ONE	myanmar
၂		!		2̤		myanmar digit				U+1042: MYANMAR DIGIT TWO	myanmar
၃		!		3̤		myanmar digit				U+1043: MYANMAR DIGIT THREE	myanmar
၄		!		4̤		myanmar digit				U+1044: MYANMAR DIGIT FOUR	myanmar
၅		!		5̤		myanmar digit				U+1045: MYANMAR DIGIT FIVE	myanmar
၆		!		6̤		myanmar digit				U+1046: MYANMAR DIGIT SIX	myanmar
၇		!		7̤		myanmar digit				U+1047: MYANMAR DIGIT SEVEN	myanmar
၈		!		8̤		myanmar digit				U+1048: MYANMAR DIGIT EIGHT	myanmar
၉		!		9̤		myanmar digit				U+1049: MYANMAR DIGIT NINE	myanmar



`

var cols = {
"class": 1,
"key":2,
"transcription":3,
"transLoc": 4,
"ipaLoc": 5,
"transckey": 0,
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
"shape": 0,
"numLoc": 0,
"nameLoc": 8,
"nnameLoc": 9,
"ucsName": 10,
"block": 11,

"othertranscriptions": [[3, 'Latin']]
}
