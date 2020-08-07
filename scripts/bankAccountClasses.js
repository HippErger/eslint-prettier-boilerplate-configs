class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = []
  }
}

class Transaction {
  constructor(amount, payee) {
    this.amount = amount
    this.payee = payee
    this.date = new Date()
  }
}

// export your classes, functions, or objects
module.exports = { BankAccount, Transaction }
