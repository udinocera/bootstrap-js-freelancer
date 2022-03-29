/*  - Se la commissioni riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
    - Se la commissioni riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
    - Se la commissioni riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
*/
const backEnd = 20.5;
const frontEnd = 15.3;
const projectAnalisys = 33.6;
/*
Se l'utente utilizza un codice promozionale tra i seguenti (YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24)
Fate in modo che l’utente abbia diritto ad uno sconti del 25% sul prezzo finale.
*/


let codiciscontiValidi = ["JANJC63", "YHDNU32", "PWKCN25", "SJDPO96", "POCIE24"]
const sconti = 0.75;   //  25%
let codicesconti;


function submitForm(event){
    event.preventDefault();
   //Collegamento con HTML
    let sceltaLavoro = document.getElementById("tipodilavoro").value;        //Collegamento con HTML
    
    let orario = (document.getElementById("oradainserire").value);
    
    codicesconti = document.getElementById("codicesconto").value;          //Collegamento con HTML
    
    let flagsconti = checksconti(codicesconti);
    
    let commissioni = calcolocommissioni(sceltaLavoro);
    
    let prezzofinale = calcoloPrezzo(orario, commissioni , flagsconti).toFixed(2);
    
    document.getElementById("prezzoFinale").innerHTML = "Il totale è " + prezzofinale;   //Collegamento con HTML
}

function calcolocommissioni(tipoDiLavoro){
    
    let commissioni = 20.5;      //  Se la commissioni riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
    
    switch(tipoDiLavoro){   
        case "frontend":
            commissioni = 15.3;  // Se la commissioni riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
            break;    
        
        case "projectAnalisys":
            commissioni = 33.6;  //  Se la commissioni riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
            break;
    }
    return(commissioni);
}

