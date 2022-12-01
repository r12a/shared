var spreadsheet = `buhd-bku	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
᜵	,			,	,		Po		comma				U+1735 PHILIPPINE SINGLE PUNCTUATION	buhid
᜶	.			.	.		Po		period				U+1736 PHILIPPINE DOUBLE PUNCTUATION	buhid
ᝀ	A	a		ạ	a		Lo		independent vowel				U+1740 BUHID LETTER A	buhid
ᝊ	b	b		b	b		Lo		syllable				U+174A BUHID LETTER BA	buhid
ᝇ	d	d		d	d		Lo		syllable				U+1747 BUHID LETTER DA	buhid
ᝄ	g	g		g	g		Lo		syllable				U+1744 BUHID LETTER GA	buhid
ᝑ	h	h		h	h		Lo		syllable				U+1751 BUHID LETTER HA	buhid
ᝁ	I	i		ị	i		Lo		independent vowel				U+1741 BUHID LETTER I	buhid
\u1752	i	i		i	i		Mn		dependent vowel				U+1752 BUHID VOWEL SIGN I	buhid
ᝃ	k	k		k	k		Lo		syllable				U+1743 BUHID LETTER KA	buhid
ᝎ	l	l		l	l		Lo		syllable				U+174E BUHID LETTER LA	buhid
ᝋ	m	m		m	m		Lo		syllable				U+174B BUHID LETTER MA	buhid
ᝅ	N	ŋ		ŋ	ng		Lo		syllable				U+1745 BUHID LETTER NGA	buhid
ᝈ	n	n		n	n		Lo		syllable				U+1748 BUHID LETTER NA	buhid
ᝉ	p	p		p	p		Lo		syllable				U+1749 BUHID LETTER PA	buhid
ᝍ	r	r		r	r		Lo		syllable				U+174D BUHID LETTER RA	buhid
ᝐ	s	s		s	s		Lo		syllable				U+1750 BUHID LETTER SA	buhid
ᝆ	t	t		t	t		Lo		syllable				U+1746 BUHID LETTER TA	buhid
ᝂ	U	u		ụ	u		Lo		independent vowel				U+1742 BUHID LETTER U	buhid
\u1753	u	u		u	u		Mn		dependent vowel				U+1753 BUHID VOWEL SIGN U	buhid
ᝏ	w	w		w	w		Lo		syllable				U+174F BUHID LETTER WA	buhid
ᝌ	y	y		y	y		Lo		syllable				U+174C BUHID LETTER YA	buhid
														
`														
														
latinPanel = ''														
														
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
														