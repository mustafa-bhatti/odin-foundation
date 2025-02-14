// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.style.color = "red";
red.textContent = "Hey I'm Red";
container.appendChild(red);

const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent = "Hey I'm blue";
container.appendChild(blue);

const div = document.createElement("div");
div.style.cssText = "background-color: pink; border:1px solid black;";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p = document.createElement("p");  
p.textContent = "Me too";
div.appendChild(p);

container.appendChild(div);