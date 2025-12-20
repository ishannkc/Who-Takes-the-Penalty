const meBtn = document.getElementById('me-btn')
const RonaldoBtn = document.getElementById('ronaldo-btn')

RonaldoBtn.addEventListener('click', function(){
    setTimeout(function(){
        document.getElementById('phrase').innerHTML =  `<p id="phrase">Smart choice. <br>Leave the miracles to the man who makes them.</p>`
        document.getElementById('penalty').style.color = '#17632dff'
    },700)
})

