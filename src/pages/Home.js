import getData from "../utils/getData";

const Home = async () => {
  const products = await getData();
  const view = `
  <section class="shop section container">
    <h2 class="breadcrumb__title">Collections</h2>
    <div class="shop__container grid">
      ${products.map(product => `
      <div class="shop__items grid">
      <div class="shop__content">
          <div class="shop__tag">New</div>
          <img src=${product.images[0]} alt="" class="shop__img">
          <h3 class="shop__title">${product.name}</h3>
          <span class="shop__subtitle">Accessory</span>

          <div class="shop__prices">
              <span class="shop__price">$${product.price}</span>
          </div>

          <a href="#/${product.id}" class="button shop__button">
              <i class="bx bx-cart-alt shop__icon"></i>
          </a>

      </div>
      </div>
      `).join('')}
      
      </div>
    </section>
  `;
  return view;
}

export default Home;