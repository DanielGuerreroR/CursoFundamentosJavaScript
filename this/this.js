//:'Ejemplo de this'
class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
}
//'Crear instancia'
const persona1 = new Persona("Alice", 25);

console.log(persona1);

//'Manipular propiedades con metodos y this'
persona1.nuevoMetodo = function () {
	console.log(`Mi nombre es ${this.nombre}`);
};

persona1.nuevoMetodo();
