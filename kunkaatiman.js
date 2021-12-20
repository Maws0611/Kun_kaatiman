
let accueil = document.getElementById("accueil");
accueil.addEventListener("click", () => {
  let contenu_qassida = document.getElementById("contenu_qassida");
  contenu_qassida.style.visibility = 'visible'
  accueil.style.visibility = 'hidden'
 
})

window.onload = function(){
  document.getElementById("son").play()
}
