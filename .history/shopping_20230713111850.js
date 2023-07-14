const api = 'http://localhost:3000/products';

let shopping = document.querySelector('header__cart-avatar');

const getData = async (id) => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const cart = document.createElement("div");
        cart.innerHTML = '\n        <div class="header__cart-avatar">\n        <div class="header__cart">\n          <div class="header__cart--notification">0</div>\n          <img src="' + data.url + '" alt="">\n        </div>\n        <img class="header__avatar" src="./images/image-avatar.png" alt="">\n      </div>';
      cart.append(cart);
    } catch (error){
       console.log(err);
    }
};

api();