class Shape {
    constructor(color){
        this.color = color
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
    constructor(color) {
        super(color)
    }
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.color}" />`
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
const instanceTriangle = new Triangle("blue")
const instanceSquare = new Square("blue")
instanceCircle.render()
instanceTriangle.render()
instanceSquare.render()


  module.exports={
    Triangle,
    Circle,
    Square
  }