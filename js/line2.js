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

  const sidebarIcons = document.querySelectorAll('.sidebar-icon');

  function updateActiveSidebarIcon(target) {
    if (target && target.id) {
      sidebarIcons.forEach(icon => {
        icon.classList.remove('active');
      });
      document.querySelector(`[data-page="#${target.id}"]`).classList.add('active');
    }
  }

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