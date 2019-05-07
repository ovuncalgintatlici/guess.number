var price = Math.floor(Math.random() * 100)+1;
console.log(price);

var btn =document.querySelector('button');
btn.addEventListener('click',decideIfWon);

var reset = document.querySelector('#reset');
reset.addEventListener('click',restart);

function randimize(){
    var guess =document.querySelector('#guessField');
    guess.value = '';
}

function restart(){
    randimize();

    var guess =document.querySelector('#guessField');    
    guess.value = '';

    var lowOrHiMessage = document.querySelector('#lowOrHi');
    lowOrHiMessage.textContent='';
}

function decideIfWon(){

    var guess = document.querySelector('#guessField');
    var lowOrHiMessage = document.querySelector ('#lowOrHi');
    
    if(guess.value>price){

        lowOrHiMessage.textContent= 'too high';
    }
    else if (guess.value<price){

        lowOrHiMessage.textContent= 'too low';
    }
    else {

        lowOrHiMessage.textContent= 'winner';
    }
}