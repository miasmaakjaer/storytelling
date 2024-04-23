# storytelling

## Generel HTML 
Vores løsning er en tablet der skal stå fysisk inde på Steno museet, derfor har vi valgt at man ikke skal kunne for mange forskellige ting, når det er en udstilling. Vores løsning er derfor en lang side, hvor man scroller ned eller op for at komme videre. Vi har lavet en sektion for hver "side" der skal komme til syne på tabletten. Alle vores sektioner er lavet inde i en "main-tag". Derefter har vi delt alt op i sektioner, med en class og en id attribut. og inde i de sektioner, har vi brugt div-attributter til at opdele sektionerne. Vi har brugt den semantiske regel med at der kun må være en h1 på en side og resten af vores overskrifter er enden h2, h3 eller h4. 

Vi har haft problemer med vores "scroll ned"- div i nogle af sektionerne. Vi vil gerne have haft på de sektioner hvor vi har vores personaer, at "scroll ned" var nederst på siden, men uanset hvad vi har gjort  har vi ikke kunne få det til at virke. Så der hvor den er placeret nu i de sektioner, er det bedste vi har kunne få det til at gøre 

**Validering**
Vi har valideret både vores css kode og vores html kode. I css er der ingen fejl at finde. Der er dog fejl i vores html kode. Fejlen er at vi ikke må have flere class-attributter til samme sektion, problemet med dette er dog.....

**Media Query**

Vi har valgt at lave hjemmesiden til 2 enheder. Enhederne er en Ipad pro som er liggende, med størrelserne 1366px x 1024px. Vores anden enhed er skærme der er større end en ipad pro, derfor har vi en media query på en min-width på 1367px. Vi har ikke valgt at lave et media query til telefonen, da dette ikke havde relevans for vores projekt med Storytelling, da det er en udstilling der skal være synlig på Steno Museet. 


## Javascript

**Uddybelse af ''typewriter'' effekten ved vores fakta-sider:**


Til en start havde vi implementeret en effekt, der simulerer skrivning af tekst på en skærm som en slags skrivemaskine.

Først definerer vi variablen  ''i'' til at spore, hvilket tegn der skal tilføjes næste gang. 

Vores ''text'' indeholder den tekst, der skal skrives,hvilket er derfor vi har lavet 3 forskellige js-filer til denne effekt, da vi har tre forskellige teskter der sættes ind i vores ''text''.

I vores ''speed'' angiver vi hastigheden, hvormed tegnene skal tilføjes. 

Derefter har vi defineret en funktion kaldet ''typeWriter()'', der  tilføjer hvert tegn fra vores ''text'' til vores HTML-element med klassenavnet ''.overlay-text''. Det gør så brug af et loop til at checke, om der er flere tegn tilbage i vores tekst, som skal tilføjes.

Herefter tilføjer den så én karakter ad gangen til vores element ved at opdatere vores ''innerHTML''. Det der giver effekten er brug af ''setTimeout(), som gør at funktion kalder sig selv med en lille forsinkelse, så det ligner at teksten bliver skrevet i sekundet man ser det. 

Eftersom vi ikke kunne få de 3 forskellige til at køre for ny hver gang man scrollede ned på deres sider, så endte vi med at lave det som en video i After Effects, da vi gerne ville have at når man ko ned på siden, så så man teksten blive skrevet.


**Forklaring af koden i antalclick.js siden**

Koden definere to variabler “clickCount og “newImages”. “ClikCount er et array med 3 elementer som skal vise klikantal for hvert billede. 
“newImages” er ligeledes også et array med 3 stier til nye billeder der skal erstatte de “originale” 3 billeder, når der sker et click på et af billederne. 

Funktionen “handleClick” håndterer klik på et billede, dvs. at når der klikkes på et billede, øges klikantallet for den valgte billede, og teksten opdateres efter det nye klikantal. Denne nye klikantal gemmes i den lokale lagring og billederne bliver erstattet med de nye billeder. Teksten med antal click/“stemmer” vises til sidst på hvert billede. 

Til sidst hentes klikantallet fra den lokale lagring og vises i teksten for hvert billede, således at når siden opdateres, bliver antal click gemt og vises for hvert billede. 



**Forklaring af hvordan vi har benyttet os af at "fetche" fra vores JSON filer (Med Kristina's case som eksempel)**

Under hver case af henholdsvis Kristina, Gustav og Nina, har vi valgt at opbevare indformationer vi skal “fetche” fra en JSON-fil. Dette har vi gjort i vores JAVASCRIPT filer, hvor vi tager en URL-sti fra javascript-filen ud og ind i vores JSON-mappe, og herefter ind i hver af vores JSON-fil alt efter hvilken data vi vil ind og hente(fetche). 
I vores JavaScript-kode har vi en knap med id'et "btn". Når denne knap bliver trykket, skal vi hente dataene fra eks. Vores kristina.json fil og vise dem på vores hjemmeside. Vi gør det ved at tilføje en click-eventlistener til vores knap. Når knappen bliver trykket, kalder vi fetch() metoden med URL'en til vores kristina.json fil som argument. 
Når “fetch” metoden kører, returnere den en promise, som er en javascript mekanisme, der gør det muligt at udfører asynkrone operationer. Når den promise er fuldført, får vi et respons-objekt som er vores indhold/data fra vores json-fil.

Når fetch() metoden er fuldført og vi har vores JavaScript-objekt, finder vi først den beskrivelse af Kristina i objektet. Vi gør det ved at bruge array-metoden find() for at finde det element i arrayen, hvor egenskaben name er lig med "kristina-beskrivelse". Når vi har fundet denne beskrivelse, opretter vi et nyt HTML-element med klassen "kristina-beskrivelse". Vi sætter derefter teksten i det nye element til at være den beskrivelse, vi har fundet i vores JavaScript-objekt.
Sidst tilføjer vi det nye HTML-element til min side ved at bruge appendChild() metoden på det element, hvor vi vil have beskrivelsen vist. På denne måde kan vi vise beskrivelsen af Kristina på vores hjemmeside, når brugeren trykker på vores knap.


**Forklaring på "wheel-event" der sker ved scrolling**
Vi har laven en event der gør at når man scroller op eller ned på en bestemt sektion, vil den næste sketion automatisk blive scrollet ind i synsfeltet. Dette har vi gjort ved at bruge "wheel-eventet", der udløses når brugeren scroller med musen. I dette forklaring har vi taget udgangpunkt i scroll ned, som eksempel. 

Vi har først tilføjet en event-listener til dokumentet der udløses når indholdet i dokumentet er indlæst. koden indenfor denne funktion vil kun køre når alt indholdet er klar. Inde i denne event-listener har vi kaldt på alle sektionerne. 

Vi tilføjer en event-listener og wheel-event til "forsideSection"-elementet, som skal blive udløst når brugeren scroller med musen. "if (event.DeltaY > 0)" tjekker om brugeren scroller nedad. "deltaY" er en egenskab af event-objektet, der angiver antalet af pixels, der er blevet scrollet i y-retningen. Inde i vores if-statement har vi sagt at hvis deltaY er større end 0 skal den scrolle ned til sektionen "kristinaStatistikSection" med en "smooth" scroll-effekt. Dette bliver gentaget for hver sektion på siden.

Det samme har vi gjort med scroll op funktionen, bare i omvendt rækkefølge. 

**sidebar active icons**
udover scrolle funktionen, har vi også lavet en sidebar funktion, for at vise hvor du er henne på siden. Dette har vi gjort ved at lave en funktion "updateActiveSidebarIcon" og har en "target-element" som parametre. Denne funktion fjerner "active"-klassen fra sidebar-ikonerne og tilføjer den til det ikon der er true til target-elementet. Denne funktion kalder vi på i hvert sektion, sådan at det virker hele vejen igennem siden. 
