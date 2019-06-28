var spreadsheet = `
p	p	Unvoiced bilabial plosive	U+0070: LATIN SMALL LETTER P
b	b	Voiced bilabial plosive	U+0062: LATIN SMALL LETTER B
t	t	Unvoiced dental plosive	U+0074: LATIN SMALL LETTER T
d	d	Voiced dental plosive	U+0064: LATIN SMALL LETTER D
ʈ	t	Unvoiced retroflex plosive	U+0288: LATIN SMALL LETTER T WITH RETROFLEX HOOK
ɖ	d	Voiced retroflex plosive	U+0256: LATIN SMALL LETTER D WITH TAIL
c	c	Unvoiced palatal plosive	U+0063: LATIN SMALL LETTER C
ɟ	j	Voiced palatal plosive	U+025F: LATIN SMALL LETTER DOTLESS J WITH STROKE
k	key	Unvoiced velar plosive	U+006B: LATIN SMALL LETTER K
ɡ	g	Voiced velar plosive	U+0261: LATIN SMALL LETTER SCRIPT G
q	q	Unvoiced uvular plosive	U+0071: LATIN SMALL LETTER Q
ɢ	g	Voiced uvular plosive	U+0262: LATIN LETTER SMALL CAPITAL G
ʔ	}	Glottal plosive	U+0294: LATIN LETTER GLOTTAL STOP
m	m	Bilabial nasal	U+006D: LATIN SMALL LETTER M
ɱ	m	Labiodental nasal	U+0271: LATIN SMALL LETTER M WITH HOOK
n	n	Alveolar nasal	U+006E: LATIN SMALL LETTER N
ɳ	n	Retroflex nasal	U+0273: LATIN SMALL LETTER N WITH RETROFLEX HOOK
ɲ	n	Palatal nasal	U+0272: LATIN SMALL LETTER N WITH LEFT HOOK
ŋ	n	Velar nasal	U+014B: LATIN SMALL LETTER ENG
ɴ	n	Uvular nasal	U+0274: LATIN LETTER SMALL CAPITAL N
ʙ	b	Bilabial trill	U+0299: LATIN LETTER SMALL CAPITAL B
ⱱ	v	Labiodental tap or flap	U+2C71: LATIN SMALL LETTER V WITH RIGHT HOOK
r	r	Alveolar trill	U+0072: LATIN SMALL LETTER R
ɾ	r	Alveolar tap or flap	U+027E: LATIN SMALL LETTER R WITH FISHHOOK
ɽ	r	Retroflex tap or flap	U+027D: LATIN SMALL LETTER R WITH TAIL
ʀ	r	Uvular trill	U+0280: LATIN LETTER SMALL CAPITAL R
ɸ	q	Unvoiced bilabial fricative	U+0278: LATIN SMALL LETTER PHI
β	b	Voiced bilabial fricative	U+03B2: GREEK SMALL LETTER BETA
f	f	Unvoiced labiodental fricative	U+0066: LATIN SMALL LETTER F
v	v	Voiced labiodental fricative	U+0076: LATIN SMALL LETTER V
θ	q	Unvoiced dental fricative	U+03B8: GREEK SMALL LETTER THETA
ð	d	Voiced dental fricative	U+00F0: LATIN SMALL LETTER ETH
s	s	Unvoiced alveolar fricative	U+0073: LATIN SMALL LETTER S
z	z	Voiced alveolar fricative	U+007A: LATIN SMALL LETTER Z
ʃ	s	Unvoiced postalveolar fricative	U+0283: LATIN SMALL LETTER ESH
ʒ	z	Voiced postalveolar fricative	U+0292: LATIN SMALL LETTER EZH
ʂ	s	Unvoiced retroflex fricative	U+0282: LATIN SMALL LETTER S WITH HOOK
ʐ	z	Voiced retroflex fricative	U+0290: LATIN SMALL LETTER Z WITH RETROFLEX HOOK
ç	c	Unvoiced palatal fricative	U+00E7: LATIN SMALL LETTER C WITH CEDILLA
ʝ	j	Voiced palatal fricative	U+029D: LATIN SMALL LETTER J WITH CROSSED-TAIL
x	x	Unvoiced velar fricative	U+0078: LATIN SMALL LETTER X
ɣ	y	Voiced velar fricative	U+0263: LATIN SMALL LETTER GAMMA
χ	x	Unvoiced uvular fricative	U+03C7: GREEK SMALL LETTER CHI
ʁ	r	Voiced uvular fricative	U+0281: LATIN LETTER SMALL CAPITAL INVERTED R
ħ	h	Unvoiced pharyngeal fricative	U+0127: LATIN SMALL LETTER H WITH STROKE
ʕ	{	Voiced pharyngeal fricative	U+0295: LATIN LETTER PHARYNGEAL VOICED FRICATIVE
h	h	Unvoiced glottal fricative	U+0068: LATIN SMALL LETTER H
ɦ	h	Voiced glottal fricative	U+0266: LATIN SMALL LETTER H WITH HOOK
ʋ	v	Labiodental approximant	U+028B: LATIN SMALL LETTER V WITH HOOK
ɹ	r	Alveolar approximant	U+0279: LATIN SMALL LETTER TURNED R
ɻ	r	Retroflex approximant	U+027B: LATIN SMALL LETTER TURNED R WITH HOOK
j	j	Palatal approximant	U+006A: LATIN SMALL LETTER J
ɰ	w	Velar approximant	U+0270: LATIN SMALL LETTER TURNED M WITH LONG LEG
ɬ	l	Unvoiced alveolar lateral fricative	U+026C: LATIN SMALL LETTER L WITH BELT
ɮ	l	Voiced alveolar lateral fricative	U+026E: LATIN SMALL LETTER LEZH
l	l	Alveolar lateral approximant	U+006C: LATIN SMALL LETTER L
ɭ	l	Retroflex lateral approximant	U+026D: LATIN SMALL LETTER L WITH RETROFLEX HOOK
ʎ	y	Palatal lateral approximant	U+028E: LATIN SMALL LETTER TURNED Y
ʟ	l	Velar lateral approximant	U+029F: LATIN LETTER SMALL CAPITAL L
ɫ	l	Velarized voiced alveolar lateral approximant	U+026B: LATIN SMALL LETTER L WITH MIDDLE TILDE
ƥ	b	Unvoiced bilabial implosive	U+01A5: LATIN SMALL LETTER P WITH HOOK
ɓ	b	Voiced bilabial implosive	U+0253: LATIN SMALL LETTER B WITH HOOK
ƭ	t	Unvoiced alveolar implosive	U+01AD: LATIN SMALL LETTER T WITH HOOK
ɗ	d	Voiced alveolar implosive	U+0257: LATIN SMALL LETTER D WITH HOOK
ƈ	c	Unvoiced palatal implosive	U+0188: LATIN SMALL LETTER C WITH HOOK
ʄ	s	Voiced palatal implosive	U+0284: LATIN SMALL LETTER DOTLESS J WITH STROKE AND HOOK
ƙ	key	Unvoiced velar implosive	U+0199: LATIN SMALL LETTER K WITH HOOK
ɠ	g	Voiced velar implosive	U+0260: LATIN SMALL LETTER G WITH HOOK
ʠ	d	Unvoiced uvular implosive	U+02A0: LATIN SMALL LETTER Q WITH HOOK
ʛ	g	Voiced uvular implosive	U+029B: LATIN LETTER SMALL CAPITAL G WITH HOOK
ʘ	q	Bilabial click	U+0298: LATIN LETTER BILABIAL CLICK
ǀ	|	Dental click	U+01C0: LATIN LETTER DENTAL CLICK
ǁ	|	Alveolar lateral click	U+01C1: LATIN LETTER LATERAL CLICK
ǃ	|	(Post) alveolar click	U+01C3: LATIN LETTER RETROFLEX CLICK
ǂ	|	Palato alveolar click	U+01C2: LATIN LETTER ALVEOLAR CLICK
∅	o	Null	U+2205: EMPTY SET
i	i	High front vowel unrounded	U+0069: LATIN SMALL LETTER I
y	y	High front vowel rounded	U+0079: LATIN SMALL LETTER Y
ɨ	i	High central vowel unrounded	U+0268: LATIN SMALL LETTER I WITH STROKE
ʉ	u	High central vowel rounded	U+0289: LATIN SMALL LETTER U BAR
ɯ	w	High back vowel unrounded	U+026F: LATIN SMALL LETTER TURNED M
u	u	High back vowel rounded	U+0075: LATIN SMALL LETTER U
ɪ	i	Semi-high front vowel unrounded	U+026A: LATIN LETTER SMALL CAPITAL I
ʏ	y	Semi-high front vowel rounded	U+028F: LATIN LETTER SMALL CAPITAL Y
ʊ	u	Semi-high back vowel rounded	U+028A: LATIN SMALL LETTER UPSILON
e	e	Upper mid front vowel unrounded	U+0065: LATIN SMALL LETTER E
ø	o	Upper mid front vowel rounded	U+00F8: LATIN SMALL LETTER O WITH STROKE
ɘ	e	Upper-mid central unrounded vowel	U+0258: LATIN SMALL LETTER REVERSED E
ɵ	e	Mid central vowel rounded	U+0275: LATIN SMALL LETTER BARRED O
ɤ	v	Upper mid back vowel unrounded	U+0264: LATIN SMALL LETTER RAMS HORN
o	o	Upper mid back vowel rounded	U+006F: LATIN SMALL LETTER O
ə	e	Mid central vowel unrounded	U+0259: LATIN SMALL LETTER SCHWA
ɛ	e	Lower mid front vowel unrounded	U+025B: LATIN SMALL LETTER OPEN E
œ	o	Lower mid front vowel rounded	U+0153: LATIN SMALL LIGATURE OE
ɜ	e	Lower-mid central unrounded vowel	U+025C: LATIN SMALL LETTER REVERSED OPEN E
ɞ	e	Lower-mid central rounded vowel	U+025E: LATIN SMALL LETTER CLOSED REVERSED OPEN E
ʌ	v	Lower mid back vowel unrounded	U+028C: LATIN SMALL LETTER TURNED V
ɔ	o	Lower mid back vowel rounded	U+0254: LATIN SMALL LETTER OPEN O
æ	a	Lower mid front vowel	U+00E6: LATIN SMALL LETTER AE
ɐ	a	Lower central vowel rounded	U+0250: LATIN SMALL LETTER TURNED A
a	a	Low front vowel unrounded	U+0061: LATIN SMALL LETTER A
ɶ	o	Low front vowel rounded	U+0276: LATIN LETTER SMALL CAPITAL OE
ɑ	a	Low back vowel unrounded	U+0251: LATIN SMALL LETTER ALPHA
ɒ	a	Low back vowel rounded	U+0252: LATIN SMALL LETTER TURNED ALPHA
̋	^	Extra high tone	U+030B: COMBINING DOUBLE ACUTE ACCENT
˥	^	Extra high tone bar	U+02E5: MODIFIER LETTER EXTRA-HIGH TONE BAR
̌	^	Rising contour	U+030C: COMBINING CARON
˩˥	^	MODIFIER LETTER EXTRA-HIGH TONE BAR	U+02E9 U+02E5: MODIFIER LETTER EXTRA-LOW TONE BAR
́	^	High tone	U+0301: COMBINING ACUTE ACCENT
˦	^	High tone bar	U+02E6: MODIFIER LETTER HIGH TONE BAR
̂	^	Falling contour	U+0302: COMBINING CIRCUMFLEX ACCENT
˥˩	^	MODIFIER LETTER EXTRA-LOW TONE BAR	U+02E5 U+02E9: MODIFIER LETTER EXTRA-HIGH TONE BAR
̄	^	Mid tone	U+0304: COMBINING MACRON
˧	^	Mid tone bar	U+02E7: MODIFIER LETTER MID TONE BAR
᷄	^	High rising contour	U+1DC4: COMBINING MACRON-ACUTE
˦˥	^	MODIFIER LETTER EXTRA-HIGH TONE BAR	U+02E6 U+02E5: MODIFIER LETTER HIGH TONE BAR
̀	^	Low tone	U+0300: COMBINING GRAVE ACCENT
˨	^	Low tone bar	U+02E8: MODIFIER LETTER LOW TONE BAR
᷅	^	Low rising contour	U+1DC5: COMBINING GRAVE-MACRON
˩˨	^	MODIFIER LETTER LOW TONE BAR	U+02E9 U+02E8: MODIFIER LETTER EXTRA-LOW TONE BAR
̏	^	Extra low tone	U+030F: COMBINING DOUBLE GRAVE ACCENT
˩	^	Extra low tone bar	U+02E9: MODIFIER LETTER EXTRA-LOW TONE BAR
᷈	^	Rising-falling contour	U+1DC8: COMBINING GRAVE-ACUTE-GRAVE
˧˦˧	^	MODIFIER LETTER HIGH TONE BAR	U+02E7 U+02E6 U+02E7: MODIFIER LETTER MID TONE BAR
↓	^	Downstep	U+2193: DOWNWARDS ARROW
↗	^	Global rise	U+2197: NORTH EAST ARROW
↑	^	Upstep	U+2191: UPWARDS ARROW
↘	^	Global fall	U+2198: SOUTH EAST ARROW
ː	[	Long	U+02D0: MODIFIER LETTER TRIANGULAR COLON
ˑ	[	Half-long	U+02D1: MODIFIER LETTER HALF TRIANGULAR COLON
̆	[	Extra short diacritic	U+0306: COMBINING BREVE
ˈ	[	Primary stress	U+02C8: MODIFIER LETTER VERTICAL LINE
ˌ	[	Secondary stress	U+02CC: MODIFIER LETTER LOW VERTICAL LINE
|	[	Minor (foot) group	U+007C: VERTICAL LINE
‖	[	Major (intonation) group	U+2016: DOUBLE VERTICAL LINE
.	[	Syllable break	U+002E: FULL STOP
‿	[	Linking (absence of a break)	U+203F: UNDERTIE
φ	p	Prosodic phrase	U+03C6: GREEK SMALL LETTER PHI
ω	w	Prosodic word	U+03C9: GREEK SMALL LETTER OMEGA
σ	o	Syllable	U+03C3: GREEK SMALL LETTER SIGMA
μ	u	Mora	U+03BC: GREEK SMALL LETTER MU
ʍ	m	Voiceless labial velar plosive	U+028D: LATIN SMALL LETTER TURNED W
w	w	Voiced labial velar approximant	U+0077: LATIN SMALL LETTER W
ɥ	u	Voiced labial palatal approximant	U+0265: LATIN SMALL LETTER TURNED H
ʜ	h	Voiceless epiglottal fricative	U+029C: LATIN LETTER SMALL CAPITAL H
ʢ	{	Voiced epiglottal fricative	U+02A2: LATIN LETTER REVERSED GLOTTAL STOP WITH STROKE
ʡ	}	Epiglottal plosive	U+02A1: LATIN LETTER GLOTTAL STOP WITH STROKE
ɕ	c	Voiceless alveolo-palatal fricative	U+0255: LATIN SMALL LETTER C WITH CURL
ʑ	z	Voiced alveolo-palatal fricative	U+0291: LATIN SMALL LETTER Z WITH CURL
ɧ	h	Simultaneous unvoiced postalveolar & velar fricative	U+0267: LATIN SMALL LETTER HENG WITH HOOK
ɺ	r	Voiced alveolar lateral flap	U+027A: LATIN SMALL LETTER TURNED R WITH LONG LEG
ʦ	t	Voiceless dental affricate	U+02A6: LATIN SMALL LETTER TS DIGRAPH
ʣ	d	Voiced dental affricate	U+02A3: LATIN SMALL LETTER DZ DIGRAPH
ʧ	t	Voiceless postalveolar affricate	U+02A7: LATIN SMALL LETTER TESH DIGRAPH
ʤ	d	Voiced postalveolar affricate	U+02A4: LATIN SMALL LETTER DEZH DIGRAPH
ʨ	t	Voiceless alveolo-palatal affricate	U+02A8: LATIN SMALL LETTER TC DIGRAPH WITH CURL
ʥ	d	Voiced alveolo-palatal affricate	U+02A5: LATIN SMALL LETTER DZ DIGRAPH WITH CURL
ɚ	e	Rhoticised schwa	U+025A: LATIN SMALL LETTER SCHWA WITH HOOK
ɝ	e	Rhoticised lower mid central vowel	U+025D: LATIN SMALL LETTER REVERSED OPEN E WITH HOOK
ʼ	[	Ejective diacritic	U+02BC: MODIFIER LETTER APOSTROPHE
ʰ	h	Aspirated diacritic	U+02B0: MODIFIER LETTER SMALL H
˭	[	Unaspirated diacritic	U+02ED: MODIFIER LETTER UNASPIRATED
ⁿ	n	Nasal release	U+207F: SUPERSCRIPT LATIN SMALL LETTER N
ˡ	l	Lateral release	U+02E1: MODIFIER LETTER SMALL L
ˤ	{	Pharyngealised diacritic	U+02E4: MODIFIER LETTER SMALL REVERSED GLOTTAL STOP
ˠ	y	Velarised diacritic	U+02E0: MODIFIER LETTER SMALL GAMMA
ʲ	j	Palatalised diacritic	U+02B2: MODIFIER LETTER SMALL J
ʷ	w	Labialised diacritic	U+02B7: MODIFIER LETTER SMALL W
/	[	undefined	U+002F: SOLIDUS
[	[	undefined	U+005B: LEFT SQUARE BRACKET
]	[	undefined	U+005D: RIGHT SQUARE BRACKET
̥	[	Voiceless diacritic	U+0325: COMBINING RING BELOW
̊	[	Voiceless diacritic	U+030A: COMBINING RING ABOVE
̬	[	Voiced diacritic	U+032C: COMBINING CARON BELOW
̤	[	Breathy voiced diacritic	U+0324: COMBINING DIAERESIS BELOW
̰	[	Creaky voiced diacritic	U+0330: COMBINING TILDE BELOW
͓	[	Frictionalised diacritic	U+0353: COMBINING X BELOW
̼	[	Linguolabial diacritic	U+033C: COMBINING SEAGULL BELOW
̪	[	Dental diacritic	U+032A: COMBINING BRIDGE BELOW
̺	[	Apical diacritic	U+033A: COMBINING INVERTED BRIDGE BELOW
̻	[	Laminal diacritic	U+033B: COMBINING SQUARE BELOW
̹	[	More rounded diacritic	U+0339: COMBINING RIGHT HALF RING BELOW
̜	[	Less rounded diacritic	U+031C: COMBINING LEFT HALF RING BELOW
̟	[	Advanced diacritic	U+031F: COMBINING PLUS SIGN BELOW
̠	[	Retracted diacritic	U+0320: COMBINING MINUS SIGN BELOW
̈	[	Centralised diacritic	U+0308: COMBINING DIAERESIS
̽	[	Mid-centralised diacritic	U+033D: COMBINING X ABOVE
̩	[	Syllabic diacritic	U+0329: COMBINING VERTICAL LINE BELOW
̯	[	Non-syllabic diacritic	U+032F: COMBINING INVERTED BREVE BELOW
˞	[	Rhoticity diacritic	U+02DE: MODIFIER LETTER RHOTIC HOOK
̮	[	Derhoticised diacritic	U+032E: COMBINING BREVE BELOW
̙	[	Retracted tongue root diacritic	U+0319: COMBINING RIGHT TACK BELOW
̘	[	Advanced tongue root diacritic	U+0318: COMBINING LEFT TACK BELOW
̞	[	Lowered diacritic	U+031E: COMBINING DOWN TACK BELOW
̝	[	Raised diacritic	U+031D: COMBINING UP TACK BELOW
̴	[	Velarised or pharyngealised diacritic	U+0334: COMBINING TILDE OVERLAY
̃	[	Nasalised diacritic	U+0303: COMBINING TILDE
̨	[	Alternate nasalised diacritic	U+0328: COMBINING OGONEK
͊	[	Denasalised diacritic	U+034A: COMBINING NOT TILDE ABOVE
͋	[	Nasal emission	U+034B: COMBINING HOMOTHETIC ABOVE
̚	[	No audible release diacritic	U+031A: COMBINING LEFT ANGLE ABOVE
ᵊ	e	undefined	U+1D4A: MODIFIER LETTER SMALL SCHWA
͡	[	Upper ligature tie	U+0361: COMBINING DOUBLE INVERTED BREVE
͜	[	Lower ligature tie	U+035C: COMBINING DOUBLE BREVE BELOW
◌	[	Dotted circle	U+25CC: DOTTED CIRCLE
꜈	^	Tone bar	U+A708: MODIFIER LETTER EXTRA-HIGH DOTTED TONE BAR
꜉	^	Tone bar	U+A709: MODIFIER LETTER HIGH DOTTED TONE BAR
꜊	^	Tone bar	U+A70A: MODIFIER LETTER MID DOTTED TONE BAR
꜋	^	Tone bar	U+A70B: MODIFIER LETTER LOW DOTTED TONE BAR
꜌	^	Tone bar	U+A70C: MODIFIER LETTER EXTRA-LOW DOTTED TONE BAR
꜍	^	Tone bar	U+A70D: MODIFIER LETTER EXTRA-HIGH DOTTED LEFT-STEM TONE BAR
꜎	^	Tone bar	U+A70E: MODIFIER LETTER HIGH DOTTED LEFT-STEM TONE BAR
꜏	^	Tone bar	U+A70F: MODIFIER LETTER MID DOTTED LEFT-STEM TONE BAR
꜐	^	Tone bar	U+A710: MODIFIER LETTER LOW DOTTED LEFT-STEM TONE BAR
꜑	^	Tone bar	U+A711: MODIFIER LETTER EXTRA-LOW DOTTED LEFT-STEM TONE BAR
꜒	^	Tone bar	U+A712: MODIFIER LETTER EXTRA-HIGH LEFT-STEM TONE BAR
꜓	^	Tone bar	U+A713: MODIFIER LETTER HIGH LEFT-STEM TONE BAR
꜔	^	Tone bar	U+A714: MODIFIER LETTER MID LEFT-STEM TONE BAR
꜕	^	Tone bar	U+A715: MODIFIER LETTER LOW LEFT-STEM TONE BAR
꜖	^	Tone bar	U+A716: MODIFIER LETTER EXTRA-LOW LEFT-STEM TONE BAR
꜒	^	Tone bar	U+A712: MODIFIER LETTER EXTRA-HIGH LEFT-STEM TONE BAR
꜓	^	Tone bar	U+A713: MODIFIER LETTER HIGH LEFT-STEM TONE BAR
꜔	^	Tone bar	U+A714: MODIFIER LETTER MID LEFT-STEM TONE BAR
꜕	^	Tone bar	U+A715: MODIFIER LETTER LOW LEFT-STEM TONE BAR
꜖	^	Tone bar	U+A716: MODIFIER LETTER EXTRA-LOW LEFT-STEM TONE BAR												
`




var cols = {
"key":1,
"transLoc": 0,
"ipaLoc": 0,
"typeLoc": 2,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"meaning":0,
"transcription":0,
"ucsName":3,

//"othertranscriptions": [[4, 'ISO 15919']]
}
