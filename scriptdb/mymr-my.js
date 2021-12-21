var spreadsheet = `
က	k	k -ʔ ɡ	a ə	ka.	k	u	Lo		consonant				ကကြီး	ka̰ dʑí	U+1000: MYANMAR LETTER KA	✓
ခ	k	kʰ ɡ	a ə	hka.	kʰ	c	Lo		consonant				ခကွေး 	kʰa̰ ɡwé	U+1001: MYANMAR LETTER KHA	✓
ဂ	g	ɡ	a ə	ga.	g	:	Lo		consonant				ဂငယ်	ɡa̰ ŋɛ̀	U+1002: MYANMAR LETTER GA	✓
ဃ	g	ɡ	a ə	gha.	ġ	C	Lo	r	consonant	rare			ဃကြီး	ɡˀa̰ dʑí	U+1003: MYANMAR LETTER GHA	✓
စ	s	s -ʔ z	a ə	ca.	ṡ	p	Lo		consonant				စလုံး	sa̰ lóʊɰ̃	U+1005: MYANMAR LETTER CA	✓
ဆ	s	sʰ z	a ə	hca.	ṡʰ	q	Lo		consonant				ဆလိမ်	sʰa̰ lèɪɰ̃	U+1006: MYANMAR LETTER CHA	✓
ဇ	z	z	a ə	ja.	ż	Z	Lo		consonant				ဇကွဲ	za̰ ɡwɛ́	U+1007: MYANMAR LETTER JA	✓
ဈ	z	z	a ə	jha.	z̈	Q	Lo	r	consonant	rare			ဈမျဉ်းဆွဲ	zˀa̰ mjɪ̀ɰ̃ zwɛ́	U+1008: MYANMAR LETTER JHA	✓
န	n¶	n	a ə	na.	n	e	Lo		consonant				နငယ်	na̰ ŋɛ̀	U+1014: MYANMAR LETTER NA	✓
င	N	ŋ	a ə	nga.	ŋ	i	Lo		consonant				င	ŋa̰	U+1004: MYANMAR LETTER NGA	✓
ည	n	ɲ -∅	a ə	nya.	ɲ	n	Lo		consonant				ညကြီး	ɲa̰ dʑí	U+100A: MYANMAR LETTER NNYA	✓
ဉ	n	ɲ -ɴ	a ə	nya.	ɲ̇	N	Lo		consonant				ညကလေး	ɲa̰ka̰lé	U+1009: MYANMAR LETTER NYA	✓
ဏ	n	n	a ə	ṇa.	ṅ	p	Lo	a	consonant	mostly archaic			ဏကြီး	na̰ dʑí	U+100F: MYANMAR LETTER NNA	✓
တ	t¶	t -ʔ d	a ə	ta.	t	w	Lo		consonant				တဝမ်းပူ	ta̰ wʊ́ɰ̃ bù	U+1010: MYANMAR LETTER TA	✓
ထ	t	tʰ d	a ə	hta.	tʰ	x	Lo		consonant				ထဆင်ထူး	tʰa̰ sʰɪ̀ɰ̃ dú	U+1011: MYANMAR LETTER THA	✓
ဋ	t	t	a ə	ṭa.	ṫ	#	Lo	a	consonant	mostly archaic			ဋသန်လျင်းချိတ်	ta̰ təlɪ́ɰ̃ dʑeɪʔ	U+100B: MYANMAR LETTER TTA	✓
ဌ	t	tʰ	a ə	hṭa.	ẗ	X	Lo	a	consonant	mostly archaic			ဌဝမ်းဘဲ	tʰa̰ wʊ́ɰ̃ bɛ́	U+100C: MYANMAR LETTER TTHA	✓
ဒ	d¶	d	a ə	da.	d	K	Lo		consonant				ဒထွေး	da̰ dwé	U+1012: MYANMAR LETTER DA	✓
ဓ	d	d	a ə	dha.	d̊	L	Lo		consonant				ဓအောက်ခြိုက်	dˀa̰ ʔaʊʔ tɕʰaɪʔ	U+1013: MYANMAR LETTER DHA	✓
ဍ	d	d	a ə	ḍa.	ḋ	!	Lo	a	consonant	mostly archaic			ဍရင်ကောက်	da̰ jɪ̀ɰ̃ ɡaʊʔ	U+100D: MYANMAR LETTER DDA	✓
ဎ	d	d	a ə	ḍha.	d̈	§	Lo	a	consonant	mostly archaic			ဎရေမှုတ်	dˀa̰ jè m̥oʊʔ	U+100E: MYANMAR LETTER DDHA	✓
ပ	p	p -ʔ b	a ə	pa.	p	y	Lo		consonant				ပစောက်	pa̰ zaʊʔ	U+1015: MYANMAR LETTER PA	✓
ဖ	p	pʰ f b	a ə	hpa.	pʰ	z	Lo		consonant				ဖဦးထုပ်	pʰa̰ ʔóʊʔ tʰoʊʔ	U+1016: MYANMAR LETTER PHA	✓
ဗ	b	b v	a ə	ba.	b	A	Lo		consonant				ဗထက်ခြိုက်‌	ba̰ lɛʔ tɕʰaɪʔ	U+1017: MYANMAR LETTER BA	✓
ဘ	b	b pʰ-	a ə	bha.	ḃ	b	Lo		consonant				ဘကုန်း	bˀa̰ ɡóʊɰ̃	U+1018: MYANMAR LETTER BHA	✓
မ	m	m	a ə	ma.	m	r	Lo		consonant				မ	ma̰	U+1019: MYANMAR LETTER MA	✓
ယ	y	j ɛ	a ə	ya.	y	B	Lo		consonant				ယပက်လက်	ja̰ pɛʔ lɛʔ	U+101A: MYANMAR LETTER YA	✓
ရ	r	j ɹ	a ə	ra.	r	&	Lo		consonant				ရကောက်‌	ja̰ ɡaʊʔ	U+101B: MYANMAR LETTER RA	✓
လ	l	l	a ə	la.	l	v	Lo		consonant				လငယ်	la̰ ŋɛ̀	U+101C: MYANMAR LETTER LA	✓
ဠ	l	l	a ə	ḷ	l̇	V	Lo	r	consonant	rare			ဠကြီး	la̰ dʑí	U+1020: MYANMAR LETTER LLA	✓
ဝ	w	w	a ə	wa.	w	W	Lo		consonant				ဝ‌	wa̰	U+101D: MYANMAR LETTER WA	✓
သ	q	θ ð	a ə	sa.	θ	o	Lo		consonant				သ‌	θa̰	U+101E: MYANMAR LETTER SA	✓
ဿ	q	θ	a ə	ssa.	θː	O	Lo		consonant ligature						U+103F: MYANMAR LETTER GREAT SA	✓
ဟ	h	h	a ə	ha.	h	[	Lo		consonant				ဟ‌	ha̰	U+101F: MYANMAR LETTER HA	✓
အ	a	ʔ	a ə	a	ʔ	t	Lo		consonant/indpendent vowel				အ	ʔa̰	U+1021: MYANMAR LETTER A	✓
																
																
ျ	Y	j ʲ		y	y̆	s	Mc		medial consonant						U+103B: MYANMAR CONSONANT SIGN MEDIAL YA​	✓
ြ	R	j ʲ		r	j̆	j	Mc		medial consonant						U+103C: MYANMAR CONSONANT SIGN MEDIAL RA​	✓
ွ	W	w ʊ		w	w̆	G	Mn		medial consonant/vowel						U+103D: MYANMAR CONSONANT SIGN MEDIAL WA​	✓
ှ	H	–̥ -ʃ		h	h̆	S	Mn		medial consonant						U+103E: MYANMAR CONSONANT SIGN MEDIAL HA​	✓
																
																
ံ	n	ɴ		m	n̽	H	Mn		final consonant						U+1036: MYANMAR SIGN ANUSVARA​	✓
																
																
ဣ	I	ʔḭ		i.	ị	E	Lo		independent vowel		ိ				U+1023: MYANMAR LETTER I	✓
ဤ	I	ʔì		i:	ị̈	T	Lo		independent vowel		ီ				U+1024: MYANMAR LETTER II	✓
ဥ	U	ʔṵ		u.	ụ	U	Lo		independent vowel		ု				U+1025: MYANMAR LETTER U	✓
ဦ	U	ʔù		u	ụ̇	M	Lo		independent vowel		ူ				U+1026: MYANMAR LETTER UU	✓
ဧ	E	ʔè		ei:	ẹ	{	Lo		independent vowel		ေ				U+1027: MYANMAR LETTER E	✓
ဩ	O	ʔɔ́		au:	ɔ̣	]	Lo		independent vowel						U+1029: MYANMAR LETTER O	✓
ဪ	O	ʔɔ̀		au	ɔ̣̇	}	Lo		independent vowel						U+102A: MYANMAR LETTER AU	✓
																
																
ိ	i	-i -eɪ-		i.	i	d	Mn		vowel sign			ဣ			U+102D: MYANMAR VOWEL SIGN I​	✓
ီ	i	-i		i	ï	D	Mn		vowel sign			ဤ			U+102E: MYANMAR VOWEL SIGN II​	✓
ု	u	-u -oʊ-		u.	u	k	Mn		vowel sign			ဥ			U+102F: MYANMAR VOWEL SIGN U​	✓
ူ	u	-u		u	u̇	l	Mn		vowel sign			ဦ			U+1030: MYANMAR VOWEL SIGN UU​	✓
ေ	e	-e		e	e	a	Mc		vowel sign			ဧ			U+1031: MYANMAR VOWEL SIGN E​	✓
ဲ	e	-ɛ		ai:	ɛ	J	Mn		vowel sign						U+1032: MYANMAR VOWEL SIGN AI​	✓
ာ	a	-a		a	a	m	Mc		vowel sign						U+102C: MYANMAR VOWEL SIGN AA​	✓
ါ	a	-a		a	ä	g	Mc		vowel sign						U+102B: MYANMAR VOWEL SIGN TALL AA​	✓
																
																
အိ	i	-i -eɪ-		i.	ʔi		s		standalone vowel						U+1021 U+102D: MYANMAR LETTER A, VOWEL SIGN I	
အီ	i	-i		i	ʔï		s		standalone vowel						U+1021 U+102E: MYANMAR LETTER A, VOWEL SIGN II	
အု	u	-u -oʊ-		u.	ʔu		s		standalone vowel						U+1021 U+102F: MYANMAR LETTER A, VOWEL SIGN U	
အူ	u	-u		u	ʔu̇		s		standalone vowel						U+1021 U+1030: MYANMAR LETTER A, VOWEL SIGN UU	
အေ	e	-e		e	ʔe		s		standalone vowel						U+1021 U+1031: MYANMAR LETTER A, VOWEL SIGN E	
အဲ	e	-ɛ		ai:	ʔɛ		s		standalone vowel						U+1021 U+1032: MYANMAR LETTER A, VOWEL SIGN AI	
အာ	a	-a		a	ʔa		s		standalone vowel						U+1021 U+102C: MYANMAR LETTER A, VOWEL SIGN AA	
အါ	a	-a		a	ʔä		s		standalone vowel						U+1021 U+102B: MYANMAR LETTER A, VOWEL SIGN TALL AA	
																
																
်	\\				ˣ	f	Mn		asat				အသတ်	əθaʔ	U+103A: MYANMAR SIGN ASAT​	✓
္	*				͓	F	Mn		virama						U+1039: MYANMAR SIGN VIRAMA​	✓
																
																
့	^			.	¹	h	Mn		tone mark						U+1037: MYANMAR SIGN DOT BELOW​	✓
း	^			:	²	;	Mc		tone mark						U+1038: MYANMAR SIGN VISARGA​	✓
																
																
၌	$	n̥aiʔ		hnai.	(loc)	Y	Po		symbol					ɛʔkʰəjanʰaɪʔ	U+104C: MYANMAR SYMBOL LOCATIVE	✓
၍	$	jwɛ		rwe	(sub)	I	Po		symbol					ɛʔkʰəjajwɛ	U+104D: MYANMAR SYMBOL COMPLETED	✓
၎	$			la. kaung	(afore)	R	Po		symbol					ɛʔkʰəjajwɛ	U+104E: MYANMAR SYMBOL AFOREMENTIONED	✓
၏	$	í		e	(gen)	\	Po		symbol					ɛʔkʰəjaí	U+104F: MYANMAR SYMBOL GENITIVE	✓
၊	|			၊	,	,	Po		comma				ပုဒ်ဖြတ်, ပုဒ်ကလေး, ပုဒ်ထီး, or တစ်ချောင်းပုဒ်		U+104A: MYANMAR SIGN LITTLE SECTION	✓
။	|			။	.	.	Po		full stop				ပုဒ်ကြီး, ပုဒ်မ, or နှစ်ချောင်းပုဒ်		U+104B: MYANMAR SIGN SECTION	✓
“	<				“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
”	>				”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
‘	<				‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
’	>				’		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
																
																
၀	0			0	0	0	Nd		digit						U+1040: MYANMAR DIGIT ZERO	✓
၁	1			1	1	1	Nd		digit						U+1041: MYANMAR DIGIT ONE	✓
၂	2			2	2	2	Nd		digit						U+1042: MYANMAR DIGIT TWO	✓
၃	3			3	3	3	Nd		digit						U+1043: MYANMAR DIGIT THREE	✓
၄	4			4	4	4	Nd		digit						U+1044: MYANMAR DIGIT FOUR	✓
၅	5			5	5	5	Nd		digit						U+1045: MYANMAR DIGIT FIVE	✓
၆	6			6	6	6	Nd		digit						U+1046: MYANMAR DIGIT SIX	✓
၇	7			7	7	7	Nd		digit						U+1047: MYANMAR DIGIT SEVEN	✓
၈	8			8	8	8	Nd		digit						U+1048: MYANMAR DIGIT EIGHT	✓
၉	9			9	9	9	Nd		digit						U+1049: MYANMAR DIGIT NINE	✓
																
																
\u200B	]				␣		Cf								U+200B: ZERO WIDTH SPACE	
\u200C	=				ₓ		Cf								U+200C: ZERO WIDTH NON-JOINER	
\u200D	=				₊		Cf								U+200D: ZERO WIDTH JOINER	
																
																
																
																
																
																
																
																
ို	o	-o -aɪ-		ui	iu		s								U+102D U+102F: MYANMAR VOWEL SIGN I, VOWEL SIGN U​	
ော	o	-ɔ -aʊ-		au:	ea		s								U+1031 U+102C: MYANMAR VOWEL SIGN E, VOWEL SIGN AA​	
ယ်	e	-ɛ		ai	yˣ		s								U+101A U+103A: MYANMAR LETTER YA, SIGN ASAT	
ေါ	o	-ɔ -aʊ-		au:	eä		s								U+1031 U+102B: MYANMAR VOWEL SIGN E, VOWEL SIGN TALL AA​	
ော်	o	-ɔ		au	eaˣ		s								U+1031 U+102C U+103A: MYANMAR VOWEL SIGN E, VOWEL SIGN AA, SIGN ASAT​	
ေါ်	o	-ɔ		au	eäˣ		s								U+1031 U+102B U+103A: MYANMAR VOWEL SIGN E, VOWEL SIGN TALL AA, SIGN ASAT​	
																
ကြ		t͡ɕ		ky	kj̆		s								U+1000 U+103C: MYANMAR LETTER KA, CONSONANT SIGN MEDIAL RA	
ခြ		t͡ɕʰ		hky	kʰj̆		s								U+1001 U+103C: MYANMAR LETTER KHA, CONSONANT SIGN MEDIAL RA	
ဂြ		d͡ʑ		gy	gj̆		s								U+1002 U+103C: MYANMAR LETTER GA, CONSONANT SIGN MEDIAL RA	
ငြ		ɲ		ngr	ŋj̆		s								U+1004 U+103C: MYANMAR LETTER NGA, CONSONANT SIGN MEDIAL RA	
ြှ		–̥j		h–r	j̆h̆		s								U+103C U+103E: MYANMAR CONSONANT SIGN MEDIAL RA, CONSONANT SIGN MEDIAL HA​	
ြွ		–w		–tw	j̆w̆		s								U+103C U+103D: MYANMAR CONSONANT SIGN MEDIAL RA, CONSONANT SIGN MEDIAL WA​	
ြွှ		–̥w		h–rw	j̆w̆h̆		s								U+103C U+103D U+103E: MYANMAR CONSONANT SIGN MEDIAL RA, CONSONANT SIGN MEDIAL WA, CONSONANT SIGN MEDIAL HA​	
																
ကျ		t͡ɕ		ky	ky̆		s								U+1000 U+103B: MYANMAR LETTER KA, CONSONANT SIGN MEDIAL YA	
ချ		t͡ɕʰ		hky	kʰy̆		s								U+1001 U+103B: MYANMAR LETTER KHA, CONSONANT SIGN MEDIAL YA	
ဂျ		d͡ʑ		gy	gy̆		s								U+1002 U+103B: MYANMAR LETTER GA, CONSONANT SIGN MEDIAL YA	
သျှ		ʃ		hsy	θy̆h̆		s								U+101E U+103B U+103E: MYANMAR LETTER SA, CONSONANT SIGN MEDIAL YA, CONSONANT SIGN MEDIAL HA	
လျှ		ʃ		hly	ly̆h̆		s								U+101C U+103B U+103E: MYANMAR LETTER LA, CONSONANT SIGN MEDIAL YA, CONSONANT SIGN MEDIAL HA	
ျှ		–̥j		h–y	y̆h̆		s								U+103B U+103E: MYANMAR CONSONANT SIGN MEDIAL YA, CONSONANT SIGN MEDIAL HA​	
ျွ		–w		–yw	y̆w̆		s								U+103B U+103D: MYANMAR CONSONANT SIGN MEDIAL YA, CONSONANT SIGN MEDIAL WA​	
ျွှ		–̥w		h–yw	y̆w̆h̆		s								U+103B U+103D U+103E: MYANMAR CONSONANT SIGN MEDIAL YA, CONSONANT SIGN MEDIAL WA, CONSONANT SIGN MEDIAL HA​	
																
ွှ		–̥w		h–w	w̆h̆		s								U+103D U+103E: MYANMAR CONSONANT SIGN MEDIAL WA, CONSONANT SIGN MEDIAL HA​	
																
္လ	L			la.	͓l		s		medial l						U+1039 U+101C: MYANMAR SIGN VIRAMA, LETTER LA​	
င်္	N			ng	ŋˣ͓		s		kinzi						U+1004 U+103A U+1039: MYANMAR LETTER NGA, SIGN ASAT, SIGN VIRAMA	
																
\u1025\u102E	U	ʔù		u	ụ̇		s		ဦ						U+1025 U+102E: MYANMAR LETTER U, VOWEL SIGN II	
																
																
																
																
																
\u034F				ᶜᵍʲ					combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
																
																
,							Po		comma						U+002C: COMMA	
;							Po		semicolon						U+003B: SEMICOLON	
:							Po		colon						U+003A: COLON	
.							Po		full stop						U+002E: FULL STOP	
?							Po		question mark						U+003F: QUESTION MARK	
!							Po		exclamation mark						U+0021: EXCLAMATION MARK	
(							Pd		parenthesis						U+0028: LEFT PARENTHESIS	
)							Pe		parenthesis						U+0029: RIGHT PARENTHESIS	
…							Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
–							Pd		en dash						U+2013: EN DASH	
—							Pd		em dash						U+2014: EM DASH	
																
§							Po		section sign						U+00A7: SECTION SIGN	
†							Po		dagger						U+2020: DAGGER	
‡							Po		double dagger						U+2021: DOUBLE DAGGER	
′							Po		prime						U+2032: PRIME	
″							Po		double prime						U+2033: DOUBLE PRIME	
																
																
																
ၐ					–	±	Lo								U+1050: MYANMAR LETTER SHA	✓
ၒ					–	@	Lo								U+1052: MYANMAR LETTER VOCALIC R	✓
ၓ					–	$	Lo								U+1053: MYANMAR LETTER VOCALIC RR	✓
ၔ					–	%	Lo								U+1054: MYANMAR LETTER VOCALIC L	✓
ၕ					–	^	Lo								U+1055: MYANMAR LETTER VOCALIC LL	✓
ၑ					–	|	Lo								U+1051: MYANMAR LETTER SSA	✓



`


latinPanel = 'ḍ ð d͡ʑ ɛ è ḭ ì ɪ ʲ kʰ ŋ ɲ ɴ ṇ ∅ ɔ́ ɔ̀ pʰ θ ɹ sʰ ʃ tʰ t͡ɕ t͡ɕʰ ṵ ù ʊ ʔ'



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

"dvowel": 11,
"ivowel": 12,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,

"nnameLoc": 13,
"nameLoc": 14,
"ucsName": 15,
"block": 16,

"othertranscriptions": [[4, 'MLC']]
}


