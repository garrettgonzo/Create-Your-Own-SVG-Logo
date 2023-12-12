const { Circle, Triangle, Square } = require("../lib/shapes");

function generateSVG(data) {

    let chosenShape;
    if (data.shape === "Circle") {
        chosenShape = new Circle(data.color, data.text, data.textColor)
    } else if ( data.shape ==="Triangle"){
        chosenShape = new Triangle(data.color, data.text, data.textColor)
    } else if ( data.shape ==="Square"){
        chosenShape = new Square(data.color, data.text, data.textColor) 
    }


    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape.render()}
    </svg>
`;
}

  module.exports = generateSVG;