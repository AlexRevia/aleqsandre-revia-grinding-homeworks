function userOperations() {
    let answer1 = confirm("do u wanna continue");
    let answer2 = confirm("do you wanna exit the game");

    console.log( answer1 && answer2);
    console.log(answer1 || answer2);
}