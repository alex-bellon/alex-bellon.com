var url = 'https://docs.google.com/spreadsheets/d/1roz8PAsqxG7aCgkMIBHEu9h9ApNfBUAPdr3OEFX7Oy0/edit?usp=sharing';

function init() {
	Tabletop.init( { key: url,
                 callback: showInfo,
                 simpleSheet: true } );

}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

function showInfo(data) {
	var name = [];
	var link = [];
	var subtitle = [];
	var p1 = [];
	var p2 = [];
	var useTemplate = [];
	var webURL = [];
	var index = 0;
	allTiles = "";
	while (data[index] != null) {
		name[index] = data[index].name;
		link[index] = data[index].link;
		subtitle[index] = data[index].subtitle;
		p1[index] = data[index].p1;
		p2[index] = data[index].p2;
		if(name[index] == "---"){
        	allTiles += '<div><h1>' + link[index] + '</h1></div>';
        } else {
        	allTiles += '<div class="hoverText"><h4><h3>' + name[index] + '</h3><h5>' + subtitle[index] + '</h5></h4><h2><a href="' + link[index] + '">' + name[index] + '</a></h2><p>' + p1[index] +  p2[index] + '</p></div>';
        }
		index++;
	}
	document.getElementById("Writeups").innerHTML = allTiles;
}
