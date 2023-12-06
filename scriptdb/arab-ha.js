var spreadsheet = `arab-ha	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	equiv	shape	native name	latin name	ucs name	block
،	,	,		,			Po		comma						U+060C: ARABIC COMMA	✓
:	:			:	:		Po	?	colon						U+003A: COLON	✓
!	!			!	!		Po		exclamation mark						U+0021: EXCLAMATION MARK	
؟	?	?		?			Po		question mark						U+061F: ARABIC QUESTION MARK	✓
.	.			.	.		Po		full stop						U+002E: FULL STOP	✓
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	✓
)	)			)	)		Ps		parenthesis						U+0029: RIGHT PARENTHESIS	✓
ٔ	[			ʿ			Mn	r	diacritic	normally composed with أ					U+0654: ARABIC HAMZA ABOVE	✓
ٕ	[			˓			Mn	r	diacritic	normally composed with إ and ىِٕ					U+0655: ARABIC HAMZA BELOW	✓
ٰ	[			ˈ			Mn		diacritic	used in long e ٰٜ					U+0670: ARABIC LETTER SUPERSCRIPT ALEF	✓
ٓ	[			~			Mn	u	diacritic	used to signal					U+0653: ARABIC MADDAH ABOVE	✓
ع	}	ʔ		ʔ	ʼ		Lo		glottal stop			ع ععع			U+0639: ARABIC LETTER AIN	✓
ْ	*			͞			Mn		vowel absence marker						U+0652: ARABIC SUKUN	✓
ّ	&			˖			Mn		gemination mark						U+0651: ARABIC SHADDA	✓
«	<			“			Pi		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
‹	<			‹			Pi		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	✓
\u200C	=			ₓ			Cf		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf		zero-width joiner						U+200D: ZERO WIDTH JOINER	
\u2067	=			ʳˡⁱ			Cf		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	=			ᶠˢⁱ			Cf		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	=			ᵖᵈⁱ			Cf		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	=			ʳˡᵉ			Cf		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	=			ᵖᵈᶠ			Cf		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	=			ʳˡᵐ			Cf		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	=			ˡʳᵐ			Cf		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F	=			ᶜᵍʲ			Mn	?	combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER	
\u061C	=			ᵃˡᵐ			Cf	?	arabic letter mark						U+061C: ARABIC LETTER MARK	
»	>			”			Pf		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	✓
›	>			›			Pf		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	✓
َ	a¶	a		a	a		Mn		vowel						U+064E: ARABIC FATHA	✓
أَ	a	ʔa		a	a				vowel		\u{627}\u{654}\u{64E}				U+0623 U+064E: ARABIC LETTER ALEF WITH HAMZA ABOVE, FATHA	
ا	a	–		ɑ			Lo		vowel	used with َا, أَ, إِ and ُواْ		ا ـا			U+0627: ARABIC LETTER ALEF	✓
أ	a	a		ʔ			Lo		vowel	used with أَ	\u{627}\u{654}	أ			U+0623: ARABIC LETTER ALEF WITH HAMZA ABOVE	✓
َا	A	aː		ā	a				vowel			َا ـَا			U+064E U+0627: ARABIC FATHA, LETTER ALEF	
ب	b¶	b		b	b		Lo		plosive/implosive			ب ببب			U+0628: ARABIC LETTER BEH	✓
ٻ	b	ɓ		ɓ̇	ɓ		Lo	r	implosive	warsh orthography		ٻ ٻٻٻ			U+067B: ARABIC LETTER BEEH	✓
ݑ	b	ɓ		ɓ	ɓ		Lo		implosive	alternative		ݑ ݑݑݑ			U+0751: ARABIC LETTER BEH WITH DOT BELOW AND THREE DOTS ABOVE	✓
پ	b	ɓ		ɓ̇	ɓ		Lo		implosive	alternative		پ پپپ			U+067E: ARABIC LETTER PEH	✓
ث	c	t͡ʃ		ʧ	c		Lo		plosive			ث ثثث			U+062B: ARABIC LETTER THEH	✓
د	d¶	d		d	d		Lo		plosive/implosive			د ـد			U+062F: ARABIC LETTER DAL	✓
ط	d	ɗ		ɗ	ɗ		Lo		implosive/ejective			ط ططط			U+0637: ARABIC LETTER TAH	✓
ٜ	e¶	e		e	e		Mn		vowel						U+065C: ARABIC VOWEL SIGN DOT BELOW	✓
ىٰٜ	E¶	eː		ē	e				vowel			ىٰٜ ىٰٜـ			U+0649 U+0670 U+065C: ARABIC LETTER ALEF MAKSURA, LETTER SUPERSCRIPT ALEF, VOWEL SIGN DOT BELOW	
ٰٜ	E	eː		ē	e				vowel						U+0670 U+065C: ARABIC LETTER SUPERSCRIPT ALEF, VOWEL SIGN DOT BELOW	
ٰٜى	E	eː		ē	e				vowel			ـٰٜى			U+0670 U+065C U+0649: ARABIC LETTER SUPERSCRIPT ALEF, VOWEL SIGN DOT BELOW, LETTER ALEF MAKSURA	
ࢻ	f¶	ɸ		f	f		Lo		fricative	warsh orthography		ࢻ ࢻࢻࢻ			U+08BB: ARABIC LETTER AFRICAN FEH	✓
ف	f	ɸ		ḟ	f		Lo	r	fricative	alternative		ف ففف			U+0641: ARABIC LETTER FEH	✓
پ	f	ɸ ɓ		f̄	f		Lo	r	fricative	alternative		پ پپ			U+067E: ARABIC LETTER PEH	✓
غ	g	ɡ		ɡ	g		Lo		plosive			غ غغغ			U+063A: ARABIC LETTER GHAIN	✓
ࣃ	g	ɡʷ ɡʲ		ĝ	gw gy		Lo		labialised/palatalised plosive			ࣃ ࣃࣃࣃ			U+08C3 ARABIC LETTER GHAIN WITH THREE DOTS ABOVE	✓
ح	h¶	h		ħ	h		Lo		fricative			ح ححح			U+062D: ARABIC LETTER HAH	✓
ه	h	h		h	h		Lo	r	fricative			ه ههه			U+0647: ARABIC LETTER HEH	✓
ِ	i¶	i		i	i		Mn		vowel						U+0650: ARABIC KASRA	✓
إِ	i	i		ʔ̣	i				vowel		\u{627}\u{655}\u{650}				U+0625 U+0650: ARABIC LETTER ALEF WITH HAMZA BELOW, KASRA	
ى	i			ı			Lo		vowel lengthener	used with ِى, ىِٕ, ىٰٜ, and ٰٜى		ى ىىى			U+0649: ARABIC LETTER ALEF MAKSURA	✓
إ	i	ʔi		ɑ̜			Lo		consonant+vowel	used with إِ	\u{627}\u{655}	إ			U+0625: ARABIC LETTER ALEF WITH HAMZA BELOW	✓
ِى	I¶	iː		ī	i				vowel			ـِىِى			U+0650 U+0649: ARABIC KASRA, LETTER ALEF MAKSURA	
ىِٕ	I	iː		ī	i				vowel			ىِٕ ىِٕـ			U+0649 U+0650 U+0655: ARABIC LETTER ALEF MAKSURA, KASRA, HAMZA BELOW	
ج	j	d͡ʒ ʒ		ʤ	j		Lo		plosive/affricate			ج ججج			U+062C: ARABIC LETTER JEEM	✓
ک	k¶	k		k	k		Lo		plosive/ejective	warsh orthography		ک ککک			U+06A9: ARABIC LETTER KEHEH	✓
ࢼ	k	kʼ		ƙ	ƙ		Lo		ejective	warsh orthography		ࢼ ࢼࢼࢼ			U+08BC: ARABIC LETTER AFRICAN QAF	✓
ق	k	kʼ		ƙ̇	ƙ		Lo	r	ejective	alternative		ق ققق			U+0642: ARABIC LETTER QAF	✓
ك	k	k kʼ		k	k		Lo	r	plosive/ejective	hafs/alternative orthography		ك ككك			U+0643: ARABIC LETTER KAF	✓
ݣ	k	kʷ kʲ		k̂	kw ky		Lo		labialised/palatalised plosive			ݣ ݣݣݣ			U+0763: ARABIC LETTER KEHEH WITH THREE DOTS ABOVE	✓
ࣄ	k	ƙʷ ƙʲ		ƙ̂	ƙw ƙy		Lo		labialised/palatalised ejective			ࣄ ࣄࣄࣄ			U+08C4 ARABIC LETTER AFRICAN QAF WITH THREE DOTS ABOVE	✓
ل	l¶	l		l	l		Lo		approximant			ل للل			U+0644: ARABIC LETTER LAM	✓
ض	l	l		ḻ	l		Lo	r	approximant	alternative					U+0636: ARABIC LETTER DAD	✓
م	m	m		m	m		Lo		nasal			م ممم			U+0645: ARABIC LETTER MEEM	✓
ࢽ	n¶	n		n	n		Lo		nasal	warsh orthography		ࢽ ࢽࢽࢽ			U+08BD: ARABIC LETTER AFRICAN NOON	✓
ن	n	n		ṅ	n		Lo	r	nasal	alternative		ن ننن			U+0646: ARABIC LETTER NOON	✓
ُواْ	O	oː		ō	o				vowel			ـُواْ			U+064F U+0648 U+0627 U+0652: ARABIC DAMMA, LETTER WAW, LETTER ALEF, SUKUN	
ر	r	r ɽ		r	r		Lo		trill/flap			ر ـر			U+0631: ARABIC LETTER REH	✓
س	s¶	s		s	s		Lo		fricative			س سسس			U+0633: ARABIC LETTER SEEN	✓
ص	s	s		s̄	s		Lo	r	fricative	alternative		ص صصص			U+0635: ARABIC LETTER SAD	✓
ش	s	ʃ		ʃ	sh		Lo		fricative			ش ششش			U+0634: ARABIC LETTER SHEEN	✓
ت	t¶	t		t	t		Lo		plosive			ت تتت			U+062A: ARABIC LETTER TEH	✓
ڟ	t	sʼ t͡sʼ		ᵴ	ts		Lo		ejective			ڟ ڟڟڟ			U+069F: ARABIC LETTER TAH WITH THREE DOTS ABOVE	✓
ُ	u¶	u o		u	o u		Mn		vowel						U+064F: ARABIC DAMMA	✓
ُو	U	uː oː		ū	o u				vowel			ُو ـُو			U+064F U+0648: ARABIC DAMMA, LETTER WAW	
و	w¶	w		w	w		Lo		approximant/vowel lengthener			و ـو			U+0648: ARABIC LETTER WAW	✓
ی	y¶	j		y	y		Lo		approximant			ی ییی			U+06CC: ARABIC LETTER FARSI YEH	✓
ؿ	y	j̰		ƴ̇	ƴ ʼy		Lo	r	creaky approximant	alternative		ؿ ؿؿؿ			U+063F: ARABIC LETTER FARSI YEH WITH THREE DOTS ABOVE	✓
ۑ	y	j̰		ƴ	ƴ ʼy		Lo		creaky approximant	warsh orthography		ۑ ۑۑۑ			U+06D1: ARABIC LETTER YEH WITH THREE DOTS BELOW	✓
ز	z¶	z		z	z		Lo		fricative			ز ـز			U+0632: ARABIC LETTER ZAIN	✓
ذ	z	z		ż	z		Lo	r	fricative	alternative		ذ ـذ			U+0630: ARABIC LETTER THAL	✓
ظ	z	z		z̄	z		Lo	r	fricative	alternative		ظ ظظظ			U+0638: ARABIC LETTER ZAH	✓
ڢ								u		not used !					U+06A2: ARABIC LETTER FEH WITH DOT MOVED BELOW	
ڧ								u		not used !					U+06A7: ARABIC LETTER QAF WITH DOT ABOVE	
`																
																
latinPanel = '’ā ’ aː ā dˤ d͡ʒ ð ðˤ ḍ ħ ʰ ḥ iː ī ɪ ∅ θ sˤ ṣ ʃ tˤ t͡ʃ ṭ uː ū ʊ ɣ ʒ zˤ ẓ ʕ ʔ'																
																
var cols = {																
key: 1,																
ipaLoc: 2,																
ipaPlus: 3,																
transLoc: 4,																
transcription: 5,																
kbd: 6,																
class: 7,																
status: 8,																
typeLoc: 9,																
statusLoc: 10,																
																
equiv:11,																
shape: 12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'Hausa boko']]																
}																