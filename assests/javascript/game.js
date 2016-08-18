// Choose a random word from the list and provide blank spaces

var setup = {
	words: ['halo','destiny','league of legends','hearthstone','overwatch'],

	chooseWord:function(){

		var answerWord = setup.words[Math.floor(Math.random()*setup.words.length)];

		return answerWord;

	},

	blankWord: function(answerWord){

		var blankCharacter = "";

		for (var i = 0; i < answerWord.length; i++) {

				blankCharacter = blankCharacter.concat("_");
			
		}
		console.log(blankCharacter);

		return blankCharacter;
	},

	setChar: function( currentWord, x, y ){

		var currentWord = currentWord.substr(0, x) + y + currentWord.substr(x + 1, currentWord.length);

		return currentWord;
	},

	guessLetter: function( letter, shown, answer ){

		var checkLetter = -1;

		checkLetter = answer.indexOf(letter);

		for (i = 0; i < answer.length; i++) {
		
			if (checkLetter == -1){

				return shown;

			}
			else{
				
				var shown = setup.setChar(shown, checkLetter, letter);

			}

			checkLetter = answer.indexOf(letter, checkLetter + 1);

		}

		return shown;

	},

	gameStart: function(){

		answerWord = setup.chooseWord();

		currentWord = setup.blankWord(answerWord);

		numGuesses = answerWord.length;

		letterList = "";

		console.log(answerWord);

		return answerWord, currentWord, numGuesses, letterList;

	}
}

// var answerWord = setup.chooseWord();

// var currentWord = setup.blankWord(answerWord);

// var numGuesses = answerWord.length;

// var letterList = "";

var wins = 0;

setup.gameStart();

// Listen for the user's guess

document.onkeyup = function(event){

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// Add letter to the list

		if ( currentWord.indexOf(userGuess) != -1 ){

			console.log("You've already guessed this letter")

		}

		else if ( letterList.indexOf(userGuess) == -1 ) {

			letterList += userGuess;

			console.log("Letter List " + letterList);

			if( numGuesses >= 1 ){

				if( answerWord.indexOf(userGuess) >= 0 ){

					var newWord = setup.guessLetter(userGuess, currentWord, answerWord);

				}
				else{

					var newWord = currentWord;

					numGuesses = numGuesses - 1;

					console.log("Letter did not match");

					console.log("Number of guesses remaining: " + numGuesses);

				}

				currentWord = newWord;

				console.log(currentWord);
			}

			if ( numGuesses == 0){

				console.log("Lose");

				setup.gameStart();

			}

			if ( currentWord == answerWord ){

				wins++;

				console.log("Win! " + wins);

				setup.gameStart();
			}
		}

		else {

			console.log("This letter already appears in the letter list")

		}
	
}

