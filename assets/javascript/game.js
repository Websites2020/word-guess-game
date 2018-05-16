var hero=["apple", "orange", "pear"];
var guesses=3;
var randomHero=[];
var playerGuess=[];
var noGuess=[];

console.log(hero.length)

//computer chooses random hero
function randomHero() {
    document.getElementById("myHero").innerHTML = [(Math.random() * hero.length)];
}

// randomHero();

console.log([(Math.random() * hero.length)])

//player guesses a letter
function playerGuess() {
    document.getElementById("player").onkeyup = function() {playerGuess()};
}
    // randomHero();


console.log(document.getElementById("player").onkeyup = function() {playerGuess()})

//letter is displayed along with previous chosen letters
function playerGuess() {
    document.getElementById("player").innerHTML = "playerGuess()";
}

console.log(playerGuess())

//number of guesses is lowered if wrong number is inputted
function noGuess(a, b) {
    return guesses - 1;
}

console.log(noGuess);

//computer score changes by +1 if player guesses reaches 0


//player score changes if all letters in word are guessed


//game resets