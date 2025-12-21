const meBtn = document.getElementById('me-btn')
const RonaldoBtn = document.getElementById('ronaldo-btn')

RonaldoBtn.addEventListener('click', function(){
    setTimeout(function(){
        document.getElementById('phrase').innerHTML =  `<p id="phrase">Smart choice. <br>Leave the miracles to the man who makes them.</p>`
        document.getElementById('penalty').style.color = '#17632dff'
        meBtn.style.display = 'none'
        RonaldoBtn.style.display = 'none'

    },700)  
})

const positions = [
    'top-right', 'bottom-left', 'top-left', 'bottom-right', 'random1', 'random2',
    'random3', 'random4', 'random5', 'random6', 'random7'
]

//needs to be declared in global scope, so that previous position can be stored
 let currentPosition = "" 
meBtn.addEventListener('mouseover', function(){
    //removing previous positions, to prevent from overlapping
    for (let i=0; i<positions.length; i++){
        meBtn.classList.remove(positions[i])
    }

    let randomPosition = positions[Math.floor(Math.random() *(positions.length))] 
    //to prevent two same positions getting randomly drawn consecutively
        while(randomPosition === currentPosition){
            randomPosition = positions[Math.floor(Math.random() *(positions.length))]
        }

        currentPosition = randomPosition

    meBtn.classList.toggle(currentPosition)
})



