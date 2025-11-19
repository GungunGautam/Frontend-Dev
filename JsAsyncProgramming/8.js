
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50% chance to succeed
      if (Math.random() < 0.5) resolve("Order submitted");
      else reject(new Error("Transient API error"));
    }, 500); // half-second latency to keep retries quick
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success - ${result}`);
      return result;
    } catch (err) {
      console.warn(`Attempt ${attempt}: Failed - ${err.message}`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
      // optional backoff between retries
      await new Promise((res) => setTimeout(res, 300));
    }
  }
}

// Usage with try/catch
(async () => {
  try {
    await processOrder(3);
    console.log("Order processing completed successfully.");
  } catch (err) {
    console.error("Final error:", err.message);
  }
})();
