var spreadsheet = `
প	p	p	ɔ o	p	p	h	Lo		consonant						pɔ	U+09AA: BENGALI LETTER PA	p	✓
ফ	P	PF Pʰ F	ɔ o	PH	pʰ	H	Lo		consonant						phɔ	U+09AB: BENGALI LETTER PHA	PH	✓
ব	b	b ∅-	ɔ o	b	b	y	Lo		consonant						bɔ	U+09AC: BENGALI LETTER BA	b v	✓
ভ	B	Bʰ v	ɔ o	BH	bʰ	Y	Lo		consonant						bhɔ	U+09AD: BENGALI LETTER BHA		✓
ত	t¶	t	ɔ o	t	t	l	Lo		consonant						tɔ	U+09A4: BENGALI LETTER TA	t	✓
থ	T	Tʰ	ɔ o	TH	tʰ	L	Lo		consonant						thɔ	U+09A5: BENGALI LETTER THA	TH	✓
দ	d¶	d	ɔ o	d	d	o	Lo		consonant						dɔ	U+09A6: BENGALI LETTER DA	d	✓
ধ	D	Dʰ	ɔ o	DH	dʰ	O	Lo		consonant						dhɔ	U+09A7: BENGALI LETTER DHA	DH	✓
ট	t	ʈ	ɔ o	ṭ	ʈ	'	Lo		consonant						ʈɔ	U+099F: BENGALI LETTER TTA	ʈ	✓
ঠ	T	Ʈʰ	ɔ o	ṬH	ʈʰ	"	Lo		consonant						ʈhɔ	U+09A0: BENGALI LETTER TTHA	ƮH	✓
ড	d	ɖ	ɔ o	ḍ	ɖ	[	Lo		consonant						ɖɔ	U+09A1: BENGALI LETTER DDA	ɖ	✓
ঢ	D	Ɖʰ	ɔ o	ḌH	ɖʰ	{	Lo		consonant						ɖhɔ	U+09A2: BENGALI LETTER DDHA	ƉH	✓
ক	k	k	ɔ o	k	k	k	Lo		consonant						kɔ	U+0995: BENGALI LETTER KA	k	✓
খ	K	Kʰ	ɔ o	KH	kʰ	K	Lo		consonant						khɔ	U+0996: BENGALI LETTER KHA	KH	✓
গ	g	g	ɔ o	g	g	i	Lo		consonant						gɔ	U+0997: BENGALI LETTER GA	g	✓
ঘ	G	Gʰ	ɔ o	GH	gʰ	I	Lo		consonant						ghɔ	U+0998: BENGALI LETTER GHA	GH	✓
																		
চ	c	t͡ʃ	ɔ o	c	c	;	Lo		consonant						cɔ	U+099A: BENGALI LETTER CA	c	✓
ছ	C	T͡ʃʰ	ɔ o	CH	cʰ	:	Lo		consonant						chɔ	U+099B: BENGALI LETTER CHA	C	✓
জ	d	d͡ʒ z	ɔ o	j	ʤ	p	Lo		consonant					বর্গীয় জ	bôr͟gīyô jɔ	U+099C: BENGALI LETTER JA	j	✓
য	y	ʤ- -æ	ɔ o	y	ʲ	/	Lo		consonant					অন্তঃস্থ য	ɔntɔɦstʰo y̌ɔ	U+09AF: BENGALI LETTER YA	y y̌ yæ	✓
ঝ	D	D͡ʒʰ	ɔ o	JH	ʤʰ	P	Lo		consonant						jhɔ	U+099D: BENGALI LETTER JHA	JH	✓
																		
স	s¶	ʃ s	ɔ o	s	ʃ̈	m	Lo		consonant					দন্ত্য স	dɔntyô sɔ	U+09B8: BENGALI LETTER SA	s	✓
শ	s	ʃ s	ɔ o	ś	ʃ	M	Lo		consonant					তালব্য শ	tɑlobbo ʃɔ	U+09B6: BENGALI LETTER SHA	ʃ	✓
ষ	s	ʃ	ɔ o	ṣ	ʃ̇	,	Lo		consonant					মূর্ধন্য ষ	mūrdhnyô ʂɔ	U+09B7: BENGALI LETTER SSA	ʂ	✓
হ	h	h	ɔ o	h	h	u	Lo		consonant						hɔ	U+09B9: BENGALI LETTER HA	h	✓
																		
ম	m	m	ɔ o	m	m	c	Lo		consonant						mɔ	U+09AE: BENGALI LETTER MA	m	✓
ন	n¶	n	ɔ o	n	n	v	Lo		consonant					দন্ত্য ন	dɔntyô nɔ	U+09A8: BENGALI LETTER NA	n	✓
ঙ	N	ŋ ŋɡ	ɔ o	ṅ	ŋ	U	Lo		consonant						uŋɔ	U+0999: BENGALI LETTER NGA	ŋ	✓
ঞ	n	n	ɔ o	ñ	ñ	}	Lo		consonant						niyô/iyô	U+099E: BENGALI LETTER NYA	ñ	✓
ণ	n	n	ɔ o	ṇ	n̈	C	Lo		consonant					মূর্ধন্য ণ	mūrdhônyô ɳɔ	U+09A3: BENGALI LETTER NNA	ɳ	✓
																		
ৱ	v	w β	ɔ o	v	v		Lo		assamese consonant						wɔβo	U+09F1: BENGALI LETTER RA WITH LOWER DIAGONAL		✓
র	r	r ɾ	ɔ o	r	r	j	Lo		consonant						rɔ	U+09B0: BENGALI LETTER RA	r	✓
ৰ	r	ɹ	ɔ o	r	ɹ		Lo		assamese consonant						rɔ	U+09F0: BENGALI LETTER RA WITH MIDDLE DIAGONAL		✓
ল	l	l	ɔ o	l	l	n	Lo		consonant						lɔ	U+09B2: BENGALI LETTER LA	l	✓
																		
																		
\u09DC	r	ɽ	ɔ o	ɽ	ɽ		Lo		precomposed consonant				ড়		ɽɔ	U+09DC: BENGALI LETTER RRA		
\u09DD	r	ɽʱ	ɔ o	ɽ	ɽ̇		Lo		precomposed consonant				ঢ়		ɽhɔ	U+09DD: BENGALI LETTER RHA		
\u09DF	y	j e̯	ɔ o	ẏ	ẏ		Lo		precomposed consonant				য়	অন্তঃস্থ য়	ɔntɔɦstʰo ɔ	U+09DF: BENGALI LETTER YYA		
																		
																		
ৎ	t	-t		ṯ	t̽		Lo		consonant					খণ্ড ত্‌	khɔɳɖȏ tɔ	U+09CE: BENGALI LETTER KHANDA TA	ṯ	✓
ঁ	m	~		ṃ	m̽	X	Mn​		vowel nasalisation marker					চন্দ্রবিন্দু	t͡ʃɔndrobindu	U+0981: BENGALI SIGN CANDRABINDU​		✓
ং	N	-ŋ		ṁ	ŋ̽	x	Mc​		final nasal					অনুস্বার/অনুস্বর	ɔnuʃbɑr/ɔnuʃbor	U+0982: BENGALI SIGN ANUSVARA​	ɱ	✓
ঃ	h	-ɦ		ḥ	h̽	-	Mc​		final consonant/consonant lengthener					বিসর্গ	biʃɔrɡo	U+0983: BENGALI SIGN VISARGA​	ḥ	✓
																		
																		
ি	i	i e		i	i	f	Mc​		vowel sign			ই			hrɔsvô i	U+09BF: BENGALI VOWEL SIGN I​	i	✓
ী	i	i		ī	ī	r	Mc​		vowel sign			ঈ			dīrghô ī	U+09C0: BENGALI VOWEL SIGN II​	ī	✓
ু	u	u		u	u	g	Mn​		vowel sign			উ			hrɔsvô u	U+09C1: BENGALI VOWEL SIGN U​	u	✓
ূ	u	u		ū	ū	t	Mn​		vowel sign			ঊ			dīrghô ū	U+09C2: BENGALI VOWEL SIGN UU​	ū	✓
ে	e	e æ		e	e	s	Mc​		vowel sign			এ			e-kar	U+09C7: BENGALI VOWEL SIGN E​	e æ	✓
ো	o	o ʊ ɔ		o	o	a	Mc​		vowel sign			ও			o-kar	U+09CB: BENGALI VOWEL SIGN O​	o ô	✓
া	a	a æ		ā	ɑ	e	Mc​		vowel sign			আ			a-kar	U+09BE: BENGALI VOWEL SIGN AA​	a	✓
																		
ৈ	o	oi̯		ai	oʲ	w	Mc​		vowel sign			ঐ			oǐ-kar	U+09C8: BENGALI VOWEL SIGN AI​	oĭ	✓
ৌ	o	ou̯		au	oʷ	q	Mc​		vowel sign			ঔ			oǔ-kar	U+09CC: BENGALI VOWEL SIGN AU​	oŭ	✓
																		
																		
ই	I	I I̯		I	ị	F	Lo		independent vowel		ি			হ্রস্ব ই	hrɔʃʃo i	U+0987: BENGALI LETTER I	I	✓
ঈ	I	I Iː		Ī	ị̄	R	Lo		independent vowel		ী			দীর্ঘ ঈ	dīrghô ī	U+0988: BENGALI LETTER II	Ī	✓
উ	U	U U̯		U	ụ	G	Lo		independent vowel		ু			হ্রস্ব উ	hrɔʃʃo u	U+0989: BENGALI LETTER U	U	✓
ঊ	U	U		Ū	ụ̄	T	Lo		independent vowel		ূ			দীর্ঘ ঊ	dīrghô ū	U+098A: BENGALI LETTER UU	Ū	✓
এ	E	E Æ		E	ẹ	S	Lo		independent vowel		ে				e-kar	U+098F: BENGALI LETTER E	Æ E	✓
ও	O	O O̯		O	ọ	A	Lo		independent vowel		ো				o-kar	U+0993: BENGALI LETTER O	O	✓
অ	O	Ɔ		A	ɔ̣	D	Lo		independent vowel						ɔ-kar	U+0985: BENGALI LETTER A	Ô Ɔ	✓
আ	A	A		Ā	ɑ̣	E	Lo		independent vowel		া				a-kar	U+0986: BENGALI LETTER AA	Ā	✓
																		
ঐ	O	OI̯		AI	ọʲ	W	Lo		independent vowel		ৈ				oǐ-kar	U+0990: BENGALI LETTER AI	OĬ	✓
ঔ	O	OU̯		AU	ọʷ	Q	Lo		independent vowel		ৌ				oǔ-kar	U+0994: BENGALI LETTER AU	OŬ	✓
																		
																		
ৃ	R	RI		R̥	r̥	=	Mn​		vocalic vowel sign			ঋ				U+09C3: BENGALI VOWEL SIGN VOCALIC R​	ṛ	✓
ৄ	R			R̥̄	r̥̄		Mn​	a	vocalic vowel sign	archaic		ৠ				U+09C4: BENGALI VOWEL SIGN VOCALIC RR​		✓
ঋ	R	RI		R̥	r̥̣	+	Lo		independent vocalic		ৃ					U+098B: BENGALI LETTER VOCALIC R	Ṛ	✓
ৠ	R				r̥̣̄		Lo	a	independent vocalic	archaic	ৄ					U+09E0: BENGALI LETTER VOCALIC RR		✓
ৢ	L	LI		L̥	l̥		Mn​	a	vocalic vowel sign	archaic		ঌ				U+09E2: BENGALI VOWEL SIGN VOCALIC L​		✓
ৣ	L			L̥̄	l̥̄		Mn​	a	vocalic vowel sign	archaic		ৡ				U+09E3: BENGALI VOWEL SIGN VOCALIC LL​		✓
ঌ	L	LI		L̥	l̥̣		Lo	a	independent vocalic	archaic	ৢ					U+098C: BENGALI LETTER VOCALIC L		✓
ৡ	L				l̥̣̄		Lo	a	independent vocalic	archaic	ৣ					U+09E1: BENGALI LETTER VOCALIC LL		✓
																		
																		
																		
																		
																		
																		
০	0	•		0	0	0	Nd		digit						sɪfar	U+09E6: BENGALI DIGIT ZERO		✓
১	1	•		1	1	1	Nd		digit						æk	U+09E7: BENGALI DIGIT ONE		✓
২	2	•		2	2	2	Nd		digit						dui	U+09E8: BENGALI DIGIT TWO		✓
৩	3	•		3	3	3	Nd		digit						tin	U+09E9: BENGALI DIGIT THREE		✓
৪	4	•		4	4	4	Nd		digit						car	U+09EA: BENGALI DIGIT FOUR		✓
৫	5	•		5	5	5	Nd		digit						pãc	U+09EB: BENGALI DIGIT FIVE		✓
৬	6	•		6	6	6	Nd		digit						chɔy	U+09EC: BENGALI DIGIT SIX		✓
৭	7	•		7	7	7	Nd		digit						sat	U+09ED: BENGALI DIGIT SEVEN		✓
৮	8	•		8	8	8	Nd		digit						aʈ	U+09EE: BENGALI DIGIT EIGHT		✓
৯	9	•		9	9	9	Nd		digit						nɔy	U+09EF: BENGALI DIGIT NINE		✓
																		
																		
৺							So		death symbol							U+09FA: BENGALI ISSHAR		✓
৳							Sc								৲	U+09F3: BENGALI RUPEE SIGN		✓
৲							Sc								৳	U+09F2: BENGALI RUPEE MARK		✓
ঽ				'			Lo									U+09BD: BENGALI SIGN AVAGRAHA		✓
ৗ	:				ː	:	Mc​	d	length mark	deprecated						U+09D7: BENGALI AU LENGTH MARK​		✓
																		
৴							No									U+09F4: BENGALI CURRENCY NUMERATOR ONE		✓
৵							No									U+09F5: BENGALI CURRENCY NUMERATOR TWO		✓
৶							No									U+09F6: BENGALI CURRENCY NUMERATOR THREE		✓
৷							No									U+09F7: BENGALI CURRENCY NUMERATOR FOUR		✓
৸							No									U+09F8: BENGALI CURRENCY NUMERATOR ONE LESS THAN THE DENOMINATOR		✓
৹							No									U+09F9: BENGALI CURRENCY DENOMINATOR SIXTEEN		✓
																		
																		
																		
়	[				ˑ	]	Mn​		consonant extender						nukta	U+09BC: BENGALI SIGN NUKTA​		✓
্	§				͞	d	Mn​		virama					হসন্ত	hɔʃonto	U+09CD: BENGALI SIGN VIRAMA​		✓
																		
																		
																		
।	.			.	.	.	Po		danda							U+0964: DEVANAGARI DANDA	.	✓
॥	¶				¶	¶	Po		double danda							U+0965: DEVANAGARI DOUBLE DANDA		✓
৽							Po		abbreviation marker							U+09FD: BENGALI ABBREVIATION SIGN		✓
«	"				“	"	Pi		quotation mark							U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK		✓
»	"				”	"	Pf		quotation mark							U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK		✓
																		
																		
																		
																		
																		
																		
\u200C					ₓ		Cf		zero-width non-joiner							U+200C: ZERO WIDTH NON-JOINER		
\u200D					₊		Cf		zero-width joiner							U+200D: ZERO WIDTH JOINER		
\u2067					ʳˡⁱ		Cf		rtl isolate							U+2067: RIGHT-TO-LEFT ISOLATE		
\u2066					ˡʳⁱ		Cf		ltr isolate							U+2066: LEFT-TO-RIGHT ISOLATE		
\u2068					ᶠˢⁱ		Cf		first-strong isolate							U+2068: FIRST STRONG ISOLATE		
\u2069					ᵖᵈⁱ		Cf		pop direction isolate							U+2069: POP DIRECTIONAL ISOLATE		
\u202B					ʳˡᵉ		Cf		rtl embed							U+202B: RIGHT-TO-LEFT EMBEDDING		
\u202A					ˡʳᵉ		Cf		ltr embed							U+202A: LEFT-TO-RIGHT EMBEDDING		
\u202C					ᵖᵈᶠ		Cf		pop direction							U+202C: POP DIRECTIONAL FORMATTING		
\u200F					ʳˡᵐ		Cf		rtl mark							U+200F: RIGHT-TO-LEFT MARK		
\u200E					ˡʳᵐ		Cf		ltr mark							U+200E: LEFT-TO-RIGHT MARK		
\u034F					ᶜᵍʲ		Mn		combining grapheme joiner							U+034F: COMBINING GRAPHEME JOINER​		
\u061C					ᵃˡᵐ		Cf		arabic letter mark							U+061C: ARABIC LETTER MARK		
																		
																		
“							Pi		quotation mark							U+201C: LEFT DOUBLE QUOTATION MARK		✓
”							Pf		quotation mark							U+201D: RIGHT DOUBLE QUOTATION MARK		✓
‘							Pi		quotation mark							U+2018: LEFT SINGLE QUOTATION MARK		✓
’							Pf		quotation mark							U+2019: RIGHT SINGLE QUOTATION MARK		✓
ʼ							Lm		apostrophe							U+02BC: MODIFIER LETTER APOSTROPHE		✓
,							Po		comma							U+002C: COMMA		✓
;							Po		semicolon							U+003B: SEMICOLON		✓
:							Po		colon							U+003A: COLON		✓
.							Po		full stop							U+002E: FULL STOP		✓
?							Po		question mark							U+003F: QUESTION MARK		✓
!							Po		exclamation mark							U+0021: EXCLAMATION MARK		✓
(							Ps		parenthesis							U+0028: LEFT PARENTHESIS		✓
)							Pe		parenthesis							U+0029: RIGHT PARENTHESIS		✓
…							Po		ellipsis							U+2026: HORIZONTAL ELLIPSIS		✓
–							Pd		en dash							U+2013: EN DASH		✓
—							Pd		em dash							U+2014: EM DASH		✓
																		
§							Po		section sign							U+00A7: SECTION SIGN		✓
†							Po		dagger							U+2020: DAGGER		✓
‡							Po		double dagger							U+2021: DOUBLE DAGGER		✓
′							Po		prime							U+2032: PRIME		✓
″							Po		double prime							U+2033: DOUBLE PRIME		✓
																		
																		
ড়	r	ɽ		ɽ	ɖˑ	r	s		consonant+nukta							U+09A1 U+09BC: BENGALI LETTER DDA, SIGN NUKTA	ɽ	
ঢ়	r	ɽʱ		ɽ	ɖʰˑ	r	s		consonant+nukta							U+09A2 U+09BC: BENGALI LETTER DDHA, SIGN NUKTA	ⱤH	
য়	y	j e̯		ẏ	ʲˑ	?	s		consonant+nukta							U+09AF U+09BC: BENGALI LETTER YA, SIGN NUKTA	y	
্য	Y	a			͓ʲ		s		conjunct							U+09CD U+09AF: BENGALI SIGN VIRAMA​, LETTER YA		
																		
্র					͓r	#	s									U+09CD U+09B0: BENGALI SIGN VIRAMA, LETTER RA​		
র্					r͓	$	s									U+09B0 U+09CD: BENGALI LETTER RA, SIGN VIRAMA		
ত্র		tr			t͓r	^	s									U+09A4 U+09CD U+09B0: BENGALI LETTER TA, SIGN VIRAMA, LETTER RA		
																		
্যা					͓ʲɑ		s										æ yæ	
																		
																		
ত্ব		tt			t͓b		s		conjunct							U+09A4 U+09CD U+09AC: BENGALI LETTER TA, SIGN VIRAMA, LETTER BA		
থ্ব		ttʰ			tʰ͓b		s		conjunct							U+09A5 U+09CD U+09AC: BENGALI LETTER THA, SIGN VIRAMA, LETTER BA		
ত্ম		tt			t͓m		s		conjunct							U+09A4 U+09CD U+09AE: BENGALI LETTER TA, SIGN VIRAMA, LETTER MA		
ত্ম্য		tt			t͓m͓ʲ		s		conjunct							U+09A4 U+09CD U+09AE U+09CD U+09AF: BENGALI LETTER TA, SIGN VIRAMA, LETTER MA, SIGN VIRAMA, LETTER YA		
দ্ব		dd			d͓b		s		conjunct							U+09A6 U+09CD U+09AC: BENGALI LETTER DA, SIGN VIRAMA, LETTER BA		
দ্ব্য		dd			d͓b͓ʲ		s		conjunct							U+09A6 U+09CD U+09AC U+09CD U+09AF: BENGALI LETTER DA, SIGN VIRAMA, LETTER BA, SIGN VIRAMA, LETTER YA		
দ্ম		dd			d͓m		s		conjunct							U+09A6 U+09CD U+09AE: BENGALI LETTER DA, SIGN VIRAMA, LETTER MA		
ধ্ব		ddʰ			dʰ͓b		s		conjunct							U+09A7 U+09CD U+09AC: BENGALI LETTER DHA, SIGN VIRAMA, LETTER BA		
ক্ষ	k	kʰ kːʰ			k͓ʃ̇	&	s		conjunct							U+0995 U+09CD U+09B7: BENGALI LETTER KA, SIGN VIRAMA​,  LETTER SSA		
ক্ষ্য		kkʰ			k͓ʃ͓̇ʲ		s		conjunct							U+0995 U+09CD U+09B7 U+09CD U+09AF: BENGALI LETTER KA, SIGN VIRAMA, LETTER SSA, SIGN VIRAMA, LETTER YA		
ক্ষ্ম		kkʰ			k͓ʃ͓̇m		s		conjunct							U+0995 U+09CD U+09B7 U+09CD U+09AE: BENGALI LETTER KA, SIGN VIRAMA, LETTER SSA, SIGN VIRAMA, LETTER MA		
ক্ষ্ন		kkʰn			k͓ʃ͓̇n		s		conjunct							U+0995 U+09CD U+09B7 U+09CD U+09A8: BENGALI LETTER KA, SIGN VIRAMA, LETTER SSA, SIGN VIRAMA, LETTER NA		
চ্ছ্ব		ccʰ			c͓cʰ͓b		s		conjunct							U+099A U+09CD U+099B U+09CD U+09AC: BENGALI LETTER CA, SIGN VIRAMA, LETTER CHA, SIGN VIRAMA, LETTER BA		
জ্জ্ব		jj			ʤ͓ʤ͓b		s		conjunct							U+099C U+09CD U+099C U+09CD U+09AC: BENGALI LETTER JA, SIGN VIRAMA, LETTER JA, SIGN VIRAMA, LETTER BA		
জ্ঞ		ɡ ɡɡ			ʤ͓ñ	%	s		conjunct							U+099C U+09CD U+099E: BENGALI LETTER JA, SIGN VIRAMA, LETTER NYA		
শ্ব		ʃʃ			ʃ͓b		s		conjunct							U+09B6 U+09CD U+09AC: BENGALI LETTER SHA, SIGN VIRAMA, LETTER BA		
শ্ম		ʃʃ			ʃ͓m		s		conjunct							U+09B6 U+09CD U+09AE: BENGALI LETTER SHA, SIGN VIRAMA, LETTER MA		
শ্র		sr			ʃ͓r	*	s		conjunct							U+09B6 U+09CD U+09B0: BENGALI LETTER SHA, SIGN VIRAMA, LETTER RA		
ষ্ম		ʃʃ			ʃ͓̇m		s		conjunct							U+09B7 U+09CD U+09AE: BENGALI LETTER SSA, SIGN VIRAMA, LETTER MA		
স্ত		st			ʃ͓̈t		s		conjunct							U+09B8 U+09CD U+09A4: BENGALI LETTER SA, SIGN VIRAMA, LETTER TA		
স্ত্য		stt			ʃ͓̈t͓ʲ		s		conjunct							U+09B8 U+09CD U+09A4 U+09CD U+09AF: BENGALI LETTER SA, SIGN VIRAMA, LETTER TA, SIGN VIRAMA, LETTER YA		
স্ত্র		str			ʃ͓̈t͓r		s		conjunct							U+09B8 U+09CD U+09A4 U+09CD U+09B0: BENGALI LETTER SA, SIGN VIRAMA, LETTER TA, SIGN VIRAMA, LETTER RA		
স্থ		stʰ			ʃ͓̈tʰ		s		conjunct							U+09B8 U+09CD U+09A5: BENGALI LETTER SA, SIGN VIRAMA, LETTER THA		
স্ন		sn			ʃ͓̈n		s		conjunct							U+09B8 U+09CD U+09A8: BENGALI LETTER SA, SIGN VIRAMA, LETTER NA		
স্ম		ʃʃ			ʃ͓̈m		s		conjunct							U+09B8 U+09CD U+09AE: BENGALI LETTER SA, SIGN VIRAMA, LETTER MA		
স্মৃ		sri			ʃ͓̈mr̥		s		conjunct							U+09B8 U+09CD U+09AE U+09C3: BENGALI LETTER SA, SIGN VIRAMA, LETTER MA, VOWEL SIGN VOCALIC R		
ম্ব		mm mb			m͓b		s		conjunct							U+09AE U+09CD U+09AC: BENGALI LETTER MA, SIGN VIRAMA, LETTER BA		
হ্ব		bʱ			h͓b		s		conjunct							U+09B9 U+09CD U+09AC: BENGALI LETTER HA, SIGN VIRAMA, LETTER BA		
হ্ম		mʱ mm			h͓m		s		conjunct							U+09B9 U+09CD U+09AE: BENGALI LETTER HA, SIGN VIRAMA, LETTER MA		
হ্ন		nʱ nn			h͓n		s		conjunct							U+09B9 U+09CD U+09A8: BENGALI LETTER HA, SIGN VIRAMA, LETTER NA		
হ্ণ		nʱ nn			h͓n̈		s		conjunct							U+09B9 U+09CD U+09A3: BENGALI LETTER HA, SIGN VIRAMA, LETTER NNA		
ল্ম		ll			l͓m		s		conjunct							U+09B2 U+09CD U+09AE: BENGALI LETTER LA, SIGN VIRAMA, LETTER MA		
হ্য		jj			h͓ʲ		s		conjunct							U+09B9 U+09CD U+09AF: BENGALI LETTER HA, SIGN VIRAMA, LETTER YA		
																		
এ্যা		æ			ẹ͓ʲɑ		s		conjunct							U+098F U+09CD U+09AF U+09BE: BENGALI LETTER E, SIGN VIRAMA, LETTER YA, VOWEL SIGN AA		
অ্যা		æ			ɔ̣͓ʲɑ		s		conjunct							U+0985 U+09CD U+09AF U+09BE: BENGALI LETTER A, SIGN VIRAMA, LETTER YA, VOWEL SIGN AA		



`


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

"nnameLoc": 14,
"nameLoc": 15,
"ucsName": 16,
"radice": 17,
"block": 18,

"othertranscriptions": [[4, 'ISO 15919']]
}


