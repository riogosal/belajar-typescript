import { NewCar, NewCarTanpaNama } from "./lesson1/car";
import {guessNumber,kekuatanKristal,findRock,fragment,fragmentOutput} from "./pr-1/jothan/AngkaAjaib";
import { Car as CarClass } from "./lesson1/car-alternative";

// const myCar = NewCar("BMW", 100);
// console.log(myCar.name, myCar.speed);
// myCar.drive();

// const mobilTanpaNama = NewCarTanpaNama(150);
// console.log(mobilTanpaNama.name, mobilTanpaNama.speed);
// mobilTanpaNama.drive();

// const myOtherCar = new CarClass("BMW", 100);
// console.log(myOtherCar.name, myOtherCar.speed);
// myOtherCar.drive();


// const newGuessNumber = guessNumberMagic()
// const newKekuatanKristal = kekuatanKristal();

const newFindRock1=findRock({
    name:"fragmen api",
    color:"merah",
    power:5
})
const newFindRock2=findRock({
    name:"fragmen air",
    color:"biru",
    power:4
})
const newFindRock3=findRock({
    name:"fragmen tanah",
    color:"coklat",
    power:3
})

// const batuAjaib:fragment=[newFindRock1,newFindRock2,newFindRock3]
// console.log(batuAjaib)

fragmentOutput([newFindRock1, newFindRock2, newFindRock3])

