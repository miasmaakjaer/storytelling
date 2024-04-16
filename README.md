# storytelling


Uddybelse af ''typewriter'' effekten ved vores fakta-sider:


Vi har implementeret en effekt, der simulerer skrivning af tekst på en skærm som en slags skrivemaskine.

Først definerer vi variablen  ''i'' til at spore, hvilket tegn der skal tilføjes næste gang. 

Vores ''text'' indeholder den tekst, der skal skrives,hvilket er derfor vi har lavet 3 forskellige js-filer til denne effekt, da vi har tre forskellige teskter der sættes ind i vores ''text''.

I vores ''speed'' angiver vi hastigheden, hvormed tegnene skal tilføjes. 

Derefter har vi defineret en funktion kaldet ''typeWriter()'', der  tilføjer hvert tegn fra vores ''text'' til vores HTML-element med klassenavnet ''.overlay-text''. Det går så brug af et loop til at checke, om der er flere tegn tilbage i vores tekst, som skal tilføjes.

Herefter tilføjer den  så én karakter ad gangen til vores element ved at opdatere vores ''innerHTML''. Det der giver effekten er brug af ''setTimeout(), som gør at funktion kalder sig selv med en lille forsinkelse, ås det ligner at teksten bliver skrevet i sekundet man ser det.

