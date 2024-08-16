//Funciones puras
// Estructura de funcion pura'
function sum(a, b) {
	return a + b;
}

// 'Conbinacion de dos funciones puras'
//Funcion pura
function square(x) {
	return x * x;
}
//Funcion pura
function addTen(y) {
	return y + 10;
}
//Conbinacion de dos funciones pura
const number = 5;
const finalResult = addTen(square(number));

//Funcion impura
// 'Modificacion funcion pura para a impura'
function sum(a, b) {
	console.log("A: ", a);
	return a + b;
}

// 'Modificar variables globales'
let total = 0;

function sumWithSideEffect(a) {
	total += a;
	return total;
}
