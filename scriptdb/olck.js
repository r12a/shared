var spreadsheet = `
ᱯ		p	p	p	p		consonant			ep		U+1C6F: OL CHIKI LETTER EP	olck
ᱵ		p’ b	b	b	b		consonant			ob		U+1C75: OL CHIKI LETTER OB	olck
ᱛ		t	t	t	t		consonant			at		U+1C5B: OL CHIKI LETTER AT	olck
ᱴ		ʈ	ʈ	ṭ	t	ʈ ṭ						U+1C74: OL CHIKI LETTER OTT	olck
ᱫ		d	d	d	d		consonant			ud		U+1C6B: OL CHIKI LETTER UD	olck
ᱰ		ɖ	ɖ	ḍ	d	ɖ ḍ	pre-nasalised consonant			edd		U+1C70: OL CHIKI LETTER EDD	olck
ᱠ		k	k	k	k					aak		U+1C60: OL CHIKI LETTER AAK	olck
ᱜ		k’ ɡ	g	g	g	k’	consonant			ag		U+1C5C: OL CHIKI LETTER AG	olck
													
ᱪ		c	c	c	c		consonant			uch		U+1C6A: OL CHIKI LETTER UC	olck
ᱡ		c’ j	j	j	j	c’	consonant			aaj		U+1C61: OL CHIKI LETTER AAJ	olck
													
ᱥ		s	s	s	s		consonant			is		U+1C65: OL CHIKI LETTER IS	olck
ᱦ		ʔ h	h	ẖ	h	ʔ	consonant			ih		U+1C66: OL CHIKI LETTER IH	olck
ᱷ		ʰ	ʰ	h	h	ʰ				oh		U+1C77: OL CHIKI LETTER OH	olck
													
ᱢ		m	m	m	m		consonant			aam		U+1C62: OL CHIKI LETTER AAM	olck
ᱱ		n	n	n	n		consonant			en		U+1C71: OL CHIKI LETTER EN	olck
ᱧ		ɲ	ɲ	ñ	n	ɲ ñ	consonant			iny		U+1C67: OL CHIKI LETTER INY	olck
ᱬ		ɳ	ɳ	ṇ	n	ɳ ṇ				unn		U+1C6C: OL CHIKI LETTER UNN	olck
ᱝ		ŋ	ŋ	ṃ	m	ṃ	consonant			ang		U+1C5D: OL CHIKI LETTER ANG	olck
													
ᱣ		w v	w	w	w		consonant			aaw		U+1C63: OL CHIKI LETTER AAW	olck
ᱶ		w̃	w̃	ṅ	n	w̃ 				ov		U+1C76: OL CHIKI LETTER OV	olck
ᱨ		r	r	r	r		consonant			ir		U+1C68: OL CHIKI LETTER IR	olck
ᱲ		ɽ	ɽ	ṛ	r	ɽ ṛ				err		U+1C72: OL CHIKI LETTER ERR	olck
ᱞ		l	l	l	l		consonant			al		U+1C5E: OL CHIKI LETTER AL	olck
ᱭ		j	y	y	y		consonant			uy		U+1C6D: OL CHIKI LETTER UY	olck
													
													
													
ᱤ		i	i	i	i		vowel			li		U+1C64: OL CHIKI LETTER LI	olck
ᱩ		u	u	u	u		vowel			lu		U+1C69: OL CHIKI LETTER LU	olck
ᱮ		e	e	e	e		vowel			le		U+1C6E: OL CHIKI LETTER LE	olck
ᱳ		o	o	o	o		vowel			lo		U+1C73: OL CHIKI LETTER LO	olck
ᱚ		ɔ	ɔ	a	a	ɔ	vowel			la		U+1C5A: OL CHIKI LETTER LA	olck
ᱟ		a	a	ā	a	ā	vowel			laa		U+1C5F: OL CHIKI LETTER LAA	olck
													
ᱮᱹ	s	ɛ		ĕ		ɛ ĕ	extended vowel					U+1C6E U+1C79: OL CHIKI LETTER LE, GAAHLAA TTUDDAAG	
ᱚᱹ	s	ɔ		ŏ		ŏ	extended vowel					U+1C5A U+1C79: OL CHIKI LETTER LA, GAAHLAA TTUDDAAG	
ᱟᱹ	s	ə		ă		ă ə	extended vowel					U+1C5F U+1C79: OL CHIKI LETTER LAA, GAAHLAA TTUDDAAG	
													
													
													
													
													
													
													
													
ᱽ			°	'	[		deglottaliser			ahad		U+1C7D: OL CHIKI AHAD	olck
ᱼ			⁎		[		glottal protector			phārkā		U+1C7C: OL CHIKI PHAARKAA	olck
													
													
ᱸ			˜	m̐	[	m̐	nasalisation marker			mũ ṭuḍăg		U+1C78: OL CHIKI MU TTUDDAG	olck
													
													
ᱹ			ˑ		/		nukta			găhlă ṭuḍăg		U+1C79: OL CHIKI GAAHLAA TTUDDAAG	olck
ᱺ			˙		/		nukta + nasalisation marker			mũ găhlă ṭuḍăg		U+1C7A: OL CHIKI MU-GAAHLAA TTUDDAAG	olck
													
													
ᱻ			ː		:		vowel lengther			relā		U+1C7B: OL CHIKI RELAA	olck
													
													
᱾			|	.	|		minor break			mucăd		U+1C7E: OL CHIKI PUNCTUATION MUCAAD	olck
᱿			‖	|	|		major break			double mucăd		U+1C7F: OL CHIKI PUNCTUATION DOUBLE MUCAAD	olck
.			.		.		full stop					U+002E: FULL STOP	
⋯			⋯		.		ellipsis					U+22EF: MIDLINE HORIZONTAL ELLIPSIS	
,			,		,		comma					U+002C: COMMA	
:			:		:		colon					U+003A: COLON	
;			;		;		semicolon					U+003B: SEMICOLON	
!			!		!		exclamation mark					U+0021: EXCLAMATION MARK	
?			?		?		question mark					U+003F: QUESTION MARK	
													
													
													
“			“		<		quotation mark					U+201C: LEFT DOUBLE QUOTATION MARK	
‘			‘		<		quotation mark					U+2018: LEFT SINGLE QUOTATION MARK	
”			”		>		quotation mark					U+201D: RIGHT DOUBLE QUOTATION MARK	
’			’		>		quotation mark					U+2019: RIGHT SINGLE QUOTATION MARK	
													
													
													
(			(		(		parenthesis					U+0028: LEFT PARENTHESIS	
[			[		(		bracket					U+005B: LEFT SQUARE BRACKET	
)			)		)		parenthesis					U+0029: RIGHT PARENTHESIS	
]			]		)		bracket					U+005D: RIGHT SQUARE BRACKET	
													
													
-			-		-		hyphen						
‑			‑		-		non-breaking hyphen					U+2011: NON-BREAKING HYPHEN	
–			–		-		en dash					U+2013: EN DASH	
—			—		-		em dash					U+2014: EM DASH	
													
													
ʼ			ʼ				apostrophe					U+02BC: MODIFIER LETTER APOSTROPHE	
§			§				section sign					U+00A7: SECTION SIGN	
†			†				dagger					U+2020: DAGGER	
‡			‡				double dagger					U+2021: DOUBLE DAGGER	
′			′				prime					U+2032: PRIME	
″			″				double prime					U+2033: DOUBLE PRIME	
													
													
													
													
													
													
\u200C			ₓ		=		zwnj					U+200C: ZERO WIDTH NON-JOINER	
\u200D			₊		=		zwj					U+200D: ZERO WIDTH JOINER	
\u2067			ʳˡⁱ		=		rtl isolate					U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066			ˡʳⁱ		=		ltr isolate					U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068			ᶠˢⁱ		=		first-strong isolate					U+2068: FIRST STRONG ISOLATE	
\u2069			ᵖᵈⁱ		=		pop direction isolate					U+2069: POP DIRECTIONAL ISOLATE	
\u202B			ʳˡᵉ		=		rtl embed					U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A			ˡʳᵉ		=		ltr embed					U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C			ᵖᵈᶠ		=		pop direction					U+202C: POP DIRECTIONAL FORMATTING	
\u200F			ʳˡᵐ		=		rtl mark					U+200F: RIGHT-TO-LEFT MARK	
\u200E			ˡʳᵐ		=		ltr mark					U+200E: LEFT-TO-RIGHT MARK	
\u034F			ᶜᵍʲ		=		combining grapheme joiner					U+034F: COMBINING GRAPHEME JOINER​	
\u061C			ᵃˡᵐ		=		arabic letter mark					U+061C: ARABIC LETTER MARK	
													
													
													
													
᱐			0̣	0	±		digit					U+1C50: OL CHIKI DIGIT ZERO	olck
᱑			1̣	1	±		digit					U+1C51: OL CHIKI DIGIT ONE	olck
᱒			2̣	2	±		digit					U+1C52: OL CHIKI DIGIT TWO	olck
᱓			3̣	3	±		digit					U+1C53: OL CHIKI DIGIT THREE	olck
᱔			4̣	4	±		digit					U+1C54: OL CHIKI DIGIT FOUR	olck
᱕			5̣	5	±		digit					U+1C55: OL CHIKI DIGIT FIVE	olck
᱖			6̣	6	±		digit					U+1C56: OL CHIKI DIGIT SIX	olck
᱗			7̣	7	±		digit					U+1C57: OL CHIKI DIGIT SEVEN	olck
᱘			8̣	8	±		digit					U+1C58: OL CHIKI DIGIT EIGHT	olck
᱙			9̣	9	±		digit					U+1C59: OL CHIKI DIGIT NINE	olck
													
													
													
													
%			%		%		percentage mark					U+0025: PERCENT SIGN	
`




var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc": 3,
"transcription": 4,
"key":5,
"latin": 6,
"transckey": 0,
"typeLoc": 7,
"statusLoc": 8,
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
"nnameLoc": 0,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[4, 'ALA LC']]
}
