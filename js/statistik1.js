"use strict";

let k = 0;
let textK = 'Når jeg ser andres kroppe på sociale medier, får jeg lyst til at lave om på min krop (fx. lip-filler, botox, nosejob el. lign)';
let speedK = 50;

function typeWriterK() {
  if (k < textK.length) {
    document.querySelector('.overlay-text-k').innerHTML += textK.charAt(k);
    k++;
    setTimeout(typeWriterK, speedK);
  }
}

typeWriterK();

