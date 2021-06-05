const puppeteer = require('puppeteer');

const delay = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://sos2021-05.herokuapp.com/');
  await page.screenshot({ path: 'init.png' });
  console.log("Página abierta");


  const [response] = await Promise.all([
    page.waitForNavigation(),
    page.click("body > main > main > body > section > div:nth-child(2) > div > a > button"),
  ]);
  await page.screenshot({ path: 'clickOnAPiv1Button_us_counties.png' });



  await page.goto('https://sos2021-05.herokuapp.com/');
  console.log("Vuelta a Home");

 

  await browser.close();
  console.log("Navegador Cerrado");
})();
