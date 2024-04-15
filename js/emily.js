"use strict";
// Wait for the JSON data to be loaded
window.addEventListener('load', () => {
  // Get the JSON data from the script tag
  const jsonData = document.getElementById('json-data').textContent;
  // Parse the JSON data
  const data = JSON.parse(jsonData);
  
  // Get the kristina-citat and kristina-beskrivelse from the data
  const kristinaCitat = data[0].kristina-citat;
  const kristinaBeskrivelse = data[0].kristina-beskrivelse;

  // Set the text content of the kristina-citat and kristina-beskrivelse elements
  document.querySelector('.kristina-citat').textContent = kristinaCitat;
  document.querySelector('.kristina-beskrivelse').textContent = kristinaBeskrivelse;
});