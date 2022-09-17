var id = null;

function init_position(elem_id){
  var elem = document.getElementById(elem_id);
  var x = Math.floor(Math.random() * (window.innerHeight - elem.offsetHeight));
  var y = Math.floor(Math.random() * (window.innerWidth - elem.offsetWidth));
  elem.style.top = x + 'px';
  elem.style.left = y + 'px';
}

function move(elem_id, id_num) {
  var elem = document.getElementById(elem_id);
  var x = elem.offsetTop;
  var y = elem.offsetLeft;

  var xStep, yStep;
  xStep = Math.floor(Math.random() * 10) - 5;
  yStep = Math.floor(Math.random() * 10) - 5;
  xStep = xStep * 1.5 + 0.5;
  yStep = yStep * 1.5 + 0.5;

  clearInterval(id_num);
  id_num = setInterval(frame, 30);

  function frame() {
    x += xStep;
    y += yStep;
    if (!boundary(x, y, elem_id)) {
      clearInterval(id_num);
      move(elem_id, id_num);
    } else {
      elem.style.top = x + 'px';
      elem.style.left = y + 'px';
    }
  }
}

function boundary(x, y, elem_id) {
  var elem = document.getElementById(elem_id);
  if (x < 0) return false;
  if (y < 0) return false;
  if (x > (window.innerHeight - elem.offsetHeight)) return false;
  if (y > (window.innerWidth - elem.offsetWidth)) return false;
  else return true;
}
