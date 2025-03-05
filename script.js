// variabili user-input
const kmTaskElement =  document.getElementById ('task-km');
const ageTaskElement = document.getElementById ('task-age');
const sendTaskElement = document.getElementById ('send-task');

console.log( kmTaskElement);
console.log(ageTaskElement);
console.log(sendTaskElement);


sendTaskElement.addEventListener('click', function() {
   console.log('click');
   console.log(kmTaskElement.value);
   console.log(ageTaskElement.value);
});






























// // Chiedo all'utente i chilometri da percorrere
// const milesToGo = ('Inserisci i chilometri di distanza che ti separano dalla tua destinazione');
// const userAge = ('Inserisci la tua Età');

// // Converto i valori in numeri
// let quantityMiles = parseFloat(milesToGo);
// let quantityAge = parseInt(userAge);

// // Controllo validità dei dati
// if (isNaN(quantityMiles) || isNaN(quantityAge)) {
//     alert("I dati inseriti non sono validi");
// } else {
//     // Tariffa per KM
//     const costForMiles = 0.21;

//     // Calcolo il prezzo del biglietto
//     let costForTicket = costForMiles * quantityMiles;

//     // Sconto in base all'età
//     let discountPercentage = 0;

//     if (quantityAge < 18) {
//         discountPercentage = 20;
//     } else if (quantityAge >= 65) {
//         discountPercentage = 40;
//     }

//     // Calcolo dello sconto
//     let discountAmount = (costForTicket * discountPercentage) / 100;
//     costForTicket -= discountAmount;

//     // Formattazione del prezzo
//     costForTicket = Number(costForTicket.toFixed(2));

//     // Risultato
//     alert(`Il prezzo totale del biglietto è: €${costForTicket}`);
// }















