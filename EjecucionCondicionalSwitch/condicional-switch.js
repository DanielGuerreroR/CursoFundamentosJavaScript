// Estructura basica switch'
// switch(expresion){
// 	case valor1:
// 		//codigo a ejecutar
// 		break;
// 	case valor2:
// 		//codigo a ejecutar
// 		break;
// 	default:
// 		//codigo a ejecutar
// 		break;
// }

// ejemplo1'
let expr = "Papayas";
switch (expr) {
	case "Naranjas":
		console.log("Las Naranjas cuestan $20 el kilo");
		break;
	case "Manzanas":
		console.log("Las Manzanas cuestan $43 el kilo");
		break;
	case "Platanos":
		console.log("Los Platanos cuestan $30 el kilo");
		break;
	case "Mangos":
	case "Papayas":
		console.log("Los Mangos y las Papayas cuestan $25 el kilo");
		break;
	default:
		console.log(`Lo siento, no contamos con ${expr}`);
}

// ejemplo2'
let expr2 = "Uvas";
switch (expr2) {
	case "Naranjas":
		console.log("Las Naranjas cuestan $20 el kilo");
		break;
	case "Manzanas":
		console.log("Las Manzanas cuestan $43 el kilo");
		break;
	case "Platanos":
		console.log("Los Platanos cuestan $30 el kilo");
		break;
	case "Mangos":
	case "Papayas":
		console.log("Los Mangos y las Papayas cuestan $25 el kilo");
		break;
	default:
		console.log(`Lo siento, no contamos con ${expr2}`);
}
