const api = 'http://localhost:3000/products';

let shopping = document.querySelector('header__cart-avatar');

const getData = async (id) => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const cart = document.createElement("div");
        cart.innerHTML = `
        `
    }
}