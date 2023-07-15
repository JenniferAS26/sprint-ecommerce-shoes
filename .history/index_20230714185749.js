const api = 'http://localhost:3000/products';

const getData = async (id) => {
  const apiUrl = id ? `${api}/${id}` : api;
  const response = await fetch(apiUrl);
  const data = response.json();
  return data;
}

const homeSection = async () => {
  const products = await getData();
  let homeContainer = document.querySelector('.home-container');
  homeContainer.insertAdjacentHTML(
    'beforeend',
    `
      <section class="shop section container">
        <div class="shop__container grid">
          ${products.map(product => `
            <div class="shop__items grid">
              <a href="#main-content/${product.id}" class="shop__link">
                <div class="shop__content">
                    <img src=${product.images[0]} alt="${product.name}" class="shop__img">
                    <div class="shop__prices">
                      <h3 class="shop__title">${product.name}</h3>
                      <span class="shop__price">$${product.price}.00</span>
                    </div>
                </div>
              </a>
            </div>
          `).join('')}
        </div>
      </section>
  `
  );
}
const getHash = () => location.hash.slice(1).split("/")[1] || '/';
const detailSection = async () => {
  const id = Number.parseInt(getHash(), 10);
  console.log(id);
  const data = await getData(id);
  // Content from api
  const company = document.querySelector('.product-details__company');
  const title = document.querySelector('.product-details__title');
  const description = document.querySelector('.product-details__description');
  const prices =  document.querySelector('.product-details__prices');
  prices.innerHTML = `
    <p class="product-details__current">$${data.price}.00 <span class="product-details__discount">50%</span> </p>
    <span class="product-details__last">$${data.price * 2}.00</span>`
  company.textContent = data.brand;
  title.textContent = data.name;
  description.textContent = data.description;

  // Buttons Functionality
  const galleryImage = document.querySelector('.image');
  const previousGalleryButton = document.querySelector('.gallery__previuos');
  const nextGalleryButton = document.querySelector('.gallery__next');
  galleryImage.src = data.images[0];

  const changeNextImage = (imgContainer) => {
    if (imgIndicator === 3) {
      imgIndicator = 0;
    } else {
      imgIndicator++;
    }
    // imgContainer.style.backgroundImage = `url('../assets/images/image-product-${imgIndicator}.jpg')`;
    imgContainer.innerHTML = `<img src="${data.images[imgIndicator]}" alt="product">`;
  
  }
  
  const changePreviousImage = (imgContainer) => {
    if (imgIndicator === 0) {
      imgIndicator = 3;
    } else {
      imgIndicator--;
    }
    imgContainer.innerHTML = `<img src="${data.images[imgIndicator]}" alt="product">`;
  }

  previousGalleryButton.addEventListener('click', () => {
    changePreviousImage(imageContainer);
  });
  nextGalleryButton.addEventListener('click', () => {
    changeNextImage(imageContainer);
  });

  const thumb1 = document.querySelector('#thumbnail-1');
  const thumb2 = document.querySelector('#thumbnail-2');
  const thumb3 = document.querySelector('#thumbnail-3');
  const thumb4 = document.querySelector('#thumbnail-4');

  thumb1.src = data.thumbnails[0]
  thumb2.src = data.thumbnails[1]
  thumb3.src = data.thumbnails[2]
  thumb4.src = data.thumbnails[3]

  let thumbnails = document.querySelectorAll('.gallery__thumbnail');
  thumbnails = [...thumbnails] // transform from nodeList to array
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', e => {
      const stringId = e.target.id;
      imageContainer.innerHTML = `<img src="${data.thumbnails[stringId.slice(-1) - 1]}" alt="product">`;
    })
  });

  const modalImageGallery = document.querySelector('.modal-image');
  modalImageGallery.src = data.images[0];
  const thumbModal1 = document.querySelector('#modal-thumbnail-1');
  const thumbModal2 = document.querySelector('#modal-thumbnail-2');
  const thumbModal3 = document.querySelector('#modal-thumbnail-3');
  const thumbModal4 = document.querySelector('#modal-thumbnail-4');

  thumbModal1.src = data.thumbnails[0]
  thumbModal2.src = data.thumbnails[1]
  thumbModal3.src = data.thumbnails[2]
  thumbModal4.src = data.thumbnails[3]
  
  const imageModalContainer = document.querySelector('.modal-gallery__image');
  let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
  modalThumbnails = [...modalThumbnails];
  modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', e => {
      const stringId = e.target.id;
      imageModalContainer.innerHTML = `<img src="${data.thumbnails[stringId.slice(-1) - 1]}" alt="product">`;

    });
  });

  const previousModalGalleryButton = document.querySelector('.modal-gallery__previuos');
  const nextModalGalleryButton = document.querySelector('.modal-gallery__next');
  previousModalGalleryButton.addEventListener('click', () => {
    changePreviousImage(imageModalContainer);
  });
  nextModalGalleryButton.addEventListener('click', () => {
    changeNextImage(imageModalContainer);
  });

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

  const addToCartButton = document.querySelector('.product-details__button');
  let cartNotification = document.querySelector('.header__cart--counter');
  let lastValue = Number.parseInt(cartNotification.textContent, 10);

  addToCartButton.addEventListener('click', () => {
    lastValue += quantityProduct;
    cartNotification.textContent = lastValue;
    cartNotification.style.display = 'block';
    drawProductModal();
  });

  // show modal cart shopping
  const cartIcon = document.querySelector('.header__cart');
  const cartModal = document.querySelector('.cart-modal');
  // let priceModal = document.querySelector('.cart-modal__price');
  const orderContainer = document.querySelector('.cart-modal__checkout-container');

  cartIcon.addEventListener('click', () => {
    cartModal.classList.toggle('show');
    if (lastValue === 0) {
      orderContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
    } else {
      drawProductModal();
    }
  });

  // Delete Products Shopping Cart
  const deleteProduct = () => {
    const deleteProductCart = document.querySelector('.cart-modal__delete');
    deleteProductCart.addEventListener('click', () => {
      orderContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
      lastValue = 0;
      cartNotification.textContent = lastValue;
    });
  
    const modalCheckoutButton = document.querySelector('.cart-modal__checkout');
    const modalCheckout = document.querySelector('.modal-checkout__background');
    modalCheckoutButton.addEventListener('click', () => {
      console.log('click checkout');
      modalCheckout.style.display = 'grid';
    });
    

}

// Open/Close Navbar Modal
const burgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeNavbar = document.querySelector('.modal-navbar__close-icon');

burgerMenu.addEventListener('click', () => {
  modalNavbar.classList.toggle('show');
});
closeNavbar.addEventListener('click', () => {
  modalNavbar.classList.remove('show');
});

// Cart counter
let spanCount = document.querySelector('.quantity__number');
let addCounterBtn = document.querySelector('.plus-quantity');
let minusCounterBtn = document.querySelector('.minus-quantity');
let quantityProduct = 0;

addCounterBtn.addEventListener('click', () => {
  quantityProduct++;
  spanCount.textContent = quantityProduct;
});

minusCounterBtn.addEventListener('click', () => {
  quantityProduct--;
  if (quantityProduct <= 0) {
    spanCount.textContent = 0;
  } else {
    spanCount.textContent = quantityProduct;
  }
});

// Add counter to notification
// const addToCartButton = document.querySelector('.product-details__button');
// let cartNotification = document.querySelector('.header__cart--counter');
// let lastValue = Number.parseInt(cartNotification.textContent, 10);

// addToCartButton.addEventListener('click', () => {
//   lastValue += quantityProduct;
//   cartNotification.textContent = lastValue;
//   cartNotification.style.display = 'block';
//   drawProductModal();
// });

// // show modal cart shopping
// const cartIcon = document.querySelector('.header__cart');
// const cartModal = document.querySelector('.cart-modal');
// // let priceModal = document.querySelector('.cart-modal__price');
// const orderContainer = document.querySelector('.cart-modal__checkout-container');

// cartIcon.addEventListener('click', () => {
//   cartModal.classList.toggle('show');
//   if (lastValue === 0) {
//     orderContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
//   } else {
//     drawProductModal();
//   }
// });

// // Delete Products Shopping Cart
// const deleteProduct = () => {
//   const deleteProductCart = document.querySelector('.cart-modal__delete');
//   deleteProductCart.addEventListener('click', () => {
//     orderContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
//     lastValue = 0;
//     cartNotification.textContent = lastValue;
//   });


}



// Change images with previous and next buttons
const imageContainer = document.querySelector('.gallery__image');
const previousGalleryButton = document.querySelector('.gallery__previuos');
const nextGalleryButton = document.querySelector('.gallery__next');
let imgIndicator = 1;

previousGalleryButton.addEventListener('click', () => {
  changePreviousImage(imageContainer);
});
nextGalleryButton.addEventListener('click', () => {
  changeNextImage(imageContainer);
});


// Show Modal Gallery (click in principal image)
const modalGallery = document.querySelector('.modal-gallery__background');
const closeModalGalleryButton = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', () => {
  if (window.innerWidth >= 1115) {
    modalGallery.style.display = 'grid';
  }
});

closeModalGalleryButton.addEventListener('click', () => {
  modalGallery.style.display = 'none';
});

// Change images with thumbnails
// let thumbnails = document.querySelectorAll('.gallery__thumbnail');
// thumbnails = [...thumbnails] // transform from nodeList to array
// thumbnails.forEach(thumbnail => {
//   thumbnail.addEventListener('click', e => {
//     const stringId = e.target.id;
//     console.log(stringId.slice(-1));
//     imageContainer.innerHTML = `<img src="./assets/images/image-product-${stringId.slice(-1)}.jpg" alt="product">`;
//   })
// });

// Change images in Modal with thumbnails 
// const imageModalContainer = document.querySelector('.modal-gallery__image');
// let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
// modalThumbnails = [...modalThumbnails];
// modalThumbnails.forEach(modalThumbnail => {
//   modalThumbnail.addEventListener('click', e => {
//     const stringId = e.target.id;
//     imageModalContainer.innerHTML = `<img src="./assets/images/image-product-${stringId.slice(-1)}.jpg" alt="product">`;

//   });
// });

// Change principal image with previous/next buttons in Modal
// const previousModalGalleryButton = document.querySelector('.modal-gallery__previuos');
// const nextModalGalleryButton = document.querySelector('.modal-gallery__next');
// previousModalGalleryButton.addEventListener('click', () => {
//   changePreviousImage(imageModalContainer);
// });
// nextModalGalleryButton.addEventListener('click', () => {
//   changeNextImage(imageModalContainer);
// });

// Auxiliar Functions
const drawProductModal = () => {
  orderContainer.innerHTML = `
        <div class="cart-modal__detail-container">
          <img class="thumbnail-image" src="./assets/images/image-product-1-thumbnail.jpg" alt="thumbnail">
          <div>
            <p class="cart-modal__product">Autumn Limited Edition..</p>
            <p class="cart-modal__price">$125.00 x${lastValue} <span>$${lastValue * 375}.00</span></p>
          </div>
          <img class="cart-modal__delete" src="./assets/images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>
      `;
      deleteProduct();
      let priceModal = document.querySelector('.cart-modal__price');
      priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue * 125}.00</span>`;
};


// const changeNextImage = (imgContainer) => {
//   if (imgIndicator === 4) {
//     imgIndicator = 1;
//   } else {
//     imgIndicator++;
//   }
//   // imgContainer.style.backgroundImage = `url('../assets/images/image-product-${imgIndicator}.jpg')`;
//   imgContainer.innerHTML = `<img src="${data.images[imgIndicator]}" alt="product">`;

// }

// const changePreviousImage = (imgContainer) => {
//   if (imgIndicator === 1) {
//     imgIndicator = 4;
//   } else {
//     imgIndicator--;
//   }
//   imgContainer.innerHTML = `<img src="${data.images[imgIndicator]}" alt="product">`;
// }

homeSection();
detailSection();