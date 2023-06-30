//calculates goal scores for a given player
module.exports = function (scene, player) {
	if (typeof player == "undefined") player = scene.player;
	console.log(scene.gamestate, player);

	return {
		"score": 0
	}

}