function hasOwnProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

let car = { brand: "bmw", model: "f10" };
let user = { name: "Alex", age: 15 };
let book = { title: "shushanikisWameba", author: "Iakob curtaveli" };

console.log(hasOwnProperty(car, "brand")); 
console.log(hasOwnProperty(user, "age"));
console.log(hasOwnProperty(book, "pages"));
