var wrestlers = ["Yokozuna", "Vader", "Raven", "Mabel",
    "Kamala", "Tatanka", "Sting", "Goldust",
    "Tazz", "Goldberg", "Kane", "Diesel"];

var wins = 0;
var losses = 0;
var turns = 9;


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

document.onkeyup = function() {
	letterChosen = String.fromCharCode(event.keyCode).toLowerCase();
}

play()