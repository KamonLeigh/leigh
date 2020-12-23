const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');
const pkgJSON = require('../package.json');


module.exports = () => {
    unhandled();
    
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
    
checkNode('9')
}