
module.exports =
{
	"id": "menu",
	"item_color": 0x010d36,
	"item_font": "large",
	"item_hover": false,
	"item_align": "center",
	"buttons": function (scene, location) {
		var btnList = [];

		console.log("player list: ", scene.gamestate.players);

		if (scene.gamestate.players.length < 5) {
			btnList.push({
				"name": "Add new player",
				"image": "btn-vowel",
				"onclick": function (scene, location) {
					scene.show_location("createPlayer");
				}
			})
		}

		if (scene.gamestate.players.length > 1) {
			btnList.push({
				"name": "lettersGame",
				"image": "btn-done",
				"onclick": function (scene, location) {
					scene.show_location("lexGame");
				}
			})
			btnList.push({
				"name": "numbersGame",
				"image": "btn-consonant",
				"onclick": function (scene, location) {
					scene.show_location("lexGame");
				}
			})
		}

		return btnList;
	}
}