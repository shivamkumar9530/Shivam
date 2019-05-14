console.log('connected');

// 1. Declare price to be 87
// 2. Get input from user then store it to a variable called guess
// 3. if guess is less than price 
    // then print its low
//else if guess is greater than price
    // then print its high
//else 
    // congratulation you got it.


var price = Math.floor((Math.random()*100))+1;

var result = document.querySelector('#lowOrHi');
var guessBox = document.querySelector('#guessField');


var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGame);

var submitBtn = document.body.querySelector('#submit');
submitBtn.addEventListener('click', submitGuess);

function submitGuess(){
    var guess = guessBox.value;

    if (guess<price){
        result.innerText = "too Low";
    }
    else if (guess>price){
        result.innerText = "too High";
    }
    else {
        result.innerText = "winner";
    }
}

function resetGame(){
    price = Math.floor((Math.random()*100))+1;
    result.innerText = "";
    guessBox.value = "";
}
