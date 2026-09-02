import {

    getStockStatus,

    calculateTotalInventoryValue,

    countLowStockProducts,

    countOutOfStockProducts

} from "./inventoryUtils.js";

const icons = {

    Accessories:"🖱️",

    Displays:"🖥️",

    Storage:"💾",

    Components:"🧩"

};

const productList = document.getElementById("productList");

const totalInventoryValue = document.getElementById("totalInventoryValue");

const lowStockCount = document.getElementById("lowStockCount");

const outOfStockCount = document.getElementById("outOfStockCount");

const noResultsMessage = document.getElementById("noResultsMessage");

export function displayProducts(products){

    productList.innerHTML = "";

    if(products.length === 0){

        noResultsMessage.textContent = "No products found";

        return;

    }

    noResultsMessage.textContent = "";

    products.forEach(product => {

        const {

            name,

            category,

            price,

            stock

        } = product;

        const status = getStockStatus(stock);

        let statusClass = "in-stock";

        if(status === "Low Stock"){

            statusClass = "low-stock";

        }

        if(status === "Out of Stock"){

            statusClass = "out-stock";

        }

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="icon">${icons[category]}</div>

            <h2>${name}</h2>

            <p><strong>Category:</strong> ${category}</p>

            <p><strong>Price:</strong> ₱${price.toLocaleString()}</p>

            <p><strong>Stock:</strong> ${stock}</p>

            <span class="status ${statusClass}">${status}</span>

        `;

        productList.appendChild(card);

    });

}

export function updateSummary(products){

    totalInventoryValue.textContent =

        "₱" + calculateTotalInventoryValue(products).toLocaleString();

    lowStockCount.textContent =

        countLowStockProducts(products);

    outOfStockCount.textContent =

        countOutOfStockProducts(products);

}
