require('dotenv').config()
const devices = {
    android: [
        {
            project: 'app-core Android',
            build: 'Webdriverio Android',
            name: 'Android',
            device: 'Google Pixel 3',
            os_version: '9.0',
            app: process.env.BROWSERSTACK_APP_ID_ANDROID,
            'browserstack.debug': true,
            noReset: false,
        },
    ],
    ios: [
        {
            project: 'app-core iOS',
            build: 'Webdriverio iOS',
            name: 'iOS',
            device: 'iPhone 11 Pro',
            os_version: '13',
            app: process.env.BROWSERSTACK_APP_ID_IOS || 'bs://<hashed app-id>',
            'browserstack.debug': true,
            fullReset: true,
        },
    ],
}
exports.config = {
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,
    updateJob: false,
    specs: ['./tests/**/*.test.js'],
    exclude: [],
    // Default to Android if no device is specified.
    capabilities: devices[process.env.OS || 'android'],
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 20000,
    },
}
