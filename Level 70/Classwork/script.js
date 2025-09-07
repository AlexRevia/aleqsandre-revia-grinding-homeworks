function changeElements() {
    const input = document.getElementById("myInput");
    const button = document.getElementById("myButton");
    const title = document.getElementById("myTitle");

    console.log("value:", input.value);

    button.style.backgroundColor = "black";
    button.style.color = "white";

    title.style.textAlign = "center";

    document.body.style.backgroundColor = "green";
}
