import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Detail = async () => {
  const id = getHash();
  const product = await getData(id);
  const view = `
    <section class="gallery">
      <div class="gallery__image-container">
        <button class="gallery__previuos">
          <img src="../assets/images/icon-previous.svg" alt="previus icon">
        </button>	
        <button class="gallery__next">
          <img src="../assets/images/icon-next.svg" alt="next icon">
        </button>
      </div>
      <div class="gallery__thumbnails">
        <img id="thumbnail-1" class="gallery__thumbnail" src="${product.thumbnails[0]}" alt="thumbnail">
        <img id="thumbnail-2" class="gallery__thumbnail" src="${product.thumbnails[1]}" alt="thumbnail">
        <img id="thumbnail-3" class="gallery__thumbnail" src="${product.thumbnails[2]}" alt="thumbnail">
        <img id="thumbnail-4" class="gallery__thumbnail" src="${product.thumbnails[3]}" alt="thumbnail">
      </div>
    </section>
    <section class="product-details">
      <span class="product-details__company">${product.brand}</span>
      <h1 class="product-details__title">${product.name}</h1>
      <p class="product-details__description">${product.description}</p>
      <div class="product-details__prices">
        <p class="product-details__current">$${product.price}.00 <span class="product-details__discount">50%</span> </p>
        <span class="product-details__last">$${product.price * 2}.00</span>
      </div>
      <div class="product-details__product-quantity">
        <div class="quantity">
          <button class="minus-quantity" type="button">
            <img  src="../assets/images/icon-minus.svg" alt="minus symbol">
          </button>
          <span class="quantity__number">0</span>
          <button class="plus-quantity" type="button">
            <img src="../assets/images/icon-plus.svg" alt="plus symbol">
          </button>
        </div>
        <button type="button" class="product-details__button">
          <img src="../assets/images/icon-cart-white.svg" alt="cart icon">
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  `
  return view;
}

export default Detail;