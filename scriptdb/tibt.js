var spreadsheet = `
ཀ	k	kʰ		k	k		Lo		consonant		ྐ				U+0F40: TIBETAN LETTER KA	✓
ཁ	k	kʰ		kh	kʰ		Lo		consonant		ྑ				U+0F41: TIBETAN LETTER KHA	✓
ག	g	k kʰ -g		g	g		Lo		consonant		ྒ				U+0F42: TIBETAN LETTER GA	✓
ང	n	ŋ		ng	ŋ		Lo		consonant		ྔ				U+0F44: TIBETAN LETTER NGA	✓
ཅ	c	ʧ		c	ʧ		Lo		consonant		ྕ				U+0F45: TIBETAN LETTER CA	✓
ཆ	c	ʧʰ		ch	ʧʰ		Lo		consonant		ྖ				U+0F46: TIBETAN LETTER CHA	✓
ཇ	j	ʤ		j	ʤ		Lo		consonant		ྗ				U+0F47: TIBETAN LETTER JA	✓
ཉ	n	ɲ		ny	ɲ		Lo		consonant		ྙ				U+0F49: TIBETAN LETTER NYA	✓
ཏ	t¶	t		t	t		Lo		consonant		ྟ				U+0F4F: TIBETAN LETTER TA	✓
ཐ	t	tʰ		th	tʰ		Lo		consonant		ྠ				U+0F50: TIBETAN LETTER THA	✓
ད	d¶	d		d	d		Lo		consonant		ྡ				U+0F51: TIBETAN LETTER DA	✓
ན	n¶	n		n	n		Lo		consonant		ྣ				U+0F53: TIBETAN LETTER NA	✓
པ	p	p		p	p		Lo		consonant		ྤ				U+0F54: TIBETAN LETTER PA	✓
ཕ	p	pʰ		ph	pʰ		Lo		consonant		ྥ				U+0F55: TIBETAN LETTER PHA	✓
བ	b	b		b	b		Lo		consonant		ྦ				U+0F56: TIBETAN LETTER BA	✓
མ	m	m		m	m		Lo		consonant		ྨ				U+0F58: TIBETAN LETTER MA	✓
ཙ	t	ʦ		ts	ʦ		Lo		consonant		ྩ				U+0F59: TIBETAN LETTER TSA	✓
ཚ	t	ʦʰ		tsh	ʦʰ		Lo		consonant		ྪ				U+0F5A: TIBETAN LETTER TSHA	✓
ཛ	d	ʣ		dz	ʣ		Lo		consonant		ྫ				U+0F5B: TIBETAN LETTER DZA	✓
ཝ	w	w		w	w		Lo		consonant		ྭ				U+0F5D: TIBETAN LETTER WA	✓
ཟ	z	z		zh	z		Lo		consonant		ྯ				U+0F5F: TIBETAN LETTER ZA	✓
ཞ	z	ʒ		zh	ʒ		Lo		consonant		ྮ				U+0F5E: TIBETAN LETTER ZHA	✓
འ	a	a		'a	à		Lo		consonant		ྰ			'a-chung	U+0F60: TIBETAN LETTER -A	✓
ཡ	y	j		y	y		Lo		consonant		ྱ				U+0F61: TIBETAN LETTER YA	✓
ར	r	r		r	r		Lo		consonant		ྲ				U+0F62: TIBETAN LETTER RA	✓
ལ	l	l		l	l		Lo		consonant		ླ				U+0F63: TIBETAN LETTER LA	✓
ས	s	s		s	s		Lo		consonant		ྶ				U+0F66: TIBETAN LETTER SA	✓
ཤ	s	ʃ		sh	ʃ		Lo		consonant		ྵ				U+0F64: TIBETAN LETTER SHA	✓
ཧ	h	h		h	h		Lo		consonant		ྷ				U+0F67: TIBETAN LETTER HA	✓
ཨ	a	a		a	ạ		Lo		consonant		ྸ				U+0F68: TIBETAN LETTER A	✓
																
																
ྐ	K	kʰ		k	k̰		Mn​		subjoined consonant			ཀ			U+0F90: TIBETAN SUBJOINED LETTER KA​	✓
ྑ	K	kʰ		kh	k̰ʰ		Mn​		subjoined consonant			ཁ			U+0F91: TIBETAN SUBJOINED LETTER KHA​	✓
ྒ	G	k kʰ -g		g	g̰		Mn​		subjoined consonant			ག			U+0F92: TIBETAN SUBJOINED LETTER GA​	✓
ྔ	N	ŋ		ng	ŋ̰		Mn​		subjoined consonant			ང			U+0F94: TIBETAN SUBJOINED LETTER NGA​	✓
ྕ	C	ʧ		c	ʧ̰		Mn​		subjoined consonant			ཅ			U+0F95: TIBETAN SUBJOINED LETTER CA​	✓
ྖ	C	ʧʰ		ch	ʧ̰ʰ		Mn​		subjoined consonant			ཆ			U+0F96: TIBETAN SUBJOINED LETTER CHA​	✓
ྗ	J	ʤ		j	ʤ̰		Mn​		subjoined consonant			ཇ			U+0F97: TIBETAN SUBJOINED LETTER JA​	✓
ྙ	N	ɲ		ny	ɲ̰		Mn​		subjoined consonant			ཉ			U+0F99: TIBETAN SUBJOINED LETTER NYA​	✓
ྟ	T¶	t		t	t̰		Mn​		subjoined consonant			ཏ			U+0F9F: TIBETAN SUBJOINED LETTER TA​	✓
ྠ	T	tʰ		th	t̰ʰ		Mn​		subjoined consonant			ཐ			U+0FA0: TIBETAN SUBJOINED LETTER THA​	✓
ྡ	D¶	d		d	d̰		Mn​		subjoined consonant			ད			U+0FA1: TIBETAN SUBJOINED LETTER DA​	✓
ྣ	N¶	n		n	n̰		Mn​		subjoined consonant			ན			U+0FA3: TIBETAN SUBJOINED LETTER NA​	✓
ྤ	P	p		p	p̰		Mn​		subjoined consonant			པ			U+0FA4: TIBETAN SUBJOINED LETTER PA​	✓
ྥ	P	pʰ		ph	p̰ʰ		Mn​		subjoined consonant			ཕ			U+0FA5: TIBETAN SUBJOINED LETTER PHA​	✓
ྦ	B	b		b	b̰		Mn​		subjoined consonant			བ			U+0FA6: TIBETAN SUBJOINED LETTER BA​	✓
ྨ	M	m		m	m̰		Mn​		subjoined consonant			མ			U+0FA8: TIBETAN SUBJOINED LETTER MA​	✓
ྩ	T	ʦ		ts	ʦ̰		Mn​		subjoined consonant			ཙ			U+0FA9: TIBETAN SUBJOINED LETTER TSA​	✓
ྪ	T	ʦʰ		tsh	ʦ̰ʰ		Mn​		subjoined consonant			ཚ			U+0FAA: TIBETAN SUBJOINED LETTER TSHA​	✓
ྫ	D¶	ʣ		dz	ʣ̰		Mn​		subjoined consonant			ཛ			U+0FAB: TIBETAN SUBJOINED LETTER DZA​	✓
ྭ	W	w		w	w̰		Mn​		subjoined consonant			ཝ		wazur/wa-ta (wa-btags)	U+0FAD: TIBETAN SUBJOINED LETTER WA​	✓
ྯ	Z	z		zh	z̰		Mn​		subjoined consonant			ཟ			U+0FAF: TIBETAN SUBJOINED LETTER ZA​	✓
ྮ	Z	ʒ		zh	ʒ̰		Mn​		subjoined consonant			ཞ			U+0FAE: TIBETAN SUBJOINED LETTER ZHA​	✓
ྰ	A	a		'a	à̰		Mn​		subjoined consonant			འ			U+0FB0: TIBETAN SUBJOINED LETTER -A​	✓
ྱ	Y	j		y	y̰		Mn​		subjoined consonant			ཡ		ya-ta (ya-btags)	U+0FB1: TIBETAN SUBJOINED LETTER YA​	✓
ྲ	R	r		r	r̰		Mn​		subjoined consonant			ར		ra-ta (ra-btags)	U+0FB2: TIBETAN SUBJOINED LETTER RA​	✓
ླ	L	l		l	l̰		Mn​		subjoined consonant			ལ			U+0FB3: TIBETAN SUBJOINED LETTER LA​	✓
ྶ	S	s		s	s̰		Mn​		subjoined consonant			ས			U+0FB6: TIBETAN SUBJOINED LETTER SA​	✓
ྵ	S	ʃ		sh	ʃ̰		Mn​		subjoined consonant			ཤ			U+0FB5: TIBETAN SUBJOINED LETTER SSA​	✓
ྷ	H	h		h	h̰		Mn​		subjoined consonant			ཧ			U+0FB7: TIBETAN SUBJOINED LETTER HA​	✓
ྸ	A	a		a	ạ̰		Mn​		subjoined consonant			ཨ			U+0FB8: TIBETAN SUBJOINED LETTER A​	✓
																
																
ཫ	Q	q			q		Lo		balti consonant						U+0F6B: TIBETAN LETTER KKA	✓
ཬ	R	ɽ			ɽ		Lo		balti consonant						U+0F6C: TIBETAN LETTER RRA	✓
ཊ	T	ʈ			ʈ		Lo		sanskrit consonant		ྚ				U+0F4A: TIBETAN LETTER TTA	✓
ཋ	T	ʈʰ			ʈʰ		Lo		sanskrit consonant		ྛ				U+0F4B: TIBETAN LETTER TTHA	✓
ཌ	D	ɖ			ɖ		Lo		sanskrit consonant		ྜ				U+0F4C: TIBETAN LETTER DDA	✓
ཎ	N	ɳ			ɳ		Lo		sanskrit consonant		ྞ				U+0F4E: TIBETAN LETTER NNA	✓
\u0F43	£	gʰ			gʰ		Lo		precomposed sanskrit consonant		\u0F93				U+0F43: TIBETAN LETTER GHA	
\u0F4D	£	ɖʰ			ɖʰ		Lo		precomposed sanskrit consonant		\u0F9D				U+0F4D: TIBETAN LETTER DDHA	
\u0F52	£	d̪ʱ			dʰ		Lo		precomposed sanskrit consonant		\u0FA2				U+0F52: TIBETAN LETTER DHA	
\u0F57	£	bʰ			bʰ		Lo		precomposed sanskrit consonant		\u0FA7				U+0F57: TIBETAN LETTER BHA	
\u0F5C	£	ʣʰ			ʣʰ		Lo		precomposed sanskrit consonant		\u0FAC				U+0F5C: TIBETAN LETTER DZHA	
\u0F69	£	kʂ			kˢ		Lo		precomposed sanskrit consonant		\u0FB9				U+0F69: TIBETAN LETTER KSSA	
ཥ	S	ʂ			ʂ		Lo		sanskrit consonant						U+0F65: TIBETAN LETTER SSA	✓
ཪ	R				r̄		Lo		fixed form variant						U+0F6A: TIBETAN LETTER FIXED-FORM RA	✓
																
																
ྚ	T	ʈ			ʈ̰		Mn​		sanskrit consonant			ཊ			U+0F9A: TIBETAN SUBJOINED LETTER TTA​	✓
ྛ	T	ʈʰ			ʈ̰ʰ		Mn​		sanskrit consonant			ཋ			U+0F9B: TIBETAN SUBJOINED LETTER TTHA​	✓
ྜ	D	ɖ			ɖ̰		Mn​		sanskrit consonant			ཌ			U+0F9C: TIBETAN SUBJOINED LETTER DDA​	✓
ྞ	N	ɳ			ɳ̰		Mn​		sanskrit consonant			ཎ			U+0F9E: TIBETAN SUBJOINED LETTER NNA​	✓
\u0F93	£	gʰ			g̰ʰ		Mn​		precomposed sanskrit consonant			\u0F43			U+0F93: TIBETAN SUBJOINED LETTER GHA​	
\u0F9D	£	ɖʰ			ɖ̰ʰ		Mn​		precomposed sanskrit consonant			\u0F4D			U+0F9D: TIBETAN SUBJOINED LETTER DDHA​	
\u0FA2	£	d̪ʱ			d̰ʰ		Mn​		precomposed sanskrit consonant			\u0F52			U+0FA2: TIBETAN SUBJOINED LETTER DHA​	
\u0FA7	£	bʰ			b̰ʰ		Mn​		precomposed sanskrit consonant			\u0F57			U+0FA7: TIBETAN SUBJOINED LETTER BHA​	
\u0FAC	£	ʣʰ			ʣ̰ʰ		Mn​		precomposed sanskrit consonant			\u0F5C			U+0FAC: TIBETAN SUBJOINED LETTER DZHA​	
\u0FB9	£	kʂ			k̰ˢ		Mn​		precomposed sanskrit consonant			\u0F69			U+0FB9: TIBETAN SUBJOINED LETTER KSSA​	
ྴ	S	ʂ			ʂ̰		Mn​		sanskrit consonant						U+0FB4: TIBETAN SUBJOINED LETTER SHA​	✓
ྼ	R				r̰̄		Mn​		fixed form variant			ཪ			U+0FBC: TIBETAN SUBJOINED LETTER FIXED-FORM RA​	✓
ྺ	W				w̰̄		Mn​		fixed form variant			ཝ			U+0FBA: TIBETAN SUBJOINED LETTER FIXED-FORM WA​	✓
ྻ	Y				ȳ̰		Mn​		fixed form variant			ཡ			U+0FBB: TIBETAN SUBJOINED LETTER FIXED-FORM YA​	✓
																
																
ི	i	i		i	i		Mn​		vowel						U+0F72: TIBETAN VOWEL SIGN I​	✓
ུ	u	u		u	u		Mn​		vowel						U+0F74: TIBETAN VOWEL SIGN U​	✓
ེ	e	e		e	e		Mn​		vowel						U+0F7A: TIBETAN VOWEL SIGN E​	✓
ོ	o	o		o	o		Mn​		vowel						U+0F7C: TIBETAN VOWEL SIGN O​	✓
																
																
ཱ	A	ā			à		Mn​		vowel lengthening mark						U+0F71: TIBETAN VOWEL SIGN AA​	✓
\u0F73	£	ī			ī		Mn​		precomposed sanskrit vowel	deprecated					U+0F73: TIBETAN VOWEL SIGN II​	
\u0F75	£	ū			ū		Mn​		precomposed sanskrit vowel	deprecated					U+0F75: TIBETAN VOWEL SIGN UU​	
\u0F76	£	ṛ			r̥		Mn​		precomposed sanskrit vowel	deprecated					U+0F76: TIBETAN VOWEL SIGN VOCALIC R​	
\u0F78	£	ḷ			l̥		Mn​		precomposed sanskrit vowel	deprecated					U+0F78: TIBETAN VOWEL SIGN VOCALIC L​	
ཻ	E	ai			ē		Mn​		sanskrit vowel						U+0F7B: TIBETAN VOWEL SIGN EE​	✓
ཽ	O	au			ō		Mn​		sanskrit vowel						U+0F7D: TIBETAN VOWEL SIGN OO​	✓
ྀ	I	i			ï		Mn​		sanskrit vowel						U+0F80: TIBETAN VOWEL SIGN REVERSED I​	✓
ཾ	M	ṃ			m̽		Mn​		sanskrit vowel					ngaro	U+0F7E: TIBETAN SIGN RJES SU NGA RO​	✓
ྃ	M	ṃ			m̽̇		Mn​		sanskrit vowel						U+0F83: TIBETAN SIGN SNA LDAN​	✓
ཿ	H	ḥ			h̽		Mc​		sanskrit vowel					nam-chay	U+0F7F: TIBETAN SIGN RNAM BCAD​	✓
																
																
\u0F77	£	ṝ			r̥̄		Mn​		precomposed sanskrit vowel	strongly deprecated					U+0F77: TIBETAN VOWEL SIGN VOCALIC RR​	
\u0F79	£	ḹ			l̥̄		Mn​		precomposed sanskrit vowel	strongly deprecated					U+0F79: TIBETAN VOWEL SIGN VOCALIC LL​	
\u0F81	£	ī			ï̄		Mn​		precomposed sanskrit vowel	deprecated					U+0F81: TIBETAN VOWEL SIGN REVERSED II​	
																
																
																
ༀ							Lo		symbol						U+0F00: TIBETAN SYLLABLE OM	✓
༓							So		symbol						U+0F13: TIBETAN MARK CARET -DZUD RTAGS ME LONG CAN	✓
࿄							So		symbol						U+0FC4: TIBETAN SYMBOL DRIL BU	✓
࿅							So		symbol						U+0FC5: TIBETAN SYMBOL RDO RJE	✓
࿆							Mn​		combining symbol						U+0FC6: TIBETAN SYMBOL PADMA GDAN​	✓
࿇							So		symbol						U+0FC7: TIBETAN SYMBOL RDO RJE RGYA GRAM	✓
࿈							So		symbol						U+0FC8: TIBETAN SYMBOL PHUR PA	✓
࿉							So		symbol						U+0FC9: TIBETAN SYMBOL NOR BU	✓
࿊							So		symbol						U+0FCA: TIBETAN SYMBOL NOR BU NYIS -KHYIL	✓
࿋							So		symbol						U+0FCB: TIBETAN SYMBOL NOR BU GSUM -KHYIL	✓
࿌							So		svasti sign						U+0FCC: TIBETAN SYMBOL NOR BU BZHI -KHYIL	✓
࿕							So		svasti sign					gyung drung nang -khor	U+0FD5: RIGHT-FACING SVASTI SIGN	✓
࿖							So		svasti sign					gyung drung phyi -khor	U+0FD6: LEFT-FACING SVASTI SIGN	✓
࿗							So		svasti sign					gyung drung nang -khor bzhi mig can	U+0FD7: RIGHT-FACING SVASTI SIGN WITH DOTS	✓
࿘							So		svasti sign					gyung drung phyi -khor bzhi mig can	U+0FD8: LEFT-FACING SVASTI SIGN WITH DOTS	✓
																
																
																
༁							So		head mark						U+0F01: TIBETAN MARK GTER YIG MGO TRUNCATED A	✓
༂							So		head mark						U+0F02: TIBETAN MARK GTER YIG MGO -UM RNAM BCAD MA	✓
༃							So		head mark						U+0F03: TIBETAN MARK GTER YIG MGO -UM GTER TSHEG MA	✓
༄	#				ᵗ>		Po		head mark						U+0F04: TIBETAN MARK INITIAL YIG MGO MDUN MA	✓
༅	#				>		Po		head mark						U+0F05: TIBETAN MARK CLOSING YIG MGO SGAB MA	✓
༆							Po		head mark						U+0F06: TIBETAN MARK CARET YIG MGO PHUR SHAD MA	✓
༇							Po		head mark						U+0F07: TIBETAN MARK YIG MGO TSHEG SHAD MA	✓
࿓							Po		head mark					da nying yik go dun ma	U+0FD3: TIBETAN MARK INITIAL BRDA RNYING YIG MGO MDUN MA	✓
࿔							Po		head mark					da nying yik go kab ma	U+0FD4: TIBETAN MARK CLOSING BRDA RNYING YIG MGO SGAB MA	✓
																
																
ྈ							Lo		transliteration head letter		ྍ				U+0F88: TIBETAN SIGN LCE TSA CAN	✓
ྉ							Lo		transliteration head letter		ྎ				U+0F89: TIBETAN SIGN MCHU CAN	✓
ྊ							Lo		transliteration head letter						U+0F8A: TIBETAN SIGN GRU CAN RGYINGS	✓
ྋ							Lo		transliteration head letter						U+0F8B: TIBETAN SIGN GRU MED RGYINGS	✓
ྌ							Lo		transliteration head letter		ྏ				U+0F8C: TIBETAN SIGN INVERTED MCHU CAN	✓
																
																
ྍ							Mn​		subjoined sign			ྈ			U+0F8D: TIBETAN SUBJOINED SIGN LCE TSA CAN​	✓
ྎ							Mn​		subjoined sign			ྉ			U+0F8E: TIBETAN SUBJOINED SIGN MCHU CAN​	✓
ྏ							Mn​		subjoined sign			ྌ			U+0F8F: TIBETAN SUBJOINED SIGN INVERTED MCHU CAN​	✓
																
																
༉	[				•		Po		list enumerator						U+0F09: TIBETAN MARK BSKUR YIG MGO	✓
༊							Po		punctuation						U+0F0A: TIBETAN MARK BKA- SHOG YIG MGO	✓
།	|				|		Po		full stop after text					shay (shad)	U+0F0D: TIBETAN MARK SHAD	✓
༎	|				‖		Po		full stop after topic					shay (shad)	U+0F0E: TIBETAN MARK NYIS SHAD	✓
༈	|				—		Po		topic/subtopic separator						U+0F08: TIBETAN MARK SBRUL SHAD	✓
༏							Po		punctuation						U+0F0F: TIBETAN MARK TSHEG SHAD	✓
༐							Po		punctuation						U+0F10: TIBETAN MARK NYIS TSHEG SHAD	✓
༑							Po		punctuation						U+0F11: TIBETAN MARK RIN CHEN SPUNGS SHAD	✓
༒							Po		punctuation						U+0F12: TIBETAN MARK RGYA GRAM SHAD	✓
༔							Po		~comma					ter tsek	U+0F14: TIBETAN MARK GTER TSHEG	✓
༺	(				[		Ps		left bracket						U+0F3A: TIBETAN MARK GUG RTAGS GYON	✓
༻	)				]		Pe		right bracket						U+0F3B: TIBETAN MARK GUG RTAGS GYAS	✓
༼	(				{		Ps		left bracket						U+0F3C: TIBETAN MARK ANG KHANG GYON	✓
༽	)				}		Pe		right bracket						U+0F3D: TIBETAN MARK ANG KHANG GYAS	✓
྅							Po		punctuation						U+0F85: TIBETAN MARK PALUTA	✓
࿐							Po		punctuation						U+0FD0: TIBETAN MARK BSKA- SHOG GI MGO RGYAN	✓
࿑							Po		punctuation						U+0FD1: TIBETAN MARK MNYAM YIG GI MGO RGYAN	✓
࿒							Po		punctuation					tsek	U+0FD2: TIBETAN MARK NYIS TSHEG	✓
࿙							Po		punctuation						U+0FD9: TIBETAN MARK LEADING MCHAN RTAGS	✓
࿚							Po		punctuation						U+0FDA: TIBETAN MARK TRAILING MCHAN RTAGS	✓
																
																
༴	&				˖		So		repetition sign				བསྡུས་རྟགས	du tag (bsdus-rtags)	U+0F34: TIBETAN MARK BSDUS RTAGS	✓
༵							Mn​		emphasis sign						U+0F35: TIBETAN MARK NGAS BZUNG NYI ZLA​	✓
༶							So		annotation sign						U+0F36: TIBETAN MARK CARET -DZUD RTAGS BZHI MIG CAN	✓
༷							Mn​		emphasis sign						U+0F37: TIBETAN MARK NGAS BZUNG SGOR RTAGS​	✓
༸							So		sign						U+0F38: TIBETAN MARK CHE MGO	✓
༹	/				̣		Mn​		sound extension/lenition mark					tsa-'phru	U+0F39: TIBETAN MARK TSA -PHRU​	✓
ྂ							Mn​		sign						U+0F82: TIBETAN SIGN NYI ZLA NAA DA​	✓
ྃ							Mn​		sign						U+0F83: TIBETAN SIGN SNA LDAN​	✓
྆							Mn​		sign						U+0F86: TIBETAN SIGN LCI RTAGS​	✓
྇							Mn​		sign						U+0F87: TIBETAN SIGN YANG RTAGS​	✓
྾							So		sign						U+0FBE: TIBETAN KU RU KHA	✓
྿							So		sign						U+0FBF: TIBETAN KU RU KHA BZHI MIG CAN	✓
࿀							So		sign						U+0FC0: TIBETAN CANTILLATION SIGN HEAVY BEAT	✓
࿁							So		sign						U+0FC1: TIBETAN CANTILLATION SIGN LIGHT BEAT	✓
࿂							So		sign						U+0FC2: TIBETAN CANTILLATION SIGN CANG TE-U	✓
࿃							So		sign						U+0FC3: TIBETAN CANTILLATION SIGN SBUB -CHAL	✓
																
																
྄	*				͓		Mn​		virama					srog med	U+0F84: TIBETAN MARK HALANTA​	✓
྅	:				ː		Po		paluta						U+0F85: TIBETAN MARK PALUTA	✓
																
																
																
																
༕							So		astrological symbol						U+0F15: TIBETAN LOGOTYPE SIGN CHAD RTAGS	✓
༖							So		astrological symbol						U+0F16: TIBETAN LOGOTYPE SIGN LHAG RTAGS	✓
༗							So		astrological symbol						U+0F17: TIBETAN ASTROLOGICAL SIGN SGRA GCAN -CHAR RTAGS	✓
༚							So		astrological symbol						U+0F1A: TIBETAN SIGN RDEL DKAR GCIG	✓
༛							So		astrological symbol						U+0F1B: TIBETAN SIGN RDEL DKAR GNYIS	✓
༜							So		astrological symbol						U+0F1C: TIBETAN SIGN RDEL DKAR GSUM	✓
༝							So		astrological symbol						U+0F1D: TIBETAN SIGN RDEL NAG GCIG	✓
༞							So		astrological symbol						U+0F1E: TIBETAN SIGN RDEL NAG GNYIS	✓
༟							So		astrological symbol						U+0F1F: TIBETAN SIGN RDEL DKAR RDEL NAG	✓
༾							Mc​		astrological symbol						U+0F3E: TIBETAN SIGN YAR TSHES​	✓
༿							Mc​		astrological symbol						U+0F3F: TIBETAN SIGN MAR TSHES​	✓
࿎							So		astrological symbol						U+0FCE: TIBETAN SIGN RDEL NAG RDEL DKAR	✓
࿏							So		astrological symbol						U+0FCF: TIBETAN SIGN RDEL NAG GSUM	✓
																
																
																
																
གྷ	G	gʰ			gh̰		s		sanskrit consonant						U+0F42 U+0FB7: TIBETAN LETTER GA, SUBJOINED LETTER HA	
ཌྷ	D	ɖʰ			ɖh̰		s		sanskrit consonant						U+0F4C U+0FB7: TIBETAN LETTER DDA, SUBJOINED LETTER HA	
དྷ	D	d̪ʱ			dh̰		s		sanskrit consonant						U+0F51 U+0FB7: TIBETAN LETTER DA, SUBJOINED LETTER HA	
བྷ	B	bʰ			bh̰		s		sanskrit consonant						U+0F56 U+0FB7: TIBETAN LETTER BA, SUBJOINED LETTER HA	
ཛྷ	D	ʣʰ			ʣh̰		s		sanskrit consonant						U+0F5B U+0FB7: TIBETAN LETTER DZA, SUBJOINED LETTER HA	
ཀྵ	K	kʂ			kʃ̰		s		sanskrit consonant						U+0F40 U+0FB5: TIBETAN LETTER KA, SUBJOINED LETTER SSA	
																
																
ྒྷ	G	gʰ			g̰h̰		s		sanskrit consonant						U+0F92 U+0FB7: TIBETAN SUBJOINED LETTER GA, SUBJOINED LETTER HA​	
ྜྷ	D	ɖʰ			ɖ̰h̰		s		sanskrit consonant						U+0F9C U+0FB7: TIBETAN SUBJOINED LETTER DDA, SUBJOINED LETTER HA​	
ྡྷ	D	d̪ʱ			d̰h̰		s		sanskrit consonant						U+0FA1 U+0FB7: TIBETAN SUBJOINED LETTER DA, SUBJOINED LETTER HA​	
ྦྷ	B	bʰ			b̰h̰		s		sanskrit consonant						U+0FA6 U+0FB7: TIBETAN SUBJOINED LETTER BA, SUBJOINED LETTER HA​	
ྫྷ	D	ʣʰ			ʣ̰h̰		s		sanskrit consonant						U+0FAB U+0FB7: TIBETAN SUBJOINED LETTER DZA, SUBJOINED LETTER HA​	
ྐྵ	K	kʂ			k̰ʃ̰		s		sanskrit consonant						U+0F90 U+0FB5: TIBETAN SUBJOINED LETTER KA, SUBJOINED LETTER SSA​	
																
																
ཕ༹	f				pʰ̣		s								U+0F55 U+0F39: TIBETAN LETTER PHA, MARK TSA -PHRU	
བ༹	v				ḅ		s								U+0F56 U+0F39: TIBETAN LETTER BA, MARK TSA -PHRU	
																
																
ཱི	I	ī			ài		s		sanskrit vowel						U+0F71 U+0F72: TIBETAN VOWEL SIGN AA, VOWEL SIGN I​	
ཱུ	U	ū			àu		s		sanskrit vowel						U+0F71 U+0F74: TIBETAN VOWEL SIGN AA, VOWEL SIGN U​	
ྲྀ	R	ṛ			r̰ï		s		sanskrit vowel						U+0FB2 U+0F80: TIBETAN SUBJOINED LETTER RA, VOWEL SIGN REVERSED I​	
ྲཱྀ	R	ṝ			r̰àï		s		sanskrit vowel						U+0FB2 U+0F71 U+0F80: TIBETAN SUBJOINED LETTER RA, VOWEL SIGN AA, VOWEL SIGN REVERSED I​	
ླྀ	L	ḷ			l̰ï		s		sanskrit vowel						U+0FB3 U+0F80: TIBETAN SUBJOINED LETTER LA, VOWEL SIGN REVERSED I​	
ླཱྀ	L	ḹ			l̰àï		s		sanskrit vowel						U+0FB3 U+0F71 U+0F80: TIBETAN SUBJOINED LETTER LA, VOWEL SIGN AA, VOWEL SIGN REVERSED I​	
ཱྀ	I	ī			àï		s		sanskrit vowel						U+0F71 U+0F80: TIBETAN VOWEL SIGN AA, VOWEL SIGN REVERSED I​	
																
																
																
																
																
.	.			.	.		Po		full stop						U+002E: FULL STOP	
,	,			,	,		Po		comma						U+002C: COMMA	
⹁	,			⹁	⹁		Po		comma						U+2E41: REVERSED COMMA	
:	:			:	:		Po		colon						U+003A: COLON	
;	;			;	;		Po		semicolon						U+003B: SEMICOLON	
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark						U+003F: QUESTION MARK	
																
																
…	.			…	…		Po		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
																
																
	:				ː				length mark							
																
																
																
《	<			“	«		Pi		quotation mark						U+300A: LEFT DOUBLE ANGLE BRACKET	
〈	<			‘	‹		Pi		quotation mark						U+3008: LEFT ANGLE BRACKET	
“	<			“	 “		Pi		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			‘	‘		Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
》	>			”	»		Pf		quotation mark						U+300B: RIGHT DOUBLE ANGLE BRACKET	
〉	>			’	›		Pf		quotation mark						U+3009: RIGHT ANGLE BRACKET	
”	>			”	”		Pf		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
’	>			’	’		Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
																
																
																
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	
[	(			[	[		Pe		bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Ps		parenthesis						U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe		bracket						U+005D: RIGHT SQUARE BRACKET	
																
																
-	-			-	-		Pd		hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash						U+2013: EN DASH	
—	-			—	—		Pd		em dash						U+2014: EM DASH	
																
																
																
	[				ˈ				superscript alef							
	[				ʿ				hamza above							
	[				˓				hamza below							
	[				*				star							
	[				~				maddah							
	[				˘				vowel shortener							
	[				⁎				special							
	[				″				register change							
	[				°				special							
	[				˙				combining dot above							
	[				ʼ				combining hook above							
	[				ˆ				combining circumflex							
	[				ˉ				combining macron							
	[				̨				combining ogonek							
	[				⁑				feminine marker							
																
																
	[				+				vowel carrier							
																
																
																
																
་	]				-		Po		primary break delimiter					tsek (tsheg)	U+0F0B: TIBETAN MARK INTERSYLLABIC TSHEG	✓
༌	'				¯		Po		punctuation						U+0F0C: TIBETAN MARK DELIMITER TSHEG BSTAR	✓
																
																
‍ଽ	]				′				elision							
	]				‵											
	]				ʳ											
																
																
‍୍	*				͞				vowel-killer							
	\				˟											
	\				ˣ											
	\				¯											
	\				ʿ											
					͓											
																
‍଼	/				ˑ				nukta							
	/				˙				nukta							
	/				ˇ				nukta							
	/				˷				nukta							
	/				~				nukta							
																
																
	&				&				repetition							
	&				˖				gemination							
																
																
	+				¨				abbreviation marker							
																
																
	@				»				opening head mark							
	@				«				closing head mark							
	@				›				2nd opening head							
	@				‹				2 closing head							
	@				§ᵃ				honorific							
	@				 §ᵇ				honorific							
	@				§ᶜ				honorific							
	@				°				extra							
																
																
																
																
ʼ				ʼ	ʼ		Lm		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po		section sign						U+00A7: SECTION SIGN	
†				†	†		Po		dagger						U+2020: DAGGER	
‡				‡	‡		Po		double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po		prime						U+2032: PRIME	
″				″	″		Po		double prime						U+2033: DOUBLE PRIME	
																
																
																
																
																
																
\u200B	=				␣		Cf		zero-width space						U+200B: ZERO WIDTH SPACE	
\u200C	=				ᶻʷⁿʲ		Cf		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	
\u200D	=				ᶻʷʲ		Cf		zero-width joiner						U+200D: ZERO WIDTH JOINER	
\u034F	=				ᶜᵍʲ		Mn		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
\u2060	=				ʷʲ		Cf		word joiner						U+2060 WORD JOINER	
																
																
																
																
༡	±			1	1̣		Nd		digit						U+0F21: TIBETAN DIGIT ONE	✓
༢	±			2	2̣		Nd		digit						U+0F22: TIBETAN DIGIT TWO	✓
༣	±			3	3̣		Nd		digit						U+0F23: TIBETAN DIGIT THREE	✓
༤	±			4	4̣		Nd		digit						U+0F24: TIBETAN DIGIT FOUR	✓
༥	±			5	5̣		Nd		digit						U+0F25: TIBETAN DIGIT FIVE	✓
༦	±			6	6̣		Nd		digit						U+0F26: TIBETAN DIGIT SIX	✓
༧	±			7	7̣		Nd		digit						U+0F27: TIBETAN DIGIT SEVEN	✓
༨	±			8	8̣		Nd		digit						U+0F28: TIBETAN DIGIT EIGHT	✓
༩	±			9	9̣		Nd		digit						U+0F29: TIBETAN DIGIT NINE	✓
༠	±			0	0̣		Nd		digit						U+0F20: TIBETAN DIGIT ZERO	✓
																
																
																
༳					0.5		No		digit minus half						U+0F33: TIBETAN DIGIT HALF ZERO	✓
༪					1.5		No		digit minus half						U+0F2A: TIBETAN DIGIT HALF ONE	✓
༫					2.5		No		digit minus half						U+0F2B: TIBETAN DIGIT HALF TWO	✓
༬					3.5		No		digit minus half						U+0F2C: TIBETAN DIGIT HALF THREE	✓
༭					4.5		No		digit minus half						U+0F2D: TIBETAN DIGIT HALF FOUR	✓
༮					5.5		No		digit minus half						U+0F2E: TIBETAN DIGIT HALF FIVE	✓
༯					6.5		No		digit minus half						U+0F2F: TIBETAN DIGIT HALF SIX	✓
༰					7.5		No		digit minus half						U+0F30: TIBETAN DIGIT HALF SEVEN	✓
༱					8.5		No		digit minus half						U+0F31: TIBETAN DIGIT HALF EIGHT	✓
༲					9.5		No		digit minus half						U+0F32: TIBETAN DIGIT HALF NINE	✓
	#				‛				thousands separator							
	#				·				decimal separator							
	#				/				date separator							
	#				¤				currency symbol							
	#				¢											
	#				#				number symbol							
	#				¼				quarter							
	#				½				half							
	#				¾				three-quarters							
																
																
																
%	%				%		Po		percentage mark						U+0025: PERCENT SIGN	
‰	%				‰		Po		per mille mark						U+2030: PER MILLE SIGN	




`


latinPanel = 'ā bʰ ʤ ʣ ɖ ɖʰ d̪ʱ ʣʰ gʰ ḥ ī kʰ ḷ ḹ ŋ ɲ ɳ pʰ ɽ ṛ ṝ ʂ ʧ ʧʰ tʰ ʦʰ ʈ ʈʰ ū'



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

"transckey": 0,
"dvowel": 0,
"ivowel": 0,
"subj":11,
"fform": 12,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,

"nnameLoc": 13,
"nameLoc": 14,
"ucsName": 15,
"block": 16,

"othertranscriptions": [[4, 'Wylie']]
}

