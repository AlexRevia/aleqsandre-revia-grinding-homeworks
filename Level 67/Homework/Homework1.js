// 1
let emptyObject = {};

// 2
let person = {
    name: "Alex",
    age: 15,
    city: "Tbilisi"
};

// 3
console.log(person.name);

// 4
person.hobby = "Coding";

// 5
let student = {
    name: "Alex",
    age: 15,
    address: {
    street: "gldani",
    city: "Tbilisi",
    country: "Georgia"
    }
};

// 6
person.age = 16;

// 7
let num1 = 12;
let num2 = 15;
let bothGreaterThan10 = num1 > 10 && num2 > 10;
console.log(bothGreaterThan10);

// 8
let isRaining = false;
let isSnowing = true;
let goOutside = isRaining || isSnowing;
console.log(goOutside);

// 9
let isDay = false;
let isNight = !isDay;
console.log(isNight);

// 10
let age = 18;
let hasPermission = true;
let canEnter = (age >= 18 && hasPermission) || age >= 21;
console.log(canEnter);

// 11
let isStudent = true;
let hasID = false;
let canGetDiscount = isStudent && !hasID;
console.log(canGetDiscount);

// 12
let num = 123;
let numAsString = String(num);
console.log(numAsString); 
console.log(typeof numAsString);

// 13
let isTrue = true;
let boolAsString = String(isTrue);
console.log(boolAsString);
console.log(typeof boolAsString);

// 14
let strNumber = "456";
let convertedNumber = Number(strNumber);
console.log(convertedNumber);
console.log(typeof convertedNumber); 

// 15
let boolValue = false;
let numberFromBool = Number(boolValue);
console.log(numberFromBool);
console.log(typeof numberFromBool);

// 16
let nonNumeric = "hello";
let result = Number(nonNumeric);
console.log(result);
console.log(typeof result);
