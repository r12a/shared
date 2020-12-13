var spreadsheet = `
ᐃ		i	i	i	i		syllable				U+1403: CANADIAN SYLLABICS I	cans
ᐄ		I	ii	ī	iː	iː	syllable				U+1404: CANADIAN SYLLABICS II	cans
ᐅ		u	u	u	u		syllable				U+1405: CANADIAN SYLLABICS O	cans
ᐆ		U	uu	ū	uː	uː	syllable				U+1406: CANADIAN SYLLABICS OO	cans
ᐊ		a	a	a	a		syllable				U+140A: CANADIAN SYLLABICS A	cans
ᐋ		A	aa	ā	aː	aː	syllable				U+140B: CANADIAN SYLLABICS AA	cans
ᐁ		e	ai	aⁱ	ai		syllable				U+1401: CANADIAN SYLLABICS E	cans
												
ᐱ		p	pi	pⁱ	pi		syllable				U+1431: CANADIAN SYLLABICS PI	cans
ᐲ		P	pii	pⁱ̠	piː		syllable				U+1432: CANADIAN SYLLABICS PII	cans
ᐳ		p	pu	pᵘ	pu		syllable				U+1433: CANADIAN SYLLABICS PO	cans
ᐴ		P	puu	pᵘ̱	puː		syllable				U+1434: CANADIAN SYLLABICS POO	cans
ᐸ		p	pa	pᵃ	pa		syllable				U+1438: CANADIAN SYLLABICS PA	cans
ᐹ		P	paa	pᵃ̱	paː		syllable				U+1439: CANADIAN SYLLABICS PAA	cans
ᐯ		p	pai	pᵃⁱ	pai		syllable				U+142F: CANADIAN SYLLABICS PE	cans
ᑉ		p	p	p	p		final consonant				U+1449: CANADIAN SYLLABICS P	cans
												
ᑎ		t	ti	tⁱ	ti		syllable				U+144E: CANADIAN SYLLABICS TI	cans
ᑏ		T	tii	tⁱ̠	tiː		syllable				U+144F: CANADIAN SYLLABICS TII	cans
ᑐ		t	tu	tᵘ	tu		syllable				U+1450: CANADIAN SYLLABICS TO	cans
ᑑ		T	tuu	tᵘ̱	tuː		syllable				U+1451: CANADIAN SYLLABICS TOO	cans
ᑕ		t	ta	tᵃ	ta		syllable				U+1455: CANADIAN SYLLABICS TA	cans
ᑖ		T	taa	tᵃ̱	taː		syllable				U+1456: CANADIAN SYLLABICS TAA	cans
ᑌ		t	tai	tᵃⁱ	tai		syllable				U+144C: CANADIAN SYLLABICS TE	cans
ᑦ		t	t	t	t		final consonant				U+1466: CANADIAN SYLLABICS T	cans
												
ᑭ		k	ki	kⁱ	ki		syllable				U+146D: CANADIAN SYLLABICS KI	cans
ᑮ		K	kii	kⁱ̠	kiː		syllable				U+146E: CANADIAN SYLLABICS KII	cans
ᑯ		k	ku	kᵘ	ku		syllable				U+146F: CANADIAN SYLLABICS KO	cans
ᑰ		K	kuu	kᵘ̱	kuː		syllable				U+1470: CANADIAN SYLLABICS KOO	cans
ᑲ		k	ka	kᵃ	ka		syllable				U+1472: CANADIAN SYLLABICS KA	cans
ᑳ		K	kaa	kᵃ̱	kaː		syllable				U+1473: CANADIAN SYLLABICS KAA	cans
ᑫ		k	kai	kᵃⁱ	kai		syllable				U+146B: CANADIAN SYLLABICS KE	cans
ᒃ		k	k	k	k		final consonant				U+1483: CANADIAN SYLLABICS K	cans
												
ᒋ		g	gi	gⁱ	ɣi	ɣ	syllable				U+148B: CANADIAN SYLLABICS CI	cans
ᒌ		G	gii	gⁱ̠	ɣiː		syllable				U+148C: CANADIAN SYLLABICS CII	cans
ᒍ		g	gu	gᵘ	ɣu		syllable				U+148D: CANADIAN SYLLABICS CO	cans
ᒎ		G	guu	gᵘ̱	ɣuː		syllable				U+148E: CANADIAN SYLLABICS COO	cans
ᒐ		g	ga	gᵃ	ɣa		syllable				U+1490: CANADIAN SYLLABICS CA	cans
ᒑ		G	gaa	gᵃ̱	ɣaː		syllable				U+1491: CANADIAN SYLLABICS CAA	cans
ᒉ		g	gai	gᵃⁱ	ɣai		syllable				U+1489: CANADIAN SYLLABICS CE	cans
ᒡ		g	g	g	ɣ		final consonant				U+14A1: CANADIAN SYLLABICS C	cans
												
ᒥ		m	mi	mⁱ	mi		syllable				U+14A5: CANADIAN SYLLABICS MI	cans
ᒦ		M	mii	mⁱ̠	miː		syllable				U+14A6: CANADIAN SYLLABICS MII	cans
ᒧ		m	mu	mᵘ	mu		syllable				U+14A7: CANADIAN SYLLABICS MO	cans
ᒨ		M	muu	mᵘ̱	muː		syllable				U+14A8: CANADIAN SYLLABICS MOO	cans
ᒪ		m	ma	mᵃ	ma		syllable				U+14AA: CANADIAN SYLLABICS MA	cans
ᒫ		M	maa	mᵃ̱	maː		syllable				U+14AB: CANADIAN SYLLABICS MAA	cans
ᒣ		m	mai	mᵃⁱ	mai		syllable				U+14A3: CANADIAN SYLLABICS ME	cans
ᒻ		m	m	m	m		final consonant				U+14BB: CANADIAN SYLLABICS M	cans
												
ᓂ		n	ni	nⁱ	ni		syllable				U+14C2: CANADIAN SYLLABICS NI	cans
ᓃ		N	nii	nⁱ̠	niː		syllable				U+14C3: CANADIAN SYLLABICS NII	cans
ᓄ		n	nu	nᵘ	nu		syllable				U+14C4: CANADIAN SYLLABICS NO	cans
ᓅ		N	nuu	nᵘ̱	nuː		syllable				U+14C5: CANADIAN SYLLABICS NOO	cans
ᓇ		n	na	nᵃ	na		syllable				U+14C7: CANADIAN SYLLABICS NA	cans
ᓈ		N	naa	nᵃ̱	naː		syllable				U+14C8: CANADIAN SYLLABICS NAA	cans
ᓀ		n	nai	nᵃⁱ	nai		syllable				U+14C0: CANADIAN SYLLABICS NE	cans
ᓐ		n	n	n	n		final consonant				U+14D0: CANADIAN SYLLABICS N	cans
												
ᓯ		s	si	sⁱ	si~hi		syllable				U+14EF: CANADIAN SYLLABICS SI	cans
ᓰ		S	sii	sⁱ̠	siː~hiː		syllable				U+14F0: CANADIAN SYLLABICS SII	cans
ᓱ		s	su	sᵘ	su		syllable				U+14F1: CANADIAN SYLLABICS SO	cans
ᓲ		S	suu	sᵘ̱	suː		syllable				U+14F2: CANADIAN SYLLABICS SOO	cans
ᓴ		s	sa	sᵃ	sa		syllable				U+14F4: CANADIAN SYLLABICS SA	cans
ᓵ		S	saa	sᵃ̱	saː		syllable				U+14F5: CANADIAN SYLLABICS SAA	cans
ᓭ		s	sai	sᵃⁱ	sai		syllable				U+14ED: CANADIAN SYLLABICS SE	cans
ᔅ		s	s	s	s		final consonant				U+1505: CANADIAN SYLLABICS S	cans
												
ᓕ		l	li	lⁱ	li		syllable				U+14D5: CANADIAN SYLLABICS LI	cans
ᓖ		L	lii	lⁱ̠	liː		syllable				U+14D6: CANADIAN SYLLABICS LII	cans
ᓗ		l	lu	lᵘ	lu		syllable				U+14D7: CANADIAN SYLLABICS LO	cans
ᓘ		L	luu	lᵘ̱	luː		syllable				U+14D8: CANADIAN SYLLABICS LOO	cans
ᓚ		l	la	lᵃ	la		syllable				U+14DA: CANADIAN SYLLABICS LA	cans
ᓛ		L	laa	lᵃ̱	laː		syllable				U+14DB: CANADIAN SYLLABICS LAA	cans
ᓓ		l	lai	lᵃⁱ	lai		syllable				U+14D3: CANADIAN SYLLABICS LE	cans
ᓪ		l	l	l	l		final consonant				U+14EA: CANADIAN SYLLABICS L	cans
												
ᔨ		j	ji	jⁱ	ji		syllable				U+1528: CANADIAN SYLLABICS YI	cans
ᔩ		J	jii	jⁱ̠	jiː		syllable				U+1529: CANADIAN SYLLABICS YII	cans
ᔪ		j	ju	jᵘ	ju		syllable				U+152A: CANADIAN SYLLABICS YO	cans
ᔫ		J	juu	jᵘ̱	juː		syllable				U+152B: CANADIAN SYLLABICS YOO	cans
ᔭ		j	ja	jᵃ	ja		syllable				U+152D: CANADIAN SYLLABICS YA	cans
ᔮ		J	jaa	jᵃ̱	jaː		syllable				U+152E: CANADIAN SYLLABICS YAA	cans
ᔦ		j	jai	jᵃⁱ	jai		syllable				U+1526: CANADIAN SYLLABICS YE	cans
ᔾ		j	j	j	j		final consonant				U+153E: CANADIAN SYLLABICS Y	cans
												
ᕕ		v	vi	vⁱ	vi		syllable				U+1555: CANADIAN SYLLABICS FI	cans
ᕖ		V	vii	vⁱ̠	viː		syllable				U+1556: CANADIAN SYLLABICS FII	cans
ᕗ		v	vu	vᵘ	vu		syllable				U+1557: CANADIAN SYLLABICS FO	cans
ᕘ		V	vuu	vᵘ̱	vuː		syllable				U+1558: CANADIAN SYLLABICS FOO	cans
ᕙ		v	va	vᵃ	va		syllable				U+1559: CANADIAN SYLLABICS FA	cans
ᕚ		V	vaa	vᵃ̱	vaː		syllable				U+155A: CANADIAN SYLLABICS FAA	cans
ᕓ		f	vai	vᵃⁱ	vai		syllable				U+1553: CANADIAN SYLLABICS FE	cans
ᕝ		v	v	v	v		final consonant				U+155D: CANADIAN SYLLABICS F	cans
												
ᕆ		r	ri	rⁱ	ʁi	ʁ	syllable				U+1546: CANADIAN SYLLABICS RI	cans
ᕇ		R	rii	rⁱ̠	ʁiː		syllable				U+1547: CANADIAN SYLLABICS RII	cans
ᕈ		r	ru	rᵘ	ʁu		syllable				U+1548: CANADIAN SYLLABICS RO	cans
ᕉ		R	ruu	rᵘ̱	ʁuː		syllable				U+1549: CANADIAN SYLLABICS ROO	cans
ᕋ		r	ra	rᵃ	ʁa		syllable				U+154B: CANADIAN SYLLABICS RA	cans
ᕌ		R	raa	rᵃ̱	ʁaː		syllable				U+154C: CANADIAN SYLLABICS RAA	cans
ᕃ		r	rai	rᵃⁱ	ʁai		syllable				U+1543: CANADIAN SYLLABICS R-CREE RE	cans
ᕐ		r	r	r	ʁ		final consonant				U+1550: CANADIAN SYLLABICS R	cans
												
ᕿ		q	qi	qⁱ	qi		syllable				U+157F: CANADIAN SYLLABICS QI	cans
ᖀ		Q	qii	qⁱ̠	qiː		syllable				U+1580: CANADIAN SYLLABICS QII	cans
ᖁ		q	qu	qᵘ	qu		syllable				U+1581: CANADIAN SYLLABICS QO	cans
ᖂ		Q	quu	qᵘ̱	quː		syllable				U+1582: CANADIAN SYLLABICS QOO	cans
ᖃ		q	qa	qᵃ	qa		syllable				U+1583: CANADIAN SYLLABICS QA	cans
ᖄ		Q	qaa	qᵃ̱	qaː		syllable				U+1584: CANADIAN SYLLABICS QAA	cans
ᙯ		q	qai	qᵃⁱ	qai		syllable				U+166F: CANADIAN SYLLABICS QAI	cans
ᖅ		q	q	q	q		final consonant				U+1585: CANADIAN SYLLABICS Q	cans
												
ᖏ		b	ngi	ŋⁱ	ŋi	ŋ	syllable				U+158F: CANADIAN SYLLABICS NGI	cans
ᖐ		B	ngiː	ŋⁱ̠	ŋii		syllable				U+1590: CANADIAN SYLLABICS NGII	cans
ᖑ		b	ngu	ŋᵘ	ŋu		syllable				U+1591: CANADIAN SYLLABICS NGO	cans
ᖒ		B	nguː	ŋᵘ̱	ŋuu		syllable				U+1592: CANADIAN SYLLABICS NGOO	cans
ᖓ		b	nga	ŋᵃ	ŋa		syllable				U+1593: CANADIAN SYLLABICS NGA	cans
ᖔ		B	ngaː	ŋᵃ̱	ŋaa		syllable				U+1594: CANADIAN SYLLABICS NGAA	cans
ᙰ		b	ngai	ŋᵃⁱ	ŋai		syllable				U+1670: CANADIAN SYLLABICS NGAI	cans
ᖕ		b	ng	ŋ	ŋ		final consonant				U+1595: CANADIAN SYLLABICS NG	cans
												
ᙱ		b	nngi	ŋᵑⁱ	ŋŋi		syllable				U+1671: CANADIAN SYLLABICS NNGI	cans
ᙲ		B	nngiI	ŋᵑⁱ̠	ŋŋiː		syllable				U+1672: CANADIAN SYLLABICS NNGI	cans
ᙳ		b	nngu	ŋᵑᵘ	ŋŋu		syllable				U+1673: CANADIAN SYLLABICS NNGO	cans
ᙴ		B	nnguu	ŋᵑᵘ̱	ŋŋuː		syllable				U+1674: CANADIAN SYLLABICS NNGOO	cans
ᙵ		b	nnga	ŋᵑᵃ	ŋŋa		syllable				U+1675: CANADIAN SYLLABICS NNGA	cans
ᙶ		B	nngaa	ŋᵑᵃ̱	ŋŋaː		syllable				U+1676: CANADIAN SYLLABICS NNGAA	cans
ᖖ		b	nng	ŋᵑ	ŋŋ		final consonant				U+1596: CANADIAN SYLLABICS NNG	cans
												
ᖠ		z	ɫi	ɫⁱ	ɬi	ɬ	syllable				U+15A0: CANADIAN SYLLABICS LHI	cans
ᖡ		Z	ɫii	ɫⁱ̠	ɬiː	ɫ	syllable				U+15A1: CANADIAN SYLLABICS LHII	cans
ᖢ		z	ɫu	ɫᵘ	ɬu		syllable				U+15A2: CANADIAN SYLLABICS LHO	cans
ᖣ		Z	ɫuu	ɫᵘ̱	ɬuː		syllable				U+15A3: CANADIAN SYLLABICS LHOO	cans
ᖤ		z	ɫa	ɫᵃ	ɬa		syllable				U+15A4: CANADIAN SYLLABICS LHA	cans
ᖥ		Z	ɫaa	ɫᵃ̱	ɬaː		syllable				U+15A5: CANADIAN SYLLABICS LHAA	cans
ᖦ		z	ɫ	ɫ	ɬ		syllable				U+15A6: CANADIAN SYLLABICS LH	cans
												
ᕼ		H	h	ʜ	h		extended consonant				U+157C: CANADIAN SYLLABICS NUNAVUT H	cans
ᖯ		B	b	b	b		extended consonant				U+15AF: CANADIAN SYLLABICS AIVILIK B	cans
\'		\'	ʔ	ʔ	ʔ		extended consonant				U+0027: APOSTROPHE	
												
												
ᕵ		h	hi	hⁱ	hi		consonant	rare			U+1575: CANADIAN SYLLABICS NUNAVIK HI	cans
ᕶ		H	hii	hⁱ̠	hiː		consonant	rare			U+1576: CANADIAN SYLLABICS NUNAVIK HII	cans
ᕴ		h	hu	hᵘ	hu		consonant	rare			U+1574: CANADIAN SYLLABICS NUNAVIK HE	cans
ᕷ		h	huu	hᵘ̱	huː		consonant	rare			U+1577: CANADIAN SYLLABICS NUNAVIK HO	cans
ᕸ		H	ha	hᵃ	ha		consonant	rare			U+1578: CANADIAN SYLLABICS NUNAVIK HOO	cans
ᕹ		h	haa	hᵃ̱	haː		consonant	rare			U+1579: CANADIAN SYLLABICS NUNAVIK HA	cans
ᕺ		H	hai	hᵃⁱ	hai		consonant	rare			U+157A: CANADIAN SYLLABICS NUNAVIK HAA	cans
ᕻ		h	h	h	h		consonant	rare			U+157B: CANADIAN SYLLABICS NUNAVIK H	cans
												
												
												
												
												
\u200B							zero-width space				U+200B ZERO WIDTH SPACE	
\u200C				ₓ			zero-width non-joiner				U+200C: ZERO WIDTH NON-JOINER	
\u200D				₊			zero-width joiner				U+200D: ZERO WIDTH JOINER	
\u034F				ᶜᵍʲ			combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER​	
												
												
“		<				“	quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
”		>				”	quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
‘		<				‘	quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
’		>				’	quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
«		"		“		«	quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»		"		”		»	quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
ʼ							apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE	
,							comma				U+002C: COMMA	
;							semicolon				U+003B: SEMICOLON	
:							colon				U+003A: COLON	
.							full stop				U+002E: FULL STOP	
?							question mark				U+003F: QUESTION MARK	
!							exclamation mark				U+0021: EXCLAMATION MARK	
(							parenthesis				U+0028: LEFT PARENTHESIS	
)							parenthesis				U+0029: RIGHT PARENTHESIS	
…						…	ellipsis				U+2026: HORIZONTAL ELLIPSIS	
–						–	en dash				U+2013: EN DASH	
—						—	em dash				U+2014: EM DASH	
												
§							section sign				U+00A7: SECTION SIGN	
†							dagger				U+2020: DAGGER	
‡							double dagger				U+2021: DOUBLE DAGGER	
′							prime				U+2032: PRIME	
″							double prime				U+2033: DOUBLE PRIME	
‐							hyphen				U+2010 HYPHEN	
‑							non-breaking hyphen				U+2011 NON-BREAKING HYPHEN	


`


var cols = {
"class": 1,
"key":2,
"transcription":3,
"transLoc": 4,
"ipaLoc": 5,
"latin": 6,
"transckey": 0,
"typeLoc": 7,
"statusLoc": 8,
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
"nameLoc": 0,
"nnameLoc": 0,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[3, 'Latin']]
}

