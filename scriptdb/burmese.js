var spreadsheet = `
က		k	k	k -ʔ ɡ tɕ-	ka.	consonant						U+1000: MYANMAR LETTER KA
ခ		k	kʰ	kʰ ɡ tɕ-	hka.	consonant						U+1001: MYANMAR LETTER KHA
ဂ		g	g	ɡ dʑ-	ga.	consonant						U+1002: MYANMAR LETTER GA
ဃ		g	ġ	ɡ	gha.	consonant	rare					U+1003: MYANMAR LETTER GHA
င		n	ŋ	ŋ	nga.	consonant						U+1004: MYANMAR LETTER NGA
စ		s	ṡ	s -ʔ z z-	ca.	consonant						U+1005: MYANMAR LETTER CA
ဆ		s	ṡʰ	sʰ z	hca.	consonant						U+1006: MYANMAR LETTER CHA
ဇ		z	ż	z	ja.	consonant						U+1007: MYANMAR LETTER JA
ဈ		z	z̈	z	jha.	consonant	rare					U+1008: MYANMAR LETTER JHA
ည		n	ɲ	ɲ	nya.	consonant						U+100A: MYANMAR LETTER NNYA
ဉ		n	ɲ̇	ɲ	nya.	consonant						U+1009: MYANMAR LETTER NYA
ဋ		t	ṫ	t	ṭa.	consonant	mostly archaic					U+100B: MYANMAR LETTER TTA
ဌ		t	ẗ	t	hṭa.	consonant	mostly archaic					U+100C: MYANMAR LETTER TTHA
ဍ		d	ḋ	d	ḍa.	consonant	mostly archaic					U+100D: MYANMAR LETTER DDA
ဎ		d	d̈	d	ḍha.	consonant	mostly archaic					U+100E: MYANMAR LETTER DDHA
ဏ		n	ṅ	n	ṇa.	consonant	mostly archaic					U+100F: MYANMAR LETTER NNA
တ		t¶	t	t -ʔ d	ta.	consonant						U+1010: MYANMAR LETTER TA
ထ		t	tʰ	tʰ d	hta.	consonant						U+1011: MYANMAR LETTER THA
ဒ		d¶	d	d	da.	consonant						U+1012: MYANMAR LETTER DA
ဓ		d	d̊	d	dha.	consonant						U+1013: MYANMAR LETTER DHA
န		n¶	n	n	na.	consonant						U+1014: MYANMAR LETTER NA
ပ		p	p	p -ʔ b	pa.	consonant						U+1015: MYANMAR LETTER PA
ဖ		p	pʰ	pʰ f b	hpa.	consonant						U+1016: MYANMAR LETTER PHA
ဗ		b	b	b v	ba.	consonant						U+1017: MYANMAR LETTER BA
ဘ		b	ḃ	b pʰ-	bha.	consonant						U+1018: MYANMAR LETTER BHA
မ		m	m	m	ma.	consonant						U+1019: MYANMAR LETTER MA
ယ		y	y	j ɛ	ya.	consonant						U+101A: MYANMAR LETTER YA
ရ		r	ṙ	j r ʃ	ra.	consonant						U+101B: MYANMAR LETTER RA
လ		l	l	l -ʃ-	la.	consonant						U+101C: MYANMAR LETTER LA
ဠ		l	l̇	l -ʃ-	ḷ	consonant	rare					U+1020: MYANMAR LETTER LLA
ဝ		w	w	w	wa.	consonant						U+101D: MYANMAR LETTER WA
သ		@	θ	θ ð	sa.	consonant						U+101E: MYANMAR LETTER SA
ဿ		@	θː	θ	ssa.	consonant ligature						U+103F: MYANMAR LETTER GREAT SA
ဟ		h	h	h	ha.	consonant						U+101F: MYANMAR LETTER HA
အ		}	ʔ	ʔ ʔa	a	consonant/indpendent vowel						U+1021: MYANMAR LETTER A
												
												
ျ		y	y̆	j ʨ ʥ ʃ	ya.	medial consonant						U+103B: MYANMAR CONSONANT SIGN MEDIAL YA​
ြ		j	j̆	j ʨ ʥ ɲ	ra.	medial consonant						U+103C: MYANMAR CONSONANT SIGN MEDIAL RA​
ွ		w	w̆	w	wa.	medial consonant						U+103D: MYANMAR CONSONANT SIGN MEDIAL WA​
ှ			h̆	̥ -ʃ	ha	medial consonant						U+103E: MYANMAR CONSONANT SIGN MEDIAL HA​
												
												
ံ		n	n̽	ɴ	m	final consonant						U+1036: MYANMAR SIGN ANUSVARA​
												
												
ဣ		I	ị	ʔḭ	i.	independent vowel		ိ				U+1023: MYANMAR LETTER I
ဤ		I	ị̈	ʔì	i:	independent vowel		ီ				U+1024: MYANMAR LETTER II
ဥ		U	ụ	ʔṵ	u.	independent vowel		ု				U+1025: MYANMAR LETTER U
ဦ		U	ụ̇	ʔù	u	independent vowel		ူ				U+1026: MYANMAR LETTER UU
ဧ		E	ẹ	ʔè	ei:	independent vowel		ေ				U+1027: MYANMAR LETTER E
ဩ		O	ɔ̣	ʔɔ́	au:	independent vowel						U+1029: MYANMAR LETTER O
ဪ		O	ɔ̣̇	ʔɔ̀	au	independent vowel						U+102A: MYANMAR LETTER AU
												
												
ာ		a	a	a	a	vowel sign						U+102C: MYANMAR VOWEL SIGN AA​
ါ		a	ä	a	a	vowel sign						U+102B: MYANMAR VOWEL SIGN TALL AA​
ိ		i	i	i eɪ	i.	vowel sign			ဣ			U+102D: MYANMAR VOWEL SIGN I​
ီ		i	ï	i	i	vowel sign			ဤ			U+102E: MYANMAR VOWEL SIGN II​
ု		u	u	u oʊ	u.	vowel sign			ဥ			U+102F: MYANMAR VOWEL SIGN U​
ူ		u	u̇	u	u	vowel sign			ဦ			U+1030: MYANMAR VOWEL SIGN UU​
ေ		e	e	e	e	vowel sign			ဧ			U+1031: MYANMAR VOWEL SIGN E​
ဲ		e	ɛ	ɛ	ai:	vowel sign						U+1032: MYANMAR VOWEL SIGN AI​
												
												
်		\	ˣ			asat				əθaʔ	အသတ်	U+103A: MYANMAR SIGN ASAT​
္		*	͓			virama						U+1039: MYANMAR SIGN VIRAMA​
												
												
့		^	¹		.	tone mark						U+1037: MYANMAR SIGN DOT BELOW​
း		^	²		:	tone mark						U+1038: MYANMAR SIGN VISARGA​
												
												
၌		$	(loc)	n̥aiʔ	hnai.	symbol				ɛʔkʰəjanʰaɪʔ		U+104C: MYANMAR SYMBOL LOCATIVE
၍		$	(sub)	jwɛ	rwe	symbol				ɛʔkʰəjajwɛ		U+104D: MYANMAR SYMBOL COMPLETED
၎		$	(afore)		la. kaung	symbol				ɛʔkʰəjajwɛ		U+104E: MYANMAR SYMBOL AFOREMENTIONED
၏		$	(gen)	í	e	symbol				ɛʔkʰəjaí		U+104F: MYANMAR SYMBOL GENITIVE
၊		,	,		၊	comma						U+104A: MYANMAR SIGN LITTLE SECTION
။		.	.		။	full stop						U+104B: MYANMAR SIGN SECTION
												
												
၀		0	0		0	digit						U+1040: MYANMAR DIGIT ZERO
၁		1	1		1	digit						U+1041: MYANMAR DIGIT ONE
၂		2	2		2	digit						U+1042: MYANMAR DIGIT TWO
၃		3	3		3	digit						U+1043: MYANMAR DIGIT THREE
၄		4	4		4	digit						U+1044: MYANMAR DIGIT FOUR
၅		5	5		5	digit						U+1045: MYANMAR DIGIT FIVE
၆		6	6		6	digit						U+1046: MYANMAR DIGIT SIX
၇		7	7		7	digit						U+1047: MYANMAR DIGIT SEVEN
၈		8	8		8	digit						U+1048: MYANMAR DIGIT EIGHT
၉		9	9		9	digit						U+1049: MYANMAR DIGIT NINE
												
												
\u200B		]	␣									U+200B: ZERO WIDTH SPACE
\u200C		=	ₓ									U+200C: ZERO WIDTH NON-JOINER
\u200D		=	₊									U+200D: ZERO WIDTH JOINER
												
												
												
												
												
												
												
												
ို	s	o	o	o aɪ	ui							U+102D U+102F: MYANMAR VOWEL SIGN I, MYANMAR VOWEL SIGN U​
ော	s	o	ɔ	ɔ aʊ	au:							U+1031 U+102C: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN AA​
ယ်	s	e	ɛ	ɛ	ai							U+101A U+103A: MYANMAR LETTER YA, MYANMAR SIGN ASAT
ေါ	s	o	ɔ	ɔ aʊ	au:							U+1031 U+102B: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN TALL AA​
ော်	s	o	ɔ		au							U+1031 U+102C U+103A: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN AA, MYANMAR SIGN ASAT​
ေါ်	s	o	ɔ		au							U+1031 U+102B U+103A: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN TALL AA, MYANMAR SIGN ASAT​
												
္လ	s		l̆		la.	medial l						U+1039 U+101C: MYANMAR SIGN VIRAMA, MYANMAR LETTER LA​
င်္	s		ṅ̽		ng	kinzi						U+1004 U+103A U+1039: MYANMAR LETTER NGA, MYANMAR SIGN ASAT, MYANMAR SIGN VIRAMA
												
\u1025\u102E	s	U	ụ̇	ʔù	u	ဦ						U+1025 U+102E: MYANMAR LETTER U, MYANMAR VOWEL SIGN II

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
"dvowel": 8,
"ivowel": 9,
"subj":0,
"ltone":0,
"htone":0,
"lc":9,
"uc":10,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,

//"othertranscriptions": [[4, 'ISO 9985']]
}


