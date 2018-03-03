

//Below is the array with all choices 
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v', 'w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;
var gameStatus = document.getElementById("game");

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);

    document.onkeyup = function(event) {
    var userGuess = event.key;
console.log(userGuess);
    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }

   //document.getElementById('wins').innerHTML = "Wins: " + wins;
   //document.getElementById('losses').innerHTML = "losses: " + losses;
   //document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

    gameStatus.innerHTML = `
    <p>Your choice: $(userGuess)</p>
    <p>Computer choice: $(computerChoice)</p>
    <p>Wins: $(wins)</p>
    <p>Losses: $(losses)</p>
    <p>Guesses: $(guesses)</p> `;
}