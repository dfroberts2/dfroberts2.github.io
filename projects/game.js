// Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:
// Overall mission: Guess word
// Goals:Guess a correct letter in string
// Characters: n/a
// Objects: randomized word, guessed letter, displayed word
// Functions: Pick a new word, guess a letter, display word, remove guessed letter, continue game

// Pseudocode
// CREATE new function randomWord
//		SAMPLE 1 random word from an array of 100 sample words 
// CREATE new function display
// 		DISPLAYS word with "X" as the characters
// CREATE new function guess
//		CHECKS if letter guess is true or false
// CREATE new function removeGuess
//		if letter guess is in word, remove the X from the display word in that letter's place
// CREATE new function gameContinue
//		if there are strikes left, or the word is not fully guess, the game will continue
// When the HTML button is clicked: use functions to run through a guessing game.



// Initial Code

//function randomWord() {
//	var words = ["unsigned","himeros","undemocratically","albumenised","distemper","helsa","unswollen","doorbell","unmoderated","impressure","inlier","chiroptera","spermiogenesis","jeffries","marzipan","outgrin","nonautonomous","stabling","methylheptenone","positivistic","strophical","perissodactylous","uncardinally","scombroid","gunboat","chesstree","regerminating","caddying","doweling","constellation","maledictory","somatologist","feasibility","nonascendancy","dorsad","unbending","nonmineral","sandakan","biflex","alphabetize","circumspective","verdancy","dom","nonpregnant","remaster","duit","nondiscernment","whatever","overdebate","nondiscoverable","bereaver","michelangelo","brooksville","turbocharger","maulers","quapledging","spittle","potted","needless","guelphism","redcurrant","rhymester","disreputable","zigzagged","classicism","caseinogen","flicflac","strozzi","unslagged","plos","unfountained","encke","southland","flush","jogger","blotted","nonfavored","spade","repraised","farseer","styliser","spermatophyte","recollectively","titter","headland","sal","untropical","winfield","trivalent","incudes","overclog","hireable","gismo","denitrified","bowler","rms","synapse","gamebag","itineraries"];
//	var number = Math.floor((Math.random() * 98) + 0);
//	return words[number];
//}
//
//function display(word) {
//	var displayWord = "";
//	for (var i = 0; i < word.length; i++) {
//		displayWord = "X" + displayWord;
//	};
//	return displayWord;
//};
//
//function guess(letter,word) {
//	return word.search(letter) > -1;
//}

//function removeGuess(word,display,guessedLetter) {
//	var wordArray = word.split('');
//	var displayWordArray = display.split('');
//	for (var i = 0; i <word.length; i++) {
//		if (guessedLetter==wordArray[i]) {
//			displayWordArray[i] = guessedLetter;
//		};
//	};
//	return displayWordArray.join('');
//}

//function gameContinue(strikes,word) {
//	if (strikes > 0 && word.search("X") > -1) {
//		return true;
//	};
//};
//	
//var newGame = document.getElementById("new").addEventListener("click", function() {
//	var randomW = randomWord();
//	var strikes = 10;
//	var displayW = display(randomW);
//	var sStrikes = strikes.toString();
//	var guessedL ="";
//
//	while (gameContinue(strikes,displayW)) {
//	var guessL = prompt("Your word is " + displayW + ".\nYou have " + sStrikes + " strikes left. \nYou have guessed:" + guessedL + "\nWhat letter do you guess?");
//	guessedL = guessedL + " " + guessL;
//		if (guess(guessL,randomW) == true) {
//			displayW = removeGuess(randomW,displayW,guessL);
//			alert("Correct!");
//		} else {
//			strikes += -1;
//			sStrikes = strikes.toString();
//			alert("Incorrect!")
//		};
//	};
//
//	if (strikes == 0) {
//		alert("You lose! The word was " + randomW)
//	} else {
//		alert("You win! The word is " +randomW)
//	}
//});


// Refactored Code
function randomWord() {
	var words = ["unsigned","himeros","undemocratically","albumenised","distemper","helsa","unswollen","doorbell","unmoderated","impressure","inlier","chiroptera","spermiogenesis","jeffries","marzipan","outgrin","nonautonomous","stabling","methylheptenone","positivistic","strophical","perissodactylous","uncardinally","scombroid","gunboat","chesstree","regerminating","caddying","doweling","constellation","maledictory","somatologist","feasibility","nonascendancy","dorsad","unbending","nonmineral","sandakan","biflex","alphabetize","circumspective","verdancy","dom","nonpregnant","remaster","duit","nondiscernment","whatever","overdebate","nondiscoverable","bereaver","michelangelo","brooksville","turbocharger","maulers","quapledging","spittle","potted","needless","guelphism","redcurrant","rhymester","disreputable","zigzagged","classicism","caseinogen","flicflac","strozzi","unslagged","plos","unfountained","encke","southland","flush","jogger","blotted","nonfavored","spade","repraised","farseer","styliser","spermatophyte","recollectively","titter","headland","sal","untropical","winfield","trivalent","incudes","overclog","hireable","gismo","denitrified","bowler","rms","synapse","gamebag","itineraries","imbrium","anaesthesia","campos","lending","uninhibited","whites","flatware","khediviate","czaristic","topographer","predelegation","wallydraigle","glegly","swipple","warren","subaxile","peripteroi","subungual","astronaut","outbellow","alongships","matterless","inheritably","areostyle","stimulate","meatus","overfervent","constellated","prosuffrage","extradite","mixability","walters","approximal","burlington","boraxes","potamoplankton","unwicked","juggernaut","unwrenched","anagrammatise","sullied","hypergrammatical","semitransparency","nonrealizable","heigh","ttainder","anepigraphous","weakly","nictitation","tantalise","maia","noncongruent","castelvetro","intensively","resistively","instal","reclaimable","superdreadnought","interinfluencing","interlocate","psychoanalytically","arbitrement","crapelike","enthralment","revising","bicyclic","scotmata","backbreaking","isochrony","season","advisement","unanalogized","zoanthropy","glassine","outvociferate","hyperconformity","superlocal","underissue","delay","strangulated","setaceously","brutishness","kiloton","nondeistic","unmuffle","mamaluke","reregulated","sapanwood","subcylindric","comsat","nonpredatory","endure","clumsy","backlit","sodium","chapman","floss","ogham","nonembellished","amidship"];
	var number = Math.floor((Math.random() * 198) + 0);
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





// Reflection
//what was the most difficult part of this challenge?
// I think getting started and figuring out how your code was going to display. I didn't know how to interact with the console in node so I came up with a way to create an interaction via the html page.

//What did you learn about creating objects and functions that interact with one another?
//Since this is my first week working with Javascript, I'm still learning how functions and objects work. I mostly used objects and functions as I did in Ruby.

//Did you learn about any new built-in methods you could use in your refactored solution? If so, what were they and how do they work?
//I did not find any built-in methods that helped me to refactor a solution. I will continue to absorb info about Javascript's built-in methods. In my refactored code, I did add more random words to choose from to improve the game play. There are now 199 possible words in the game.

//How can you access and manipulate properties of objects?
// By calling them with . notation and setting them equal to a value. Or in the bracket form, you can use the property:value notation.