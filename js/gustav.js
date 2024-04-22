
'use strict';

const btnElemGustav = document.getElementById('btn-g'); //Henter min knap med id'en btn-g
const outputElemGustav = document.querySelector('.outputGustav'); //hent output-feltet med klassen 'outputGustav'

btnElemGustav.addEventListener('click', () => { //tilføj en click-eventlistener til knappen
  const url = '../json/gustav.json';  //definer URL-stien til JSON-filen

  fetch(url) //hent JSON-data fra URL
    .then(response => response.json()) //få JSON-data converteret til JavaScript-objekter
    .then(data => {
      const gustavData = data[0]; //hente første objekt i arrayet
      const gustavBeskrivelse = gustavData['gustav-beskrivelse']; //hente beskrivelsen af Gustav

      const gustavContainer = document.createElement('div'); //opret et nyt div-element
      gustavContainer.classList.add('.gustav-container'); //tilføj klassen 'gustav-container' til div-elementet

      const gustavItem = document.createElement('div'); //opret et nyt div-element
      gustavItem.classList.add('gustav-item'); //tilføj klassen 'gustav-item' til div-elementet

      const gustavInfo = document.createElement('ul'); //opret et nyt ul-element

      const gustavInfoList = document.createElement('ul');
      gustavInfoList.textContent = gustavBeskrivelse; //tilføj beskrivelsen af Gustav til ul-elementet

      gustavInfo.appendChild(gustavInfoList); //tilføj ul-elementet med beskrivelsen til ul-elementet uden listepunkter
      gustavItem.appendChild(gustavInfo); //tilføj ul-elementet med beskrivelsen til div-elementet med klassen 'gustav-item'
      gustavContainer.appendChild(gustavItem); //tilføj div-elementet med beskrivelsen til output-feltet
      outputElemGustav.appendChild(gustavContainer); //tilføj det færdige container-element til output-feltet

      // Deaktiver knappen efter den første klick
      btnElemGustav.disabled = true;
    })
    .catch(error => console.error('Error:', error)); //håndter fejl under hentning af JSON-data
});