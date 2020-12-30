const chalk = require("chalk");
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword("orange").inverse;
const error = chalk.red.bold.inverse;
const githubColour = chalk.hex(`#6cc644`).bold.inverse;
const dim = chalk.dim;
const italic = chalk.italic;

const social = `${githubColour(` Github `)} ${dim(`https://github.com/KamonLeigh`)}`;

const bio =  `${italic(`I am a fullstack developer from London :-)`)}`;
const blogName = `AhmadAwais.com`
const blogs = `lastest posts`;

const successMessage = `${success(` SUCCESS `)} Thanks for checking out my cli`;
module.exports = {
    bio,
    social,
    successMessage,
    blogs,
    blogName
}
