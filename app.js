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
gsap.from(".about-us,.about",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        scrub:2
        
    }
})

gsap.from("#hghg",{
    x: -60,
    y:-60,
    duration:0.5,
    scrollTrigger:{
        trigger: "#hghg",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:1
    }
})
gsap.to("#ghgh",{
    x: -60,
    y: -60,
    duration:0.5,
    scrollTrigger:{
        trigger: "#hghg",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:3
    }
})