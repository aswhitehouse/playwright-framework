const BaseTest = require('./BaseTest');
const HomePage = require('./HomePage');
const { TEST_STATUS_PASS, TEST_STATUS_FAIL } = require('./config');

class Test extends BaseTest {
  async run(testInfo) {
    await this.setup();

    const homePage = new HomePage(this.page);
    let status = '';

    try {
      await this.page.goto('https://www.abc.com.au');
      await homePage.clickLoginButton();

      status = TEST_STATUS_PASS;
    } catch (error) {
      status = TEST_STATUS_FAIL;
    }

    await this.teardown(testInfo, status);
  }
}

const test = new Test();
test.run({ title: 'Check ABC home page, click login-button' }); 
