// Choose a random word from the list and provide blank spaces

var start = {
	words: ['halo','destiny','league of legends','hearthstone','overwatch'],

	chooseWord: function(){

		var answerWord = start.words[Math.floor(Math.random()*start.words.length)];
		
		console.log(answerWord);

		var blankAnswers = "";

		for (var i = 0; i < answerWord.length; i++) {
			
			var blankAnswers = blankAnswers.concat(" _ ");

		}
		console.log(blankAnswers);
	},

	setChar: function( currentWord, x, y ){

		var repWord = currentWord.substr(0, x) + y + currentWord.substr(x + 1);

		console.log(repWord);

		return repWord;
	}
}

start.chooseWord();

start.setChar("Test words", 3, "6");

// Listen for the user's guess

document.onkeyup = function(event){

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


}

