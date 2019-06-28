var spreadsheet = `
ࡁ	b	b	b	consonant	b	ba			ࡁࡅࡁࡅࡁ ࡁ	U+0841: MANDAIC LETTER AB
ࡂ	g	g	ɡ	consonant	g	ga			ࡂࡅࡂࡅࡂ ࡂ	U+0842: MANDAIC LETTER AG
ࡃ	d	d	d	consonant	d	da			ࡃࡅࡃࡅࡃ ࡃ	U+0843: MANDAIC LETTER AD
ࡄ	h	h	h	consonant	h	ha			ࡄࡅࡄࡅࡄ ࡄ	U+0844: MANDAIC LETTER AH
ࡆ	z	z	z	consonant	z	za			ࡆࡅࡆࡅࡆ ࡆ	U+0846: MANDAIC LETTER AZ
ࡇ	h	ẖ	iːʷ ħuᵘ	consonant	ẖ	eh			ࡇࡅࡇࡅࡇ ࡇ	U+0847: MANDAIC LETTER IT
ࡈ	y	ᵵ	ᵵ	consonant	ṭ	ṭa			ࡈࡅࡈࡅࡈ ࡈ	U+0848: MANDAIC LETTER ATT
ࡊ	k	k	k	consonant	k	ka			ࡊࡅࡊࡅࡊ ࡊ	U+084A: MANDAIC LETTER AK
ࡋ	l	l	l	consonant	l	la			ࡋࡅࡋࡅࡋ ࡋ	U+084B: MANDAIC LETTER AL
ࡌ	m	m	m	consonant	m	ma			ࡌࡅࡌࡅࡌ ࡌ	U+084C: MANDAIC LETTER AM
ࡍ	n	n	n	consonant	n	na			ࡍࡅࡍࡅࡍ ࡍ	U+084D: MANDAIC LETTER AN
ࡎ	s	s	s	consonant	s	sa			ࡎࡅࡎࡅࡎ ࡎ	U+084E: MANDAIC LETTER AS
ࡐ	p	p	p	consonant	p	pa			ࡐࡅࡐࡅࡐ ࡐ	U+0850: MANDAIC LETTER AP
ࡑ	s	ᵴ	ᵴ	consonant	ṣ	ṣa			ࡑࡅࡑࡅࡑ ࡑ	U+0851: MANDAIC LETTER ASZ
ࡒ	q	q	q	consonant	q	qa			ࡒࡅࡒࡅࡒ ࡒ	U+0852: MANDAIC LETTER AQ
ࡓ	r	r	r	consonant	r	ra			ࡓࡅࡓࡅࡓ ࡓ	U+0853: MANDAIC LETTER AR
ࡔ	s	ʃ	ʃ	consonant	š	ša			ࡔࡅࡔࡅࡔ ࡔ	U+0854: MANDAIC LETTER ASH
ࡕ	t¶	t	t	consonant	t	ta			ࡕࡅࡕࡅࡕ ࡕ	U+0855: MANDAIC LETTER AT
ࡖ	d	ḏ	di	consonant	ḏ	dushenna/adu			ࡖࡅࡖࡅࡖ ࡖ	U+0856: MANDAIC LETTER DUSHENNA
ࡗ	k	k͟d	kḏi	consonant	kḏ	kad			ࡗࡅࡗࡅࡗ ࡗ	U+0857: MANDAIC LETTER KAD
ࡘ	{	ʕ	ʕ	consonant	ʕ	ayin			ࡘࡅࡘࡅࡘ ࡘ	U+0858: MANDAIC LETTER AIN
										
										
ࡀ	a	ā	aː a	vowel	ā	a			ࡀࡅࡀࡅࡀ ࡀ	U+0840: MANDAIC LETTER HALQA
ࡅ	u	u	u uː o	vowel	u	wa/ushenna			ࡅࡅࡅࡅࡅ ࡅ	U+0845: MANDAIC LETTER USHENNA
ࡉ	i	i	i iː e	vowel	i	ya			ࡉࡅࡉࡅࡉ ࡉ	U+0849: MANDAIC LETTER AKSA
ࡏ	e	ʿ	- e i iː u	vowel	ʿ	e			ࡏࡅࡏࡅࡏ ࡏ	U+084F: MANDAIC LETTER IN
										
										
\u0859	/	ˑ		affrication mark						U+0859: MANDAIC AFFRICATION MARK​
\u085B	&	˖		gemination mark						U+085B: MANDAIC GEMINATION MARK​
\u085A	[	̱		vocalisation mark						U+085A: MANDAIC VOCALIZATION MARK​
										
										
࡞	|	¶		section delimiter						U+085E: MANDAIC PUNCTUATION
										
										
٪	%	%								U+066A: ARABIC PERCENT SIGN
؟	?	?								U+061F: ARABIC QUESTION MARK
؛	;	;								U+061B: ARABIC SEMICOLON
،	,	,								U+060C: ARABIC COMMA
۔	.	.								U+06D4: ARABIC FULL STOP
ـ	_	_								U+0640: ARABIC TATWEEL
										
										
										
٠	0	0								U+0660: ARABIC-INDIC DIGIT ZERO
١	1	1								U+0661: ARABIC-INDIC DIGIT ONE
٢	2	2								U+0662: ARABIC-INDIC DIGIT TWO
٣	3	3								U+0663: ARABIC-INDIC DIGIT THREE
٤	4	4								U+0664: ARABIC-INDIC DIGIT FOUR
٥	5	5								U+0665: ARABIC-INDIC DIGIT FIVE
٦	6	6								U+0666: ARABIC-INDIC DIGIT SIX
٧	7	7								U+0667: ARABIC-INDIC DIGIT SEVEN
٨	8	8								U+0668: ARABIC-INDIC DIGIT EIGHT
٩	9	9								U+0669: ARABIC-INDIC DIGIT NINE

`

var cols = {
"key": 1,
"transLoc": 2,
"ipaLoc": 3,
"typeLoc": 4,
"nnameLoc": 7,
"nameLoc": 6,
"numLoc": 0,
"statusLoc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":9,
"lc":0,
"uc":0,
"transcription":0,
"ucsName": 10, 


//"othertranscriptions": [[3, 'Transcription']]
}
