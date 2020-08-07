// import your local classes, objects, or functions
const { BankAccount, Transaction } = require("./bankAccountClasses")

const bankAccount1 = new BankAccount(888, "Roger Rabbit")
const transaction1 = new Transaction(45, "Betty Boo")
bankAccount1.transactions.push(transaction1)

console.log(bankAccount1)
console.log(transaction1)
console.log(bankAccount1.transactions)
