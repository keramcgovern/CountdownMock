module.exports = function (scene, letter) {
    console.log(letter);
    scene.player.currWord = scene.player.currWord.concat(letter);
    console.log(scene.player.currWord);
    scene.show_location("keyboard");
}