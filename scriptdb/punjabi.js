var spreadsheet = `
ਕ		k	k	kə	k	consonant				kəkːɑ		U+0A15: GURMUKHI LETTER KA	gurmukhi
ਖ		K	kʰ	kʰə	kh	consonant				kʰəkʰːɑ		U+0A16: GURMUKHI LETTER KHA	gurmukhi
ਗ		g	g	gə	g	consonant				gəgːɑ		U+0A17: GURMUKHI LETTER GA	gurmukhi
ਘ		G	gʰ	kə̀	gh	consonant				kə̀gːɑ		U+0A18: GURMUKHI LETTER GHA	gurmukhi
ਙ		N	ŋ	ŋə	ṅ	consonant				ŋɑŋːɑ̃		U+0A19: GURMUKHI LETTER NGA	gurmukhi
ਚ		t	ʧ	ʧə	c	consonant				ʧəʧːɑ		U+0A1A: GURMUKHI LETTER CA	gurmukhi
ਛ		T	ʧʰ	ʧʰə	ch	consonant				ʧʰəʧʰːɑ		U+0A1B: GURMUKHI LETTER CHA	gurmukhi
ਜ		d	ʤ	ʤə	j	consonant				ʤəʤːɑ		U+0A1C: GURMUKHI LETTER JA	gurmukhi
ਝ		D	ʤʰ	ʧə̀	jh	consonant				ʧə̀ʤːɑ		U+0A1D: GURMUKHI LETTER JHA	gurmukhi
ਞ		n	ɲ	ɲə	ñ	consonant				ɲəɲːɑ̃		U+0A1E: GURMUKHI LETTER NYA	gurmukhi
ਟ		t	ʈ	ʈə	ṭ	consonant				ʈɑtt:a		U+0A1F: GURMUKHI LETTER TTA	gurmukhi
ਠ		T	ʈʰ	ʈʰə	ṭh	consonant				ʈʰəʈʰːɑ		U+0A20: GURMUKHI LETTER TTHA	gurmukhi
ਡ		d	ɖ	ɖə	ḍ	consonant				ɖəɖːɑ		U+0A21: GURMUKHI LETTER DDA	gurmukhi
ਢ		D	ɖʰ	ʈə̀	ḍh	consonant				ʈə̀ɖːɑ		U+0A22: GURMUKHI LETTER DDHA	gurmukhi
ਣ		n	ɳ	ɳə	ṇ	consonant				ɳɑɳɑ		U+0A23: GURMUKHI LETTER NNA	gurmukhi
ਤ		t¶	t	tə	t	consonant				t̪ət̪ːɑ		U+0A24: GURMUKHI LETTER TA	gurmukhi
ਥ		T	tʰ	tʰə	th	consonant				t̪ʰət̪ʰːɑ		U+0A25: GURMUKHI LETTER THA	gurmukhi
ਦ		d¶	d	də	d	consonant				d̪əd̪ːɑ		U+0A26: GURMUKHI LETTER DA	gurmukhi
ਧ		D	dʰ	tə̀	dh	consonant				t̪ə̀d̪ːɑ		U+0A27: GURMUKHI LETTER DHA	gurmukhi
ਨ		n¶	n	nə	n	consonant				nənːɑ		U+0A28: GURMUKHI LETTER NA	gurmukhi
ਪ		p	p	pə	p	consonant				pəpːɑ		U+0A2A: GURMUKHI LETTER PA	gurmukhi
ਫ		P	pʰ	pʰə	ph	consonant				pʰəpʰːɑ		U+0A2B: GURMUKHI LETTER PHA	gurmukhi
ਬ		b	b	bə	b	consonant				bəbːɑ		U+0A2C: GURMUKHI LETTER BA	gurmukhi
ਭ		B	bʰ	pə̀	bh	consonant				pə̀bːɑ		U+0A2D: GURMUKHI LETTER BHA	gurmukhi
ਮ		m	m	mə	m	consonant				məmːɑ		U+0A2E: GURMUKHI LETTER MA	gurmukhi
ਯ		y	y	jə	y	consonant				jəjːɑ		U+0A2F: GURMUKHI LETTER YA	gurmukhi
ਰ		r	r	rə	r	consonant				ɾɑɾɑ		U+0A30: GURMUKHI LETTER RA	gurmukhi
ੜ		r	ɽ	ɽə	ṛ	consonant				ɽɑɽɑ		U+0A5C: GURMUKHI LETTER RRA	gurmukhi
ਲ		l	l	lə	l	consonant				ləlːɑ		U+0A32: GURMUKHI LETTER LA	gurmukhi
ਵ		v	v	ʋə	v	consonant				ʋɑʋːɑ		U+0A35: GURMUKHI LETTER VA	gurmukhi
ਸ		s¶	s	sə	s	consonant				səsːɑ		U+0A38: GURMUKHI LETTER SA	gurmukhi
ਹ		h	h	ɦə	h	consonant				ɦɑɦɑ		U+0A39: GURMUKHI LETTER HA	gurmukhi
													
													
\u0A59	p	x	x	xə	x	consonant				kʰəkʰːɑ pɛɾ bɪnd̪i		U+0A59: GURMUKHI LETTER KHHA	gurmukhi
\u0A5A	p	y	ɣ	ɣə	ġ	consonant				gəgːɑ pɛɾ bɪnd̪i		U+0A5A: GURMUKHI LETTER GHHA	gurmukhi
\u0A33	p	l	ɭ	ɭə	ḷ	consonant				ləlːɑ pɛɾ bɪnd̪i		U+0A33: GURMUKHI LETTER LLA	gurmukhi
\u0A5B	p	z	z	zə	z	consonant				ʤəʤːɑ pɛɾ bɪnd̪i		U+0A5B: GURMUKHI LETTER ZA	gurmukhi
\u0A5E	p	f	f	fə	f	consonant				pʰəpʰːɑ pɛɾ bɪnd̪i		U+0A5E: GURMUKHI LETTER FA	gurmukhi
\u0A36	p	s	ʃ	ʃə	ś	consonant				səsːɑ pɛɾ bɪnd̪i		U+0A36: GURMUKHI LETTER SHA	gurmukhi
													
													
ੵ		y	y̆			medial y				yakash		U+0A75: GURMUKHI SIGN YAKASH​	gurmukhi
													
													
ਁ					m̐							U+0A01: GURMUKHI SIGN ADAK BINDI​	gurmukhi
ੰ		N	ŋ̽		ṃ	vowel nasalisation				tippi		U+0A70: GURMUKHI TIPPI​	gurmukhi
ਂ		[	˜		ṁ	vowel nasalisation				bindi		U+0A02: GURMUKHI SIGN BINDI​	gurmukhi
ਃ		h	h̽		ḥ	visarga				visarg		U+0A03: GURMUKHI SIGN VISARGA​	gurmukhi
													
													
ੲ		[	‘	∅		vowel support	d			iɽi		U+0A72: GURMUKHI IRI	gurmukhi
ੳ		[	’	∅		vowel support	d			uɽɑ		U+0A73: GURMUKHI URA	gurmukhi
ਅ		E	ə	ə	a	vowel support & independent vowel				æɽɑ		U+0A05: GURMUKHI LETTER A	gurmukhi
													
													
ਆ		A	ạ̄	ɑ ä	ā	independent vowel		ਾ		kannā		U+0A06: GURMUKHI LETTER AA	gurmukhi
ਇ		I	ɪ̣	ɪ	i	independent vowel		ਿ		sihārī		U+0A07: GURMUKHI LETTER I	gurmukhi
ਈ		I	ị	i	ī	independent vowel		ੀ		bihārī		U+0A08: GURMUKHI LETTER II	gurmukhi
ਉ		U	ʊ̣	ʊ	u	independent vowel		ੁ		onkaṛ		U+0A09: GURMUKHI LETTER U	gurmukhi
ਊ		U	ụ	u	ū	independent vowel		ੂ		dulankaṛ		U+0A0A: GURMUKHI LETTER UU	gurmukhi
ਏ		E	ẹ	e	ē	independent vowel		ੇ		lāvā̃		U+0A0F: GURMUKHI LETTER EE	gurmukhi
ਐ		E	ɛ̣	ɛ	ai	independent vowel		ੈ		dulāvā̃		U+0A10: GURMUKHI LETTER AI	gurmukhi
ਓ		O	ọ	o	o	independent vowel		ੋ		hōṛā		U+0A13: GURMUKHI LETTER OO	gurmukhi
ਔ		O	ɔ̣	ɔ	au	independent vowel		ੌ		kanōṛā		U+0A14: GURMUKHI LETTER AU	gurmukhi
													
													
ਾ		a	ā	ɑ ä	ā	vowel sign			ਆ	kannā		U+0A3E: GURMUKHI VOWEL SIGN AA​	gurmukhi
ਿ		i	ɪ	ɪ	i	vowel sign			ਇ	sihārī		U+0A3F: GURMUKHI VOWEL SIGN I​	gurmukhi
ੀ		i	ī	i	ī	vowel sign			ਈ	bihārī		U+0A40: GURMUKHI VOWEL SIGN II​	gurmukhi
ੁ		u	ʊ	ʊ	u	vowel sign			ਉ	onkaṛ		U+0A41: GURMUKHI VOWEL SIGN U​	gurmukhi
ੂ		u	ū	u	ū	vowel sign			ਊ	dulankaṛ		U+0A42: GURMUKHI VOWEL SIGN UU​	gurmukhi
ੇ		e	e	e	ē	vowel sign			ਏ	lāvā̃		U+0A47: GURMUKHI VOWEL SIGN EE​	gurmukhi
ੈ		e	ɛ	ɛ	ai	vowel sign			ਐ	dulāvā̃		U+0A48: GURMUKHI VOWEL SIGN AI​	gurmukhi
ੋ		o	o	o	o	vowel sign			ਓ	hōṛā		U+0A4B: GURMUKHI VOWEL SIGN OO​	gurmukhi
ੌ		o	ɔ	ɔ	au	vowel sign			ਔ	kanōṛā		U+0A4C: GURMUKHI VOWEL SIGN AU​	gurmukhi
													
													
੦		0	0		0	digit				sɪfəɾ	ਸਿਫ਼ਰ	U+0A66: GURMUKHI DIGIT ZERO	gurmukhi
੧		1	1		1	digit				ɪkː	ਇੱਕ	U+0A67: GURMUKHI DIGIT ONE	gurmukhi
੨		2	2		2	digit				d̪oː	ਦੋ	U+0A68: GURMUKHI DIGIT TWO	gurmukhi
੩		3	3		3	digit				t̪ɪnː	ਤਿੰਨ	U+0A69: GURMUKHI DIGIT THREE	gurmukhi
੪		4	4		4	digit				tʃɑːɾ	ਚਾਰ	U+0A6A: GURMUKHI DIGIT FOUR	gurmukhi
੫		5	5		5	digit				pəndʒ	ਪੰਜ	U+0A6B: GURMUKHI DIGIT FIVE	gurmukhi
੬		6	6		6	digit				tʃʰeː	ਛੇ	U+0A6C: GURMUKHI DIGIT SIX	gurmukhi
੭		7	7		7	digit				sət̪ː	ਸੱਤ	U+0A6D: GURMUKHI DIGIT SEVEN	gurmukhi
੮		8	8		8	digit				əʈʰː	ਅੱਠ	U+0A6E: GURMUKHI DIGIT EIGHT	gurmukhi
੯		9	9		9	digit				nɔ̃	ਨੌਂ	U+0A6F: GURMUKHI DIGIT NINE	gurmukhi
													
													
ੴ						symbol				ek onkar		U+0A74: GURMUKHI EK ONKAR	gurmukhi
☬						symbol				adi shakti		U+262C: ADI SHAKTI	
													
													
੍		*	͓			virama				halant		U+0A4D: GURMUKHI SIGN VIRAMA​	gurmukhi
਼		[	ˑ			nukta						U+0A3C: GURMUKHI SIGN NUKTA​	gurmukhi
ੑ		[	ˊ			high tone marker				udaat		U+0A51: GURMUKHI SIGN UDAAT​	gurmukhi
ੱ		[	˖			gemination marker				addak		U+0A71: GURMUKHI ADDAK​	gurmukhi
													
													
।		,	.									U+002E U+0020 U+0964: FULL STOP, SPACE, DEVANAGARI DANDA	devanagari
॥		[	¶									U+0965: DEVANAGARI DOUBLE DANDA	devanagari
													
													
													
													
													
													
													
\u200C		=	ₓ							zero-width non-joiner		U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=	₊							zero-width joiner		U+200D: ZERO WIDTH JOINER	punctuation
													
													
													
													
													
													
													
ਖ਼	s	x	kʰˑ	xə	x	consonant with nukta				kʰəkʰːɑ pɛɾ bɪnd̪i		U+0A16 U+0A3C: GURMUKHI LETTER KHA, GURMUKHI SIGN NUKTA	
ਗ਼	s	y	gˑ	ɣə	ġ	consonant with nukta				gəgːɑ pɛɾ bɪnd̪i		U+0A17 U+0A3C: GURMUKHI LETTER GA, GURMUKHI SIGN NUKTA	
ਲ਼	s	l	lˑ	ɭə	ḷ	consonant with nukta				ləlːɑ pɛɾ bɪnd̪i		U+0A32 U+0A3C: GURMUKHI LETTER LA, GURMUKHI SIGN NUKTA	
ਜ਼	s	z	ʤˑ	zə	z	consonant with nukta				ʤəʤːɑ pɛɾ bɪnd̪i		U+0A1C U+0A3C: GURMUKHI LETTER JA, GURMUKHI SIGN NUKTA	
ਫ਼	s	f	pʰˑ	fə	f	consonant with nukta				pʰəpʰːɑ pɛɾ bɪnd̪i		U+0A2B U+0A3C: GURMUKHI LETTER PHA, GURMUKHI SIGN NUKTA	
ਸ਼	s	s	sˑ	ʃə	ś	consonant with nukta						U+0A38 U+0A3C: GURMUKHI LETTER SA, GURMUKHI SIGN NUKTA	



`


var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":5,
"typeLoc": 6,
"statusLoc": 7,
"dvowel": 8,
"ivowel": 9,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[5, 'ISO 19515']]
}
