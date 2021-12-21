var spreadsheet = `
ၵ	k	k	a	k	k	u	Lo		consonant				U+1075: MYANMAR LETTER SHAN KA	✓
ၶ	k	kʰ	a	kh	kʰ	c	Lo		consonant				U+1076: MYANMAR LETTER SHAN KHA	✓
င	N	ŋ	a	ng	ŋ	i	Lo		consonant				U+1004: MYANMAR LETTER NGA	✓
ၸ	c	ʨ	a	ts	c	q	Lo		consonant				U+1078: MYANMAR LETTER SHAN CA	✓
ၺ	n	ɲ -j	a	ny	ɲ	n	Lo		consonant / diphthong glide				U+107A: MYANMAR LETTER SHAN NYA	✓
တ	t	t	a	t	t	w	Lo		consonant				U+1010: MYANMAR LETTER TA	✓
ထ	t	tʰ	a	th	tʰ	x	Lo		consonant				U+1011: MYANMAR LETTER THA	✓
ၼ	n¶	n	a	n	n	e	Lo		consonant				U+107C: MYANMAR LETTER SHAN NA	✓
ပ	p	p	a	p	p	y	Lo		consonant				U+1015: MYANMAR LETTER PA	✓
ၽ	p	pʰ	a	ph	pʰ	z	Lo		consonant				U+107D: MYANMAR LETTER SHAN PHA	✓
ၾ	f	f	a	f	f		Lo		consonant				U+107E: MYANMAR LETTER SHAN FA	✓
မ	m	m	a	m	m	r	Lo		consonant				U+1019: MYANMAR LETTER MA	✓
ယ	y	j	a	y	y	b	Lo		consonant				U+101A: MYANMAR LETTER YA	✓
ရ	r	r	a	r	r	I	Lo		consonant				U+101B: MYANMAR LETTER RA	✓
လ	l	l	a	l	l	v	Lo		consonant				U+101C: MYANMAR LETTER LA	✓
ဝ	w	w	a	w	w	o	Lo		consonant / vowel				U+101D: MYANMAR LETTER WA	✓
သ	s	sʰ	a	s	s	O	Lo		consonant				U+101E: MYANMAR LETTER SA	✓
ႁ	h	h	a	h	h	p	Lo		consonant				U+1081: MYANMAR LETTER SHAN HA	✓
ဢ	}	ʔa ʔ-	a	a	ʔ	t	Lo		standalone vowel carrier				U+1022: MYANMAR LETTER SHAN A	✓
														
														
ၿ	b	b	a	b	b	Y	Lo	r	consonant	rare, for non-Shan sounds			U+107F: MYANMAR LETTER SHAN BA	✓
ၻ	d	d	a	d	d	W	Lo	r	consonant	rare, for non-Shan sounds			U+107B: MYANMAR LETTER SHAN DA	✓
ၷ	g	ɡ	a	g	g	U	Lo	r	consonant	rare, for non-Shan sounds			U+1077: MYANMAR LETTER SHAN GA	✓
ႀ	Q	θ	a	x	θ	P	Lo	r	consonant	rare, for non-Shan sounds			U+1080: MYANMAR LETTER SHAN THA	✓
ၹ	z	z	a	z	z		Lo	r	consonant	rare, for non-Shan sounds			U+1079: MYANMAR LETTER SHAN ZA	✓
														
														
ျ	y	-j-	a	y	y̆	B	Mc​		medial consonant				U+103B: MYANMAR CONSONANT SIGN MEDIAL YA​	✓
ြ	r	-r-	a	r	r̆	T	Mc​		medial consonant				U+103C: MYANMAR CONSONANT SIGN MEDIAL RA​	✓
ႂ	w	-w- -ɰ	a	w	w̆	G	Mn​		medial consonant				U+1082: MYANMAR CONSONANT SIGN SHAN MEDIAL WA​	✓
														
														
														
ိ	i	-i-		i	i		Mn​		vowel sign				U+102D: MYANMAR VOWEL SIGN I​	✓
ီ	i	-iː		ii	ī	D	Mn​		vowel sign				U+102E: MYANMAR VOWEL SIGN II​	✓
ို		-ɯ-		eu	iu	d			composite vowel				U+102D U+102F: MYANMAR VOWEL SIGN I, VOWEL SIGN U​	
ိုဝ်		-ɯː		eu	iuwˣ				composite vowel				U+102D U+102F U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER WA, SIGN ASAT​	
ု	u	-u-		u	u	k	Mn​		vowel sign				U+102F: MYANMAR VOWEL SIGN U​	✓
ူ	u	-uː -o-		o uu	ū	l	Mn​		vowel sign				U+1030: MYANMAR VOWEL SIGN UU​	✓
ေ	e	-eː		e	e	a	Mc​		vowel sign				U+1031: MYANMAR VOWEL SIGN E​	✓
ဵ	e	-e-		e	ė	A	Mn​		vowel sign				U+1035: MYANMAR VOWEL SIGN E ABOVE​	✓
ူဝ်		-oː		o	ūwˣ				composite vowel				U+1030 U+101D U+103A: MYANMAR VOWEL SIGN UU, LETTER WA, SIGN ASAT​	
ႄ	a	-ɛː		ae	ɛ	s	Mc​		vowel sign				U+1084: MYANMAR VOWEL SIGN SHAN E​	✓
ႅ	a	-ɛ-		ae	ɛ̇	S	Mn​		vowel sign				U+1085: MYANMAR VOWEL SIGN SHAN E ABOVE​	✓
ွ	o	-ɔ-		aw o	ɔ	g	Mn​		vowel sign				U+103D: MYANMAR CONSONANT SIGN MEDIAL WA​	✓
ေႃ		-ɔː		aw o	ea				composite vowel				U+1031 U+1083: MYANMAR VOWEL SIGN E, VOWEL SIGN SHAN AA​	
ိူ		-ɤ-		oe	iū				composite vowel				U+102D U+1030: MYANMAR VOWEL SIGN I, VOWEL SIGN UU​	
ိူဝ်		-ɤː							composite vowel				U+102D U+1030 U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER WA, SIGN ASAT​	
ႃ	a	-ɑː		aa	a	M	Mc​		vowel sign				U+1083: MYANMAR VOWEL SIGN SHAN AA​	✓
ၢ	a	-ɑː-		aa	ā	m	Mc​		vowel sign				U+1062: MYANMAR VOWEL SIGN SGAW KAREN EU​	✓
														
႟	o				o	N	So		vowel				U+109F: MYANMAR SYMBOL SHAN EXCLAMATION	✓
														
														
ိဝ်		-iu		iu	iwˣ				composite vowel				U+102D U+101D U+103A: MYANMAR VOWEL SIGN I, LETTER WA, SIGN ASAT​	
ိုၺ်		-ɨj		uei uey	iuɲˣ				composite vowel				U+102D U+102F U+107A U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER SHAN NYA, SIGN ASAT​	
ုၺ်		-uj		ui	uɲˣ				composite vowel				U+102F U+107A U+103A: MYANMAR VOWEL SIGN U, LETTER SHAN NYA, SIGN ASAT​	
														
ဵဝ်		-eu		eo	ėwˣ				composite vowel					
ူၺ်		-oj		ohi uai	ūɲˣ				composite vowel				U+1030 U+107A U+103A: MYANMAR VOWEL SIGN UU, LETTER SHAN NYA, SIGN ASAT​	
														
ိူၺ်		-ɤj		oei oey	iūɲˣ				composite vowel				U+102D U+1030 U+107A U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER SHAN NYA, SIGN ASAT​	
														
ႅဝ်		-ɛw		aeo	ɛ̇wˣ				composite vowel				U+1085 U+101D U+103A: MYANMAR VOWEL SIGN SHAN E ABOVE, LETTER WA, SIGN ASAT​	
ွႆ		-ɔi		oi oy	ɔaʲ				composite vowel				U+103D U+1086: MYANMAR CONSONANT SIGN MEDIAL WA, VOWEL SIGN SHAN FINAL Y​	
ၢႆ		-aːi		aai	āaʲ				composite vowel				U+1062 U+1086: MYANMAR VOWEL SIGN SGAW KAREN EU, VOWEL SIGN SHAN FINAL Y​	
ဝ်		-au		aw	wˣ	f			composite vowel				U+101D U+103A: MYANMAR LETTER WA, SIGN ASAT	
ၢဝ်		-aːw		aaw	āwˣ				composite vowel				U+1062 U+101D U+103A: MYANMAR VOWEL SIGN SGAW KAREN EU, LETTER WA, SIGN ASAT​	
ႂ်		-aɰ		aɨ	w̆ˣ	F			composite vowel				U+1082 U+103A: MYANMAR CONSONANT SIGN SHAN MEDIAL WA, SIGN ASAT​	
														
ႆ	a	-j		ai	ʲ	J	Mn​		diphthong glide				U+1086: MYANMAR VOWEL SIGN SHAN FINAL Y​	✓
														
														
်	\				ˣ		Mn​		asat				U+103A: MYANMAR SIGN ASAT​	✓
္	*				͓		Mn​		virama				U+1039: MYANMAR SIGN VIRAMA​	✓
														
														
														
ႇ	^	˩		,	²	j	Mc​		low tone mark 11		ယၵ်း	ják	U+1087: MYANMAR SIGN SHAN TONE-2​	✓
ႈ	^	˧˨		;	³	;	Mc​		mid tone mark 32		ယၵ်းၸမ်ႈ	ják tsam	U+1088: MYANMAR SIGN SHAN TONE-3​	✓
း	^	˥		:	⁴	:	Mc​		high tone mark 55		ၸမ်ႈၼႃႈ	tsam naː	U+1038: MYANMAR SIGN VISARGA​	✓
ႉ	^	˦˨ˀ		.	⁵	h	Mc​		falling/creaky tone mark 42		ၸမ်ႈတႂ်ႈ	tsam tau	U+1089: MYANMAR SIGN SHAN TONE-5​	✓
ႊ	^	˧˦˧			⁶	L	Mc​		emphatic tone mark 343		ယၵ်းၶိုၼ်ႈ	ják kʰɯn	U+108A: MYANMAR SIGN SHAN TONE-6​	✓
														
														
၊	,				,	,	Po		comma				U+104A: MYANMAR SIGN LITTLE SECTION	✓
။	.				.	.	Po		full stop				U+104B: MYANMAR SIGN SECTION	✓
														
														
႐	§				0̣	0	Nd		shan digit				U+1090: MYANMAR SHAN DIGIT ZERO	✓
႑	§				1̣	1	Nd		shan digit				U+1091: MYANMAR SHAN DIGIT ONE	✓
႒	§				2̣	2	Nd		shan digit				U+1092: MYANMAR SHAN DIGIT TWO	✓
႓	§				3̣	3	Nd		shan digit				U+1093: MYANMAR SHAN DIGIT THREE	✓
႔	§				4̣	4	Nd		shan digit				U+1094: MYANMAR SHAN DIGIT FOUR	✓
႕	§				5̣	5	Nd		shan digit				U+1095: MYANMAR SHAN DIGIT FIVE	✓
႖	§				6̣	6	Nd		shan digit				U+1096: MYANMAR SHAN DIGIT SIX	✓
႗	§				7̣	7	Nd		shan digit				U+1097: MYANMAR SHAN DIGIT SEVEN	✓
႘	§				8̣	8	Nd		shan digit				U+1098: MYANMAR SHAN DIGIT EIGHT	✓
႙	§				9̣	9	Nd		shan digit				U+1099: MYANMAR SHAN DIGIT NINE	✓
														
၀	!				0̤		Nd		myanmar digit				U+1040: MYANMAR DIGIT ZERO	✓
၁	!				1̤		Nd		myanmar digit				U+1041: MYANMAR DIGIT ONE	✓
၂	!				2̤		Nd		myanmar digit				U+1042: MYANMAR DIGIT TWO	✓
၃	!				3̤		Nd		myanmar digit				U+1043: MYANMAR DIGIT THREE	✓
၄	!				4̤		Nd		myanmar digit				U+1044: MYANMAR DIGIT FOUR	✓
၅	!				5̤		Nd		myanmar digit				U+1045: MYANMAR DIGIT FIVE	✓
၆	!				6̤		Nd		myanmar digit				U+1046: MYANMAR DIGIT SIX	✓
၇	!				7̤		Nd		myanmar digit				U+1047: MYANMAR DIGIT SEVEN	✓
၈	!				8̤		Nd		myanmar digit				U+1048: MYANMAR DIGIT EIGHT	✓
၉	!				9̤		Nd		myanmar digit				U+1049: MYANMAR DIGIT NINE	✓
														
														
														
														
														
														
														
														
														
														
														
														
ၶျ		cʰ			kʰy								U+1076 U+103B: MYANMAR LETTER SHAN KHA, CONSONANT SIGN MEDIAL YA	
သျ		ʃ			sy								U+101E U+103B: MYANMAR LETTER SA, CONSONANT SIGN MEDIAL YA	
														
														
														
														
ေႃ်		-ɔ		aw o	eaˣ								U+1031 U+1083 U+103A: MYANMAR VOWEL SIGN E, VOWEL SIGN SHAN AA, SIGN ASAT​	
ိူဝ်ဝ်		-ə		oe									U+102D U+1030 U+101D U+103A U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN UU, LETTER WA, SIGN ASAT, LETTER WA, SIGN ASAT​	
ိုဝ်ဝ်													U+102D U+102F U+101D U+103A U+101D U+103A: MYANMAR VOWEL SIGN I, VOWEL SIGN U, LETTER WA, SIGN ASAT, LETTER WA, SIGN ASAT​	
ွၺ်													U+103D U+107A U+103A: MYANMAR CONSONANT SIGN MEDIAL WA, LETTER SHAN NYA, SIGN ASAT​	
ၢၺ်													U+1062 U+107A U+103A: MYANMAR VOWEL SIGN SGAW KAREN EU, LETTER SHAN NYA, SIGN ASAT​	
ၺ်													U+107A U+103A: MYANMAR LETTER SHAN NYA, SIGN ASAT	
ုဝ်													U+102F U+101D U+103A: MYANMAR VOWEL SIGN U, LETTER WA, SIGN ASAT​	
														
														
														
														
														
\u200B							Cf		zero-width space				U+200B ZERO WIDTH SPACE	
\u200C					ₓ		Cf		zero-width non-joiner				U+200C: ZERO WIDTH NON-JOINER	
\u200D					₊		Cf		zero-width joiner				U+200D: ZERO WIDTH JOINER	
\u034F					ᶜᵍʲ		Mn​		combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER​	
\u2067					ʳˡⁱ		Cf		rtl isolate				U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					ˡʳⁱ		Cf		ltr isolate				U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068					ᶠˢⁱ		Cf		first-strong isolate				U+2068: FIRST STRONG ISOLATE	
\u2069					ᵖᵈⁱ		Cf		pop direction isolate				U+2069: POP DIRECTIONAL ISOLATE	
\u202B					ʳˡᵉ		Cf		rtl embed				U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					ˡʳᵉ		Cf		ltr embed				U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C					ᵖᵈᶠ		Cf		pop direction				U+202C: POP DIRECTIONAL FORMATTING	
\u200F					ʳˡᵐ		Cf		rtl mark				U+200F: RIGHT-TO-LEFT MARK	
\u200E					ˡʳᵐ		Cf		ltr mark				U+200E: LEFT-TO-RIGHT MARK	
\u061C					ᵃˡᵐ		Cf		arabic letter mark				U+061C: ARABIC LETTER MARK	
														
														
“	“				<		Pi		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
”	”				>		Pf		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
‘					<		Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
’					>		Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
«				“	"		Pi		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»				”	"		Pf		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
ʼ							Lm		apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE	
,							Po		comma				U+002C: COMMA	
;							Po		semicolon				U+003B: SEMICOLON	
:							Po		colon				U+003A: COLON	
.							Po		full stop				U+002E: FULL STOP	
?							Po		question mark				U+003F: QUESTION MARK	
!							Po		exclamation mark				U+0021: EXCLAMATION MARK	
(							Ps		parenthesis				U+0028: LEFT PARENTHESIS	
)							Pe		parenthesis				U+0029: RIGHT PARENTHESIS	
…							Po		ellipsis				U+2026: HORIZONTAL ELLIPSIS	
–							Pd		en dash				U+2013: EN DASH	
—							Pd		em dash				U+2014: EM DASH	
														
§							Po		section sign				U+00A7: SECTION SIGN	
†							Po		dagger				U+2020: DAGGER	
‡							Po		double dagger				U+2021: DOUBLE DAGGER	
′							Po		prime				U+2032: PRIME	
″							Po		double prime				U+2033: DOUBLE PRIME	
‐							Pd		hyphen				U+2010 HYPHEN	
‑							Pd		non-breaking hyphen				U+2011 NON-BREAKING HYPHEN	
														
														
														
႞					–	R	So						U+109E: MYANMAR SYMBOL SHAN ONE	✓
ံ					–	H	Mn​						U+1036: MYANMAR SIGN ANUSVARA​	✓



`



latinPanel = 'ʳ ˩ ˧˨ ˥ ˦˨ˀ ˧˦˧ ɑː ɛ ə iː ʲ kʰ ŋ ɲ ɔ pʰ θ ʨ tʰ ʷ ɯ ʔ ɤ ɤː'




var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transcription": 4,
"transLoc": 5,
"kbd": 6,
"class": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

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

"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 14,

"othertranscriptions": [[4, 'Latin']]
}
