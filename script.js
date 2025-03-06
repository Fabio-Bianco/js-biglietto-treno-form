// Recupera gli elementi di input dell'utente per i chilometri, l'età e il pulsante di invio.

const kmTaskElement = document.getElementById("task-km");
const ageTaskElement = document.getElementById("task-age");
const sendTaskElement = document.getElementById("send-task");
const resetTaskElement = document.getElementById("reset-task");
const resultElement = document.getElementById("result");

const ticketSection = document.getElementById("ticket-section");
const passengerNameElement = document.getElementById("passenger-name");
const carriageNumberElement = document.getElementById("carriage-number");
const cpCodeElement = document.getElementById("cp-code");
const ticketPriceElement = document.getElementById("ticket-price");

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

sendTaskElement.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
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
  if (
    isNaN(quantityMiles) ||
    isNaN(quantityAge) ||
    quantityMiles <= 0 ||
    quantityMiles > 10000 ||
    quantityAge <= 0 ||
    quantityAge > 120
  ) {
    console.log("I dati inseriti non sono validi.");
    document.getElementById("result").innerHTML =
      "<p class='text-danger'>I dati inseriti non sono validi.</p>";
    return;
  }

  // Costo della tariffa base;
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

  // Calcola l'importo dello sconto in base alla percentuale di sconto applicata
  let discountAmount = (costForTicket * discountPercentage) / 100;
  console.log("Importo dello sconto:", discountAmount);

  // Sottrae l'importo dello sconto dal costo totale del biglietto
  costForTicket -= discountAmount;
  console.log("Costo finale dopo sconto:", costForTicket);

  // Arrotonda il prezzo finale a due decimali
  costForTicket = costForTicket.toFixed(2);
  console.log("Prezzo finale formattato:", costForTicket);

  // Mostro il risultato sulla pagina
  resultElement.innerHTML = `Il prezzo del biglietto è: €${costForTicket}`; // Mostra il prezzo
  resultElement.classList.remove("text-danger"); // Rimuove la classe di errore (rosso)
  resultElement.classList.add("text-success"); // Aggiunge la classe di successo (verde)
  resultElement.style.display = "block"; // Rendi visibile la sezione

  passengerNameElement.textContent = "Jon Snow"; // Puoi prendere il valore da un input se necessario
  carriageNumberElement.textContent = Math.floor(Math.random() * 10) + 1; // Numero casuale per la carrozza
  cpCodeElement.textContent = Math.floor(Math.random() * 99999) + 10000; // Codice casuale
  ticketPriceElement.textContent = `€${costForTicket}`;
});

// Aggiunge l'event listener per nascondere il risultato
resetTaskElement.addEventListener("click", function () {
  resultElement.innerHTML = ""; // Cancella il contenuto del risultato
  resultElement.classList.remove("text-success", "text-danger"); // Rimuove eventuali classi di colore
  resultElement.style.display = "none"; // Nasconde la sezione del biglietto
  ticketSection.style.display = "none"; // Nasconde anche la sezione del biglietto
});
