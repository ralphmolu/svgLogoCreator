//Imports 'Shapes' class
const Shapes = require("./shapes");
// Triangle inherits properties/methods of Shapes class
class Triangle extends Shapes {
  constructor(color) {
    super(color);
    this.shape = "triangle";
  }

  render() {
    // This line defines the size and position of the triangle, and takes in the color from the constructor property 'this.color'
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color.toLowerCase()}" />`;
  }
}

module.exports = Triangle;
