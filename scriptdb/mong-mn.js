var spreadsheet = `
ᠠ		a ə	a	ə	a	a	a	vowel				U+1820: MONGOLIAN LETTER A	mongolian	a	а	ɑ
ᠡ		i e ə ∅	e	∅	e	e	e	vowel				U+1821: MONGOLIAN LETTER E	mongolian	e	є	ə
ᠢ		i ə ∅	i		i	i	i	vowel				U+1822: MONGOLIAN LETTER I	mongolian	i	и й ы ь	i ɪ
ᠣ		ɔ ə ∅	o	ɔ	o	ɔ	W	vowel				U+1823: MONGOLIAN LETTER O	mongolian	o	о	ɔ
ᠤ		ʊ ə ∅	u	ʊ	u	ʊ	v	vowel				U+1824: MONGOLIAN LETTER U	mongolian	u	у	ʊ
ᠥ		o ə ∅	ö		O	o	o	vowel				U+1825: MONGOLIAN LETTER OE	mongolian	O	ө	o
ᠦ		u ə	ü		U	u	u	vowel				U+1826: MONGOLIAN LETTER UE	mongolian	U	ү	u
ᠧ		i e ə	ë		E	ə	e	vowel				U+1827: MONGOLIAN LETTER EE	mongolian	E	э	ə
																
																
ᠨ		n	n		n	n	n	consonant				U+1828: MONGOLIAN LETTER NA	mongolian	n	н	n ŋ
ᠩ		ŋ	ng	ŋ	N	ŋ	N	consonant				U+1829: MONGOLIAN LETTER ANG	mongolian	N	нг	ŋ
ᠪ		p w	b		b	b	b	consonant				U+182A: MONGOLIAN LETTER BA	mongolian	b	б	b
ᠫ		pʰ	p	pʰ	p	p	p	consonant				U+182B: MONGOLIAN LETTER PA	mongolian	p	п	p
ᠬ		x	x		x	x	h	consonant				U+182C: MONGOLIAN LETTER QA	mongolian	q	х	x
ᠭ		ɣ ɡ	g	ɣ ɡ	g	g	g	consonant				U+182D: MONGOLIAN LETTER GA	mongolian	g	г	ɣ ɡ
ᠮ		m	m		m	m	m	consonant				U+182E: MONGOLIAN LETTER MA	mongolian	m	м	m
ᠯ		ɮ	l	ɮ	l	l	l	consonant				U+182F: MONGOLIAN LETTER LA	mongolian	l	л	l
ᠰ		s ʃ	s	ʃ	s	s	s	consonant				U+1830: MONGOLIAN LETTER SA	mongolian	s	с	s ʃ
ᠱ		ʃ	š	š	S	š	x	consonant				U+1831: MONGOLIAN LETTER SHA	mongolian	s	ш	ʃ
ᠲ		t	t		t	t	t	consonant				U+1832: MONGOLIAN LETTER TA	mongolian	t	т	t
ᠳ		t tʰ	d	tʰ	d	d	d	consonant				U+1833: MONGOLIAN LETTER DA	mongolian	d	д	d
ᠴ		t͡ʃʰ t͡sʰ	č	t͡ʃʰ t͡sʰ	c	č	q	consonant				U+1834: MONGOLIAN LETTER CHA	mongolian	c	ч ц	ʧʰ
ᠵ		d͡ʒ d͡z	ǰ	d͡ʒ  d͡z	D	ǰ	j	consonant				U+1835: MONGOLIAN LETTER JA	mongolian	j	ж з	ʤ
ᠶ		j	y		y	y	y	consonant				U+1836: MONGOLIAN LETTER YA	mongolian	y	-й е* ё* ю* я*	j
ᠷ		r	r		r	r	r	consonant				U+1837: MONGOLIAN LETTER RA	mongolian	r	р	r
																
																
ᠸ		v	w		v	v		consonant	for transliteration			U+1838: MONGOLIAN LETTER WA	mongolian	v	в	w v
ᠹ		f	f		f	f	f	consonant	for transliteration			U+1839: MONGOLIAN LETTER FA	mongolian	f	ф	f
ᠺ		k	k		k	k	k	consonant	for transliteration			U+183A: MONGOLIAN LETTER KA	mongolian	k	к	k
ᠻ		k	ḳ	ḳ	k	ḳ	K	consonant	for transliteration			U+183B: MONGOLIAN LETTER KHA	mongolian			
ᠼ		ʦ	c		t	c	c	consonant	for transliteration			U+183C: MONGOLIAN LETTER TSA	mongolian	c	ц	ʦ
ᠽ		ʣ	z		d	z		consonant	for transliteration			U+183D: MONGOLIAN LETTER ZA	mongolian	z	з	ʣ
ᠾ		h	h		h	h	H	consonant	for transliteration			U+183E: MONGOLIAN LETTER HAA	mongolian	h	х	x
ᠿ		ʐ	ž	ž	z	ž		consonant	for transliteration			U+183F: MONGOLIAN LETTER ZRA	mongolian	r	ж	ʐ
ᡀ		lʰ	lh		l	lʰ		consonant	for transliteration			U+1840: MONGOLIAN LETTER LHA	mongolian	l	лх	lh
ᡁ		ʑ	ẑ	ẑ	z	ẑ	Z	consonant	for transliteration			U+1841: MONGOLIAN LETTER ZHI	mongolian	z	з	ʈʂɻ
ᡂ		ɕ	ĉ	ĉ	c	ĉ	C	consonant	for transliteration			U+1842: MONGOLIAN LETTER CHI	mongolian	c	ч	ʈʂʰɻ
ᡛ			ń	ń		ń						U+185B: MONGOLIAN LETTER TODO NIA	mongolian	n		
																
																
\u180E			_		[	·		mvs				U+180E: MONGOLIAN VOWEL SEPARATOR	mongolian	[		
\u202F			-		]	-		nnbsp				U+202F NARROW NO-BREAK SPACE	mongolian	]		
																
																
																
																
																
᠀			»		|	¶		section mark				U+1800: MONGOLIAN BIRGA	mongolian			
᠅			«		|	|		section mark				U+1805: MONGOLIAN FOUR DOTS	mongolian			
᠃			.		.	.	.	full stop				U+1803: MONGOLIAN FULL STOP	mongolian	.		
。			.		.	•		ideographic full stop				U+3002: IDEOGRAPHIC FULL STOP				
᠂			,		,¶	,	,	comma				U+1802: MONGOLIAN COMMA	mongolian	,		
、			,		,	⹁		ideographic comma				U+3001: IDEOGRAPHIC COMMA				
᠄			:		:	:		colon				U+1804: MONGOLIAN COLON	mongolian	:		
;			;		;	;		semicolon				U+003B: SEMICOLON				
！			!		!	!		exclamation mark				U+FF01: FULLWIDTH EXCLAMATION MARK				
？			?		?	?		question mark				U+FF1F: FULLWIDTH QUESTION MARK				
⁈					?	⁈		question-exclamation mark				U+2048: QUESTION EXCLAMATION MARK	punctuation			
⁉					!	⁉		exclamation-question mark				U+2049: EXCLAMATION QUESTION MARK	punctuation			
																
																
᠁			…		.	…	Q	ellipsis				U+1801: MONGOLIAN ELLIPSIS	mongolian			
																
																
																
《			“		<	{		quotation mark				U+300A: LEFT DOUBLE ANGLE BRACKET				
》			”		>	}		quotation mark				U+300B: RIGHT DOUBLE ANGLE BRACKET				
«			“		<	«	:	quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK				
»			”		>	»	;	quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK				
〈			“		<	<		quotation mark				U+3008: LEFT ANGLE BRACKET				
〉			”		>	>		quotation mark				U+3009: RIGHT ANGLE BRACKET				
‹			‘		<	‹		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK				
›			’		>	›		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK				
“			“		<	 “		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK				
”			”		>	”		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK				
‘			‘		<	‘		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK				
’			’		>	’		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK				
																
																
																
(			(		(	(		parenthesis				U+0028: LEFT PARENTHESIS				
[			[		(	[		bracket				U+005B: LEFT SQUARE BRACKET				
)			)		)	)		parenthesis				U+0029: RIGHT PARENTHESIS				
]			]		)	]		bracket				U+005D: RIGHT SQUARE BRACKET				
〔					<	[		bracket				U+3014: LEFT TORTOISE SHELL BRACKET				
〕					>	]		bracket				U+3015: RIGHT TORTOISE SHELL BRACKET				
																
																
-			-		-	-		hyphen				U+2010: HYPHEN				
‑			‑		-	‑		non-breaking hyphen				U+2011: NON-BREAKING HYPHEN				
–			–		-	–		en dash				U+2013: EN DASH				
—			—		-	—		em dash				U+2014: EM DASH				
																
																
																
᠊			–		_	_		baseline extender				U+180A: MONGOLIAN NIRUGU	mongolian	_		
																
																
ʼ			ʼ			ʼ		apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE				
§			§			§		section sign				U+00A7: SECTION SIGN				
†			†			†		dagger				U+2020: DAGGER				
‡			‡			‡		double dagger				U+2021: DOUBLE DAGGER				
′			′			′		prime				U+2032: PRIME				
″			″			″		double prime				U+2033: DOUBLE PRIME				
																
																
																
																
																
																
\u200C					=	ₓ		zwnj				U+200C: ZERO WIDTH NON-JOINER				
\u200D					=	₊		zwj				U+200D: ZERO WIDTH JOINER				
\u2067					=	ʳˡⁱ		rtl isolate				U+2067: RIGHT-TO-LEFT ISOLATE				
\u2066					=	ˡʳⁱ		ltr isolate				U+2066: LEFT-TO-RIGHT ISOLATE				
\u2068					=	ᶠˢⁱ		first-strong isolate				U+2068: FIRST STRONG ISOLATE				
\u2069					=	ᵖᵈⁱ		pop direction isolate				U+2069: POP DIRECTIONAL ISOLATE				
\u202B					=	ʳˡᵉ		rtl embed				U+202B: RIGHT-TO-LEFT EMBEDDING				
\u202A					=	ˡʳᵉ		ltr embed				U+202A: LEFT-TO-RIGHT EMBEDDING				
\u202C					=	ᵖᵈᶠ		pop direction				U+202C: POP DIRECTIONAL FORMATTING				
\u200F					=	ʳˡᵐ		rtl mark				U+200F: RIGHT-TO-LEFT MARK				
\u200E					=	ˡʳᵐ		ltr mark				U+200E: LEFT-TO-RIGHT MARK				
\u034F					=	ᶜᵍʲ		combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER​				
\u061C					=	ᵃˡᵐ		arabic letter mark				U+061C: ARABIC LETTER MARK				
																
																
\u180B			\u0027		^	¹		fvs1				U+180B: MONGOLIAN FREE VARIATION SELECTOR ONE​	mongolian	^		
\u180C			"		^	²		fvs2				U+180C: MONGOLIAN FREE VARIATION SELECTOR TWO​	mongolian	^		
\u180D			\u0060		^	³		fvs3				U+180D: MONGOLIAN FREE VARIATION SELECTOR THREE​	mongolian	^		
																
																
																
᠐			0		±	0̣	0	digit				U+1810: MONGOLIAN DIGIT ZERO	mongolian	0		
᠑			1		±	1̣	1	digit				U+1811: MONGOLIAN DIGIT ONE	mongolian	1		
᠒			2		±	2̣	2	digit				U+1812: MONGOLIAN DIGIT TWO	mongolian	2		
᠓			3		±	3̣	3	digit				U+1813: MONGOLIAN DIGIT THREE	mongolian	3		
᠔			4		±	4̣	4	digit				U+1814: MONGOLIAN DIGIT FOUR	mongolian	4		
᠕			5		±	5̣	5	digit				U+1815: MONGOLIAN DIGIT FIVE	mongolian	5		
᠖			6		±	6̣	6	digit				U+1816: MONGOLIAN DIGIT SIX	mongolian	6		
᠗			7		±	7̣	7	digit				U+1817: MONGOLIAN DIGIT SEVEN	mongolian	7		
᠘			8		±	8̣	8	digit				U+1818: MONGOLIAN DIGIT EIGHT	mongolian	8		
᠙			9		±	9̣	9	digit				U+1819: MONGOLIAN DIGIT NINE	mongolian	9		
																
																
%					%	%		percentage mark				U+0025: PERCENT SIGN				
‰					%	‰		per mille mark				U+2030: PER MILLE SIGN				



`


latinPanel = 'ĉ d͡ʒ d͡z ə ɡ ḳ ɮ ŋ ń ∅ ɔ pʰ ʃ š tʰ t͡ʃʰ t͡sʰ ʊ ɣ ž ẑ'



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
"nnameLoc": 10,
"nameLoc": 11,
"numLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"ucsName": 12,
"block": 13,
"transcription2": 15,


"othertranscriptions": [[3, 'Joint Sino-Mongolian'],[15, 'Cyrillic']]
}