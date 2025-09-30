
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Syriac", code:"Syrc", name:"", type:"Abjad, RTL",
dates:"6thC – today", start:"500", end:"", current_usage:"",
status:"The script used for several Assyrian communities, and for liturgical use by the Syrian church.",
origin:"West Asia",
info:{ wikipedia:"Syriac_alphabet", omniglot:"syriac", endalpha:"syriac" },
local: [ ], layout: [ ],
charts: [ ["Syriac", "0700"], ["Syriac Supplement", "0860"] ],
scriptNotes: [["Classical Syriac", "syrc/syr.html"], ["Assyrian Neo-Aramaic", "syrc/aii.html"], ["Turoyo", "syrc/tru.html"]],
charNotesList:["Syriac", "syrc/block.html"],
terms: [["Classical Syriac", "syrc/syr_vocab.html"], ["Assyrian Neo-Aramaic", "syrc/aii_vocab.html"], ["Turoyo", "syrc/tru_vocab.html"]],
pickers: [["Classical Syriac", "syrc"], ["Assyrian&nbsp;Neo-Aramaic", "syrc-aii"], ["Christian Palestinian Aramaic", "syrc-axp"], ["Turoyo", "syrc-tru"]],
orthoChart: true,
ssHistory: "hlvzdczufr",
chapters: "09",
htmlchapter: "9/#G13005",
usedfor: "Arabic [ara], Neo-Aramaic, Assyrian [aii], Neo-Aramaic, Barzani Jewish [bjf], Neo-Aramaic, Bohtan [bhn], Neo-Aramaic, Chaldean [cld], Syriac, Classical [syc], Hértevin [hrt], Aramaic, Jewish Babylonian (ca. 200-1200 CE) [tmr], Koy Sanjaq Surat [kqd], Mlahsö [lhs], Aramaic, Official (700-300 BCE) [arc], Aramaic, Old (up to 700 BCE) [oar], Aramaic, Samaritan [sam], Senaya [syn], Sogdian [sog], Syriac [syr], Turoyo [tru]",
// this is replicated at scripts/linkdata/linkdb



dates: `6thC – today`,
status: `In active use`,
lineage: `Phoenician > Aramaic > Syriac`,
siblings: `Hebrew, Nabataean, Palmyrene, Hatran, Mandaic, Elymaic, Pahlavi, Kharoshthi, Brahmi`,
history: `Syriac (<span lang="syr">ܐܠܦ ܒܝܬ ܣܘܪܝܝܐ</span>) is a West Asian abjad used in Syria for the Syriac languages and its derivatives. ScriptSource lists 17 languages. There are 3 major styles of Syriac: Estrangela (used for Classical Syriac), Eastern Syriac (used for languages such as Assyrian Neo-Aramaic), and Western Syriac (used for languages such as Turoyo). Estrangela is mostly used nowadays for liturgical purposes, although it is also used to differentiate text such as headings in documents written in Eastern or Western styles. The other two styles remain in use for living languages.`,
description: `Syriac text is read from right to left, except for numbers. Text is cursive, ie. letters join, and the positional shapes for a given letter can vary, and the script has a particularly large number of diacritics. It requires context-sensitive shaping and positioning of glyphs.`,
unicode: `Unicode 17 has 2 dedicated blocks, comprising 88 characters, of which 8 are used for writing Malayalam, and a few others for transcribing Arabic.`,
// this is replicated in shared/scriptdb/script_summaries



"syrn": {name:"Eastern Syriac", region:"wasia", type:"alpha", 
blocks:2, chars:88, bletter:45, bmark:28, bnumber:0, bpunctuation:14, bsymbol:0, bother:1, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"ʔ ܐ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},
// this is replicated in scripts/script-features/scriptdb




"syrc": {name:"Classical Syriac", region:"wasia", type:"abjad", 
blocks:2, chars:88, bletter:45, bmark:28, bnumber:0, bpunctuation:14, bsymbol:0, bother:1, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"syrj": {name:"Eastern Syriac", region:"wasia", type:"alpha", 
blocks:2, chars:88, bletter:45, bmark:28, bnumber:0, bpunctuation:14, bsymbol:0, bother:1, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"ʔ ܐ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"?", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},

}

