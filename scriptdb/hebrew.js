var spreadsheet = `
א		}	ʔ	ʔ ∅		'  ∅	consonant		1	ˈalɛf	אָלֶף	U+05D0: HEBREW LETTER ALEF	hebrew
ב		v	v	v		v	consonant		2	vet	בֵית	U+05D1: HEBREW LETTER BET	hebrew
ג		g	g	ɡ		g	consonant		3	gimel	גִּימֵל	U+05D2: HEBREW LETTER GIMEL	hebrew
ד		d	d	d		d	consonant		4	ˈdalɛt, ˈdalɛd	דָּלֶת	U+05D3: HEBREW LETTER DALET	hebrew
ה		h	h	h ʔ ∅		h	consonant		5	he, hej	הֵא	U+05D4: HEBREW LETTER HE	hebrew
ו		v	v̇	v w		v	consonant		6	vav	וָו	U+05D5: HEBREW LETTER VAV	hebrew
ז		z	z	z		z	consonant		7	zajin, za.in	זַיִן	U+05D6: HEBREW LETTER ZAYIN	hebrew
ח		x	x	x χ		ẖ	consonant		8	χet	חֵית	U+05D7: HEBREW LETTER HET	hebrew
ט		t	t	t		t	consonant		9	tet	טֵית	U+05D8: HEBREW LETTER TET	hebrew
י		y	y	j		y	consonant		10	jod, jud	יוֹד	U+05D9: HEBREW LETTER YOD	hebrew
כ		x	ẋ	x χ		kh	consonant		20	χaf	כַף	U+05DB: HEBREW LETTER KAF	hebrew
ך		x	x̽	x χ		kh	word-final consonant variant			χaf sofit	כַף סוֹפִית	U+05DA: HEBREW LETTER FINAL KAF	hebrew
ל		l	l	l		l	consonant		30	ˈlamɛd	לָמֶד	U+05DC: HEBREW LETTER LAMED	hebrew
מ		m	m	m		m	consonant		40	mem	מֵם	U+05DE: HEBREW LETTER MEM	hebrew
ם		m	m̽	m		m	word-final consonant variant			mem sofit	מֵם סוֹפִית	U+05DD: HEBREW LETTER FINAL MEM	hebrew
נ		n	n	n		n	consonant		50	nun	נוּן	U+05E0: HEBREW LETTER NUN	hebrew
ן		n	n̽	n		n	word-final consonant variant			nun sofit	נוּן סוֹפִית	U+05DF: HEBREW LETTER FINAL NUN	hebrew
ס		s	s	s		s	consonant		60	ˈsamɛχ	סָמֶך	U+05E1: HEBREW LETTER SAMEKH	hebrew
ע		}	ʔ̇	ʔ ∅		'  ∅	consonant		70	ajin, a.in	עַיִן	U+05E2: HEBREW LETTER AYIN	hebrew
פ		f	f	f		f	consonant		80	fe, fej	פֵא, פה	U+05E4: HEBREW LETTER PE	hebrew
ף		f	f̽	f		f	word-final consonant variant			fe/fej sofit	פֵּא סוֹפִית, פה סופית	U+05E3: HEBREW LETTER FINAL PE	hebrew
צ		t	ʦ	ʦ		ts	consonant		90	ʦadi	צַדִי, צדיק	U+05E6: HEBREW LETTER TSADI	hebrew
ץ		t	ʦ̽	ʦ		ts	word-final consonant variant			ʦadi sofit	צַדִי סוֹפִית, צדיק סופית	U+05E5: HEBREW LETTER FINAL TSADI	hebrew
ק		k	k	k		k	consonant		100	kuf, kof	קוֹף	U+05E7: HEBREW LETTER QOF	hebrew
ר		r	ʁ	ɣ ʁ		r	consonant		200	ʁeʃ	רֵישׁ	U+05E8: HEBREW LETTER RESH	hebrew
ש		s	ṡ	ʃ s		s sh	consonant		300			U+05E9: HEBREW LETTER SHIN	hebrew
ת		t	ṫ	t		t	consonant		400	θav θaf	תו	U+05EA: HEBREW LETTER TAV	hebrew
װ		w	w	w			consonant					U+05F0: HEBREW LIGATURE YIDDISH DOUBLE VAV	hebrew
													
													
ְ		:	͓	e̞ ∅			vowel shortener			ʃvɑ	שְׁוָא	U+05B0: HEBREW POINT SHEVA​	hebrew
ֱ		e	ĕ	e̞			vowel point			ħaˈtaf sɛˈɡol	חֲטַף סֶגּוֹל‬	U+05B1: HEBREW POINT HATAF SEGOL​	hebrew
ֲ		a	ă	ä			vowel point			ħaˈtaf paˈtaħ	חֲטַף פַּתַח	U+05B2: HEBREW POINT HATAF PATAH​	hebrew
ֳ		o	ŏ	o̞			vowel point			ħaˈtaf kaˈmats	חֲטַף קָמָץ	U+05B3: HEBREW POINT HATAF QAMATS​	hebrew
ִ		i	i	i			vowel point			χiˈʁik	חִירִיק‬	U+05B4: HEBREW POINT HIRIQ​	hebrew
ֵ		e	e	e̞ e̞j			vowel point			tseˈɾe	צֵירֵי‬	U+05B5: HEBREW POINT TSERE​	hebrew
ֶ		e	ɛ	e̞			vowel point			sɛˈɡol	סֶגּוֹל	U+05B6: HEBREW POINT SEGOL​	hebrew
ַ		a	a	ä			vowel point			paˈtaħ	פַּתַח	U+05B7: HEBREW POINT PATAH​	hebrew
ָ		a	ɑ	ä o̞			vowel point			kaˈmats	קָמַץ	U+05B8: HEBREW POINT QAMATS​	hebrew
ֹ		o	o	o̞			vowel point			ħoˈlam	חוֹלָם‬	U+05B9: HEBREW POINT HOLAM​	hebrew
ֺ		o	ȯ	o̞			vowel point			ħoˈlam ħaˈser		U+05BA: HEBREW POINT HOLAM HASER FOR VAV​	hebrew
ֻ		u	u	u			vowel point			kuˈbuts	קֻבּוּץ‬	U+05BB: HEBREW POINT QUBUTS​	hebrew
													
													
ֽ		:¶	ː	ː				archaic				U+05BD: HEBREW POINT METEG​	hebrew
													
													
ּ		/	̣				hard consonant diacritic			dagesh/mappiq	דָּגֵשׁ	U+05BC: HEBREW POINT DAGESH OR MAPIQ​	hebrew
ֽ							biblical stress marker			meteg	מֶתֶג	U+05BD: HEBREW POINT METEG​	hebrew
־		-	-				hyphen			maqaf	מַקָּף‬	U+05BE: HEBREW PUNCTUATION MAQAF	hebrew
ֿ							fricative indicator			rafe	רפה	U+05BF: HEBREW POINT RAFE​	hebrew
׀							word separator			paseq		U+05C0: HEBREW PUNCTUATION PASEQ	hebrew
ׁ		/	̎				shin dot					U+05C1: HEBREW POINT SHIN DOT​	hebrew
ׂ		/	̍				sin dot					U+05C2: HEBREW POINT SIN DOT​	hebrew
׃							biblical end of verse			sof pasuq	סוֹף פָּסוּק	U+05C3: HEBREW PUNCTUATION SOF PASUQ	hebrew
״		+	¨				acronym indicator			gershayim	גֵּרְשַׁיִם	U+05F4: HEBREW PUNCTUATION GERSHAYIM	hebrew
׳		/	´				pronunciation change/initialism/numeral indicator			ˈɡeʁeʃ	גֵּרֶשׁ	U+05F3: HEBREW PUNCTUATION GERESH	hebrew
													
													
₪		±	¤				shekel					U+20AA: NEW SHEQEL SIGN	currencysymbols
													
													
													
\u200C		=	ₓ								zwnj	U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=	₊								zwj	U+200D: ZERO WIDTH JOINER	punctuation
\u200E		=	ˡʳᵐ								lrm	U+200E: LEFT-TO-RIGHT MARK	punctuation
\u200F		=	ʳˡᵐ								rlm	U+200F: RIGHT-TO-LEFT MARK	punctuation
\u061C		=	ᵃˡᵐ								alm	U+061C: ARABIC LETTER MARK	punctuation
\u2067		=	ʳˡⁱ								rli	U+2067: RIGHT-TO-LEFT ISOLATE	punctuation
\u2066		=	ˡʳⁱ								lri	U+2066: LEFT-TO-RIGHT ISOLATE	punctuation
\u202B		=	ʳˡᵉ								rle	U+202B: RIGHT-TO-LEFT EMBEDDING	punctuation
\u202A		=	ˡʳᵉ								lre	U+202A: LEFT-TO-RIGHT EMBEDDING	punctuation
\u2069		=	ᵖᵈⁱ								pdi	U+2069: POP DIRECTIONAL ISOLATE	punctuation
\u202C		=	ᵖᵈᶠ								pdf	U+202C: POP DIRECTIONAL FORMATTING	punctuation
													
													
֑							cantillation mark					U+0591: HEBREW ACCENT ETNAHTA​	hebrew
֒							cantillation mark					U+0592: HEBREW ACCENT SEGOL​	hebrew
֓							cantillation mark					U+0593: HEBREW ACCENT SHALSHELET​	hebrew
֔							cantillation mark					U+0594: HEBREW ACCENT ZAQEF QATAN​	hebrew
֕							cantillation mark					U+0595: HEBREW ACCENT ZAQEF GADOL​	hebrew
֖							cantillation mark					U+0596: HEBREW ACCENT TIPEHA​	hebrew
֗							cantillation mark					U+0597: HEBREW ACCENT REVIA​	hebrew
֘							cantillation mark					U+0598: HEBREW ACCENT ZARQA​	hebrew
֙							cantillation mark					U+0599: HEBREW ACCENT PASHTA​	hebrew
֚							cantillation mark					U+059A: HEBREW ACCENT YETIV​	hebrew
֛							cantillation mark					U+059B: HEBREW ACCENT TEVIR​	hebrew
֜							cantillation mark					U+059C: HEBREW ACCENT GERESH​	hebrew
֝							cantillation mark					U+059D: HEBREW ACCENT GERESH MUQDAM​	hebrew
֞							cantillation mark					U+059E: HEBREW ACCENT GERSHAYIM​	hebrew
֟							cantillation mark					U+059F: HEBREW ACCENT QARNEY PARA​	hebrew
֠							cantillation mark					U+05A0: HEBREW ACCENT TELISHA GEDOLA​	hebrew
֡							cantillation mark					U+05A1: HEBREW ACCENT PAZER​	hebrew
֢							cantillation mark					U+05A2: HEBREW ACCENT ATNAH HAFUKH​	hebrew
֣							cantillation mark					U+05A3: HEBREW ACCENT MUNAH​	hebrew
֤							cantillation mark					U+05A4: HEBREW ACCENT MAHAPAKH​	hebrew
֥							cantillation mark					U+05A5: HEBREW ACCENT MERKHA​	hebrew
֦							cantillation mark					U+05A6: HEBREW ACCENT MERKHA KEFULA​	hebrew
֧							cantillation mark					U+05A7: HEBREW ACCENT DARGA​	hebrew
֨							cantillation mark					U+05A8: HEBREW ACCENT QADMA​	hebrew
֩							cantillation mark					U+05A9: HEBREW ACCENT TELISHA QETANA​	hebrew
֪							cantillation mark					U+05AA: HEBREW ACCENT YERAH BEN YOMO​	hebrew
֫							cantillation mark					U+05AB: HEBREW ACCENT OLE​	hebrew
֬							cantillation mark					U+05AC: HEBREW ACCENT ILUY​	hebrew
֭							cantillation mark					U+05AD: HEBREW ACCENT DEHI​	hebrew
֮							cantillation mark					U+05AE: HEBREW ACCENT ZINOR​	hebrew
֯							cantillation mark					U+05AF: HEBREW MARK MASORA CIRCLE​	hebrew
													
													
													
													
													
													
													
בּ	s	b	ṿ	b		b				bet	בֵּית	U+05D1 U+05BC: HEBREW LETTER BET, HEBREW POINT DAGESH OR MAPIQ	
כּ	s	k	ẋ̣	k		k				kaf	כַּף	U+05DB U+05BC: HEBREW LETTER KAF, HEBREW POINT DAGESH OR MAPIQ	
ךּ	s	k	x̣̽	k		k				kaf sofit	כַּף סוֹפִית	U+05DA U+05BC: HEBREW LETTER FINAL KAF, HEBREW POINT DAGESH OR MAPIQ	
פּ	s	p	f̣	p		p				pe, pej	פֵּא, פה	U+05E4 U+05BC: HEBREW LETTER PE, HEBREW POINT DAGESH OR MAPIQ	
שׁ	s	s	ṡ̎	ʃ		sh				ʃin	שִׁין	U+05E9 U+05C1: HEBREW LETTER SHIN, HEBREW POINT SHIN DOT	
שׂ	s	s	ṡ̍	s		s				sin	שִׂין	U+05E9 U+05C2: HEBREW LETTER SHIN, HEBREW POINT SIN DOT	
תּ	s	t	ṭ̇	t		t				tav, taf	תּו	U+05EA U+05BC: HEBREW LETTER TAV, HEBREW POINT DAGESH OR MAPIQ	
ג׳	s	d	g´	ʤ		ǧ						U+05D2 U+05F3: HEBREW LETTER GIMEL, HEBREW PUNCTUATION GERESH	
ז׳	s	z	z´	ʒ		ž						U+05D6 U+05F3: HEBREW LETTER ZAYIN, HEBREW PUNCTUATION GERESH	
צ׳	s	t	ʦ´	ʧ		č						U+05E6 U+05F3: HEBREW LETTER TSADI, HEBREW PUNCTUATION GERESH	
ו׳	s	w	v̇´	w		w						U+05D5 U+05F3: HEBREW LETTER VAV, HEBREW PUNCTUATION GERESH	
וו	s	w	v̇v̇	w								U+05D5 U+05D5: HEBREW LETTER VAV, HEBREW LETTER VAV	
													
													
ד׳	s	d	d´	ð							arabic ذ	U+05D3 U+05F3: HEBREW LETTER DALET, HEBREW PUNCTUATION GERESH	
ת׳	s	Q	ṫ´	θ							arabic ﺙ	U+05EA U+05F3: HEBREW LETTER TAV, HEBREW PUNCTUATION GERESH	
ח׳	s	x	x´	χ							arabic خ	U+05D7 U+05F3: HEBREW LETTER HET, HEBREW PUNCTUATION GERESH	
ר׳	s	r	ʁ´	ʁ							arabic غ	U+05E8 U+05F3: HEBREW LETTER RESH, HEBREW PUNCTUATION GERESH	
ע׳	s	r	ʔ̇´	ʁ							same	U+05E2 U+05F3: HEBREW LETTER AYIN, HEBREW PUNCTUATION GERESH	
													
													
וֹ	s		v̇o	o̞								U+05D5 U+05B9: HEBREW LETTER VAV, HEBREW POINT HOLAM	
וּ	s		ṿ̇	u								U+05D5 U+05BC: HEBREW LETTER VAV, HEBREW POINT DAGESH OR MAPIQ	


`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
"typeLoc": 7,
"statusLoc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 9,
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[6, 'Israeli Academy']]
}
