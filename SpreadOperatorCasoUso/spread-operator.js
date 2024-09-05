//'1. Copia de array'
const originalArray = [1, 2, 3, 4, 5];
const copyOfAnArray = [...originalArray];

console.log(originalArray);
console.log(copyOfAnArray);

//'2. Combinar Arrays'
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const convinedArray = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(convinedArray);

//'3. Crear arrays con elementos adicionales'
const baseArray = [1, 2, 3];
const arrayAditionalElements = [...baseArray, 4, 5, 6];

console.log(baseArray);
console.log(arrayAditionalElements);

//'4. Pasarle parametros a una funcion'
function sum(a, b, c) {
	return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result);
