const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function addBtn() {
    ul.addEventListener("click", addBtn);
    let item = input.value;
    input.focus();

    if (item=='') {
        return false;
    }
    input.value = '';
    console.log(item);

    const li = document.createElement("li");
    const span = document.createElement("span");  
    const delButton = document.createElement("button");

    li.appendChild(span);
    li.appendChild(delButton);

    span.textContent = item;
    delButton.textContent = "Delete";

    delButton.addEventListener("click", (e) => {
        ul.removeChild(li);
    })
    ul.appendChild(li);
}

btn.addEventListener("click", addBtn);


const playTime = (funky) => {
    return funky  + " music";
}
console.log(playTime("hiphop"));
//Callbacks