var spreadsheet = `
ㄱ		k	g- -k		k	k		consonant				U+3131: HANGUL LETTER KIYEOK	
ㄲ		k͈	kk- -k	k͈	k	k͈		consonant				U+3132: HANGUL LETTER SSANGKIYEOK	
ㄴ		n	n		n	n		consonant				U+3134: HANGUL LETTER NIEUN	
ㄷ		t	d- -t		t	t		consonant				U+3137: HANGUL LETTER TIKEUT	
ㄸ		t͈	tt-	t͈	t	t͈		consonant				U+3138: HANGUL LETTER SSANGTIKEUT	
ㄹ		l~ɾ	r- -l	ɾ	l	l~ɾ		consonant				U+3139: HANGUL LETTER RIEUL	
ㅁ		m	m		m	m		consonant				U+3141: HANGUL LETTER MIEUM	
ㅂ		p	b- -p		p	p		consonant				U+3142: HANGUL LETTER PIEUP	
ㅃ		p͈	pp-	p͈	p	p͈		consonant				U+3143: HANGUL LETTER SSANGPIEUP	
ㅅ		s	s- -t		s	s		consonant				U+3145: HANGUL LETTER SIOS	
ㅆ		s͈	ss- -t	s͈	s	s͈		consonant				U+3146: HANGUL LETTER SSANGSIOS	
ㅇ		ŋ	-ng	ŋ	n	ŋ		consonant				U+3147: HANGUL LETTER IEUNG	
ㅈ		t͡ɕ	j- -t	t͡ɕ	c	t͡ɕ		consonant				U+3148: HANGUL LETTER CIEUC	
ㅉ		t͈͡ɕ	jj-	t͈͡ɕ	c	t͈͡ɕ		consonant				U+3149: HANGUL LETTER SSANGCIEUC	
ㅊ		tɕʰ	ch- -t	tɕʰ	c	tɕʰ		consonant				U+314A: HANGUL LETTER CHIEUCH	
ㅋ		kʰ	k	kʰ	k	kʰ		consonant				U+314B: HANGUL LETTER KHIEUKH	
ㅌ		tʰ	t	tʰ	t	tʰ		consonant				U+314C: HANGUL LETTER THIEUTH	
ㅍ		pʰ	p	pʰ	p	pʰ		consonant				U+314D: HANGUL LETTER PHIEUPH	
ㅎ		h	h		h	h		consonant				U+314E: HANGUL LETTER HIEUH	
													
													
ㅏ		ɐ	a	ɐ	a	ɐ		vowel				U+314F: HANGUL LETTER A	
ㅐ		ɛ	ae	ɛ	a	ɛ		vowel				U+3150: HANGUL LETTER AE	
ㅑ		jɐ	ya		a	jᵄ		vowel				U+3151: HANGUL LETTER YA	
ㅒ		jɛ	yae		a	jᵋ		vowel				U+3152: HANGUL LETTER YAE	
ㅓ		ʌ̹	eo	ʌ̹	e	ʌ		vowel				U+3153: HANGUL LETTER EO	
ㅔ		e̞	eo	e̞	e	e		vowel				U+3154: HANGUL LETTER E	
ㅕ		jʌ	yeo		e	jᶺ		vowel				U+3155: HANGUL LETTER YEO	
ㅖ		je	yeo		e	jᵉ		vowel				U+3156: HANGUL LETTER YE	
ㅗ		o	o		o	o		vowel				U+3157: HANGUL LETTER O	
ㅘ		wɐ	wa		w	wᵄ		vowel				U+3158: HANGUL LETTER WA	
ㅙ		wɛ	wae		w	wᵋ		vowel				U+3159: HANGUL LETTER WAE	
ㅚ			oe		o	–		vowel				U+315A: HANGUL LETTER OE	
ㅛ		jo	yo		o	jᵒ		vowel				U+315B: HANGUL LETTER YO	
ㅜ		u	u		u	u		vowel				U+315C: HANGUL LETTER U	
ㅝ		wʌ	wo	ʌ	o	wᶺ		vowel				U+315D: HANGUL LETTER WEO	
ㅞ		we	we		e	wᵉ		vowel				U+315E: HANGUL LETTER WE	
ㅟ		ɥi	wi	ɥi	i	ɥⁱ		vowel				U+315F: HANGUL LETTER WI	
ㅠ		ju	yu		u	jᵘ		vowel				U+3160: HANGUL LETTER YU	
ㅡ		ɯ	eu	ɯ	e	ɯ		vowel				U+3161: HANGUL LETTER EU	
ㅢ		ɰi	ui	ɰi	u	ɰⁱ		vowel				U+3162: HANGUL LETTER YI	
ㅣ		i	i		i	i		vowel				U+3163: HANGUL LETTER I	


`



latinPanel = 'e̞ kʰ k͈ pʰ p͈ tɕʰ tʰ t͈ t͈͡ɕ t͡ɕ ŋ ɐ ɛ ɥi ɯ ɰi ɾ ʌ ʌ̹'



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription":3,
"latin": 4,
"key":5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

"equiv": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"transckey": 0,
"numLoc": 0,

"nnameLoc": 10,
"nameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[3, 'Latin']]
}
