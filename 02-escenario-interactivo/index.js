// ESCENARIO 1 =========================================================================================================0

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



// ESCENARIO 2 ======================================================================================================================

const personajes = document.querySelectorAll(".personajes") //clases
const contadorPersonajes = document.querySelector("#contador-personajes") //id
let counterDos = 0

personajes.forEach(item => {

    item.addEventListener("click", () => {
        if (item.classList.contains("cambioColor")) return;
        item.classList.add("cambioColor");
        setTimeout(() => {
        item.classList.add("saltar");

            
            setTimeout(() => {
                item.style.display = "none";
            }, 600);

        }, 600); 

        counterDos++;
        contadorPersonajes.textContent = counterDos;

        contadorPersonajes.classList.add("activo");
        setTimeout(() => contadorPersonajes.classList.remove("activo"), 300);
    });
});


// ESCENARIO 3 ======================================================================================================================

const caracol = document.getElementById("caracol");
const contador = document.getElementById("contador-movimientos"); 
let clics = 0; 

caracol.addEventListener("click", function() {
  clics = clics + 1;

  contador.textContent = clics;

  if (clics === 1) {
    caracol.style.transform = "translateX(160px)";
  }

  else if (clics === 2) {
    caracol.style.transform = "translateX(160px) translateY(-220px)";
  }

  else if (clics === 3) {
    caracol.style.transform = "translateX(350px) translateY(-220px)";
  }

  else if (clics === 4) {
    caracol.style.animation = "saltoCaracol 0.6s ease-in-out infinite";
    caracol.style.transform = "translateX(350px) translateY(-220px)";
  }
});



// Carrusel  =======================================================================================================================0

//  1.Variables
 const escenas = document.querySelectorAll(".escena")
 const anterior = document.querySelector(".anterior")
 const siguiente = document.querySelector(".siguiente")
 const miniatura = document.querySelectorAll(".miniatura")
 let indice = 0

console.log(escenas)
console.log(anterior)
console.log(siguiente)
console.log(miniatura)

// 2.Funciones
function mostrarEscena(i){


    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove("activa")
     }

    escenas[i].classList.add("activa")

    indice = i
 }


mostrarEscena(0)

anterior.addEventListener("click", function(){
    indice = indice - 1
    if(indice < 0){
        indice = escenas.length - 1 
    }
 mostrarEscena(indice)
})

siguiente.addEventListener("click", function(){
    indice = indice + 1
    if(indice >= escenas.length){
        indice = 0
    }
    mostrarEscena(indice)
})


miniatura.forEach(function(miniatura, i) {
  miniatura.addEventListener('click', function () {
    mostrarEscena(i);
  });
});