
console.log("Start");

setTimeout(() => {
  console.log("Timeout macrotask"); // macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("Promise microtask"); // microtask
});

console.log("Sync log");

console.log("End");

