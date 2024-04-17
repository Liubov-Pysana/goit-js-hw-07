function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const colorSpan = document.querySelector("span.color");
const changeColorButton = document.querySelector("button.change-color");

changeColorButton.addEventListener("click", (event) => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorSpan.innerHTML = color;
});
