"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./lesson1/car");
const car_alternative_1 = require("./lesson1/car-alternative");
const myCar = (0, car_1.NewCar)("BMW", 100);
console.log(myCar.name, myCar.speed);
myCar.drive();
const mobilTanpaNama = (0, car_1.NewCarTanpaNama)(150);
console.log(mobilTanpaNama.name, mobilTanpaNama.speed);
mobilTanpaNama.drive();
const myOtherCar = new car_alternative_1.Car("BMW", 100);
console.log(myOtherCar.name, myOtherCar.speed);
myOtherCar.drive();
//# sourceMappingURL=main.js.map