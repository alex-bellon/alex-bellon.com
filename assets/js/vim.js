var pos = 0;
var jump = 250;
var pages = ["", "publications", "projects", "experience", "blog", "misc"]

document.onkeydown = function(e) {
  e = e || window.event;
  var home = "https://www.sysnet.ucsd.edu/~abellon/";

  // UP AND DOWN SCROLLING
  if (e.keyCode == 74){ // j, down
    if (pos + jump <= 2000) pos += jump; // Fix this. If you try to do scrollHeight, you need to make sure it calculates that after everything loads.
    window.scrollTo(0, pos);
  }
  else if (e.keyCode == 75){ // k, up
    if (pos - jump >= 0) pos -= jump;
    window.scrollTo(0, pos);
  }

  // NEXT/PREV PAGE
  else if (e.keyCode == 76){ // l, next
    var title;
    var url = document.location.href;
    if (url.includes("blog")){
        title = "blog";
    } else {
        title = url.split("/").slice(-1)[0].replace(".html", "");
    }
    var index = pages.indexOf(title);
	if(index == -1) index = 0;
    var newindex = pages[(index + 1) % pages.length];
    window.location.href = home + newindex;
  }
  else if (e.keyCode == 72){ // h, prev
    var title;
    var url = document.location.href;
    if (url.includes("blog")){
        title = "blog";
    } else {
        title = url.split("/").slice(-1)[0].replace(".html", "");
    }
    var index = pages.indexOf(title);
	if(index == -1) index = 0;
    var newindex = pages[(index - 1 + pages.length) % pages.length];
    window.location.href = home + newindex;
  }
};
