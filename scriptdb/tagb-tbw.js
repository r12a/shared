var spreadsheet = `tagb-tbw	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	shape	native name	latin name	ucs name	block
᜵	,			,	,		Po		comma					U+1735 PHILIPPINE SINGLE PUNCTUATION	buhid
᜶	.			.	.		Po		period					U+1736 PHILIPPINE DOUBLE PUNCTUATION	buhid
ᝠ	A	a		ạ	a		Lo		independent vowel					U+1760: TAGBANWA LETTER A	buhid
ᝪ	b	b	a	b	b		Lo		consonant		ᝪ ᝪᝲ ᝪᝳ			U+176A: TAGBANWA LETTER BA	buhid
ᝧ	d	d r	a	d	d		Lo		consonant		ᝧ ᝧᝲ ᝧᝳ			U+1767: TAGBANWA LETTER DA	buhid
ᝤ	g	ɡ	a	g	g		Lo		consonant		ᝤ ᝤᝲ ᝤᝳ			U+1764: TAGBANWA LETTER GA	buhid
ᝡ	I	i ɨ		ị	i		Lo		independent vowel					U+1761: TAGBANWA LETTER I	buhid
ᝲ	i	i ɨ		i	i		Mn​		dependent vowel					U+1772: TAGBANWA VOWEL SIGN I	buhid
ᝣ	k	k	a	k	k		Lo		consonant		ᝣ ᝣᝲ ᝣᝳ			U+1763: TAGBANWA LETTER KA	buhid
ᝮ	l	l	a	l	l		Lo		consonant		ᝮ ᝮᝲ ᝮᝳ			U+176E: TAGBANWA LETTER LA	buhid
ᝫ	m	m	a	m	m		Lo		consonant		ᝫ ᝫᝲ ᝫᝳ			U+176B: TAGBANWA LETTER MA	buhid
ᝨ	n	n	a	n	n		Lo		consonant		ᝨ ᝨᝲ ᝨᝳ			U+1768: TAGBANWA LETTER NA	buhid
ᝥ	N	ŋ	a	ŋ	ng		Lo		consonant		ᝥ ᝥᝲ ᝥᝳ			U+1765: TAGBANWA LETTER NGA	buhid
ᝩ	p	p	a	p	p		Lo		consonant		ᝩ ᝩᝲ ᝩᝳ			U+1769: TAGBANWA LETTER PA	buhid
ᝰ	s	s	a	s	s		Lo		consonant		ᝰ ᝰᝲ ᝰᝳ			U+1770: TAGBANWA LETTER SA	buhid
ᝦ	t	t	a	t	t		Lo		consonant		ᝦ ᝦᝲ ᝦᝳ			U+1766: TAGBANWA LETTER TA	buhid
ᝢ	U	u		ụ	u		Lo		independent vowel					U+1762: TAGBANWA LETTER U	buhid
ᝳ	u	u		u	u		Mn​		dependent vowel					U+1773: TAGBANWA VOWEL SIGN U	buhid
ᝯ	w	w	a	w	w		Lo		consonant		ᝯ ᝯᝲ ᝯᝳ			U+176F: TAGBANWA LETTER WA	buhid
ᝬ	y	y	a	y	y		Lo		consonant		ᝬ ᝬᝲ ᝬᝳ			U+176C: TAGBANWA LETTER YA	buhid
`															
															
latinPanel = 'á é ó ú ɨ í ʌ ʌ́ ˈ ɡ ɣ ŋ ʔ'															
															
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
															