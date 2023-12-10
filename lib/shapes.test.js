const {Triangle,Circle, Square}=require("./shapes")
// shape.setColor("blue");

describe("A a general message about things that will be tested",()=>{
    describe("A a more specific message about things that will be tested ",()=>{
        it("A a specific message about what will be tested b",()=>{
            const color = "blue"
            const shape = new Triangle(color);
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
        })
        it("capybara",()=>{
            const color = "blue"
            const shape = new Circle(color);
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
        })
        it("monke",()=>{
            const color = "blue"
            const shape = new Square(color);
            expect(shape.render()).toEqual(`<rect x="150" y="100" fill="${color}" />`);
        })
        
    })
})
