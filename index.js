#!/usr/bin/env node

const handleError = require('cli-handle-error');
const alert = require('cli-alerts');


const log = console.log;

const init = require("./utils/init");
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const stats = require('./utils/stats');
const posts = require('./utils/posts');


const flags = cli.flags;
const input = cli.input;

// Alerts
const sym = require("log-symbols");

(async () => {
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
  flags.posts && alert({ type: 'info', msg: data.blogs, name: data.blogName})
  flags.posts && (await posts());
  
  // stats
  await stats()

log(`
    ${sym.success} ${data.successMessage}`);

    debug(flags.debug, cli);
})();
//NB chmod +x index.js
