#!/usr/bin/env node

const handleError = require('cli-handle-error')


const log = console.log;

const init = require("./utils/init");
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug')


const flags = cli.flags;
const input = cli.input;

// Alerts
const sym = require("log-symbols");

(() => {
  // process.on('unhandledRejection', (err) => {
  //     console.log(`unhandledRejection`, err)
  // })
  init(flags.minimal, flags.clear);
  input.includes('help') && cli.showHelp(0);

//   const error = new Error(`something went wrong`);

//   handleError(`CUSTOM ERROR`, error);

  flags.bio && log(`      Hi`);
  log(``);
  flags.bio && log(`      ${data.bio}`);
  log(``);
  flags.social && log(`      ${data.social}`)
  

log(`
    ${sym.success} ${data.successMessage}`);

    debug(flags.debug, cli);
})();
//NB chmod +x index.js
