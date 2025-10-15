// Capturar variables
const blancoYnegro = document.getElementById ("blancoYnegro")
const desenfocar = document.getElementById ("desenfocar")
const zoomYrotar = document.getElementById ("zoomYrotar")
const img1 = document.getElementById ("img1")


blancoYnegro.addEventListener('click', () => {
  if (img1.style.filter === "grayscale(100%)"){
    img1.style.filter = "none";
  }
    else {
      img1.style.filter = "grayscale(100%)";
    }
})

desenfocar.addEventListener ("click", () =>{
  if (img1.style.filter === "blur(4px)"){
    img1.style.filter = "none"
  }
  else (img1.style.filter = "blur(4px)")
}
)

zoomYrotar.addEventListener("click", () => {
  if (img1.style.transform === "scale(1.2) rotate(15deg)") {
    img1.style.transform = "none";
  } else {
    img1.style.transform = "scale(1.2) rotate(15deg)";
  }
});

