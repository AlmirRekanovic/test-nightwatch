/* eslint-disable no-undef */
require('@babel/register');
const PKG = require('./package.json'); // so we can get the version of the project
const BINPATH = './node_modules/nightwatch/bin/'; // change if required.
const SCREENSHOT_PATH = "./node_modules/nightwatch/screenshots/" + PKG.version + "/";
const port = 4444;
const dotenv = require('dotenv');

dotenv.config({path:'.env'});

const config = { // we use a nightwatch.conf.js file so we can include comments and helper functions
    src_folders: [
        'tests'    // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
    ],
    "page_objects_path": "pages",
    "globals_path": "globals.js",
    "output_folder": "./reports", // reports (test outcome) output by Nightwatch
    "selenium": {
        "start_process": true,
        "server_path": BINPATH + "selenium.jar", // downloaded by selenium-download module (see below)
        "log_path": "",
        "host": "127.0.0.1",
        "port": port,
        "cli_args": {
            "webdriver.chrome.driver" : BINPATH + "chromedriver.exe" // also downloaded by selenium-download
        }
    },
    //"test_workers" : {"enabled" : true, "workers" : "auto"}, // perform tests in parallel where possible
    "test_settings": {
        "default": {
            "launch_url": "http://localhost", // we're testing a Public or "staging" site on Saucelabs
            "selenium_port": 80,
            "selenium_host": "ondemand.saucelabs.com",
            "silent": true,
            "screenshots": {
                "enabled": true, // save screenshots to this directory (excluded by .gitignore)
                "path": SCREENSHOT_PATH
            },
            "username" : "${SAUCE_USERNAME}",     // if you want to use Saucelabs remember to
            "access_key" : "${SAUCE_ACCESS_KEY}", // export your environment variables (see readme)
            "globals": {
                "waitForConditionTimeout": 35000    // wait for content on the page before continuing
            }
        },
        "chrome": { // your local Chrome browser (chromedriver)
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },
        "firefox" : {
            "desiredCapabilities": {
                "platform": "XP",
                "browserName": "firefox",
                "version": "33"
            }
        },
    }
}
module.exports = config;
/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 */
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
    if (err || !stat || stat.size < 1) {
        require('selenium-download').ensure(BINPATH, function(error) {
            if (error) throw new Error(error); // no point continuing so exit!
            console.log(':heavy_check_mark: Selenium & Chromedriver downloaded to:', BINPATH);
        });
    }
});
function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
    return count < 10 ? '0' + count : count.toString();
}
var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (browser) {
    var a = browser.options.desiredCapabilities;
    var meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name); // this is the test filename so always exists.
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}
module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
