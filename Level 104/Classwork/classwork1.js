// Classwork 1
class Bank {
  constructor(username, balance) {
    this.username = username;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

const account = new Bank("Alex", 0);
account.deposit(100);

console.log("user:", account.username);
console.log("balance:", account.balance);



// Classwork 2
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is running`);
  }
}
const myCar = new Car("BMW", "M5");
myCar.start();
