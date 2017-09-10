var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;
function getRandomNumber(upper) {
	var num = Math.floor(Math.random() * upper) + 1;
	return num;
}

do {
	guess = prompt('I am thinking of a number between 1 and 10. What is it?');
	guessCount += 1;
	if (parseInt(guess) === randomNumber) {
		correctGuess = true;
	}
} while ( ! correctGuess ) 
// a not operator in front of a 'false' boolean, turns it into a 'true' boolean
// while true, run... not + true = false... 
// while "not the correct guess"... run 

document.write("<p>Yep! You guessed the number!</p>");
document.write("<p>It took you " + guessCount + " guesses.</p>");
