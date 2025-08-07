
const apiURL = "https://6894c8f2be3700414e1482a4.mockapi.io/products";

const productsContainer = document.querySelector(".products-grid");


fetch(apiURL)
  .then(response => response.json())
  .then(products => {
    productsContainer.innerHTML = ""; 

    products.forEach(product => {
     
      const stockText = product.stock > 0
        ? `<span class="price">${product.price}$</span><p>In Stock: ${product.stock}</p><button onclick="buyProduct(${product.id})">Buy</button>`
        : `<p style="color:red;font-weight:bold;">Out of Stock</p>`;

   
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          ${stockText}
        </div>
      `;
      productsContainer.innerHTML += productCard;
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });


function buyProduct(id) {
  fetch(`${apiURL}/${id}`)
    .then(res => res.json())
    .then(product => {
      if (product.stock > 0) {
        const newStock = product.stock - 1;

        fetch(`${apiURL}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ stock: newStock })
        })
        .then(() => {
          location.reload();
        });
      }
    });
}
