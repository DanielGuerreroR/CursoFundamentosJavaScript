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

//'Poder ver los prototipos'
Animal.prototype;
Perro.prototype;
