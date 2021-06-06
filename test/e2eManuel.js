const puppeteer = require('puppeteer');

const delay = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://sos2021-05.herokuapp.com/#/sales');
  await delay(1000)
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesTable.png' });
  console.log("Página abierta");

  const [response] = await Promise.all([
    
    page.click("body > main > main> div:nth-child(1)> button:nth-child(3) ")
  ]);
  await delay(1000)
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesInsert.png' });
  console.log("Captura insert");

  await page.goto('https://sos2021-05.herokuapp.com/#/sales');
  await delay(2000)
  console.log("Volviendo a la tabla");

  const [response2] = await Promise.all([
    page.click("body > main > main > table > tbody > tr:nth-child(1) > td:nth-child(6) > button:nth-child(1)"),
  ]);
  await delay(1000);
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesDelete.png' })
  console.log("Captura Borrar")

  //CAPTURA ACTUALIZAR
  await page.goto('https://sos2021-05.herokuapp.com/#/sales');
  await delay(2000)
  console.log("Volviendo a la tabla");

  const [response3] = await Promise.all([
    page.click("body > main > main > table > tbody > tr:nth-child(5) > td:nth-child(6) > button:nth-child(2)"),
  ]);
  await delay(500);
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesUpdate.png' })
  console.log("Captura Update");

  const [response4] = await Promise.all([
    page.click("body > main > main >  div >  div >  div >  div > div:nth-child(1)>  button"),
  ]);
    console.log("Click en volver");
    await delay(2000)
  
   const [response5] = await Promise.all([
    page.click("body > main > main> button:nth-child(2)"),
  ]);
  console.log("Click en actualizar");

  await delay(2000)
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesUpdatePreguntaSiActualizas.png' })


  const [response6] = await Promise.all([
    page.click("body > main > main >  div >  div >  div >  div > div:nth-child(3)>  button:nth-child(1)"),
  ]);
  await delay(2000)

  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesUpdateOK.png' })
  //Graficas vista genera

  await page.goto('https://sos2021-05.herokuapp.com/#/sales/analytics');
  await delay(1000)
  console.log("Llendo al index de las gráficas");
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesAnalyticsIndex.png' })

  await page.goto('http://sos2021-05.herokuapp.com/#/sales/external2');
  await delay(2000)
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesGraphExample.png' })
  console.log("Captura de un gráfico");
  
  //Paginación
  await page.goto('https://sos2021-05.herokuapp.com/#/sales');
  await delay(2000)
  console.log("Volviendo a la tabla");

  const [response8] = await Promise.all([
    page.click("body > main > main > div:nth-child(4) > button.btn.btn-secondary"),
  ]);
  await delay(500);
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesPaginacion.png' })
  console.log("Cambia Página");

  const [response9] = await Promise.all([
    page.click("body > main > main > div:nth-child(4) > button.btn.btn-dark"),
    
  ]);
  await delay(500);
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesPaginacionBoton.png' })
  console.log("Boton paginación");


const [response10] = await Promise.all([
    page.click("#modal > div > div.modal.show.d-block > div > div > div.modal-footer > button.btn.btn-secondary"),
    
  ]);
  await delay(500);

  const [response11] = await Promise.all([
    page.click(" body > main > main > div:nth-child(1) > button:nth-child(2)"),
    
  ]);
  await delay(500);
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesDeleteAll.png' })

  console.log("Todo Borrado");
  
  const [response12] = await Promise.all([
    page.click(" #modal > div > div.modal.show.d-block > div > div > div.modal-body > div > button"),
    
  ]);
  await delay(500);
  const [response13] = await Promise.all([
    page.click(" body > main > main > div > button:nth-child(1)"),
    
    
  ]);
  await delay(500);
  await page.screenshot({ path: './test/capturas/Manuel/frontArmsSalesLoadData.png' })

  console.log("Todo Cargado");

  await browser.close();
  console.log("Navegador Cerrado");
})();
