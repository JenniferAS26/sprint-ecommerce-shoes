const API = 'http://localhost:3000/products';

let shopping = document.querySelector('#header__cart-avatar');

const getData = async (id) => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const cart = document.createElement("div");
        cart.innerHTML = `
        <div class="header__cart-avatar">
        <div class="header__cart">
          <div class="header__cart--notification">0</div>
          <img src="./images/icon-cart.svg" alt="">
        </div>
        <img class="header__avatar" src="./images/image-avatar.png" alt="">
      </div>`;
      cart.append(cart);
    } catch (error){
       console.log(err);
    }
};
