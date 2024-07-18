//Imports 'Shapes' class
const Shapes = require("./shapes");
// Square inherits properties/methods of Shapes class
class Square extends Shapes {
  constructor(color) {
    super(color);
    this.shape = "square";
  }

  render() {
    // This line defines the size and position of the square, and takes in the color from the constructor property 'this.color'
    return `<rect x="75" y="30" width="150" height="150" fill="${this.color.toLowerCase()}" />`;
  }
}

module.exports = Square;
