var spreadsheet = `
ι	Ll	i ç ʝ ɲ		ç ʝ ɲ	i	ı	i	vowel/consonant			Ι	ιώτα	iota	U+03B9: GREEK SMALL LETTER IOTA	✓
ί	Ll	i			i	í		vowel + tonos			Ί			U+03AF: GREEK SMALL LETTER IOTA WITH TONOS	✓
ϊ	Ll	i			i	ï		vowel + dialytika			Ϊ			U+03CA: GREEK SMALL LETTER IOTA WITH DIALYTIKA	✓
ΐ	Ll	i			i	ḯ		vowel + dialytika + tonos						U+0390: GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS	✓
Ι	Lu	I Ç Ʝ Ɲ			I	I	I	vowel		ι		ιώτα	iota	U+0399: GREEK CAPITAL LETTER IOTA	✓
Ί	Lu	I			i	Í		vowel + tonos		ί				U+038A: GREEK CAPITAL LETTER IOTA WITH TONOS	✓
Ϊ	Lu	I			I	Ï		vowel + dialytika		ϊ				U+03AA: GREEK CAPITAL LETTER IOTA WITH DIALYTIKA	✓
η	Ll	i			i	i	h	vowel			Η	ήτα	eta	U+03B7: GREEK SMALL LETTER ETA	✓
ή	Ll	i			i	í		vowel + tonos			Ή			U+03AE: GREEK SMALL LETTER ETA WITH TONOS	✓
Η	Lu	I			I	İ	H	vowel		η		ήτα	eta	U+0397: GREEK CAPITAL LETTER ETA	✓
Ή	Lu	I			I	Í		vowel + tonos		ή				U+0389: GREEK CAPITAL LETTER ETA WITH TONOS	✓
υ	Ll	i			y	y	y	vowel			Υ	ύψιλον	upsilon	U+03C5: GREEK SMALL LETTER UPSILON	✓
ύ	Ll	i			y	ý		vowel + tonos			Ύ			U+03CD: GREEK SMALL LETTER UPSILON WITH TONOS	✓
ϋ	Ll	i			y	ÿ		vowel + dialytika			Ϋ			U+03CB: GREEK SMALL LETTER UPSILON WITH DIALYTIKA	✓
ΰ	Ll	i			y	ÿ́		vowel + dialytika + tonos						U+03B0: GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS	✓
Υ	Lu	I			Y	Y	Y	vowel		υ		ύψιλον	upsilon	U+03A5: GREEK CAPITAL LETTER UPSILON	✓
Ύ	Lu	I			Y	Ý		vowel + tonos		ύ				U+038E: GREEK CAPITAL LETTER UPSILON WITH TONOS	✓
Ϋ	Lu	I			Y	Ÿ		vowel + dialytika		ϋ				U+03AB: GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA	✓
ε	Ll	e			e	e	e	vowel			Ε	έψιλον	epsilon	U+03B5: GREEK SMALL LETTER EPSILON	✓
έ	Ll	e			e	é		vowel + tonos			Έ			U+03AD: GREEK SMALL LETTER EPSILON WITH TONOS	✓
Ε	Lu	E			E	E	E	vowel		ε		έψιλον	epsilon	U+0395: GREEK CAPITAL LETTER EPSILON	✓
Έ	Lu	E			E	É		vowel + tonos		έ				U+0388: GREEK CAPITAL LETTER EPSILON WITH TONOS	✓
ο	Ll	o			o	o	o	vowel			Ο	όμικρον	omicron	U+03BF: GREEK SMALL LETTER OMICRON	✓
ό	Ll	o			o	ó		vowel + tonos			Ό			U+03CC: GREEK SMALL LETTER OMICRON WITH TONOS	✓
Ο	Lu	O			O	O	O	vowel		ο		όμικρον	omicron	U+039F: GREEK CAPITAL LETTER OMICRON	✓
Ό	Lu	O			O	Ó		vowel + tonos		ό				U+038C: GREEK CAPITAL LETTER OMICRON WITH TONOS	✓
ω	Ll	o			o	ȯ	v	vowel			Ω	ωμέγα	omega	U+03C9: GREEK SMALL LETTER OMEGA	✓
ώ	Ll	o			o	õ		vowel + tonos			Ώ			U+03CE: GREEK SMALL LETTER OMEGA WITH TONOS	✓
Ω	Lu	O			O	Ȯ	V	vowel		ω		ωμέγα	omega	U+03A9: GREEK CAPITAL LETTER OMEGA	✓
Ώ	Lu	O			O	Õ		vowel + tonos		ώ				U+038F: GREEK CAPITAL LETTER OMEGA WITH TONOS	✓
α	Ll	a			a	a	a	vowel			Α	άλφα	alpha	U+03B1: GREEK SMALL LETTER ALPHA	✓
ά	Ll	a			a	á		vowel + tonos			Ά			U+03AC: GREEK SMALL LETTER ALPHA WITH TONOS	✓
Α	Lu	A			A	A	A	vowel		α		άλφα	alpha	U+0391: GREEK CAPITAL LETTER ALPHA	✓
Ά	Lu	A			A	Á		vowel + tonos		ά				U+0386: GREEK CAPITAL LETTER ALPHA WITH TONOS	✓
															
															
															
ει		i	i			eı		digraph						U+03B5 U+03B9: GREEK SMALL LETTER EPSILON, SMALL LETTER IOTA	
οι		i	i			oı		digraph						U+03BF U+03B9: GREEK SMALL LETTER OMICRON, SMALL LETTER IOTA	
υι		i	i			yı		digraph						U+03C5 U+03B9: GREEK SMALL LETTER UPSILON, SMALL LETTER IOTA	
ου		u	u			oy		digraph						U+03BF U+03C5: GREEK SMALL LETTER OMICRON, SMALL LETTER UPSILON	
αι		e	e			aı		digraph						U+03B1 U+03B9: GREEK SMALL LETTER ALPHA, SMALL LETTER IOTA	
εί		i	i			eı		digraph						U+03B5 U+03AF: GREEK SMALL LETTER EPSILON, SMALL LETTER IOTA WITH TONOS	
οί		i	i			oı		digraph						U+03BF U+03AF: GREEK SMALL LETTER OMICRON, SMALL LETTER IOTA WITH TONOS	
υί		i	i			yı		digraph						U+03C5 U+03AF: GREEK SMALL LETTER UPSILON, SMALL LETTER IOTA WITH TONOS	
ού		u	u			oy		digraph						U+03BF U+03CD: GREEK SMALL LETTER OMICRON, SMALL LETTER UPSILON WITH TONOS	
αί		e	e			aı		digraph						U+03B1 U+03AF: GREEK SMALL LETTER ALPHA, SMALL LETTER IOTA WITH TONOS	
															
ηυ		iv if				iy		digraph						U+03B7 U+03C5: GREEK SMALL LETTER ETA, SMALL LETTER UPSILON	
ευ		ev ef				ey		digraph						U+03B5 U+03C5: GREEK SMALL LETTER EPSILON, SMALL LETTER UPSILON	
αυ		av af				ay		digraph						U+03B1 U+03C5: GREEK SMALL LETTER ALPHA, SMALL LETTER UPSILON	
															
															
															
															
π	Ll	p			p	p	p	consonant			Π	πι	pi	U+03C0: GREEK SMALL LETTER PI	✓
ψ	Ll	ps			p	p͡s	c	consonant			Ψ	ψι	psi	U+03C8: GREEK SMALL LETTER PSI	✓
τ	Ll	t			t	t	t	consonant			Τ	ταυ	tau	U+03C4: GREEK SMALL LETTER TAU	✓
κ	Ll	k c			k	k	k	consonant			Κ	κάππα	kappa	U+03BA: GREEK SMALL LETTER KAPPA	✓
ξ	Ll	ks			k	k͡s	j	consonant			Ξ	ξι	xi	U+03BE: GREEK SMALL LETTER XI	✓
φ	Ll	f			f	f	f	consonant			Φ	φι	phi	U+03C6: GREEK SMALL LETTER PHI	✓
β	Ll	v			v	v	b	consonant			Β	βήτα	beta	U+03B2: GREEK SMALL LETTER BETA	✓
θ	Ll	θ			q	θ	u	consonant			Θ	θήτα	theta	U+03B8: GREEK SMALL LETTER THETA	✓
δ	Ll	ð			d	ð	d	consonant			Δ	δέλτα	delta	U+03B4: GREEK SMALL LETTER DELTA	✓
σ	Ll	s z			s	s	s	consonant			Σ	σίγμα	sigma	U+03C3: GREEK SMALL LETTER SIGMA	✓
ς	Ll	s z			s	s̽	w	consonant				σίγμα	final sigma	U+03C2: GREEK SMALL LETTER FINAL SIGMA	✓
ζ	Ll	z			z	z	z	consonant			Ζ	ζήτα	zeta	U+03B6: GREEK SMALL LETTER ZETA	✓
χ	Ll	x ç			x	x	x	consonant			Χ	χι	chi	U+03C7: GREEK SMALL LETTER CHI	✓
γ	Ll	ɣ ʝ			y	ɣ	g	consonant			Γ	γάμμα	gamma	U+03B3: GREEK SMALL LETTER GAMMA	✓
μ	Ll	m			m	m	m	consonant			Μ	μυ	mu	U+03BC: GREEK SMALL LETTER MU	✓
ν	Ll	n			n	n	n	consonant			Ν	νυ	nu	U+03BD: GREEK SMALL LETTER NU	✓
ρ	Ll	r			r	r	r	consonant			Ρ	ρώ	rho	U+03C1: GREEK SMALL LETTER RHO	✓
λ	Ll	l			l	l	l	consonant			Λ	λά(μ)βδα	la(m)bda	U+03BB: GREEK SMALL LETTER LAMDA	✓
															
μπ		b mb				mp		digraph						U+03BC U+03C0: GREEK SMALL LETTER MU, SMALL LETTER PI	
ντ		d nd				nt		digraph						U+03BD U+03C4: GREEK SMALL LETTER NU, SMALL LETTER TAU	
νκ		ɡ ŋɡ				nk		digraph						U+03BD U+03BA: GREEK SMALL LETTER NU, SMALL LETTER KAPPA	
γγ		ɡ ʝ ŋɡ ŋʝ				ɣɣ		digraph						U+03B3 U+03B3: GREEK SMALL LETTER GAMMA, SMALL LETTER GAMMA	
γκ		ɡ ʝ ŋɡ ŋʝ				ɣk		digraph						U+03B3 U+03BA: GREEK SMALL LETTER GAMMA, SMALL LETTER KAPPA	
															
Β	Lu	V			V	V	B	consonant		β		βήτα	beta	U+0392: GREEK CAPITAL LETTER BETA	✓
Γ	Lu	Ɣ Ʝ		ɣ	Y	Ɣ	G	consonant		γ		γάμμα	gamma	U+0393: GREEK CAPITAL LETTER GAMMA	✓
Δ	Lu	Ð		ð	D	Ð	D	consonant		δ		δέλτα	delta	U+0394: GREEK CAPITAL LETTER DELTA	✓
Ζ	Lu	Z			Z	Z	Z	consonant		ζ		ζήτα	zeta	U+0396: GREEK CAPITAL LETTER ZETA	✓
Θ	Lu	Θ		θ	Q	Θ	U	consonant		θ		θήτα	theta	U+0398: GREEK CAPITAL LETTER THETA	✓
Κ	Lu	K C			K	K	K	consonant		κ		κάππα	kappa	U+039A: GREEK CAPITAL LETTER KAPPA	✓
Λ	Lu	L			L	L	L	consonant		λ		λά(μ)βδα	la(m)bda	U+039B: GREEK CAPITAL LETTER LAMDA	✓
Μ	Lu	M			M	M	M	consonant		μ		μυ	mu	U+039C: GREEK CAPITAL LETTER MU	✓
Ν	Lu	N			N	N	N	consonant		ν		νυ	nu	U+039D: GREEK CAPITAL LETTER NU	✓
Ξ	Lu	K͡S		k͡s	K	K͡S	J	consonant		ξ		ξι	xi	U+039E: GREEK CAPITAL LETTER XI	✓
Π	Lu	P			P	P	P	consonant		π		πι	pi	U+03A0: GREEK CAPITAL LETTER PI	✓
Ρ	Lu	R			R	R	R	consonant		ρ		ρώ	rho	U+03A1: GREEK CAPITAL LETTER RHO	✓
Σ	Lu	S Z			S	S	S	consonant		σ		σίγμα	sigma	U+03A3: GREEK CAPITAL LETTER SIGMA	✓
Τ	Lu	T			T	T	T	consonant		τ		ταυ	tau	U+03A4: GREEK CAPITAL LETTER TAU	✓
Φ	Lu	F			F	F	F	consonant		φ		φι	phi	U+03A6: GREEK CAPITAL LETTER PHI	✓
Χ	Lu	X Ç			X	X	X	consonant		χ		χι	chi	U+03A7: GREEK CAPITAL LETTER CHI	✓
Ψ	Lu	P͡S		p͡s	P	P͡S	C	consonant		ψ		ψι	psi	U+03A8: GREEK CAPITAL LETTER PSI	✓
															
															
															
\u0301	Mn​				[	ˊ	;	tonos						U+0301: COMBINING ACUTE ACCENT​	
\u0308	Mn​				[	¨	:	dialytika						U+0308: COMBINING DIAERESIS​	
̀	Mn​							varia						U+0300: COMBINING GRAVE ACCENT​	✓
̆	Mn​							breve						U+0306: COMBINING BREVE​	✓
̄	Mn​							macron						U+0304 COMBINING MACRON	
̍	Mn​							line above						U+030D: COMBINING VERTICAL LINE ABOVE​	✓
̓	Mn​							psili smooth breathing mark						U+0313: COMBINING COMMA ABOVE​	✓
̔	Mn​							dasia rough breathing mark						U+0314: COMBINING REVERSED COMMA ABOVE​	✓
͂	Mn​							perispomeni						U+0342: COMBINING GREEK PERISPOMENI​	✓
̈́								tonos & dialytika						U+0308 U+0301: COMBINING DIAERESIS, COMBINING ACUTE ACCENT​	
ͅ	Mn​							ypogegrammeni						U+0345: COMBINING GREEK YPOGEGRAMMENI​	✓
\u0344	Mn​							tonos & dialytika	deprecated					U+0344: COMBINING GREEK DIALYTIKA TONOS​	
\u0343	Mn​							smooth breathing mark	deprecated					U+0343 COMBINING GREEK KORONIS	
															
															
															
															
ϗ	Ll					–		letter/number	archaic, used for counter styles					U+03D7: GREEK KAI SYMBOL	
ϡ	Ll					–		letter/number	archaic, used for counter styles					U+03E1: GREEK SMALL LETTER SAMPI	
Ϡ	Lu					–		letter/number	archaic, used for counter styles					U+03E0: GREEK LETTER SAMPI	
ϟ	Ll					–		letter/number	archaic, used for counter styles					U+03DF: GREEK SMALL LETTER KOPPA	
Ϟ	Lu					–		letter/number	archaic, used for counter styles					U+03DE: GREEK LETTER KOPPA	
ϛ	Ll					–		letter/number	archaic, used for counter styles					U+03DB: GREEK SMALL LETTER STIGMA																
															
															
															
															
.	Po		.		.	.		full stop				τελεία	telía	U+002E: FULL STOP	✓
,	Po		,		,	,		comma				κόμμα	kóma	U+002C: COMMA	✓
·	Po					·		middle dot				άνω τελεία	áno telía	U+00B7 MIDDLE DOT	✓
:	Po		:		:	:		colon				διπλή τελεία	δiplí telía	U+003A: COLON	✓
!	Po		!		!	!		exclamation mark				θαυμαστικό	θavmastikó	U+0021: EXCLAMATION MARK	✓
;	Po		?		;	;	q	question mark				ερωτηματικό	erotimatikó	U+003B: SEMICOLON	✓
\u0387	Po				;	;		semicolon	deprecated			άνω τελεία	áno telía	U+0387: GREEK ANO TELEIA	
\u037E	Po				?	?		question mark	deprecated			ερωτηματικό	erotimatikó	U+037E: GREEK QUESTION MARK	
															
															
…	Po		…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS	✓
															
															
															
«	Pi		“		<	«	<	quotation mark				εισαγωγικά	isaγoγiká	U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
»	Pf		”		>	»	>	quotation mark				εισαγωγικά	isaγoγiká	U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	Pi		‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
›	Pf		’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
“	Pi		“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	✓
”	Pf		”		>	”		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	✓
‘	Pi		‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
’	Pf		’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
															
															
															
(	Ps		(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	✓
[	Ps		[		(	[		bracket						U+005B: LEFT SQUARE BRACKET	
)	Pe		)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	✓
]	Pe		]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET	
															
															
-			-		-	-		hyphen						U+2010: HYPHEN	
‑	Pd		‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	✓
–	Pd		–		-	–		en dash						U+2013: EN DASH	✓
—	Pd		—		-	—		em dash						U+2014: EM DASH	✓
															
															
															
ʼ	Lm		ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§	Po		§			§		section sign						U+00A7: SECTION SIGN	
†	Po		†			†		dagger						U+2020: DAGGER	
‡	Po		‡			‡		double dagger						U+2021: DOUBLE DAGGER	
′	Po		′			′		prime						U+2032: PRIME	
″	Po		″			″		double prime						U+2033: DOUBLE PRIME	
															
															
															
͵	Sk				#	‛		thousands indicator	for greek additive numbering					U+0375: GREEK LOWER NUMERAL SIGN	✓
ʹ	Lm				#	·		additive numbering indicator				κεραία		U+02B9: MODIFIER LETTER PRIME	
\u0374	Lm							additive numbering indicator	deprecated					U+0374 GREEK NUMERAL SIGN	
€	Sc				#	¤		currency symbol						U+20AC: EURO SIGN	
															
															
															
%	Po				%	%		percentage mark						U+0025: PERCENT SIGN	
‰	Po				%	‰		per mille mark						U+2030: PER MILLE SIGN	



`



latinPanel = 'ç ð ʝ k͡s ɲ p͡s θ ɣ'




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
