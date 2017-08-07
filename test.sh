npm install selenium-webdriver
sed -i "s/{bs_user}/${BrowserstackUser}/g" ../test.js
sed -i "s/{bs_key}/${BrowserstackKey}/g" ../test.js
node ../test.js
