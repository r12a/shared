
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Gurmukhi", code:"Guru", name:"", type:"Abugida",
origin:"South Asia",
info:{ wikipedia:"Gurmukhi_alphabet", omniglot:"punjabi" },
local: [
    { name:"Introduction to Indic Scripts", url:"indic-overview.html"},
	], 
layout: [ 
	/*{ name:"Gurmukhi Layout Requirements", url:"https://www.w3.org/TR/guru-lreq/"},*/
    { name:"Gurmukhi counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#gurmukhi-styles"},
	],
charts: [ ["Gurmukhi", "0A00"] ],
scriptNotes: [["Punjabi", "guru/pa.html"]],
charNotesList:["Gurmukhi", "guru/block.html"],
terms: [["Punjabi", "guru/pa_vocab.html"]],
pickers: [["Gurmukhi", "guru"]],
orthoChart: true,
ssHistory: "fd27tquj5j",
htmlchapter: "12/#G668388",
usedfor: "Eastern Punjabi [pan], Saraiki [skr], Sindhi [snd]",
// this is replicated at scripts/linkdata/linkdb



dates: `16thC – today`, start:"1600", end:"", current_usage:"",
status: `In active use`,
lineage: `Phoenician > Aramaic > Brahmi > Gupta > Sharada > Landa > Gurmukhi`,
siblings: `Khudabadi, Khojki, Mahajani, Multani`,
history: `Gurmukhi (<span lang="pa">ਗੁਰਮੁਖੀ</span>) is a South Asian abugida used in India for the Punjabi language, and sometimes for Saraiki and Sindhi. It is the official script of the Punjabi language. The original Sikh scriptures and most of the historic Sikh literature were written in the Gurmukhi script. Muslim speakers of Punjabi in Pakistan use a Persian version of the Arabic script (called shahmukhi). The current form of Gurmukhi was developed in the 16th century by Guru Angad, successor to the founder of the Sikh religion, Guru Nanak. It's roots lie in the historical Brahmi script.`,
description: `It requires context-sensitive shaping and positioning of glyphs. Words have a headstroke which may behave as a hanging baseline. Tone is expressed using the letter HA.`,
unicode: `Unicode 17 has 1 dedicated block, comprising 80 characters.`,
// this is replicated in shared/scriptdb/script_summaries



"guru": {name:"Gurmukhi", region:"sasia", type:"abug", 
blocks:1, chars:80, bletter:51, bmark:18, bnumber:10, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:Y, 
medials:"cm", finals:"cm",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:N, baseline:"hang", 
},
// this is replicated in scripts/script-features/scriptdb

}

