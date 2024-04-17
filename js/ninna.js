'use strict';

const btnElemNinna = document.getElementById('btn-n');
const outputElemNinna = document.querySelector('.outputNinna');

btnElemNinna.addEventListener('click', () => {
  const url = '../json/ninna.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const ninnaData = data[0];
      const ninnaBeskrivelse = ninnaData['ninna-beskrivelse'];

      const ninnaContainer = document.createElement('div');
      ninnaContainer.classList.add('.ninna-container');

      const ninnaItem = document.createElement('div');
      ninnaItem.classList.add('ninna-item');

      const ninnaInfo = document.createElement('ul');

      const ninnaInfoList = document.createElement('ul');
      ninnaInfoList.textContent = ninnaBeskrivelse;

      ninnaInfo.appendChild(ninnaInfoList);
      ninnaItem.appendChild(ninnaInfo);
      ninnaContainer.appendChild(ninnaItem);
      outputElemNinna.appendChild(ninnaContainer);

      // Disable the button after the first click
      btnElemNinna.disabled = true;
    })
    .catch(error => console.error('Error:', error));
});