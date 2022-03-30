const keys = require('../../config/keys')

module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center">
                    <h3>Input ME</h3>
                    <p> Answer: </p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/feedback">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/feedback">No</a>
                    </div>
                </div>
            </body>
        </html>
    `
}