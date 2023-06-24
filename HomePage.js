class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async clickLoginButton() {
      await Promise.all([
        this.page.click('button[data-component="GlobalLoginButton"]'),
        this.page.waitForNavigation(),
      ]);
    }
  }
  
  module.exports = HomePage;
  