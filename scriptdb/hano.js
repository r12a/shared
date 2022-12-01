var spreadsheet = `hano-hnn	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
᜵	,			,	,		Po		comma				U+1735 PHILIPPINE SINGLE PUNCTUATION	
᜶	.			.	.		Po		period				U+1736 PHILIPPINE DOUBLE PUNCTUATION	
\u1734	*			͓			Mc​		vowel killer				U+1734 HANUNOO SIGN PAMUDPOD	
ᜠ	A	a		ạ	a		Lo		independent vowel				U+1720 HANUNOO LETTER A	
ᜪ	b	b		b	b		Lo		syllable				‎U+172A HANUNOO LETTER BA	
ᜧ	d	d		d	d		Lo		syllable				‎U+1727 HANUNOO LETTER DA	
ᜤ	g	g		g	g		Lo		syllable				‎U+1724 HANUNOO LETTER GA	
ᜱ	h	h		h	h		Lo		syllable				‎U+1731 HANUNOO LETTER HA	
ᜡ	I	i		ị	i		Lo		independent vowel				‎U+1721 HANUNOO LETTER I	
\u1732	i	i		i	i		Mn​		dependent vowel				U+1732 HANUNOO VOWEL SIGN I	
ᜣ	k	k		k	k		Lo		syllable				‎U+1723 HANUNOO LETTER KA	
ᜮ	l	l		l	l		Lo		syllable				‎U+172E HANUNOO LETTER LA	
ᜫ	m	m		m	m		Lo		syllable				‎U+172B HANUNOO LETTER MA	
ᜥ	N	ŋ		ŋ	ng		Lo		syllable				‎U+1725 HANUNOO LETTER NGA	
ᜨ	n	n		n	n		Lo		syllable				‎U+1728 HANUNOO LETTER NA	
ᜩ	p	p		p	p		Lo		syllable				‎U+1729 HANUNOO LETTER PA	
ᜭ	r	r		r	r		Lo		syllable				‎U+172D HANUNOO LETTER RA	
ᜰ	s	s		s	s		Lo		syllable				‎U+1730 HANUNOO LETTER SA	
ᜦ	t	t		t	t		Lo		syllable				‎U+1726 HANUNOO LETTER TA	
ᜢ	U	u		ụ	u		Lo		independent vowel				‎U+1722 HANUNOO LETTER U	
\u1733	u	u		u	u		Mn​		dependent vowel				U+1733 HANUNOO VOWEL SIGN U	
ᜯ	w	w		w	w		Lo		syllable				‎U+172F HANUNOO LETTER WA	
ᜬ	y	y		y	y		Lo		syllable				‎U+172C HANUNOO LETTER YA	
														
`														
														
latinPanel = 'ŋ'														
														
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
														