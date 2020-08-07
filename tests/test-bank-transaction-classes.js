// import node modules
const assert = require("assert")

// import local modules
const { BankAccount, Transaction } = require("../scripts/bankAccountClasses")

// declare global variables here

if (typeof describe === "function") {
  describe("WHAT YOU'RE TESTING", function () {
    it("should do ...", function () {
      // test something here
    })
  })
}

//  run the command: `npm test tests/test-bank-transaction-classes` to test this file
