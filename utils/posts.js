const axios = require('axios');
const to = require('await-to-js').default;
const ora = require('ora');
const { dim } = require('chalk');
const handleError = require('cli-handle-error');
const stripHTML = require('cli-strip-html');

const apiURL = `https://Awais.dev/api/posts`;
const spinner = ora({ text: ''});

module.exports = async () => {
    spinner.start(dim(`Fetching 10 latest blog posts`));
    const [error, res] = await to(axios.get(apiURL));
    handleError(`API CALL FAILED`,  error, true, true);

    const posts = res.data.map(post => {
        return {
            title: stripHTML(post.title.rendered),
            link: post.link
        }
    })

    spinner.stop();

    posts.forEach( ({ title, link}, index) => {
        console.log(`${dim(`#${index + 1}`)} ${title}`);
        console.log(dim(link))
        console.log("");
    });
}