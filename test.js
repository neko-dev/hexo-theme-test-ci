var webdriver = require('selenium-webdriver');
var capabilities = require('./' + process.argv[2] + '.js');
var fs = require('fs');

capabilities['browserstack.user'] = '{bs_user}';
capabilities['browserstack.key'] = '{bs_key}';
capabilities['project'] = '{bs_project}';
capabilities['build'] = '{bs_build_number} - {bs_commit}';

webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
    return driver.takeScreenshot().then(function(data) {
        fs.writeFile('_output/img/' + process.argv[3] + '/' + filename + '.png', data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
            if(err) throw err;
        });
    })
};

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://neko-dev.github.io/');
driver.sleep(2000);
driver.saveScreenshot('Index');

driver.findElement(webdriver.By.css('.sidebar-toggle.MD-burger-icon')).then(function(element){
  element.click();
  driver.sleep(1000);
  driver.takeScreenshot('Sidebar');
}, function (err) {
  console.log("Can not click");
  webdriver.promise.rejected(err);
});

driver.findElement(webdriver.By.css('.sidebar-toggle.mdl-button.mdl-js-button')).then(function(element){
  element.click();
  driver.sleep(1000);
  driver.findElement(webdriver.By.css('.post_thumbnail-random.mdl-card__media')).then(function(element){
    element.click();
    driver.sleep(2000);
    driver.takeScreenshot('HelloWorld');
  }, function (err) {
    console.log("Can not click");
    webdriver.promise.rejected(err);
  });
}, function (err) {
  console.log("Can not click");
  webdriver.promise.rejected(err);
});


driver.quit();


