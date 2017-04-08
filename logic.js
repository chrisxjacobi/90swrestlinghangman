var wrestlers = ["Yokozuna", "Vader", "Raven", "Mabel",
    "Kamala", "Tatanka", "Sting", "Goldust",
    "Tazz", "Goldberg", "Kane", "Diesel"
];



var wins = 0;
var losses = 0;
var turns = 9;

var currentPick = "";
var lettersInPick = [];
var currentMatch = [];
var wrongGuesses = [];


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

        document.getElementById("wins").innerHTML = wins;
        play();
    } else if (turns == 0) {
        losses++;
        alert("You've been pinned!");

        document.getElementById("losses").innerHTML = losses;
        play();
    }

}

play();


document.onkeyup = function() {
    letterChosen = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterChosen);

    matchDone();
}
