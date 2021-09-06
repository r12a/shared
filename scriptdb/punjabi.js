var spreadsheet = `
ਕ		kə	k	ə	k	k	k	consonant					kəkːɑ	U+0A15: GURMUKHI LETTER KA	gurmukhi
ਖ		kʰə	kh	kʰ	K	kʰ	K	consonant					kʰəkʰːɑ	U+0A16: GURMUKHI LETTER KHA	gurmukhi
ਗ		gə	g	g	g	g	i	consonant					gəgːɑ	U+0A17: GURMUKHI LETTER GA	gurmukhi
ਘ		kə̀	gh	ə̀	G	gʰ	I	consonant					kə̀gːɑ	U+0A18: GURMUKHI LETTER GHA	gurmukhi
ਙ		ŋə	ṅ	ŋə ṅ	N	ŋ	U	consonant					ŋɑŋːɑ̃	U+0A19: GURMUKHI LETTER NGA	gurmukhi
ਚ		t͡ʃə	c	t͡ʃ	t	ʧ	;	consonant					ʧəʧːɑ	U+0A1A: GURMUKHI LETTER CA	gurmukhi
ਛ		t͡ʃʰə	ch	t͡ʃʰ	T	ʧʰ	:	consonant					ʧʰəʧʰːɑ	U+0A1B: GURMUKHI LETTER CHA	gurmukhi
ਜ		d͡ʒə	j	d͡ʒ	d	ʤ	p	consonant					ʤəʤːɑ	U+0A1C: GURMUKHI LETTER JA	gurmukhi
ਝ		t͡ʃə̀	jh		D	ʤʰ	P	consonant					ʧə̀ʤːɑ	U+0A1D: GURMUKHI LETTER JHA	gurmukhi
ਞ		ɲə	ñ	ɲ ñ	n	ɲ	}	consonant					ɲəɲːɑ̃	U+0A1E: GURMUKHI LETTER NYA	gurmukhi
ਟ		ʈə	ṭ	ʈ ṭ	t	ʈ	'	consonant					ʈɑtt:a	U+0A1F: GURMUKHI LETTER TTA	gurmukhi
ਠ		ʈʰə	ṭh	ʈʰ	T	ʈʰ	"	consonant					ʈʰəʈʰːɑ	U+0A20: GURMUKHI LETTER TTHA	gurmukhi
ਡ		ɖə	ḍ	ɖ ḍ	d	ɖ	[	consonant					ɖəɖːɑ	U+0A21: GURMUKHI LETTER DDA	gurmukhi
ਢ		ʈə̀	ḍh		D	ɖʰ	{	consonant					ʈə̀ɖːɑ	U+0A22: GURMUKHI LETTER DDHA	gurmukhi
ਣ		ɳə	ṇ	ɳ ṇ	n	ɳ	C	consonant					ɳɑɳɑ	U+0A23: GURMUKHI LETTER NNA	gurmukhi
ਤ		tə	t		t¶	t	l	consonant					t̪ət̪ːɑ	U+0A24: GURMUKHI LETTER TA	gurmukhi
ਥ		tʰə	th	tʰ	T	tʰ	L	consonant					t̪ʰət̪ʰːɑ	U+0A25: GURMUKHI LETTER THA	gurmukhi
ਦ		də	d		d¶	d	o	consonant					d̪əd̪ːɑ	U+0A26: GURMUKHI LETTER DA	gurmukhi
ਧ		tə̀	dh		D	dʰ	O	consonant					t̪ə̀d̪ːɑ	U+0A27: GURMUKHI LETTER DHA	gurmukhi
ਨ		nə	n		n¶	n	v	consonant					nənːɑ	U+0A28: GURMUKHI LETTER NA	gurmukhi
ਪ		pə	p		p	p	h	consonant					pəpːɑ	U+0A2A: GURMUKHI LETTER PA	gurmukhi
ਫ		pʰə	ph	pʰ	P	pʰ	H	consonant					pʰəpʰːɑ	U+0A2B: GURMUKHI LETTER PHA	gurmukhi
ਬ		bə	b		b	b	y	consonant					bəbːɑ	U+0A2C: GURMUKHI LETTER BA	gurmukhi
ਭ		pə̀	bh		B	bʰ	Y	consonant					pə̀bːɑ	U+0A2D: GURMUKHI LETTER BHA	gurmukhi
ਮ		mə	m		m	m	c	consonant					məmːɑ	U+0A2E: GURMUKHI LETTER MA	gurmukhi
ਯ		jə	y		y	y	/	consonant					jəjːɑ	U+0A2F: GURMUKHI LETTER YA	gurmukhi
ਰ		rə	r		r	r	j	consonant					ɾɑɾɑ	U+0A30: GURMUKHI LETTER RA	gurmukhi
ੜ		ɽə	ṛ	ɽ ṛ	r	ɽ	J	consonant					ɽɑɽɑ	U+0A5C: GURMUKHI LETTER RRA	gurmukhi
ਲ		lə	l		l	l	n	consonant					ləlːɑ	U+0A32: GURMUKHI LETTER LA	gurmukhi
ਵ		ʋə	v	ʋ	v	v	b	consonant					ʋɑʋːɑ	U+0A35: GURMUKHI LETTER VA	gurmukhi
ਸ		sə	s		s¶	s	m	consonant					səsːɑ	U+0A38: GURMUKHI LETTER SA	gurmukhi
ਹ		ɦə	h	ɦ	h	h	u	consonant					ɦɑɦɑ	U+0A39: GURMUKHI LETTER HA	gurmukhi
															
															
\u0A59	p	xə	x		x	x		consonant					kʰəkʰːɑ pɛɾ bɪnd̪i	U+0A59: GURMUKHI LETTER KHHA	gurmukhi
\u0A5A	p	ɣə	ġ	ɣ ġ	y	ɣ		consonant					gəgːɑ pɛɾ bɪnd̪i	U+0A5A: GURMUKHI LETTER GHHA	gurmukhi
\u0A33	p	ɭə	ḷ	ɭ ḷ	l	ɭ		consonant					ləlːɑ pɛɾ bɪnd̪i	U+0A33: GURMUKHI LETTER LLA	gurmukhi
\u0A5B	p	zə	z		z	z		consonant					ʤəʤːɑ pɛɾ bɪnd̪i	U+0A5B: GURMUKHI LETTER ZA	gurmukhi
\u0A5E	p	fə	f		f	f		consonant					pʰəpʰːɑ pɛɾ bɪnd̪i	U+0A5E: GURMUKHI LETTER FA	gurmukhi
\u0A36	p	ʃə	ś	ʃ ś	s	ʃ		consonant					səsːɑ pɛɾ bɪnd̪i	U+0A36: GURMUKHI LETTER SHA	gurmukhi
															
															
ੵ					y	y̆	|	medial y					yakash	U+0A75: GURMUKHI SIGN YAKASH​	gurmukhi
															
															
ਁ			m̐	m̐		–	+							U+0A01: GURMUKHI SIGN ADAK BINDI​	gurmukhi
ੰ			ṃ	ṃ	N	ŋ̽	X	vowel nasalisation					tippi	U+0A70: GURMUKHI TIPPI​	gurmukhi
ਂ			ṁ	ṁ	[	˜	x	vowel nasalisation					bindi	U+0A02: GURMUKHI SIGN BINDI​	gurmukhi
ਃ			ḥ	ḥ	h	h̽	_	visarga					visarg	U+0A03: GURMUKHI SIGN VISARGA​	gurmukhi
															
															
ੲ		∅		∅	[	‘	@	vowel support	d				iɽi	U+0A72: GURMUKHI IRI	gurmukhi
ੳ		∅			[	’	!	vowel support	d				uɽɑ	U+0A73: GURMUKHI URA	gurmukhi
ਅ		ə	a		E	ə	D	vowel support & independent vowel					æɽɑ	U+0A05: GURMUKHI LETTER A	gurmukhi
															
															
ਆ		ɑ ä	ā	ɑ ä ā	A	ạ̄	E	independent vowel		ਾ			kannā	U+0A06: GURMUKHI LETTER AA	gurmukhi
ਇ		ɪ	i	ɪ	I	ɪ̣	F	independent vowel		ਿ			sihārī	U+0A07: GURMUKHI LETTER I	gurmukhi
ਈ		i	ī	ī	I	ị	R	independent vowel		ੀ			bihārī	U+0A08: GURMUKHI LETTER II	gurmukhi
ਉ		ʊ	u	ʊ	U	ʊ̣	G	independent vowel		ੁ			onkaṛ	U+0A09: GURMUKHI LETTER U	gurmukhi
ਊ		u	ū	ū	U	ụ	T	independent vowel		ੂ			dulankaṛ	U+0A0A: GURMUKHI LETTER UU	gurmukhi
ਏ		e	ē	ē	E	ẹ	S	independent vowel		ੇ			lāvā̃	U+0A0F: GURMUKHI LETTER EE	gurmukhi
ਐ		ɛ	ai	ɛ	E	ɛ̣	W	independent vowel		ੈ			dulāvā̃	U+0A10: GURMUKHI LETTER AI	gurmukhi
ਓ		o	o		O	ọ	A	independent vowel		ੋ			hōṛā	U+0A13: GURMUKHI LETTER OO	gurmukhi
ਔ		ɔ	au	ɔ	O	ɔ̣	Q	independent vowel		ੌ			kanōṛā	U+0A14: GURMUKHI LETTER AU	gurmukhi
															
															
ਾ		ɑ ä	ā		a	ā	e	vowel sign			ਆ		kannā	U+0A3E: GURMUKHI VOWEL SIGN AA​	gurmukhi
ਿ		ɪ	i		i	ɪ	f	vowel sign			ਇ		sihārī	U+0A3F: GURMUKHI VOWEL SIGN I​	gurmukhi
ੀ		i	ī		i	ī	r	vowel sign			ਈ		bihārī	U+0A40: GURMUKHI VOWEL SIGN II​	gurmukhi
ੁ		ʊ	u		u	ʊ	g	vowel sign			ਉ		onkaṛ	U+0A41: GURMUKHI VOWEL SIGN U​	gurmukhi
ੂ		u	ū		u	ū	t	vowel sign			ਊ		dulankaṛ	U+0A42: GURMUKHI VOWEL SIGN UU​	gurmukhi
ੇ		e	ē		e	e	s	vowel sign			ਏ		lāvā̃	U+0A47: GURMUKHI VOWEL SIGN EE​	gurmukhi
ੈ		ɛ	ai		e	ɛ	w	vowel sign			ਐ		dulāvā̃	U+0A48: GURMUKHI VOWEL SIGN AI​	gurmukhi
ੋ		o	o		o	o	a	vowel sign			ਓ		hōṛā	U+0A4B: GURMUKHI VOWEL SIGN OO​	gurmukhi
ੌ		ɔ	au		o	ɔ	q	vowel sign			ਔ		kanōṛā	U+0A4C: GURMUKHI VOWEL SIGN AU​	gurmukhi
															
															
੦			0		0	0	0	digit				ਸਿਫ਼ਰ	sɪfəɾ	U+0A66: GURMUKHI DIGIT ZERO	gurmukhi
੧			1		1	1	1	digit				ਇੱਕ	ɪkː	U+0A67: GURMUKHI DIGIT ONE	gurmukhi
੨			2		2	2	2	digit				ਦੋ	d̪oː	U+0A68: GURMUKHI DIGIT TWO	gurmukhi
੩			3		3	3	3	digit				ਤਿੰਨ	t̪ɪnː	U+0A69: GURMUKHI DIGIT THREE	gurmukhi
੪			4		4	4	4	digit				ਚਾਰ	tʃɑːɾ	U+0A6A: GURMUKHI DIGIT FOUR	gurmukhi
੫			5		5	5	5	digit				ਪੰਜ	pəndʒ	U+0A6B: GURMUKHI DIGIT FIVE	gurmukhi
੬			6		6	6	6	digit				ਛੇ	tʃʰeː	U+0A6C: GURMUKHI DIGIT SIX	gurmukhi
੭			7		7	7	7	digit				ਸੱਤ	sət̪ː	U+0A6D: GURMUKHI DIGIT SEVEN	gurmukhi
੮			8		8	8	8	digit				ਅੱਠ	əʈʰː	U+0A6E: GURMUKHI DIGIT EIGHT	gurmukhi
੯			9		9	9	9	digit				ਨੌਂ	nɔ̃	U+0A6F: GURMUKHI DIGIT NINE	gurmukhi
															
															
ੴ						–	V	symbol					ek onkar	U+0A74: GURMUKHI EK ONKAR	gurmukhi
☬								symbol					adi shakti	U+262C: ADI SHAKTI	
															
															
੍					*	͓	d	virama					halant	U+0A4D: GURMUKHI SIGN VIRAMA​	gurmukhi
਼					[	ˑ	]	nukta						U+0A3C: GURMUKHI SIGN NUKTA​	gurmukhi
ੑ					[	ˊ	\	high tone marker					udaat	U+0A51: GURMUKHI SIGN UDAAT​	gurmukhi
ੱ					[	˖	=	gemination marker					addak	U+0A71: GURMUKHI ADDAK​	gurmukhi
															
															
।					,	.	>							U+002E U+0020 U+0964: FULL STOP, SPACE, DEVANAGARI DANDA	devanagari
॥					[	¶	<							U+0965: DEVANAGARI DOUBLE DANDA	devanagari
															
															
															
															
															
															
															
\u200C					=	ₓ							zero-width non-joiner	U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D					=	₊							zero-width joiner	U+200D: ZERO WIDTH JOINER	punctuation
															
															
															
															
															
															
															
ਖ਼	s	xə	x		x	kʰˑ	$	consonant with nukta					kʰəkʰːɑ pɛɾ bɪnd̪i	U+0A16 U+0A3C: GURMUKHI LETTER KHA, GURMUKHI SIGN NUKTA	
ਗ਼	s	ɣə	ġ		y	gˑ	%	consonant with nukta					gəgːɑ pɛɾ bɪnd̪i	U+0A17 U+0A3C: GURMUKHI LETTER GA, GURMUKHI SIGN NUKTA	
ਲ਼	s	ɭə	ḷ		l	lˑ	n	consonant with nukta					ləlːɑ pɛɾ bɪnd̪i	U+0A32 U+0A3C: GURMUKHI LETTER LA, GURMUKHI SIGN NUKTA	
ਜ਼	s	zə	z		z	ʤˑ	^	consonant with nukta					ʤəʤːɑ pɛɾ bɪnd̪i	U+0A1C U+0A3C: GURMUKHI LETTER JA, GURMUKHI SIGN NUKTA	
ਫ਼	s	fə	f		f	pʰˑ	&	consonant with nukta					pʰəpʰːɑ pɛɾ bɪnd̪i	U+0A2B U+0A3C: GURMUKHI LETTER PHA, GURMUKHI SIGN NUKTA	
ਸ਼	s	ʃə	ś		s	sˑ	M	consonant with nukta						U+0A38 U+0A3C: GURMUKHI LETTER SA, GURMUKHI SIGN NUKTA	
															
															
															
੍ਰ						–	#							U+0A4D U+0A30: GURMUKHI SIGN VIRAMA, LETTER RA​	
ੜ੍ਹ						–	Z							U+0A5C U+0A4D U+0A39: GURMUKHI LETTER RRA, SIGN VIRAMA, LETTER HA	




`


latinPanel = 'ɑ ä ā d͡ʒ ɖ ḍ ə ə̀ ē ɛ ġ ɦ ḥ ɪ ī kʰ ɭ ḷ m̐ ṃ ṁ ŋə ṅ ɲ ñ ɳ ṇ ∅ ɔ pʰ ɽ ṛ ʃ ś t͡ʃ t͡ʃʰ ʈ ṭ ʈʰ tʰ ʊ ū ʋ ɣ'


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
