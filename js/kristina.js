"use strict";
'use strict';

const btnElem = document.getElementById('btn');
const outputElem = document.querySelector('.outputKristina');

btnElem.addEventListener('click', () => {
  const url = '../json/kristina.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const kristinaData = data[0];
      const kristinaBeskrivelse = kristinaData['kristina-beskrivelse'];

      const kristinaContainer = document.createElement('div');
      kristinaContainer.classList.add('kristina-container');

      const kristinaItem = document.createElement('div');
      kristinaItem.classList.add('kristina-item');

      const kristinaInfo = document.createElement('ul');

      const kristinaInfoList = document.createElement('ul');
      kristinaInfoList.textContent = kristinaBeskrivelse;

      kristinaInfo.appendChild(kristinaInfoList);
      kristinaItem.appendChild(kristinaInfo);
      kristinaContainer.appendChild(kristinaItem);
      outputElem.appendChild(kristinaContainer);
    })
    .catch(error => console.error('Error:', error));
});