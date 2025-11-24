class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance == null || this.distance < 0) {
      throw new Error("Invalid distance");
    }
    return this.distance * 10; // ₹10 per km
  }
}

try {
  const t = new Trip("Delhi", "Noida", 12);
  console.log("Fare:", t.calculateFare());
} catch (err) {
  console.log("Error:", err.message);
}

try {
  const t2 = new Trip("Delhi", "Gurgaon", -5);
  console.log("Fare:", t2.calculateFare());
} catch (err) {
  console.log("Error:", err.message);
}
