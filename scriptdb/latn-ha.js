var spreadsheet = `
p	Li	p	p				consonant	infrequent: transliterations of foriegn words		U+0070: LATIN SMALL LETTER P	✓
ɓ	Ll	ɓ	ɓ		b		implosive			U+0253: LATIN SMALL LETTER B WITH HOOK	
ɗ	Ll	ɗ	ɗ		d		implosive			U+0257: LATIN SMALL LETTER D WITH HOOK	
tsʼ		sʼ (t͡sʼ)	ts		t		ejective			U+0074 U+0073 U+02BC: LATIN SMALL LETTER T, SMALL LETTER S, MODIFIER LETTER APOSTROPHE	
ƙ	Ll	kʼ	ƙ		k		ejective			U+0199: LATIN SMALL LETTER K WITH HOOK	✓
ƴ	Ll	j̰	ƴ		y		creaky approximant			U+01B4: LATIN SMALL LETTER Y WITH HOOK	✓
chʼ		t͡ʃʼʼ	chʼ				ejective			U+0063 U+0068 U+02BC: LATIN SMALL LETTER C, SMALL LETTER H, MODIFIER LETTER APOSTROPHE	
ʼ	Lm	ʔ	ʼ		}		glottal stop/ejective diacritic			U+02BC: MODIFIER LETTER APOSTROPHE	
											
bʼ		ɓ	bʼ				implosive			U+0062 U+02BC: LATIN SMALL LETTER B, MODIFIER LETTER APOSTROPHE	
b'		ɓ	b'				implosive			U+0062 U+0027: LATIN SMALL LETTER B, APOSTROPHE	
dʼ		ɗ	dʼ				implosive			U+0064 U+02BC: LATIN SMALL LETTER D, MODIFIER LETTER APOSTROPHE	
d'		ɗ	d'				implosive			U+0064 U+0027: LATIN SMALL LETTER D, APOSTROPHE	
kʼ		kʼ	kʼ				ejective			U+006B U+02BC: LATIN SMALL LETTER K, MODIFIER LETTER APOSTROPHE	
k'		kʼ	kʼ				ejective			U+006B U+0027: LATIN SMALL LETTER K, APOSTROPHE	
ʼy		j̰	ʼy		y		creaky approximant			U+02BC U+0079: MODIFIER LETTER APOSTROPHE, SMALL LETTER Y	
‘y		j̰	ʼy				creaky approximant			U+2018 U+0079: LEFT SINGLE QUOTATION MARK, SMALL LETTER Y	
'y		j̰	ʼy				creaky approximant			U+0027 U+0079: APOSTROPHE, LATIN SMALL LETTER Y	
											
kw		kʷ	kw				labialised plosive			U+006B U+0077: LATIN SMALL LETTER K, SMALL LETTER W	
ky		c	ky				palatalised plosive			U+006B U+0079: LATIN SMALL LETTER K, SMALL LETTER Y	
gw		ɡʷ	gw				ejective			U+0199 U+0077: LATIN SMALL LETTER K WITH HOOK, SMALL LETTER W	
gy		ɡʲ	gy				ejective			U+0199 U+0079: LATIN SMALL LETTER K WITH HOOK, SMALL LETTER Y	
ƙw		kʷʼ	ƙw				ejective			U+0199 U+0077: LATIN SMALL LETTER K WITH HOOK, SMALL LETTER W	
ƙy		kʲʼ	ƙy				ejective			U+0199 U+0079: LATIN SMALL LETTER K WITH HOOK, SMALL LETTER Y												
											
b	Ll	b	b		¶b		plosive			U+0062: LATIN SMALL LETTER B	
t	Ll	t	t		¶t		plosive			U+0074: LATIN SMALL LETTER T	
d	Ll	d	d		¶d		plosive			U+0064: LATIN SMALL LETTER D	
c	Ll	t͡ʃ	c				affricate			U+0063: LATIN SMALL LETTER C	
j	Ll	ʒ (d͡ʒ)	j				affricate			U+006A: LATIN SMALL LETTER J	
k	Ll	k	k		¶k		plosive			U+006B: LATIN SMALL LETTER K	
g	Ll	ɡ	g				plosive			U+0067: LATIN SMALL LETTER G	
											
ts		t͡sʼ sʼ	ts				affricate			U+0074 U+0073: LATIN SMALL LETTER T, SMALL LETTER S	
											
f	Ll	f	f				fricative			U+0066: LATIN SMALL LETTER F	
s	Ll	s	s		¶s		fricative			U+0073: LATIN SMALL LETTER S	
z	Ll	z	z				fricative			U+007A: LATIN SMALL LETTER Z	
sh		ʃ	sh		s		fricative			U+0073 U+0068: LATIN SMALL LETTER S, SMALL LETTER H	
h	Ll	h	h				fricative			U+0068: LATIN SMALL LETTER H	
											
m	Ll	m	m				nasal			U+006D: LATIN SMALL LETTER M	
n	Ll	n	n				nasal			U+006E: LATIN SMALL LETTER N	
											
w	Ll	w	w				approximant			U+0077: LATIN SMALL LETTER W	
r	Ll	ɽ ɾ	r				flap			U+0072: LATIN SMALL LETTER R	
r̃		ɾ	r̃				flap	academic use only		U+0072 U+0303: LATIN SMALL LETTER R, COMBINING TILDE	
l	Ll	l	l				approximant			U+006C: LATIN SMALL LETTER L	
y	Ll	j	y		¶y		approximant			U+0079: LATIN SMALL LETTER Y	
											
P	Li	p	P				consonant	infrequent: transliterations of foriegn words		U+0050: LATIN CAPITAL LETTER P	✓
Ɓ	Lu	ɓ bˤ	Ɓ		B		implosive			U+0181: LATIN CAPITAL LETTER B WITH HOOK	✓
TS		sʼ t͡sʼ	TS		T		affricate			U+0054 U+0053: LATIN CAPITAL LETTER T, CAPITAL LETTER S	
Ɗ	Lu	ɗ	Ɗ		D		implosive			U+018A: LATIN CAPITAL LETTER D WITH HOOK	✓
B	Lu	b	B		¶B		plosive			U+0042: LATIN CAPITAL LETTER B	
T	Lu	t	T		¶T		plosive			U+0054: LATIN CAPITAL LETTER T	
D	Lu	d	D		¶D		plosive			U+0044: LATIN CAPITAL LETTER D	
C	Lu	t͡ʃ	C				affricate			U+0043: LATIN CAPITAL LETTER C	
J	Lu	d͡ʒ ʒ	J				affricate			U+004A: LATIN CAPITAL LETTER J	
G	Lu	ɡ	G				plosive			U+0047: LATIN CAPITAL LETTER G	
K	Lu	k	K		¶K		plosive			U+004B: LATIN CAPITAL LETTER K	
Ƙ	Lu	kʼ	Ƙ		K		ejective			U+0198: LATIN CAPITAL LETTER K WITH HOOK	✓
F	Lu	ɸ	F				fricative			U+0046: LATIN CAPITAL LETTER F	
S	Lu	s	S		¶S		fricative			U+0053: LATIN CAPITAL LETTER S	
Z	Lu	z	Z				fricative			U+005A: LATIN CAPITAL LETTER Z	
SH		ʃ	SH		S		fricative			U+0053 U+0048: LATIN CAPITAL LETTER S, CAPITAL LETTER H	
H	Lu	h	H				fricative			U+0048: LATIN CAPITAL LETTER H	
M	Lu	m	M				nasal			U+004D: LATIN CAPITAL LETTER M	
N	Lu	n	N				nasal			U+004E: LATIN CAPITAL LETTER N	
W	Lu	w	W				approximant			U+0057: LATIN CAPITAL LETTER W	
R	Lu	ɽ ɾ	R				flap			U+0052: LATIN CAPITAL LETTER R	
R̃		r	R̃				flap	academic use only		U+0052 U+0303: LATIN CAPITAL LETTER R, COMBINING TILDE	
L	Lu	l	L				approximant			U+004C: LATIN CAPITAL LETTER L	
Y	Lu	j	Y		¶Y		approximant			U+0059: LATIN CAPITAL LETTER Y	
Ƴ	Lu	ʔʲ	Ƴ		Y		ejective			U+01B3: LATIN CAPITAL LETTER Y WITH HOOK	✓
											
											
											
											
i	Ll	i iː	i				vowel			U+0069: LATIN SMALL LETTER I	
u	Ll	u uː	u				vowel			U+0075: LATIN SMALL LETTER U	
e	Ll	e eː	e				vowel			U+0065: LATIN SMALL LETTER E	
o	Ll	o oː	o				vowel			U+006F: LATIN SMALL LETTER O	
a	Ll	a aː	a				vowel			U+0061: LATIN SMALL LETTER A	
											
I	Lu	i iː	I				vowel			U+0049: LATIN CAPITAL LETTER I	
U	Lu	u uː	U				vowel			U+0055: LATIN CAPITAL LETTER U	
E	Lu	e eː	E				vowel			U+0045: LATIN CAPITAL LETTER E	
O	Lu	o oː	O				vowel			U+004F: LATIN CAPITAL LETTER O	
A	Lu	a aː	A				vowel			U+0041: LATIN CAPITAL LETTER A	
											
											
iu		iu	iu				diphthong			U+0069 U+0075: LATIN SMALL LETTER I, SMALL LETTER U	
ui		ui	ui				diphthong			U+0075 U+0069: LATIN SMALL LETTER U, SMALL LETTER I	
ai		ai	ai				diphthong			U+0061 U+0069: LATIN SMALL LETTER A, SMALL LETTER I	
au		au	au				diphthong			U+0061 U+0075: LATIN SMALL LETTER A, SMALL LETTER U	
											
											
́	Mn​		¹		^		tone mark	academic use only		U+0301: COMBINING ACUTE ACCENT​	
̀	Mn​		²		^		tone mark	academic use only		U+0300: COMBINING GRAVE ACCENT​	
̂	Mn​		³		^		tone mark	academic use only		U+0302: COMBINING CIRCUMFLEX ACCENT​	
											
											
											
											
											
											
											
											
.	Po		.	.	.		full stop			U+002E: FULL STOP	
,	Po		,	,	,		comma			U+002C: COMMA	
⹁	Po		⹁	⹁	,		comma			U+2E41: REVERSED COMMA	
:	Po		:	:	:		colon			U+003A: COLON	
			ˉ	ˉ	:						
;	Po		;	;	;		semicolon			U+003B: SEMICOLON	
!	Po		!	!	!		exclamation mark			U+0021: EXCLAMATION MARK	
			ⸯ	ⸯ	!		exclamation mark				
			¡	¡	!		exclamation mark				
?	Po		?	?	?		question mark			U+003F: QUESTION MARK	
			¿	¿	?		question mark				
											
											
…	Po		…	…	.		ellipsis			U+2026: HORIZONTAL ELLIPSIS	
⋯	Sm		⋯	⋯	.		midline ellipsis			U+22EF: MIDLINE HORIZONTAL ELLIPSIS	
											
											
											
«	Pi		«		<		quotation mark			U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»	Pf		»		>		quotation mark			U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	Pi		‹	‘	<		quotation mark			U+2018: LEFT SINGLE QUOTATION MARK	
›	Pf		›	’	>		quotation mark			U+2019: RIGHT SINGLE QUOTATION MARK	
“	Pi		 “	“	<		quotation mark			U+201C: LEFT DOUBLE QUOTATION MARK	
”	Pf		”	”	>		quotation mark			U+201D: RIGHT DOUBLE QUOTATION MARK	
‘	Pi		‘	‘	<		quotation mark			U+2018: LEFT SINGLE QUOTATION MARK	
’	Pf		’	’	>		quotation mark			U+2019: RIGHT SINGLE QUOTATION MARK	
											
											
											
(	Ps		(	(	(		parenthesis			U+0028: LEFT PARENTHESIS	
)	Ps		)	)	)		parenthesis			U+0029: RIGHT PARENTHESIS	
[	Pe		[	[	(		bracket			U+005B: LEFT SQUARE BRACKET	
]	Pe		]	]	)		bracket			U+005D: RIGHT SQUARE BRACKET	
											
											
-	Pd		-	-	-		hyphen			U+2010: HYPHEN	
‑	Pd		‑	‑	-		non-breaking hyphen			U+2011: NON-BREAKING HYPHEN	
–	Pd		–	–	-		en dash			U+2013: EN DASH	
—	Pd		—	—	-		em dash			U+2014: EM DASH	
											
											
											
’	Pf		’		'		apostrophe			U+2019: RIGHT SINGLE QUOTATION MARK	punctuation
											
											
											
			+				vowel carrier				
											
											
‍ଁ		̃	˜	̃	[		nasalisation				
											
											
‍୍			͞		*		vowel-killer				
			˟		\						
			ˣ		\						
			¯		\						
			ʿ		\						
			͓								
											
‍ଽ			′		]		elision				
			‵		]						
			ʳ		]						
											
											
‍଼			ˑ		/		nukta				
			˙		/		nukta				
			ˇ		/		nukta				
			˷		/		nukta				
			~		/		nukta				
											
											
			&		&		repetition				
			˖		&		gemination				
											
											
			ː		:		length mark				
											
											
			¨		+		abbreviation marker				
											
											
			-		]		word separator				
											
											
			»		@		opening head mark				
			«		@		closing head mark				
			›		@		2nd opening head				
			‹		@		2 closing head				
			§ᵃ		@		honorific				
			 §ᵇ		@		honorific				
			§ᶜ		@		honorific				
			°		@		extra				
											
											
			_	_	_		baseline extender				
											
											
§	Po		§	§			section sign			U+00A7: SECTION SIGN	
†	Po		†	†			dagger			U+2020: DAGGER	
‡	Po		‡	‡			double dagger			U+2021: DOUBLE DAGGER	
′	Po		′	′			prime			U+2032: PRIME	
″	Po		″	″			double prime			U+2033: DOUBLE PRIME	
											
											
											
											
											
											
\u200B	Cf		␣		]		zero-width space			U+200B: ZERO WIDTH SPACE	
\u200C	Cf		ᶻʷⁿʲ		=		zero-width non-joiner			U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf		ᶻʷʲ		=		zero-width joiner			U+200D: ZERO WIDTH JOINER	
\u034F	Mn		ᶜᵍʲ		=		combining grapheme joiner			U+034F: COMBINING GRAPHEME JOINER​	
\u2060	Cf		ʷʲ		=		word joiner			U+2060 WORD JOINER	
											
\u2067	Cf		ʳˡⁱ		=		rtl isolate			U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	Cf		ˡʳⁱ		=		ltr isolate			U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	Cf		ᶠˢⁱ		=		first-strong isolate			U+2068: FIRST STRONG ISOLATE	
\u2069	Cf		ᵖᵈⁱ		=		pop direction isolate			U+2069: POP DIRECTIONAL ISOLATE	
\u202B	Cf		ʳˡᵉ		=		rtl embed			U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	Cf		ˡʳᵉ		=		ltr embed			U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	Cf		ᵖᵈᶠ		=		pop direction			U+202C: POP DIRECTIONAL FORMATTING	
\u200F	Cf		ʳˡᵐ		=		rtl mark			U+200F: RIGHT-TO-LEFT MARK	
\u200E	Cf		ˡʳᵐ		=		ltr mark			U+200E: LEFT-TO-RIGHT MARK	
\u061C	Cf		ᵃˡᵐ		=		arabic letter mark			U+061C: ARABIC LETTER MARK	
											
											
											
											
											
											
			‛		#		thousands separator				
			·		#		decimal separator				
			/		#		date separator				
			¤		#		currency symbol				
			¢		#						
			#		#		number symbol				
			¼		#		quarter				
			½		#		half				
			¾		#		three-quarters				
											
											
											
%	Po		%		%		percentage mark			U+0025: PERCENT SIGN	
‰	Po		‰		%		per mille mark			U+2030: PER MILLE SIGN	




`



latinPanel = 'ɓ bˤ ɗ d͡ʒ ɸ ɡʷ ɡʲ j̰ kʼ kʷ kʲ ɽ sʼ ʃ t͡sʼ t͡ʃʼʼ t͡ʃ ʼ ʒ ʔ ʔʲ'




var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc":3,
"transcription": 0,
"key":5,
"kbd": 6,
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

"nameLoc": 9,
"ucsName": 10,
"block": 11,

//"othertranscriptions": [[4, 'ISO 15919']]
}



