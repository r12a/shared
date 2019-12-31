var spreadsheet = `
ক		k	k	k	k	k	consonant					kɔ		U+0995: BENGALI LETTER KA	bengali
খ		K	kʰ	kʰ	K	kh	consonant					khɔ		U+0996: BENGALI LETTER KHA	bengali
গ		g	g	g	g	g	consonant					gɔ		U+0997: BENGALI LETTER GA	bengali
ঘ		G	gʰ	gʰ	G	gh	consonant					ghɔ		U+0998: BENGALI LETTER GHA	bengali
ঙ		N	ŋ	ŋ ŋɡ	N	ṅ	consonant					uŋɔ		U+0999: BENGALI LETTER NGA	bengali
চ		c	c	t͡ʃ	c	c	consonant					cɔ		U+099A: BENGALI LETTER CA	bengali
ছ		C	cʰ	t͡ʃʰ	C	ch	consonant					chɔ		U+099B: BENGALI LETTER CHA	bengali
জ		d	ʤ	d͡ʒ	j	j	consonant					bôr͟gīyô jɔ	বর্গীয় জ	U+099C: BENGALI LETTER JA	bengali
ঝ		D	ʤʰ	d͡ʒʰ	J	jh	consonant					jhɔ		U+099D: BENGALI LETTER JHA	bengali
ঞ		n	ñ	n	n	ñ	consonant					niyô/iyô		U+099E: BENGALI LETTER NYA	bengali
ট		t	ʈ	ʈ	t	ṭ	consonant					ʈɔ		U+099F: BENGALI LETTER TTA	bengali
ঠ		T	ʈʰ	ʈʰ	T	ṭh	consonant					ʈhɔ		U+09A0: BENGALI LETTER TTHA	bengali
ড		d	ɖ	ɖ	d	ḍ	consonant					ɖɔ		U+09A1: BENGALI LETTER DDA	bengali
ঢ		D	ɖʰ	ɖʰ	D	ḍh	consonant					ɖhɔ		U+09A2: BENGALI LETTER DDHA	bengali
ণ		n	n̈	n	n	ṇ	consonant					mūrdhônyô ɳɔ	মূর্ধন্য ণ	U+09A3: BENGALI LETTER NNA	bengali
ত		t¶	t	t	t¶	t	consonant					tɔ		U+09A4: BENGALI LETTER TA	bengali
থ		T	tʰ	tʰ	T	th	consonant					thɔ		U+09A5: BENGALI LETTER THA	bengali
দ		d¶	d	d	d¶	d	consonant					dɔ		U+09A6: BENGALI LETTER DA	bengali
ধ		D	dʰ	dʰ	D	dh	consonant					dhɔ		U+09A7: BENGALI LETTER DHA	bengali
ন		n¶	n	n	n¶	n	consonant					dɔntyô nɔ	দন্ত্য ন	U+09A8: BENGALI LETTER NA	bengali
প		p	p	p	p	p	consonant					pɔ		U+09AA: BENGALI LETTER PA	bengali
ফ		P	pʰ	pf pʰ f	P	ph	consonant					phɔ		U+09AB: BENGALI LETTER PHA	bengali
ব		b	b	b ∅-	b	b	consonant					bɔ		U+09AC: BENGALI LETTER BA	bengali
ভ		B	bʰ	bʰ	B	bh	consonant					bhɔ		U+09AD: BENGALI LETTER BHA	bengali
ম		m	m	m	m	m	consonant					mɔ		U+09AE: BENGALI LETTER MA	bengali
য		y	ʲ	ʤ- -æ/-e	y	y	consonant					ɔntɔɦstʰo y̌ɔ	অন্তঃস্থ য	U+09AF: BENGALI LETTER YA	bengali
র		r	r	r	r	r	consonant					rɔ		U+09B0: BENGALI LETTER RA	bengali
ল		l	l	l	l	l	consonant					lɔ		U+09B2: BENGALI LETTER LA	bengali
শ		s	ʃ	ʃ s	s	ś	consonant					tɑlobbo ʃɔ	তালব্য শ	U+09B6: BENGALI LETTER SHA	bengali
ষ		s	ʃ̇	ʃ	s	ṣ	consonant					mūrdhnyô ʂɔ	মূর্ধন্য ষ	U+09B7: BENGALI LETTER SSA	bengali
স		s¶	ʃ̈	ʃ s	s¶	s	consonant					dɔntyô sɔ	দন্ত্য স	U+09B8: BENGALI LETTER SA	bengali
হ		h	h	h	h	h	consonant					hɔ		U+09B9: BENGALI LETTER HA	bengali
ৰ		r	ɹ	ɹ	r	r	assamese consonant					rɔ		U+09F0: BENGALI LETTER RA WITH MIDDLE DIAGONAL	bengali
ৱ		v	v	w β	v	v	assamese consonant					wɔβo		U+09F1: BENGALI LETTER RA WITH LOWER DIAGONAL	bengali
															
															
\u09DC		r	ɽ	ɽ	r	ɽ	precomposed consonant				ড়	ɽɔ		U+09DC: BENGALI LETTER RRA	bengali
\u09DD		r	ɽ̇	ɽʱ	r	ɽ	precomposed consonant				ঢ়	ɽhɔ		U+09DD: BENGALI LETTER RHA	bengali
\u09DF		y	ẏ	j ɛ w	y	ẏ	precomposed consonant				য়	ɔntɔɦstʰo ɔ	অন্তঃস্থ য়	U+09DF: BENGALI LETTER YYA	bengali
															
															
ৎ		t	t̽	t	t	ṯ	consonant					khɔɳɖȏ tɔ	খণ্ড ত্‌	U+09CE: BENGALI LETTER KHANDA TA	bengali
ঁ		m	m̽	~	m	ṃ	vowel nasalisation marker					t͡ʃɔndrobindu	চন্দ্রবিন্দু	U+0981: BENGALI SIGN CANDRABINDU​	bengali
ং		N	ŋ̽	ŋ	m	ṁ	final nasal					ɔnuʃbɑr/ɔnuʃbor	অনুস্বার/অনুস্বর	U+0982: BENGALI SIGN ANUSVARA​	bengali
ঃ		h	h̽	ɦ	h	ḥ	final consonant/consonant lengthener					biʃɔrɡo	বিসর্গ	U+0983: BENGALI SIGN VISARGA​	bengali
															
															
অ		O	ɔ̣	ɔ o u	A	a	independent vowel					ɔ-kar		U+0985: BENGALI LETTER A	bengali
আ		A	ɑ̣	a	A	ā	independent vowel		া			a-kar		U+0986: BENGALI LETTER AA	bengali
ই		I	ị	i e	I	i	independent vowel		ি			hrɔʃʃo i	হ্রস্ব ই	U+0987: BENGALI LETTER I	bengali
ঈ		I	ị̄	i e	I	ī	independent vowel		ী			dīrghô ī	দীর্ঘ ঈ	U+0988: BENGALI LETTER II	bengali
উ		U	ụ	u o	U	u	independent vowel		ু			hrɔʃʃo u	হ্রস্ব উ	U+0989: BENGALI LETTER U	bengali
ঊ		U	ụ̄	u	U	ū	independent vowel		ূ			dīrghô ū	দীর্ঘ ঊ	U+098A: BENGALI LETTER UU	bengali
এ		E	ẹ	e æ ɛ	E	e	independent vowel		ে			e-kar		U+098F: BENGALI LETTER E	bengali
ঐ		O	ọʲ	oi̯	A	ai	independent vowel		ৈ			oǐ-kar		U+0990: BENGALI LETTER AI	bengali
ও		O	ọ	o ʊ ɔ	O	o	independent vowel		ো			o-kar		U+0993: BENGALI LETTER O	bengali
ঔ		O	ọʷ	ou̯	A	au	independent vowel		ৌ			oǔ-kar		U+0994: BENGALI LETTER AU	bengali
															
															
া		a	ɑ	a æ	a	ā	vowel sign			আ		a-kar		U+09BE: BENGALI VOWEL SIGN AA​	bengali
ি		i	i	i e a	i	i	vowel sign			ই		hrɔsvô i		U+09BF: BENGALI VOWEL SIGN I​	bengali
ী		i	ī	i e	i	ī	vowel sign			ঈ		dīrghô ī		U+09C0: BENGALI VOWEL SIGN II​	bengali
ু		u	u	u o	u	u	vowel sign			উ		hrɔsvô u		U+09C1: BENGALI VOWEL SIGN U​	bengali
ূ		u	ū	u	u	ū	vowel sign			ঊ		dīrghô ū		U+09C2: BENGALI VOWEL SIGN UU​	bengali
ে		e	e	e æ	e	e	vowel sign			এ		e-kar		U+09C7: BENGALI VOWEL SIGN E​	bengali
ৈ		o	oʲ	oi̯	a	ai	vowel sign			ঐ		oǐ-kar		U+09C8: BENGALI VOWEL SIGN AI​	bengali
ো		o	o	o ʊ ɔ	o	o	vowel sign			ও		o-kar		U+09CB: BENGALI VOWEL SIGN O​	bengali
ৌ		o	oʷ	ou̯	a	au	vowel sign			ঔ		oǔ-kar		U+09CC: BENGALI VOWEL SIGN AU​	bengali
															
															
ৃ		R	r̥	ri	R	r̥	vocalic vowel sign			ঋ				U+09C3: BENGALI VOWEL SIGN VOCALIC R​	bengali
ৄ		R	r̥̄		R	r̥̄	vocalic vowel sign	archaic		ৠ				U+09C4: BENGALI VOWEL SIGN VOCALIC RR​	bengali
ঋ		R	r̥̣	ri	R	r̥	independent vocalic		ৃ					U+098B: BENGALI LETTER VOCALIC R	bengali
ৠ		R	r̥̣̄				independent vocalic	archaic	ৄ					U+09E0: BENGALI LETTER VOCALIC RR	bengali
ৢ		L	l̥	li	L	l̥	vocalic vowel sign	archaic		ঌ				U+09E2: BENGALI VOWEL SIGN VOCALIC L​	bengali
ৣ		L	l̥̄		L	l̥̄	vocalic vowel sign	archaic		ৡ				U+09E3: BENGALI VOWEL SIGN VOCALIC LL​	bengali
ঌ		L	l̥̣	li	L	l̥	independent vocalic	archaic	ৢ					U+098C: BENGALI LETTER VOCALIC L	bengali
ৡ		L	l̥̣̄				independent vocalic	archaic	ৣ					U+09E1: BENGALI LETTER VOCALIC LL	bengali
															
															
															
															
															
															
০		0	0		0	0	digit					sɪfar		U+09E6: BENGALI DIGIT ZERO	bengali
১		1	1		1	1	digit					æk		U+09E7: BENGALI DIGIT ONE	bengali
২		2	2		2	2	digit					dui		U+09E8: BENGALI DIGIT TWO	bengali
৩		3	3		3	3	digit					tin		U+09E9: BENGALI DIGIT THREE	bengali
৪		4	4		4	4	digit					car		U+09EA: BENGALI DIGIT FOUR	bengali
৫		5	5		5	5	digit					pãc		U+09EB: BENGALI DIGIT FIVE	bengali
৬		6	6		6	6	digit					chɔy		U+09EC: BENGALI DIGIT SIX	bengali
৭		7	7		7	7	digit					sat		U+09ED: BENGALI DIGIT SEVEN	bengali
৮		8	8		8	8	digit					aʈ		U+09EE: BENGALI DIGIT EIGHT	bengali
৯		9	9		9	9	digit					nɔy		U+09EF: BENGALI DIGIT NINE	bengali
															
															
৺							death symbol							U+09FA: BENGALI ISSHAR	bengali
৳												৲		U+09F3: BENGALI RUPEE SIGN	bengali
৲												৳		U+09F2: BENGALI RUPEE MARK	bengali
ঽ						'								U+09BD: BENGALI SIGN AVAGRAHA	bengali
ৗ		:	ː		:		length mark	deprecated						U+09D7: BENGALI AU LENGTH MARK​	bengali
															
৴														U+09F4: BENGALI CURRENCY NUMERATOR ONE	bengali
৵														U+09F5: BENGALI CURRENCY NUMERATOR TWO	bengali
৶														U+09F6: BENGALI CURRENCY NUMERATOR THREE	bengali
৷														U+09F7: BENGALI CURRENCY NUMERATOR FOUR	bengali
৸														U+09F8: BENGALI CURRENCY NUMERATOR ONE LESS THAN THE DENOMINATOR	bengali
৹														U+09F9: BENGALI CURRENCY DENOMINATOR SIXTEEN	bengali
															
															
															
়		[	ˑ		[		consonant extender					nukta		U+09BC: BENGALI SIGN NUKTA​	bengali
্		*	͓		*		virama					hɔʃonto	হসন্ত	U+09CD: BENGALI SIGN VIRAMA​	bengali
															
															
															
															
															
															
															
।		.	.		.	.								U+0964: DEVANAGARI DANDA	devanagari
॥		¶	¶		¶									U+0965: DEVANAGARI DOUBLE DANDA	devanagari
॰														U+0970: DEVANAGARI ABBREVIATION SIGN	devanagari
«		"	“		"									U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	punctuation
»		"	”		"									U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	punctuation
\u200D		=	₊				formatting character							U+200D ZERO WIDTH JOINER	punctuation
\u200C		=	ₓ				formatting character							U+200C ZERO WIDTH NON-JOINER	punctuation
															
															
ড়	s	r	ɽ	ɽ	r	ɽ	consonant+nukta							U+09A1 U+09BC: BENGALI LETTER DDA, SIGN NUKTA	
ঢ়	s	r	ɽ̇	ɽʱ	r	ɽ	consonant+nukta							U+09A2 U+09BC: BENGALI LETTER DDHA, SIGN NUKTA	
য়	s	y	ẏ	j ɛ w	y	ẏ	consonant+nukta							U+09AF U+09BC: BENGALI LETTER YA, SIGN NUKTA	
ক্ষ	s	k	k͓ʃ̇	kʃ			conjunct							U+0995 U+09CD U+09B7: BENGALI LETTER KA, SIGN VIRAMA​,  LETTER SSA	
্য	s	Y	͓ʲ	a			conjunct							U+09CD U+09AF: BENGALI SIGN VIRAMA​, LETTER YA	


`


var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
"typeLoc": 7,
"statusLoc": 8,
"dvowel": 9,
"ivowel": 10,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 12,
"nnameLoc": 13,
"ucsName": 14,
"block": 15,

"othertranscriptions": [[6, 'ISO 15919']]
}


