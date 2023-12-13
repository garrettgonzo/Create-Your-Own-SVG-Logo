class Shape {
    constructor(color, text, textColor){
        this.color = color
        this.text = text
        this.textColor = textColor
    }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor)
    }
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
    }
  }

  class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
  }
  }

  class Square extends Shape {
    constructor(color, text, textColor) {
      super(color, text, textColor)
    }
    render(){
        return`<rect x="75" y="25" width="150" height="150" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
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
