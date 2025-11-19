class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, item) => 
            sum + item.price * item.qty, 0);
    }

    applyCoupon(code) {
        const regex = /^(SAVE|DISC)(\d{2})$/;
        const match = code.match(regex);

        if (!match) return this.getTotal();

        const percent = Number(match[2]);
        const total = this.getTotal();

        return total - (total * percent / 100);
    }
}

const cart = new Cart();
cart.addItem("Laptop", 40000, 1);
cart.addItem("Shoes", 2000, 2);

console.log("Total:", cart.getTotal());
console.log("After Coupon SAVE20:", cart.applyCoupon("SAVE20"));
