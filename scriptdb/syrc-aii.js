var spreadsheet = `
ܐ		A	ʾ	ʔ ɑ	} a	ʔ	ʾ ȃ	consonant/mater lectionis		ܐ ـܐ ܕܐ	1	ɑlap	ܐܵܠܲܦ	U+0710: SYRIAC LETTER ALAPH	syriac
ܒ		b	b	b	b	b	b	consonant		ܒ ܒـܒـܒ	2	bet	ܒܹܝܬ	U+0712: SYRIAC LETTER BETH	syriac
ܓ		g	g	ɡ	g	g	g	consonant		ܓ ܓـܓـܓ	3	gɑmal	ܓܵܡܵܠ	U+0713: SYRIAC LETTER GAMAL	syriac
ܕ		d	d	d	d	d	d	consonant		ܕ ـܕ	4	dɑlat	ܕܵܠܲܬ	U+0715: SYRIAC LETTER DALATH	syriac
ܗ		h	h	h	h	h	h	consonant		ܗ ـܗ	5	he	ܗܹܐ	U+0717: SYRIAC LETTER HE	syriac
ܘ		w	w	w u o	w	w	w û ô	consonant		ܘ ـܘ	6	wɑw	ܘܵܘ	U+0718: SYRIAC LETTER WAW	syriac
ܙ		z	z	z	z	z	z	consonant		ܙ ـܙ	7	zɑjn	ܙܵܝܢ	U+0719: SYRIAC LETTER ZAIN	syriac
ܚ		x	x	x	h	ħ	ḥ	consonant		ܚ ܚـܚـܚ	8	xet	ܚܹܝܬ	U+071A: SYRIAC LETTER HETH	syriac
ܛ		T	ᵵ	tˤ	t	tˤ	ṭ	consonant		ܛ ܛـܛـܛ	9	tˤet	ܛܹܝܬ	U+071B: SYRIAC LETTER TETH	syriac
ܝ		y	y	j i e	y	j	y	consonant/mater lectionis		ܝ ܝـܝـܝ	10	yod	ܝܘܿܕ	U+071D: SYRIAC LETTER YUDH	syriac
ܟ		k	k	k	k	k	k	consonant		ܟ ܟـܟـܟ	20	kɑp	ܟܵܦ	U+071F: SYRIAC LETTER KAPH	syriac
ܠ		l	l	l	l	l	l	consonant		ܠ ܠـܠـܠ	30	lɑmad	ܠܵܡܲܕ	U+0720: SYRIAC LETTER LAMADH	syriac
ܡ		m	m	m	m	m	m	consonant		ܡ ܡـܡـܡ	40	mim	ܡܝܼܡ	U+0721: SYRIAC LETTER MIM	syriac
ܢ		n	n	n	n	n	n	consonant		ܢ ܢـܢـܢ	50	nun	ܢܘܼܢ	U+0722: SYRIAC LETTER NUN	syriac
ܣ		s	s	s	s	s	s	consonant		ܣ ܣـܣـܣ	60	sɪmkat	ܣܸܡܟܲܬ	U+0723: SYRIAC LETTER SEMKATH	syriac
ܥ		{	ʿ	ʕ	{	ʕ	ʿ	consonant		ܥ ܥـܥـܥ	70	ʕe	ܥܹܐ	U+0725: SYRIAC LETTER E	syriac
ܦ		p	p	p	p	p	p	consonant		ܦ ܦـܦـܦ	80	pe	ܦܹܐ	U+0726: SYRIAC LETTER PE	syriac
ܨ		S	ᵴ	sˤ	s	sˤ	ṣ	consonant		ܨ ـܨ	90	sˤɑde	ܨܵܕܹܐ	U+0728: SYRIAC LETTER SADHE	syriac
ܩ		q	q	q	q	q	q	consonant		ܩ ܩـܩـܩ	100	qop	ܩܘܿܦ	U+0729: SYRIAC LETTER QAPH	syriac
ܪ		r	r	r	r	r	r	consonant		ܪ ـܪ	200	reʃ	ܪܹܝܫ	U+072A: SYRIAC LETTER RISH	syriac
ܫ		s	ʃ	ʃ	s	ʃ 	š	consonant		ܫ ܫـܫـܫ	300	ʃin	ܫܝܼܢ	U+072B: SYRIAC LETTER SHIN	syriac
ܬ		t¶	t	t	t	t	t	consonant		ܬ ـܬ	400	tɑw	ܬܵܘ	U+072C: SYRIAC LETTER TAW	syriac
															
															
															
															
ܵ		a	ā	ɑ	a	ɑ	ā	vowel diacritic				zqɑp̄ɑ	ܙܩܵܦܵܐ‎	U+0735: SYRIAC ZQAPHA DOTTED​	syriac
ܲ		a	a	a	a	a	a	vowel diacritic				ptɑxɑ	ܦܬܵܚܵܐ‎	U+0732: SYRIAC PTHAHA DOTTED​	syriac
ܸ		I	ɪ	ɪ	e i e	ɛ ɪ e	e ĕ i	vowel diacritic				zlɑmɑ pʃiqɑ/zɑwɡa	ܙܠܵܡܵܐ ܦܫܝܼܩܵܐ‎/ܙܵܘܓܵܐ	U+0738: SYRIAC DOTTED ZLAMA HORIZONTAL​	syriac
ܹ		e	ē	e	e	e	ē	vowel diacritic				zlɑmɑ qaʃjɑ/yariħɑ	ܙܠܵܡܵܐ ܩܲܫܝܵܐ‎݁/ܝܲܪܝܼܟ݂ܵܐ	U+0739: SYRIAC DOTTED ZLAMA ANGULAR​	syriac
ܼ		i	i	i u	i	i	i	vowel diacritic	used with ܘ or ܝ					U+073C: SYRIAC HBASA-ESASA DOTTED​	syriac
ܿ		o	o	o	o	o	o	vowel diacritic	used with ܘ					U+073F: SYRIAC RWAHA​	syriac
															
															
݂		/	ˑ					soft sound marker				rukɑxɑ	ܪܘܼܟܵܟ݂ܵܐ	U+0742: SYRIAC RUKKAKHA​	syriac
݁		/	˙					hard-sound marker				quʃɑyɑ	ܩܘܼܫܵܝܵܐ	U+0741: SYRIAC QUSHSHAYA​	syriac
̃		/	~					repertoire extension	used with ܫ			maǧliyana	ܡܲܓ̰ܠܝܼܵܢܵܐ	U+0303: COMBINING TILDE​	syriac
̰		/	˷					repertoire extension	used with ܫ, ܟ, ܓ			maǧliyɑnɑ	ܡܲܓ̰ܠܝܼܵܢܵܐ	U+0330: COMBINING TILDE BELOW​	syriac
̮		/	ˇ					fricative indicator	used with ܦ			qiʃtɑ	ܩܝܸܫܬܵܐ݂݂	U+032E: COMBINING BREVE BELOW​	syriac
݇		]	′					silent letter marker				mtˤalqānā	ܡܛܲܠܩܵܢܵܐ	U+0747: SYRIAC OBLIQUE LINE ABOVE​	syriac
݈		]	‵					silent letter marker						U+0748: SYRIAC OBLIQUE LINE BELOW​	syriac
̈		&	˖		[	̋	\u030B	plural marker				syame	ܣܝܵܡܹ̈ܐ	U+0308: COMBINING DIAERESIS​	syriac
̇		[	‐͑					disambiguation mark						U+0307: COMBINING DOT ABOVE​	syriac
̣		[	‐̜					disambiguation mark						U+0323: COMBINING DOT BELOW​	syriac
݀		[	⁑		[	ʺ	ʺ	feminine marker						U+0740: SYRIAC FEMININE DOT​	syriac
̄		[	‒̄					extender/joiner	infrequent			marhᵊtˤɑnɑ	ܡܲܪܗ̄ܛܵܢܵܐ	U+0304: COMBINING MACRON​	syriac
̱		[	‒̱					epenthetic marker	infrequent			mhagjɑnɑ	ܡܗܲܓܝܵܢܵܐ	U+0320: COMBINING MINUS SIGN BELOW​	syriac
															
															
̊		/	‐̊					hard/soft sound marker						U+030A: COMBINING RING ABOVE​	combining
̥		/	‐̥					hard/soft sound marker						U+0325: COMBINING RING BELOW​	combining
̤								phonological marker						U+0324: COMBINING DIAERESIS BELOW​	syriac
															
݃	x							accent mark						U+0743: SYRIAC TWO VERTICAL DOTS ABOVE​	syriac
݄	x							accent mark						U+0744: SYRIAC TWO VERTICAL DOTS BELOW​	syriac
ܑ		[	ˈ					aleph						U+0711: SYRIAC LETTER SUPERSCRIPT ALAPH​	syriac
															
															
															
܀	x				[	¶		end of paragraph						U+0700: SYRIAC END OF PARAGRAPH	syriac
܁	x		.		.	.	.	full stop						U+0701: SYRIAC SUPRALINEAR FULL STOP	syriac
܂	x		.		.	.	.	full stop						U+0702: SYRIAC SUBLINEAR FULL STOP	syriac
܃	x		:		:	:	:	colon						U+0703: SYRIAC SUPRALINEAR COLON	syriac
܄	x		:		:	:	:	colon						U+0704: SYRIAC SUBLINEAR COLON	syriac
܅	x		:		:	:	:	colon						U+0705: SYRIAC HORIZONTAL COLON	syriac
܆	x		:		:	:	:	colon						U+0706: SYRIAC COLON SKEWED LEFT	syriac
܇	x		:		:	:	:	colon						U+0707: SYRIAC COLON SKEWED RIGHT	syriac
܈	x		;		;	;	;	phrase division						U+0708: SYRIAC SUPRALINEAR COLON SKEWED LEFT	syriac
܉	x		?		?	?	?	question mark						U+0709: SYRIAC SUBLINEAR COLON SKEWED RIGHT	syriac
ـ		_	_											U+0640 ARABIC TATWEEL	arabic
															
܊	x		.		.	.	.	contraction mark						U+070A: SYRIAC CONTRACTION	syriac
\u070F	x							abbreviation mark						U+070F SYRIAC ABBREVIATION MARK	syriac
܋	x							note marker						U+070B: SYRIAC HARKLEAN OBELUS	syriac
܌	x							note marker						U+070C: SYRIAC HARKLEAN METOBELUS	syriac
܍	x							note marker						U+070D: SYRIAC HARKLEAN ASTERISCUS	syriac
															
،		,	,		,	,		comma						U+060C: ARABIC COMMA	
؛		;	;		;	;	;	semi-colon						U+061B: ARABIC SEMICOLON	
.					.	.		full stop						U+002E: FULL STOP	
؟		?	?		?	?	?	question mark						U+061F: ARABIC QUESTION MARK	
															
															
															
															
															
															
															
\u0735\u0710\b	s	a	āʾ	a	a	a	â	a-vowel or i-vowel + alaph at end of word						U+0735 U+0710: SYRIAC ZQAPHA DOTTED, LETTER ALAPH​	
\u0732\u0710\b	s	a	aʾ	a	a	a	ȃ	a-vowel or i-vowel + alaph at end of word						U+0732 U+0710: SYRIAC PTHAHA DOTTED, LETTER ALAPH​	
\u0738\u0710\b	s	i	eʾ	ɪ	i	ɪ	ȋ	a-vowel or i-vowel + alaph at end of word						U+0738 U+0710: SYRIAC DOTTED ZLAMA HORIZONTAL, LETTER ALAPH​	
															
ܒ݂	s	v	bˑ	v	v	v	ḇ			ܒ݂ ܒ݂ܒ݂ܒ݂				U+0712 U+0742: SYRIAC LETTER BETH, RUKKAKHA	
ܓ݂	s	R	gˑ	ʁ	y	ɣ	ḡ			ܓ݂ ܓ݂ܓ݂ܓ݂				U+0713 U+0742: SYRIAC LETTER GAMAL, RUKKAKHA	
ܕ݂	s	D	dˑ	ð	d	ð	ḏ			ܕ݂ ܕ݂				U+0715 U+0742: SYRIAC LETTER DALATH, RUKKAKHA	
ܟ݂	s	H	kˑ	ħ	x t	x ʧ	ḵ			ܟ݂ ܟ݂ܟ݂ܟ݂				U+071F U+0742: SYRIAC LETTER KAPH, RUKKAKHA	
ܬ݂	s	@	tˑ	θ	@	θ	ṯ			ܬ݂ ܬ݂				U+072C U+0742: SYRIAC LETTER TAW, RUKKAKHA	
ܦ̮	s	f	pˇ	f						ܦ̮ ܦ̮ܦ̮ܦ̮				U+0726 U+032E: SYRIAC LETTER PE, COMBINING BREVE BELOW	
															
															
ܓ̰	s	j	g˷	d͡ʒ	d	ʤ	ǧ			ܓ̰ ܓ̰ܓ̰ܓ̰				U+0713 U+0330: SYRIAC LETTER GAMAL, COMBINING TILDE BELOW	
ܫ̰	s	z	ʃ˷	ʒ	z	ʒ	ẑ			ܫ̰ ܫ̰ܫ̰ܫ̰				U+072B U+0330: SYRIAC LETTER SHIN, COMBINING TILDE BELOW	
ܫ̃	s	z	ʃ~	ʒ	z	ʒ	ẑ			ܫ̃ ܫ̃ܫ̃ܫ̃				U+072B U+0303: SYRIAC LETTER SHIN, COMBINING TILDE	
ܟ̰	s	c	k˷	t͡ʃ	t	ʧ	č			ܟ̃ ܟ̃ܟ̃ܟ̃				U+071F U+0303: SYRIAC LETTER KAPH, COMBINING TILDE	
															
															
ܘܼ	s	u¶	wi	u	u	u	û	mater + vowel		ܘܼ ܘܼ		rvɑsˤɑ	ܪܒ݂ܵܨܵܐ	U+0718 U+073C: SYRIAC LETTER WAW, HBASA-ESASA DOTTED	
ܝܼ	s	i¶	yi	i	i	i	î	mater + vowel		ܝܼ ܝܼܝܼܝܼ		xvɑsˤɑ	ܚܒ݂ܵܨܵܐ	U+071D U+073C: SYRIAC LETTER YUDH, HBASA-ESASA DOTTED	
															
ܘܿ	s	o¶	wo	o	o	o	ô	mater + vowel		ܘܿ ܘܿ		rwɑxɑ	ܪܘܵܚܵܐ	U+0718 U+073F: SYRIAC LETTER WAW, RWAHA	



`

var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":7,
"typeLoc": 8,
"statusLoc": 9,
"equiv": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 10,
"numLoc": 11,
"nameLoc": 12,
"nnameLoc": 13,
"ucsName": 14,
"block": 15,

//"othertranscriptions": [[7, 'ISO 9985']]
"othertranscriptions": [[7, 'Transcription']]
}

