
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
	"buttons": function (scene, location) {
		return [
			{
				"image": "btn-consonant",
				"onclick": function (scene, location) {
					scene.pullLetter("c");
				}
			},
			{
				"image": "btn-vowel",
				"onclick": function (scene, location) {
					scene.pullLetter("v");
				}
			}]
	}
}