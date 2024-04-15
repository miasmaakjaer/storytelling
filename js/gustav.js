"use strict";
'use strict';

const btnElem = document.getElementById('btn');
const outputElem = document.querySelector('.outputGustav');

btnElem.addEventListener('click', () => {
  const url = '../json/gustav.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const gustavData = data[0];
      const gustavBeskrivelse = gustavData['gustav-beskrivelse'];

      const gustavContainer = document.createElement('div');
      gustavContainer.classList.add('gustav-container');

      const gustavItem = document.createElement('div');
      gustavItem.classList.add('gustav-item');

      const gustavInfo = document.createElement('ul');

      const gustavInfoList = document.createElement('ul');
      gustavInfoList.textContent = gustavBeskrivelse;

      gustavInfo.appendChild(gustavInfoList);
      gustavItem.appendChild(gustavInfo);
      gustavContainer.appendChild(gustavItem);
      outputElem.appendChild(gustavContainer);
    })
    .catch(error => console.error('Error:', error));
});