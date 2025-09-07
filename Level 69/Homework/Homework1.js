// 1
let x = prompt("enter smth");
x = Number(x);

if (x % 2 == 0) {
    alert("Even");
} else {
    alert("Odd");
}

// 2
let i = prompt("enter ur test score");
i = Number(i);

if (i >= 90) {
    alert("A");
} else if (i > 79 && i < 90) {
    alert("B");
} else if (i > 69 && i < 80) {
    alert("C");
} else if (i > 59 && i < 70) {
    alert("D");
} else {
    alert("F (fucking dumbass)");
}

// 3
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

if (num1 === num2 && num2 === num3) {
    alert("All three numbers are equal.");
} else if (num1 >= num2 && num1 >= num3) {
    alert(num1 + " is the largest number.");
} else if (num2 >= num1 && num2 >= num3) {
    alert(num2 + " is the largest number.");
} else {
    alert(num3 + " is the largest number.");
}

// 4
let char = prompt("Enter a single letter:");

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert(char + " is a vowel.");
} else {
    alert(char + " is a consonant.");
}

// 5
let x2 = Number(prompt("enter a number"));

if (x2 % 3 == 0 && x2 % 5 == 0) {
    alert("divisible by both");
} else if (x2 % 3 == 0) {
    alert("only divisible by 3");
} else if (x2 % 5 == 0) {
    alert("only divisible by 5");
} else {
    alert("not divisible by either");
}

// 6
let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    alert("Child");
} else if (age >= 13 && age <= 19) {
    alert("Teenager");
} else if (age >= 20 && age <= 59) {
    alert("Adult");
} else if (age >= 60) {
    alert("Senior");
} else {
    alert("Invalid age");
}
