import { comic } from "./bd.js";


const infoCapitulo = document.querySelector(".informacionCapitulo");


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  window.location.href = "index.html";
}

const capitulo = comic.capitulos.find(p => p.id == id);

if (!capitulo) {
  window.location.href = "index.html";
}


const ventana = document.createElement("div");
ventana.classList.add("ventana", "fade-in");

ventana.innerHTML = 
`
    <h3 class="nombre-capitulo">${capitulo.nombre}</h3>

    <img class="imagen-capitulo"src="${capitulo.portada}"alt="${capitulo.nombre}">

    <p class="descripcion-capitulo">${capitulo.descripcion_extensa}</p>

    <p class="personajes-capitulo"> ${capitulo.Personajes.join(", ")}</p>

    <video class="video-capitulo" src="${capitulo.video}" controls></video>`;
    
infoCapitulo.appendChild(ventana);