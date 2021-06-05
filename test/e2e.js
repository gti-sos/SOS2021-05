const puppeteer = require('puppeteer');



(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:10000');
  console.log("Page opened! Taking a screenshot...");
  await page.screenshot({ path: '01.png' });

  const [response] = await Promise.all([
    page.waitForNavigation(), 
    page.click('button.btn:nth-child(5)'), 
  ]);
  
  console.log("Clicked \"Integraciones\" link, waiting page load");
  await page.waitForTimeout(1000);
  console.log("Page opened! Taking a screenshot...");
  await page.screenshot({ path: '02.png' });

  await page.goto('http://localhost:10000/#/foundsresearchsources-stats');
  await page.waitForTimeout(1000);
  console.log("Page opened! Taking a screenshot...");
  await page.screenshot({ path: '03.png' });

  var rowCount = (await page.$$(".table > tbody > tr")).length;
  var loaded = parseInt(rowCount) > 2;
  console.log("Loaded elements correctly? " + loaded  );
  await browser.close();
  console.log("Browser closed");







  process.exit(0);

})();