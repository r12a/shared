var spreadsheet = `nbat-arc	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𐢗	{	ʕ		ʕ	ʿ		Lo		consonant			e/ain	U+10897: NABATAEAN LETTER AYIN	
𐢧	±			1	1		No		number				U+108A7: NABATAEAN NUMBER ONE	
𐢨	±			2	2		No		number				U+108A8: NABATAEAN NUMBER TWO	
𐢩	±			3	3		No		number				U+108A9: NABATAEAN NUMBER THREE	
𐢪	±			4	4		No		number				U+108AA: NABATAEAN NUMBER FOUR	
𐢫	±			4̇	4		No		number				U+108AB: NABATAEAN CRUCIFORM NUMBER FOUR	
𐢬	±			5	5		No		number				U+108AC: NABATAEAN NUMBER FIVE	
𐢭	±			1⁰	10		No		number				U+108AD: NABATAEAN NUMBER TEN	
𐢮	±			2⁰	20		No		number				U+108AE: NABATAEAN NUMBER TWENTY	
𐢯	±			1₀	100		No		number				U+108AF: NABATAEAN NUMBER ONE HUNDRED	
\u200C	=			ₓ			Cf				zwnj		U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf				zwj		U+200D: ZERO WIDTH JOINER	
\u200E	=			ˡʳᵐ			Cf				lrm		U+200E: LEFT-TO-RIGHT MARK	
\u200F	=			ʳˡᵐ			Cf				rlm		U+200F: RIGHT-TO-LEFT MARK	
\u061C	=			ᵃˡᵐ			Cf				alm		U+061C: ARABIC LETTER MARK	
\u2067	=			ʳˡⁱ			Cf				rli		U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf				lri		U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B	=			ʳˡᵉ			Cf				rle		U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf				lre		U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069	=			ᵖᵈⁱ			Cf				pdi		U+2069: POP DIRECTIONAL ISOLATE	
\u202C	=			ᵖᵈᶠ			Cf				pdf		U+202C: POP DIRECTIONAL FORMATTING	
𐢁	a	ʔ		ʔ	ʾ		Lo		consonant			ʾālap̄/ʾalif	U+10881: NABATAEAN LETTER ALEPH	
𐢀	A	ʔ		ʔ̽	ʾ		Lo		consonant	final			U+10880: NABATAEAN LETTER FINAL ALEPH	
𐢃	b	b		b	b		Lo		consonant			beth/ba	U+10883: NABATAEAN LETTER BETH	
𐢂	B			b̽	b		Lo		consonant	final			U+10882: NABATAEAN LETTER FINAL BETH	
𐢅	d	d		d	d		Lo		consonant			daleth/dal	U+10885: NABATAEAN LETTER DALETH	
𐢄	g	ɡ		g	g		Lo		consonant			gamal/jin	U+10884: NABATAEAN LETTER GIMEL	
𐢊	H	ħ		ħ	ḥ		Lo		consonant			ha/heth	U+1088A: NABATAEAN LETTER HETH	
𐢇	h	h		h	h		Lo		consonant			heh	U+10887: NABATAEAN LETTER HE	
𐢆	H			h̽	h		Lo		consonant	final			U+10886: NABATAEAN LETTER FINAL HE	
𐢏	k	k		k	k		Lo		consonant			kaph	U+1088F: NABATAEAN LETTER KAPH	
𐢎	K	k		k̽	k		Lo		consonant	final			U+1088E: NABATAEAN LETTER FINAL KAPH	
𐢑	l	l		l	l		Lo		consonant			lamadh/lam	U+10891: NABATAEAN LETTER LAMEDH	
𐢐	L	l		l̽	l		Lo		consonant	final			U+10890: NABATAEAN LETTER FINAL LAMEDH	
𐢓	m	m		m	m		Lo		consonant			mim	U+10893: NABATAEAN LETTER MEM	
𐢒	M	m		m̽	m		Lo		consonant	final			U+10892: NABATAEAN LETTER FINAL MEM	
𐢕	n	n		n	n		Lo		consonant			nun	U+10895: NABATAEAN LETTER NUN	
𐢔	N	n		n̽	n		Lo		consonant	final			U+10894: NABATAEAN LETTER FINAL NUN	
𐢘	p	p		p	p		Lo		consonant			pe/fa	U+10898: NABATAEAN LETTER PE	
𐢚	q	q		q	q		Lo		consonant			qoph	U+1089A: NABATAEAN LETTER QOPH	
𐢛	r	r		r	r		Lo		consonant			resh/ra	U+1089B: NABATAEAN LETTER RESH	
𐢖	s	s		s	s		Lo		consonant			simkath	U+10896: NABATAEAN LETTER SAMEKH	
𐢙	S	sˤ		sˤ	ṣ		Lo		consonant			ṣāḏē/ṣad	U+10899: NABATAEAN LETTER SADHE	
𐢝	s	ʃ		ʃ	š		Lo		consonant			šin/sin	U+1089D: NABATAEAN LETTER SHIN	
𐢜	S	ʃ		ʃ̽	š		Lo		consonant	final			U+1089C: NABATAEAN LETTER FINAL SHIN	
𐢞	t	tˤ		t	t		Lo		consonant			taw/ta	U+1089E: NABATAEAN LETTER TAW	
𐢋	T	tˤ		tˤ	ṭ		Lo		consonant			teth	U+1088B: NABATAEAN LETTER TETH	
𐢈	w	w		w	w		Lo		consonant			waw	U+10888: NABATAEAN LETTER WAW	
𐢍	y	j		y	y		Lo		consonant			yodh/ya	U+1088D: NABATAEAN LETTER YODH	
𐢌	Y	j		y̽	y		Lo		consonant	final			U+1088C: NABATAEAN LETTER FINAL YODH	
𐢉	z	z		z	z		Lo		consonant			zain	U+10889: NABATAEAN LETTER ZAYIN	
														
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
														