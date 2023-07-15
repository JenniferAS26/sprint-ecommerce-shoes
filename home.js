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
    let buttonDetails = document.createElement('a');
    buttonDetails.className = 'button-details';
    homeContainer.appendChild(buttonDetails);
    
    homeContainer.insertAdjacentHTML(
        'beforeend',
        `
        <section class="shop section container">
          <div class="shop__container grid">
            ${products.map(product => `
              <div class="shop__items grid">
                <a href="#/${product.id}" class="shop__link button-details">
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
        </section>`
    );
    const redirectToProductDetails = (productId) => {
        const url = `index.html?id=${productId}`;
        window.location.hash = url;
        console.log("Aqui estoy" +  url);
    }
    
    const buttonId = document.querySelectorAll('.button-details');
    buttonId.addEventListener('click', () => {
        console.log('Aqui estoy')
        redirectToProductDetails(productoId);
    });
}





homeSection();