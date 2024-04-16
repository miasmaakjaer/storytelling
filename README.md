# storytelling


**Uddybelse af ''typewriter'' effekten ved vores fakta-sider:**


Vi har implementeret en effekt, der simulerer skrivning af tekst på en skærm som en slags skrivemaskine.

Først definerer vi variablen  ''i'' til at spore, hvilket tegn der skal tilføjes næste gang. 

Vores ''text'' indeholder den tekst, der skal skrives,hvilket er derfor vi har lavet 3 forskellige js-filer til denne effekt, da vi har tre forskellige teskter der sættes ind i vores ''text''.

I vores ''speed'' angiver vi hastigheden, hvormed tegnene skal tilføjes. 

Derefter har vi defineret en funktion kaldet ''typeWriter()'', der  tilføjer hvert tegn fra vores ''text'' til vores HTML-element med klassenavnet ''.overlay-text''. Det gør så brug af et loop til at checke, om der er flere tegn tilbage i vores tekst, som skal tilføjes.

Herefter tilføjer den så én karakter ad gangen til vores element ved at opdatere vores ''innerHTML''. Det der giver effekten er brug af ''setTimeout(), som gør at funktion kalder sig selv med en lille forsinkelse, så det ligner at teksten bliver skrevet i sekundet man ser det.


**Forklaring af koden i antalclick.js siden**

Koden definere to variabler “clickCount og “newImages”. “ClikCount er et array med 3 elementer som skal vise klikantal for hvert billede. 
“newImages” er ligeledes også et array med 3 stier til nye billeder der skal erstatte de “originale” 3 billeder, når der sker et click på et af billederne. 

Funktionen “handleClick” håndterer klik på et billede, dvs. at når der klikkes på et billede, øges klikantallet for den valgte billede, og teksten opdateres efter det nye klikantal. Denne nye klikantal gemmes i den lokale lagring og billederne bliver erstattet med de nye billeder. Teksten med antal click/“stemmer” vises til sidst på hvert billede. 

Til sidst hentes klikantallet fra den lokale lagring og vises i teksten for hvert billede, således at når siden opdateres, bliver antal click gemt og vises for hvert billede. 



**Forklaring af hvordan vi har benyttet os af at "fetche" fra vores JSON filer (Med Kristina's case som eksempel)**

Under hver case af henholdsvis Kristina, Gustav og Ninna, har vi valgt at opbevare indformationer vi skal “fetche” fra en JSON-fil. Dette har vi gjort i vores JAVASCRIPT filer, hvor vi tager en URL-sti fra javascript-filen ud og ind i vores JSON-mappe, og herefter ind i hver af vores JSON-fil alt efter hvilken data vi vil ind og hente(fetche). 
I vores JavaScript-kode har vi en knap med id'et "btn". Når denne knap bliver trykket, skal vi hente dataene fra eks. Vores kristina.json fil og vise dem på vores hjemmeside. Vi gør det ved at tilføje en click-eventlistener til vores knap. Når knappen bliver trykket, kalder vi fetch() metoden med URL'en til vores kristina.json fil som argument. 
Når “fetch” metoden kører, returnere den en promise, som er en javascript mekanisme, der gør det muligt at udfører asynkrone operationer. Når den promise er fuldført, får vi et respons-objekt som er vores indhold/data fra vores json-fil.

Når fetch() metoden er fuldført og vi har vores JavaScript-objekt, finder vi først den beskrivelse af Kristina i objektet. Vi gør det ved at bruge array-metoden find() for at finde det element i arrayen, hvor egenskaben name er lig med "kristina-beskrivelse". Når vi har fundet denne beskrivelse, opretter vi et nyt HTML-element med klassen "kristina-beskrivelse". Vi sætter derefter teksten i det nye element til at være den beskrivelse, vi har fundet i vores JavaScript-objekt.
Sidst tilføjer vi det nye HTML-element til min side ved at bruge appendChild() metoden på det element, hvor vi vil have beskrivelsen vist. På denne måde kan vi vise beskrivelsen af Kristina på vores hjemmeside, når brugeren trykker på vores knap.
