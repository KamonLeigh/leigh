#!/usr/bin/env node

const handleError = require('cli-handle-error')
const chalk = require("chalk");
const log = console.log;
const githubColour = chalk.hex(`#6cc644`).bold.inverse;
const dim = chalk.dim;
const italic = chalk.italic;
const init = require("./utils/init");
const args = process.argv.slice(2);

// Alerts
const sym = require("log-symbols");
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword("orange").inverse;
const error = chalk.red.bold.inverse;

const socialInfo = `${githubColour(` Github `)} ${dim(`https://github.com/KamonLeigh`)}`;

const printSocial = args.indexOf('--no-social') === -1;
const social = printSocial ? socialInfo : ``;



(() => {
  // process.on('unhandledRejection', (err) => {
  //     console.log(`unhandledRejection`, err)
  // })
  init();

//   const error = new Error(`something went wrong`);

//   handleError(`CUSTOM ERROR`, error);
  log(
      `
    Hi!
        
    ${italic(`I am a fullstack developer from London :-)`)}
    ${social}
        `);

  console.log(`
    ${sym.success} ${success(` SUCCESS `)} Thanks for checking out my cli
        `);
})();
//NB chmod +x index.js
