const dictFile = require("3esl.txt");

var gameSettings = {
    timed: false, //eventually can be added, actual game only gives 30 seconds
    secondsPerGame: 30,
    numOfPlayers: 1,
    numberOfLetters: 9, //number of letters for the players to use
}

var players = []
var letterList = []; //letters that the player tries to create the longest word from

/**
 * Will create a 'profile' for each of the players in the game
 * 
 * Ideally will be used when frontend is implemented via forms to get the info
 */
function populatePlayers() {
    for (let i = 0; i < gameSettings.numOfPlayers; i++) {
        players.push({
            "name": "",
            "id": i,
            "currWord": "",
            "score": 0
        })
    }
}

/**
 * Possible letters to get.
 * 
 * Not sure if the real game has true random or if certain letters are more common
 */
var vowels = ['a', 'e', 'i', 'o', 'u'];
var con = ['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

//useless atm but i felt productive when i did it
function setTimed(inp) {
    gameSettings.timed = inp;
}

//useless atm but i felt productive when i did it
function setNumOfPlayers(val) {
    gameSettings.numOfPlayers = val;
}

/**
 * Will check if the provided word exists inside of the default dictionary
 * 
 * @param {String} word 
 * @returns {boolean}
 */
function checkIfWordExists(word) {
    word = word.trim().toLowerCase();
    return (word in dictFile) //not sure if this works lol, probably definitely not :)
}

/**
 * Will allow the player to choose how many vowels and constants they want
 * 
 * Mulitple players alternate who chooses.
 */
function populateLetterList() {
    for (let i = 0; i < gameSettings.numberOfLetters; i++) {
        var choice = 'todo' //get input from player - based on frontend
        if (choice == 'vowel') {
            var t = random(vowels.length());
            letterList.push(vowels[t])
        }
        else if (choice == 'con') {
            var t = random(con.length());
            letterList.push(con[t])
        }
        //show the new letter before they choose again
    }
}

/**
 *  Get the players words and set it to their profile
 */
function getPlayerWords() {
    for (let i = 0; i < gameSettings.numOfPlayers; i++) {
        var playerWord = "test"; //TODO get input from user
        players[i].currWord = playerWord;
    }
}

var bigNums = [25,50,75];

/**
 * Creates an array of 6 numbers. The user picks the number of "big numbers" (25,50, or 75), the rest will be between 1 and 10
 * @returns 
 */
function pickNumbers(){
    let nums = [];
    let numBig = 2; //TODO: get usr input
    for(let i=0; i<numBig; i++){
        nums.push(bigNums[Math.floor(Math.random()*bigNums.length)]);
    }
    for(let i=0; i<6-numBig; i++){
        nums.push(Math.ceil(Math.random()*10));
    }
    return nums;
}

//from https://stackoverflow.com/a/12646864
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Creates a target number from the chosen numbers using random operations
 * @returns a random number that can be created from the list of numbers
 */
function generateAnswer(numbers){
    shuffleArray(numbers);
    let numOps = Math.ceil(Math.random()*5);
    let res = 0;
    for(let i=0; i<numOps; i++){
        let num1 = numbers.pop();
        let num2 = numbers.pop();
        let retNum;
        let operation = Math.floor(Math.random()*4);
        switch(operation){
            case 0: {retNum = num1+num2; break;}
            case 1: {retNum = num1-num2; break;}
            case 2: {retNum = num1*num2; break;}
            case 3: {retNum = num1/num2; break;}
        }
        numbers.push(retNum);
        res = retNum;
    }
    return res;
}

/**
 * Finds the player(s) with the longest valid word based.
 * 
 * @returns index of winning player
 */
function calculateWinner() {
    var currBest = 0;
    var bestPlayer = [];
    for (let i = 0; i < gameSettings.numOfPlayers; i++) {
        if (checkIfWordExists(players[i].currWord)) {
            if (players[i].currWord.length() > currBest) {
                bestPlayer = [i]
                currBest = players[i].currWord.length();
            }
            if (players[i].currWord.length() == currBest) {
                bestPlayer.push(i);
            }
        }
    }
    return bestPlayer;
}

/**
 * Adds the winner's score to their total score
 */
function addScores() {
    var win = calculateWinner();
    for (let j = 0; j < win; j++) {
        players[j].score += players[j].currWord.length();
    }
}

/**
 * Ends the round
 * Resets all players words to blank
 */
function endRound() {
    addScores();
    for (let i = 0; i < gameSettings.numOfPlayers; i++) {
        players[i].currWord = "";
    }
}

//order of operations
function playGame() {
    populatePlayers();
    populateLetterList();
    getPlayerWords();
    endRound();
}

playGame();