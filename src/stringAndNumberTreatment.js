/**
 * Ensemble de fonctions pour l'encodage et le décodage de string et vérifier
*/

module.exports = {

	/**
	 * Fonction qui encode une string en base64
	 * @param La String à encoder en base64
	*/
	encode : (string) => {
		Buffer.from(string).toString('base64');
	},
	
	/**
	 * Fonction qui décode une string qui est en base64
	 * @param La String en base64 à décoder
	*/
	decode : (string) => {
		Buffer.from(string).toString('utf8');
	},
	
	/**
	 * Fonction qui fait une concaténation des paramètres dans une string
	 * @param ...elements l'ensemble des éléments à concacténer entre eux
	 * @returns Tous les élements accumulés dans une seule variable
	*/
	concactenate : (...elements) => {
		if(elements.length == 0){
			return ""; 
		}
		return elements.reduce((lastValue, currentValue) => lastValue + currentValue.toString());
	},
	
	/**
	 * Fonction qui vérifie si l'objet donné n'est pas nul
	 * @param {String} anObject l'objet à tester 
	 * @returns {Boolean} return true si l'objet n'est pas nul
	 */
	objectIsNotNull : (anObject) => {
	    anObject !== null
	},
	
	/**
	 * Fonction qui vérifie grâce à plusieurs condiions réunies si une string n'est pas nulle et est bien une string
	 * @param {String} aString la string à tester
	 * @returns {Boolean} return true si la string est nulle
	 */
	stringIsNotNull : (aString) => {
	    objectIsNotNull(aString) && typeof aString === "string" && aString.length !== 0 && aString !== "" && aString !== " "
	},
	
	/**
	 * Vérifie si la valeur en entrée n'est pas nulle, 
	 * @param {Integer} aNumber Le nombre à tester
	 * @returns {Boolean} return vrai si aNumber n'est pas nul et est un entier
	 */
	numberIsNotNull : (aNumber) => {
	    objectIsNotNull(aNumber) && typeof aNumber === "number"
	}

}
