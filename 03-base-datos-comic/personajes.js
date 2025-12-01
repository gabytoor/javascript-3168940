// "configuración ESModules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))

// Comparar id de URL con id de la base de datos
const miPersonaje = comic.personajes.find (p => p.id === id)

const general = document.querySelector(".general")

console.log(".general")

// hacer el general inner .html

