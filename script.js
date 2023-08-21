var cir = document.querySelector(".circle");
var cirb = document.querySelector(".circle-b");

document.addEventListener("mousemove",(dets)=>{

    cir.style.top = dets.y+10 + "px"
    cir.style.left = dets.x + "px"
    cirb.style.top = dets.y -150+ "px"
    cirb.style.left = dets.x -150+ "px"
})

// var h3 = document.querySelectorAll(".nav h3")
// h3.forEach((ele)=>{
//     ele.addEventListener("mouseenter",()=>{
//         cir.style.scale = 3;
//         cir.style.border = "1px"+" solid"+" white";
//         cir.style.backgroundColor = "transprarent"
//     })

// })

var h3 = document.querySelectorAll(".nav h3");
h3.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var c =cir;
        c.style.scale = 3;
        cir.style.border = "1px solid white"
        cir.style.backgroundColor ="transparent"
    })
})
var h3 = document.querySelectorAll(".nav h3");
h3.forEach(function(ele){
    ele.addEventListener("mouseleave",function(){
        var c =cir;
        c.style.scale = 1;
        cir.style.border = "0px solid white"
        cir.style.backgroundColor ="#95c11e"
        cir.style.transtion = "all 1s"
    })
})