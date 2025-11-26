import {comic} from "./bd.js"

const infoComic = document.querySelector (".info-comic")
const menuContainer = document.querySelector (".menuContainer")
const cardPersonajes = document.querySelector(".card-personajes")

console.log ("info-comic")

infoComic.innerHTML =`
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>Genero:${comic.genero}</p>`

menuContainer.innerHTML = `
<div class="logo"> <img src="helikon.png" alt="logo"></div>
        <div class="menu">
            <ul>
                <li>Inicio</li>
                <li>Capítulos</li>
                <li>Personajes</li>
            </ul>
        </div>
        <div class="search">
            <p>🔎</p>
            <p>Ingreso</p>
        </div>
`

console.log(comic.personajes)

comic.personajes.forEach( char => {
// Crear elementos dinánicamente con Javasripct
const div = document.createElement("div")
div.classList.add("personaje")
div.innerHTML = `
<a href="./personajes.html?id=${char.id}">
<img src="${char.imagen}" alt="">
<p>${char.nombre}</p>
<p>${char.descripcion}</p>
</a>
`

cardPersonajes.appendChild(div)
});