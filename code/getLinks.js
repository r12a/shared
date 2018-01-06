// code to include script link data in a page


function getData (script) {
	var found = false
	var record = null
	for (var i=0;i<linkDB.length;i++) {
		if (linkDB[i].code === script) {
			record = linkDB[i]
			found = true
			break
			}
		}
	if (! found) return '<p>No data found.</p>'
	
	script = linkDB[i].script
	var lc = script.toLowerCase()
	var norm = script.toLowerCase().replace(/ /g,'_')
	
	out = '<table id="linkstable"><tbody>'
	if (record.info) {
		out += '<tr><th>General info:</th><td>'
		out += '<p><a href="http://scriptsource.org/scr/'+record.code+'" >Scriptsource</a></p>'
		if (record.info.wikipedia) out += '<p><a href="http://en.wikipedia.org/wiki/'+record.info.wikipedia+'" >Wikipedia</a></p>'
		if (record.info.omniglot) {
			if ( record.info.omniglot.match('http') ) out += '<p><a href="'+record.info.omniglot+'" >Omniglot</a></p>'
			else out += '<p><a href="http://www.omniglot.com/writing/'+record.info.omniglot+'.htm" >Omniglot</a></p>'
			}
		for (var r=2;r<record.local.length;r++) temp += '<p><a href="'+record.info[r].url+'" >'+record.info[r].name+'</a></p>'
		out += '</td></tr>'
		}
	if ((record.local && record.local.length) > 0 | scriptNotesSet.has(lc) | charNotesSet.has(lc) | compChartSet.has(lc) | scriptSummarySet.has(lc)) {
		var temp = ''
		temp += '<tr><th>This site:</th><td>'
		if (scriptNotesSet.has(lc)) temp += '<p><a href="/scripts/'+lc+'" >Script summary</a></p>'
		if (charNotesSet.has(lc)) temp += '<p><a href="/scripts/'+lc+'/block" >Character notes</a></p>'
		if (compChartSet.has(lc)) temp += '<p><a href="/scripts/featurelist/" >Comparison chart</a></p>'
		for (var r=0;r<record.local.length;r++) temp += '<p><a href="'+record.local[r].url+'" >'+record.local[r].name+'</a></p>'
		if (scriptSummarySet.has(lc)) temp += '<p><a href="/scripts/tutorial/summaries/'+lc+'" >Tutorial notes</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>This site:</th><td></td></tr>') out += temp
		}
	if (record.unicode) {
		out += '<tr><th>Unicode info:</th><td>'
		out += '<p><a href="http://www.unicode.org/versions/latest/ch'+chapters[norm]+'.pdf" >Core text</a></p>'
		out += '<p><a href="http://scriptsource.org/entry/'+ssHistory[norm]+'" >Historical</a></p>'
		out += '</td></tr>'
		}
	if (record.charts) {
		out += '<tr><th>Charts:</th><td><table><tbody>'
		for (var r=0;r<record.charts.length;r++) out += '<tr><td>'+record.charts[r]+'</td><td><a href="/uniview/?block='+record.charts[r].toLowerCase().replace(/ /g,'_')+'" >UniView</a></td><td><a href="http://www.unicode.org/charts/PDF/U'+blockStart[record.charts[r].toLowerCase().replace(/ /g,'_')]+'.pdf" >Unicode</a></td></tr>'
		out += '</tbody></table></td></tr>'
		}
	if (record.pickers) {
		var temp = ''
		temp += '<tr><th>Pickers:</th><td>'
		for (var r=0;r<record.pickers.length;r++) temp += '<p><a href="/pickers/'+record.pickers[r].url+'/" >'+record.pickers[r].name+'</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Pickers:</th><td></td></tr>') out += temp
		}
	if (record.fontkey) {
		var temp = ''
		temp += '<tr><th>Fonts &amp; keyboards:</th><td>'
		temp += '<p><a href="http://scriptsource.org/scr/'+record.code+'/font" >Scriptsource</a></p>'
		if (googleFontSet.has(norm)) temp += '<p><a href="https://www.google.com/get/noto/" >Google Noto</a></p>'
		if (googleEASet.has(norm)) temp += '<p><a href="http://www.google.com/fonts/earlyaccess" >Google Early Access</a></p>'
		if (gouFonts[norm]) temp += '<p><a href="http://www.wazu.jp/gallery/Fonts_'+gouFonts[norm]+'.html" >Gallery of Unicode Fonts</a></p>'
		for (var r=0;r<record.fontkey.length;r++) temp += '<p><a href="'+record.fontkey[r].url+'" >'+record.fontkey[r].name+'</a></p>'
		if (OSDefaultFontsSet.has(norm)) temp += '<p><a href="/scripts/fontlist/#'+norm+'" >OS default fonts</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Fonts &amp; keyboards:</th><td></td></tr>') out += temp
		}
	if (record.layout) {
		var temp = ''
		temp += '<tr><th>Layout &amp; typography:</th><td>'
		for (var r=0;r<record.layout.length;r++) temp += '<p><a href="'+record.layout[r].url+'" >'+record.layout[r].name+'</a></p>'
		if (typographyDocSet.has(norm)) temp += '<p><a href="http://w3c.github.io/typography/" >International text layout and typography index</a></p>'
		if (w3cTypographySet.has(norm)) temp += '<p><a href="https://github.com/w3c/i18n-activity/issues?q=is%3Aissue+is%3Aopen+label%3A'+lc+'" >w3c/typography</a></p>'
		if (w3cTypeSampleSet.has(norm)) temp += '<p><a href="https://w3c.github.io/type-samples/" >w3c/type-samples</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Layout &amp; typography:</th><td></td></tr>') out += temp
		}
	if (record.other && record.other.length > 0) {
		var temp = ''
		temp += '<tr><th>Other:</td><th>'
		for (var r=0;r<record.other.length;r++) temp += '<p><a href="'+record.other[r].url+'" >'+record.other[r].name+'</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Other:</td><td></th></tr>') out += temp
		}
	out += '</table></tbody>'
	return out
	}


