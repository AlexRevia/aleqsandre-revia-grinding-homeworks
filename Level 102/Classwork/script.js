let paragraph = document.getElementById("text");
let button = document.getElementById("btn");

let strings = ["yo", "Goal", "Oriented", "Academy", "normalstring"];

button.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * strings.length);

  paragraph.textContent = strings[randomIndex];
});
