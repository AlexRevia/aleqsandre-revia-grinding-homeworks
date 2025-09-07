// 4. Print numbers 1 to 20, stop if number is 13
for (let i = 1; i <= 20; i++) {
  if (i === 13) break;
  console.log("4:", i);
}

// 5. Loop through colors, stop when "blue" is found
const colors = ["red", "green", "yellow", "blue", "purple"];
for (const color of colors) {
  if (color === "blue") {
    console.log("5: Found blue, stopping loop.");
    break;
  }
  console.log("5:", color);
}

// 6. Count 1–50, stop when number divisible by both 4 and 5 (i.e., 20)
for (let i = 1; i <= 50; i++) {
  if (i % 4 === 0 && i % 5 === 0) {
    console.log("6: Found number divisible by 4 and 5:", i);
    break;
  }
  console.log("6:", i);
}

// 7. Print letters of a word, stop on 'a'
const word = "elephant";
for (const letter of word) {
  if (letter === "a") break;
  console.log("7:", letter);
}

// 8. Add numbers from 1 upward, stop when sum reaches 100
let sum = 0;
let i = 1;
while (true) {
  sum += i;
  if (sum >= 100) {
    console.log("8: Sum reached", sum, "at i =", i);
    break;
  }
  i++;
}


// CONTINUE

// 9. Print 1–20, skip 13
for (let i = 1; i <= 20; i++) {
  if (i === 13) continue;
  console.log("9:", i);
}

// 10. Loop through fruits, skip "banana"
const fruits = ["apple", "banana", "cherry", "grape"];
for (const fruit of fruits) {
  if (fruit === "banana") continue;
  console.log("10:", fruit);
}

// 11. Count 1–30, skip numbers divisible by 3
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) continue;
  console.log("11:", i);
}

// 12. Print letters in word, skip 'e'
const text = "elephant";
for (const char of text) {
  if (char === "e") continue;
  console.log("12:", char);
}

// 13. Loop 1–50, skip even numbers
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) continue;
  console.log("13:", i);
}
