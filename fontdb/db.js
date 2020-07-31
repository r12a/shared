const yes = 'yes'
const mac = 'mac'
const ios = 'ios'
const win = 'win'
const sil = 'sil'
const goog = 'goog'
const other = 'other'

var fontDB = [



/* serif/default */
{ name:"Noto Sans Adlam",	system:new Set([goog]), locales:new Set(['adlm']), style:new Set(['serif']) },
{ name:"Noto Sans Adlam Unjoined",system:new Set([goog]), locales:new Set(['adlm']), style:new Set(['serif']) },
{ name:"Noto Serif Armenian",system:new Set([goog]), locales:new Set(['armn']), style:new Set(['serif']) },
{ name:"Sylfaen",			system:new Set([win]), locales:new Set(['armn', 'cyrl', 'geor', 'grek']), style:new Set(['serif']) },
{ name:"Bangla MN",			system:new Set([mac]), locales:new Set(['beng']) },
{ name:"Kokila",			system:new Set([win]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Noto Serif Bengali",system:new Set([goog]), locales:new Set(['beng']) },
{ name:"Shonar Bangla",		system:new Set([win]), locales:new Set(['beng']) },
{ name:"Plantagenet Cherokee",system:new Set([mac,win]), locales:new Set(['cher']) },
{ name:"Annapurna SIL",		system:new Set([sil]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Cambay Devanagari",	system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Devanagari MT",		system:new Set([mac]), locales:new Set(['deva', 'deva-hi']) },
{ name:"Noto Serif Devanagari",system:new Set([goog]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Sanskrit Text",		system:new Set([win]), locales:new Set(['deva']) },
{ name:"Tiro Hindi",		system:new Set([mac]), locales:new Set(['deva', 'deva-hi', 'new']) },
{ name:"Tiro Marathi",		system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Tiro Sanskrit",		system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Abyssinica SIL",	system:new Set([sil]), locales:new Set(['ethi']), style:new Set(['serif']) },
{ name:"Noto Serif Ethiopic",system:new Set([goog]), locales:new Set(['ethi']) },
{ name:"Nyala",				system:new Set([win]), locales:new Set(['ethi']) },
{ name:"Noto Serif Georgian",system:new Set([goog]), locales:new Set(['geor']) },
{ name:"Gujarati MT",		system:new Set([mac]), locales:new Set(['gujr']) },
{ name:"Noto Serif Gujarati",system:new Set([goog]), locales:new Set(['gujr']) },
{ name:"Gurmukhi MT",		system:new Set([mac]), locales:new Set(['guru']) },
{ name:"Tiro Gurmukhi",		system:new Set([mac]), locales:new Set(['guru', 'new']) },
{ name:"David",				system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Ezra SIL",			system:new Set([sil]), locales:new Set(['hebr']) },
{ name:"Ezra SIL SR",		system:new Set([sil]), locales:new Set(['hebr']) },
{ name:"FrankRuehl",		system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Narkisim",			system:new Set([win]), locales:new Set(['hebr']) },
{ name:"New Peninim MT",	system:new Set([mac]), locales:new Set(['hebr']) },
{ name:"Noto Serif Hebrew",	system:new Set([goog]), locales:new Set(['hebr']) },
{ name:"Raanana",			system:new Set([mac]), locales:new Set(['hebr']) },
{ name:"Times New Roman",	system:new Set([win, mac, ios]), locales:new Set(['cyrl', 'grek', 'hebr']) },
{ name:"Kannada MN",		system:new Set([mac, ios]), locales:new Set(['knda']) },
{ name:"Noto Serif Kannada",system:new Set([goog, mac]), locales:new Set(['knda']) },
{ name:"Tiro Kannada",		system:new Set([mac]), locales:new Set(['knda', 'new']) },
{ name:"DaunPenh",			system:new Set([win]), locales:new Set(['khmr']) },
{ name:"Khmer Busra",		system:new Set([sil]), locales:new Set(['khmr']) },
{ name:"Khmer Mondulkiri",	system:new Set([sil]), locales:new Set(['khmr']) },
{ name:"Khmer MN",			system:new Set([mac]), locales:new Set(['khmr']) },
{ name:"Khmer Sangam MN",	system:new Set([mac, ios]), locales:new Set(['khmr']) },
{ name:"Noto Serif Khmer",	system:new Set([goog]), locales:new Set(['khmr']) },
{ name:"Noto Sans Khmer",	system:new Set([goog]), locales:new Set(['khmr']) },
{ name:"Lao MN",			system:new Set([mac]), locales:new Set(['laoo']) },
{ name:"Lao Sangam MN",		system:new Set([mac, ios]), locales:new Set(['laoo']) },
{ name:"Noto Serif Lao",	system:new Set([goog]), locales:new Set(['laoo']) },
{ name:"Malayalam MN",		system:new Set([mac]), locales:new Set(['mlym']) },
{ name:"Noto Serif Malayalam",system:new Set([goog]), locales:new Set(['mlym']) },
{ name:"Mongolian Baiti",	system:new Set([win]), locales:new Set(['mong']) },
{ name:"Mongolian Universal White",system:new Set([other]), locales:new Set(['mong']) },
{ name:"Myanmar MN",		system:new Set([mac]), locales:new Set(['mymr']) },
{ name:"Noto Serif Myanmar",system:new Set([goog, mac]), locales:new Set(['mymr']) },
{ name:"Padauk Book",		system:new Set([sil]), locales:new Set(['mymr', 'mymr-shn']) },
{ name:"Barnsdall",			system:new Set([other]), locales:new Set(['osge']) },
{ name:"Iskoola Pota",		system:new Set([win]), locales:new Set(['sinh']) },
{ name:"Noto Serif Sinhala",system:new Set([goog]), locales:new Set(['sinh']) },
{ name:"Sinhala MN",		system:new Set([mac]), locales:new Set(['sinh']) },
{ name:"Estrangelo Edessa",	system:new Set([win]), locales:new Set(['syrc']) },
{ name:"Lamphun",			system:new Set([other]), locales:new Set(['lana','lana-nod']) },
{ name:"Noto Serif Tamil",	system:new Set([goog]), locales:new Set(['taml']) },
{ name:"Tiro Tamil",		system:new Set([mac]), locales:new Set(['taml', 'new']) },
{ name:"Telugu MN",			system:new Set([mac]), locales:new Set(['telu']) },
{ name:"Noto Serif Telugu",	system:new Set([goog]), locales:new Set(['telu']) },
{ name:"Tiro Telugu",		system:new Set([mac]), locales:new Set(['telu', 'new']) },
{ name:"Vani",				system:new Set([win]), locales:new Set(['telu']) },
{ name:"Angsana New",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"AngsanaUPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"IrisUPC",			system:new Set([win]), locales:new Set(['thai']) },
{ name:"Noto Serif Thai",	system:new Set([yes,goog]), locales:new Set(['thai']) },
{ name:"Kailasa",			system:new Set([mac, ios]), locales:new Set(['tibt']) },
{ name:"Kokonor",			system:new Set([mac]), locales:new Set(['tibt']) },
{ name:"Microsoft Himalaya",system:new Set([win]), locales:new Set(['tibt']) },

{ name:"Noto Serif Balinese",system:new Set([goog]), locales:new Set(['bali']) },




/* naskh */
{ name:"Al Bayan",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:new Set(['naskh']) },
{ name:"Al Nile",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb']), style:new Set(['naskh']) },
{ name:"Al Tarikh",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:new Set(['naskh']) },
{ name:"Arabic Typesetting",system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa', 'arab-ug', 'arab-ur']), style:new Set(['naskh']) },
{ name:"Arial",				system:new Set([win, mac, ios]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'germ', 'arab', 'arab-arb', 'arab-ha', 'grek', 'hebr', 'arab-fa', 'arab-ug']), style:new Set(['naskh']) },
{ name:"Baghdad",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:new Set(['naskh']) },
{ name:"Damascus",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa']), style:new Set(['naskh']) },
{ name:"Decotype Naskh",	system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:new Set(['naskh']) },
{ name:"Geeza Pro",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa', 'arab-ug']), style:new Set(['naskh']) },
{ name:"Sakkal Majalla",	system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa']), style:new Set(['naskh']) },
{ name:"Scheherazade",		system:new Set([sil]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa', 'arab-ha', 'arab-ug', 'arab-ur']), style:new Set(['naskh']) },
{ name:"Traditional Arabic",system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-fa', 'arab-ug']), style:new Set(['naskh']) },
{ name:"Lateef",			system:new Set([sil]), locales:new Set(['arab', 'arab-fa']), style:new Set(['naskh']) },
{ name:"Mishafi",			system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb']), style:new Set(['naskh']) },
{ name:"Mishafi Gold",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:new Set(['naskh']) },
{ name:"Muna",				system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:new Set(['naskh']) },
{ name:"Nadeem",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:new Set(['naskh']) },
{ name:"Simplified Arabic",	system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa', 'arab-ha', 'arab-ug']), style:new Set(['naskh']) },



/* sans-serif */
{ name:"Arial Unicode MS",	system:new Set([mac, win]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'germ', 'arab', 'arab-arb', 'arab-sans', 'thai', 'armn', 'cyrl', 'geor', 'grek', 'hebr', 'arab-fa', 'arab-ug']), style:new Set(['sans']) },
{ name:"Ebrima",			system:new Set([win]), locales:new Set(['ethi','adlm','nkoo', 'osma', 'tfng', 'tfng-ber', 'vaii']), style:new Set(['sans']) },
{ name:"Noto Naskh Arabic",	system:new Set([goog]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa', 'arab-ha', 'arab-ug']), style:new Set(['sans']) },
{ name:"Noto Sans Adlam New",system:new Set([goog]), locales:new Set(['adlm']), style:new Set(['sans']) },
{ name:"Noto Sans Armenian",system:new Set([goog]), locales:new Set(['armn']), style:new Set(['sans']) },
{ name:"Tahoma",			system:new Set([mac, win]), locales:new Set(['arab', 'arab-arb','thai', 'grek', 'hebr', 'arab-fa', 'arab-ha', 'arab-ug', 'arab-sans']), style:new Set(['sans']) },
{ name:"Myriad Arabic",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:new Set(['sans']) },
{ name:"Noto Sans Arabic",	system:new Set([goog]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa', 'arab-ha', 'arab-sans']), style:new Set(['sans']) },
{ name:"Noto Sans Arabic Light",system:new Set([goog]), locales:new Set(['arab', 'arab-arb', 'arab-ajami', 'arab-fa', 'arab-ha', 'arab-sans']), style:new Set(['sans']) },
{ name:"Segoe UI",			system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'cyrl', 'geor', 'grek','hebr', 'arab-fa', 'arab-ha', 'lisu']), style:new Set(['sans']) },
{ name:"Nirmala UI",		system:new Set([win]), locales:new Set(['beng', 'gujr', 'guru', 'mlym', 'sinh', 'telu']) },
{ name:"Bangla Sangam MN",	system:new Set([mac]), locales:new Set(['beng']) },
{ name:"Kohinoor Bangla",	system:new Set([mac, ios]), locales:new Set(['beng']) },
{ name:"Noto Sans Bengali",	system:new Set([goog]), locales:new Set(['beng']) },
{ name:"Vrinda",			system:new Set([win]), locales:new Set(['beng']) },
{ name:"Tiro Bangla",		system:new Set([mac]), locales:new Set(['beng', 'new']) },
{ name:"Euphemia",			system:new Set([win]), locales:new Set(['cans']) },
{ name:"Euphemia UCAS",		system:new Set([mac, ios]), locales:new Set(['cans']) },
{ name:"Gadugi",			system:new Set([win]), locales:new Set(['cans','cher']) },
{ name:"Galvji",			system:new Set([mac, ios]), locales:new Set(['cher']) },
{ name:"Geneva",			system:new Set([mac]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek', 'germ', 'cher']) },
{ name:"Noto Sans Canadian Aboriginal",	system:new Set([goog]), locales:new Set(['cans']) },
{ name:"Noto Sans Cherokee",system:new Set([goog]), locales:new Set(['cher']) },
{ name:"Devanagari Sangam MN",system:new Set([mac, ios]), locales:new Set(['deva', 'deva-hi']) },
{ name:"ITF Devanagari",	system:new Set([mac]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"ITF Devanagari Marathi",system:new Set([mac]), locales:new Set(['deva', 'deva-ks']) },
{ name:"Kohinoor Devanagari",system:new Set([mac, ios]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Mangal",			system:new Set([win]), locales:new Set(['deva', 'deva-hi']) },
{ name:"Mukta",				system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Noto Sans Devanagari",system:new Set([goog]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Shree Devanagari 714",system:new Set([mac]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Utsaah",			system:new Set([win]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Kefa",				system:new Set([mac, ios]), locales:new Set(['ethi']) },
{ name:"Noto Sans Ethiopic",system:new Set([goog]), locales:new Set(['ethi']) },
{ name:"Helvetica",			system:new Set([mac, ios]), locales:new Set(['latn', 'latn-afr', 'ipa', 'germ', 'cyrl', 'grek', 'geor']) },
{ name:"Helvetica Neue",	system:new Set([mac, ios]), locales:new Set(['latn', 'cyrl', 'grek', 'geor']) },
{ name:"Menlo",				system:new Set([mac]), locales:new Set(['geor']) },
{ name:"Noto Sans Georgian",system:new Set([goog]), locales:new Set(['geor']) },
{ name:"Gujarati Sangam MN",system:new Set([mac]), locales:new Set(['gujr']) },
{ name:"Noto Sans Gujarati",system:new Set([goog]), locales:new Set(['gujr']) },
{ name:"Kohinoor Gujarati",	system:new Set([mac, ios]), locales:new Set(['gujr']) },
{ name:"Shruti",			system:new Set([win]), locales:new Set(['gujr']) },
{ name:"Mukta Vaani",		system:new Set([mac]), locales:new Set(['gujr', 'new']) },
{ name:"Noto Sans Gurmukhi",system:new Set([goog]), locales:new Set(['guru']) },
{ name:"Gurmukhi MN",		system:new Set([mac]), locales:new Set(['guru']) },
{ name:"Lahore Gurmukhi",	system:new Set([mac]), locales:new Set(['guru', 'new']) },
{ name:"Mukta Mahee",		system:new Set([mac]), locales:new Set(['guru']) },
{ name:"Raavi",				system:new Set([win]), locales:new Set(['guru']) },
{ name:"Mukta Malar",		system:new Set([mac]), locales:new Set(['taml', 'new']) },
{ name:"Aharoni",			system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Arial Hebrew",		system:new Set([mac, ios]), locales:new Set(['hebr']) },
{ name:"Arial Hebrew Scholar",system:new Set([mac]), locales:new Set(['hebr']) },
{ name:"Cordia New",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"Cordia UPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"Gisha",				system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Levenim MT",		system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Miriam",			system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Noto Sans Hebrew",	system:new Set([goog]), locales:new Set(['hebr']) },
{ name:"Kannada Sangam MN",	system:new Set([mac, ios]), locales:new Set(['knda']) },
{ name:"Noto Sans Kannada",	system:new Set([goog, mac, ios]), locales:new Set(['knda']) },
{ name:"Tunga",				system:new Set([win]), locales:new Set(['knda']) },
{ name:"Noto Sans Lao",		system:new Set([goog]), locales:new Set(['laoo']) },
{ name:"Kartika",			system:new Set([win]), locales:new Set(['mlym']) },
{ name:"Malayalam Sangam MN",system:new Set([mac, ios]), locales:new Set(['mlym']) },
{ name:"Noto Sans Malayalam",system:new Set([goog]), locales:new Set(['mlym']) },
{ name:"Noto Sans Mongolian",system:new Set([goog]), locales:new Set(['mong']) },
{ name:"Myanmar Sangam MN",	system:new Set([mac, ios]), locales:new Set(['mymr']) },
{ name:"Myanmar Text",		system:new Set([win]), locales:new Set(['mymr', 'mymr-shn']) },
{ name:"Myanmar3",			system:new Set([other]), locales:new Set(['mymr']) },
{ name:"Noto Sans Myanmar",	system:new Set([goog, mac, ios]), locales:new Set(['mymr', 'mymr-shn']) },
{ name:"Padauk",			system:new Set([sil]), locales:new Set(['mymr', 'mymr-shn']) },
{ name:"Dai Banna SIL Book",system:new Set([sil]), locales:new Set(['talu']) },
{ name:"Dai Banna SIL Light",system:new Set([sil]), locales:new Set(['talu']) },
{ name:"Microsoft New Tai Lue",system:new Set([win]), locales:new Set(['talu']) },
{ name:"Noto Sans New Tai Lue",system:new Set([goog]), locales:new Set(['talu']) },
{ name:"Conakry",			system:new Set([other]), locales:new Set(['nkoo']) },
{ name:"Noto Sans Nko",		system:new Set([goog]), locales:new Set(['nkoo']) },
{ name:"Noto Sans Oriya",	system:new Set([goog, mac, ios]), locales:new Set(['orya']) },
{ name:"Oriya MN",			system:new Set([mac]), locales:new Set(['orya']) },
{ name:"Oriya Sangam MN",	system:new Set([mac]), locales:new Set(['orya']) },
{ name:"Noto Sans Osage",	system:new Set([goog]), locales:new Set(['osge']) },
{ name:"Noto Sans Osmanya",	system:new Set([goog]), locales:new Set(['osma']) },
{ name:"Microsoft PhagsPa",	system:new Set([win]), locales:new Set(['phag']) },
{ name:"Noto Sans PhagsPa",system:new Set([goog]), locales:new Set(['phag']) },
{ name:"Noto Sans Sinhala",	system:new Set([goog]), locales:new Set(['sinh']) },
{ name:"Sinhala Sangam MN",	system:new Set([mac, ios]), locales:new Set(['sinh']) },
{ name:"Microsoft Tai Le",	system:new Set([win]), locales:new Set(['tale']) },
{ name:"Noto Sans Tai Le",	system:new Set([goog]), locales:new Set(['tale']) },
{ name:"Tharlon",			system:new Set([sil]), locales:new Set(['mymr', 'mymr-shn', 'tale']) },
{ name:"Segoe UI Historic",	system:new Set([win]), locales:new Set(['runr', 'syrc']) },
{ name:"Noto Sans Syriac Eastern",system:new Set([goog]), locales:new Set(['syrc']) },
{ name:"Noto Sans Syriac Estrangela",system:new Set([goog]), locales:new Set(['syrc']) },
{ name:"Noto Sans Syriac Western",system:new Set([goog]), locales:new Set(['syrc']) },
{ name:"Noto Sans Tai Tham",system:new Set([goog]), locales:new Set(['lana', 'lana-kkh', 'lana-nod']) },
{ name:"InaiMathi",			system:new Set([mac]), locales:new Set(['taml']) },
{ name:"Latha",				system:new Set([win]), locales:new Set(['taml']) },
{ name:"Noto Sans Tamil",	system:new Set([goog]), locales:new Set(['taml']) },
{ name:"Tamil MN",			system:new Set([mac]), locales:new Set(['taml']) },
{ name:"Tamil Sangam MN",	system:new Set([mac, ios]), locales:new Set(['taml']) },
{ name:"Gautami",			system:new Set([win]), locales:new Set(['telu']) },
{ name:"Kohinoor Telugu",	system:new Set([mac, ios]), locales:new Set(['telu']) },
{ name:"Noto Sans Telugu",	system:new Set([goog]), locales:new Set(['telu']) },
{ name:"Telugu Sangam MN",	system:new Set([mac]), locales:new Set(['telu']) },
{ name:"MV Boli",			system:new Set([win]), locales:new Set(['thaa']) },
{ name:"Noto Sans Thaana",	system:new Set([goog]), locales:new Set(['thaa']) },
{ name:"Ayuthaya",			system:new Set([mac]), locales:new Set(['thai']) },
{ name:"Browallia New",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"BrowalliaUPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"DilleniaUPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"EucrosiaUPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"FreesiaUPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"Leelawadee",		system:new Set([win]), locales:new Set(['thai', 'bugi']) },
{ name:"Noto Sans Thai",	system:new Set([yes,goog]), locales:new Set(['thai']) },
{ name:"PSL Ornanong Pro",	system:new Set([mac]), locales:new Set(['thai']) },
{ name:"Sathu",				system:new Set([mac]), locales:new Set(['thai']) },
{ name:"Silom",				system:new Set([mac]), locales:new Set(['thai']) },
{ name:"Thonburi",			system:new Set([mac, ios]), locales:new Set(['thai']) },
{ name:"Noto Sans Tibetan",	system:new Set([goog]), locales:new Set(['tibt']) },
{ name:"Akatab",			system:new Set([sil]), locales:new Set(['tfng']) },
{ name:"Hapax Berbère",		system:new Set([other]), locales:new Set(['tfng', 'tfng-ber']) },
{ name:"Noto Sans Tifinagh",system:new Set([goog]), locales:new Set(['tfng', 'tfng-ber']) },
{ name:"Tagmukay",			system:new Set([sil]), locales:new Set(['tfng']) },
{ name:"Tifinaghe-Ircam Unicode",system:new Set([other]), locales:new Set(['tfng', 'tfng-ber']) },
{ name:"Noto Sans Vai",		system:new Set([goog]), locales:new Set(['vaii']) },
{ name:"Microsoft Yi Baiti",system:new Set([win]), locales:new Set(['yiii']) },
{ name:"Noto Sans Yi",		system:new Set([goog]), locales:new Set(['yiii']) },


{ name:"Noto Sans",			system:new Set([goog]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek']) },
{ name:"Noto Sans Light",	system:new Set([goog]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl']) },
{ name:"Noto Sans Balinese",system:new Set([goog]), locales:new Set(['bali']) },
{ name:"Noto Sans Bassa Vah",system:new Set([goog]), locales:new Set(['bass']) },
{ name:"Noto Sans Buginese",system:new Set([goog]), locales:new Set(['bugi']) },
{ name:"Noto Sans Javanese",system:new Set([goog, mac]), locales:new Set(['java']) },
{ name:"Noto Sans Lisu",	system:new Set([goog]), locales:new Set(['lisu']) },
{ name:"Noto Sans Mandaic",	system:new Set([goog]), locales:new Set(['mand']) },
{ name:"Noto Sans Runic",	system:new Set([goog]), locales:new Set(['runr']) },
{ name:"Noto Sans Sundanese",system:new Set([goog]), locales:new Set(['sund']) },
{ name:"Noto Sans Tai Viet",system:new Set([goog]), locales:new Set(['tavt']) },
{ name:"Noto Serif",		system:new Set([goog]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek']) },

/* no circle */
{ name:"JasmineUPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"KodchiangUPC",		system:new Set([win]), locales:new Set(['thai']) },
{ name:"LilyUPC",			system:new Set([win]), locales:new Set(['thai']) },
{ name:"Sukhumvit Set",		system:new Set([mac]), locales:new Set(['thai']) },

/* thuluth */
{ name:"Diwan Thuluth",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-thul']), style:new Set(['thuluth']) },

/* ruq'a */
{ name:"Waseem",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-ruqa']), style:new Set(['ruqa']) },

/* ajami */
{ name:"Alkalami",			system:new Set([sil]), locales:new Set(['arab','arab-ajami', 'arab-ha']), style:new Set(['ajami', 'kano']) },
{ name:"Alkalami Light",	system:new Set([sil]), locales:new Set(['arab','arab-ajami', 'arab-ha']), style:new Set(['ajami', 'kano']) },
{ name:"Harmattan",			system:new Set([sil]), locales:new Set(['arab', 'arab-ajami', 'arab-ha']), style:new Set(['ajami','sans']) },

/* kufi */
{ name:"Andalus",			system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-arb', 'arab-fa']), style:new Set(['kufi']) },
{ name:"Diwan Kufi",		system:new Set([mac]), locales:new Set(['arab', 'arab-arb']), style:new Set(['kufi']) },
{ name:"KufiStandardGK",	system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:new Set(['kufi']) },
{ name:"Noto Kufi Arabic",	system:new Set([goog]), locales:new Set(['arab', 'arab-arb']), style:new Set(['kufi']) },
{ name:"Sana",				system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-other']), style:new Set(['kufi']) },

/* nastaliq */
{ name:"Aldhabi",			system:new Set([win]), locales:new Set(['arab', 'arab-arb', 'arab-fa', 'arab-ur']), style:new Set(['aran']) },
{ name:"Awami Nastaliq",	system:new Set([sil]), locales:new Set(['arab', 'arab-ur']), style:new Set(['aran']) },
{ name:"Farisi",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-fa']), style:new Set(['aran']) },
{ name:"Noto Nastaliq Urdu",system:new Set([goog, mac, ios]), locales:new Set(['arab', 'arab-ur']), style:new Set(['aran']) },
{ name:"Urdu Typesetting",	system:new Set([win]), locales:new Set(['arab-ur']), style:new Set(['aran']) },

/* slanted */
{ name:"Corsiva Hebrew",	system:new Set([mac]), locales:new Set(['hebr']) },
{ name:"Vijaya",			system:new Set([win]), locales:new Set(['taml']) },

/* mool */
{ name:"MoolBoran",			system:new Set([win]), locales:new Set(['khmr']) },

/* script */
{ name:"Mongolian Writing",	system:new Set([other]), locales:new Set(['mong']) },

/* heavy */
{ name:"Baloo Bhai",		system:new Set([mac]), locales:new Set(['gujr', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Bhaina",		system:new Set([mac]), locales:new Set(['orya', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Bhaijaan",	system:new Set([mac]), locales:new Set(['arab', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Chettan",		system:new Set([mac]), locales:new Set(['mlym', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Da",			system:new Set([mac]), locales:new Set(['beng', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Paaji",		system:new Set([mac]), locales:new Set(['guru', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Tamma",		system:new Set([mac]), locales:new Set(['knda', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Tammudu",		system:new Set([mac]), locales:new Set(['telu', 'new']), style:new Set(['heavy','other']) },
{ name:"Baloo Thambi",		system:new Set([mac]), locales:new Set(['taml', 'new']), style:new Set(['heavy','other']) },
{ name:"Beirut",			system:new Set([mac]), locales:new Set(['arab', 'arab-arb', 'arab-other']), style:new Set(['heavy','other']) },
{ name:"Baloo",				system:new Set([mac]), locales:new Set(['deva', 'new']), style:new Set(['heavy','other']) },
{ name:"Modak",				system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Krungthep",			system:new Set([mac]), locales:new Set(['thai']) },


/* eastern */

/* western */

/* khun */
{ name:"A Tai Tham KH",		system:new Set([other]), locales:new Set(['lana','lana-nod']), style:new Set(['khun']) },
{ name:"A Tai Tham KH New",	system:new Set([other]), locales:new Set(['lana', 'lana-kkh', 'lana-nod']), style:new Set(['khun']) },

/* nthai */

/* other */
{ name:"Aparajita",			system:new Set([win]), locales:new Set(['deva', 'deva-hi', 'deva-ks']) },
{ name:"Courier New",		system:new Set([win, ios]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'arab', 'arab-arb', 'arab-fa', 'arab-ha', 'arab-other', 'hebr']), style:new Set(['other',  'monospace']) },
{ name:"Simplified Arabic Fixed",system:new Set([win]), locales:new Set(['arab', 'arab-arb']), style:new Set(['other','monospace']) },
{ name:"Farah",				system:new Set([mac, ios]), locales:new Set(['arab', 'arab-arb', 'arab-scrip']), style:new Set(['other']) },
{ name:"Gotu",				system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Jaini",				system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Jaini Purva",		system:new Set([mac]), locales:new Set(['deva', 'new']) },
{ name:"Noto Rashi Hebrew",	system:new Set([goog]), locales:new Set(['hebr']) },
{ name:"Miriam Fixed",		system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Rod",				system:new Set([win]), locales:new Set(['hebr']) },
{ name:"Khmer UI",			system:new Set([win]), locales:new Set(['khmr']) },
{ name:"Lao UI",			system:new Set([win]), locales:new Set(['laoo']) },
{ name:"DokChampa",			system:new Set([win]), locales:new Set(['thai', 'laoo']) },






{ name:"Andale Mono",		system:new Set([mac]), locales:new Set(['grek']) },
{ name:"Avenir",			system:new Set([mac, ios]), locales:new Set(['latn', 'germ']) },
{ name:"Avenir Next",		system:new Set([mac, ios]), locales:new Set(['latn', 'germ', 'grek', 'cyrl']) },
{ name:"Bradley Hand",		system:new Set([mac]), locales:new Set(['grek']) },
{ name:"Calibri",			system:new Set([win]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa']) },
{ name:"Cambria",			system:new Set([win]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa']) },
{ name:"Candara",			system:new Set([win]), locales:new Set([]) },
{ name:"Consolas",			system:new Set([win]), locales:new Set(['latn', 'latn-ha', 'ipa', 'latn-afr']) },
{ name:"Constantia",		system:new Set([win]), locales:new Set([]) },
{ name:"Charis SIL",		system:new Set([sil]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'germ']) },
{ name:"Corbel",			system:new Set([win]), locales:new Set(['latn']) },
{ name:"Doulos SIL",		system:new Set([sil]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'germ']) },
{ name:"Gabriola",			system:new Set([win]), locales:new Set(['grek']) },
{ name:"Gentium Plus",		system:new Set([sil]), locales:new Set(['latn', 'latn-ha', 'latn-afr', 'ipa', 'cyrl', 'grek', 'germ']) },
{ name:"Gill Sans",			system:new Set([mac]), locales:new Set(['latn']) },
{ name:"Javanese Text",		system:new Set([win]), locales:new Set(['java']) },
{ name:"JG Bassa Vah Unicode",system:new Set([yes,other]), locales:new Set(['bass']) },
{ name:"Lucida Grande",		system:new Set([mac]), locales:new Set(['latn','latn-ha', 'latn-afr', 'ipa', 'germ']) },
{ name:"Makassar",			system:new Set([other]), locales:new Set(['bugi']) },
{ name:"MakasarGraphite",	system:new Set([other]), locales:new Set(['maka']) },
{ name:"Mshtakan",			system:new Set([mac]), locales:new Set(['armn']) },
{ name:"Noteworthy",		system:new Set([mac, ios]), locales:new Set(['cyrl', 'grek', 'latn']) },
{ name:"Palatino Linotype",	system:new Set([win]), locales:new Set(['cyrl', 'grek']) },
{ name:"Palatino",			system:new Set([mac]), locales:new Set(['cyrl', 'grek']) },
{ name:"Tai Heritage Pro WF",system:new Set([sil]), locales:new Set(['tavt']) },
{ name:"Trebuchet MS",		system:new Set([win, mac, ios]), locales:new Set(['cyrl', 'grek']) },
{ name:"Verdana",			system:new Set([win, mac, ios]), locales:new Set(['latn', 'cyrl', 'grek']) },




        
/* Song/Ming */
{ name:"NSimSun",			system:new Set([win]), locales:new Set(['hani', 'hans']), style:new Set(['song']) },
{ name:"SimSun",			system:new Set([win, mac]), locales:new Set(['hani', 'hans']), style:new Set(['song']) },
{ name:"SimSun-ExtB",		system:new Set([win]), locales:new Set(['hani', 'hans']), style:new Set(['song']) },
{ name:"Songti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['song']) },
{ name:"STSong",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['song']) },

/* Hei/Gothic */
{ name:"Hei",				system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"Heiti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"Lantinghei SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"Microsoft YaHei",	system:new Set([win]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"Noto Sans CJK SC",	system:new Set([goog]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"PingFang SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"SimHei",			system:new Set([win, mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"STHeiti",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"STXihei",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },
{ name:"Yuanti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['hei']) },

/* Fangsong */
{ name:"FangSong",			system:new Set([win]), locales:new Set(['hani', 'hans']), style:new Set(['fangsong']) },
{ name:"STFangsong",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['fangsong']) },

/* Kai */
{ name:"Kai",				system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['kai']) },
{ name:"KaiTi",				system:new Set([win]), locales:new Set(['hani', 'hans']), style:new Set(['kai']) },
{ name:"Kaiti SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['kai']) },
{ name:"STKaiti",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['kai']) },
{ name:"Xingkai SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['kai']) },

/* Other */
{ name:"Baoli SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"DengXian",			system:new Set([win]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"Hannotate SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"HanziPen SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"Libian SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"LingWai SC",		system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"Wawati SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"Weibei SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },
{ name:"Yuppy SC",			system:new Set([mac]), locales:new Set(['hani', 'hans']), style:new Set(['other']) },






/* Song/Ming */
{ name:"Apple LiSung",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },
{ name:"LiSong Pro",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },
{ name:"MingLiu",			system:new Set([win, mac]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },
{ name:"MingLiu-ExtB",		system:new Set([win]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },
{ name:"MingLiu-HKSCS-ExtB",system:new Set([win]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },
{ name:"PMingLiu",			system:new Set([win, mac]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },
{ name:"PMingLiu-ExtB",		system:new Set([win]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },
{ name:"Songti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['song']) },

/* Hei/Gothic */
{ name:"Apple LiGothic",	system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },
{ name:"Heiti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },
{ name:"Lantinghei TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },
{ name:"LiHei Pro",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },
{ name:"Microsoft JhengHei",system:new Set([win]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },
{ name:"Noto Sans CJK TC",	system:new Set([goog]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },
{ name:"PingFang TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },
{ name:"Yuanti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['hei']) },

/* Fangsong */

/* Kai */
{ name:"Biaukai",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['kai']) },
{ name:"DFKai-SB",			system:new Set([win]), locales:new Set(['hani', 'hant']), style:new Set(['kai']) },
{ name:"Kaiti TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['kai']) },
{ name:"Xingkai TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['kai']) },

/* Other */
{ name:"Baoli TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },
{ name:"Hannotate TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },
{ name:"HanziPen TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },
{ name:"Libian TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },
{ name:"LingWai TC",		system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },
{ name:"Wawati TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },
{ name:"Weibei TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },
{ name:"Yuppy TC",			system:new Set([mac]), locales:new Set(['hani', 'hant']), style:new Set(['other']) },





/* Mincho */
{ name:"MS Mincho",			system:new Set([win, mac]), locales:new Set(['jpan']) },
{ name:"MS PMincho",		system:new Set([win, mac]), locales:new Set(['jpan']) },
{ name:"Hiragino Mincho Pro",system:new Set([mac]), locales:new Set(['jpan']) },
{ name:"Noto Serif CJK JP",	system:new Set([goog]), locales:new Set(['jpan']) },
{ name:"Toppan Bunkyu Mincho",system:new Set([mac]), locales:new Set(['jpan']) },
{ name:"YuMincho",			system:new Set([mac]), locales:new Set(['jpan']) },

/* Gothic */
{ name:"Hiragino Kaku Gothic Pro",system:new Set([mac]), locales:new Set(['jpan']) },
{ name:"Hiragino Sans",		system:new Set([mac, ios]), locales:new Set(['jpan']) },
{ name:"Osaka",				system:new Set([mac]), locales:new Set(['jpan']) },
{ name:"Toppan Bunkyu Gothic",system:new Set([mac]), locales:new Set(['jpan']) },
{ name:"Meiryo",			system:new Set([win]), locales:new Set(['jpan']) },
{ name:"Meiryo UI",			system:new Set([win]), locales:new Set(['jpan']) },
{ name:"MS Gothic",			system:new Set([win, mac]), locales:new Set(['jpan']) },
{ name:"MS PGothic",		system:new Set([win, mac]), locales:new Set(['jpan']) },
{ name:"MS UI Gothic",		system:new Set([win, mac]), locales:new Set(['jpan']) },
{ name:"Noto Sans CJK JP",	system:new Set([goog]), locales:new Set(['jpan']) },
{ name:"YuGothic",			system:new Set([mac]), locales:new Set(['jpan']) },

/* Rounded */
{ name:"Hiragino Maru Gothic Pro",system:new Set([mac, ios]), locales:new Set(['jpan']) },
{ name:"Tsukushi A Round Gothic",system:new Set([mac]), locales:new Set(['jpan']) },
{ name:"Tsukushi B Round Gothic",system:new Set([mac]), locales:new Set(['jpan']) },

/* heavy */
{ name:"Toppan Bunkyu Midashi Gothic",system:new Set([mac]), locales:new Set(['jpan']) },

/* Other */
{ name:"YuKyokasho",		system:new Set([mac]), locales:new Set(['jpan']) },
{ name:"YuKyokasho Yoko",	system:new Set([mac]), locales:new Set(['jpan']) },




{ name:"AppleGothic",		system:new Set([mac]), locales:new Set(['kore']) },
{ name:"AppleMyungjo",		system:new Set([mac]), locales:new Set(['kore']) },
{ name:"Apple SD Gothic Neo",system:new Set([mac, ios]), locales:new Set(['kore']) },
{ name:"Gungseo",			system:new Set([mac]), locales:new Set(['kore']) },
{ name:"HeadlineA",			system:new Set([mac]), locales:new Set(['kore']) },
{ name:"PCMyungjo",			system:new Set([mac]), locales:new Set(['kore']) },
{ name:"PilGi",				system:new Set([mac]), locales:new Set(['kore']) },
{ name:"Nanum Brush Script",system:new Set([mac]), locales:new Set(['kore']) },
{ name:"Nanum Pen Script",	system:new Set([mac]), locales:new Set(['kore']) },
{ name:"Nanum Gothic",		system:new Set([mac]), locales:new Set(['kore']) },
{ name:"Nanum Myeongjo",	system:new Set([mac]), locales:new Set(['kore']) },
{ name:"Malgun Gothic",		system:new Set([win]), locales:new Set(['kore']) },
{ name:"Batang",			system:new Set([win]), locales:new Set(['kore']) },
{ name:"Dotum",				system:new Set([win]), locales:new Set(['kore']) },
{ name:"Gulim",				system:new Set([win]), locales:new Set(['kore']) },
{ name:"Gungsuh",			system:new Set([win]), locales:new Set(['kore']) },
{ name:"Noto Sans CJK KR",	system:new Set([goog]), locales:new Set(['kore']) },
{ name:"Noto Serif CJK KR",	system:new Set([goog]), locales:new Set(['kore']) },

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
"Arian Grqi": { notes:"Design is traditional book style." },
"Annapurna SIL": { notes:"For all S. Asian devanagari scripts.\nDesign inspired by traditional calligraphic forms, highly readable, reasonably compact, visually attractive." },
"Arial Unicode MS": { notes:"For Arab, Cyrl, Deva, Grek, Gujr, Guru, Hani, Hang, Hebr, Jpan, Latn, Mlym, Taml, Telu, Thai." },
"Aparajita": { notes:"For Hindi." },
"Awami Nastaliq": { notes:"[GRAPHITE] For a wide variety of languages of southwest Asia, including but not limited to Urdu, aimed at minority language support." },
"Brill": { notes: "For Latin with full range of diacritics and IPA, Greek, Cyrillic."},
"Calibri": { notes:"For Arab, Armn, Cyrl, Geok, Geor, Grek, Hebr, Latn.\nDesign proportions allow high impact in tightly set lines of big/small text with a warm and soft character." },
"Cambria": { notes:"For Armn, Cyrl, Grek, Latn.\nDesigned for on-screen reading and to look good when printed at small sizes. It has very even spacing and proportions." },
"Chandas": { notes:"For Sanskrit + all deva languages, incl. Hindi, Konkani, Marathi, Nepali.\nDesign, Southern (Mumbai) style glyphs, extensive conjuncts for Sanskrit, Vedic accents." },
"Charis SIL": { notes: "For latn, cyrl.\nDesign optimized for readability, and holds up well in less-than-ideal reproduction environments."},
"Consolas": { notes: "Armn, Cyrl, Grek, Latn.\nDesigned as a monospace font more readable than Courier."},
"Courier New": { notes: "Armn, Cyrl, Grek, Latn.\nDesigned to emulate typewriter output for reports, tabular work and technical documentation."},
"Doulos SIL": { notes: "For latn, cyrl.\nDesign supports correct placement of multiple diacritics. Useful for IPA."},
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
