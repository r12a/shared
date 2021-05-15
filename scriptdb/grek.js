var spreadsheet = `
ι		i ç ʝ ɲ		ç ʝ ɲ	i	ı	i	vowel/consonant			Ι	ιώτα	iota	U+03B9: GREEK SMALL LETTER IOTA	greek
ί		i			i	í		vowel + tonos			Ί			U+03AF: GREEK SMALL LETTER IOTA WITH TONOS	greek
ϊ		i			i	ï		vowel + dialytika			Ϊ			U+03CA: GREEK SMALL LETTER IOTA WITH DIALYTIKA	greek
ΐ		i			i	ḯ		vowel + dialytika + tonos						U+0390: GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS	greek
Ι		I Ç Ʝ Ɲ			I	I	I	vowel		ι		ιώτα	iota	U+0399: GREEK CAPITAL LETTER IOTA	greek
Ί		I			i	Í		vowel + tonos		ί				U+038A: GREEK CAPITAL LETTER IOTA WITH TONOS	greek
Ϊ		I			I	Ï		vowel + dialytika		ϊ				U+03AA: GREEK CAPITAL LETTER IOTA WITH DIALYTIKA	greek
η		i			i	i	h	vowel			Η	ήτα	eta	U+03B7: GREEK SMALL LETTER ETA	greek
ή		i			i	í		vowel + tonos			Ή			U+03AE: GREEK SMALL LETTER ETA WITH TONOS	greek
Η		I			I	İ	H	vowel		η		ήτα	eta	U+0397: GREEK CAPITAL LETTER ETA	greek
Ή		I			I	Í		vowel + tonos		ή				U+0389: GREEK CAPITAL LETTER ETA WITH TONOS	greek
υ		i			y	y	y	vowel			Υ	ύψιλον	upsilon	U+03C5: GREEK SMALL LETTER UPSILON	greek
ύ		i			y	ý		vowel + tonos			Ύ			U+03CD: GREEK SMALL LETTER UPSILON WITH TONOS	greek
ϋ		i			y	ÿ		vowel + dialytika			Ϋ			U+03CB: GREEK SMALL LETTER UPSILON WITH DIALYTIKA	greek
ΰ		i			y	ÿ́		vowel + dialytika + tonos						U+03B0: GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS	greek
Υ		I			Y	Y	Y	vowel		υ		ύψιλον	upsilon	U+03A5: GREEK CAPITAL LETTER UPSILON	greek
Ύ		I			Y	Ý		vowel + tonos		ύ				U+038E: GREEK CAPITAL LETTER UPSILON WITH TONOS	greek
Ϋ		I			Y	Ÿ		vowel + dialytika		ϋ				U+03AB: GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA	greek
ε		e			e	e	e	vowel			Ε	έψιλον	epsilon	U+03B5: GREEK SMALL LETTER EPSILON	greek
έ		e			e	é		vowel + tonos			Έ			U+03AD: GREEK SMALL LETTER EPSILON WITH TONOS	greek
Ε		E			E	E	E	vowel		ε		έψιλον	epsilon	U+0395: GREEK CAPITAL LETTER EPSILON	greek
Έ		E			E	É		vowel + tonos		έ				U+0388: GREEK CAPITAL LETTER EPSILON WITH TONOS	greek
ο		o			o	o	o	vowel			Ο	όμικρον	omicron	U+03BF: GREEK SMALL LETTER OMICRON	greek
ό		o			o	ó		vowel + tonos			Ό			U+03CC: GREEK SMALL LETTER OMICRON WITH TONOS	greek
Ο		O			O	O	O	vowel		ο		όμικρον	omicron	U+039F: GREEK CAPITAL LETTER OMICRON	greek
Ό		O			O	Ó		vowel + tonos		ό				U+038C: GREEK CAPITAL LETTER OMICRON WITH TONOS	greek
ω		o			o	ȯ	v	vowel			Ω	ωμέγα	omega	U+03C9: GREEK SMALL LETTER OMEGA	greek
ώ		o			o	õ		vowel + tonos			Ώ			U+03CE: GREEK SMALL LETTER OMEGA WITH TONOS	greek
Ω		O			O	Ȯ	V	vowel		ω		ωμέγα	omega	U+03A9: GREEK CAPITAL LETTER OMEGA	greek
Ώ		O			O	Õ		vowel + tonos		ώ				U+038F: GREEK CAPITAL LETTER OMEGA WITH TONOS	greek
α		a			a	a	a	vowel			Α	άλφα	alpha	U+03B1: GREEK SMALL LETTER ALPHA	greek
ά		a			a	á		vowel + tonos			Ά			U+03AC: GREEK SMALL LETTER ALPHA WITH TONOS	greek
Α		A			A	A	A	vowel		α		άλφα	alpha	U+0391: GREEK CAPITAL LETTER ALPHA	greek
Ά		A			A	Á		vowel + tonos		ά				U+0386: GREEK CAPITAL LETTER ALPHA WITH TONOS	greek															
															
															
ει	s	i	i			eı		digraph						U+03B5 U+03B9: GREEK SMALL LETTER EPSILON, SMALL LETTER IOTA	
οι	s	i	i			oı		digraph						U+03BF U+03B9: GREEK SMALL LETTER OMICRON, SMALL LETTER IOTA	
υι	s	i	i			yı		digraph						U+03C5 U+03B9: GREEK SMALL LETTER UPSILON, SMALL LETTER IOTA	
ου	s	u	u			oy		digraph						U+03BF U+03C5: GREEK SMALL LETTER OMICRON, SMALL LETTER UPSILON	
αι	s	e	e			aı		digraph						U+03B1 U+03B9: GREEK SMALL LETTER ALPHA, SMALL LETTER IOTA	
εί	s	i	i			eı		digraph						U+03B5 U+03AF: GREEK SMALL LETTER EPSILON, SMALL LETTER IOTA WITH TONOS	
οί	s	i	i			oı		digraph						U+03BF U+03AF: GREEK SMALL LETTER OMICRON, SMALL LETTER IOTA WITH TONOS	
υί	s	i	i			yı		digraph						U+03C5 U+03AF: GREEK SMALL LETTER UPSILON, SMALL LETTER IOTA WITH TONOS	
ού	s	u	u			oy		digraph						U+03BF U+03CD: GREEK SMALL LETTER OMICRON, SMALL LETTER UPSILON WITH TONOS	
αί	s	e	e			aı		digraph						U+03B1 U+03AF: GREEK SMALL LETTER ALPHA, SMALL LETTER IOTA WITH TONOS	
															
ηυ	s	iv if				iy		digraph						U+03B7 U+03C5: GREEK SMALL LETTER ETA, SMALL LETTER UPSILON	
ευ	s	ev ef				ey		digraph						U+03B5 U+03C5: GREEK SMALL LETTER EPSILON, SMALL LETTER UPSILON	
αυ	s	av af				ay		digraph						U+03B1 U+03C5: GREEK SMALL LETTER ALPHA, SMALL LETTER UPSILON	
															
															
															
															
π		p			p	p	p	consonant			Π	πι	pi	U+03C0: GREEK SMALL LETTER PI	greek
ψ		ps			p	p͡s	c	consonant			Ψ	ψι	psi	U+03C8: GREEK SMALL LETTER PSI	greek
τ		t			t	t	t	consonant			Τ	ταυ	tau	U+03C4: GREEK SMALL LETTER TAU	greek
κ		k c			k	k	k	consonant			Κ	κάππα	kappa	U+03BA: GREEK SMALL LETTER KAPPA	greek
ξ		ks			k	k͡s	j	consonant			Ξ	ξι	xi	U+03BE: GREEK SMALL LETTER XI	greek
φ		f			f	f	f	consonant			Φ	φι	phi	U+03C6: GREEK SMALL LETTER PHI	greek
β		v			v	v	b	consonant			Β	βήτα	beta	U+03B2: GREEK SMALL LETTER BETA	greek
θ		θ			q	θ	u	consonant			Θ	θήτα	theta	U+03B8: GREEK SMALL LETTER THETA	greek
δ		ð			d	ð	d	consonant			Δ	δέλτα	delta	U+03B4: GREEK SMALL LETTER DELTA	greek
σ		s z			s	s	s	consonant			Σ	σίγμα	sigma	U+03C3: GREEK SMALL LETTER SIGMA	greek
ς		s z			s	s̽	w	consonant				σίγμα	final sigma	U+03C2: GREEK SMALL LETTER FINAL SIGMA	greek
ζ		z			z	z	z	consonant			Ζ	ζήτα	zeta	U+03B6: GREEK SMALL LETTER ZETA	greek
χ		x ç			x	x	x	consonant			Χ	χι	chi	U+03C7: GREEK SMALL LETTER CHI	greek
γ		ɣ ʝ			y	ɣ	g	consonant			Γ	γάμμα	gamma	U+03B3: GREEK SMALL LETTER GAMMA	greek
μ		m			m	m	m	consonant			Μ	μυ	mu	U+03BC: GREEK SMALL LETTER MU	greek
ν		n			n	n	n	consonant			Ν	νυ	nu	U+03BD: GREEK SMALL LETTER NU	greek
ρ		r			r	r	r	consonant			Ρ	ρώ	rho	U+03C1: GREEK SMALL LETTER RHO	greek
λ		l			l	l	l	consonant			Λ	λά(μ)βδα	la(m)bda	U+03BB: GREEK SMALL LETTER LAMDA	greek
															
μπ	s	b mb				mp		digraph						U+03BC U+03C0: GREEK SMALL LETTER MU, SMALL LETTER PI	
ντ	s	d nd				nt		digraph						U+03BD U+03C4: GREEK SMALL LETTER NU, SMALL LETTER TAU	
νκ	s	ɡ ŋɡ				nk		digraph						U+03BD U+03BA: GREEK SMALL LETTER NU, SMALL LETTER KAPPA	
γγ	s	ɡ ʝ ŋɡ ŋʝ				ɣɣ		digraph						U+03B3 U+03B3: GREEK SMALL LETTER GAMMA, SMALL LETTER GAMMA	
γκ	s	ɡ ʝ ŋɡ ŋʝ				ɣk		digraph						U+03B3 U+03BA: GREEK SMALL LETTER GAMMA, SMALL LETTER KAPPA	
															
Β		V			V	V	B	consonant		β		βήτα	beta	U+0392: GREEK CAPITAL LETTER BETA	greek
Γ		Ɣ Ʝ		ɣ	Y	Ɣ	G	consonant		γ		γάμμα	gamma	U+0393: GREEK CAPITAL LETTER GAMMA	greek
Δ		Ð		ð	D	Ð	D	consonant		δ		δέλτα	delta	U+0394: GREEK CAPITAL LETTER DELTA	greek
Ζ		Z			Z	Z	Z	consonant		ζ		ζήτα	zeta	U+0396: GREEK CAPITAL LETTER ZETA	greek
Θ		Θ		θ	Q	Θ	U	consonant		θ		θήτα	theta	U+0398: GREEK CAPITAL LETTER THETA	greek
Κ		K C			K	K	K	consonant		κ		κάππα	kappa	U+039A: GREEK CAPITAL LETTER KAPPA	greek
Λ		L			L	L	L	consonant		λ		λά(μ)βδα	la(m)bda	U+039B: GREEK CAPITAL LETTER LAMDA	greek
Μ		M			M	M	M	consonant		μ		μυ	mu	U+039C: GREEK CAPITAL LETTER MU	greek
Ν		N			N	N	N	consonant		ν		νυ	nu	U+039D: GREEK CAPITAL LETTER NU	greek
Ξ		K͡S		k͡s	K	K͡S	J	consonant		ξ		ξι	xi	U+039E: GREEK CAPITAL LETTER XI	greek
Π		P			P	P	P	consonant		π		πι	pi	U+03A0: GREEK CAPITAL LETTER PI	greek
Ρ		R			R	R	R	consonant		ρ		ρώ	rho	U+03A1: GREEK CAPITAL LETTER RHO	greek
Σ		S Z			S	S	S	consonant		σ		σίγμα	sigma	U+03A3: GREEK CAPITAL LETTER SIGMA	greek
Τ		T			T	T	T	consonant		τ		ταυ	tau	U+03A4: GREEK CAPITAL LETTER TAU	greek
Φ		F			F	F	F	consonant		φ		φι	phi	U+03A6: GREEK CAPITAL LETTER PHI	greek
Χ		X Ç			X	X	X	consonant		χ		χι	chi	U+03A7: GREEK CAPITAL LETTER CHI	greek
Ψ		P͡S		p͡s	P	P͡S	C	consonant		ψ		ψι	psi	U+03A8: GREEK CAPITAL LETTER PSI	greek
															
															
															
\u0301					[	ˊ	;	tonos						U+0301: COMBINING ACUTE ACCENT​	
\u0308					[	¨	:	dialytika						U+0308: COMBINING DIAERESIS​	
̀								varia						U+0300: COMBINING GRAVE ACCENT​	
̆								breve						U+0306: COMBINING BREVE​	
̄								macron						U+0304 COMBINING MACRON	
̍								line above						U+030D: COMBINING VERTICAL LINE ABOVE​	
̓								psili smooth breathing mark						U+0313: COMBINING COMMA ABOVE​	
̔								dasia rough breathing mark						U+0314: COMBINING REVERSED COMMA ABOVE​	
͂								perispomeni						U+0342: COMBINING GREEK PERISPOMENI​	
̈́								tonos & dialytika						U+0308 U+0301: COMBINING DIAERESIS, COMBINING ACUTE ACCENT​	
ͅ								ypogegrammeni						U+0345: COMBINING GREEK YPOGEGRAMMENI​	
\u0344								tonos & dialytika	deprecated					U+0344: COMBINING GREEK DIALYTIKA TONOS​	
\u0343								smooth breathing mark	deprecated					U+0343 COMBINING GREEK KORONIS																
															
															
															
															
															
															
															
.			.		.	.		full stop						U+002E: FULL STOP	
,			,		,	,		comma						U+002C: COMMA	
·						·		middle dot						U+00B7 MIDDLE DOT	
:			:		:	:		colon						U+003A: COLON	
!			!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	
;			?		;	;	q	question mark						U+003B: SEMICOLON	
\u0387					;	;		semicolon	deprecated					U+0387: GREEK ANO TELEIA	greek
\u037E					?	?		question mark	deprecated					U+037E: GREEK QUESTION MARK	greek
															
															
…			…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
															
															
															
«			“		<	«	<	quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
»			”		>	»	>	quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	arabic
‹			‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	arabic
›			’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	arabic
“			“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	arabic
”			”		>	”		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	arabic
‘			‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	arabic
’			’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	arabic
															
															
															
(			(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	
[			[		(	[		bracket						U+005B: LEFT SQUARE BRACKET	
)			)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	
]			]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET	
															
															
-			-		-	-		hyphen						U+2010: HYPHEN	
‑			‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–			–		-	–		en dash						U+2013: EN DASH	
—			—		-	—		em dash						U+2014: EM DASH	
															
															
															
ʼ			ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§			§			§		section sign						U+00A7: SECTION SIGN	
†			†			†		dagger						U+2020: DAGGER	
‡			‡			‡		double dagger						U+2021: DOUBLE DAGGER	
′			′			′		prime						U+2032: PRIME	
″			″			″		double prime						U+2033: DOUBLE PRIME	
															
															
															
͵					#	‛		thousands indicator	for greek additive numbering					U+0375: GREEK LOWER NUMERAL SIGN	
ʹ					#	·		additive numbering indicator						U+02B9: MODIFIER LETTER PRIME	
\u0374	d							additive numbering indicator	deprecated					U+0374 GREEK NUMERAL SIGN	
€					#	¤		currency symbol						U+20AC: EURO SIGN	
															
															
															
%					%	%		percentage mark						U+0025: PERCENT SIGN	
‰					%	‰		per mille mark						U+2030: PER MILLE SIGN	



`




var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":0,
"latin": 4,
"key":5,
"transLoc": 6,
"kbd": 7,
"transckey": 0,
"typeLoc": 8,
"statusLoc": 9,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":10,
"uc":11,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nnameLoc": 12,
"nameLoc": 13,
"ucsName": 14,
"block": 15,

//"othertranscriptions": [[3, 'ISO 9985']]
}
