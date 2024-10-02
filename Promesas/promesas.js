//'Crear una nueva instancia de promesa'
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let operationSuccesful = true;
		if (operationSuccesful) {
			resolve("La operacion fue exitosa");
		} else {
			reject("Fallo la operacion");
		}
	}, 2000);
});
