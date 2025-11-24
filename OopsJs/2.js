const menu = {
  pizza: 200,
  burger: 120,
  fries: 80,
  coke: 40
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error(`Invalid item: ${item}`);
      return menu[item];
    });

    const total = prices.reduce((a, b) => a + b, 0);
    return total;
  } catch (err) {
    console.log("Error:", err.message);
  }
}

console.log(calculateBill(["pizza", "fries"]));
console.log(calculateBill(["pizza", "noodles"])); // invalid
