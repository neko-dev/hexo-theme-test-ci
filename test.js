var webdriver = require('selenium-webdriver');
var capabilities = require('./' + process.argv[2] + '.js');

capabilities['browserstack.user'] = '{bs_user}';
capabilities['browserstack.key'] = '{bs_key}';
capabilities['project'] = '{bs_project}';
capabilities['build'] = '{bs_build_number} - {bs_commit}';

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();
driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
driver.get('https://neko-dev.github.io/');
driver.takeScreenshot();
driver.findElement(webdriver.By.css('.sidebar-toggle.MD-burger-icon')).click();
driver.sleep(1000);
driver.takeScreenshot();

driver.quit();
