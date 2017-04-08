var wrestlers = ["Yokozuna", "Vader", "Raven", "Mabel",
    "Kamala", "Tatanka", "Sting", "Goldust",
    "Tazz", "Goldberg", "Kane", "Diesel"];

var wins = 0;
var losses = 0;
var turns = 9;


reset();

function reset() {
	turns = 9;

	currentPick = wrestlers[Math.floor(Math.random() * wrestlers.length)];
	lettersInPick = currentPick.split("");
	blanks = lettersInPick.length;

	console.log(currentPick);
}