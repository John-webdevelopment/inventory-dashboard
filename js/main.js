import { products } from "./products.js";

import {

    searchProducts,

    filterProductsByCategory

} from "./inventoryUtils.js";

import {

    displayProducts,

    updateSummary

} from "./display.js";

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const searchBtn = document.getElementById("searchBtn");

const resetBtn = document.getElementById("resetBtn");

function refreshDashboard(){

    let filteredProducts = filterProductsByCategory(

        products,

        categoryFilter.value

    );

    filteredProducts = searchProducts(

        filteredProducts,

        searchInput.value

    );

    displayProducts(filteredProducts);

    updateSummary(filteredProducts);

}

displayProducts(products);

updateSummary(products);

searchBtn.addEventListener("click", refreshDashboard);

categoryFilter.addEventListener("change", refreshDashboard);

searchInput.addEventListener("keyup", event => {

    if(event.key === "Enter"){

        refreshDashboard();

    }

});

resetBtn.addEventListener("click", () => {

    searchInput.value = "";

    categoryFilter.value = "All";

    displayProducts(products);

    updateSummary(products);

});
