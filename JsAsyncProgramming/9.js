
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// - Synchronous logs execute immediately.
// - The Promise.then callback is a microtask; microtasks are executed
//   immediately after the current call stack finishes, before any macrotasks.
// - setTimeout schedules a macrotask which runs on the next task loop tick,
//   after microtasks are drained.
