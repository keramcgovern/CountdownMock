/* 
 * This is the default player settings, which initializes the game and sets up
 * its variables. You can change these for debugging purposes.
 */

module.exports = {
	"background_color": 0xdac6e2, //background color for player image
	"location": "menu", //where they are right now, or where they start
	"turn_flags": {}, //this is cleared every turn
	"name": "Player 1",
	"id": null,
	"currWord": "",
	"score": 0,
	"wordSubmission": {
		"word": "",
		"valid": false
	},
	"enterName": false,
	"enterWord": false,
}
