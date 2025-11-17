let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let secure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log(secure ? "Secure" : "Unsafe");

// Test another scenario
isOwnerInside = false;
console.log(
    isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside
        ? "Secure"
        : "Unsafe"
);
