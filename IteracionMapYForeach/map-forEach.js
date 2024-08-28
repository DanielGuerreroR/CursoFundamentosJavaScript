//map()
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(numbers);
console.log(squaredNumbers);

//forEach()
const colors = ["red", "pink", "blue"];
const iteratedColors = colors.forEach((color) => console.log(color));

console.log(colors);
console.log(iteratedColors);

//'Ejercicio: Fahrenheit a Celsius'
const temperaturasEnFahrenheit = [32, 68, 95, 104, 212];
const temperaturasEnCelsius = temperaturasEnFahrenheit.map(
	(fahrenheit) => (5 / 9) * (fahrenheit - 32)
);

console.log("Temperatura en Fahrenheit: ", temperaturasEnFahrenheit);
console.log("Temperatura en Celsius: ", temperaturasEnCelsius);

//'Ejercicio:sumar elementos de un array'
const newNumbers = [1, 2, 3, 4, 5];
let sum = 0;

newNumbers.forEach((number) => {
	sum += number;
});

console.log("Array of numbers: ", newNumbers);
console.log("Sum of numbers: ", sum);
