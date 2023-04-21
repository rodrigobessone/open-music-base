import { products } from "./productsData.js";
import { renderItems } from "./render.js";

export function filterButtons() {
    const allButtons = document.querySelectorAll(".div__buttons-button");
    let filteredItems = []
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = parseInt(button.dataset.category)
            console.log(category)
            if (category === 0) {
                filteredItems = products
                renderItems(filteredItems)

            } else {
                filteredItems = products.filter((product) => {
                    return product.category === category
                })
                renderItems(filteredItems)

            }
        })
    })
}

export function filterRange(array) {
    const rangeInput = document.querySelector(".div__filter-input");
    const spanRange = document.querySelector(".div__filter-span")
    rangeInput.value = 240
    rangeInput.addEventListener("input", function () {
        const maximumValue = parseInt(rangeInput.value).toFixed(2)
        spanRange.textContent = "Até R$" + maximumValue
        const filteredProducts = array.filter(function (value) {
            return value.price <= maximumValue
        })
        renderItems(filteredProducts)
    })
}
