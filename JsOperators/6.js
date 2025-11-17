let count = 0;

function increment() {
    count++;
    console.log("Count:", count);

    function show() {
        console.log("Nested Count:", count);
    }
    show();
}

function decrement() {
    count--;
    console.log("Count:", count);

    function show() {
        console.log("Nested Count:", count);
    }
    show();
}

// Simulated clicks
increment();
increment();
decrement();
