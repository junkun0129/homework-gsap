//gsap.to(".logo",{x:100})
const liArray = Array.from(document.querySelectorAll(".menu-links ul li"));
const TimeLine = gsap.timeline({
    defaults:{
        duration:0.5,
        autoAlpha:0,
        
    }
})

TimeLine
.from(".logo",{x:100})
.from(".menu-links ul li",{
    x:100,
    autoAlpha:0,
    stagger:0.5/liArray.length
}, "-=0.5")
.from(".title",{y:100})
.from(".tagline",{y:100})
.from(".desc", {y:100}, "-=0.5")
.from(".beer", {y:100})


// const iwatani = gsap.to(".menu-links ul li",{
//     duration:0.5,
//     autoAlpha:0
// })

console.log(liArray.length)