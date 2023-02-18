var spreadsheet = `arab-oru	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
ا		ɑ			ā		Lo					alif	U+0627: ARABIC LETTER ALEF	
آ		ɑ			ā		Lo					alif	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	
ب		b			b		Lo					be	U+0628: ARABIC LETTER BEH	
پ		p			p		Lo					pe	U+067E: ARABIC LETTER PEH	
ت		t̪			t		Lo					te	U+062A: ARABIC LETTER TEH	
ټ		ʈ			ṭ		Lo					ṭe	U+067C: ARABIC LETTER TEH WITH RING	
ث		s			s		Lo					se	U+062B: ARABIC LETTER THEH	
ج		d͡ʒ			j		Lo					jim	U+062C: ARABIC LETTER JEEM	
چ		t͡ʃ			č		Lo					če	U+0686: ARABIC LETTER TCHEH	
ح		h			h		Lo					he	U+062D: ARABIC LETTER HAH	
خ		x			x		Lo					xe	U+062E: ARABIC LETTER KHAH	
څ		t͡s			ts		Lo					tse	U+0685: ARABIC LETTER HAH WITH THREE DOTS ABOVE	
ځ		d͡z			dz		Lo					dzim	U+0681: ARABIC LETTER HAH WITH HAMZA ABOVE	
د		d̪			d		Lo					dāl	U+062F: ARABIC LETTER DAL	
ډ		ɖ			ḍ		Lo					ḍāl	U+0689: ARABIC LETTER DAL WITH RING	
ذ		z			z		Lo					zāl	U+0630: ARABIC LETTER THAL	
ر		r			r		Lo					re	U+0631: ARABIC LETTER REH	
ڒ		r̝			ř		Lo					xře	U+0692: ARABIC LETTER REH WITH SMALL V	
ړ		ɽ			ṛ		Lo					ṛe	U+0693: ARABIC LETTER REH WITH RING	
ز		z			z		Lo					ze	U+0632: ARABIC LETTER ZAIN	
ژ		ʒ			ž		Lo					že	U+0698: ARABIC LETTER JEH	
ݫ		ʑ			ź		Lo					źe	U+076B: ARABIC LETTER REH WITH TWO DOTS VERTICALLY ABOVE	
س		s			s		Lo					sin	U+0633: ARABIC LETTER SEEN	
ش		ʃ			š		Lo					šin	U+0634: ARABIC LETTER SHEEN	
ݭ		ɕ			ś		Lo					śin	U+076D: ARABIC LETTER SEEN WITH TWO DOTS VERTICALLY ABOVE	
ص		s			s		Lo					swād	U+0635: ARABIC LETTER SAD	
ض		z			z		Lo					zwād	U+0636: ARABIC LETTER DAD	
ط		t			t		Lo					twe	U+0637: ARABIC LETTER TAH	
ظ		z			z		Lo					zwe	U+0638: ARABIC LETTER ZAH	
ع		ɑ			ā		Lo					ayn	U+0639: ARABIC LETTER AIN	
غ		ɣ			ğ		Lo					ğayn	U+063A: ARABIC LETTER GHAIN	
ف		f			f		Lo					fe	U+0641: ARABIC LETTER FEH	
ق		q / k			q		Lo					qāp	U+0642: ARABIC LETTER QAF	
ک		k			k		Lo					kāp	U+06A9: ARABIC LETTER KEHEH	
ګ		ɡ			g		Lo					gāp	U+06AB: ARABIC LETTER KAF WITH RING	
ل		l			l		Lo					lām	U+0644: ARABIC LETTER LAM	
م		m			m		Lo					mim	U+0645: ARABIC LETTER MEEM	
ن		n			n		Lo					nun	U+0646: ARABIC LETTER NOON	
ڼ		ɳ			ṇ		Lo					ṇun	U+06BC: ARABIC LETTER NOON WITH RING	
ں		 ̃			̃		Lo					nūn ğunna	U+06BA: ARABIC LETTER NOON GHUNNA	
و		w u o			w u o		Lo					wāw	U+0648: ARABIC LETTER WAW	
ه		h a			h a		Lo					he	U+0647: ARABIC LETTER HEH	
ۀ		ə			ə		Lo					kajīra he	U+06C0: ARABIC LETTER HEH WITH YEH ABOVE	
ي		j i			y i		Lo					ye	U+064A: ARABIC LETTER YEH	
ې		e			e		Lo					ye	U+06D0: ARABIC LETTER E	
ی		ai j			ay y		Lo					ye	U+06CC: ARABIC LETTER FARSI YEH	
ئ		əi			əi		Lo					ye	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	
`														
														
latinPanel = 'd̪ d͡z d͡ʒ r̝ t̪ t͡ʃ ā č ğ ř ś š ź ž ɑ ɕ ɖ ə ɡ ɣ ɳ ɽ ʃ ʈ ʑ ʒ ̃ ḍ ṇ ṛ ṭ'														
														
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
														
//othertranscriptions: [[5 'Latin']]														
}														