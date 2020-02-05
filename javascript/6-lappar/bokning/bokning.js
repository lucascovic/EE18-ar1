/* Start */
/* Element vi använder */
const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="tillägg"]');
const elementKampanjKod = document.querySelector('#kampanjkod');
const elementKnapp = document.querySelector('button');
const elementP = document.querySelector('p');

/* Läsa av bokningen */
elementKnapp.addEventListener("click", räknaUt);




/* Räkna ut kostnaden */
function räknaUt() {
    var kostnad = 0, rumspris = 0;

    /* Läsa av bokning */
    var antalNätter = elementAntalNätter.value;
    
    /* Läs av bokningen */
    /* Vilken typ av rum har valts */
    if (elementRum[0].checked == true) {
        rumspris = 500;
    }
    if (elementRum[1].checked == true) {
        rumspris = 900;
    }
    if (elementRum[2].checked ==     true) {
        rumspris = 1100;
    }
    /* Hur många nätter har valts */
    var antalNätter = elementAntalNätter.value;
    kostnad = rumspris * antalNätter;
    

    /* Vilka tillägg har valts */
    if (elementTillägg[0].checked == true) {
        kostnad = kostnad + 50
    }
    if (elementTillägg[1].checked == true) {
        kostnad = kostnad + 200
    }
    if (elementTillägg[2].checked == true) {
        kostnad = kostnad + 100
    }
    if (elementTillägg[3].checked == true) {
        kostnad = kostnad + 50
    }
    console.log(kostnad);
    

/* Har vi en kampanjkod */
    var kampanjKod = elementKampanjKod.value;
    if (kampanjkod == "sportlov20") {
        kostnad = kostnad * 0.8;
    }
    if (kampanjkod == "sommarlov2020") {
        kostnad = kostnad * 0.01;
    }
    if (kampanjkod == "nti") {
        kostnad = kostnad * 1;
    }
    /* Visa kostnad */
    elementP.textContent = "Dina val ger en kostnad på " +  kostnad + "$"
}

