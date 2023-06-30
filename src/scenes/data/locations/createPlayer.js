
module.exports =
{
    "id": "createPlayer",
    "item_color": 0x010d36,
    "item_font": "large",
    "item_hover": false,
    "item_align": "center",
    "buttons": function (scene, location) {
        var btnList = [];

        var new_player = require('../../data/player.js');
        var player = { ...new_player };

        btnList.push({
            "name": "new_player",
            "image": "btn-vowel",
            "onclick": function (scene, location) {
                scene.gamestate.players.push(player)
                scene.show_location("menu");
            }
        })

        return btnList;
    }
}