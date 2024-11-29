class Account {
  #balance = 200;
  deposit(amount) {
    return (this.#balance += amount);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient Balance");
      return;
    }
    this.#balance -= amount;
  }
  getData = function () {
    return this.#balance;
  };
}

const myAccount = new Account();

myAccount.deposit(500);
myAccount.withdraw(100);
myAccount.balance = 0;

console.log(myAccount.getData());
