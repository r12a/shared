
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Hangul", code:"Hang", name:"", type:"Featural syllabary",
origin:"East Asia",
info:{ wikipedia:"Hangul", omniglot:"korean" },
charts: [ ["Hangul Syllables", "AC00"], ["Hangul Jamo", "1100"], ["Hangul Compatibility Jamo", "3130"], ["Hangul Jamo Extended-A", "A960"], ["Hangul Jamo Extended-B", "D7B0"] ],
scriptNotes: [["Korean", "kore/ko.html"]],
pickers: [["Korean", "kore-ko"]],
orthoChart: true,
ssHistory: "umfm3ftrny",
chapters: "18",
htmlchapter: "18/#G31028",
usedfor: "Cia-cia [cia], Jejueo [jje], Korean [ko]",
local: [ ],
layout: [ 
    { name:"Hangul Layout Requirements", url:"http://w3c.github.io/klreq/"},
    { name:"Korean counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#korean-styles"},
	],
// this is replicated at scripts/linkdata/linkdb



dates: `CE 1444 – today`,
status: `In active use`,
lineage: `Phoenician > Aramaic > Brahmi > Gupta > Tibetan > Phags Pa > Korean`,
siblings: ``,
history: `Korean Hangul is an East Asian script that includes 2 main subscripts used for writing Korean, Cia-cia, and Jejueo: Hangul (<span lang="ban">한글</span>) is a featural syllabary. Korean also uses Hanja (<span lang="ban">漢字</span>), which is a logo-syllabary, based on traditional Chinese Han characters, that was used for the Korean language until 1446, when King Sejong introduced Hangul. Until the mid-20th century Hanja and Hangul were used in parallel or mixed. Today, the vast majority of Korean text uses Hangul but Hanja is still used in some contexts, and schools teach some 1,000-3,000 Hanja symbols. Hangul was created as a simpler, phonetic alternative to using Chinese hanja for Korean. Not universally accepted for centuries, and suppressed by Japanese colonial authorities, since 1945 it has become the standard script for Korean.`,
description: `The 51 basic letters (jamo) are grouped into Hangul syllable blocks depending on their position in the spoken syllable. Korean text is generally horizontal nowadays, but can also be written in vertical columns that progress from right to left. Context-sensitive shaping and positioning of glyphs is required if converting jamos to syllabic characters. Words are separated by spaces.`,
unicode: `Unicode 17 has 6 dedicated blocks, comprising 11,686 characters.`,
name:"Hangul", local:"한글", localtrans:"han.ɡɯl", region:"easia", countries:"North & South Korea", speakers:U,
// this is replicated in shared/scriptdb/script_summaries



"hang": {name:"Hangul", region:"eur", type:"feat", 
blocks:5, chars:11635, bletter:11635, bmark:0, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr tbrl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word char", hyphen:"no ", wordspan:N, justification:"sp", gc:Y, baseline:"ideo", 
},
// this is replicated in scripts/script-features/scriptdb

}

