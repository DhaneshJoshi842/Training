let ele = document.getElementById("ele");
let btn = document.getElementById("hide_btn");
btn.addEventListener("click", () => {
    console.log("btn_clicked");
    if (ele.style.backgroundColor === "blue") {
        ele.style.backgroundColor = "white";
    }
    else {
        ele.style.backgroundColor = "blue";
    }
})