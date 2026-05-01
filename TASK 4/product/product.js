
let products = [];
let cart = 0;

async function loadProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    products = await res.json();
    showProducts(products);
}

function showProducts(data) {
    let box = document.getElementById("productList");
    box.innerHTML = "";

    data.forEach(p => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
      <img src="${p.image}">
      <h4>${p.title}</h4>
      <div class="price">₹${Math.round(p.price * 80)}</div>
      <button onclick="addToCart()">Add to Cart</button>
    `;

        box.appendChild(div);
    });
}

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

function searchProduct() {
    let text = document.getElementById("search").value.toLowerCase();

    let filtered = products.filter(p =>
        p.title.toLowerCase().includes(text)
    );

    showProducts(filtered);
}

function sortProducts(type) {
    let sorted = [...products];

    if (type == "low") {
        sorted.sort((a, b) => a.price - b.price);
    }
    else if (type == "high") {
        sorted.sort((a, b) => b.price - a.price);
    }

    showProducts(sorted);
}

function filterPrice(limit) {

    if (limit == "") {
        showProducts(products);
        return;
    }

    if (limit == "100000") {
        let filtered = products.filter(p =>
            Math.round(p.price * 80) > 2500
        );
        showProducts(filtered);
        return;
    }

    let filtered = products.filter(p =>
        Math.round(p.price * 80) <= limit
    );

    showProducts(filtered);
}

loadProducts();