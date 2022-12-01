var spreadsheet = `hatr-mis	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𐣯	{	ʕ		ʕ	ʿ		Lo		consonant				U+108EF: HATRAN LETTER AYN	
\u200C	=			ₓ			Cf		zwnj				U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf		zwj				U+200D: ZERO WIDTH JOINER	
\u200E	=			ˡʳᵐ			Cf		lrm				U+200E: LEFT-TO-RIGHT MARK	
\u200F	=			ʳˡᵐ			Cf		rlm				U+200F: RIGHT-TO-LEFT MARK	
\u061C	=			ᵃˡᵐ			Cf		alm				U+061C: ARABIC LETTER MARK	
\u2067	=			ʳˡⁱ			Cf		rli				U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf		lri				U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B	=			ʳˡᵉ			Cf		rle				U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf		lre				U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069	=			ᵖᵈⁱ			Cf		pdi				U+2069: POP DIRECTIONAL ISOLATE	
\u202C	=			ᵖᵈᶠ			Cf		pdf				U+202C: POP DIRECTIONAL FORMATTING	
𐣠	a	ʔ		ʔ	ʾ		Lo		consonant				U+108E0: HATRAN LETTER ALEPH	
𐣡	b	b		b	b		Lo		consonant				U+108E1: HATRAN LETTER BETH	
𐣿	C			C₀	C		No		number				U+108FF: HATRAN NUMBER ONE HUNDRED	
𐣣	d	d r		d	d		Lo		consonant				U+108E3: HATRAN LETTER DALETH-RESH	
𐣢	g	g		g	g		Lo		consonant				U+108E2: HATRAN LETTER GIMEL	
𐣧	H	ħ		ħ	ḥ		Lo		consonant				U+108E7: HATRAN LETTER HETH	
𐣤	h	h		h	h		Lo		consonant				U+108E4: HATRAN LETTER HE	
𐣻	I			1	I		No		number				U+108FB: HATRAN NUMBER ONE	
𐣪	k	k		k	k		Lo		consonant				U+108EA: HATRAN LETTER KAPH	
𐣫	l	l		l	l		Lo		consonant				U+108EB: HATRAN LETTER LAMEDH	
𐣬	m	m		m	m		Lo		consonant				U+108EC: HATRAN LETTER MEM	
𐣭	n	n		n	n		Lo		consonant				U+108ED: HATRAN LETTER NUN	
𐣰	p	p		p	p		Lo		consonant				U+108F0: HATRAN LETTER PE	
𐣲	q	q		q	q		Lo		consonant				U+108F2: HATRAN LETTER QOPH	
𐣮	s	s		s	s		Lo		consonant				U+108EE: HATRAN LETTER SAMEKH	
𐣱	S	sˤ		sˤ	ṣ		Lo		consonant				U+108F1: HATRAN LETTER SADHE	
𐣴	s	ʃ		ʃ	š		Lo		consonant				U+108F4: HATRAN LETTER SHIN	
𐣵	t	t		t	t		Lo		consonant				U+108F5: HATRAN LETTER TAW	
𐣨	T	tˤ		tˤ	ṭ		Lo		consonant				U+108E8: HATRAN LETTER TETH	
𐣼	V			V	V		No		number				U+108FC: HATRAN NUMBER FIVE	
𐣥	w	w		w	w		Lo		consonant				U+108E5: HATRAN LETTER WAW	
𐣽	X			1⁰	X		No		number				U+108FD: HATRAN NUMBER TEN	
𐣾	X			2⁰	XX		No		number				U+108FE: HATRAN NUMBER TWENTY	
𐣩	y	j		y	y		Lo		consonant				U+108E9: HATRAN LETTER YODH	
𐣦	z	z		z	z		Lo		consonant				U+108E6: HATRAN LETTER ZAYN	
														
`														
														
latinPanel = 'ħ ḥ sˤ ṣ ʃ š tˤ ṭ ʔ ʾ'														
														
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
														
nnameLoc: 11,														
nameLoc: 12,														
ucsName: 13,														
block: 14,														
														
othertranscriptions: [[5, 'Latin']]														
}														
														