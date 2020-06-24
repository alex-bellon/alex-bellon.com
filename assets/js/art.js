var url = 'https://docs.google.com/spreadsheets/d/1b2PRo-lY-zF3_-vojEkjBfWu4Cq9niClXI-nRB-ncGQ/edit?usp=sharing';

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
	var p1 = [];
	var useTemplate = [];
	var webURL = [];
	var index = 0;
	allTiles = "";
	while (data[index] != null) {
		name[index] = data[index].name;
		image[index] = data[index].image;
		link[index] = data[index].link;
		p1[index] = data[index].p1;
		if(name[index] == "---"){
                allTiles += '<h1>' + image[index] + '</h1>';
        } else {
                allTiles += '<div class="hoverImage" onclick="location.href=\'' + link[index] + '\'"><img src="' + image[index] + '"><h2><a href="' + link[index] + '">' + name[index] + '</a></h2><p>' + p1[index] + '</p></div>';
        }

		index++;
	}
	document.getElementById("Projects").innerHTML = allTiles;
}
