
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Hebrew", code:"Hebr", name:"", type:"Abjad, RTL",
origin:"West Asia",
info:{ wikipedia:"Hebrew_script", omniglot:"hebrew" },
charts: [ ["Hebrew", "0590"], ["Alphabetic Presentation Forms", "FB00"] ],
scriptNotes: [["Modern Israeli Hebrew", "hebr/he.html"]],
charNotesList:["Hebrew", "hebr/block.html"],
terms: [["Hebrew", "hebr/he_vocab.html"]],
pickers: [["Israeli Hebrew", "hebr"]],
orthoChart: true,
ssHistory: "qek84cbq5u",
chapters: "09",
htmlchapter: "9/#G6528",
usedfor: "Hebrew, Ancient [hbo], Bukharic [bhh], Yiddish, Eastern [ydd], Hebrew [heb], Hebrew [heb], Hulaulá [huy], Judeo-Arabic [jrb], Judeo-Berber [jbe], Arabic, Judeo-Iraqi [yhd], Judeo-Italian [itk], Arabic, Judeo-Moroccan [aju], Judeo-Persian [jpr], Judeo-Tat [jdt], Arabic, Judeo-Tripolitanian [yud], Arabic, Judeo-Tunisian [ajt], Arabic, Judeo-Yemeni [jye], Ladino [lad], Lishán Didán [trg], Lishana Deni [lsd], Lishanid Noshan [aij], Aramaic, Samaritan [sam], Samaritan [smp], Tajik [tgk], Yiddish, Western [yih], Yiddish [yid]",
local: [ ], 
layout: [ 
	/*{ name:"Hebrew Layout Requirements", url:"https://www.w3.org/TR/hebr-lreq/"},*/
    { name:"Hebrew counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#hebrew-styles"},
	],
// this is replicated at scripts/linkdata/linkdb



dates: `BCE 3rdC – today`,
status: `In active use`,
lineage: `Phoenician > Aramaic > Hebrew`,
siblings: `Nabataean, Syriac, Palmyrene, Edessan, Hatran, Elymaic, Mandaic, Pallavi, Brahmi, Kharosthi`,
history: `Hebrew (<span lang="he">אָלֶף־בֵּית עִבְרִי</span>) is a West Asian abjad used in Israel and the Jewish diaspora for 24 languages, including Hebrew, Samaritan, and Yiddish. Before the Jewish exile in Babylon, Hebrew was written using a Paleo-Hebrew script that resembles the Samaritan alphabet. The current script, known as 'square', or 'block' script, derives from Aramaic writing. It is generally referred to as the Ashuri (Assyrian) script, although there are a few alternate writing styles.`,
description: `Hebrew text is read right-to-left, except for numbers. Short vowels are usually omitted, but can be written using combining marks, especially for children's books and foreign terms. Text is not cursive, and there is little shaping required, but positioning of glyphs, when used, needs context-sensitive rendering support. Three letters have different shapes when word-medial and word-final, but these are encoded separately.`,
unicode: `Unicode 17 has 1 dedicated block, comprising 88 characters, 51 of which are combining marks. There is also a Hebrew Presentation Forms block containing 46 characters.`,
name:"Hebrew", local:"בֵּית עִבְרִי", localtrans:"", region:"wasia", countries:"Israel, etc", speakers:U,
// this is replicated in shared/scriptdb/script_summaries



"hebr": {name:"Hebrew", region:"wasia", type:"abjad", 
blocks:2, chars:134, bletter:75, bmark:52, bnumber:0, bpunctuation:6, bsymbol:1, bother:0, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:Y, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"let",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},
// this is replicated in scripts/script-features/scriptdb

}

