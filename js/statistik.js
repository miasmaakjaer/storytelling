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






let y = 0;
let txt = 'Jeg er utilfreds med min/mine ... på min krop.';
let speeed = 50;

function typeWriterTo() {
  if (y < text.length) {
    document.querySelector('.overlay-text').innerHTML += txt.charAt(y);
    i++;
    setTimeout(typeWriterTo, speeed);
  }
}

typeWriterTo();





