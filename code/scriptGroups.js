// hand-crafted list of Unicode blocks
// field[3] is the iso code for the script (used for link to links page)
// field[4] gives the directory name for the character block file (for notes)
// field[5] indicates whether the block has SVG images
// NOTE: scripts must be listed in numerical order


var scriptGroups = [
["▲"],
[0,127,"Basic Latin","latn", "latn"],
[128,255,"Latin-1 Supplement","latn", "latn"],
[256,383,"Latin Extended-A","latn","latn"],
[384,591,"Latin Extended-B","latn","latn"],
[592,687,"IPA Extensions","latn","latn"],
[688,767,"Spacing Modifier Letters",""],
[768,879,"Combining Diacritical Marks","","",true],
[880,1023,"Greek and Coptic","grek", "grek"],
[1024,1279,"Cyrillic","cyrl", "cyrl"],
[1280,1327,"Cyrillic Supplement","cyrl","cyrl"],
[1328,1423,"Armenian","armn", "armn",true],
[1424,1535,"Hebrew","hebr", "hebr"],
[1536,1791,"Arabic","arab","arab", false],
[1792,1871,"Syriac","syrc", "syrc"],
[1872,1919,"Arabic Supplement","arab","arab"],
[1920,1983,"Thaana","thaa", "thaa",true],
[1984,2047,"NKo","nkoo", "nkoo"],
[2048,2111,"Samaritan","samr",""],
[2112,2143,"Mandaic","mand", "mand",false],
[2144,2159,"Syriac Supplement","syrc",""],
[2160,2207,"Arabic Extended-B","arab",""],
[2208,2303,"Arabic Extended-A","arab", "arab"],
[2304,2431,"Devanagari","deva", "deva"],
[2432,2559,"Bengali","beng", "beng"],
[2560,2687,"Gurmukhi","guru", "guru",false],
[2688,2815,"Gujarati","gujr","gujr"],
[2816,2943,"Oriya","orya","orya"],
[2944,3071,"Tamil","taml", "taml"],
[3072,3199,"Telugu","telu", "telu"],
[3200,3327,"Kannada","knda",""],
[3328,3455,"Malayalam","mlym", "mlym"],
[3456,3583,"Sinhala","sinh", "sinh"],
[3584,3711,"Thai","thai", "thai"],
[3712,3839,"Lao","laoo", "laoo"],
[3840,4095,"Tibetan","tibt", "tibt"],
[4096,4255,"Myanmar","mymr", "mymr"],
[4256,4351,"Georgian","geor", "geor"],
[4352,4607,"Hangul Jamo","hang",""],
[4608,4991,"Ethiopic","ethi", "ethi"],
[4992,5023,"Ethiopic Supplement","ethi", "ethi"],
[5024,5119,"Cherokee","cher", "cher"],
[5120,5759,"Unified Canadian Aboriginal Syllabics","cans","cans"],
[5760,5791,"Ogham","ogam",""],
[5792,5887,"Runic","runr","runr"],
[5888,5919,"Tagalog","tglg",""],
[5920,5951,"Hanunoo","hano",""],
[5952,5983,"Buhid","buhd",""],
[5984,6015,"Tagbanwa","tagb",""],
[6016,6143,"Khmer","khmr", "khmr"],
[6144,6319,"Mongolian","mong", "mong"],
[6320,6399,"Unified Canadian Aboriginal Syllabics Extended","cans","cans"],
[6400,6479,"Limbu","limb","limb"],
[6480,6527,"Tai Le","tale","tale"],
[6528,6623,"New Tai Lue","talu","talu"],
[6624,6655,"Khmer Symbols","khmr",""],
[6656,6687,"Buginese","bugi", "bugi"],
[6688,6831,"Tai Tham","lana", "lana"],
[6832,6911,"Combining Diacritical Marks Extended","","",true],
[6912,7039,"Balinese","bali", "bali",true],
[7040,7103,"Sundanese","sund", "sund"],
[7104,7167,"Batak","batk", "batk"],
[7168,7247,"Lepcha","lepc","lepc"],
[7248,7295,"Ol Chiki","olck","olck"],
[7296,7311,"Cyrillic Extended-C","cyrl","cyrl"],
[7312,7359,"Georgian Extended","geor", "geor"],
[7360,7375,"Sundanese Supplement","sund", "sund"],
[7376,7423,"Vedic Extensions","",""],
[7424,7551,"Phonetic Extensions","latn",""],
[7552,7615,"Phonetic Extensions Supplement","latn",""],
[7616,7679,"Combining Diacritical Marks Supplement","","",true],
[7680,7935,"Latin Extended Additional","latn",""],
[7936,8191,"Greek Extended","grek","grek"],
[8192,8303,"General Punctuation","", "punctuation"],
[8304,8351,"Superscripts and Subscripts","",""],
[8352,8399,"Currency Symbols","","currencysymbols"],
[8400,8447,"Combining Diacritical Marks for Symbols","",""],
[8448,8527,"Letterlike Symbols","",""],
[8528,8591,"Number Forms","",""],
[8592,8703,"Arrows","",""],
[8704,8959,"Mathematical Operators","",""],
[8960,9215,"Miscellaneous Technical","",""],
[9216,9279,"Control Pictures","",""],
[9280,9311,"Optical Character Recognition","",""],
[9312,9471,"Enclosed Alphanumerics","",""],
[9472,9599,"Box Drawing","",""],
[9600,9631,"Block Elements","",""],
[9632,9727,"Geometric Shapes","",""],
[9728,9983,"Miscellaneous Symbols","",""],
[9984,10175,"Dingbats","",""],
[10176,10223,"Miscellaneous Mathematical Symbols-A","",""],
[10224,10239,"Supplemental Arrows-A","",""],
[10240,10495,"Braille Patterns","",""],
[10496,10623,"Supplemental Arrows-B","",""],
[10624,10751,"Miscellaneous Mathematical Symbols-B","",""],
[10752,11007,"Supplemental Mathematical Operators","",""],
[11008,11263,"Miscellaneous Symbols and Arrows","",""],
[11264,11359,"Glagolitic","glag",""],
[11360,11391,"Latin Extended-C","latn",""],
[11392,11519,"Coptic","copt",""],
[11520,11567,"Georgian Supplement", "geor"],
[11568,11647,"Tifinagh","tfng", "tfng"],
[11648,11743,"Ethiopic Extended","ethi", "ethi"],
[11744,11775,"Cyrillic Extended-A","cyrl",""],
[11776,11903,"Supplemental Punctuation","",""],
[11904,12031,"CJK Radicals Supplement","hani",""],
[12032,12255,"Kangxi Radicals","hani",""],
[12272,12287,"Ideographic Description Characters","hani",""],
[12288,12351,"CJK Symbols and Punctuation","hani",""],
[12352,12447,"Hiragana","jpan","jpan"],
[12448,12543,"Katakana","jpan","jpan"],
[12544,12591,"Bopomofo","bopo",""],
[12592,12687,"Hangul Compatibility Jamo","hang",""],
[12688,12703,"Kanbun","",""],
[12704,12735,"Bopomofo Extended","bopo",""],
[12736,12783,"CJK Strokes","hani",""],
[12784,12799,"Katakana Phonetic Extensions","jpan",""],
[12800,13055,"Enclosed CJK Letters and Months","hani",""],
[13056,13311,"CJK Compatibility","hani",""],
[13312,19903,"CJK Unified Ideographs Extension A","hani",""],
[19904,19967,"Yijing Hexagram Symbols","",""],
[19968,40959,"CJK Unified Ideographs","hani",""],
[40960,42127,"Yi Syllables","yiii",""],
[42128,42191,"Yi Radicals","yiii",""],
[42192,42239,"Lisu","lisu","42192:42239", "lisu"],
[42240,42559,"Vai","vaii","42240:42539","vai"],
[42560,42655,"Cyrillic Extended-B","cyrl","", "cyrillic"],
[42656,42751,"Bamum","bamu","bamu"],
[42752,42783,"Modifier Tone Letters","","",true],
[42784,43007,"Latin Extended-D","latn",""],
[43008,43055,"Syloti Nagri","sylo",""],
[43056,43071,"Common Indic Number Forms","",""],
[43072,43135,"Phags-pa","phag",""],
[43136,43231,"Saurashtra","saur",""],
[43232,43263,"Devanagari Extended","deva",""],
[43264,43311,"Kayah Li","kali","kali",true],
[43312,43359,"Rejang","rjng","",true],
[43360,43391,"Hangul Jamo Extended-A","hang",""],
[43392,43487,"Javanese","java", "java",false],
[43488,43519,"Myanmar Extended-B","mymr",""],
[43520,43615,"Cham","cham",""],
[43616,43647,"Myanmar Extended-A","mymr",""],
[43648,43743,"Tai Viet","tavt", "tavt"],
[43744,43775,"Meetei Mayek Extensions","mtei",""],
[43776,43823,"Ethiopic Extended-A","ethi",""],
[43824,43887,"Latin Extended-E","latn",""],
[43888,43967,"Cherokee Supplement","cher", "cher"],
[43968,44031,"Meetei Mayek","mtei",""],
[44032,55215,"Hangul Syllables","hang",""],
[55216,55295,"Hangul Jamo Extended-B","hang",""],
[55296,56191,"High Surrogates","",""],
[56192,56319,"High Private Use Surrogates","",""],
[56320,57343,"Low Surrogates","",""],
[57344,63743,"Private Use Area","",""],
[63744,64255,"CJK Compatibility Ideographs","hani",""],
[64256,64335,"Alphabetic Presentation Forms","","armenian"],
[64336,65023,"Arabic Presentation Forms-A","arab", "arab"],
[65024,65039,"Variation Selectors","",""],
[65040,65055,"Vertical Forms","",""],
[65056,65071,"Combining Half Marks","","",true],
[65072,65103,"CJK Compatibility Forms","",""],
[65104,65135,"Small Form Variants","",""],
[65136,65279,"Arabic Presentation Forms-B","arab",""],
[65280,65519,"Halfwidth and Fullwidth Forms","latn",""],
[65520,65535,"Specials","",""],
[65536,65663,"Linear B Syllabary","linb","",true],
[65664,65791,"Linear B Ideograms","linb",""],
[65792,65855,"Aegean Numbers","",""],
[65856,65935,"Ancient Greek Numbers","grek",""],
[65936,65999,"Ancient Symbols","",""],
[66000,66047,"Phaistos Disc","xphais",""],
[66176,66207,"Lycian","lyci",""],
[66208,66271,"Carian","cari",""],
[66272,66303,"Coptic Epact Numbers","",""],
[66304,66351,"Old Italic","ital",""],
[66352,66383,"Gothic","goth",""],
[66384,66431,"Old Permic","perm",""],
[66432,66463,"Ugaritic","ugar",""],
[66464,66527,"Old Persian","xpeo",""],
[66560,66639,"Deseret","dsrt",""],
[66640,66687,"Shavian","shaw",""],
[66688,66735,"Osmanya","osma",""],
[66736,66815,"Osage","osge","osge"],
[66816,66863,"Elbasan","elba",""],
[66864,66927,"Caucasian Albanian","aghb",""],
[66928,67007,"Vithkuqi","vith",""],
[67072,67455,"Linear A","lina",""],
[67456,67519,"Latin Extended-F","latn",""],
[67584,67647,"Cypriot Syllabary","cprt",""],
[67648,67679,"Imperial Aramaic","armi",""],
[67680,67711,"Palmyrene","palm",""],
[67712,67759,"Nabataean","nbat",""],
[67808,67839,"Hatran","hatr",""],
[67840,67871,"Phoenician","phnx",""],
[67872,67903,"Lydian","lydi",""],
[67968,67999,"Meroitic Hieroglyphs","mero",""],
[68000,68095,"Meroitic Cursive","merc",""],
[68096,68191,"Kharoshthi","khar",""],
[68192,68223,"Old South Arabian","sarb",""],
[68224,68255,"Old North Arabian","sarn",""],
[68288,68351,"Manichaean","mani",""],
[68352,68415,"Avestan","avst",""],
[68416,68447,"Inscriptional Parthian","prti",""],
[68448,68479,"Inscriptional Pahlavi","phli",""],
[68480,68527,"Psalter Pahlavi","phlp",""],
[68608,68687,"Old Turkic","orhk",""],
[68736,68863,"Old Hungarian","hung",""],
[68864,68927,"Hanifi Rohingya","rohg","rohg"],
[68928,69007,"Garay","gara","gara"],
[69216,69247,"Rumi Numeral Symbols","",""],
[69248,69311,"Yezidi","yezi",""],
[69312,69375,"Arabic Extended-C","arab","",false],
[69376,69423,"Old Sogdian","sogo",""],
[69424,69487,"Sogdian","sogd",""],
[69488,69551,"Old Uyghur","ougr",""],
[69552,69599,"Chorasmian","chrs",""],
[69600,69631,"Elymaic","elym",""],
[69632,69759,"Brahmi","brah",""],
[69760,69839,"Kaithi","kthi",""],
[69840,69887,"Sora Sompeng","sora",""],
[69888,69967,"Chakma","cakm",""],
[69968,70015,"Mahajani","mahj",""],
[70016,70111,"Sharada","shrd",""],
[70112,70143,"Sinhala Archaic Numbers","sinh","sinh"],
[70144,70223,"Khojki","khoj",""],
[70272,70319,"Multani","mult",""],
[70320,70399,"Khudawadi","sind",""],
[70400,70527,"Grantha","gran",""],
[70656,70783,"Newa","newa","newa"],
[70784,70879,"Tirhuta","tirh",""],
[71040,71167,"Siddham","sidd",""],
[71168,71263,"Modi","modi",""],
[71264,71295,"Mongolian Supplement","mong",""],
[71296,71375,"Takri","takri","takr"],
[71424,71503,"Ahom","ahom",""],
[71680,71759,"Dogra","dogr",""],
[71840,71935,"Warang Citi","wara",""],
[71936,72031,"Dives Akuru","diak",""],
[72096,72191,"Nandinagari","nand",""],
[72192,72271,"Zanabazar Square","zanb",""],
[72272,72367,"Soyombo","soyo",""],
[72368,72383,"Unified Canadian Aboriginal Syllabics Extended-A","cans",""],
[72384,72447,"Pau Cin Hau","pauc",""],
[72448,72543,"Devanagari Extended-A","deva",""],
[72640,72703,"Sunuwar","sunu","sunu"],
[72704,72815,"Bhaiksuki","bhks",""],
[72816,72895,"Marchen","marc",""],
[72960,73055,"Masaram Gondi","gonm",""],
[73056,73135,"Gunjala Gondi","gong",""],
[73440,73471,"Makasar","maka","maka",true],
[73472,73567,"Kawi","kawi",""],
[73648,73663,"Lisu Supplement","lisu",""],
[73664,73727,"Tamil Supplement","",""],
[73728,74751,"Cuneiform","xsux",""],
[74752,74879,"Cuneiform Numbers and Punctuation","xsux",""],
[74880,75087,"Early Dynastic Cuneiform","xsux",""],
[77712,77823,"Cypro-Minoan","cpmn",""],
[77824,78895,"Egyptian Hieroglyphs","egyp",""],
[78896,78943,"Egyptian Hieroglyph Format Controls","egyp",""],
[82944,83583,"Anatolian Hieroglyphs","hluw",""],
[92160,92735,"Bamum Supplement","bamu",""],
[92736,92783,"Mro","mroo","mroo"],
[92784,92879,"Tangsa","tnsa",""],
[92880,92927,"Bassa Vah","bass","bass"],
[92928,93071,"Pahawh Hmong","hmng",""],
[93760,93855,"Medefaidrin","mede",""],
[93952,94111,"Miao","miao",""],
[94176,94207,"Ideographic Symbols and Punctuation","hani",""],
[94208,100351,"Tangut","tang",""],
[100352,101119,"Tangut Components","tang",""],
[101120,101631,"Khitan Small Script","kits",""],
[101632,101759,"Tangut Supplement","tang",""],
[110576,110591,"Kana Extended-B","jpan",""],
[110592,110847,"Kana Supplement","jpan",""],
[110848,110895,"Kana Extended-A","jpan",""],
[110896,110959,"Small Kana Extension","jpan",""],
[110960,111359,"Nushu","nshu",""],
[113664,113823,"Duployan","dupl",""],
[113824,113839,"Shorthand Format Controls","",""],
[118528,118735,"Znamenny Musical Notation","",""],
[118784,119039,"Byzantine Musical Symbols","",""],
[119040,119295,"Musical Symbols","",""],
[119296,119375,"Ancient Greek Musical Notation","grek",""],
[119488,119519,"Kaktovik Numerals","cans",""],
[119520,119551,"Mayan Numerals","",""],
[119552,119647,"Tai Xuan Jing Symbols","",""],
[119648,119679,"Counting Rod Numerals","",""],
[119808,120831,"Mathematical Alphanumeric Symbols","",""],
[120832,121519,"Sutton SignWriting","",""],
[122624,122879,"Latin Extended-G","latn",""],
[122880,122927,"Glagolitic Supplement","glag",""],
[122928,123023,"Cyrillic Extended-D","cyrl",""],
[123136,123215,"Nyiakeng Puachue Hmong","hmnp",""],
[123536,123583,"Toto","toto",""],
[123584,123647,"Wancho","wcho",""],
[124112,124159,"Nag Mundari","nagm",""],
[124896,124927,"Ethiopic Extended-B","ethi",""],
[124928,125151,"Mende Kikakui","mend",""],
[125184,125279,"Adlam","adlam","adlm"],
[126064,126143,"Indic Siyaq Numbers","",""],
[126208,126287,"Ottoman Siyaq Numbers","",""],
[126464,126719,"Arabic Mathematical Alphabetic Symbols","",""],
[126976,127023,"Mahjong Tiles","",""],
[127024,127135,"Domino Tiles","",""],
[127136,127231,"Playing Cards","",""],
[127232,127487,"Enclosed Alphanumeric Supplement","",""],
[127488,127743,"Enclosed Ideographic Supplement","",""],
[127744,128511,"Miscellaneous Symbols and Pictographs","",""],
[128512,128591,"Emoticons","",""],
[128592,128639,"Ornamental Dingbats","",""],
[128640,128767,"Transport And Map Symbols","",""],
[128768,128895,"Alchemical Symbols","",""],
[128896,129023,"Geometric Shapes Extended","",""],
[129024,129279,"Supplemental Arrows-C","",""],
[129280,129535,"Supplemental Symbols and Pictographs","",""],
[129536,129647,"Chess Symbols","",""],
[129648,129791,"Symbols and Pictographs Extended-A","",""],
[129792,130047,"Symbols for Legacy Computing","",""],
[131072,173791,"CJK Unified Ideographs Extension B","hani",""],
[173824,177983,"CJK Unified Ideographs Extension C","hani",""],
[177984,178207,"CJK Unified Ideographs Extension D","hani",""],
[178208,183983,"CJK Unified Ideographs Extension E","hani",""],
[183984,191471,"CJK Unified Ideographs Extension F","hani",""],
[194560,195103,"CJK Compatibility Ideographs Supplement","hani",""],
[196608,201551,"CJK Unified Ideographs Extension G","hani",""],
[201552,205743,"CJK Unified Ideographs Extension H","hani",""],
[917504,917631,"Tags","",""],
[917760,917999,"Variation Selectors Supplement","",""],
[983040,1048575,"Supplementary Private Use Area-A","",""],
[1048576,1114111,"Supplementary Private Use Area-B","",""],
]

