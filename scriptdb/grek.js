var spreadsheet = `
ι		i	ı	i ç ʝ ɲ	consonant			Ι	iota	ιώτα	U+03B9: GREEK SMALL LETTER IOTA	greek
ί		i	í	i	vowel + tonos			Ί			U+03AF: GREEK SMALL LETTER IOTA WITH TONOS	greek
ϊ		i	ï	i	vowel + dialytika			Ϊ			U+03CA: GREEK SMALL LETTER IOTA WITH DIALYTIKA	greek
ΐ		i	ḯ	i	vowel + dialytika + tonos						U+0390: GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS	greek
Ι		I	I	i ç ʝ ɲ	vowel		ι		iota	ιώτα	U+0399: GREEK CAPITAL LETTER IOTA	greek
Ί		I	Í	i	vowel + tonos		ί				U+038A: GREEK CAPITAL LETTER IOTA WITH TONOS	greek
Ϊ		I	Ï	i	vowel + dialytika		ϊ				U+03AA: GREEK CAPITAL LETTER IOTA WITH DIALYTIKA	greek
η		i	i	i	vowel			Η	eta	ήτα	U+03B7: GREEK SMALL LETTER ETA	greek
ή		i	í	i	vowel + tonos			Ή			U+03AE: GREEK SMALL LETTER ETA WITH TONOS	greek
Η		I	İ	i	vowel		η		eta	ήτα	U+0397: GREEK CAPITAL LETTER ETA	greek
Ή		I	Í	i	vowel + tonos		ή				U+0389: GREEK CAPITAL LETTER ETA WITH TONOS	greek
υ		y	y	i	vowel			Υ	upsilon	ύψιλον	U+03C5: GREEK SMALL LETTER UPSILON	greek
ύ		y	ý	i	vowel + tonos			Ύ			U+03CD: GREEK SMALL LETTER UPSILON WITH TONOS	greek
ϋ		y	ÿ	i	vowel + dialytika			Ϋ			U+03CB: GREEK SMALL LETTER UPSILON WITH DIALYTIKA	greek
ΰ		y	ÿ́	i	vowel + dialytika + tonos						U+03B0: GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS	greek
Υ		Y	Y	i	vowel		υ		upsilon	ύψιλον	U+03A5: GREEK CAPITAL LETTER UPSILON	greek
Ύ		Y	Ý	i	vowel + tonos		ύ				U+038E: GREEK CAPITAL LETTER UPSILON WITH TONOS	greek
Ϋ		Y	Ÿ	i	vowel + dialytika		ϋ				U+03AB: GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA	greek
ε		e	e	e	vowel			Ε	epsilon	έψιλον	U+03B5: GREEK SMALL LETTER EPSILON	greek
έ		e	é	e	vowel + tonos			Έ			U+03AD: GREEK SMALL LETTER EPSILON WITH TONOS	greek
Ε		E	E	e	vowel		ε		epsilon	έψιλον	U+0395: GREEK CAPITAL LETTER EPSILON	greek
Έ		E	É	e	vowel + tonos		έ				U+0388: GREEK CAPITAL LETTER EPSILON WITH TONOS	greek
ο		o	o	o	vowel			Ο	omicron	όμικρον	U+03BF: GREEK SMALL LETTER OMICRON	greek
ό		o	ó	o	vowel + tonos			Ό			U+03CC: GREEK SMALL LETTER OMICRON WITH TONOS	greek
Ο		O	O	o	vowel		ο		omicron	όμικρον	U+039F: GREEK CAPITAL LETTER OMICRON	greek
Ό		O	Ó	o	vowel + tonos		ό				U+038C: GREEK CAPITAL LETTER OMICRON WITH TONOS	greek
ω		o	ȯ	o	vowel			Ω	omega	ωμέγα	U+03C9: GREEK SMALL LETTER OMEGA	greek
ώ		o	õ	o	vowel + tonos			Ώ			U+03CE: GREEK SMALL LETTER OMEGA WITH TONOS	greek
Ω		O	Ȯ	o	vowel		ω		omega	ωμέγα	U+03A9: GREEK CAPITAL LETTER OMEGA	greek
Ώ		O	Õ	o	vowel + tonos		ώ				U+038F: GREEK CAPITAL LETTER OMEGA WITH TONOS	greek
α		a	a	a	vowel			Α	alpha	άλφα	U+03B1: GREEK SMALL LETTER ALPHA	greek
ά		a	á	a	vowel + tonos			Ά			U+03AC: GREEK SMALL LETTER ALPHA WITH TONOS	greek
Α		A	A	a	vowel		α		alpha	άλφα	U+0391: GREEK CAPITAL LETTER ALPHA	greek
Ά		A	Á	a	vowel + tonos		ά				U+0386: GREEK CAPITAL LETTER ALPHA WITH TONOS	greek
												
												
												
Β		V	V	v	consonant		β		beta	βήτα	U+0392: GREEK CAPITAL LETTER BETA	greek
Γ		Y	Ɣ	ɣ ʝ	consonant		γ		gamma	γάμμα	U+0393: GREEK CAPITAL LETTER GAMMA	greek
Δ		D	Ð	ð	consonant		δ		delta	δέλτα	U+0394: GREEK CAPITAL LETTER DELTA	greek
Ζ		Z	Z	z	consonant		ζ		zeta	ζήτα	U+0396: GREEK CAPITAL LETTER ZETA	greek
Θ		Q	Θ	θ	consonant		θ		theta	θήτα	U+0398: GREEK CAPITAL LETTER THETA	greek
Κ		K	K	k c	consonant		κ		kappa	κάππα	U+039A: GREEK CAPITAL LETTER KAPPA	greek
Λ		L	L	l	consonant		λ		la(m)bda	λά(μ)βδα	U+039B: GREEK CAPITAL LETTER LAMDA	greek
Μ		M	M	m	consonant		μ		mu	μυ	U+039C: GREEK CAPITAL LETTER MU	greek
Ν		N	N	n	consonant		ν		nu	νυ	U+039D: GREEK CAPITAL LETTER NU	greek
Ξ		K	K͡S	ks	consonant		ξ		xi	ξι	U+039E: GREEK CAPITAL LETTER XI	greek
Π		P	P	p	consonant		π		pi	πι	U+03A0: GREEK CAPITAL LETTER PI	greek
Ρ		R	R	r	consonant		ρ		rho	ρώ	U+03A1: GREEK CAPITAL LETTER RHO	greek
Σ		S	S	s z	consonant		σ		sigma	σίγμα	U+03A3: GREEK CAPITAL LETTER SIGMA	greek
Τ		T	T	t	consonant		τ		tau	ταυ	U+03A4: GREEK CAPITAL LETTER TAU	greek
Φ		F	F	f	consonant		φ		phi	φι	U+03A6: GREEK CAPITAL LETTER PHI	greek
Χ		X	X	x ç	consonant		χ		chi	χι	U+03A7: GREEK CAPITAL LETTER CHI	greek
Ψ		P	P͡S	ps	consonant		ψ		psi	ψι	U+03A8: GREEK CAPITAL LETTER PSI	greek
												
β		v	v	v	consonant			Β	beta	βήτα	U+03B2: GREEK SMALL LETTER BETA	greek
γ		y	ɣ	ɣ ʝ	consonant			Γ	gamma	γάμμα	U+03B3: GREEK SMALL LETTER GAMMA	greek
δ		d	ð	ð	consonant			Δ	delta	δέλτα	U+03B4: GREEK SMALL LETTER DELTA	greek
ζ		z	z	z	consonant			Ζ	zeta	ζήτα	U+03B6: GREEK SMALL LETTER ZETA	greek
θ		q	θ	θ	consonant			Θ	theta	θήτα	U+03B8: GREEK SMALL LETTER THETA	greek
κ		k	k	k c	consonant			Κ	kappa	κάππα	U+03BA: GREEK SMALL LETTER KAPPA	greek
λ		l	l	l	consonant			Λ	la(m)bda	λά(μ)βδα	U+03BB: GREEK SMALL LETTER LAMDA	greek
μ		m	m	m	consonant			Μ	mu	μυ	U+03BC: GREEK SMALL LETTER MU	greek
ν		n	n	n	consonant			Ν	nu	νυ	U+03BD: GREEK SMALL LETTER NU	greek
ξ		k	k͡s	ks	consonant			Ξ	xi	ξι	U+03BE: GREEK SMALL LETTER XI	greek
π		p	p	p	consonant			Π	pi	πι	U+03C0: GREEK SMALL LETTER PI	greek
ρ		r	r	r	consonant			Ρ	rho	ρώ	U+03C1: GREEK SMALL LETTER RHO	greek
σ		s	s	s z	consonant			Σ	sigma	σίγμα	U+03C3: GREEK SMALL LETTER SIGMA	greek
ς		s	s̽	s z	consonant				final sigma	σίγμα	U+03C2: GREEK SMALL LETTER FINAL SIGMA	greek
τ		t	t	t	consonant			Τ	tau	ταυ	U+03C4: GREEK SMALL LETTER TAU	greek
φ		f	f	f	consonant			Φ	phi	φι	U+03C6: GREEK SMALL LETTER PHI	greek
χ		x	x	x ç	consonant			Χ	chi	χι	U+03C7: GREEK SMALL LETTER CHI	greek
ψ		p	p͡s	ps	consonant			Ψ	psi	ψι	U+03C8: GREEK SMALL LETTER PSI	greek
												
												
												
												
\u037E		?	?		question mark						U+037E: GREEK QUESTION MARK	greek
\u0387		;	;		semicolon						U+0387: GREEK ANO TELEIA	greek
												
												
\u0301		[	ˊ		acute accent						U+0301: COMBINING ACUTE ACCENT​	
\u0308		[	¨		diaeresis						U+0308: COMBINING DIAERESIS​	


`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":0,
"typeLoc": 5,
"statusLoc": 6,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":7,
"uc":8,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 9,
"nnameLoc": 10,
"ucsName": 11,
"block": 12,

//"othertranscriptions": [[6, 'ISO 9985']]
}
