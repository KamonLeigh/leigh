#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');



welcome({
    title: pkgJSON.name,
    tagLine: `Nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    clear: true,
    bold: true
});



console.log(`
    Hi!

    Byron Dunkley

    I am a fullstack developer from London :-)

    Github: https://github.com/KamonLeigh
`);

//NB chmod +x index.js