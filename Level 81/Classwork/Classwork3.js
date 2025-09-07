let myArray = ["hello", "world", 5, 20, true, false];

for (let item of myArray) {
    if (typeof item === "string") {
        console.log(item);
    } else if (typeof item === "number") {
        console.log(item + 10);
    } else if (typeof item === "boolean") {
        console.log(!item);
    }
}
