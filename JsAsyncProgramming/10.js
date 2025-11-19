
function randomDelay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stepFactory(stepName, failureProbability = 0.15) {
  return () =>
    new Promise((resolve, reject) => {
      const delay = randomDelay();
      setTimeout(() => {
        if (Math.random() < failureProbability) {
          return reject(new Error(`${stepName} failed`));
        }
        resolve(`${stepName} completed`);
      }, delay);
    });
}

// create step functions
const takeOrder = stepFactory("Order taken", 0.1);
const prepare = stepFactory("Food prepared", 0.12);
const pack = stepFactory("Package ready", 0.08);
const dispatch = stepFactory("Out for delivery", 0.1);
const deliver = stepFactory("Delivered", 0.12);

// runPipeline orchestrates steps
async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log("Step 1: Order taken");
    await takeOrder();

    console.log("Step 2: Food prepared");
    await prepare();

    console.log("Step 3: Package ready");
    await pack();

    console.log("Step 4: Out for delivery");
    await dispatch();

    console.log("Delivery completed!");
    return "Success";
  } catch (err) {
    console.error("Pipeline failed!", err.message);
    return "Failed";
  }
}

// Explanation (comments):
// - Each await pauses the async function until the Promise resolves or rejects.
// - If a Promise rejects, control jumps to the catch block (similar to synchronous try/catch).
// - Using async/await makes the pipeline readable and linear while still non-blocking.
// - The event loop runs the timers and resolves these Promises; while awaiting,
//   other microtasks and macrotasks continue to run in the environment.

runPipeline();
