
	"use strict";

	let clickCount = [0, 0, 0];
	let newImages = ["img/kristina-hjerte.webp", "img/gustav-hjerte.webp", "img/nina-hjerte.webp"];

	function handleClick(imageNumber) {
		clickCount[imageNumber - 1]++;
		document.getElementById(`text${imageNumber}`).textContent = `${clickCount[imageNumber - 1]} stemmer`;
		document.getElementById(`text${imageNumber}`).style.visibility = 'visible';

		// Store click count in local storage
		localStorage.setItem(`clickCount${imageNumber}`, clickCount[imageNumber - 1]);

		document.getElementById("kristina-hjerte-outline").src = newImages[0];
		document.getElementById("gustav-hjerte-outline").src = newImages[1];
		document.getElementById("ninna-hjerte-outline").src = newImages[2];
	}

	// Retrieve click count from local storage
	for (let i = 0; i < clickCount.length; i++) {
		clickCount[i] = localStorage.getItem(`clickCount${i + 1}`) || 0;
		document.getElementById(`text${i + 1}`).textContent = `${clickCount[i]} stemmer`;
	}
