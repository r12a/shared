var spreadsheet = `
а	a	a	a	a	a	vowel	a	а			А	U+0430: CYRILLIC SMALL LETTER A
б	b	b	b	b	b bʲ	consonant	bɛ	бэ			Б	U+0431: CYRILLIC SMALL LETTER BE
в	v	v	v	v	v vʲ	consonant	vɛ	вэ			В	U+0432: CYRILLIC SMALL LETTER VE
г	g	g	g	g	ɡ ɡʲ	consonant	ɡɛ	гэ			Г	U+0433: CYRILLIC SMALL LETTER GHE
д	d	d	d	d	d dʲ	consonant	dɛ	дэ			Д	U+0434: CYRILLIC SMALL LETTER DE
е	e	e	e	e	je ʲe e	vowel	je	е			Е	U+0435: CYRILLIC SMALL LETTER IE
ж	z	ʐ	z	ž	ʐ	consonant	ʐɛ	жэ			Ж	U+0436: CYRILLIC SMALL LETTER ZHE
з	z	z	z	z	z zʲ	consonant	zɛ	зэ			З	U+0437: CYRILLIC SMALL LETTER ZE
и	i	i	i	i	i ʲi ɨ	vowel	i	и			И	U+0438: CYRILLIC SMALL LETTER I
й	y	y	ĭ	ī	j	vowel	i kratkəjɪ	и краткое			Й	U+0439: CYRILLIC SMALL LETTER SHORT I
к	k	k	k	k	k kʲ	consonant	ka	ка			К	U+043A: CYRILLIC SMALL LETTER KA
л	l	l	l	l	ɫ lʲ	consonant	ɛlʲ	эль			Л	U+043B: CYRILLIC SMALL LETTER EL
м	m	m	m	m	m mʲ	consonant	ɛm	эм			М	U+043C: CYRILLIC SMALL LETTER EM
н	n	n	n	n	n nʲ	consonant	ɛn	эн			Н	U+043D: CYRILLIC SMALL LETTER EN
о	o	o	o	o	o	vowel	o	о			О	U+043E: CYRILLIC SMALL LETTER O
п	p	p	p	p	p pʲ	consonant	pɛ	пэ			П	U+043F: CYRILLIC SMALL LETTER PE
р	r	r	r	r	r rʲ	consonant	ɛr	эр			Р	U+0440: CYRILLIC SMALL LETTER ER
с	s	s	s	s	s sʲ	consonant	ɛs	эс			С	U+0441: CYRILLIC SMALL LETTER ES
т	t	t	t	t	t tʲ	consonant	tɛ	тэ			Т	U+0442: CYRILLIC SMALL LETTER TE
у	u	u	u	u	u	vowel	u	у			У	U+0443: CYRILLIC SMALL LETTER U
ф	f	f	f	f	f fʲ	consonant	ɛf	эф			Ф	U+0444: CYRILLIC SMALL LETTER EF
х	x	x	h	h	x xʲ	consonant	xa	ха			Х	U+0445: CYRILLIC SMALL LETTER HA
ц	t	ʦ	ch	c	ʦ	consonant	ʦɛ	цэ			Ц	U+0446: CYRILLIC SMALL LETTER TSE
ч	t	ʨ	ch	č	ʨ	consonant	ʨɛ	чэ			Ч	U+0447: CYRILLIC SMALL LETTER CHE
ш	s	ʂ	s	š	ʂ	consonant	ʂa	шæ			Ш	U+0448: CYRILLIC SMALL LETTER SHA
щ	s	ʂ̂	s	ŝ	ɕɕ ɕʨ	consonant	ɕɕæ	ща			Щ	U+0449: CYRILLIC SMALL LETTER SHCHA
ъ	"	ʺ	"	ʺ 	∅	hard sign	tvʲɵrdɨj znak	твёрдый знак			Ъ	U+044A: CYRILLIC SMALL LETTER HARD SIGN
ы	i	ɨ	y	y	ɨ	vowel	ɨ	ы			Ы	U+044B: CYRILLIC SMALL LETTER YERU
ь	ʹ	ʹ		ʹ	ʲ	soft sign	ˈmʲæxʲkʲɪj znak	мягкий знак			Ь	U+044C: CYRILLIC SMALL LETTER SOFT SIGN
э	e	ɛ	e	è 	ɛ	vowel	ɛ	э			Э	U+044D: CYRILLIC SMALL LETTER E
ю	j	jᵘ	u	û	ju	vowel	ju	ю			Ю	U+044E: CYRILLIC SMALL LETTER YU
я	j	jᵃ	a	â	ja	vowel	ja	я			Я	U+044F: CYRILLIC SMALL LETTER YA
												
А	a	A	a	a	a	vowel	a	а		а		U+0410: CYRILLIC CAPITAL LETTER A
Б	b	B	b	b	b bʲ	consonant	bɛ	бэ		б		U+0411: CYRILLIC CAPITAL LETTER BE
В	v	V	v	v	vvʲ	consonant	vɛ	вэ		в		U+0412: CYRILLIC CAPITAL LETTER VE
Г	g	G	g	g	ɡɡʲ	consonant	ɡɛ	гэ		г		U+0413: CYRILLIC CAPITAL LETTER GHE
Д	d	D	d	d	d dʲ	consonant	dɛ	дэ		д		U+0414: CYRILLIC CAPITAL LETTER DE
Е	e	E	e	e	je ʲe e	vowel	je	е		е		U+0415: CYRILLIC CAPITAL LETTER IE
Ж	z	ʐ	z	ž	ʐ	consonant	ʐɛ	жэ		ж		U+0416: CYRILLIC CAPITAL LETTER ZHE
З	z	Z	z	z	z zʲ	consonant	zɛ	зэ		з		U+0417: CYRILLIC CAPITAL LETTER ZE
И	i	I	i	i	i ʲi ɨ	vowel	i	и		и		U+0418: CYRILLIC CAPITAL LETTER I
Й	y	Y	ĭ	ī	j	vowel	i kratkəjɪ	и краткое		й		U+0419: CYRILLIC CAPITAL LETTER SHORT I
К	k	K	k	k	k kʲ	consonant	ka	ка		к		U+041A: CYRILLIC CAPITAL LETTER KA
Л	l	L	l	l	ɫ lʲ	consonant	ɛlʲ	эль		л		U+041B: CYRILLIC CAPITAL LETTER EL
М	m	M	m	m	m mʲ	consonant	ɛm	эм		м		U+041C: CYRILLIC CAPITAL LETTER EM
Н	n	N	n	n	n nʲ	consonant	ɛn	эн		н		U+041D: CYRILLIC CAPITAL LETTER EN
О	o	O	o	o	o	vowel	o	о		о		U+041E: CYRILLIC CAPITAL LETTER O
П	p	P	p	p	p pʲ	consonant	pɛ	пэ		п		U+041F: CYRILLIC CAPITAL LETTER PE
Р	r	R	r	r	r rʲ	consonant	ɛr	эр		р		U+0420: CYRILLIC CAPITAL LETTER ER
С	s	S	s	s	s sʲ	consonant	ɛs	эс		с		U+0421: CYRILLIC CAPITAL LETTER ES
Т	t	T	t	t	t tʲ	consonant	tɛ	тэ		т		U+0422: CYRILLIC CAPITAL LETTER TE
У	u	U	u	u	u	vowel	u	у		у		U+0423: CYRILLIC CAPITAL LETTER U
Ф	f	F	f	f	f fʲ	consonant	ɛf	эф		ф		U+0424: CYRILLIC CAPITAL LETTER EF
Х	x	X	h	h	x xʲ	consonant	xa	ха		х		U+0425: CYRILLIC CAPITAL LETTER HA
Ц	t	ʦ	ch	c	ʦ	consonant	ʦɛ	цэ		ц		U+0426: CYRILLIC CAPITAL LETTER TSE
Ч	t	ʨ	ch	č	ʨ	consonant	ʨɛ	чэ		ч		U+0427: CYRILLIC CAPITAL LETTER CHE
Ш	s	Ʂ	s	š	ʂ	consonant	ʂa	шæ		ш		U+0428: CYRILLIC CAPITAL LETTER SHA
Щ	s	Ʂ̂	s	ŝ	ɕɕ ɕʨ	consonant	ɕɕæ	ща		щ		U+0429: CYRILLIC CAPITAL LETTER SHCHA
Ъ	"	ʺ	"	ʺ 		hard sign	tvʲɵrdɨj znak	твёрдый знак		ъ		U+042A: CYRILLIC CAPITAL LETTER HARD SIGN
Ы	i	Ɨ	y	y	ɨ	vowel	ɨ	ы		ы		U+042B: CYRILLIC CAPITAL LETTER YERU
Ь	ʹ	ʹ		ʹ	ʲ	soft sign	ˈmʲæxʲkʲɪj znak	мягкий знак		ь		U+042C: CYRILLIC CAPITAL LETTER SOFT SIGN
Э	e	Ɛ	e	è 	ɛ	vowel	ɛ	э		э		U+042D: CYRILLIC CAPITAL LETTER E
Ю	j	Û	u	Û	ju	vowel	ju	ю		ю		U+042E: CYRILLIC CAPITAL LETTER YU
Я	j	Â	a	Â	ja	vowel	ja	я		я		U+042F: CYRILLIC CAPITAL LETTER YA
												
												
												
												
												
												
ӑ			a	ă		vowel						U+04D1: CYRILLIC SMALL LETTER A WITH BREVE
ӓ			a	ä		vowel						U+04D3: CYRILLIC SMALL LETTER A WITH DIAERESIS
ӕ			a	æ		vowel						U+04D5: CYRILLIC SMALL LIGATURE A IE
ӗ			a	ĕ		vowel						U+04D7: CYRILLIC SMALL LETTER IE WITH BREVE
ѐ						vowel						U+0450: CYRILLIC SMALL LETTER IE WITH GRAVE
ё	j	jᵒ	e	ë	jo ʲo	vowel	ё	jo				U+0451: CYRILLIC SMALL LETTER IO
ә			e	a̋		vowel						U+04D9: CYRILLIC SMALL LETTER SCHWA
ӛ			e	à		vowel						U+04DB: CYRILLIC SMALL LETTER SCHWA WITH DIAERESIS
і		ī	i	ì		vowel						U+0456: CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I
ї			i	ï		vowel						U+0457: CYRILLIC SMALL LETTER YI
ѝ						vowel						U+045D: CYRILLIC SMALL LETTER I WITH GRAVE
ҋ						vowel						U+048B: CYRILLIC SMALL LETTER SHORT I WITH TAIL
ӣ			i	ī		vowel						U+04E3: CYRILLIC SMALL LETTER I WITH MACRON
ӥ			i	î		vowel						U+04E5: CYRILLIC SMALL LETTER I WITH DIAERESIS
ӧ			o	ö		vowel						U+04E7: CYRILLIC SMALL LETTER O WITH DIAERESIS
ө			o	ô		vowel						U+04E9: CYRILLIC SMALL LETTER BARRED O
ӫ			o	ő		vowel						U+04EB: CYRILLIC SMALL LETTER BARRED O WITH DIAERESIS
ӯ			u	ū		vowel						U+04EF: CYRILLIC SMALL LETTER U WITH MACRON
ӱ			u	ü		vowel						U+04F1: CYRILLIC SMALL LETTER U WITH DIAERESIS
ӳ			u	ű		vowel						U+04F3: CYRILLIC SMALL LETTER U WITH DOUBLE ACUTE
ў			u	ŭ		vowel						U+045E: CYRILLIC SMALL LETTER SHORT U
ү			u	ù		consonant						U+04AF: CYRILLIC SMALL LETTER STRAIGHT U
ұ			u	u̇		consonant						U+04B1: CYRILLIC SMALL LETTER STRAIGHT U WITH STROKE
ӹ			y	ÿ		vowel						U+04F9: CYRILLIC SMALL LETTER YERU WITH DIAERESIS
є			e	ê		consonant						U+0454: CYRILLIC SMALL LETTER UKRAINIAN IE
ӭ						vowel						U+04ED: CYRILLIC SMALL LETTER E WITH DIAERESIS
ѓ			g	ǵ		consonant						U+0453: CYRILLIC SMALL LETTER GJE
ґ						consonant						U+0491: CYRILLIC SMALL LETTER GHE WITH UPTURN
ғ			g	ġ		consonant						U+0493: CYRILLIC SMALL LETTER GHE WITH STROKE
ӷ						consonant						U+04F7: CYRILLIC SMALL LETTER GHE WITH DESCENDER
ҕ			g	ğ		consonant						U+0495: CYRILLIC SMALL LETTER GHE WITH MIDDLE HOOK
җ			z	ž̦		consonant						U+0497: CYRILLIC SMALL LETTER ZHE WITH DESCENDER
ӂ			z	z̆		consonant						U+04C2: CYRILLIC SMALL LETTER ZHE WITH BREVE
ӝ			z	z̄		consonant						U+04DD: CYRILLIC SMALL LETTER ZHE WITH DIAERESIS
ҙ						consonant						U+0499: CYRILLIC SMALL LETTER ZE WITH DESCENDER
ӟ			z	z̈		consonant						U+04DF: CYRILLIC SMALL LETTER ZE WITH DIAERESIS
ӡ			z	ź		consonant						U+04E1: CYRILLIC SMALL LETTER ABKHASIAN DZE
ќ			k	ḱ		consonant						U+045C: CYRILLIC SMALL LETTER KJE
қ			k	k̦		consonant						U+049B: CYRILLIC SMALL LETTER KA WITH DESCENDER
ҝ			k	k̂		consonant						U+049D: CYRILLIC SMALL LETTER KA WITH VERTICAL STROKE
ҟ			k	k̄		consonant						U+049F: CYRILLIC SMALL LETTER KA WITH STROKE
қ			k	k̀		consonant						U+049B: CYRILLIC SMALL LETTER KA WITH DESCENDER
ӄ						consonant						U+04C4: CYRILLIC SMALL LETTER KA WITH HOOK
ӆ						consonant						U+04C6: CYRILLIC SMALL LETTER EL WITH TAIL
љ			i	l̂		consonant						U+0459: CYRILLIC SMALL LETTER LJE
ӎ						consonant						U+04CE: CYRILLIC SMALL LETTER EM WITH TAIL
њ			n	n̂		consonant						U+045A: CYRILLIC SMALL LETTER NJE
ң			n	n̦		consonant						U+04A3: CYRILLIC SMALL LETTER EN WITH DESCENDER
ҥ			n	ṅ		consonant						U+04A5: CYRILLIC SMALL LIGATURE EN GHE
ӈ			n	ň		consonant						U+04C8: CYRILLIC SMALL LETTER EN WITH HOOK
ӊ			n	ṇ		consonant						U+04CA: CYRILLIC SMALL LETTER EN WITH TAIL
һ						consonant						U+04BB: CYRILLIC SMALL LETTER SHHA
ћ						consonant						U+045B: CYRILLIC SMALL LETTER TSHE
ђ						consonant						U+0452: CYRILLIC SMALL LETTER DJE
ҧ			p	ṕ		consonant						U+04A7: CYRILLIC SMALL LETTER PE WITH MIDDLE HOOK
ҏ						consonant						U+048F: CYRILLIC SMALL LETTER ER WITH TICK
ҫ			s	ș		consonant						U+04AB: CYRILLIC SMALL LETTER ES WITH DESCENDER
ҽ			c	c̆		consonant						U+04BD: CYRILLIC SMALL LETTER ABKHASIAN CHE
ҿ			c	c̨̆		consonant						U+04BF: CYRILLIC SMALL LETTER ABKHASIAN CHE WITH DESCENDER
ҭ			t	ț		consonant						U+04AD: CYRILLIC SMALL LETTER TE WITH DESCENDER
ҵ			c	c̄		consonant						U+04B5: CYRILLIC SMALL LIGATURE TE TSE
џ			d	d̂		consonant						U+045F: CYRILLIC SMALL LETTER DZHE
ѕ		ż				consonant						U+0455: CYRILLIC SMALL LETTER DZE
ј						consonant						U+0458: CYRILLIC SMALL LETTER JE
ҩ						consonant						U+04A9: CYRILLIC SMALL LETTER ABKHASIAN HA
ҳ			h	h̦		consonant						U+04B3: CYRILLIC SMALL LETTER HA WITH DESCENDER
ҷ			c	c̦		consonant						U+04B7: CYRILLIC SMALL LETTER CHE WITH DESCENDER
ҹ			c	ĉ		consonant						U+04B9: CYRILLIC SMALL LETTER CHE WITH VERTICAL STROKE
ӌ			c	c̣		consonant						U+04CC: CYRILLIC SMALL LETTER KHAKASSIAN CHE
ӵ			c	c̈		consonant						U+04F5: CYRILLIC SMALL LETTER CHE WITH DIAERESIS
ӏ			|	‡		consonant						U+04CF: CYRILLIC SMALL LETTER PALOCHKA
ҍ						semi-soft sign						U+048D: CYRILLIC SMALL LETTER SEMISOFT SIGN
												
												
ӻ						consonant						U+04FB: CYRILLIC SMALL LETTER GHE WITH STROKE AND HOOK
ӽ						consonant						U+04FD: CYRILLIC SMALL LETTER HA WITH HOOK
ӿ						consonant						U+04FF: CYRILLIC SMALL LETTER HA WITH STROKE
												
												
ԁ						consonant						U+0501: CYRILLIC SMALL LETTER KOMI DE
ԃ						consonant						U+0503: CYRILLIC SMALL LETTER KOMI DJE
ԅ						consonant						U+0505: CYRILLIC SMALL LETTER KOMI ZJE
ԇ						consonant						U+0507: CYRILLIC SMALL LETTER KOMI DZJE
ԉ						consonant						U+0509: CYRILLIC SMALL LETTER KOMI LJE
ԋ						consonant						U+050B: CYRILLIC SMALL LETTER KOMI NJE
ԍ						consonant						U+050D: CYRILLIC SMALL LETTER KOMI SJE
ԏ						consonant						U+050F: CYRILLIC SMALL LETTER KOMI TJE
ԫ						consonant						U+052B: CYRILLIC SMALL LETTER DZZHE
ԭ						consonant						U+052D: CYRILLIC SMALL LETTER DCHE
												
												
ԑ						consonant						U+0511: CYRILLIC SMALL LETTER REVERSED ZE
ԯ						consonant						U+052F: CYRILLIC SMALL LETTER EL WITH DESCENDER
												
												
ԓ						consonant						U+0513: CYRILLIC SMALL LETTER EL WITH HOOK
												
												
ԕ						consonant						U+0515: CYRILLIC SMALL LETTER LHA
ԗ						consonant						U+0517: CYRILLIC SMALL LETTER RHA
ԙ						vowel						U+0519: CYRILLIC SMALL LETTER YAE
												
												
ԛ						consonant						U+051B: CYRILLIC SMALL LETTER QA
ԝ						consonant						U+051D: CYRILLIC SMALL LETTER WE
												
												
ԟ						consonant						U+051F: CYRILLIC SMALL LETTER ALEUT KA
												
												
ԡ						consonant						U+0521: CYRILLIC SMALL LETTER EL WITH MIDDLE HOOK
ԣ						consonant						U+0523: CYRILLIC SMALL LETTER EN WITH MIDDLE HOOK
												
												
ԥ						consonant						U+0525: CYRILLIC SMALL LETTER PE WITH DESCENDER
												
												
ԧ						consonant						U+0527: CYRILLIC SMALL LETTER SHHA WITH DESCENDER
												
												
ԩ						consonant						U+0529: CYRILLIC SMALL LETTER EN WITH LEFT HOOK
												
												
												
ѡ						vowel?						U+0461: CYRILLIC SMALL LETTER OMEGA
ѣ		i͡e				consonant?						U+0463: CYRILLIC SMALL LETTER YAT
ѥ						vowel						U+0465: CYRILLIC SMALL LETTER IOTIFIED E
ѧ		ę				vowel						U+0467: CYRILLIC SMALL LETTER LITTLE YUS
ѩ		i͡ę				vowel						U+0469: CYRILLIC SMALL LETTER IOTIFIED LITTLE YUS
ѫ		ǫ				vowel						U+046B: CYRILLIC SMALL LETTER BIG YUS
ѭ		i͡ǫ				vowel						U+046D: CYRILLIC SMALL LETTER IOTIFIED BIG YUS
ѯ		k͡s				consonant						U+046F: CYRILLIC SMALL LETTER KSI
ѱ		p͡s				consonant						U+0471: CYRILLIC SMALL LETTER PSI
ѳ		ḟ				consonant						U+0473: CYRILLIC SMALL LETTER FITA
ѵ		ẏ				consonant						U+0475: CYRILLIC SMALL LETTER IZHITSA
ѷ						consonant						U+0477: CYRILLIC SMALL LETTER IZHITSA WITH DOUBLE GRAVE ACCENT
ѹ						digraph						U+0479: CYRILLIC SMALL LETTER UK
ѻ						vowel						U+047B: CYRILLIC SMALL LETTER ROUND OMEGA
ѽ						vowel						U+047D: CYRILLIC SMALL LETTER OMEGA WITH TITLO
ѿ						vowel						U+047F: CYRILLIC SMALL LETTER OT
ҁ						consonant?						U+0481: CYRILLIC SMALL LETTER KOPPA
												
												
ᲀ												U+1C80: CYRILLIC SMALL LETTER ROUNDED VE
ᲁ												U+1C81: CYRILLIC SMALL LETTER LONG-LEGGED DE
ᲂ												U+1C82: CYRILLIC SMALL LETTER NARROW O
ᲃ												U+1C83: CYRILLIC SMALL LETTER WIDE ES
ᲄ												U+1C84: CYRILLIC SMALL LETTER TALL TE
ᲅ												U+1C85: CYRILLIC SMALL LETTER THREE-LEGGED TE
ᲆ												U+1C86: CYRILLIC SMALL LETTER TALL HARD SIGN
ᲇ												U+1C87: CYRILLIC SMALL LETTER TALL YAT
ᲈ												U+1C88: CYRILLIC SMALL LETTER UNBLENDED UK
												
												
ꙁ												U+A641: CYRILLIC SMALL LETTER ZEMLYA
ꙃ												U+A643: CYRILLIC SMALL LETTER DZELO
ꙅ												U+A645: CYRILLIC SMALL LETTER REVERSED DZE
ꙇ												U+A647: CYRILLIC SMALL LETTER IOTA
ꙉ												U+A649: CYRILLIC SMALL LETTER DJERV
ꙋ												U+A64B: CYRILLIC SMALL LETTER MONOGRAPH UK
ꙍ												U+A64D: CYRILLIC SMALL LETTER BROAD OMEGA
ꙏ												U+A64F: CYRILLIC SMALL LETTER NEUTRAL YER
ꙑ												U+A651: CYRILLIC SMALL LETTER YERU WITH BACK YER
ꙓ												U+A653: CYRILLIC SMALL LETTER IOTIFIED YAT
ꙕ												U+A655: CYRILLIC SMALL LETTER REVERSED YU
ꙗ												U+A657: CYRILLIC SMALL LETTER IOTIFIED A
ꙙ												U+A659: CYRILLIC SMALL LETTER CLOSED LITTLE YUS
ꙛ												U+A65B: CYRILLIC SMALL LETTER BLENDED YUS
ꙝ												U+A65D: CYRILLIC SMALL LETTER IOTIFIED CLOSED LITTLE YUS
ꙟ												U+A65F: CYRILLIC SMALL LETTER YN
ꙡ												U+A661: CYRILLIC SMALL LETTER REVERSED TSE
ꙣ												U+A663: CYRILLIC SMALL LETTER SOFT DE
ꙥ												U+A665: CYRILLIC SMALL LETTER SOFT EL
ꙧ												U+A667: CYRILLIC SMALL LETTER SOFT EM
ꙩ												U+A669: CYRILLIC SMALL LETTER MONOCULAR O
ꙫ												U+A66B: CYRILLIC SMALL LETTER BINOCULAR O
ꙭ												U+A66D: CYRILLIC SMALL LETTER DOUBLE MONOCULAR O
ꙮ												U+A66E: CYRILLIC LETTER MULTIOCULAR O
ꚙ												U+A699: CYRILLIC SMALL LETTER DOUBLE O
ꚛ												U+A69B: CYRILLIC SMALL LETTER CROSSED O
												
												
ꚁ												U+A681: CYRILLIC SMALL LETTER DWE
ꚃ												U+A683: CYRILLIC SMALL LETTER DZWE
ꚅ												U+A685: CYRILLIC SMALL LETTER ZHWE
ꚇ												U+A687: CYRILLIC SMALL LETTER CCHE
ꚉ												U+A689: CYRILLIC SMALL LETTER DZZE
ꚋ												U+A68B: CYRILLIC SMALL LETTER TE WITH MIDDLE HOOK
ꚍ												U+A68D: CYRILLIC SMALL LETTER TWE
ꚏ												U+A68F: CYRILLIC SMALL LETTER TSWE
ꚑ												U+A691: CYRILLIC SMALL LETTER TSSE
ꚓ												U+A693: CYRILLIC SMALL LETTER TCHE
ꚕ												U+A695: CYRILLIC SMALL LETTER HWE
ꚗ												U+A697: CYRILLIC SMALL LETTER SHWE
												
												
ꙿ												U+A67F: CYRILLIC PAYEROK
												
												
꙳												U+A673: SLAVONIC ASTERISK
꙾												U+A67E: CYRILLIC KAVYKA

`

var cols = {
"key":1,
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 8,
"nameLoc": 7,
"numLoc": 0,
"statusLoc": 9,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":10,
"uc":11,
"transcription":4,
"ucsName":12,

"othertranscriptions": [[4, 'ISO 9:1995']]
}