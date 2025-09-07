// 2
let num1 = 10;
let num2 = 10;
console.log(num1 == num2);

// 3
let a = 15;
let b = 10;
console.log(a > b);

// 4
let x = 8;
let y = 12;
console.log(x <= y);

// 5
let numA = 7;
let numB = 9;
console.log(numA != numB);

// 6
let score = 105;
console.log(score >= 100);

// 7
let result7 = confirm("7) Do you want to continue?");
console.log("7) Confirm result:", result7);

// 8
function showConfirm() {
    let result8 = confirm("Are you sure?");
    console.log("confirm result:", result8);
}

// 9
window.onload = function() {
    let result9 = confirm("Do you agree?");
    alert("Your choice was: " + result9);
};
