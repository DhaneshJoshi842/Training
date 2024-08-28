let box = document.getElementById("box");

box.addEventListener("mouseenter", () =>
    box.style.backgroundColor = "blue"
);

box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'white';
});