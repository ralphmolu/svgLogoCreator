// This file runs the main program-- the inquirer prompts that will take user input, and output a .svg logo file based on that input.
// This requires the use of other modules in this directory, as well as the 'fs' and 'inquirer' modules; these are all imported below
const fs = require("fs");
const inquirer = require("inquirer");
const Shapes = require("./shapes");
const Triangle = require("./triangle");
const Square = require("./square");
const Circle = require("./circle");

// This function will be exported and run by the 'index.js' in the root directory. It takes the desired path of the logo.svg file as an argument, so that this can be easily changed depending on user's wishes
const genSvg = (logoPath) => {
  inquirer
    // Takes 4 prompts: 3-character logo text; desired text color; desired shape (Triangle, Circle, or Square); desired icon color
    .prompt([
      {
        type: "input",
        name: "text",
        message:
          "What would you like to be printed on your logo? (Input THREE characters!)\n:",
        default: "LOL",
        // this filter parameter/function will return an error if the user input is longer than 3 characters. This prompt cannot be passed until a valid input is given!
        filter: (input) => {
          return new Promise((resolve, reject) => {
            if (input.length <= 3) {
              resolve(input);
            } else {
              reject(new Error("Must be 3 characters or less!"));
            }
          });
        },
      },
      {
        type: "input",
        message:
          "What color would you like the text to be? (Response can be color name OR hexadecimal number)\n:",
        name: "textcolor",
      },
      {
        type: "list",
        message: "Which shape would you like your icon to be?\n:",
        name: "shape",
        choices: ["Triangle", "Circle", "Square"],
      },
      {
        type: "input",
        message:
          "What color would you like your icon to be? (Response can be color name OR hexadecimal number)\n:",
        name: "shapecolor",
      },
    ])
    .then((response) => {
      // destructures the response into its 4 properties
      const { text, textcolor, shape, shapecolor } = response;
      // this 'myShape' declaration and the following if-conditionals will create a class-based object based on the shape chosen by the user
      let myShape;
      if (shape === "Triangle") {
        myShape = new Triangle(shapecolor);
      } else if (shape === "Square") {
        myShape = new Square(shapecolor);
      } else if (shape === "Circle") {
        myShape = new Circle(shapecolor);
      }
      // the myLogo object will be an instance of the Shapes class, and take arguments from the user inputs, as well as the rendered element from the myShape.render() method (drawing on 1 of the 3 shape modules)
      const myLogo = new Shapes(shapecolor, text, myShape.render(), textcolor);
      // The body of the logo.svg file is created from this method
      const svgData = myLogo.render();
      // Uses the 'fs' module to create the file; path of the file is defined by the argument passed into the genSvg() function, wherever it is called (in the index.js file, in our case)
      fs.writeFile(logoPath, svgData, (error) => {
        if (error) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("Generated logo.svg");
      });
    });
};

module.exports = genSvg;
