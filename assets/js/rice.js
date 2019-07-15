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
	var bar1 = [];
	var bar2 = [];
	var bar3 = [];
	var bar4 = [];
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
		bar1[index] = data[index].bar1;
		bar2[index] = data[index].bar2;
		bar3[index] = data[index].bar3;
		bar4[index] = data[index].bar4;
		if(cat[index] == "  ") {
			allTiles += '<tr> </tr><tr> </tr><tr> </tr><tr> </tr><tr> </tr><tr> </tr><tr> </tr><tr> </tr><tr> </tr><tr> </tr>';
		} else {
			allTiles += '<tr><th>' + cat[index] + '</th><td>' + '<a href="' + alink[index] + '">' + a[index] + '</a>' + bar1[index]  + '<a href="' + blink[index] + '">' + b[index] + '</a>' + bar2[index]  + '<a href="' + clink[index] + '">' + c[index] + '</a>' + bar3[index] + '<a href="' + dlink[index] + '">' + d[index] + '</a>' + bar4[index]+ '<a href="' + elink[index] + '">' + e[index] + '</a></td>' + '</tr>';
		}
		index++;
	}
	allTiles+="</table>"
	document.getElementById("Bookmarks").innerHTML = allTiles;
}

/*

Go through the first row and make that many lists for <tr> tag.
On each iteration, add appropriate <td> to each <tr> list.
In the end, go through each <tr> list in order and set up the actualy table.

allTiles = '<table><tr>'
for item in <tr> list:
	allTiles += <th> entry </th>
allTiles += '</tr><tr>'
for rest of tr lists:
	allTiles += '<tr>'
	for item in rest:
		allTiles += '<td><a></a></td>'
	allTiles += '</tr>'
allTiles += '</table>'

*/
