module.exports = function (scene, letter) {
    scene.player.currWord = scene.player.currWord.concat(letter.toUpperCase());
    scene.show_location("keyboard");
}