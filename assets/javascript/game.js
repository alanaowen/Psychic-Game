// Letters computer can choose from //
var computer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// Array to hold user choices //
var guessesSoFar = []; 


document.onkeyup = function(e) {
	// user choice; makes all letters lowercase //
    var userGuess = String.fromCharCode(e.keyCode).toLowerCase(); 
    // computer selects random letter //
    var computerGuess = computer[Math.floor(Math.random()*computer.length)]; 
    // pushes userGuess to guessesSoFar Array //
        guessesSoFar.push(userGuess); 

    if (userGuess == computerGuess) {
        wins++;
        swal({
        	title: 'You WON!',
        });
        // reset guesses back to 9 //
        guessesLeft = 9;
    }
    else if (guessesLeft == 0) {
        losses++;
        swal({
        	title: 'You LOST!',
        });
        //reset guesses back to 9 //
        guessesLeft = 9;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--; // subtracting guesses left //
    }  
    
document.getElementById('wins').innerHTML = 'WINS: ' + wins;
document.getElementById('losses').innerHTML = 'LOSSES: ' + losses;
document.getElementById('left').innerHTML = 'GUESSES LEFT: ' + guessesLeft;
document.getElementById('guess').innerHTML = 'YOUR GUESSES SO FAR: ' + guessesSoFar;
};



