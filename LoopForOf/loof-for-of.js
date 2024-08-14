// // estructura
// for (variable of objeto){
// 	codigo a ejecutar
// }

// ejemplo1
let canasta = ["manzana", "pera", "manzana", "naranja", "uva"];
//Propiedades
for (fruta of canasta) {
	console.log(fruta);
}
//Propiedades y valores
for (fruta in listaDeCompras) {
	console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
