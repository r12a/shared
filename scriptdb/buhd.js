var spreadsheet = `buhd-bku	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	shape	native name	latin name	ucs name	block
᜵	,			,	,		Po		comma					U+1735 PHILIPPINE SINGLE PUNCTUATION	buhid
᜶	.			.	.		Po		period					U+1736 PHILIPPINE DOUBLE PUNCTUATION	buhid
ᝀ	A	a ʌ		ạ	a		Lo		independent vowel					U+1740 BUHID LETTER A	buhid
ᝊ	b	b	a	b	b		Lo		consonant		ᝊ ᝊᝒ ᝊᝓ			U+174A BUHID LETTER BA	buhid
ᝇ	d	d	a	d	d		Lo		consonant		ᝇ ᝇᝒ ᝇᝓ			U+1747 BUHID LETTER DA	buhid
ᝄ	g	ɡ	a	g	g		Lo		consonant		ᝄ ᝄᝒ ᝄᝓ			U+1744 BUHID LETTER GA	buhid
ᝑ	h	h	a	h	h		Lo		consonant		ᝑ ᝑᝒ ᝑᝓ			U+1751 BUHID LETTER HA	buhid
ᝁ	I	i e		ị	i		Lo		independent vowel					U+1741 BUHID LETTER I	buhid
ᝒ	i	i e		i	i		Mn		dependent vowel					U+1752 BUHID VOWEL SIGN I	buhid
ᝃ	k	k	a	k	k		Lo		consonant		ᝃ ᝃᝒ ᝃᝓ			U+1743 BUHID LETTER KA	buhid
ᝎ	l	l	a	l	l		Lo		consonant		ᝎ ᝎᝒ ᝎᝓ			U+174E BUHID LETTER LA	buhid
ᝋ	m	m	a	m	m		Lo		consonant		ᝋ ᝋᝒ ᝋᝓ			U+174B BUHID LETTER MA	buhid
ᝈ	n	n	a	n	n		Lo		consonant		ᝈ ᝈᝒ ᝈᝓ			U+1748 BUHID LETTER NA	buhid
ᝅ	N	ŋ	a	ŋ	ng		Lo		consonant		ᝅ ᝅᝒ ᝅᝓ			U+1745 BUHID LETTER NGA	buhid
ᝉ	p	p f	a	p	p		Lo		consonant		ᝉ ᝉᝒ ᝉᝓ			U+1749 BUHID LETTER PA	buhid
ᝍ	r	r	a	r	r		Lo		consonant		ᝍ ᝍᝒ ᝍᝓ			U+174D BUHID LETTER RA	buhid
ᝐ	s	s	a	s	s		Lo		consonant		ᝐ ᝐᝒ ᝐᝓ			U+1750 BUHID LETTER SA	buhid
ᝆ	t	t	a	t	t		Lo		consonant		ᝆ ᝆᝒ ᝆᝓ			U+1746 BUHID LETTER TA	buhid
ᝂ	U	u o		ụ	u		Lo		independent vowel					U+1742 BUHID LETTER U	buhid
ᝓ	u	u o		u	u		Mn		dependent vowel					U+1753 BUHID VOWEL SIGN U	buhid
ᝏ	w	w	a	w	w		Lo		consonant		ᝏ ᝏᝒ ᝏᝓ			U+174F BUHID LETTER WA	buhid
ᝌ	y	y	a	y	y		Lo		consonant		ᝌ ᝌᝒ ᝌᝓ			U+174C BUHID LETTER YA	buhid
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
															