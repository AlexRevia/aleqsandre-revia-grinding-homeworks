// ✅ 4. Print numbers from 1 to 5 using do...while
let i = 1;
do {
  console.log("4:", i);
  i++;
} while (i <= 5);

// ✅ 5. Print even numbers from 2 to 10 using do...while
let j = 2;
do {
  if (j % 2 === 0) console.log("5:", j);
  j++;
} while (j <= 10);

// ✅ 6. Print numbers from 10 down to 1 using do...while
let k = 10;
do {
  console.log("6:", k);
  k--;
} while (k >= 1);

// ✅ 7. Prompt user to enter a number until it's > 100
let userInput;
do {
  userInput = prompt("Enter a number greater than 100:");
} while (userInput && Number(userInput) <= 100);

// ✅ 8. Sum numbers from 1 to 10 using do...while
let sum = 0;
let count = 1;
do {
  sum += count;
  count++;
} while (count <= 10);
console.log("8: Sum from 1 to 10 =", sum);

// ✅ 9. for...of loop to print each number
const nums = [5, 10, 15, 20];
for (const num of nums) {
  console.log("9:", num);
}

// ✅ 10. for...of loop to print each character of a string
const text = "hello";
for (const char of text) {
  console.log("10:", char);
}

// ✅ 11. for...of loop to sum all numbers in an array
const numbers = [2, 4, 6, 8];
let total = 0;
for (const n of numbers) {
  total += n;
}
console.log("11: Total sum =", total);

// ✅ 12. for...of loop to print even numbers from array
const mixedNums = [1, 2, 3, 4, 5, 6];
for (const n of mixedNums) {
  if (n % 2 === 0) console.log("12: Even number =", n);
}

// ✅ 13. for...of loop to print names
const names = ["Alice", "Bob", "Charlie"];
for (const name of names) {
  console.log("13: Name =", name);
}

// ✅ 14. for...in loop to print keys of an object
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log("14: Key =", key);
}

// ✅ 15. for...in loop to print values of an object
for (const key in person) {
  console.log("15: Value =", person[key]);
}

// ✅ 16. for...in loop to count properties
let propCount = 0;
for (const key in person) {
  propCount++;
}
console.log("16: Property count =", propCount);

// ✅ 17. Check if a key exists
const checkKey = "age";
let found = false;
for (const key in person) {
  if (key === checkKey) {
    found = true;
    break;
  }
}
console.log(`17: Key "${checkKey}" exists?`, found);

// ✅ 18. Create a string of all keys
let keysString = "";
for (const key in person) {
  keysString += key + ", ";
}
keysString = keysString.slice(0, -2); // Remove trailing comma
console.log("18: Keys string =", keysString);
