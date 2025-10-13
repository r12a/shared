
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Myanmar", code:"Mymr", name:"Burmese", type:"Abugida",
origin:"Southeast Asia",
info:{ wikipedia:"Burmese_alphabet", omniglot:"burmese" },
local: [ ],
layout: [ 
    /*{ name:"Lao Layout Requirements", url:"https://www.w3.org/TR/mlreq/"},*/
    { name:"Myanmar counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#myanmar-styles"},
	],
charts: [ ["Myanmar", "1000"], ["Myanmar Extended-A", "AA60"], ["Myanmar Extended-B", "A9E0"], ["Myanmar Extended-C", "116D0"] ],
scriptNotes: [["Burmese", "mymr/my.html"], ["Shan", "mymr/shn.html"]],
charNotesList:["Myanmar", "mymr/block.html"],
terms: [["Burmese", "mymr/my_vocab.html"], ["Shan", "mymr/shn_vocab.html"]],
pickers: [["Burmese", "mymr-my"], ["Shan", "mymr-shn"]],
orthoChart: true,
ssHistory: "vcz6flwzqs",
htmlchapter: "16/#G24999",
usedfor: "Aiton [aio], Akha [ahk], Chin, Asho [csh], Burmese [mya], Karen, Bwe [bwe], Karen, Geba [kvq], Intha [int], Khamti [kht], Lamkang [lmk], Karen, Manumanaw [kxf], Marma [rmz], Moken [mwt], Mon [mnw], Burmese, Old [obr], Karen, Pa'o [blk], Pali [pli], Phake [phk], Karen, Pwo Eastern [kjp], Karen, Pwo Eastern [kjp], Karen, Pwo Eastern [kjp], Karen, Pwo Western [pwo], Rakhine [rki], Palaung, Ruching [pce], Palaung, Rumai [rbb], Karen, S'gaw [ksw], Sanskrit [san], Shan [shn], Palaung, Shwe [pll], Tai Laing [tjl], Kayah, Western [kyu]",
// this is replicated at scripts/linkdata/linkdb



dates: `11thC – today`, start:"1000", end:"", current_usage:"",
status: `In active use`,
lineage: `Phoenician > Aramaic > Brahmi > Kadamba/Pallava > Pyu/Old Mon > Mon Burmese > Myanmar`,
siblings: `Mon, Sgaw Karen, Shan, Tai Tham, Chakma, Ahom, Tai Le, Khamti`,
history: `Myanmar (<span lang="my">မြန်မာအက္ခရာ</span>) is a Southeast Asian abugida used used to write Burmese and, with various extensions and adaptations, for 28 other languages in the region, such as Mon, Karen, Kayah, Shan, and Palaung. It is also used to write Pali and Sanskrit.`,
description: `Myanmar requires context-sensitive shaping and positioning of glyphs. Consonant stacks are common, and syllable-final consonants are indicated using the asat combining mark. Burmese tones are indicated using a particular vowel, or by combining a vowel and one of 2 combining marks, whereas when the script is used for Shan tones are indicated using as set of dedicated combining marks. Words are not separated using spaces.`,
unicode: `Unicode 17 has 4 dedicated blocks, comprising 243 characters.`,
// this is replicated in shared/scriptdb/script_summaries



"mymr": {name:"Myanmar", region:"seasia", type:"abug", 
blocks:4, chars:243, bletter:120, bmark:62, bnumber:50, bpunctuation:6, bsymbol:5, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:4, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"A အ", vcomposite:Y, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"cm", finals:"vk",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"i"},
wordsep:"no",
linebreak:"word", hyphen:U, wordspan:N, justification:U, gc:N, baseline:"romn", 
},
// this is replicated in scripts/script-features/scriptdb

}

