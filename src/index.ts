'use strict'

import { createStructureOfMarkdown } from './util';
import { writeFile } from './util/write';

import fs from 'fs';
import minimist from 'minimist';
import chalk from "chalk";

/**
 * Init execution
 */
const args = minimist(process.argv.slice(2));
console.log(args);
const path = args[`_`];
export function init() {
  if (path.length > 0) {
    console.log(chalk.green(`Reading file ${path[0]}`))

    if (fs.existsSync(path[0])) {
      console.log(chalk.green(`Generating markdown file ...`))

      let rawData = fs.readFileSync(path[0]);
      const json = JSON.parse(rawData.toString());
      let markdown = createStructureOfMarkdown(json)
      markdown += '_________________________________________________\n'
      markdown += 'Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)\n'
      const fileName = path[0].split('.')
      writeFile(markdown, fileName[0])

    } else {
      console.log(chalk.red(`Path is not valid or the file not exist.`));
    }
  } else {
    console.log(chalk.red(`Path of json file is required.`));
  }
}

export default { init }

//# sourceMappingURL=index.js.map
// Language: typescript
// Path: src/index.ts
