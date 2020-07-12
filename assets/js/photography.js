var url = "https://docs.google.com/spreadsheets/d/1dX3FyFJCjKt83Or7RN1DFCRxqds_nUd1xp6pYsbxl4E/edit?usp=sharing";

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
            allTiles += '<div class="photo" onclick="location.href=\'' + link[index] + '\'"><img src="' + image[index] + '"><h2><a href="' + link[index] + '">' + name[index] + '</a></h2><p>' + p1[index] + '</p></div>';
        }

		index++;
	}
	document.getElementById("Projects").innerHTML = allTiles;
}
