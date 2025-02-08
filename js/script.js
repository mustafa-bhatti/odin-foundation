console.log(23+97);
console.log(1+2+3+4+5+6);
console.log((4+6+9)/77);
let a = 10;
console.log(a);
a =20;
console.log(a);
let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual/max;
console.log("Percentage" , percentage);  

const button = document.querySelector("button");

function greet() {
    const name = prompt("Enter your name");
    const field = document.querySelector(".test");
    field.textContent = `Hello ${name}`;
}
// button.addEventListener("click", greet);


// string methods
console.log("finding word at index position");
b = "hello";
console.log(b.length);
console.log(b.charAt(0));
console.log(b.at(1))
console.log(b[2])
//slicing
let str = "Mango, Yellow, Blue";
console.log(str.slice(0,5));
console.log(str.slice(6)); //slices out words before the index number
console.log(str.substring(6));
console.log(str.toLocaleUpperCase());
let concat_str = b.concat(str, " hh");
console.log(concat_str);
let concat_str2 = b + " " + str;
console.log("This is concat using + operator ",concat_str2);   
//padding
b="412";
let padded = b.padEnd(5,"x")
console.log(padded);
//repeat
console.log(str.repeat(5)); 
//replacing
console.log(str.replace("Mango","Bird"));
console.log(str.replace(/mango/i,"Bird"));//use /i to specify case insensitive
console.log(str.replaceAll(/Mango/g,"Bird"));
//convert into array
console.log(str.split(","));

// * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
// */

// number = Number(prompt("enter a number"));

function numberChecker() {
   if(number >= 10) {
       return true;
   } else {
       return false;
   }
}
const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

const textbox = document.getElementById("inp");
const output = document.querySelector(".user-text");

// textbox.addEventListener("keypress", (event) => {
//     if (output.textContent.length == 0) {
//     output.textContent = "You pressed : ";
//     }
//     output.textContent += event.key;
// })
function capitalize(userString) {
    let x = userString[0].toUpperCase();
    console.log(x+userString.slice(1).toLowerCase());
}
capitalize("yooooo"); // => Yooooo
capitalize("HELLO"); // => Hello


function add7(num) {
    console.log(num+7);
}
function multiply(num1,num2) {
    console.log(num1 * num2);
}
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnEnter = document.querySelector('.enter');
btnEnter.addEventListener("click", () => {

    console.log(`Num1 = ${num1.value}  Num2 = ${num2.value}`)
    add7(+num1.value)
    multiply(+num1.value,+num2.value)
})
