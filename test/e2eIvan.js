const puppeteer = require('puppeteer');

const delay = ms => new Promise(res => setTimeout(res, ms));




(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

    //CAPTURA INDEX
  await page.goto("http://sos2021-05.herokuapp.com/#/info");
  await delay(1000)
  await page.screenshot({ path: './test/capturas/Ivan/index.png'});
  console.log("Index abierto");
  
//////////// CAPTURAS AL FRONT END TABLA
  await page.goto("http://sos2021-05.herokuapp.com/#/homicides");
  await delay(1000)
  await page.screenshot({ path: './test/capturas/Ivan/frontHomicides.png'});
  console.log("Front End abierto");

///////////////////CAPTURA DELETE DATO
  const [response] = await Promise.all([
    page.click("body > main > main > table > tbody > tr:nth-child(1) > td:nth-child(8) > button:nth-child(1)"),
  ]);
  await delay(2000);
  await page.screenshot({ path: './test/capturas/Ivan/frontHomicidesDelete.png' });
  console.log("Dato borrado");


//Para 'volver'
await page.goto("http://sos2021-05.herokuapp.com/#/homicides");
await delay(2000);

//para insertar
const [response1] = await Promise.all([

    page.click("body > main > main> div:nth-child(1)> button:nth-child(3) ")
]);

await delay(2000);
await page.screenshot({ path: './test/capturas/Ivan/frontHomicidesInsert.png' });
console.log("Insert");

await page.screenshot({ path: 'clickOnInsertarDato.png' });

//Para hacer captura de mi index de gráficas
await page.goto("http://sos2021-05.herokuapp.com/#/homicides/analytics");
await delay(2000);
await page.screenshot({ path: './test/capturas/Ivan/indexGraficasHomicides.png' });

//vamos a una de mis gráficas y captura
await page.goto('http://sos2021-05.herokuapp.com/#/homicides/abandonoEscolar');
await delay(5000)
await page.screenshot({ path: './test/capturas/Ivan/frontGrafica.png' })
console.log("Captura de un gráfico");

await browser.close();
console.log("Navegador Cerrado");
})();
