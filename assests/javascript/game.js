// Choose a random word from the list and provide blank spaces

var setup = {
    words: ['halo', 'destiny', 'league of legends', 'hearthstone', 'overwatch'],
    message: {
        win: 'You win!',
        lose: 'Game Over. Press any key to restart!',
        warning: 'You have already guessed this letter'
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

    }
}

// Listen for the user's guess

document.onkeyup = function(event) {

    var win = 0;

    setup.gameStart();

    document.getElementById("intro").innerHTML = "";

    document.getElementById("letters").innerHTML = currentWord;

    document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Clear the intro & warning messages

        document.getElementById("warning").innerHTML = "";

        // Add letter to the list

        if (currentWord.indexOf(userGuess) != -1) {

            document.getElementById("warning").innerHTML = setup.message.warning;

            console.log("You've already guessed this letter")

        } else if (letterList.indexOf(userGuess) == -1) {

            letterList += userGuess + ",";

            document.getElementById("letterList").innerHTML = "Previously guessed letters: " + letterList;

            console.log("Letter List " + letterList);

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

            if (numGuesses == 0) {

                document.getElementById("warning").innerHTML = setup.message.lose;

                console.log("Lose");

                setup.resetGame();

            }

            if (currentWord == answerWord) {

                win++;

                document.getElementById("warning").innerHTML = setup.message.win;

                document.getElementById("wins").innerHTML = "Wins: " + win;

                console.log("Win! " + wins);

                setup.resetGame();


            }
        } else {

            document.getElementById("warning").innerHTML = setup.message.warning;

        }
    }
}
