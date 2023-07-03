module.exports = function (scene, word) {

    var p = require("./3esl.json");

    var tempLetterList = [...scene.gamestate.letterList];
    var letterFound;

    for (var j = 0; j < word.length; j++) {
        letterFound = false;
        for (var k = 0; k < tempLetterList.length; k++) {
            if (tempLetterList[k].letter == word[j]) {
                letterFound = true;
                tempLetterList.splice(k, 1);
                break;
            }
        }
        if (!letterFound) return false;
    }

    for (var i = 0; i < p.dictList.length; i++) {
        if (p.dictList[i].toLowerCase() == word.toLowerCase()) {
            return true
        }
    }

    return false
}