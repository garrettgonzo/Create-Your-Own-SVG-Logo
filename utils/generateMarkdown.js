
//   function generateMarkdown(data) {
//     return`# ${data.name}
//     ${renderLicenseBadge(data.license)}

const { Circle } = require("../lib/shapes");

    
//     ## Table of Contents
//     #### [Description](#description)
//     #### [Installation](#installation)
//     #### [Usage](#usage)
//     #### [License](#license)
//     #### [Contributing](#contributing)
//     #### [Tests](#tests)
//     #### [Questions](#questions)
    
//   ## Description
//   ${data.discription}
  
//   ## Installation
//   ${data.installation}
  
//   ## Usage
//   ${data.usage}
  
//   ## License
//   This project is licenced under the ${data.license} license.
  
//   ## Contributing
//   ${data.contributing}
  
//   ## Tests
//   ${data.tests}
  
//   ## Questions
//   My GitHub Profile: https://github.com/${data.questions}
//   \nMy Email: ${data.email}
  
//   `;
//   }
  
//   module.exports = generateMarkdown;


function generateSVG(data) {

    let chosenShape;
    if (data.shape === "Circle") {
        chosenShape = new Circle(data.color, data.text, data.textColor)
    } else if ( data.shape ===""){
        chosenShape = ""
    }


    return `Created your ${data.name} logo! Copy and paste the text below.

    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape.render()}
    </svg>
`;
}

  
  
  module.exports = generateSVG;