const yes = 'yes'
const mac = 'mac'
const ios = 'ios'
const win = 'win'
const sil = 'sil'
const goog = 'goog'
const other = 'other'

var fontDB = [



/* CJK modulated */
/* Song */
{ name:"Noto Serif CJK SC",	system:new Set([goog]), locales:new Set(['hani', 'hans']), style:'song' },
{ name:"NSimSun",			system:new Set([win]), locales:new Set(['hani', 'hans']), style:'song' },
{ name:"SimSun",			system:new Set([win, mac]), locales:new Set(['hani', 'hans']), style:'song' },
{ name:"Songti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'song' },
{ name:"STSong",			system:new Set([mac]), locales:new Set(['hani', 'hans', 'yiii']), style:'song' },

/* Song/Ming */
{ name:"Apple LiSung",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'song/ming' },
{ name:"LiSong Pro",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'song/ming' },
{ name:"MingLiu",			system:new Set([win, mac]), locales:new Set(['hani', 'hant']), style:'song/ming' },
{ name:"PMingLiu",			system:new Set([win, mac]), locales:new Set(['hani', 'hant']), style:'song/ming' },
{ name:"Songti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'song/ming' },
{ name:"Noto Serif CJK TC",	system:new Set([goog]), locales:new Set(['hani', 'hant']), style:'song/ming' },

/* Mincho */
{ name:"MS Mincho",			system:new Set([win, mac]), locales:new Set(['jpan']), style:'mincho' },
{ name:"MS PMincho",		system:new Set([win, mac]), locales:new Set(['jpan']), style:'mincho' },
{ name:"Hiragino Mincho Pro",system:new Set([mac]), locales:new Set(['jpan']), style:'mincho' },
{ name:"Noto Serif CJK JP",	system:new Set([goog]), locales:new Set(['jpan']), style:'mincho' },
{ name:"Toppan Bunkyu Mincho",system:new Set([mac]), locales:new Set(['jpan']), style:'mincho' },
{ name:"YuMincho",			system:new Set([mac]), locales:new Set(['jpan']), style:'mincho' },

/* modulated */
{ name:"AppleMyungjo",		system:new Set([mac]), locales:new Set(['kore']), style:'serif' },
{ name:"Batang",			system:new Set([win]), locales:new Set(['kore']), style:'serif' },
{ name:"Nanum Myeongjo",	system:new Set([mac]), locales:new Set(['kore']), style:'serif' },
{ name:"Noto Serif CJK KR",	system:new Set([goog]), locales:new Set(['kore']), style:'serif' },
{ name:"PCMyungjo",			system:new Set([mac]), locales:new Set(['kore']), style:'serif' },


/* modulated */
{ name:"Abyssinica SIL",	system:new Set([sil]), locales:new Set(['ethi']), style:'serif' },
{ name:"Al Bayan",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:'serif' },
{ name:"Al Nile",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb']), style:'serif' },
{ name:"Al Tarikh",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:'serif' },
{ name:"Angsana New",		system:new Set([win]), locales:new Set(['thai']), style:'serif' },
{ name:"AngsanaUPC",		system:new Set([win]), locales:new Set(['thai']), style:'serif' },
{ name:"Annapurna SIL",		system:new Set([sil]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'serif' },
{ name:"Arabic Typesetting",system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa', 'arab-ug', 'arab-ur']), style:'serif' },
{ name:"Baghdad",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:'serif' },
{ name:"Bangla MN",			system:new Set([mac]), locales:new Set(['beng']), style:'serif' },
{ name:"Barnsdall",			system:new Set([other]), locales:new Set(['osge']), style:'serif' },
{ name:"Cambay Devanagari",	system:new Set([mac]), locales:new Set(['deva', 'new']), style:'serif' },
{ name:"Cambria",			system:new Set([win]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa']), style:'serif' },
{ name:"Charis SIL",		system:new Set([sil]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'germ']), style:'serif' },
{ name:"Dai Banna SIL Book",system:new Set([sil]), locales:new Set(['talu']), style:'serif' },
{ name:"Dai Banna SIL Light",system:new Set([sil]), locales:new Set(['talu']), style:'serif' },
{ name:"Damascus",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa']), style:'serif' },
{ name:"David",				system:new Set([win]), locales:new Set(['hebr']), style:'serif' },
{ name:"Decotype Naskh",	system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:'serif' },
{ name:"Devanagari MT",		system:new Set([mac]), locales:new Set(['deva', 'deva-hi']), style:'serif' },
{ name:"Doulos SIL",		system:new Set([sil]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'germ']), style:'serif' },
{ name:"Estrangelo Edessa",	system:new Set([win]), locales:new Set(['syrc']), style:'serif' },
{ name:"Ezra SIL",			system:new Set([sil]), locales:new Set(['hebr']), style:'serif' },
{ name:"Ezra SIL SR",		system:new Set([sil]), locales:new Set(['hebr']), style:'serif' },
{ name:"FrankRuehl",		system:new Set([win]), locales:new Set(['hebr']), style:'serif' },
{ name:"Geeza Pro",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa', 'arab-ug']), style:'serif' },
{ name:"Gentium Plus",		system:new Set([sil]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek', 'germ']), style:'serif' },
{ name:"Gujarati MT",		system:new Set([mac]), locales:new Set(['gujr']), style:'serif' },
{ name:"Gurmukhi MT",		system:new Set([mac]), locales:new Set(['guru']), style:'serif' },
{ name:"IrisUPC",			system:new Set([win]), locales:new Set(['thai']), style:'serif' },
{ name:"Iskoola Pota",		system:new Set([win]), locales:new Set(['sinh']), style:'serif' },
{ name:"Javanese Text",		system:new Set([win]), locales:new Set(['java']), style:'serif' },
{ name:"Kailasa",			system:new Set([mac, ios]), locales:new Set(['tibt']), style:'serif' },
{ name:"Kannada MN",		system:new Set([mac, ios]), locales:new Set(['knda']), style:'serif' },
{ name:"Khmer Busra",		system:new Set([sil]), locales:new Set(['khmr']), style:'serif' },
{ name:"Khmer Mondulkiri",	system:new Set([sil]), locales:new Set(['khmr']), style:'serif' },
{ name:"Khmer MN",			system:new Set([mac]), locales:new Set(['khmr']), style:'serif' },
{ name:"Kokila",			system:new Set([win]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'serif' },
{ name:"Kokonor",			system:new Set([mac]), locales:new Set(['tibt']), style:'serif' },
{ name:"Lamphun",			system:new Set([other]), locales:new Set(['lana','lana-nod']), style:'serif' },
{ name:"Lateef",			system:new Set([sil]), locales:new Set(['arab', 'arab-fa']), style:'serif' },
{ name:"Malayalam MN",		system:new Set([mac]), locales:new Set(['mlym']), style:'serif' },
{ name:"Microsoft Himalaya",system:new Set([win]), locales:new Set(['tibt']), style:'serif' },
{ name:"Microsoft Uighur",	system:new Set([win]), locales:new Set(['arab', 'arab-ug']), style:'serif' },
{ name:"Mingzat",			system:new Set([sil]), locales:new Set(['lepc']), style:'serif' },
{ name:"Mishafi",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb']), style:'serif' },
{ name:"Mishafi Gold",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:'serif' },
{ name:"Mongolian Baiti",	system:new Set([win]), locales:new Set(['mong']), style:'serif' },
{ name:"Mongolian Universal White",system:new Set([other]), locales:new Set(['mong']), style:'serif' },
{ name:"Muna",				system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:'serif' },
{ name:"Myanmar MN",		system:new Set([mac]), locales:new Set(['mymr']), style:'serif' },
{ name:"Nadeem",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:'serif' },
{ name:"Namdhinggo SIL",	system:new Set([sil]), locales:new Set(['limb']), style:'serif' },
{ name:"Narkisim",			system:new Set([win]), locales:new Set(['hebr']), style:'serif' },
{ name:"New Peninim MT",	system:new Set([mac]), locales:new Set(['hebr']), style:'serif' },
{ name:"Noto Sans Adlam",	system:new Set([goog]), locales:new Set(['adlm']), style:'serif' },
{ name:"Noto Sans Adlam Unjoined",system:new Set([goog]), locales:new Set(['adlm']), style:'serif' },
{ name:"Noto Sans Balinese",system:new Set([goog]), locales:new Set(['bali']), style:'serif' },
{ name:"Noto Sans Limbu",	system:new Set([goog]), locales:new Set(['limb']), style:'serif' },
{ name:"Noto Sans Oriya",	system:new Set([goog, mac, ios]), locales:new Set(['orya']), style:'serif' },
{ name:"Noto Sans Tai Viet",system:new Set([goog]), locales:new Set(['tavt']), style:'serif' },
{ name:"Noto Serif",		system:new Set([goog]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek']), style:'serif' },
{ name:"Noto Serif Armenian",system:new Set([goog]), locales:new Set(['armn']), style:'serif' },
{ name:"Noto Serif Balinese",system:new Set([goog]), locales:new Set(['bali']), style:'serif' },
{ name:"Noto Serif Bengali",system:new Set([goog]), locales:new Set(['beng']), style:'serif' },
{ name:"Noto Serif Devanagari",system:new Set([goog]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'serif' },
{ name:"Noto Serif Ethiopic",system:new Set([goog]), locales:new Set(['ethi']), style:'serif' },
{ name:"Noto Serif Georgian",system:new Set([goog]), locales:new Set(['geor']), style:'serif' },
{ name:"Noto Serif Gujarati",system:new Set([goog]), locales:new Set(['gujr']), style:'serif' },
{ name:"Noto Serif Gurmukhi",system:new Set([goog]), locales:new Set(['guru']), style:'serif' },
{ name:"Noto Serif Hebrew",	system:new Set([goog]), locales:new Set(['hebr']), style:'serif' },
{ name:"Noto Serif Kannada",system:new Set([goog, mac]), locales:new Set(['knda']), style:'serif' },
{ name:"Noto Serif Malayalam",system:new Set([goog]), locales:new Set(['mlym']), style:'serif' },
{ name:"Noto Serif Myanmar",system:new Set([goog, mac]), locales:new Set(['mymr']), style:'serif' },
{ name:"Noto Serif Sinhala",system:new Set([goog]), locales:new Set(['sinh']), style:'serif' },
{ name:"Noto Serif Tamil",	system:new Set([goog]), locales:new Set(['taml']), style:'serif' },
{ name:"Noto Serif Telugu",	system:new Set([goog]), locales:new Set(['telu']), style:'serif' },
{ name:"Noto Serif Tibetan",system:new Set([goog]), locales:new Set(['tibt']), style:'serif' },
{ name:"Noto Serif Thai",	system:new Set([yes,goog]), locales:new Set(['thai']), style:'serif' },
{ name:"Nyala",				system:new Set([win]), locales:new Set(['ethi']), style:'serif' },
{ name:"Oriya MN",			system:new Set([mac]), locales:new Set(['orya']), style:'serif' },
{ name:"Palatino Linotype",	system:new Set([win]), locales:new Set(['cyrl', 'grek']), style:'serif' },
{ name:"Plantagenet Cherokee",system:new Set([mac,win]), locales:new Set(['cher']), style:'serif' },
{ name:"Raanana",			system:new Set([mac]), locales:new Set(['hebr']), style:'serif' },
{ name:"Sakkal Majalla",	system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa']), style:'serif' },
{ name:"Sanskrit Text",		system:new Set([win]), locales:new Set(['deva']), style:'serif' },
{ name:"Scheherazade",		system:new Set([sil]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa', 'arab-ha', 'arab-ug', 'arab-ur']), style:'serif' },
{ name:"Shonar Bangla",		system:new Set([win]), locales:new Set(['beng']), style:'serif' },
{ name:"Simplified Arabic",	system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa', 'arab-ha', 'arab-ug']), style:'serif' },
{ name:"Sinhala MN",		system:new Set([mac]), locales:new Set(['sinh']), style:'serif' },
{ name:"Sylfaen",			system:new Set([win]), locales:new Set(['armn', 'cyrl', 'geor', 'grek']), style:'serif' },
{ name:"Tai Heritage Pro",	system:new Set([sil]), locales:new Set(['tavt']), style:'serif' },
{ name:"Telugu MN",			system:new Set([mac]), locales:new Set(['telu']), style:'serif' },
{ name:"Times New Roman",	system:new Set([win, mac, ios]), locales:new Set(['cyrl', 'grek', 'hebr']), style:'serif' },
{ name:"Tiro Gurmukhi",		system:new Set([mac]), locales:new Set(['guru', 'new']), style:'serif' },
{ name:"Tiro Hindi",		system:new Set([mac]), locales:new Set(['deva', 'deva-hi', 'new']), style:'serif' },
{ name:"Tiro Kannada",		system:new Set([mac]), locales:new Set(['knda', 'new']), style:'serif' },
{ name:"Tiro Marathi",		system:new Set([mac]), locales:new Set(['deva', 'new']), style:'serif' },
{ name:"Tiro Sanskrit",		system:new Set([mac]), locales:new Set(['deva', 'new']), style:'serif' },
{ name:"Tiro Tamil",		system:new Set([mac]), locales:new Set(['taml', 'new']), style:'serif' },
{ name:"Tiro Telugu",		system:new Set([mac]), locales:new Set(['telu', 'new']), style:'serif' },
{ name:"Traditional Arabic",system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-fa', 'arab-ug']), style:'serif' },
{ name:"Vani",				system:new Set([win]), locales:new Set(['telu']), style:'serif' },





/* modulated or monoline */
{ name:"Arial Unicode MS",	system:new Set([mac, win]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'germ', 'arab', 'arab-arb', 'arab-ug', 'beng', 'deva', 'gujr', 'guru', 'knda', 'mlym', 'taml', 'thai', 'armn', 'cyrl', 'geor', 'grek', 'hebr', 'arab-fa', 'hans', 'hant', 'jpan', 'kore']), style:'mod/mono' },





/* CJK monoline */
/* Hei/Gothic */
{ name:"Hei",				system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'hei' },
{ name:"Heiti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans', 'yiii']), style:'hei' },
{ name:"Lantinghei SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'hei' },
{ name:"Microsoft YaHei",	system:new Set([win]), locales:new Set(['hani', 'hans']), style:'hei' },
{ name:"Noto Sans CJK SC",	system:new Set([goog]), locales:new Set(['hani', 'hans']), style:'hei' },
{ name:"PingFang SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'hei' },
{ name:"SimHei",			system:new Set([win, mac]), locales:new Set(['hani', 'hans']), style:'hei' },
{ name:"STHeiti",			system:new Set([mac]), locales:new Set(['hani', 'hans', 'yiii']), style:'hei' },
{ name:"Yuanti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'hei' },

/* Hei/Gothic */
{ name:"Apple LiGothic",	system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'hei' },
{ name:"Heiti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'hei' },
{ name:"Lantinghei TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'hei' },
{ name:"LiHei Pro",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'hei' },
{ name:"Microsoft JhengHei",system:new Set([win]), locales:new Set(['hani', 'hant']), style:'hei' },
{ name:"Noto Sans CJK TC",	system:new Set([goog]), locales:new Set(['hani', 'hant']), style:'hei' },
{ name:"PingFang TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'hei' },
{ name:"Yuanti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'hei' },

/* Gothic */
{ name:"Hiragino Kaku Gothic Pro",system:new Set([mac]), locales:new Set(['jpan']), style:'gothic' },
{ name:"Hiragino Sans",		system:new Set([mac, ios]), locales:new Set(['jpan']), style:'gothic' },
{ name:"Osaka",				system:new Set([mac]), locales:new Set(['jpan']), style:'gothic' },
{ name:"Toppan Bunkyu Gothic",system:new Set([mac]), locales:new Set(['jpan']), style:'gothic' },
{ name:"Meiryo",			system:new Set([win]), locales:new Set(['jpan']), style:'gothic' },
{ name:"Meiryo UI",			system:new Set([win]), locales:new Set(['jpan']), style:'gothic' },
{ name:"MS Gothic",			system:new Set([win, mac]), locales:new Set(['jpan']), style:'gothic' },
{ name:"MS PGothic",		system:new Set([win, mac]), locales:new Set(['jpan']), style:'gothic' },
{ name:"MS UI Gothic",		system:new Set([win, mac]), locales:new Set(['jpan']), style:'gothic' },
{ name:"Noto Sans CJK JP",	system:new Set([goog]), locales:new Set(['jpan']), style:'gothic' },
{ name:"YuGothic",			system:new Set([mac]), locales:new Set(['jpan']), style:'gothic' },

/* monoline */
{ name:"AppleGothic",		system:new Set([mac]), locales:new Set(['kore']), style:'gothic' },
{ name:"Apple SD Gothic Neo",system:new Set([mac, ios]), locales:new Set(['kore']), style:'gothic' },
{ name:"Dotum",				system:new Set([win]), locales:new Set(['kore']), style:'gothic' },
{ name:"Gulim",				system:new Set([win]), locales:new Set(['kore']), style:'gothic' },
{ name:"Malgun Gothic",		system:new Set([win]), locales:new Set(['kore']), style:'gothic' },
{ name:"Nanum Gothic",		system:new Set([mac]), locales:new Set(['kore']), style:'gothic' },
{ name:"Noto Sans CJK KR",	system:new Set([goog]), locales:new Set(['kore']), style:'gothic' },





/* monoline */
{ name:"Aharoni",			system:new Set([win]), locales:new Set(['hebr']), style:'sans' },
{ name:"Akatab",			system:new Set([sil]), locales:new Set(['tfng']), style:'sans' },
{ name:"Andika",			system:new Set([sil]), locales:new Set(['cyrl', 'latn']), style:'sans' },
{ name:"Arial",				system:new Set([win, mac, ios]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'germ', 'arab', 'arab-arb', 'arab-fa', 'arab-ug', 'arab-ha', 'armn', 'cyrl', 'grek', 'hebr']), style:'sans' },
{ name:"Arial Hebrew",		system:new Set([mac, ios]), locales:new Set(['hebr']), style:'sans' },
{ name:"Arial Hebrew Scholar",system:new Set([mac]), locales:new Set(['hebr']), style:'sans' },
{ name:"Avenir",			system:new Set([mac, ios]), locales:new Set(['latn', 'germ']), style:'sans' },
{ name:"Avenir Next",		system:new Set([mac, ios]), locales:new Set(['latn', 'germ', 'grek', 'cyrl']), style:'sans' },
{ name:"Ayuthaya",			system:new Set([mac]), locales:new Set(['thai']), style:'sans' },
{ name:"Bangla Sangam MN",	system:new Set([mac]), locales:new Set(['beng']), style:'sans' },
{ name:"Browallia New",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"BrowalliaUPC",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"EucrosiaUPC",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"Calibri",			system:new Set([win]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'arab', 'armn', 'cyrl', 'geor', 'grek', 'hebr']), style:'sans' },
{ name:"Conakry",			system:new Set([other]), locales:new Set(['nkoo']), style:'sans' },
{ name:"Consolas",			system:new Set([win]), locales:new Set(['latn', 'latn-ha', 'ipa', 'latn-afr']), style:'sans' },
{ name:"Corbel",			system:new Set([win]), locales:new Set(['latn']), style:'sans' },
{ name:"Cordia New",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"Cordia UPC",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"DaunPenh",			system:new Set([win]), locales:new Set(['khmr']), style:'sans' },
{ name:"Devanagari Sangam MN",system:new Set([mac, ios]), locales:new Set(['deva', 'deva-hi']), style:'sans' },
{ name:"DilleniaUPC",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"DokChampa",			system:new Set([win]), locales:new Set(['thai', 'laoo']), style:'sans' },
{ name:"Ebrima",			system:new Set([win]), locales:new Set(['ethi','adlm','nkoo', 'osma', 'tfng', 'tfng-ber', 'vaii']), style:'sans' },
{ name:"Euphemia",			system:new Set([win]), locales:new Set(['cans']), style:'sans' },
{ name:"Euphemia UCAS",		system:new Set([mac, ios]), locales:new Set(['cans']), style:'sans' },
{ name:"FreesiaUPC",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"Gadugi",			system:new Set([win]), locales:new Set(['cans','cher']), style:'sans' },
{ name:"Galvji",			system:new Set([mac, ios]), locales:new Set(['cher']), style:'sans' },
{ name:"Gautami",			system:new Set([win]), locales:new Set(['telu']), style:'sans' },
{ name:"Geneva",			system:new Set([mac]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek', 'germ', 'cher']), style:'sans' },
{ name:"Gill Sans",			system:new Set([mac]), locales:new Set(['latn']), style:'sans' },
{ name:"Gisha",				system:new Set([win]), locales:new Set(['hebr']), style:'sans' },
{ name:"Gujarati Sangam MN",system:new Set([mac]), locales:new Set(['gujr']), style:'sans' },
{ name:"Gurmukhi MN",		system:new Set([mac]), locales:new Set(['guru']), style:'sans' },
{ name:"Hapax Berbère",		system:new Set([other]), locales:new Set(['tfng', 'tfng-ber']), style:'sans' },
{ name:"Harmattan",			system:new Set([sil]), locales:new Set(['arab', 'arab-afr', 'arab-ha']), style:'sans' },
{ name:"Helvetica",			system:new Set([mac, ios]), locales:new Set(['latn', 'latn-afr', 'ipa', 'germ', 'cyrl', 'grek', 'geor']), style:'sans' },
{ name:"Helvetica Neue",	system:new Set([mac, ios]), locales:new Set(['latn', 'cyrl', 'grek', 'geor']), style:'sans' },
{ name:"InaiMathi",			system:new Set([mac]), locales:new Set(['taml']), style:'sans' },
{ name:"ITF Devanagari",	system:new Set([mac]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'sans' },
{ name:"ITF Devanagari Marathi",system:new Set([mac]), locales:new Set(['deva', 'deva-ks']), style:'sans' },
{ name:"Kannada Sangam MN",	system:new Set([mac, ios]), locales:new Set(['knda']), style:'sans' },
{ name:"Kartika",			system:new Set([win]), locales:new Set(['mlym']), style:'sans' },
{ name:"Kefa",				system:new Set([mac, ios]), locales:new Set(['ethi']), style:'sans' },
{ name:"Khmer Sangam MN",	system:new Set([mac, ios]), locales:new Set(['khmr']), style:'sans' },
{ name:"Kohinoor Bangla",	system:new Set([mac, ios]), locales:new Set(['beng']), style:'sans' },
{ name:"Kohinoor Devanagari",system:new Set([mac, ios]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'sans' },
{ name:"Kohinoor Gujarati",	system:new Set([mac, ios]), locales:new Set(['gujr']), style:'sans' },
{ name:"Kohinoor Telugu",	system:new Set([mac, ios]), locales:new Set(['telu']), style:'sans' },
{ name:"Lahore Gurmukhi",	system:new Set([mac]), locales:new Set(['guru', 'new']), style:'sans' },
{ name:"Lao MN",			system:new Set([mac]), locales:new Set(['laoo']), style:'sans' },
{ name:"Lao Sangam MN",		system:new Set([mac, ios]), locales:new Set(['laoo']), style:'sans' },
{ name:"Noto Serif Lao",	system:new Set([goog]), locales:new Set(['laoo']), style:'sans' },
{ name:"Latha",				system:new Set([win]), locales:new Set(['taml']), style:'sans' },
{ name:"Leelawadee",		system:new Set([win]), locales:new Set(['thai']), style:'sans' },
{ name:"Levenim MT",		system:new Set([win]), locales:new Set(['hebr']), style:'sans' },
{ name:"Lucida Grande",		system:new Set([mac]), locales:new Set(['latn','latn-ha', 'latn-afr', 'ipa', 'germ', 'hebr']), style:'sans' },
{ name:"Malayalam Sangam MN",system:new Set([mac, ios]), locales:new Set(['mlym']), style:'sans' },
{ name:"Mangal",			system:new Set([win]), locales:new Set(['deva', 'deva-hi']), style:'sans' },
{ name:"Microsoft New Tai Lue",system:new Set([win]), locales:new Set(['talu']), style:'sans' },
{ name:"Microsoft PhagsPa",	system:new Set([win]), locales:new Set(['phag']), style:'sans' },
{ name:"Microsoft Sans Serif",system:new Set([win]), locales:new Set(['arab','latn']), style:'sans' },
{ name:"Microsoft Tai Le",	system:new Set([win]), locales:new Set(['tale']), style:'sans' },
{ name:"Microsoft Yi Baiti",system:new Set([win]), locales:new Set(['yiii']), style:'sans' },
{ name:"Miriam",			system:new Set([win]), locales:new Set(['hebr']), style:'sans' },
{ name:"Mukta",				system:new Set([mac]), locales:new Set(['deva', 'new']), style:'sans' },
{ name:"Mukta Mahee",		system:new Set([mac]), locales:new Set(['guru']), style:'sans' },
{ name:"Mukta Malar",		system:new Set([mac]), locales:new Set(['taml', 'new']), style:'sans' },
{ name:"Mukta Vaani",		system:new Set([mac]), locales:new Set(['gujr', 'new']), style:'sans' },
{ name:"MV Boli",			system:new Set([win]), locales:new Set(['thaa']), style:'sans' },
{ name:"Myanmar Sangam MN",	system:new Set([mac, ios]), locales:new Set(['mymr']), style:'sans' },
{ name:"Myanmar Text",		system:new Set([win]), locales:new Set(['mymr', 'mymr-shn']), style:'sans' },
{ name:"Myanmar3",			system:new Set([other]), locales:new Set(['mymr']), style:'sans' },
{ name:"Myriad Arabic",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:'sans' },
{ name:"Narnoor",			system:new Set([sil]), locales:new Set(['gong']), style:'sans' },
{ name:"Nirmala UI",		system:new Set([win]), locales:new Set(['beng', 'deva', 'gujr', 'guru', 'knda', 'mtei', 'mlym', 'olck', 'orya', 'sinh', 'taml', 'telu']), style:'sans' },
{ name:"Nokyung",			system:new Set([sil]), locales:new Set(['talu']), style:'sans' },
{ name:"Noto Naskh Arabic",	system:new Set([goog]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa', 'arab-ha', 'arab-ug']), style:'sans' },
{ name:"Noto Sans",			system:new Set([goog]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek']), style:'sans' },
{ name:"Noto Sans Adlam New",system:new Set([goog]), locales:new Set(['adlm']), style:'sans' },
{ name:"Noto Sans Arabic",	system:new Set([goog]), locales:new Set(['arab', 'arab-arb', 'arab-afr', 'arab-fa', 'arab-ha', 'arab-sans']), style:'sans' },
{ name:"Noto Sans Armenian",system:new Set([goog]), locales:new Set(['armn']), style:'sans' },
{ name:"Noto Sans Bassa Vah",system:new Set([goog]), locales:new Set(['bass']), style:'sans' },
{ name:"Noto Sans Bengali",	system:new Set([goog]), locales:new Set(['beng']), style:'sans' },
{ name:"Noto Sans Buginese",system:new Set([goog]), locales:new Set(['bugi']), style:'sans' },
{ name:"Noto Sans Canadian Aboriginal",	system:new Set([goog]), locales:new Set(['cans']), style:'sans' },
{ name:"Noto Sans Chakma",	system:new Set([goog]), locales:new Set(['cakm']), style:'sans' },
{ name:"Noto Sans Cherokee",system:new Set([goog]), locales:new Set(['cher']), style:'sans' },
{ name:"Noto Sans Coptic",	system:new Set([goog]), locales:new Set(['copt']), style:'sans' },
{ name:"Noto Sans Devanagari",system:new Set([goog]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'sans' },
{ name:"Noto Sans Ethiopic",system:new Set([goog]), locales:new Set(['ethi']), style:'sans' },
{ name:"Noto Sans Georgian",system:new Set([goog]), locales:new Set(['geor']), style:'sans' },
{ name:"Noto Sans Gujarati",system:new Set([goog]), locales:new Set(['gujr']), style:'sans' },
{ name:"Noto Sans Gunjala Gondi",system:new Set([goog]), locales:new Set(['gong']), style:'sans' },
{ name:"Noto Sans Gurmukhi",system:new Set([goog]), locales:new Set(['guru']), style:'sans' },
{ name:"Noto Sans Hebrew",	system:new Set([goog]), locales:new Set(['hebr']), style:'sans' },
{ name:"Noto Sans Javanese",system:new Set([goog, mac]), locales:new Set(['java']), style:'sans' },
{ name:"Noto Sans Kannada",	system:new Set([goog, mac, ios]), locales:new Set(['knda']), style:'sans' },
{ name:"Noto Sans Khmer",	system:new Set([goog]), locales:new Set(['khmr']), style:'sans' },
{ name:"Noto Sans Lao",		system:new Set([goog]), locales:new Set(['laoo']), style:'sans' },
{ name:"Noto Sans Lepcha",	system:new Set([goog]), locales:new Set(['lepc']), style:'sans' },
{ name:"Noto Sans Lisu",	system:new Set([goog]), locales:new Set(['lisu']), style:'sans' },
{ name:"Noto Sans Malayalam",system:new Set([goog]), locales:new Set(['mlym']), style:'sans' },
{ name:"Noto Sans Mandaic",	system:new Set([goog]), locales:new Set(['mand']), style:'sans' },
{ name:"Noto Sans Mongolian",system:new Set([goog]), locales:new Set(['mong']), style:'sans' },
{ name:"Noto Sans Meetei Mayek",system:new Set([goog]), locales:new Set(['mtei']), style:'sans' },
{ name:"Noto Sans Myanmar",	system:new Set([goog, mac, ios]), locales:new Set(['mymr', 'mymr-shn']), style:'sans' },
{ name:"Noto Sans New Tai Lue",system:new Set([goog]), locales:new Set(['talu']), style:'sans' },
{ name:"Noto Sans Nko",		system:new Set([goog]), locales:new Set(['nkoo']), style:'sans' },
{ name:"Noto Sans Ol Chiki",system:new Set([goog]), locales:new Set(['olck']), style:'sans' },
{ name:"Noto Sans Osage",	system:new Set([goog]), locales:new Set(['osge']), style:'sans' },
{ name:"Noto Sans Osmanya",	system:new Set([goog]), locales:new Set(['osma']), style:'sans' },
{ name:"Noto Sans PhagsPa",system:new Set([goog]), locales:new Set(['phag']), style:'sans' },
{ name:"Noto Sans Runic",	system:new Set([goog]), locales:new Set(['runr']), style:'sans' },
{ name:"Noto Sans Sinhala",	system:new Set([goog]), locales:new Set(['sinh']), style:'sans' },
{ name:"Noto Sans Sundanese",system:new Set([goog]), locales:new Set(['sund']), style:'sans' },
{ name:"Noto Sans Syriac Eastern",system:new Set([goog]), locales:new Set(['syrc']), style:'sans' },
{ name:"Noto Sans Syriac Estrangela",system:new Set([goog]), locales:new Set(['syrc']), style:'sans' },
{ name:"Noto Sans Syriac Western",system:new Set([goog]), locales:new Set(['syrc']), style:'sans' },
{ name:"Noto Sans Tai Le",	system:new Set([goog]), locales:new Set(['tale']), style:'sans' },
{ name:"Noto Sans Tai Tham",system:new Set([goog]), locales:new Set(['lana', 'lana-kkh', 'lana-nod']), style:'sans' },
{ name:"Noto Sans Telugu",	system:new Set([goog]), locales:new Set(['telu']), style:'sans' },
{ name:"Noto Sans Thaana",	system:new Set([goog]), locales:new Set(['thaa']), style:'sans' },
{ name:"Noto Sans Tibetan",	system:new Set([goog]), locales:new Set(['tibt']), style:'sans' },
{ name:"Noto Sans Tifinagh",system:new Set([goog]), locales:new Set(['tfng', 'tfng-ber']), style:'sans' },
{ name:"Noto Sans Vai",		system:new Set([goog]), locales:new Set(['vaii']), style:'sans' },
{ name:"Noto Sans Yi",		system:new Set([goog]), locales:new Set(['yiii']), style:'sans' },
{ name:"Noto Serif Khmer",	system:new Set([goog]), locales:new Set(['khmr']), style:'sans' },
{ name:"Nuosu SIL",			system:new Set([sil]), locales:new Set(['yiii']), style:'sans' },
{ name:"Oriya Sangam MN",	system:new Set([mac]), locales:new Set(['orya']), style:'sans' },
{ name:"Noto Sans Tamil",	system:new Set([goog]), locales:new Set(['taml']), style:'sans' },
{ name:"Padauk",			system:new Set([sil]), locales:new Set(['mymr', 'mymr-shn']), style:'sans' },
{ name:"Padauk Book",		system:new Set([sil]), locales:new Set(['mymr', 'mymr-shn']), style:'sans' },
{ name:"PSL Ornanong Pro",	system:new Set([mac]), locales:new Set(['thai']), style:'sans' },
{ name:"Raavi",				system:new Set([win]), locales:new Set(['guru']), style:'sans' },
{ name:"Sathu",				system:new Set([mac]), locales:new Set(['thai']), style:'sans' },
{ name:"Segoe UI",			system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'cyrl', 'geor', 'grek','hebr', 'arab-fa', 'arab-ha', 'lisu']), style:'sans' },
{ name:"Segoe UI Historic",	system:new Set([win]), locales:new Set(['runr', 'syrc']), style:'sans' },
{ name:"Shree Devanagari 714",system:new Set([mac]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'sans' },
{ name:"Shruti",			system:new Set([win]), locales:new Set(['gujr']), style:'sans' },
{ name:"Silom",				system:new Set([mac]), locales:new Set(['thai']), style:'sans' },
{ name:"Sinhala Sangam MN",	system:new Set([mac, ios]), locales:new Set(['sinh']), style:'sans' },
{ name:"Tagmukay",			system:new Set([sil]), locales:new Set(['tfng']), style:'sans' },
{ name:"Tahoma",			system:new Set([mac, win]), locales:new Set(['arab', 'arab-arb','thai', 'grek', 'hebr', 'arab-fa', 'arab-ha', 'arab-ug', 'arab-sans']), style:'sans' },
{ name:"Tamil MN",			system:new Set([mac]), locales:new Set(['taml']), style:'sans' },
{ name:"Tamil Sangam MN",	system:new Set([mac, ios]), locales:new Set(['taml']), style:'sans' },
{ name:"Telugu Sangam MN",	system:new Set([mac]), locales:new Set(['telu']), style:'sans' },
{ name:"Tharlon",			system:new Set([sil]), locales:new Set(['mymr', 'mymr-shn', 'tale']), style:'sans' },
{ name:"Thonburi",			system:new Set([mac, ios]), locales:new Set(['thai']), style:'sans' },
{ name:"Tifinaghe-Ircam Unicode",system:new Set([other]), locales:new Set(['tfng', 'tfng-ber']), style:'sans' },
{ name:"Tiro Bangla",		system:new Set([mac]), locales:new Set(['beng', 'new']), style:'sans' },
{ name:"Trebuchet MS",		system:new Set([win, mac, ios]), locales:new Set(['cyrl', 'grek']), style:'sans' },
{ name:"Tunga",				system:new Set([win]), locales:new Set(['knda']), style:'sans' },
{ name:"Utsaah",			system:new Set([win]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'sans' },
{ name:"Verdana",			system:new Set([win, mac, ios]), locales:new Set(['latn', 'cyrl', 'grek']), style:'sans' },
{ name:"Vrinda",			system:new Set([win]), locales:new Set(['beng']), style:'sans' },



/* loopless */
{ name:"JasmineUPC",		system:new Set([win]), locales:new Set(['thai']), style:'loopless' },
{ name:"KodchiangUPC",		system:new Set([win]), locales:new Set(['thai']), style:'loopless' },
{ name:"LilyUPC",			system:new Set([win]), locales:new Set(['thai']), style:'loopless' },
{ name:"Noto Sans Thai",	system:new Set([yes,goog]), locales:new Set(['thai']), style:'loopless' },
{ name:"Sukhumvit Set",		system:new Set([mac]), locales:new Set(['thai']), style:'loopless' },

/* thuluth */
{ name:"Diwan Thuluth",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-thul']), style:'thuluth' },

/* ruq'a */
{ name:"Waseem",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-ruqa']), style:'ruqa' },

/* kano */
{ name:"Alkalami",			system:new Set([sil]), locales:new Set(['arab','arab-afr', 'arab-ha']), style:'kano' },
{ name:"Alkalami Light",	system:new Set([sil]), locales:new Set(['arab','arab-afr', 'arab-ha']), style:'kano' },

/* kufi */
{ name:"Andalus",			system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-arb', 'arab-fa']), style:'kufi' },
{ name:"Diwan Kufi",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:'kufi' },
{ name:"KufiStandardGK",	system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:'kufi' },
{ name:"Noto Kufi Arabic",	system:new Set([goog]), locales:new Set(['arab', 'arab-arb']), style:'kufi' },
{ name:"Sana",				system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-other']), style:'kufi' },

/* diwani */
{ name:"Aldhabi",			system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-fa', 'arab-ur']), style:'diwani' },

/* nastaliq */
{ name:"Aldhabi",			system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-fa', 'arab-ur']), style:'nastaliq' },
{ name:"Awami Nastaliq",	system:new Set([sil]), locales:new Set(['arab', 'arab-ur']), style:'nastaliq' },
{ name:"Farisi",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:'nastaliq' },
{ name:"Noto Nastaliq Urdu",system:new Set([goog, mac, ios]), locales:new Set(['arab', 'arab-ur']), style:'nastaliq' },
{ name:"Urdu Typesetting",	system:new Set([win]), locales:new Set(['arab', 'arab-ur']), style:'nastaliq' },

/* slanted */
{ name:"Corsiva Hebrew",	system:new Set([mac]), locales:new Set(['hebr']), style:'slanted' },
{ name:"Mshtakan",			system:new Set([mac]), locales:new Set(['armn']), style:'slanted' },
{ name:"Vijaya",			system:new Set([win]), locales:new Set(['taml']), style:'slanted' },

/* mool */
{ name:"MoolBoran",			system:new Set([win]), locales:new Set(['khmr']), style:'mool' },

/* Fangsong */
{ name:"FangSong",			system:new Set([win]), locales:new Set(['hani', 'hans']), style:'fangsong' },
{ name:"STFangsong",		system:new Set([mac]), locales:new Set(['hani', 'hans', 'yiii']), style:'fangsong' },

/* Kai */
{ name:"Kai",				system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'kai' },
{ name:"KaiTi",				system:new Set([win]), locales:new Set(['hani', 'hans']), style:'kai' },
{ name:"Kaiti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'kai' },
{ name:"STKaiti",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'kai' },
{ name:"Xingkai SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'kai' },

{ name:"Biaukai",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'kai' },
{ name:"DFKai-SB",			system:new Set([win]), locales:new Set(['hani', 'hant']), style:'kai' },
{ name:"Kaiti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'kai' },
{ name:"Xingkai TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'kai' },


/* Rounded */
{ name:"Hiragino Maru Gothic Pro",system:new Set([mac, ios]), locales:new Set(['jpan']), style:'rounded' },
{ name:"Tsukushi A Round Gothic",system:new Set([mac]), locales:new Set(['jpan']), style:'rounded' },
{ name:"Tsukushi B Round Gothic",system:new Set([mac]), locales:new Set(['jpan']), style:'rounded' },


/* heavy */
{ name:"Baloo",				system:new Set([mac]), locales:new Set(['deva', 'new']), style:'heavy' },
{ name:"Baloo Bhai",		system:new Set([mac]), locales:new Set(['gujr', 'new']), style:'heavy' },
{ name:"Baloo Bhaina",		system:new Set([mac]), locales:new Set(['orya', 'new']), style:'heavy' },
{ name:"Baloo Bhaijaan",	system:new Set([mac]), locales:new Set(['arab', 'new']), style:'heavy' },
{ name:"Baloo Chettan",		system:new Set([mac]), locales:new Set(['mlym', 'new']), style:'heavy' },
{ name:"Baloo Da",			system:new Set([mac]), locales:new Set(['beng', 'new']), style:'heavy' },
{ name:"Baloo Paaji",		system:new Set([mac]), locales:new Set(['guru', 'new']), style:'heavy' },
{ name:"Baloo Tamma",		system:new Set([mac]), locales:new Set(['knda', 'new']), style:'heavy' },
{ name:"Baloo Tammudu",		system:new Set([mac]), locales:new Set(['telu', 'new']), style:'heavy' },
{ name:"Baloo Thambi",		system:new Set([mac]), locales:new Set(['taml', 'new']), style:'heavy' },
{ name:"Beirut",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-other']), style:'heavy' },
{ name:"Krungthep",			system:new Set([mac]), locales:new Set(['thai']), style:'heavy' },
{ name:"Modak",				system:new Set([mac]), locales:new Set(['deva', 'new']), style:'heavy' },

{ name:"Toppan Bunkyu Midashi Gothic",system:new Set([mac]), locales:new Set(['jpan']), style:'heavy' },
{ name:"HeadlineA",			system:new Set([mac]), locales:new Set(['kore']), style:'heavy' },


/* khun */
{ name:"A Tai Tham KH",		system:new Set([other]), locales:new Set(['lana','lana-nod']), style:'khun' },
{ name:"A Tai Tham KH New",	system:new Set([other]), locales:new Set(['lana', 'lana-kkh', 'lana-nod']), style:'khun' },



/* monospaced */
{ name:"Andale Mono",		system:new Set([mac]), locales:new Set(['grek']), style:'monospaced' },
{ name:"Courier New",		system:new Set([win, ios]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'arab', 'arab-arb', 'arab-fa', 'arab-ha', 'arab-other', 'hebr']), style:'monospaced' },
{ name:"Menlo",				system:new Set([mac]), locales:new Set(['geor']), style:'monospaced' },
{ name:"Miriam Fixed",		system:new Set([win]), locales:new Set(['hebr']), style:'monospaced' },
{ name:"Noto Mono",			system:new Set([goog]), locales:new Set(['latn', 'grek', 'cyrl']), style:'monospaced' },
{ name:"Rod",				system:new Set([win]), locales:new Set(['hebr']), style:'monospaced' },
{ name:"Simplified Arabic Fixed",system:new Set([win]), locales:new Set(['arab', 'arab-arb']), style:'monospaced' },


/* other */
{ name:"Aparajita",			system:new Set([win]), locales:new Set(['deva', 'deva-hi', 'deva-ks']), style:'other' },
{ name:"Bradley Hand",		system:new Set([mac]), locales:new Set(['grek']), style:'other' },
{ name:"Farah",				system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb', 'arab-scrip']), style:'other' },
{ name:"Gabriola",			system:new Set([win]), locales:new Set(['grek']), style:'other' },
{ name:"Gotu",				system:new Set([mac]), locales:new Set(['deva', 'new']), style:'other' },
{ name:"Jaini",				system:new Set([mac]), locales:new Set(['deva', 'new']), style:'other' },
{ name:"Jaini Purva",		system:new Set([mac]), locales:new Set(['deva', 'new']), style:'other' },
{ name:"Khmer UI",			system:new Set([win]), locales:new Set(['khmr']), style:'other' },
{ name:"Lao UI",			system:new Set([win]), locales:new Set(['laoo']), style:'other' },
{ name:"Mongolian Writing",	system:new Set([other]), locales:new Set(['mong']), style:'other' },
{ name:"Noteworthy",		system:new Set([mac, ios]), locales:new Set(['cyrl', 'grek', 'latn']), style:'other' },
{ name:"Noto Rashi Hebrew",	system:new Set([goog]), locales:new Set(['hebr']), style:'other' },


/* CJK OTHER */
{ name:"Baoli SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"DengXian",			system:new Set([win]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"Hannotate SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"HanziPen SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"Libian SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"LingWai SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"Wawati SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"Weibei SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },
{ name:"Yuppy SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'other' },

{ name:"Baoli TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },
{ name:"Hannotate TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },
{ name:"HanziPen TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },
{ name:"Libian TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },
{ name:"LingWai TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },
{ name:"Wawati TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },
{ name:"Weibei TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },
{ name:"Yuppy TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:'other' },

{ name:"YuKyokasho",		system:new Set([mac]), locales:new Set(['jpan']), style:'other' },
{ name:"YuKyokasho Yoko",	system:new Set([mac]), locales:new Set(['jpan']), style:'other' },

{ name:"Gungseo",			system:new Set([mac]), locales:new Set(['kore']), style:'other' },
{ name:"Gungsuh",			system:new Set([win]), locales:new Set(['kore']), style:'other' },
{ name:"Nanum Brush Script",system:new Set([mac]), locales:new Set(['kore']), style:'other' },
{ name:"Nanum Pen Script",	system:new Set([mac]), locales:new Set(['kore']), style:'other' },
{ name:"PilGi",				system:new Set([mac]), locales:new Set(['kore']), style:'other' },





/* ExtB fonts need a sample 
{ name:"SimSun-ExtB",		system:new Set([win]), locales:new Set(['hani', 'hans']), style:'song' },
{ name:"MingLiu-ExtB",		system:new Set([win]), locales:new Set(['hani', 'hant']), style:'song' },
{ name:"MingLiu-HKSCS-ExtB",system:new Set([win]), locales:new Set(['hani', 'hant']), style:'song' },
{ name:"PMingLiu-ExtB",		system:new Set([win]), locales:new Set(['hani', 'hant']), style:'song' },


Fonts that don't seem to work:
{ name:"STXihei",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:'hei' },

*/




/*{ name:"Candara",			system:new Set([win]), locales:new Set([]) },
{ name:"Constantia",		system:new Set([win]), locales:new Set([]) },*/
{ name:"JG Bassa Vah Unicode",system:new Set([other]), locales:new Set(['bass']) },
{ name:"Makassar",			system:new Set([other]), locales:new Set(['bugi']) },
{ name:"MakasarGraphite",	system:new Set([other]), locales:new Set(['maka']) },



]


fontInfo = {
"Aakar": { notes:"For Gujarati." },
"Aboriginal Sans": { notes:"For any North American Native language, incl. UCAS, Cher, Latn.\nDesign crisp and clean, both on printed page as well as screen." },
"Aboriginal Serif": { notes:"For any North American Native language, incl. UCAS, Cher, Latn.\nDesign crisp and clean, both on printed page as well as screen." },
"Adelle Sans EXT": { notes:"For Vietnamese and Pan-African Latin-based languages.\nDesigned for branding, screens, signage, paragraphs, and advertising." },
"Adelle Sans EXT Light": { notes:"For Vietnamese and Pan-African Latin-based languages.\nDesigned for branding, screens, signage, paragraphs, and advertising." },
"Aldhabi": { notes:"For Arabic.\nIntended for use at larger display sizes and in situations where an elegant, flowing style is appropriate." },
"Alkalami": { notes:"For Kano region of Nigeria and in Niger.\nDesign used for writing on wooden boards in the Kano region of Nigeria and in Niger." },
"Alkalami Light": { notes:"For Kano region of Nigeria and in Niger.\nDesign used for writing on wooden boards in the Kano region of Nigeria and in Niger." },
"Amiri": { notes: "Naskh style classical Arabic typeface for typesetting books and other running text."},
"Andalus": { notes: "Arabic display font, based on a modern interpretation of Kairawani Kufic. Suitable for headlines, titles, posters, and graphic design projects where artistic flavor is desired."},
"Arabic Typesetting": { notes: "For Arabic, Farsi, Urdu, Sindhi, etc. Includes Latin. Particularly suited for traditional book typography & designed for clarity in small font sizes."},
"Arial": { notes:"For arab*, armn, cyrl, grek, hebr, latn. Versatile design for reports, presentations, magazines etc, & display use in newspapers, advertising and promotions. (* modulated strokes)" },
"Arial Unicode MS": { notes:"For Arab, Beng*, Cyrl, Deva*, Grek, Gujr*, Guru, Hani, Hang, Hebr, Jpan, Latn, Mlym*, Taml*, Telu*, Thai. (* modulated strokes.)" },
"Arian Grqi": { notes:"Design is traditional book style." },
"Annapurna SIL": { notes:"For all S. Asian devanagari scripts.\nDesign inspired by traditional calligraphic forms, highly readable, reasonably compact, visually attractive." },
"Aparajita": { notes:"For Hindi." },
"Awami Nastaliq": { notes:"[GRAPHITE] For a wide variety of languages of southwest Asia, including but not limited to Urdu, aimed at minority language support." },
"Brill": { notes: "For Latin with full range of diacritics and IPA, Greek, Cyrillic."},
"Calibri": { notes:"For Arab*, Armn, Cyrl, Geok, Geor, Grek, Hebr, Latn.\nDesign proportions allow high impact in tightly set lines of big/small text with a warm and soft character.  (* modulated strokes)" },
"Cambria": { notes:"For Armn, Cyrl, Grek, Latn.\nDesigned for on-screen reading and to look good when printed at small sizes. It has very even spacing and proportions." },
"Chandas": { notes:"For Sanskrit + all deva languages, incl. Hindi, Konkani, Marathi, Nepali.\nDesign, Southern (Mumbai) style glyphs, extensive conjuncts for Sanskrit, Vedic accents." },
"Charis SIL": { notes: "For latn, cyrl.\nDesign optimized for readability, and holds up well in less-than-ideal reproduction environments."},
"Consolas": { notes: "Armn, Cyrl, Grek, Latn.\nDesigned as a monospace font more readable than Courier."},
"Courier New": { notes: "Armn, Cyrl, Grek, Latn.\nDesigned to emulate typewriter output for reports, tabular work and technical documentation."},
"Doulos SIL": { notes: "For latn, cyrl.\nDesign supports correct placement of multiple diacritics. Useful for IPA."},
"Dai Banna SIL Book": { notes:"[GRAPHITE]" },
"Dai Banna SIL Light": { notes:"[GRAPHITE]" },
"Ebrima": { notes: "For Adlm, Ethi, Nkoo, Osma, Tfng, Vaii.\nLatin characters include additional accent marks and characters for languages throughout Africa."},
"Euphemia": { notes: "For general UCAS languages."},
"Gadugi": { notes: "For general UCAS languages & Cherokee."},
"Gentium Plus": { notes: "For latn, cyrl, grek.\nDesign supports a wide range of additional characters and symbols useful for linguistics and literacy work."},
"Harmattan": { notes: "Designed in a Warsh style to suit the needs of languages using the Arabic script in West Africa."},
"ITF Devanagari": { notes:"Design, high contrast, classical proportions suitable for setting books, magazines, and strict demands of the newspaper printing." },
"ITF Devanagari Marathi": { notes:"Design, high contrast, classical proportions suitable for setting books, magazines, and strict demands of the newspaper printing." },
"Kohinoor Devanagari": { notes:"Design, suitable for body and display text + things such as logotype, signage, tattoo ..." },
"Kokila": { notes:"For Hindi." },
"Kayases": { notes:"For UCAS, esp. Dakelh (Carrier) and Blackfoot.\nDesign is modern-style Victorian era, better used in larger text." },
"Lohit Bengali": { notes:"Red Hat font." },
"Lohit Devanagari": { notes:"For  Hindi, Marathi, Sindhi, Kashmiri, Konkani, Nepali, Maithili and Santali.\nRed Hat font." },
"Lohit Gujarati": { notes:"Red Hat font." },
"Lohit Punjabi": { notes:"Red Hat font." },
"Lohit Tamil": { notes:"Red Hat font." },
"Mangal": { notes:"Designed for use as a UI font." },
"Microsoft Sans Serif": { notes:"Very legible UI font, designed for metric compatibility with the MS Sans bitmap font shipped in early versions of Windows." },
"Microsoft Uighur": { notes:"Follows Persian type examples as is traditional with Uighur fonts. Enhanced for legibility in small sizes." },
"OskiEast": { notes:"For  Moose Cree, East Cree, Inuktitut, Naskapi, Eastern Ojibway.\nModern styling. 'h' is different from OskiWest." },
"OskiWest": { notes:"For Plains Cree, Swampy Cree, Woods Cree, Oji-Cree, Western Ojibway.\nModern styling. 'h' is different from OskiEast." },
"Sakkal Majalla": { notes: "Naskh style." },
"Sanskrit Text": { notes:"For Sanskrit.\nDesign targets typesetting of Sanskrit texts in a traditional style, incl. Vedic symbols and marks." },
"Scheherazade": { notes: "“Simplified” naskh style, preferred for clarity, esp. in non-Arabic languages, without ligatures/contextual alternates other than lam-alef."},
"Segoe UI": { notes: "For Latn, Grek, Cyrl, Armn, Geor, Geok, Arab, Hebr, Lisu."},
"Shruti": { notes:"Designed for use as a UI font." },
"Sylfaen": { notes:"For Armn, Cyrl, Geor, Grek, Latn." },
"Symbola": { notes: "For a wide range of Unicode blocks, esp. extended Latin, symbols, ancient scripts, etc."},
"Tahoma": { notes:"For Arab, Armn, Cyrl, Grek, Hebr, Latn, Thai.\nDesigned for on-screen display, particularly at small sizes in dialog boxes and menus." },
"Trebuchet MS": { notes:"For Armn, Cyrl, Grek, Latn.\nDesign focuses on readability for on-screen use, well-suited to extended texts, UI, and spreadsheets." },
"Utsaah": { notes:"For Hindi." },
"Uttara": { notes:"For Sanskrit + all deva languages, incl. Hindi, Konkani, Marathi, Nepali.\nDesign: old Northern or Kolkata glyphs, extensive conjuncts for Sanskrit, Vedic accents" },
"Verdana": { notes:"For Armn, Cyrl, Grek, Latn.\nDesign focuses on readability for on-screen use." },


}


/*
Other LATIN fonts: Quivira, Unifont, Gentium, GentiumAlt

[ "Other ETHIOPIC fonts", "AmharicLSU", "Ethiopia Jiret", "Ethiopic Fantuwua","Ethiopic Hiwua", "Ethiopic Tint", "Ethiopic Wookianos", "Ethiopic Yebse", "Ethiopic Yigezu Bisrat Goffer", "EthiopicLSU", "Geez Unicode", "GF Zemen Unicode", "GS GeezMahtemUnicode","Visual Geez Unicode", "Visual Geez Unicode Agazian", "Visual Geez Unicode Title" ],

[ "Other THAI fonts", "Cordia UPC", "Courier MonoThai", "Courier ProportionalThai","FMBF Tahoma", "Garuda", "Kinnari", "Loma" ],

[ "Other KHMER fonts", "Battambang", "CDT Khmer", "Khmer Angkulileka", "Khmer Chanta", "Khmer Kampongtrach", "Khmer Kampot", "Khmer Kep", "KHMER Kolab", "Khmer Mondulkiri-s", "Khmer Mool" ],
[ "More khmer fonts", "Khmer Nettra", "Khmer Old Style", "Khmer OS", "Khmer OS Battambang", "Khmer OS Fasthand", "Khmer OS Freehand", "Khmer OS System", "Khmer Vanara", "PhnomPenh OT", "sans-serif","serif" ],

[ "DEVANAGARI fonts", Aakar, "AA_NAGARI_SHREE_L1", "AA_NAGARI_SHREE_L2", "AA_NAGARI_SHREE_L3","Akhil HE", "Akshar Unicode", "CDAC-GISTSurekh", "CDAC-GISTYogesh", "DVBOTSurekh", "Gargi", "Jaipur Unicode NFLC", "JanaHindi", "JanaMarathi","JanaSanskrit", "Madan", "Samanata", "Samyak", "SamyakSans", "Sanskrit 2003","Santipur OT", "shiDeva", "SiddhiUni","Thyaka Rabison", "zviewGurumaa", "Arial Unicode MS" ],

[ "Other LATIN fonts", "Berling Antiqua","Cardo", "Chrysanthi Unicode", "DejaVu Sans", "DejaVu Serif", "Dialekt Uni", "Free Serif", "Frutiger Linotype", "Gandhari Unicode", "Hindsight Unicode","IPA LS Uni", "Lucida Sans", "Lucida Sans Unicode", "Thryomanes", "TITUS Cyberbit Basic", "Sanskrit 2003","Santipur OT", "shiDeva", "SiddhiUni","Thyaka Rabison", "zviewGurumaa", "Arial Unicode MS" ],

[ Other TFNG fonts:
{ name:"Tamalout Noufuss Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Tamalout Standard Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Tamzwart Noufuss Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Tamzwart Standard Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Tassafout Noufuss Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Tassafout Standard Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Tazdayt Noufuss Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Tazirit Unicode",	system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Teddus Noufuss Unicode",system:new Set([other]), locales:new Set(['tfng']) },
{ name:"Teddus Standard Unicode",system:new Set([other]), locales:new Set(['tfng']) },
]
[ Other GEORGIAN fonts]
{ name:"BPG Classic 99U",	system:new Set([other]), locales:new Set(['geor']) },
{ name:"BPG Paata Khutsuri U",system:new Set([other]), locales:new Set(['geor']) },

Other HEBREW font: Open Sans Hebrew, Aleph Hebrew, David Transparent, Miriam Transparent, Monotype Hadassah, TopType Soncino

Other TIBETAN fonts: Uchen_05
Wangdi29
XenoType Tibetan New
XTashi

GUJARATI  Aakar, Rekha
*/
