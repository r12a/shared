var spreadsheet = `arab-khw	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage			native name	latin name	ucs name	block
ا		ɑː  ə  ɪ  ʊ			āaa  a  i  u		Lo							alif	U+0627: ARABIC LETTER ALEF	
ب		b			b		Lo							be	U+0628: ARABIC LETTER BEH	
پ		p			p		Lo							pe	U+067E: ARABIC LETTER PEH	
ت		t̪			t		Lo							te	U+062A: ARABIC LETTER TEH	
ٹ		ʈ			ṭ		Lo							ṭe	U+0679: ARABIC LETTER TTEH	
ث		s			(s)		Lo							se	U+062B: ARABIC LETTER THEH	
ج		d͡ʒ			j		Lo							jīm	U+062C: ARABIC LETTER JEEM	
چ		t͡ʃ			č		Lo							če	U+0686: ARABIC LETTER TCHEH	
ح		h			(h)		Lo							baṛī he	U+062D: ARABIC LETTER HAH	
خ		x			x		Lo							xe	U+062E: ARABIC LETTER KHAH	
ݯ		ʈ͡ʂ			ç		Lo							çe	U+076F: ARABIC LETTER HAH WITH SMALL ARABIC LETTER TAH AND TWO DOTS	
ݮ		ɖ͡ʐ			ǰ		Lo							ǰīm	U+076E: ARABIC LETTER HAH WITH SMALL ARABIC LETTER TAH BELOW	
څ		t͡s			c		Lo							tse	U+0685: ARABIC LETTER HAH WITH THREE DOTS ABOVE	
ځ		d͡z			dzđ		Lo							dze	U+0681: ARABIC LETTER HAH WITH HAMZA ABOVE	
د		d̪			d		Lo							dāl	U+062F: ARABIC LETTER DAL	
ڈ		ɖ			ḍ		Lo							ḍāl	U+0688: ARABIC LETTER DDAL	
ذ		z			(z)		Lo							zāl	U+0630: ARABIC LETTER THAL	
ر		r			r		Lo							re	U+0631: ARABIC LETTER REH	
ڑ		r~ɫ			ṛ		Lo							ṛe	U+0691: ARABIC LETTER RREH	
ز		z			z		Lo							ze	U+0632: ARABIC LETTER ZAIN	
ژ		ʒ			žzh		Lo							že	U+0698: ARABIC LETTER JEH	
ݱ		ʐ  ʑ			ẓ̌		Lo							ẓ̌e	U+0771: ARABIC LETTER REH WITH SMALL ARABIC LETTER TAH AND TWO DOTS	
س		s			s		Lo							sīn	U+0633: ARABIC LETTER SEEN	
ش		ʃ			šsh		Lo							šīn	U+0634: ARABIC LETTER SHEEN	
ݰ		ʂ  ɕ			ṣ		Lo							ṣīn	U+0770: ARABIC LETTER SEEN WITH SMALL ARABIC LETTER TAH AND TWO DOTS	
ص		s			(s)		Lo							su'ād	U+0635: ARABIC LETTER SAD	
ض		z			(z)		Lo							zu'ād	U+0636: ARABIC LETTER DAD	
ط		t			(t)		Lo							to'e	U+0637: ARABIC LETTER TAH	
ظ		z			(z)		Lo							zo'e	U+0638: ARABIC LETTER ZAH	
ع		ʔ  ə  ɪ  ʊ			  a  i  u		Lo							ain	U+0639: ARABIC LETTER AIN	
غ		ɣ			ǧgh		Lo							ǧain	U+063A: ARABIC LETTER GHAIN	
ف		f			f		Lo							fe	U+0641: ARABIC LETTER FEH	
ق		q			q		Lo							qāf	U+0642: ARABIC LETTER QAF	
ک		k			k		Lo							kāf	U+06A9: ARABIC LETTER KEHEH	
گ		ɡ			g		Lo							gāf	U+06AF: ARABIC LETTER GAF	
ل		l			l		Lo							lām	U+0644: ARABIC LETTER LAM	
ڵ		lʲ			ł		Lo							łām	U+06B5: ARABIC LETTER LAM WITH SMALL V	
م		m			m		Lo							mīm	U+0645: ARABIC LETTER MEEM	
ن		n			n		Lo							nūn	U+0646: ARABIC LETTER NOON	
ں		◌̃			_̃		Lo							nūn ǧunnā	U+06BA: ARABIC LETTER NOON GHUNNA	
و		ʋ  oː  ɔ uː			w  o  au  ū		Lo							wā'o	U+0648: ARABIC LETTER WAW	
ہ		h			h		Lo							čoṭī he	U+06C1: ARABIC LETTER HEH GOAL	
ھ		ʰ			_h		Lo							do čašmī he	U+06BE: ARABIC LETTER HEH DOACHASHMEE	
ء		ʔ					Lo							hamza	U+0621: ARABIC LETTER HAMZA	
ى		j iː			y  ī		Lo							khowar ye	U+0649: ARABIC LETTER ALEF MAKSURA	
ے		ɛː  eː			ai e		Lo							barī ye	U+06D2: ARABIC LETTER YEH BARREE	
`																
																
latinPanel = 'đ d̪ d͡z d͡ʒ eː iː lʲ oː t̪ t͡ʃ uː ç ā č ī ł š ū ž ǧ ǰ ɑː ɔ ɕ ɖ ɖ͡ʐ ə ɛː ɡ ɣ ɪ ɫ ʂ ʃ ʈ ʈ͡ʂ ʊ ʋ ʐ ʑ ʒ ʔ ʰ ḍ ṛ ṣ ṭ ẓ̌ ◌̃'																
																
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