var spreadsheet = `tagb-tbw	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
᜵	,			,	,				comma				U+1735 PHILIPPINE SINGLE PUNCTUATION	
᜶	.			.	.				period				U+1736 PHILIPPINE DOUBLE PUNCTUATION	
														
ᝠ	A	a		ạ	a				independent vowel				U+1760 TAGBANWA LETTER A	
ᝪ	b	ba		b	b				syllable				‎U+176A TAGBANWA LETTER BA	
ᝧ	d	da		d	d				syllable				‎U+1767 TAGBANWA LETTER DA	
ᝤ	g	ga		g	g				syllable				‎U+1764 TAGBANWA LETTER GA	
ᝡ	I	i		ị	i				independent vowel				‎U+1761 TAGBANWA LETTER I	
\u1772	i	i		i	i				dependent vowel				‎U+1772 TAGBANWA VOWEL SIGN I	
ᝣ	k	ka		k	k				syllable				U+1763 TAGBANWA LETTER KA	
ᝮ	l	la		l	l				syllable				‎U+176E TAGBANWA LETTER LA	
ᝫ	m	ma		m	m				syllable				‎U+176B TAGBANWA LETTER MA	
ᝥ	N	ŋa		ŋ	ng				syllable				‎U+1765 TAGBANWA LETTER NGA	
ᝨ	n	na		n	n				syllable				‎U+1768 TAGBANWA LETTER NA	
ᝩ	p	pa		p	p				syllable				‎U+1769 TAGBANWA LETTER PA	
ᝰ	s	sa		s	s				syllable				‎U+1770 TAGBANWA LETTER SA	
ᝦ	t	ta		t	t				syllable				‎U+1766 TAGBANWA LETTER TA	
ᝢ	U	u		ụ	u				independent vowel				‎U+1762 TAGBANWA LETTER U	
\u1773	u	u		u	u				dependent vowel				‎U+1773 TAGBANWA VOWEL SIGN U	
ᝯ	w	wa		w	w				syllable				‎U+176F TAGBANWA LETTER WA	
ᝬ	y	ya		y	y				syllable				‎U+176C TAGBANWA LETTER YA	
														
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
														