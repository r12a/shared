
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Ethiopic", code:"Ethi", name:"", type:"Featural syllabary",
origin:"Africa",
info:{ wikipedia:"Ge'ez_script", omniglot:"ethiopic" },
charts: [ ["Ethiopic", "1200"], ["Ethiopic Supplement", "1380"], ["Ethiopic Extended", "2D80"], ["Ethiopic Extended-A", "AB00"], ["Ethiopic Extended-B", "1E7E0"] ],
scriptNotes: [["Amharic", "ethi/am.html"]],
charNotesList:["Ethiopic", "ethi/block.html"],
terms: [["Amharic", "ethi/am_vocab.html"]],
pickers: [["Amharic", "ethi-am"], ["All Ethiopic", "ethi"]],
orthoChart: true,
ssHistory: "fvp74ug66k",
chapters: "19",
htmlchapter: "19/#G14116",
usedfor: "Aari [aiw], Afar [aar], Alaba-K’abeena [alw], Amharic [amh], Anuak [anu], Argobba [agj], Awngi [awn], Basketo [bst], Bench [bcq], Bilin [byn], Oromo, Borana-Arsi-Guji [gax], Boro (Ethiopia) [bwo], Burji [bji], Dawro [dwr], Dirasha [gdl], Dizin [mdx], Gamo [gmv], Gedeo [drs], Geez [gez], Gofa [gof], Gumuz [guk], Hadiyya [hdy], Hamer-Banna [amf], Harari [har], Kafa [kbr], Kambaata [ktb], Kistane [gru], Konso [kxc], Koorete [kqy], Majang [mpe], Male (Ethiopia) [mdy], Me'en [mym], Mursi [muz], Oromo [orm], Qimant [ahg], Saho [ssy], Sebat Bet Gurage [sgw], Sidamo [sid], Silt'e [stv], Suri [suq], Tigre [tig], Tigrinya [tir], Tigrinya [tir], Oromo, West Central [gaz], Wolaytta [wal], Xamtanga [xan], Zaysete [zay]",
local: [ ], 
layout: [ 
	{ name:"Ethiopic Layout Requirements", url:"https://www.w3.org/TR/elreq/"},
    { name:"Ethiopic counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#ethiopic-styles"},
	{ name:"Proposal to Reclassify Ethiopic Wordspace as a Space Separator (Zs) Symbol", url:"http://www.unicode.org/L2/L2015/15148-ethiopic-wordspace.pdf"}, 
	],
// this is replicated at scripts/linkdata/linkdb



dates: `BCE 4thC – today`,
status: `In active use`,
lineage: `Egyptian hieroglyphs > Proto-Sinaitic > South Semitic > Ancient South Arabian > Geʽez`,
siblings: ``,
history: `Ethiopic is an African featural syllabary which derives from the earlier Geʽez (<span lang="ban">ግዕዝ</span>) orthography, which was an abjad used until the 10th–12th centuries and now only in liturgical use. Ethiopic is widely used for over 40 Ethiopian and Eritrean Semitic languages, such as Tigré, Amharic and Tigrinya. Some other languages in the Horn of Africa, such as Oromo, used to be written using Geʽez, but have migrated to Latin-based orthographies. Amharic alone has 31 million mother-tongue speakers, and more than 25 million second language speakers.`,
description: `The script became an abugida when small changes were added to Geʽez to indicate the following vowel sound. Each complete syllable is now represented by a single syllabic character in the Unicode repertoire, making it a featural syllabary where vowels are indicated in a standard way by small additions to the base character. Words were traditionally separated by a wordspace character, but inter-word spaces are nowadays more common.`,
unicode: `Unicode 17 has 5 dedicated blocks, comprising 523 characters.`,
name:"Ethiopic", local:"", localtrans:"", region:"afr", countries:"Ethiopia, Eritrea", speakers:U,
// this is replicated in shared/scriptdb/script_summaries



"ethi": {name:"Ethiopic", region:"afr", type:"feat", 
blocks:5, chars:523, bletter:481, bmark:3, bnumber:20, bpunctuation:9, bsymbol:10, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space ws:፡",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},
// this is replicated in scripts/script-features/scriptdb

}

