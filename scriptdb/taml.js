var spreadsheet = `
க		k- kː -x- -ɣ- -h- -ɡ	k	kː ɣ ɡ	k	k	h	vallinam consonant						U+0B95: TAMIL LETTER KA	✓
ச		t͡ʃ- tːʃ -s- ʒ -d͡ʒ	c	t͡ʃ tːʃ ʒ d͡ʒ	c	ʧ	[	vallinam consonant						U+0B9A: TAMIL LETTER CA	✓
த		t̪- t̪ː -ð- -d̪	t	t̪ t̪ː ð d̪	t¶	t	l	vallinam consonant						U+0BA4: TAMIL LETTER TA	✓
ட		ʈː -ɽ- -ɖ	ṭ	ʈː ɽ ɖ	t	ʈ	o	vallinam consonant						U+0B9F: TAMIL LETTER TTA	✓
ப		p- pː -β- f -b	p	pː β	p	p	j	vallinam consonant						U+0BAA: TAMIL LETTER PA	✓
ன		n	ṉ	ṉ	n¶	n	i	mellinam consonant						U+0BA9: TAMIL LETTER NNNA	✓
ங		ŋ	ṅ	ŋ ṅ	n	ŋ	b	mellinam consonant						U+0B99: TAMIL LETTER NGA	✓
ஞ		ɲ	ñ	ɲ ñ	n	ɲ	]	mellinam consonant						U+0B9E: TAMIL LETTER NYA	✓
ண		ɳ	ṇ	ɳ ṇ	n	ɳ	p	mellinam consonant						U+0BA3: TAMIL LETTER NNA	✓
ந		n̪	n	n̪	n	ṅ	;	mellinam consonant						U+0BA8: TAMIL LETTER NA	✓
ம		m	m		m	m	k	mellinam consonant						U+0BAE: TAMIL LETTER MA	✓
ர		ɾ	r	ɾ	r	ɾ	m	idaiyinam consonant						U+0BB0: TAMIL LETTER RA	✓
ற		r t d	ṟ	ṟ	r¶	r	u	idaiyinam consonant						U+0BB1: TAMIL LETTER RRA	✓
ல		l	l		l	l	n	idaiyinam consonant						U+0BB2: TAMIL LETTER LA	✓
ள		ɭ	ḷ	ḷ	l	ɭ	y	idaiyinam consonant						U+0BB3: TAMIL LETTER LLA	✓
ழ		ɻ	ẓ ḻ ṛ	ɻ ẓ ḻ ṛ	l	ɻ	/	idaiyinam consonant						U+0BB4: TAMIL LETTER LLLA	✓
ய		j	y		y	j	'	idaiyinam consonant						U+0BAF: TAMIL LETTER YA	✓
வ		ʋ	v	ʋ	v	ʋ	v	idaiyinam consonant						U+0BB5: TAMIL LETTER VA	✓
															
															
ஜ		d͡ʒ z	d		d	ʤ	E	grantha consonant						U+0B9C: TAMIL LETTER JA	✓
ஸ		s	s		s¶	s	Q	grantha consonant						U+0BB8: TAMIL LETTER SA	✓
ஷ		ʂ	ṣ	ʂ ṣ	s	ʂ	W	grantha consonant						U+0BB7: TAMIL LETTER SSA	✓
ஶ		ɕ ʃ	ś	ɕ ʃ ś	s	ʃ	U	grantha consonant	infrequent					U+0BB6: TAMIL LETTER SHA	✓
ஹ		h	h		h	h	R	grantha consonant						U+0BB9: TAMIL LETTER HA	✓
															
															
															
ஃ			ḵ	ḵ	/	ˑ	F	sound converter				ஆய்தம்	ɑ̣̄y͓tam͓	U+0B83: TAMIL SIGN VISARGA	✓
															
															
அ		a	a		A	ạ	a	independent vowel						U+0B85: TAMIL LETTER A	✓
ஆ		aː	ā	aː ā	A	ạ̄	q	independent vowel		ா				U+0B86: TAMIL LETTER AA	✓
இ		i	i		I	ị	s	independent vowel		ி				U+0B87: TAMIL LETTER I	✓
ஈ		iː	ī	iː ī	I	ị̄	i	independent vowel		ீ				U+0B88: TAMIL LETTER II	✓
உ		u	u		U	ụ	d	independent vowel		ு				U+0B89: TAMIL LETTER U	✓
ஊ		uː	ū	uː ū	U	ụ̄	e	independent vowel		ூ				U+0B8A: TAMIL LETTER UU	✓
எ		e	e		E	ẹ	g	independent vowel		ெ				U+0B8E: TAMIL LETTER E	✓
ஏ		eː	ē	eː ē	E	ẹ̄	t	independent vowel		ே				U+0B8F: TAMIL LETTER EE	✓
ஒ		oː	o	oː	O	ọ	c	independent vowel		ொ				U+0B92: TAMIL LETTER O	✓
ஓ		o	ō	ō	O	ọ̄	x	independent vowel		ோ				U+0B93: TAMIL LETTER OO	✓
ஐ		aɪ	ai	aɪ	A	ạʲ	r	independent vowel		ை				U+0B90: TAMIL LETTER AI	✓
ஔ		aʊ	aw	aʊ	A	ạʷ	z	independent vowel		ௌ				U+0B94: TAMIL LETTER AU	✓
															
															
ா		aː	ā		a	ā	q	vowel sign			ஆ			U+0BBE: TAMIL VOWEL SIGN AA​	✓
ி		i	i		i	i	s	vowel sign			இ			U+0BBF: TAMIL VOWEL SIGN I​	✓
ீ		iː	ī		i	ī	w	vowel sign			ஈ			U+0BC0: TAMIL VOWEL SIGN II​	✓
ு		u	u		u	u	d	vowel sign			உ			U+0BC1: TAMIL VOWEL SIGN U​	✓
ூ		uː	ū		u	ū	e	vowel sign			ஊ			U+0BC2: TAMIL VOWEL SIGN UU​	✓
ெ		e	e		e	e	G	vowel sign			எ			U+0BC6: TAMIL VOWEL SIGN E​	✓
ே		eː	ē		e	ē	t	vowel sign			ஏ			U+0BC7: TAMIL VOWEL SIGN EE​	✓
ொ		o	o		o	o	c	vowel sign			ஒ			U+0BCA: TAMIL VOWEL SIGN O​	✓
ோ		oː	ō		o	ō	x	vowel sign			ஓ			U+0BCB: TAMIL VOWEL SIGN OO​	✓
ை		aɪ	ai		a	aʲ	r	vowel sign			ஐ			U+0BC8: TAMIL VOWEL SIGN AI​	✓
ௌ		aʊ	aw		a	aʷ	z	vowel sign			ஔ			U+0BCC: TAMIL VOWEL SIGN AU​	✓
															
															
்					*	͓	f	virama					puḷḷi	U+0BCD: TAMIL SIGN VIRAMA​	✓
ௗ					:	ː		length mark	d					U+0BD7: TAMIL AU LENGTH MARK​	✓
															
															
௹					#	{rupee}	A	rupee sign					rupai	U+0BF9: TAMIL RUPEE SIGN	✓
₹					#	{rupee}		rupee sign						U+20B9 INDIAN RUPEE SIGN	✓
ௐ					$	{om}		om					ōm̐	U+0BD0: TAMIL OM	✓
௵					$	{year}	C	year					varudam	U+0BF5: TAMIL YEAR SIGN	✓
௴					$	{month}	X	month					mātam	U+0BF4: TAMIL MONTH SIGN	✓
௳					$	{day}	Z	day					nāl	U+0BF3: TAMIL DAY SIGN	✓
௺					#	#	S	number sign					enn	U+0BFA: TAMIL NUMBER SIGN	✓
௶					#	{debit}	V	debit sign					patru	U+0BF6: TAMIL DEBIT SIGN	✓
௷					#	{credit}	B	credit sign					varavu	U+0BF7: TAMIL CREDIT SIGN	✓
௸					$	{as_above}	D	as above					merpadi	U+0BF8: TAMIL AS ABOVE SIGN	✓
															
															
															
															
															
															
ஃப	s	f	kp		f	ˑp		extended consonant						U+0B83 U+0BAA: TAMIL SIGN VISARGA, LETTER PA	
ஃஜ	s	z	kj		z	ˑʤ		extended consonant						U+0B83 U+0B9C: TAMIL SIGN VISARGA, LETTER JA	
ஃஸ	s	ks	ḵs		k	ˑs		extended consonant						U+0B83 U+0BB8: TAMIL SIGN VISARGA, LETTER SA	
ஃக	s	x	ḵk		x	ˑk		extended consonant						U+0B83 U+0B95: TAMIL SIGN VISARGA, LETTER KA	
															
க்ஷ	s	kʂ	kṣ		K	k͓ʂ	T	ligature						U+0B95 U+0BCD U+0BB7: TAMIL LETTER KA, SIGN VIRAMA, LETTER SSA	
ஶ்ரீ	s	ʃ͓ɾī			S	ʃ͓ɾī		ligature						U+0BB6 U+0BCD U+0BB0 U+0BC0: TAMIL LETTER SHA, SIGN VIRAMA, LETTER RA, VOWEL SIGN II	
ஸ்ரீ	s	ʃ͓ɾī			S	s͓ɾī	Y	ligature	not recommended by Unicode, but common					U+0BB8 U+0BCD U+0BB0 U+0BC0: TAMIL LETTER SA, SIGN VIRAMA, LETTER RA, VOWEL SIGN II	
															
															
															
															
															
															
															
।			.		|	|		section divider	infrequent					U+0964: DEVANAGARI DANDA	
॥			¶		|	¶		section divider	infrequent					U+0965: DEVANAGARI DOUBLE DANDA	
					|	—		section divider							
.			.		.	.		full stop						U+002E: FULL STOP	
,			,		,	,		comma						U+002C: COMMA	
⹁			⹁		,	⹁		comma						U+2E41: REVERSED COMMA	
:			:		:	:		colon						U+003A: COLON	
			ˉ		:	ˉ									
;			;		;	;		semicolon						U+003B: SEMICOLON	
!			!		!	!		exclamation mark						U+0021: EXCLAMATION MARK	
			ⸯ		!	ⸯ		exclamation mark							
			¡		!	¡		exclamation mark							
?			?		?	?		question mark						U+003F: QUESTION MARK	
			¿		?	¿		question mark							
															
															
…			…		.	…		ellipsis						U+2026: HORIZONTAL ELLIPSIS	
⋯			⋯		.	⋯		midline ellipsis						U+22EF: MIDLINE HORIZONTAL ELLIPSIS	
															
															
															
«			“		<	«		quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
»			”		>	»		quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹			‘		<	‹		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
›			’		>	›		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
“			“		<	 “		quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
”			”		>	”		quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
‘			‘		<	‘		quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
’			’		>	’		quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
															
															
															
(			(		(	(		parenthesis						U+0028: LEFT PARENTHESIS	
)			)		)	)		parenthesis						U+0029: RIGHT PARENTHESIS	
[			[		(	[		bracket						U+005B: LEFT SQUARE BRACKET	
]			]		)	]		bracket						U+005D: RIGHT SQUARE BRACKET	
															
															
-			-		-	-		hyphen						U+2010: HYPHEN	
‑			‑		-	‑		non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–			–		-	–		en dash						U+2013: EN DASH	
—			—		-	—		em dash						U+2014: EM DASH	
															
															
															
					[	ˈ		superscript alef							
					[	ʿ		hamza above							
					[	˓		hamza below							
					[	*		star							
					[	~		maddah							
					[	˘		vowel shortener							
					[	⁎		special							
					[	″		register change							
					[	°		special							
					[	˙		combining dot above							
					[	ʼ		combining hook above							
					[	ˆ		combining circumflex							
					[	ˉ		combining macron							
					[	̨		combining ogonek							
					[	⁑		feminine marker							
															
															
						‸		vowel carrier							
															
															
‍ଁ		̃	̃		[	˜		nasalisation							
															
															
‍୍					*	͓		vowel-killer							
					\	˟									
					\	ˣ									
					\	¯									
					\	ʿ									
															
															
‍ଽ					]	′		elision							
					]	‵									
					]	ʳ									
															
															
‍଼					/	ˑ		nukta							
					/	˙		nukta							
					/	ˇ		nukta							
					/	˷		nukta							
					/	~		nukta							
															
															
					&	&		repetition							
					&	˖		gemination							
															
															
					:	ː		length mark							
															
															
					+	¨		abbreviation marker							
															
															
					]	␣		zwsp							
					]	-		word separator							
															
															
					@	»		opening head mark							
					@	«		closing head mark							
					@	›		2nd opening head							
					@	‹		2 closing head							
					@	§ᵃ		honorific							
					@	 §ᵇ		honorific							
					@	§ᶜ		honorific							
					@	°		extra							
															
															
			_		_	_		baseline extender							
															
															
ʼ			ʼ			ʼ		apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§			§			§		section sign						U+00A7: SECTION SIGN	
†			†			†		dagger						U+2020: DAGGER	
‡			‡			‡		double dagger						U+2021: DOUBLE DAGGER	
′			′			′		prime						U+2032: PRIME	
″			″			″		double prime						U+2033: DOUBLE PRIME	
															
															
															
															
															
															
\u200B					]	␣		zero-width space						U+200B: ZERO WIDTH SPACE	
\u200C					=	ₓ		zwnj						U+200C: ZERO WIDTH NON-JOINER	
\u200D					=	₊		zwj						U+200D: ZERO WIDTH JOINER	
\u2067					=	ʳˡⁱ		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066					=	ˡʳⁱ		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068					=	ᶠˢⁱ		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069					=	ᵖᵈⁱ		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B					=	ʳˡᵉ		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A					=	ˡʳᵉ		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C					=	ᵖᵈᶠ		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F					=	ʳˡᵐ		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E					=	ˡʳᵐ		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u034F					=	ᶜᵍʲ		combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER​	
\u061C					=	ᵃˡᵐ		arabic letter mark						U+061C: ARABIC LETTER MARK	
															
															
															
															
௦			0		±	0̣	0	digit				பூக்கியம்	pūk͓kiyam͓	U+0BE6: TAMIL DIGIT ZERO	✓
௧			1		±	1̣	1	digit				ஒன்று	ọn͓ru	U+0BE7: TAMIL DIGIT ONE	✓
௨			2		±	2̣	2	digit				இரண்து	ịɾaɳ͓tu	U+0BE8: TAMIL DIGIT TWO	✓
௩			3		±	3̣	3	digit				மூன்று	mūn͓ru	U+0BE9: TAMIL DIGIT THREE	✓
௪			4		±	4̣	4	digit				நரன்கு	ṅaɾan͓ku	U+0BEA: TAMIL DIGIT FOUR	✓
௫			5		±	5̣	5	digit				ஐந்து	ʌ̣ʲṅ͓tu	U+0BEB: TAMIL DIGIT FIVE	✓
௬			6		±	6̣	6	digit				ஆறு	ɑ̣̄ru	U+0BEC: TAMIL DIGIT SIX	✓
௭			7		±	7̣	7	digit				ஏழு	ẹ̄ɻu	U+0BED: TAMIL DIGIT SEVEN	✓
௮			8		±	8̣	8	digit				எட்டு	ẹʈ͓ʈu	U+0BEE: TAMIL DIGIT EIGHT	✓
௯			9		±	9̣	9	digit				ஒன்பது	ọn͓patu	U+0BEF: TAMIL DIGIT NINE	✓
௰			(ten)		$	{10}		number				பத்து	pat͓tu	U+0BF0: TAMIL NUMBER TEN	✓
௱			(hundred)		$	{100}		number				நூறு	ṅūru	U+0BF1: TAMIL NUMBER ONE HUNDRED	✓
௲			(thousand)		$	{1000}		number				எந்	ẹṅ͓	U+0BF2: TAMIL NUMBER ONE THOUSAND	✓
															
															
					#	‛		thousands separator							
					#	·		decimal separator							
					#	/		date separator							
					#	¤		currency symbol							
					#	¢									
					#	#		number symbol							
					#	¼		quarter							
					#	½		half							
					#	¾		three-quarters							
					$	{10} etc		extended number							
															
															
															
%					%	%		percentage mark						U+0025: PERCENT SIGN	
‰					%	‰		per mille mark						U+2030: PER MILLE SIGN	


`


latinPanel = 'aː ā aɪ aʊ β ɕ d͡ʒ ð d̪ ɖ eː ē ɡ iː ī kː ḵ ḷ ḻ ṉ ŋ ṅ ɲ ñ ɳ ṇ n̪ oː ō pː ɽ ɾ ṟ ɻ ṛ ʂ ṣ ʃ ś t͡ʃ tːʃ t̪ t̪ː ʈː uː ū ʋ ɣ ʒ ẓ'



var cols = {
"class": 1,
"ipaLoc": 2,
"transcription": 3,
"latin": 4,
"key": 5,
"transLoc": 6,
"kbd": 7,
"typeLoc": 8,
"statusLoc": 9,

"transckey": 0,
"dvowel": 10,
"ivowel": 11,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nnameLoc": 12,
"nameLoc": 13,
"ucsName": 14,
"block": 15,

"othertranscriptions": [[3, 'ISO 15919']]
}


