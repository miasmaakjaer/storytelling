"use strict";

let n = 0;
let textN = 'Jeg har ikke lyst til at vise mig nøgen, foran mine andre klassekammerater efter idræt...';
let speedN = 50;

function typeWriterN() {
  if (n < textN.length) {
    document.querySelector('.overlay-text-n').innerHTML += textN.charAt(n);
    n++;
    setTimeout(typeWriterN, speedN);
  }
}

typeWriterN();


