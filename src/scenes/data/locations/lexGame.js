
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
			runningList.push(" ");
		}

		var finList = [];
		for (a in runningList) {
			finList.push({
				"name": runningList[a],
				"x": 20,
				"y": 20,
			});
		}
		return finList
	},
	"buttons": function (scene, location) {
		if (scene.gamestate.letterList.length < scene.gamestate.numberOfLetters) {
			return [
				{
					"image": "btn-vowel",
					"onclick": function (scene, location) {
						scene.pullLetter(1);
					}
				}, {
					"image": "btn-consonant",
					"onclick": function (scene, location) {
						scene.pullLetter(0);
					}
				}
			]
		}
	}
}