var url = 'https://docs.google.com/spreadsheets/d/1KbSpTW-sZ92qHaJLsOF-LGX-gCq3qs-alSHnF083fSE/edit?usp=sharing';

function init() {
	Tabletop.init( { key: url,
                 callback: showInfo,
                 simpleSheet: true } );

}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

function showInfo(data) {
	var name = [];
	var image = [];
	var link = [];
	var linktext = [];
	var p1 = [];
	var p2 = [];
	var useTemplate = [];
	var webURL = [];
	var index = 0;
	allTiles = "";
	while (data[index] != null) {
		name[index] = data[index].name;
		image[index] = data[index].image;
		link[index] = data[index].link;
		linktext[index] = data[index].linktext;
		p1[index] = data[index].p1;
		p2[index] = data[index].p2;
		allTiles += '<div class="clearfix"><img src="' + image[index] + '" width=300px><h2><a href="' + link[index] + '">' + name[index] + '</a></h2><p>' + p1[index] + '</p><p>' + p2[index] + '</p></div>';
		index++;
	}
	document.getElementById("Projects").innerHTML = allTiles;
}
