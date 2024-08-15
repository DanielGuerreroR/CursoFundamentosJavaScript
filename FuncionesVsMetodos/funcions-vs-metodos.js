//Capacidades de funciones iguales que otros objetos

// '1. Callback (Funciones como argumentos de otras funciones)'
function a() {}
function b(a) {}
b(a);

// '2. Retornar funciones'
function a() {
	function b() {}
	return b;
}

// '3. Expresion de funcion (Asignar funciones a variables)'
const a = function () {};

// '4. Propiedades y Metodos'
function a() {}
const obj = {};
a.call(obj);

// '5. Anidar funciones (Nested functions)'
function a() {
	function b() {
		function c() {}
		c();
	}
	b();
}
a();

// '6. Almacenar funciones en objetos'
const rocket = {
	name: "Falcon 9",
	launchMessage: function launchMessage() {
		console.log("Adios!");
	},
};

rocket.launchMessage();
