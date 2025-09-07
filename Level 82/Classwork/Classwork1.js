function sumNumbers() {
    let sum = 0;
    let i = 0;

    while (i <= 10) {
        if (i % 2 !== 0) { 
            i++;
            continue;
        }
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumNumbers());
