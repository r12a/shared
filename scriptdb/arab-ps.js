var spreadsheet = `arab-ps	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
ا		ɑ			ā		Lo		vowel			alep or alif	U+0627: ARABIC LETTER ALEF	
آ		ɑ			ā		Lo		vowel			alep or alif	U+0622: ARABIC LETTER ALEF WITH MADDA ABOVE	
ب		b			b		Lo		consonant			be	U+0628: ARABIC LETTER BEH	
پ		p			p		Lo		consonant			pe	U+067E: ARABIC LETTER PEH	
ت		t̪			t		Lo		consonant			te	U+062A: ARABIC LETTER TEH	
ټ		ʈ			ṭ		Lo		consonant			ṭe	U+067C: ARABIC LETTER TEH WITH RING	
ث		s			s		Lo		consonant			se2	U+062B: ARABIC LETTER THEH	
ج		d͡ʒ			j ǰ		Lo		consonant			jim	U+062C: ARABIC LETTER JEEM	
چ		t͡ʃ			č		Lo		consonant			če	U+0686: ARABIC LETTER TCHEH	
ح		h			h		Lo		consonant			he2	U+062D: ARABIC LETTER HAH	
خ		x			x		Lo		consonant			xe	U+062E: ARABIC LETTER KHAH	
څ		t͡s s			ts c		Lo		consonant			tse, śe	U+0685: ARABIC LETTER HAH WITH THREE DOTS ABOVE	
ځ		d͡z z			dz j		Lo		consonant			dzim, źim	U+0681: ARABIC LETTER HAH WITH HAMZA ABOVE	
د		d̪			d		Lo		consonant			dāl	U+062F: ARABIC LETTER DAL	
ډ		ɖ			ḍ dd		Lo		consonant			ḍāl	U+0689: ARABIC LETTER DAL WITH RING	
ذ		z			z		Lo		consonant			zāl2	U+0630: ARABIC LETTER THAL	
ر		r			r		Lo		consonant			re	U+0631: ARABIC LETTER REH	
ړ		ɽ			ṛ rr		Lo		consonant			ṛe4	U+0693: ARABIC LETTER REH WITH RING	
ز		z			z		Lo		consonant			ze	U+0632: ARABIC LETTER ZAIN	
ژ		ʒ d͡z			ž		Lo		consonant			že	U+0698: ARABIC LETTER JEH	
ږ		ʐ (S) ʝ (NW) g (NE)			ẓ̌ (S) γ̌/ǵ (NE) g (NE)		Lo		consonant			ẓ̌ey (S) ǵey (NW) gey (NE)	U+0696: ARABIC LETTER REH WITH DOT BELOW AND DOT ABOVE	
س		s			s		Lo		consonant			sin	U+0633: ARABIC LETTER SEEN	
ش		ʃ t͡s			š		Lo		consonant			šin	U+0634: ARABIC LETTER SHEEN	
ښ		ʂ (S) ç (NW) x (NE)			ṣ̌ (S) x̌ (NW) x (NE)		Lo		consonant			ṣ̌in (S) x̌in (NW) x̌in (NE)	U+069A: ARABIC LETTER SEEN WITH DOT BELOW AND DOT ABOVE	
ص		s			s		Lo		consonant			swād2	U+0635: ARABIC LETTER SAD	
ض		z			z		Lo		consonant			zwād2	U+0636: ARABIC LETTER DAD	
ط		t			t		Lo		consonant			twe2	U+0637: ARABIC LETTER TAH	
ظ		z			z		Lo		consonant			zwe2	U+0638: ARABIC LETTER ZAH	
ع		ɑ			a		Lo		vowel			ayn2	U+0639: ARABIC LETTER AIN	
غ		ɣ			gh γ		Lo		consonant			ğayn	U+063A: ARABIC LETTER GHAIN	
ف		f p			f		Lo		consonant			pe or fe2	U+0641: ARABIC LETTER FEH	
ق		q k			q		Lo		consonant			qāp	U+0642: ARABIC LETTER QAF	
ک		k			k		Lo		consonant			kāp	U+06A9: ARABIC LETTER KEHEH	
ګ		ɡ			g		Lo		consonant			gāp	U+06AB: ARABIC LETTER KAF WITH RING	
ل		l			l		Lo		consonant			lām	U+0644: ARABIC LETTER LAM	
م		m			m		Lo		consonant			mim	U+0645: ARABIC LETTER MEEM	
ن		n			n		Lo		consonant			nun	U+0646: ARABIC LETTER NOON	
ڼ		ɳ			ṇ nn		Lo		consonant			ṇun	U+06BC: ARABIC LETTER NOON WITH RING	
ں		 ̃			̃ ń		Lo		consonant			nun póza, nose nun	U+06BA: ARABIC LETTER NOON GHUNNA	
و		w u o			w u o		Lo		consonant			wāw	U+0648: ARABIC LETTER WAW	
ه		h a			h a		Lo		consonant			ğwə́nḍa he, round hē	U+0647: ARABIC LETTER HEH	
ۀ		ə			ə		Lo		vowel			kajíra he, large-pretty hē	U+06C0: ARABIC LETTER HEH WITH YEH ABOVE	
ي		j i			y i		Lo		consonant			tsərgánda ye, obvious yē	U+064A: ARABIC LETTER YEH	
ې		e			e		Lo		vowel			úǵda ye, long yē	U+06D0: ARABIC LETTER E	
ی		ai j			ay y		Lo		consonant, vowel			nāriná ye, masculine yēor, wə́ča ye, dry yē	U+06CC: ARABIC LETTER FARSI YEH	
ے		ai j			ay y		Lo		consonant, vowel			nāriná ye, masculine yēor, wə́ča ye, dry yē	U+06D2: ARABIC LETTER YEH BARREE	
ۍ		əi			əi		Lo		diphthong			x̌əźiná ye, feminine yē, or lakə́i ye, tail yē	U+06CD: ARABIC LETTER YEH WITH TAIL	
ئ		əi j			əi y		Lo		consonant, diphthong			fālí ye, verbal yē	U+0626: ARABIC LETTER YEH WITH HAMZA ABOVE	
`														
														
latinPanel = 'ʂ ʐ ṣ̌ ẓ̌ d̪ d͡z d͡z d͡ʒ t̪ t͡ʃ x̌ ç ā č ń š ž ǰ ɑ ɖ ə ɡ ɣ ɳ ɽ ʃ ʈ ʒ ʝ ̃ γ γ̌ ǵ ḍ ṇ ṛ ṭ'														
														
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