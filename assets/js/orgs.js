var url = 'https://docs.google.com/spreadsheets/d/1ZoG4_Kz1GCjfkGbsGCyDvfdyRZXBeXrMepYKR85pgjs/edit?usp=sharing';

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
	var p = [];
	var useTemplate = [];
	var webURL = [];
	var index = 0;
	allTiles = "";
	while (data[index] != null) {
		name[index] = data[index].name;
		image[index] = data[index].image;
		link[index] = data[index].link;
		p[index] = data[index].p;
		allTiles += '<div class="hoverImage"><img src="' + image[index] + '"><h2><a href="' + link[index] + '">' + name[index] + '</a></h2><p>' + p[index] + '</p></div>';
		index++;
	}
	document.getElementById("Projects").innerHTML = allTiles;
}
