import './src/styles/global.scss';
require("prismjs/themes/prism-tomorrow.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
        window.location.reload()
    }
}
