'use strict';

const btnElem = document.getElementById('btn'); //Henter min knap med id'en btn
const outputElem = document.querySelector('.outputKristina');//hent output-feltet med klassen 'outputKristina'

btnElem.addEventListener('click', () => { //tilføj en click-eventlistener til knappen
  const url = '../json/kristina.json'; //definer URL-stien til JSON-filen




  fetch(url) //hent JSON-data fra URL
    .then(response => response.json()) //få JSON-data converteret til JavaScript-objekter
    .then(data => {
      const kristinaData = data[0]; //hente første objekt i arrayet
      const kristinaBeskrivelse = kristinaData['kristina-beskrivelse']; //hente beskrivelsen af Kristina

      const kristinaContainer = document.createElement('div'); //opret et nyt div-element
      kristinaContainer.classList.add('.kristina-container'); //tilføj klassen 'kristina-container' til div-elementet

      const kristinaItem = document.createElement('div'); //opret et nyt div-element
      kristinaItem.classList.add('kristina-item');//tilføj klassen 'kristina-item' til div-elementet

      const kristinaInfo = document.createElement('ul'); //opret et nyt ul-element

      const kristinaInfoList = document.createElement('ul');
      kristinaInfoList.textContent = kristinaBeskrivelse; //tilføj beskrivelsen af Ninna til ul-elementet

      kristinaInfo.appendChild(kristinaInfoList); //tilføj ul-elementet med beskrivelsen til ul-elementet uden listepunkter
      kristinaItem.appendChild(kristinaInfo);//tilføj ul-elementet med beskrivelsen til div-elementet med klassen 'kristina-item'
      kristinaContainer.appendChild(kristinaItem); //tilføj div-elementet med beskrivelsen til output-feltet
      outputElem.appendChild(kristinaContainer); //tilføj det færdige container-element til output-feltet

      
     // Deaktiver knappen efter den første klick
     btnElem.disabled = true; 

    })
    .catch(error => console.error('Error:', error)); //håndter fejl under hentning af JSON-data
});