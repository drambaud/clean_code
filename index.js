/**
 * Fichier de lancement du serveur de l'API
 */


/***********************************************/
/* 			Variables et module serveurs 	   */
/***********************************************/

const express  			 = require('express');
const serverFunctions    = require('./src/serverFunctions');
const api     			 = express();
const port     			 = 5000;
var routerApi 			 = express.Router();

//Lancement du serveur
api.listen(port, () => {
	console.log("Serveur API lancé sur le port : " + port);
});

/***********************************************/
/* 			Ajout des routes à l'api 		   */
/***********************************************/

//Route de base
api.get('/', (req, res) => {
	res.json({
	status: "Hello world",
	message:"Accueil api"
	})
});

routerApi.route("/client/scanner/generateur").post(serverFunctions.generateur);
routerApi.route('/client/scanner/encoding').post(serverFunctions.encoding);
routerApi.route('/client/scanner/decoding').post(serverFunctions.decoding);
routerApi.route('/client/scanner/validation').post(serverFunctions.validation);

api.use(routerApi);
