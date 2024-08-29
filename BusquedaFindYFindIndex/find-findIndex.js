//find()
const multipleOfFive = [5, 10, 15, 20];
const firstNumberGreaterThanTen = multipleOfFive.find((number) => number > 10);

console.log(multipleOfFive);
console.log(firstNumberGreaterThanTen);

//findIndex()
const randomNumbers = [6, 14, 27, 56, 40];
const indexNumber = randomNumbers.findIndex((number) => number > 50);

console.log(randomNumbers);
console.log(indexNumber);
