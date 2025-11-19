
async function fetchAndDisplayProducts() {
  const apiUrl = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response not ok");
    const products = await response.json();

    // Console output per product
    products.forEach((p) => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("---");
    });

    // Bonus: if running in a browser, append cards to document.body
    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      container.style.display = "grid";
      container.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
      container.style.gap = "12px";
      container.style.padding = "12px";

      products.forEach((p) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.padding = "8px";
        card.style.borderRadius = "6px";
        card.style.boxSizing = "border-box";

        const img = document.createElement("img");
        img.src = p.image;
        img.alt = p.title;
        img.style.width = "100%";
        img.style.height = "160px";
        img.style.objectFit = "contain";

        const titleEl = document.createElement("div");
        titleEl.textContent = p.title;
        titleEl.style.fontSize = "14px";
        titleEl.style.marginTop = "8px";

        const priceEl = document.createElement("div");
        priceEl.textContent = "$" + p.price;
        priceEl.style.fontWeight = "700";

        card.appendChild(img);
        card.appendChild(titleEl);
        card.appendChild(priceEl);
        container.appendChild(card);
      });

      document.body.appendChild(container);
    }
  } catch (err) {
    console.error("Failed to load products. Please try again.", err.message);
  }
}

// Call the function
fetchAndDisplayProducts();
