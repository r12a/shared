var spreadsheet = `phli-pal	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
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
𐭠	a	a aː		a	ʾ		Lo		consonant				U+10B60: INSCRIPTIONAL PAHLAVI LETTER ALEPH	
𐭡	b	b w		b	b		Lo		consonant				U+10B61: INSCRIPTIONAL PAHLAVI LETTER BETH	
𐭣	d	d j		d	d		Lo		consonant				U+10B63: INSCRIPTIONAL PAHLAVI LETTER DALETH	
𐭢	g	ɡ j		g	g		Lo		consonant				U+10B62: INSCRIPTIONAL PAHLAVI LETTER GIMEL	
𐭧	H	h x		ħ	ḥ		Lo		consonant				U+10B67: INSCRIPTIONAL PAHLAVI LETTER HETH	
𐭤	h	h		h	h		Lo		consonant				U+10B64: INSCRIPTIONAL PAHLAVI LETTER HE	
𐭪	k	k g		k	k		Lo		consonant				U+10B6A: INSCRIPTIONAL PAHLAVI LETTER KAPH	
𐭫	l	l r		l	l		Lo		consonant				U+10B6B: INSCRIPTIONAL PAHLAVI LETTER LAMEDH	
𐭬	m	m q		m	m		Lo		consonant				U+10B6C: INSCRIPTIONAL PAHLAVI LETTER MEM-QOPH	
𐭭	n	n		n	n		Lo		consonant				U+10B6D: INSCRIPTIONAL PAHLAVI LETTER NUN	
𐭯	p	p b f		p	p		Lo		consonant				U+10B6F: INSCRIPTIONAL PAHLAVI LETTER PE	
𐭮	s	s h		s	s		Lo		consonant				U+10B6E: INSCRIPTIONAL PAHLAVI LETTER SAMEKH	
𐭰	S	t̠͡ʃ d̠͡ʒ z		ʧ	ṣ		Lo		consonant				U+10B70: INSCRIPTIONAL PAHLAVI LETTER SADHE	
𐭱	s	ʃ		ʃ	š		Lo		consonant				U+10B71: INSCRIPTIONAL PAHLAVI LETTER SHIN	
𐭲	t	t d		t	t		Lo		consonant				U+10B72: INSCRIPTIONAL PAHLAVI LETTER TAW	
𐭨	T	tˤ		tˤ	ṭ		Lo		consonant				U+10B68: INSCRIPTIONAL PAHLAVI LETTER TETH	
𐭥	w	w ʕ r		w	w		Lo		consonant				U+10B65: INSCRIPTIONAL PAHLAVI LETTER WAW-AYIN-RESH	
𐭩	y	j iː eː d̠͡ʒ		y	y		Lo		consonant				U+10B69: INSCRIPTIONAL PAHLAVI LETTER YODH	
𐭦	z	z		z	z		Lo		consonant				U+10B66: INSCRIPTIONAL PAHLAVI LETTER ZAYIN	
														
𐭸				1	1		No		number				U+10B78: INSCRIPTIONAL PAHLAVI NUMBER ONE	
𐭹				2	2		No		number				U+10B79: INSCRIPTIONAL PAHLAVI NUMBER TWO	
𐭺				3	3		No		number				U+10B7A: INSCRIPTIONAL PAHLAVI NUMBER THREE	
𐭻				4	4		No		number				U+10B7B: INSCRIPTIONAL PAHLAVI NUMBER FOUR	
𐭼				1⁰	10		No		number				U+10B7C: INSCRIPTIONAL PAHLAVI NUMBER TEN	
𐭽				2⁰	20		No		number				U+10B7D: INSCRIPTIONAL PAHLAVI NUMBER TWENTY	
𐭾				C	100		No		number				U+10B7E: INSCRIPTIONAL PAHLAVI NUMBER ONE HUNDRED	
𐭿				M	1000		No		number				U+10B7F: INSCRIPTIONAL PAHLAVI NUMBER ONE THOUSAND	
														
`														
														
latinPanel = 'aː d̠͡ʒ eː ɡ ḥ iː ṣ ʃ š tˤ ṭ t̠͡ʃ ʕ ʾ'														
														
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
														