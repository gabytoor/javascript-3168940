// Capturar variables

const jell = document.querySelectorAll(".jellyfish") //clases
const tablero = document.querySelector("#contador-numero") //id
let counter = 0

console.log(jell, tablero)

// 2. Funciones

jell.forEach( item => {
    
    item.addEventListener ("click", () => {
        item.style.filter = "grayscale(1)"
        item.classList.add("saltar")
        counter++
        tablero.textContent = counter
    
    
    })








})






// 3. Eventos