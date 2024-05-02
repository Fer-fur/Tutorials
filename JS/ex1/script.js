
let container = document.getElementById("container");

// p tag with red text 
let para = document.createElement("p");
para.style.color = "Red";
para.textContent = "Hey I'm red!"

container.appendChild(para);

// h3 tag with blue text
let h3 = document.createElement("h3");
h3.style.color = "Blue";
h3.textContent = "I'm a blue h3!"

container.appendChild(h3);

// div with black border and pink background

let div = document.createElement("div");
div.setAttribute("style", "border: 2px solid black; background-color: pink; padding: 8px 16px; border-radius: 8px;")

let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

let p = document.createElement("p");
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

let btn = document.createElement("button");
btn.addEventListener("click" , (e) => {
    e.target.style.background = "blue";
})
btn.textContent = "Click";

container.appendChild(btn);