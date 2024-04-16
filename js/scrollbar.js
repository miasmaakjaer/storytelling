"use strict";
const sidebarIcons = document.querySelectorAll('.sidebar-icon');
const sections = document.querySelectorAll('.section');

// Tilføj en click-eventlistener til hvert sidebarelement
sidebarIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Fjern 'active'-klassen fra alle sidebarelementer
    sidebarIcons.forEach(icon => icon.classList.remove('active'));

    // Tilføj 'active'-klassen til det valgte sidebarelement
    icon.classList.add('active');

    // Scroll til den valgte sektion
    const targetSection = document.querySelector(icon.dataset.page);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Tilføj en scroll-eventlistener til at markere den aktive sektion i sidebaren
window.addEventListener('scroll', () => {
  const currentSection = document.querySelector('section.active');
  const nextSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);

  // Fjern 'active'-klassen fra den aktive sektion
  if (currentSection) {
    currentSection.classList.remove('active');
  }

  // Tilføj 'active'-klassen til den næste sektion
  if (nextSection && nextSection.tagName === 'SECTION') {
    nextSection.classList.add('active');
  }
});


