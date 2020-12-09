var treatmentTest = require("../src/stringAndNumberTreatment");
var serverFunctions = require("../src/serverFunctions");

/*********************************************/
/*			Concactenation test				 */
/*********************************************/

test("Concactenation d'une string", function () {
	//Cas null
	expect(treatmentTest.concactenate("")).toBe(null)
	expect(treatmentTest.concactenate("")).toBe("")
	//Cas nombre
	expect(treatmentTest.concactenate(1+1)).toBe(2)
	expect(treatmentTest.concactenate(35)).toBe(35)
	//Cas char et string
	expect(treatmentTest.concactenate("a")).toBe("a")
	expect(treatmentTest.concactenate("Bonjour")).toBe("Bonjour")
	//Cas plusieurs paramètres
	expect(treatmentTest.concactenate(1, 2)).toBe(12)
	expect(treatmentTest.concactenate("a", "b")).toBe("ab")
	expect(treatmentTest.concactenate("", "a")).toBe("a")
	expect(treatmentTest.concactenate("a", "")).toBe("a")
	expect(treatmentTest.concactenate(["a", "b"])).toBe(["a", "b"])
});

/*********************************************/
/*					Date test				 */
/*********************************************/

test("Test numéro du jour de l'année", function () {
	expect(treatmentTest.getNumberDayOfYear(new Date(1607509921357)).toBe(344)
	expect(treatmentTest.getNumberDayOfYear(new Date(1583000033000)).toBe(366)
})

/*********************************************/
/*			Encoding / Decoding test		 */
/*********************************************/

//Encoding
test("Test d'encodage en base 64", function() {
	expect(treatmentTest.encode("Salut")).toBe("U2FsdXQ=")
	expect(treatmentTest.encode("a")).toBe("YQ==")
	expect(treatmentTest.encode("Longue chaine de caracteres pour tester la fonction")).toBe("TG9uZ3VlIGNoYWluZSBkZSBjYXJhY3RlcmVzIHBvdXIgdGVzdGVyIGxhIGZvbmN0aW9u")
})

//Decoding
test("Test de décodage de base 64", function() {
	expect(treatmentTest.decode("U2FsdXQ=")).toBe("Salut")
	expect(treatmentTest.decode("YQ==")).toBe("a")
	expect(treatmentTest.decode("TG9uZ3VlIGNoYWluZSBkZSBjYXJhY3RlcmVzIHBvdXIgdGVzdGVyIGxhIGZvbmN0aW9u")).toBe("Longue chaine de caracteres pour tester la fonction")
})


//Encoding in decoding
test("Test d'encodage dans un décodage", function() {
	expect(treatmentTest.decode(treatmentTest.encode("Salut"))).toBe("Salut")
	expect(treatmentTest.decode(treatmentTest.encode("a"))).toBe("a")
	expect(treatmentTest.decode(treatmentTest.encode("Longue chaine de caracteres pour tester la fonction"))).toBe("Longue chaine de caracteres pour tester la fonction")
})

//Decoding in encoding
test("Test d'encodage dans un décodage", function() {
	expect(treatmentTest.encode(treatmentTest.decode("U2FsdXQ="))).toBe("U2FsdXQ=")
	expect(treatmentTest.encode(treatmentTest.decode("YQ=="))).toBe("YQ==")
	expect(treatmentTest.encode(treatmentTest.decode("TG9uZ3VlIGNoYWluZSBkZSBjYXJhY3RlcmVzIHBvdXIgdGVzdGVyIGxhIGZvbmN0aW9u"))).toBe("TG9uZ3VlIGNoYWluZSBkZSBjYXJhY3RlcmVzIHBvdXIgdGVzdGVyIGxhIGZvbmN0aW9u")
})

/*********************************************/
/*				Is not null		true		 */
/*********************************************/

test("not null", function () {
	expect(treatmentTest.objectIsNotNull("a")).toBe(true)
	expect(treatmentTest.objectIsNotNull(1)).toBe(true)
	expect(treatmentTest.objectIsNotNull("Longue chaine de caracteres")).toBe(true)
	expect(treatmentTest.objectIsNotNull("Oui")).toBe(true)
	expect(treatmentTest.objectIsNotNull(" ")).toBe(true)
	expect(treatmentTest.objectIsNotNull(["a", "b"])).toBe(true)
	expect(treatmentTest.objectIsNotNull([" ", " "])).toBe(true)
	expect((!(!treatmentTest.objectIsNotNull("Oui")))).toBe(true)
})

/*********************************************/
/*				Is not null 	false		 */
/*********************************************/

test("null", function () {
	expect(treatmentTest.objectIsNotNull(null)).toBe(false)
	expect(treatmentTest.objectIsNotNull()).toBe(false)
})

/*********************************************/
/*			Number	Is not null 	true	 */
/*********************************************/

test("number is not null true", function () {
	expect(numberIsNotNull(0)).toBe(true)
	expect(numberIsNotNull(1)).toBe(true)
	expect(numberIsNotNull(-5)).toBe(true)
	expect(numberIsNotNull(1+3)).toBe(true)
})

/*********************************************/
/*			Number	Is not null 	false	 */
/*********************************************/

test("number is not null false", function () {
	expect(numberIsNotNull(null)).toBe(false)
	expect(numberIsNotNull("null")).toBe(false)
	expect(numberIsNotNull("ah")).toBe(false)
	expect(numberIsNotNull("chaine de caracteres")).toBe(false)
})

/*********************************************/
/*			String	Is not null 	true	 */
/*********************************************/


test("String is not null true ", function () {
	expect(treatmentTest.stringIsNotNull("a")).toBe(true)
	expect(treatmentTest.stringIsNotNull("Longue chaine de caracteres")).toBe(true)
	expect(treatmentTest.stringIsNotNull("Oui")).toBe(true)
	expect(treatmentTest.stringIsNotNull("1")).toBe(true)
	expect((!(!treatmentTest.stringIsNotNull("Oui")))).toBe(true)
})

/*********************************************/
/*			String	Is not null 	false	 */
/*********************************************/

test("String is not null true ", function () {
	expect(treatmentTest.stringIsNotNull(1)).toBe(false)
	expect(treatmentTest.stringIsNotNull("")).toBe(false)
	expect(treatmentTest.stringIsNotNull(" ")).toBe(false)
	expect(treatmentTest.stringIsNotNull(null)).toBe(false)
	expect((!(!treatmentTest.stringIsNotNull("")))).toBe(false)
})


