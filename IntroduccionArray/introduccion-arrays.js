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
