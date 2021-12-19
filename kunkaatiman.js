
let togg1 = document.getElementById("togg1");
togg1.addEventListener("click", () => {
  let d1 = document.getElementById("d1");
  d1.style.visibility = 'visible'
  togg1.style.visibility = 'hidden'
 
})

window.onload = function(){
  document.getElementById("son1").play()
}
