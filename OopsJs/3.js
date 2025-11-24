function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  return this.price - (this.price * percent / 100);
};

const p1 = new Product("Shoes", 2000);
const p2 = new Product("Bag", 1500);
const p3 = new Product("Watch", 3000);

console.log(p1.applyDiscount(10));
console.log(p2.applyDiscount(20));
console.log(p3.applyDiscount(30));

// Abstraction keeps pricing logic inside applyDiscount()
