var spreadsheet = `
ক		k	k	k	k	k	consonant					kɔ		U+0995: BENGALI LETTER KA
খ		K	kʰ	kʰ	K	kh	consonant					khɔ		U+0996: BENGALI LETTER KHA
গ		g	g	g	g	g	consonant					gɔ		U+0997: BENGALI LETTER GA
ঘ		G	gʰ	gʰ	G	gh	consonant					ghɔ		U+0998: BENGALI LETTER GHA
ঙ		N	ŋ	ŋ ŋɡ	N	ṅ	consonant					uŋɔ		U+0999: BENGALI LETTER NGA
চ		c	c	t͡ʃ	c	c	consonant					cɔ		U+099A: BENGALI LETTER CA
ছ		C	cʰ	t͡ʃʰ	C	ch	consonant					chɔ		U+099B: BENGALI LETTER CHA
জ		d	ʤ	d͡ʒ	j	j	consonant					bôr͟gīyô jɔ	বর্গীয় জ	U+099C: BENGALI LETTER JA
ঝ		D	ʤʰ	d͡ʒʰ	J	jh	consonant					jhɔ		U+099D: BENGALI LETTER JHA
ঞ		n	ñ	n	n	ñ	consonant					niyô/iyô		U+099E: BENGALI LETTER NYA
ট		t	ʈ	ʈ	t	ṭ	consonant					ʈɔ		U+099F: BENGALI LETTER TTA
ঠ		T	ʈʰ	ʈʰ	T	ṭh	consonant					ʈhɔ		U+09A0: BENGALI LETTER TTHA
ড		d	ɖ	ɖ	d	ḍ	consonant					ɖɔ		U+09A1: BENGALI LETTER DDA
ঢ		D	ɖʰ	ɖʰ	D	ḍh	consonant					ɖhɔ		U+09A2: BENGALI LETTER DDHA
ণ		n	n̈	n	n	ṇ	consonant					mūrdhônyô ɳɔ	মূর্ধন্য ণ	U+09A3: BENGALI LETTER NNA
ত		t¶	t	t	t¶	t	consonant					tɔ		U+09A4: BENGALI LETTER TA
থ		T	tʰ	tʰ	T	th	consonant					thɔ		U+09A5: BENGALI LETTER THA
দ		d¶	d	d	d¶	d	consonant					dɔ		U+09A6: BENGALI LETTER DA
ধ		D	dʰ	dʰ	D	dh	consonant					dhɔ		U+09A7: BENGALI LETTER DHA
ন		n¶	n	n	n¶	n	consonant					dɔntyô nɔ	দন্ত্য ন	U+09A8: BENGALI LETTER NA
প		p	p	p	p	p	consonant					pɔ		U+09AA: BENGALI LETTER PA
ফ		P	pʰ	pf pʰ f	P	ph	consonant					phɔ		U+09AB: BENGALI LETTER PHA
ব		b	b	b ∅-	b	b	consonant					bɔ		U+09AC: BENGALI LETTER BA
ভ		B	bʰ	bʰ	B	bh	consonant					bhɔ		U+09AD: BENGALI LETTER BHA
ম		m	m	m	m	m	consonant					mɔ		U+09AE: BENGALI LETTER MA
য		y	ʲ	ʤ- -æ/-e	y	y	consonant					ɔntɔɦstʰo y̌ɔ	অন্তঃস্থ য	U+09AF: BENGALI LETTER YA
র		r	r	r	r	r	consonant					rɔ		U+09B0: BENGALI LETTER RA
ল		l	l	l	l	l	consonant					lɔ		U+09B2: BENGALI LETTER LA
শ		s	ʃ	ʃ s	s	ś	consonant					tɑlobbo ʃɔ	তালব্য শ	U+09B6: BENGALI LETTER SHA
ষ		s	ʃ̇	ʃ	s	ṣ	consonant					mūrdhnyô ʂɔ	মূর্ধন্য ষ	U+09B7: BENGALI LETTER SSA
স		s¶	ʃ̈	ʃ s	s¶	s	consonant					dɔntyô sɔ	দন্ত্য স	U+09B8: BENGALI LETTER SA
হ		h	h	h	h	h	consonant					hɔ		U+09B9: BENGALI LETTER HA
ৰ		r	ɹ	ɹ	r	r	assamese consonant					rɔ		U+09F0: BENGALI LETTER RA WITH MIDDLE DIAGONAL
ৱ		v	v	w β	v	v	assamese consonant					wɔβo		U+09F1: BENGALI LETTER RA WITH LOWER DIAGONAL
														
														
\u09DC		r	ɽ	ɽ	r	ɽ	precomposed consonant				ড়	ɽɔ		U+09DC: BENGALI LETTER RRA
\u09DD		r	ɽ̇	ɽʱ	r	ɽ	precomposed consonant				ঢ়	ɽhɔ		U+09DD: BENGALI LETTER RHA
\u09DF		y	ẏ	j e w	y	ẏ	precomposed consonant				য়	ɔntɔɦstʰo ɔ	অন্তঃস্থ য়	U+09DF: BENGALI LETTER YYA
														
														
ৎ		t	t̽	t	t	ṯ	consonant					khɔɳɖȏ tɔ	খণ্ড ত্‌	U+09CE: BENGALI LETTER KHANDA TA
ঁ		m	m̽	~	m	ṃ	vowel nasalisation marker					t͡ʃɔndrobindu	চন্দ্রবিন্দু	U+0981: BENGALI SIGN CANDRABINDU​
ং		N	ŋ̽	ŋ	m	ṁ	final nasal					ɔnuʃbɑr/ɔnuʃbor	অনুস্বার/অনুস্বর	U+0982: BENGALI SIGN ANUSVARA​
ঃ		h	h̽	ɦ	h	ḥ	final consonant/consonant lengthener					biʃɔrɡo	বিসর্গ	U+0983: BENGALI SIGN VISARGA​
														
														
অ		O	ɔ̣	ɔ o u	A	a	independent vowel					ɔ-kar		U+0985: BENGALI LETTER A
আ		A	ɑ̣	ɑ	A	ā	independent vowel		া			a-kar		U+0986: BENGALI LETTER AA
ই		I	ị	i e	I	i	independent vowel		ি			hrɔʃʃo i	হ্রস্ব ই	U+0987: BENGALI LETTER I
ঈ		I	ị̄	i e	I	ī	independent vowel		ী			dīrghô ī	দীর্ঘ ঈ	U+0988: BENGALI LETTER II
উ		U	ụ	u o	U	u	independent vowel		ু			hrɔʃʃo u	হ্রস্ব উ	U+0989: BENGALI LETTER U
ঊ		U	ụ̄	u	U	ū	independent vowel		ূ			dīrghô ū	দীর্ঘ ঊ	U+098A: BENGALI LETTER UU
এ		E	ẹ	e æ	E	e	independent vowel		ে			e-kar		U+098F: BENGALI LETTER E
ঐ		O	ọʲ	oj	A	ai	independent vowel		ৈ			oǐ-kar		U+0990: BENGALI LETTER AI
ও		O	ọ	o u ɔ	O	o	independent vowel		ো			o-kar		U+0993: BENGALI LETTER O
ঔ		O	ọʷ	ow	A	au	independent vowel		ৌ			oǔ-kar		U+0994: BENGALI LETTER AU
														
														
া		a	ɑ	ɑ æ	a	ā	vowel sign			আ		a-kar		U+09BE: BENGALI VOWEL SIGN AA​
ি		i	i	i e a	i	i	vowel sign			ই		hrɔsvô i		U+09BF: BENGALI VOWEL SIGN I​
ী		i	ī	i e	i	ī	vowel sign			ঈ		dīrghô ī		U+09C0: BENGALI VOWEL SIGN II​
ু		u	u	u o	u	u	vowel sign			উ		hrɔsvô u		U+09C1: BENGALI VOWEL SIGN U​
ূ		u	ū	u	u	ū	vowel sign			ঊ		dīrghô ū		U+09C2: BENGALI VOWEL SIGN UU​
ে		e	e	e æ	e	e	vowel sign			এ		e-kar		U+09C7: BENGALI VOWEL SIGN E​
ৈ		o	oʲ	oj	a	ai	vowel sign			ঐ		oǐ-kar		U+09C8: BENGALI VOWEL SIGN AI​
ো		o	o	o u ɔ	o	o	vowel sign			ও		o-kar		U+09CB: BENGALI VOWEL SIGN O​
ৌ		o	oʷ	ow	a	au	vowel sign			ঔ		oǔ-kar		U+09CC: BENGALI VOWEL SIGN AU​
														
														
ৃ		R	r̥	ri	R	r̥	vocalic vowel sign			ঋ				U+09C3: BENGALI VOWEL SIGN VOCALIC R​
ৄ		R	r̥̄		R	r̥̄	vocalic vowel sign	archaic		ৠ				U+09C4: BENGALI VOWEL SIGN VOCALIC RR​
ঋ		R	r̥̣	ri	R	r̥	independent vocalic		ৃ					U+098B: BENGALI LETTER VOCALIC R
ৠ		R	r̥̣̄				independent vocalic	archaic	ৄ					U+09E0: BENGALI LETTER VOCALIC RR
ৢ		L	l̥		L	l̥	vocalic vowel sign	archaic		ঌ				U+09E2: BENGALI VOWEL SIGN VOCALIC L​
ৣ		L	l̥̄		L	l̥̄	vocalic vowel sign	archaic		ৡ				U+09E3: BENGALI VOWEL SIGN VOCALIC LL​
ঌ		L	l̥̣		L	l̥	independent vocalic	archaic	ৢ					U+098C: BENGALI LETTER VOCALIC L
ৡ		L	l̥̣̄				independent vocalic	archaic	ৣ					U+09E1: BENGALI LETTER VOCALIC LL
														
														
														
														
														
														
০		0	0		0	0	digit					sɪfar		U+09E6: BENGALI DIGIT ZERO
১		1	1		1	1	digit					æk		U+09E7: BENGALI DIGIT ONE
২		2	2		2	2	digit					dui		U+09E8: BENGALI DIGIT TWO
৩		3	3		3	3	digit					tin		U+09E9: BENGALI DIGIT THREE
৪		4	4		4	4	digit					car		U+09EA: BENGALI DIGIT FOUR
৫		5	5		5	5	digit					pãc		U+09EB: BENGALI DIGIT FIVE
৬		6	6		6	6	digit					chɔy		U+09EC: BENGALI DIGIT SIX
৭		7	7		7	7	digit					sat		U+09ED: BENGALI DIGIT SEVEN
৮		8	8		8	8	digit					aʈ		U+09EE: BENGALI DIGIT EIGHT
৯		9	9		9	9	digit					nɔy		U+09EF: BENGALI DIGIT NINE
														
														
৺							death symbol							U+09FA: BENGALI ISSHAR
৳												৲		U+09F3: BENGALI RUPEE SIGN
৲												৳		U+09F2: BENGALI RUPEE MARK
ঽ						'								U+09BD: BENGALI SIGN AVAGRAHA
ৗ		:	ː		:		length mark	deprecated						U+09D7: BENGALI AU LENGTH MARK​
														
৴														U+09F4: BENGALI CURRENCY NUMERATOR ONE
৵														U+09F5: BENGALI CURRENCY NUMERATOR TWO
৶														U+09F6: BENGALI CURRENCY NUMERATOR THREE
৷														U+09F7: BENGALI CURRENCY NUMERATOR FOUR
৸														U+09F8: BENGALI CURRENCY NUMERATOR ONE LESS THAN THE DENOMINATOR
৹														U+09F9: BENGALI CURRENCY DENOMINATOR SIXTEEN
														
														
														
়		[	ˑ		[		consonant extender					nukta		U+09BC: BENGALI SIGN NUKTA​
্		*	͓		*		virama					hɔʃonto	হসন্ত	U+09CD: BENGALI SIGN VIRAMA​
														
														
														
														
														
														
														
।		.	.		.	.								U+0964: DEVANAGARI DANDA
॥		¶	¶		¶									U+0965: DEVANAGARI DOUBLE DANDA
॰														U+0970: DEVANAGARI ABBREVIATION SIGN
«		"	“		"									U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
»		"	”		"									U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
														
														
														
ড়	s	r	ɽ	ɽ	r	ɽ	consonant+nukta							U+09A1 U+09BC: BENGALI LETTER DDA, SIGN NUKTA
ঢ়	s	r	ɽ̇	ɽʱ	r	ɽ	consonant+nukta							U+09A2 U+09BC: BENGALI LETTER DDHA, SIGN NUKTA
য়	s	y	ẏ	j e w	y	ẏ	consonant+nukta							U+09AF U+09BC: BENGALI LETTER YA, SIGN NUKTA
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
"lc":9,
"uc":10,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 12,
"nnameLoc": 13,
"ucsName": 14,

"othertranscriptions": [[6, 'ISO 15919']]
}


