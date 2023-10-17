import { NewCar, NewCarTanpaNama } from "./lesson1/car";
import { Car as CarClass } from "./lesson1/car-alternative";

const myCar = NewCar("BMW", 100);
console.log(myCar.name, myCar.speed);
myCar.drive();

const mobilTanpaNama = NewCarTanpaNama(150);
console.log(mobilTanpaNama.name, mobilTanpaNama.speed);
mobilTanpaNama.drive();

const myOtherCar = new CarClass("BMW", 100);
console.log(myOtherCar.name, myOtherCar.speed);
myOtherCar.drive();
