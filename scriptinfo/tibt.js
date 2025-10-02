
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Tibetan", code:"Tibt", name:"", type:"Abugida",
origin:"Central Asia",
info:{ wikipedia:"Tibetan_alphabet", omniglot:"tibetan" },
local: [ ],
layout: [ 
    { name:"Tibetan Layout Requirements", url:"https://www.w3.org/TR/tlreq/"},
    { name:"Tibetan counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#tibetan-styles"},
    { name:"Tibetan emphasis (blog)", url:"https://r12a.github.io/blog/200610.html#20070719"},
    { name:"Formatting rules for Tibetan text", url:"http://digitaltibetan.org/index.php/Formatting_rules_for_Tibetan_text"},
	],
charts: [ ["Tibetan", "0F00"] ],
scriptNotes: [["Lhasa Tibetan", "tibt/bo.html"]],
charNotesList:["Tibetan", "tibt/block.html"],
terms: [["Tibetan", "tibt/bo_vocab.html"]],
pickers: [["Tibetan", "tibt"]],
orthoChart: true,
ssHistory: "mg8ulatcjb",
htmlchapter: "13/#G31615",
usedfor: "Adi [adi], Tibetan, Amdo [adx], Balti [bft], Bumthangkha [kjz], Changthang [cna], Dolpo [dre], Dzongkha [dzo], Tamang, Eastern [taj], Gahri [bfu], Mongolian, Halh [khk], Idu-Mishmi [clk], Jiarong [jya], Khamba [kbg], Tibetan, Khams [khg], Khengkha [xkf], Kurtokha [xkz], Ladakhi [lbj], Lepcha [lep], Loke [loy], Manangba [nmm], Mugom [muk], Tibetan, Old [otb], Pattani [lae], Purik [prx], Sherpa [xsr], Sikkimese [sip], Bhoti, Spiti [spt], Bhoti, Stod [sbu], Tibetan [bod], Tinani [lbf], Tshangla [tsj], Walungge [ola], Tamang, Western [tdg], Zangskari [zau]",
// this is replicated at scripts/linkdata/linkdb



dates: `6thC – today`, start:"500", end:"", current_usage:"",
status: `In active use`,
lineage: `Phoenician > Aramaic > Brahmi > Gupta > Tibetan`,
siblings: `Sharada, Siddham, Kalinga, Bhaiksuki`,
history: `Tibetan (<span lang="bo">བོད་ཡིག</span>) is a Central Asian abugida used in Tibet, Bhutan, Nepal and India for the Tibetan language, as well as 33 others, such as Dzongkha, Ladakhi and Sikkimese. It is also used for transcribing religious Sanskrit texts. Tradition says that it was developed by Thonmi Sambhota after a visit to India in the mid-7th century to study the art of writing.`,
description: `Tibetan can be written using two different styles: དབུ་ཅན dbu can ‘with a head’, the block style of the Tibetan script used in print, pronounced ‘u.cen’; and དབུ་མེད dbu med ‘headless’, the cursive style of the Tibetan script used in shorthand and calligraphy, pronounced ‘u.me’. Tibetan often has multiple consonants within a syllable that are stacked. This is achieved by using a set of subjoined code points, rather than purely by rendering magic. It requires context-sensitive shaping and positioning of glyphs. Consonants typically have a headstroke, which may be used as a hanging baseline. Tibetan separates syllables using a tshek mark, but not words.`,
unicode: `Unicode 17 has 1 dedicated block, comprising 211 characters.`,
// this is replicated in shared/scriptdb/script_summaries



"tibt": {name:"Tibetan", region:"easia", type:"abug", 
blocks:1, chars:211, bletter:50, bmark:77, bnumber:20, bpunctuation:28, bsymbol:36, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:N, vbase:"A འ ཨ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:Y, visviram:N, diacritic:N, killer:""},
wordsep:"sb",
linebreak:"syllable", hyphen:"? ", wordspan:N, justification:"pad", gc:N, baseline:"hang", 
},
// this is replicated in scripts/script-features/scriptdb

}

