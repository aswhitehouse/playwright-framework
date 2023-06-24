const BaseTest = require('./BaseTest');
const HomePage = require('./HomePage');

class Test extends BaseTest {
  async run() {
    await this.setup();

    const homePage = new HomePage(this.page);

    await this.page.goto('https://www.abc.com.au');
    await homePage.clickLoginButton();

    console.log("Test Passed");

    await this.teardown();
  }
}

const test = new Test();
test.run();
