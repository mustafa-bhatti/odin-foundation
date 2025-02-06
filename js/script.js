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
button.addEventListener("click", greet);

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
