"use strict";

let g = 0;
let textG = 'Jeg er utilfreds med min/mine ... på min krop.';
let speedG = 50;

function typeWriter() {
  if (g < textG.length) {
    document.querySelector('.overlay-text-g').innerHTML += textG.charAt(g);
    g++;
    setTimeout(typeWriter, speedG);
  }
}

typeWriter();














