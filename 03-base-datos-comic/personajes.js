// "configuración ESModules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))

// Comparar id de URL con id de la base de datos
const miPersonaje = comic.personajes.find (char => char.id === id);

console.log ("el id del personaje es" + id);

const general = document.querySelector(".general")

console.log(".general")

// hacer el general inner .html                         


general.innerHTML = `
<section class="personaje-detalle">

    <h1 class="titulo-personaje">${miPersonaje.nombre}</h1>

    <div class="img-personaje">
        <img src="${miPersonaje.img}" alt="${miPersonaje.nombre}">
    </div>

    <p class="descripcion-personaje">
        ${miPersonaje.descripcion}
    </p>

    <div class="video-container">
        <video src="${miPersonaje.video}" autoplay muted playsinline controls></video>
    </div>

</section>
`;