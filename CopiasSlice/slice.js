// slice()
const animals = ["ant", "bison", "camel", "duck", "elephant"];
//un solo parametro
console.log("Un solo parametro: " + animals.slice(2));
//dos parametros
console.log("Dos parametro: " + animals.slice(2, 4));
console.log("Dos parametro: " + animals.slice(1, 6));
//uso de negativos
console.log("Parametros negativos: " + animals.slice(-2));
//mescla de negativos y positivos
console.log("Positivo y negativo: " + animals.slice(2, -1));
//sin parametros
console.log("Sin parametros: " + animals.slice());
