#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const log = console.log;
const githubColour = chalk.hex(`#6cc644`).bold.inverse
const dim = chalk.dim;
const italic = chalk.italic



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

//NB chmod +x index.js