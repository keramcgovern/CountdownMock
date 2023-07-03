
module.exports =
{
    "id": "keyboard",
    "item_color": 0x010d36,
    "item_font": "large",
    "item_hover": true,
    "item_align": "left",
    "items": function (scene, location) {
        var itmList = [
            {
                "name": scene.player.currWord,
                "x": 20,
                "y": 0
            }
        ];

        const letters = [
            'a', 'b', 'c', 'd',
            'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p',
            'q', 'r', 's', 't',
            'u', 'v', 'w', 'x',
            'y', 'z'
        ];
        for (let i = 0; i < letters.length; i++) {
            var y;
            var x;
            (i < 13) ? y = 20 : y = 70;
            (i == 13) ? x = -(10 * 13) : x = 10;
            itmList.push({
                "name": letters[i].toUpperCase(),
                "use": function (scene, location) {
                    scene.enterWord(letters[i])
                },
                "y": y,
                "x": x
            })
        }

        return itmList;
    },
    "buttons": function (scene, location) {
        return [{
            "image": "btn-enter-word",
            "name": "enter",
            "onclick": function (scene, location) {
                if (scene.player.enterWord) {
                    scene.player.wordSubmission.word = scene.player.currWord;
                    scene.player.wordSubmission.valid = scene.checkSubmission(scene.player.wordSubmission.word);
                    console.log(scene.player.wordSubmission.valid, scene.player.wordSubmission.word)
                    scene.show_location("winner");
                    scene.player.enterWord = false;
                    scene.resetWordGame()
                }
                else if (scene.player.enterName) {
                    scene.player.enterName = scene.player.currWord;
                    scene.show_location("menu");
                    scene.player.enterName = false;
                }
            }
        }]
    }
}