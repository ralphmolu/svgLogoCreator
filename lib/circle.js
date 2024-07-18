//Imports 'Shapes' class
const Shapes = require("./shapes");
// Circle inherits properties/methods of Shapes class
class Circle extends Shapes {
  constructor(color) {
    super(color);
    this.shape = "circle";
  }

  render() {
    // This line defines the size and position of the circle, and takes in the color from the constructor property 'this.color'
    return `<circle cx="150" cy="100" r="80" fill="${this.color.toLowerCase()}" />`;
  }
}

module.exports = Circle;
