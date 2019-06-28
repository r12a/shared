var spreadsheet = `
Α	A	A	a	vowel	alpha	άλφα	α		U+0391: GREEK CAPITAL LETTER ALPHA
Β	V	V	v	consonant	beta	βήτα	β		U+0392: GREEK CAPITAL LETTER BETA
Γ	Y	Ɣ	ɣ ʝ	consonant	gamma	γάμμα	γ		U+0393: GREEK CAPITAL LETTER GAMMA
Δ	D	Ð	ð	consonant	delta	δέλτα	δ		U+0394: GREEK CAPITAL LETTER DELTA
Ε	E	E	e	vowel	epsilon	έψιλον	ε		U+0395: GREEK CAPITAL LETTER EPSILON
Ζ	Z	Z	z	consonant	zeta	ζήτα	ζ		U+0396: GREEK CAPITAL LETTER ZETA
Η	I	İ	i	vowel	eta	ήτα	η		U+0397: GREEK CAPITAL LETTER ETA
Θ	Q	Θ	θ	consonant	theta	θήτα	θ		U+0398: GREEK CAPITAL LETTER THETA
Ι	I	I	i ç ʝ ɲ	vowel	iota	ιώτα	ι		U+0399: GREEK CAPITAL LETTER IOTA
Κ	K	K	k c	consonant	kappa	κάππα	κ		U+039A: GREEK CAPITAL LETTER KAPPA
Λ	L	L	l	consonant	la(m)bda	λά(μ)βδα	λ		U+039B: GREEK CAPITAL LETTER LAMDA
Μ	M	M	m	consonant	mu	μυ	μ		U+039C: GREEK CAPITAL LETTER MU
Ν	N	N	n	consonant	nu	νυ	ν		U+039D: GREEK CAPITAL LETTER NU
Ξ	K	K͡S	ks	consonant	xi	ξι	ξ		U+039E: GREEK CAPITAL LETTER XI
Ο	O	O	o	vowel	omicron	όμικρον	ο		U+039F: GREEK CAPITAL LETTER OMICRON
Π	P	P	p	consonant	pi	πι	π		U+03A0: GREEK CAPITAL LETTER PI
Ρ	R	R	r	consonant	rho	ρώ	ρ		U+03A1: GREEK CAPITAL LETTER RHO
Σ	S	S	s z	consonant	sigma	σίγμα	σ		U+03A3: GREEK CAPITAL LETTER SIGMA
Τ	T	T	t	consonant	tau	ταυ	τ		U+03A4: GREEK CAPITAL LETTER TAU
Υ	Y	Y	i	vowel	upsilon	ύψιλον	υ		U+03A5: GREEK CAPITAL LETTER UPSILON
Φ	F	F	f	consonant	phi	φι	φ		U+03A6: GREEK CAPITAL LETTER PHI
Χ	X	X	x ç	consonant	chi	χι	χ		U+03A7: GREEK CAPITAL LETTER CHI
Ψ	P	P͡S	ps	consonant	psi	ψι	ψ		U+03A8: GREEK CAPITAL LETTER PSI
Ω	O	Ȯ	o	vowel	omega	ωμέγα	ω		U+03A9: GREEK CAPITAL LETTER OMEGA
									
α	a	a	a	vowel	alpha	άλφα		Α	U+03B1: GREEK SMALL LETTER ALPHA
β	v	v	v	consonant	beta	βήτα		Β	U+03B2: GREEK SMALL LETTER BETA
γ	y	ɣ	ɣ ʝ	consonant	gamma	γάμμα		Γ	U+03B3: GREEK SMALL LETTER GAMMA
δ	d	ð	ð	consonant	delta	δέλτα		Δ	U+03B4: GREEK SMALL LETTER DELTA
ε	e	e	e	vowel	epsilon	έψιλον		Ε	U+03B5: GREEK SMALL LETTER EPSILON
ζ	z	z	z	consonant	zeta	ζήτα		Ζ	U+03B6: GREEK SMALL LETTER ZETA
η	i	i	i	vowel	eta	ήτα		Η	U+03B7: GREEK SMALL LETTER ETA
θ	q	θ	θ	consonant	theta	θήτα		Θ	U+03B8: GREEK SMALL LETTER THETA
ι	i	ı	i ç ʝ ɲ	consonant	iota	ιώτα		Ι	U+03B9: GREEK SMALL LETTER IOTA
κ	k	k	k c	consonant	kappa	κάππα		Κ	U+03BA: GREEK SMALL LETTER KAPPA
λ	l	l	l	consonant	la(m)bda	λά(μ)βδα		Λ	U+03BB: GREEK SMALL LETTER LAMDA
μ	m	m	m	consonant	mu	μυ		Μ	U+03BC: GREEK SMALL LETTER MU
ν	n	n	n	consonant	nu	νυ		Ν	U+03BD: GREEK SMALL LETTER NU
ξ	k	k͡s	ks	consonant	xi	ξι		Ξ	U+03BE: GREEK SMALL LETTER XI
ο	o	o	o	vowel	omicron	όμικρον		Ο	U+03BF: GREEK SMALL LETTER OMICRON
π	p	p	p	consonant	pi	πι		Π	U+03C0: GREEK SMALL LETTER PI
ρ	r	r	r	consonant	rho	ρώ		Ρ	U+03C1: GREEK SMALL LETTER RHO
σ	s	s	s z	consonant	sigma	σίγμα		Σ	U+03C3: GREEK SMALL LETTER SIGMA
ς	s	s̽	s z	consonant	final sigma	σίγμα			U+03C2: GREEK SMALL LETTER FINAL SIGMA
τ	t	t	t	consonant	tau	ταυ		Τ	U+03C4: GREEK SMALL LETTER TAU
υ	y	y	i	vowel	upsilon	ύψιλον		Υ	U+03C5: GREEK SMALL LETTER UPSILON
φ	f	f	f	consonant	phi	φι		Φ	U+03C6: GREEK SMALL LETTER PHI
χ	x	x	x ç	consonant	chi	χι		Χ	U+03C7: GREEK SMALL LETTER CHI
ψ	p	p͡s	ps	consonant	psi	ψι		Ψ	U+03C8: GREEK SMALL LETTER PSI
ω	o	ȯ	o	vowel	omega	ωμέγα		Ω	U+03C9: GREEK SMALL LETTER OMEGA
									
									
Ά	A	Á	a	vowel + tonos			ά		U+0386: GREEK CAPITAL LETTER ALPHA WITH TONOS
Έ	E	É	e	vowel + tonos			έ		U+0388: GREEK CAPITAL LETTER EPSILON WITH TONOS
Ή	I	Í	i	vowel + tonos			ή		U+0389: GREEK CAPITAL LETTER ETA WITH TONOS
Ί	O	Ô	o	vowel + tonos			ί		U+038A: GREEK CAPITAL LETTER IOTA WITH TONOS
Ό	O	Ó	o	vowel + tonos			ό		U+038C: GREEK CAPITAL LETTER OMICRON WITH TONOS
Ύ	Y	Ý	i	vowel + tonos			ύ		U+038E: GREEK CAPITAL LETTER UPSILON WITH TONOS
Ώ	O	Õ	o	vowel + tonos			ώ		U+038F: GREEK CAPITAL LETTER OMEGA WITH TONOS
Ϊ	I	Ï	i	vowel + dialytika			ϊ		U+03AA: GREEK CAPITAL LETTER IOTA WITH DIALYTIKA
Ϋ	Y	Ÿ	i	vowel + dialytika			ϋ		U+03AB: GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA
									
ά	a	á	a	vowel + tonos				Ά	U+03AC: GREEK SMALL LETTER ALPHA WITH TONOS
έ	e	é	e	vowel + tonos				Έ	U+03AD: GREEK SMALL LETTER EPSILON WITH TONOS
ή	i	í	i	vowel + tonos				Ή	U+03AE: GREEK SMALL LETTER ETA WITH TONOS
ί	o	ô	o	vowel + tonos				Ί	U+03AF: GREEK SMALL LETTER IOTA WITH TONOS
ό	o	ó	o	vowel + tonos				Ό	U+03CC: GREEK SMALL LETTER OMICRON WITH TONOS
ύ	y	ý	i	vowel + tonos				Ύ	U+03CD: GREEK SMALL LETTER UPSILON WITH TONOS
ώ	o	õ	o	vowel + tonos				Ώ	U+03CE: GREEK SMALL LETTER OMEGA WITH TONOS
ΐ	i	ḯ	i	vowel					U+0390: GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS
ϊ	i	ï	i	vowel + dialytika				Ϊ	U+03CA: GREEK SMALL LETTER IOTA WITH DIALYTIKA
ϋ	y	ÿ	i	vowel + dialytika				Ϋ	U+03CB: GREEK SMALL LETTER UPSILON WITH DIALYTIKA
ΰ	y	ÿ́	i	vowel + dialytika + tonos					U+03B0: GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS
									
									
\u037E	?	?		question mark					U+037E: GREEK QUESTION MARK
\u0387	;	;		semicolon					U+0387: GREEK ANO TELEIA
									
									
\u0301	[	ˊ		acute accent					U+0301: COMBINING ACUTE ACCENT​
\u0308	[	¨		diaeresis					U+0308: COMBINING DIAERESIS​

`

var cols = {
"key": 1,
"transLoc": 2,
"ipaLoc": 3,
"typeLoc": 4,
"nnameLoc": 6,
"nameLoc": 5,
"numLoc": 0,
"statusLoc": 0,
"lc": 7,
"uc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"transcription":0,
"ucsName": 9,

//"othertranscriptions": [[4, 'ISO 9985']]
}