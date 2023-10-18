"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AngkaAjaib_1 = require("./pr-1/jothan/AngkaAjaib");
const newFindRock1 = (0, AngkaAjaib_1.findRock)({
    name: "fragmen api",
    color: "merah",
    power: 5
});
const newFindRock2 = (0, AngkaAjaib_1.findRock)({
    name: "fragmen air",
    color: "biru",
    power: 4
});
const newFindRock3 = (0, AngkaAjaib_1.findRock)({
    name: "fragmen tanah",
    color: "coklat",
    power: 3
});
(0, AngkaAjaib_1.fragmentOutput)([newFindRock1, newFindRock2, newFindRock3]);
//# sourceMappingURL=main.js.map