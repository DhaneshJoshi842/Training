let n = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let display = document.getElementById("display");

submit.addEventListener("click", () => {
    let na = document.createElement("h3");
    let em = document.createElement("h3");
    na.innerText = n.value;
    em.innerText = email.value;
    display.append(na);
    display.append(em);
})