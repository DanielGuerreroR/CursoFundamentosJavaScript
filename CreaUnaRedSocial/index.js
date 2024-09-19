/* 
    REQUERIMIENTOS DEL RETO:
1. El ususario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validad si el usuario y 
    constraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistmea debe mostrar 
    un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe 
    mostrar un mensaje de error y no mostrar ningun timeline.
*/

//BASES DE DATOS
const usersDatabase = [
	{
		username: "pericles",
		password: "123",
	},
	{
		username: "daniel",
		password: "321",
	},
	{
		username: "andres",
		password: "50",
	},
];

const usersTimeline = [
	{
		username: "pericles",
		timeline: "Te amo mucho <3",
	},
	{
		username: "daniel",
		timeline: "Y tu que?",
	},
	{
		username: "andres",
		timeline: "Time waits for no one",
	},
	{
		username: "pepe",
		timeline: "pepe el mago",
	},
];

//Inicio
//1.
const username = prompt("Ingrese su usuario: ");
const password = prompt("Ingrese su contraseña: ");

//2.
function usuarioExistente(username, password) {
	for (i of usersDatabase) {
		if (i.username === username && i.password === password) {
			signIn(username);
			break;
		}
	}
	alert("usuario no existente");
}
function signIn(username) {
	for (i of usersTimeline) {
		if (i.username === username) {
			alert(`Bienvenido ${username} ` + i.timeline);
			break;
		} else;
	}
}
usuarioExistente(username, password);
