export type Car = {
  name: string;
  speed: number;
  drive: () => void; // drive func() void
};

export function NewCar(name: string, speed: number): Car {
  return {
    name: name,
    speed: speed,
    drive: () => {
      console.log("driving my car");
      return;
    },
  };
}

export function NewCarTanpaNama(speed: number): Car {
  return {
    name: "Tanpa Nama",
    speed: speed,
    drive: function () {
      console.log("driving my", this.name, "at", this.speed, "km/h");
    },
  };
}
