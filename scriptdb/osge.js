var spreadsheet = `osge-osa	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	lcase	ucase	native name	latin name	ucs name	block
-	-			-	-			?	hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd	?	non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash						U+2013: EN DASH	✓
—	-			—	—		Pd		em dash						U+2014: EM DASH	✓
,	,			,	,		Po		comma						U+002C: COMMA	
;	;			;	;		Po		semicolon						U+003B: SEMICOLON	✓
̄	:			ː	̄		Mn	i	long vowel						U+0304: COMBINING MACRON	✓
̋	:			˝	̋		Mn	i	long high tone vowel						U+030B: COMBINING DOUBLE ACUTE ACCENT	✓
:	:			:	:		Po		colon						U+003A: COLON	✓
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	✓
?	?			?	?		Po		question mark						U+003F: QUESTION MARK	✓
.	.			.	.		Po		full stop						U+002E: FULL STOP	✓
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	✓
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	✓
[	(			[	[		Ps	?	bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS	✓
]	)			]	]		Pe	?	bracket						U+005D: RIGHT SQUARE BRACKET	
͘	[	̃		˜	̨	f	Mn		vowel nasalisation						U+0358: COMBINING DOT ABOVE RIGHT	✓
ʼ	]	ˀ		ˀ	ˀ		Lm		ejective indicator						U+02BC: MODIFIER LETTER APOSTROPHE	✓
%	%			%			Po	?	percentage mark						U+0025: PERCENT SIGN	
́	^			´	́		Mn	i	high tone						U+0301: COMBINING ACUTE ACCENT	✓
“	<			“	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
‘	<			\‘	\‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
”	>			”	”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
’	>			\’	\’		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
																
𐓘	a	ɑ		a	a	a	Ll		vowel			𐒰			U+104D8: OSAGE SMALL LETTER A	✓
𐓙	a	aɪ		aᶦ	ai		Ll		diphthong			𐒱			U+104D9: OSAGE SMALL LETTER AI	✓
𐓚	a	aɪ̃		aⁱ̃	aį		Ll		nasalised diphthong			𐒲			U+104DA: OSAGE SMALL LETTER AIN	✓
𐒰	A	Ɑ		A	A	A	Lu		vowel		𐓘				U+104B0: OSAGE CAPITAL LETTER A	✓
𐒱	A	AꞮ		Aᶦ	Ai		Lu		diphthong		𐓙				U+104B1: OSAGE CAPITAL LETTER AI	✓
𐒲	A	AꞮ̃		Aⁱ̃	Aį		Lu		nasalised diphthong		𐓚				U+104B2: OSAGE CAPITAL LETTER AIN	✓
𐓜	b	bɹ		bʳ	br	b	Ll		diphone			𐒴			U+104DC: OSAGE SMALL LETTER BRA	✓
𐒴	B	Bɹ		Bʳ	Br	B	Lu				𐓜				U+104B4: OSAGE CAPITAL LETTER BRA	✓
𐓲	c	t͡s		ʦ	c	r	Ll		affricate			𐓊			U+104F2: OSAGE SMALL LETTER TSA	✓
𐓳	c	ʰt͡s		ʦᶣ	hc		Ll	i	pre-aspirated affricate			𐓋			U+104F3: OSAGE SMALL LETTER EHTSA	✓
𐓴	c	t͡sʰ		ʦʰ	ch		Ll		aspirated affricate			𐓌			U+104F4: OSAGE SMALL LETTER TSHA	✓
𐓝	c	t͡ʃ		ʧ	č	c	Ll		affricate			𐒵			U+104DD: OSAGE SMALL LETTER CHA	✓
𐓞	c	ʰt͡ʃ		ʧᶣ	hč		Ll	i	pre-aspirated affricate			𐒶			U+104DE: OSAGE SMALL LETTER EHCHA	✓
𐓊	C	T͡S		C	C	R	Lu		affricate		𐓲				U+104CA: OSAGE CAPITAL LETTER TSA	✓
𐓌	C	T͡Sʰ		Cʰ	Ch		Lu		pre-aspirated affricate		𐓴				U+104CC: OSAGE CAPITAL LETTER TSHA	✓
𐓋	C	ʰT͡S		Cᶣ	Hc		Lu	i	aspirated affricate		𐓳				U+104CB: OSAGE CAPITAL LETTER EHTSA	✓
𐒵	C	T͡Ʃ		ʨ	Č	C	Lu		affricate		𐓝				U+104B5: OSAGE CAPITAL LETTER CHA	✓
𐒶	C	ʰT͡Ʃ		ʨᶣ	Hč		Lu	i	pre-aspirated affricate		𐓞				U+104B6: OSAGE CAPITAL LETTER EHCHA	✓
𐓵	d	ð		ð	ð	t	Ll		fricative			𐓍			U+104F5: OSAGE SMALL LETTER DHA	✓
𐓍	D	Ð		Ð	Ð	T	Lu		fricative		𐓵				U+104CD: OSAGE CAPITAL LETTER DHA	✓
𐓟	e	ε e		ɛ	e	e	Ll		vowel			𐒷			U+104DF: OSAGE SMALL LETTER E	✓
𐓛	e	ə		ə	ə	j	Ll		vowel			𐒳			U+104DB: OSAGE SMALL LETTER AH	✓
𐓠	e	eɪ̃		eⁱ̃	eį		Ll		nasalised diphthong			𐒸			U+104E0: OSAGE SMALL LETTER EIN	✓
𐒷	E	Ε E		Ɛ	E	E	Lu		vowel		𐓟				U+104B7: OSAGE CAPITAL LETTER E	✓
𐒳	E	Ə		Ə	Ə	J	Lu		vowel		𐓛				U+104B3: OSAGE CAPITAL LETTER AH	✓
𐒸	E	EꞮ̃		Eⁱ̃	Eį		Lu		nasalised diphthong		𐓠				U+104B8: OSAGE CAPITAL LETTER EIN	✓
𐓡	h	h		h	h	h	Ll		fricative			𐒹			U+104E1: OSAGE SMALL LETTER HA	✓
𐓢	h	hʲ		hʲ	hy	g	Ll		palatalised fricative			𐒺			U+104E2: OSAGE SMALL LETTER HYA	✓
𐒹	H	H		H	H	H	Lu		fricative		𐓡				U+104B9: OSAGE CAPITAL LETTER HA	✓
𐒺	H	Hʲ		Hʲ	Hy	G	Lu		palatalised fricative		𐓢				U+104BA: OSAGE CAPITAL LETTER HYA	✓
𐓣	i	i		i	i	i	Ll		vowel			𐒻			U+104E3: OSAGE SMALL LETTER I	✓
𐒻	I	I		I	I	I	Lu		vowel		𐓣				U+104BB: OSAGE CAPITAL LETTER I	✓
𐓤	k	k		k	k	k	Ll		plosive			𐒼			U+104E4: OSAGE SMALL LETTER KA	✓
𐓥	k	ʰk kk		kᶣ	hk		Ll	i	pre-aspirated plosive			𐒽			U+104E5: OSAGE SMALL LETTER EHKA	✓
𐓦	k	kʲ		kʲ	ky	q	Ll		palatalised plosive			𐒾			U+104E6: OSAGE SMALL LETTER KYA	✓
𐒼	K	K		K	K	K	Lu		plosive		𐓤				U+104BC: OSAGE CAPITAL LETTER KA	✓
𐒽	K	ʰK KK		Kᶣ	Hk		Lu	i	pre-aspirated plosive		𐓥				U+104BD: OSAGE CAPITAL LETTER EHKA	✓
𐒾	K	Kʲ		Kʲ	Ky	Q	Lu		palatalised plosive		𐓦				U+104BE: OSAGE CAPITAL LETTER KYA	✓
𐓧	l	l		l	l	l	Ll		approximant			𐒿			U+104E7: OSAGE SMALL LETTER LA	✓
𐒿	L	L		L	L	L	Lu		approximant		𐓧				U+104BF: OSAGE CAPITAL LETTER LA	✓
𐓨	m	m		m	m	m	Ll		nasal			𐓀			U+104E8: OSAGE SMALL LETTER MA	✓
𐓀	M	M		M	M	M	Lu		nasal		𐓨				U+104C0: OSAGE CAPITAL LETTER MA	✓
𐓩	n	n		n	n	n	Ll		nasal			𐓁			U+104E9: OSAGE SMALL LETTER NA	✓
𐓁	N	N		N	N	N	Lu		nasal		𐓩				U+104C1: OSAGE CAPITAL LETTER NA	✓
𐓪	o	o		o	o	o	Ll		vowel			𐓂			U+104EA: OSAGE SMALL LETTER O	✓
𐓫	o	oɪ̃		oⁱ̃	oį		Ll		nasalised diphthong			𐓃			U+104EB: OSAGE SMALL LETTER OIN	✓
𐓂	O	O		O	O	O	Lu		vowel		𐓪				U+104C2: OSAGE CAPITAL LETTER O	✓
𐓃	O	OꞮ̃		Oⁱ̃	Oį		Lu		nasalised diphthong		𐓫				U+104C3: OSAGE CAPITAL LETTER OIN	✓
𐓬	p	p		p	p	p	Ll		plosive			𐓄			U+104EC: OSAGE SMALL LETTER PA	✓
𐓭	p	ʰp pp		pᶣ	hp		Ll	i	pre-aspirated plosive			𐓅			U+104ED: OSAGE SMALL LETTER EHPA	✓
𐓄	P	P		P	P	P	Lu		plosive		𐓬				U+104C4: OSAGE CAPITAL LETTER PA	✓
𐓅	P	ʰP PP		Pᶣ	Hp		Lu	i	pre-aspirated plosive		𐓭				U+104C5: OSAGE CAPITAL LETTER EHPA	✓
𐓮	s	s		s	s	s	Ll		fricative			𐓆			U+104EE: OSAGE SMALL LETTER SA	✓
𐓯	s	ʃ		ʃ	š	v	Ll		fricative			𐓇			U+104EF: OSAGE SMALL LETTER SHA	✓
𐓆	S	S		S	S	S	Lu		fricative		𐓮				U+104C6: OSAGE CAPITAL LETTER SA	✓
𐓇	S	Ʃ		Ʃ	Š	V	Lu		fricative		𐓯				U+104C7: OSAGE CAPITAL LETTER SHA	✓
𐓰	t	t		t	t	d	Ll		plosive			𐓈			U+104F0: OSAGE SMALL LETTER TA	✓
𐓱	t	ʰt tt		tᶣ	ht		Ll	i	pre-aspirated plosive			𐓉			U+104F1: OSAGE SMALL LETTER EHTA	✓
𐓈	T	T		T	T	D	Lu		plosive		𐓰				U+104C8: OSAGE CAPITAL LETTER TA	✓
𐓉	T	ʰT TT		Tᶣ	Ht		Lu	i	pre-aspirated plosive		𐓱				U+104C9: OSAGE CAPITAL LETTER EHTA	✓
𐓶	u	ʉ y		u	u	u	Ll		vowel			𐓎			U+104F6: OSAGE SMALL LETTER U	✓
𐓎	U	Ʉ Y		U	U	U	Lu		vowel		𐓶				U+104CE: OSAGE CAPITAL LETTER U	✓
𐓷	w	w		w	w	w	Ll		approximant			𐓏			U+104F7: OSAGE SMALL LETTER WA	✓
𐓏	W	W		W	W	W	Lu		approximant		𐓷				U+104CF: OSAGE CAPITAL LETTER WA	✓
𐓸	x	x		x	x	x	Ll		fricative			𐓐			U+104F8: OSAGE SMALL LETTER KHA	✓
𐓐	X	X		X	X	X	Lu		fricative		𐓸				U+104D0: OSAGE CAPITAL LETTER KHA	✓
𐓹	y	ɣ		ɣ	ɣ		Ll		fricative			𐓑			U+104F9: OSAGE SMALL LETTER GHA	✓
𐓑	Y	Ɣ		Ɣ	Ɣ		Lu		fricative		𐓹				U+104D1: OSAGE CAPITAL LETTER GHA	✓
𐓺	z	z		z	z	z	Ll		fricative			𐓒			U+104FA: OSAGE SMALL LETTER ZA	✓
𐓻	z	ʒ		ʒ	ž	y	Ll		fricative			𐓓			U+104FB: OSAGE SMALL LETTER ZHA	✓
𐓒	Z	Z		Z	Z	Z	Lu		fricative		𐓺				U+104D2: OSAGE CAPITAL LETTER ZA	✓
𐓓	Z	Ʒ		Ʒ	Ž	Y	Lu		fricative		𐓻				U+104D3: OSAGE CAPITAL LETTER ZHA	✓
𐓣͘		ĩ		i˜	į				nasalised vowel						U+104E3 U+0358: OSAGE SMALL LETTER I, COMBINING DOT ABOVE RIGHT	
𐓪͘		õ		o˜	ǫ				nasalised vowel						U+104EA U+0358: OSAGE SMALL LETTER O, COMBINING DOT ABOVE RIGHT	
𐓛͘		ə̃		ə˜	ę				nasalised vowel						U+104DB U+0358: OSAGE SMALL LETTER AH, COMBINING DOT ABOVE RIGHT	
𐓘͘		ã		a˜	ą				nasalised vowel						U+104D8 U+0358: OSAGE SMALL LETTER A, COMBINING DOT ABOVE RIGHT	
																
𐒻͘		Ĩ		I˜	į				nasalised vowel						U+104BB U+0358: OSAGE CAPITAL LETTER I, COMBINING DOT ABOVE RIGHT	
𐓂͘		Õ		O˜	ǫ				nasalised vowel						U+104C2 U+0358: OSAGE CAPITAL LETTER O, COMBINING DOT ABOVE RIGHT	
𐒳͘		Ə̃		Ə˜	Ę				nasalised vowel						U+104B3 U+0358: OSAGE CAPITAL LETTER AH, COMBINING DOT ABOVE RIGHT	
𐒰͘		Ã		A˜	Ą				nasalised vowel						U+104B0 U+0358: OSAGE CAPITAL LETTER A, COMBINING DOT ABOVE RIGHT	
																
𐓬ʼ		pˀ		pˀ	pˀ				ejective plosive						U+104EC U+02BC: OSAGE SMALL LETTER PA, MODIFIER LETTER APOSTROPHE	
𐓰ʼ		dˀ		dˀ	dˀ				ejective plosive						U+104F0 U+02BC: OSAGE SMALL LETTER TA, MODIFIER LETTER APOSTROPHE	
𐓲ʼ		tsˀ		ʦˀ	cˀ				ejective affricate						U+104F0 U+02BC: OSAGE SMALL LETTER TA, MODIFIER LETTER APOSTROPHE	
𐓤ʼ		kˀ		kˀ	kˀ				ejective plosive						U+104E4 U+02BC: OSAGE SMALL LETTER KA, MODIFIER LETTER APOSTROPHE	
																
𐓬𐓸		px		px	px				aspirated plosive						U+104EC U+104F8: OSAGE SMALL LETTER PA, OSAGE SMALL LETTER KHA	
𐓬𐓯		pʃ		pʃ	pš				aspirated plosive						U+104EC U+104EF: OSAGE SMALL LETTER PA, OSAGE SMALL LETTER SHA	
𐓰𐓸		tx		tx	tx				aspirated plosive						U+104F0 U+104F8: OSAGE SMALL LETTER TA, OSAGE SMALL LETTER KHA	
𐓤𐓸		kx		kx	kx				aspirated plosive						U+104E4 U+104F8: OSAGE SMALL LETTER KA, OSAGE SMALL LETTER KHA	
𐓤𐓯		pʃ		kʃ	kš				aspirated plosive						U+104E4 U+104EF: OSAGE SMALL LETTER KA, OSAGE SMALL LETTER SHA	
																
^				–			Sk	a	vowel nasalisation						U+005E: CIRCUMFLEX ACCENT	
																
ʼ				ʼ	ʼ		Lm		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	✓
§				§	§		Po	?	section sign						U+00A7: SECTION SIGN	
†				†	†		Po	?	dagger						U+2020: DAGGER	
‡				‡	‡		Po	?	double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po	?	prime						U+2032: PRIME	
″				″	″		Po	?	double prime						U+2033: DOUBLE PRIME	
`																
																
latinPanel = 'ɑ ã ą č ð dˀ ə ə̃ ę ʰp ʰt ʰk ʰt͡s ʰt͡ʃ hʲ ĩ į ɪ ɪ̃ kʲ kˀ õ ǫ pˀ ɹ ʃ š t͡s t͡sʰ t͡ʃ tsˀ ʉ ɣ ʒ ž'																
																
var cols = {																
key: 1,																
ipaLoc: 2,																
ipaPlus: 3,																
transLoc: 4,																
transcription: 5,																
kbd: 6,																
class: 7,																
status: 8,																
typeLoc: 9,																
statusLoc: 10,																
																
lc:11,																
uc:12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'Latin']]																
}																