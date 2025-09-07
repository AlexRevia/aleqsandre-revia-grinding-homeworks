// 🔷 Homework 2: Filter Positive Numbers from Array
const logPositiveNumbers = (arr) => {
  console.log("Homework 2:");
  for (const num of arr) {
    if (num < 0) continue;
    console.log(num);
  }
};

// 🔷 Homework 3: Find First Word With More Than 5 Letters
const findLongWord = (words) => {
  console.log("Homework 3:");
  for (const word of words) {
    if (word.length > 5) {
      console.log(word);
      break;
    }
  }
};

// 🔷 Homework 4: Sum Numbers Until a Negative Is Found
const sumUntilNegative = (arr) => {
  console.log("Homework 4:");
  let total = 0;
  for (const num of arr) {
    if (num < 0) break;
    total += num;
  }
  console.log(total);
};

// 🔷 Homework 5: Show Numbers Except Multiples of 3
const printExceptMultiplesOf3 = () => {
  console.log("Homework 5:");
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }
};

// 🔶 Homework 6: Count How Many Words Start with "A"
const countWordsStartingWithA = (words) => {
  console.log("Homework 6:");
  let count = 0;
  for (const word of words) {
    if (word.length < 1) continue;
    if (word[0].toLowerCase() === 'a') count++;
  }
  console.log(count);
};

// 🔶 Homework 7: Print Numbers Between 1–30 But Skip Multiples of 4 and 6
const printSkip4and6 = () => {
  console.log("Homework 7:");
  for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0 || i % 6 === 0) continue;
    console.log(i);
  }
};

// 🔶 Homework 8: Find First Name Longer Than 8 Characters
const findLongName = (names) => {
  console.log("Homework 8:");
  for (const name of names) {
    if (name.length > 8) {
      console.log(name);
      break;
    }
  }
};

// 🔶 Homework 9: Print Only Odd Numbers From an Array
const printOdds = (arr) => {
  console.log("Homework 9:");
  for (const num of arr) {
    if (num % 2 === 0) continue;
    console.log(num);
  }
};

// 🔶 Homework 10: Sum Only Positive Even Numbers From an Array
const sumPositiveEvens = (arr) => {
  console.log("Homework 10:");
  let sum = 0;
  for (const num of arr) {
    if (num <= 0 || num % 2 !== 0) continue;
    sum += num;
  }
  console.log(sum);
};

// ——— Call all functions with example inputs ———

logPositiveNumbers([-3, 0, 5, -7, 12, -1, 8]);

findLongWord(["cat", "hello", "elephant", "bat", "mouse"]);

sumUntilNegative([3, 7, 2, 10, -4, 5]);

printExceptMultiplesOf3();

countWordsStartingWithA(["apple", "Banana", "apricot", "berry", "Avocado", ""]);

printSkip4and6();

findLongName(["Eva", "Christopher", "Liam", "Alexander", "Zoe"]);

printOdds([1, 2, 3, 4, 5, 6, 7]);

sumPositiveEvens([-4, 0, 2, 5, 6, -1, 8]);
