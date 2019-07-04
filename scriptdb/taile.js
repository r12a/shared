var spreadsheet = `
ᥐ		k	k	ka	consonant				U+1950: TAI LE LETTER KA
ᥠ		k	kʰ	kʰ	consonant				U+1960: TAI LE LETTER KHA
ᥒ		n	ŋ	ŋa	consonant				U+1952: TAI LE LETTER NGA
									
ᥓ		c	ʦ	ʦa	consonant				U+1953: TAI LE LETTER TSA
ᥡ		c	ʦʰ	ʦʰa	consonant				U+1961: TAI LE LETTER TSHA
									
ᥖ		t	t	ta	consonant				U+1956: TAI LE LETTER TA
ᥗ		t	tʰ	tʰa	consonant				U+1957: TAI LE LETTER THA
ᥢ		n¶	n	na	consonant				U+1962: TAI LE LETTER NA
									
ᥙ		p	p	pa	consonant				U+1959: TAI LE LETTER PA
ᥚ		p	pʰ	pʰa	consonant				U+195A: TAI LE LETTER PHA
ᥛ		m	m	ma	consonant				U+195B: TAI LE LETTER MA
									
ᥕ		y	y	ja	consonant				U+1955: TAI LE LETTER YA
ᥘ		l	l	la	consonant				U+1958: TAI LE LETTER LA
ᥝ		w	v	v ʷ	consonant				U+195D: TAI LE LETTER VA
									
ᥞ		h	h	ha	consonant				U+195E: TAI LE LETTER HA
ᥑ		x	x	xa	consonant				U+1951: TAI LE LETTER XA
ᥔ		s	s	sa	consonant				U+1954: TAI LE LETTER SA
ᥜ		f	f	fa	consonant				U+195C: TAI LE LETTER FA
									
ᥟ		}	ʔ	ʔa	consonant				U+195F: TAI LE LETTER QA
									
									
									
ᥣ		a	a	aː	vowel				U+1963: TAI LE LETTER A
ᥥ		e	e	e	vowel				U+1965: TAI LE LETTER EE
ᥫ		e	ə	ə	vowel				U+196B: TAI LE LETTER E
ᥦ		e	ɛ	ɛ ia	vowel				U+1966: TAI LE LETTER EH
ᥤ		i	i	i	vowel				U+1964: TAI LE LETTER I
ᥪ		u	ɯ	ɯ	vowel				U+196A: TAI LE LETTER UE
ᥩ		o	ɔ	ɔ ua	vowel				U+1969: TAI LE LETTER O
ᥨ		o	o	o	vowel				U+1968: TAI LE LETTER OO
ᥧ		u	u	u	vowel				U+1967: TAI LE LETTER U
									
ᥬ		a	aᵚ	aɯ	dipthong				U+196C: TAI LE LETTER AUE
ᥭ		j	ʲ	j	semivowel				U+196D: TAI LE LETTER AI
									
									
ᥰ		^	²̱	˥˥	tone letter				U+1970: TAI LE LETTER TONE-2
ᥱ		^	³̱	˩˩	tone letter				U+1971: TAI LE LETTER TONE-3
ᥲ		^	⁴̱	˧˩	tone letter				U+1972: TAI LE LETTER TONE-4
ᥳ		^	⁵̱	˥˧	tone letter				U+1973: TAI LE LETTER TONE-5
ᥴ		^	⁶̱	˨˦	tone letter				U+1974: TAI LE LETTER TONE-6
									
									
									
									
									
									
̈		^	²	˥˥	tone mark	infrequent			U+0308: COMBINING DIAERESIS​
̌		^	³	˩˩	tone mark	infrequent			U+030C: COMBINING CARON​
̀		^	⁴	˧˩	tone mark	infrequent			U+0300: COMBINING GRAVE ACCENT​
̇		^	⁵	˥˧	tone mark	infrequent			U+0307: COMBINING DOT ABOVE​
́		^	⁶	˨˦	tone mark	infrequent			U+0301: COMBINING ACUTE ACCENT​
									
〈		(	(						U+3008: LEFT ANGLE BRACKET
〉		)	)						U+3009: RIGHT ANGLE BRACKET
《		(	(						U+300A: LEFT DOUBLE ANGLE BRACKET
》		)	)						U+300B: RIGHT DOUBLE ANGLE BRACKET
（		(	(						U+FF08: FULLWIDTH LEFT PARENTHESIS
）		)	)						U+FF09: FULLWIDTH RIGHT PARENTHESIS
！		!	!						U+FF01: FULLWIDTH EXCLAMATION MARK
？		?	?						U+FF1F: FULLWIDTH QUESTION MARK
：		:	:						U+FF1A: FULLWIDTH COLON
；		;	;						U+FF1B: FULLWIDTH SEMICOLON
。		.	.						U+3002: IDEOGRAPHIC FULL STOP
、		,	,						U+3001: IDEOGRAPHIC COMMA
，		,	,						U+FF0C: FULLWIDTH COMMA
．		.	.						U+FF0E: FULLWIDTH FULL STOP
									
									
									
၀		§	0̣	0	myanmar digit	infrequent			U+1040: MYANMAR DIGIT ZERO
၁		§	1̣	1	myanmar digit	infrequent			U+1041: MYANMAR DIGIT ONE
၂		§	2̣	2	myanmar digit	infrequent			U+1042: MYANMAR DIGIT TWO
၃		§	3̣	3	myanmar digit	infrequent			U+1043: MYANMAR DIGIT THREE
၄		§	4̣	4	myanmar digit	infrequent			U+1044: MYANMAR DIGIT FOUR
၅		§	5̣	5	myanmar digit	infrequent			U+1045: MYANMAR DIGIT FIVE
၆		§	6̣	6	myanmar digit	infrequent			U+1046: MYANMAR DIGIT SIX
၇		§	7̣	7	myanmar digit	infrequent			U+1047: MYANMAR DIGIT SEVEN
၈		§	8̣	8	myanmar digit	infrequent			U+1048: MYANMAR DIGIT EIGHT
၉		§	9̣	9	myanmar digit	infrequent			U+1049: MYANMAR DIGIT NINE
									
									
									
									
									
									
ᥨᥝ	s	o	o	o					U+1968 U+195D: TAI LE LETTER OO, LETTER VA
`


var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"transckey": 0,
"transcription":0,
"ipaLoc": 4,
"typeLoc": 5,
"statusLoc": 6,
"nameLoc": 7,
"nnameLoc": 8,
"numLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"ucsName":9,

//"othertranscriptions": [[4, 'ISO 15919']]
}

