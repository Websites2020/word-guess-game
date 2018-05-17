function square(number) {
    console.log(number * number);
}

square(3)

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
        winTally.innerHTML = "Player Wins: " + wins;
        
        var guessTally = document.getElementById("guess");
        guess = userGuess;
        guessTally.textContent = "Player Guesses: " + guess;

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        console.log("true");

        // window.location.reload();

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
            left = 7
            leftTally.innerHTML = "Guesses Left " + left;

    }
}
