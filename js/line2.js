"use strict";

document.addEventListener('DOMContentLoaded', function() {
  const forsideSection = document.getElementById('forside');
  const kristinaStatistikSection = document.getElementById('section1');
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');
  const section4 = document.getElementById('section4');
  const section5 = document.getElementById('section5');
  const section6 = document.getElementById('section6');
  const section7 = document.getElementById('section7');

  // sidebar funktion
  const sidebarIcons = document.querySelectorAll('.sidebar-icon');

  function updateActiveSidebarIcon(target) {
    if (target && target.id) {
      sidebarIcons.forEach(icon => {
        icon.classList.remove('active');
      });
      document.querySelector(`[data-page="#${target.id}"]`).classList.add('active');
    }
  }

 // typewriter funktion
let k = 0;
let textK = 'Når jeg ser andres kroppe på sociale medier, får jeg lyst til at lave om på min krop (fx. lip-filler, botox, nosejob el. lign)';
let speedK = 50;

function typeWriterK() {
  if (section2.classList.contains('active')) { // Check if section2 is the active element
    if (k < textK.length) {
      document.querySelector('.overlay-text-k').innerHTML += textK.charAt(k);
      k++;
      setTimeout(typeWriterK, speedK);
    }
  }
}

// Call the typeWriterK function initially
typeWriterK();

  // scroll event og sidebar funktion

  forsideSection.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      kristinaStatistikSection.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(kristinaStatistikSection);
    }
  });

  kristinaStatistikSection.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      section2.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section2);
    } else {
      forsideSection.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(forsideSection);
    }
  });

  section2.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      section3.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section3);
    } else {
      kristinaStatistikSection.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(kristinaStatistikSection);
    }
  });

  section3.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      section4.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section4);
    } else {
      section2.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section2);
    }
  });

  section4.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      section5.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section5);
    } else {
      section3.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section3);
    }
  });

  section5.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      section6.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section6);
    } else {
      section4.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section4);
    }
  });

  section6.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      section7.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section7);
    } else {
      section5.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section5);
    }
  });

  section7.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
      section6.scrollIntoView({ behavior: 'smooth' });
      updateActiveSidebarIcon(section6);
    }
  });
});