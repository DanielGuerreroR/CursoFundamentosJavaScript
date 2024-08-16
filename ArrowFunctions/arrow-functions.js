const fictionalCharacter = {
	name: "Uncle Ben",
	messageWithTraditionalFunction: function (message) {
		console.log(`${this.name} says: ${message}`);
	},
	messageWithArrowFunction: (message) => {
		console.log(`${this.name} says: ${message}`);
	},
};

fictionalCharacter.messageWithTraditionalFunction(
	"Whit great power comes great responsability."
);
fictionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");
