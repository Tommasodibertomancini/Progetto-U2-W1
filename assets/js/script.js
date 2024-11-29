const listM = document.querySelectorAll('g[stroke-linecap=butt]');
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const getStartedButton = document.querySelector('#getStarted button');
  
    if (window.scrollY > 380) {
      header.style.backgroundColor = 'white'; 
      getStartedButton.style.backgroundColor = '#1a8917';
      getStartedButton.style.color = 'white'; 
    } else {
      header.style.backgroundColor = '#ffc017'; 
      getStartedButton.style.backgroundColor = '#191919'; 
      getStartedButton.style.color = 'white';
    }
  });

function randomM() {
  let indexM = Math.floor(Math.random() * listM.length);
  if (listM[indexM].style.opacity === '0') {
    listM[indexM].style.opacity = '1';
  } else {
    listM[indexM].style.opacity = '0';
  }
}

setInterval(randomM, 30);
