class Shape {
    constructor(color, text, textColor){
        this.color = color
        this.text = text
        this.textColor = textColor
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
  }

  class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }

    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" fill="${this.textColor}" >${this.text}</text>`
  }
  }

  class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return`<rect x="150" y="100" fill="${this.color}" />`
    }
  }

const instanceCircle = new Circle("blue")
const instanceCircle2 = new Circle("red")
const instanceTriangle = new Triangle("blue")
const instanceSquare = new Square("blue")
instanceCircle.render()
instanceTriangle.render()
instanceSquare.render()
instanceCircle2.render()


  module.exports={
    Triangle,
    Circle,
    Square
  }


'<svg height="100" width="100"> <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />Sorry, your browser does not support inline SVG. </svg>'