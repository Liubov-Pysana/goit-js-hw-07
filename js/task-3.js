const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function onNameInput(event) {
    const name = event.target.value.trim();
    nameOutput.innerHTML = name === "" ? "Anonymous" : name;
    // nameOutput.innerHTML = name || "Anonymous";
}

nameInput.addEventListener("input", onNameInput);
