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
	var pos = [];
	var useTemplate = [];
	var webURL = [];
	var index = 0;
	allTiles = "";
	while (data[index] != null) {
		name[index] = data[index].name;
		image[index] = data[index].image;
		link[index] = data[index].link;
		p[index] = data[index].p;
		pos[index] = data[index].pos;
		if(name[index] == "---"){
			allTiles += '<h1>' + pos[index] + '</h1>';
		} else {
			allTiles += '<div class="hoverImage" onclick="location.href=\'' + link[index] + '\'"><img src="' + image[index] + '"><h2><a href="' + link[index] + '">' + name[index] + '</a></h2><p>' + p[index] + '</p></div>';
		}
		index++;
	}
	document.getElementById("Projects").innerHTML = allTiles;
}
