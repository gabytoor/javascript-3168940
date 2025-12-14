import { comic } from "./bd.js";

const informacionPersonaje = document.querySelector(".informacionPersonaje");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");


if (!id) {
  window.location.href = "index.html";
}

const personaje = comic.personajes.find(p => p.id == id);

if (!personaje) {
  window.location.href = "index.html";
}


const ventana = document.createElement("div");
ventana.classList.add("ventana", "fade-in");

ventana.innerHTML = `
  <h3 class="nombre-personaje">${personaje.nombre}</h3>

  <img 
    class="imagen-personaje"
    src="${personaje.imagen}" 
    alt="${personaje.nombre}"
  >

  <p class="descripcion-personaje">
    ${personaje.descripcion_extensa}
  </p>
`;

informacionPersonaje.appendChild(ventana);
