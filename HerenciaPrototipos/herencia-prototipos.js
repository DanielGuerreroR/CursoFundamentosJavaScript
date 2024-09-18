//HERENCIA EN LA PRACTICA

//'Crear clase constructor'
class Animal {
	constructor(nombre, tipo) {
		this.nombre = nombre;
		this.tipo = nombre;
	}
	emitirSonido() {
		console.log("el animal emite un sonido");
	}
}

// 'Clase que extiende'
class Perro extends Animal {
	constructor(nombre, tipo, raza) {
		super(nombre, tipo);
		this.raza = raza;
	}
	//overriding method
	emitirSonido() {
		console.log("El perro ladra");
	}
	correr() {
		console.log(`${this.nombre} corre alegremente`);
	}
}

// 'Generar una primera instancia'
const perro1 = new Perro("Boludo", "Perro", "Pug");
console.log(perro1);

// 'Utilizando metodos'
perro1.correr();
perro1.emitirSonido();

//PROTOTIPOS EN LA PRACTICA

//'Agregar metodo a instancia'
perro1.nuevoMetodo = function () {
	console.log("Este es un metodo");
};

console.log(perro1);
perro1.nuevoMetodo();

//'Injectando metodo al prototipo de la clase padre'
Perro.prototype.segundoMetodo = function () {
	console.log("Es otro nuevo metodo");
};

perro1.segundoMetodo();
console.log(perro1);

//'Ejemplo para poder ver la cadena de prototipao'
let currentPrototype = Object.getPrototypeOf(perro1);

for (
	;
	currentPrototype !== null;
	currentPrototype = Object.getPrototypeOf(currentPrototype)
) {
	console.log(currentPrototype);
}
