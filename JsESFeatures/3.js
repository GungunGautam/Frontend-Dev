"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

// Custom error classes
class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const tx = transactions[i];
    if (tx === null) throw new NullEntryError(`Transaction entry at index ${i} is null`);
    if (!('id' in tx) || !('amount' in tx)) throw new MissingFieldError(`Missing id/amount in transaction at index ${i}`);
    if (typeof tx.amount !== 'number') throw new TypeError(`Invalid amount type at index ${i}`);
    if (tx.amount < 0) throw new NegativeAmountError(`Negative amount for transaction id ${tx.id}`);

    // If we reached here, it's valid
    valid.push(tx);
    console.log(`Valid transaction: id=${tx.id}, amount=${tx.amount}`);
  } catch (err) {
    invalid.push({ index: i, error: err.message, type: err.constructor.name });
    console.warn(`Invalid transaction at index ${i}: ${err.constructor.name} - ${err.message}`);
  }
}

console.log("\n--- SUMMARY ---");
console.log("Successful transactions:", valid.length);
console.log("Failed transactions:", invalid.length);
console.table(invalid);

