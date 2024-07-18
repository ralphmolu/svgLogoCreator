// The parent class; has 4 properties and 2 methods; child classes will import color
class Shapes {
  constructor(color, text, shapeEl, textCol) {
    this.color = color;
    this.text = text;
    this.shapeEl = shapeEl;
    this.textCol = textCol;
  }

  setColor(color) {
    if (color) {
      this.color = color;
    }
  }

  // render() method will make the final body of the .svg file. 'this.shapeEl' will be the element rendered by one of the child-classes, as it is passed as the third argument for a new instance of 'Shapes'
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${
      this.shapeEl
    }\n<text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textCol.toLowerCase()}">${
      this.text
    }</text>\n</svg>`;
  }
}

module.exports = Shapes;
