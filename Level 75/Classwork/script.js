function printName() {
    console.log("alex revo");
}

let intervalId = setInterval(printName, 10000);

let button = document.getElementById("stopBtn");

button.addEventListener("click", function() {
    clearInterval(intervalId);
    console.log("interval stopped");
});
