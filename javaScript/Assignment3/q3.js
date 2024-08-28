let ip = document.getElementById("ip");
let btn = document.getElementById("btn");
let li_box = document.getElementById("li_box");

btn.addEventListener("click", () => {
    console.log("hello");
    let li = document.createElement("li");
    li.innerText = ip.value;
    li_box.append(li);
})

