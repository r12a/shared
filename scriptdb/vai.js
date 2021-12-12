var spreadsheet = `
-	Pd	-	-	-	-			hyphen				U+2010: HYPHEN	
‑	Pd	‑	‑	‑	-			non-breaking hyphen				U+2011: NON-BREAKING HYPHEN	
–	Pd	–	–	–	-			en dash				U+2013: EN DASH	
—	Pd	—	—	—	-			em dash				U+2014: EM DASH	
,	Po		,	,	,			comma				U+002C: COMMA	
꘍	Po		⹁	,	,			comma				U+A60D: VAI COMMA	✓
;	Po		;	;	;			semicolon				U+003B: SEMICOLON	
ꘌ	Lm	ː	ː		:			vowel lengthener				U+A60C: VAI SYLLABLE LENGTHENER	✓
:	Po		:	:	:			colon				U+003A: COLON	
!	Po		!	!	!			exclamation mark				U+0021: EXCLAMATION MARK	
꘎꘎			¡	!	!			exclamation mark				U+A60E U+A60E: VAI FULL STOP, VAI FULL STOP	
?	Po		?	?	?			question mark				U+003F: QUESTION MARK	
꘏	Po		¿	?	?			question mark				U+A60F: VAI QUESTION MARK	✓
ʼ	Lm	ʼ	ʼ	ʼ	'			apostrophe				U+02BC: MODIFIER LETTER APOSTROPHE	
.	Po		.	.	.			full stop				U+002E: FULL STOP	
꘎	Po		.	.	.			full stop				U+A60E: VAI FULL STOP	✓
…	Po		…	…	.			ellipsis				U+2026: HORIZONTAL ELLIPSIS	
(	Ps	(	(	(	(			parenthesis				U+0028: LEFT PARENTHESIS	
[	Pe	(	[	[	(			bracket				U+005B: LEFT SQUARE BRACKET	
)	Ps	)	)	)	)			parenthesis				U+0029: RIGHT PARENTHESIS	
]	Pe	)	]	]	)			bracket				U+005D: RIGHT SQUARE BRACKET	
%	Po		%		%			percentage mark				U+0025: PERCENT SIGN	
‰	Po		‰		%			per mille mark				U+2030: PER MILLE SIGN	
꘠	Nd	0	0̣	0	±		u	digit	unused			U+A620: VAI DIGIT ZERO	✓
꘡	Nd	1	1̣	1	±		u	digit	unused			U+A621: VAI DIGIT ONE	✓
꘢	Nd	2	2̣	2	±		u	digit	unused			U+A622: VAI DIGIT TWO	✓
꘣	Nd	3	3̣	3	±		u	digit	unused			U+A623: VAI DIGIT THREE	✓
꘤	Nd	4	4̣	4	±		u	digit	unused			U+A624: VAI DIGIT FOUR	✓
꘥	Nd	5	5̣	5	±		u	digit	unused			U+A625: VAI DIGIT FIVE	✓
꘦	Nd	6	6̣	6	±		u	digit	unused			U+A626: VAI DIGIT SIX	✓
꘧	Nd	7	7̣	7	±		u	digit	unused			U+A627: VAI DIGIT SEVEN	✓
꘨	Nd	8	8̣	8	±		u	digit	unused			U+A628: VAI DIGIT EIGHT	✓
꘩	Nd	9	9̣	9	±		u	digit	unused			U+A629: VAI DIGIT NINE	✓
«	Pi		«	“	<			quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	Pi		‹	‘	<			quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
“	Pi		 “	“	<			quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
‘	Pi		‘	‘	<			quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
\u200B	Cf		␣		=			zero-width space				U+200B: ZERO WIDTH SPACE	
\u200C	Cf		ᶻʷⁿʲ		=			zero-width non-joiner				U+200C: ZERO WIDTH NON-JOINER	
\u200D	Cf		ᶻʷʲ		=			zero-width joiner				U+200D: ZERO WIDTH JOINER	
\u034F	Mn		ᶜᵍʲ		=			combining grapheme joiner				U+034F: COMBINING GRAPHEME JOINER​	
\u2060	Cf		ʷʲ		=			word joiner				U+2060 WORD JOINER	
»	Pf		»	”	>			quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
›	Pf		›	’	>			quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
”	Pf		”	”	>			quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
’	Pf		’	’	>			quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
													
ꕉ	Lo	a	a	a	a			syllable				U+A549: VAI SYLLABLE A	✓
ꕊ	Lo	ã	a	an	a			syllable				U+A54A: VAI SYLLABLE AN	✓
ꕑ	Lo	ba	ba	ba	b			syllable				U+A551: VAI SYLLABLE BHA	✓
ꔆ	Lo	be	be	be	b			syllable				U+A506: VAI SYLLABLE BHEE	✓
ꗩ	Lo	bɛ	bɛ	bɛ	b			syllable				U+A5E9: VAI SYLLABLE BHE	✓
ꔫ	Lo	bi	bi	bi	b			syllable				U+A52B: VAI SYLLABLE BHI	✓
ꕷ	Lo	bo	bo	bo	b			syllable				U+A577: VAI SYLLABLE BHOO	✓
ꗂ	Lo	bɔ	bɔ	bɔ	b			syllable				U+A5C2: VAI SYLLABLE BHO	✓
ꖜ	Lo	bu	bu	bu	b			syllable				U+A59C: VAI SYLLABLE BHU	✓
ꕒ	Lo	ɓa	ɓa	ɓa	B			syllable				U+A552: VAI SYLLABLE BA	✓
ꔇ	Lo	ɓe	ɓe	ɓe	B			syllable				U+A507: VAI SYLLABLE BEE	✓
ꗪ	Lo	ɓɛ	ɓɛ	ɓɛ	B			syllable				U+A5EA: VAI SYLLABLE BE	✓
ꔬ	Lo	ɓi	ɓi	ɓi	B			syllable				U+A52C: VAI SYLLABLE BI	✓
ꕸ	Lo	ɓo	ɓo	ɓo	B			syllable				U+A578: VAI SYLLABLE BOO	✓
ꗃ	Lo	ɓɔ	ɓɔ	ɓɔ	B			syllable				U+A5C3: VAI SYLLABLE BO	✓
ꖝ	Lo	ɓu	ɓu	ɓu	B			syllable				U+A59D: VAI SYLLABLE BU	✓
ꕦ	Lo	t͡ʃa	ʧa	ca	c			syllable				U+A566: VAI SYLLABLE CA	✓
ꔚ	Lo	t͡ʃe	ʧe	ce	c			syllable				U+A51A: VAI SYLLABLE CEE	✓
ꗿ	Lo	t͡ʃɛ	ʧɛ	cɛ	c			syllable				U+A5FF: VAI SYLLABLE CE	✓
ꔿ	Lo	t͡ʃi	ʧi	ci	c			syllable				U+A53F: VAI SYLLABLE CI	✓
ꖋ	Lo	t͡ʃo	ʧo	co	c			syllable				U+A58B: VAI SYLLABLE COO	✓
ꗗ	Lo	t͡ʃɔ	ʧɔ	cɔ	c			syllable				U+A5D7: VAI SYLLABLE CO	✓
ꖰ	Lo	t͡ʃu	ʧu	cu	c			syllable				U+A5B0: VAI SYLLABLE CU	✓
ꕜ	Lo	da	da	da	d			syllable				U+A55C: VAI SYLLABLE DHA	✓
ꔐ	Lo	de	de	de	d			syllable				U+A510: VAI SYLLABLE DHEE	✓
ꗵ	Lo	dɛ	dɛ	dɛ	d			syllable				U+A5F5: VAI SYLLABLE DHE	✓
ꔵ	Lo	di	di	di	d			syllable				U+A535: VAI SYLLABLE DHI	✓
ꖁ	Lo	do	do	do	d			syllable				U+A581: VAI SYLLABLE DHOO	✓
ꗍ	Lo	dɔ	dɔ	dɔ	d			syllable				U+A5CD: VAI SYLLABLE DHO	✓
ꖦ	Lo	du	du	du	d			syllable				U+A5A6: VAI SYLLABLE DHU	✓
ꕠ	Lo	ɗa	ɗa	ɗa	D			syllable				U+A560: VAI SYLLABLE DA	✓
ꔔ	Lo	ɗe	ɗe	ɗe	D			syllable/logogram				U+A514: VAI SYLLABLE DEE	✓
ꗹ	Lo	ɗɛ	ɗɛ	ɗɛ	D			syllable				U+A5F9: VAI SYLLABLE DE	✓
ꔹ	Lo	ɗi	ɗi	ɗi	D			syllable				U+A539: VAI SYLLABLE DI	✓
ꖅ	Lo	ɗo	ɗo	ɗo	D			syllable				U+A585: VAI SYLLABLE DOO	✓
ꗑ	Lo	ɗɔ	ɗɔ	ɗɔ	D			syllable/logogram				U+A5D1: VAI SYLLABLE DO	✓
ꖪ	Lo	ɗu	ɗu	ɗu	D			syllable				U+A5AA: VAI SYLLABLE DU	✓
ꔀ	Lo	e	e	e	e			syllable				U+A500: VAI SYLLABLE EE	✓
ꔁ	Lo	ẽ	ẽ	en	e		i	syllable	for foriegn sounds			U+A501: VAI SYLLABLE EEN	✓
ꗡ	Lo	ɛ	ɛ	ɛ	E			syllable				U+A5E1: VAI SYLLABLE E	✓
ꗢ	Lo	ɛ̃	ɛ̃	ɛn	E			syllable				U+A5E2: VAI SYLLABLE EN	✓
ꕘ	Lo	fa	fa	fa	f			syllable				U+A558: VAI SYLLABLE FA	✓
ꔌ	Lo	fe	fe	fe	f			syllable				U+A50C: VAI SYLLABLE FEE	✓
ꗱ	Lo	fɛ	fɛ	fɛ	f			syllable				U+A5F1: VAI SYLLABLE FE	✓
ꔱ	Lo	fi	fi	fi	f			syllable				U+A531: VAI SYLLABLE FI	✓
ꕽ	Lo	fo	fo	fo	f			syllable				U+A57D: VAI SYLLABLE FOO	✓
ꗉ	Lo	fɔ	fɔ	fɔ	f			syllable				U+A5C9: VAI SYLLABLE FO	✓
ꖢ	Lo	fu	fu	fu	f			syllable				U+A5A2: VAI SYLLABLE FU	✓
ꕡ	Lo	ⁿɗa	ⁿɗa	nɗa	F			syllable				U+A561: VAI SYLLABLE NDA	✓
ꔕ	Lo	ⁿɗe	ⁿɗe	nɗe	F			syllable				U+A515: VAI SYLLABLE NDEE	✓
ꗺ	Lo	ⁿɗɛ	ⁿɗɛ	nɗɛ	F			syllable				U+A5FA: VAI SYLLABLE NDE	✓
ꔺ	Lo	ⁿɗi	ⁿɗi	nɗi	F			syllable				U+A53A: VAI SYLLABLE NDI	✓
ꖆ	Lo	ⁿɗo	ⁿɗo	nɗo	F			syllable				U+A586: VAI SYLLABLE NDOO	✓
ꗒ	Lo	ⁿɗɔ	ⁿɗɔ	nɗɔ	F			syllable				U+A5D2: VAI SYLLABLE NDO	✓
ꖫ	Lo	ⁿɗu	ⁿɗu	nɗu	F			syllable				U+A5AB: VAI SYLLABLE NDU	✓
ꕭ	Lo	ga	ga	ga	g			syllable				U+A56D: VAI SYLLABLE GA	✓
ꔠ	Lo	ge	ge	ge	g			syllable				U+A520: VAI SYLLABLE GEE	✓
ꘆ	Lo	gɛ	gɛ	gɛ	g			syllable				U+A606: VAI SYLLABLE GE	✓
ꕅ	Lo	gi	gi	gi	g			syllable				U+A545: VAI SYLLABLE GI	✓
ꖑ	Lo	go	go	go	g			syllable				U+A591: VAI SYLLABLE GOO	✓
ꗝ	Lo	gɔ	gɔ	gɔ	g			syllable				U+A5DD: VAI SYLLABLE GO	✓
ꖶ	Lo	gu	gu	gu	g			syllable				U+A5B6: VAI SYLLABLE GU	✓
ꘇ	Lo	gɛ̃	gɛ̃	gɛn	g			syllable				U+A607: VAI SYLLABLE GEN	✓
ꕗ	Lo	ɡ͡ba	gba	gba	G			syllable				U+A557: VAI SYLLABLE GBA	✓
ꔋ	Lo	ɡ͡be	gbe	gbe	G			syllable				U+A50B: VAI SYLLABLE GBEE	✓
ꗯ	Lo	ɡ͡bɛ	gbɛ	gbɛ	G			syllable				U+A5EF: VAI SYLLABLE GBE	✓
ꔰ	Lo	ɡ͡bi	gbi	gbi	G			syllable				U+A530: VAI SYLLABLE GBI	✓
ꕼ	Lo	ɡ͡bo	gbo	gbo	G			syllable				U+A57C: VAI SYLLABLE GBOO	✓
ꗇ	Lo	ɡ͡bɔ	gbɔ	gbɔ	G			syllable				U+A5C7: VAI SYLLABLE GBO	✓
ꖡ	Lo	ɡ͡bu	gbu	gbu	G			syllable				U+A5A1: VAI SYLLABLE GBU	✓
ꗰ	Lo	ɡ͡bɛ̃	gbɛ̃	gbɛn	G			syllable				U+A5F0: VAI SYLLABLE GBEN	✓
ꗈ	Lo	ɡ͡bɔ̃	gbɔ̃	gbɔn	G			syllable				U+A5C8: VAI SYLLABLE GBON	✓
ꕬ	Lo	ᵑga	ᵑga	nga	K			syllable				U+A56C: VAI SYLLABLE NGGA	✓
ꔟ	Lo	ᵑge	ᵑge	nge	K			syllable				U+A51F: VAI SYLLABLE NGGEE	✓
ꘄ	Lo	ᵑgɛ	ᵑgɛ	ngɛ	K			syllable				U+A604: VAI SYLLABLE NGGE	✓
ꕄ	Lo	ᵑgi	ᵑgi	ngi	K			syllable				U+A544: VAI SYLLABLE NGGI	✓
ꖐ	Lo	ᵑgo	ᵑgo	ngo	K			syllable				U+A590: VAI SYLLABLE NGGOO	✓
ꗜ	Lo	ᵑgɔ	ᵑgɔ	ngɔ	K			syllable				U+A5DC: VAI SYLLABLE NGGO	✓
ꖵ	Lo	ᵑgu	ᵑgu	ngu	K			syllable				U+A5B5: VAI SYLLABLE NGGU	✓
ꘅ	Lo	ᵑgɛ̃	ᵑgɛ̃	ngɛn	K			syllable				U+A605: VAI SYLLABLE NGGEN	✓
ꕌ	Lo	ha	ha	ha	h			syllable				U+A54C: VAI SYLLABLE HA	✓
ꔂ	Lo	he	he	he	h			syllable				U+A502: VAI SYLLABLE HEE	✓
ꗤ	Lo	hɛ	hɛ	hɛ	h			syllable				U+A5E4: VAI SYLLABLE HE	✓
ꔦ	Lo	hi	hi	hi	h			syllable				U+A526: VAI SYLLABLE HI	✓
ꕳ	Lo	ho	ho	ho	h			syllable				U+A573: VAI SYLLABLE HOO	✓
ꖽ	Lo	hɔ	hɔ	hɔ	h			syllable				U+A5BD: VAI SYLLABLE HO	✓
ꖗ	Lo	hu	hu	hu	h			syllable				U+A597: VAI SYLLABLE HU	✓
ꕍ	Lo	hã	hã	han	H			syllable				U+A54D: VAI SYLLABLE HAN	✓
ꗥ	Lo	hɛ̃	hɛ̃	hɛn	H			syllable				U+A5E5: VAI SYLLABLE HEN	✓
ꔧ	Lo	hĩ	hĩ	hin	H			syllable				U+A527: VAI SYLLABLE HIN	✓
ꖾ	Lo	hɔ̃	hɔ̃	hɔn	H			syllable				U+A5BE: VAI SYLLABLE HON	✓
ꖘ	Lo	hũ	hũ	hun	H			syllable				U+A598: VAI SYLLABLE HUN	✓
ꔤ	Lo	i	i	i	i			syllable				U+A524: VAI SYLLABLE I	✓
ꔥ	Lo	ĩ	ĩ	in	i		i	syllable	for foriegn sounds			U+A525: VAI SYLLABLE IN	✓
ꕧ	Lo	d͡ʒa	ʤa	ja	j			syllable				U+A567: VAI SYLLABLE JA	✓
ꔛ	Lo	d͡ʒe	ʤe	je	j			syllable				U+A51B: VAI SYLLABLE JEE	✓
ꘀ	Lo	d͡ʒɛ	ʤɛ	jɛ	j			syllable				U+A600: VAI SYLLABLE JE	✓
ꕀ	Lo	d͡ʒi	ʤi	ji	j			syllable				U+A540: VAI SYLLABLE JI	✓
ꖌ	Lo	d͡ʒo	ʤo	jo	j			syllable				U+A58C: VAI SYLLABLE JOO	✓
ꗘ	Lo	d͡ʒɔ	ʤɔ	jɔ	j			syllable				U+A5D8: VAI SYLLABLE JO	✓
ꖱ	Lo	d͡ʒu	ʤu	ju	j			syllable				U+A5B1: VAI SYLLABLE JU	✓
ꔜ	Lo	ᶮd͡ʒe	ⁿʤe	nje	J			syllable				U+A51C: VAI SYLLABLE NJEE	✓
ꕨ	Lo	ᶮd͡ʒea	ⁿʤa	nja	J			syllable				U+A568: VAI SYLLABLE NJA	✓
ꘁ	Lo	ᶮd͡ʒeɛ	ⁿʤɛ	njɛ	J			syllable				U+A601: VAI SYLLABLE NJE	✓
ꖍ	Lo	ᶮd͡ʒeo	ⁿʤo	njo	J			syllable				U+A58D: VAI SYLLABLE NJOO	✓
ꗙ	Lo	ᶮd͡ʒeɔ	ⁿʤɔ	nj	J			syllable				U+A5D9: VAI SYLLABLE NJO	✓
ꖲ	Lo	ᶮd͡ʒeu	ⁿʤu	nju	J			syllable				U+A5B2: VAI SYLLABLE NJU	✓
ꕁ	Lo	ᶮd͡ʒi	ⁿʤi	nji	J			syllable				U+A541: VAI SYLLABLE NJI	✓
ꕪ	Lo	ka	ka	ka	k			syllable/logogram				U+A56A: VAI SYLLABLE KA	✓
ꔞ	Lo	ke	ke	ke	k			syllable				U+A51E: VAI SYLLABLE KEE	✓
ꘃ	Lo	kɛ	kɛ	kɛ	k			syllable				U+A603: VAI SYLLABLE KE	✓
ꕃ	Lo	ki	ki	ki	k			syllable				U+A543: VAI SYLLABLE KI	✓
ꖏ	Lo	ko	ko	ko	k			syllable				U+A58F: VAI SYLLABLE KOO	✓
ꗛ	Lo	kɔ	kɔ	kɔ	k			syllable				U+A5DB: VAI SYLLABLE KO	✓
ꖴ	Lo	ku	ku	ku	k			syllable				U+A5B4: VAI SYLLABLE KU	✓
ꕫ	Lo	kã	kã	kan	k		i	syllable				U+A56B: VAI SYLLABLE KAN	✓
ꕞ	Lo	la	la	la	l			syllable				U+A55E: VAI SYLLABLE LA	✓
ꔒ	Lo	le	le	le	l			syllable				U+A512: VAI SYLLABLE LEE	✓
ꗷ	Lo	lɛ	lɛ	lɛ	l			syllable				U+A5F7: VAI SYLLABLE LE	✓
ꔷ	Lo	li	li	li	l			syllable				U+A537: VAI SYLLABLE LI	✓
ꖃ	Lo	lo	lo	lo	l			syllable				U+A583: VAI SYLLABLE LOO	✓
ꗏ	Lo	lɔ	lɔ	lɔ	l			syllable				U+A5CF: VAI SYLLABLE LO	✓
ꖨ	Lo	lu	lu	lu	l			syllable				U+A5A8: VAI SYLLABLE LU	✓
ꕓ	Lo	ᵐɓa	ᵐɓa	mɓa	M			syllable				U+A553: VAI SYLLABLE MBA	✓
ꔈ	Lo	ᵐɓe	ᵐɓe	mɓe	M			syllable				U+A508: VAI SYLLABLE MBEE	✓
ꗫ	Lo	ᵐɓɛ	ᵐɓɛ	mɓɛ	M			syllable				U+A5EB: VAI SYLLABLE MBE	✓
ꔭ	Lo	ᵐɓi	ᵐɓi	mɓi	M			syllable				U+A52D: VAI SYLLABLE MBI	✓
ꕹ	Lo	ᵐɓo	ᵐɓo	mɓo	M			syllable				U+A579: VAI SYLLABLE MBOO	✓
ꗄ	Lo	ᵐɓɔ	ᵐɓɔ	mɓɔ	M			syllable				U+A5C4: VAI SYLLABLE MBO	✓
ꖞ	Lo	ᵐɓu	ᵐɓu	mɓu	M			syllable				U+A59E: VAI SYLLABLE MBU	✓
ꕮ	Lo	ma	ma	ma	m			syllable				U+A56E: VAI SYLLABLE MA	✓
ꔡ	Lo	mẽ	mẽ	men	m		i	syllable				U+A521: VAI SYLLABLE MEE	✓
ꘈ	Lo	mɛ̃	mɛ̃	mɛn	m			syllable				U+A608: VAI SYLLABLE ME	✓
ꕆ	Lo	mĩ	mĩ	min	m			syllable				U+A546: VAI SYLLABLE MI	✓
ꖒ	Lo	mõ	mõ	mon	m		i	syllable				U+A592: VAI SYLLABLE MOO	✓
ꗞ	Lo	mɔ̃	mɔ̃	mɔn	m			syllable				U+A5DE: VAI SYLLABLE MO	✓
ꖷ	Lo	mũ	mũ	mun	m			syllable				U+A5B7: VAI SYLLABLE MU	✓
ꕯ	Lo	na	na	na	n			syllable				U+A56F: VAI SYLLABLE NA	✓
ꔢ	Lo	nẽ	nẽ	nen	n		i	syllable				U+A522: VAI SYLLABLE NEE	✓
ꘉ	Lo	nɛ̃	nɛ̃	nɛn	n			syllable				U+A609: VAI SYLLABLE NE	✓
ꕇ	Lo	nĩ	nĩ	nin	n			syllable				U+A547: VAI SYLLABLE NI	✓
ꖓ	Lo	nõ	nõ	non	n		i	syllable				U+A593: VAI SYLLABLE NOO	✓
ꗟ	Lo	nɔ̃	nɔ̃	nɔn	n			syllable				U+A5DF: VAI SYLLABLE NO	✓
ꖸ	Lo	nũ	nũ	nun	n			syllable				U+A5B8: VAI SYLLABLE NU	✓
ꕋ	Lo	ŋã	ŋã	ngan	n			syllable				U+A54B: VAI SYLLABLE NGAN	✓
ꗣ	Lo	ŋɛ̃	ŋɛ̃	ngɛn	n			syllable				U+A5E3: VAI SYLLABLE NGEN	✓
ꖼ	Lo	ŋɔ	ŋɔ	ngɔ	n			syllable				U+A5BC: VAI SYLLABLE NGON	✓
ꕰ	Lo	ɲa	ɲa	nya	N			syllable				U+A570: VAI SYLLABLE NYA	✓
ꔣ	Lo	ɲẽ	ɲẽ	nyen	N		i	syllable				U+A523: VAI SYLLABLE NYEE	✓
ꘊ	Lo	ɲɛ̃	ɲɛ̃	nyɛn	N			syllable				U+A60A: VAI SYLLABLE NYE	✓
ꕈ	Lo	ɲi	ɲi	nyi	N			syllable				U+A548: VAI SYLLABLE NYI	✓
ꖔ	Lo	ɲõ	ɲõ	nyon	N		i	syllable				U+A594: VAI SYLLABLE NYOO	✓
ꗠ	Lo	ɲɔ̃	ɲɔ̃	nyɔn	N			syllable				U+A5E0: VAI SYLLABLE NYO	✓
ꖹ	Lo	ɲũ	ɲũ	nyun	N			syllable				U+A5B9: VAI SYLLABLE NYU	✓
ꕱ	Lo	o	o	o	o			syllable				U+A571: VAI SYLLABLE OO	✓
ꕲ	Lo	õ	ō	on	o		i	syllable	for foriegn sounds			U+A572: VAI SYLLABLE OON	✓
ꖺ	Lo	ɔ	ɔ	ɔ	O			syllable				U+A5BA: VAI SYLLABLE O	✓
ꖻ	Lo	ɔ̃	ɔ̃	ɔn	O			syllable				U+A5BB: VAI SYLLABLE ON	✓
ꕔ	Lo	k͡pa	k͡pa	kpa	P			syllable				U+A554: VAI SYLLABLE KPA	✓
ꔉ	Lo	k͡pe	k͡pe	kpe	P			syllable				U+A509: VAI SYLLABLE KPEE	✓
ꗬ	Lo	k͡pɛ	k͡pɛ	kpɛ	P			syllable				U+A5EC: VAI SYLLABLE KPE	✓
ꔮ	Lo	k͡pi	k͡pi	kpi	P			syllable				U+A52E: VAI SYLLABLE KPI	✓
ꕺ	Lo	k͡po	k͡po	kpo	P			syllable				U+A57A: VAI SYLLABLE KPOO	✓
ꗅ	Lo	k͡pɔ	k͡pɔ	kpɔ	P			syllable				U+A5C5: VAI SYLLABLE KPO	✓
ꖟ	Lo	k͡pu	k͡pu	kpu	P			syllable				U+A59F: VAI SYLLABLE KPU	✓
ꕕ	Lo	k͡pã	k͡pã	kpan	P			syllable				U+A555: VAI SYLLABLE KPAN	✓
ꗭ	Lo	k͡pɛ̃	k͡pɛ̃	kpɛn	P			syllable				U+A5ED: VAI SYLLABLE KPEN	✓
ꕐ	Lo	pa	pa	pa	p			syllable				U+A550: VAI SYLLABLE PA	✓
ꔅ	Lo	pe	pe	pe	p			syllable				U+A505: VAI SYLLABLE PEE	✓
ꗨ	Lo	pɛ	pɛ	pɛ	p			syllable				U+A5E8: VAI SYLLABLE PE	✓
ꔪ	Lo	pi	pi	pi	p			syllable				U+A52A: VAI SYLLABLE PI	✓
ꕶ	Lo	po	po	po	p			syllable				U+A576: VAI SYLLABLE POO	✓
ꗁ	Lo	pɔ	pɔ	pɔ	p			syllable				U+A5C1: VAI SYLLABLE PO	✓
ꖛ	Lo	pu	pu	pu	p			syllable				U+A59B: VAI SYLLABLE PU	✓
ꕛ	Lo	θa	θa	tha	q		i	syllable				U+A55B: VAI SYLLABLE THA	✓
ꔏ	Lo	θe	θe	the	q		i	syllable				U+A50F: VAI SYLLABLE THEE	✓
ꗴ	Lo	θɛ	θɛ	thɛ	q		i	syllable				U+A5F4: VAI SYLLABLE THE	✓
ꔴ	Lo	θi	θi	thi	q		i	syllable				U+A534: VAI SYLLABLE THI	✓
ꖀ	Lo	θo	θo	tho	q		i	syllable		˘		U+A580: VAI SYLLABLE THOO	✓
ꗌ	Lo	θɔ	θɔ	thɔ	q		i	syllable				U+A5CC: VAI SYLLABLE THO	✓
ꖥ	Lo	θu	θu	thu	q		i	syllable				U+A5A5: VAI SYLLABLE THU	✓
ꕝ	Lo	ða	ða	dha	Q		i	syllable				U+A55D: VAI SYLLABLE DHHA	✓
ꔑ	Lo	ðe	ðe	dhe	Q		i	syllable				U+A511: VAI SYLLABLE DHHEE	✓
ꗶ	Lo	ðɛ	ðɛ	dhɛ	Q		i	syllable				U+A5F6: VAI SYLLABLE DHHE	✓
ꔶ	Lo	ði	ði	dhi	Q		i	syllable				U+A536: VAI SYLLABLE DHHI	✓
ꖂ	Lo	ðo	ðo	dho	Q		i	syllable				U+A582: VAI SYLLABLE DHHOO	✓
ꗎ	Lo	ðɔ	ðɔ	dhɔ	Q		i	syllable				U+A5CE: VAI SYLLABLE DHHO	✓
ꖧ	Lo	ðu	ðu	dhu	Q		i	syllable				U+A5A7: VAI SYLLABLE DHHU	✓
ꕟ	Lo	ra	ra	ra	r			syllable				U+A55F: VAI SYLLABLE RA	✓
ꔓ	Lo	re	re	re	r			syllable				U+A513: VAI SYLLABLE REE	✓
ꗸ	Lo	rɛ	rɛ	rɛ	r			syllable				U+A5F8: VAI SYLLABLE RE	✓
ꔸ	Lo	ri	ri	ri	r			syllable				U+A538: VAI SYLLABLE RI	✓
ꖄ	Lo	ro	ro	ro	r			syllable				U+A584: VAI SYLLABLE ROO	✓
ꗐ	Lo	rɔ	rɔ	rɔ	r			syllable				U+A5D0: VAI SYLLABLE RO	✓
ꖩ	Lo	ru	ru	ru	r			syllable				U+A5A9: VAI SYLLABLE RU	✓
ꕢ	Lo	sa	sa	sa	s			syllable				U+A562: VAI SYLLABLE SA	✓
ꔖ	Lo	se	se	se	s			syllable				U+A516: VAI SYLLABLE SEE	✓
ꗻ	Lo	sɛ	sɛ	sɛ	s			syllable				U+A5FB: VAI SYLLABLE SE	✓
ꔻ	Lo	si	si	si	s			syllable				U+A53B: VAI SYLLABLE SI	✓
ꖇ	Lo	so	so	so	s			syllable				U+A587: VAI SYLLABLE SOO	✓
ꗓ	Lo	sɔ	sɔ	sɔ	s			syllable				U+A5D3: VAI SYLLABLE SO	✓
ꖬ	Lo	su	su	su	s			syllable				U+A5AC: VAI SYLLABLE SU	✓
ꕣ	Lo	ʃa	ʃa	sha	S		i	syllable				U+A563: VAI SYLLABLE SHA	✓
ꔗ	Lo	ʃe	ʃe	she	S		i	syllable				U+A517: VAI SYLLABLE SHEE	✓
ꗼ	Lo	ʃɛ	ʃɛ	shɛ	S		i	syllable				U+A5FC: VAI SYLLABLE SHE	✓
ꔼ	Lo	ʃi	ʃi	shi	S		i	syllable				U+A53C: VAI SYLLABLE SHI	✓
ꖈ	Lo	ʃo	ʃo	sho	S		i	syllable				U+A588: VAI SYLLABLE SHOO	✓
ꗔ	Lo	ʃɔ	ʃɔ	shɔ	S		i	syllable				U+A5D4: VAI SYLLABLE SHO	✓
ꖭ	Lo	ʃu	ʃu	shu	S		i	syllable				U+A5AD: VAI SYLLABLE SHU	✓
ꕚ	Lo	ta	ta	ta	t			syllable				U+A55A: VAI SYLLABLE TA	✓
ꔎ	Lo	te	te	te	t			syllable				U+A50E: VAI SYLLABLE TEE	✓
ꗳ	Lo	tɛ	tɛ	tɛ	t			syllable				U+A5F3: VAI SYLLABLE TE	✓
ꔳ	Lo	ti	ti	ti	t			syllable				U+A533: VAI SYLLABLE TI	✓
ꕿ	Lo	to	to	to	t			syllable				U+A57F: VAI SYLLABLE TOO	✓
ꗋ	Lo	tɔ	tɔ	tɔ	t			syllable				U+A5CB: VAI SYLLABLE TO	✓
ꖤ	Lo	tu	tu	tu	t			syllable				U+A5A4: VAI SYLLABLE TU	✓
ꖕ	Lo	u	u	u	u			syllable				U+A595: VAI SYLLABLE U	✓
ꖖ	Lo	ũ	ũ	un	u		i	syllable	for foriegn sounds			U+A596: VAI SYLLABLE UN	✓
ꕙ	Lo	va	va	va	v			syllable				U+A559: VAI SYLLABLE VA	✓
ꔍ	Lo	ve	ve	ve	v			syllable				U+A50D: VAI SYLLABLE VEE	✓
ꗲ	Lo	vɛ	vɛ	vɛ	v			syllable				U+A5F2: VAI SYLLABLE VE	✓
ꔲ	Lo	vi	vi	vi	v			syllable				U+A532: VAI SYLLABLE VI	✓
ꕾ	Lo	vo	vo	vo	v			syllable				U+A57E: VAI SYLLABLE VOO	✓
ꗊ	Lo	vɔ	vɔ	vɔ	v			syllable				U+A5CA: VAI SYLLABLE VO	✓
ꖣ	Lo	vu	vu	vu	v			syllable				U+A5A3: VAI SYLLABLE VU	✓
ꕎ	Lo	wa	wa	wa	w			syllable				U+A54E: VAI SYLLABLE WA	✓
ꔃ	Lo	we	we	we	w			syllable				U+A503: VAI SYLLABLE WEE	✓
ꗦ	Lo	wɛ	wɛ	wɛ	w			syllable				U+A5E6: VAI SYLLABLE WE	✓
ꔨ	Lo	wi	wi	wi	w			syllable				U+A528: VAI SYLLABLE WI	✓
ꕴ	Lo	wo	wo	wo	w			syllable				U+A574: VAI SYLLABLE WOO	✓
ꖿ	Lo	wɔ	wɔ	wɔ	w			syllable				U+A5BF: VAI SYLLABLE WO	✓
ꖙ	Lo	wu	wu	wu	w			syllable				U+A599: VAI SYLLABLE WU	✓
ꕏ	Lo	wã	wã	wan	W			syllable				U+A54F: VAI SYLLABLE WAN	✓
ꔄ	Lo	wẽ	wẽ	wen	W		i	syllable				U+A504: VAI SYLLABLE WEEN	✓
ꗧ	Lo	wɛ̃	wɛ̃	wɛn	W			syllable				U+A5E7: VAI SYLLABLE WEN	✓
ꔩ	Lo	wĩ	wĩ	win	W			syllable				U+A529: VAI SYLLABLE WIN	✓
ꕵ	Lo	wõ	wõ	won	W		i	syllable				U+A575: VAI SYLLABLE WOON	✓
ꗀ	Lo	wɔ̃	wɔ̃	wɔn	W		i	syllable				U+A5C0: VAI SYLLABLE WON	✓
ꖚ	Lo	wũ	wũ	wun	W		i	syllable				U+A59A: VAI SYLLABLE WUN	✓
ꘋ	Lo	ŋ	ŋ̇	n	x			syllable final consonant				U+A60B: VAI SYLLABLE NG	✓
ꕖ	Lo	ᵐɡ͡ba	mgba	mgba	X			syllable				U+A556: VAI SYLLABLE MGBA	✓
ꔊ	Lo	ᵐɡ͡be	mgbe	mgbe	X			syllable				U+A50A: VAI SYLLABLE MGBEE	✓
ꗮ	Lo	ᵐɡ͡bɛ	mgbɛ	mgbɛ	X			syllable				U+A5EE: VAI SYLLABLE MGBE	✓
ꔯ	Lo	ᵐɡ͡bi	mgbi	mgbi	X		i	syllable				U+A52F: VAI SYLLABLE MGBI	✓
ꕻ	Lo	ᵐɡ͡bo	mgbo	mgbo	X			syllable				U+A57B: VAI SYLLABLE MGBOO	✓
ꗆ	Lo	ᵐɡ͡bɔ	mgbɔ	mgbɔ	X			syllable				U+A5C6: VAI SYLLABLE MGBO	✓
ꖠ	Lo	ᵐɡ͡bu	mgbu	mgbu	X		i	syllable				U+A5A0: VAI SYLLABLE MGBU	✓
ꕩ	Lo	ja	ja	ya	y			syllable				U+A569: VAI SYLLABLE YA	✓
ꔝ	Lo	je	je	ye	y			syllable				U+A51D: VAI SYLLABLE YEE	✓
ꘂ	Lo	jɛ	jɛ	yɛ	y			syllable				U+A602: VAI SYLLABLE YE	✓
ꕂ	Lo	ji	ji	yi	y			syllable				U+A542: VAI SYLLABLE YI	✓
ꖎ	Lo	jo	jo	yo	y			syllable				U+A58E: VAI SYLLABLE YOO	✓
ꗚ	Lo	jɔ	jɔ	yɔ	y			syllable				U+A5DA: VAI SYLLABLE YO	✓
ꖳ	Lo	ju	ju	ju	y			syllable				U+A5B3: VAI SYLLABLE YU	✓
ꕤ	Lo	za	za	za	z			syllable				U+A564: VAI SYLLABLE ZA	✓
ꔘ	Lo	ze	ze	ze	z			syllable				U+A518: VAI SYLLABLE ZEE	✓
ꗽ	Lo	zɛ	zɛ	zɛ	z			syllable				U+A5FD: VAI SYLLABLE ZE	✓
ꔽ	Lo	zi	zi	zi	z			syllable				U+A53D: VAI SYLLABLE ZI	✓
ꖉ	Lo	zo	zo	zo	z			syllable				U+A589: VAI SYLLABLE ZOO	✓
ꗕ	Lo	zɔ	zɔ	zɔ	z			syllable				U+A5D5: VAI SYLLABLE ZO	✓
ꖮ	Lo	zu	zu	zu	z			syllable				U+A5AE: VAI SYLLABLE ZU	✓
ꕥ	Lo	ʒa	ʒa	zha	Z		i	syllable				U+A565: VAI SYLLABLE ZHA	✓
ꔙ	Lo	ʒe	ʒe	zhe	Z		i	syllable				U+A519: VAI SYLLABLE ZHEE	✓
ꗾ	Lo	ʒɛ	ʒɛ	zhɛ	Z		i	syllable				U+A5FE: VAI SYLLABLE ZHE	✓
ꔾ	Lo	ʒi	ʒi	zhi	Z		i	syllable				U+A53E: VAI SYLLABLE ZHI	✓
ꖊ	Lo	ʒo	ʒo	zho	Z		i	syllable				U+A58A: VAI SYLLABLE ZHOO	✓
ꗖ	Lo	ʒɔ	ʒɔ	zhɔ	Z		i	syllable				U+A5D6: VAI SYLLABLE ZHO	✓
ꖯ	Lo	ʒu	ʒu	zhu	Z		i	syllable				U+A5AF: VAI SYLLABLE ZHU	✓
													
§	Po	§	§	§				section sign				U+00A7: SECTION SIGN	
†	Po	†	†	†				dagger				U+2020: DAGGER	
‡	Po	‡	‡	‡				double dagger				U+2021: DOUBLE DAGGER	
′	Po	′	′	′				prime				U+2032: PRIME	
″	Po	″	″	″				double prime				U+2033: DOUBLE PRIME	
ꘗ	Lo	ɓaŋ	ƁAŊ				a	logogram	archaic	finished		U+A617: VAI SYMBOL BANG	✓
ꘚ	Lo	ɗaŋ	ƊAŊ				a	logogram	archaic	hear, understand	ꕠꘋ	U+A61A: VAI SYMBOL DANG	✓
(ꔔ)	Lo	ɗeŋ	ƊEŊ				a	logogram	archaic	child, small		U+A514: VAI SYLLABLE DEE	
ꘛ	Lo	ɗoŋ	ƊOŊ				a	logogram	archaic	enter	ꖅꘋ	U+A61B: VAI SYMBOL DOONG	✓
ꘫ	Lo	ɗɔ	ƊƆ				o	historical syllable	obsolete	ꗑ		U+A62B: VAI SYLLABLE NDOLE DO	✓
ꘞ	Lo	ɗɔː	ƊƆƆ				a	logogram	archaic	be small	ꗑꖽ	U+A61E: VAI SYMBOL DO-O	✓
ꘐ	Lo	fa	FA				o	historical syllable	obsolete	ꕘ		U+A610: VAI SYLLABLE NDOLE FA	✓
ꘘ	Lo	fáː	FAA					logogram		die, kill	ꕘꕌ	U+A618: VAI SYMBOL FAA	✓
ꘓ	Lo	féŋ	FEŊ					logogram		thing	ꕘꘋ	U+A613: VAI SYMBOL FEENG	✓
ꘟ	Lo	jɔŋ	JƆŊ				a	logogram	archaic	slave	ꗘꘋ	U+A61F: VAI SYMBOL JONG	✓
ꘑ	Lo	ka	KA				o	historical syllable	obsolete	ꕪ		U+A611: VAI SYLLABLE NDOLE KA	✓
(ꕪ)	Lo	ka kai	KAI				a	logogram	archaic	man		U+A56A: VAI SYLLABLE KA	
ꘔ	Lo	keŋ	KEŊ				a	logogram	archaic	foot	ꔞꘋ	U+A614: VAI SYMBOL KEENG	✓
ꘜ	Lo	kuŋ	KUŊ				a	logogram	archaic	head, be able to	ꖴꘋ	U+A61C: VAI SYMBOL KUNG	✓
(ꗑ)	Lo	lɔ	LƆ				a	logogram	archaic	in		U+A5D1: VAI SYLLABLE DO	
ꘪ	Lo	mã	MAA				o	historical syllable	obsolete	ꕮ		U+A62A: VAI SYLLABLE NDOLE MA	✓
ꘖ	Lo	nii/k͡pɛ-kɔwu	NII/k͡pƐ-KƆWU				a	logogram	archaic	cow/case of gin		U+A616: VAI SYMBOL NII	✓
ꘒ	Lo	so	SO				o	historical syllable	obsolete	ꖇ		U+A612: VAI SYLLABLE NDOLE SOO	✓
ꘙ	Lo	taː	TAA				a	logogram	archaic	go, carry, journey	ꕚꕌ	U+A619: VAI SYMBOL TAA	✓
ꘕ	Lo	tiŋ	TIŊ				a	logogram	archaic	island	ꔳꘋ	U+A615: VAI SYMBOL TING	✓
ꘝ	Lo	tɔŋ	TƆŊ				a	logogram	archaic	be named	ꗋꘋ	U+A61D: VAI SYMBOL TONG	✓




`



latinPanel = ' ́ ̀ ̂ ̌ “ ‘ ” ’ « » Ɓ Ɗ Ɛ Ŋ Ɔ ã à á â ǎ ɓ ɗ d͡ʒ ð ẽ è é ê ě ɛ ɛ̃ ɛ́ ɛ̀ ĩ ì í ŋ ɲ ŋ̇ õ ò ó ô ǒ ɔ ɔ̃ ɔ̀ ɔ́ θ ʃ t͡ʃ ũ̃ ù ú ʒ k͡p ɡ͡b ᵐɓ ᵐɡ͡b ⁿɗ ᶮd͡ʒ ᵑɡ'


vowelsInSyllables = ['i', 'ĩ', 'u', 'ũ', 'e', 'o', 'ɛ', 'ɛ̃', 'ɔ', 'ɔ̃', 'a', 'ã']


var cols = {
"class": 1,
"ipaLoc": 2,
"transLoc":3,
"transcription":4,
"key":5,
"kbd": 6,
"status": 7,
"typeLoc": 8,
"statusLoc": 9,

"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":10,
"shape": 0,
"numLoc": 0,

"nameLoc": 0,
"nnameLoc": 0,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[4, 'Latin']]
}

