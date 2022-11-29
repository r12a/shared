var spreadsheet = `phnx-phn	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
𐤏	{	ʕ		ʕ	ʿ		Lo		consonant			ʿayin	U+1090F: PHOENICIAN LETTER AIN	
𐤀	}	ʔ		ʔ	ʾ		Lo		consonant			ʾālep	U+10900: PHOENICIAN LETTER ALF	
𐤟	•			•	•		Po		punctuation				U+1091F: PHOENICIAN WORD SEPARATOR	
\u200C	=			ₓ			Cf		zwnj				U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			₊			Cf		zwj				U+200D: ZERO WIDTH JOINER	
\u200E	=			ˡʳᵐ			Cf		lrm				U+200E: LEFT-TO-RIGHT MARK	
\u200F	=			ʳˡᵐ			Cf		rlm				U+200F: RIGHT-TO-LEFT MARK	
\u061C	=			ᵃˡᵐ			Cf		alm				U+061C: ARABIC LETTER MARK	
\u2067	=			ʳˡⁱ			Cf		rli				U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf		lri				U+2066: LEFT-TO-RIGHT ISOLATE	
\u202B	=			ʳˡᵉ			Cf		rle				U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf		lre				U+202A: LEFT-TO-RIGHT EMBEDDING	
\u2069	=			ᵖᵈⁱ			Cf		pdi				U+2069: POP DIRECTIONAL ISOLATE	
\u202C	=			ᵖᵈᶠ			Cf		pdf				U+202C: POP DIRECTIONAL FORMATTING	
𐤁	b	b		b	b		Lo		consonant			bēt	U+10901: PHOENICIAN LETTER BET	
𐤃	d	d		d	d		Lo		consonant			dālet	U+10903: PHOENICIAN LETTER DELT	
𐤂	g	ɡ		g	g		Lo		consonant			gīml	U+10902: PHOENICIAN LETTER GAML	
𐤇	H	ħ		ħ	ḥ		Lo		consonant			ḥēt	U+10907: PHOENICIAN LETTER HET	
𐤄	h	h		h	h		Lo		consonant			hē	U+10904: PHOENICIAN LETTER HE	
𐤊	k	k		k	k		Lo		consonant			kāp	U+1090A: PHOENICIAN LETTER KAF	
𐤋	l	l		l	l		Lo		consonant			lāmed	U+1090B: PHOENICIAN LETTER LAMD	
𐤌	m	m		m	m		Lo		consonant			mēm	U+1090C: PHOENICIAN LETTER MEM	
𐤍	n	n		n	n		Lo		consonant			nūn	U+1090D: PHOENICIAN LETTER NUN	
𐤐	p	p		p	p		Lo		consonant			pē	U+10910: PHOENICIAN LETTER PE	
𐤒	q	q		q	q		Lo		consonant			qōp	U+10912: PHOENICIAN LETTER QOF	
𐤓	r	r		r	r		Lo		consonant			rēš	U+10913: PHOENICIAN LETTER ROSH	
𐤎	s	s		s	s		Lo		consonant			sāmek	U+1090E: PHOENICIAN LETTER SEMK	
𐤑	S	sˤ		sˤ	ṣ		Lo		consonant			ṣādē	U+10911: PHOENICIAN LETTER SADE	
𐤔	s	ʃ		ʃ	š		Lo		consonant			šīn	U+10914: PHOENICIAN LETTER SHIN	
𐤕	t	t		t	t		Lo		consonant			tāw	U+10915: PHOENICIAN LETTER TAU	
𐤈	T	tˤ		tˤ	ṭ		Lo		consonant			ṭēt	U+10908: PHOENICIAN LETTER TET	
𐤅	w	w		w	w		Lo		consonant			wāw	U+10905: PHOENICIAN LETTER WAU	
𐤉	y	j		y	y		Lo		consonant			yōd	U+10909: PHOENICIAN LETTER YOD	
𐤆	z	z		z	z		Lo		consonant			zayin	U+10906: PHOENICIAN LETTER ZAI	
														
𐤖				1	1		No		number				U+10916: PHOENICIAN NUMBER ONE	
𐤚				2	2		No		number				U+1091A: PHOENICIAN NUMBER TWO	
𐤛				3	3		No		number				U+1091B: PHOENICIAN NUMBER THREE	
𐤗				1⁰	10		No		number				U+10917: PHOENICIAN NUMBER TEN	
𐤘				2⁰	20		No		number				U+10918: PHOENICIAN NUMBER TWENTY	
𐤙				1₀	100		No		number				U+10919: PHOENICIAN NUMBER ONE HUNDRED	
														
`														
														
latinPanel = 'ɡ ħ ḥ sˤ ṣ ʃ š tˤ ṭ ʔ ʾ'														
														
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
														