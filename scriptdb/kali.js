var spreadsheet = `kali-kyu	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
-	-			-	-	-			hyphen				U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen				U+2011: NON-BREAKING HYPHEN	
–	-			–	–	_	Pd		en dash				U+2013: EN DASH	
—	-			—	—		Pd		em dash				U+2014: EM DASH	
,	,			,	,	.	Po		comma				U+002C: COMMA	✓
;	;			;	;		Po		semicolon				U+003B: SEMICOLON	✓
꤮	:	ː		ː		@	Po		extended intonation				U+A92E: KAYAH LI SIGN CWI	✓
:	:			:	:	$	Po		colon				U+003A: COLON	✓
!	!			!	!	!	Po		exclamation mark				U+0021: EXCLAMATION MARK	✓
?	?			?	?		Po		question mark				U+003F: QUESTION MARK	✓
.	.			.	.		Po		full stop				U+002E: FULL STOP	
…	.			…	…		Po		ellipsis				U+2026: HORIZONTAL ELLIPSIS	
⋯	.			⋯	⋯		Sm		midline ellipsis				U+22EF: MIDLINE HORIZONTAL ELLIPSIS	
(	(			(	(	(	Ps		parenthesis				U+0028: LEFT PARENTHESIS	✓
[	(			[	[		Ps		bracket				U+005B: LEFT SQUARE BRACKET	
)	)			)	)	)	Pe		parenthesis				U+0029: RIGHT PARENTHESIS	✓
]	)			]	]		Pe		bracket				U+005D: RIGHT SQUARE BRACKET	
%	%			%		%	Po		percentage mark				U+0025: PERCENT SIGN	✓
														
														
꤬	^	˨		¹	¹		Mn		low tone marker				U+A92C: KAYAH LI TONE CALYA	✓
꤭	^	˧		³	³		Mn		mid tone marker				U+A92D: KAYAH LI TONE CALYA PLOPHU	✓
꤫	^	˥		²	²		Mn		high tone marker				U+A92B: KAYAH LI TONE PLOPHU	✓
꤁	±			1̣	1	1	Nd		digit				U+A901: KAYAH LI DIGIT ONE	✓
꤂	±			2̣	2	2	Nd		digit				U+A902: KAYAH LI DIGIT TWO	✓
꤃	±			3̣	3	3	Nd		digit				U+A903: KAYAH LI DIGIT THREE	✓
꤄	±			4̣	4	4	Nd		digit				U+A904: KAYAH LI DIGIT FOUR	✓
꤅	±			5̣	5	5	Nd		digit				U+A905: KAYAH LI DIGIT FIVE	✓
꤆	±			6̣	6	6	Nd		digit				U+A906: KAYAH LI DIGIT SIX	✓
꤇	±			7̣	7	7	Nd		digit				U+A907: KAYAH LI DIGIT SEVEN	✓
꤈	±			8̣	8	8	Nd		digit				U+A908: KAYAH LI DIGIT EIGHT	✓
꤉	±			9̣	9	9	Nd		digit				U+A909: KAYAH LI DIGIT NINE	✓
꤀	±			0̣	0	0	Nd		digit				U+A900: KAYAH LI DIGIT ZERO	✓
“	<			“	“	^	Pi		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	✓
\‘	<			\‘	\‘		Pi		quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
\u200C	=			ₓ			Cf		zwnj				U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf		zwj				U+200D: ZERO WIDTH JOINER	
\u034F	=			ᶜᵍʲ			Mn		combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER	
”	>			”	”	&	Pf		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	✓
\’	>			\’	\’		Pf		quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
꤯	|			|	.	/	Po		phrase/sentence delimiter				U+A92F: KAYAH LI SIGN SHYA	✓
ꤢ	a	a		+	a	f	Lo		vowel				U+A922: KAYAH LI LETTER A	✓
ꤙ	b	b		b	b	e	Lo		stop				U+A919: KAYAH LI LETTER BA	✓
ꤘ	d	d		d	d	[	Lo		stop				U+A918: KAYAH LI LETTER DA	✓
ꤡ	d	d͡ʒ		ʤ	c	z	Lo		affricate				U+A921: KAYAH LI LETTER CA	✓
ꤣ	e	ə		ə	ơ	t	Lo		vowel				U+A923: KAYAH LI LETTER OE	✓
ꤩ	e	e		e	ê	g	Mn		vowel-sign				U+A929: KAYAH LI VOWEL EE	✓
ꤧ	e	ɛ		ɛ	e		Mn		vowel-sign				U+A927: KAYAH LI VOWEL E	✓
ꤌ	g	ɡ		ɡ	g	x	Lo	l	stop	used for loan words			U+A90C: KAYAH LI LETTER GA	✓
ꤟ	h	h		h	h	k	Lo		fricative				U+A91F: KAYAH LI LETTER HA	✓
ꤤ	i	i		i	i	y	Lo		vowel				U+A924: KAYAH LI LETTER I	✓
ꤛ	j	j		j	j	d	Lo		approximant				U+A91B: KAYAH LI LETTER YA	✓
ꤊ	k	k		k	k	a	Lo		stop				U+A90A: KAYAH LI LETTER KA	✓
ꤋ	K	Kʰ		kʰ	kh	v	Lo		stop				U+A90B: KAYAH LI LETTER KHA	✓
ꤜ	l	l		l	l	;	Lo		lateral				U+A91C: KAYAH LI LETTER LA	✓
ꤗ	m	m		m	m	b	Lo		nasal				U+A917: KAYAH LI LETTER MA	✓
ꤔ	n	n		n	n	s	Lo		nasal				U+A914: KAYAH LI LETTER NA	✓
ꤑ	n	ɲ		ɲ	ny	p	Lo		nasal				U+A911: KAYAH LI LETTER NYA	✓
ꤍ	N	ŋ		ŋ	ng		Lo		nasal				U+A90D: KAYAH LI LETTER NGA	✓
ꤥ	o	o		o	ô	u	Lo		vowel				U+A925: KAYAH LI LETTER OO	✓
ꤪ	o	ɔ		ɔ	o	h	Mn		vowel-sign				U+A92A: KAYAH LI VOWEL O	✓
ꤕ	p	p		p	p	l	Lo		stop				U+A915: KAYAH LI LETTER PA	✓
ꤖ	P	Pʰ		pʰ	ph	n	Lo		aspirated stop				U+A916: KAYAH LI LETTER PHA	✓
ꤞ	q	ʂ θ		ʂ	th	i	Lo		fricative				U+A91E: KAYAH LI LETTER THA	✓
ꤚ	r	r		r	r	r	Lo		trill				U+A91A: KAYAH LI LETTER RA	✓
ꤏ	S	Sʰ		sʰ	sh	c	Lo		aspirated fricative				U+A90F: KAYAH LI LETTER SHA	✓
ꤎ	s	s		s	s	w	Lo	l	fricative	used for loan words			U+A90E: KAYAH LI LETTER SA	✓
ꤒ	t	t		t	t	j	Lo		stop				U+A912: KAYAH LI LETTER TA	✓
ꤓ	T	Tʰ		tʰ	ht	o	Lo		aspirated stop				U+A913: KAYAH LI LETTER HTA	✓
ꤦ	U	ɯ		ɯ	ư		Mn		vowel-sign				U+A926: KAYAH LI VOWEL UE	✓
ꤨ	u	u		u	u		Mn		vowel-sign				U+A928: KAYAH LI VOWEL U	✓
ꤠ	v	v		v	v	q	Lo		fricative				U+A920: KAYAH LI LETTER VA	✓
ꤝ	w	w		w	w	m	Lo		approximant				U+A91D: KAYAH LI LETTER WA	✓
ꤐ	z	z		z	zh	,	Lo		fricative				U+A910: KAYAH LI LETTER ZA	✓
														
														
ꤢꤦ		ɯ		aɯ	ư	F			vowel				U+A922 U+A926: KAYAH LI LETTER A, VOWEL UE	
ꤢꤨ		u		au	u	H			vowel				U+A922 U+A928: KAYAH LI LETTER A, VOWEL U	
ꤢꤩ		e		ae	ê	J			vowel				U+A922 U+A929: KAYAH LI LETTER A, VOWEL EE	
ꤢꤧ		Ɛ		aɛ	e	G			vowel				U+A922 U+A927: KAYAH LI LETTER A, VOWEL E	
ꤢꤪ		ɔ		aɔ	o	K			vowel				U+A922 U+A92A: KAYAH LI LETTER A, VOWEL O	
														
ꤛꤣ		ɯə		jə	ươ				non-breathy diphthong				U+A91B U+A923: KAYAH LI LETTER YA, LETTER OE	
ꤟꤌꤣ		ɯ̤ə		hgə	ươ				breathy diphthong				U+A91F U+A90C U+A923: KAYAH LI LETTER HA, LETTER GA, LETTER OE	
														
ꤣꤦ		əɯ			ơư			l	non-native vowel	loanwords			U+A923 U+A926: KAYAH LI LETTER OE, VOWEL UE	
ꤣꤧ		ɯɛ			ưe			l	non-native vowel	loanwords			U+A923 U+A927: KAYAH LI LETTER OE, VOWEL E	
ꤣꤨ		əu			ơu			l	non-native vowel	loanwords			U+A923 U+A928: KAYAH LI LETTER OE, VOWEL U	
ꤣꤩ		əe			ơê			l	non-native vowel	loanwords			U+A923 U+A929: KAYAH LI LETTER OE, VOWEL EE	
ꤣꤪ		əɔ			ơo			l	non-native vowel	loanwords			U+A923 U+A92A: KAYAH LI LETTER OE, VOWEL O	
														
ʼ				ʼ	ʼ		Lm		apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po		section sign				U+00A7: SECTION SIGN	
†				†	†		Po		dagger				U+2020: DAGGER	
‡				‡	‡		Po		double dagger				U+2021: DOUBLE DAGGER	
′				′	′		Po		prime				U+2032: PRIME	
″				″	″		Po		double prime				U+2033: DOUBLE PRIME	
														
`														
														
														
latinPanel = '˨ ¹ ˧ ³ ˦ ² ˥ d͡ʒ ê ɛ ə ɡ ̤ kʰ ɲ ŋ ô ɔ ơ pʰ θ ʂ sʰ tʰ ư ɯ'													
														
														
														
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
														