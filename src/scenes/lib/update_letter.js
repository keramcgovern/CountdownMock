module.exports = function (scene, val) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var con = ['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    if (val) {
        scene.gamestate.letterList.push(vowels[getRandomInt(vowels.length)].toUpperCase());
    }
    else {
        scene.gamestate.letterList.push(con[getRandomInt(con.length)].toUpperCase());
    }

    scene.show_location(scene.player.location, false);
}