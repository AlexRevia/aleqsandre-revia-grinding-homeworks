let paragraph = document.getElementById("day");
let button = document.getElementById("btn");

let days = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];

button.addEventListener("click", function() {
  let today = new Date(); 
  let dayIndex = today.getDay()
  paragraph.textContent = "today is " + days[dayIndex];
});
