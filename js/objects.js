/* Lets create sumOfTripleEvens function using three array methods.
Take in an array.
For every even number, it will triple it.
Then it will sum all those even numbers. */

let arr = [1,2,3,4,5,6];
let sumOfTripleEvens = arr.filter(x => x % 2 === 0).map(x => x * 3).reduce((total,current) => total + current);
// console.log(sumOfTripleEvens);

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

// camelize("backGRound-color-yess");
arr = [5,3,8,1]
function filterRange(arr,start,end) {
    return arr.filter(item => item >= start && item <=end)
}
let filtered = filterRange(arr,1,4);


arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let tempArr = [...arr];
    return tempArr.sort()
}

let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

let john = { name: "John", surname: "Smith", id: 1 ,age:25};
let pete = { name: "Pete", surname: "Hunt", id: 2,age:30 };
let mary = { name: "Mary", surname: "Key", id: 3 ,age:28};

let users = [ john, pete, mary ];

let names = users.map(x => x.name);
console.log(names);

let userMapped = users.map(x => ({fullname:`${x.name} ${x.surname}`,id:x.id}));
console.log(userMapped);

function sortByAge(arr) {
    arr.sort((a,b) => a.age - b.age)
}

sortByAge(users);
console.log(users);


function unique(arr) {
    /* your code */
    let newArr = [];
    for (key in arr)    {
        if (!newArr.includes(arr[key])) {
            newArr.push(arr[key]);
        }
    }
    return newArr;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
console.log(unique(strings));

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

console.log(groupById(users));