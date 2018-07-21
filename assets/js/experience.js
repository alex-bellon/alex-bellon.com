var url = 'https://docs.google.com/spreadsheets/d/14P87s2uJCtYIMgBdXOtK33MDhho8SJ4G8KucMXpWAlQ/edit?usp=sharing';

function init() {
	Tabletop.init( { key: url,
                 callback: showInfo,
                 simpleSheet: true } );

}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

function showInfo(data) {
	var company = [];
	var image = [];
	var job = [];
	var p = [];
	var useTemplate = [];
	var webURL = [];
	var index = 0;
	allTiles = "";
	while (data[index] != null) {
		company[index] = data[index].company;
		image[index] = data[index].image;
		job[index] = data[index].job;
		p[index] = data[index].p;
		allTiles += '<div class="hoverImage"><img src="' + image[index] + '"><h2>' + job[index] + '</h2><p>' + p[index] + '</p></div>';
		index++;
	}
	document.getElementById("Projects").innerHTML = allTiles;
}
