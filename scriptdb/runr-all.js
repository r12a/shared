var spreadsheet = `
ᛈ		p	p	p			p			p		U+16C8: RUNIC LETTER PERTHO PEORTH P	runic
ᛔ		p	ṗ			p		medieval stung		b		U+16D4: RUNIC LETTER DOTTED-P	runic
ᛕ		p	p̣			(p)		medieval stung alternate		p		U+16D5: RUNIC LETTER OPEN-P	runic
ᛒ		b	b	b	b p	b	b	younger long branch		b		U+16D2: RUNIC LETTER BERKANAN BEORC BJARKAN B	runic
ᛓ		b	ḅ		(b)			younger short twig		b		U+16D3: RUNIC LETTER SHORT-TWIG-BJARKAN B	runic
ᛏ		t	t	t	t d		t	younger long branch		t		U+16CF: RUNIC LETTER TIWAZ TIR TYR T	runic
ᛐ		t	ṭ		(t)	t		younger short twig		t		U+16D0: RUNIC LETTER SHORT-TWIG-TYR T	runic
ᛞ		d	d	d			d			d		U+16DE: RUNIC LETTER DAGAZ DAEG D	runic
ᛑ		d	ḏ			d		medieval stung		t		U+16D1: RUNIC LETTER D	runic
ᚲ		k	k	k						k		U+16B2: RUNIC LETTER KAUNA	runic
ᚴ		k	ḳ		k ɡ	k				k		U+16B4: RUNIC LETTER KAUN K	runic
ᚳ		c	c				k kʲ tʃ			c		U+16B3: RUNIC LETTER CEN	runic
ᛤ		k	ḵ̈				(k)			k		U+16E4: RUNIC LETTER CEALC	runic
ᛢ		c	c̱				(k)					U+16E2: RUNIC LETTER CWEORTH	runic
ᚷ		g	g	ɡ			ɡ ɣ			g		U+16B7: RUNIC LETTER GEBO GYFU G	runic
ᚵ		g	g̈			ɡ ɣ		medieval stung		g		U+16B5: RUNIC LETTER G	runic
ᚸ		g	g̱̈				(ɡ ɣ)			g		U+16B8: RUNIC LETTER GAR	runic
ᚠ		f	f	f	f v	f	f v			f		U+16A0: RUNIC LETTER FEHU FEOH FE F	runic
ᚡ		v	v			v		medieval stung				U+16A1: RUNIC LETTER V	runic
ᚦ		p	þ	θ ð	θ ð	θ	θ ð			þ		U+16A6: RUNIC LETTER THURISAZ THURS THORN	runic
ᚧ		d	ð			ð		medieval stung		þ		U+16A7: RUNIC LETTER ETH	runic
ᛊ		s	ṡ	s						s		U+16CA: RUNIC LETTER SOWILO S	runic
ᛋ		s	s	(s)	s		s z	younger long branch		s		U+16CB: RUNIC LETTER SIGEL LONG-BRANCH-SOL S	runic
ᛌ		s	ṣ		(s)	s		younger short twig		s		U+16CC: RUNIC LETTER SHORT-TWIG-SOL S	runic
ᛉ		z	z	z			ks			XXX		U+16C9: RUNIC LETTER ALGIZ EOLHX	runic
ᚺ		h	ḣ	h						h		U+16BA: RUNIC LETTER HAGLAZ H	runic
ᚻ		h	h	(h)			h	edler alternate		h		U+16BB: RUNIC LETTER HAEGL H	runic
ᚼ		h	ḥ		h	h		younger long branch		h		U+16BC: RUNIC LETTER LONG-BRANCH-HAGALL H	runic
ᚽ		h	ḥ̇		(h)			younger short twig		h		U+16BD: RUNIC LETTER SHORT-TWIG-HAGALL H	runic
ᛗ		m	m	m			m			m		U+16D7: RUNIC LETTER MANNAZ MAN M	runic
ᛘ		m	ṃ		m	m		younger long branch		m		U+16D8: RUNIC LETTER LONG-BRANCH-MADR M	runic
ᛙ		m	ṃ̇		(m)			younger short twig		m		U+16D9: RUNIC LETTER SHORT-TWIG-MADR M	runic
ᚾ		n	n	n	n		n	younger long branch		n		U+16BE: RUNIC LETTER NAUDIZ NYD NAUD N	runic
ᚿ		n	ṇ		(n)	n		younger short twig		n		U+16BF: RUNIC LETTER SHORT-TWIG-NAUD N	runic
ᛜ		N	ŋ	ŋ						ŋ		U+16DC: RUNIC LETTER INGWAZ	runic
ᛝ		N	ŋ̱	(ŋ)			ŋ			ŋ		U+16DD: RUNIC LETTER ING	runic
ᚹ		w	w	w			w			w		U+16B9: RUNIC LETTER WUNJO WYNN W	runic
ᚱ		r	r	r	r	r	r			r		U+16B1: RUNIC LETTER RAIDO RAD REID R	runic
ᛦ		R	ʀ̣		ʀ			younger long branch		ʀ		U+16E6: RUNIC LETTER LONG-BRANCH-YR	runic
ᛧ		R	ʀ̣̇		(ʀ)			younger short twig		ʀ		U+16E7: RUNIC LETTER SHORT-TWIG-YR	runic
ᛚ		l	l	l	l	l	l			l		U+16DA: RUNIC LETTER LAUKAZ LAGU LOGR L	runic
ᛃ		j	j	j						j		U+16C3: RUNIC LETTER JERAN J	runic
ᛄ		j	j̱				j			j		U+16C4: RUNIC LETTER GER	runic
													
ᛥ		s	sᵗ				(st)			st		U+16E5: RUNIC LETTER STAN	runic
													
ᛁ		i	i	i(ː)	i e	i j e	i(ː)			i		U+16C1: RUNIC LETTER ISAZ IS ISS I	runic
ᚣ		y	y̱				y(ː)			y		U+16A3: RUNIC LETTER YR	runic
ᛣ		y	y			y	(k)			XXX		U+16E3: RUNIC LETTER CALC	runic
ᚤ		y	ẏ			y ø		medieval stung		u		U+16A4: RUNIC LETTER Y	runic
ᛇ		i	ɨ	æː			i(ː) x ç			XXXX		U+16C7: RUNIC LETTER IWAZ EOH	runic
ᚢ		u	u	u(ː)	u v w y o ø	u w	u(ː)			u		U+16A2: RUNIC LETTER URUZ UR U	runic
ᛖ		e	e̱	e(ː)			e(ː)			e		U+16D6: RUNIC LETTER EHWAZ EH E	runic
ᛂ		e	e̱			e		medieval stung		i		U+16C2: RUNIC LETTER E	runic
ᚩ		o	o				o(ː)			o		U+16A9: RUNIC LETTER OS O	runic
ᚯ		o	ø			(ø ɔ)		medieval stung alternate		o		U+16AF: RUNIC LETTER OE	runic
ᚰ		o	ɔ			(ɔ)		medieval stung alternate				U+16B0: RUNIC LETTER ON	runic
ᚮ		o	ȯ			o ɔ				o		U+16AE: RUNIC LETTER O	runic
ᛟ		o	ǫ	o(ː)			ø(ː)			XXXX		U+16DF: RUNIC LETTER OTHALAN ETHEL O	runic
ᚫ		a	æ̱				æ(ː)			æ		U+16AB: RUNIC LETTER AESC	runic
ᚨ		a	a	a(ː)						a		U+16A8: RUNIC LETTER ANSUZ A	runic
ᚪ		a	ɑ				ɑ(ː)			a		U+16AA: RUNIC LETTER AC A	runic
ᚬ		a	ą		ą o æ			younger long branch		a		U+16AC: RUNIC LETTER LONG-BRANCH-OSS O	runic
ᚭ		a	ạ̃̇		(ą o æ)			younger short twig		a		U+16AD: RUNIC LETTER SHORT-TWIG-OSS O	runic
ᛅ		a	ạ		a æ e	(ɛ æ)		younger long branch, medieval stung alternate		a		U+16C5: RUNIC LETTER LONG-BRANCH-AR AE	runic
ᛆ		a	ạ̇		(a æ e)	a		younger short twig		a		U+16C6: RUNIC LETTER SHORT-TWIG-AR A	runic
													
ᛠ		e	e̱ᵃ				æ(ː)ɑ			eᵃ		U+16E0: RUNIC LETTER EAR	runic
ᛡ		i	iᵒ				i(ː)o			iᵒ		U+16E1: RUNIC LETTER IOR	runic
													
ᛍ								letter				U+16CD: RUNIC LETTER C	runic
ᚥ								letter				U+16A5: RUNIC LETTER W	runic
ᚶ								letter				U+16B6: RUNIC LETTER ENG	runic
ᛀ								letter				U+16C0: RUNIC LETTER DOTTED-N	runic
ᛎ								letter				U+16CE: RUNIC LETTER Z	runic
ᛛ								letter				U+16DB: RUNIC LETTER DOTTED-L	runic
ᛨ								letter				U+16E8: RUNIC LETTER ICELANDIC-YR	runic
ᛩ								letter				U+16E9: RUNIC LETTER Q	runic
ᛪ								letter				U+16EA: RUNIC LETTER X	runic
													
													
													
													
᛫								punctuation				U+16EB: RUNIC SINGLE PUNCTUATION	runic
᛬		]	-					word-break				U+16EC: RUNIC MULTIPLE PUNCTUATION	runic
᛭								punctuation				U+16ED: RUNIC CROSS PUNCTUATION	runic
													
													
ᛮ								golden number rune				U+16EE: RUNIC ARLAUG SYMBOL	runic
ᛯ								golden number rune				U+16EF: RUNIC TVIMADUR SYMBOL	runic
ᛰ								golden number rune				U+16F0: RUNIC BELGTHOR SYMBOL	runic
													
													
ᛱ								tolkenian letter				U+16F1: RUNIC LETTER K	runic
ᛲ								tolkenian letter				U+16F2: RUNIC LETTER SH	runic
ᛳ								tolkenian letter				U+16F3: RUNIC LETTER OO	runic
													
													
ᛴ								cryptogrammic letter				U+16F4: RUNIC LETTER FRANKS CASKET OS	runic
ᛵ								cryptogrammic letter				U+16F5: RUNIC LETTER FRANKS CASKET IS	runic
ᛶ								cryptogrammic letter				U+16F6: RUNIC LETTER FRANKS CASKET EH	runic
ᛷ								cryptogrammic letter				U+16F7: RUNIC LETTER FRANKS CASKET AC	runic
ᛸ								cryptogrammic letter				U+16F8: RUNIC LETTER FRANKS CASKET AESC	runic
													
													
é			é	é									
ẗ			ẗ	ẗ									
ý			ý	ý									
ú			ú	ú									
ü			ü	ü									
í			í	í									
ï			ï	ï									
ø			ø	ø									
ó			ó	ó									
ą			ą	ą									
ǫ			ǫ	ǫ									
á			á	á									
ã			ã	ã									
ð			ð	ð									
f̈			f̈	f̈									
g̈			g̈	g̈									
k̈			k̈	k̈									
œ			œ	œ									
æ			æ	æ									
e͡a			e͡a	e͡a									
b̈			b̈	b̈									
`


var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 0,
"transcription":0,
"typeLoc": 8,
"statusLoc": 9,
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
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,

"othertranscriptions": [[4, 'Elder'], [5, 'LB/ST'], [6, 'Medieval'], [7, 'AS/F']]
}
