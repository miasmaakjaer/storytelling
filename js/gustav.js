
'use strict';

const btnElemGustav = document.getElementById('btn-g');
const outputElemGustav = document.querySelector('.outputGustav');

btnElemGustav.addEventListener('click', () => {
  const url = '../json/gustav.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const gustavData = data[0];
      const gustavBeskrivelse = gustavData['gustav-beskrivelse'];

      const gustavContainer = document.createElement('div');
      gustavContainer.classList.add('.gustav-container');

      const gustavItem = document.createElement('div');
      gustavItem.classList.add('gustav-item');

      const gustavInfo = document.createElement('ul');

      const gustavInfoList = document.createElement('ul');
      gustavInfoList.textContent = gustavBeskrivelse;

      gustavInfo.appendChild(gustavInfoList);
      gustavItem.appendChild(gustavInfo);
      gustavContainer.appendChild(gustavItem);
      outputElemGustav.appendChild(gustavContainer);

      // Disable the button after the first click
      btnElemGustav.disabled = true;
    })
    .catch(error => console.error('Error:', error));
});