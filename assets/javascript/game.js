var x = 6

var y = 1

var z = 1

var computerChoices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

    console.log(computerChoices.length)

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log([Math.floor(Math.random() * computerChoices.length)]);

    document.onkeyup = function(event) {
        var userGuess = event.key;

        console.log(userGuess);


    if (userGuess == computerGuess) {

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;
        
        var guessTally = document.getElementById("guess");
        guess = "";
        guessTally.innerHTML = "Your Guesses So Far: " + guess;

        var leftTally = document.getElementById("left");
        left = x;
        if (left >= 0) {
            x = 7;
            leftTally.innerHTML = "You Won!";
        }

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        console.log("true");

    }  else {

        guessTally = document.getElementById("guess");
            guess += userGuess;
            guessTally.innerHTML = "Your Guesses So Far: " + guess;

        leftTally = document.getElementById("left");
            left = x--;
            if (left >= 1) {
            leftTally.innerHTML = "Guesses Left: " + left;
            } else {
                x = 7;
                leftTally.innerHTML = "You Lost!";
            }

        console.log("false");
      
    }

    if (left == 0) {
        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;

        guessTally = document.getElementById("guess");
            guess = "";
            guessTally.innerHTML = "Your Guesses So Far: " + guess;
        
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
           
        } 

}
