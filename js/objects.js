/* Lets create sumOfTripleEvens function using three array methods.
Take in an array.
For every even number, it will triple it.
Then it will sum all those even numbers. */

let arr = [1,2,3,4,5,6];
let sumOfTripleEvens = arr.filter(x => x % 2 === 0).map(x => x * 3).reduce((total,current) => total + current);
console.log(sumOfTripleEvens);

function camelize(str) {
    str = str.toLowerCase();
    let arr = str.split("-");
    let firstElement = arr.shift();
    let restArr = arr.map(x =>x[0].toUpperCase()+x.slice(1)).join("");
    console.log(firstElement+restArr);

}
//Solution from the internet
// function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }

camelize("backGRound-color-yess");
arr = [5,3,8,1]
function filterRange(arr,start,end) {
    return arr.filter(item => item >= start && item <=end)
}
let filtered = filterRange(arr,1,4);
console.log(filtered);
console.log(arr);