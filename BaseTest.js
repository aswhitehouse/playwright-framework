const { chromium } = require('playwright');

class BaseTest {
  async setup() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async teardown() {
    await this.browser.close();
    console.log("Browser closed");
  }
}

module.exports = BaseTest;
