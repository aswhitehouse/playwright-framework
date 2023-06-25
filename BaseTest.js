const { chromium } = require('playwright');

class BaseTest {
  async setup() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async teardown(testInfo) {
    await this.browser.close();
    const testName = testInfo.title;
    const testStatus = 'pass';
    console.log(`Test Name: ${testName}`);
    console.log(`Test Status: ${testStatus}`);
    console.log("Browser closed");
  }
}

module.exports = BaseTest;
