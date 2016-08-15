var start = {
	words: ['Halo','Destiny','League of Legends','Hearthstone','Overwatch'],

	chooseWord: function(){

		var answerWord = start.words[Math.floor(Math.random()*start.words.length)];
		
		console.log(answerWord);

		var blankAnswers = "";

		for (var i = 0; i < answerWord.length; i++) {
			
			var blankAnswers = blankAnswers.concat(" _ ");

		}
		console.log(blankAnswers);
	}
}

start.chooseWord();
