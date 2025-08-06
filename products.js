const products = [
  {
    name: "Wireless Headphones",
    description: "Crystal clear sound with noise cancellation.",
    price: "$99.00",
    image: "pic_8.jpg",
    quantity: 3
  },
  {
    name: "Smart Watch",
    description: "Track your fitness and stay connected.",
    price: "$149.00",
    image: "pic_7.jpg",
    quantity: 2
  },
  {
    name: "Bluetooth Speaker",
    description: "Rich bass and portable design.",
    price: "$59.00",
    image: "pic_6.jpg",
    quantity: 1
  },
  {
    name: "Gaming Mouse",
    description: "Ultra precision with customizable RGB lighting.",
    price: "$39.00",
    image: "pic_5.jpg",
    quantity: 0
  },
  {
    name: "4K Monitor",
    description: "27‑inch UHD display with vivid colors.",
    price: "$329.00",
    image: "pic_4.jpg",
    quantity: 4
  },
  {
    name: "Mechanical Keyboard",
    description: "Blue switches with customizable RGB backlight.",
    price: "$89.00",
    image: "pic_3.jpg",
    quantity: 2
  },
  {
    name: "Fitness Tracker",
    description: "Monitor your health and activity with this lightweight and waterproof tracker.",
    price: "$49.00",
    image: "pic_1.jpg",
    quantity: 3
  },
  {
    name: "Tablet Device",
    description: "Portable and powerful, perfect for all-day use.",
    price: "$199.00",
    image: "pic_2.jpg",
    quantity: 5
  }
];

const container = document.getElementById("products-container");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "product-card";

  let isOutOfStock = product.quantity === 0;

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <span class="price">${product.price}</span>
    <p class="stock-status">${isOutOfStock ? "<strong style='color:red'>Out of Stock</strong>" : `In Stock: <span id="qty-${index}">${product.quantity}</span>`}</p>
    <button ${isOutOfStock ? "disabled" : ""} onclick="buyProduct(${index})">Buy</button>
  `;

  container.appendChild(card);
});

function buyProduct(index) {
  if (products[index].quantity > 0) {
    products[index].quantity -= 1;
    const qtySpan = document.getElementById(`qty-${index}`);
    if (products[index].quantity === 0) {
      qtySpan.parentElement.innerHTML = "<strong style='color:red'>Out of Stock</strong>";
      event.target.disabled = true;
    } else {
      qtySpan.innerText = products[index].quantity;
    }
  }
}

