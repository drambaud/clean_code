// Déclaration des modules nécessaires
var treatment = require('./stringAndNumberTreatment');
var date = require('./date');

module.exports = {
    
    /**
     * Fonction qui s'occupe de la génération de l'id de traitement
     * @param {Object} req La requête du client
     * @param {Object} res La réponse du serveur
     * @returns {Void} Rien à retourner
     */
    generateur : async (req, res) => {
        if(treatment.stringIsNotNull(req.body.user) || treatment.numberIsNotNull(req.body.scanner)) {
            return res.status(400).json({
                status:"Failed",
                message:"Error of parameters"
                })
        }
        try {
            var resultat = treatment.concactenate(treatment.encode(req.body.user), req.body.scanner, date.getDateWithFormat())
            return res.status(200).json({
                status:"Ok",
                resultat:treatment.encode(resultat)
                })
        } catch(error) {
            if(error instanceof TypeError)
                return res.status(400).json({
                    status:"Failed",
                    message:`Wrong type of object`
                    })
            else
                return res.status(500).json({
                    status:"Failed",
                    message:`An error was occured`,
                    Error:Error
                    })
        }
    },
   /**
     * Fonction qui s'occupe de la validation de l'id de traitement
     * @param {Object} req La requête du client
     * @param {Object} res La réponse du serveur
     * @returns {Void} Rien à retourner
     */
    validation : async (req, res) => {
        if(!treatment.stringIsNotNull(req.body.user) || !treatment.numberIsNotNull(req.body.scanner) || !treatment.stringIsNotNull(req.body.date) || !treatment.stringIsNotNull(req.body.idtraitement)) {
            return res.status(400).json({
                status: "Failed",
                request: req.body.idtraitement,
                result: "No validation"
            })
        try {
            var idTraitement = treatment.decode(req.body.idtraitement);
            if(idTraitement == req.body.idtraitement) {
                return res.status(200).json({
                    status:"Ok",
                    request: req.body.idtraitement,
                    result "Validation"
                })
            }
        } catch(error) {
            if(error instanceof TypeError)
                return res.status(400).json({
                    status:"Failed",
                    request: req.body.idtraitement,
                    result: "No validation"
                })
            else
                return res.status(500).json({
                    status:"Failed"
                    request: req.body.idtraitement,
                    result: "No validation"
                })
        }
        }
    },



    /**
     * Fonction qui applique une fonction sur une string donnée
     * @param {Object} req La requête du client
     * @param {Object} res La réponse du serveur
     * @returns {Void} La fonction ne retourne rien
     */
    actionOnString : async (req, res, action, descriptor) => {
        if(!treatment.stringIsNotNull(req.body.string)){
            return res.status(400).json({
                status:"Failed",
                message:descriptor + " is null"
            })
        }
        try {
            return res.status(200).json({
                status:"Ok",
                result:action(req.body.string)
            })
        } catch(error) {
            if(error instanceof TypeError)
                return res.status(400).json({
                    status:"Failed",
                    message:descriptor + " has a problem of type"
                })
            else
                return res.status(500).json({
                    status:"Failed",
                    message:descriptor + " has been encountered an error",
                    Error:Error
                })
        }
    },
    
    /**
     * Fonction d'encodage de string
     * @param {Object} req La requête du client
     * @param {Object} res La réponse du serveur
     * @returns {Void} Rien à retourner
     */
    encoding : async (req, res) => {
        module.exports.actionOnString(req, res, treatment.encode, "La string à encoder")
    },
    
    /**
     * Fonction de décodaage de string
     * @param {Object} req La requête du client
     * @param {Object} res La réponse du serveur
     * @returns {Void} Rien à retourner
     */
    decoding : async (req, res) => {
        module.exports.actionOnString(req, res, treatment.decode, "La string à décoder")
    }
    
}
