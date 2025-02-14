// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.classList.add("red");
red.style.color = "red";
red.textContent = "Hey I'm Red";
container.appendChild(red);

const blue = document.createElement("h3");
blue.classList.add("blue");
blue.style.color = "blue";
blue.textContent = "Hey I'm blue";
container.appendChild(blue);