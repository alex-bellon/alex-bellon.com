var pos = 0;
var jump = 250;
document.onkeydown = function(e) {
  e = e || window.event;
  if (e.keyCode == 74){ //j
    if (pos + jump <= 2000){ // Fix this. If you try to do scrollHeight, you need to make sure it calculates that after everything loads.
      pos += jump;
    }
    console.log(pos);
    window.scrollTo(0, pos);
  }
  else if (e.keyCode == 75){ //k
    if (pos - jump >= 0){
      pos -= jump;
    }
    console.log(pos);
    window.scrollTo(0, pos);
  }
};
