const welcome = require('cli-welcome');
const boxen = require('boxen');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('../package.json');


module.exports = (minimal, clear) => {
    unhandled();
    
  !minimal &&  welcome({
        title: `Byron Dunkley`,
        tagLine: `Nice to meet you!`,
        description: pkgJSON.description,
        version: pkgJSON.version,
        bgColor: `#6937ff`,
        color: `#000000`,
        clear,
        bold: true
    });
 
   minimal && console.log(boxen(`Byron Dunkley`, {padding: 1, float: `center`, dimBorder: true}));
checkNode('9')
}