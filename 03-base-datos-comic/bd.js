export let comic = {
  nombreComic: "Cuerdas del Destino",
  NumeroCapitulos: 3,
  genero: "Drama",
  sinopsis:
    "La historia de Juanes, un joven que descubre una guitarra maldita que transforma su vida en un viaje entre la música, la tragedia y un destino que deberá enfrentar.",
  autores: ["Juan Camilo Betancourt", "Brayhan Castillo", "Gabriel Torres"],
  portadaComic: "./img/portada.jpg",
  year: "2025",

  personajes: [
    {
      "id" : 1,
      "nombre": "Juanes",
      "descripcion" :
        "Niño talentoso y sensible que descubre su pasión por la música. Su vida se ve marcada por una maldición ligada a la guitarra que encuentra.",
      "imagen" : "./img/personajes/juanes.png",
    },
    { 
      "id" : 2,
      "nombre": "Papá",
      "descripcion":
        "Músico tradicional y guía emocional de Juanes. Le enseña que la música nace del corazón.",
      "imagen": "./img/personajes/silueta.png",
    },
    {
      "id" : 3,
      "nombre": "Mamá",
      "descripcion":
        "Figura protectora y afectuosa. Representa la estabilidad del hogar y el vínculo familiar.",
      "imagen": "./img/personajes/silueta.png",
    },
    {
      "id" : 4,
      "nombre": "Abuelo",
      "descripcion":
        "Sabio y cercano a Juanes. Su presencia influye profundamente en la vida espiritual y emocional del protagonista.",
      "imagen": "./img/personajes/silueta.png",
    },
    {
      "id" : 5,
      "nombre": "Mensajero",
      "descripcion":
        "Ser misterioso que revela la existencia de la maldición. Actúa como un guía sobrenatural.",
      "imagen": "./img/personajes/silueta.png",
    },
  ],

  capitulos: [
    {
      id: 1,
      nombre: "El Descubrimiento",
      Personajes: [
        "Juanes",
        "Abuelo",
        "Padre",
        "Mamá",
        "HermanoUno",
        "HermanoDos",
        "HermanoTres",
        "HermanoCuatro",
        "HermanoCinco",
      ],
      portada: "./img/capitulos/cap1.png",
      descripcion:
        "Juanes descubre una misteriosa guitarra que despierta su pasión por la música y un destino que no imagina.",
    },

    {
      id: 2,
      nombre: "Las Líricas",
      Personajes: [
        "Juanes",
        "Abuelo",
        "Padre",
        "Mamá",
        "HermanoUno",
        "HermanoDos",
        "HermanoTres",
        "HermanoCuatro",
        "HermanoCinco",
      ],
      portada: "./img/capitulos/cap2.png",
      descripcion:
        "Tras huir de la violencia, Juanes sigue cantando en la ciudad, pero cada nueva canción atrae tragedias hasta descubrir una maldición.",
    },

    {
      id: 3,
      nombre: "De Solución",
      Personajes: [
        "Juanes",
        "Abuelo",
        "Padre",
        "Mamá",
        "HermanoUno",
        "HermanoDos",
        "HermanoTres",
        "HermanoCuatro",
        "HermanoCinco",
      ],
      portada: "./img/capitulos/cap3.png",
      descripcion:
        "Un sueño con su abuelo revela el origen de la maldición. Juanes decide enfrentarla para encontrar la libertad.",
    },
  ],
};