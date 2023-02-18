var spreadsheet = `arab-az	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name		block
ا		 ɑ 			a		Lo						U+0627: ARABIC LETTER ALEF	A a	
آ		 ɑ 			a		Lo						U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	A a	
ب		 b 			b		Lo						U+0628: ARABIC LETTER BEH	Б б	
ج		d͡ʒ			c		Lo						U+062C: ARABIC LETTER JEEM	Ҹ ҹ	
چ		t͡ʃ			ç		Lo						U+0686: ARABIC LETTER TCHEH	Ч ч	
د		 d 			d		Lo						U+062F: ARABIC LETTER DAL	Д д	
ائ		 e 			e								U+0627 U+0626: ARABIC LETTER ALEF, LETTER YEH WITH HAMZA ABOVE	е э	
اَ		 æ 			ə								U+0627 U+064E: ARABIC LETTER ALEF, FATHA	Ə ə	
ٱ		 æ 			ə		Lo						U+0671: ARABIC LETTER ALEF WASLA	Ə ə	
ه		 æ 			ə		Lo						U+0647: ARABIC LETTER HEH	Ə ə	
ف		 f 			f		Lo						U+0641: ARABIC LETTER FEH	Ф ф	
گ		 ɟ 			g		Lo						U+06AF: ARABIC LETTER GAF	Ҝ ҝ	
غ		 ɣ 			ğ		Lo						U+063A: ARABIC LETTER GHAIN	Ғ ғ	
ح		 h 			h		Lo						U+062D: ARABIC LETTER HAH	Һ һ	
ه		 h 			h		Lo						U+0647: ARABIC LETTER HEH	Һ һ	
خ		 x 			x		Lo						U+062E: ARABIC LETTER KHAH	X x	
اؽ		 ɯ 			ı								U+0627 U+063D: ARABIC LETTER ALEF, LETTER FARSI YEH WITH INVERTED V	Ы ы	
ای		 ɪ 			i								U+0627 U+06CC: ARABIC LETTER ALEF, LETTER FARSI YEH	И и	
ژ		 ʒ 			j		Lo						U+0698: ARABIC LETTER JEH	Ж ж	
ک		 c ç k 			k		Lo						U+06A9: ARABIC LETTER KEHEH	К к	
ق		 ɡ 			q		Lo						U+0642: ARABIC LETTER QAF	Г г	
ل		 l 			l		Lo						U+0644: ARABIC LETTER LAM	Л л	
م		 m 			m		Lo						U+0645: ARABIC LETTER MEEM	М м	
ن		 n 			n		Lo						U+0646: ARABIC LETTER NOON	Н н	
وْ		 o 			o								U+0648 U+0652: ARABIC LETTER WAW, SUKUN	O o	
ؤ		 œ 			ö		Lo						U+0624: ARABIC LETTER WAW WITH HAMZA ABOVE	Ɵ ɵ	
پ		 p 			p		Lo						U+067E: ARABIC LETTER PEH	П п	
ر		 r 			r		Lo						U+0631: ARABIC LETTER REH	Р р	
س		 s 			s		Lo						U+0633: ARABIC LETTER SEEN	С с	
ث		 s 			s		Lo						U+062B: ARABIC LETTER THEH	С с	
ص		 s 			s		Lo						U+0635: ARABIC LETTER SAD	С с	
ش		 ʃ 			ş		Lo						U+0634: ARABIC LETTER SHEEN	Ш ш	
ت		 t 			t		Lo						U+062A: ARABIC LETTER TEH	Т т	
ط		 t 			t		Lo						U+0637: ARABIC LETTER TAH	Т т	
ۇ		 u 			u		Lo						U+06C7: ARABIC LETTER U	У у	
ۆ		 y 			ü		Lo						U+06C6: ARABIC LETTER OE	Ү ү	
و		 v 			v		Lo						U+0648: ARABIC LETTER WAW	В в	
ی		 j 			y		Lo						U+06CC: ARABIC LETTER FARSI YEH	Ј ј	
یا		 jɑ 			ya								U+06CC U+0627: ARABIC LETTER FARSI YEH, LETTER ALEF	ЈА jа	
یئ		 je 			ye								U+06CC U+0626: ARABIC LETTER FARSI YEH, LETTER YEH WITH HAMZA ABOVE	ЈЕ је	
ئ		 e 			e		Lo						U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE		
یوْ		 jo 			yo								U+06CC U+0648 U+0652: ARABIC LETTER FARSI YEH, LETTER WAW, SUKUN	ЈО јо	
یۇ		 ju 			yu								U+06CC U+06C7: ARABIC LETTER FARSI YEH, LETTER U	ЈУ ју	
ز		 z 			z		Lo						U+0632: ARABIC LETTER ZAIN	З з	
ذ		 z 			z		Lo						U+0630: ARABIC LETTER THAL	З з	
ض		 z 			z		Lo						U+0636: ARABIC LETTER DAD	З з	
ظ		 z 			z		Lo						U+0638: ARABIC LETTER ZAH	З з	
`															
															
latinPanel = 'ɑ d͡ʒ t͡ʃ æ ɟ ɣ ɯ ɪ ʒ ç œ ʃ ç ə ğ ı ö ş ü'															
															
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