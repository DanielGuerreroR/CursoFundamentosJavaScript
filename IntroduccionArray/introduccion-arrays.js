// COMO HACER ARRAYS

//'1. new Array () o Array'
const fruits = Array("apple", "banana", "orange");
console.log(fruits);

//'Array con solo un numero'
const justOneNumber = Array(12);
console.log(justOneNumber);

//'Varios numeros'
const numbers = Array(1, 2, 3, 4);
console.log(numbers);

//'2. Array literal syntax'
const oneNumber = [4];
console.log(oneNumber);

//'Array vacio'
const emptyArray = [];
console.log(emptyArray);

//'Arrays de muchos datos string'
const sport = ["soccer", "tennis", "rugby"];
console.log(sport);

//Arrays mixtos'
const recipeIngredients = [
	"Flour",
	true,
	2,
	{
		ingredient: "milk",
		quantity: "1 cup",
	},
	false,
];
console.log(recipeIngredients);

//ACCEDER A UN ARRAY

//'Acceder a un valor por indice'
const firstFruit = fruits[0];
console.log(firstFruit);

//'Tamaño de un array'
const numberOfFruits = fruits.length;
console.log(numberOfFruits);

//MUTABILITY

//'Como agregar un elemento a un array'
fruits.push("watermelon");
console.log(fruits);

//INMUTABILITY

//'Juntar 2 arrays'
const newFruits = fruits.concat(["grape", "kiwi"]);
console.log(fruits);
console.log(newFruits);

//'Revisar que un array es un array con Array.isArray()'
const isArray = Array.isArray(fruits);
console.log(isArray);

//'Ejercicio practico:Suma de todos los elementos de un array'
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i of numbersArray) {
	sum = sum + i;
}
console.log(sum);
