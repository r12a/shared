var spreadsheet = `palm-arc	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𐡰	{	ʕ		ʕ	ʿ				consonant				U+10870: PALMYRENE LETTER AYIN	
𐡷	<			«					symbol				U+10877: PALMYRENE LEFT-POINTING FLEURON	
\u200C	=			ₓ								zwnj	U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊								zwj	U+200D: ZERO WIDTH JOINER	
\u200E	=			ˡʳᵐ								lrm	U+200E: LEFT-TO-RIGHT MARK	
\u200F	=			ʳˡᵐ								rlm	U+200F: RIGHT-TO-LEFT MARK	
\u061C	=			ᵃˡᵐ								alm	U+061C: ARABIC LETTER MARK	
\u2067	=			ʳˡⁱ								rli	U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ								lri	U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B	=			ʳˡᵉ								rle	U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ								lre	U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069	=			ᵖᵈⁱ								pdi	U+2069: POP DIRECTIONAL ISOLATE	
\u202C	=			ᵖᵈᶠ								pdf	U+202C: POP DIRECTIONAL FORMATTING	
𐡸	>			»					symbol				U+10878: PALMYRENE RIGHT-POINTING FLEURON	
𐡠	a	ʔ		ʔ	ʾ				consonant				U+10860: PALMYRENE LETTER ALEPH	
𐡡	b	b		b	b				consonant				U+10861: PALMYRENE LETTER BETH	
𐡣	d	d		d	d				consonant				U+10863: PALMYRENE LETTER DALETH	
𐡢	g	ɡ		g	g				consonant				U+10862: PALMYRENE LETTER GIMEL	
𐡧	H	ħ		ħ	ḥ				consonant				U+10867: PALMYRENE LETTER HETH	
𐡤	h	h		h	h				consonant				U+10864: PALMYRENE LETTER HE	
𐡪	k	k		k	k				consonant				U+1086A: PALMYRENE LETTER KAPH	
𐡫	l	l		l	l				consonant				U+1086B: PALMYRENE LETTER LAMEDH	
𐡬	m	m		m	m				consonant				U+1086C: PALMYRENE LETTER MEM	
𐡮	n	n		n	n				consonant				U+1086E: PALMYRENE LETTER NUN	
𐡭	N	n		n̽	n				consonant	final			U+1086D: PALMYRENE LETTER FINAL NUN	
𐡱	p	p		p	p				consonant				U+10871: PALMYRENE LETTER PE	
𐡳	q	q		q	q				consonant				U+10873: PALMYRENE LETTER QOPH	
𐡴	r	r		r	r				consonant				U+10874: PALMYRENE LETTER RESH	
𐡯	s	s		s	s				consonant				U+1086F: PALMYRENE LETTER SAMEKH	
𐡲	S	sˤ		sˤ	ṣ				consonant				U+10872: PALMYRENE LETTER SADHE	
𐡵	s	ʃ		ʃ	š				consonant				U+10875: PALMYRENE LETTER SHIN	
𐡶	t	tˤ		t	t				consonant				U+10876: PALMYRENE LETTER TAW	
𐡨	T	tˤ		tˤ	ṭ				consonant				U+10868: PALMYRENE LETTER TETH	
𐡥	w	w		w	w				consonant				U+10865: PALMYRENE LETTER WAW	
𐡩	y	j		y	y				consonant				U+10869: PALMYRENE LETTER YODH	
𐡦	z	z		z	z				consonant				U+10866: PALMYRENE LETTER ZAYIN	
														
𐡹				1	1				number				U+10879: PALMYRENE NUMBER ONE	
𐡺				2	2				number				U+1087A: PALMYRENE NUMBER TWO	
𐡻				3	3				number				U+1087B: PALMYRENE NUMBER THREE	
𐡼				4	4				number				U+1087C: PALMYRENE NUMBER FOUR	
𐡽				5	5				number				U+1087D: PALMYRENE NUMBER FIVE	
𐡾				1⁰	10				number				U+1087E: PALMYRENE NUMBER TEN	
𐡿				2⁰	20				number				U+1087F: PALMYRENE NUMBER TWENTY	
														
`														
														
latinPanel = 'ɡ ħ ḥ sˤ ṣ ʃ š tˤ ṭ ʔ ʾ'														
														
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
														