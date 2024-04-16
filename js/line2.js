"use-strict";

document.addEventListener('DOMContentLoaded', function() {
    const forsideSection = document.getElementById('forside');
    const kristinaStatistikSection = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section4 = document.getElementById('section4');
    const section5 = document.getElementById('section5');
    const section6 = document.getElementById('section6');
    const section7 = document.getElementById('section7');
  
    forsideSection.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        kristinaStatistikSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    kristinaStatistikSection.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        section2.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    section2.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        section3.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    section3.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        section4.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    section4.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        section5.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    section5.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        section6.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    section6.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        section7.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });