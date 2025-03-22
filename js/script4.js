

// stunning text animation
function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var splitterdText = h1Text.split("")
    var clutter = ""
    
    splitterdText.forEach(function (elem){
        clutter += `<span>${elem}</span>`
    })
    
    h1.innerHTML = clutter
    // console.log(clutter)

}

breakTheText()

gsap.from("h1 span",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
    
})


function breakTheTextTwo(){
    var h2 = document.querySelector("h2")
    var h2Text = h2.textContent
    var splitterdText = h2Text.split("")
    var halfValue = splitterdText.length/2
    var clutter = "" 

    // console.log(halfValue)
    
    splitterdText.forEach(function (elem, idx){
        
        if( idx < halfValue){
            clutter += `<span class="a">${elem}</span>`
        }else{
            clutter += `<span class="b">${elem}</span>`
        }
        console.log(clutter)
    })
    
    h2.innerHTML = clutter

}

breakTheTextTwo()

gsap.from("h2 .a",{
    y:50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.15,
    
})
gsap.from("h2 .b",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:1,
    stagger:-0.15,
    
})