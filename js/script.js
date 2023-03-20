// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// I numeri nella lista delle bombe non possono essere duplicati.
// [23, 65, 1, 4,78,15,....];

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// Dichiaro il numero di quadrati
const numberOfSquares = 100;

// Genera griglia al click
const button = document.getElementById("play");
button.addEventListener("click",
    function() {
        // Per ogni numero generato genero la casella della griglia corrispondente
        const grid = document.querySelector(".grid");
        for (let i = 0; i < numberOfSquares; i++) {
            const currentNumber = [i + 1];
            const gridItem = generateGridItem(currentNumber);
            gridItem.addEventListener("click", handleItemClick)
            grid.append(gridItem);
        }
    }
);

// FUNCTIONS
// Genera "grid-item"
function generateGridItem(text) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerHTML = `<span>${text}</span>`;
    return gridItem;
}

// Gestisco il click degli Item
function handleItemClick() {
    this.classList.add("skyblue")
}

// Genera un numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}