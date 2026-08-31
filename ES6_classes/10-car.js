const cloneSymbol = Symbol("clone");

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this[cloneSymbol] = this.constructor;
  }

  cloneCar() {
    const CarClass = this[cloneSymbol];
    return new CarClass();
  }
}
```
