const controls = document.querySelector("#controls");
const numberOfBoxesInput = controls.querySelector("[type=number]");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

destroyButton.addEventListener("click", (event) => {
    destroyBoxes();
});

createButton.addEventListener("click", (event) => {
    let numberOfBoxes = numberOfBoxesInput.value;

    if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
        createBoxes(numberOfBoxes);
        numberOfBoxesInput.value = "";
    }
});

function destroyBoxes() {
    boxes.innerHTML = "";
}

function createBoxes(amount) {
    destroyBoxes();
    const size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = size + i * 10 + "px";
        box.style.height = size + i * 10 + "px";
        box.style.backgroundColor = getRandomHexColor();
        boxes.append(box);
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
