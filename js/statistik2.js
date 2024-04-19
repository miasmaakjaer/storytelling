"use strict";

let g = 0;
let textG = 'Jeg er utilfreds med min/mine ... på min krop.';
let speedG = 50;

function typeWriterG() {
  if (g < textG.length) {
    document.querySelector('.overlay-text-g').innerHTML += textG.charAt(g);
    g++;
    setTimeout(typeWriterG, speedG);
  }
}

// Tilføj en scroll-eventlistener til at starte typeWriterG når du når sektion G
document.addEventListener('scroll', () => {
  const sectionG = document.querySelector('#section-g');
  const sectionGPosition = sectionG.getBoundingClientRect().top;

  if (sectionGPosition < window.innerHeight && sectionGPosition >= 0) {
    typeWriterG();
  }
});