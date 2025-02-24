/* Lets create sumOfTripleEvens function using three array methods.
Take in an array.
For every even number, it will triple it.
Then it will sum all those even numbers. */

let arr = [1,2,3,4,5,6];
let sumOfTripleEvens = arr.filter(x => x % 2 === 0).map(x => x * 3).reduce((total,current) => total + current);
console.log(sumOfTripleEvens);