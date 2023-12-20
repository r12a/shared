var spreadsheet = `hano-hnn	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	shape	native name	latin name	ucs name	block
᜵	,			,	,		Po		comma					U+1735 PHILIPPINE SINGLE PUNCTUATION	✓
᜶	.			.	.		Po		period					U+1736 PHILIPPINE DOUBLE PUNCTUATION	✓
ᜠ	A	a		ạ	a		Lo		independent vowel					U+1720: HANUNOO LETTER A	✓
ᜪ	b	b	a	b	b		Lo		consonant		ᜪ ᜪᜲ ᜪᜳ			U+172A: HANUNOO LETTER BA	✓
ᜧ	d	d	a	d	d		Lo		consonant		ᜧ ᜧᜲ ᜧᜳ			U+1727: HANUNOO LETTER DA	✓
ᜤ	g	ɡ	a	g	g		Lo		consonant		ᜤ ᜤᜲ ᜤᜳ			U+1724: HANUNOO LETTER GA	✓
ᜱ	h	h	a	h	h		Lo		consonant		ᜱ ᜱᜲ ᜱᜳ			U+1731: HANUNOO LETTER HA	✓
ᜡ	I	i e		ị	i		Lo		independent vowel					U+1721: HANUNOO LETTER I	✓
ᜲ	i	i e		i	i		Mn		dependent vowel					U+1732: HANUNOO VOWEL SIGN I	✓
ᜣ	k	k	a	k	k		Lo		consonant		ᜣ ᜣᜲ ᜣᜳ			U+1723: HANUNOO LETTER KA	✓
ᜮ	l	l	a	l	l		Lo		consonant		ᜮ ᜮᜲ ᜮᜳ			U+172E: HANUNOO LETTER LA	✓
ᜫ	m	m	a	m	m		Lo		consonant		ᜫ ᜫᜲ ᜫᜳ			U+172B: HANUNOO LETTER MA	✓
ᜨ	n	n	a	n	n		Lo		consonant		ᜨ ᜨᜲ ᜨᜳ			U+1728: HANUNOO LETTER NA	✓
ᜥ	N	ŋ	a	ŋ	ng		Lo		consonant		ᜥ ᜥᜲ ᜥᜳ			U+1725: HANUNOO LETTER NGA	✓
ᜩ	p	p f	a	p	p		Lo		consonant		ᜩ ᜩᜲ ᜩᜳ			U+1729: HANUNOO LETTER PA	✓
ᜭ	r	r	a	r	r		Lo		consonant		ᜭ ᜭᜲ ᜭᜳ			U+172D: HANUNOO LETTER RA	✓
ᜰ	s	s	a	s	s		Lo		consonant		ᜰ ᜰᜲ ᜰᜳ			U+1730: HANUNOO LETTER SA	✓
ᜦ	t	t	a	t	t		Lo		consonant		ᜦ ᜦᜲ ᜦᜳ			U+1726: HANUNOO LETTER TA	✓
ᜢ	U	u o		ụ	u		Lo		independent vowel					U+1722: HANUNOO LETTER U	✓
ᜳ	u	u o		u	u		Mn		dependent vowel					U+1733: HANUNOO VOWEL SIGN U	✓
ᜯ	w	w	a	w	w		Lo		consonant		ᜯ ᜯᜲ ᜯᜳ			U+172F: HANUNOO LETTER WA	✓
ᜬ	y	y	a	y	y		Lo		consonant		ᜬ ᜬᜲ ᜬᜳ			U+172C: HANUNOO LETTER YA	✓
᜴	*			˟			Mc		vowel killer					U+1734: HANUNOO SIGN PAMUDPOD	✓
`															
															
latinPanel = 'á é ó ú í ʌ ʌ́ ˈ ɡ ɣ ŋ ʔ'															
															
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
															
shape: 11,															
															
nnameLoc: 12,															
nameLoc: 13,															
ucsName: 14,															
block: 15,															
															
othertranscriptions: [[5, 'Latin']]															
}															
															