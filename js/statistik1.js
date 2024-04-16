"use strict";

let i = 0;
let text = 'Når jeg ser andres kroppe på sociale medier, får jeg lyst til at lave om på min krop (fx. lip-filler, botox, nosejob el. lign)';
let speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.querySelector('.overlay-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

