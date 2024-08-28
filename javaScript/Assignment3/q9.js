let main = document.getElementById("main");
let body = document.body;
let div1 = document.createElement("div");
let div2 = document.createElement("div");
div1.innerText = main.textContent;
div2.innerText = main.innerHTML;
body.appendChild(div1);
body.appendChild(div2);

