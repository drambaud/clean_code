/**
 * Fichier qui contient les fonctions pour le traitement de la date
*/
module.exports = {
	/**
	 * Fonction qui retourne la date avec le format : AAAAJJJHHmmss
	 * @param {Date} La date à formater, valeur optionnelle qui est initialisée si en entrée de la fonction est nulle
	 * @returns {String} La date qui est formatée
	*/
	getDateWithFormat : (date = null) => {
		if(date == null) {
			date = new Date();
		}
		return date.getYear() 
			+ getNumberDayOfYear(date)
			+ date.getHours()
			+ date.getMinutes()
			+ date.getSeconds();
	},
	
	/**
	 * Fonction qui retourne le numéro du jour dans l'année
	 * @param {Date} Une date pour récupérer la numéro
	 * @returns {Number} La variable qui contient le numéro du jour dans l'année
	 * Utilisation de la bibliothèque Moment.js
	*/
	getNumberDayOfYear : (date) => {
		var dateNumber = moment(date, "MM-DD-YYYY").dayOfYear();
		return dateNumber;
	}
}
