const products = [
  { id: 1, name: "Shoes", category: "Fashion", price: 2000, stock: 3 },
  { id: 2, name: "Laptop", category: "Electronics", price: 50000, stock: 10 },
  { id: 3, name: "Tshirt", category: "Fashion", price: 500, stock: 2 },
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return products.sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
