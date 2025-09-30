
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Greek", code:"Grek", name:"", type:"Alphabet, cased",
origin:"Europe",
info:{ wikipedia:"Greek_alphabet", omniglot:"greek" },
charts: [ ["Greek and Coptic", "0370"], ["Greek Extended", "1F00"], ["Ancient Greek Numbers", "10140"] ],
scriptNotes: [["Greek", "grek/el.html"]],
charNotesList:["Greek", "grek/block.html"],
terms: [["Greek", "grek/el_vocab.html"]],
pickers: [["Modern Greek", "grek"]],
orthoChart: true,
ssHistory: "wxsx5j4kzt",
chapters: "07",
htmlchapter: "7/#G10832",
usedfor: "Albanian [sqi], Greek, Ancient (to 1453) [grc], Albanian, Arbëreshë [aae], Aromanian [rup], Albanian, Arvanitika [aat], Turkish, Balkan Gagauz [bgx], Romani, Balkan [rmn], Greek, Cappadocian [cpg], Coptic [cop], Arabic, Cypriot [acy], Gagauz [gag], Greek, Modern (1453-) [ell], Phrygian [xpg], Pontic [pnt], Albanian, Tosk [als], Tsakonian [tsd], Turkish [tur], Urum [uum]",
local: [ ], 
layout: [ 
	/*{ name:"Greek Layout Requirements", url:"https://www.w3.org/TR/geor-lreq/"},*/
    { name:"Greek counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#greek-styles"},
	],
// this is replicated at scripts/linkdata/linkdb



dates: `BCE 8thC – today`,
status: `In active use`,
lineage: `Phoenician > Aramaic > Phoenician > Greek`,
siblings: `Paleo-Hebrew, Aramaic, Paleohispanic, Libyco-Berber`,
history: `Greek (<span lang="el">Ελληνικά</span>) is a European bicameral alphabet used in Greece, Cyprus and surrounding regions for 18 languages. Some symbols are also used in scientific and mathematical notations, as well as the international phonetic alphabet (IPA). It is considered to be the first true alphabet with distinct letters for consonants and vowels. Early Greek is referred to as polytonic, which has multiple combining marks attached to vowel letters. Monotonic spelling, with usually a single mark per vowel, was adopted as standard in 1982.`,
description: `Rendering algorithms need to position marks according to context. The letter sigma has different word-medial vs word-final shapes, but they are encoded separately.`,
unicode: `Unicode 17 has 3 dedicated blocks, comprising 447 characters, of which 79 are for ancient Greek numbers. Monotonic Greek is essentially covered by the 121 code points in the main block, which it shares with 14 additional Coptic letters.`,
name:"Greek", local:"Ελληνικό αλφάβιτο", localtrans:"Ellinıkó alfávıto", region:"eur", countries:"Greece, Cyprus, etc", speakers:"13m",
// this is replicated in shared/scriptdb/script_summaries



"grek": {name:"Greek", region:"eur", type:"alpha", 
blocks:3, chars:417, bletter:318, bmark:0, bnumber:59, bpunctuation:2, bsymbol:38, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"yes -", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},
// this is replicated in scripts/script-features/scriptdb



}

