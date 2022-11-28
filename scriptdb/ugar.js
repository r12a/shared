var spreadsheet = `ugar-arc	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𐎟	]			␣					word divider				U+1039F: UGARITIC WORD DIVIDER	
𐎓	{	ʕ		ʕ	ʿ				consonant				U+10393: UGARITIC LETTER AIN	
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
𐎀	a	ʔa		a	a				letter				U+10380: UGARITIC LETTER ALPA	
𐎁	b	b		b	b				consonant				U+10381: UGARITIC LETTER BETA	
𐎄	d	d		d	d				consonant				U+10384: UGARITIC LETTER DELTA	
𐎏	d	ð		ð	ḏ				consonant				U+1038F: UGARITIC LETTER DHAL	
𐎂	g	ɡ		g	g				consonant				U+10382: UGARITIC LETTER GAMLA	
𐎙	g	ɣ		ɣ	ġ				consonant				U+10399: UGARITIC LETTER GHAIN	
𐎃	h	x		x	ḫ				consonant				U+10383: UGARITIC LETTER KHA	
𐎈	H	ħ		ħ	ḥ				consonant				U+10388: UGARITIC LETTER HOTA	
𐎅	h	h		h	h				consonant				U+10385: UGARITIC LETTER HO	
𐎛	i	ʔi		i	ʾi				letter				U+1039B: UGARITIC LETTER I	
𐎋	k	k		k	k				consonant				U+1038B: UGARITIC LETTER KAF	
𐎍	l	l		l	l				consonant				U+1038D: UGARITIC LETTER LAMDA	
𐎎	m	m		m	m				consonant				U+1038E: UGARITIC LETTER MEM	
𐎐	n	n		n	n				consonant				U+10390: UGARITIC LETTER NUN	
𐎔	p	p		p	p				consonant				U+10394: UGARITIC LETTER PU	
𐎖	q	q		q	q				consonant				U+10396: UGARITIC LETTER QOPA	
𐎗	r	r		r	r				consonant				U+10397: UGARITIC LETTER RASHA	
𐎒	s	s		s	s				consonant				U+10392: UGARITIC LETTER SAMKA	
𐎝	s			ṡ	s2				consonant				U+1039D: UGARITIC LETTER SSU	
𐎕	S	sˠ		sˠ	ṣ				consonant				U+10395: UGARITIC LETTER SADE	
𐎌	s	ʃ		ʃ	š				consonant				U+1038C: UGARITIC LETTER SHIN	
𐎚	t	t		t	t				consonant				U+1039A: UGARITIC LETTER TO	
𐎉	T	tˠ		tˠ	ṭ				consonant				U+10389: UGARITIC LETTER TET	
𐎘	t	θ		θ	ṯ				consonant				U+10398: UGARITIC LETTER THANNA	
𐎜	u	ʔu		u	ʾu				letter				U+1039C: UGARITIC LETTER U	
𐎆	w	w		w	w				consonant				U+10386: UGARITIC LETTER WO	
𐎊	y	j		y	y				consonant				U+1038A: UGARITIC LETTER YOD	
𐎑	Z	θˠ		θˠ	ẓ				consonant				U+10391: UGARITIC LETTER ZU	
𐎇	z	z		z	z				consonant				U+10387: UGARITIC LETTER ZETA	
														
`														
														
latinPanel = 'ʿ ð ḏ ġ ḫ ħ ḥ θ θˠ sˠ ṣ ʃ š tˠ ṭ ṯ ɣ ẓ ʕ ʔ ʾi ʾu'														
														
														
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
														