//'Funcion constructura'
function Persona(nombre, apellido, edad) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

//'Generar Instancia'
const persona1 = new Persona("Juan", "Perez", 30);
console.log(persona1);

//'Generar mas instancias'
const persona2 = new Persona("Daniel", "Guerrero", 22);
console.log(persona2);

//Agregar propiedad a funcion constructora con Prototipe'
Persona.prototype.telefono = "555-555-555";

//Agregar propiedad para instancia creada'
persona1.nacionalidad = "Mexicano";

("Agregar metodo a funcion constructora con Prototipe");
Persona.prototype.saludar = function () {
	console.log(`Hola, me llamo ${this.nombre}`);
};

persona1.saludar();
persona2.saludar();
