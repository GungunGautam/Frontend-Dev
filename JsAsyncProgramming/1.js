
function randomDelayMs(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = randomDelayMs();
    console.log("Boiling water...");
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Kettle failed"));
      console.log("Water boiled.");
      resolve("boiled water");
    }, delay);
  });
}

function brewCoffee(boiledWater) {
  return new Promise((resolve, reject) => {
    const delay = randomDelayMs();
    console.log("Brewing coffee...");
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Coffee grounds missing"));
      console.log("Coffee brewed.");
      resolve("brewed coffee");
    }, delay);
  });
}

function pourIntoCup(brewedCoffee) {
  return new Promise((resolve, reject) => {
    const delay = randomDelayMs();
    console.log("Pouring into cup...");
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error("Cup cracked"));
      console.log("Poured into cup.");
      resolve("coffee ready");
    }, delay);
  });
}

// Promise chaining
boilWater()
  .then((water) => brewCoffee(water))
  .then((coffee) => pourIntoCup(coffee))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((err) => {
    console.error("Coffee process failed:", err.message);
  });
