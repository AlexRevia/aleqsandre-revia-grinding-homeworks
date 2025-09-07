let total = 0;

do {
    let input = prompt("enter number:");
    let number = Number(input);

    if (!isNaN(number)) {
        total += number;
    } else {
    alert("enter only number");
    }
} while (total <= 100);

alert("total is:" + total);
