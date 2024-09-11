/* 'Estructura de datos'
key / value

objeto {
	propiedad: valor,
	propiedad: valor,
	propiedad: valor
	metodo(){}
} */

//'Acceder a propiedades y metodos'
const persona = {
	nombre: "Jhon",
	edad: 30,
	direccion: {
		calle: "Av Insuregentes 187",
		ciudad: "CDMX",
	},
	saludar() {
		console.log(`hola, mi nombre es ${persona.nombre}`);
	},
};

console.log(persona);
persona.saludar();

//'Agregar nueva propiedad'
persona.telefono = "555-555-555";
console.log(persona.telefono);

//'Agregar nuevo metodo'
persona.despedir = () => {
	console.log("Adios");
};
persona.despedir();

//'Borrar propiedades'
delete persona.telefono;
console.log(persona);

// 'Borrar metodos'
delete persona.despedir;
console.log(persona);
