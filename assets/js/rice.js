var url = 'https://docs.google.com/spreadsheets/d/1BCo-wiJ36bG1_MCZV86Fi4izObQHxNIP6DCYtsxW0GU/edit?usp=sharing';

function init() {
	Tabletop.init( { key: url,
                 callback: showInfo,
                 simpleSheet: true } );

}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded


function showInfo(data) {
	var cat = [];
	var a = [];
	var alink = [];
	var b = [];
	var blink = [];
	var c = [];
	var clink = [];
	var d = [];
	var dlink = [];
	var e = [];
	var elink = [];
	var useTemplate = [];
	var webURL = [];
	var index = 0;
	var allTiles = "<table>";
	while (data[index] != null) {
		cat[index] = data[index].CATEGORY;
		a[index] = data[index].a;
		alink[index] = data[index].alink;
		b[index] = data[index].b;
		blink[index] = data[index].blink;
		c[index] = data[index].c;
		clink[index] = data[index].clink;
		d[index] = data[index].d;
		dlink[index] = data[index].dlink;
		e[index] = data[index].e;
		elink[index] = data[index].elink;
		if(cat[index] == "  ") {
			allTiles += '<tr> </tr><tr>  </tr><tr> </tr><tr> </tr>'; 
		} else {
			allTiles += '<tr><th>' + cat[index] + '</th><td>' + '<a href="' + alink[index] + '">' + a[index] + '</a></td>' + '<td><a href="' + blink[index] + '">' + b[index] + '</a></td>' + '<td><a href="' + clink[index] + '">' + c[index] + '</a></td>' + '<td><a href="' + dlink[index] + '">' + d[index] + '</a></td>' + '<td><a href="' + elink[index] + '">' + e[index] + '</a></td>' + '</tr>';
		}
		index++;
	}
	allTiles+="</table>"
	document.getElementById("Bookmarks").innerHTML = allTiles;
}
