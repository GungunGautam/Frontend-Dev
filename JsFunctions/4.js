// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding prototype method
Car.prototype.getDetails = function() {
    console.log("Brand:", this.brand, "| Model:", this.model);
};

// Creating objects
const car1 = new Car("Honda", "City");
const car2 = new Car("Toyota", "Corolla");

car1.getDetails();
car2.getDetails();
