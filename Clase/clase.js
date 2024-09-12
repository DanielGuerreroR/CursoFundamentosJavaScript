//'Crear clase'
class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	saludar() {
		console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} años`);
	}
}

//'Crear instancias con clases'
const persona1 = new Persona("Pericles", 18);

//'Utilizar metodos con las instancias'
persona1.saludar();
