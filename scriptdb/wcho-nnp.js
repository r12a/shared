var spreadsheet = `nnp	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
\u0020		 		 	 		Zs		space				U+0020: SPACE	
,	,			,	,		Po		comma				U+002C: COMMA	
;	;			;	;		Po		semicolon				U+003B: SEMICOLON	
!	!			!	!		Po		exclamation mark				U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark				U+003F: QUESTION MARK	
:	:			:	:		Po		colon				U+003A: COLON	
.	.			.	.		Po		full stop				U+002E: FULL STOP	
…	.			…	…		Po	?	ellipsis				U+2026: HORIZONTAL ELLIPSIS	
“	<			“	“		Pi	?	quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			‘	‘		Pi	?	quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
”	>			”	”		Pf	?	quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
’	>			’	’		Pf	?	quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
(	(			(	(		Ps	?	parenthesis				U+0028: LEFT PARENTHESIS	
)	)			)	)		Ps	?	parenthesis				U+0029: RIGHT PARENTHESIS	
-	-			-	-		Pd	?	hyphen				U+2010: HYPHEN	
														
𞋀	a	aː		a	aa		Lo		vowel				U+1E2C0: WANCHO LETTER AA	
𞋖	a	aʊ		aʷ	au		Lo		diphthong				U+1E2D6: WANCHO LETTER AU	
𞋨	A	ã		ã	an		Lo		rhyme				U+1E2E8: WANCHO LETTER AAN	
𞋣	A	aŋ		aⁿ	aang		Lo		rhyme				U+1E2E3: WANCHO LETTER AANG	
𞋁	e	ə		ə	a		Lo		vowel				U+1E2C1: WANCHO LETTER A	
𞋤	E	əŋ		iⁿ	ing		Lo		rhyme				U+1E2E4: WANCHO LETTER ANG	
𞋛	e	e		e	e		Lo		vowel				U+1E2DB: WANCHO LETTER E	
𞋧	E	ẽ		ẽ	en		Lo		rhyme				U+1E2E7: WANCHO LETTER EN	
𞋜	i	i		i	i		Lo		vowel				U+1E2DC: WANCHO LETTER I	
𞋥	I	iŋ		iⁿ	ing		Lo		rhyme				U+1E2E5: WANCHO LETTER ING	
𞋕	o	o		o	o		Lo		vowel				U+1E2D5: WANCHO LETTER O	
𞋦	O	õ		õ	on		Lo		rhyme				U+1E2E6: WANCHO LETTER ON	
𞋢	O	oŋ		oⁿ	ong		Lo		rhyme				U+1E2E2: WANCHO LETTER ONG	
𞋞	u	u		u	u		Lo		vowel				U+1E2DE: WANCHO LETTER U	
𞋪	U	ũ		ũ	un		Lo		rhyme				U+1E2EA: WANCHO LETTER UEN	
														
𞋂	b	b	a	b	b		Lo		consonant				U+1E2C2: WANCHO LETTER BA	
𞋃	c	t͡ʃ	a	ʧ	c		Lo		consonant				U+1E2C3: WANCHO LETTER CA	
𞋄	d	d	a	d	d		Lo		consonant				U+1E2C4: WANCHO LETTER DA	
𞋍	f	f	a	f	f		Lo		consonant				U+1E2CD: WANCHO LETTER FA	
𞋅	g	ɡ	a	ɡ	g		Lo		consonant				U+1E2C5: WANCHO LETTER GA	
𞋚	h	h	a	h	h		Lo		consonant				U+1E2DA: WANCHO LETTER HA	
𞋐	j	d͡ʒ	a	ʤ	j		Lo		consonant				U+1E2D0: WANCHO LETTER JA	
𞋔	k	k	a	k	k		Lo		consonant				U+1E2D4: WANCHO LETTER KA	
𞋙	K	kʰ	a	kʰ	kh		Lo		consonant				U+1E2D9: WANCHO LETTER KHA	
𞋈	l	l	a	l	l		Lo		consonant				U+1E2C8: WANCHO LETTER LA	
𞋟	L	ɭ	a	ɭ	llha		Lo		consonant				U+1E2DF: WANCHO LETTER LLHA	
𞋘	m	m	a	m	m		Lo		consonant				U+1E2D8: WANCHO LETTER MA	
𞋉	n	n	a	n	n		Lo		consonant				U+1E2C9: WANCHO LETTER NA	
𞋝	N	ŋ	a	ŋ	ng		Lo		consonant				U+1E2DD: WANCHO LETTER NGA	
𞋩	N	ɲ	a	ɲ	ny		Lo		consonant				U+1E2E9: WANCHO LETTER NYA	
𞋊	p	p	a	p	p		Lo		consonant				U+1E2CA: WANCHO LETTER PA	
𞋇	P	pʰ	a	pʰ	ph		Lo		consonant				U+1E2C7: WANCHO LETTER PHA	
𞋗	r	r	a	r	r		Lo		consonant				U+1E2D7: WANCHO LETTER RA	
𞋎	s	s	a	s	s		Lo		consonant				U+1E2CE: WANCHO LETTER SA	
𞋏	S	ʃ	a	ʃ	sh		Lo		consonant				U+1E2CF: WANCHO LETTER SHA	
𞋋	t	t	a	t	t		Lo		consonant				U+1E2CB: WANCHO LETTER TA	
𞋌	T	tʰ	a	tʰ	th		Lo		consonant				U+1E2CC: WANCHO LETTER THA	
𞋠	T	t͡s	a	ʦ	ts		Lo		consonant				U+1E2E0: WANCHO LETTER TSA	
𞋡	T	tr̥	a	t̥	tr		Lo		consonant				U+1E2E1: WANCHO LETTER TRA	
𞋓	v	ʋ	a	ʋ	v		Lo		consonant				U+1E2D3: WANCHO LETTER VA	
𞋒	w	w	a	w	w		Lo		consonant				U+1E2D2: WANCHO LETTER WA	
𞋆	y	j	a	j	y		Lo		consonant				U+1E2C6: WANCHO LETTER YA	
𞋑	z	z	a	z	z		Lo		consonant				U+1E2D1: WANCHO LETTER ZA	
𞋫	}	ʔ		ʔ			Lo		consonant			yih	U+1E2EB: WANCHO LETTER YIH	
														
𞋬	^			¹			Mn​		falling tone mark			tup	U+1E2EC: WANCHO TONE TUP	
𞋭	^			²			Mn​		low tone mark			tupni	U+1E2ED: WANCHO TONE TUPNI	
𞋮	^			³			Mn​		mid tone mark			koi	U+1E2EE: WANCHO TONE KOI	
𞋯	^			⁴			Mn​		high tone mark			koini	U+1E2EF: WANCHO TONE KOINI	
														
𞋱	±	1		1̣	1		Nd		digit		𞋋𞋀◌𞋬	ta	U+1E2F1: WANCHO DIGIT ONE	
𞋲	±	2		2̣	2		Nd		digit		𞋀𞋉𞋜◌𞋯	aní	U+1E2F2: WANCHO DIGIT TWO	
𞋳	±	3		3̣	3		Nd		digit		𞋀𞋄𞋁𞋘	aadam	U+1E2F3: WANCHO DIGIT THREE	
𞋴	±	4		4̣	4		Nd		digit		𞋂𞋁𞋐𞋜◌𞋯	bazí	U+1E2F4: WANCHO DIGIT FOUR	
𞋵	±	5		5̣	5		Nd		digit		𞋀𞋩𞋀◌𞋯	anyá	U+1E2F5: WANCHO DIGIT FIVE	
𞋶	±	6		6̣	6		Nd		digit		𞋀𞋅𞋕𞋔	agok	U+1E2F6: WANCHO DIGIT SIX	
𞋷	±	7		7̣	7		Nd		digit		𞋀𞋉𞋁𞋋	aanat	U+1E2F7: WANCHO DIGIT SEVEN	
𞋸	±	8		8̣	8		Nd		digit		𞋀𞋎𞋁𞋋	aasat	U+1E2F8: WANCHO DIGIT EIGHT	
𞋹	±	9		9̣	9		Nd		digit		𞋔𞋞◌𞋬	aku	U+1E2F9: WANCHO DIGIT NINE	
𞋰	±	0		0̣	0		Nd		digit		𞋐𞋜𞋗𞋕	ziro	U+1E2F0: WANCHO DIGIT ZERO	
														
𞋿							Sc		rupee symbol				U+1E2FF: WANCHO NGUN SIGN	
`														
														
latinPanel = '̀ ́ ̂ ã õ ũ ẽ õ ŋ ɔ ə ɡ ɭ ɯ ɲ ʃ ʒ ʔ ʰ ̃ ̥ ͡ θ ʊ t͡ʃ d͡ʒ t͡s tr̥ pʰ tʰ kʰ'														
														
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
														
dvowel: 0,														
ivowel: 0,														
onset:0,														
final:0,														
subj:0,														
ltone:0,														
htone:0,														
lc:0,														
uc:0,														
meaning:0,														
shape: 0,														
numLoc: 0,														
														
nnameLoc: 11,														
nameLoc: 12,														
ucsName: 13,														
block: 14,														
														
//othertranscriptions: [[5, 'Latin']]														
}														