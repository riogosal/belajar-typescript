"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCarTanpaNama = exports.NewCar = void 0;
function NewCar(name, speed) {
    return {
        name: name,
        speed: speed,
        drive: () => {
            console.log("driving my car");
            return;
        },
    };
}
exports.NewCar = NewCar;
function NewCarTanpaNama(speed) {
    return {
        name: "Tanpa Nama",
        speed: speed,
        drive: function () {
            console.log("driving my", this.name, "at", this.speed, "km/h");
        },
    };
}
exports.NewCarTanpaNama = NewCarTanpaNama;
//# sourceMappingURL=car.js.map