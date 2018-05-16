function square(number) {
    console.log(number * number);
}

square(3)

var x = 6

var y = 1

var computerChoices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

    console.log(computerChoices.length)

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log([Math.floor(Math.random() * computerChoices.length)]);


    function playerWin() {
        pWins++;
    }
    
    function compWin() {
        cWins++;
    }


    document.onkeyup = function(event) {
        var userGuess = event.key;

        console.log(userGuess);


    if (userGuess == computerGuess) {

        var winTally = document.getElementById("wins");
        wins = wins+1;
        winTally.innerHTML = "Player Wins: " + wins;    

        console.log("true");

    }  else {

        var guessTally = document.getElementById("guess");
        guess += userGuess;
        guessTally.textContent = "Player Guesses: " + guess;

        var leftTally = document.getElementById("left");
        left = x--;
        leftTally.innerHTML = "Guesses Left: " + left;

        console.log("false");
    }   

    if (left == 0) {
        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Player Losses: " + losses;            
    }

}