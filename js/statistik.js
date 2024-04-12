"use strict";

let i = 0;
let text = 'Jeg er utilfreds med min/mine ... på min krop.';
let speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.querySelector('.overlay-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();














