
var cool = require("cool-ascii-faces")
var express = require("express");
var app = express();
var port = (process.env.PORT || 10000);
var path = require("path");

/*
app.get("/cool", (request, response) => {
	
	response.send(cool());
	console.log("New Request ha llegao");
	
});
*/

app.use("/", express.static( path.join(__dirname ,"./public")));

app.get('/index', (request, response) => {
    response.send(express());
    console.log('New request to /index has arrived, succesfuly');
});


app.listen(port, () => {
	console.log("Server ready listening in port " + port)
})







//Acceso a datos tablas

//IVAN

app.get("/info/homicides-by-firearms", (request,response) => {
	response.send("<html><style>table,td{  width: 50%; text-align: center; border-spacing: 4 ; border: 1.5px solid black}</style><body><table class = default><caption>Homicides by firearms in the United States </caption> <tbody><tr ><td ><strong>state</strong></td><td ><strong>year</strong></td><td ><strong>homicide-by-firearm</strong></td><td ><strong>handgun</strong></td><td><strong>rifle</strong></td><td><strong>shotgun</strong></td><td><strong>type-not-stated</strong></td></tr><tr ><td >Alaska</td><td>2019</td><td>70</td><td>17</td><td>1</td><td>6</td><td>20</td></tr><tr s><td >Arkansas</td><td >2019</td><td>255</td><td >87</td><td >10</td><td >5</td><td >74</td></tr><tr ><td >Idaho</td><td >2019</td><td >23</td><td>9</td><td >0</td><td >0</td><td >7</td></tr><tr ><td >West Virginia</td><td >2019</td><td >69</td><td >24</td><td >7</td><td >2</td><td >17</td></tr><tr ><td >Wyoming</td><td >2019</td><td >11</td><td>7</td><td >0</td><td >0</td><td >2</td></tr><tr><td >Montana</td><td >2019</td><td >20</td><td >13</td><td >1</td><td >1</td><td >1</td></tr><tr ><td >New Mexico</td><td >2019</td><td >146</td><td>53</td><td >1</td><td >3</td><td >43</td></tr><tr><td >Alabama</td><td >2019</td><td >3</td><td >3</td><td >0</td><td >0</td><td >0</td></tr></tbody> </table> </body> </html>");
	console.log("New request to /info/homicides-by-firearms has arrived");
});

//MANUEL
app.get("/info/arms-sales-stats", (request,response) => {
	response.send("<html><style>table,td{  width: 50%; text-align: center; border-spacing: 4 ; border: 1.5px solid black}</style><body><table class = default><caption>Firearms sales in the United States </caption> <tbody><tr ><td ><strong>state</strong></td><td ><strong>year</strong></td><td ><strong>month</strong></td><td ><strong>firearms sold</strong></td><td ><strong>firearms sold/people</strong></td></tr><tr ><td >Alabama</td><td>2019</td><td >1</td><td >79,332</td><td >0.01197</td></tr><tr><td >Alabama</td><td >2019</td><td>2</td><td >75,336</td><td >0.01305</td></tr><tr ><td >Alabama</td><td >2019</td><td >3</td><td>92,652</td><td >0.01765</td></tr><tr ><td >Alabama</td><td >2019</td><td >4</td><td >70,748</td><td >0.01415</td></tr><tr ><td >Alabama</td><td >2019</td><td >5</td><td>80,519</td><td >0.01489</td></tr><tr><td >Alabama</td><td >2019</td><td >6</td><td >139,873</td><td >0.02118</td></tr><tr ><td >Alabama</td><td >2019</td><td >7</td><td>107,49</td><td >0.01659</td></tr><tr><td >Alabama</td><td >2019</td><td >8</td><td >85,347</td><td >0.01392</td></tr><tr ><td>Alabama</td><td >2019</td><td >9</td><td>80,478</td><td >0.0133</td></tr><tr><td >Alabama</td><td >2019</td><td >10</td><td >80,934</td><td >0.0138</td></tr></tbody> </table> </body> </html>");
	console.log("New request to /info/arms-sales-stats has arrived");
});


//Jose Antonio
app.get("/info/attacks-stats", (request,response) => {
	response.send("<html><style>table,td{  width: 50%; text-align: center; border-spacing: 4 ; border: 1.5px solid black}</style><body><table class = default><caption>Firearms sales in the United States </caption> <tbody> <tr> <td >state</td> <td>year</td> <td>sex -male</td> <td>sex -female</td> <td >sex -unknown</td> <td >age range -20-29</td> <td>age range -30-39</td> <td >age range -other</td> <td >type of attack -personal weapons</td> <td >type of attack -gun</td> <td>type of attack -knife</td> </tr> <tr> <td >Alabama</td> <td >2019</td> <td >111</td> <td>18</td> <td >14</td> <td>44</td> <td >14</td> <td >85</td> <td >38</td> <td >20</td> <td >8</td> </tr> <tr> <td>Arkansas</td> <td >2019</td> <td>11330</td> <td>3164</td> <td >1565</td> <td >4168</td> <td >3384</td> <td>8507</td> <td >3781</td> <td >1985</td> <td >1442</td> </tr> <tr> <td >Idaho</td> <td >2019</td> <td >3110</td> <td >594</td> <td >54</td> <td >1083</td> <td>910</td> <td >3585</td> <td >1908</td> <td >268</td> <td >424</td> </tr> <tr> <td >West Virginia</td> <td >2019</td> <td >2856</td> <td >766</td> <td >71</td> <td >1030</td> <td>944</td> <td>1719</td> <td>1046</td> <td>358</td> <td>361</td> </tr> <tr> <td >Wyoming</td> <td >2019</td> <td >-</td> <td>-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> </tr> <tr> <td >Montana</td> <td >2019</td> <td >2607</td> <td >745</td> <td>62</td> <td >951</td> <td >869</td> <td >5234</td> <td>1061</td> <td >193</td> <td >281</td> </tr> <tr> <td >New Mexico</td> <td >2019</td> <td >6736</td> <td >1545</td> <td >826</td> <td >2623</td> <td >2128</td> <td >4356</td> <td >2221</td> <td >949</td> <td >1165</td> </tr> </tbody> </table> </table> </body> </html>");
	console.log("New request to /info/attacks-stats has arrived");
});














