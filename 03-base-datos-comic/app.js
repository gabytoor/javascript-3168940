import { comic } from "./bd.js";

const infoComic = document.querySelector(".contenido");
const menuContainer = document.querySelector(".menuContainer");
const cardPersonajes = document.querySelector(".personajes");


infoComic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>Género: ${comic.genero}</p>
    <p>Cantidad de capítulos: ${comic.NumeroCapitulos}</p>
`;


const galeria = document.createElement("div");
galeria.classList.add("galeria");
cardPersonajes.appendChild(galeria);

comic.personajes.forEach(personaje => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <a href="./indext.html?id=${personaje.id}">
        <img src="${personaje.imagen}" alt="${personaje.nombre}">
        <h3>${personaje.nombre}</h3>
        <p>${personaje.descripcion}</p>
      </a>
    `;

    galeria.appendChild(card);
});