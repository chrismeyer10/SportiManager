module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    files: [],
    restartOnFileChange: true
  });
};
