/* In nightwatch/globals.js */
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
	reportsDirectory: __dirname + '/reports',
  themeName: 'compact'
});

module.exports = {
	waitForConditionTimeout: 30000,
	abortOnFailure: false,
	reporter: reporter.fn,

	beforeEach: function (client, done) {
		client.maximizeWindow();
		client.deleteCookies();
		client.perform(function () {
			done();
		});
	},

	afterEach: async function (client, done) {
		client.end(function () {
			done();
		});
	},
};
