/* 
'Estructura de un objeto'

objeto = {
	propiedad: valor,
	propiedad: valor,
	propiedad: valor
    	metodos() {
	}
}
*/

//'Ejemplo 1: llevar una persona a la programacion'
const persona = {
	nombre: "Jhon",
	edad: 30,
	direccion: {
		Calle: "Av Insurgentes 187",
		Ciudad: "CDMX",
	},
	saludar() {
		console.log(`hola, mi nombre es ${persona.nombre}`);
	},
};
