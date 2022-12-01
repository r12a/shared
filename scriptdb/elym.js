var spreadsheet = `elym-xly	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𐿯	{	ʕ		ʕ	ʿ		Lo		consonant				U+10FEF: ELYMAIC LETTER AYIN	
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
𐿠	a	ʔ		ʔ	ʾ		Lo		consonant				U+10FE0: ELYMAIC LETTER ALEPH	
𐿡	b	b		b	b		Lo		consonant				U+10FE1: ELYMAIC LETTER BETH	
𐿣	d	d		d	d		Lo		consonant				U+10FE3: ELYMAIC LETTER DALETH	
𐿢	g	g		g	g		Lo		consonant				U+10FE2: ELYMAIC LETTER GIMEL	
𐿧	H	ħ		ħ	ḥ		Lo		consonant				U+10FE7: ELYMAIC LETTER HETH	
𐿤	h	h		h	h		Lo		consonant				U+10FE4: ELYMAIC LETTER HE	
𐿪	k	k		k	k		Lo		consonant				U+10FEA: ELYMAIC LETTER KAPH	
𐿫	l	l		l	l		Lo		consonant				U+10FEB: ELYMAIC LETTER LAMEDH	
𐿬	m	m		m	m		Lo		consonant				U+10FEC: ELYMAIC LETTER MEM	
𐿭	n	n		n	n		Lo		consonant				U+10FED: ELYMAIC LETTER NUN	
𐿰	p	p		p	p		Lo		consonant				U+10FF0: ELYMAIC LETTER PE	
𐿲	q	q		q	q		Lo		consonant				U+10FF2: ELYMAIC LETTER QOPH	
𐿳	r	r		r	r		Lo		consonant				U+10FF3: ELYMAIC LETTER RESH	
𐿮	s	s		s	s		Lo		consonant				U+10FEE: ELYMAIC LETTER SAMEKH	
𐿱	S	sˤ		sˤ	ṣ		Lo		consonant				U+10FF1: ELYMAIC LETTER SADHE	
𐿴	s	ʃ		ʃ	š		Lo		consonant				U+10FF4: ELYMAIC LETTER SHIN	
𐿵	t	t		t	t		Lo		consonant				U+10FF5: ELYMAIC LETTER TAW	
𐿨	T	tˤ		tˤ	ṭ		Lo		consonant				U+10FE8: ELYMAIC LETTER TETH	
𐿥	w	w		w	w		Lo		consonant				U+10FE5: ELYMAIC LETTER WAW	
𐿩	y	y		y	y		Lo		consonant				U+10FE9: ELYMAIC LETTER YODH	
𐿦	z	z		z	z		Lo		consonant				U+10FE6: ELYMAIC LETTER ZAYIN	
𐿶	z	zj		zʸ	zy		Lo		ligature				U+10FF6: ELYMAIC LIGATURE ZAYIN-YODH	
														
`														
														
latinPanel = 'ˡʳᵐ ᵃˡᵐ ˡʳⁱ ˡʳᵉ ᵖᵈⁱ ᵖᵈᶠ ʿ ʳˡᵐ ʳˡⁱ ʳˡᵉ ħ ḥ sˤ ṣ ʃ š tˤ ṭ ʕ ʔ ʾ'														
														
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
														