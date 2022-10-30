// * Const
const div = document.getElementById("js-div");
class Marker {
  //* Variables
  _color = "default color";
  _inkAmount = null;
  //* Function
  constructor(color, inkAmount) {
    if (color && 0 <= inkAmount <= 101) {
      this._color = color;
      this._inkAmount = +inkAmount;
    }
  }

  // * Method
  showColor() {
    const span = document.createElement("span");
    span.innerText = `Color of marker is ${this._color}`;
    div.appendChild(span);
  }

  showPercent() {
    const span = document.createElement("span");
    span.innerText = `Capicity of marker is ${this._inkAmount}%`;
    div.appendChild(span);
  }
  enterText() {
    const span = document.createElement("span");
    const text = prompt("Enter text");
    span.innerText = text;
    div.appendChild(span);
    for (let i = 0; i <= text.length; i++) {
      this._inkAmount -= 0.5;
      if (this._inkAmount === 0) {
        return (span.innerText = `${text} - A lot of characters are out of ink`);
      }
    }
    span.style.color = this._color;
    span.innerText = `${text} - Ink residue = ${this._inkAmount} %`;
  }
}
class ReFillMarker extends Marker {
  reFillMarker(amount) {
    const span = document.createElement("span");
    span.innerText = `New capicity of marker is ${amount}%`;
    this._inkAmount = amount;
    div.appendChild(span);
  }
}

const markerOrange = new Marker("orange", "5");
markerOrange.showColor();
markerOrange.showPercent();
markerOrange.enterText();
const reFillMarker = new ReFillMarker("silver", "5");
reFillMarker.reFillMarker(50);
reFillMarker.enterText();
export default Marker;
