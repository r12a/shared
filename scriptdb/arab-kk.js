var spreadsheet = `arab-kk	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name		block
ا		ɑ			a		Lo				әліп	älıf	U+0627: ARABIC LETTER ALEF	А а	
ٵ		æ			ä		Lo				һәмзә-әліп	hämzä-älıp	U+0675: ARABIC LETTER HIGH HAMZA ALEF	Ә ә	
ب		b			b		Lo				ба	ba	U+0628: ARABIC LETTER BEH	Б б	
ۆ		v			v		Lo				уау құсбелгі	uau qūsbelgı	U+06C6: ARABIC LETTER OE	В в	
گ		ɡ			g		Lo				гәф	gäf	U+06AF: ARABIC LETTER GAF	Г г	
غ		ʁ			ğ		Lo						U+063A: ARABIC LETTER GHAIN	Ғ ғ	
ع		ɢ~ʁ					Lo				аин	ain	U+0639: ARABIC LETTER AIN	Ғғ 	
د		d			d		Lo				дәл	däl	U+062F: ARABIC LETTER DAL	Д д	
ە		jɪ			e		Lo				һә	hä	U+06D5: ARABIC LETTER AE	Е е	
يو		jo			io								U+064A U+0648: ARABIC LETTER YEH, LETTER WAW	Ё ё	
ج		ʑ  d͡ʑ			j		Lo				жим	jim	U+062C: ARABIC LETTER JEEM	Ж ж	
ز		z			z		Lo				заин	zain	U+0632: ARABIC LETTER ZAIN	З з	
ٸ		ɪj  əj			i		Lo						U+0678: ARABIC LETTER HIGH HAMZA YEH	И и	
ي		j			i		Lo				я екі ноқат	ia ekı noqat	U+064A: ARABIC LETTER YEH	Й й	
ك		k			k		Lo				кәф	käf	U+0643: ARABIC LETTER KAF	К к	
ق		q ʁ  χ			q		Lo				қаф	qaf	U+0642: ARABIC LETTER QAF	Қ қ	
ل		l			l		Lo				ләм	läm	U+0644: ARABIC LETTER LAM	Л л	
م		m			m		Lo				мим	mim	U+0645: ARABIC LETTER MEEM	М м	
ن		n			n		Lo				нун	nun	U+0646: ARABIC LETTER NOON	Н н	
ڭ		ŋ			ñ		Lo				кәф үш ноқат	käf üş noqat	U+06AD: ARABIC LETTER NG	Ң ң	
و		o			o		Lo				уау	uau	U+0648: ARABIC LETTER WAW	О о	
ٶ		ø̞			ö		Lo				һәмзә-уау	hämzä-uau	U+0676: ARABIC LETTER HIGH HAMZA WAW	Ө ө	
پ		p			p		Lo				па	pa	U+067E: ARABIC LETTER PEH	П п	
ر		ɾ			r		Lo				ра	ra	U+0631: ARABIC LETTER REH	Р р	
س		s			s		Lo				син	sin	U+0633: ARABIC LETTER SEEN	С с	
ت		t			t		Lo				та	ta	U+062A: ARABIC LETTER TEH	Т т	
ۋ		w  ʊw  ʏw			u		Lo				уау үш ноқат	uau üş noqat	U+06CB: ARABIC LETTER VE	У у	
ۇ		ʊ			ū		Lo				уау дамма	uau damma	U+06C7: ARABIC LETTER U	Ұ ұ	
ٷ		ʏ			ü		Lo				һәмзә-уау дамма	hämzä-uau damma	U+0677: ARABIC LETTER U WITH HAMZA ABOVE	Ү ү	
ف		f			f		Lo				фа	fa	U+0641: ARABIC LETTER FEH	Ф ф	
ح		q  χ			h		Lo				ха	xa	U+062D: ARABIC LETTER HAH	Х х	
ھ		h			h		Lo				һә екі көз	hä ekı köz	U+06BE: ARABIC LETTER HEH DOACHASHMEE	Һ һ	
تس		t͡s  s			ts								U+062A U+0633: ARABIC LETTER TEH, LETTER SEEN	Ц ц	
چ		t͡ʃ			tş		Lo				ха үш ноқат	ha üş noqat	U+0686: ARABIC LETTER TCHEH	Ч ч	
ش		ʃ			ş		Lo				шин	şin	U+0634: ARABIC LETTER SHEEN	Ш ш	
شش		ʃtʃ			ştş								U+0634 U+0634: ARABIC LETTER SHEEN, LETTER SHEEN	Щ щ	
ى		ə  ɯ			y		Lo				я	ia	U+0649: ARABIC LETTER ALEF MAKSURA	Ы ы	
ٸ		ɪ			ı		Lo				һәмзә-я	hämzä-ia	U+0678: ARABIC LETTER HIGH HAMZA YEH	І і	
ە		ɛ			e		Lo						U+06D5: ARABIC LETTER AE	Э э	
يۋ		jʏw  jʊw			iu								U+064A U+06CB: ARABIC LETTER YEH, LETTER VE	Ю ю	
يا		jɑ   jæ			ia								U+064A U+0627: ARABIC LETTER YEH, LETTER ALEF	Я я	
ء							Lo				һәмзә	hämzä	U+0621: ARABIC LETTER HAMZA	Ъъ, Ьь 	
`															
															
latinPanel = 'ä ɑ æ ɡ ʁ ɢ ʑ d͡ʑ χ ŋ ø̞ ɾ ʊ ʏ t͡s t͡ʃ ʃ ə ɯ ɪ ɛ ğ ñ ö ū ü ş ı'															
															
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