var spreadsheet = `arab-ky	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name		block
ا		ɑ			a		Lo		vowel		Алип		U+0627: ARABIC LETTER ALEF	А а	
ب		b			b		Lo		consonant		Бээ		U+0628: ARABIC LETTER BEH	Б б	
ۋ		v~w			v		Lo		consonant		V v		U+06CB: ARABIC LETTER VE	В в	
ع		ɢ~ʁ			gh		Lo		consonant		Gh gh		U+0639: ARABIC LETTER AIN	Г г	
گ		ɡ			g		Lo		consonant		G g		U+06AF: ARABIC LETTER GAF	Гь гь	
د		d			d		Lo		consonant		Дал		U+062F: ARABIC LETTER DAL	Д д	
ج		d͡ʒ			j dj		Lo		consonant		Жым		U+062C: ARABIC LETTER JEEM	Ж ж	
ز		z			z		Lo		consonant		Z z		U+0632: ARABIC LETTER ZAIN	З з	
ى		i~ɯ			ı i		Lo		vowel		I ı/ İ i		U+0649: ARABIC LETTER ALEF MAKSURA	и ы	
ي		j			y		Lo		consonant		Y y		U+064A: ARABIC LETTER YEH	Й й	
ق		q			q		Lo		consonant		Q q		U+0642: ARABIC LETTER QAF	К к	
ك		k			k		Lo		consonant		K k		U+0643: ARABIC LETTER KAF	Кь кь	
ل		l~ɫ			l		Lo		consonant		лам		U+0644: ARABIC LETTER LAM	Л л	
م		m			m		Lo		consonant		M m		U+0645: ARABIC LETTER MEEM	М м	
ن		n			n		Lo		consonant		N n		U+0646: ARABIC LETTER NOON	Н н	
ڭ		ŋ~ɴ			ng		Lo		consonant		Ng ng		U+06AD: ARABIC LETTER NG	Ң ң	
و		o			o		Lo		vowel		O o		U+0648: ARABIC LETTER WAW	О о	
ۅ		ø			ö		Lo		vowel		Ö ö		U+06C5: ARABIC LETTER KIRGHIZ OE	Ө ө	
پ		p			p		Lo		consonant		Пээ		U+067E: ARABIC LETTER PEH	П п	
ر		r			r		Lo		consonant		R r		U+0631: ARABIC LETTER REH	Р р	
س		s			s		Lo		consonant		S s		U+0633: ARABIC LETTER SEEN	С с	
ت		t			t		Lo		consonant		Тээ		U+062A: ARABIC LETTER TEH	Т т	
ۇ		u			u		Lo		vowel		U u		U+06C7: ARABIC LETTER U	У у	
ۉ		y			ü		Lo		vowel		Ü ü		U+06C9: ARABIC LETTER KIRGHIZ YU	Ү ү	
ف		ɸ			f		Lo		consonant		F f		U+0641: ARABIC LETTER FEH	Ф ф	
ح		χ~q			h ĥ x		Lo		consonant		H h / X x		U+062D: ARABIC LETTER HAH	Х х	
چ		t͡ʃ			ch		Lo		consonant		Чым		U+0686: ARABIC LETTER TCHEH	Ч ч	
ش		ʃ			sh		Lo		consonant		Sh sh		U+0634: ARABIC LETTER SHEEN	Ш ш	
ە		e			e		Lo		vowel		E e		U+06D5: ARABIC LETTER AE	э е	
ء							Lo		hamza		Кыбачы		U+0621: ARABIC LETTER HAMZA		
`															
															
latinPanel = 'ä bʷ č'															
															
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