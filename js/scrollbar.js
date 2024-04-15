"use strict";
const sections = document.querySelectorAll('.section');
const currentSection = document.querySelector('#section2'); // Change this to the current section

sections.forEach((section) => {
  if (section === currentSection) {
    section.classList.add('active');
  } else {
    section.classList.remove('active');
  }
});