function addNewElement() {
    let myDiv = document.getElementById("myDiv");
    let button = document.createElement("button");
    button.textContent = "click";
    myDiv.appendChild(button);
}
addNewElement();
