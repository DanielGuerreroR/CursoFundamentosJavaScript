//formas de escribir Strings Primitivos
const stringPrimitivo = "Soy un string primitivo";
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String("Soy un string primitivo tambien");
console.log(typeof stringPrimitivoTambien);
/*estos strings primitivos son inmutables (es decir tendra paso por valor,
cramos uno nuevo al cambiar su valor)*/

//escribir String de tipo Objeto
/*estos String son mutables, es decir que podemos modificar su valor*/
const stringObjeto = new String("Soy un string Objeto");
console.log(typeof stringObjeto);
/*esto se hace para poder manipularlo y que tenga ciertas caracteristicas
de los objetos*/

//MANIPULAR STRINGS

//acceder a caracteres
const saludo = "hola. ¿como estas?";
/*hay que recorad que los strings tienen indices de 0 en adelante para cada caracter*/
//accediendo a la l con su indice
console.log(saludo[2]);
console.log(saludo.charAt(2));

//saber el indice de un caracter
console.log(saludo.indexOf("o"));

//saber el indice de una palabra
console.log(saludo.indexOf("como"));

//saber si esta o no una palabra (-1 no esta)
console.log(saludo.indexOf("Como"));

//saber el index de la ultima 'o'
console.log(saludo.lastIndexOf("o"));

//saber que caracteres hay entre 2 indices
console.log(saludo.slice(3, 5));
//saber el tamaño del array
console.log(saludo.length);

//poner todo en mayusculas
console.log(saludo.toLocaleUpperCase());

//poner todo en minusculas
console.log(saludo.toLocaleLowerCase());

//dividir un string
const saludoDividido = saludo.split(" ");

//divide por el caracter que se pone, en este caso espacio
console.log(saludoDividido); //sale un array con las divisiones
console.log(saludoDividido[1]); //el array con sus propios indices

//Recortarle los espcios a un string
const saludoConEspacios = " Hola Mundo ";
const saludoSinEspacios = saludoConEspacios.trim();
//quito los espacios al inicio y final del string
console.log(saludoSinEspacios);

//Reemplazar palabras de nuesro string
const saludoOriginal = "Hola Mundo";
const nuevoSaludo = saludoOriginal.replace("Mundo", "<3");
console.log(nuevoSaludo);
