const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    },
    MailSlurp: {
      apiKey: '07a79af691c6ef265abcb8c04a50e051dd6bf28cb17fd60570d1a8f9831e496c',
      require: '@codeceptjs/mailslurp-helper'    
    },
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    registrationPage: './pages/registration.js',
    forgotPasswordPage: './pages/forgotPassword.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'create-codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}