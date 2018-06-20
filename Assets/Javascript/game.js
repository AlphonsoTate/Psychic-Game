var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 0;

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var computerGuess = computerChoices[Math.floor(Math.random() * letters.length)];

    guesses = guesses || 9
    
    while (userGuess !== computerGuess.toString())
    {
        --guesses;
if (guesses === 0);
        {
            break;
            alert("The Letter was " + computerGuess);
           
        }
      
    }
    console.log("You win");
            if (userGuess == computerGuess){
            wins++;
        }
        else if (userGuess !== computerGuess){
            losses++;
        }
        
        
        var html = "" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " +  losses + "</p>" +
        "<p>Guesses Left: " + (9 - guesses)  + "<p>Your Guesses so far: " + userGuess  + "</p>";
        
        document.querySelector('#game-div').innerHTML = html;
        
}    