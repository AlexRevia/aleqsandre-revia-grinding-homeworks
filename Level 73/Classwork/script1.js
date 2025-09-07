function modifyContent() {
    let container = document.getElementById("container");

    let button = document.getElementById("myButton");
    if (button) {
    container.removeChild(button);
    }

    let paragraph = document.getElementById("myParagraph");

    let italic = document.createElement("i");
    italic.textContent = "changed text content";

    container.replaceChild(italic, paragraph);
}

window.onload = modifyContent;
