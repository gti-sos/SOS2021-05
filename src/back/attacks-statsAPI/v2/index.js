var Datastore = require("nedb");
var db = new Datastore({ filename: "./src/back/attacks-statsAPI/v2/attacks-stats.db", autoload: true });


module.exports.register = (app, BASE_API_PATH) => {

	// API 'attacks stats' (José Antonio Megías Macías)

	
var attacks_stats = [];


//GET para cargar (o meter) los datos iniciales (todo en JSON)
//(de modo que cree 2 o más elementos)

app.get(BASE_API_PATH+"/attacks-stats/loadInitialData", (req,res)=>{ 

	var attacks_stats_initial_data = [
		// ----------------- AÑO 2018 ----------------------------------------------
		{
			"state":"Alabama",
			"year":"2019",
			"sex_male":"111" ,
			"sex_female":"18",
			"sex_unknown":"14",
			"age_range_20_29":"44",
			"age_range_30_39":"14",
			"age_range_other":"85",
			"type_of_attack_personal_weapons":"38",
			"type_of_attack_gun":"20",
			"type_of_attack_knife":"8"
		},
		{
			"state":"Alaska",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20-29":"-",
			"age_range_30-39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Arkansas",
			"year":"2019",
			"sex_male":"11330" ,
			"sex_female":"3186",
			"sex_unknown":"1581",
			"age_range_20_29":"4168",
			"age_range_30_39":"3384",
			"age_range_other":"8513",
			"type_of_attack_personal_weapons":"3781",
			"type_of_attack_gun":"1938",
			"type_of_attack_knife":"1442"
		},
		{
			"state":"Arizona",
			"year":"2019",
			"sex_male":"696" ,
			"sex_female":"167",
			"sex_unknown":"4",
			"age_range_20_29":"251",
			"age_range_30_39":"171",
			"age_range_other":"432",
			"type_of_attack_personal_weapons":"245",
			"type_of_attack_gun":"108",
			"type_of_attack_knife":"93"
		},
		{
			"state":"California",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Colorado",
			"year":"2019",
			"sex_male":"20423" ,
			"sex_female":"3475",
			"sex_unknown":"1441",
			"age_range_20_29":"7053",
			"age_range_30_39":"5170",
			"age_range_other":"13567",
			"type_of_attack_personal_weapons":"8516",
			"type_of_attack_gun":"3736",
			"type_of_attack_knife":"2835"
		},	
		{
			"state":"Connecticut",
			"year":"2019",
			"sex_male":"3390" ,
			"sex_female":"830",
			"sex_unknown":"222",
			"age_range_20_29":"1147",
			"age_range_30_39":"928",
			"age_range_other":"2397",
			"type_of_attack_personal_weapons":"1622",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"803"
		},
		{
			"state":"Canal-Zone",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"District-of-Columbia",
			"year":"2019",
			"sex_male":"619" ,
			"sex_female":"157",
			"sex_unknown":"16",
			"age_range_20_29":"183",
			"age_range_30_39":"36",
			"age_range_other":"503",
			"type_of_attack_personal_weapons":"209",
			"type_of_attack_gun":"38",
			"type_of_attack_knife":"83"
		},
		{
			"state":"Delaware",
			"year":"2019",
			"sex_male":"3675" ,
			"sex_female":"1011",
			"sex_unknown":"66",
			"age_range_20_29":"1260",
			"age_range_30_39":"790",
			"age_range_other":"1092",
			"type_of_attack_personal_weapons":"964",
			"type_of_attack_gun":"563",
			"type_of_attack_knife":"604"
		},
		{
			"state":"Florida",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Georgia",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Hawaii",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Lowa",
			"year":"2019",
			"sex_male":"5299" ,
			"sex_female":"1200",
			"sex_unknown":"82",
			"age_range_20_29":"2038",
			"age_range_30_39":"1547",
			"age_range_other":"3002",
			"type_of_attack_personal_weapons":"2769",
			"type_of_attack_gun":"462",
			"type_of_attack_knife":"763"
		},
		{
			"state":"Idaho",
			"year":"2019",
			"sex_male":"3340" ,
			"sex_female":"625",
			"sex_unknown":"67",
			"age_range_20_29":"1139",
			"age_range_30_39":"927",
			"age_range_other":"1992",
			"type_of_attack_personal_weapons":"1964",
			"type_of_attack_gun":"329",
			"type_of_attack_knife":"455"
		},
		{
			"state":"Illinois",
			"year":"2019",
			"sex_male":"1983" ,
			"sex_female":"410",
			"sex_unknown":"228",
			"age_range_20_29":"851",
			"age_range_30_39":"471",
			"age_range_other":"1495",
			"type_of_attack_personal_weapons":"529",
			"type_of_attack_gun":"213",
			"type_of_attack_knife":"172"
		},
		{
			"state":"Indiana",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"529",
			"age_range_30_39":"213",
			"age_range_other":"1403",
			"type_of_attack_personal_weapons":"529",
			"type_of_attack_gun":"213",
			"type_of_attack_knife":"172"
		},
		{
			"state":"Kansas",
			"year":"2019",
			"sex_male":"7718" ,
			"sex_female":"1635",
			"sex_unknown":"490",
			"age_range_20_29":"2783",
			"age_range_30_39":"2207",
			"age_range_other":"5032",
			"type_of_attack_personal_weapons":"3381",
			"type_of_attack_gun":"1359",
			"type_of_attack_knife":"1053"
		},
		{
			"state":"Kentucky",
			"year":"2019",
			"sex_male":"7664" ,
			"sex_female":"1492",
			"sex_unknown":"60",
			"age_range_20_29":"2694",
			"age_range_30_39":"2030",
			"age_range_other":"5023",
			"type_of_attack_personal_weapons":"2636",
			"type_of_attack_gun":"1922",
			"type_of_attack_knife":"924"
		},
		{
			"state":"Louisiana",
			"year":"2019",
			"sex_male":"2313" ,
			"sex_female":"666",
			"sex_unknown":"325",
			"age_range_20_29":"835",
			"age_range_30_39":"694",
			"age_range_other":"2513",
			"type_of_attack_personal_weapons":"382",
			"type_of_attack_gun":"478",
			"type_of_attack_knife":"439"
		},
		{
			"state":"Massachusetts",
			"year":"2019",
			"sex_male":"12411" ,
			"sex_female":"3524",
			"sex_unknown":"115",
			"age_range_20_29":"4960",
			"age_range_30_39":"3892",
			"age_range_other":"7893",
			"type_of_attack_personal_weapons":"4495",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"2908"
		},
		{
			"state":"Maryland",
			"year":"2019",
			"sex_male":"2193" ,
			"sex_female":"230",
			"sex_unknown":"69",
			"age_range_20_29":"434",
			"age_range_30_39":"254",
			"age_range_other":"1832",
			"type_of_attack_personal_weapons":"422",
			"type_of_attack_gun":"152",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Maine",
			"year":"2019",
			"sex_male":"497" ,
			"sex_female":"69",
			"sex_unknown":"0",
			"age_range_20_29":"182",
			"age_range_30_39":"145",
			"age_range_other":"234",
			"type_of_attack_personal_weapons":"291",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"73"
		},
		{
			"state":"Michigan",
			"year":"2019",
			"sex_male":"30204" ,
			"sex_female":"8701",
			"sex_unknown":"864",
			"age_range_20_29":"13086",
			"age_range_30_39":"7984",
			"age_range_other":"1721",
			"type_of_attack_personal_weapons":"9233",
			"type_of_attack_gun":"5952",
			"type_of_attack_knife":"5538"
		},
		{
			"state":"Minnesota",
			"year":"2019",
			"sex_male":"701" ,
			"sex_female":"121",
			"sex_unknown":"4",
			"age_range_20_29":"248",
			"age_range_30_39":"167",
			"age_range_other":"412",
			"type_of_attack_personal_weapons":"161",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"106"
		},
		{
			"state":"Missouri",
			"year":"2019",
			"sex_male":"7663" ,
			"sex_female":"1958",
			"sex_unknown":"846",
			"age_range_20_29":"2805",
			"age_range_30_39":"1949",
			"age_range_other":"5162",
			"type_of_attack_personal_weapons":"2042",
			"type_of_attack_gun":"1522",
			"type_of_attack_knife":"782"
		},
		{
			"state":"Mississippi",
			"year":"2019",
			"sex_male":"949" ,
			"sex_female":"138",
			"sex_unknown":"68",
			"age_range_20_29":"278",
			"age_range_30_39":"174",
			"age_range_other":"754",
			"type_of_attack_personal_weapons":"151",
			"type_of_attack_gun":"247",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Montana",
			"year":"2019",
			"sex_male":"2701" ,
			"sex_female":"686",
			"sex_unknown":"115",
			"age_range_20_29":"945",
			"age_range_30_39":"892",
			"age_range_other":"1211",
			"type_of_attack_personal_weapons":"1077",
			"type_of_attack_gun":"228",
			"type_of_attack_knife":"311"
		},
		{
			"state":"Nebraska",
			"year":"2019",
			"sex_male":"1329" ,
			"sex_female":"260",
			"sex_unknown":"34",
			"age_range_20_29":"509",
			"age_range_30_39":"374",
			"age_range_other":"793",
			"type_of_attack_personal_weapons":"616",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"134"
		},
		{
			"state":"North-Carolina",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"North-Dakota",
			"year":"2019",
			"sex_male":"1606" ,
			"sex_female":"354",
			"sex_unknown":"37",
			"age_range_20_29":"699",
			"age_range_30_39":"498",
			"age_range_other":"912",
			"type_of_attack_personal_weapons":"1093",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"168"
		},
		{
			"state":"New-Hampshire",
			"year":"2019",
			"sex_male":"1867" ,
			"sex_female":"296",
			"sex_unknown":"15",
			"age_range_20_29":"713",
			"age_range_30_39":"510",
			"age_range_other":"992",
			"type_of_attack_personal_weapons":"1113",
			"type_of_attack_gun":"191",
			"type_of_attack_knife":"322"
		},
		{
			"state":"New-Jersey",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"New-Mexico",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Nevada",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"New-York",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Ohio",
			"year":"2019",
			"sex_male":"25348" ,
			"sex_female":"5261",
			"sex_unknown":"2095",
			"age_range_20_29":"9777",
			"age_range_30_39":"5852",
			"age_range_other":"17325",
			"type_of_attack_personal_weapons":"5175",
			"type_of_attack_gun":"4829",
			"type_of_attack_knife":"3223"
		},
		{
			"state":"Oklahoma",
			"year":"2019",
			"sex_male":"4064" ,
			"sex_female":"825",
			"sex_unknown":"129",
			"age_range_20_29":"1334",
			"age_range_30_39":"1282",
			"age_range_other":"2432",
			"type_of_attack_personal_weapons":"1946",
			"type_of_attack_gun":"354",
			"type_of_attack_knife":"604"
		},
		{
			"state":"Oregon",
			"year":"2019",
			"sex_male":"9705" ,
			"sex_female":"1897",
			"sex_unknown":"190",
			"age_range_20_29":"3440",
			"age_range_30_39":"2962",
			"age_range_other":"5021",
			"type_of_attack_personal_weapons":"4659",
			"type_of_attack_gun":"1016",
			"type_of_attack_knife":"1538"
		},
		{
			"state":"Pennsylvania",
			"year":"2019",
			"sex_male":"105" ,
			"sex_female":"15",
			"sex_unknown":"3",
			"age_range_20_29":"43",
			"age_range_30_39":"23",
			"age_range_other":"57",
			"type_of_attack_personal_weapons":"58",
			"type_of_attack_gun":"7",
			"type_of_attack_knife":"12"
		},
		{
			"state":"Puerto-Rico",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Rhode-Island",
			"year":"2019",
			"sex_male":"1622" ,
			"sex_female":"314",
			"sex_unknown":"31",
			"age_range_20_29":"633",
			"age_range_30_39":"440",
			"age_range_other":"803",
			"type_of_attack_personal_weapons":"796",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"407"
		},
		{
			"state":"South-Carolina",
			"year":"2019",
			"sex_male":"18598" ,
			"sex_female":"4491",
			"sex_unknown":"1220",
			"age_range_20_29":"7378",
			"age_range_30_39":"5366",
			"age_range_other":"11821",
			"type_of_attack_personal_weapons":"6267",
			"type_of_attack_gun":"5257",
			"type_of_attack_knife":"2711"
		},
		{
			"state":"South-Dakota",
			"year":"2019",
			"sex_male":"1953" ,
			"sex_female":"378",
			"sex_unknown":"10",
			"age_range_20_29":"767",
			"age_range_30_39":"637",
			"age_range_other":"902",
			"type_of_attack_personal_weapons":"747",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"391"
		},
		{
			"state":"Tennessee",
			"year":"2019",
			"sex_male":"33691" ,
			"sex_female":"7688",
			"sex_unknown":"3487",
			"age_range_20_29":"12939",
			"age_range_30_39":"7761",
			"age_range_other":"23012",
			"type_of_attack_personal_weapons":"7284",
			"type_of_attack_gun":"9453",
			"type_of_attack_knife":"5127"
		},
		{
			"state":"Texas",
			"year":"2019",
			"sex_male":"48541" ,
			"sex_female":"10028",
			"sex_unknown":"2348",
			"age_range_20_29":"19509",
			"age_range_30_39":"11108",
			"age_range_other":"29012",
			"type_of_attack_personal_weapons":"11540",
			"type_of_attack_gun":"9583",
			"type_of_attack_knife":"6796"
		},
		{
			"state":"Utah",
			"year":"2019",
			"sex_male":"5171" ,
			"sex_female":"884",
			"sex_unknown":"54",
			"age_range_20_29":"1760",
			"age_range_30_39":"1465",
			"age_range_other":"2972",
			"type_of_attack_personal_weapons":"2511",
			"type_of_attack_gun":"634",
			"type_of_attack_knife":"840"
		},
		{
			"state":"Virginia",
			"year":"2019",
			"sex_male":"13972" ,
			"sex_female":"2739",
			"sex_unknown":"1252",
			"age_range_20_29":"5277",
			"age_range_30_39":"3393",
			"age_range_other":"9006",
			"type_of_attack_personal_weapons":"5603",
			"type_of_attack_gun":"2722",
			"type_of_attack_knife":"1866"
		},
		{
			"state":"Vermont",
			"year":"2019",
			"sex_male":"881" ,
			"sex_female":"134",
			"sex_unknown":"1",
			"age_range_20_29":"319",
			"age_range_30_39":"265",
			"age_range_other":"482",
			"type_of_attack_personal_weapons":"449",
			"type_of_attack_gun":"57",
			"type_of_attack_knife":"112"
		},
		{
			"state":"Washington",
			"year":"2019",
			"sex_male":"19831" ,
			"sex_female":"4020",
			"sex_unknown":"870",
			"age_range_20_29":"7362",
			"age_range_30_39":"5562",
			"age_range_other":"12012",
			"type_of_attack_personal_weapons":"8750",
			"type_of_attack_gun":"2099",
			"type_of_attack_knife":"2655"
		},
		{
			"state":"Wisconsin",
			"year":"2019",
			"sex_male":"13441" ,
			"sex_female":"2534",
			"sex_unknown":"309",
			"age_range_20_29":"5626",
			"age_range_30_39":"3178",
			"age_range_other":"7892",
			"type_of_attack_personal_weapons":"4783",
			"type_of_attack_gun":"2273",
			"type_of_attack_knife":"1104"
		},
		{
			"state":"West-Virginia",
			"year":"2019",
			"sex_male":"3425" ,
			"sex_female":"840",
			"sex_unknown":"128",
			"age_range_20_29":"1232",
			"age_range_30_39":"1119",
			"age_range_other":"2029",
			"type_of_attack_personal_weapons":"1192",
			"type_of_attack_gun":"458",
			"type_of_attack_knife":"457"
		},
		{
			"state":"Wyoming",
			"year":"2019",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
// ----------------- AÑO 2018 ----------------------------------------------------------
		{
			"state":"Alabama",
			"year":"2018",
			"sex_male":"61" ,
			"sex_female":"9",
			"sex_unknown":"9",
			"age_range_20_29":"10",
			"age_range_30_39":"18",
			"age_range_other":"51",
			"type_of_attack_personal_weapons":"19",
			"type_of_attack_gun":"9",
			"type_of_attack_knife":"5"
		},
		{
			"state":"Alaska",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20-29":"-",
			"age_range_30-39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Arkansas",
			"year":"2018",
			"sex_male":"11509" ,
			"sex_female":"3086",
			"sex_unknown":"1481",
			"age_range_20_29":"4135",
			"age_range_30_39":"3362",
			"age_range_other":"8713",
			"type_of_attack_personal_weapons":"3659",
			"type_of_attack_gun":"1929",
			"type_of_attack_knife":"1502"
		},
		{
			"state":"Arizona",
			"year":"2018",
			"sex_male":"696" ,
			"sex_female":"167",
			"sex_unknown":"4",
			"age_range_20_29":"251",
			"age_range_30_39":"171",
			"age_range_other":"432",
			"type_of_attack_personal_weapons":"245",
			"type_of_attack_gun":"108",
			"type_of_attack_knife":"93"
		},
		{
			"state":"California",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Colorado",
			"year":"2018",
			"sex_male":"20423" ,
			"sex_female":"3475",
			"sex_unknown":"1441",
			"age_range_20_29":"7053",
			"age_range_30_39":"5170",
			"age_range_other":"13567",
			"type_of_attack_personal_weapons":"8516",
			"type_of_attack_gun":"3736",
			"type_of_attack_knife":"2835"
		},	
		{
			"state":"Connecticut",
			"year":"2018",
			"sex_male":"3390" ,
			"sex_female":"830",
			"sex_unknown":"222",
			"age_range_20_29":"1147",
			"age_range_30_39":"928",
			"age_range_other":"2397",
			"type_of_attack_personal_weapons":"1622",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"803"
		},
		{
			"state":"Canal-Zone",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"District-of-Columbia",
			"year":"2018",
			"sex_male":"619" ,
			"sex_female":"157",
			"sex_unknown":"16",
			"age_range_20_29":"183",
			"age_range_30_39":"36",
			"age_range_other":"503",
			"type_of_attack_personal_weapons":"209",
			"type_of_attack_gun":"38",
			"type_of_attack_knife":"83"
		},
		{
			"state":"Delaware",
			"year":"2018",
			"sex_male":"3675" ,
			"sex_female":"1011",
			"sex_unknown":"66",
			"age_range_20_29":"1260",
			"age_range_30_39":"790",
			"age_range_other":"1092",
			"type_of_attack_personal_weapons":"964",
			"type_of_attack_gun":"563",
			"type_of_attack_knife":"604"
		},
		{
			"state":"Florida",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Georgia",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Hawaii",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Lowa",
			"year":"2018",
			"sex_male":"5299" ,
			"sex_female":"1200",
			"sex_unknown":"82",
			"age_range_20_29":"2038",
			"age_range_30_39":"1547",
			"age_range_other":"3002",
			"type_of_attack_personal_weapons":"2769",
			"type_of_attack_gun":"462",
			"type_of_attack_knife":"763"
		},
		{
			"state":"Idaho",
			"year":"2018",
			"sex_male":"3340" ,
			"sex_female":"625",
			"sex_unknown":"67",
			"age_range_20_29":"1139",
			"age_range_30_39":"927",
			"age_range_other":"1992",
			"type_of_attack_personal_weapons":"1964",
			"type_of_attack_gun":"329",
			"type_of_attack_knife":"455"
		},
		{
			"state":"Illinois",
			"year":"2018",
			"sex_male":"1983" ,
			"sex_female":"410",
			"sex_unknown":"228",
			"age_range_20_29":"851",
			"age_range_30_39":"471",
			"age_range_other":"1495",
			"type_of_attack_personal_weapons":"529",
			"type_of_attack_gun":"213",
			"type_of_attack_knife":"172"
		},
		{
			"state":"Indiana",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"529",
			"age_range_30_39":"213",
			"age_range_other":"1403",
			"type_of_attack_personal_weapons":"529",
			"type_of_attack_gun":"213",
			"type_of_attack_knife":"172"
		},
		{
			"state":"Kansas",
			"year":"2018",
			"sex_male":"7718" ,
			"sex_female":"1635",
			"sex_unknown":"490",
			"age_range_20_29":"2783",
			"age_range_30_39":"2207",
			"age_range_other":"5032",
			"type_of_attack_personal_weapons":"3381",
			"type_of_attack_gun":"1359",
			"type_of_attack_knife":"1053"
		},
		{
			"state":"Kentucky",
			"year":"2018",
			"sex_male":"7664" ,
			"sex_female":"1492",
			"sex_unknown":"60",
			"age_range_20_29":"2694",
			"age_range_30_39":"2030",
			"age_range_other":"5023",
			"type_of_attack_personal_weapons":"2636",
			"type_of_attack_gun":"1922",
			"type_of_attack_knife":"924"
		},
		{
			"state":"Louisiana",
			"year":"2018",
			"sex_male":"2313" ,
			"sex_female":"666",
			"sex_unknown":"325",
			"age_range_20_29":"835",
			"age_range_30_39":"694",
			"age_range_other":"2513",
			"type_of_attack_personal_weapons":"382",
			"type_of_attack_gun":"478",
			"type_of_attack_knife":"439"
		},
		{
			"state":"Massachusetts",
			"year":"2018",
			"sex_male":"12411" ,
			"sex_female":"3524",
			"sex_unknown":"115",
			"age_range_20_29":"4960",
			"age_range_30_39":"3892",
			"age_range_other":"7893",
			"type_of_attack_personal_weapons":"4495",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"2908"
		},
		{
			"state":"Maryland",
			"year":"2018",
			"sex_male":"2193" ,
			"sex_female":"230",
			"sex_unknown":"69",
			"age_range_20_29":"434",
			"age_range_30_39":"254",
			"age_range_other":"1832",
			"type_of_attack_personal_weapons":"422",
			"type_of_attack_gun":"152",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Maine",
			"year":"2018",
			"sex_male":"497" ,
			"sex_female":"69",
			"sex_unknown":"0",
			"age_range_20_29":"182",
			"age_range_30_39":"145",
			"age_range_other":"234",
			"type_of_attack_personal_weapons":"291",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"73"
		},
		{
			"state":"Michigan",
			"year":"2018",
			"sex_male":"30204" ,
			"sex_female":"8701",
			"sex_unknown":"864",
			"age_range_20_29":"13086",
			"age_range_30_39":"7984",
			"age_range_other":"1721",
			"type_of_attack_personal_weapons":"9233",
			"type_of_attack_gun":"5952",
			"type_of_attack_knife":"5538"
		},
		{
			"state":"Minnesota",
			"year":"2018",
			"sex_male":"701" ,
			"sex_female":"121",
			"sex_unknown":"4",
			"age_range_20_29":"248",
			"age_range_30_39":"167",
			"age_range_other":"412",
			"type_of_attack_personal_weapons":"161",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"106"
		},
		{
			"state":"Missouri",
			"year":"2018",
			"sex_male":"7663" ,
			"sex_female":"1958",
			"sex_unknown":"846",
			"age_range_20_29":"2805",
			"age_range_30_39":"1949",
			"age_range_other":"5162",
			"type_of_attack_personal_weapons":"2042",
			"type_of_attack_gun":"1522",
			"type_of_attack_knife":"782"
		},
		{
			"state":"Mississippi",
			"year":"2018",
			"sex_male":"949" ,
			"sex_female":"138",
			"sex_unknown":"68",
			"age_range_20_29":"278",
			"age_range_30_39":"174",
			"age_range_other":"754",
			"type_of_attack_personal_weapons":"151",
			"type_of_attack_gun":"247",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Montana",
			"year":"2018",
			"sex_male":"2701" ,
			"sex_female":"686",
			"sex_unknown":"115",
			"age_range_20_29":"945",
			"age_range_30_39":"892",
			"age_range_other":"1211",
			"type_of_attack_personal_weapons":"1077",
			"type_of_attack_gun":"228",
			"type_of_attack_knife":"311"
		},
		{
			"state":"Nebraska",
			"year":"2018",
			"sex_male":"1329" ,
			"sex_female":"260",
			"sex_unknown":"34",
			"age_range_20_29":"509",
			"age_range_30_39":"374",
			"age_range_other":"793",
			"type_of_attack_personal_weapons":"616",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"134"
		},
		{
			"state":"North-Carolina",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"North-Dakota",
			"year":"2018",
			"sex_male":"1606" ,
			"sex_female":"354",
			"sex_unknown":"37",
			"age_range_20_29":"699",
			"age_range_30_39":"498",
			"age_range_other":"912",
			"type_of_attack_personal_weapons":"1093",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"168"
		},
		{
			"state":"New-Hampshire",
			"year":"2018",
			"sex_male":"1867" ,
			"sex_female":"296",
			"sex_unknown":"15",
			"age_range_20_29":"713",
			"age_range_30_39":"510",
			"age_range_other":"992",
			"type_of_attack_personal_weapons":"1113",
			"type_of_attack_gun":"191",
			"type_of_attack_knife":"322"
		},
		{
			"state":"New-Jersey",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"New-Mexico",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Nevada",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"New-York",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Ohio",
			"year":"2018",
			"sex_male":"25348" ,
			"sex_female":"5261",
			"sex_unknown":"2095",
			"age_range_20_29":"9777",
			"age_range_30_39":"5852",
			"age_range_other":"17325",
			"type_of_attack_personal_weapons":"5175",
			"type_of_attack_gun":"4829",
			"type_of_attack_knife":"3223"
		},
		{
			"state":"Oklahoma",
			"year":"2018",
			"sex_male":"4064" ,
			"sex_female":"825",
			"sex_unknown":"129",
			"age_range_20_29":"1334",
			"age_range_30_39":"1282",
			"age_range_other":"2432",
			"type_of_attack_personal_weapons":"1946",
			"type_of_attack_gun":"354",
			"type_of_attack_knife":"604"
		},
		{
			"state":"Oregon",
			"year":"2018",
			"sex_male":"9705" ,
			"sex_female":"1897",
			"sex_unknown":"190",
			"age_range_20_29":"3440",
			"age_range_30_39":"2962",
			"age_range_other":"5021",
			"type_of_attack_personal_weapons":"4659",
			"type_of_attack_gun":"1016",
			"type_of_attack_knife":"1538"
		},
		{
			"state":"Pennsylvania",
			"year":"2018",
			"sex_male":"105" ,
			"sex_female":"15",
			"sex_unknown":"3",
			"age_range_20_29":"43",
			"age_range_30_39":"23",
			"age_range_other":"57",
			"type_of_attack_personal_weapons":"58",
			"type_of_attack_gun":"7",
			"type_of_attack_knife":"12"
		},
		{
			"state":"Puerto-Rico",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Rhode-Island",
			"year":"2018",
			"sex_male":"1622" ,
			"sex_female":"314",
			"sex_unknown":"31",
			"age_range_20_29":"633",
			"age_range_30_39":"440",
			"age_range_other":"803",
			"type_of_attack_personal_weapons":"796",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"407"
		},
		{
			"state":"South-Carolina",
			"year":"2018",
			"sex_male":"18598" ,
			"sex_female":"4491",
			"sex_unknown":"1220",
			"age_range_20_29":"7378",
			"age_range_30_39":"5366",
			"age_range_other":"11821",
			"type_of_attack_personal_weapons":"6267",
			"type_of_attack_gun":"5257",
			"type_of_attack_knife":"2711"
		},
		{
			"state":"South-Dakota",
			"year":"2018",
			"sex_male":"1953" ,
			"sex_female":"378",
			"sex_unknown":"10",
			"age_range_20_29":"767",
			"age_range_30_39":"637",
			"age_range_other":"902",
			"type_of_attack_personal_weapons":"747",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"391"
		},
		{
			"state":"Tennessee",
			"year":"2018",
			"sex_male":"33691" ,
			"sex_female":"7688",
			"sex_unknown":"3487",
			"age_range_20_29":"12939",
			"age_range_30_39":"7761",
			"age_range_other":"23012",
			"type_of_attack_personal_weapons":"7284",
			"type_of_attack_gun":"9453",
			"type_of_attack_knife":"5127"
		},
		{
			"state":"Texas",
			"year":"2018",
			"sex_male":"48541" ,
			"sex_female":"10028",
			"sex_unknown":"2348",
			"age_range_20_29":"19509",
			"age_range_30_39":"11108",
			"age_range_other":"29012",
			"type_of_attack_personal_weapons":"11540",
			"type_of_attack_gun":"9583",
			"type_of_attack_knife":"6796"
		},
		{
			"state":"Utah",
			"year":"2018",
			"sex_male":"5171" ,
			"sex_female":"884",
			"sex_unknown":"54",
			"age_range_20_29":"1760",
			"age_range_30_39":"1465",
			"age_range_other":"2972",
			"type_of_attack_personal_weapons":"2511",
			"type_of_attack_gun":"634",
			"type_of_attack_knife":"840"
		},
		{
			"state":"Virginia",
			"year":"2018",
			"sex_male":"13972" ,
			"sex_female":"2739",
			"sex_unknown":"1252",
			"age_range_20_29":"5277",
			"age_range_30_39":"3393",
			"age_range_other":"9006",
			"type_of_attack_personal_weapons":"5603",
			"type_of_attack_gun":"2722",
			"type_of_attack_knife":"1866"
		},
		{
			"state":"Vermont",
			"year":"2018",
			"sex_male":"881" ,
			"sex_female":"134",
			"sex_unknown":"1",
			"age_range_20_29":"319",
			"age_range_30_39":"265",
			"age_range_other":"482",
			"type_of_attack_personal_weapons":"449",
			"type_of_attack_gun":"57",
			"type_of_attack_knife":"112"
		},
		{
			"state":"Washington",
			"year":"2018",
			"sex_male":"19831" ,
			"sex_female":"4020",
			"sex_unknown":"870",
			"age_range_20_29":"7362",
			"age_range_30_39":"5562",
			"age_range_other":"12012",
			"type_of_attack_personal_weapons":"8750",
			"type_of_attack_gun":"2099",
			"type_of_attack_knife":"2655"
		},
		{
			"state":"Wisconsin",
			"year":"2018",
			"sex_male":"13441" ,
			"sex_female":"2534",
			"sex_unknown":"309",
			"age_range_20_29":"5626",
			"age_range_30_39":"3178",
			"age_range_other":"7892",
			"type_of_attack_personal_weapons":"4783",
			"type_of_attack_gun":"2273",
			"type_of_attack_knife":"1104"
		},
		{
			"state":"West-Virginia",
			"year":"2018",
			"sex_male":"3425" ,
			"sex_female":"840",
			"sex_unknown":"128",
			"age_range_20_29":"1232",
			"age_range_30_39":"1119",
			"age_range_other":"2029",
			"type_of_attack_personal_weapons":"1192",
			"type_of_attack_gun":"458",
			"type_of_attack_knife":"457"
		},
		{
			"state":"Wyoming",
			"year":"2018",
			"sex_male":"-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20_29":"-",
			"age_range_30_39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons":"-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		}
	];

	
	db.insert(attacks_stats_initial_data);

	//Lanzamos el código 200 indicando que se han cargado los datos iniciales de forma satisfactoria
	//(Lo indicamos con el 200 por consola, y con un pequeño html para el usuario de forma gráfica)

	res.status(200).send("Initial data loaded succesfully!");

});



//1)GET a la lista de recursos devuelve una lista con todos los recursos
//(GET para cargar el array completo)

app.get(BASE_API_PATH + "/attacks-stats", (req,res) => {
	
	let query = {};
        let offset = 0;
        let limit = Number.MAX_SAFE_INTEGER;

        // Pagination
        if (req.query.limit) {
            limit = parseInt(req.query.limit);
            delete req.query.limit;
        }

        if (req.query.offset) {
            offset = parseInt(req.query.offset);
            delete req.query.offset;
        }

        // Search
        if (req.query.state) query["state"] = req.query.state;
        if (req.query.year) query["year"] = req.query.year;
        if (req.query.sex_male) query["sex_male"] = req.query.sex_male;
        if (req.query.sex_female) query["sex_female"] =req.query.sex_female;
        if (req.query.sex_unknown) query["sex_unknown"] = req.query.sex_unknown;
		if (req.query.age_range_20_29) query["age_range_20_29"] = req.query.age_range_20_29;
		if (req.query.age_range_30_39) query["age_range_30_39"] = req.query.age_range_30_39;
		if (req.query.age_range_other) query["age_range_other"] = req.query.age_range_other;
		if (req.query.type_of_attack_personal_weapons) query["type_of_attack_personal_weapons"] = req.query.type_of_attack_personal_weapons;
		if (req.query.type_of_attack_gun) query["type_of_attack_gun"] = req.query.type_of_attack_gun;
		if (req.query.type_of_attack_knife) query["type_of_attack_knife"] = req.query.type_of_attack_knife;
	
	 db.find(query).sort({ state: 1, year: -1 }).skip(offset).limit(limit).exec(function (err, resources) {
            if (err) {
                console.error(DATABASE_ERR_MSSG + err);
                res.sendStatus(500);
            } else {
                if (resources.length != 0) {
                   
					var aux = resources.map((c)=>{
						return {state : c.state, year: c.year, sex_male:c.sex_male, sex_female: c.sex_female, sex_unknown:c.sex_unknown , 		age_range_20_29:c.age_range_20_29, age_range_30_39:c.age_range_30_39, age_range_other: c.age_range_other, type_of_attack_personal_weapons:c.type_of_attack_personal_weapons, type_of_attack_gun: c.type_of_attack_gun, type_of_attack_knife:c.type_of_attack_knife   }
					});
					

                    // res.status(200).send(JSON.stringify(resourcesToSend, null, 2));
                    res.status(200).send(aux);
                } else {
					var array = [];
                    res.status(200).send(array);
                }

            }

        });
    });



//2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

app.post(BASE_API_PATH+"/attacks-stats", (req,res)=>{
	
	var data = req.body;
	
	var esta = false;
	var bodyok = true;
	
	db.find({state:String(req.body.state), year:String(req.body.year) }, function(err, record) {
    	
			if (record.length!=0) {
       	 			esta=true;
			
				res.status(409).send("Error. Ya Existe un recurso con el mismo Estado y Año");
    
			}else{
			
			// -----------------Comprueba body------------------------ 
				var cantidadDeClaves = Object.keys(data).length;
			
				if(cantidadDeClaves!=11){
					bodyok = false;
				}
	
		
				var aux = Object.keys(data);
	
				if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "sex_male"|| aux[3]!= "sex_female" || aux[4] != "sex_unknown" || aux[5] != "age_range_20_29" || aux[6] != "age_range_30_39" || aux[7] != "age_range_other" || aux[8] != "type_of_attack_personal_weapons" || aux[9] != "type_of_attack_gun" || aux[10] != "type_of_attack_knife"){
					bodyok =false;
				}
			// ------------------------------------------------------- 
			
			if( bodyok){
		
				db.insert(data);
				//"Metemos" en el array de datos para este recurso lo recibido en el POST
				res.status(201).send("Recurso añadido satisfactoriamente");
		
			}else if(!bodyok){
			 
				res.status(400).send("Error. El formato del body es Erroneo");
			}
			
			}
		
	});
	
});


//3) GET a un recurso (en concreto), devuelve ese recurso
//En nuestro caso, accedemos a los elementos por estado y año (p ej.)

app.get(BASE_API_PATH+"/attacks-stats/:state/:year", (req,res)=>{ //Cuando llamen a /api/v1/attacks-stats/
	
	db.find({state:String(req.params.state), year:String(req.params.year)  }, function(err, record) {
		
		console.log(record);
		
		if (record.length==0) {
       	
			res.status(404).send("No hemos encontrado el recurso");
    
		}else{
			
			
			var aux = record.map((c)=>{
				return {state : c.state, year: c.year, sex_male:c.sex_male, sex_female: c.sex_female, sex_unknown:c.sex_unknown , 		age_range_20_29:c.age_range_20_29, age_range_30_39:c.age_range_30_39, age_range_other: c.age_range_other, type_of_attack_personal_weapons:c.type_of_attack_personal_weapons, type_of_attack_gun: c.type_of_attack_gun, type_of_attack_knife:c.type_of_attack_knife   }
			});
			res.status(200).send(aux[0]);
		}
		
		});

});


//4) DELETE a un recurso, borra ese recurso (en concreto)
//En nuestro caso, borramos el recurso por estado y año

app.delete(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 
	//Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	
	db.remove({state:String(req.params.state), year:String(req.params.year)},{},(err, numEvictionsRemoved)=>{
			
		console.log(err);
		
		if(err!=null){
				console.error("ERROR deleting DB evictions in DELETE: "+err);
				res.sendStatus(500);
			}else{
				if(numEvictionsRemoved==0){
					res.status(404).send("No hemos encontrado el recurso");
				}else{
					res.status(200).send("Recurso eliminado satisfactoriamente :D");
				}
			}
		})
});


//5) PUT a un recurso (en concreto), actualiza ese recurso
//actualizamos los que coincidan con 'state' y 'year'

app.put(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 

	var data = req.body;
	
	var esta = false;
	var bodyok = true;
	
	var aux = Object.keys(data);
	
		if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "sex_male"|| aux[3]!= "sex_female" || aux[4] != "sex_unknown" || aux[5] != "age_range_20_29" || aux[6] != "age_range_30_39" || aux[7] != "age_range_other" || aux[8] != "type_of_attack_personal_weapons" || aux[9] != "type_of_attack_gun" || aux[10] != "type_of_attack_knife"){
			bodyok =false;
		}
	
	
	db.find({state:String(req.params.state), year:String(req.params.year) }, function(err, record) {
		
		console.log(record);
		if(err!=null){
				console.error("ERROR deleting DB evictions in DELETE: "+err);
				res.sendStatus(500);
		}else{
			
			
			if (record.length==0) {
       	
				res.status(404).send("No hemos encontrado el recurso");
    
			}else{
			
				if(!bodyok){
					
					 res.status(400).send("Error. El formato del body es Erroneo");
					
				}else{
					
					if(String(req.params.state) !=  req.body.state || String(req.params.year) !=  req.body.year  ){
					   
						
						res.status(409).send("Conflicto. Los identificadores de State y Year deben ser iguales");
						
					   }else{
					   
						   
						   db.update({state:String(req.params.state), year:String(req.params.year)}, 
							  {state:String(req.params.state), year:String(req.params.year), sex_male: req.body.sex_male, sex_female:req.body.sex_female, sex_unknown:req.body.sex_unknown, age_range_20_29:req.body.age_range_20_29, age_range_30_39:req.body.age_range_30_39, age_range_other:req.body.age_range_other, type_of_attack_personal_weapons:req.body.type_of_attack_personal_weapons, type_of_attack_gun:req.body.type_of_attack_gun, type_of_attack_knife:req.body.type_of_attack_knife}, {}, function (err, numReplaced) {
										
						if(err) {
							console.error(err);
							res.status(500).send("Error en la base de datos");
						}else{
							res.status(200).send(String(req.params.state)+" "+String(req.params.year)+" Ha sido actualizado exitosamente");
							
						}
								
					
					});
						   
						   
						   
					   }
					
					
					
				}
				
			}
			
		}
		
		
		});

});




//6)POST a un recurso (en concreto), debe de dar un error de método no permitido 

app.post(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});


//7)PUT a la lista de recursos (completa) debe dar un error de no permitido

app.put(BASE_API_PATH+"/attacks-stats", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});

//8)DELETE a la lista de recursos (completa) borra todos los recursos
//En otras palabras, borramos todos los elementos existentes en el array inicial

app.delete(BASE_API_PATH+"/attacks-stats", (req,res)=>{
		
	db.remove({}, { multi: true }, function(err, numDeleted) {
     console.log('Deleted', numDeleted, 'user(s)');
}); 
	res.status(200).send("Lista de recursos eliminada satisfactoriamente");

});
}