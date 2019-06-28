var spreadsheet = `
က	k	k		ka.	k -ʔ ɡ tɕ-	consonant						U+1000: MYANMAR LETTER KA
ခ	k	kʰ		hka.	kʰ ɡ tɕ-	consonant						U+1001: MYANMAR LETTER KHA
ဂ	g	g		ga.	ɡ dʑ-	consonant						U+1002: MYANMAR LETTER GA
ဃ	g	ġ		gha.	ɡ	consonant			rare			U+1003: MYANMAR LETTER GHA
င	n	ŋ		nga.	ŋ	consonant						U+1004: MYANMAR LETTER NGA
စ	s	ṡ		ca.	s -ʔ z z-	consonant						U+1005: MYANMAR LETTER CA
ဆ	s	ṡʰ		hca.	sʰ z	consonant						U+1006: MYANMAR LETTER CHA
ဇ	z	ż		ja.	z	consonant						U+1007: MYANMAR LETTER JA
ဈ	z	z̈		jha.	z	consonant			rare			U+1008: MYANMAR LETTER JHA
ည	n	ɲ		nya.	ɲ	consonant						U+100A: MYANMAR LETTER NNYA
ဉ	n	ɲ̇		nya.	ɲ	consonant						U+1009: MYANMAR LETTER NYA
ဋ	t	ṫ		ṭa.	t	consonant			mostly archaic			U+100B: MYANMAR LETTER TTA
ဌ	t	ẗ		hṭa.	t	consonant			mostly archaic			U+100C: MYANMAR LETTER TTHA
ဍ	d	ḋ		ḍa.	d	consonant			mostly archaic			U+100D: MYANMAR LETTER DDA
ဎ	d	d̈		ḍha.	d	consonant			mostly archaic			U+100E: MYANMAR LETTER DDHA
ဏ	n	ṅ		ṇa.	n	consonant			mostly archaic			U+100F: MYANMAR LETTER NNA
တ	t¶	t		ta.	t -ʔ d	consonant						U+1010: MYANMAR LETTER TA
ထ	t	tʰ		hta.	tʰ d	consonant						U+1011: MYANMAR LETTER THA
ဒ	d¶	d		da.	d	consonant						U+1012: MYANMAR LETTER DA
ဓ	d	d̊		dha.	d	consonant						U+1013: MYANMAR LETTER DHA
န	n¶	n		na.	n	consonant						U+1014: MYANMAR LETTER NA
ပ	p	p		pa.	p -ʔ b	consonant						U+1015: MYANMAR LETTER PA
ဖ	p	pʰ		hpa.	pʰ f b	consonant						U+1016: MYANMAR LETTER PHA
ဗ	b	b		ba.	b v	consonant						U+1017: MYANMAR LETTER BA
ဘ	b	ḃ		bha.	b pʰ-	consonant						U+1018: MYANMAR LETTER BHA
မ	m	m		ma.	m	consonant						U+1019: MYANMAR LETTER MA
ယ	y	y		ya.	j ɛ	consonant						U+101A: MYANMAR LETTER YA
ရ	r	ṙ		ra.	j r ʃ	consonant						U+101B: MYANMAR LETTER RA
လ	l	l		la.	l -ʃ-	consonant						U+101C: MYANMAR LETTER LA
ဠ	l	l̇		ḷ	l -ʃ-	consonant			rare			U+1020: MYANMAR LETTER LLA
ဝ	w	w		wa.	w	consonant						U+101D: MYANMAR LETTER WA
သ	@	θ		sa.	θ ð	consonant						U+101E: MYANMAR LETTER SA
ဿ	@	θː		ssa.	θ	consonant ligature						U+103F: MYANMAR LETTER GREAT SA
ဟ	h	h		ha.	h	consonant						U+101F: MYANMAR LETTER HA
အ	}	ʔ		a	ʔ ʔa	consonant/indpendent vowel						U+1021: MYANMAR LETTER A
												
												
ျ	y	y̆		ya.	j ʨ ʥ ʃ	medial consonant						U+103B: MYANMAR CONSONANT SIGN MEDIAL YA​
ြ	j	j̆		ra.	j ʨ ʥ ɲ	medial consonant						U+103C: MYANMAR CONSONANT SIGN MEDIAL RA​
ွ	w	w̆		wa.	w	medial consonant						U+103D: MYANMAR CONSONANT SIGN MEDIAL WA​
ှ		h̆		ha	̥ -ʃ	medial consonant						U+103E: MYANMAR CONSONANT SIGN MEDIAL HA​
												
												
ံ	n	n̽		m	ɴ	final consonant						U+1036: MYANMAR SIGN ANUSVARA​
												
												
ဣ	I	ị		i.	ʔḭ	independent vowel				ိ		U+1023: MYANMAR LETTER I
ဤ	I	ị̈		i:	ʔì	independent vowel				ီ		U+1024: MYANMAR LETTER II
ဥ	U	ụ		u.	ʔṵ	independent vowel				ု		U+1025: MYANMAR LETTER U
ဦ	U	ụ̇		u	ʔù	independent vowel				ူ		U+1026: MYANMAR LETTER UU
ဧ	E	ẹ		ei:	ʔè	independent vowel				ေ		U+1027: MYANMAR LETTER E
ဩ	O	ɔ̣		au:	ʔɔ́	independent vowel						U+1029: MYANMAR LETTER O
ဪ	O	ɔ̣̇		au	ʔɔ̀	independent vowel						U+102A: MYANMAR LETTER AU
												
												
ာ	a	a		a	a	vowel sign						U+102C: MYANMAR VOWEL SIGN AA​
ါ	a	ä		a	a	vowel sign						U+102B: MYANMAR VOWEL SIGN TALL AA​
ိ	i	i		i.	i eɪ	vowel sign					ဣ	U+102D: MYANMAR VOWEL SIGN I​
ီ	i	ï		i	i	vowel sign					ဤ	U+102E: MYANMAR VOWEL SIGN II​
ု	u	u		u.	u oʊ	vowel sign					ဥ	U+102F: MYANMAR VOWEL SIGN U​
ူ	u	u̇		u	u	vowel sign					ဦ	U+1030: MYANMAR VOWEL SIGN UU​
ေ	e	e		e	e	vowel sign					ဧ	U+1031: MYANMAR VOWEL SIGN E​
ဲ	e	ɛ		ai:	ɛ	vowel sign						U+1032: MYANMAR VOWEL SIGN AI​
												
												
်	\	ˣ				asat	əθaʔ	အသတ်				U+103A: MYANMAR SIGN ASAT​
္	*	͓				virama						U+1039: MYANMAR SIGN VIRAMA​
												
												
့	^	¹		.		tone mark						U+1037: MYANMAR SIGN DOT BELOW​
း	^	²		:		tone mark						U+1038: MYANMAR SIGN VISARGA​
												
												
၌	$	(loc)		hnai.	n̥aiʔ	symbol	ɛʔkʰəjanʰaɪʔ					U+104C: MYANMAR SYMBOL LOCATIVE
၍	$	(sub)		rwe	jwɛ	symbol	ɛʔkʰəjajwɛ					U+104D: MYANMAR SYMBOL COMPLETED
၎	$	(afore)		la. kaung		symbol	ɛʔkʰəjajwɛ					U+104E: MYANMAR SYMBOL AFOREMENTIONED
၏	$	(gen)		e	í	symbol	ɛʔkʰəjaí					U+104F: MYANMAR SYMBOL GENITIVE
၊	,	,		၊		comma						U+104A: MYANMAR SIGN LITTLE SECTION
။	.	.		။		full stop						U+104B: MYANMAR SIGN SECTION
												
												
၀	0	0		0		digit						U+1040: MYANMAR DIGIT ZERO
၁	1	1		1		digit						U+1041: MYANMAR DIGIT ONE
၂	2	2		2		digit						U+1042: MYANMAR DIGIT TWO
၃	3	3		3		digit						U+1043: MYANMAR DIGIT THREE
၄	4	4		4		digit						U+1044: MYANMAR DIGIT FOUR
၅	5	5		5		digit						U+1045: MYANMAR DIGIT FIVE
၆	6	6		6		digit						U+1046: MYANMAR DIGIT SIX
၇	7	7		7		digit						U+1047: MYANMAR DIGIT SEVEN
၈	8	8		8		digit						U+1048: MYANMAR DIGIT EIGHT
၉	9	9		9		digit						U+1049: MYANMAR DIGIT NINE
												
												
\u200B	]	␣										U+200B: ZERO WIDTH SPACE
\u200C	=	ₓ										U+200C: ZERO WIDTH NON-JOINER
\u200D	=	₊										U+200D: ZERO WIDTH JOINER
												
												
												
												
												
												
												
												
ို	o	iu	o	ui	o aɪ							U+102D U+102F: MYANMAR VOWEL SIGN I, MYANMAR VOWEL SIGN U​
ော	o	ea	ɔ	au:	ɔ aʊ							U+1031 U+102C: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN AA​
ယ်	e	yˣ	ɛ	ai	ɛ							U+101A U+103A: MYANMAR LETTER YA, MYANMAR SIGN ASAT
ေါ	o	eä	ɔ	au:	ɔ aʊ							U+1031 U+102B: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN TALL AA​
ော်	o	eaˣ	ɔ	au								U+1031 U+102C U+103A: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN AA, MYANMAR SIGN ASAT​
ေါ်	o	eäˣ	ɔ	au								U+1031 U+102B U+103A: MYANMAR VOWEL SIGN E, MYANMAR VOWEL SIGN TALL AA, MYANMAR SIGN ASAT​
												
္လ		l̆		la.		medial l						U+1039 U+101C: MYANMAR SIGN VIRAMA, MYANMAR LETTER LA​
င်္		ṅ̽		ng		kinzi						U+1004 U+103A U+1039: MYANMAR LETTER NGA, MYANMAR SIGN ASAT, MYANMAR SIGN VIRAMA
												
\u1025\u102E	U	ụ̇		u	ʔù	ဦ						U+1025 U+102E: MYANMAR LETTER U, MYANMAR VOWEL SIGN II

`

var cols = {
"key":1,
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"transcription":4,
"ucsName":12,

//"othertranscriptions": [[3, 'Transcription']]
}