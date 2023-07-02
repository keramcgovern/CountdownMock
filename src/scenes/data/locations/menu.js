
module.exports =
{
	"id": "menu",
	"item_color": 0x010d36,
	"item_font": "large",
	"item_hover": true,
	"item_align": "center",
	"items": function (scene, location) {
		var itmList = [];

		console.log("player list: ", scene.gamestate.players);

		/*
		if (scene.gamestate.players.length < 5) {
			itmList.push({
				"name": "Create New Player",
				"image": "btn-new-player",
				"y": 10,
				"x": 50,
				"use": function (scene, location) {
					scene.show_location("createPlayer");
				}
			})
		}*/

		if (scene.gamestate.players.length >= 1) {
			itmList.push({
				"name": "Letters Game",
				"image": "btn-letters",
				"y": 40,
				"x": 30,
				"use": function (scene, location) {
					scene.show_location("lexGame");
				}
			})
			itmList.push({
				"name": "Numbers Game",
				"image": "btn-numbers",
				"y": 60,
				"x": 30,
				"use": function (scene, location) {
					scene.show_location("lexGame");
				}
			})
		}

		return itmList;
	},
	/*
	"buttons": function (scene, location) {
		var btnList = [];

		console.log("player list: ", scene.gamestate.players);

		if (scene.gamestate.players.length < 5) {
			btnList.push({
				"name": "createPlayer",
				"image": "btn-new-player",
				"y": 10,
				"x": 50,
				"onclick": function (scene, location) {
					scene.show_location("createPlayer");
				}
			})
		}

		if (scene.gamestate.players.length > 1) {
			btnList.push({
				"name": "lettersGame",
				"image": "btn-letters",
				"y": 40,
				"x": 30,
				"onclick": function (scene, location) {
					scene.show_location("lexGame");
				}
			})
			btnList.push({
				"name": "numbersGame",
				"image": "btn-numbers",
				"y": 60,
				"x": 30,
				"onclick": function (scene, location) {
					scene.show_location("lexGame");
				}
			})
		}

		return btnList;
	}*/
}