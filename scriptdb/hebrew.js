var spreadsheet = `
א	}	ʔ		'  ∅	ʔ ∅	consonant	אָלֶף	ˈalɛf	1										U+05D0: HEBREW LETTER ALEF
ב	v	v		v	v	consonant	בֵית	vet	2										U+05D1: HEBREW LETTER BET
ג	g	g		g	ɡ	consonant	גִּימֵל	gimel	3										U+05D2: HEBREW LETTER GIMEL
ד	d	d		d	d	consonant	דָּלֶת	ˈdalɛt, ˈdalɛd	4										U+05D3: HEBREW LETTER DALET
ה	h	h		h	h ʔ ∅	consonant	הֵא	he, hej	5										U+05D4: HEBREW LETTER HE
ו	v	v̇		v	v w	consonant	וָו	vav	6										U+05D5: HEBREW LETTER VAV
ז	z	z		z	z	consonant	זַיִן	zajin, za.in	7										U+05D6: HEBREW LETTER ZAYIN
ח	x	x		ẖ	x χ	consonant	חֵית	χet	8										U+05D7: HEBREW LETTER HET
ט	t	t		t	t	consonant	טֵית	tet	9										U+05D8: HEBREW LETTER TET
י	y	y		y	j	consonant	יוֹד	jod, jud	10										U+05D9: HEBREW LETTER YOD
כ	x	ẋ		kh	x χ	consonant	כַף	χaf	20										U+05DB: HEBREW LETTER KAF
ך	x	x̽		kh	x χ	word-final consonant variant	כַף סוֹפִית	χaf sofit											U+05DA: HEBREW LETTER FINAL KAF
ל	l	l		l	l	consonant	לָמֶד	ˈlamɛd	30										U+05DC: HEBREW LETTER LAMED
מ	m	m		m	m	consonant	מֵם	mem	40										U+05DE: HEBREW LETTER MEM
ם	m	m̽		m	m	word-final consonant variant	מֵם סוֹפִית	mem sofit											U+05DD: HEBREW LETTER FINAL MEM
נ	n	n		n	n	consonant	נוּן	nun	50										U+05E0: HEBREW LETTER NUN
ן	n	n̽		n	n	word-final consonant variant	נוּן סוֹפִית	nun sofit											U+05DF: HEBREW LETTER FINAL NUN
ס	s	s		s	s	consonant	סָמֶך	ˈsamɛχ	60										U+05E1: HEBREW LETTER SAMEKH
ע	}	ʔ̇		'  ∅	ʔ ∅	consonant	עַיִן	ajin, a.in	70										U+05E2: HEBREW LETTER AYIN
פ	f	f		f	f	consonant	פֵא, פה	fe, fej	80										U+05E4: HEBREW LETTER PE
ף	f	f̽		f	f	word-final consonant variant	פֵּא סוֹפִית, פה סופית	fe/fej sofit											U+05E3: HEBREW LETTER FINAL PE
צ	t	ʦ		ts	ʦ	consonant	צַדִי, צדיק	ʦadi	90										U+05E6: HEBREW LETTER TSADI
ץ	t	ʦ̽		ts	ʦ	word-final consonant variant	צַדִי סוֹפִית, צדיק סופית	ʦadi sofit											U+05E5: HEBREW LETTER FINAL TSADI
ק	k	k		k	k	consonant	קוֹף	kuf, kof	100										U+05E7: HEBREW LETTER QOF
ר	r	ʁ		r	ɣ ʁ	consonant	רֵישׁ	ʁeʃ	200										U+05E8: HEBREW LETTER RESH
ש	s	ṡ		s sh	ʃ s	consonant			300										U+05E9: HEBREW LETTER SHIN
ת	t	ṫ		t	t	consonant	תו	θav θaf	400										U+05EA: HEBREW LETTER TAV
װ	w	w			w	consonant													U+05F0: HEBREW LIGATURE YIDDISH DOUBLE VAV
																			
																			
ְ	:	͓			e̞ ∅	vowel shortener	שְׁוָא	ʃvɑ											U+05B0: HEBREW POINT SHEVA​
ֱ	e	ĕ			e̞	vowel point	חֲטַף סֶגּוֹל‬	ħaˈtaf sɛˈɡol											U+05B1: HEBREW POINT HATAF SEGOL​
ֲ	a	ă			ä	vowel point	חֲטַף פַּתַח	ħaˈtaf paˈtaħ											U+05B2: HEBREW POINT HATAF PATAH​
ֳ	o	ŏ			o̞	vowel point	חֲטַף קָמָץ	ħaˈtaf kaˈmats											U+05B3: HEBREW POINT HATAF QAMATS​
ִ	i	i			i	vowel point	חִירִיק‬	χiˈʁik											U+05B4: HEBREW POINT HIRIQ​
ֵ	e	e			e̞ e̞j	vowel point	צֵירֵי‬	tseˈɾe											U+05B5: HEBREW POINT TSERE​
ֶ	e	ɛ			e̞	vowel point	סֶגּוֹל	sɛˈɡol											U+05B6: HEBREW POINT SEGOL​
ַ	a	a			ä	vowel point	פַּתַח	paˈtaħ											U+05B7: HEBREW POINT PATAH​
ָ	a	ɑ			ä o̞	vowel point	קָמַץ	kaˈmats											U+05B8: HEBREW POINT QAMATS​
ֹ	o	o			o̞	vowel point	חוֹלָם‬	ħoˈlam											U+05B9: HEBREW POINT HOLAM​
ֺ	o	ȯ			o̞	vowel point		ħoˈlam ħaˈser											U+05BA: HEBREW POINT HOLAM HASER FOR VAV​
ֻ	u	u			u	vowel point	קֻבּוּץ‬	kuˈbuts											U+05BB: HEBREW POINT QUBUTS​
																			
																			
ֽ	:¶	ː			ː					a									U+05BD: HEBREW POINT METEG​
																			
																			
ּ	/	̣				hard consonant diacritic	דָּגֵשׁ	dagesh/mappiq											U+05BC: HEBREW POINT DAGESH OR MAPIQ​
ֽ						biblical stress marker	מֶתֶג	meteg		l									U+05BD: HEBREW POINT METEG​
־	-	-				hyphen	מַקָּף‬	maqaf											U+05BE: HEBREW PUNCTUATION MAQAF
ֿ						fricative indicator	רפה	rafe											U+05BF: HEBREW POINT RAFE​
׀						word separator		paseq											U+05C0: HEBREW PUNCTUATION PASEQ
ׁ	/	̎				shin dot													U+05C1: HEBREW POINT SHIN DOT​
ׂ	/	̍				sin dot													U+05C2: HEBREW POINT SIN DOT​
׃						biblical end of verse	סוֹף פָּסוּק	sof pasuq											U+05C3: HEBREW PUNCTUATION SOF PASUQ
״	+	¨				acronym indicator	גֵּרְשַׁיִם	gershayim											U+05F4: HEBREW PUNCTUATION GERSHAYIM
׳	/	´				pronunciation change/initialism/numeral indicator	גֵּרֶשׁ	ˈɡeʁeʃ											U+05F3: HEBREW PUNCTUATION GERESH
																			
																			
₪	±	¤				shekel													U+20AA: NEW SHEQEL SIGN
																			
																			
																			
\u200C	=	ₓ					zwnj												U+200C: ZERO WIDTH NON-JOINER
\u200D	=	₊					zwj												U+200D: ZERO WIDTH JOINER
\u200E	=	ˡʳᵐ					lrm												U+200E: LEFT-TO-RIGHT MARK
\u200F	=	ʳˡᵐ					rlm												U+200F: RIGHT-TO-LEFT MARK
\u061C	=	ᵃˡᵐ					alm												U+061C: ARABIC LETTER MARK
\u2067	=	ʳˡⁱ					rli												U+2067: RIGHT-TO-LEFT ISOLATE
\u2066	=	ˡʳⁱ					lri												U+2066: LEFT-TO-RIGHT ISOLATE
\u202B	=	ʳˡᵉ					rle												U+202B: RIGHT-TO-LEFT EMBEDDING
\u202A	=	ˡʳᵉ					lre												U+202A: LEFT-TO-RIGHT EMBEDDING
\u2069	=	ᵖᵈⁱ					pdi												U+2069: POP DIRECTIONAL ISOLATE
\u202C	=	ᵖᵈᶠ					pdf												U+202C: POP DIRECTIONAL FORMATTING
																			
																			
֑						cantillation mark													U+0591: HEBREW ACCENT ETNAHTA​
֒						cantillation mark													U+0592: HEBREW ACCENT SEGOL​
֓						cantillation mark													U+0593: HEBREW ACCENT SHALSHELET​
֔						cantillation mark													U+0594: HEBREW ACCENT ZAQEF QATAN​
֕						cantillation mark													U+0595: HEBREW ACCENT ZAQEF GADOL​
֖						cantillation mark													U+0596: HEBREW ACCENT TIPEHA​
֗						cantillation mark													U+0597: HEBREW ACCENT REVIA​
֘						cantillation mark													U+0598: HEBREW ACCENT ZARQA​
֙						cantillation mark													U+0599: HEBREW ACCENT PASHTA​
֚						cantillation mark													U+059A: HEBREW ACCENT YETIV​
֛						cantillation mark													U+059B: HEBREW ACCENT TEVIR​
֜						cantillation mark													U+059C: HEBREW ACCENT GERESH​
֝						cantillation mark													U+059D: HEBREW ACCENT GERESH MUQDAM​
֞						cantillation mark													U+059E: HEBREW ACCENT GERSHAYIM​
֟						cantillation mark													U+059F: HEBREW ACCENT QARNEY PARA​
֠						cantillation mark													U+05A0: HEBREW ACCENT TELISHA GEDOLA​
֡						cantillation mark													U+05A1: HEBREW ACCENT PAZER​
֢						cantillation mark													U+05A2: HEBREW ACCENT ATNAH HAFUKH​
֣						cantillation mark													U+05A3: HEBREW ACCENT MUNAH​
֤						cantillation mark													U+05A4: HEBREW ACCENT MAHAPAKH​
֥						cantillation mark													U+05A5: HEBREW ACCENT MERKHA​
֦						cantillation mark													U+05A6: HEBREW ACCENT MERKHA KEFULA​
֧						cantillation mark													U+05A7: HEBREW ACCENT DARGA​
֨						cantillation mark													U+05A8: HEBREW ACCENT QADMA​
֩						cantillation mark													U+05A9: HEBREW ACCENT TELISHA QETANA​
֪						cantillation mark													U+05AA: HEBREW ACCENT YERAH BEN YOMO​
֫						cantillation mark													U+05AB: HEBREW ACCENT OLE​
֬						cantillation mark													U+05AC: HEBREW ACCENT ILUY​
֭						cantillation mark													U+05AD: HEBREW ACCENT DEHI​
֮						cantillation mark													U+05AE: HEBREW ACCENT ZINOR​
֯						cantillation mark													U+05AF: HEBREW MARK MASORA CIRCLE​
																			
																			
																			
																			
																			
																			
																			
בּ	b	b̰		b	b		בֵּית	bet											U+05D1 U+05BC: HEBREW LETTER BET, HEBREW POINT DAGESH OR MAPIQ
כּ	k	k̰		k	k		כַּף	kaf											U+05DB U+05BC: HEBREW LETTER KAF, HEBREW POINT DAGESH OR MAPIQ
ךּ	k	k̰̇		k	k		כַּף סוֹפִית	kaf sofit											U+05DA U+05BC: HEBREW LETTER FINAL KAF, HEBREW POINT DAGESH OR MAPIQ
פּ	p	p̰		p	p		פֵּא, פה	pe, pej											U+05E4 U+05BC: HEBREW LETTER PE, HEBREW POINT DAGESH OR MAPIQ
שׁ	s	ʃ̰		sh	ʃ		שִׁין	ʃin											U+05E9 U+05C1: HEBREW LETTER SHIN, HEBREW POINT SHIN DOT
שׂ	s	s̰		s	s		שִׂין	sin											U+05E9 U+05C2: HEBREW LETTER SHIN, HEBREW POINT SIN DOT
תּ	t	t̰		t	t		תּו	tav, taf											U+05EA U+05BC: HEBREW LETTER TAV, HEBREW POINT DAGESH OR MAPIQ
ג׳	d	ʤ̰		ǧ	ʤ					גַּ׳חְנוּן	ˈd͡ʒaχnun								U+05D2 U+05F3: HEBREW LETTER GIMEL, HEBREW PUNCTUATION GERESH
ז׳	z	ʒ̰		ž	ʒ					קוֹלַאז׳	koˈlaʒ								U+05D6 U+05F3: HEBREW LETTER ZAYIN, HEBREW PUNCTUATION GERESH
צ׳	t	ʧ̰		č	ʧ					צ׳וּפָּר	t͡ʃuˈpar								U+05E6 U+05F3: HEBREW LETTER TSADI, HEBREW PUNCTUATION GERESH
ו׳	w	w̰		w	w					אַוַּנְטַה	aˈwanta								U+05D5 U+05F3: HEBREW LETTER VAV, HEBREW PUNCTUATION GERESH
וו	w	ẇ̰			w		alt of prev												U+05D5 U+05D5: HEBREW LETTER VAV, HEBREW LETTER VAV
																			
																			
ד׳	d	ð̰			ð		arabic ذ												U+05D3 U+05F3: HEBREW LETTER DALET, HEBREW PUNCTUATION GERESH
ת׳	Q	θ̰			θ		arabic ﺙ												U+05EA U+05F3: HEBREW LETTER TAV, HEBREW PUNCTUATION GERESH
ח׳	x	χ̰			χ		arabic خ												U+05D7 U+05F3: HEBREW LETTER HET, HEBREW PUNCTUATION GERESH
ר׳	r	ʁ̰			ʁ		arabic غ												U+05E8 U+05F3: HEBREW LETTER RESH, HEBREW PUNCTUATION GERESH
ע׳	r	ʁ̰̇			ʁ		same												U+05E2 U+05F3: HEBREW LETTER AYIN, HEBREW PUNCTUATION GERESH
																			
																			
וֹ					o̞														U+05D5 U+05B9: HEBREW LETTER VAV, HEBREW POINT HOLAM
וּ					u														U+05D5 U+05BC: HEBREW LETTER VAV, HEBREW POINT DAGESH OR MAPIQ

`

var cols = {
"key": 1,
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nameLoc": 8,
"nnameLoc": 7,
"numLoc": 9,
"statusLoc": 10,
"transcription":4,
"ucsName": 19,

"othertranscriptions": [[4, 'Israeli Academy']]
}