var spreadsheet = `
ㄱ	k	k		g- -k	k		Lo		consonant		U+3131: HANGUL LETTER KIYEOK	
ㄲ	k	k͈		kk- -k	k͈		Lo		consonant		U+3132: HANGUL LETTER SSANGKIYEOK	
ㄴ	n	n		n	n		Lo		consonant		U+3134: HANGUL LETTER NIEUN	
ㄷ	t	t		d- -t	t		Lo		consonant		U+3137: HANGUL LETTER TIKEUT	
ㄸ	t	t͈		tt-	t͈		Lo		consonant		U+3138: HANGUL LETTER SSANGTIKEUT	
ㄹ	l	l~ɾ		r- -l	l~ɾ		Lo		consonant		U+3139: HANGUL LETTER RIEUL	
ㅁ	m	m		m	m		Lo		consonant		U+3141: HANGUL LETTER MIEUM	
ㅂ	p	p		b- -p	p		Lo		consonant		U+3142: HANGUL LETTER PIEUP	
ㅃ	p	p͈		pp-	p͈		Lo		consonant		U+3143: HANGUL LETTER SSANGPIEUP	
ㅅ	s	s		s- -t	s		Lo		consonant		U+3145: HANGUL LETTER SIOS	
ㅆ	s	s͈		ss- -t	s͈		Lo		consonant		U+3146: HANGUL LETTER SSANGSIOS	
ㅇ	n	ŋ		-ng	ŋ		Lo		consonant		U+3147: HANGUL LETTER IEUNG	
ㅈ	c	t͡ɕ		j- -t	t͡ɕ		Lo		consonant		U+3148: HANGUL LETTER CIEUC	
ㅉ	c	t͈͡ɕ		jj-	t͈͡ɕ		Lo		consonant		U+3149: HANGUL LETTER SSANGCIEUC	
ㅊ	c	tɕʰ		ch- -t	tɕʰ		Lo		consonant		U+314A: HANGUL LETTER CHIEUCH	
ㅋ	k	kʰ		k	kʰ		Lo		consonant		U+314B: HANGUL LETTER KHIEUKH	
ㅌ	t	tʰ		t	tʰ		Lo		consonant		U+314C: HANGUL LETTER THIEUTH	
ㅍ	p	pʰ		p	pʰ		Lo		consonant		U+314D: HANGUL LETTER PHIEUPH	
ㅎ	h	h		h	h		Lo		consonant		U+314E: HANGUL LETTER HIEUH	
												
												
ㅏ	a	ɐ		a	ɐ		Lo		vowel		U+314F: HANGUL LETTER A	
ㅐ	a	ɛ		ae	ɛ		Lo		vowel		U+3150: HANGUL LETTER AE	
ㅑ	a	jɐ		ya	jᵄ		Lo		vowel		U+3151: HANGUL LETTER YA	
ㅒ	a	jɛ		yae	jᵋ		Lo		vowel		U+3152: HANGUL LETTER YAE	
ㅓ	e	ʌ̹		eo	ʌ		Lo		vowel		U+3153: HANGUL LETTER EO	
ㅔ	e	e̞		eo	e		Lo		vowel		U+3154: HANGUL LETTER E	
ㅕ	e	jʌ		yeo	jᶺ		Lo		vowel		U+3155: HANGUL LETTER YEO	
ㅖ	e	je		yeo	jᵉ		Lo		vowel		U+3156: HANGUL LETTER YE	
ㅗ	o	o		o	o		Lo		vowel		U+3157: HANGUL LETTER O	
ㅘ	w	wɐ		wa	wᵄ		Lo		vowel		U+3158: HANGUL LETTER WA	
ㅙ	w	wɛ		wae	wᵋ		Lo		vowel		U+3159: HANGUL LETTER WAE	
ㅚ	o			oe	–		Lo		vowel		U+315A: HANGUL LETTER OE	
ㅛ	o	jo		yo	jᵒ		Lo		vowel		U+315B: HANGUL LETTER YO	
ㅜ	u	u		u	u		Lo		vowel		U+315C: HANGUL LETTER U	
ㅝ	o	wʌ		wo	wᶺ		Lo		vowel		U+315D: HANGUL LETTER WEO	
ㅞ	e	we		we	wᵉ		Lo		vowel		U+315E: HANGUL LETTER WE	
ㅟ	i	ɥi		wi	ɥⁱ		Lo		vowel		U+315F: HANGUL LETTER WI	
ㅠ	u	ju		yu	jᵘ		Lo		vowel		U+3160: HANGUL LETTER YU	
ㅡ	e	ɯ		eu	ɯ		Lo		vowel		U+3161: HANGUL LETTER EU	
ㅢ	u	ɰi		ui	ɰⁱ		Lo		vowel		U+3162: HANGUL LETTER YI	
ㅣ	i	i		i	i		Lo		vowel		U+3163: HANGUL LETTER I	



`



latinPanel = 'e̞ kʰ k͈ pʰ p͈ tɕʰ tʰ t͈ t͈͡ɕ t͡ɕ ŋ ɐ ɛ ɥi ɯ ɰi ɾ ʌ ʌ̹'



var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transcription": 4,
"transLoc": 5,
"kbd": 6,
"class": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

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

"nnameLoc": 0,
"nameLoc": 0,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[4, 'Latin']]
}
