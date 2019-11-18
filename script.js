window.onload = loadPage

function loadPage() {
    randomizePosition()
}

function randomizePosition(){
 
    let img = document.querySelector('img')
    
    let x = 0
    let y = 0
    
    let speedX = 1
    let speedY = 0
    
    
    setInterval(function(){
    
    speedX = Math.random() * 10 - 5
    speedY = Math.random() * 10 -5
    
    }, 1000)
   
   
    
    setInterval(function(){
    
    img.style.left = x+'px'
    x += speedX
    
    img.style.top = y+'px'
    y += speedY
    
    if(x > window.innerWidth){
    x = 0
    img.style.transform = 'rotateX(180deg)'
    img.style.transform = 'rotateY(180deg)'

    }
    if(y > window.innerHeight) {
        y = 0
        img.style.transform = 'rotateX(180deg)'
        img.style.transform = 'rotateY(180deg)'

    }
    }, 5)
    
   }