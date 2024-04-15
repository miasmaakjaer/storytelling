"use strict";

let i = 0;
let text = 'Jeg har ikke lyst til at vise mig nøgen, foran mine andre klassekammerater efter idræt...';
let speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.querySelector('.overlay-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();


