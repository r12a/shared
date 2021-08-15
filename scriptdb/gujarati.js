var spreadsheet = `
ક		k	k		k	k	k	consonant						U+0A95: GUJARATI LETTER KA	gujarati
ખ		kʰ	kh	kʰ	K	kʰ	K	consonant						U+0A96: GUJARATI LETTER KHA	gujarati
ગ		ɡ	g		g	g	i	consonant						U+0A97: GUJARATI LETTER GA	gujarati
ઘ		ɡʰ	gh	ɡʰ	G	gʰ	I	consonant						U+0A98: GUJARATI LETTER GHA	gujarati
ઙ		ŋ	ṅ	ŋ ṅ	N	ŋ	U	consonant						U+0A99: GUJARATI LETTER NGA	gujarati
ચ		ʧ	c	ʧ	c	c	;	consonant						U+0A9A: GUJARATI LETTER CA	gujarati
છ		ʧʰ	ch	ʧʰ	c	cʰ	:	consonant						U+0A9B: GUJARATI LETTER CHA	gujarati
જ		ʤ	j	ʤ	d	ʤ	p	consonant						U+0A9C: GUJARATI LETTER JA	gujarati
ઝ		ʤʰ	jh	ʤʰ	d	ʤʰ	P	consonant						U+0A9D: GUJARATI LETTER JHA	gujarati
ઞ		ɲ	ñ	ɲ ñ	n	ɲ	}	consonant						U+0A9E: GUJARATI LETTER NYA	gujarati
ટ		ʈ	ṭ	ʈ ṭ	t	ʈ	'	consonant						U+0A9F: GUJARATI LETTER TTA	gujarati
ઠ		ʈʰ	ṭh	ʈʰ	T	ʈʰ	"	consonant						U+0AA0: GUJARATI LETTER TTHA	gujarati
ડ		ɖ	ḍ	ɖ ḍ	d	ɖ	[	consonant						U+0AA1: GUJARATI LETTER DDA	gujarati
ઢ		ɖʰ	ḍh	ɖʰ	D	ɖʰ	{	consonant						U+0AA2: GUJARATI LETTER DDHA	gujarati
ણ		ɳ	ṇ	ɳ ṇ	n	ɳ	C	consonant						U+0AA3: GUJARATI LETTER NNA	gujarati
ત		t	t		t¶	t	l	consonant						U+0AA4: GUJARATI LETTER TA	gujarati
થ		tʰ	th	tʰ	T¶	tʰ	L	consonant						U+0AA5: GUJARATI LETTER THA	gujarati
દ		d	d		d¶	d	o	consonant						U+0AA6: GUJARATI LETTER DA	gujarati
ધ		dʰ	dh	dʰ	D¶	dʰ	O	consonant						U+0AA7: GUJARATI LETTER DHA	gujarati
ન		n	n		n¶	n	v	consonant						U+0AA8: GUJARATI LETTER NA	gujarati
પ		p	p		p	p	h	consonant						U+0AAA: GUJARATI LETTER PA	gujarati
ફ		f	ph		f	f	H	consonant						U+0AAB: GUJARATI LETTER PHA	gujarati
બ		b	b		b	b	y	consonant						U+0AAC: GUJARATI LETTER BA	gujarati
ભ		bʰ	bh	bʰ	B	bʰ	Y	consonant						U+0AAD: GUJARATI LETTER BHA	gujarati
મ		m	m		m	m	c	consonant						U+0AAE: GUJARATI LETTER MA	gujarati
ય		j	y		y	y	/	consonant						U+0AAF: GUJARATI LETTER YA	gujarati
ર		r	r		r	r	j	consonant						U+0AB0: GUJARATI LETTER RA	gujarati
લ		l	l		l	l	n	consonant						U+0AB2: GUJARATI LETTER LA	gujarati
ળ		ɭ	ḷ		l	ɭ	N	consonant						U+0AB3: GUJARATI LETTER LLA	gujarati
વ		w ʋ	v	ʋ	v	ʋ	b	consonant						U+0AB5: GUJARATI LETTER VA	gujarati
શ		ɕ ʃ	ś	ɕ ʃ ś	c	ɕ	M	consonant						U+0AB6: GUJARATI LETTER SHA	gujarati
ષ		ʃ	ṣ	ṣ	s	ʃ	,	consonant						U+0AB7: GUJARATI LETTER SSA	gujarati
સ		s	s		s¶	s	m	consonant						U+0AB8: GUJARATI LETTER SA	gujarati
હ		ɦ	h	ɦ	h	h	u	consonant						U+0AB9: GUJARATI LETTER HA	gujarati
															
															
															
ઁ			m̐	m̐		[	X							U+0A81: GUJARATI SIGN CANDRABINDU​	gujarati
ં		ä	ṁ	ä ṁ	[	˜	x	vowel nasalisation				anusvār		U+0A82: GUJARATI SIGN ANUSVARA​	gujarati
ઃ		ɨ	ḥ	ɨ ḥ	h	h̽	-	visarga				visarga		U+0A83: GUJARATI SIGN VISARGA​	gujarati
															
															
ૃ		ru	r̥	r̥	R	r̥	=	dependent vocalic			ઋ			U+0AC3: GUJARATI VOWEL SIGN VOCALIC R​	gujarati
ૄ			r̥̄	r̥̄	R	r̥̄		dependent vocalic			ૠ			U+0AC4: GUJARATI VOWEL SIGN VOCALIC RR​	gujarati
ઋ		ru	r̥	r̥	R	r̥̣	+	independent vocalic		ૃ				U+0A8B: GUJARATI LETTER VOCALIC R	gujarati
ૠ			r̥̄	r̥̄	R	r̥̣̄		independent vocalic		ૄ				U+0AE0: GUJARATI LETTER VOCALIC RR	gujarati
ૢ			l̥	l̥	L	l̥		dependent vocalic			ઌ			U+0AE2: GUJARATI VOWEL SIGN VOCALIC L​	gujarati
ૣ			l̥̄	l̥̄	L	l̥̄		dependent vocalic			ૡ			U+0AE3: GUJARATI VOWEL SIGN VOCALIC LL​	gujarati
ઌ			l̥	l̥	L	l̥̣		independent vocalic		ૢ				U+0A8C: GUJARATI LETTER VOCALIC L	gujarati
ૡ			l̥̄	l̥̄	L	l̥̣̄		independent vocalic		ૣ				U+0AE1: GUJARATI LETTER VOCALIC LL	gujarati
															
															
અ		ə	a	ə	E	ə̣	D	independent vowel						U+0A85: GUJARATI LETTER A	gujarati
આ		ɑ	ā	ɑ ā	A	ạ̄	E	independent vowel		ા				U+0A86: GUJARATI LETTER AA	gujarati
ઇ		i	i		I	ị	F	independent vowel		િ				U+0A87: GUJARATI LETTER I	gujarati
ઈ		i	ī	ī	I	ị̄	R	independent vowel		ી				U+0A88: GUJARATI LETTER II	gujarati
ઉ		u	u		U	ụ	G	independent vowel		ુ				U+0A89: GUJARATI LETTER U	gujarati
ઊ		u	ū	ū	U	ụ̄	T	independent vowel		ૂ				U+0A8A: GUJARATI LETTER UU	gujarati
એ		e ɛ	ē	ɛ ē	E	ẹ	S	independent vowel		ે				U+0A8F: GUJARATI LETTER E	gujarati
ઐ		əj	ai	ə	E	ə̣ʲ	W	independent vowel		ૈ				U+0A90: GUJARATI LETTER AI	gujarati
ઓ		o ɔ	ō	ɔ ō	O	ọ	A	independent vowel		ો				U+0A93: GUJARATI LETTER O	gujarati
ઔ		əʋ	au		E	ə̣ʷ	Q	independent vowel		ૌ				U+0A94: GUJARATI LETTER AU	gujarati
ઍ		æ	ê	æ ê	A	æ̣	!	independent vowel		ૅ				U+0A8D: GUJARATI VOWEL CANDRA E	gujarati
ઑ		ɔ	ô	ô	O	ɔ̣	|	independent vowel		ૉ				U+0A91: GUJARATI VOWEL CANDRA O	gujarati
															
															
ા		ɑ	ā		e	ə	e	vowel sign			આ	kāno		U+0ABE: GUJARATI VOWEL SIGN AA​	gujarati
િ		i	i		i	i	f	vowel sign			ઇ	hrasva-ajju		U+0ABF: GUJARATI VOWEL SIGN I​	gujarati
ી		i	ī		i	ī	r	vowel sign			ઈ	dīrgha-ajju		U+0AC0: GUJARATI VOWEL SIGN II​	gujarati
ુ		u	u		u	u	g	vowel sign			ઉ	hrasva-varaṛũ		U+0AC1: GUJARATI VOWEL SIGN U​	gujarati
ૂ		u	ū		u	ū	t	vowel sign			ઊ	dīrgha-varaṛũ		U+0AC2: GUJARATI VOWEL SIGN UU​	gujarati
ે		e ɛ	ē		e	e	s	vowel sign			એ	ek mātra		U+0AC7: GUJARATI VOWEL SIGN E​	gujarati
ૈ		əj	ai		e	əʲ	w	vowel sign			ઐ	be mātra		U+0AC8: GUJARATI VOWEL SIGN AI​	gujarati
ો		o ɔ	ō		o	o	a	vowel sign			ઓ	kāno ek mātra		U+0ACB: GUJARATI VOWEL SIGN O​	gujarati
ૌ		əʋ	au		e	əʷ	q	vowel sign			ઔ	kāno be mātra		U+0ACC: GUJARATI VOWEL SIGN AU​	gujarati
ૅ		æ	ê		a	æ	@	vowel sign			ઍ			U+0AC5: GUJARATI VOWEL SIGN CANDRA E​	gujarati
ૉ		ɔ	ô		o	ɔ	\	vowel sign			ઑ			U+0AC9: GUJARATI VOWEL SIGN CANDRA O​	gujarati
															
															
ૐ														U+0AD0: GUJARATI OM	gujarati
૱														U+0AF1: GUJARATI RUPEE SIGN	gujarati
															
															
્					*	͓	d	virama						U+0ACD: GUJARATI SIGN VIRAMA​	gujarati
઼					[	̣	]	nukta						U+0ABC: GUJARATI SIGN NUKTA​	gujarati
															
															
૦					0	0	0	digit				mīṇḍu or shunya		U+0AE6: GUJARATI DIGIT ZERO	gujarati
૧					1	1	1	digit				ekado or ek		U+0AE7: GUJARATI DIGIT ONE	gujarati
૨					2	2	2	digit				bagado or bay		U+0AE8: GUJARATI DIGIT TWO	gujarati
૩					3	3	3	digit				tragado or tran		U+0AE9: GUJARATI DIGIT THREE	gujarati
૪					4	4	4	digit				chogado or chaar		U+0AEA: GUJARATI DIGIT FOUR	gujarati
૫					5	5	5	digit				pāchado or paanch		U+0AEB: GUJARATI DIGIT FIVE	gujarati
૬					6	6	6	digit				chagado or chah		U+0AEC: GUJARATI DIGIT SIX	gujarati
૭					7	7	7	digit				sātado or sāt		U+0AED: GUJARATI DIGIT SEVEN	gujarati
૮					8	8	8	digit				āṭhado or āanth		U+0AEE: GUJARATI DIGIT EIGHT	gujarati
૯					9	9	9	digit				navado or nav		U+0AEF: GUJARATI DIGIT NINE	gujarati
															
															
।		,			.	.	.							U+0964: DEVANAGARI DANDA	devanagari
॥		.			[	¶								U+0965: DEVANAGARI DOUBLE DANDA	devanagari
૰														U+0AF0: GUJARATI ABBREVIATION SIGN	gujarati
															
															
															
ક્ષ		kʃ			k	k͓ʃ	&	consonant						U+0A95 U+0ACD U+0AB7: GUJARATI LETTER KA, SIGN VIRAMA, LETTER SSA	
જ્ઞ		ɡn			j	ʤ͓ɲ	%	consonant						U+0A9C U+0ACD U+0A9E: GUJARATI LETTER JA, SIGN VIRAMA, LETTER NYA	
															
															
															
્ર						–	#							U+0ACD U+0AB0: GUJARATI SIGN VIRAMA, GUJARATI LETTER RA​	
ર્						–	$							U+0AB0 U+0ACD: GUJARATI LETTER RA, SIGN VIRAMA	
ત્ર						–	^							U+0AA4 U+0ACD U+0AB0: GUJARATI LETTER TA, SIGN VIRAMA, LETTER RA	
શ્ર						–	*							U+0AB6 U+0ACD U+0AB0: GUJARATI LETTER SHA, SIGN VIRAMA, LETTER RA	




`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 7,
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
"nnameLoc": 12,
"nameLoc": 13,
"ucsName": 14,
"block": 15,

"othertranscriptions": [[3, 'ISO 19515']]
}
