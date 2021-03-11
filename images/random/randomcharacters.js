
var imageArray = [
{ src:'adlm.png', width: 154, height:153 },
{ src:'arab.png', width: 102, height:150 },
{ src:'arab-ks.png', width: 150, height:202 },
{ src:'bass.png', width: 154, height:153 },
{ src:'batk.png', width: 170, height:153 },
{ src:'cher.png', width: 191, height:153 },
{ src:'deva.png', width: 143, height:153 },
{ src:'ethi.png', width: 174, height:153 },
{ src:'geor.png', width: 159, height:150 },
{ src:'guru.png', width: 146, height:150 },
{ src:'hebr.png', width: 121, height:150 },
{ src:'hani.png', width: 120, height:150 },
{ src:'jpan.png', width: 155, height:150 },
{ src:'latn.png', width: 135, height:150 },
{ src:'newa.png', width: 154, height:153 },
{ src:'orya.png', width: 150, height:150 },
{ src:'taml.png', width: 189, height:150 },
{ src:'tfng.png', width: 127, height:150 },
{ src:'thai.png', width: 107, height:150 },
]



function chooseRandomPicture () {
	var picture = document.getElementById( 'level2-picture' )
	index = Math.floor(Math.random()*imageArray.length)
	console.log('index',index)
	picture.setAttribute( 'src', '/shared/images/random/'+imageArray[index].src )
	picture.setAttribute( 'width', imageArray[index].width )
	picture.setAttribute( 'height', imageArray[index].height )
	}