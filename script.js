

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
});



//     let discountAmount = (costForTicket * discountPercentage) / 100;
//     costForTicket -= discountAmount;

//     // Formattazione del prezzo
//     costForTicket = Number(costForTicket.toFixed(2));

//     // Risultato
//     alert(`Il prezzo totale del biglietto è: €${costForTicket}`);
// }















