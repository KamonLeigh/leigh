
const meow = require('meow');
const { green, yellow, cyan, dim } = require('chalk')

const helpText = `
  Usage
     ${green(`npx leigh`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

  Options 
    ${yellow(`--bio`)}                      Print the bio info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-bio`)}                   Don't print the bio info
    ${yellow(`--social`)}                   Print the social info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-social`)}                Don't Show the Social information
    ${yellow(`--clear`)}                    Clear the console ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-clear`)}                 Don't clear the console
    ${yellow(`-m`)}, ${yellow(`--minimal`)}              Print minimal information
    ${yellow(`-p`)}, ${yellow(`--posts`)}                Print last 10 blog posts
    ${yellow(`-d`)}, ${yellow(`--debug`)}                Print debug information
    ${yellow(`-v`)}, ${yellow(`--version`)}              Print CLI version

  Commands
    ${cyan(`help`)}                         print CLI help information

  Examples 
    ${green(`npx leigh`)} ${yellow(`--no-social`)} 
`;
const options = {
  flags: {
    minimal: {
        type: 'boolean',
        alias: 'm'
    },
    bio: {
        type: 'boolean',
        default: true
      },
    social: {
      type: 'boolean',
      default: true
    },
    debug: {
        type: 'boolean',
        default: false,
        alias: 'd',
        desc: `Prints the debug info`
    },
    version: {
        type: 'boolean',
        default: false,
        alias: 'v'
    },
    clear: {
        type: 'boolean',
        default: true
    },
    posts: {
        type: 'boolean',
        default: false
    }
  }
}
module.exports = meow(helpText, options);
