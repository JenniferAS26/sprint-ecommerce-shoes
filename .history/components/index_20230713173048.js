const shoppingContent = document.getElementById('shoppingContent');

products.forEach((product) => {
    const  content = document.createElement('div');
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.Name}</h3>
      <p>${product.price} $</p>
    `;
    shoppingC
    // const content = element.innerHTML;
});