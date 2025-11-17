// Original product name
let product = " wireless headphones PRO ";

// Step 1: Trim and lowercase
product = product.trim().toLowerCase();

// Step 2: Capitalize first letter of each word
product = product
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
product = product.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", product);
console.log("Length:", product.length);
