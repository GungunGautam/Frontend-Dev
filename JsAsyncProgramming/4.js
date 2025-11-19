
function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error("Server A failure"));
      resolve("Server A OK");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error("Server B failure"));
      resolve("Server B OK");
    }, 3000);
  });
}

// Promise.all -> wait for all
Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers:", results);
  })
  .catch((err) => {
    console.error("Deployment error (all):", err.message);
  });

// Promise.race -> first responder
Promise.race([serverA(), serverB()])
  .then((fastest) => {
    console.log("Fastest response:", fastest);
  })
  .catch((err) => {
    console.error("Fastest response error:", err.message);
  });
