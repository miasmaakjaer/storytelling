'use strict';

const btnElemNinna = document.getElementById('btn-n'); //Henter min knap med id'en btn-n
const outputElemNinna = document.querySelector('.outputNinna');//hent output-feltet med klassen 'outputNinna'

btnElemNinna.addEventListener('click', () => { //tilføj en click-eventlistener til knappen
  const url = '../json/ninna.json'; //definer URL-stien til JSON-filen

  fetch(url) //hent JSON-data fra URL
    .then(response => response.json()) //få JSON-data converteret til JavaScript-objekter
    .then(data => {
      const ninnaData = data[0]; //hente første objekt i arrayet
      const ninnaBeskrivelse = ninnaData['ninna-beskrivelse'];//hente beskrivelsen af Ninna

      const ninnaContainer = document.createElement('div'); //opret et nyt div-element
      ninnaContainer.classList.add('.ninna-container'); //tilføj klassen 'ninna-container' til div-elementet

      const ninnaItem = document.createElement('div'); //opret et nyt div-element
      ninnaItem.classList.add('ninna-item');//tilføj klassen 'kristina-item' til div-elementet

      const ninnaInfo = document.createElement('ul');//opret et nyt ul-element

      const ninnaInfoList = document.createElement('ul');
      ninnaInfoList.textContent = ninnaBeskrivelse; //tilføj beskrivelsen af Gustav til ul-elementet

      ninnaInfo.appendChild(ninnaInfoList);//tilføj ul-elementet med beskrivelsen til ul-elementet uden listepunkter
      ninnaItem.appendChild(ninnaInfo);//tilføj ul-elementet med beskrivelsen til div-elementet med klassen 'ninna-item'
      ninnaContainer.appendChild(ninnaItem);//tilføj div-elementet med beskrivelsen til output-feltet
      outputElemNinna.appendChild(ninnaContainer); //tilføj det færdige container-element til output-feltet

      // Deaktiver knappen efter den første klick
      btnElemNinna.disabled = true;
    })
    .catch(error => console.error('Error:', error)); //håndter fejl under hentning af JSON-data
});