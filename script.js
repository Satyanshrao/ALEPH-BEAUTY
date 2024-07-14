var main =document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var email =document.querySelector("#youremail")
var innput =document.querySelector("#innput")

main.addEventListener("mousemove",function(dets){
    cursor.style.left =dets.x+"px"
    cursor.style.top =dets.y+"px"
})
innput.addEventListener("click",function(){
    email.style.display = "none"
})
