var wrestlers = ["yokozuna", "hakushi", "doink", "vader", "raven", "mabel", "kamala", "tatanka", "virgil", "sting", "goldust",
    "taz", "goldberg", "kane", "diesel", "mankind"
];

/*
var wrestlers = [
    {name: "yokozuna", picture: "yokozuna.jpg"},
    {name: "hakushi", picture: "hakushi.jpg"},
    {name: "doink", picture: "doink.jpg"},
    {name: "vader", picture: "vader.jpg"},
    {name: "raven", picture: "raven.jpg"},
    {name: "mabel", picture: "mabel.jpg"},
    {name: "kamala", picture: "kamala.jpg"},
    {name: "tatanka", picture: "tatanka.jpg"},
    {name: "virgil", picture: "virgil.jpg"},
    {name: "sting", picture: "sting.jpg"},
    {name: "goldust", picture: "goldust.jpg"},
    {name: "taz", picture: "taz.jpg"},
    {name: "goldberg", picture: "goldberg.jpg"},
    {name: "kane", picture: "kane.jpg"},
    {name: "diesel", picture: "diesel.jpg"},
    {name: "mankind", picture: "mankind.jpg"},

];
*/



var wins = 0;
var losses = 0;
var turns = 7;

var currentPick = "";
var lettersInPick = [];
// var currentMatch = [];
// var wrongGuesses = [];


function play() {
    turns = 9;

    currentPick = wrestlers[Math.floor(Math.random() * wrestlers.length)];
    lettersInPick = currentPick.split("");
    blanks = lettersInPick.length;

    console.log(currentPick);

    currentMatch = [];
    wrongGuesses = [];

    for (var i = 0; i < blanks; i++) {
        currentMatch.push("_");
    }

    console.log(currentMatch);

    document.getElementById("kickouts").innerHTML = "Kickouts remaining: " + turns;

    document.getElementById("wordBlanks").innerHTML = "Current Wrestler: " + currentMatch.join(" ");

    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + wrongGuesses.join(" ");

}

function checkLetter(letter) {
    var correctLetter = false;

    for (var i = 0; i < blanks; i++) {
        if (currentPick[i] == letter) {
            correctLetter = true;
        }
    }

    if (correctLetter) {
        for (var i = 0; i < blanks; i++) {
            if (currentPick[i] == letter) {
                currentMatch[i] = letter;
            }
        }

        console.log(currentMatch);
    } else {
        wrongGuesses.push(letter);
        turns--;
    }
}

function matchDone() {
    console.log("win count: " + wins + " Loss Count: " + losses + " guesses left: " + turns);

    document.getElementById("kickouts").innerHTML = "Kickouts remaining: " + turns;

    document.getElementById("wordBlanks").innerHTML = "Current Wrestler: " + currentMatch.join(" ");

    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + wrongGuesses.join(" ");

    if (lettersInPick.toString() == currentMatch.toString()) {
        wins++;
        alert("You're the champion!");

        document.getElementById("winCounter").innerHTML = "Wins: " + wins;


        //document.querySelector("#correctWrestler").innerHTML = '<img class="wrestlerImage" src'


        play();
    } else if (turns == 0) {
        losses++;
        alert("You've been pinned!");

        document.getElementById("lossCounter").innerHTML = "Losses: " + losses;
        play();
    }

}

play();


document.onkeyup = function(event) {
    letterChosen = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterChosen);

    matchDone();
}
