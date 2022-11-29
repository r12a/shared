var spreadsheet = `prti-xpr	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𐭏	{	ʔ		ʕ	ʿ				consonant				U+10B4F: INSCRIPTIONAL PARTHIAN LETTER AYIN	
\u200C	=			ₓ					zwnj				U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊					zwj				U+200D: ZERO WIDTH JOINER	
\u200E	=			ˡʳᵐ					lrm				U+200E: LEFT-TO-RIGHT MARK	
\u200F	=			ʳˡᵐ					rlm				U+200F: RIGHT-TO-LEFT MARK	
\u061C	=			ᵃˡᵐ					alm				U+061C: ARABIC LETTER MARK	
\u2067	=			ʳˡⁱ					rli				U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ					lri				U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B	=			ʳˡᵉ					rle				U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ					lre				U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069	=			ᵖᵈⁱ					pdi				U+2069: POP DIRECTIONAL ISOLATE	
\u202C	=			ᵖᵈᶠ					pdf				U+202C: POP DIRECTIONAL FORMATTING	
𐭀	a	ʔ aː		ʔ	ʾ				consonant				U+10B40: INSCRIPTIONAL PARTHIAN LETTER ALEPH	
𐭁	b	b v		b	b				consonant				U+10B41: INSCRIPTIONAL PARTHIAN LETTER BETH	
𐭃	d	d j		d	d				consonant				U+10B43: INSCRIPTIONAL PARTHIAN LETTER DALETH	
𐭂	g	ɡ j		g	g				consonant				U+10B42: INSCRIPTIONAL PARTHIAN LETTER GIMEL	
𐭇	H	h x		ħ	ḥ				consonant				U+10B47: INSCRIPTIONAL PARTHIAN LETTER HETH	
𐭄	h	h		h	h				consonant				U+10B44: INSCRIPTIONAL PARTHIAN LETTER HE	
𐭊	k	k		k	k				consonant				U+10B4A: INSCRIPTIONAL PARTHIAN LETTER KAPH	
𐭋	l	l		l	l				consonant				U+10B4B: INSCRIPTIONAL PARTHIAN LETTER LAMEDH	
𐭌	m	m		m	m				consonant				U+10B4C: INSCRIPTIONAL PARTHIAN LETTER MEM	
𐭍	n	n		n	n				consonant				U+10B4D: INSCRIPTIONAL PARTHIAN LETTER NUN	
𐭐	p	p b		p	p				consonant				U+10B50: INSCRIPTIONAL PARTHIAN LETTER PE	
𐭒	q	q		q	q				consonant				U+10B52: INSCRIPTIONAL PARTHIAN LETTER QOPH	
𐭓	r	r		r	r				consonant				U+10B53: INSCRIPTIONAL PARTHIAN LETTER RESH	
𐭎	s	s		s	s				consonant				U+10B4E: INSCRIPTIONAL PARTHIAN LETTER SAMEKH	
𐭑	S	s		sˤ	ṣ				consonant				U+10B51: INSCRIPTIONAL PARTHIAN LETTER SADHE	
𐭔	s	ʃ ʒ		ʃ	š				consonant				U+10B54: INSCRIPTIONAL PARTHIAN LETTER SHIN	
𐭕	t	t d		t	t				consonant				U+10B55: INSCRIPTIONAL PARTHIAN LETTER TAW	
𐭈	T	t		tˤ	ṭ				consonant				U+10B48: INSCRIPTIONAL PARTHIAN LETTER TETH	
𐭅	w	v r		w	w				consonant				U+10B45: INSCRIPTIONAL PARTHIAN LETTER WAW	
𐭉	y	j ĕː ĭː		y	y				consonant				U+10B49: INSCRIPTIONAL PARTHIAN LETTER YODH	
𐭆	z	z		z	z				consonant				U+10B46: INSCRIPTIONAL PARTHIAN LETTER ZAYIN	
														
𐭘				1	1				number				U+10B58: INSCRIPTIONAL PARTHIAN NUMBER ONE	
𐭙				2	2				number				U+10B59: INSCRIPTIONAL PARTHIAN NUMBER TWO	
𐭚				3	3				number				U+10B5A: INSCRIPTIONAL PARTHIAN NUMBER THREE	
𐭛				4	4				number				U+10B5B: INSCRIPTIONAL PARTHIAN NUMBER FOUR	
𐭜				1⁰	10				number				U+10B5C: INSCRIPTIONAL PARTHIAN NUMBER TEN	
𐭝				2⁰	20				number				U+10B5D: INSCRIPTIONAL PARTHIAN NUMBER TWENTY	
𐭞				C	100				number				U+10B5E: INSCRIPTIONAL PARTHIAN NUMBER ONE HUNDRED	
𐭟				M	1000				number				U+10B5F: INSCRIPTIONAL PARTHIAN NUMBER ONE THOUSAND	
														
`														
														
latinPanel = 'aː ĕː ɡ ḥ ĭː ʃ š ṭ ʒ ʔ ʾ'														
														
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
														