const pageCommands = {
  login(email, pass) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton')
      .click('@loginButton')
  },
};

module.exports = {
  url: 'https://demo.dev.huddle.tech/',
  commands: [pageCommands],
  elements: {
    emailInput: {
      selector: 'input[placeholder="Username"]'
    },
    passInput: {
      selector: 'input[placeholder="Password"]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
};
