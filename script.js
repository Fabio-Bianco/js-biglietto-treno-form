

 // Recupera gli elementi di input dell'utente per i chilometri, l'età e il pulsante di invio.

const kmTaskElement = document.getElementById('task-km');
const ageTaskElement = document.getElementById('task-age');
const sendTaskElement = document.getElementById('send-task');

console.log(kmTaskElement);
console.log(ageTaskElement);
console.log(sendTaskElement);


/**
 * Aggiunge un event listener al pulsante di invio per gestire l'evento di click;
 * Previene il comportamento predefinito di invio del form;
 * Registra l'evento di click e i valori dei campi di input per i chilometri e l'età
 * Recupera e registra i valori dei campi di input per i chilometri e l'età.
 * stampa i valori recuperati in console.
 */

sendTaskElement.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click');
    console.log(kmTaskElement.value);
    console.log(ageTaskElement.value);

    // Recupero i valori inseriti e li salvo in variabili;
    const kmValue = kmTaskElement.value;
    const ageValue = ageTaskElement.value;

    console.log("Valore chilometri:", kmValue);
    console.log("Valore età:", ageValue);
    
    // Converto i valori persi dall'utente in numeri
    let quantityMiles = parseFloat(kmValue);
    let quantityAge = parseInt(ageValue);

    console.log("Chilometri (convertiti):", quantityMiles);
    console.log("Età (convertita):", quantityAge);

   /** Controllo validità dei dati;
    *  isNaN verifica se il valore inserito non è un numero o è minore o uguale a 0;
    * document.getElementById("result").innerHTML modifica il contenuto della pagina HTML (l'elemento con id result) per mostrare un messaggio di errore visibile all'utente, informandolo che i dati non sono validi.
    * */
    if (isNaN(quantityMiles) || isNaN(quantityAge) || quantityMiles <= 0 || quantityAge <= 0 || quantityAge > 120) {
        console.log("I dati inseriti non sono validi.");
        document.getElementById("result").innerHTML = "<p class='text-danger'>I dati inseriti non sono validi.</p>";
        return;
    }


    // Tariffa per KM
    const costForMiles = 0.21;
    let costForTicket = costForMiles * quantityMiles;

    console.log("Costo senza sconto:", costForTicket);

    // Sconto in base all'età
    let discountPercentage = 0;

    if (quantityAge < 18) {
        discountPercentage = 20;
        console.log("Sconto per minorenni: 20%");
    } else if (quantityAge >= 65) {
        discountPercentage = 40;
        console.log("Sconto per over 65: 40%");
    } else {
        console.log("Nessuno sconto applicato.");
    }
});



//     let discountAmount = (costForTicket * discountPercentage) / 100;
//     costForTicket -= discountAmount;

//     // Formattazione del prezzo
//     costForTicket = Number(costForTicket.toFixed(2));

//     // Risultato
//     alert(`Il prezzo totale del biglietto è: €${costForTicket}`);
// }















