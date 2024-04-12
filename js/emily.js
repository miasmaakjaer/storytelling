"use strict";
fetch('../json/cases.json')
  .then(response => response.json())
  .then(data => {
    const kristina = data[0];
    const kristinaCitat = document.querySelector('.citat');
    kristinaCitat.textContent = kristina.citat;

    const kristinaVideo = document.querySelector('.kristina-mp4');
    kristinaVideo.src = kristina.mp4;
  })
  .catch(error => console.error(error));