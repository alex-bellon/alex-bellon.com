var url = 'https://docs.google.com/spreadsheets/d/1IIX9df-VWECwlIl-ufcMhmHn5wVF5nNGKZha5NGu9Ns/edit?usp=sharing';

function init() {
	Tabletop.init( { key: url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

function showInfo(data) {
	var name = [];
	var link = [];
    var index = 0;
    allTiles = "";
	while (data[index] != null) {
		name[index] = data[index].name;
		link[index] = data[index].link;
			allTiles += '<a href="' + link[index] + '">' + name[index] + '</a>  |';	
		index++;
	}
    allTiles = allTiles.substring(0, allTiles.length - 2);
	document.getElementById("Footer").innerHTML = allTiles;
}
