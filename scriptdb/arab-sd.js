var spreadsheet = `arab-sd	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
جهہ		ɟʱ											U+062C U+0647 U+06C1: ARABIC LETTER JEEM, LETTER HEH, LETTER HEH GOAL	
ڄ		ʄ					Lo						U+0684: ARABIC LETTER DYEH	
ج		ɟ					Lo						U+062C: ARABIC LETTER JEEM	
پ		p					Lo						U+067E: ARABIC LETTER PEH	
ث		s					Lo						U+062B: ARABIC LETTER THEH	
ٺ		ʈʰ					Lo						U+067A: ARABIC LETTER TTEHEH	
ٽ		ʈ					Lo						U+067D: ARABIC LETTER TEH WITH THREE DOTS ABOVE DOWNWARDS	
ٿ		tʰ					Lo						U+067F: ARABIC LETTER TEHEH	
ت		t					Lo						U+062A: ARABIC LETTER TEH	
ڀ		bʱ					Lo						U+0680: ARABIC LETTER BEHEH	
ٻ		ɓ					Lo						U+067B: ARABIC LETTER BEEH	
ب		b					Lo						U+0628: ARABIC LETTER BEH	
ا		ɑː ʔ ∅					Lo						U+0627: ARABIC LETTER ALEF	
ڙ		ɽ					Lo						U+0699: ARABIC LETTER REH WITH FOUR DOTS ABOVE	
ر		r					Lo						U+0631: ARABIC LETTER REH	
ذ		z					Lo						U+0630: ARABIC LETTER THAL	
ڍ		ɖʱ					Lo						U+068D: ARABIC LETTER DDAHAL	
ڊ		ɖ					Lo						U+068A: ARABIC LETTER DAL WITH DOT BELOW	
ڏ		ɗ					Lo						U+068F: ARABIC LETTER DAL WITH THREE DOTS ABOVE DOWNWARDS	
ڌ		dʱ					Lo						U+068C: ARABIC LETTER DAHAL	
د		d					Lo						U+062F: ARABIC LETTER DAL	
خ		x					Lo						U+062E: ARABIC LETTER KHAH	
ح		h					Lo						U+062D: ARABIC LETTER HAH	
ڇ		cʰ					Lo						U+0687: ARABIC LETTER TCHEHEH	
چ		c					Lo						U+0686: ARABIC LETTER TCHEH	
ڃ		ɲ					Lo						U+0683: ARABIC LETTER NYEH	
ڪ		k					Lo						U+06AA: ARABIC LETTER SWASH KAF	
ق		q					Lo						U+0642: ARABIC LETTER QAF	
ڦ		pʰ					Lo						U+06A6: ARABIC LETTER PEHEH	
ف		f					Lo						U+0641: ARABIC LETTER FEH	
غ		ɣ					Lo						U+063A: ARABIC LETTER GHAIN	
ع		ɑːoːeːʔ∅					Lo						U+0639: ARABIC LETTER AIN	
ظ		z					Lo						U+0638: ARABIC LETTER ZAH	
ط		t					Lo						U+0637: ARABIC LETTER TAH	
ض		z					Lo						U+0636: ARABIC LETTER DAD	
ص		s					Lo						U+0635: ARABIC LETTER SAD	
ش		ʂ					Lo						U+0634: ARABIC LETTER SHEEN	
س		s					Lo						U+0633: ARABIC LETTER SEEN	
ز		z					Lo						U+0632: ARABIC LETTER ZAIN	
ي		j iː					Lo						U+064A: ARABIC LETTER YEH	
ء		ʔ ∅					Lo						U+0621: ARABIC LETTER HAMZA	
ھ		h					Lo						U+06BE: ARABIC LETTER HEH DOACHASHMEE	
و		ʋ ʊ oː ɔː uː					Lo						U+0648: ARABIC LETTER WAW	
ڻ		ɳ					Lo						U+06BB: ARABIC LETTER RNOON	
ن		n					Lo						U+0646: ARABIC LETTER NOON	
م		m					Lo						U+0645: ARABIC LETTER MEEM	
ل		l					Lo						U+0644: ARABIC LETTER LAM	
ڱ		ŋ					Lo						U+06B1: ARABIC LETTER NGOEH	
گهہ		ɡʱ											U+06AF U+0647 U+06C1: ARABIC LETTER GAF, LETTER HEH, LETTER HEH GOAL	
ڳ		ɠ					Lo						U+06B3: ARABIC LETTER GUEH	
گ		ɡ					Lo						U+06AF: ARABIC LETTER GAF	
ک		kʰ					Lo						U+06A9: ARABIC LETTER KEHEH	
`														
														
latinPanel = 'bʱ cʰ dʱ eː iː kʰ oː pʰ tʰ uː ŋ ɑː ɓ ɔː ɖ ɖʱ ɗ ɟ ɟʱ ɠ ɡ ɡʱ ɣ ɲ ɳ ɽ ʂ ʄ ʈ ʈʰ ʊ ʋ ʔ ∅'														
														
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