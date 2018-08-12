// looks to the parent of the h2/h3, ie. the enclosing div or section, to find the id

function createtoc (maxlevel) {
	// creates a TOC and puts it in a div with id="toc"
	
	var h2s = document.querySelectorAll('h2')
	var toc = document.getElementById('toc')
	var h2, h3
	
	for (var i=0; i<h2s.length; i++) {
		if (!h2s[i].className.match(/notoc/)) {
			if (h2s[i].firstChild.nodeName.toLowerCase() == 'a') { h2 = h2s[i].firstChild.innerHTML }
			else { h2 = h2s[i].innerHTML }
			var h = document.createElement('div');
			var a = document.createElement('a');
				if (h2s[i].id) a.href = '#'+h2s[i].id
				else a.href = '#'+h2s[i].parentNode.id
				a.innerHTML = h2
			h.appendChild(a)
			h.className = 'toc1';
		
			if (maxlevel && maxlevel > 2) {
				// check for h3s
				var h3s = h2s[i].parentNode.querySelectorAll('h3');
				for (var k=0; k<h3s.length; k++) {
					if (!h3s[k].className.match(/notoc/)) {
						if (h3s[k].firstChild.nodeName.toLowerCase() == 'a') { var h3 = h3s[k].firstChild.innerHTML }
						else { var h3 = h3s[k].innerHTML }
						var hh = document.createElement('div');
						aa = document.createElement('a');
							if (h3s[k].id) aa.href = '#'+h3s[i].id
							else aa.href = '#'+h3s[k].parentNode.id;
							aa.innerHTML = h3;
						hh.appendChild(aa);
						hh.className = 'toc2';
						}
					h.appendChild(hh);
					}
				}
				toc.appendChild(h);
			}
		}
	}
    


function setFigRefs () {
    // finds all a elements with class figref and replaces the content
    // of the element with 'Fig. '+<counter>
    
    // make a list of figures with captions
    var figs = document.querySelectorAll('figure')
    var figures = []
    for (let i=0;i<figs.length;i++) {
        if (figs[i].querySelector('figcaption') !== null) figures.push(figs[i].id)
        }
    
    var figrefs = document.querySelectorAll('.figref')
    for (let i=0;i<figrefs.length;i++) {
        var id = ''
        for (let f=0;f<figures.length;f++) {
            var url = figrefs[i].href.split('#')
            if (url.length > 0) id = url[1]
            else break
            if (figures[f] === id) {
                figrefs[i].textContent = 'Fig. '+eval(f+1)
                figrefs[i].href = '#'+id
                break
                }
            else figrefs[i].textContent = 'Unknown figure'
            }
        }
    }

