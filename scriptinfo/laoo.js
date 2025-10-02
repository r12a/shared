
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Lao", code:"Laoo", name:"", type:"Alphabet",
origin:"Southeast Asia",
info:{ wikipedia:"Lao_script", omniglot:"lao" },
local: [ ],
layout: [ 
    { name:"Lao Layout Requirements", url:"http://w3c.github.io/laoo-lreq/"},
    { name:"Lao counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#lao-styles"},
	],
charts: [ ["Lao", "0E80"] ],
scriptNotes: [["Lao", "laoo/lo.html"]],
charNotesList:["Lao", "laoo/block.html"],
terms: [["Lao", "laoo/lo_vocab.html"]],
pickers: [["Lao", "lao"]],
orthoChart: true,
ssHistory: "98522835fg",
htmlchapter: "16/#G10988",
usedfor: "Bru, Eastern [bru], Hmong Daw [mww], Mien, Iu [ium], Jeh [jeh], Kataang [kgd], Khmu [kjg], Kriang [ngt], Kuy [kdt], Lamet [lbn], Lao [lao], Lave [brb], Ta'oih, Lower [tto], Katang, Northern [ncq], Pacoh [pac], Phunoi [pho], Sô [sss], Tai Dam [blt], Ta'oih, Upper [tth], Bru, Western [brv], Katu, Western [kuf]",
// this is replicated at scripts/linkdata/linkdb



dates: `16thC – today`, start:"1600", end:"", current_usage:"",
status: `In active use`,
lineage: `Phoenician > Aramaic > Brahmi > Tamil-Brahmi > Pallava > Khmer > Sukothai > Fakkham > Tai Noi > Lao`,
siblings: `Tai Yo`,
history: `Lao (<span lang="lo">ລາວ</span>) is a Southeast Asian alphabet used in Laos for writing the Lao language, and as  the official script for 19 more minority languages. There is also a considerable Lao-speaking population in Thailand but they typically write their language with the Thai script. The script was originally an abugida, but since the script reforms leading up to 1960 it has been alphabetic.`,
description: `Lao uses visual placement of vowel signs: although vowels are very often written using more than one code point on different sides of the base consonant, only the vowel components that appear above or below the consonant are combining marks; the others are ordinary spacing characters that are typed in the order seen. Lao requires context-sensitive shaping and positioning of glyphs. Tone is indicated by a combination of the consonant class, the syllable type (checked/unchecked), plus any tone mark. Words are not separated using spaces.`,
unicode: `Unicode 17 has 1 dedicated block, comprising 83 characters.`,
// this is replicated in shared/scriptdb/script_summaries



"laoo": { name:"Lao", region:"seasia",
blocks:1, chars:83, bletter:56, bmark:17, bnumber:10, bpunctuation:0, bsymbol:0, bother:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", tones:Y, 
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:Y, vocalics:N, ivowels:N, vbase:"O ອ", vcomposite:Y, prebase:Y, circum:N },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "no",
linebreak:"word", hyphen:"no", justification:U, spacing:U, gc:Y,
baseline: "romn",
},
// this is replicated in scripts/script-features/scriptdb

}

