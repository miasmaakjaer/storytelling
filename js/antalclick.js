
	"use strict";

	let clickCount = [0, 0, 0];
	let newImages = ["img/kristina-hjerte.webp", "img/gustav-hjerte.webp", "img/nina-hjerte.webp"];

    // funktion til at håndtere klik på et billede
	function handleClick(imageNumber) {

        // øg klikantallet for det valgte billede
		clickCount[imageNumber - 1]++;

        // opdater teksten med det nye klikantal
		document.getElementById(`text${imageNumber}`).textContent = `${clickCount[imageNumber - 1]} stemmer`;
		document.getElementById(`text${imageNumber}`).style.visibility = 'visible';

		// Lagre klikantal i lokal lagring
		localStorage.setItem(`clickCount${imageNumber}`, clickCount[imageNumber - 1]);

        // opdater billederne med de nye billeder
		document.getElementById("kristina-hjerte-outline").src = newImages[0];
		document.getElementById("gustav-hjerte-outline").src = newImages[1];
		document.getElementById("ninna-hjerte-outline").src = newImages[2];

         // hvis tekst med antal stemmer for hvert billede
         for (let i = 0; i < clickCount.length; i++) {
        document.getElementById(`text${i + 1}`).textContent = `${clickCount[i]} stemmer`;
        document.getElementById(`text${i + 1}`).style.visibility = "visible";
    }
	}

	// Hent klikantal fra lokal lagring
	for (let i = 0; i < clickCount.length; i++) {
		clickCount[i] = localStorage.getItem(`clickCount${i + 1}`) || 0;
		document.getElementById(`text${i + 1}`).textContent = `${clickCount[i]} stemmer`;
	}


