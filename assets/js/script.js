const listM = document.querySelectorAll('g[stroke-linecap=butt]');

function randomM() {
  let indexM = Math.floor(Math.random() * listM.length);
  if (listM[indexM].style.opacity === '0') {
    listM[indexM].style.opacity = '1';
  } else {
    listM[indexM].style.opacity = '0';
  }
}

setInterval(randomM, 40);
