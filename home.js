const api = 'http://localhost:3000/products';

const getData = async (id) => {
  const apiUrl = id ? `${api}/${id}` : api;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

const homeSection = async () => {
  const products = await getData();
  const homeContainer = document.querySelector('.home-container');
  homeContainer.innerHTML = '';

  const shopContainer = document.createElement('div');
  shopContainer.className = 'shop__container grid';

  products.forEach(product => {
    const shopItems = document.createElement('div');
    shopItems.className = 'shop__items grid';

    const link = document.createElement('a');
    link.href = `#/${product.id}`;
    link.className = 'shop__link button-details';

    const shopContent = document.createElement('div');
    shopContent.className = 'shop__content';

    const img = document.createElement('img');
    img.src = product.images[0];
    img.alt = product.name;
    img.className = 'shop__img';

    const shopPrices = document.createElement('div');
    shopPrices.className = 'shop__prices';

    const title = document.createElement('h3');
    title.className = 'shop__title';
    title.textContent = product.name;

    const price = document.createElement('span');
    price.className = 'shop__price';
    price.textContent = `$${product.price}.00`;

    shopPrices.appendChild(title);
    shopPrices.appendChild(price);

    shopContent.appendChild(img);
    shopContent.appendChild(shopPrices);

    link.appendChild(shopContent);

    shopItems.appendChild(link);
    shopContainer.appendChild(shopItems);
  });

  homeContainer.appendChild(shopContainer);

  const redirectToProductDetails = (productId) => {
    const url = `index.html?id=${productId}`;
    window.location.href = url;
  };

  homeContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.button-details');
    if (target) {
      event.preventDefault();
      const href = target.getAttribute('href');
      const productId = href ? href.split('/')[1] : null;
      if (productId) {
        redirectToProductDetails(productId);
      }
    }
  });
};

const drawProductModal = () => {
  orderContainer.innerHTML = `
        <div class="cart-modal__detail-container">
          <img class="thumbnail-image" src="${data.images[0]}" alt="thumbnail" style="width: 65px; height: 65px;">
          <div>
            <p class="cart-modal__product">${data.name}..</p>
            <p class="cart-modal__price">$${data.price}.00 x${lastValue} <span>$${lastValue * data.price}.00</span></p>
          </div>
          <img class="cart-modal__delete" src="./assets/images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>
      `;
      deleteProduct();
      let priceModal = document.querySelector('.cart-modal__price');
      priceModal.innerHTML = `${data.price} x${lastValue} <span>$${lastValue * 125}.00</span>`;
};


// document.addEventListener('DOMContentLoaded', () => {
//   // Verificar si hay datos de carrito en el almacenamiento local y cargarlos si existen
//   const cartData = localStorage.getItem('cartData');
//   if (cartData) {
//     const parsedCartData = JSON.parse(cartData);
//     // Cargar los datos del carrito en la interfaz gráfica
//     // ...
//   }

//   // Obtener referencia al elemento del carrito
//   const cartButton = document.querySelector('.header__cart');
//   const cartNotification = document.querySelector('.header__cart--counter');

//   // Función para manejar el evento click del carrito
//   const handleCartClick = () => {
//     // Realizar las acciones correspondientes al hacer clic en el carrito
//     // ...
//   };

//   // Agregar el evento click al botón del carrito
//   cartButton.addEventListener('click', handleCartClick);
// });


homeSection();
