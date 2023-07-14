const shoppingContent = document.getElementById('shoppingContent');

products.forEach((product) => {
    const  content = document.createElement('div');
    content.innerHTML = `
      <img src="${product.img}">
      
    `;
    // const content = element.innerHTML;
});