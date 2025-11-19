// Q1: E-Commerce Product Manager (Classes + Objects)

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id} | ${this.name} | ₹${this.price} | Category: ${this.category}`;
    }
}

// Create product objects
const products = [
    new Product(1, "Laptop", 45000, "Electronics"),
    new Product(2, "Shoes", 900, "Fashion"),
    new Product(3, "Mobile", 15000, "Electronics"),
    new Product(4, "Bag", 1200, "Accessories")
];

// Apply discount to first item
products[0].applyDiscount(10);

// Filter price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);
console.log("Products above 1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
