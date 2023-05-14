var spreadsheet = `grek-el	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	lc	uc	native name	latin name	ucs name	block
-	-			-	-			?	hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	✓
–	-			–	–		Pd		en dash						U+2013: EN DASH	✓
—	-			—	—		Pd		em dash						U+2014: EM DASH	✓
,	,			,	,		Po		comma				κόμμα	kóma	U+002C: COMMA	✓
;	;			;	?	q	Po		question mark				ερωτηματικό	erotimatikó	U+003B: SEMICOLON	✓
\u0387	;			;			Po	d	semicolon				άνω τελεία	áno telía	U+0387: GREEK ANO TELEIA	
:	:			:	:		Po		colon				διπλή τελεία	δiplí telía	U+003A: COLON	✓
!	!			!	!		Po		exclamation mark				θαυμαστικό	θavmastikó	U+0021: EXCLAMATION MARK	✓
\u037E	?			?			Po	d	question mark				ερωτηματικό	erotimatikó	U+037E: GREEK QUESTION MARK	
.	.			.	.		Po		full stop				τελεία	telía	U+002E: FULL STOP	✓
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	✓
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	✓
[	(			[	[		Ps	?	bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Pe		parenthesis						U+0029: RIGHT PARENTHESIS	✓
]	)			]	]		Pe	?	bracket						U+005D: RIGHT SQUARE BRACKET	
\u0301	[			ˊ		;	Mn	i	tonos						U+0301: COMBINING ACUTE ACCENT	
\u0308	[			¨		:	Mn	i	dialytika						U+0308: COMBINING DIAERESIS	
͵	#			‛			Sk		thousands indicator	for greek additive numbering					U+0375: GREEK LOWER NUMERAL SIGN	✓
ʹ	#			·			Lm		additive numbering indicator				κεραία		U+02B9: MODIFIER LETTER PRIME	
€	#			¤			Sc		currency symbol						U+20AC: EURO SIGN	
%	%			%			Po		percentage mark						U+0025: PERCENT SIGN	
‰	%			‰			Po	?	per mille mark						U+2030: PER MILLE SIGN	
«	<			«	“	<	Pi		quotation mark				εισαγωγικά	isaγoγiká	U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	<			‹			Pi	?	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
“	<			“	“		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
\‘	<			\‘	\‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
»	>			»	”	>	Pf		quotation mark				εισαγωγικά	isaγoγiká	U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
›	>			›			Pf	?	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
”	>			”	”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
\’	>			\’	\’		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
α	a	a		a		a	Ll		vowel			Α	άλφα	alpha	U+03B1: GREEK SMALL LETTER ALPHA	✓
ά	a	a		á			Ll		vowel + tonos			Ά			U+03AC: GREEK SMALL LETTER ALPHA WITH TONOS	✓
Α	A	A		A		A	Lu		vowel		α		άλφα	alpha	U+0391: GREEK CAPITAL LETTER ALPHA	✓
Ά	A	A		Á			Lu		vowel + tonos		ά				U+0386: GREEK CAPITAL LETTER ALPHA WITH TONOS	✓
δ	d	ð		ð		d	Ll		consonant			Δ	δέλτα	delta	U+03B4: GREEK SMALL LETTER DELTA	✓
Δ	D	Ð		Ð		D	Lu		consonant		δ		δέλτα	delta	U+0394: GREEK CAPITAL LETTER DELTA	✓
ε	e	e		e		e	Ll		vowel			Ε	έψιλον	epsilon	U+03B5: GREEK SMALL LETTER EPSILON	✓
έ	e	e		é			Ll		vowel + tonos			Έ			U+03AD: GREEK SMALL LETTER EPSILON WITH TONOS	✓
Ε	E	E		E		E	Lu		vowel		ε		έψιλον	epsilon	U+0395: GREEK CAPITAL LETTER EPSILON	✓
Έ	E	E		É			Lu		vowel + tonos		έ				U+0388: GREEK CAPITAL LETTER EPSILON WITH TONOS	✓
φ	f	f		f		f	Ll		consonant			Φ	φι	phi	U+03C6: GREEK SMALL LETTER PHI	✓
Φ	F	F		F		F	Lu		consonant		φ		φι	phi	U+03A6: GREEK CAPITAL LETTER PHI	✓
ι	i	i ç ʝ ɲ		ı		i	Ll		vowel/consonant			Ι	ιώτα	iota	U+03B9: GREEK SMALL LETTER IOTA	✓
ί	i	i		í			Ll		vowel + tonos			Ί			U+03AF: GREEK SMALL LETTER IOTA WITH TONOS	✓
ϊ	i	i		ï			Ll		vowel + dialytika			Ϊ			U+03CA: GREEK SMALL LETTER IOTA WITH DIALYTIKA	✓
ΐ	i	i		ḯ			Ll		vowel + dialytika + tonos						U+0390: GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS	✓
Ι	I	I Ç Ʝ Ɲ		I		I	Lu		vowel		ι		ιώτα	iota	U+0399: GREEK CAPITAL LETTER IOTA	✓
Ί	i	I		Í			Lu		vowel + tonos		ί				U+038A: GREEK CAPITAL LETTER IOTA WITH TONOS	✓
Ϊ	I	I		Ï			Lu		vowel + dialytika		ϊ				U+03AA: GREEK CAPITAL LETTER IOTA WITH DIALYTIKA	✓
η	i	i		i		h	Ll		vowel			Η	ήτα	eta	U+03B7: GREEK SMALL LETTER ETA	✓
ή	i	i		í			Ll		vowel + tonos			Ή			U+03AE: GREEK SMALL LETTER ETA WITH TONOS	✓
Η	I	I		İ		H	Lu		vowel		η		ήτα	eta	U+0397: GREEK CAPITAL LETTER ETA	✓
Ή	I	I		Í			Lu		vowel + tonos		ή				U+0389: GREEK CAPITAL LETTER ETA WITH TONOS	✓
κ	k	k c		k		k	Ll		consonant			Κ	κάππα	kappa	U+03BA: GREEK SMALL LETTER KAPPA	✓
ξ	k	ks		k͡s		j	Ll		consonant			Ξ	ξι	xi	U+03BE: GREEK SMALL LETTER XI	✓
Κ	K	K C		K		K	Lu		consonant		κ		κάππα	kappa	U+039A: GREEK CAPITAL LETTER KAPPA	✓
Ξ	K	K͡S		K͡S		J	Lu		consonant		ξ		ξι	xi	U+039E: GREEK CAPITAL LETTER XI	✓
λ	l	l		l		l	Ll		consonant			Λ	λά(μ)βδα	la(m)bda	U+03BB: GREEK SMALL LETTER LAMDA	✓
Λ	L	L		L		L	Lu		consonant		λ		λά(μ)βδα	la(m)bda	U+039B: GREEK CAPITAL LETTER LAMDA	✓
μ	m	m		m		m	Ll		consonant			Μ	μυ	mu	U+03BC: GREEK SMALL LETTER MU	✓
Μ	M	M		M		M	Lu		consonant		μ		μυ	mu	U+039C: GREEK CAPITAL LETTER MU	✓
ν	n	n		n		n	Ll		consonant			Ν	νυ	nu	U+03BD: GREEK SMALL LETTER NU	✓
Ν	N	N		N		N	Lu		consonant		ν		νυ	nu	U+039D: GREEK CAPITAL LETTER NU	✓
ο	o	o		o		o	Ll		vowel			Ο	όμικρον	omicron	U+03BF: GREEK SMALL LETTER OMICRON	✓
ό	o	o		ó			Ll		vowel + tonos			Ό			U+03CC: GREEK SMALL LETTER OMICRON WITH TONOS	✓
Ο	O	O		O		O	Lu		vowel		ο		όμικρον	omicron	U+039F: GREEK CAPITAL LETTER OMICRON	✓
Ό	O	O		Ó			Lu		vowel + tonos		ό				U+038C: GREEK CAPITAL LETTER OMICRON WITH TONOS	✓
ω	o	o		ȯ		v	Ll		vowel			Ω	ωμέγα	omega	U+03C9: GREEK SMALL LETTER OMEGA	✓
ώ	o	o		õ			Ll		vowel + tonos			Ώ			U+03CE: GREEK SMALL LETTER OMEGA WITH TONOS	✓
Ω	O	O		Ȯ		V	Lu		vowel		ω		ωμέγα	omega	U+03A9: GREEK CAPITAL LETTER OMEGA	✓
Ώ	O	O		Õ			Lu		vowel + tonos		ώ				U+038F: GREEK CAPITAL LETTER OMEGA WITH TONOS	✓
π	p	p		p		p	Ll		consonant			Π	πι	pi	U+03C0: GREEK SMALL LETTER PI	✓
ψ	p	ps		p͡s		c	Ll		consonant			Ψ	ψι	psi	U+03C8: GREEK SMALL LETTER PSI	✓
Π	P	P		P		P	Lu		consonant		π		πι	pi	U+03A0: GREEK CAPITAL LETTER PI	✓
Ψ	P	P͡S		P͡S		C	Lu		consonant		ψ		ψι	psi	U+03A8: GREEK CAPITAL LETTER PSI	✓
θ	q	θ		θ		u	Ll		consonant			Θ	θήτα	theta	U+03B8: GREEK SMALL LETTER THETA	✓
Θ	Q	Θ		Θ		U	Lu		consonant		θ		θήτα	theta	U+0398: GREEK CAPITAL LETTER THETA	✓
ρ	r	r		r		r	Ll		consonant			Ρ	ρώ	rho	U+03C1: GREEK SMALL LETTER RHO	✓
Ρ	R	R		R		R	Lu		consonant		ρ		ρώ	rho	U+03A1: GREEK CAPITAL LETTER RHO	✓
σ	s	s z		s		s	Ll		consonant			Σ	σίγμα	sigma	U+03C3: GREEK SMALL LETTER SIGMA	✓
ς	s	s z		s̽		w	Ll		consonant				σίγμα	final sigma	U+03C2: GREEK SMALL LETTER FINAL SIGMA	✓
Σ	S	S Z		S		S	Lu		consonant		σ		σίγμα	sigma	U+03A3: GREEK CAPITAL LETTER SIGMA	✓
τ	t	t		t		t	Ll		consonant			Τ	ταυ	tau	U+03C4: GREEK SMALL LETTER TAU	✓
Τ	T	T		T		T	Lu		consonant		τ		ταυ	tau	U+03A4: GREEK CAPITAL LETTER TAU	✓
β	v	v		v		b	Ll		consonant			Β	βήτα	beta	U+03B2: GREEK SMALL LETTER BETA	✓
Β	V	V		V		B	Lu		consonant		β		βήτα	beta	U+0392: GREEK CAPITAL LETTER BETA	✓
χ	x	x ç		x		x	Ll		consonant			Χ	χι	chi	U+03C7: GREEK SMALL LETTER CHI	✓
Χ	X	X Ç		X		X	Lu		consonant		χ		χι	chi	U+03A7: GREEK CAPITAL LETTER CHI	✓
υ	y	i		y		y	Ll		vowel			Υ	ύψιλον	upsilon	U+03C5: GREEK SMALL LETTER UPSILON	✓
ύ	y	i		ý			Ll		vowel + tonos			Ύ			U+03CD: GREEK SMALL LETTER UPSILON WITH TONOS	✓
ϋ	y	i		ÿ			Ll		vowel + dialytika			Ϋ			U+03CB: GREEK SMALL LETTER UPSILON WITH DIALYTIKA	✓
ΰ	y	i		ÿ́			Ll		vowel + dialytika + tonos						U+03B0: GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS	✓
Υ	Y	I		Y		Y	Lu		vowel		υ		ύψιλον	upsilon	U+03A5: GREEK CAPITAL LETTER UPSILON	✓
Ύ	Y	I		Ý			Lu		vowel + tonos		ύ				U+038E: GREEK CAPITAL LETTER UPSILON WITH TONOS	✓
Ϋ	Y	I		Ÿ			Lu		vowel + dialytika		ϋ				U+03AB: GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA	✓
γ	y	ɣ ʝ		ɣ		g	Ll		consonant			Γ	γάμμα	gamma	U+03B3: GREEK SMALL LETTER GAMMA	✓
Γ	Y	Ɣ Ʝ		Ɣ		G	Lu		consonant		γ		γάμμα	gamma	U+0393: GREEK CAPITAL LETTER GAMMA	✓
ζ	z	z		z		z	Ll		consonant			Ζ	ζήτα	zeta	U+03B6: GREEK SMALL LETTER ZETA	✓
Ζ	Z	Z		Z		Z	Lu		consonant		ζ		ζήτα	zeta	U+0396: GREEK CAPITAL LETTER ZETA	✓
																
ει		i		eı	i				digraph						U+03B5 U+03B9: GREEK SMALL LETTER EPSILON, SMALL LETTER IOTA	
οι		i		oı	i				digraph						U+03BF U+03B9: GREEK SMALL LETTER OMICRON, SMALL LETTER IOTA	
υι		i		yı	i				digraph						U+03C5 U+03B9: GREEK SMALL LETTER UPSILON, SMALL LETTER IOTA	
ου		u		oy	u				digraph						U+03BF U+03C5: GREEK SMALL LETTER OMICRON, SMALL LETTER UPSILON	
αι		e		aı	e				digraph						U+03B1 U+03B9: GREEK SMALL LETTER ALPHA, SMALL LETTER IOTA	
εί		i		eı	i				digraph						U+03B5 U+03AF: GREEK SMALL LETTER EPSILON, SMALL LETTER IOTA WITH TONOS	
οί		i		oı	i				digraph						U+03BF U+03AF: GREEK SMALL LETTER OMICRON, SMALL LETTER IOTA WITH TONOS	
υί		i		yı	i				digraph						U+03C5 U+03AF: GREEK SMALL LETTER UPSILON, SMALL LETTER IOTA WITH TONOS	
ού		u		oy	u				digraph						U+03BF U+03CD: GREEK SMALL LETTER OMICRON, SMALL LETTER UPSILON WITH TONOS	
αί		e		aı	e				digraph						U+03B1 U+03AF: GREEK SMALL LETTER ALPHA, SMALL LETTER IOTA WITH TONOS	
																
ηυ		iv if		iy					digraph						U+03B7 U+03C5: GREEK SMALL LETTER ETA, SMALL LETTER UPSILON	
ευ		ev ef		ey					digraph						U+03B5 U+03C5: GREEK SMALL LETTER EPSILON, SMALL LETTER UPSILON	
αυ		av af		ay					digraph						U+03B1 U+03C5: GREEK SMALL LETTER ALPHA, SMALL LETTER UPSILON	
																
μπ		b mb		mp					digraph						U+03BC U+03C0: GREEK SMALL LETTER MU, SMALL LETTER PI	
ντ		d nd		nt					digraph						U+03BD U+03C4: GREEK SMALL LETTER NU, SMALL LETTER TAU	
νκ		ɡ ŋɡ		nk					digraph						U+03BD U+03BA: GREEK SMALL LETTER NU, SMALL LETTER KAPPA	
γγ		ɡ ʝ ŋɡ ŋʝ		ɣɣ					digraph						U+03B3 U+03B3: GREEK SMALL LETTER GAMMA, SMALL LETTER GAMMA	
γκ		ɡ ʝ ŋɡ ŋʝ		ɣk					digraph						U+03B3 U+03BA: GREEK SMALL LETTER GAMMA, SMALL LETTER KAPPA	
																
̀							Mn	u	varia						U+0300: COMBINING GRAVE ACCENT	✓
̆							Mn	u	breve						U+0306: COMBINING BREVE	✓
̄							Mn	u	macron						U+0304 COMBINING MACRON	
̍							Mn	?	line above						U+030D: COMBINING VERTICAL LINE ABOVE	✓
̓							Mn	d	psili smooth breathing mark						U+0313: COMBINING COMMA ABOVE	✓
̔							Mn	u	dasia rough breathing mark						U+0314: COMBINING REVERSED COMMA ABOVE	✓
͂							Mn	u	perispomeni						U+0342: COMBINING GREEK PERISPOMENI	✓
̈́									tonos & dialytika						U+0308 U+0301: COMBINING DIAERESIS, COMBINING ACUTE ACCENT	
ͅ							Mn	u	ypogegrammeni						U+0345: COMBINING GREEK YPOGEGRAMMENI	✓
\u0344							Mn	d	tonos & dialytika						U+0344: COMBINING GREEK DIALYTIKA TONOS	
\u0343							Mn	d	smooth breathing mark						U+0343 COMBINING GREEK KORONIS	
																
ϗ				–			Ll	r	letter/number	used for counter styles					U+03D7: GREEK KAI SYMBOL	
ϡ				–			Ll	r	letter/number	used for counter styles					U+03E1: GREEK SMALL LETTER SAMPI	
Ϡ				–			Lu	r	letter/number	used for counter styles					U+03E0: GREEK LETTER SAMPI	
ϟ				–			Ll	r	letter/number	used for counter styles					U+03DF: GREEK SMALL LETTER KOPPA	
Ϟ				–			Lu	r	letter/number	used for counter styles					U+03DE: GREEK LETTER KOPPA	
ϛ				–			Ll	r	letter/number	used for counter styles					U+03DB: GREEK SMALL LETTER STIGMA	
																
·				·			Po		middle dot				άνω τελεία	áno telía	U+00B7 MIDDLE DOT	✓
																
ʼ				ʼ	ʼ		Lm	?	apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po	?	section sign						U+00A7: SECTION SIGN	
†				†	†		Po	?	dagger						U+2020: DAGGER	
‡				‡	‡		Po	?	double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po	?	prime						U+2032: PRIME	
″				″	″		Po	?	double prime						U+2033: DOUBLE PRIME	
																
\u0374							Lm	d	additive numbering indicator						U+0374 GREEK NUMERAL SIGN	
`																
																
latinPanel = 'ç ð ʝ k͡s ɲ p͡s θ ɣ'																
																
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
																
//othertranscriptions: [[5, 'LOC']]																
}																