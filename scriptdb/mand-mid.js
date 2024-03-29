var spreadsheet = `mand-mid	key	ipa	ipa+	other	translit	transc	kbd	class	status	type	usage	shape	native name	latin name	ucs name	block
ـ	_				_		J	Lm		punctuation					U+0640: ARABIC TATWEEL	
،	,				,		K	Po		punctuation					U+060C: ARABIC COMMA	✓
؛	;				;		P	Po		punctuation					U+061B: ARABIC SEMICOLON	✓
؟	?				?		/	Po		punctuation					U+061F: ARABIC QUESTION MARK	✓
۔	.				.			Po	?	punctuation					U+06D4: ARABIC FULL STOP	
\u085A	[				̱		-	Mn		vocalisation mark					U+085A: MANDAIC VOCALIZATION MARK	
\u0859	/				ˑ		X	Mn		affrication mark					U+0859: MANDAIC AFFRICATION MARK	
\u085B	&				˖		~	Mn		gemination mark					U+085B: MANDAIC GEMINATION MARK	
٪	%				%			Po	?	punctuation					U+066A: ARABIC PERCENT SIGN	
࡞	|				¶		z	Po		section delimiter					U+085E: MANDAIC PUNCTUATION	✓
٠	0				0			Nd	?	digit					U+0660: ARABIC-INDIC DIGIT ZERO	
١	1				1			Nd	?	digit					U+0661: ARABIC-INDIC DIGIT ONE	
٢	2				2			Nd	?	digit					U+0662: ARABIC-INDIC DIGIT TWO	
٣	3				3			Nd	?	digit					U+0663: ARABIC-INDIC DIGIT THREE	
٤	4				4			Nd	?	digit					U+0664: ARABIC-INDIC DIGIT FOUR	
٥	5				5			Nd	?	digit					U+0665: ARABIC-INDIC DIGIT FIVE	
٦	6				6			Nd	?	digit					U+0666: ARABIC-INDIC DIGIT SIX	
٧	7				7			Nd	?	digit					U+0667: ARABIC-INDIC DIGIT SEVEN	
٨	8				8			Nd	?	digit					U+0668: ARABIC-INDIC DIGIT EIGHT	
٩	9				9			Nd	?	digit					U+0669: ARABIC-INDIC DIGIT NINE	
																
ࡉ	i	i e j			i	i	d	Lo		vowel		ࡉࡅࡉࡅࡉ ࡉ		ya	U+0849: MANDAIC LETTER AKSA	✓
ࡅ	u	u o w v			u	u	,	Lo		vowel		ࡅࡅࡅࡅࡅ ࡅ		wa/ushenna	U+0845: MANDAIC LETTER USHENNA	✓
ࡏ	e	e i ∅			ʿ	ʿ	u	Lo		vowel		ࡏࡅࡏࡅࡏ ࡏ		e	U+084F: MANDAIC LETTER IN	✓
ࡉ࡚	E	e			i̱					vowel					U+0849 U+085A: MANDAIC LETTER AKSA, VOCALIZATION MARK	
ࡅ࡚	O	o			u̱					vowel					U+0845 U+085A: MANDAIC LETTER USHENNA, VOCALIZATION MARK	
ࡀ	a	a ɔ			ā	ā	h	Lo		vowel		ࡀࡅࡀࡅࡀ ࡀ		a	U+0840: MANDAIC LETTER HALQA	✓
ࡀ࡚	A	a			ā̱					vowel					U+0840 U+085A: MANDAIC LETTER HALQA, VOCALIZATION MARK	
																
ࡉࡀ		iː			–	i				final vowel					U+0849 U+0840: MANDAIC LETTER AKSA, LETTER HALQA	
ࡏࡉ‍ 		i e								word-initial vowel						
ࡏࡅ		uː			–	u				word-initial vowel					U+084F U+0845: MANDAIC LETTER IN, LETTER USHENNA	
\bࡏࡅ	£				\bʿu				u	vowel					U+005C U+0062 U+084F U+0845: REVERSE SOLIDUS, LATIN SMALL LETTER B, LETTER IN, LETTER USHENNA	
ࡏࡉ\b	£				ʿi\b				u	vowel					U+084F U+0849 U+005C U+0062: MANDAIC LETTER IN, LETTER AKSA, REVERSE SOLIDUS, LATIN SMALL LETTER B	
																
ࡐ	p	p f			p	p	t	Lo		consonant		ࡐࡅࡐࡅࡐ ࡐ		pa	U+0850: MANDAIC LETTER AP	✓
ࡁ	b	b v w			b	b	f	Lo		consonant		ࡁࡅࡁࡅࡁ ࡁ		ba	U+0841: MANDAIC LETTER AB	✓
ࡕ	t	t θ			t	t	j	Lo		consonant		ࡕࡅࡕࡅࡕ ࡕ		ta	U+0855: MANDAIC LETTER AT	✓
ࡃ	d	d		ð	d	d	]	Lo		consonant		ࡃࡅࡃࡅࡃ ࡃ		da	U+0843: MANDAIC LETTER AD	✓
ࡈ	T	tˤ		ðˤ	ᵵ	ṭ		Lo		consonant		ࡈࡅࡈࡅࡈ ࡈ		ṭa	U+0848: MANDAIC LETTER ATT	✓
ࡊ	k	k χ			k	k	;	Lo		consonant		ࡊࡅࡊࡅࡊ ࡊ		ka	U+084A: MANDAIC LETTER AK	✓
ࡂ	g	ɡ ʁ			g	g	[	Lo		consonant		ࡂࡅࡂࡅࡂ ࡂ		ga	U+0842: MANDAIC LETTER AG	✓
ࡒ	q	q			q	q	r	Lo		consonant		ࡒࡅࡒࡅࡒ ࡒ		qa	U+0852: MANDAIC LETTER AQ	✓
ࡎ	s	s			s	s	s	Lo		consonant		ࡎࡅࡎࡅࡎ ࡎ		sa	U+084E: MANDAIC LETTER AS	✓
ࡑ	s	sˤ		s ʒ	ᵴ	ṣ	w	Lo		consonant		ࡑࡅࡑࡅࡑ ࡑ		ṣa	U+0851: MANDAIC LETTER ASZ	✓
ࡆ	z	z			z	z	.	Lo		consonant		ࡆࡅࡆࡅࡆ ࡆ		za	U+0846: MANDAIC LETTER AZ	✓
ࡔ	S	ʃ t͡ʃ		d͡ʒ	ʃ	š	a	Lo		consonant		ࡔࡅࡔࡅࡔ ࡔ		ša	U+0854: MANDAIC LETTER ASH	✓
ࡄ	h	h		ħ	h	h	i	Lo		consonant		ࡄࡅࡄࡅࡄ ࡄ		ha	U+0844: MANDAIC LETTER AH	✓
ࡌ	m	m			m	m	l	Lo		consonant		ࡌࡅࡌࡅࡌ ࡌ		ma	U+084C: MANDAIC LETTER AM	✓
ࡍ	n	n		ŋ	n	n	k	Lo		consonant		ࡍࡅࡍࡅࡍ ࡍ		na	U+084D: MANDAIC LETTER AN	✓
ࡓ	r	r		ɹ	r	r	v	Lo		consonant		ࡓࡅࡓࡅࡓ ࡓ		ra	U+0853: MANDAIC LETTER AR	✓
ࡋ	l	l			l	l	g	Lo		consonant		ࡋࡅࡋࡅࡋ ࡋ		la	U+084B: MANDAIC LETTER AL	✓
																
ࡖ	d	di			ḏ	ḏ	n	Lo		consonant		ࡖࡅࡖࡅࡖ ࡖ		dushenna/adu	U+0856: MANDAIC LETTER DUSHENNA	✓
ࡇ	h	iːʷ ħuᵘ	χ		ẖ	ẖ	p	Lo		consonant		ࡇࡅࡇࡅࡇ ࡇ		eh	U+0847: MANDAIC LETTER IT	✓
ࡗ	k	kḏi			k͟d	kḏ	e	Lo		consonant		ࡗࡅࡗࡅࡗ ࡗ		kad	U+0857: MANDAIC LETTER KAD	✓
																
ࡕ࡙		χt			tˑ					geminated consonant					U+0855 U+0859: MANDAIC LETTER AT, AFFRICATION MARK	
ࡔ࡙	C	t͡ʃ			ʃˑ					extended consonant					U+0854 U+0859: MANDAIC LETTER ASH, AFFRICATION MARK	
ࡐ࡙	F	f			pˑ					extended consonant					U+0850 U+0859: MANDAIC LETTER AP, AFFRICATION MARK	
ࡕ࡙	Q	θ			tˑ					extended consonant					U+0855 U+0859: MANDAIC LETTER AT, AFFRICATION MARK	
ࡃ࡙	D	ð			dˑ					extended consonant					U+0843 U+0859: MANDAIC LETTER AD, AFFRICATION MARK	
ࡈ࡙	Z	ðˤ			ᵵˑ					extended consonant					U+0848 U+0859: MANDAIC LETTER ATT, AFFRICATION MARK	
ࡑ࡙	Z	ʒ			ᵴˑ					extended consonant					U+0851 U+0859: MANDAIC LETTER ASZ, AFFRICATION MARK	
ࡊ࡙	X	χ			kˑ					extended consonant					U+084A U+0859: MANDAIC LETTER AK, AFFRICATION MARK	
ࡄ࡙	H	ħ			hˑ					extended consonant					U+0844 U+0859: MANDAIC LETTER AH, AFFRICATION MARK	
ࡂ࡙	Y	ʁ			gˑ					extended consonant					U+0842 U+0859: MANDAIC LETTER AG, AFFRICATION MARK	
ࡘ	{	ʕ			ʕ	ʕ	x	Lo		consonant		ࡘࡘࡘ ࡘ		ayin	U+0858: MANDAIC LETTER AIN	✓
																
																
ࡑࡀ					–		q				for the keyboard				U+0851 U+0840: MANDAIC LETTER ASZ, LETTER HALQA	
ࡋࡀ					–		b				for the keyboard				U+084B U+0840: MANDAIC LETTER AL, LETTER HALQA	
ࡊࡀ					–		y				for the keyboard				U+084A U+0840: MANDAIC LETTER AK, LETTER HALQA	
ࡍࡀ					–		o				for the keyboard				U+084D U+0840: MANDAIC LETTER AN, LETTER HALQA	
ࡐࡀ					–		m				for the keyboard				U+0850 U+0840: MANDAIC LETTER AP, LETTER HALQA	
‘					–		U	Pi	?		for the keyboard				U+2018: LEFT SINGLE QUOTATION MARK	
’					–		M	Pf	?		for the keyboard				U+2019: RIGHT SINGLE QUOTATION MARK	
«					–		{	Pi			for the keyboard				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»					–		}	Pf			for the keyboard				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
﴾					–			Pe		punctuation					U+FD3E: ORNATE LEFT PARENTHESIS	
﴿					–			Ps		punctuation					U+FD3F: ORNATE RIGHT PARENTHESIS	
(					–		D	Ps	?		for the keyboard				U+0028: LEFT PARENTHESIS	
)					–		F	Pe	?		for the keyboard				U+0029: RIGHT PARENTHESIS	
/					–		L	Po	?		for the keyboard				U+002F: SOLIDUS	
{					–		C	Ps	?		for the keyboard				U+007B: LEFT CURLY BRACKET	
}					–		V	Pe	?		for the keyboard				U+007D: RIGHT CURLY BRACKET	
.					–		<	Po							U+002E: FULL STOP	
,					–		>	Po	?		for the keyboard				U+002C: COMMA	
\u200C	[							Cf			zwnj				U+200C: ZERO WIDTH NON-JOINER	
`																
																
latinPanel = 'ʿ aː ā æ ɑ ɒ ḇ č ɛ ə ḏ ð ðˤ d͡ʒ ħuᵘ ẖ ħ ɪ iːʷ iː ḵ ɔ ɔː θ p̄ sˤ ṣ ʃ š ṯ tˤ ṭ t͡ʃ ʊ χ γ ʒ ʕ ˈ †ˌ'																
																
var cols = {																
key: 1,																
ipaLoc: 2,																
ipaPlus: 3,																
ipaOther: 4,																
transLoc: 5,																
transcription: 6,																
kbd: 7,																
class: 8,																
status: 9,																
typeLoc: 10,																
statusLoc: 11,																
																
shape: 12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'Latin']]																
}																