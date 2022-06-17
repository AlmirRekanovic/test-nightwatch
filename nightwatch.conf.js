/* eslint-disable no-undef */
require('@babel/register');
const PKG = require('./package.json'); // so we can get the version of the project
const SCREENSHOT_PATH = "./node_modules/nightwatch/screenshots/" + PKG.version + "/";
const dotenv = require('dotenv');
const percy = require('@percy/nightwatch');
const chromedriver = require("chromedriver");
const geckodriver = require('geckodriver');

dotenv.config({path:'.env'});

const config = {
    // we use a nightwatch.conf.js file so we can include comments and helper functions
    src_folders: [
        'tests'    // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
    ],
    page_objects_path: "pages",
    globals_path: "globals.js",
    custom_commands_path: [percy.path],
    output_folder: "./reports", // reports (test outcome) output by Nightwatch
    //"test_workers" : {"enabled" : true, "workers" : "auto"}, // perform tests in parallel where possible
    webdriver: {
        silent: false,
        start_process: true,
    },
    test_settings: {
        default: {
            launch_url: "http://localhost:3000/",
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                cssSelectorsEnabled: true,
                nativeEvents: true,
                args: ['-no-sandbox'],
                chromeWebSecurity: false
            },
            webdriver: {
                port: 4444,
                server_path: chromedriver.path,
            },
            },
        chrome: { // your local Chrome browser (chromedriver)
            launch_url: "http://localhost:3000/",
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                cssSelectorsEnabled: true,
                nativeEvents: true,
                args: ['-no-sandbox'],
                chromeWebSecurity: false
            },
            webdriver: {
                port: 4444,
                server_path: chromedriver.path,
            },
        },
        firefox: {
            webdriver: {
                server_path: geckodriver.path,
                port: 4445,
            },
            launch_url: `${process.env.APP_BASE_URL}`,
            desiredCapabilities: {
                browserName: 'firefox',
                acceptInsecureCerts: true,
                'moz:firefoxOptions': {
                    args: ['-headless'],
                },
                args: [
                    '-headless',
                    '-no-sandbox',
                    '--use-fake-device-for-media-stream',
                    'use-fake-ui-for-media-stream',
                ],
            },
        },
        safari: {
            webdriver: {
                server_path: '/usr/bin/safaridriver',
                port: 4446,
            },
            launch_url: `${process.env.APP_BASE_URL}`,
            desiredCapabilities: {
                browserName: 'safari',
                args: ['-no-sandbox', '--use-fake-device-for-media-stream', 'use-fake-ui-for-media-stream'],
            },
        },
    }
}
module.exports = config;

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
