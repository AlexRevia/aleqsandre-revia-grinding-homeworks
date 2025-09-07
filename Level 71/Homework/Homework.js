// 1
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total number of fruits:", fruits.length);

// 2
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.unshift("purple");
console.log("Modified colors:", colors);


let numbers = [2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log("Doubled:", numbers[i] * 2);
}


function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
    sum += num;
    }
    return sum;
}
console.log("Sum of [1, 2, 3]:", sumArray([1, 2, 3]));


function findLargest(arr) {
    let largest = arr[0];
    for (let num of arr) {
    if (num > largest) {
        largest = num;
        }
    }
    return largest;
}
console.log("Largest number:", findLargest([10, 4, 25, 7]));


let favoriteMovies = ["Inception", "Interstellar", "Shrek", "Avengers", "Matrix"];
let userMovie = prompt("Enter a movie name:");
if (favoriteMovies.includes(userMovie)) {
    alert("Yes, it's one of my favorites!");
} else {
    alert("No, I don't like that one much.");
}


let words = ["banana", "apple", "pear", "orange"];
words.sort();
let joinedWords = words.join(", ");
console.log("Sorted words:", joinedWords);


function random1to10() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log("Random number from 1 to 10:", random1to10());


let decimal = parseFloat(prompt("Enter a decimal number:"));
console.log("Rounded down:", Math.floor(decimal));
console.log("Rounded up:", Math.ceil(decimal));
console.log("Rounded to nearest:", Math.round(decimal));


let numList = [8, 2, 17, 4, 10];
console.log("Max:", Math.max(...numList));
console.log("Min:", Math.min(...numList));
