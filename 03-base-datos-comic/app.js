import { comic } from "./bd.js";

const infoComic = document.querySelector(".contenido");
const cardPersonajes = document.querySelector(".personajes");


infoComic.innerHTML = `
    <small>${comic.year}</small>
    <br>
    <h1>${comic.nombreComic}</h1>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>${comic.sinopsis}</p>
    <br>
    <p>${comic.Autores}
    <br>
    <br>
    <p>Género: ${comic.genero}</p>
    <br>
    <p>Cantidad de capítulos: ${comic.NumeroCapitulos}</p>
`;


// Personajes
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

// Capitulos
const cardCapitulos = document.getElementById("cardCapitulos");
const galeriaCapitulos = document.createElement("div");
galeriaCapitulos.classList.add("galeriaCapitulos");
cardCapitulos.appendChild(galeriaCapitulos);

comic.capitulos.forEach(capitulo => {

    const card = document.createElement("div");
    card.classList.add("cardCapitulos");

    card.innerHTML = `
      <a href="./indexcap.html?id=${capitulo.id}">
        <img src="${capitulo.portada}" alt="${capitulo.nombre}">
        <h3>${capitulo.nombre}</h3>
        <p>${capitulo.descripcion}</p>
        <p>${capitulo.Personajes.join(", ")}</p>
      </a>
    `;

    galeriaCapitulos.appendChild(card);
});


