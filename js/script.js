// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


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