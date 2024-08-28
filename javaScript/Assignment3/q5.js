let n = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let display = document.getElementById("display");

submit.addEventListener("click", () => {
    if (n.value != "" && email.value != "") {
        display.innerText = `Thanx For Submitting ${n.value}`;
    }
    else {
        display.innerText = `Info is Not Sufficient`;
    }
})