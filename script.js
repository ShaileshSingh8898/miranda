const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl=gsap.timeline()
tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})


tl.to("#page1",{
    y:"15vh",
    duration:1,
    delay:1
})

tl.to("#page1",{
    y:"0vh",
    duration:0.8,
    rotate:360,
    scale:1
})

var a=document.querySelector("#a")
var b=document.querySelector("#b")
var c=document.querySelector("#c")
var d=document.querySelector("#d")


a.addEventListener("mouseenter",function(){
b.style.left="38%"
c.style.left="54%"
d.style.left="70%"
})

a.addEventListener("mouseleave",function(){
    b.style.left="22%"
    c.style.left="40%"
    d.style.left="58%"
    })

 b.addEventListener("mouseenter",function(){
          c.style.left="57%"
        d.style.left="78%"
})
   b.addEventListener("mouseleave",function(){
          
 c.style.left="40%"
  d.style.left="58%"
})

c.addEventListener("mouseenter",function(){
   
  d.style.left="77%"
})
c.addEventListener("mouseleave",function(){
    

d.style.left="58%"
})

tl.from("#page11 h1",{
    transform:"translateX(0%)",
   
})

tl.to("#page11 h1",{
    transform:"translateX(calc(-100% - 4px))",
    duration:8,
   repeat:-1
})