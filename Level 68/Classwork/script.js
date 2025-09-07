function compareNums() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = "";

    if (num1 > num2) {
        result = num1;
    } else if (num2 > num1) {
        result = num2;
    } else {
        result = "Numbers are equal";
    }

    document.getElementById("output").textContent = result;
}
