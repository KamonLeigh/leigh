
const ora = require('ora');
const axios = require('axios');
const { green, yellow } = require('chalk');
const handleError = require('cli-handle-error'); 
const to = require('await-to-js').default   
const apiURL = `https://api.github.com/users/kamonleigh`;

const spinner = ora({ text: ''})

module.exports = async () => {
    spinner.start(`${yellow(`FOLLOWERS`)} Fetching...`);
    const [error, res ] = await to(axios.get(apiURL))
    handleError(`API CALL FAILED`, error, false, true);
    
    const ghFollowers = res.data.followers;

    spinner.stop();
    console.log(`
    GitHub Followers ${ghFollowers}
    `)  
   

}