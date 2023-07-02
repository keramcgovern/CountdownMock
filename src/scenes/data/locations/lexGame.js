
/* 
 * The market is a store. Nothing too special here except some quirks to how Fresh Food works:
 * 		- You get a happiness bonus the first time you buy Fresh Food per week only (so it tracks
 * 			this in scene.player.turn_flags)
 *    - If you buy X weeks of food, it just adds X Fresh Food items to your inventory at once.
 * Neither the Lottery Tickets or Newspaper systems are implemented.
 */
module.exports =
{
	"id": "lexGame",
	"item_color": 0x010d36,
	"item_font": "large",
	"item_hover": false,
	"item_align": "center",
	"items": function (scene, location) {
		var runningList = [...scene.gamestate.letterList];
		while (runningList.length < scene.gamestate.numberOfLetters) {
			runningList.push({ letter: " " });
		}

		var finList = [];
		for (a in runningList) {
			finList.push({
				"name": runningList[a].letter,
				"x": 20,
				"y": 20,
			});
		}
		return finList
	},
	"buttons": function (scene, location) {
		var btnList = [];

		var currVowels = 0;
		var currCons = 0;

		if (scene.gamestate.letterList.length < scene.gamestate.numberOfLetters) {
			for (i in scene.gamestate.letterList) {
				var letter = scene.gamestate.letterList[i];
				if (letter.type == "vowel") currVowels++;
				else if (letter.type == "consonant") currCons++;
			}

			if (currVowels < scene.gamestate.numberOfLetters - 4) {
				btnList.push(
					{
						"image": "btn-vowel",
						"name": "vowel",
						"onclick": function (scene, location) {
							scene.pullLetter(location, 1);
						}
					})
			}

			if (currCons < scene.gamestate.numberOfLetters - 3) {
				btnList.push(
					{
						"image": "btn-consonant",
						"name": "cons",
						"onclick": function (scene, location) {
							scene.pullLetter(location, 0);
						}
					})
			}
		}

		if (scene.gamestate.letterList.length == scene.gamestate.numberOfLetters) {
			btnList.push(
				{
					"image": "btn-enter-word",
					"name": "enterWord",
					"onclick": function (scene, location) {
						scene.show_location("keyboard");
					}
				})
		}

		return btnList;
	}
}