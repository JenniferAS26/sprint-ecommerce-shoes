const shoppingContent = document.getElementById('shoppingContent');

products.forEach((product) => {
    const  content = document.createElement('div');
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.Name}</h3>
      <p>
    `;
    // const content = element.innerHTML;
});