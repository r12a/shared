
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Javanese", code:"Java", name:"", type:"Abugida",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Javanese_alphabet", omniglot:"javanese", endalpha:"javanese" },
local: [ ],
layout: [ 
    /*{ name:"Hangul Layout Requirements", url:"http://w3c.github.io/klreq/"},*/
    { name:"Javanese counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#javanese-styles"},
	],
charts: [ ["Javanese", "A980"] ],
scriptNotes: [["Javanese", "java/jv.html"]],
charNotesList:["Javanese", "java/block.html"],
terms: [["Javanese", "java/jv_vocab.html"]],
pickers: [["Javanese", "java"]],
orthoChart: true,
ssHistory: "db9724gea9",
htmlchapter: "17/#G27153",
usedfor: "Bali [ban], Javanese [jv], Osing [osi], Sunda [sun], Tengger [tes]",
// this is replicated at scripts/linkdata/linkdb



dates: `17thC – today`, start:"1600", end:"", current_usage:"endangered",
status: `Endangered (low uptake)`,
lineage: `Phoenician > Aramaic > Brahmi > Tamil Brahmi > Pallava > Kawi > Javanese`,
siblings: `Balinese, Baybayin scripts, Batak, Lontara, Makasar, Sundanese, Rencong, Rejang`,
history: `Javanese (<span lang="ban">ꦲꦏ꧀ꦱꦫꦗꦮ</span>) is an Indonesian abugida used on the island of Java for Javanese and 5 other languages. Use of the Javanese script ended abruptly during the Second World War, when its use was forbidden by the occupying forces. Its use has since declined, and everyday Javanese is now generally written in the Latin script, although the Javanese orthography is still taught in most elementary schools and some junior high schools in Javanese speaking areas. There are no newspapers or magazines being printed in the Javanese script.`,
description: `Context-sensitive shaping is required, especially where letters interact with each other in consonant clusters, and vowels are represented by combining marks which need careful positioning. Words are not separated by spaces, and stacked consonants can bridge the end of one word and the beginning of another.`,
unicode: `Unicode 17 has 1 dedicated block, comprising 91 characters.`,
// this is replicated in shared/scriptdb/script_summaries



"java": {name:"Javanese", region:"seasia", type:"abug", 
blocks:1, chars:91, bletter:48, bmark:18, bnumber:10, bpunctuation:15, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:2, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"HA ꦲ", vcomposite:Y, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"cm", finals:"cm vk",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:Y, diacritic:N, killer:"v"},
wordsep:"no",
linebreak:"syllable", hyphen:"yes ", wordspan:Y, justification:U, gc:N, baseline:"romn", 
},
// this is replicated in scripts/script-features/scriptdb

}

