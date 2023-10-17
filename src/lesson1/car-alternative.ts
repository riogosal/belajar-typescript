export class Car {
  name: string;
  speed: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
  }

  drive(): void {
    console.log("driving my car");
  }
}
