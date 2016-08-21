// Choose a random word from the list and provide blank spaces

var setup = {
    words: ['halo', 'destiny', 'masterchief', 'warthog', 'banshee', 'forerunners', 'cortana', 'spartans', 'oni'],
    message: {
        win: 'You win! Press any key to restart!',
        lose: 'Game Over. Press any key to restart!',
        warning: 'You have already guessed the letter: '
    },

    chooseWord: function() {

        var answerWord = setup.words[Math.floor(Math.random() * setup.words.length)];

        return answerWord;
    },

    blankWord: function(answerWord) {

        var blankCharacter = "";

        for (var i = 0; i < answerWord.length; i++) {

            blankCharacter = blankCharacter.concat("_");

        }

        console.log(blankCharacter);

        return blankCharacter;
    },

    setChar: function(currentWord, x, y) {

        var currentWord = currentWord.substr(0, x) + y + currentWord.substr(x + 1, currentWord.length);

        return currentWord;
    },

    guessLetter: function(letter, shown, answer) {

        var checkLetter = -1;

        checkLetter = answer.indexOf(letter);

        for (i = 0; i < answer.length; i++) {

            if (checkLetter == -1) {

                return shown;

            } else {

                var shown = setup.setChar(shown, checkLetter, letter);
            }

            checkLetter = answer.indexOf(letter, checkLetter + 1);
        }

        return shown;
    },

    gameStart: function() {

        answerWord = setup.chooseWord();

        currentWord = setup.blankWord(answerWord);

        numGuesses = answerWord.length;

        letterList = "";

        console.log(answerWord);

        return answerWord, currentWord, numGuesses, letterList;
    },

    resetGame: function() {

        setup.gameStart();

        document.getElementById("letters").innerHTML = currentWord;

        document.getElementById("letterList").innerHTML = "Previously guessed letters: ";

        document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + numGuesses;
    }
}

document.onkeyup = function(event) {

    var win = 0;

    setup.gameStart();

    document.getElementById("intro").innerHTML = "";

    document.getElementById("letters").innerHTML = currentWord;

    document.onkeyup = function(event) {

        //Check to see if the game has been won or lost and if so reset the word

        if (currentWord == answerWord || numGuesses == 0) {

            setup.resetGame();
        }else {

        // Clear any intro & warning messages for the current game

        document.getElementById("warning").innerHTML = "";

        // Listen for the user's guess

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Check to see if the input has already been guessed

        if (currentWord.indexOf(userGuess) != -1) {

            document.getElementById("warning").innerHTML = setup.message.warning + "'" + userGuess + "'";

            console.log("You've already guessed letter")

            // Add letter to the list

        } else if (letterList.indexOf(userGuess) == -1) {

            letterList += userGuess + ",";

            document.getElementById("letterList").innerHTML = "Previously guessed letters: " + letterList;

            console.log("Letter List " + letterList);

            //Make sure that there are guesses available

            if (numGuesses >= 1) {

                if (answerWord.indexOf(userGuess) >= 0) {

                    currentWord = setup.guessLetter(userGuess, currentWord, answerWord);

                } else {

                    numGuesses = numGuesses - 1;

                    document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + numGuesses;

                    console.log("Letter did not match");

                    console.log("Number of guesses remaining: " + numGuesses);
                }

                document.getElementById("letters").innerHTML = currentWord;

                console.log(currentWord);
            }

            //Game is lost

            if (numGuesses == 0) {

                document.getElementById("warning").innerHTML = setup.message.lose;

                console.log("Lose");
            }

            //Win condition

            if (currentWord == answerWord) {

                win++;

                document.getElementById("letters").innerHTML = currentWord;

                document.getElementById("warning").innerHTML = setup.message.win;

                document.getElementById("wins").innerHTML = "Wins: " + win;

                console.log("Win! " + wins);
            }

        } else {

            document.getElementById("warning").innerHTML = setup.message.warning + "'" + userGuess + "'";
        }
    }
}
}
