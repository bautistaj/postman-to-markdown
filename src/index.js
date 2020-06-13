'use strict'

const args = require(`minimist`)(process.argv.slice(2))
const fs = require(`fs`)
const chalk = require(`chalk`)
const { createStructureOfMarkdown, writeFile } = require('./util')

/**
 * Init execution
 */
function init(){
  const path = args[`_`];
  if(path.length > 0){
    console.log(chalk.green(`Reading file ${path[0]}`))
    
    if(fs.existsSync(path[0])){
      console.log(chalk.green(`Generating markdown file ...`))
      
      let rawData = fs.readFileSync(path[0]);
      const json = JSON.parse(rawData)
      let markdown = createStructureOfMarkdown(json)
      markdown += '_________________________________________________\n'
      markdown += 'Author: [bautistaj](https://github.com/bautistaj)\n\n'
      markdown += 'Package: [postman-to-markdown](https://github.com/bautistaj)\n'

      const fileName = path[0].split('.')
      writeFile(markdown, fileName[0])
      
    }else {
      console.log(chalk.red(`Path is not valid or the file not exist.`));  
    }
  }else{
    console.log(chalk.red(`Path of json file is required.`));
  }
}

module.exports = { init }
