import getData from "../utils/getData";

const Home = async () => {
  const products = await getData();
  const view = `
    <div class="card-container" style="display: flex; flex-wrap: wrap;">
      ${products.map(product => `
          <div class="card">
            <a href="#/${product.id}">
              <img src="${product.images[0]}" alt="product image" style="width: 250px" />
              <h3>${product.name}</h3>
              <span>$${product.price}</span>
            </a> 
          </div>
      `).join('')}
    </div>
  `;
  return view;
}

export default Home;