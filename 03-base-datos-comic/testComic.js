const infoComic = document.querySelector (".info-comic")
const menuContainer = document.querySelector (".menuContainer")

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