gsap.to(".nav",{
    backgroundColor:"#000",
    height:100,
    duration:1,
    scrollTrigger:{
        Trigger:".nav",
        scroller:"body",
        start:"top -10",
        end:"top -11",
        scrub:1
    }
   
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -20%",
        end:"top -40%",
        scrub:3
    }
})