// ejemplo1;
const listaDeCompras = {
	manzana: 5,
	pera: 3,
	naranja: 2,
	uva: 1,
};
//Propiedades
for (fruta in listaDeCompras) {
	console.log(fruta);
}
//Propiedades y valores
for (fruta in listaDeCompras) {
	console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
