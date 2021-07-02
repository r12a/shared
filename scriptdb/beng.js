var spreadsheet = `
প		p	p	p	p	h		consonant						pɔ	U+09AA: BENGALI LETTER PA	bengali
ফ		PF Pʰ F	pʰ	P	PH	H	pʰ	consonant						phɔ	U+09AB: BENGALI LETTER PHA	bengali
ব		b ∅-	b	b	b	y	∅	consonant						bɔ	U+09AC: BENGALI LETTER BA	bengali
ভ		Bʰ v	bʰ	B	BH	Y	bʰ	consonant						bhɔ	U+09AD: BENGALI LETTER BHA	bengali
ত		t	t	t¶	t	l		consonant						tɔ	U+09A4: BENGALI LETTER TA	bengali
থ		Tʰ	tʰ	T	TH	L	tʰ	consonant						thɔ	U+09A5: BENGALI LETTER THA	bengali
দ		d	d	d¶	d	o		consonant						dɔ	U+09A6: BENGALI LETTER DA	bengali
ধ		Dʰ	dʰ	D	DH	O	dʰ	consonant						dhɔ	U+09A7: BENGALI LETTER DHA	bengali
ট		ʈ	ʈ	t	ṭ	'	ʈ ṭ	consonant						ʈɔ	U+099F: BENGALI LETTER TTA	bengali
ঠ		Ʈʰ	ʈʰ	T	ṬH	"	ʈʰ ṭh	consonant						ʈhɔ	U+09A0: BENGALI LETTER TTHA	bengali
ড		ɖ	ɖ	d	ḍ	[	ɖ ḍ	consonant						ɖɔ	U+09A1: BENGALI LETTER DDA	bengali
ঢ		Ɖʰ	ɖʰ	D	ḌH	{	ɖʰ ḍh	consonant						ɖhɔ	U+09A2: BENGALI LETTER DDHA	bengali
ক		k	k	k	k	k		consonant						kɔ	U+0995: BENGALI LETTER KA	bengali
খ		Kʰ	kʰ	K	KH	K	kʰ	consonant						khɔ	U+0996: BENGALI LETTER KHA	bengali
গ		g	g	g	g	i		consonant						gɔ	U+0997: BENGALI LETTER GA	bengali
ঘ		Gʰ	gʰ	G	GH	I	gʰ	consonant						ghɔ	U+0998: BENGALI LETTER GHA	bengali
																
চ		t͡ʃ	c	c	c	;	t͡ʃ	consonant						cɔ	U+099A: BENGALI LETTER CA	bengali
ছ		T͡ʃʰ	cʰ	C	CH	:	t͡ʃʰ	consonant						chɔ	U+099B: BENGALI LETTER CHA	bengali
জ		d͡ʒ z	ʤ	d	j	p	d͡ʒ	consonant					বর্গীয় জ	bôr͟gīyô jɔ	U+099C: BENGALI LETTER JA	bengali
য		ʤ- -æ	ʲ	y	y	/	æ	consonant					অন্তঃস্থ য	ɔntɔɦstʰo y̌ɔ	U+09AF: BENGALI LETTER YA	bengali
ঝ		D͡ʒʰ	ʤʰ	D	JH	P	d͡ʒʰ	consonant						jhɔ	U+099D: BENGALI LETTER JHA	bengali
																
স		ʃ s	ʃ̈	s¶	s	m		consonant					দন্ত্য স	dɔntyô sɔ	U+09B8: BENGALI LETTER SA	bengali
শ		ʃ s	ʃ	s	ś	M	ʃ ś	consonant					তালব্য শ	tɑlobbo ʃɔ	U+09B6: BENGALI LETTER SHA	bengali
ষ		ʃ	ʃ̇	s	ṣ	,	ṣ	consonant					মূর্ধন্য ষ	mūrdhnyô ʂɔ	U+09B7: BENGALI LETTER SSA	bengali
হ		h	h	h	h	u		consonant						hɔ	U+09B9: BENGALI LETTER HA	bengali
																
ম		m	m	m	m	c		consonant						mɔ	U+09AE: BENGALI LETTER MA	bengali
ন		n	n	n¶	n	v		consonant					দন্ত্য ন	dɔntyô nɔ	U+09A8: BENGALI LETTER NA	bengali
ঙ		ŋ ŋɡ	ŋ	N	ṅ	U	ŋ ṅ	consonant						uŋɔ	U+0999: BENGALI LETTER NGA	bengali
ঞ		n	ñ	n	ñ	}	ñ	consonant						niyô/iyô	U+099E: BENGALI LETTER NYA	bengali
ণ		n	n̈	n	ṇ	C	ṇ	consonant					মূর্ধন্য ণ	mūrdhônyô ɳɔ	U+09A3: BENGALI LETTER NNA	bengali
																
ৱ		w β	v	v	v		β	assamese consonant						wɔβo	U+09F1: BENGALI LETTER RA WITH LOWER DIAGONAL	bengali
র		r ɾ	r	r	r	j		consonant						rɔ	U+09B0: BENGALI LETTER RA	bengali
ৰ		ɹ	ɹ	r	r			assamese consonant						rɔ	U+09F0: BENGALI LETTER RA WITH MIDDLE DIAGONAL	bengali
ল		l	l	l	l	n		consonant						lɔ	U+09B2: BENGALI LETTER LA	bengali
																
																
\u09DC		ɽ	ɽ	r	ɽ		ɽ	precomposed consonant				ড়		ɽɔ	U+09DC: BENGALI LETTER RRA	bengali
\u09DD		ɽʱ	ɽ̇	r	ɽ		ɽʱ	precomposed consonant				ঢ়		ɽhɔ	U+09DD: BENGALI LETTER RHA	bengali
\u09DF		j e̯	ẏ	y	ẏ		ɛ ẏ	precomposed consonant				য়	অন্তঃস্থ য়	ɔntɔɦstʰo ɔ	U+09DF: BENGALI LETTER YYA	bengali
																
																
ৎ		t	t̽	t	ṯ		ṯ	consonant					খণ্ড ত্‌	khɔɳɖȏ tɔ	U+09CE: BENGALI LETTER KHANDA TA	bengali
ঁ		~	m̽	m	ṃ	X	ṃ	vowel nasalisation marker					চন্দ্রবিন্দু	t͡ʃɔndrobindu	U+0981: BENGALI SIGN CANDRABINDU​	bengali
ং		ŋ	ŋ̽	N	ṁ	x	ŋ ṁ	final nasal					অনুস্বার/অনুস্বর	ɔnuʃbɑr/ɔnuʃbor	U+0982: BENGALI SIGN ANUSVARA​	bengali
ঃ		ɦ	h̽	h	ḥ	-	ɦ ḥ	final consonant/consonant lengthener					বিসর্গ	biʃɔrɡo	U+0983: BENGALI SIGN VISARGA​	bengali
																
																
ি		i e	i	i	i	f		vowel sign			ই			hrɔsvô i	U+09BF: BENGALI VOWEL SIGN I​	bengali
ী		i	ī	i	ī	r	ī	vowel sign			ঈ			dīrghô ī	U+09C0: BENGALI VOWEL SIGN II​	bengali
ু		u	u	u	u	g		vowel sign			উ			hrɔsvô u	U+09C1: BENGALI VOWEL SIGN U​	bengali
ূ		u	ū	u	ū	t	ū	vowel sign			ঊ			dīrghô ū	U+09C2: BENGALI VOWEL SIGN UU​	bengali
ে		e æ	e	e	e	s		vowel sign			এ			e-kar	U+09C7: BENGALI VOWEL SIGN E​	bengali
ো		o ʊ ɔ	o	o	o	a	ʊ	vowel sign			ও			o-kar	U+09CB: BENGALI VOWEL SIGN O​	bengali
া		a æ	ɑ	a	ā	e	ā	vowel sign			আ			a-kar	U+09BE: BENGALI VOWEL SIGN AA​	bengali
																
ৈ		oi̯	oʲ	o	ai	w	oi̯	vowel sign			ঐ			oǐ-kar	U+09C8: BENGALI VOWEL SIGN AI​	bengali
ৌ		ou̯	oʷ	o	au	q	ou̯	vowel sign			ঔ			oǔ-kar	U+09CC: BENGALI VOWEL SIGN AU​	bengali
																
																
ই		I I̯	ị	I	I	F	i̯	independent vowel		ি			হ্রস্ব ই	hrɔʃʃo i	U+0987: BENGALI LETTER I	bengali
ঈ		I Iː	ị̄	I	Ī	R		independent vowel		ী			দীর্ঘ ঈ	dīrghô ī	U+0988: BENGALI LETTER II	bengali
উ		U U̯	ụ	U	U	G	u̯	independent vowel		ু			হ্রস্ব উ	hrɔʃʃo u	U+0989: BENGALI LETTER U	bengali
ঊ		U	ụ̄	U	Ū	T		independent vowel		ূ			দীর্ঘ ঊ	dīrghô ū	U+098A: BENGALI LETTER UU	bengali
এ		E Æ	ẹ	E	E	S	e̯	independent vowel		ে				e-kar	U+098F: BENGALI LETTER E	bengali
ও		O O̯	ọ	O	O	A		independent vowel		ো				o-kar	U+0993: BENGALI LETTER O	bengali
অ		Ɔ	ɔ̣	O	A	D	ɔ	independent vowel						ɔ-kar	U+0985: BENGALI LETTER A	bengali
আ		A	ɑ̣	A	Ā	E		independent vowel		া				a-kar	U+0986: BENGALI LETTER AA	bengali
																
ঐ		OI̯	ọʲ	O	AI	W	o̯	independent vowel		ৈ				oǐ-kar	U+0990: BENGALI LETTER AI	bengali
ঔ		OU̯	ọʷ	O	AU	Q		independent vowel		ৌ				oǔ-kar	U+0994: BENGALI LETTER AU	bengali
																
																
ৃ		RI	r̥	R	R̥	=	r̥	vocalic vowel sign			ঋ				U+09C3: BENGALI VOWEL SIGN VOCALIC R​	bengali
ৄ			r̥̄	R	R̥̄		r̥̄	vocalic vowel sign	archaic		ৠ				U+09C4: BENGALI VOWEL SIGN VOCALIC RR​	bengali
ঋ		RI	r̥̣	R	R̥	+	r̥	independent vocalic		ৃ					U+098B: BENGALI LETTER VOCALIC R	bengali
ৠ			r̥̣̄	R				independent vocalic	archaic	ৄ					U+09E0: BENGALI LETTER VOCALIC RR	bengali
ৢ		LI	l̥	L	L̥		l̥	vocalic vowel sign	archaic		ঌ				U+09E2: BENGALI VOWEL SIGN VOCALIC L​	bengali
ৣ			l̥̄	L	L̥̄		l̥̄	vocalic vowel sign	archaic		ৡ				U+09E3: BENGALI VOWEL SIGN VOCALIC LL​	bengali
ঌ		LI	l̥̣	L	L̥		l̥	independent vocalic	archaic	ৢ					U+098C: BENGALI LETTER VOCALIC L	bengali
ৡ			l̥̣̄	L				independent vocalic	archaic	ৣ					U+09E1: BENGALI LETTER VOCALIC LL	bengali
																
																
																
																
																
																
০		•	0	0	0	0		digit						sɪfar	U+09E6: BENGALI DIGIT ZERO	bengali
১		•	1	1	1	1		digit						æk	U+09E7: BENGALI DIGIT ONE	bengali
২		•	2	2	2	2		digit						dui	U+09E8: BENGALI DIGIT TWO	bengali
৩		•	3	3	3	3		digit						tin	U+09E9: BENGALI DIGIT THREE	bengali
৪		•	4	4	4	4		digit						car	U+09EA: BENGALI DIGIT FOUR	bengali
৫		•	5	5	5	5		digit						pãc	U+09EB: BENGALI DIGIT FIVE	bengali
৬		•	6	6	6	6		digit						chɔy	U+09EC: BENGALI DIGIT SIX	bengali
৭		•	7	7	7	7		digit						sat	U+09ED: BENGALI DIGIT SEVEN	bengali
৮		•	8	8	8	8		digit						aʈ	U+09EE: BENGALI DIGIT EIGHT	bengali
৯		•	9	9	9	9		digit						nɔy	U+09EF: BENGALI DIGIT NINE	bengali
																
																
৺								death symbol							U+09FA: BENGALI ISSHAR	bengali
৳														৲	U+09F3: BENGALI RUPEE SIGN	bengali
৲														৳	U+09F2: BENGALI RUPEE MARK	bengali
ঽ					'										U+09BD: BENGALI SIGN AVAGRAHA	bengali
ৗ			ː	:		:		length mark	deprecated						U+09D7: BENGALI AU LENGTH MARK​	bengali
																
৴															U+09F4: BENGALI CURRENCY NUMERATOR ONE	bengali
৵															U+09F5: BENGALI CURRENCY NUMERATOR TWO	bengali
৶															U+09F6: BENGALI CURRENCY NUMERATOR THREE	bengali
৷															U+09F7: BENGALI CURRENCY NUMERATOR FOUR	bengali
৸															U+09F8: BENGALI CURRENCY NUMERATOR ONE LESS THAN THE DENOMINATOR	bengali
৹															U+09F9: BENGALI CURRENCY DENOMINATOR SIXTEEN	bengali
																
																
																
়			ˑ	[		]		consonant extender						nukta	U+09BC: BENGALI SIGN NUKTA​	bengali
্			͓	*		d		virama					হসন্ত	hɔʃonto	U+09CD: BENGALI SIGN VIRAMA​	bengali
																
																
																
।			.	.	.	.		danda							U+0964: DEVANAGARI DANDA	devanagari
॥			¶	¶		¶		double danda							U+0965: DEVANAGARI DOUBLE DANDA	devanagari
৽								abbreviation marker							U+09FD: BENGALI ABBREVIATION SIGN	bengali
«			“	"		"		quotation mark							U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	punctuation
»			”	"		"		quotation mark							U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	punctuation
																
																
																
																
																
																
\u200C			ₓ					zero-width non-joiner							U+200C: ZERO WIDTH NON-JOINER	
\u200D			₊					zero-width joiner							U+200D: ZERO WIDTH JOINER	
\u2067			ʳˡⁱ					rtl isolate							U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066			ˡʳⁱ					ltr isolate							U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068			ᶠˢⁱ					first-strong isolate							U+2068: FIRST STRONG ISOLATE	
\u2069			ᵖᵈⁱ					pop direction isolate							U+2069: POP DIRECTIONAL ISOLATE	
\u202B			ʳˡᵉ					rtl embed							U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A			ˡʳᵉ					ltr embed							U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C			ᵖᵈᶠ					pop direction							U+202C: POP DIRECTIONAL FORMATTING	
\u200F			ʳˡᵐ					rtl mark							U+200F: RIGHT-TO-LEFT MARK	
\u200E			ˡʳᵐ					ltr mark							U+200E: LEFT-TO-RIGHT MARK	
\u034F			ᶜᵍʲ					combining grapheme joiner							U+034F: COMBINING GRAPHEME JOINER​	
\u061C			ᵃˡᵐ					arabic letter mark							U+061C: ARABIC LETTER MARK	
																
																
“								quotation mark							U+201C: LEFT DOUBLE QUOTATION MARK	
”								quotation mark							U+201D: RIGHT DOUBLE QUOTATION MARK	
‘								quotation mark							U+2018: LEFT SINGLE QUOTATION MARK	
’								quotation mark							U+2019: RIGHT SINGLE QUOTATION MARK	
ʼ								apostrophe							U+02BC: MODIFIER LETTER APOSTROPHE	
,								comma							U+002C: COMMA	
;								semicolon							U+003B: SEMICOLON	
:								colon							U+003A: COLON	
.								full stop							U+002E: FULL STOP	
?								question mark							U+003F: QUESTION MARK	
!								exclamation mark							U+0021: EXCLAMATION MARK	
(								parenthesis							U+0028: LEFT PARENTHESIS	
)								parenthesis							U+0029: RIGHT PARENTHESIS	
…								ellipsis							U+2026: HORIZONTAL ELLIPSIS	
–								en dash							U+2013: EN DASH	
—								em dash							U+2014: EM DASH	
																
§								section sign							U+00A7: SECTION SIGN	
†								dagger							U+2020: DAGGER	
‡								double dagger							U+2021: DOUBLE DAGGER	
′								prime							U+2032: PRIME	
″								double prime							U+2033: DOUBLE PRIME	
																
																
ড়	s	ɽ	ɖˑ	r	ɽ	r		consonant+nukta							U+09A1 U+09BC: BENGALI LETTER DDA, SIGN NUKTA	
ঢ়	s	ɽʱ	ɖʰˑ	r	ɽ	r		consonant+nukta							U+09A2 U+09BC: BENGALI LETTER DDHA, SIGN NUKTA	
য়	s	j e̯	ʲˑ	y	ẏ	?		consonant+nukta							U+09AF U+09BC: BENGALI LETTER YA, SIGN NUKTA	
্য	s	a	͓ʲ	Y				conjunct							U+09CD U+09AF: BENGALI SIGN VIRAMA​, LETTER YA	
																
্র	s		͓r			#									U+09CD U+09B0: BENGALI SIGN VIRAMA, LETTER RA​	
র্	s		r͓			$									U+09B0 U+09CD: BENGALI LETTER RA, SIGN VIRAMA	
ত্র	s	tr	t͓r			^									U+09A4 U+09CD U+09B0: BENGALI LETTER TA, SIGN VIRAMA, LETTER RA	
																
্যা	s		͓ʲɑ													
																
																
ত্ব	s	tt	t͓b					conjunct							U+09A4 U+09CD U+09AC: BENGALI LETTER TA, SIGN VIRAMA, LETTER BA	
থ্ব	s	ttʰ	tʰ͓b					conjunct							U+09A5 U+09CD U+09AC: BENGALI LETTER THA, SIGN VIRAMA, LETTER BA	
ত্ম	s	tt	t͓m					conjunct							U+09A4 U+09CD U+09AE: BENGALI LETTER TA, SIGN VIRAMA, LETTER MA	
ত্ম্য	s	tt	t͓m͓ʲ					conjunct							U+09A4 U+09CD U+09AE U+09CD U+09AF: BENGALI LETTER TA, SIGN VIRAMA, LETTER MA, SIGN VIRAMA, LETTER YA	
দ্ব	s	dd	d͓b					conjunct							U+09A6 U+09CD U+09AC: BENGALI LETTER DA, SIGN VIRAMA, LETTER BA	
দ্ব্য	s	dd	d͓b͓ʲ					conjunct							U+09A6 U+09CD U+09AC U+09CD U+09AF: BENGALI LETTER DA, SIGN VIRAMA, LETTER BA, SIGN VIRAMA, LETTER YA	
দ্ম	s	dd	d͓m					conjunct							U+09A6 U+09CD U+09AE: BENGALI LETTER DA, SIGN VIRAMA, LETTER MA	
ধ্ব	s	ddʰ	dʰ͓b					conjunct							U+09A7 U+09CD U+09AC: BENGALI LETTER DHA, SIGN VIRAMA, LETTER BA	
ক্ষ	s	kʰ kːʰ	k͓ʃ̇	k		&		conjunct							U+0995 U+09CD U+09B7: BENGALI LETTER KA, SIGN VIRAMA​,  LETTER SSA	
ক্ষ্য	s	kkʰ	k͓ʃ͓̇ʲ					conjunct							U+0995 U+09CD U+09B7 U+09CD U+09AF: BENGALI LETTER KA, SIGN VIRAMA, LETTER SSA, SIGN VIRAMA, LETTER YA	
ক্ষ্ম	s	kkʰ	k͓ʃ͓̇m					conjunct							U+0995 U+09CD U+09B7 U+09CD U+09AE: BENGALI LETTER KA, SIGN VIRAMA, LETTER SSA, SIGN VIRAMA, LETTER MA	
ক্ষ্ন	s	kkʰn	k͓ʃ͓̇n					conjunct							U+0995 U+09CD U+09B7 U+09CD U+09A8: BENGALI LETTER KA, SIGN VIRAMA, LETTER SSA, SIGN VIRAMA, LETTER NA	
চ্ছ্ব	s	ccʰ	c͓cʰ͓b					conjunct							U+099A U+09CD U+099B U+09CD U+09AC: BENGALI LETTER CA, SIGN VIRAMA, LETTER CHA, SIGN VIRAMA, LETTER BA	
জ্জ্ব	s	jj	ʤ͓ʤ͓b					conjunct							U+099C U+09CD U+099C U+09CD U+09AC: BENGALI LETTER JA, SIGN VIRAMA, LETTER JA, SIGN VIRAMA, LETTER BA	
জ্ঞ	s	ɡ ɡɡ	ʤ͓ñ			%		conjunct							U+099C U+09CD U+099E: BENGALI LETTER JA, SIGN VIRAMA, LETTER NYA	
শ্ব	s	ʃʃ	ʃ͓b					conjunct							U+09B6 U+09CD U+09AC: BENGALI LETTER SHA, SIGN VIRAMA, LETTER BA	
শ্ম	s	ʃʃ	ʃ͓m					conjunct							U+09B6 U+09CD U+09AE: BENGALI LETTER SHA, SIGN VIRAMA, LETTER MA	
শ্র	s	sr	ʃ͓r			*		conjunct							U+09B6 U+09CD U+09B0: BENGALI LETTER SHA, SIGN VIRAMA, LETTER RA	
ষ্ম	s	ʃʃ	ʃ͓̇m					conjunct							U+09B7 U+09CD U+09AE: BENGALI LETTER SSA, SIGN VIRAMA, LETTER MA	
স্ত	s	st	ʃ͓̈t					conjunct							U+09B8 U+09CD U+09A4: BENGALI LETTER SA, SIGN VIRAMA, LETTER TA	
স্ত্য	s	stt	ʃ͓̈t͓ʲ					conjunct							U+09B8 U+09CD U+09A4 U+09CD U+09AF: BENGALI LETTER SA, SIGN VIRAMA, LETTER TA, SIGN VIRAMA, LETTER YA	
স্ত্র	s	str	ʃ͓̈t͓r					conjunct							U+09B8 U+09CD U+09A4 U+09CD U+09B0: BENGALI LETTER SA, SIGN VIRAMA, LETTER TA, SIGN VIRAMA, LETTER RA	
স্থ	s	stʰ	ʃ͓̈tʰ					conjunct							U+09B8 U+09CD U+09A5: BENGALI LETTER SA, SIGN VIRAMA, LETTER THA	
স্ন	s	sn	ʃ͓̈n					conjunct							U+09B8 U+09CD U+09A8: BENGALI LETTER SA, SIGN VIRAMA, LETTER NA	
স্ম	s	ʃʃ	ʃ͓̈m					conjunct							U+09B8 U+09CD U+09AE: BENGALI LETTER SA, SIGN VIRAMA, LETTER MA	
স্মৃ	s	sri	ʃ͓̈mr̥					conjunct							U+09B8 U+09CD U+09AE U+09C3: BENGALI LETTER SA, SIGN VIRAMA, LETTER MA, VOWEL SIGN VOCALIC R	
ম্ব	s	mm mb	m͓b					conjunct							U+09AE U+09CD U+09AC: BENGALI LETTER MA, SIGN VIRAMA, LETTER BA	
হ্ব	s	bʱ	h͓b					conjunct							U+09B9 U+09CD U+09AC: BENGALI LETTER HA, SIGN VIRAMA, LETTER BA	
হ্ম	s	mʱ mm	h͓m					conjunct							U+09B9 U+09CD U+09AE: BENGALI LETTER HA, SIGN VIRAMA, LETTER MA	
হ্ন	s	nʱ nn	h͓n					conjunct							U+09B9 U+09CD U+09A8: BENGALI LETTER HA, SIGN VIRAMA, LETTER NA	
হ্ণ	s	nʱ nn	h͓n̈					conjunct							U+09B9 U+09CD U+09A3: BENGALI LETTER HA, SIGN VIRAMA, LETTER NNA	
ল্ম	s	ll	l͓m					conjunct							U+09B2 U+09CD U+09AE: BENGALI LETTER LA, SIGN VIRAMA, LETTER MA	
হ্য	s	jj	h͓ʲ					conjunct							U+09B9 U+09CD U+09AF: BENGALI LETTER HA, SIGN VIRAMA, LETTER YA	
																
এ্যা	s	æ	ẹ͓ʲɑ					conjunct							U+098F U+09CD U+09AF U+09BE: BENGALI LETTER E, SIGN VIRAMA, LETTER YA, VOWEL SIGN AA	
অ্যা	s	æ	ɔ̣͓ʲɑ					conjunct							U+0985 U+09CD U+09AF U+09BE: BENGALI LETTER A, SIGN VIRAMA, LETTER YA, VOWEL SIGN AA	




`


var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc": 3,
"key":4,
"transcription": 5,
"kbd": 6,
"latin": 7,
"typeLoc": 8,
"statusLoc": 9,
"dvowel": 10,
"ivowel": 11,
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
"radice": 17,

"othertranscriptions": [[5, 'ISO 15919']]
}


