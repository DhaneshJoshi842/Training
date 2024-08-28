let ip = document.getElementById("ip");
let btn = document.getElementById("btn");
let li_box = document.getElementById("li_box");


btn.addEventListener("click", () => {
    let li = document.createElement("li");
    let del = document.createElement("button");
    del.innerText = "Delete";
    li.innerText = ip.value;
    li_box.append(li);
    li.append(del);
    del.addEventListener("click", () => {
        li.remove();
    })
})

