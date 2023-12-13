const {Triangle,Circle, Square}=require("./shapes")

describe("A a general message about things that will be tested",()=>{
    describe("A a more specific message about things that will be tested ",()=>{
        it("triangle gen",()=>{
            const color = "blue"
            const textColor = "white"
            const text = "SVG"
            const shape = new Triangle(color, text, textColor);
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}" >${text}</text>`);
        })
        it("circle gen",()=>{
            const color = "blue"
            const textColor = "white"
            const text = "SVG"
            const shape = new Circle(color, text, textColor);
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}" >${text}</text>`);
        })
        it("square gen",()=>{
            const color = "blue"
            const textColor = "white"
            const text = "SVG"
            const shape = new Square(color, text, textColor);
            expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="${color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}" >${text}</text>`);
        })
        
    })
})
