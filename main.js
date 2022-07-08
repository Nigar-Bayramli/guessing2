let guesses = 10
let number = Math.trunc( Math.random() * 20) + 1
let highscore = 0
let coin = 0

const display = function(message){
    document.querySelector('.condition') .textContent = message
}
document.querySelector('#submit') .addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

if (!guess) {
    display('No number!')
}
else if (guess === number) {
    if (guesses > highscore) {
        highscore = guesses;
        document.querySelector('.high').textContent = highscore;
      }
    document.querySelector('.coin') .textContent = coin + 1
    
    document.querySelector('.footer-message') .textContent = 'Good job buddy!👍' 
    display('Correct number!')
    document.querySelector('body') .style.backgroundColor = 'rgb(37, 205, 42)'
}
else if(guess !== number) {

    if(guesses > 1) {
        document.querySelector('.footer-message') .textContent = 'Come on you can do it!💪' 
       document.querySelector('.condition') .textContent = guess > number ? 'Too high!': 'Too low!'
    guesses--
    document.querySelector('.guesses') .textContent = guesses  
    }
    else {
        display('Game over!')
        document.querySelector('.footer-message') .textContent = 'Next time better luck!:)' 
        displaymessage('Game over')
    }
    document.querySelector('body') .style.backgroundColor = 'red'
}

})
document.querySelector('.again').addEventListener('click', function() {

       number = Math.trunc( Math.random() * 20) + 1
     guesses = 10
     coin = coin + 1
     document.querySelector('.coin') .textContent = coin
    display('Guess a number')
    document.querySelector('.guesses') .textContent = guesses
    document.querySelector('.guess').value = ''
    document.querySelector('body') .style.backgroundColor = 'rgb(255, 234, 0)'
    document.querySelector('.footer-message') .textContent = 'Be patient and try to guess:)'

})
const quit = document.querySelector('.quit-window')
const modal =  document.querySelector('.modal-window')
const okay = document.querySelector('.okay')
document.querySelector('.rules') .addEventListener('click', function() {

   modal.classList.add('show')
})
document.querySelector('.okay') .addEventListener('click', function() {

    modal.classList.remove('show')
 }
 
)
document.querySelector('.quit') .addEventListener('click', function() {

    quit.classList.add('show')
 })

 document.querySelector('.cancel') .addEventListener('click', function() {

    quit.classList.remove('show')
 })

 document.querySelector('.quit-okay') .addEventListener('click', function() {

document.querySelector('.high').textContent = 0
document.querySelector('.coin').textContent = 0
number = Math.trunc( Math.random() * 20) + 1
     guesses = 10
     quit.classList.remove('show')
    display('Guess a number')
    document.querySelector('.guesses') .textContent = guesses
    document.querySelector('.guess').value = ''
    document.querySelector('body') .style.backgroundColor = 'rgb(255, 234, 0)'
    document.querySelector('.footer-message') .textContent = 'Be patient and try to guess:)'
 })


    

