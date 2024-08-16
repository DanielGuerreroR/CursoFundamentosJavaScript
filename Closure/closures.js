// 'Ejemplo de Closure'
function outerFunction() {
	let outerVariable = "I am from outer function";

	function innterFunction() {
		console.log(outerVariable);
	}

	return innterFunction;
}

const closureExample = outerFunction();
closureExample();

("Cuidado con los Closure");
function createCounter() {
	let count = 0;

	return function () {
		count++;
		console.log(count);
	};
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();

// 'Contextos de los Closure'
function outer() {
	let message = "Hello, ";
	function inner(name) {
		console.log(message + name);
	}
	return inner;
}

const closureA = outer();
const closureB = outer();

closureA("Alice");
closureB("Bob");
