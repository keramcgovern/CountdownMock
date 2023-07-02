
module.exports =
{
    "id": "keyboard",
    "item_color": 0x010d36,
    "item_font": "large",
    "item_hover": true,
    "item_align": "center",
    "items": function (scene, location) {
        var itmList = [];

        const letters = [
            'a', 'b', 'c', 'd',
            'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p',
            'q', 'r', 's', 't',
            'u', 'v', 'w', 'x',
            'y', 'z'
        ];
        for (i in letters) {
            itmList.push({
                "name": letters[i],
                "use": function (scene, location) {
                    scene.enterWord(letters[i])
                }
            })
        }

        return itmList;
    }
}