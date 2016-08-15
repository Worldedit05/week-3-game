var start = {
	words: ['Halo','Destiny','League of Legends','Hearthstone','Overwatch'],

	chooseWord: function(){

		var answerWord = start.words[Math.floor(Math.random()*start.words.length)];
		console.log(answerWord);
	}
}

start.chooseWord();