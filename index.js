const inquirer = require('inquirer');
const fs = require("fs")
const path = require("path")
const generateSVG = require("./utils/generateMarkdown")
const mediaArray = ["Triangle", "Circle", "Square"];
const colorArray = ["White", "Green", "Red", "Blue"]
const questions = [
    {
      type: 'input',
      name: 'text',
      message: "What's your Logo's name? (Enter three chracters)",
    },
    {
      name: 'shape',
      type: "list",
      message: "What shape do you want?",
      choices: mediaArray,
      default: "Medium",
    },
    {
      name: 'color',
      type: "list",
      message: "What shape color do you want?",
      choices: colorArray,
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
    // console.log(answers);
    const svg = generateSVG(answers)
    // console.log(svg)
    fs.writeFile(path.join(__dirname, "example.svg"), ` ${svg} `, function(err){
        if(err) throw err
        // console.log(answers.name);
      //   console.log("sucess")
    })
  //   console.log(answers);
  });
