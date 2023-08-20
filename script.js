let cir = document.querySelector(".circle");
let cirb = document.querySelector(".circle-b");

document.addEventListener("mousemove",(dets)=>{

    cir.style.top = dets.y + "px"
    cir.style.left = dets.x + "px"
    cirb.style.top = dets.y -150+ "px"
    cirb.style.left = dets.x -150+ "px"
})