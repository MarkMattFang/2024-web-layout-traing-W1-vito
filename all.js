const title1 = document.querySelector(".title1")
const title2 = document.querySelector(".title2")


gsap.from(title1,{
    opacity:0,
    x:0,
    duration: 1.5,
    rotation: 180,
},{
    opacity:1,
    x: 300,
    duration: 1.5,
    rotation: 180,
}
)

gsap.from(title2,{
    opacity:0,
    x:0,
    duration: 1.5,
    rotation: 180,
},{
    opacity:1,
    x: 300,
    duration: 1.5,
    rotation: 180,
}
)