const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
	prompt("Adivina el numero secreto entre 1 y 10")
);

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
	console.log("Ganaste!. Adivinaste el numero!");
} else if (numeroJugador > numeroSecreto) {
	console.log("Muy Grande! te pasaste");
} else if (numeroJugador < numeroSecreto) {
	console.log("Casi! era mas grande");
}
