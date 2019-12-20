var spreadsheet = `
𖫥		p	p	p	p	plosive				U+16AE5: BASSA VAH LETTER PA
𖫡		t	t	t	t	plosive				U+16AE1: BASSA VAH LETTER TO
𖫟		c	c	c	c	affricate				U+16ADF: BASSA VAH LETTER CE
𖫑		k	k	k	k	plosive				U+16AD1: BASSA VAH LETTER KA
𖫘		k	kᵖ	k͡p	kp	plosive				U+16AD8: BASSA VAH LETTER KPAH
										
𖫢		b	b	b	b	plosive				U+16AE2: BASSA VAH LETTER BA
𖫗		d	d	d	d	plosive				U+16AD7: BASSA VAH LETTER DHII
𖫞		¶d	ɖ	ɗ	ɖ	implosive				U+16ADE: BASSA VAH LETTER DO
𖫙		j	j	ɟ	j	affricate				U+16AD9: BASSA VAH LETTER JO
𖫖		g	g	ɡ	g	plosive				U+16AD6: BASSA VAH LETTER GAH
𖫝		g	gᵇ	g͡b	gb gm	plosive				U+16ADD: BASSA VAH LETTER GBU
										
𖫓		f	f	f	f	fricative				U+16AD3: BASSA VAH LETTER FA
𖫣		v	v	v	v	fricative				U+16AE3: BASSA VAH LETTER VU
𖫒		s	s	s	s	fricative				U+16AD2: BASSA VAH LETTER SE
𖫜		z	z	z	z	fricative				U+16ADC: BASSA VAH LETTER ZO
𖫚		h	xʷ	ħʷ xʷ	xw	fricative				U+16ADA: BASSA VAH LETTER HWAH
𖫠		h	hʷ	hʷ	hw	fricative				U+16AE0: BASSA VAH LETTER UWU
𖫤		¶h	h	h	h	fricative				U+16AE4: BASSA VAH LETTER YEIN
										
𖫔		m	mᵇ	m͡b	m ɓ	nasal				U+16AD4: BASSA VAH LETTER MBE
𖫐		n	n	n	n	nasal				U+16AD0: BASSA VAH LETTER ENNI
𖫕		j	dᶯ	ɟ ɲ	dy ny	affricate				U+16AD5: BASSA VAH LETTER YIE
										
𖫛		w	w	w	w	approximant				U+16ADB: BASSA VAH LETTER WA
𖫦		r	r	r l	r	approximant				U+16AE6: BASSA VAH LETTER WADDA
										
										
										
𖫭		i	i	i	i	vowel				U+16AED: BASSA VAH LETTER I
𖫪		u	u	u	u	vowel				U+16AEA: BASSA VAH LETTER U
𖫫		e	e	e	e	vowel				U+16AEB: BASSA VAH LETTER EE
𖫩		o	o	o	o	vowel				U+16AE9: BASSA VAH LETTER OO
𖫬		e	ɛ	ɛ	ɛ	vowel				U+16AEC: BASSA VAH LETTER E
𖫨		o	ɔ	ɔ	ɔ	vowel				U+16AE8: BASSA VAH LETTER O
𖫧		a	a	a	a	vowel				U+16AE7: BASSA VAH LETTER A
										
										
										
𖫰		^	¹		́	high tone mark				U+16AF0: BASSA VAH COMBINING HIGH TONE​
𖫱		^	²		̀	mid tone mark				U+16AF1: BASSA VAH COMBINING LOW TONE​
𖫲		^	³			low tone mark				U+16AF2: BASSA VAH COMBINING MID TONE​
𖫳		^	⁴		̌	low-mid tone mark				U+16AF3: BASSA VAH COMBINING LOW-MID TONE​
𖫴		^	⁵		̂	high-low tone mark				U+16AF4: BASSA VAH COMBINING HIGH-LOW TONE​
										
										
										
𖫵		.	.			full stop				U+16AF5: BASSA VAH FULL STOP
.		.	.			full stop				
«		<	 “			quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
»		>	”			quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK


`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":5,
"typeLoc": 6,
"statusLoc": 7,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 0,
"nnameLoc": 0,
"ucsName": 10,

"othertranscriptions": [[5, 'Latin']]
}
