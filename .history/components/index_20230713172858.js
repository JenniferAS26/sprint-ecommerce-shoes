const shoppingContent = document.getElementById('shoppingContent');

products.forEach((product) => {
    const  content = document.createElement('div');
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${pro}</h3>
    `;
    // const content = element.innerHTML;
});