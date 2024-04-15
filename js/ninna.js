"use strict";

const btnElem = document.getElementById('btn');
const outputElem = document.querySelector('.outputNinna');

btnElem.addEventListener('click', () => {
  const url = '../json/ninna.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const ninnaData = data[0];
      const ninnaBeskrivelse = ninnaData['ninna-beskrivelse'];

      const ninnaContainer = document.createElement('div');
      ninnaContainer.classList.add('ninna-container');

      const ninnaItem = document.createElement('div');
      ninnaItem.classList.add('ninna-item');

      const ninnaInfo = document.createElement('ul');

      const ninnaInfoList = document.createElement('ul');
      ninnaInfoList.textContent = ninnaBeskrivelse;

      ninnaInfo.appendChild(ninnaInfoList);
      ninnaItem.appendChild(ninnaInfo);
      ninnaContainer.appendChild(ninnaItem);
      outputElem.appendChild(ninnaContainer);
    })
    .catch(error => console.error('Error:', error));
});