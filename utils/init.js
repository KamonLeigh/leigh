const welcome = require('cli-welcome');
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
 
   minimal && console.log(`Byron Dunkley`)
checkNode('9')
}