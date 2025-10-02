
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Latin", code:"Latn", name:"", type:"Alphabet, cased",
origin:"Europe",
info:{ wikipedia:"Latin_script", omniglot:"latin" },
local: [ ],
layout: [ 
	{ name:"Requirements for Latin Text Layout and Pagination", url:"http://w3c.github.io/dpub-pagination/"},
    { name:"Latin counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#latin-styles"},
	],
charts: [ ["Basic Latin", "0000"], ["Latin-1 Supplement", "0080"], ["Latin Extended-A", "0100"], ["Latin Extended-B", "0180"], ["Latin Extended-C", "2C60"], ["Latin Extended-D", "A720"], ["Latin Extended-E", "AB30"], ["Latin Extended-F", "10780"], ["Latin Extended-G", "1DF00"], ["Latin Extended Additional", "1E00"], ["Halfwidth and Fullwidth Forms", "FF00"], ["IPA Extensions", "0250"], ["Phonetic Extensions", "1D00"], ["Phonetic Extensions Supplement", "1D80"] ],
scriptNotes: [["Bamanan", "latn/bm.html"], ["Fula", "latn/ff.html"], ["Hausa (boko)", "latn/ha.html"], ["Kurmanji", "latn/kmr.html"], ["Wolof", "latn/wo.html"]],
charNotesList:["Latin", "latn/block.html"],
terms: [["Bamanan", "latn/bm_vocab.html"], ["Fula", "latn/ff_vocab.html"], ["Hausa (boko)", "latn/ha_vocab.html"], ["Kurmanji", "latn/kmr_vocab.html"], ["Wolof", "latn/wo_vocab.html"]],
pickers: [["Latin&nbsp;&amp;&nbsp;diacritics", "latn-all"], ["Bamanan", "latn-bm"], ["Fula", "latn-ff"], ["Hausa", "latn-ha"], ["Kurmanji", "latn-kmr"], ["Old&nbsp;English", "latn-ang"], ["Old&nbsp;Norse", "latn-non"], ["Tłı̨chǫ&nbsp;(Dogrib)", "latn-dgr"], ["Vietnamese", "latn-vi"], ["Wolof", "latn-wo"], ["Pan-African", "latn-afr"], ["<br>IPA&nbsp;by&nbsp;place", "ipa2"], ["IPA&nbsp;by&nbsp;type", "ipa3"], ["IPA&nbsp;standard&nbsp;chart", "ipa"]],
orthoChart: true,
ssHistory: "xztdezls8h",
htmlchapter: "7/#G4321",
usedfor: "",
// this is replicated at scripts/linkdata/linkdb



dates: `BCE 7thC – today`, start:"-700", end:"", current_usage:"",
status: `In wide use`,
lineage: `Phoenician > Greek > Old Italic > Latin`,
siblings: `Glagolitic, Cyrillic, Armenian, Georgian, Coptic, Runes`,
history: `The Latin script is a European bicameral alphabet used around the world for over 3,000 languages. This makes it the most popular writing system in the world. Latin text can be used for all types of written communications, including phonetic and other transcriptions.`,
description: `Text runs horizontally, left to right, and shaping between letters is rare. Occasionally combining marks need to be positioned in a context-sensitive way, but many of the base+diacritic combinations are encoded as atomic characters. Tonal languages typically use diacritics to express tones. Words are separated using spaces.`,
unicode: `Unicode 17 has 10 basic dedicated blocks, comprising 1,268 characters, plus 3 more additional blocks dedicated to phonetic notations, comprising a further 288 characters.`,
// this is replicated in shared/scriptdb/script_summaries



"latn": {name:"Latin", region:"afr", type:"alpha", 
blocks:14, chars:1551, bletter:1427, bmark:0, bnumber:26, bpunctuation:53, bsymbol:41, bother:3, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},
// this is replicated in scripts/script-features/scriptdb

}

