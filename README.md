# storytelling


**Uddybelse af ''typewriter'' effekten ved vores fakta-sider:**


Vi har implementeret en effekt, der simulerer skrivning af tekst på en skærm som en slags skrivemaskine.

Først definerer vi variablen  ''i'' til at spore, hvilket tegn der skal tilføjes næste gang. 

Vores ''text'' indeholder den tekst, der skal skrives,hvilket er derfor vi har lavet 3 forskellige js-filer til denne effekt, da vi har tre forskellige teskter der sættes ind i vores ''text''.

I vores ''speed'' angiver vi hastigheden, hvormed tegnene skal tilføjes. 

Derefter har vi defineret en funktion kaldet ''typeWriter()'', der  tilføjer hvert tegn fra vores ''text'' til vores HTML-element med klassenavnet ''.overlay-text''. Det gør så brug af et loop til at checke, om der er flere tegn tilbage i vores tekst, som skal tilføjes.

Herefter tilføjer den så én karakter ad gangen til vores element ved at opdatere vores ''innerHTML''. Det der giver effekten er brug af ''setTimeout(), som gør at funktion kalder sig selv med en lille forsinkelse, så det ligner at teksten bliver skrevet i sekundet man ser det.


<!-- forklaring af javascript kode til stemmesiden -->
**Forklaring af koden i antalclick.js siden**

Koden definere to variabler “clickCount og “newImages”. “ClikCount er et array med 3 elementer som skal vise klikantal for hvert billede. 
“newImages” er ligeledes også et array med 3 stier til nye billeder der skal erstatte de “originale” 3 billeder, når der sker et click på et af billederne. 

Funktionen “handleClick” håndterer klik på et billede, dvs. at når der klikkes på et billede, øges klikantallet for den valgte billede, og teksten opdateres efter det nye klikantal. Denne nye klikantal gemmes i den lokale lagring og billederne bliver erstattet med de nye billeder. Teksten med antal click/“stemmer” vises til sidst på hvert billede. 

Til sidst hentes klikantallet fra den lokale lagring og vises i teksten for hvert billede, således at når siden opdateres, bliver antal click gemt og vises for hvert billede. 
