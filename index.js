#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const checkNode = require('cli-check-node')
const log = console.log;
const githubColour = chalk.hex(`#6cc644`).bold.inverse
const dim = chalk.dim;
const italic = chalk.italic

// Alerts
const sym = require('log-symbols');
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword('orange').inverse;
const error = chalk.red.bold.inverse;

checkNode('9')

welcome({
    title: `Byron Dunkley`,
    tagLine: `Nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#6937ff`,
    color: `#000000`,
    clear: true,
    bold: true
});



log(`
    Hi!

    ${italic(`I am a fullstack developer from London :-)`)}

    ${githubColour(` Github `)} ${dim(`https://github.com/KamonLeigh`)}
`);

console.log(`
 ${sym.success} ${success(` SUCCESS `)} Thanks for checking out my cli
`);

//NB chmod +x index.js