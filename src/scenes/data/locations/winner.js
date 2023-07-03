
module.exports =
{
    "id": "winner",
    "item_color": 0x010d36,
    "item_font": "large",
    "item_hover": true,
    "item_align": "left",
    "items": function (scene, location) {
        var itmList = [
            {
                "name": `${scene.player.name}'s entry: \n${scene.player.wordSubmission.word}\n\n is ${scene.player.wordSubmission.valid ? "VALID" : "INVALID"}`,
                "x": 0,
                "y": 0
            }
        ];

        return itmList;
    }
}