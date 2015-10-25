// Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:
// Overall mission: Guess word
// Goals:Guess a correct letter in string
// Characters: n/a
// Objects: String, guessed string
// Functions: Pick a new word, guess a letter, display Number of strikes Left

// Pseudocode
// CREATE new function randomWord
//		SAMPLE 1 random word from an array of 100 sample words 
// CREATE new function display
// 		DISPLAYS word with "X" as the characters
// CREATE new function guess
//		CHECKS if guess is true or false
//CREATE new function 


// Initial Code



function randomWord() {
	var words = ["unsigned","himeros","undemocratically","albumenised","distemper","helsa","unswollen","doorbell","unmoderated","impressure","inlier","chiroptera","spermiogenesis","jeffries","marzipan","outgrin","nonautonomous","stabling","methylheptenone","positivistic","strophical","perissodactylous","uncardinally","scombroid","gunboat","chesstree","regerminating","caddying","doweling","constellation","maledictory","somatologist","feasibility","nonascendancy","dorsad","unbending","nonmineral","sandakan","biflex","alphabetize","circumspective","verdancy","dom","nonpregnant","remaster","duit","nondiscernment","whatever","overdebate","nondiscoverable","bereaver","michelangelo","brooksville","turbocharger","maulers","quapledging","spittle","potted","needless","guelphism","redcurrant","rhymester","disreputable","zigzagged","classicism","caseinogen","flicflac","strozzi","unslagged","plos","unfountained","encke","southland","flush","jogger","blotted","nonfavored","spade","repraised","farseer","styliser","spermatophyte","recollectively","titter","headland","sal","untropical","winfield","trivalent","incudes","overclog","hireable","gismo","denitrified","bowler","rms","synapse","gamebag","itineraries"];
	var number = Math.floor((Math.random() * 98) + 0);
	return words[number];
}

function display(word) {
	var displayWord = "";
	for (var i = 0; i < word.length; i++) {
		displayWord = "X" + displayWord;
	};
	return displayWord;
};

function guess(letter,word) {
	return word.search(letter) > -1;
}

function removeGuess(word,display,guessedLetter) {
	var wordArray = word.split('');
	var displayWordArray = display.split('');
	for (var i = 0; i <word.length; i++) {
		if (guessedLetter==wordArray[i]) {
			displayWordArray[i] = guessedLetter;
		};
	};
	return displayWordArray.join('');
}

function gameContinue(strikes,word) {
	if (strikes > 0 && word.search("X") > -1) {
		return true;
	};
};
	
var newGame = document.getElementById("new").addEventListener("click", function() {
	var randomW = randomWord();
	var strikes = 10;
	var displayW = display(randomW);
	var sStrikes = strikes.toString();
	var guessedL ="";
	while (gameContinue(strikes,displayW)) {
	var guessL = prompt("Your word is " + displayW + ".\nYou have " + sStrikes + " strikes left. \nYou have guessed:" + guessedL + "\nWhat letter do you guess?");
	guessedL = guessedL + " " + guessL;
		if (guess(guessL,randomW) == true) {
			displayW = removeGuess(randomW,displayW,guessL);
			alert("Correct!");
		} else {
			strikes += -1;
			sStrikes = strikes.toString();
			alert("Incorrect!")
		};
	};

	if (strikes == 0) {
		alert("You lose! The word was " + randomW)
	} else {
		alert("You win! The word is " +randomW)
	}
});








// Refactored Code






// Reflection
//
//
//
//
//
//
//
//