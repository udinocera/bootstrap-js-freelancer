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


let codiciAccettati = ["JANJC63", "YHDNU32", "PWKCN25", "SJDPO96", "POCIE24"]
const sconti = 0.75;   //  25%
let codicesconti;


function submitForm(event){
    event.preventDefault();
  
    let sceltaLavoro = document.getElementById("tipodilavoro").value;        //Collegamento con HTML
    
    let orario = (document.getElementById("oradainserire").value);          //Collegamento con HTML
    
    codicesconti = document.getElementById("codicesconto").value;          //Collegamento con HTML
    
   
    let commissioni = calcolocommissioni(sceltaLavoro);

    let flagsconti = checksconti(codicesconti);
    
    let prezzofinale = calcoloPrezzo(orario, commissioni , flagsconti).toFixed(2);
    
    document.getElementById("prezzoFinale").innerHTML = "Il totale è " + prezzofinale;   //Collegamento con HTML
}
// LE TRE COMMISSIONI
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
// CONTROLLARE CODICE ACCETTATI
function checksconti(codice){
    
    let flagsconti = false
    
    for(i=0; i < codiciAccettati.length; i++){
        if(codice == codiciAccettati[i]){
            flagsconti = true;
            codiciAccettati.splice(i,1);
            break
        }
    }
    return(flagsconti);
}
    //Parte Finale per calcolare il prezzo

function calcoloPrezzo(ore, commissioni, dirittosconti){
    let prezzofinale = ore*commissioni;
    if(dirittosconti){
        prezzofinale = prezzofinale*sconti;
        document.getElementById("codicesconto");     //Collegamento con HTML
    } else {
        document.getElementById("codicesconto");      //Collegamento con HTML
    }
    return(prezzofinale)
}
