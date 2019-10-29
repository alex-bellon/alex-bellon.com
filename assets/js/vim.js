var pos = 0;

function nav_hotkey(e) {
  var action_for_key = function(e) {
    switch (e.keyCode) {
      case 74:  // 'j'
        return 'down';
      case 75:  // 'k'
        return 'up';
    }
  }
  var action = action_for_key(e);
  if (action == 'down') {
    pos += 300;
    window.scrollTo(0, pos);
  } else if (action == 'up') {
    pos -= 300;
    window.scrollTo(0, pos);
  }
}
