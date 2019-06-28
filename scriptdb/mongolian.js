var spreadsheet = `
ᠠ	a	a	a	a	а	ɑ	a ə	vowel			U+1820: MONGOLIAN LETTER A
ᠡ	e	e	e	e	є	ə	i e ə ∅	vowel			U+1821: MONGOLIAN LETTER E
ᠢ	i	i	i	i	и й ы ь	i ɪ	i ə ∅	vowel			U+1822: MONGOLIAN LETTER I
ᠣ	o	ɔ	o	o	о	ɔ	ɔ ə ∅	vowel			U+1823: MONGOLIAN LETTER O
ᠤ	u	ʊ	u	u	у	ʊ	ʊ ə ∅	vowel			U+1824: MONGOLIAN LETTER U
ᠥ	O	o	O	ö	ө	o	o ə ∅	vowel			U+1825: MONGOLIAN LETTER OE
ᠦ	U	u	U	ü	ү	u	u ə	vowel			U+1826: MONGOLIAN LETTER UE
ᠧ	E	ə	E	ë	э	ə	i e ə	vowel			U+1827: MONGOLIAN LETTER EE
											
											
ᠨ	n	n	n	n	н	n ŋ	n	consonant			U+1828: MONGOLIAN LETTER NA
ᠩ	N	ŋ	N	ng	нг	ŋ	ŋ	consonant			U+1829: MONGOLIAN LETTER ANG
ᠪ	b	b	b	b	б	b	p w	consonant			U+182A: MONGOLIAN LETTER BA
ᠫ	p	p	p	p	п	p	pʰ	consonant			U+182B: MONGOLIAN LETTER PA
ᠬ	x	x	q	x	х	x	x	consonant			U+182C: MONGOLIAN LETTER QA
ᠭ	g	g	g	g	г	ɣ g	ɢ g	consonant			U+182D: MONGOLIAN LETTER GA
ᠮ	m	m	m	m	м	m	m	consonant			U+182E: MONGOLIAN LETTER MA
ᠯ	l	l	l	l	л	l	ɮ	consonant			U+182F: MONGOLIAN LETTER LA
ᠰ	s	s	s	s	с	s ʃ	s ʃ	consonant			U+1830: MONGOLIAN LETTER SA
ᠱ	S	ʃ	s	š	ш	ʃ	ʃ	consonant			U+1831: MONGOLIAN LETTER SHA
ᠲ	t	t	t	t	т	t	t	consonant			U+1832: MONGOLIAN LETTER TA
ᠳ	d	d	d	d	д	d	t tʰ	consonant			U+1833: MONGOLIAN LETTER DA
ᠴ	c	č	c	č	ч ц	ʧʰ	ʧʰ tsʰ	consonant			U+1834: MONGOLIAN LETTER CHA
ᠵ	D	ʤ	j	ǰ	ж з	ʤ	ʤ dz	consonant			U+1835: MONGOLIAN LETTER JA
ᠶ	y	y	y	y	-й е* ё* ю* я*	j	j	consonant			U+1836: MONGOLIAN LETTER YA
ᠷ	r	r	r	r	р	r	r	consonant			U+1837: MONGOLIAN LETTER RA
											
											
ᠸ	v	v	v	w	в	w v		consonant			U+1838: MONGOLIAN LETTER WA
ᠹ	f	f	f	f	ф	f		consonant			U+1839: MONGOLIAN LETTER FA
ᠺ	k	k̇	k	k	к	k		consonant			U+183A: MONGOLIAN LETTER KA
ᠻ	k	k̇		ḳ				consonant			U+183B: MONGOLIAN LETTER KHA
ᠼ	t	ʦ	c	c	ц	ʦ		consonant			U+183C: MONGOLIAN LETTER TSA
ᠽ	d	ʣ	z	z	з	ʣ		consonant			U+183D: MONGOLIAN LETTER ZA
ᠾ	h	h	h	h	х	x		consonant			U+183E: MONGOLIAN LETTER HAA
ᠿ	z	ʐ	r	ž	ж	ʐ		consonant			U+183F: MONGOLIAN LETTER ZRA
ᡀ	l	lʰ	l	lh	лх	lh		consonant			U+1840: MONGOLIAN LETTER LHA
ᡁ	z	ʑ	z	ẑ	з	ʈʂɻ		consonant			U+1841: MONGOLIAN LETTER ZHI
ᡂ	c	ɕ	c	ĉ	ч	ʈʂʰɻ		consonant			U+1842: MONGOLIAN LETTER CHI
ᡛ			n	ń							U+185B: MONGOLIAN LETTER TODO NIA
											
											
᠀	|	¶		&				section mark			U+1800: MONGOLIAN BIRGA
᠅	|	#		#				section mark			U+1805: MONGOLIAN FOUR DOTS
᠁	.	…		…				ellipsis			U+1801: MONGOLIAN ELLIPSIS
᠂	,	,	,	,				comma			U+1802: MONGOLIAN COMMA
᠃	.	\u002E	.	.				full stop			U+1803: MONGOLIAN FULL STOP
᠄	:	:	:	:				colon			U+1804: MONGOLIAN COLON
᠊	_	_	_	"–
"				baseline lengthener			U+180A: MONGOLIAN NIRUGU
( 	(	(									U+0028 U+0020: LEFT PARENTHESIS, SPACE
)	)	)									U+0029: RIGHT PARENTHESIS
〈	(	<									U+3008: LEFT ANGLE BRACKET
〉	)	>									U+3009: RIGHT ANGLE BRACKET
《	(	{									U+300A: LEFT DOUBLE ANGLE BRACKET
》	)	}									U+300B: RIGHT DOUBLE ANGLE BRACKET
〔	(	[									U+3014: LEFT TORTOISE SHELL BRACKET
〕	)	]									U+3015: RIGHT TORTOISE SHELL BRACKET
											
\u180E	[	·	[	_				mvs			U+180E: MONGOLIAN VOWEL SEPARATOR
\u202F	]	-	]	-				nnbsp			U+202F NARROW NO-BREAK SPACE
											
											
\u180B	^	¹	^	\u0027				fvs1			U+180B: MONGOLIAN FREE VARIATION SELECTOR ONE​
\u180C	^	²	^	"				fvs2			U+180C: MONGOLIAN FREE VARIATION SELECTOR TWO​
\u180D	^	³	^	\u0060				fvs3			U+180D: MONGOLIAN FREE VARIATION SELECTOR THREE​
\u200D	=	˖	=	*				zwj			U+200D: ZERO WIDTH JOINER
\u200C	=	ˣ	=	^				zwnj			U+200C: ZERO WIDTH NON-JOINER
											
											
᠐	0	0	0	0				digit			U+1810: MONGOLIAN DIGIT ZERO
᠑	1	1	1	1				digit			U+1811: MONGOLIAN DIGIT ONE
᠒	2	2	2	2				digit			U+1812: MONGOLIAN DIGIT TWO
᠓	3	3	3	3				digit			U+1813: MONGOLIAN DIGIT THREE
᠔	4	4	4	4				digit			U+1814: MONGOLIAN DIGIT FOUR
᠕	5	5	5	5				digit			U+1815: MONGOLIAN DIGIT FIVE
᠖	6	6	6	6				digit			U+1816: MONGOLIAN DIGIT SIX
᠗	7	7	7	7				digit			U+1817: MONGOLIAN DIGIT SEVEN
᠘	8	8	8	8				digit			U+1818: MONGOLIAN DIGIT EIGHT
᠙	9	9	9	9				digit			U+1819: MONGOLIAN DIGIT NINE

`

var cols = {
"key": 1,
"transLoc": 2,
"ipaLoc": 6,
"typeLoc": 8,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 0,
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
"transcription":4,
"transcription2":5,
"ucsName": 11,


"othertranscriptions": [[4, 'Joint Sino-Mongolian'],[5, 'Cyrillic']]
}