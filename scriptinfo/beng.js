// bengali

    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true



var scriptInfo = {

script:"Bengali", code:"Beng", name:"", type:"Abugida", 
origin:"South Asia",
info:{ wikipedia:"Bengali_alphabet", omniglot:"bengali" },
local: [ ],
layout: [ 
    { name:"Introduction to Indic Scripts", url:"indic-overview"},
    { name:"Bengali counter styles", url:"https://www.w3.org/TR/predefined-counter-styles/#bengali-styles"},
    ],
charts: [ ["Bengali", "0980"] ],
scriptNotes: [["Bengali/Bangla", "beng/bn.html"]],
charNotesList:["Bengali", "beng/block.html"],
terms: [["Bengali/Bangla", "beng/bn_vocab.html"]],
pickers: [["Bangla", "beng"]],
orthoChart: true,
ssHistory: "f8jrlqwbac",
htmlchapter: "12/#G664195",
usedfor: "Assamese [as], Bengali [bn], Bishnupriya [bpy], Bodo (India) [brx], Chakma [ccp], Chiru [cdf], Chittagonian [ctg], Naga, Chothe [nct], Deori [der], Dimasa [dis], Chin, Falam [cfm], Garo [grt], Hajong [haj], Khasi [kha], Koch [kdq], Koda [cdz], Kok Borok [trp], Kudmali [kyw], Lushai [lus], Manipuri [mni], Naga, Maring [nng], Mising [mrg], Naga, Moyon [nmo], Munda [unx], Mundari [unr], Nyishi [njz], Nyishi [njz], Sadri, Oraon [sdr], Panchpargania [tdb], Puroik [suv], Rabha [rah], Rangpuri [rkt], Sadri [sck], Santali [sat], Sauria Paharia [mjt], Sylheti [syl], Naga, Thangal [nki], Tippera [tpe], Tiwa [lax], Toto [txo], Usui [usi]",
// this is replicated at scripts/linkdata/linkdb



dates: `11thC – today`, start:"1100", end:"", current_usage:"",
status: `In active use`,
lineage: `Phoenician > Aramaic > Brahmi > Gupta >Siddham > Gaudi > Bengali`,
siblings: `Oriya, Tirhuta, Nagari, Nepalese`,
history: `Bengali (<span lang="bn">বাংলা বর্ণমালা</span>) is a South Asian abugida used in Bangladesh and India for the Bengali language and 40 others. The Bengali language alone has over 180 million speakers, and ranks 5th in the world for writing system usage.`,
description: `Context-sensitive shaping is required, especially where letters interact with each other in consonant clusters, and vowels are represented by combining marks which need careful positioning. Bengali words have a headstroke which may be used as a hanging baseline.`,
unicode: `Unicode 17 has 1 dedicated block, comprising 97 characters.`,
// this is replicated in shared/scriptdb/script_summaries



"beng": {name:"Bengali", region:"sasia", type:"abug", local:"বাংলা লিপি", localtrans:"/ˈbʌŋlə lipi/", scriptname:"বাংলা লিপি", scriptnametrans:"bangla lipi",
blocks:1, chars:96, bletter:55, bmark:20, bnumber:16, bpunctuation:1, bsymbol:4, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:2, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"cm let", finals:"cm let",
clusters:{ ligation:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"(yes) -", wordspan:N, justification:"sp", gc:N, baseline:"hang", 
},
// this is replicated in scripts/script-features/scriptdb

}

