class Circle {
  //* Variables
  _radius = 5;
  PI = 3.14;
  //* Function
  constructor(radius) {
    if (radius) {
      this._radius = radius;
    }
  }
  //* Get and Set
  get radius() {
    console.log(`Radius circle = ${this._radius}`);
  }
  get diametr() {
    console.log(`Diametr circle = ${this._radius * 2}`);
  }
  set radius(newRadius) {
    this._radius = newRadius;
    console.log("New radius is: ", this._radius);
  }
  // * Method
  circleArea() {
    const area = Math.pow(this._radius, 2) * this.PI;
    console.log(`Area of circle is ${area.toFixed(2)}`);
  }
  circleLength() {
    const circleLength = 2 * this.PI * this._radius;
    console.log(`Length of circle is ${circleLength.toFixed(2)}`);
  }
}

const circle1 = new Circle("5");
circle1.radius;
circle1.radius = 10;
circle1.diametr;
circle1.circleArea();
circle1.circleLength();

export default Circle;