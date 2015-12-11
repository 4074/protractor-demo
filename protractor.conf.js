var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['baidu.spec.js'],
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                dest: '_reports/' + new Date().getTime() + '/',
                filename: 'index.html'
            })
        );
    }
};