// 2. Print all arguments passed to a function using a loop
function printAllArgs(...args) {
  console.log("Print all args:");
  for (let arg of args) {
    console.log(arg);
  }
}

// 3. Count how many arguments were passed and print the count
function countArgs(...args) {
  console.log("Count of args:", args.length);
}

// 4. Add all numeric arguments and print the total
function sumNumericArgs(...args) {
  let sum = 0;
  for (let arg of args) {
    if (typeof arg === "number") {
      sum += arg;
    }
  }
  console.log("Sum of numeric args:", sum);
}

// 5. Stop printing arguments when the value 0 is found, using break
function printUntilZero(...args) {
  console.log("Print args until 0:");
  for (let arg of args) {
    if (arg === 0) break;
    console.log(arg);
  }
}

// 6. Skip any string argument and only print numeric ones using continue
function printOnlyNumbers(...args) {
  console.log("Print only numeric args:");
  for (let arg of args) {
    if (typeof arg === "string") continue;
    console.log(arg);
  }
}

// 7. Anonymous function assigned to variable that multiplies two numbers
const multiply = function(a, b) {
  return a * b;
};

// 8. Anonymous function passed into setInterval to log a message every 2 seconds
const intervalId = setInterval(function() {
  console.log("Interval: 2 seconds passed");
}, 2000);

// Stop interval after 6 seconds for demo
setTimeout(() => clearInterval(intervalId), 6000);

// 9. Anonymous function as event listener for a button click showing alert
// (To test, create a button element in HTML and call attachButtonListener())

function attachButtonListener() {
  const btn = document.createElement("button");
  btn.textContent = "Click Me";
  document.body.appendChild(btn);
  btn.addEventListener("click", function() {
    alert("Button clicked!");
  });
}

// ——— Example calls ———

printAllArgs(1, "hello", true, 42);
countArgs(1, 2, 3, 4);
sumNumericArgs(1, "2", 3, "four", 5);
printUntilZero(10, 20, 0, 30, 40);
printOnlyNumbers(1, "skip me", 2, "and me", 3);

console.log("Multiply 3*4 =", multiply(3, 4));
