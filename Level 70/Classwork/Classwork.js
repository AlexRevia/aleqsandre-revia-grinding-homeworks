function userLoop() {

    let num1 = Number(prompt("enter first number:"));
    let num2 = Number(prompt("enter second number:"));

    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}
window.onload = userLoop;
