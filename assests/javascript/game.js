// Choose a random word from the list and provide blank spaces

var game = {
	words: ['halo','destiny','league of legends','hearthstone','overwatch'],

	chooseWord: function(answerWord){

		var blankCharacter = "";

		for (var i = 0; i < answerWord.length; i++) {
			
			var blankCharacter = blankCharacter.concat("_");

		}
		console.log(blankCharacter);

		return blankCharacter;
	},

	setChar: function( currentWord, x, y ){

		var repWord = currentWord.substr(0, x) + y + currentWord.substr(x + 1, currentWord.length);

		return repWord;
	},

	guessLetter: function( letter, shown, answer ){

		var checkLetter = -1;

		checkLetter = answer.indexOf(letter);

		for (i = 0; i < answer.length; i++) {
		
			if (checkLetter == -1){

				return shown;

			}
			else{
				
				var shown = game.setChar(shown, checkLetter, letter);

			}

			checkLetter = answer.indexOf(letter, checkLetter + 1);

		}

		return shown;

	}
}

var answerWord = game.words[Math.floor(Math.random()*game.words.length)];

var currentWord = game.chooseWord(answerWord);

var numGuesses = answerWord.length + 3;

console.log(answerWord);

// Listen for the user's guess

document.onkeyup = function(event){

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log("Number of guesses: " + numGuesses)

	if( answerWord.indexOf(userGuess) >= 0 ){

		var newWord = game.guessLetter(userGuess, currentWord, answerWord);

	}
	else{

		var newWord = currentWord;

		console.log("Letter did not match");

	}

	numGuesses = numGuesses - 1;

	currentWord = newWord;

	console.log(currentWord);
}

