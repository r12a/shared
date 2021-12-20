var spreadsheet = `
प	p	p		p	p		Lo		consonant							U+092A: DEVANAGARI LETTER PA	✓
त	t¶	t		t	t		Lo		consonant							U+0924: DEVANAGARI LETTER TA	✓
च़	t	t͡s		c	ʦ				consonant							U+091A, U+093C: DEVANAGARI LETTER CA, SIGN NUKTA	
च	c	t͡ʃ		č	ʧ		Lo		consonant							U+091A: DEVANAGARI LETTER CA	✓
ट	t	ʈ		ṭ	ʈ		Lo		consonant							U+091F: DEVANAGARI LETTER TTA	✓
क	k	k		k	k		Lo		consonant							U+0915: DEVANAGARI LETTER KA	✓
																	
ब	b	b		b	b		Lo		consonant							U+092C: DEVANAGARI LETTER BA	✓
द	d¶	d		d	d		Lo		consonant							U+0926: DEVANAGARI LETTER DA	✓
ड	d	ɖ		ḍ	ɖ		Lo		consonant							U+0921: DEVANAGARI LETTER DDA	✓
ज	j	d͡ʒ		j	ʤ		Lo		consonant							U+091C: DEVANAGARI LETTER JA	✓
ग	g	g		g	g		Lo		consonant							U+0917: DEVANAGARI LETTER GA	✓
																	
फ	P	pʰ		ph	pʰ		Lo		consonant							U+092B: DEVANAGARI LETTER PHA	✓
थ	T¶	tʰ		th	tʰ		Lo		consonant							U+0925: DEVANAGARI LETTER THA	✓
छ़	T	t͡sʰ		ch	ʦʰ				consonant							U+091B, U+093C: DEVANAGARI LETTER CHA, SIGN NUKTA	
ठ	T	ʈʰ		ṭh	ʈʰ		Lo		consonant							U+0920: DEVANAGARI LETTER TTHA	✓
छ	C	t͡ʃʰ		čh	ʧʰ		Lo		consonant							U+091B: DEVANAGARI LETTER CHA	✓
ख	K	kʰ		kh	kʰ		Lo		consonant							U+0916: DEVANAGARI LETTER KHA	✓
																	
स	s¶	s		s	s		Lo		consonant							U+0938: DEVANAGARI LETTER SA	✓
श	s	ʃ		š	ʃ		Lo		consonant							U+0936: DEVANAGARI LETTER SHA	✓
ह	h	h		h	h		Lo		consonant							U+0939: DEVANAGARI LETTER HA	✓
																	
ज़	z	z		z	z				consonant							U+091C, U+093C: DEVANAGARI LETTER JA, SIGN NUKTA	
																	
म	m	m		m	m		Lo		consonant							U+092E: DEVANAGARI LETTER MA	✓
न	n¶	n		n	n		Lo		consonant							U+0928: DEVANAGARI LETTER NA	✓
																	
र	r	r		r	r		Lo		consonant							U+0930: DEVANAGARI LETTER RA	✓
ल	l	l		l	l		Lo		consonant							U+0932: DEVANAGARI LETTER LA	✓
य	y	j		y	y		Lo		consonant/palatalisation marker							U+092F: DEVANAGARI LETTER YA	✓
व	v	v w		w	v		Lo		consonant							U+0935: DEVANAGARI LETTER VA	✓
																	
																	
																	
\u095B	z	z		z	z		Lo	i	precomposed consonant	infrequent	ज़					U+095B: DEVANAGARI LETTER ZA	
																	
																	
ं	m	m n ŋ		ṁ	m̽		Mn​		final nasal						anusvara	U+0902: DEVANAGARI SIGN ANUSVARA	✓
य्	j	ʲ		ⁱ	y͓				palatalisation marker							U+092F DEVANAGARI LETTER YA, SIGN VIRAMA	
																	
																	
ि	i	i		i	i		Mc​		vowel sign				इ			U+093F: DEVANAGARI VOWEL SIGN I	✓
ी	i	iː		ī	ī		Mc​		vowel sign				ई			U+0940: DEVANAGARI VOWEL SIGN II	✓
ॖ	i	ɨ		ü	ɨ		Mn​		vowel sign				ॶ			U+0956: DEVANAGARI VOWEL SIGN UE	✓
ॗ	i	ɨː		ǖ	ɨ̄		Mn​		vowel sign				ॷ			U+0957: DEVANAGARI VOWEL SIGN UUE	✓
ु	u	u		u	u		Mn​		vowel sign				उ			U+0941: DEVANAGARI VOWEL SIGN U	✓
ू	u	uː		ū	ū		Mn​		vowel sign				ऊ			U+0942: DEVANAGARI VOWEL SIGN UU	✓
ॆ	e¶	e		e	e		Mn​		vowel sign				ऎ			U+0946: DEVANAGARI VOWEL SIGN SHORT E	✓
े	e	eː		ē	ē		Mn​		vowel sign				ए			U+0947: DEVANAGARI VOWEL SIGN E	✓
ऺ	e	ə		ö	ə		Mn​		vowel sign				ॳ			U+093A: DEVANAGARI VOWEL SIGN OE	✓
ऻ	e	əː		ȫ	ə̄		Mc​		vowel sign				ॴ			U+093B: DEVANAGARI VOWEL SIGN OOE	✓
ॊ	o	o		o	o		Mc​		vowel sign				ऒ			U+094A: DEVANAGARI VOWEL SIGN SHORT O	✓
ो	o	oː		ō	ō		Mc​		vowel sign				ओ			U+094B: DEVANAGARI VOWEL SIGN O	✓
ा	a	aː		ā	ā		Mc​		vowel sign				आ			U+093E: DEVANAGARI VOWEL SIGN AA	✓
ॏ	o	ɔː			ɔ		Mc​		vowel sign				ॵ			U+094F: DEVANAGARI VOWEL SIGN AW	✓
ै	e	əĭ		ai	əʲ		Mn​		vowel sign				ऐ			U+0948: DEVANAGARI VOWEL SIGN AI	✓
ौ	e	əŭ		au	əʷ		Mc​		vowel sign				औ			U+094C: DEVANAGARI VOWEL SIGN AU	✓
																	
																	
इ	I	i		i	ị		Lo		independent vowel			ि				U+0907: DEVANAGARI LETTER I	✓
ई	I	iː		ī	ị̄		Lo		independent vowel			ी				U+0908: DEVANAGARI LETTER II	✓
ॶ	I	ɨ		ü	ɨ̣		Lo		independent vowel			ॖ				U+0976: DEVANAGARI LETTER UE	✓
ॷ	I	ɨː		ǖ	ɨ̣̄		Lo		independent vowel			ॗ				U+0977: DEVANAGARI LETTER UUE	✓
उ	U	u		u	ụ		Lo		independent vowel			ु				U+0909: DEVANAGARI LETTER U	✓
ऊ	U	uː		ū	ụ̄		Lo		independent vowel			ू				U+090A: DEVANAGARI LETTER UU	✓
ऎ	E	e		e	ẹ		Lo		independent vowel			ॆ				U+090E: DEVANAGARI LETTER SHORT E	✓
ए	E	eː		ē	ẹ̄		Lo		independent vowel			े				U+090F: DEVANAGARI LETTER E	✓
ॳ	E	ə		ö	ə̣		Lo		independent vowel			ऺ				U+0973: DEVANAGARI LETTER OE	✓
ॴ	E	əː		ȫ	ə̣̄		Lo		independent vowel			ऻ				U+0974: DEVANAGARI LETTER OOE	✓
ऒ	O	o		o	ọ		Lo		independent vowel			ॊ				U+0912: DEVANAGARI LETTER SHORT O	✓
ओ	O	oː		ō	ọ̄		Lo		independent vowel			ो				U+0913: DEVANAGARI LETTER O	✓
अ	A	aː		a	ạ		Lo		independent vowel							U+0905: DEVANAGARI LETTER A	✓
आ	A	aː		ā	ạ̄		Lo		independent vowel			ा				U+0906: DEVANAGARI LETTER AA	✓
ॵ	O	ɔː			ɔ̣		Lo		independent vowel			ॏ				U+0975: DEVANAGARI LETTER AW	✓
ऐ	E	əĭ		ai	ə̣ʲ		Lo		independent vowel			ै				U+0910: DEVANAGARI LETTER AI	✓
औ	E	əŭ		au	ə̣ʷ		Lo		independent vowel			ौ				U+0914: DEVANAGARI LETTER AU	✓
																	
																	
ृ	R	ri		r̥	r̥		Mn​		vocalic vowel sign				ऋ			U+0943: DEVANAGARI VOWEL SIGN VOCALIC R	✓
ॄ		riː		r̥̄	r̥̄		Mn​		vowel sign				ॠ			U+0944: DEVANAGARI VOWEL SIGN VOCALIC RR	✓
ऋ	R	ri		r̥	r̥̣		Lo		vocalic independent vowel			ृ				U+090B: DEVANAGARI LETTER VOCALIC R	✓
ॠ		riː		r̥̄	r̥̣̄		Lo		independent vowel			ॄ				U+0960: DEVANAGARI LETTER VOCALIC RR	✓
																	
																	
																	
ॐ							Lo									U+0950: DEVANAGARI OM	✓
																	
																	
																	
																	
																	
																	
																	
																	
																	
ॲ		ə			ə̸̣		Lo	a	independent vowel	archaic (incorrect in modern use)		ॅ				U+0972: DEVANAGARI LETTER CANDRA A	✓
ॅ		ə			ə̸		Mn​	a	vowel sign	archaic (incorrect in modern use)			ॲ			U+0945: DEVANAGARI VOWEL SIGN CANDRA E​	✓
ऑ		əː			ə̸̣̄		Lo	a	independent vowel	archaic (incorrect in modern use)		ॉ				U+0911: DEVANAGARI LETTER CANDRA O	✓
ॉ		əː			ə̸̄		Mc​	a	vowel sign	archaic (incorrect in modern use)			ऑ			U+0949: DEVANAGARI VOWEL SIGN CANDRA O​	✓
																	
																	
ष		ʂ			ʂ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+0937: DEVANAGARI LETTER SSA	✓
क्ष		kʂ			k͓ʂ			r	consonant cluster	rare, spellings retained in Sanskrit loans						U+0915 U+094D U+0937: DEVANAGARI LETTER KA, DEVANAGARI SIGN VIRAMA, DEVANAGARI LETTER SSA	
झ		ɟʰ			jʰ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+091D: DEVANAGARI LETTER JHA	✓
ध		dʱ			dʱ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+0927: DEVANAGARI LETTER DHA	✓
ढ		ɖʱ			ɖʱ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+0922: DEVANAGARI LETTER DDHA	✓
घ		gʱ			gʱ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+0918: DEVANAGARI LETTER GHA	✓
भ		bʱ			bʱ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+092D: DEVANAGARI LETTER BHA	✓
ङ		ŋ			ŋ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+0919: DEVANAGARI LETTER NGA	✓
ण		ɳ			ɳ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+0923: DEVANAGARI LETTER NNA	✓
ञ		n			ɲ		Lo	r	consonant	rare, spellings retained in Sanskrit loans						U+091E: DEVANAGARI LETTER NYA	✓
ज्ञ		ɡj			ɟ͓ɲ			r	consonant cluster	rare, spellings retained in Sanskrit loans						U+091C U+094D U+091E: DEVANAGARI LETTER JA, SIGN VIRAMA, LETTER NYA	
																	
																	
																	
																	
।	|			.	|		Po		section divider						purna viram	U+0964: DEVANAGARI DANDA	✓
॥	|				¶		Po		section divider							U+0965: DEVANAGARI DOUBLE DANDA	✓
.	.			.	.		Po		full stop							U+002E: FULL STOP	
,	,			,	,		Po		comma							U+002C: COMMA	
⹁	,			⹁	⹁		Po		comma							U+2E41: REVERSED COMMA	
:	:			:	:		Po		colon							U+003A: COLON	
;	;			;	;		Po		semicolon							U+003B: SEMICOLON	
!	!			!	!		Po		exclamation mark							U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark							U+003F: QUESTION MARK	
																	
																	
…	.			…	…		Po		ellipsis							U+2026: HORIZONTAL ELLIPSIS	
																	
																	
																	
“	<			“	 “		Pi		quotation mark							U+201C: LEFT DOUBLE QUOTATION MARK	✓
”	>			”	”		Pf		quotation mark							U+201D: RIGHT DOUBLE QUOTATION MARK	✓
‘	<			‘	‘		Pi		quotation mark							U+2018: LEFT SINGLE QUOTATION MARK	✓
’	>			’	’		Pf		quotation mark							U+2019: RIGHT SINGLE QUOTATION MARK	✓
																	
																	
																	
(	(			(	(		Ps		parenthesis							U+0028: LEFT PARENTHESIS	
)	)			)	)		Ps		parenthesis							U+0029: RIGHT PARENTHESIS	
[	(			[	[		Pe		bracket							U+005B: LEFT SQUARE BRACKET	
]	)			]	]		Pe		bracket							U+005D: RIGHT SQUARE BRACKET	
																	
																	
-	-			-	-		Pd		hyphen							U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen							U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash							U+2013: EN DASH	
—	-			—	—		Pd		em dash							U+2014: EM DASH	✓
																	
																	
																	
																	
																	
																	
																	
ँ	[	̃		̃	˜		Mn​		nasalisation						candrabindu/anunāsika	U+0901: DEVANAGARI SIGN CANDRABINDU	✓
																	
																	
्	*				͞		Mn​		vowel-killer						halant	U+094D: DEVANAGARI SIGN VIRAMA	✓
																	
																	
ऽ	]			'	′		Lo		elision marker							U+093D: DEVANAGARI SIGN AVAGRAHA	✓
																	
																	
़	/				ˑ		Mn​		consonant modifier						nukta	U+093C: DEVANAGARI SIGN NUKTA	✓
																	
																	
																	
																	
																	
																	
॰	+				¨		Po		abbreviation marker							U+0970: DEVANAGARI ABBREVIATION SIGN	✓
																	
																	
																	
																	
																	
																	
																	
																	
ʼ				ʼ	ʼ		Lm		apostrophe							U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po		section sign							U+00A7: SECTION SIGN	
†				†	†		Po		dagger							U+2020: DAGGER	
‡				‡	‡		Po		double dagger							U+2021: DOUBLE DAGGER	
′				′	′		Po		prime							U+2032: PRIME	
″				″	″		Po		double prime							U+2033: DOUBLE PRIME	
																	
																	
																	
																	
																	
																	
\u200C	=				ᶻʷⁿʲ		Cf		zero-width non-joiner							U+200C: ZERO WIDTH NON-JOINER	
\u200D	=				ᶻʷʲ		Cf		zero-width joiner							U+200D: ZERO WIDTH JOINER	
\u034F	=				ᶜᵍʲ		Mn		combining grapheme joiner							U+034F: COMBINING GRAPHEME JOINER​	
\u2060	=				ʷʲ		Cf		word joiner							U+2060 WORD JOINER	
																	
																	
																	
																	
०	0			0	0̣		Nd		digit							U+0966: DEVANAGARI DIGIT ZERO	✓
१	1			1	1̣		Nd		digit							U+0967: DEVANAGARI DIGIT ONE	✓
२	2			2	2̣		Nd		digit							U+0968: DEVANAGARI DIGIT TWO	✓
३	3			3	3̣		Nd		digit							U+0969: DEVANAGARI DIGIT THREE	✓
४	4			4	4̣		Nd		digit							U+096A: DEVANAGARI DIGIT FOUR	✓
५	5			5	5̣		Nd		digit							U+096B: DEVANAGARI DIGIT FIVE	✓
६	6			6	6̣		Nd		digit							U+096C: DEVANAGARI DIGIT SIX	✓
७	7			7	7̣		Nd		digit							U+096D: DEVANAGARI DIGIT SEVEN	✓
८	8			8	8̣		Nd		digit							U+096E: DEVANAGARI DIGIT EIGHT	✓
९	9			9	9̣		Nd		digit							U+096F: DEVANAGARI DIGIT NINE	✓
																	
																	
₹	#				¤		Sc		currency symbol							U+20B9: INDIAN RUPEE SIGN	✓
																	
																	
																	
%	%				%		Po		percentage mark							U+0025: PERCENT SIGN	
‰	%				‰		Po		per mille mark							U+2030: PER MILLE SIGN	




												
`


latinPanel = '̃ aː ā bʱ č ḍ d͡ʒ dʱ ɖʱ eː ē ə əː ɡ gʱ iː ī ɨ ɨː ĭ ʲ ɟʰ kʰ ṁ ŋ ɳ ñ ö ȫ oː ō ɔː pʰ r̥ r̥̄ ʃ š ʂ t͡s t͡ʃ ʈ ṭ tʰ t͡sʰ ʈʰ t͡ʃʰ ü ǖ uː ū ŭ'




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

"equiv": 11,
"transckey": 0,
"dvowel": 12,
"ivowel": 13,
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
"ucsName":16,
"block":17,

"othertranscriptions": [[4, 'Latin']]
}


