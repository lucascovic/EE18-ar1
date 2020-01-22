/* Fransmamnnen Cugnot presenterar sin ång bil - 1770 */

/* Stridsvagnar tas i bruk - 1915 */

/* Diamantbollen delas för första gången ut till Sveriges bästa kvinnliga fotbollssspelare - 1990 */

/* Den första 500-kronors-sedeln ges ut, tonen är blå - 1985 */

/* Jacke Keneedy gifter sig med Aristoteles Onassis - 1968 */

/* Bok och bibloteksmässan hålls första gången i Göteborg - 1985 */

/* Försata rondellhunden dyker upp - 2006 */

/* Upptäckaren av DDT tilldelas nobelpris - 1948 */

/* Einstein publicerar allmänna relativitetsteorin - 1915 */

/* Även yrkeschaufförer måsta nu använda säkerhetsbälte - 1999 */

/* Globala variabler och konstanter */

var frågor = [
    "Fransmamnnen Cugnot presenterar sin ång bil",
    "Stridsvagnar tas i bruk",
    "Diamantbollen delas för första gången ut till Sveriges bästa kvinnliga fotbollssspelare",
    "Den första 500-kronors-sedeln ges ut, tonen är blå",
    "Jacke Keneedy gifter sig med Aristoteles Onassis",
    "Bok och bibloteksmässan hålls första gången i Göteborg",
    "Försata rondellhunden dyker upp",
    "Upptäckaren av DDT tilldelas nobelpris",
    "Einstein publicerar allmänna relativitetsteorin",
    "Även yrkeschaufförer måsta nu använda säkerhetsbälte"

];
var årtal = [
    1970, 1915, 1990, 1985, 1968, 1985, 2006, 1948, 1915, 1999
];
var slumptal, poäng = 0, varv = 10;

const elementKontainer = document.querySelector(".kontainer");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("#årtal")
const elementKnappSkicka = document.querySelector("#skicka")
const elementKnappNästa = document.querySelector("#nästa")
const elementPoängRuta = document.querySelector("#poäng")
const elementTummeUpp = document.querySelector("#upp")
const elementTummeNed = document.querySelector("#ned")


/* Skapa en funktion för att slumpa fram en fråga */
function nyFråga() {
    /* Slumptal 0-9 */
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);
    
    elementFrågaRuta.value = frågor[slumptal];
    /* Dölj tummarna */
elementTummeUpp.style.display = "none";
elementTummeNed.style.display = "none";
elementÅrtalRuta.value = "";
}
/* Körs i början */
/* Kör funktionen */
nyFråga();

/* Plocka fram en ny fråga när man klikcar på knappen nästa */
elementKnappNästa.addEventListener("click", nyFråga);

/* Kolla man svarat rätt årtal på frågan */
elementKnappSkicka.addEventListener("click", kollaSvaret);

/* Skapa en funktion för att kolla om svaret är rätt */
function kollaSvaret() {
    /* Läs av svaret */
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    /* Det är det rätta årtalet */
    var årtalet = årtal[slumptal]

    /* Kolla om svaret är rätt */
    if (svaret == årtalet) {
    console.log("Yippi! Du har rätt");
    elementTummeUpp.style.display = "block";
    elementTummeNed.style.display = "none";
    poäng = poäng + 1;
    } else {
        console.log("Lol, Försök igen!");
        elementTummeNed.style.display = "block";
        elementTummeUpp.style.display = "none";
    }
    /* Skriv ut poäng */
elementPoängRuta.value = poäng;
/* Antal varv */
varv--;
if (varv == 0)
if (poäng == 10) {
    elementKontainer.innerHTML = "Grattis du hade alla rätt"
} else {
    elementKontainer.innerHTML = "Sämst, gör om"
}

}

