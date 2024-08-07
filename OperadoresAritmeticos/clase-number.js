// 1.Tipo entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notacion cientifica
const cientifico = 5e3;

// 3. Infinitos y NaN (Not a number)
const infinito = Infinity;
const NoEsUnNumero = NaN;

//Operaciones aritmeticas

//1. Suma, Resta, Multiplicacion, Division
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 7;
const division = 16 / 2;

//2. Modulo y Exponenciacion
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

//Precision
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3);

//Operaciones Avanzadas
//Raiz Cuadrada
const raizCuadrada = Math.sqrt(16);
console.log(raizCuadrada);
//Valor absoluto
const valorAbsoluto = Math.abs(-7);
console.log(valorAbsoluto);
//Numero Aleatorio
const aleatorio = Math.random();
console.log(aleatorio);
