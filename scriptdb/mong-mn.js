var spreadsheet = `
ᠠ	a	a ə		a	a	a	Lo		vowel				U+1820: MONGOLIAN LETTER A	✓	a	а	ɑ
ᠡ	e	i e ə ∅		e	e	e	Lo		vowel				U+1821: MONGOLIAN LETTER E	✓	e	є	ə
ᠢ	i	i ə ∅		i	i	i	Lo		vowel				U+1822: MONGOLIAN LETTER I	✓	i	и й ы ь	i ɪ
ᠣ	o	ɔ ə ∅		o	ɔ	W	Lo		vowel				U+1823: MONGOLIAN LETTER O	✓	o	о	ɔ
ᠤ	u	ʊ ə ∅		u	ʊ	v	Lo		vowel				U+1824: MONGOLIAN LETTER U	✓	u	у	ʊ
ᠥ	O	o ə ∅		ö	o	o	Lo		vowel				U+1825: MONGOLIAN LETTER OE	✓	O	ө	o
ᠦ	U	u ə		ü	u	u	Lo		vowel				U+1826: MONGOLIAN LETTER UE	✓	U	ү	u
ᠧ	E	i e ə		ë	ə	e	Lo		vowel				U+1827: MONGOLIAN LETTER EE	✓	E	э	ə
																	
																	
ᠨ	n	n		n	n	n	Lo		consonant				U+1828: MONGOLIAN LETTER NA	✓	n	н	n ŋ
ᠩ	N	ŋ		ng	ŋ	N	Lo		consonant				U+1829: MONGOLIAN LETTER ANG	✓	N	нг	ŋ
ᠪ	b	p w		b	b	b	Lo		consonant				U+182A: MONGOLIAN LETTER BA	✓	b	б	b
ᠫ	p	pʰ		p	p	p	Lo		consonant				U+182B: MONGOLIAN LETTER PA	✓	p	п	p
ᠬ	x	x		x	x	h	Lo		consonant				U+182C: MONGOLIAN LETTER QA	✓	q	х	x
ᠭ	g	ɣ ɡ		g	g	g	Lo		consonant				U+182D: MONGOLIAN LETTER GA	✓	g	г	ɣ ɡ
ᠮ	m	m		m	m	m	Lo		consonant				U+182E: MONGOLIAN LETTER MA	✓	m	м	m
ᠯ	l	ɮ		l	l	l	Lo		consonant				U+182F: MONGOLIAN LETTER LA	✓	l	л	l
ᠰ	s	s ʃ		s	s	s	Lo		consonant				U+1830: MONGOLIAN LETTER SA	✓	s	с	s ʃ
ᠱ	S	ʃ		š	š	x	Lo		consonant				U+1831: MONGOLIAN LETTER SHA	✓	s	ш	ʃ
ᠲ	t	t		t	t	t	Lo		consonant				U+1832: MONGOLIAN LETTER TA	✓	t	т	t
ᠳ	d	t tʰ		d	d	d	Lo		consonant				U+1833: MONGOLIAN LETTER DA	✓	d	д	d
ᠴ	c	t͡ʃʰ t͡sʰ		č	č	q	Lo		consonant				U+1834: MONGOLIAN LETTER CHA	✓	c	ч ц	ʧʰ
ᠵ	D	d͡ʒ d͡z		ǰ	ǰ	j	Lo		consonant				U+1835: MONGOLIAN LETTER JA	✓	j	ж з	ʤ
ᠶ	y	j		y	y	y	Lo		consonant				U+1836: MONGOLIAN LETTER YA	✓	y	-й е* ё* ю* я*	j
ᠷ	r	r		r	r	r	Lo		consonant				U+1837: MONGOLIAN LETTER RA	✓	r	р	r
																	
																	
ᠸ	v	v		w	v		Lo	l	consonant	for transliteration			U+1838: MONGOLIAN LETTER WA	✓	v	в	w v
ᠹ	f	f		f	f	f	Lo	l	consonant	for transliteration			U+1839: MONGOLIAN LETTER FA	✓	f	ф	f
ᠺ	k	k		k	k	k	Lo	l	consonant	for transliteration			U+183A: MONGOLIAN LETTER KA	✓	k	к	k
ᠻ	k	k		ḳ	ḳ	K	Lo	l	consonant	for transliteration			U+183B: MONGOLIAN LETTER KHA	✓			
ᠼ	t	ʦ		c	c	c	Lo	l	consonant	for transliteration			U+183C: MONGOLIAN LETTER TSA	✓	c	ц	ʦ
ᠽ	d	ʣ		z	z		Lo	l	consonant	for transliteration			U+183D: MONGOLIAN LETTER ZA	✓	z	з	ʣ
ᠾ	h	h		h	h	H	Lo	l	consonant	for transliteration			U+183E: MONGOLIAN LETTER HAA	✓	h	х	x
ᠿ	z	ʐ		ž	ž		Lo	l	consonant	for transliteration			U+183F: MONGOLIAN LETTER ZRA	✓	r	ж	ʐ
ᡀ	l	lʰ		lh	lʰ		Lo	l	consonant	for transliteration			U+1840: MONGOLIAN LETTER LHA	✓	l	лх	lh
ᡁ	z	ʑ		ẑ	ẑ	Z	Lo	l	consonant	for transliteration			U+1841: MONGOLIAN LETTER ZHI	✓	z	з	ʈʂɻ
ᡂ	c	ɕ		ĉ	ĉ	C	Lo	l	consonant	for transliteration			U+1842: MONGOLIAN LETTER CHI	✓	c	ч	ʈʂʰɻ
ᡛ				ń	ń		Lo						U+185B: MONGOLIAN LETTER TODO NIA	✓	n		
																	
																	
\u180E	[			_	·		Cf		mvs				U+180E: MONGOLIAN VOWEL SEPARATOR		[		
\u202F	]			-	-				nnbsp				U+202F NARROW NO-BREAK SPACE		]		
																	
																	
																	
																	
																	
᠀	|			»	¶		Po		section mark				U+1800: MONGOLIAN BIRGA	✓			
᠅	|			«	|		Po		section mark				U+1805: MONGOLIAN FOUR DOTS	✓			
᠃	.			.	.	.	Po		full stop				U+1803: MONGOLIAN FULL STOP	✓	.		
。	.			.	•		Po		ideographic full stop				U+3002: IDEOGRAPHIC FULL STOP				
᠂	,¶			,	,	,	Po		comma				U+1802: MONGOLIAN COMMA	✓	,		
、	,			,	⹁		Po		ideographic comma				U+3001: IDEOGRAPHIC COMMA				
᠄	:			:	:		Po		colon				U+1804: MONGOLIAN COLON	✓	:		
;	;			;	;		Po		semicolon				U+003B: SEMICOLON				
！	!			!	!		Po		exclamation mark				U+FF01: FULLWIDTH EXCLAMATION MARK				
？	?			?	?		Po		question mark				U+FF1F: FULLWIDTH QUESTION MARK				
⁈	?				⁈		Po		question-exclamation mark				U+2048: QUESTION EXCLAMATION MARK				
⁉	!				⁉		Po		exclamation-question mark				U+2049: EXCLAMATION QUESTION MARK				
																	
																	
᠁	.			…	…	Q	Po		ellipsis				U+1801: MONGOLIAN ELLIPSIS	✓			
																	
																	
																	
《	<			“	{		Ps		quotation mark				U+300A: LEFT DOUBLE ANGLE BRACKET				
》	>			”	}		Pe		quotation mark				U+300B: RIGHT DOUBLE ANGLE BRACKET				
«	<			“	«	:	Pi		quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK				
»	>			”	»	;	Pf		quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK				
〈	<			“	<		Ps		quotation mark				U+3008: LEFT ANGLE BRACKET				
〉	>			”	>		Pe		quotation mark				U+3009: RIGHT ANGLE BRACKET				
‹	<			‘	‹		Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK				
›	>			’	›		Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK				
“	<			“	 “		Pi		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK				
”	>			”	”		Pf		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK				
‘	<			‘	‘		Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK				
’	>			’	’		Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK				
																	
																	
																	
(	(			(	(		Ps		parenthesis				U+0028: LEFT PARENTHESIS				
[	(			[	[		Ps		bracket				U+005B: LEFT SQUARE BRACKET				
)	)			)	)		Pe		parenthesis				U+0029: RIGHT PARENTHESIS				
]	)			]	]		Pe		bracket				U+005D: RIGHT SQUARE BRACKET				
〔	<				[		Ps		bracket				U+3014: LEFT TORTOISE SHELL BRACKET				
〕	>				]		Pe		bracket				U+3015: RIGHT TORTOISE SHELL BRACKET				
																	
																	
-	-			-	-				hyphen				U+2010: HYPHEN				
‑	-			‑	‑		Pd		non-breaking hyphen				U+2011: NON-BREAKING HYPHEN				
–	-			–	–		Pd		en dash				U+2013: EN DASH				
—	-			—	—		Pd		em dash				U+2014: EM DASH				
																	
																	
																	
᠊	_			–	_		Po		baseline extender				U+180A: MONGOLIAN NIRUGU	✓	_		
																	
																	
ʼ				ʼ	ʼ		Lm		apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE				
§				§	§		Po		section sign				U+00A7: SECTION SIGN				
†				†	†		Po		dagger				U+2020: DAGGER				
‡				‡	‡		Po		double dagger				U+2021: DOUBLE DAGGER				
′				′	′		Po		prime				U+2032: PRIME				
″				″	″		Po		double prime				U+2033: DOUBLE PRIME				
																	
																	
																	
																	
																	
																	
\u200C	=				ₓ		Cf		zwnj				U+200C: ZERO WIDTH NON-JOINER				
\u200D	=				₊		Cf		zwj				U+200D: ZERO WIDTH JOINER				
\u2067	=				ʳˡⁱ		Cf		rtl isolate				U+2067: RIGHT-TO-LEFT ISOLATE				
\u2066	=				ˡʳⁱ		Cf		ltr isolate				U+2066: LEFT-TO-RIGHT ISOLATE				
\u2068	=				ᶠˢⁱ		Cf		first-strong isolate				U+2068: FIRST STRONG ISOLATE				
\u2069	=				ᵖᵈⁱ		Cf		pop direction isolate				U+2069: POP DIRECTIONAL ISOLATE				
\u202B	=				ʳˡᵉ		Cf		rtl embed				U+202B: RIGHT-TO-LEFT EMBEDDING				
\u202A	=				ˡʳᵉ		Cf		ltr embed				U+202A: LEFT-TO-RIGHT EMBEDDING				
\u202C	=				ᵖᵈᶠ		Cf		pop direction				U+202C: POP DIRECTIONAL FORMATTING				
\u200F	=				ʳˡᵐ		Cf		rtl mark				U+200F: RIGHT-TO-LEFT MARK				
\u200E	=				ˡʳᵐ		Cf		ltr mark				U+200E: LEFT-TO-RIGHT MARK				
\u034F	=				ᶜᵍʲ		Mn​		combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER​				
\u061C	=				ᵃˡᵐ		Cf		arabic letter mark				U+061C: ARABIC LETTER MARK				
																	
																	
\u180B	^			\u0027	¹		Mn​		fvs1				U+180B: MONGOLIAN FREE VARIATION SELECTOR ONE​		^		
\u180C	^			"	²		Mn​		fvs2				U+180C: MONGOLIAN FREE VARIATION SELECTOR TWO​		^		
\u180D	^			\u0060	³		Mn​		fvs3				U+180D: MONGOLIAN FREE VARIATION SELECTOR THREE​		^		
																	
																	
																	
᠐	±			0	0̣	0	Nd		digit				U+1810: MONGOLIAN DIGIT ZERO	✓	0		
᠑	±			1	1̣	1	Nd		digit				U+1811: MONGOLIAN DIGIT ONE	✓	1		
᠒	±			2	2̣	2	Nd		digit				U+1812: MONGOLIAN DIGIT TWO	✓	2		
᠓	±			3	3̣	3	Nd		digit				U+1813: MONGOLIAN DIGIT THREE	✓	3		
᠔	±			4	4̣	4	Nd		digit				U+1814: MONGOLIAN DIGIT FOUR	✓	4		
᠕	±			5	5̣	5	Nd		digit				U+1815: MONGOLIAN DIGIT FIVE	✓	5		
᠖	±			6	6̣	6	Nd		digit				U+1816: MONGOLIAN DIGIT SIX	✓	6		
᠗	±			7	7̣	7	Nd		digit				U+1817: MONGOLIAN DIGIT SEVEN	✓	7		
᠘	±			8	8̣	8	Nd		digit				U+1818: MONGOLIAN DIGIT EIGHT	✓	8		
᠙	±			9	9̣	9	Nd		digit				U+1819: MONGOLIAN DIGIT NINE	✓	9		
																	
																	
%	%				%		Po		percentage mark				U+0025: PERCENT SIGN				
‰	%				‰		Po		per mille mark				U+2030: PER MILLE SIGN				



`


latinPanel = 'ĉ d͡ʒ d͡z ə ɡ ḳ ɮ ŋ ń ∅ ɔ pʰ ʃ š tʰ t͡ʃʰ t͡sʰ ʊ ɣ ž ẑ'



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

"nnameLoc": 11,
"nameLoc": 12,
"ucsName": 13,
"block": 14	,
"transcription2": 16,


"othertranscriptions": [[4, 'Joint Sino-Mongolian'],[16, 'Cyrillic']]
}