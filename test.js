var webdriver = require('selenium-webdriver');

var capabilities = {
  'browserName' : 'Chrome',
  'browser_version' : '60.0',
  'os' : 'Windows',
  'os_version' : '10',
  'resolution' : '1024x768'
  'browserstack.user' : '{bs_user}',
  'browserstack.key' : '{bs_key}'
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://neko-dev.github.io/');
driver.findElement(webdriver.By.css('.sidebar-toggle.MD-burger-icon')).click();
driver.sleep(2000);
driver.takeScreenshot();

driver.quit();
