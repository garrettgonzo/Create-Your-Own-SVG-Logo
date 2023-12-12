const inquirer = require('inquirer');
const fs = require("fs")
const path = require("path")
const generateSVG = require("./utils/generateMarkdown")
const mediaArray = ["Triangle", "Circle", "Square"];
const colorArray = ["Blue", "Green", "Red"]
const questions = [
    {
      type: 'input',
      name: 'text',
      message: "What's your Logo's name? (Enter three chracters)",
    },
    {
      name: 'color',
      type: "list",
      message: "What Color do you want?",
      choices: colorArray,
      default: "Medium",
    },
    {
      name: 'shape',
      type: "list",
      message: "What Shape do you want?",
      choices: mediaArray,
      default: "Medium",
    },
    {
      name: 'textColor',
      type: "list",
      message: "What text color do you want?",
      choices: colorArray,
      default: "Medium",
    },
  ];
  inquirer.prompt(questions).then(answers => {
    // console.log(`Created ${answers.name}!`);
    console.log(answers);
    const svg = generateSVG(answers)
    // console.log(svg)
    fs.writeFile(path.join(__dirname, "MyLogo.svg"), ` ${svg} `, function(err){
        if(err) throw err
        // console.log(answers.name);
      //   console.log("sucess")
    })
  //   console.log(answers);
  });



//   function add(a,b){
//     return a + b
//   }
// const myNum = 55
//   const total = add(myNum,7)