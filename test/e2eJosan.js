const puppeteer = require('puppeteer');

const delay = ms => new Promise(res => setTimeout(res, ms));




(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

    //CAPTURA INDEX
  await page.goto("https://sos2021-05.herokuapp.com/#/info");
  await delay(1000)
  await page.screenshot({ path: './test/capturas/JoseAntonio/index.png' });
  console.log("Index abierto");
  
//////////// CAPTURAS AL FRONT END TABLA
  await page.goto("https://sos2021-05.herokuapp.com/#/attacks");
  await delay(1000)
  await page.screenshot({ path: './test/capturas/JoseAntonio/frontAttacks.png' });
  console.log("Front End abierto");

///////////////////CAPTURA DELETE DATO
  const [response] = await Promise.all([
    page.click("body > main > main > table > tbody > tr:nth-child(1) > td:nth-child(12) > button:nth-child(1)")
  ]);
  await delay(2000);
  await page.screenshot({ path: './test/capturas/JoseAntonio/frontAttacksDelete.png' });
  console.log("Dato borrado");


//Para 'volver'
await page.goto("https://sos2021-05.herokuapp.com/#/attacks");
await delay(2000);

//para insertar
const [response1] = await Promise.all([

    page.click("body > main > main > div:nth-child(1) > button:nth-child(3)")
]);

await delay(2000);
await page.screenshot({ path: './test/capturas/JoseAntonio/frontAttacksInsert.png' });
console.log("Insert");



//Volvemos a la tabla

await page.goto('https://sos2021-05.herokuapp.com/#/attacks');
await delay(2000)
console.log("Volviendo a la tabla");

//CAPTURA ACTUALIZAR
const [response3] = await Promise.all([
  page.click("body > main > main > table > tbody > tr:nth-child(2) > td:nth-child(12) > button:nth-child(2)"),
]);

await delay(500);
await page.screenshot({ path: './test/capturas/JoseAntonio/frontAttacksUpdate.png' })
console.log("Captura Update");

const [response4] = await Promise.all([
  page.click("body > main > main > div > div.modal.show.d-block > div > div > div.modal-body > div > button"),
]);
  console.log("Click en volver");
  await delay(2000)

 const [response5] = await Promise.all([
  page.click("body > main > main > button:nth-child(2)"),
]);
console.log("Click en actualizar");

await delay(2000)
await page.screenshot({ path: './test/capturas/JoseAntonio/frontAttacksUpdatePop.png' })


const [response6] = await Promise.all([
  page.click("body > main > main > div > div.modal.show.d-block > div > div > div.modal-footer > button.btn.btn-primary"),
]);
console.log("Click en actualizar por segunda vez");

await delay(2000)
await page.screenshot({ path: './test/capturas/JoseAntonio/frontAttacksUpdateOK.png' })


const [response7] = await Promise.all([
    page.click("body > main > main > div > div.modal.show.d-block > div > div > div.modal-body > div > button:nth-child(3)"),
  ]);
  console.log("Click en volver a la tabla");
  
  await delay(2000)
  await page.screenshot({ path: './test/capturas/JoseAntonio/frontAttacksTablaActualizada.png' })
  console.log("No se nota el cambio de los datos actualizados porque son los mismos");



//Para hacer captura de mi index de gráficas
await page.goto("http://sos2021-05.herokuapp.com/#/integrations");

const [response8] = await Promise.all([
  page.click("body > main > main > div:nth-child(4) > button:nth-child(3)"),
]);
console.log("Click en Ataques-Jose Antonio Megias");

await delay(2000);
await page.screenshot({ path: './test/capturas/JoseAntonio/indexGraficasAttacks.png' });



//vamos a una de mis gráficas y captura
await page.goto('http://sos2021-05.herokuapp.com/#/attacks/apiexterna2');
await delay(5000)
await page.screenshot({ path: './test/capturas/JoseAntonio/frontGrafica.png' })
console.log("Captura del grafico del ranking de tenis del mundo");

await browser.close();
console.log("Navegador Cerrado");
})();
