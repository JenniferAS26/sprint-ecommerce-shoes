// Open/Close Menu
const toggleMenu = () => (document.body.classList.toggle("open")); // add a new class

// Cart counter
let spanCount = document.querySelector('.quantity-product');
let quantityProduct = 0;

const addCounter = () => {
    quantityProduct++;
    spanCount.textContent = quantityProduct;
}

const removeCounter = () => {
    quantityProduct--;
    if (quantityProduct >= 0) {
        spanCount.textContent = quantityProduct;
    } else {
        spanCount.textContent = 0;
    }
}
