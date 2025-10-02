
    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'
    
	const summaryExists = true


var scriptInfo = {

script:"Syloti Nagri", code:"Sylo", name:"Ahom (other names)", type:"abug",
// SCRIPT: for main title & menu & some links, it is the plain script name
// CODE: initial cap, used for scriptsource link
// NAME: use this also if there are alternative names
// TYPE: keywords include: alphabet, abjad, abugida, syllabary, RTL, cased

origin:"Europe",
// NOTE not clear that this is used anywhere, but seems useful to have at top level

info:{ wikipedia:"Syloti Nagri", omniglot:"syloti", endalpha:"syloti-nagri" },
// NOTE link end text — unicode & scriptsource info is obtained elsewhere
// NOTE occasionally, if it doesn't use a standard url, omniglot may contain a full url

local: [ ],
// LOCAL: other useful descriptions on r12a site

layout: [ 
    { name:"Armenian Counter Styles", url:"https://www.w3.org/TR/predefined-counter-styles/#armenian-styles"},
    ],
// LAYOUT: List of links to W3C language enablement docs

charts: [ ["Armenian", "0530"], ["Alphabetic Presentation Forms", "FB00"] ],
// CHARTS: list of Unicode block names

scriptNotes: [["Armenian", "armn/hy.html"]],
charNotesList:["Armenian", "armn/block.html"],
terms: [["Armenian", "armn/hy_vocab.html"]],
pickers: [["Armenian", "armn"]],
orthoChart: true,
ssHistory: "kylcx42avd",
htmlchapter: "15/#G59104",
usedfor: "Armenian [hy], Kurdish [kur], Kurdish, Northern [kmr], Armenian, Western [hyw]",


dates: `14thC – today`, start:"1300", end:"", current_usage:"",
// DATES: mostly from http://www.worldswritingsystems.org/
//CURRENT_USAGE: 
//	empty if the script is in active use by a large number of people
//	empty if the script isn't in use today
//	otherwise, use one or more of: community, uptake, endangered, liturgical
//		community: the target user community is very small
//		uptake: low adoption of the script
//		endangered: low adoption to the point of danger
//		liturgical: used for liturgical purposes
// END: empty for scripts that are not historic
//	12thC would be 1100

status: `Endangered`,
// STATUS: describe the current status for living scripts, in revival? scheduled language? ...

lineage: `Phoenician > Aramaic > Brahmi > Gupta > Siddham > Nagari > Kaithi > Syloti Nagari`,
siblings: ``,
history: `Syloti Nagri (<span lang="syl">ꠍꠤꠟꠐꠤ ꠘꠣꠉꠞꠤ</span>) is a South Asian abugida used in Bengal and Assam for the Sylheti language. It was primarily used in the eastern part of the Sylhet region, to document poetry known as puthis. In the course of the 20th century, it lost much ground to the standardised Eastern Nagari script, but since 2009 there has been an increased interest in the use of the script.`,
description: `Syloti Nagri requires context-sensitive shaping and positioning of glyphs. Bengali code points are normally used for digits (there are none in the Syloti Nagri block). Words have a clear headstroke, which may be used for a hanging baseline.`,
unicode: `Unicode 17 has 1 dedicated block, comprising 45 characters.`,


"sylo": {name:"TBD_TBD_TBD_TBD", region:"sasia", type:"abug"???, local:"ꠍꠤꠟꠐꠤ ꠘꠣꠉꠞꠤ", localtrans:"sílɔʈi nagɾi",
blocks:1, chars:45, bletter:32, bmark:9, bnumber:0, bpunctuation:0, bsymbol:4, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"cm vk",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"kv"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:"?", baseline:"romn", 
},


// regions:
// nam (Northern America), sam (South America), cam (Central America), carib (Caribbean)
// eur (Europe - includes Russia to Urals and Georgia, but not Armenia or Azerbaijan)
// easia (East Asia - includes China, Mongolia, Japan, Korea)
// nasia (Northern Asia - Russia east of Urals)
// seasia (Southeast Asia - including Indonesia, Philippines
// casia (Central Asia - north of Iran, S of Russia, W of China)
// wasia (Western Asia - includes Armenian, Azerbaijan, Turkey, & middle east)
// afr (Africa)
// oce (Oceania - includes Australia, NZ, and Pacific Islands)

// Notes
// kl: CLDR adds, bletter:"áâãéêíîôúûæøåÁÂÃÉÊÍÎÔÚÛÆØÅĩĸũĨŨ",mark:"\u{0301 0302 0303 030A}" but i don't see any in use
// aux field holds things you would find but not often, and is determined by my research rather than simply from CLDR's auxiliary field






