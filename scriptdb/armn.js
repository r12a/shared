var spreadsheet = `
պ	Ll	p	p		p	p	b	lowercase plosive				Պ	800	պե	pɛ/bɛ	U+057A: ARMENIAN SMALL LETTER PEH	✓
Պ	Lu	P	P		P	p̣	B	uppercase plosive			պ			պե	pɛ/bɛ	U+054A: ARMENIAN CAPITAL LETTER PEH	✓
բ	Ll	b pʰ	b		b	b	p	lowercase plosive				Բ	2	բեն	bɛn/pʰɛn	U+0562: ARMENIAN SMALL LETTER BEN	✓
Բ	Lu	B Pʰ	B		B	ḅ	P	uppercase plosive			բ			բեն	bɛn/pʰɛn	U+0532: ARMENIAN CAPITAL LETTER BEN	✓
փ	Ll	pʰ	p’	pʰ p’	p	pʰ	'	lowercase plosive				Փ	8000	փյուր	pʰjuɾ/pʰʏɾ	U+0583: ARMENIAN SMALL LETTER PIWR	✓
Փ	Lu	Pʰ	P’		P	p̣ʰ	"	uppercase plosive			փ			փյուր	pʰjuɾ/pʰʏɾ	U+0553: ARMENIAN CAPITAL LETTER PIWR	✓
տ	Ll	t	t		t	t	d	lowercase plosive				Տ	4000	տյուն	tjun/dʏn	U+057F: ARMENIAN SMALL LETTER TIWN	✓
Տ	Lu	T	T		T	ṭ	D	uppercase plosive			տ			տյուն	tjun/dʏn	U+054F: ARMENIAN CAPITAL LETTER TIWN	✓
դ	Ll	d tʰ	d		d	d	t	lowercase plosive				Դ	4	դա	dɑ/tʰɑ	U+0564: ARMENIAN SMALL LETTER DA	✓
Դ	Lu	D Tʰ	D		D	ḍ	T	uppercase plosive			դ			դա	dɑ/tʰɑ	U+0534: ARMENIAN CAPITAL LETTER DA	✓
թ	Ll	tʰ	t’	tʰ t’	t	tʰ	;	lowercase plosive				Թ	9	թո	tʰo	U+0569: ARMENIAN SMALL LETTER TO	✓
Թ	Lu	Tʰ	T’		T	ṭʰ	:	uppercase plosive			թ			թո	tʰo	U+0539: ARMENIAN CAPITAL LETTER TO	✓
կ	Ll	k	k		k	k	g	lowercase plosive				Կ	60	կեն	kɛn/ɡɛn	U+056F: ARMENIAN SMALL LETTER KEN	✓
Կ	Lu	K	K		K	ḳ	G	uppercase plosive			կ			կեն	kɛn/ɡɛn	U+053F: ARMENIAN CAPITAL LETTER KEN	✓
գ	Ll	ɡ kʰ	g		g	g	c	lowercase plosive				Գ	3	գիմ	gim/kʰim	U+0563: ARMENIAN SMALL LETTER GIM	✓
Գ	Lu	G Kʰ	G		G	g̣	C	uppercase plosive			գ			գիմ	gim/kʰim	U+0533: ARMENIAN CAPITAL LETTER GIM	✓
ք	Ll	kʰ	k’	kʰ k’	k	kʰ	k	lowercase plosive				Ք	9000	քե	kʰɛ	U+0584: ARMENIAN SMALL LETTER KEH	✓
Ք	Lu	Kʰ	K’		K	ḳʰ	K	uppercase plosive			ք			քե	kʰɛ	U+0554: ARMENIAN CAPITAL LETTER KEH	✓
																	
ճ	Ll	t͡ʃ	tš	t͡ʃ d͡ʒ tš	t	ʧ	j	lowercase affricate				Ճ	100	ճե	tʃɛ/dʒɛ	U+0573: ARMENIAN SMALL LETTER CHEH	✓
Ճ	Lu	T͡Ʃ	Tš		T	ʧ̣	J	uppercase affricate			ճ			ճե	tʃɛ/dʒɛ	U+0543: ARMENIAN CAPITAL LETTER CHEH	✓
ջ	Ll	d͡ʒ t͡ʃʰ	dž	dž	d	ʤ	]	lowercase affricate				Ջ	900	ջե	dʒɛ/tʃʰɛ	U+057B: ARMENIAN SMALL LETTER JHEH	✓
Ջ	Lu	D͡Ʒ T͡Ʃʰ	Dž		D	ʤ̣	}	uppercase affricate			ջ			ջե	dʒɛ/tʃʰɛ	U+054B: ARMENIAN CAPITAL LETTER JHEH	✓
չ	Ll	t͡ʃʰ	tš’	t͡ʃʰ tš’	t	ʧʰ	[	lowercase affricate				Չ	700	չա	ʧʰɑ	U+0579: ARMENIAN SMALL LETTER CHA	✓
Չ	Lu	T͡Ʃʰ	Tš’		T	ʧ̣ʰ	{	uppercase affricate			չ			չա	ʧʰɑ	U+0549: ARMENIAN CAPITAL LETTER CHA	✓
ծ	Ll	t͡s	ts	t͡s d͡z ts	t	ʦ	/	lowercase affricate				Ծ	50	ծա	tsɑ/dzɑ	U+056E: ARMENIAN SMALL LETTER CA	✓
Ծ	Lu	T͡S	Ts’		T	ʦ̣	?	uppercase affricate			ծ			ծա	tsɑ/dzɑ	U+053E: ARMENIAN CAPITAL LETTER CA	✓
ձ	Ll	d͡z t͡sʰ	dz	dz	d	ʣ	2	lowercase affricate				Ձ	80	ձա	dzɑ/tsʰɑ	U+0571: ARMENIAN SMALL LETTER JA	✓
Ձ	Lu	D͡Z T͡Sʰ	Dz		D	ʣ̣	@	uppercase affricate			ձ			ձա	dzɑ/tsʰɑ	U+0541: ARMENIAN CAPITAL LETTER JA	✓
ց	Ll	t͡sʰ	ts’	t͡sʰ ts’	t	ʦʰ	x	lowercase affricate				Ց	6000	ցո	tsʰo	U+0581: ARMENIAN SMALL LETTER CO	✓
Ց	Lu	T͡Sʰ	Ts’		T	ʦ̣ʰ	X	uppercase affricate			ց			ցո	tsʰo	U+0551: ARMENIAN CAPITAL LETTER CO	✓
																	
ֆ	Ll	f	f		f	f	f	lowercase fricative				Ֆ		ֆե	fɛ	U+0586: ARMENIAN SMALL LETTER FEH	✓
Ֆ	Lu	F	F		F	f̣	F	uppercase fricative			ֆ			ֆե	fɛ	U+0556: ARMENIAN CAPITAL LETTER FEH	✓
վ	Ll	v	v		v	v	w	lowercase fricative				Վ	3000	վեվ	vɛv	U+057E: ARMENIAN SMALL LETTER VEW	✓
Վ	Lu	V	V		V	ṿ	W	uppercase fricative			վ			վեվ	vɛv	U+054E: ARMENIAN CAPITAL LETTER VEW	✓
ւ	Ll	v	w		w	w	v	lowercase fricative				Ւ	7000	վյուն	hʏn	U+0582: ARMENIAN SMALL LETTER YIWN	✓
Ւ	Lu	V	W		w	ẉ	V	uppercase fricative			ւ			վյուն	hʏn	U+0552: ARMENIAN CAPITAL LETTER YIWN	✓
ս	Ll	s	s		s	s	s	lowercase fricative				Ս	2000	սե	sɛ	U+057D: ARMENIAN SMALL LETTER SEH	✓
Ս	Lu	S	S		S	ṣ	S	uppercase fricative			ս			սե	sɛ	U+054D: ARMENIAN CAPITAL LETTER SEH	✓
զ	Ll	z	z		z	z	z	lowercase fricative				Զ	6	զա	za	U+0566: ARMENIAN SMALL LETTER ZA	✓
Զ	Lu	Z	Z		Z	ẓ	Z	uppercase fricative			զ			զա	za	U+0536: ARMENIAN CAPITAL LETTER ZA	✓
շ	Ll	ʃ	š	ʃ š	s	ʃ	,	lowercase fricative				Շ	500	շա	ʃɑ	U+0577: ARMENIAN SMALL LETTER SHA	✓
Շ	Lu	Ʃ	Š		S	ʃ̣	<	uppercase fricative			շ			շա	ʃɑ	U+0547: ARMENIAN CAPITAL LETTER SHA	✓
ժ	Ll	ʒ	ž	ʒ ž	z	ʒ	=	lowercase fricative				Ժ	10	ժե	ʒɛ	U+056A: ARMENIAN SMALL LETTER ZHE	✓
Ժ	Lu	Ʒ	Ž		Z	ʒ̣	+	uppercase fricative			ժ			ժե	ʒɛ	U+053A: ARMENIAN CAPITAL LETTER ZHE	✓
խ	Ll	χ	x		x	x	q	lowercase fricative				Խ	40	խե	χɛ	U+056D: ARMENIAN SMALL LETTER XEH	✓
Խ	Lu	Χ	X		X	x̣	Q	uppercase fricative			խ			խե	χɛ	U+053D: ARMENIAN CAPITAL LETTER XEH	✓
հ	Ll	h	h		h	h	h	lowercase fricative				Հ	70	հօ	ho	U+0570: ARMENIAN SMALL LETTER HO	✓
Հ	Lu	H	H		H	ḥ	H	uppercase fricative			հ			հօ	ho	U+0540: ARMENIAN CAPITAL LETTER HO	✓
																	
																	
մ	Ll	m	m		m	m	m	lowercase nasal				Մ	200	մեն	mɛn	U+0574: ARMENIAN SMALL LETTER MEN	✓
Մ	Lu	M	M		M	ṃ	M	uppercase nasal			մ			մեն	mɛn	U+0544: ARMENIAN CAPITAL LETTER MEN	✓
ն	Ll	n ŋ	n	ŋ	n	n	n	lowercase nasal				Ն	400	նու	nu	U+0576: ARMENIAN SMALL LETTER NOW	✓
Ն	Lu	N Ŋ	N		N	ṇ	N	uppercase nasal			ն			նու	nu	U+0546: ARMENIAN CAPITAL LETTER NOW	✓
																	
լ	Ll	l	l		l	l	l	lowercase approximant				Լ	30	լյուն	ljun/lʏn	U+056C: ARMENIAN SMALL LETTER LIWN	✓
Լ	Lu	L	L		L	ḷ	L	uppercase approximant			լ			լյուն	ljun/lʏn	U+053C: ARMENIAN CAPITAL LETTER LIWN	✓
ր	Ll	ɾ	r’	r’	r	r	r	lowercase approximant				Ր	5000	րե	ɾɛ	U+0580: ARMENIAN SMALL LETTER REH	✓
Ր	Lu	ɾ	R’		R	ṛ	R	uppercase approximant			ր			րե	ɾɛ	U+0550: ARMENIAN CAPITAL LETTER REH	✓
ռ	Ll	r	r	ɾ	r	ṙ	-	lowercase approximant				Ռ	1000	ռա	rɑ/ɾɑ	U+057C: ARMENIAN SMALL LETTER RA	✓
Ռ	Lu	R	R		R	ṛ̇	_	uppercase approximant			ռ			ռա	rɑ/ɾɑ	U+054C: ARMENIAN CAPITAL LETTER RA	✓
ղ	Ll	ʁ	ṙ	ʁ ṙ	r	ʁ	.	lowercase approximant				Ղ	90	ղատ	ʁɑt/ʁɑd	U+0572: ARMENIAN SMALL LETTER GHAD	✓
Ղ	Lu	ʁ	Ṙ		R	ʁ̣	>	uppercase approximant			ղ			ղատ	ʁɑt/ʁɑd	U+0542: ARMENIAN CAPITAL LETTER GHAD	✓
յ	Ll	h j	j		y	y	3	lowercase approximant				Յ	300	հի	ji/hi	U+0575: ARMENIAN SMALL LETTER YI	✓
Յ	Lu	H J	J		Y	ỵ	#	uppercase approximant			յ			հի	ji/hi	U+0545: ARMENIAN CAPITAL LETTER YI	✓
																	
																	
																	
																	
																	
ա	Ll	ɑ	a	ɑ	a	a	a	lowercase vowel				Ա	1	այբ	ajb/ajpʰ	U+0561: ARMENIAN SMALL LETTER AYB	✓
Ա	Lu	Ɑ	A		A	ạ	A	uppercase vowel			ա			այբ	ajb/ajpʰ	U+0531: ARMENIAN CAPITAL LETTER AYB	✓
ե	Ll	ɛ jɛ	e		e	e		lowercase vowel				Ե	5	եչ	jɛtʃʰ	U+0565: ARMENIAN SMALL LETTER ECH	✓
Ե	Lu	Ɛ JƐ	E		E	ẹ		uppercase vowel			ե			եչ	jɛtʃʰ	U+0535: ARMENIAN CAPITAL LETTER ECH	✓
է	Ll	ɛ	ē	ɛ ē	e	ɛ	e	lowercase vowel				Է	7	է	ɛ	U+0567: ARMENIAN SMALL LETTER EH	✓
Է	Lu	Ɛ	Ē		E	ɛ̣	E	uppercase vowel			է			է	ɛ	U+0537: ARMENIAN CAPITAL LETTER EH	✓
ը	Ll	ə	ë	ə ë	e	ə	u	lowercase vowel				Ը	8	ըթ	ətʰ	U+0568: ARMENIAN SMALL LETTER ET	✓
Ը	Lu	Ə	Ë		E	ə̣	U	uppercase vowel			ը			ըթ	ətʰ	U+0538: ARMENIAN CAPITAL LETTER ET	✓
ի	Ll	i	i	ə	i	i	i	lowercase vowel				Ի	20	ինի	ini	U+056B: ARMENIAN SMALL LETTER INI	✓
Ի	Lu	I	I		I	ị	I	uppercase vowel			ի			ինի	ini	U+053B: ARMENIAN CAPITAL LETTER INI	✓
ո	Ll	ɔ ʋɔ	o	ɔ ʋɔ	o	ɔ	o	lowercase vowel				Ո	600	ո	ʋɔ	U+0578: ARMENIAN SMALL LETTER VO	✓
Ո	Lu	Ɔ ƲƆ	O		O	ɔ̣	O	uppercase vowel			ո			ո	ʋɔ	U+0548: ARMENIAN CAPITAL LETTER VO	✓
և	Ll	ev jev	ew		e	eʷ	&	lowercase vowel						և	jev	U+0587: ARMENIAN SMALL LIGATURE ECH YIWN	✓
օ	Ll	o	o		o	o	0	lowercase vowel	infrequent			Օ		օ	o	U+0585: ARMENIAN SMALL LETTER OH	✓
Օ	Lu	O	O		O	ọ	)	uppercase vowel	infrequent		օ			օ	o	U+0555: ARMENIAN CAPITAL LETTER OH	✓
																	
																	
																	
																	
																	
ու		u	u		u	ɔw		ligated form								U+0578 U+0582: ARMENIAN SMALL LETTER VO, SMALL LETTER YIWN	
Ու		u	u		u	ɔ̣w		ligated form								U+0548 U+0582: ARMENIAN CAPITAL LETTER VO, SMALL LETTER YIWN	
ՈՒ		u	u		u	ɔ̣ẉ		ligated form								U+0548 U+0552: ARMENIAN CAPITAL LETTER VO, CAPITAL LETTER YIWN	
մն		mn	mn		m	mn		ligated form								U+0574 U+0576: ARMENIAN SMALL LETTER MEN,  SMALL LETTER NOW	
մե		me	me		m	me		ligated form								U+0574 U+0565: ARMENIAN SMALL LETTER MEN,  SMALL LETTER ECH	
մի		mi	mi		m	mi		ligated form								U+0574 U+056B: ARMENIAN SMALL LETTER MEN,  SMALL LETTER INI	
վն		vn	vn		v	vn		ligated form								U+057E U+0576: ARMENIAN SMALL LETTER VEW,  SMALL LETTER NOW	
մխ		mx	mx		m	mx		ligated form								U+0574 U+056D: ARMENIAN SMALL LETTER MEN,  SMALL LETTER XEH	
ﬓ	Ll	mn	mn			mⁿ		ligature	deprecated	մն						U+FB13: ARMENIAN SMALL LIGATURE MEN NOW	✓
ﬔ	Ll	me	me			mᵉ		ligature	deprecated	մե						U+FB14: ARMENIAN SMALL LIGATURE MEN ECH	✓
ﬕ	Ll	mi	mi			mⁱ		ligature	deprecated	մի						U+FB15: ARMENIAN SMALL LIGATURE MEN INI	✓
ﬖ	Ll	vn	vn			vⁿ		ligature	deprecated	վն						U+FB16: ARMENIAN SMALL LIGATURE VEW NOW	✓
ﬗ	Ll	mx	mx			mˣ		ligature	deprecated	մխ						U+FB17: ARMENIAN SMALL LIGATURE MEN XEH	✓
																	
																	
																	
ՙ	Lm				[	ʿ		mistaken encoding	Do not use.							U+0559: ARMENIAN MODIFIER LETTER LEFT HALF RING	✓
՚	Po				[	′	\	apostrophe	deprecated						apat'arts	U+055A: ARMENIAN APOSTROPHE	✓
																	
																	
֍	So							symbol	infrequent							U+058D: RIGHT-FACING ARMENIAN ETERNITY SIGN	✓
֎	So							symbol	infrequent							U+058E: LEFT-FACING ARMENIAN ETERNITY SIGN	✓
֏	Sc				#	"	¤"		currency symbol	infrequent						dram	U+058F: ARMENIAN DRAM SIGN	✓
																	
																	
																	
																	
																	
՛	Po		!		!	ⸯ	4	emphasis mark							shesht	U+055B: ARMENIAN EMPHASIS MARK	✓
★	So															U+2605: BLACK STAR	
																	
																	
																	
՟	Po				+	¨		abbreviation mark	archaic, obsolete						pativ	U+055F: ARMENIAN ABBREVIATION MARK	✓
																	
																	
֊	Pd		-		-	-		soft hyphen							miowt‛jan_gic	U+058A: ARMENIAN HYPHEN	✓
։	Po		.		.	.	1	full stop							verǰakēt	U+0589: ARMENIAN FULL STOP	✓
,	Po		,		,	,	5	comma							storaket	U+002C: COMMA	
.	Po		.		.	.	7	full stop								U+002E: FULL STOP	
․	Po		:		:	:		colon							mijaket	U+2024: ONE DOT LEADER	
՝	Po		;		;	;		(semi) colon							bowt’	U+055D: ARMENIAN COMMA	✓
՜	Po		!		!	!		exclamation mark							yerkaratsman nshan	U+055C: ARMENIAN EXCLAMATION MARK	✓
՞	Po		?		?	?	|	question mark							hartsakan nshan	U+055E: ARMENIAN QUESTION MARK	✓
																	
																	
…	Po		…		.	…	!	ellipsis								U+2026: HORIZONTAL ELLIPSIS	
																	
																	
																	
«	Pi		“		<	«	8	quotation mark								U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
»	Pf		”		>	»	9	quotation mark								U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	Pi		‘		<	‹		quotation mark								U+2018: LEFT SINGLE QUOTATION MARK	
›	Pf		’		>	›		quotation mark								U+2019: RIGHT SINGLE QUOTATION MARK	
“	Pi		“		<	 “		quotation mark								U+201C: LEFT DOUBLE QUOTATION MARK	
”	Pf		”		>	”		quotation mark								U+201D: RIGHT DOUBLE QUOTATION MARK	
‘	Pi		‘		<	‘		quotation mark								U+2018: LEFT SINGLE QUOTATION MARK	
’	Pf		’		>	’		quotation mark								U+2019: RIGHT SINGLE QUOTATION MARK	
																	
																	
																	
(	Ps		(		(	(	*	parenthesis								U+0028: LEFT PARENTHESIS	
[	Ps		[		(	[		bracket								U+005B: LEFT SQUARE BRACKET	
)	Pe		)		)	)	(	parenthesis								U+0029: RIGHT PARENTHESIS	
]	Pe		]		)	]		bracket								U+005D: RIGHT SQUARE BRACKET	
																	
																	
-			-		-	-	6	hyphen								U+2010: HYPHEN	
‑	Pd		‑		-	‑		non-breaking hyphen								U+2011: NON-BREAKING HYPHEN	
–	Pd		–		-	–	%	en dash								U+2013: EN DASH	
—	Pd		—		-	—	^	em dash								U+2014: EM DASH	
																	
																	
																	
ʼ	Lm		ʼ			ʼ		apostrophe								U+02BC: MODIFIER LETTER APOSTROPHE	
§	Po		§			§		section sign								U+00A7: SECTION SIGN	
†	Po		†			†		dagger								U+2020: DAGGER	
‡	Po		‡			‡		double dagger								U+2021: DOUBLE DAGGER	
′	Po		′			′		prime								U+2032: PRIME	
″	Po		″			″		double prime								U+2033: DOUBLE PRIME	
																	
																	
																	
																	
																	
																	
\u200C	Cf				=	ₓ		zwnj								U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf				=	₊		zwj								U+200D: ZERO WIDTH JOINER	
																	
																	
																	
֏	Sc		¤		#	¤		currency symbol								U+058F: ARMENIAN DRAM SIGN	
																	
																	
%	Po				%	%		percentage mark								U+0025: PERCENT SIGN	
‰	Po				%	‰		per mille mark								U+2030: PER MILLE SIGN	



`



latinPanel = 'ɑ d͡ʒ dž d͡z ɛ ē ə ë kʰ k’ ŋ ɔ pʰ p’ r’ ɾ ʁ ṙ ʃ š tʰ t’ t͡ʃ tš t͡ʃʰ tš’ t͡s t͡sʰ ts’ ʋɔ ʒ ž'



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,
"equiv": 9,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":11,
"uc":12,
"meaning":0,
"shape": 0,
"numLoc": 13,
"nnameLoc": 14,
"nameLoc": 15,
"ucsName": 16,
"block": 17,
"transckey": 5,

"othertranscriptions": [[3, 'ISO 9985']]
}




