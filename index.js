#!/usr/bin/env node

const pkgJSON = require("./package.json");
const chalk = require("chalk");
const log = console.log;
const githubColour = chalk.hex(`#6cc644`).bold.inverse;
const dim = chalk.dim;
const italic = chalk.italic;
const init = require("./utils/init");
// Alerts
const sym = require("log-symbols");
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword("orange").inverse;
const error = chalk.red.bold.inverse;

(() => {
  // process.on('unhandledRejection', (err) => {
  //     console.log(`unhandledRejection`, err)
  // })
  init();
  log(
      `
    Hi!
        
    ${italic(`I am a fullstack developer from London :-)`)}
        
    ${githubColour(` Github `)} ${dim(`https://github.com/KamonLeigh`)}
        `);

  console.log(`
    ${sym.success} ${success(` SUCCESS `)} Thanks for checking out my cli
        `);
})();
//NB chmod +x index.js
