var tl = gsap.timeline();

tl.from("#logo", {
    y:-30,
    opacity:0,
    duration:2,
    delay:1,
    color:"red",
});

tl.from("#item", {
    y:-30,
    opacity:0,
    duration:.5,
    stagger:0.3,
})

tl.from("#page #title", {
    y:20,
    opacity:0,
    duration:1,
    scale:0.2,
})

gsap.to("#boxFirst",{
    x:1500,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor: "green",
    borderRadius:"50%",
    scale:0.5,
    repeat:-1,
    yoyo:true, // start-end, end-start, start-end, end-start like this system without this [start-end, start-end like this But repeat option -1 or 1 must written]
});

gsap.from("#boxSecond",{
    x:1500,
    y:500,
    duration:2,
    delay:1,
    rotate:360,

});

gsap.from("#page h1",{   
    opacity:0, 
    y:30,
    color:"red",
    stagger:0.5,
    duration:1,
    delay:1,
});


///////////////////////// Home two ///////////////////////

gsap.from("#page1 #box1", {
    scale:0,
    rotate:360,
    duration:3,
    delay:1,
    scrollTrigger: {
        trigger:"#page1 #box1",
        scroller:"body",
    }
})

gsap.from("#page2 #box2", {
    scale:0,
    rotate:720,
    duration:1,
    // delay:1,
    // scrollTrigger:"#page2 #box",
    scrollTrigger: {
        trigger:"#page2 #box2",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:1,
    }
})

gsap.from("#page3 h1", {
    opacity:0,
    x:600,
    rotate:360,
    duration:3,
    delay:1,
    scrollTrigger: {
        trigger:"#page3 h1",
        scroller:"body",
    }
})
gsap.from("#page3 h2", {
    x:-600,
    duration:3,
    delay:1,
    scrollTrigger: {
        trigger:"#page3 h2",
        scroller:"body",
    }
})

gsap.to("#page3 h3", {
    x:-700,
    duration:3,
    delay:1,
    repeat:2,
    scrollTrigger: {
        trigger:"#page3 h3",
        scroller:"body",
    }
})

gsap.to("#page3 h4", {
    x:700,
    duration:3,
    delay:1,
    repeat:2,
    scrollTrigger: {
        trigger:"#page3 h4",
        scroller:"body",
    }
})
gsap.to("#page4 h1", {
    transform:"translateX(-100%)",
    duration:3,
    scrollTrigger: {
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:"top 0%",
        // end:"top -150%",
        scrub:1,
        pin:true,
    }
})
// gsap.to("#page4 h1", {
//     x: '-100%', // Use 'x' instead of 'transform'
//     duration:3,
//     scrollTrigger: {
//         trigger: "#page4 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         // scrub: 1 
//     }
// });

gsap.to("#page5 h1", {
    transform:"translateX(-100%)",
    duration:3,
    scrollTrigger: {
        trigger:"#page5",
        scroller:"body",
        markers:true,
        start:"top 0%",
        // end:"top -150%",
        scrub:1,
    }
})

gsap.from("#page6 h1", {
    y:20,
    opacity:0,
    scale:0.2,
    duration:3,
    scrollTrigger: {
        trigger:"#page6",
        scroller:"body",
    }
})